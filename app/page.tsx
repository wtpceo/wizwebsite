import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import AgencyHero from "@/components/agency/AgencyHero"
import StatsBand from "@/components/agency/StatsBand"
import CoreServices from "@/components/agency/CoreServices"
import ProductionTeam from "@/components/agency/ProductionTeam"
import PortfolioShowcase from "@/components/agency/PortfolioShowcase"
import MatzipTown from "@/components/agency/MatzipTown"
import GuidePreview from "@/components/agency/GuidePreview"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FaqSection from "@/components/sections/FaqSection"
import ContactSection from "@/components/sections/ContactSection"
import { FAQ_ITEMS } from "@/lib/faq-data"

// FAQPage 구조화 데이터 — 검색엔진·AI가 질문/답변을 그대로 인용할 수 있게 서버 렌더링으로 주입
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <AgencyHero />
      <StatsBand />
      <CoreServices />
      <ProductionTeam />
      <PortfolioShowcase />
      <MatzipTown />
      <TestimonialsSection />
      <FaqSection />
      <GuidePreview />
      <ContactSection />
      <Footer />
    </main>
  )
}
