import type { Metadata } from "next"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import GeneralHero from "@/components/general/GeneralHero"
import WhyLocal from "@/components/general/WhyLocal"
import GeneralReportPreview from "@/components/general/GeneralReportPreview"
import WhyFreeGeneral from "@/components/general/WhyFreeGeneral"
import GeneralApplyForm from "@/components/general/GeneralApplyForm"
import HowWeReport from "@/components/sections/HowWeReport"
import GeneralFaq from "@/components/general/GeneralFaq"
import ForceTopOnLoad from "@/components/ForceTopOnLoad"
import { GENERAL_FAQ } from "@/lib/general-faq-data"

// 업종 무관 무료 AI 검색 진단 — 병원판(/medical-diagnosis)의 짝 페이지.
// 메타광고 광고세트 B의 전용 랜딩이다. 두 랜딩의 전환 구조(폼 제출 1단계 → Lead)를
// 동일하게 유지해야 병원 vs 업종무관 비교가 성립한다.
// 근거: 04_brief/2026-08-18_local-geo_brief_v1.md §0

const BASE_URL = "https://wiztheplanning.com"
const PAGE_URL = `${BASE_URL}/diagnosis`

export const metadata: Metadata = {
  title: "무료 AI 검색 진단 | ChatGPT·네이버 AI에 우리 가게가 나올까요?",
  description:
    "업종 무관 무료 AI 검색 진단. 네이버 AI·ChatGPT·제미나이가 우리 가게를 추천하는지, 잘못된 정보를 안내하는지, 경쟁 가게와 격차가 얼마인지 실측 리포트로 알려드립니다. 식당·카페·펜션·학원·헬스장·미용실 모두 가능.",
  keywords: [
    "AI 검색 최적화", "GEO 마케팅", "로컬 마케팅", "ChatGPT 가게 추천",
    "네이버 AI 맛집", "무료 사이트 진단", "소상공인 마케팅", "검색 최적화",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "무료 AI 검색 진단 | 위즈더플래닝",
    description:
      "네이버 AI·ChatGPT·제미나이에 우리 가게가 어떻게 나오는지 무료로 진단해 드립니다. 업종은 가리지 않습니다.",
    siteName: "위즈더플래닝",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "무료 AI 검색 진단 | 위즈더플래닝",
    description:
      "네이버 AI·ChatGPT·제미나이에 우리 가게가 어떻게 나오는지 무료로 진단해 드립니다. 업종은 가리지 않습니다.",
  },
}

// Service — AI가 "무엇을 제공하는 서비스인가"를 이해하도록
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "무료 AI 검색 진단",
  serviceType: "AI 검색 최적화(GEO) 진단",
  url: PAGE_URL,
  provider: {
    "@type": "ProfessionalService",
    name: "위즈더플래닝",
    url: BASE_URL,
  },
  areaServed: { "@type": "Country", name: "대한민국" },
  audience: {
    "@type": "Audience",
    audienceType: "오프라인 로컬 사업자 (음식점·카페·펜션·학원·헬스장·미용실 등)",
  },
  description:
    "네이버 AI·ChatGPT·제미나이 세 엔진에 실제 손님 질문을 던져 우리 가게의 언급 점유율(SoV), 오정보 여부, 경쟁 가게 대비 격차를 측정한 진단 리포트를 무료로 제공합니다.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KRW",
    availability: "https://schema.org/InStock",
    description: "업종 무관 무료 진단",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GENERAL_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "무료 AI 검색 진단", item: PAGE_URL },
  ],
}

export default function DiagnosisPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ForceTopOnLoad />
      <Header />
      <GeneralHero />
      <WhyLocal />
      <GeneralReportPreview />
      <WhyFreeGeneral />
      <HowWeReport />
      <GeneralApplyForm />
      <GeneralFaq />
      <Footer />
    </main>
  )
}
