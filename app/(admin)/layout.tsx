import "../globals.css"
import type { Metadata } from "next"

// 문의 관리(내부용) 전용 바탕. 홈페이지 머리줄·GA4·메타 픽셀·채팅 위젯을 싣지 않는다(관리자 방문이 방문 통계에 섞이지 않게)
export const metadata: Metadata = {
  title: "문의 관리 | 위즈더플래닝",
  robots: { index: false, follow: false, nocache: true },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#F3F6FA] text-[#0A1A33] antialiased">{children}</body>
    </html>
  )
}
