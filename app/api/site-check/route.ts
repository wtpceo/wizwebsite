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
  try {
    started = Date.now()
    const res = await fetchWithTimeout(target, 8000)
    loadMs = Date.now() - started
    finalUrl = res.url || target
    isHttps = finalUrl.startsWith("https://")
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
  const hasFaqSchema = has(/"@type"\s*:\s*"FAQPage"/i)
  const hasQuestionText = (textOnly.match(/[가-힣A-Za-z][^.?!]{4,60}\?/g) || []).length >= 3
  const faqOk = hasFaqSchema || hasQuestionText
  checks.push({
    key: "faq",
    label: "질문형 콘텐츠(FAQ)",
    tag: "GEO",
    weight: 2,
    status: hasFaqSchema ? "pass" : hasQuestionText ? "warn" : "fail",
    detail: hasFaqSchema
      ? "FAQ 구조화 데이터가 있어 AI가 질문·답변을 그대로 인용하기 좋습니다."
      : faqOk
        ? "질문형 문장은 있으나 FAQ 구조화(FAQPage)는 없습니다. 구조화하면 AI 인용률이 올라갑니다."
        : "질문·답변형 콘텐츠가 없습니다. AI는 '○○이 뭔가요' 같은 질문에 답할 콘텐츠를 특히 잘 인용합니다.",
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
  if (/sitemap:\s*http/i.test(robotsTxt)) {
    sitemapOk = true
  } else {
    try {
      const s = await fetchWithTimeout(origin + "/sitemap.xml", 5000, { method: "GET" })
      sitemapOk = s.ok
    } catch {
      /* 없음 */
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

  // ── 점수 계산 ──────────────────────────────────
  const totalWeight = checks.reduce((s, c) => s + c.weight, 0)
  const gotWeight = checks.reduce(
    (s, c) => s + (c.status === "pass" ? c.weight : c.status === "warn" ? c.weight * 0.5 : 0),
    0
  )
  const score = Math.round((gotWeight / totalWeight) * 100)
  // GEO 핵심(업종 스키마·크롤러)이 비면 기본기가 좋아도 '양호'로 보지 않음
  const geoCore = checks.filter((c) => c.key === "biz_schema" || c.key === "ai_crawler")
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
  })
}
