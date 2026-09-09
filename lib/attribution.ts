/**
 * 유입 경로 기록 — 리드가 어느 광고에서 왔는지 남긴다.
 *
 * 왜 필요한가:
 *   `[실측 2026-08-19~09-08]` 광고 24개에 ₩85만원을 쓰고 리드 12건을 받았는데,
 *   어느 소재에서 왔는지 한 건도 알 수 없었다. 신청 폼이 유입 정보를 하나도
 *   받지 않아서다. 광고에는 UTM을 붙여놨지만 받는 쪽이 읽지 않았다.
 *
 * 설계 결정:
 *   1) **첫 진입값을 쓴다(first-touch).** 광고를 누르고 들어와 여기저기 둘러보다
 *      신청하면 주소창의 UTM은 이미 사라져 있다. 그래서 처음 들어온 값을 잡아둔다.
 *   2) **sessionStorage 를 쓴다.** localStorage 로 하면 다른 광고로 재방문했을 때
 *      옛날 값이 남아 잘못된 소재에 리드가 붙는다. 탭 단위가 맞다.
 *      대신 "며칠 뒤 다시 와서 신청"은 놓친다 — 그건 감수한다.
 *   3) **읽기·쓰기를 전부 try/catch 로 감싼다.** 시크릿 모드·쿠키 차단 브라우저에서는
 *      접근 자체가 예외를 던진다. 유입 기록 때문에 신청이 막히면 안 된다.
 */

const KEY = "wtp_attribution"

/** 광고 플랫폼이 붙이는 파라미터. gclid=구글, fbclid=메타 */
const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const

export type Attribution = Partial<Record<(typeof PARAMS)[number], string>> & {
  /** 처음 도착한 경로 (쿼리 제외) */
  landing?: string
  /** 외부 유입원. 자사 도메인 내부 이동은 기록하지 않는다 */
  referrer?: string
  /** 첫 진입 시각 (KST) */
  first_seen?: string
}

function read(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Attribution) : null
  } catch {
    return null
  }
}

/**
 * 첫 진입 때 한 번만 저장한다. 이미 있으면 덮어쓰지 않는다.
 * 단, 저장된 값에 광고 파라미터가 하나도 없는데 지금 URL에는 있으면 갱신한다
 * (직접 방문 후 같은 탭에서 광고를 눌러 들어온 경우).
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return

  try {
    const q = new URLSearchParams(window.location.search)
    const found: Attribution = {}
    for (const p of PARAMS) {
      const v = q.get(p)
      if (v) found[p] = v.slice(0, 200)
    }

    const prev = read()
    const prevHasAd = prev ? PARAMS.some((p) => prev[p]) : false
    const nowHasAd = Object.keys(found).length > 0
    if (prev && (prevHasAd || !nowHasAd)) return

    const ref = document.referrer
    let referrer: string | undefined
    try {
      if (ref && new URL(ref).hostname !== window.location.hostname) referrer = ref.slice(0, 300)
    } catch {
      /* 잘린 referrer 는 버린다 */
    }

    sessionStorage.setItem(
      KEY,
      JSON.stringify({
        ...found,
        landing: window.location.pathname,
        referrer,
        first_seen: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
      } satisfies Attribution),
    )
  } catch {
    /* 저장 실패는 무시한다 — 신청 자체를 막지 않는다 */
  }
}

export function readAttribution(): Attribution {
  return read() ?? {}
}

/** 관리자 메일에 넣을 한 줄 요약. 값이 없으면 빈 문자열 */
export function formatAttribution(a: Attribution): string {
  const chan = [a.utm_source, a.utm_medium, a.utm_campaign, a.utm_term, a.utm_content]
    .filter(Boolean)
    .join(" / ")
  if (chan) return chan
  if (a.gclid) return "google / cpc (gclid)"
  if (a.fbclid) return "meta / paid (fbclid)"
  if (a.referrer) return `외부 유입: ${a.referrer}`
  return "직접 유입 (광고 아님)"
}
