import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { BUSINESS_ARTICLES } from "@/lib/business-articles"

const TITLE = "기업 마케팅 인사이트 | 위즈더플래닝"
const DESC =
  "마케팅 담당자를 위한 글입니다. 대행사 선정과 RFP, 예산과 성과 측정, AI 검색 대응처럼 조직에서 결정해야 하는 문제를 실측과 실제 진행 경험으로 정리합니다."
const URL = "https://wiztheplanning.com/business/insights"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/business/insights" },
  openGraph: { title: TITLE, description: DESC, url: URL, images: ["/covers/business-rfp.jpg"], type: "website" },
}

const listJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "기업 마케팅 인사이트",
  itemListElement: BUSINESS_ARTICLES.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://wiztheplanning.com${a.href}`,
    name: a.title,
  })),
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#070b14] py-16 md:py-20">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="container relative mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">기업 마케팅 인사이트</p>
            <h1 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
              조직에서 결정해야 하는 문제들
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              대행사 선정과 RFP, 예산과 성과 측정, AI 검색 대응. 마케팅 담당자가 사내 설득에 쓸 수 있게
              근거를 붙여 씁니다.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {BUSINESS_ARTICLES.map((a) => (
                <Link key={a.href} href={a.href} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg">
                  <span className="block aspect-[16/9] overflow-hidden bg-slate-100">
                    <img src={a.cover} alt="" width={1200} height={675} className="h-full w-full object-cover" />
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-bold tracking-[0.15em] text-emerald-600">{a.kicker}</span>
                    <span className="mt-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-emerald-700">{a.title}</span>
                    <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">{a.desc}</span>
                    <span className="mt-auto pt-4 text-xs text-gray-400">{a.date}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-12 rounded-2xl border border-gray-200 bg-[#f6f8f7] p-6 text-center">
              <p className="text-base font-bold text-gray-900">제안이 필요하시면 바로 요청하셔도 됩니다</p>
              <Link href="/business/contact" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#00b57f] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#00a172]">
                제안 요청 보내기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
