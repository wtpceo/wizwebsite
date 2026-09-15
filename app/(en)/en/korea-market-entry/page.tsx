import type { Metadata } from "next"
import EnHeader from "@/components/en/EnHeader"
import EnFooter from "@/components/en/EnFooter"
import { EnHero, EnCtaButtons, EnSection, EnCard, EnSteps, EnFaq, faqJsonLd, EnInsightCards, EnBottomCta } from "@/components/en/EnSections"
import { EN_BASE } from "@/lib/en/site"

// 해외 기업의 한국 진출 마케팅 서비스 페이지. 가격·결과 보장은 쓰지 않는다(법무 검토 전).
const PATH = "/en/korea-market-entry"
const TITLE = "Korea Market Entry Marketing: Naver, AI Search and Ads"
const DESC =
  "Marketing for brands launching in Korea. We set up the Korean website, Naver presence and paid campaigns Korean customers need, and measure how Naver AI Briefing, ChatGPT, Gemini and Perplexity describe you every week."

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: { canonical: PATH, languages: { en: `${EN_BASE}${PATH}` } },
  openGraph: { title: TITLE, description: DESC, url: `${EN_BASE}${PATH}`, images: ["/covers/geo.jpg"], type: "website", locale: "en_US" },
}

const FAQ = [
  {
    q: "We already have a global English website. Is that enough for Korea?",
    a: "Usually not. Korean customers search in Korean, and AI assistants answer Korean questions mostly from Korean-language sources. A Korean-language section on your own domain, readable by AI crawlers, gives those engines something to cite. Naver presence is a separate job, because Naver's AI Briefing draws on Naver's own index.",
  },
  {
    q: "Can we rely on Naver alone?",
    a: "No. Naver's robots.txt blocks outside AI crawlers such as GPTBot and OAI-SearchBot, so content that exists only on Naver Blog or Cafe cannot be read by ChatGPT or Perplexity. Customers who ask those assistants will not see it.",
  },
  {
    q: "How long does it take before AI assistants mention us?",
    a: "It varies by category and starting point, and we do not guarantee mentions or rankings. In one published case, a clinic's ChatGPT mention rate went from 17% to 93% when re-measured 39 days after the baseline. That is one case, not a promise.",
  },
  {
    q: "Do you work in English?",
    a: "Yes. We communicate with international clients in English by email and calls, and the Korean-language work is done by our team in Seoul.",
  },
  {
    q: "What does it cost?",
    a: "We quote after a baseline, based on scope: which channels, how many pages or campaigns, and how long. We do not publish fixed packages for market entry.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Korea market entry marketing",
  serviceType: "Marketing agency services",
  url: `${EN_BASE}${PATH}`,
  description: DESC,
  areaServed: { "@type": "Country", name: "South Korea" },
  availableLanguage: ["en", "ko"],
  provider: { "@id": `${EN_BASE}/en#organization`, "@type": "ProfessionalService", name: "WizThePlanning", url: `${EN_BASE}/en` },
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <EnHeader />
      <main className="flex-1">
        <EnHero
          kicker="Korea market entry"
          title="Launching in Korea? Be findable where Korean customers look"
          lead="Korean customers search on Naver, on Google and increasingly by asking AI assistants. Each reads different sources. We build the Korean presence each one needs and measure the result every week."
        >
          <EnCtaButtons primary={{ label: "Request a baseline", href: "/en/contact" }} secondary={{ label: "Read the 2026 guide", href: "/en/insights/marketing-in-korea-2026" }} />
        </EnHero>

        <EnSection kicker="The landscape" title="Two discovery paths, one launch plan" lead="Planning for only one of these paths leaves the other empty.">
          <div className="grid gap-5 md:grid-cols-2">
            <EnCard title="The Naver ecosystem" href="/en/insights/naver-vs-google-korea" linkLabel="Naver vs Google in Korea">
              Naver search, Naver Blog, Cafe and Place. Naver&apos;s AI Briefing summarises from Naver&apos;s own index, so presence inside Naver matters for Naver users.
            </EnCard>
            <EnCard title="The open web" href="/en/insights/naver-blocks-ai-crawlers" linkLabel="Why Naver content is invisible to ChatGPT">
              Google, ChatGPT, Gemini and Perplexity read open websites. Naver blocks their crawlers, so your own Korean-language pages carry this path.
            </EnCard>
          </div>
        </EnSection>

        <EnSection tone="gray" kicker="What we set up" title="Scope for a Korea launch">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <EnCard title="Baseline of AI answers">Korean questions your customers ask, sent to Naver AI Briefing, ChatGPT, Gemini and Perplexity, with mentions and cited sources recorded.</EnCard>
            <EnCard title="Korean website pages">Native Korean pages on your own domain, with clear facts AI can quote and crawler access checked.</EnCard>
            <EnCard title="Naver presence">Naver Blog content, and Naver Place for physical locations.</EnCard>
            <EnCard title="Consistent business facts">The same name, product facts and contact details across your site and Korean platforms, so engines do not repeat outdated information.</EnCard>
            <EnCard title="Paid campaigns">Meta and Google ads for Korean audiences, aligned with the organic work.</EnCard>
            <EnCard title="Weekly measurement">The same questions re-measured every week, so progress is compared on the same basis.</EnCard>
          </div>
        </EnSection>

        <EnSection kicker="Process" title="How an engagement starts">
          <EnSteps
            steps={[
              { title: "Intro by email or call", desc: "Your product, target customers, launch date and what already exists in Korean." },
              { title: "Baseline", desc: "Where you appear today across Naver, Google and AI assistants, and which sources they use." },
              { title: "Proposal", desc: "Priorities, scope and timeline in writing, in English." },
              { title: "Execution and reporting", desc: "Korean pages, content and campaigns, with weekly measurement against the baseline." },
            ]}
          />
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-gray-500">
            What we do not do: we do not guarantee rankings or AI mentions, we do not sell access to our monitoring system, and we do not name clients publicly without their permission.
          </p>
        </EnSection>

        <EnSection tone="gray" kicker="Proof" title="Case studies">
          <div className="grid gap-5 md:grid-cols-2">
            <EnCard title="Clinic: ChatGPT mentions from 17% to 93%" href="/en/insights/case-clinic-chatgpt" linkLabel="Read the case">
              Named by Naver AI and Gemini for all 10 test questions but by ChatGPT for only 4. Re-measured 39 days later with the same model and questions.
            </EnCard>
            <EnCard title="Dental: a 3-page site was cited first" href="/en/insights/case-dental-llms-txt" linkLabel="Read the case">
              A 167-page site was passed over for a 3-page competitor until its AI guide file was rewritten as a fact sheet.
            </EnCard>
          </div>
        </EnSection>

        <EnSection title="Frequently asked questions">
          <EnFaq items={FAQ} />
        </EnSection>

        <EnSection tone="gray" kicker="Insights" title="Read before you launch">
          <EnInsightCards limit={3} />
        </EnSection>

        <EnBottomCta title="Tell us about your Korea launch" lead="Share your product, target customers and timeline. We reply by email in English." />
      </main>
      <EnFooter />
    </div>
  )
}
