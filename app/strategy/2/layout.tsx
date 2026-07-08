import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "배달 플랫폼 관리 전략",
  description: "배민·쿠팡이츠 등 7개 배달 플랫폼 통합 관리, CPC 광고 효율화, 리뷰 관리까지. 배달 매출을 지키는 생존 전략을 제시합니다.",
  alternates: { canonical: "/strategy/2" },
  openGraph: {
    title: "배달 플랫폼 관리 전략 | 위즈더플래닝",
    description: "배민·쿠팡이츠 등 7개 배달 플랫폼 통합 관리, CPC 광고 효율화, 리뷰 관리까지. 배달 매출을 지키는 생존 전략을 제시합니다.",
    url: "https://wiztheplanning.com/strategy/2",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
