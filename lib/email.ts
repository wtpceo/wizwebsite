// 메일 발신 설정 (Resend)
//
// 자사 도메인 발신을 쓰는 이유:
// - resend.dev 공용 주소는 도달률이 낮고, 수신자에게 브랜드가 드러나지 않는다.
// - wiztheplanning.com은 Resend 도메인 인증(DKIM + send 서브도메인 SPF/MX) 완료 상태다.
//
// 문제가 생기면 Vercel 환경변수 RESEND_FROM 을 설정해 재배포 없이 즉시 되돌릴 수 있다.
// (예: RESEND_FROM="onboarding@resend.dev")
export const MAIL_FROM =
  process.env.RESEND_FROM || "위즈더플래닝 <noreply@wiztheplanning.com>"

/** 관리자 알림 수신함 */
export const ADMIN_EMAILS = ["ceo@wiztheplanning.com"]
