import type { Metadata } from "next"
import EnHeader from "@/components/en/EnHeader"
import EnFooter from "@/components/en/EnFooter"
import { EnInsightCards, EnBottomCta } from "@/components/en/EnSections"
import { EN_BASE } from "@/lib/en/site"
import { EN_INSIGHTS } from "@/lib/en/insights"

const PATH = "/en/insights"
const TITLE = "Insights: Marketing in Korea, Naver and AI Search"
const DESC =
  "Research and case studies from WizThePlanning on how Korean customers find brands: Naver, Google, AI assistants and what gets cited. Measured data, anonymised client cases."

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: { canonical: PATH, languages: { en: `${EN_BASE}${PATH}`, ko: `${EN_BASE}/guide` } },
  openGraph: { title: TITLE, description: DESC, url: `${EN_BASE}${PATH}`, images: ["/covers/geo.jpg"], type: "website", locale: "en_US" },
}

const listJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: TITLE,
  itemListElement: EN_INSIGHTS.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: `${EN_BASE}${a.href}`, name: a.title })),
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <EnHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#070b14] py-16 md:py-20">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="container relative mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">INSIGHTS</p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-white">How Korean customers find brands</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              Measured data and anonymised case studies on Naver, Google and AI search in Korea. Our Korean-language archive has more.
            </p>
          </div>
        </section>
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <EnInsightCards />
          </div>
        </section>
        <EnBottomCta title="Want this analysis for your brand?" lead="We can show how Naver, Google and AI assistants describe your brand in Korean today." />
      </main>
      <EnFooter />
    </div>
  )
}
