import DiagnosisPopup from "@/components/DiagnosisPopup"
import ChatWidget from "@/components/ChatWidget"
import MetaPixel from "@/components/MetaPixel"
import AttributionCapture from "@/components/AttributionCapture"
import { GoogleAnalytics } from "@next/third-parties/google"

// 언어별 루트 레이아웃이 공유하는 껍데기.
// <html lang>은 페이지 언어와 일치해야 한다. /zh, /vi가 lang="ko"로 나가던 문제(hreflang 불일치)를
// 라우트 그룹 (ko)/(zh)/(vi) 별 루트 레이아웃으로 나눠 해결한다.
export default function RootShell({
  lang,
  jsonLd,
  children,
}: {
  lang: string
  jsonLd?: object
  children: React.ReactNode
}) {
  return (
    <html lang={lang}>
      <body>
        {jsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        )}
        <AttributionCapture />
        {children}
        <ChatWidget />
        <DiagnosisPopup />
      </body>
      <GoogleAnalytics gaId="G-CF8977QJ2V" />
      {/* 픽셀 ID가 없으면 렌더되지 않는다 → 환경변수 미설정 시 조용히 비활성 */}
      <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
    </html>
  )
}
