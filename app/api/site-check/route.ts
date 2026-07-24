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

  const head = html.slice(0, 200000) // 과대 문서 보호
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
  checks.push({
    key: "title",
    label: "페이지 제목(title)",
    tag: "SEO",
    weight: 2,
    status: title ? (title.length >= 10 ? "pass" : "warn") : "fail",
    detail: title
      ? `제목이 있습니다: "${title.slice(0, 60)}${title.length > 60 ? "…" : ""}"`
      : "페이지 제목(title)이 없습니다. 검색 결과에 표시되는 가장 기본 요소입니다.",
  })

  // ── 4) meta description ────────────────────────
  const desc = grab(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{1,400})["']/i)
  checks.push({
    key: "description",
    label: "메타 설명(description)",
    tag: "SEO",
    weight: 1,
    status: desc ? (desc.length >= 30 ? "pass" : "warn") : "fail",
    detail: desc
      ? "검색 결과에 노출되는 설명문이 설정되어 있습니다."
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
    weight: 3,
    status: structured ? "pass" : "fail",
    detail: structured
      ? "AI와 검색엔진이 업체 정보를 이해할 수 있는 구조화 데이터가 있습니다."
      : "구조화 데이터가 없습니다. AI가 우리 업체가 '무엇을 하는 곳인지' 구조적으로 이해하기 어렵습니다. GEO의 핵심 요소입니다.",
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
  const grade = score >= 80 ? "양호" : score >= 55 ? "보통" : "취약"

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
