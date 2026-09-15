import type { Metadata } from "next"
import EnHeader from "@/components/en/EnHeader"
import EnFooter from "@/components/en/EnFooter"
import { EnHero, EnCtaButtons, EnSection, EnCard, EnSteps, EnInsightCards, EnBottomCta } from "@/components/en/EnSections"
import { EN_BASE, EN_ORG_JSONLD } from "@/lib/en/site"

// 영문 허브. 대외 영문 브랜드는 WizThePlanning. 해외 기업(한국 진출)·해외 대행사·한국 내 외국인 사업주 세 갈래로 나눈다.
// 수치는 공개된 사례·가이드에 있는 것만 쓴다. 가격·결과 보장 문구는 법무 검토 전이므로 쓰지 않는다.
const TITLE = "WizThePlanning | Korea Marketing Agency for Naver and AI Search"
const DESC =
  "Seoul-based marketing agency since 2016, working with 7,000+ advertisers. We help brands get found in Korea across Naver, Google and AI assistants like ChatGPT, Gemini and Perplexity, and we measure it every week."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/en", languages: { en: `${EN_BASE}/en`, "x-default": `${EN_BASE}/en` } },
  openGraph: { title: TITLE, description: DESC, url: `${EN_BASE}/en`, images: ["/og-image.jpg"], type: "website", locale: "en_US" },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WizThePlanning",
  url: `${EN_BASE}/en`,
  inLanguage: "en",
  publisher: { "@id": `${EN_BASE}/en#organization` },
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(EN_ORG_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <EnHeader />
      <main className="flex-1">
        <EnHero
          kicker="Korea marketing agency · Seoul · since 2016"
          title="Get your brand found in Korea: on Naver, Google and AI assistants"
          lead="Korean customers discover brands through two paths that do not replace each other: Naver's own ecosystem, and the open web that ChatGPT, Gemini, Perplexity and Google read. We work on both, and we measure where you appear every week."
        >
          <EnCtaButtons primary={{ label: "Talk to us", href: "/en/contact" }} secondary={{ label: "How we measure", href: "/en/how-we-measure" }} />
          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["2016", "In business since"],
              ["7,000+", "Advertisers worked with"],
              ["4", "AI engines measured weekly"],
              ["93%", "ChatGPT mention rate in one clinic case, up from 17%"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl font-extrabold text-white md:text-3xl">{v}</dd>
                <dd className="mt-1 text-xs leading-snug text-slate-400">{l}</dd>
              </div>
            ))}
          </dl>
        </EnHero>

        <EnSection kicker="Who we work with" title="Three ways teams work with us">
          <div className="grid gap-5 md:grid-cols-3">
            <EnCard title="Brands entering Korea" href="/en/korea-market-entry" linkLabel="Korea market entry">
              You are launching a product or service for Korean customers and need to show up where they search: Naver, Google and the AI assistants they ask for recommendations.
            </EnCard>
            <EnCard title="Marketing agencies" href="/en/agency-partners" linkLabel="For agencies">
              Your client wants Korea and your team does not work in Korean or on Naver. We handle Korean execution and measurement, with confidentiality and branding agreed in writing.
            </EnCard>
            <EnCard title="Businesses already in Korea" href="/en/business-owners-in-korea" linkLabel="For businesses in Korea">
              You run a shop, clinic or service in Korea and want local customers to find you on Naver Map, in search and in AI answers.
            </EnCard>
          </div>
        </EnSection>

        <EnSection tone="gray" kicker="Why Korea is different" title="What changes when you market in Korea">
          <div className="grid gap-5 md:grid-cols-3">
            <EnCard title="Naver blocks outside AI crawlers" href="/en/insights/naver-blocks-ai-crawlers">
              Naver&apos;s robots.txt names GPTBot, OAI-SearchBot, ClaudeBot and others. Content that lives only on Naver Blog or Cafe cannot be read by ChatGPT or Perplexity.
            </EnCard>
            <EnCard title="Search share depends on how you measure" href="/en/insights/naver-vs-google-korea">
              Estimates of Naver&apos;s share range from 28% to 65% because app usage, web referrals and panel studies measure different things.
            </EnCard>
            <EnCard title="Each AI engine sees you differently" href="/en/insights/case-clinic-chatgpt">
              One clinic appeared in Naver AI and Gemini answers for all 10 test questions but in only 4 on ChatGPT. The fix was on its own website.
            </EnCard>
          </div>
        </EnSection>

        <EnSection kicker="What we do" title="Services" lead="Scope depends on your category and goals. We start from a baseline of where you appear today, then work in order of impact.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <EnCard title="AI search visibility (GEO)">Korean-language questions asked to Naver AI Briefing, ChatGPT, Gemini and Perplexity, measured every week, with work on the sources those engines cite.</EnCard>
            <EnCard title="Korean websites and landing pages">Pages on your own domain written in native Korean and built so search engines and AI crawlers can read them.</EnCard>
            <EnCard title="Naver marketing">Naver Blog content and, for physical locations, Naver Place: the surfaces Naver&apos;s own search and AI Briefing draw on.</EnCard>
            <EnCard title="SEO for Google in Korea">Technical and content SEO for Korean-language queries on Google.</EnCard>
            <EnCard title="Meta and Google ads">Paid campaigns targeting Korean audiences, planned together with the organic work.</EnCard>
            <EnCard title="Korean content production">Photo, video and written content made for Korean customers, not translated from English.</EnCard>
          </div>
        </EnSection>

        <EnSection tone="gray" kicker="How we work" title="From baseline to weekly reporting">
          <EnSteps
            steps={[
              { title: "Baseline", desc: "We ask the questions your Korean customers ask and record where you appear, what is said and which sources are cited." },
              { title: "Priorities", desc: "We list what to fix first: missing pages, wrong facts, blocked crawlers, weak Naver presence." },
              { title: "Execution", desc: "Our team in Seoul builds and publishes the Korean pages, content and campaigns." },
              { title: "Weekly measurement", desc: "The same questions are measured again every week, so changes are compared on the same basis." },
            ]}
          />
        </EnSection>

        <EnSection kicker="Insights" title="Research and case studies">
          <EnInsightCards limit={3} />
        </EnSection>

        <EnBottomCta
          title="Planning to reach customers in Korea?"
          lead="Tell us about your brand and timeline. We reply by email in English."
        />
      </main>
      <EnFooter />
    </div>
  )
}
