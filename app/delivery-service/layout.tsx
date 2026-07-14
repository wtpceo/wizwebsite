import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "배달앱 관리 서비스",
  description: "배달의민족, 쿠팡이츠, 요기요 등 배달앱 등록·최적화·메뉴 관리·프로모션 설정을 한 번에 관리해 드립니다.",
  alternates: { canonical: "/delivery-service" },
  openGraph: {
    images: ["/thumbnail.png"],
    title: "배달앱 관리 서비스 | 위즈더플래닝",
    description: "배달의민족, 쿠팡이츠, 요기요 등 배달앱 등록·최적화·메뉴 관리·프로모션 설정을 한 번에 관리해 드립니다.",
    url: "https://wiztheplanning.com/delivery-service",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
