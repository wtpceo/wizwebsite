// 다국어(i18n) 설정 — 한국어는 루트(/)에 그대로 두고(기존 색인 보호),
// 영어·중국어(간체)·베트남어를 하위 경로(/en, /zh, /vi)로 추가한다. 영어는 2026-09-15 추가.

export type Locale = "ko" | "en" | "zh" | "vi"

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
  { code: "en", prefix: "/en", htmlLang: "en", label: "English", ogLocale: "en_US" },
  { code: "zh", prefix: "/zh", htmlLang: "zh-Hans", label: "中文", ogLocale: "zh_CN" },
  { code: "vi", prefix: "/vi", htmlLang: "vi", label: "Tiếng Việt", ogLocale: "vi_VN" },
]

export const BASE_URL = "https://wiztheplanning.com"

/** 한국에서 사업하는 영어권 사업주용 영어 랜딩 (2026-09-15 /en에서 이동) */
export const EN_LOCAL_BUSINESS_PATH = "/en/business-owners-in-korea"

export function getLocale(code: Locale) {
  return LOCALES.find((l) => l.code === code)!
}

// hreflang 묶음(2026-11-10 정리, Ahrefs 'Missing reciprocal hreflang' 16건).
// 규칙: 묶음 안의 모든 페이지가 같은 목록을 달아 서로를 가리킨다. 한 페이지는 한 묶음에만 든다.
//  - 회사 홈: 국문 홈(/) ↔ 영문 허브(/en). 둘 다 기업 대상 회사 소개라 서로 짝이다. x-default 는 국문 홈.
//  - 한국에서 사업하는 외국인 사장님 랜딩: /en/business-owners-in-korea ↔ /zh ↔ /vi. 같은 내용의 세 언어판. x-default 는 영어판.
//    (예전에는 국문 홈이 영어 짝으로 이 랜딩을 가리켰는데, 국문 홈이 기업 전용으로 바뀌어 내용이 다르다)
//  - 글·페이지 짝: 국문 원문 ↔ 영문 의역.
const HREFLANG_GROUPS: Record<string, string>[] = [
  { ko: "/", en: "/en", "x-default": "/" },
  { en: EN_LOCAL_BUSINESS_PATH, "zh-Hans": "/zh", vi: "/vi", "x-default": EN_LOCAL_BUSINESS_PATH },
  { ko: "/how-we-measure", en: "/en/how-we-measure" },
  { ko: "/guide", en: "/en/insights" },
  { ko: "/guide/naver-blocks-ai-crawlers", en: "/en/insights/naver-blocks-ai-crawlers" },
  { ko: "/guide/naver-google-share", en: "/en/insights/naver-vs-google-korea" },
  { ko: "/guide/case-orthopedic-chatgpt", en: "/en/insights/case-clinic-chatgpt" },
  { ko: "/guide/case-dental-llms-factsheet", en: "/en/insights/case-dental-llms-txt" },
]

/** 이 경로가 든 hreflang 묶음을 절대 주소로 돌려준다. 묶음이 없으면 undefined(hreflang 을 달지 않는다). */
export function hreflangFor(path: string): Record<string, string> | undefined {
  const g = HREFLANG_GROUPS.find((x) => Object.entries(x).some(([k, v]) => k !== "x-default" && v === path))
  if (!g) return undefined
  // 홈은 canonical 과 같게 끝 슬래시 없이 적는다
  return Object.fromEntries(Object.entries(g).map(([k, v]) => [k, `${BASE_URL}${v === "/" ? "" : v}`]))
}
