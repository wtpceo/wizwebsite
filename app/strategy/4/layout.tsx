import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "캠핑·펜션 마케팅 전략",
  description: "예약 플랫폼 수수료에 의존하지 않는 직접 예약 구조 만들기. 캠핑장·펜션·숙박업 전문 마케팅 전략.",
  alternates: { canonical: "/strategy/4" },
  openGraph: {
    title: "캠핑·펜션 마케팅 전략 | 위즈더플래닝",
    description: "예약 플랫폼 수수료에 의존하지 않는 직접 예약 구조 만들기. 캠핑장·펜션·숙박업 전문 마케팅 전략.",
    url: "https://wiztheplanning.com/strategy/4",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
