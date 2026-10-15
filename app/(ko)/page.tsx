import "@/styles/rebrand.css"
import SiteHeader from "@/components/rebrand/SiteHeader"
import {
  Hero,
  Stage,
  Report,
  Runs,
  Clients,
  Work,
  Ax,
  Family,
  Faq,
  Close,
  SiteFooter,
} from "@/components/rebrand/HomeSections"
import { FAQ_ITEMS } from "@/lib/faq-data"

// FAQPage 구조화 데이터. 화면의 '자주 받는 질문'과 같은 내용을 서버 렌더링으로 넣는다
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

// 2026-10 리브랜딩 홈. 컨셉: 매체가 아니라 지금 퍼널 단계에서 시작한다
export default function Home() {
  return (
    <div className="rb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Stage />
        <Report />
        <Runs />
        <Work />
        <Clients />
        <Ax />
        <Family />
        <Faq />
        <Close />
      </main>
      <SiteFooter />
    </div>
  )
}
