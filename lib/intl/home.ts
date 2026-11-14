// 외국어 홈(/en, /zh, /vi) 문구. 11-14 대표 「외국어 페이지도 완벽하게 업데이트」 → 세 언어 모두 기업 대상으로, 국문 홈과 같은 디자인·내용.
// 국문 원문: 02.비즈니스/27.자사브랜딩/20_글/외국어홈_2026-11-14/source_ko.json. 문장은 Gemini(gemini-4-carbon)가 언어별로 의역했다(gen.py).
// 문구를 고칠 때는 원문 JSON을 고치고 Gemini로 다시 받는다. 숫자·이름·보장 금지 규칙은 gen.py 프롬프트에 있다.
import en from "./home-en.json"
import zh from "./home-zh.json"
import vi from "./home-vi.json"

export type IntlLocale = "en" | "zh" | "vi"
export type IntlHomeCopy = typeof en
export const INTL_HOME: Record<IntlLocale, IntlHomeCopy> = { en, zh: zh as IntlHomeCopy, vi: vi as IntlHomeCopy }

/** 메일 제목 꼬리표(/api/contact language). 관리자 메일·문자에서 언어를 가른다 */
export const INTL_LANG_TAG: Record<IntlLocale, string> = {
  en: "English 문의 (B2B)",
  zh: "中文 문의 (B2B)",
  vi: "Tiếng Việt 문의 (B2B)",
}

export const INTL_HTML_LANG: Record<IntlLocale, string> = { en: "en", zh: "zh-Hans", vi: "vi" }
export const INTL_OG_LOCALE: Record<IntlLocale, string> = { en: "en_US", zh: "zh_CN", vi: "vi_VN" }
