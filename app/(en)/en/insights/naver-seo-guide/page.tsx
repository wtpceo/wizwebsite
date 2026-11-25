import type { Metadata } from "next"
import EnArticle from "@/components/en/EnArticle"
import { hreflangFor } from "@/lib/i18n/config"
import { share } from "@/lib/share-meta"

// 작가 세션 원고(2026-11-25, 27.자사브랜딩/20_글/원고/2026-11-25_EN1_naver-seo-guide.md). 주 키워드 naver seo, 같이 넣은 말 naver search advisor·naver blog·naver search ads
// 문장은 Gemini가 썼고(작가 세션, 총괄 사실 점검 끝) 글자 그대로 옮겼다. 표지는 SEO 컨설팅 글 표지와 같은 틀
const TITLE = "Naver SEO Guide for Foreign Brands in Korea"
const DESC =
  "A practical Naver SEO guide for global teams. Learn how Naver Blog, Naver Search Advisor, and Naver Place work together, and how to measure real results."
const DATE = "2026-11-25"
const PATH = "/en/insights/naver-seo-guide"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/en-naver-seo-guide.jpg"

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
  { q: "how long does naver seo take to show results", a: "Indexing can take just a few hours; a post we published on November 23 was searchable by its title in about three and a half hours, though it ranked in the 60s to 80s for main keywords initially. Early shifts in AI search citations can appear in roughly two months, while a full website rebuild for a clinic took about six months to stabilize across ChatGPT, Google, and Naver. Exact timing depends on your industry and starting point." },
  { q: "what is naver search advisor used for", a: "Naver Search Advisor (searchadvisor.naver.com) is Naver's tool for registering external websites and requesting page indexing. Because Naver blocks external AI crawlers from reading Naver Blogs, brands need Korean pages on their own domains for tools like ChatGPT, and Naver Search Advisor is how you ask Naver to crawl those pages." },
  { q: "how much does naver seo cost", a: "There are no standard flat-rate packages. Pricing is determined by the scope of services (such as combining Naver Blog with Naver Place), the monthly volume of articles, and target keyword competition. Agencies should audit the current first-page search landscape before providing an estimate. Paid Naver Search Ads (Powerlink) require a separate ad budget." },
  { q: "can an agency guarantee #1 ranking on naver", a: "No. Rankings are determined by Naver's system and fluctuate based on competition. Even strong posts move; for example, we tracked a client post at #2 on September 14 that dropped past position 75 two weeks later. Choose a team that measures positions weekly using consistent criteria and reports both gains and drops transparently." },
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
        ctaTitle="Check your current first-page visibility on Naver"
        ctaBody="Tell us your domain and category. Our Seoul team will review the current first-page results on Korean search and walk you through the findings in English."
        ctaLabel="Contact us"
      >
        <p>{"Doing Naver SEO means publishing Korean articles on an official Naver Blog, registering your website through Naver Search Advisor, and managing Naver Place if you have a physical store or office. To stay visible, those articles must cover real operational facts and actual customer questions rather than repeating target keywords."}</p>
        <p>{"If you are planning an entry into South Korea or managing a client's expansion, you probably know that a Google-only approach leaves gaps. (If you are looking for market share data, read our breakdown on "}<a href="/en/insights/naver-vs-google-korea">{"why Naver and Google market share numbers differ"}</a>{".) Yet when you cannot read Korean, it is hard to know what work is actually required, what determines the cost, or how to verify what an agency is doing. This Naver SEO guide breaks down the exact mechanics, realistic timelines, and reporting standards you should expect."}</p>
        <h2>{"How the Korean search engine ecosystem works"}</h2>
        <p>{"Naver is not just a list of external web links. This Korean search engine combines web results with its own internal properties: Naver Blog, Cafe (communities), and Place (maps and local listings). It also features Naver AI Briefing, which summarizes answers directly from Naver's own index. You can see how these channels fit into a broader launch in our "}<a href="/en/korea-market-entry">{"Korea market entry marketing overview"}</a>{"."}</p>
        <p>{"Because Naver has Blog, Cafe, and Place within its platform and AI Briefing summarizes from Naver's own index, brands build a dedicated business presence on Naver Blog. However, relying only on Naver creates a blind spot for global AI tools. Naver's "}<code>{"robots.txt"}</code>{" blocks external AI crawlers like GPTBot, OAI-SearchBot, and ClaudeBot. Content that lives exclusively on a Naver Blog cannot be read by ChatGPT. We explain the technical details in our post on "}<a href="/en/insights/naver-blocks-ai-crawlers">{"how Naver blocks external AI crawlers"}</a>{"."}</p>
        <p>{"To cover the market properly, you need both content on Naver and Korean-language pages on your own web domain. Korean consumers cross-check recommendations across platforms. When an AI tool suggests a brand, users search that brand name on Naver and Google to read reviews and check its reputation. According to an "}<a href="https://www.etnews.com/20261026000292" target="_blank" rel="noopener noreferrer">{"ETNews report on Korean search habits"}</a>{" published on October 26, 2026, nine out of ten ChatGPT users in Korea also use Naver."}</p>
        <h2>{"Setting up Naver Search Advisor and Naver Blog"}</h2>
        <h3>{"Registering your domain on Naver Search Advisor"}</h3>
        <p>{"To register your site on Naver and request crawling for new pages, you use "}<a href="https://searchadvisor.naver.com" target="_blank" rel="noopener noreferrer">{"Naver Search Advisor"}</a>{". This is Naver's webmaster tool for registering external domains and requesting indexing for new pages. We use Naver Search Advisor to request crawling for new pages on our own corporate site."}</p>
        <h3>{"Writing a business Naver Blog that holds its visibility"}</h3>
        <p>{"At WizThePlanning, we start by reviewing a client's existing content and brand tone. We then select target keywords by grouping Naver Blog queries together with Naver Map and AI search terms. Based on an agreed monthly volume, we plan and publish the articles. If a client lacks local visual assets, our in-house photography team shoots original photos for the posts. If the business operates a physical store or office, we manage their Naver Place listing alongside the blog."}</p>
        <p>{"How the articles are written determines whether they last. Posts built by stuffing and repeating keywords easily drop out of search results. Instead, articles must contain real operational details and answers to the questions customers actually ask."}</p>
        <p>{"Consider a six-year-old local store we worked with. Their previously visible blog posts began disappearing from search results. The problem was not their overall blog score, but an outdated writing structure that repeated target keywords endlessly. After we rewrote their content around real operational cases and frequently asked customer questions, the brand's blog reached the #1 spot for their \"region + category\" query and became the second cited source in Naver AI Briefing. It is important to note that rewriting articles alone did not create this outcome; it was supported by six years of operational history, accurate Naver Place data, and steady visitor reviews."}</p>
        <h2>{"Realistic timelines and what determines Naver SEO costs"}</h2>
        <h3>{"Indexing vs. competitive ranking timelines"}</h3>
        <p>{"Indexing can be quick, while competitive ranking takes time. On November 23, we published a new post on our own company Naver Blog. Within about three and a half hours, it was indexed and appeared when searching its exact title. Being indexed, however, does not mean immediate visibility for competitive terms. At that same moment, the post sat in the 60s to 80s on the Blog tab for its main target keywords."}</p>
        <p>{"For AI search citations, initial changes can appear in roughly two months on the faster end. In the case of a clinic that rebuilt its website from scratch, the site overhaul took about two months, and reaching stable visibility across ChatGPT, Google, and Naver took around six months. Because every industry and starting point is different, we never promise fixed timelines."}</p>
        <h3>{"How pricing is structured (and how Naver Search Ads differ)"}</h3>
        <p>{"There are no fixed-price packages for proper Naver SEO. Costs depend on which channels are included, how many articles are published per month, and how competitive your target keywords are. Before quoting a price, we diagnose the current first-page search results for your category."}</p>
        <p>{"Keep in mind that paid search advertising, such as Powerlink (Naver Search Ads), is completely separate from organic blog work. If you run Naver Search Ads, the media spend is billed separately."}</p>
        <h2>{"How to measure results when you cannot read Korean"}</h2>
        <p>{"When you hire an agency in Seoul, you should receive more than a spreadsheet of published URLs. Because you cannot easily read the Korean search results yourself, reporting must be visual, consistent, and honest."}</p>
        <p>{"Here is how we handle reporting:"}</p>
        <ul className="list-disc pl-6">
          <li><strong>{"Visual rank verification:"}</strong>{" We capture screenshots showing the exact position where your post appears for the target keyword your customers actually search, including whether it entered the Popular Posts section."}</li>
          <li><strong>{"No guaranteed rankings:"}</strong>{" Naver's algorithm determines order, and not every post will reach the top. Results vary by keyword competition. We report exact exposure positions and changes as they are."}</li>
          <li><strong>{"Recording drops honestly:"}</strong>{" We log downward movement too. On September 14, a store's post held the #2 spot in search results. Two weeks later, it fell past position 75. We recorded that drop and published it openly on our website without hiding it."}</li>
          <li><strong>{"Weekly multi-engine tracking:"}</strong>{" We re-measure using the exact same criteria every week. Alongside standard rankings, we track how ChatGPT, Gemini, and Perplexity answer Korean-language prompts in your category by default each week, and measure Naver AI Briefing when it is included in the scope. You can see the exact framework in our guide to "}<a href="/en/how-we-measure">{"how we measure search and AI visibility"}</a>{"."}</li>
        </ul>
        <h2>{"Questions to ask before hiring an agency for Korea"}</h2>
        <p>{"Before signing a retainer, ask prospective agencies these questions to see how they work:"}</p>
        <ol>
          <li><strong>{"Do you guarantee top rankings?"}</strong>{" Walk away if they say yes. Ask instead how they track and report ranking drops when search results shift."}</li>
          <li><strong>{"What does your monthly report include?"}</strong>{" Ensure you will receive search result screenshots for target keywords, not just links to published blog posts."}</li>
          <li><strong>{"How do you source content and photos?"}</strong>{" Confirm that articles are written around real operational facts and customer FAQs, and ask if they have internal photography capabilities if you need local visuals."}</li>
          <li><strong>{"How do you handle websites alongside Naver Blog?"}</strong>{" Check that they register your domain via Naver Search Advisor and address external AI visibility, rather than locking all your Korean content inside Naver."}</li>
          <li><strong>{"Who handles the Korean execution and English communication?"}</strong>{" At WizThePlanning, founded in Seoul in 2016 with experience across more than 7,000 Korean advertisers, a dedicated 1:1 account executive manages your project. Our Seoul team handles all Korean writing and execution, while working with your team in English via email and calls. (We never disclose client names without permission.)"}</li>
        </ol>

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
