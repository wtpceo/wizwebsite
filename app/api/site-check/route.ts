import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// 검사 항목 하나의 결과
type CheckStatus = "pass" | "warn" | "fail"
type CheckResult = {
  key: string
  label: string
  status: CheckStatus
  detail: string
  // GEO/SEO 중 무엇에 더 중요한지 (배지 표시용)
  tag: "GEO" | "SEO" | "기술"
  weight: number
}

// URL 정규화 — 사용자가 도메인만 넣어도 동작하게
function normalizeUrl(input: string): string | null {
  let v = input.trim()
  if (!v) return null
  if (!/^https?:\/\//i.test(v)) v = "https://" + v
  try {
    const u = new URL(v)
    if (!/^https?:$/.test(u.protocol)) return null
    // 사설/로컬 대상 차단 (SSRF 방지)
    const host = u.hostname.toLowerCase()
    if (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host === "0.0.0.0" ||
      host.endsWith(".local") ||
      /^10\./.test(host) ||
      /^192\.168\./.test(host) ||
      /^169\.254\./.test(host) ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(host)
    ) {
      return null
    }
    return u.toString()
  } catch {
    return null
  }
}

// ── 동일 IP 남용 방지 (간단한 슬라이딩 윈도 rate limit) ──
// 서버리스 인스턴스 메모리 기반. 콜드스타트/다중 인스턴스에서 완벽하진 않지만
// 한 사용자가 무한정 돌리는 것을 막는 1차 방어선이다. (정교한 제한이 필요하면 Upstash 등 외부 스토어로 교체)
const RATE_LIMIT_MAX = 5 // 허용 횟수
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10분
const ipHits = new Map<string, number[]>()

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for")
  if (xff) return xff.split(",")[0].trim()
  return req.headers.get("x-real-ip") || "unknown"
}

// 읽기 전용 확인 — 초과 시 남은 대기 시간(초)을 반환
function checkRateLimit(ip: string): { limited: boolean; retryAfterSec: number } {
  const now = Date.now()
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (hits.length >= RATE_LIMIT_MAX) {
    const retryAfterSec = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - hits[0])) / 1000)
    return { limited: true, retryAfterSec }
  }
  return { limited: false, retryAfterSec: 0 }
}

// 유효한 진단 1건을 기록 (오래된 항목 정리 포함)
function recordHit(ip: string) {
  const now = Date.now()
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  hits.push(now)
  ipHits.set(ip, hits)
  // 맵이 커지면 만료된 IP 정리 (메모리 누수 방지)
  if (ipHits.size > 5000) {
    for (const [k, v] of ipHits) {
      const fresh = v.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
      if (fresh.length === 0) ipHits.delete(k)
      else ipHits.set(k, fresh)
    }
  }
}

async function fetchWithTimeout(url: string, ms: number, init?: RequestInit) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), ms)
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent": "WizThePlanning-SiteCheck/1.0 (+https://wiztheplanning.com)",
        ...(init?.headers || {}),
      },
    })
  } finally {
    clearTimeout(id)
  }
}

export async function POST(req: Request) {
  // 남용 방지: 동일 IP가 짧은 시간에 너무 많이 돌리면 차단하고 문의로 유도
  const ip = getClientIp(req)
  const rl = checkRateLimit(ip)
  if (rl.limited) {
    const mins = Math.max(1, Math.ceil(rl.retryAfterSec / 60))
    return NextResponse.json(
      {
        error: `무료 진단은 짧은 시간에 여러 번 이용할 수 없습니다. 약 ${mins}분 후 다시 시도해 주세요. 여러 사이트를 한 번에 정밀 진단받고 싶으시면 문의해 주세요.`,
        rateLimited: true,
      },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    )
  }

  let target: string | null = null
  try {
    const body = await req.json()
    target = normalizeUrl(String(body?.url || ""))
  } catch {
    return NextResponse.json({ error: "요청을 읽을 수 없습니다." }, { status: 400 })
  }
  if (!target) {
    return NextResponse.json(
      { error: "올바른 웹사이트 주소를 입력해 주세요. (예: example.com)" },
      { status: 400 }
    )
  }

  // 유효한 주소로 실제 진단을 시작하는 시점에만 1건으로 집계 (오타·잘못된 주소는 미집계)
  recordHit(ip)

  const origin = new URL(target).origin
  const checks: CheckResult[] = []

  // ── 1) 페이지 로드 ──────────────────────────────
  let html = ""
  let started = Date.now()
  let loadMs = 0
  let finalUrl = target
  let isHttps = target.startsWith("https://")
  let xRobotsTag = ""
  try {
    started = Date.now()
    const res = await fetchWithTimeout(target, 8000)
    loadMs = Date.now() - started
    finalUrl = res.url || target
    isHttps = finalUrl.startsWith("https://")
    xRobotsTag = res.headers.get("x-robots-tag") || ""
    if (!res.ok && res.status >= 400) {
      return NextResponse.json(
        { error: `사이트에 접속할 수 없습니다. (응답 코드 ${res.status})` },
        { status: 422 }
      )
    }
    html = await res.text()
  } catch {
    return NextResponse.json(
      { error: "사이트에 접속하지 못했습니다. 주소를 확인해 주세요." },
      { status: 422 }
    )
  }

  // 과대 문서 보호 상한. Framer·Wix 등은 인라인 스타일로 HTML이 매우 커서
  // 200KB로는 H1·스키마가 잘림 지점 뒤로 밀려 놓치는 경우가 있어 넉넉히 잡는다.
  const head = html.slice(0, 3000000)
  const has = (re: RegExp) => re.test(head)
  const grab = (re: RegExp) => head.match(re)?.[1]?.trim() || ""

  // ── 2) HTTPS ───────────────────────────────────
  checks.push({
    key: "https",
    label: "HTTPS 보안 연결",
    tag: "기술",
    weight: 1,
    status: isHttps ? "pass" : "fail",
    detail: isHttps
      ? "암호화된 보안 연결을 사용합니다."
      : "HTTPS가 아닙니다. 검색엔진과 브라우저가 안전하지 않은 사이트로 표시할 수 있습니다.",
  })

  // ── 3) title ───────────────────────────────────
  const title = grab(/<title[^>]*>([^<]{1,300})<\/title>/i)
  const titleStatus: CheckStatus = title ? (title.length >= 10 ? "pass" : "warn") : "fail"
  checks.push({
    key: "title",
    label: "페이지 제목(title)",
    tag: "SEO",
    weight: 2,
    status: titleStatus,
    detail:
      titleStatus === "pass"
        ? `제목이 있습니다: "${title.slice(0, 60)}${title.length > 60 ? "…" : ""}"`
        : titleStatus === "warn"
          ? `제목이 너무 짧습니다("${title}"). 무엇을 하는 곳인지 담아 10자 이상으로 작성하는 것이 좋습니다.`
          : "페이지 제목(title)이 없습니다. 검색 결과에 표시되는 가장 기본 요소입니다.",
  })

  // ── 4) meta description ────────────────────────
  const desc = grab(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{1,400})["']/i)
  const descStatus: CheckStatus = desc ? (desc.length >= 30 ? "pass" : "warn") : "fail"
  checks.push({
    key: "description",
    label: "메타 설명(description)",
    tag: "SEO",
    weight: 1,
    status: descStatus,
    detail:
      descStatus === "pass"
        ? "검색 결과에 노출되는 설명문이 설정되어 있습니다."
        : descStatus === "warn"
          ? `메타 설명이 너무 짧습니다(${desc.length}자). 검색 결과 클릭률을 위해 50자 이상 권장합니다.`
          : "메타 설명이 없습니다. 검색 결과에서 클릭률에 영향을 줍니다.",
  })

  // ── 5) H1 ──────────────────────────────────────
  const h1Count = (head.match(/<h1[\s>]/gi) || []).length
  checks.push({
    key: "h1",
    label: "대표 제목(H1) 구조",
    tag: "SEO",
    weight: 1,
    status: h1Count === 1 ? "pass" : h1Count === 0 ? "fail" : "warn",
    detail:
      h1Count === 1
        ? "대표 제목(H1)이 명확합니다."
        : h1Count === 0
          ? "H1 제목이 없습니다. 페이지의 주제를 기계가 파악하기 어렵습니다."
          : `H1이 ${h1Count}개입니다. 대표 제목은 보통 1개가 권장됩니다.`,
  })

  // ── 6) 구조화 데이터 (Schema.org / JSON-LD) ─────
  const hasJsonLd = has(/application\/ld\+json/i)
  const hasMicrodata = has(/itemscope|itemtype=["']https?:\/\/schema\.org/i)
  const structured = hasJsonLd || hasMicrodata
  checks.push({
    key: "schema",
    label: "구조화 데이터(Schema.org)",
    tag: "GEO",
    weight: 2,
    status: structured ? "pass" : "fail",
    detail: structured
      ? "구조화 데이터(JSON-LD 등)가 있습니다."
      : "구조화 데이터가 없습니다. AI가 페이지 내용을 구조적으로 이해하기 어렵습니다. GEO의 기초 요소입니다.",
  })

  // ── 6-2) 업종/사업자 스키마 (LocalBusiness·Organization 등) ─
  // 대부분의 홈페이지가 갖추지 못한, GEO 인용의 핵심 요소
  const hasBizSchema = has(
    /"@type"\s*:\s*"(LocalBusiness|Organization|ProfessionalService|MedicalBusiness|MedicalOrganization|MedicalClinic|Hospital|Physician|Dentist|Restaurant|Store|HealthAndBeautyBusiness|BeautySalon|Store|EducationalOrganization)"/i
  )
  checks.push({
    key: "biz_schema",
    label: "업종·사업자 정보 구조화",
    tag: "GEO",
    weight: 4,
    status: hasBizSchema ? "pass" : "fail",
    detail: hasBizSchema
      ? "업종·사업자 정보가 구조화되어 있어 AI가 '무엇을 하는 곳인지' 명확히 인식합니다."
      : "업종·사업자 정보(LocalBusiness·Organization 등)가 구조화되어 있지 않습니다. AI가 우리를 하나의 명확한 실체로 인식하지 못해 추천 후보에서 밀립니다. GEO에서 가장 중요한 항목입니다.",
  })

  // ── 6-3) 본문 텍스트 충분성 ─────────────────────
  // AI는 인용할 '텍스트'가 있어야 함. 이미지·SPA 위주 사이트는 초기 HTML에 읽을 게 거의 없음
  const textOnly = head
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
  const textLen = textOnly.length
  checks.push({
    key: "text",
    label: "본문 텍스트 충분성",
    tag: "GEO",
    weight: 2,
    status: textLen >= 1200 ? "pass" : textLen >= 400 ? "warn" : "fail",
    detail:
      textLen >= 1200
        ? "AI가 인용할 수 있는 본문 텍스트가 충분합니다."
        : textLen >= 400
          ? "본문 텍스트가 다소 적습니다. AI가 인용할 근거가 부족할 수 있습니다."
          : "읽을 수 있는 본문 텍스트가 매우 적습니다. 이미지 위주이거나 자바스크립트로만 그려지는 경우, AI 크롤러가 내용을 읽지 못합니다.",
  })

  // ── 6-4) 질문형 콘텐츠 / FAQ ────────────────────
  // FAQPage는 JSON-LD 또는 마이크로데이터 양쪽 다 인정
  const hasFaqSchema =
    has(/"@type"\s*:\s*"FAQPage"/i) || has(/itemtype=["']https?:\/\/schema\.org\/FAQPage["']/i)
  // 아코디언(<summary>)·질문문(?)을 모두 신호로 사용 (오탐 축소)
  const summaryCount = (head.match(/<summary[\s>]/gi) || []).length
  const questionCount = (textOnly.match(/[가-힣A-Za-z][^.?!]{3,80}\?/g) || []).length
  const hasQuestionText = questionCount >= 3 || summaryCount >= 3
  // 본문 텍스트가 거의 없으면 자바스크립트 렌더(CSR) 가능성 — Framer/Wix/SPA 등
  const likelyClientRendered = textLen < 500
  checks.push({
    key: "faq",
    label: "질문형 콘텐츠(FAQ)",
    tag: "GEO",
    weight: 2,
    status: hasFaqSchema ? "pass" : hasQuestionText ? "warn" : "fail",
    detail: hasFaqSchema
      ? "FAQ 구조화 데이터가 있어 AI가 질문·답변을 그대로 인용하기 좋습니다."
      : hasQuestionText
        ? "질문형 문장은 있으나 FAQ 구조화(FAQPage)는 없습니다. 구조화하면 AI 인용률이 올라갑니다."
        : likelyClientRendered
          ? "FAQ가 화면에는 보여도, 이 페이지가 자바스크립트로 그려지면 크롤러가 받는 원본 HTML에는 내용이 없습니다. 그러면 AI·검색 크롤러가 FAQ를 읽지 못합니다. (Framer·Wix 등에서 자주 발생 — 서버 렌더링/정적 출력 설정 필요)"
          : "크롤러가 받는 HTML에서 FAQ가 감지되지 않았습니다. 화면에 FAQ가 보이는데도 이 결과라면, FAQ가 자바스크립트(아코디언 등)로 렌더되어 원본 HTML에는 없을 가능성이 큽니다. 이 경우 AI도 읽지 못하므로, FAQ 구조화 데이터(FAQPage)로 넣으면 확실하게 인용됩니다.",
  })

  // ── 7) Open Graph ──────────────────────────────
  const hasOg = has(/<meta[^>]+property=["']og:(title|image|description)["']/i)
  checks.push({
    key: "og",
    label: "공유 미리보기(Open Graph)",
    tag: "SEO",
    weight: 1,
    status: hasOg ? "pass" : "warn",
    detail: hasOg
      ? "카카오톡·SNS 공유 시 미리보기가 표시됩니다."
      : "Open Graph 태그가 없어 공유 시 미리보기가 나오지 않을 수 있습니다.",
  })

  // ── 7-2) canonical ─────────────────────────────
  const hasCanonical = has(/<link[^>]+rel=["']canonical["']/i)
  checks.push({
    key: "canonical",
    label: "표준 URL(canonical)",
    tag: "SEO",
    weight: 1,
    status: hasCanonical ? "pass" : "warn",
    detail: hasCanonical
      ? "표준 URL이 지정되어 중복 콘텐츠 문제를 예방합니다."
      : "canonical 태그가 없습니다. 같은 페이지가 여러 주소로 인식되면 순위가 분산될 수 있습니다.",
  })

  // ── 8) viewport (모바일) ───────────────────────
  const hasViewport = has(/<meta[^>]+name=["']viewport["']/i)
  checks.push({
    key: "viewport",
    label: "모바일 대응",
    tag: "기술",
    weight: 1,
    status: hasViewport ? "pass" : "fail",
    detail: hasViewport
      ? "모바일 화면 대응 설정이 되어 있습니다."
      : "모바일 대응(viewport) 설정이 없습니다. 모바일 검색에서 불리합니다.",
  })

  // ── 9) 로딩 속도 ───────────────────────────────
  checks.push({
    key: "speed",
    label: "첫 응답 속도",
    tag: "기술",
    weight: 1,
    status: loadMs < 1500 ? "pass" : loadMs < 3500 ? "warn" : "fail",
    detail:
      loadMs < 1500
        ? `첫 응답이 ${loadMs}ms로 빠릅니다.`
        : loadMs < 3500
          ? `첫 응답이 ${loadMs}ms입니다. 조금 느린 편입니다.`
          : `첫 응답이 ${loadMs}ms로 느립니다. 이탈과 순위에 영향을 줍니다.`,
  })

  // ── 10) robots.txt + AI 크롤러 차단 여부 ────────
  let robotsTxt = ""
  let robotsOk = false
  try {
    const r = await fetchWithTimeout(origin + "/robots.txt", 5000)
    if (r.ok) {
      robotsOk = true
      robotsTxt = (await r.text()).slice(0, 20000)
    }
  } catch {
    /* robots 없음 */
  }
  checks.push({
    key: "robots",
    label: "robots.txt",
    tag: "기술",
    weight: 1,
    status: robotsOk ? "pass" : "warn",
    detail: robotsOk
      ? "robots.txt가 있어 크롤러에 규칙을 안내합니다."
      : "robots.txt를 찾지 못했습니다. 필수는 아니지만 크롤링 제어에 쓰입니다.",
  })

  // AI 크롤러 차단 감지 — GEO에서 가장 치명적인 항목
  const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended"]
  const blocked: string[] = []
  if (robotsTxt) {
    const lower = robotsTxt.toLowerCase()
    // "User-agent: *  Disallow: /" 전체 차단 감지
    const blocksAll = /user-agent:\s*\*[\s\S]*?disallow:\s*\/\s*(\n|$)/i.test(robotsTxt) &&
      !/allow:\s*\//i.test(robotsTxt.split(/user-agent:\s*\*/i)[1] || "")
    for (const bot of AI_BOTS) {
      const idx = lower.indexOf(bot.toLowerCase())
      if (idx !== -1) {
        const section = robotsTxt.slice(idx, idx + 200)
        if (/disallow:\s*\//i.test(section)) blocked.push(bot)
      }
    }
    if (blocksAll) blocked.push("전체(User-agent: *)")
  }
  checks.push({
    key: "ai_crawler",
    label: "AI 크롤러 접근 허용",
    tag: "GEO",
    weight: 3,
    status: blocked.length > 0 ? "fail" : "pass",
    detail:
      blocked.length > 0
        ? `AI 크롤러가 차단되어 있습니다 (${blocked.join(", ")}). 홈페이지는 열려도 ChatGPT·구글 AI가 읽지 못해 인용·추천에서 제외됩니다.`
        : "AI 크롤러(GPTBot·ClaudeBot 등)의 접근을 막고 있지 않습니다.",
  })

  // ── 11) sitemap ────────────────────────────────
  let sitemapOk = false
  let sitemapXml = ""
  // robots.txt에 선언돼 있어도 실제로 받아본다. 선언만 있고 깨진 사이트맵을
  // 통과시키면 안 되고, 수정일(lastmod) 점검에도 본문이 필요하다.
  const declared = robotsTxt.match(/sitemap:\s*(https?:\/\/\S+)/i)?.[1]?.trim()
  for (const candidate of [declared, origin + "/sitemap.xml"].filter(Boolean) as string[]) {
    try {
      const s = await fetchWithTimeout(candidate, 5000, { method: "GET" })
      if (s.ok) {
        sitemapOk = true
        sitemapXml = (await s.text()).slice(0, 400000)
        break
      }
    } catch {
      /* 다음 후보 시도 */
    }
  }
  checks.push({
    key: "sitemap",
    label: "사이트맵(sitemap.xml)",
    tag: "SEO",
    weight: 1,
    status: sitemapOk ? "pass" : "warn",
    detail: sitemapOk
      ? "사이트맵이 있어 검색엔진이 페이지를 빠짐없이 발견할 수 있습니다."
      : "사이트맵을 찾지 못했습니다. 페이지가 많다면 크롤러 발견성이 떨어질 수 있습니다.",
  })


  // ── 사이트맵 lastmod 신선도 ────────────────────
  // 전 URL이 같은 lastmod면 배포할 때마다 "전 페이지가 바뀌었다"고 통보하는 셈이라
  // 검색엔진이 새 글을 구분하지 못한다. 구글은 부정확한 lastmod를 무시하고,
  // 빙은 크롤 예산을 줄인다. (2026-08-20 자사 실측으로 발견한 항목)
  if (sitemapOk && sitemapXml) {
    const mods = Array.from(sitemapXml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)).map((m) =>
      m[1].trim().slice(0, 10)
    )
    const locs = (sitemapXml.match(/<loc>/g) || []).length
    const uniq = new Set(mods).size
    const isIndex = /<sitemapindex/i.test(sitemapXml)
    let st: CheckStatus = "pass"
    let detail = ""
    if (isIndex) {
      st = "pass"
      detail = `사이트맵 색인 파일입니다. 하위 사이트맵 ${locs}개를 묶어 관리하고 있습니다.`
    } else if (mods.length === 0) {
      st = "warn"
      detail = `URL ${locs}개에 수정일(lastmod)이 없습니다. 검색엔진이 어떤 글이 새로 올라왔는지 판단할 단서가 줄어듭니다.`
    } else if (locs >= 5 && uniq === 1) {
      st = "fail"
      detail = `URL ${locs}개가 전부 같은 수정일(${mods[0]})입니다. 배포할 때마다 "모든 페이지가 방금 바뀌었다"고 알리는 셈이라, 검색엔진이 새 글을 구분하지 못합니다. 특히 빙에서 새 글 색인이 늦어지는 흔한 원인입니다.`
    } else {
      st = "pass"
      detail = `URL ${locs}개가 ${uniq}종의 실제 수정일을 갖고 있습니다. 검색엔진이 새 글을 우선 크롤할 수 있는 상태입니다.`
    }
    checks.push({ key: "sitemap_lastmod", label: "사이트맵 수정일 정확성", tag: "SEO", weight: 1, status: st, detail })
  }

  // ── 파비콘 ─────────────────────────────────────
  const hasFavicon = has(/<link[^>]+rel=["'][^"']*icon[^"']*["']/i)
  checks.push({
    key: "favicon",
    label: "파비콘(브라우저 탭 아이콘)",
    tag: "기술",
    weight: 1,
    status: hasFavicon ? "pass" : "warn",
    detail: hasFavicon
      ? "탭과 즐겨찾기에 표시될 아이콘이 지정되어 있습니다."
      : "파비콘이 지정되지 않았습니다. 탭에 빈 문서 아이콘이 떠서 방문자가 받는 첫인상이 나빠집니다.",
  })

  // ── 제목 태그 위계 (H1~H6) ─────────────────────
  const hseq = Array.from(head.matchAll(/<h([1-6])[\s>]/gi)).map((m) => Number(m[1]))
  const skips: string[] = []
  let prevH = 0
  for (const n of hseq) {
    if (prevH && n > prevH + 1) skips.push(`H${prevH}→H${n}`)
    prevH = n
  }
  const hCount = hseq.length
  checks.push({
    key: "heading_structure",
    label: "제목 태그 위계(H1~H6)",
    tag: "SEO",
    weight: 1,
    status: hCount === 0 ? "fail" : skips.length ? "warn" : "pass",
    detail:
      hCount === 0
        ? "제목 태그가 하나도 없습니다. 검색엔진과 AI가 글의 구조를 읽을 단서가 없습니다."
        : skips.length
          ? `제목 단계를 건너뛴 곳이 ${skips.length}군데 있습니다(${skips.slice(0, 3).join(", ")}). 대제목·중제목·소제목 순서를 지키면 AI가 어느 대목을 발췌할지 판단하기 쉬워집니다.`
          : `제목 태그 ${hCount}개가 단계를 건너뛰지 않고 정리돼 있습니다. AI가 문서 구조를 그대로 읽을 수 있습니다.`,
  })

  // ── 이미지 대체 텍스트(alt) ────────────────────
  const imgs = Array.from(head.matchAll(/<img\b[^>]*>/gi))
    .map((m) => m[0])
    .filter((t) => !/facebook\.com\/tr|google-analytics|width=["']?1["']?\s/i.test(t))
  const noAlt = imgs.filter((t) => !/\balt\s*=/i.test(t)).length
  checks.push({
    key: "img_alt",
    label: "이미지 대체 텍스트(alt)",
    tag: "GEO",
    weight: 1,
    status: imgs.length === 0 ? "warn" : noAlt === 0 ? "pass" : noAlt / imgs.length > 0.3 ? "fail" : "warn",
    detail:
      imgs.length === 0
        ? "본문 이미지를 찾지 못했습니다. 매장·시술·제품 사진은 신뢰를 만드는 근거라 있는 편이 좋습니다."
        : noAlt === 0
          ? `이미지 ${imgs.length}개 모두 설명(alt)이 있습니다. AI는 사진을 못 보므로 이 문장으로 내용을 파악합니다.`
          : `이미지 ${imgs.length}개 중 ${noAlt}개에 설명(alt)이 없습니다. 브랜드명을 넣어 "위즈더플래닝 매장 내부"처럼 적으면 원하는 검색어 노출에 유리합니다.`,
  })

  // ── 내부·외부 링크 ─────────────────────────────
  const hrefs = Array.from(head.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi))
  let internal = 0
  let external = 0
  for (const m of hrefs) {
    const h = m[1]
    if (/^(#|mailto:|tel:|javascript:)/i.test(h)) continue
    if (/^https?:\/\//i.test(h)) {
      try {
        new URL(h).host === new URL(origin).host ? internal++ : external++
      } catch {
        /* 무시 */
      }
    } else internal++
  }
  checks.push({
    key: "links",
    label: "내부 링크 연결",
    tag: "SEO",
    weight: 1,
    status: internal >= 8 ? "pass" : internal >= 3 ? "warn" : "fail",
    detail:
      internal >= 8
        ? `내부 링크 ${internal}개, 외부 링크 ${external}개입니다. 페이지들이 서로 연결돼 크롤러가 사이트 전체를 돌 수 있습니다.`
        : `내부 링크가 ${internal}개뿐입니다. 관련 페이지끼리 본문 안에서 연결해야 검색엔진이 나머지 페이지를 발견하고, 어느 페이지가 중요한지 판단합니다.`,
  })

  // ── 언어 설정 ──────────────────────────────────
  const lang = grab(/<html[^>]*\blang=["']([^"']+)["']/i)
  checks.push({
    key: "lang",
    label: "페이지 언어(lang) 지정",
    tag: "기술",
    weight: 1,
    status: lang ? (/^ko/i.test(lang) ? "pass" : "warn") : "warn",
    detail: lang
      ? /^ko/i.test(lang)
        ? `한국어(${lang})로 지정돼 있습니다. 검색엔진이 국내 검색 결과에 올바르게 배치합니다.`
        : `언어가 "${lang}"으로 지정돼 있습니다. 한국어 사이트라면 ko로 바꿔야 국내 검색에서 제대로 잡힙니다.`
      : "페이지 언어가 지정되지 않았습니다. html 태그에 lang=\"ko\"를 넣으면 국내 검색·AI 처리에 유리합니다.",
  })


  // ── 색인 허용 여부 (noindex 사고 검출) ─────────
  // 개발 중에 넣은 noindex를 오픈 후 지우지 않는 사고가 흔하다.
  // 이 경우 다른 걸 아무리 잘해도 검색·AI 노출이 통째로 0이 된다.
  // 속성 순서(name/content)가 뒤집힌 CMS 출력도 잡는다. googlebot 전용 지시도 포함.
  const metaRobots = Array.from(head.matchAll(/<meta\b[^>]*>/gi))
    .map((m) => m[0])
    .filter((t) => /\bname\s*=\s*["'](robots|googlebot)["']/i.test(t))
    .map((t) => t.match(/\bcontent\s*=\s*["']([^"']*)["']/i)?.[1] || "")
    .join(" ")
  const combined = `${metaRobots} ${xRobotsTag}`.toLowerCase()
  const isNoindex = /\bnoindex\b/.test(combined)
  const isNofollow = /\bnofollow\b/.test(combined)
  checks.push({
    key: "indexable",
    label: "검색 색인 허용(noindex 여부)",
    tag: "SEO",
    weight: 3,
    status: isNoindex ? "fail" : isNofollow ? "warn" : "pass",
    detail: isNoindex
      ? `이 페이지에 색인 금지(noindex)가 걸려 있습니다${xRobotsTag && /noindex/i.test(xRobotsTag) ? " (서버 헤더 X-Robots-Tag)" : ""}. 검색엔진과 AI가 아예 수집하지 않으므로 다른 항목을 아무리 손봐도 노출이 생기지 않습니다. 가장 먼저 지워야 할 설정입니다.`
      : isNofollow
        ? "링크 추적 금지(nofollow)가 걸려 있습니다. 이 페이지에서 나가는 링크를 검색엔진이 따라가지 않아 다른 페이지 발견이 늦어집니다."
        : "색인을 막는 설정이 없습니다. 검색엔진과 AI가 이 페이지를 수집할 수 있습니다.",
  })

  // ── 트위터 카드 ────────────────────────────────
  const hasTwitter = has(/<meta[^>]+name=["']twitter:(card|title|image)["']/i)
  const hasOgImage = has(/<meta[^>]+property=["']og:image["']/i)
  checks.push({
    key: "twitter",
    label: "SNS 공유 카드(Twitter Card)",
    tag: "기술",
    weight: 1,
    status: hasTwitter ? "pass" : hasOgImage ? "warn" : "fail",
    detail: hasTwitter
      ? "카카오톡·X 등에 링크를 붙였을 때 제목과 이미지가 카드로 표시됩니다."
      : hasOgImage
        ? "Open Graph는 있지만 Twitter Card 설정이 없습니다. 일부 앱에서 미리보기가 밋밋하게 나올 수 있습니다."
        : "공유 카드 설정이 없습니다. 링크를 보냈을 때 이미지 없이 주소만 떠서 클릭률이 떨어집니다.",
  })

  // ── 다국어 hreflang ────────────────────────────
  const hreflangs = Array.from(
    head.matchAll(/<link[^>]+rel=["']alternate["'][^>]*hreflang=["']([^"']+)["']/gi)
  ).map((m) => m[1].toLowerCase())
  const uniqLang = Array.from(new Set(hreflangs))
  if (uniqLang.length > 0) {
    const hasDefault = uniqLang.includes("x-default")
    checks.push({
      key: "hreflang",
      label: "다국어 언어 지정(hreflang)",
      tag: "SEO",
      weight: 1,
      status: hasDefault ? "pass" : "warn",
      detail: hasDefault
        ? `언어 ${uniqLang.length}종(${uniqLang.slice(0, 4).join(", ")})이 선언돼 있고 기본 언어(x-default)도 지정됐습니다.`
        : `언어 ${uniqLang.length}종이 선언돼 있지만 기본 언어(x-default)가 없습니다. 지정하지 않은 국가에서 어떤 페이지를 보여줄지 검색엔진이 임의로 고릅니다.`,
    })
  }


  // ── 다른 페이지 표본 점검 ──────────────────────
  // 무료 진단은 입력한 1곳이 기준이지만, 사이트맵에서 몇 장을 더 뽑아
  // "다른 데도 문제가 있는가"만 숫자로 알려준다.
  // 어느 페이지의 무슨 문제인지는 정밀 진단 영역. 단, 색인 차단(noindex)은
  // 방치하면 그 페이지가 통째로 사라지므로 주소를 밝힌다.
  type ScanResult = {
    checked: number
    withIssues: number
    noindexPages: string[]
    sampledFrom: number
  }
  let scan: ScanResult | null = null

  if (sitemapXml && !/<sitemapindex/i.test(sitemapXml)) {
    const targetHost = new URL(origin).host
    const locs = Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g))
      .map((m) => m[1].trim())
      .filter((u) => {
        try {
          // 악의적 사이트맵으로 외부 주소를 찌르게 하지 않는다(SSRF 방지)
          return new URL(u).host === targetHost && u.replace(/\/$/, "") !== finalUrl.replace(/\/$/, "")
        } catch {
          return false
        }
      })

    // 앞쪽만 뽑으면 비슷한 페이지에 몰리므로 전체에서 고르게 표본을 뜬다
    const MAX = 6
    const step = Math.max(1, Math.floor(locs.length / MAX))
    const sample = Array.from({ length: Math.min(MAX, locs.length) }, (_, i) => locs[i * step]).filter(Boolean)

    if (sample.length > 0) {
      const results = await Promise.allSettled(
        sample.map(async (u) => {
          const r = await fetchWithTimeout(u, 5000)
          if (!r.ok) throw new Error("bad status")
          const h = (await r.text()).slice(0, 600000)
          const xr = r.headers.get("x-robots-tag") || ""
          const mr = Array.from(h.matchAll(/<meta\b[^>]*>/gi))
            .map((m) => m[0])
            .filter((t) => /\bname\s*=\s*["'](robots|googlebot)["']/i.test(t))
            .map((t) => t.match(/\bcontent\s*=\s*["']([^"']*)["']/i)?.[1] || "")
            .join(" ")
          const noindex = /\bnoindex\b/.test(`${mr} ${xr}`.toLowerCase())
          const title = h.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() || ""
          const desc = /<meta[^>]+name=["']description["']/i.test(h)
          const h1 = (h.match(/<h1[\s>]/gi) || []).length
          const schema = /application\/ld\+json/i.test(h)
          return { url: u, noindex, issue: noindex || !title || !desc || h1 !== 1 || !schema }
        })
      )
      const ok = results.filter((r) => r.status === "fulfilled").map((r) => (r as PromiseFulfilledResult<any>).value)
      if (ok.length > 0) {
        scan = {
          checked: ok.length,
          withIssues: ok.filter((r) => r.issue).length,
          noindexPages: ok.filter((r) => r.noindex).map((r) => new URL(r.url).pathname),
          sampledFrom: locs.length,
        }
      }
    }
  }

  // ── 점수 계산 ──────────────────────────────────
  const totalWeight = checks.reduce((s, c) => s + c.weight, 0)
  const gotWeight = checks.reduce(
    (s, c) => s + (c.status === "pass" ? c.weight : c.status === "warn" ? c.weight * 0.5 : 0),
    0
  )
  const score = Math.round((gotWeight / totalWeight) * 100)
  // GEO 핵심(업종 스키마·크롤러)이 비면 기본기가 좋아도 '양호'로 보지 않음
  const geoCore = checks.filter(
    (c) => c.key === "biz_schema" || c.key === "ai_crawler" || c.key === "indexable"
  )
  const geoCoreFail = geoCore.some((c) => c.status === "fail")
  const grade = score >= 85 && !geoCoreFail ? "양호" : score >= 60 ? "보통" : "취약"

  const fails = checks.filter((c) => c.status === "fail")
  const warns = checks.filter((c) => c.status === "warn")

  return NextResponse.json({
    url: finalUrl,
    score,
    grade,
    summary: {
      pass: checks.filter((c) => c.status === "pass").length,
      warn: warns.length,
      fail: fails.length,
      total: checks.length,
    },
    checks,
    scan,
  })
}
