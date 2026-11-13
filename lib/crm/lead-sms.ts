import { createHmac, randomBytes } from "crypto"

// 문의 접수 문자 알림(대표 11/10: 정문규 본부장 휴대폰으로). 위즈더플래닝 명의 솔라피 계정으로 보낸다.
// 받는 번호는 코드에 적지 않고 환경 변수에 둔다(개인 번호).
// 키가 없으면 조용히 건너뛴다. 문자 실패가 문의 접수를 막지 않는다.
//
// 환경 변수 (Vercel)
//   SOLAPI_API_KEY / SOLAPI_API_SECRET  솔라피 → 개발/연동 → API Key
//   SMS_FROM       솔라피에 등록·승인된 발신번호(예: 16700704). 등록 전에는 문자가 나가지 않는다
//   LEAD_SMS_TO    받는 번호. 여러 명이면 쉼표로(예: 01012345678,01098765432)

function conf() {
  const key = process.env.SOLAPI_API_KEY
  const secret = process.env.SOLAPI_API_SECRET
  const from = process.env.SMS_FROM?.replace(/\D/g, "")
  const to = (process.env.LEAD_SMS_TO || "")
    .split(",")
    .map((s) => s.replace(/\D/g, ""))
    .filter((s) => s.length >= 9)
  if (!key || !secret || !from || to.length === 0) return null
  return { key, secret, from, to }
}

export function smsConfigured() {
  return conf() !== null
}

function authHeader(key: string, secret: string) {
  const date = new Date().toISOString()
  const salt = randomBytes(16).toString("hex")
  const signature = createHmac("sha256", secret).update(date + salt).digest("hex")
  return `HMAC-SHA256 apiKey=${key}, date=${date}, salt=${salt}, signature=${signature}`
}

/** 문자 길이를 솔라피 기준(한글 2바이트, 영문·숫자 1바이트)으로 센다 */
function smsBytes(t: string) {
  let n = 0
  for (const ch of t) n += ch.charCodeAt(0) > 127 ? 2 : 1
  return n
}

/** 장문(LMS) 한도 2,000바이트 안으로 자른다. 넘치면 끝에 안내를 붙인다 */
function fitLms(t: string, max = 1990) {
  if (smsBytes(t) <= max) return t
  const tail = "\n…(문자 한도라 이하 생략, 전문은 접수 메일에 있음)"
  const room = max - smsBytes(tail)
  let out = "", n = 0
  for (const ch of t) {
    const w = ch.charCodeAt(0) > 127 ? 2 : 1
    if (n + w > room) break
    out += ch
    n += w
  }
  return out + tail
}

/**
 * 문자 본문. 90바이트를 넘으면 솔라피가 장문(LMS)으로 바꿔 보낸다.
 * 11-13 대표 「본부장이 링크를 눌러도 상세 내역을 못 본다 → 문자에 전부 싣기」: 문의 본문을 자르지 않고 그대로 싣는다.
 * 받는 사람은 접수 메일도 관리 화면도 못 보니 문자 한 통으로 다 읽히게 한다. 관리 화면 주소는 그 화면이 실제로 열릴 때(adminReady)만 넣는다.
 */
export function leadSmsText(l: {
  company?: string | null
  name?: string | null
  phone?: string | null
  email?: string | null
  orgType?: string | null
  budget?: string | null
  form?: string | null
  message?: string | null
  adminReady?: boolean
}) {
  const who = l.company && l.name && !l.name.includes(l.company) ? `${l.company} · ${l.name}` : l.name || l.company || "이름 없음"
  const body = (l.message || "").trim()
  // 본문에 예산 줄이 이미 있으면 따로 적지 않는다
  const budgetLine = l.budget && !body.includes(l.budget) ? `예산: ${l.budget}` : ""
  const head = [
    "[위즈더플래닝 새 문의]",
    `${who}${l.orgType ? ` (${l.orgType})` : ""}`,
    l.phone ? `연락처: ${l.phone}` : "",
    l.email ? `메일: ${l.email}` : "",
    l.form ? `폼: ${l.form}` : "",
    budgetLine,
  ].filter(Boolean)
  const tail = l.adminReady ? ["", "목록 https://wiztheplanning.com/admin/leads"] : []
  return fitLms([...head, body ? "─────" : "", body, ...tail].filter((x, i, arr) => x !== "" || (i > 0 && arr[i - 1] !== "")).join("\n"))
}

export async function sendLeadSms(text: string): Promise<boolean> {
  const c = conf()
  if (!c) return false
  try {
    const res = await fetch("https://api.solapi.com/messages/v4/send-many/detail", {
      method: "POST",
      headers: { Authorization: authHeader(c.key, c.secret), "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: c.to.map((to) => ({ to, from: c.from, text, subject: "위즈더플래닝 새 문의" })),
      }),
    })
    if (!res.ok) throw new Error(`${res.status} ${(await res.text()).slice(0, 200)}`)
    return true
  } catch (e) {
    console.error("[crm] 문의 문자 발송 실패", e instanceof Error ? e.message : e)
    return false
  }
}
