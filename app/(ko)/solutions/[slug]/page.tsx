import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SolutionDoc from "@/components/shortform/SolutionDoc"
import { SOLUTIONS } from "@/components/shortform/content"
import { SOL_DETAILS } from "@/components/shortform/details"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 업종별 솔루션 3쪽(2026-11-04 리뉴얼) — /solutions/local · growth · enterprise
export const dynamicParams = false

export function generateStaticParams() {
  return SOLUTIONS.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = SOL_DETAILS[slug]
  if (!d) return {}
  const url = `/solutions/${slug}`
  return {
    title: d.title,
    description: d.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${d.title} | 위즈더플래닝`,
      description: d.desc,
      url: `https://wiztheplanning.com${url}`,
      siteName: "위즈더플래닝",
      images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: d.title }],
      locale: "ko_KR",
      type: "website",
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!SOLUTIONS.some((f) => f.slug === slug)) notFound()
  return <SolutionDoc slug={slug} />
}
