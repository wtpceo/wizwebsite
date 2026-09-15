import type { Metadata } from "next"
import LocaleLanding from "@/components/i18n/LocaleLanding"
import { LANDING } from "@/lib/i18n/content"
import { BASE_URL, getLocale, hreflangAlternates } from "@/lib/i18n/config"

const t = LANDING.en
const L = getLocale("en")
const URL = `${BASE_URL}${L.prefix}`

export const metadata: Metadata = {
  // absolute로 지정해 루트 레이아웃의 "%s | 위즈더플래닝" 한국어 접미사가 붙지 않게
  title: { absolute: t.metaTitle },
  description: t.metaDescription,
  keywords: [
    "marketing agency Korea", "business in Korea marketing", "foreign business owner Korea",
    "GEO", "AI search optimization Korea", "Naver marketing for foreigners",
    "Korean website for foreigners", "ChatGPT recommendation Korea", "SEO agency Korea",
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
  areaServed: { "@type": "Country", name: "South Korea" },
  foundingDate: "2016",
  inLanguage: "en",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
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
      <LocaleLanding locale="en" t={t} />
    </>
  )
}
