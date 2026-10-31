// 전환 이벤트 전송 유틸 — GA4 + Meta 픽셀
// gtag/fbq가 없거나(광고차단·로딩 전) 서버 환경이면 조용히 무시 — 폼 제출은 절대 막지 않는다
//
// 🚨 Meta 주 전환 이벤트는 `Lead` 하나다.
//    광고 최적화 목표와 CPA 계산의 분모가 되므로 여러 이벤트로 흩뜨리지 않는다.
//    (성과 파이프라인: 09_tracking/TRACKING_PLAN.md §1 · fetch.py 의 CONVERSION_ACTIONS)

import { readSourcePath } from "@/lib/attribution"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean | undefined>

/** GA4 전송 */
function gaEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  try {
    window.gtag("event", eventName, {
      // 어느 페이지에서 전환됐는지 — 글별 성과 분석용
      page_path: window.location.pathname,
      // 새 탭 이동·페이지 이탈 중에도 전송이 끊기지 않도록 beacon 사용
      transport_type: "beacon",
      ...params,
    })
  } catch {
    /* 측정 실패가 사용자 흐름을 방해하지 않도록 무시 */
  }
}

/**
 * Meta 픽셀 전송
 * @param standard Meta 표준 이벤트(Lead·Contact 등)면 true, 우리가 정의한 이름이면 false.
 *                 표준 이벤트가 아닌 이름을 track 으로 보내면 Meta가 인식하지 못한다.
 */
function fbEvent(eventName: string, params: EventParams = {}, standard = false) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return
  try {
    window.fbq(standard ? "track" : "trackCustom", eventName, params)
  } catch {
    /* 무시 */
  }
}

/** 범용 이벤트 — GA4 + Meta 커스텀 이벤트로 함께 전송 */
export function trackEvent(eventName: string, params: EventParams = {}) {
  gaEvent(eventName, params)
  fbEvent(eventName, params)
}

/** 병원 무료 진단 신청 완료 → Meta `Lead` ★ 주 전환 */
export function trackDiagnosisSubmit(
  params: { specialty?: string; source?: string; budget?: string } = {},
) {
  gaEvent("diagnosis_submit", {
    form_type: "medical_diagnosis",
    // 직전에 본 페이지. /diagnosis 폼은 page_path 로는 어느 글에서 왔는지 갈리지 않는다
    source_path: readSourcePath(),
    specialty: params.specialty || "미선택",
    lead_source: params.source || "미응답",
    lead_budget: params.budget || "미응답",
  })
  fbEvent(
    "Lead",
    {
      content_name: "병원 무료 AI 검색 진단",
      content_category: params.specialty || "미선택",
      // 예산 구간 — 이벤트는 Lead 하나로 두고, 광고관리자 맞춤 전환에서 이 값으로 걸러 본다
      lead_budget: params.budget || "미응답",
    },
    true,
  )
}

/** 일반 문의 폼 제출 완료 → Meta `Lead` ★ 주 전환 */
export function trackContactSubmit(params: { source?: string; budget?: string } = {}) {
  gaEvent("contact_submit", {
    form_type: "general_contact",
    lead_source: params.source || "미응답",
    lead_budget: params.budget || "미응답",
  })
  fbEvent("Lead", { content_name: "무료 상담 신청", lead_budget: params.budget || "미응답" }, true)
}

/** 기업 제안 요청 폼 제출 완료(/business/contact) → Meta `Lead` ★ 주 전환
 *  대표 결정(2026-10-29): 메타에서는 기업 문의를 따로 나누지 않고 총 리드 수로 본다.
 *  구분은 content_name 으로만 하고, GA4는 generate_lead + form=business 로 남겨
 *  측정 세션이 서비스 계정으로 주간 집계한다. 개인정보(이름·메일·전화)는 넣지 않는다. */
export function trackBusinessProposalSubmit(
  params: { budget?: string; timing?: string; services?: string[] } = {},
) {
  const services = params.services?.length ? params.services.join(", ") : "미선택"
  gaEvent("generate_lead", {
    form: "business",
    budget: params.budget || "미응답",
    start_timing: params.timing || "미응답",
    services,
  })
  fbEvent("Lead", { content_name: "business_proposal", lead_budget: params.budget || "미응답" }, true)
}

/** 영문 B2B·외국어 문의 폼 제출 완료 → Meta `Lead` ★ 주 전환
 *  대표 결정(2026-10-29): 홈페이지로 들어오는 모든 문의를 리드로 센다.
 *  GA4는 일반 상담과 같은 contact_submit 으로 보내 측정 세션의 '총 리드' 식을 바꾸지 않고,
 *  form_type 으로 나눈다. generate_lead 는 기업 제안 요청 전용으로 남긴다. */
export function trackForeignContactSubmit(params: { form: "en_contact" | "locale_contact"; locale: string; interest?: string }) {
  gaEvent("contact_submit", {
    form_type: params.form,
    locale: params.locale,
    interest: params.interest || "미응답",
  })
  fbEvent("Lead", { content_name: params.form, content_category: params.locale }, true)
}

/** 사례 열람 요청 제출 완료(가이드 사례 글 하단) → GA4 case_access_request + Meta 커스텀 이벤트
 *  총 리드에 넣을지는 대표 결정 대기라 Lead 로 보내지 않는다. 결정이 나면 이 함수만 바꾼다. */
export function trackCaseAccessRequest(params: { caseKey: string }) {
  gaEvent("case_access_request", { case_key: params.caseKey })
  fbEvent("CaseAccessRequest", { content_name: params.caseKey })
}

/** 전화번호(tel:) 링크 클릭 → Meta `Contact` (보조 지표, 카카오톡 클릭과 같은 급. CPA 분모에 넣지 않는다) */
export function trackPhoneClick() {
  gaEvent("phone_click", { channel: "phone" })
  fbEvent("Contact", { content_name: "전화" }, true)
}

/** 카카오톡 상담 위젯 클릭 → Meta `Contact` (보조 지표 — CPA 분모에 넣지 않는다) */
export function trackChatClick() {
  gaEvent("chat_click", { channel: "kakao" })
  fbEvent("Contact", { content_name: "카카오톡 상담" }, true)
}

/** 업종 무관 무료 AI 검색 진단 신청 완료 → Meta `Lead` ★ 주 전환
 *  병원판(trackDiagnosisSubmit)과 같은 `Lead` 표준 이벤트를 쓴다.
 *  광고세트(병원 / 업종무관) 구분은 Meta 쪽 adset 단위로 이미 갈리므로
 *  전환 이벤트를 쪼개지 않는다 — 쪼개면 CPA 분모가 흩어진다.
 *  GA4에서만 별도 이름으로 구분한다. */
export function trackGeneralDiagnosisSubmit(
  params: { industry?: string; source?: string; budget?: string } = {},
) {
  gaEvent("diagnosis_submit", {
    form_type: "general_diagnosis",
    // 직전에 본 페이지. /diagnosis 폼은 page_path 로는 어느 글에서 왔는지 갈리지 않는다
    source_path: readSourcePath(),
    industry: params.industry || "미선택",
    lead_source: params.source || "미응답",
    lead_budget: params.budget || "미응답",
  })
  fbEvent(
    "Lead",
    {
      content_name: "무료 AI 검색 진단",
      content_category: params.industry || "미선택",
      lead_budget: params.budget || "미응답",
    },
    true,
  )
}
