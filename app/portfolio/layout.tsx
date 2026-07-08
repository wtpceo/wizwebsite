import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "위즈더플래닝이 촬영·제작한 매장 사진, 영상 콘텐츠 포트폴리오. 7,000여 광고주와 함께한 결과물을 확인하세요.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "포트폴리오 | 위즈더플래닝",
    description: "위즈더플래닝이 촬영·제작한 매장 사진, 영상 콘텐츠 포트폴리오. 7,000여 광고주와 함께한 결과물을 확인하세요.",
    url: "https://wiztheplanning.com/portfolio",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
