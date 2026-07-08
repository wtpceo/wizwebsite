import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "음식점 마케팅 전략",
  description: "노출·사진·리뷰까지, 음식점 온라인 마케팅 6가지 전략. 네이버 플레이스와 키워드 노출로 손님이 찾아오는 가게를 만듭니다.",
  alternates: { canonical: "/strategy/1" },
  openGraph: {
    title: "음식점 마케팅 전략 | 위즈더플래닝",
    description: "노출·사진·리뷰까지, 음식점 온라인 마케팅 6가지 전략. 네이버 플레이스와 키워드 노출로 손님이 찾아오는 가게를 만듭니다.",
    url: "https://wiztheplanning.com/strategy/1",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
