import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "학원 마케팅 전략",
  description: "학부모는 검색하고 비교하고 판단합니다. 네이버 플레이스와 브랜드 블로그로 등록률을 높이는 학원 마케팅 전략.",
  alternates: { canonical: "/strategy/3" },
  openGraph: {
    images: ["/thumbnail.png"],
    title: "학원 마케팅 전략 | 위즈더플래닝",
    description: "학부모는 검색하고 비교하고 판단합니다. 네이버 플레이스와 브랜드 블로그로 등록률을 높이는 학원 마케팅 전략.",
    url: "https://wiztheplanning.com/strategy/3",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
