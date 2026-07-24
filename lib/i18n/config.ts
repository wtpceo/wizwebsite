// 다국어(i18n) 설정 — 한국어는 루트(/)에 그대로 두고(기존 색인 보호),
// 중국어(간체)·베트남어를 하위 경로(/zh, /vi)로 추가한다.

export type Locale = "ko" | "zh" | "vi"

export const LOCALES: {
  code: Locale
  /** URL 접두사. 한국어는 루트라 "" */
  prefix: string
  /** <html lang> 및 hreflang 값 */
  htmlLang: string
  /** 언어 전환 UI에 표시할 이름 (그 언어로) */
  label: string
  /** og:locale */
  ogLocale: string
}[] = [
  { code: "ko", prefix: "", htmlLang: "ko", label: "한국어", ogLocale: "ko_KR" },
  { code: "zh", prefix: "/zh", htmlLang: "zh-Hans", label: "中文", ogLocale: "zh_CN" },
  { code: "vi", prefix: "/vi", htmlLang: "vi", label: "Tiếng Việt", ogLocale: "vi_VN" },
]

export const BASE_URL = "https://wiztheplanning.com"

export function getLocale(code: Locale) {
  return LOCALES.find((l) => l.code === code)!
}

// 특정 경로에 대해 모든 로케일의 hreflang alternates 맵을 만든다.
// (예: path="" → 홈, path="/site-check" → 각 언어 홈 하위 동일 경로가 있을 때)
export function hreflangAlternates(path = ""): Record<string, string> {
  const out: Record<string, string> = {}
  for (const l of LOCALES) {
    out[l.htmlLang] = `${BASE_URL}${l.prefix}${path}`
  }
  out["x-default"] = `${BASE_URL}${path}`
  return out
}
