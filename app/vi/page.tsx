import type { Metadata } from "next"
import LocaleLanding from "@/components/i18n/LocaleLanding"
import { LANDING } from "@/lib/i18n/content"
import { BASE_URL, getLocale, hreflangAlternates } from "@/lib/i18n/config"

const t = LANDING.vi
const L = getLocale("vi")
const URL = `${BASE_URL}${L.prefix}`

export const metadata: Metadata = {
  // absolute로 지정해 루트 레이아웃의 "%s | 위즈더플래닝" 한국어 접미사가 붙지 않게
  title: { absolute: t.metaTitle },
  description: t.metaDescription,
  keywords: [
    "marketing người Việt tại Hàn", "mở tiệm ở Hàn Quốc", "chủ tiệm người Việt Hàn Quốc",
    "GEO", "tối ưu tìm kiếm AI", "làm website tiếng Hàn", "marketing Naver",
    "ChatGPT gợi ý", "kinh doanh tại Hàn Quốc", "công ty marketing tiếng Việt",
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
  inLanguage: "vi",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocaleLanding locale="vi" t={t} />
    </>
  )
}
