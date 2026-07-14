import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "네이버 마케팅",
  description: "네이버 플레이스 최적화, 콘텐츠 마케팅, 리뷰 관리로 지역 검색 상위 노출을 만드는 네이버 마케팅 서비스.",
  alternates: { canonical: "/naver-marketing" },
  openGraph: {
    images: ["/thumbnail.png"],
    title: "네이버 마케팅 | 위즈더플래닝",
    description: "네이버 플레이스 최적화, 콘텐츠 마케팅, 리뷰 관리로 지역 검색 상위 노출을 만드는 네이버 마케팅 서비스.",
    url: "https://wiztheplanning.com/naver-marketing",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
