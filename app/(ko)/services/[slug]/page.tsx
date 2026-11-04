import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceDoc from "@/components/shortform/ServiceDoc"
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
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!SERVICES.some((s) => s.slug === slug)) notFound()
  return <ServiceDoc slug={slug} />
}
