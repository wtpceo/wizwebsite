// 문의 폼 스팸 판정 (서버 전용. node:dns 를 써서 클라이언트에서는 못 부른다)
//
// 2026-11-04 15:11 KST 부터 /api/contact 로 직접 쏘는 봇이 들어왔다. 모양은
// 이름 무작위 영문(ALntmsDQJvgsfAXFz), 미국식 10자리 전화, 모르는 미국 회사 메일,
// 가게명 "Xxxx LLC", 본문 무작위 문자열. 같은 초에 폼 셋을 한꺼번에 넣고
// 도착 페이지가 "/", 첫 방문 시각이 제출 시각과 같다(페이지를 보지 않고 API 로 쏜다).
//
// 장치는 네 겹이다. 하나만으로는 뚫리고, 넷을 다 피하려면 진짜 사람처럼 굴어야 한다.
//   1) 허니팟: 숨은 칸에 값이 있으면 스팸
//   2) 시간: 폼을 연 뒤 3초 안에 제출하면 스팸. 페이지를 거치지 않은 요청은 이 값이 없다
//   3) 모양: 이름·상호·본문이 무작위 문자열이면 스팸
//   4) IP 횟수: 10분에 3건 넘으면 429
// 스팸으로 판정하면 메일을 보내지 않고 로그만 남긴 뒤 200(성공과 같은 응답)을 준다.
// 봇이 거절당한 걸 알면 모양을 바꿔 다시 오기 때문이다.
//
// 진짜 문의를 막지 않는 게 먼저다. 그래서 '형식 오류'(전화번호 자릿수, 필수값 누락)는
// 스팸이 아니라 400 과 안내 문구로 돌려준다. 사람이 오타를 냈을 때 조용히 사라지면 안 된다.

import { promises as dns } from "node:dns"
import { HONEYPOT_FIELD, OPENED_AT_FIELD, MIN_FILL_MS } from "@/lib/form-guard-fields"

export type ContactInput = {
  name: string
  phone: string
  email: string
  storeName: string
  message: string
  language: string
  budget: string
  honeypot: string
  openedAt: number | null
}

const LIMITS = { name: 60, phone: 40, email: 160, storeName: 120, message: 6000, language: 80, budget: 60 }

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : ""
}

/** JSON 본문이나 FormData 값을 한 모양으로 맞춘다. 길이도 여기서 자른다 */
export function normalizeContactInput(raw: Record<string, unknown>): ContactInput {
  const openedRaw = raw[OPENED_AT_FIELD]
  const openedNum = typeof openedRaw === "number" ? openedRaw : Number(openedRaw)
  return {
    name: str(raw.name, LIMITS.name),
    phone: str(raw.phone, LIMITS.phone),
    email: str(raw.email, LIMITS.email),
    storeName: str(raw.storeName, LIMITS.storeName),
    message: str(raw.message, LIMITS.message),
    language: str(raw.language, LIMITS.language),
    budget: str(raw.budget, LIMITS.budget),
    honeypot: str(raw[HONEYPOT_FIELD], 200),
    openedAt: Number.isFinite(openedNum) && openedNum > 0 ? openedNum : null,
  }
}

// ── 폼 종류 ────────────────────────────────────────────────────────────────
// language 태그로 어느 폼에서 왔는지 안다. 폼마다 필수값과 전화번호 기준이 다르다.

export type FormKind = "default" | "business" | "influencer" | "en-b2b" | "locale" | "luke"

export function formKindOf(language: string): FormKind {
  if (language.startsWith("기업 제안 요청")) return "business"
  if (language.startsWith("IMC·인플루언서 섭외")) return "influencer"
  // 11-14 외국어 홈(중국어·베트남어)도 기업 문의라 영문 기업 폼과 같은 기준(이메일 필수, 전화 선택)
  if (language.startsWith("English 문의 (B2B)") || language.startsWith("中文 문의 (B2B)") || language.startsWith("Tiếng Việt 문의 (B2B)")) return "en-b2b"
  if (language === "English 문의" || language === "中文 문의" || language === "Tiếng Việt 문의") return "locale"
  if (language.startsWith("루크코리아 제휴")) return "luke"
  return "default"
}

/** 외국인 대상 폼. 전화번호를 한국 형식으로 강제하지 않는다 */
function isForeignForm(kind: FormKind): boolean {
  return kind === "en-b2b" || kind === "locale"
}

// ── 형식 검사 (사람에게 돌려줄 안내) ───────────────────────────────────────

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * 전화번호. 한국 번호(010·02·0XX·15XX/16XX/18XX·050 안심번호) 또는 +국제 형식.
 * relaxed 면 숫자 7~15자리면 받는다(외국인 폼). 봇의 미국식 10자리는 한국 폼에서 걸린다.
 */
export function isPhoneOk(phone: string, relaxed: boolean): boolean {
  const compact = phone.replace(/[\s\-.()]/g, "")
  if (!compact) return true // 비어 있으면 필수값 검사가 따로 잡는다
  if (/^\+\d{8,15}$/.test(compact)) return true
  if (!/^\d+$/.test(compact)) return false
  if (relaxed) return compact.length >= 7 && compact.length <= 15
  if (/^0\d{8,11}$/.test(compact)) return true // 02·0XX·010·050X
  if (/^1[5-9]\d{6}$/.test(compact)) return true // 1588-xxxx 같은 대표번호
  return false
}

/** 필수값·형식이 어긋나면 안내 문구를, 괜찮으면 null 을 돌려준다 */
export function validateContact(input: ContactInput): string | null {
  const kind = formKindOf(input.language)
  const need: (keyof ContactInput)[] =
    kind === "business" || kind === "en-b2b"
      ? ["name", "email", "storeName", "message"]
      : kind === "influencer"
        ? ["name", "email", "storeName"]
        : kind === "luke"
          ? ["name", "phone", "storeName"]
          : ["name", "phone"]
  const label: Record<string, string> = {
    name: "이름", email: "이메일", storeName: "회사명(상호)", message: "문의 내용", phone: "연락처",
  }
  const missing = need.filter((k) => !input[k])
  if (missing.length) {
    return isForeignForm(kind)
      ? `Please fill in: ${missing.join(", ")}`
      : `${missing.map((k) => label[k]).join("·")}을(를) 입력해 주세요`
  }
  if (input.email && !EMAIL_RE.test(input.email)) {
    if (need.includes("email")) {
      return isForeignForm(kind) ? "Please enter a valid email address" : "이메일 형식을 확인해 주세요"
    }
    input.email = "" // 선택 항목이면 비우고 진행한다 (자동 회신만 안 나간다)
  }
  if (input.phone && !isPhoneOk(input.phone, isForeignForm(kind))) {
    return isForeignForm(kind)
      ? "Please enter a valid phone number (with country code if outside Korea)"
      : "연락처 형식을 확인해 주세요 (예: 010-0000-0000)"
  }
  return null
}

// ── 스팸 판정 ──────────────────────────────────────────────────────────────

/** 라틴 문자 단어가 사람 이름·상호로 보이지 않는 무작위 문자열인가 */
export function looksGibberish(text: string): boolean {
  // 한글·한자·가나 등이 섞이면 사람이 쓴 것으로 본다(봇은 전부 ASCII 였다)
  if (/[ᄀ-ᇿ㄰-㆏가-힯぀-ヿ一-鿿]/.test(text)) return false
  // 발음 구별 기호를 떼서 베트남어·유럽 이름도 같은 기준으로 본다
  const plain = text.normalize("NFD").replace(/[̀-ͯ]/g, "")
  const words = plain.split(/[^A-Za-z]+/).filter(Boolean)
  for (const w of words) {
    if (w.length < 5) continue
    const lower = w.toLowerCase()
    const vowelRatio = (lower.match(/[aeiouy]/g) ?? []).length / w.length
    // 단어 안에서 소문자→대문자로 튀는 횟수. McDonald·DeAndre 는 1번, WizThePlanning 같은 브랜드는 2번.
    // 무작위 문자열은 3번 이상이거나, 2번이면서 모음이 거의 없다(ALntmsDQJvgsfAXFz: 2번, 모음 2/17)
    const jumps = (w.match(/[a-z][A-Z]/g) ?? []).length
    if (jumps >= 3 || (jumps === 2 && vowelRatio < 0.2)) return true
    if (w.length >= 6 && !/[aeiouy]/.test(lower)) return true // 모음이 하나도 없는 긴 단어
    if (/[^aeiouy]{7,}/.test(lower)) return true // 자음이 7개 넘게 이어짐
  }
  return false
}

export type SpamVerdict = { spam: boolean; reasons: string[] }

/**
 * 스팸이면 reasons 에 근거를 담는다. 로그에 남길 때는 reasons 와 IP·폼 종류만 쓴다.
 * now 를 넣을 수 있게 한 건 테스트 때문이다.
 */
export function detectSpam(input: ContactInput, now: number = Date.now()): SpamVerdict {
  const reasons: string[] = []
  if (input.honeypot) reasons.push("honeypot")
  if (input.openedAt === null) reasons.push("no-opened-at")
  else if (now - input.openedAt < MIN_FILL_MS) reasons.push(`too-fast:${now - input.openedAt}ms`)
  if (looksGibberish(input.name)) reasons.push("name-gibberish")
  if (looksGibberish(input.storeName)) reasons.push("store-gibberish")
  // 폼은 본문 앞뒤에 줄바꿈 있는 머리말을 붙인다. 공백 없는 한 덩어리 본문은 폼을 거치지 않은 것이다
  if (input.message.length >= 12 && !/\s/.test(input.message)) reasons.push("message-single-token")
  else if (looksGibberish(input.message.split(/\n/)[0] ?? "")) reasons.push("message-gibberish")
  if (/https?:\/\//i.test(input.name) || /https?:\/\//i.test(input.storeName)) reasons.push("url-in-name")
  return { spam: reasons.length > 0, reasons }
}

// ── IP 와 횟수 제한 ────────────────────────────────────────────────────────

export function getClientIp(req: Request): string {
  const h = req.headers
  const fwd = h.get("x-forwarded-for") ?? h.get("x-vercel-forwarded-for")
  const first = fwd?.split(",")[0]?.trim()
  return first || h.get("x-real-ip") || "unknown"
}

export const RATE_LIMIT = { max: 3, windowSec: 600 }

// 인스턴스 안 메모리. Vercel 서버리스는 인스턴스마다 메모리가 달라 이것만으로는 약하다.
// 다만 봇은 같은 초에 여러 건을 쏘므로 같은 인스턴스에 몰릴 때가 많고, 허니팟·시간·모양
// 검사가 앞단에서 먼저 거른다. 인스턴스를 넘어 세려면 Upstash Redis 를 붙인다.
//   환경변수: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN (둘 다 있으면 자동으로 쓴다)
const memory = new Map<string, number[]>()

async function countWithUpstash(key: string): Promise<number | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify([["INCR", key], ["EXPIRE", key, RATE_LIMIT.windowSec, "NX"]]),
      signal: AbortSignal.timeout(2000),
    })
    if (!res.ok) return null
    const json = (await res.json()) as { result?: unknown }[]
    const n = Number(json?.[0]?.result)
    return Number.isFinite(n) ? n : null
  } catch (e) {
    console.warn("[spam-guard] upstash 실패, 메모리 제한으로 대체", e instanceof Error ? e.message : e)
    return null
  }
}

function countInMemory(key: string, now: number): number {
  const windowMs = RATE_LIMIT.windowSec * 1000
  const hits = (memory.get(key) ?? []).filter((t) => now - t < windowMs)
  hits.push(now)
  memory.set(key, hits)
  if (memory.size > 5000) {
    for (const [k, v] of memory) if (!v.some((t) => now - t < windowMs)) memory.delete(k)
  }
  return hits.length
}

/** true 면 제한에 걸렸다(10분에 3건 초과). bucket 은 라우트별로 따로 센다 */
export async function isRateLimited(ip: string, bucket: string, now: number = Date.now()): Promise<boolean> {
  const key = `wtp:rl:${bucket}:${ip}`
  const n = (await countWithUpstash(key)) ?? countInMemory(key, now)
  return n > RATE_LIMIT.max
}

// ── 자동 회신 전 메일 주소 확인 ─────────────────────────────────────────────

/**
 * 형식이 맞고 도메인에 MX 레코드가 있을 때만 true. 봇이 적은 가짜 주소나
 * 오타 도메인으로 우리 이름의 메일이 나가 발신 평판이 깎이는 걸 막는다.
 * DNS 가 3초 안에 답하지 않으면 안전한 쪽(보내지 않음)으로 간다.
 */
export async function emailAcceptsMail(email: string): Promise<boolean> {
  if (!EMAIL_RE.test(email)) return false
  const domain = email.split("@")[1]?.toLowerCase()
  if (!domain) return false
  try {
    const mx = await Promise.race([
      dns.resolveMx(domain),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("mx-timeout")), 3000)),
    ])
    // RFC 7505: exchange "." 은 "메일 안 받음" 선언이다
    return mx.some((r) => r.exchange && r.exchange !== ".")
  } catch {
    return false
  }
}

/** 메일 HTML 에 넣는 값은 전부 여기를 거친다 */
export function escapeHtml(v: unknown, max = 300): string {
  return String(v ?? "")
    .slice(0, max)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
