import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { BUSINESS_ARTICLES } from "@/lib/business-articles"
import { fmtDate } from "@/components/guide/format"
import s from "@/components/guide/guide.module.css"

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

// 2026-11 리브랜딩: 표지 카드 대신 면 막대 목록, 하단 상자는 잉크 면. 스타일은 components/guide/guide.module.css
export default function Page() {
  return (
    <div className={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <Header />
      <main className={s.main}>
        <header className={s.listHead}>
          <h1 className={`${s.listTitle} ${s.listTitleLong}`}>조직에서 결정해야 하는 문제들</h1>
          <p className={s.listLede}>
            대행사 선정과 RFP, 예산과 성과 측정, AI 검색 대응. 마케팅 담당자가 사내 설득에 쓸 수 있게 근거를 붙여 씁니다.
          </p>
        </header>

        <section className={s.listRows} aria-label="기업 마케팅 인사이트">
          <div className={s.rows}>
            {BUSINESS_ARTICLES.map((a) => (
              <Link key={a.href} href={a.href} className={s.row}>
                <span className={s.rowMeta}>
                  <b>{a.kicker}</b>
                  <span className={s.num}>{fmtDate(a.updated ?? a.date)}</span>
                </span>
                <h2 className={s.rowTitle}>{a.title}</h2>
                <span className={s.rowDesc}>{a.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={s.cta} aria-label="제안 요청">
          <h2 className={s.ctaTitle}>제안이 필요하시면 바로 요청하셔도 됩니다</h2>
          <Link href="/business/contact" className={`${s.btn} ${s.ctaBtn}`}>
            제안 요청 보내기
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
