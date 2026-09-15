import type { Metadata } from "next"
import EnHeader from "@/components/en/EnHeader"
import EnFooter from "@/components/en/EnFooter"
import { EnHero, EnCtaButtons, EnSection, EnCard, EnSteps, EnFaq, faqJsonLd, EnBottomCta } from "@/components/en/EnSections"
import { EN_BASE } from "@/lib/en/site"

// 해외 마케팅 대행사 대상 한국 실행 파트너 페이지.
// 화이트라벨 계약서는 법무 검토 전이라 "서면 합의로 정한다"까지만 쓰고 조건·수수료·독점은 약속하지 않는다.
const PATH = "/en/agency-partners"
const TITLE = "Korea Execution Partner for Marketing Agencies"
const DESC =
  "For marketing agencies whose clients want Korea. We handle Korean-language execution on Naver, Google and AI search, plus weekly measurement, while you keep the client relationship. Branding and confidentiality are agreed in writing."

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: { canonical: PATH, languages: { en: `${EN_BASE}${PATH}` } },
  openGraph: { title: TITLE, description: DESC, url: `${EN_BASE}${PATH}`, images: ["/og-image.jpg"], type: "website", locale: "en_US" },
}

const FAQ = [
  {
    q: "Can you work under our agency's brand?",
    a: "We can discuss it. Whether our name appears to your client, and how reports are branded, is agreed in a written agreement before any work starts.",
  },
  {
    q: "Will you contact our client directly?",
    a: "Not unless you ask us to. You keep the client relationship, and the terms on direct contact are set out in the agreement.",
  },
  {
    q: "Do we get access to your monitoring system?",
    a: "No. We do not sell or give access to the system. We share reports with the measurements and what changed, which you can pass on to your client.",
  },
  {
    q: "Which clients are a good fit?",
    a: "Brands that need Korean customers to find them: consumer products, services, travel and hospitality, education, software and healthcare, subject to Korean advertising rules for regulated categories.",
  },
]

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <EnHeader />
      <main className="flex-1">
        <EnHero
          kicker="For agencies"
          title="Your client wants Korea. We can be your team on the ground."
          lead="Korean-language execution on Naver, Google and AI search is hard to run from abroad. We do the work in Seoul and report back, so you can offer Korea without hiring for it."
        >
          <EnCtaButtons primary={{ label: "Start a conversation", href: "/en/contact" }} secondary={{ label: "See how we measure", href: "/en/how-we-measure" }} />
        </EnHero>

        <EnSection kicker="What we take on" title="Korean execution you can add to your offer">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <EnCard title="AI search baseline">How Naver AI Briefing, ChatGPT, Gemini and Perplexity answer Korean questions about your client&apos;s category, and which sources they cite.</EnCard>
            <EnCard title="Weekly measurement">The same questions re-measured every week, reported so you can share results with your client.</EnCard>
            <EnCard title="Korean web pages">Native Korean landing pages or site sections, built to be read by search engines and AI crawlers.</EnCard>
            <EnCard title="Naver content">Naver Blog content and, where relevant, Naver Place.</EnCard>
            <EnCard title="Paid media in Korea">Meta and Google campaigns for Korean audiences.</EnCard>
            <EnCard title="Korean content">Copy, photo and video made for Korean customers, not machine-translated.</EnCard>
          </div>
        </EnSection>

        <EnSection tone="gray" kicker="Working together" title="How we work with agencies">
          <div className="grid gap-5 md:grid-cols-3">
            <EnCard title="You keep the client">We work through you. Contact with your client happens only as agreed.</EnCard>
            <EnCard title="Terms in writing first">Scope, branding, confidentiality and data handling are agreed in a written agreement before work begins.</EnCard>
            <EnCard title="No guarantees we cannot keep">We do not promise rankings or AI mentions, and we ask partners not to promise them either.</EnCard>
          </div>
        </EnSection>

        <EnSection kicker="Process" title="Getting started">
          <EnSteps
            steps={[
              { title: "Intro", desc: "Tell us about your agency, the client and what they want from Korea." },
              { title: "Fit check", desc: "We look at the category and what already exists in Korean, and say honestly whether we can help." },
              { title: "Agreement", desc: "Scope, branding, confidentiality and reporting format in writing." },
              { title: "Delivery", desc: "Execution in Seoul, with regular reports to your team." },
            ]}
          />
        </EnSection>

        <EnSection tone="gray" title="Frequently asked questions">
          <EnFaq items={FAQ} />
        </EnSection>

        <EnBottomCta title="Have a client asking about Korea?" lead="Tell us about the client and the timeline. We reply by email in English." />
      </main>
      <EnFooter />
    </div>
  )
}
