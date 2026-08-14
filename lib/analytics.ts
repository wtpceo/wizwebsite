// 전환 이벤트 전송 유틸 — GA4 + Meta 픽셀
// gtag/fbq가 없거나(광고차단·로딩 전) 서버 환경이면 조용히 무시 — 폼 제출은 절대 막지 않는다
//
// 🚨 Meta 주 전환 이벤트는 `Lead` 하나다.
//    광고 최적화 목표와 CPA 계산의 분모가 되므로 여러 이벤트로 흩뜨리지 않는다.
//    (성과 파이프라인: 09_tracking/TRACKING_PLAN.md §1 · fetch.py 의 CONVERSION_ACTIONS)

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
export function trackDiagnosisSubmit(params: { specialty?: string; source?: string } = {}) {
  gaEvent("diagnosis_submit", {
    form_type: "medical_diagnosis",
    specialty: params.specialty || "미선택",
    lead_source: params.source || "미응답",
  })
  fbEvent(
    "Lead",
    {
      content_name: "병원 무료 AI 검색 진단",
      content_category: params.specialty || "미선택",
    },
    true,
  )
}

/** 일반 문의 폼 제출 완료 → Meta `Lead` ★ 주 전환 */
export function trackContactSubmit(params: { source?: string } = {}) {
  gaEvent("contact_submit", {
    form_type: "general_contact",
    lead_source: params.source || "미응답",
  })
  fbEvent("Lead", { content_name: "무료 상담 신청" }, true)
}

/** 카카오톡 상담 위젯 클릭 → Meta `Contact` (보조 지표 — CPA 분모에 넣지 않는다) */
export function trackChatClick() {
  gaEvent("chat_click", { channel: "kakao" })
  fbEvent("Contact", { content_name: "카카오톡 상담" }, true)
}
