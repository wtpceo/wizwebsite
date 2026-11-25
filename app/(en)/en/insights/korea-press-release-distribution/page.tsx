import type { Metadata } from "next"
import EnArticle from "@/components/en/EnArticle"
import { hreflangFor } from "@/lib/i18n/config"
import { share } from "@/lib/share-meta"

// 작가 세션 원고(2026-11-25, 27.자사브랜딩/20_글/원고/2026-11-25_EN3_korea-press-release-distribution.md). EN1·EN2로 링크
// 문장은 Gemini가 썼고(작가 세션, 총괄 사실 점검 끝) 글자 그대로 옮겼다. 표지는 SEO 컨설팅 글 표지와 같은 틀
const TITLE = "Korea Press Release Distribution Guide"
const DESC =
  "Planning Korea press release distribution? Learn how paid bylined articles work, conditions of media we place in, available outlets, and what to ask your agency."
const DATE = "2026-11-25"
const PATH = "/en/insights/korea-press-release-distribution"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/en-korea-press-release-distribution.jpg"

export const metadata: Metadata = share({
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: hreflangFor(PATH),
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    images: [COVER],
    type: "article",
    locale: "en_US",
  },
}, "en")

const FAQ = [
  { q: "How much is press release distribution cost in Korea?", a: "There is no flat rate published online because available outlets change per order and requirements differ by industry. We do not publish fixed prices and instead review your scope to issue a custom quote." },
  { q: "Can I include a link to my website in a Korean press release?", a: "No. Articles placed through our distribution partners prohibit URLs, phone numbers, and email addresses in both the body text and images." },
  { q: "Are distributed press releases marked as sponsored or editorial?", a: "Most placements are paid bylined articles published under a journalist's name. Whether an ad label appears depends on each outlet's internal policy; some add a disclosure and others do not, and neither can be guaranteed beforehand." },
  { q: "How long does Korea press release distribution take?", a: "Once the Korean article draft is finalized and approved by your team, distribution can be completed within one week, followed by a report with live article links." },
  { q: "Can we fix a typo or remove an article after it goes live?", a: "No. Published articles cannot be edited or deleted once distributed, which is why careful approval of the final Korean manuscript is essential before release." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "en",
  image: `https://wiztheplanning.com${COVER}`,
  author: { "@type": "Organization", name: "WizThePlanning", url: "https://wiztheplanning.com/en" },
  publisher: { "@type": "Organization", name: "WizThePlanning", url: "https://wiztheplanning.com/en" },
  mainEntityOfPage: URL,
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <EnArticle
        href={PATH}
        kicker="KOREA MARKET GUIDE"
        title={TITLE}
        description={DESC}
        date="November 25, 2026"
        readingMinutes={7}
        ctaTitle="Ready to distribute your news in Korean media?"
        ctaBody="Share your English press release and target timeline with us. Our Seoul team will review industry eligibility and send you a custom quote in English."
        ctaLabel="Contact us"
      >
        <p>{"To get your news into Korean media, an English press release cannot simply be translated word for word; it must be rewritten into a Korean news article format. Before starting Korea press release distribution, overseas brands and global agencies need to know the conditions when placing through our distribution partners: most placements are paid bylined articles, URLs, phone numbers, and email addresses cannot be included in the article or images, and published pieces cannot be edited or deleted."}</p>
        <p>{"If you do not read Korean, managing this process from abroad can feel opaque. Below is how the local distribution system actually works, what restrictions apply, and what you need to prepare before hiring a local team."}</p>
        <h2>{"Why Korean media articles matter for market entry"}</h2>
        <p>{"When entering the market, getting featured in news outlets is about building verifiable search footprints. Korean consumers routinely cross-check brands recommended by AI tools by searching on Naver and Google to read reviews and check reputation. According to an "}<a href="https://www.etnews.com/20261026000292" target="_blank" rel="noopener noreferrer">{"ETNews report on AI and portal usage"}</a>{" published on October 26, 2026, nine out of ten ChatGPT users in Korea also use Naver."}</p>
        <p>{"News articles serve a dual purpose: they act as credible sources that AI models pull from when generating answers, and they appear on local portals when consumers look up your brand name. We build external sources together, combining news articles, blog reviews, and YouTube reviews. You can see how these channels fit together in our "}<a href="/en/korea-market-entry">{"Korea market entry marketing guide"}</a>{" and our "}<a href="/en/insights/naver-seo-guide">{"Naver SEO guide"}</a>{"."}</p>
        <p>{"One important distinction for overseas marketers: Naver blogger press corps (known locally as "}<em>{"gijadan"}</em>{"), who write article-style blog reviews, are a completely separate product from official news press releases. If you are looking for creator reviews rather than news outlets, read our "}<a href="/en/insights/korean-influencer-marketing">{"guide to Korean influencer and blogger campaigns"}</a>{"."}</p>
        <h2>{"How Korean newswire and media placements work"}</h2>
        <h3>{"Paid bylined articles and ad labels"}</h3>
        <p>{"Articles placed in outlets available through our distribution partners are mostly paid bylined articles. Whether an advertising disclosure label is attached to the article depends entirely on the individual outlet's policy; some outlets include a label, while others do not. Neither outcome can be promised in advance."}</p>
        <h3>{"Outlets available through distribution networks"}</h3>
        <p>{"WizThePlanning does not hold direct one-on-one partnerships with individual newspapers. Instead, we work through domestic distribution partners to place articles across approximately 140 Korean media outlets, and the exact list of available outlets changes with each order."}</p>
        <p>{"Depending on availability at the time of your campaign, categories include:"}</p>
        <ul className="list-disc pl-6">
          <li>{"General daily newspapers"}</li>
          <li>{"Business and economic newspapers, with examples such as The Korea Economic Daily, The Herald Business, and The Asia Business Daily (availability varies per order, and placement in a specific title is not guaranteed)"}</li>
          <li>{"Economic broadcasters"}</li>
          <li>{"IT trade publications"}</li>
          <li>{"Healthcare and wellness publications"}</li>
          <li>{"Sports and entertainment outlets"}</li>
          <li>{"Regional newspapers"}</li>
          <li>{"Overseas Korean community media"}</li>
        </ul>
        <h2>{"Conditions for outlets we place articles in"}</h2>
        <p>{"Before drafting your announcement, you must account for four strict conditions across the outlets we place articles in."}</p>
        <ul className="list-disc pl-6">
          <li><strong>{"Restricted industries:"}</strong>{" Some outlets have specific business categories they refuse to accept, such as real estate."}</li>
          <li><strong>{"Exclusivity requirements:"}</strong>{" Certain outlets only accept exclusive press releases and will reject a story if it is sent to other publications simultaneously."}</li>
          <li><strong>{"No contact details or links:"}</strong>{" You cannot include website URLs, phone numbers, or email addresses anywhere in the article text or inside accompanying images."}</li>
          <li><strong>{"No edits or deletions after publication:"}</strong>{" Once an article goes live, it cannot be modified or taken down. This makes the pre-publication draft review the most important step in the entire workflow."}</li>
        </ul>
        <h2>{"How a Korean PR agency handles your release from brief to report"}</h2>
        <p>{"When you work with a Korean PR agency or marketing team like WizThePlanning, the workflow is structured to protect accuracy across the language barrier."}</p>
        <ol>
          <li><strong>{"Source review and Korean drafting:"}</strong>{" You send us your English press release and supporting materials. Our Seoul team rewrites the content into a proper Korean news article format using only verified facts."}</li>
          <li><strong>{"Client approval:"}</strong>{" We send the Korean draft for your confirmation. Because published articles are permanent, nothing moves forward until you sign off on the manuscript."}</li>
          <li><strong>{"Distribution within one week:"}</strong>{" Once the final draft is approved, distribution can be completed within a week."}</li>
          <li><strong>{"Live link reporting:"}</strong>{" When the placement is finished, we provide a report containing the direct URLs to the published original articles so you can verify everything immediately."}</li>
        </ol>
        <p>{"Regarding press release distribution cost, we do not publish fixed package prices. Because media lists shift and campaign scopes vary, we review your scope before providing a custom quote."}</p>
        <h2>{"Checklist: What to hand over and what to ask"}</h2>
        <p>{"Whether you are an in-house marketer or an overseas agency managing a client (see "}<a href="/en/agency-partners">{"how we work with global agency partners"}</a>{"), here is what to prepare and ask."}</p>
        <h3>{"What to send your agency"}</h3>
        <ul className="list-disc pl-6">
          <li>{"Your English press release or fact sheet containing only verified, factual claims."}</li>
          <li>{"Clear Korean spelling of your brand, product, and executive names (or ask the local team to establish this with you before drafting)."}</li>
          <li>{"Clean, high-resolution images completely free of embedded URLs, email addresses, or phone numbers."}</li>
          <li>{"Confirmation of whether the news has already been distributed elsewhere or can be offered as an exclusive."}</li>
        </ul>
        <h3>{"Questions to ask before you commit"}</h3>
        <ul className="list-disc pl-6">
          <li>{"Is my industry accepted by the currently available outlets?"}</li>
          <li>{"Which media categories are open on the distribution list right now?"}</li>
          <li>{"Does the outlet require an exclusive release, or can we distribute to multiple outlets?"}</li>
          <li>{"How will we review and approve the Korean draft before it goes out?"}</li>
        </ul>
        <p>{"Founded in Seoul in 2016, WizThePlanning has worked with over 7,000 Korean advertisers, and we keep all client names confidential unless given explicit permission. Our Seoul team writes the Korean articles and handles manuscript confirmation with clients, while a dedicated 1:1 account executive communicates with you in English via email and calls."}</p>

        <h2>Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {FAQ.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 md:p-6">
              <p className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
                <span className="shrink-0 text-[#0055FF]">Q{i + 1}.</span>
                <span>{f.q}</span>
              </p>
              <p className="mt-3 text-base leading-[1.85] text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </EnArticle>
    </>
  )
}
