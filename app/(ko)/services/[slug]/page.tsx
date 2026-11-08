import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceDoc from "@/components/shortform/ServiceDoc"
import PerfDoc from "@/components/shortform/PerfDoc"
import GeoDoc from "@/components/shortform/GeoDoc"
import InflDoc from "@/components/shortform/InflDoc"
import { SERVICES } from "@/components/shortform/content"
import { DETAILS } from "@/components/shortform/details"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 서비스 상세 8쪽(2026-11-04 리뉴얼) — /services/search · performance · viral · influencer · content · global · homepage · offline
export const dynamicParams = false

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = SERVICES.find((x) => x.slug === slug)
  if (!s) return {}
  const d = DETAILS[s.k]
  const url = `/services/${s.slug}`
  return {
    title: d.title,
    description: d.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${d.title} | 위즈더플래닝`,
      description: d.desc,
      url: `https://wiztheplanning.com${url}`,
      siteName: "위즈더플래닝",
      images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: `위즈더플래닝 ${s.n}` }],
      locale: "ko_KR",
      type: "website",
    },
    // 새 쪽마다 X(트위터) 카드도 그 쪽 제목·설명으로(안 두면 레이아웃의 홈 글이 나감)
    twitter: { card: "summary_large_image", title: `${d.title} | 위즈더플래닝`, description: d.desc, images: [`/og-home.jpg?v=${timestamp}`] },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!SERVICES.some((s) => s.slug === slug)) notFound()
  // 2026-11-07 대표: AI 검색 최적화(GEO)·SEO 쪽은 새로 짠 GeoDoc(언론 숫자·realGEO 관제실·미디어 믹스). 나머지 7쪽은 ServiceDoc
  if (slug === "search") return <GeoDoc />
  if (slug === "performance") return <PerfDoc />
  // 2026-11-08 대표: 인플루언서 쪽도 새로 짠 InflDoc(원본 한 편 → 2차 광고·3차 자산 흐름, 비교표, 예시 리포트·AI 답변)
  if (slug === "influencer") return <InflDoc />
  return <ServiceDoc slug={slug} />
}
