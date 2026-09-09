import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "뷰티 업종 마케팅 전략",
  description: "피부·헤어·네일 등 뷰티샵 신규 고객 유치 전략. 플레이스, 브랜드 블로그, 체험단, 전문 사진까지 통합 관리합니다.",
  alternates: { canonical: "/strategy/5" },
  openGraph: {
    images: ["/thumbnail.png"],
    title: "뷰티 업종 마케팅 전략 | 위즈더플래닝",
    description: "피부·헤어·네일 등 뷰티샵 신규 고객 유치 전략. 플레이스, 브랜드 블로그, 체험단, 전문 사진까지 통합 관리합니다.",
    url: "https://wiztheplanning.com/strategy/5",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
