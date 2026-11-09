import type { Metadata } from "next"
import Link from "next/link"
import { DocShell, Crumb } from "@/components/shortform/DocParts"
import { Icon } from "@/components/shortform/icons"
import { BIZ_CTA } from "@/components/business/BizArticle"
import { BUSINESS_ARTICLES } from "@/lib/business-articles"

const TITLE = "기업 마케팅 인사이트 | 위즈더플래닝"
const DESC =
  "마케팅 실무자와 의사결정권자를 위한 인사이트 칼럼입니다. 대행사 선정과 RFP, 예산 편성과 성과 측정, AI 검색 대응 등 조직 내 주요 의사결정 과제를 실측 데이터와 수행 경험을 바탕으로 정리합니다."
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

// 2026-11-05 사장님 「인사이트도 새 디자인으로」 — 제목·문구·주소·목록 구조화 데이터는 그대로, 쪽 모양만 새 디자인
export default function Page() {
  return (
    <DocShell cta={BIZ_CTA}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <section className="dp-hero gd-hero t-k" aria-label="기업 마케팅 인사이트">
        <div className="dp-w gd-hero-in">
          <Crumb items={[{ name: "기업 마케팅", href: "/business" }, { name: "인사이트" }]} />
          <p className="dp-no">기업 마케팅 인사이트</p>
          <h1>기업 마케팅 의사결정을 위한 실무 가이드</h1>
          <p className="dp-lead">
            대행사 선정과 RFP, 예산 편성과 성과 측정, 생성형 AI 검색 대응까지. 마케팅 담당자가 사내 의사결정과 보고에 즉시 활용할 수 있도록 실측 근거를 바탕으로 정리했습니다.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {BUSINESS_ARTICLES.map((a) => (
              <Link key={a.href} href={a.href} className="group flex flex-col overflow-hidden rounded-lg border border-[#E3EAF2] bg-white transition-colors hover:border-[#2A93C2]">
                <span className="block aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={a.cover} alt="" width={1200} height={675} className="h-full w-full object-cover" />
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-bold text-[#1E6C9F]">{a.kicker}</span>
                  <span className="mt-2 text-lg font-bold leading-snug text-[#0F1B2D] group-hover:text-[#1E6C9F]">{a.title}</span>
                  <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#4B5565]">{a.desc}</span>
                  <span className="mt-auto pt-4 text-xs text-[#4B5565]">{a.date}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="gd-cta" id="contact" aria-label="제안 요청">
        <div className="dp-w gd-cta-in">
          <div>
            <h2>맞춤 캠페인 제안 요청</h2>
          </div>
          <div className="gd-cta-b">
            <Link className="p1" href="/business/contact">
              제안 요청 보내기 <Icon k="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </DocShell>
  )
}
