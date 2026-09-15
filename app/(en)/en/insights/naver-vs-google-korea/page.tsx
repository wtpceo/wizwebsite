import type { Metadata } from "next"
import EnArticle, { CheckItem, Callout } from "@/components/en/EnArticle"

const TITLE = "Naver vs Google in Korea: Why Share Estimates Differ"
const DESC =
  "Depending on the source, Naver's share of search in Korea ranges from 28% to 65%. None of them is wrong: app MAU, web traffic referrals and Korean panel studies measure different things. How to read the numbers before planning a Korea launch."
const DATE = "2026-09-15"
const PATH = "/en/insights/naver-vs-google-korea"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/naver-google-share.jpg"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: { en: URL, ko: "https://wiztheplanning.com/guide/naver-google-share" },
  },
  openGraph: { title: TITLE, description: DESC, url: URL, images: [COVER], type: "article", locale: "en_US" },
}

const ROWS: [string, string, string, string][] = [
  ["Chosun Ilbo (IGAWorks Mobile Index)", "App MAU, July 2026", "46.84 million", "47.02 million"],
  ["seonews (citing StatCounter)", "Web traffic, July 2026", "40.87%", "49.52%"],
  ["Korea Data Economy News (citing StatCounter)", "Web traffic, March 2026", "43.96%", "46.81%"],
  ["Inblog", "2026 compilation", "48.6%", "42.9%"],
  ["A Korean blog (citing Internet Trend)", "Korean panel, first half of 2026", "64.28%", "28.37%"],
]

const FAQ = [
  {
    q: "Has Google really overtaken Naver in Korea?",
    a: "It depends on what is counted. On monthly active app users (MAU), Google moved ahead of Naver for the first time in July 2026. In the same data, Naver was far ahead on daily active users and time spent, and Korean panel studies of search share still put Naver in the 60% range. The situation does not reduce to one sentence.",
  },
  {
    q: "Why do search share figures differ so much between studies?",
    a: "They measure different things. App MAU counts anyone who opens the app once a month, and the Google app comes preinstalled on Android devices. StatCounter-type tools count where visitors to websites carrying their tag came from. Korean panel studies look at the actual search behavior of a sample group. These are answers to three different questions, so the numbers cannot match.",
  },
  {
    q: "Which number should a brand planning a Korea launch look at?",
    a: "Treat national share as background only. What matters is where customers in your category look for you. Local services still lean heavily on Naver Place and Naver AI Briefing, while categories that involve comparison and research lean more on Google and ChatGPT. Measure your own acquisition by source rather than relying on national averages.",
  },
  {
    q: "Can we focus on only Naver or only Google?",
    a: "Not right now. Naver blocks global AI crawlers in its robots.txt, so content on Naver Blog cannot be read by ChatGPT or Perplexity. In the other direction, Naver AI Briefing only draws on Naver's own index. One of our own pages ranked first on Naver AI Briefing but did not appear on ChatGPT. The two paths do not substitute for each other.",
  },
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
        kicker="Korea data"
        title={TITLE}
        description={DESC}
        date="September 15, 2026"
        readingMinutes={6}
      >
        <p>
          Depending on the study, Naver&apos;s share of search in Korea ranges from 28% to 65%. None of these estimates
          is wrong: each one measures something different, so the useful question for a launch plan is not who is
          number one but where your own customers look for you.
        </p>

        <h2>Same market, different numbers</h2>
        <p>Here are the studies published in 2026, side by side.</p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">Source</th>
                <th className="px-4 py-3 font-bold text-gray-900">What it measured</th>
                <th className="px-4 py-3 font-bold text-gray-900">Naver</th>
                <th className="px-4 py-3 font-bold text-gray-900">Google</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 text-gray-700">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[2]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          We compiled this table from reports and materials published as of August 21, 2026. The original source of
          each figure is the research body named in the table; some values are cited through news outlets or blogs.
        </p>

        <h2>Why the numbers differ: three different rulers</h2>

        <h3>1. App MAU: did someone open the app at least once a month?</h3>
        <p>
          The Chosun Ilbo report that the Google app passed Naver in Korean monthly active users for the first time
          uses this measure. Based on IGAWorks Mobile Index data, Google had 47.02 million users against Naver&apos;s
          46.84 million.
        </p>
        <p>
          But MAU counts anyone who opens the app just once in a month, and the Google app comes preinstalled on
          Android devices. Other figures in the same report make the difference in behavior clear:
        </p>
        <ul>
          <CheckItem>
            <strong>Daily active users (DAU).</strong> Naver 26 to 27 million vs Google 16 to 17 million.
          </CheckItem>
          <CheckItem>
            <strong>Daily time spent per user.</strong> Naver 21 to 24 minutes vs Google 6 minutes.
          </CheckItem>
          <CheckItem>
            <strong>Total daily time spent.</strong> Naver 9 to 10 million hours vs Google 1.6 to 1.7 million hours.
          </CheckItem>
        </ul>
        <p>
          On a monthly basis Google is ahead. On a daily basis Naver leads by three to four times. Both are true; they
          simply answer different questions.
        </p>

        <h3>2. Web traffic: which search engine sent the visit?</h3>
        <p>
          StatCounter-type tools count where visitors to websites carrying their tracking tag came from. The result
          therefore depends on what kind of sites have installed the tag. This is where the tendency for Google to
          show higher figures in Korea comes from.
        </p>

        <h3>3. Korean panel studies: where did a sample group actually search?</h3>
        <p>
          Korean studies such as Internet Trend look at the real search behavior of a sample. On this basis Naver
          stays in the 60% range. Even for the same month, the gap with web traffic figures can exceed 30 percentage
          points.
        </p>

        <Callout>
          No study is lying. Three different things are being measured under the single label of &quot;search
          share,&quot; which is why the conclusion flips every time you judge by the headline alone. Always check
          what was counted before you use a number.
        </Callout>

        <p>
          We apply the same principle to measuring AI visibility; see{" "}
          <a href="/en/how-we-measure">how we measure AI search and traffic</a>.
        </p>

        <h2>What this means for a brand entering Korea</h2>
        <p>
          Whatever the national split, the path a customer takes to find you is shaped by your category. The
          national share debate matters far less than that.
        </p>
        <ul>
          <CheckItem>
            <strong>Local services customers find on the spot.</strong> Think restaurants, beauty, clinics and
            accommodation. Naver Place and Naver AI Briefing still carry a large share.
          </CheckItem>
          <CheckItem>
            <strong>Categories people compare and research before choosing.</strong> Think procedures, professional
            services and B2B. More buyers now gather information on Google and ChatGPT first.
          </CheckItem>
        </ul>
        <p>
          The right move is to measure your own acquisition channels directly, not national averages. For the wider
          context, see our overview of <a href="/en/insights/marketing-in-korea-2026">marketing in Korea in 2026</a>.
        </p>

        <h2>Why you cannot pick just one</h2>
        <p>
          Separate from the share debate, the two paths do not substitute for each other. This is something we have
          verified ourselves.
        </p>
        <ul>
          <CheckItem>
            <strong>Naver blocks global AI crawlers.</strong> It is stated in Naver&apos;s robots.txt, so content
            built up on Naver Blog cannot be read by ChatGPT or Perplexity. Details:{" "}
            <a href="/en/insights/naver-blocks-ai-crawlers">how Naver blocks AI crawlers</a>.
          </CheckItem>
          <CheckItem>
            <strong>Naver AI Briefing reads only Naver&apos;s index.</strong> However well your website is built, if
            it is not indexed by Naver it will not be cited in the briefing.
          </CheckItem>
          <CheckItem>
            <strong>Our own page split the results.</strong> It ranked first on Naver AI Briefing but did not appear
            on ChatGPT. Same content, same day, different outcome.
          </CheckItem>
        </ul>
        <p>
          &quot;Google won, so drop Naver&quot; and &quot;Naver is still stronger, so Google can wait&quot; are both
          risky. Each path is currently closed to the other, so giving one up means losing that side&apos;s customers
          entirely.
        </p>

        <h2>What to do now</h2>
        <ul>
          <CheckItem>
            <strong>Read the measurement basis, not the headline.</strong> Whether a figure is MAU, web traffic or a
            panel study can reverse the conclusion.
          </CheckItem>
          <CheckItem>
            <strong>Measure your own acquisition instead of national share.</strong> In GA4 traffic acquisition,
            check the share of visits coming from Naver, Google and AI.
          </CheckItem>
          <CheckItem>
            <strong>Manage the two paths separately.</strong> On Naver, Place and Blog are the assets; for global AI,
            your own website is the asset.
          </CheckItem>
        </ul>
        <p>
          WizThePlanning is a Seoul-based marketing agency operating since 2016 that has worked with 7,000+
          advertisers. If you are planning a launch, see our{" "}
          <a href="/en/korea-market-entry">Korea market entry support</a>.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {FAQ.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 md:p-6">
              <p className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
                <span className="shrink-0 text-[#00b57f]">Q{i + 1}.</span>
                <span>{f.q}</span>
              </p>
              <p className="mt-3 text-base leading-[1.85] text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>

        <p>
          Korean version:{" "}
          <a href="/guide/naver-google-share" hrefLang="ko">
            구글 네이버 검색 점유율
          </a>
        </p>
      </EnArticle>
    </>
  )
}
