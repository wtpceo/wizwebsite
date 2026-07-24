import type { Metadata } from "next"
import LocaleLanding from "@/components/i18n/LocaleLanding"
import { LANDING } from "@/lib/i18n/content"
import { BASE_URL, getLocale, hreflangAlternates } from "@/lib/i18n/config"

const t = LANDING.zh
const L = getLocale("zh")
const URL = `${BASE_URL}${L.prefix}`

export const metadata: Metadata = {
  // absolute로 지정해 루트 레이아웃의 "%s | 위즈더플래닝" 한국어 접미사가 붙지 않게
  title: { absolute: t.metaTitle },
  description: t.metaDescription,
  keywords: [
    "在韩华人营销", "韩国开店营销", "华人老板 韩国", "GEO", "AI搜索优化",
    "韩文官网制作", "Naver营销", "ChatGPT 推荐", "在韩国做生意", "中文营销代理",
  ],
  alternates: {
    canonical: L.prefix,
    languages: hreflangAlternates(),
  },
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: URL,
    images: ["/og-image.jpg"],
    locale: L.ogLocale,
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WizThePlanning (위즈더플래닝)",
  url: URL,
  description: t.metaDescription,
  areaServed: { "@type": "Country", name: "대한민국" },
  foundingDate: "2016",
  inLanguage: "zh-Hans",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "zh-Hans",
  mainEntity: t.faq.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <LocaleLanding locale="zh" t={t} />
    </>
  )
}
