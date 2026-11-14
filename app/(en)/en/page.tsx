import type { Metadata } from "next"
import IntlHome from "@/components/intl/IntlHome"
import { INTL_HOME } from "@/lib/intl/home"
import { BASE_URL, hreflangFor } from "@/lib/i18n/config"
import { share } from "@/lib/share-meta"

// 영문 회사 홈(해외 기업·대행사 대상). 영문 하위 쪽(시장 진출·대행사 협업·측정 방식·인사이트·문의)은 그대로 둔다.
// 11-14 대표 「외국어 페이지도 완벽하게 업데이트」: 국문 홈과 같은 디자인·내용의 기업 대상 회사 홈. 문구는 lib/intl/home-en.json(Gemini 의역).
const t = INTL_HOME.en
const PATH = "/en"
const URL = `${BASE_URL}${PATH}`

export const metadata: Metadata = share(
  {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    alternates: { canonical: PATH, languages: hreflangFor(PATH) },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: URL,
      images: [{ url: "/og-en.jpg", alt: `${t.hero.h1a} ${t.hero.h1b}` }],
      type: "website",
      locale: "en_US",
    },
  },
  "en",
)

const orgLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/en#organization`,
  name: "WizThePlanning",
  alternateName: ["위즈더플래닝", "Wiz The Planning"],
  url: URL,
  email: "wiz@wiztheplanning.com",
  foundingDate: "2016",
  address: { "@type": "PostalAddress", addressLocality: "Seoul", addressCountry: "KR" },
  areaServed: { "@type": "Country", name: "South Korea" },
  inLanguage: "en",
  description: t.meta.description,
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: t.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <IntlHome locale="en" />
    </>
  )
}
