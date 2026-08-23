import type { Metadata } from "next"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import MedicalHero from "@/components/medical/MedicalHero"
import WhyMedical from "@/components/medical/WhyMedical"
import ReportPreview from "@/components/medical/ReportPreview"
import WhyFree from "@/components/medical/WhyFree"
import DiagnosisApplyForm from "@/components/medical/DiagnosisApplyForm"
import HowWeReport from "@/components/sections/HowWeReport"
import MedicalFaq from "@/components/medical/MedicalFaq"
import ForceTopOnLoad from "@/components/ForceTopOnLoad"
import { MEDICAL_FAQ } from "@/lib/medical-faq-data"

const BASE_URL = "https://wiztheplanning.com"
const PAGE_URL = `${BASE_URL}/medical-diagnosis`

export const metadata: Metadata = {
  title: "병원 무료 AI 검색 진단 | ChatGPT·네이버 AI에 우리 병원이 나올까요?",
  description:
    "병원·의원 전용 무료 AI 검색 진단. 네이버 AI·ChatGPT·제미나이가 우리 병원을 추천하는지, 잘못된 정보를 안내하는지, 경쟁 병원과 격차가 얼마인지 실측 리포트로 알려드립니다. 병원만, 조건 없이 무료.",
  keywords: [
    "병원 AI 검색 최적화", "병원 GEO", "의원 마케팅", "ChatGPT 병원 추천",
    "네이버 AI 병원", "병원 무료 진단", "의료 마케팅", "병원 검색 최적화",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "병원 무료 AI 검색 진단 | 위즈더플래닝",
    description:
      "네이버 AI·ChatGPT·제미나이에 우리 병원이 어떻게 나오는지 무료로 진단해 드립니다. 병원·의원 전용.",
    siteName: "위즈더플래닝",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "병원 무료 AI 검색 진단 | 위즈더플래닝",
    description:
      "네이버 AI·ChatGPT·제미나이에 우리 병원이 어떻게 나오는지 무료로 진단해 드립니다. 병원·의원 전용.",
  },
}

// Service — AI가 "무엇을 제공하는 서비스인가"를 이해하도록
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "병원 무료 AI 검색 진단",
  serviceType: "병원·의원 AI 검색 최적화(GEO) 진단",
  url: PAGE_URL,
  provider: {
    "@type": "ProfessionalService",
    name: "위즈더플래닝",
    url: BASE_URL,
  },
  areaServed: { "@type": "Country", name: "대한민국" },
  audience: {
    "@type": "Audience",
    audienceType: "병원·의원 (안과·치과·피부과·정형외과·한의원 등)",
  },
  description:
    "네이버 AI·ChatGPT·제미나이 세 엔진에 실제 환자 질문을 던져 우리 병원의 언급 점유율(SoV), 오정보 여부, 경쟁 병원 대비 격차를 측정한 진단 리포트를 무료로 제공합니다.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KRW",
    availability: "https://schema.org/InStock",
    description: "병원·의원 대상 무료 진단",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MEDICAL_FAQ.map((item) => ({
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
    { "@type": "ListItem", position: 2, name: "병원 무료 AI 검색 진단", item: PAGE_URL },
  ],
}

export default function MedicalDiagnosisPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ForceTopOnLoad />
      <Header />
      <MedicalHero />
      <WhyMedical />
      <ReportPreview />
      <WhyFree />
      <HowWeReport />
      <DiagnosisApplyForm />
      <MedicalFaq />
      <Footer />
    </main>
  )
}
