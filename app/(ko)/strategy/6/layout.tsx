import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "운동·피트니스 마케팅 전략",
  description: "헬스장·필라테스·요가 회원 모집 전략. 온라인 인테리어와 지역 타겟 마케팅으로 주변 주민을 회원으로 만듭니다.",
  alternates: { canonical: "/strategy/6" },
  openGraph: {
    images: ["/thumbnail.png"],
    title: "운동·피트니스 마케팅 전략 | 위즈더플래닝",
    description: "헬스장·필라테스·요가 회원 모집 전략. 온라인 인테리어와 지역 타겟 마케팅으로 주변 주민을 회원으로 만듭니다.",
    url: "https://wiztheplanning.com/strategy/6",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
