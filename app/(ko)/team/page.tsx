import type { Metadata } from "next"
import { TEAM_PAGE } from "@/components/shortform/details"
import TeamDoc from "@/components/shortform/TeamDoc"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"
import { share } from "@/lib/share-meta"

// 전문팀 · 프로세스(2026-11-04 리뉴얼, 11-06 카피덱 이름). 리더 이름·사진·이력은 회사 준비물 — 받기 전엔 팀과 맡는 일만 싣는다.
const d = TEAM_PAGE

export const metadata: Metadata = share({
  title: d.title,
  description: d.desc,
  alternates: { canonical: "/team" },
  openGraph: {
    title: `${d.title} | 위즈더플래닝`,
    description: d.desc,
    url: "https://wiztheplanning.com/team",
    siteName: "위즈더플래닝",
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: d.title }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${d.title} | 위즈더플래닝`, description: d.desc, images: [`/og-home.jpg?v=${timestamp}`] },
})

export default function TeamPage() {
  return <TeamDoc />
}
