import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "엘리베이터TV 광고 — 포커스미디어 공식 총판",
  description: "서울 아파트 엘리베이터의 50.3%, 하루 1,000만 시청. 포커스미디어 공식 총판 위즈더플래닝이 동네 상권 타겟 광고를 설계합니다.",
  alternates: { canonical: "/focusmedia" },
  openGraph: {
    images: ["/thumbnail.png"],
    title: "엘리베이터TV 광고 — 포커스미디어 공식 총판 | 위즈더플래닝",
    description: "서울 아파트 엘리베이터의 50.3%, 하루 1,000만 시청. 포커스미디어 공식 총판 위즈더플래닝이 동네 상권 타겟 광고를 설계합니다.",
    url: "https://wiztheplanning.com/focusmedia",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
