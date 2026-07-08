import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/sections/HeroSection"
import GeoSection from "@/components/sections/GeoSection"
import DiagnosisSection from "@/components/sections/DiagnosisSection"
import FocusMediaBanner from "@/components/sections/FocusMediaBanner"
import ServicesSection from "@/components/sections/ServicesSection"
import StrategySection from "@/components/sections/StrategySection"
import PricingSection from "@/components/sections/PricingSection"
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
      <HeroSection />
      <GeoSection />
      <DiagnosisSection />
      <ServicesSection />
      <StrategySection />
      <FocusMediaBanner />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
