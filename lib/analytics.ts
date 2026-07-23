// GA4 전환 이벤트 전송 유틸
// gtag가 없거나(광고차단·로딩 전) 서버 환경이면 조용히 무시 — 폼 제출은 절대 막지 않는다

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean | undefined>

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  try {
    window.gtag("event", eventName, {
      // 어느 페이지에서 전환됐는지 — 글별 성과 분석용
      page_path: window.location.pathname,
      ...params,
    })
  } catch {
    /* 측정 실패가 사용자 흐름을 방해하지 않도록 무시 */
  }
}

/** 병원 무료 진단 신청 완료 */
export function trackDiagnosisSubmit(params: { specialty?: string; source?: string } = {}) {
  trackEvent("diagnosis_submit", {
    form_type: "medical_diagnosis",
    specialty: params.specialty || "미선택",
    lead_source: params.source || "미응답",
  })
}

/** 일반 문의 폼 제출 완료 */
export function trackContactSubmit(params: { source?: string } = {}) {
  trackEvent("contact_submit", {
    form_type: "general_contact",
    lead_source: params.source || "미응답",
  })
}

/** 카카오톡 상담 위젯 클릭 */
export function trackChatClick() {
  trackEvent("chat_click", { channel: "kakao" })
}
