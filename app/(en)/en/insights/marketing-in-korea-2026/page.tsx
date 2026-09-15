import type { Metadata } from "next"
import EnArticle, { CheckItem, Callout } from "@/components/en/EnArticle"

const TITLE = "Marketing in Korea 2026: Naver, Google and AI Search"
const DESC =
  "Korea is not a Google-only market, and it is not a Naver-only market either. How Naver, Google and AI assistants split discovery in Korea as of 2026, why share numbers disagree, and what a foreign brand should set up first."
const DATE = "2026-09-15"
const PATH = "/en/insights/marketing-in-korea-2026"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/geo.jpg"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: { canonical: PATH, languages: { en: URL } },
  openGraph: { title: TITLE, description: DESC, url: URL, images: [COVER], type: "article", locale: "en_US" },
}

const FAQ = [
  {
    q: "Has Google overtaken Naver in Korea?",
    a: "It depends on what is counted. By monthly active app users, Google passed Naver for the first time in July 2026. In the same report, Naver was far ahead on daily users and time spent, and Korean panel studies of search behavior still put Naver in the 60% range. There is no one-sentence answer.",
  },
  {
    q: "Why do Naver and Google share figures differ so much between sources?",
    a: "Each source measures something different. App MAU counts anyone who opens an app once a month, and the Google app comes preinstalled on Android phones. StatCounter-style data counts where visitors to tagged websites came from. Korean panel studies track the actual search behavior of a sample group. They answer three different questions, so the numbers cannot match.",
  },
  {
    q: "Can a foreign brand focus on just Naver or just Google?",
    a: "Not today. Naver's robots.txt blocks outside AI crawlers by name, so content published on Naver Blog or Naver Cafe cannot be read by ChatGPT or Perplexity. In the other direction, Naver's AI Briefing reads Naver's own index. The two paths do not substitute for each other, so giving up one means losing the customers who search there.",
  },
  {
    q: "Where should content live if we want AI assistants to cite it?",
    a: "On an open website on your own domain that AI search crawlers are allowed to read. In a check of 15 Korean platforms on July 27, 2026, the Naver properties, Kakao Map, Baemin, Daangn and Catch Table blocked AI search bots, while Tistory, Siksin, Yogiyo and YouTube did not restrict them. Platform policies can change at any time. Your own website is the one place where you set the rules.",
  },
]

const SHARE_ROWS: [string, string, string, string][] = [
  ["Chosun Ilbo (IGAWorks Mobile Index)", "App MAU, July 2026", "46.84 million", "47.02 million"],
  ["seonews (citing StatCounter)", "Web traffic, July 2026", "40.87%", "49.52%"],
  ["Korea Data Economy News (citing StatCounter)", "Web traffic, March 2026", "43.96%", "46.81%"],
  ["Inblog", "2026 tally", "48.6%", "42.9%"],
  ["Korean blog (citing InternetTrend)", "Korean panel, H1 2026", "64.28%", "28.37%"],
]

type Access = "Blocked" | "Open" | "Partial"
const PLATFORM_ROWS: [string, Access, Access, string][] = [
  ["Naver Blog", "Blocked", "Blocked", "Training and search bots blocked by name, plus the RAG prohibition notice"],
  ["Naver Cafe", "Blocked", "Blocked", "All bots blocked, including Google and Bing search crawlers"],
  ["Naver Smart Store", "Blocked", "Blocked", "AI bots blocked by name, everything else blocked too"],
  ["Naver main page", "Blocked", "Blocked", "Everything blocked except the front page"],
  ["Kakao Map", "Blocked", "Blocked", "Uses the same RAG prohibition notice as Naver"],
  ["Brunch (Kakao)", "Blocked", "Open", "Training bots blocked, AI search bots treated like regular search engines"],
  ["Tistory (Kakao)", "Open", "Open", "No AI bot restrictions: only admin paths blocked"],
  ["Diningcode", "Blocked", "Partial", "Training bots blocked, ChatGPT search bot allowed, Perplexity blocked"],
  ["Siksin", "Open", "Open", "No AI bot restrictions"],
  ["Catch Table", "Blocked", "Blocked", "Allowlist approach: AI bots are not on the list"],
  ["Baemin", "Blocked", "Blocked", "Only Googlebot and Naver's bot allowed"],
  ["Yogiyo", "Open", "Open", "No AI bot restrictions: only payment and similar paths blocked"],
  ["Daangn", "Blocked", "Blocked", "46 AI and scraping bots blocked on Korean content: the broadest list"],
  ["Instagram", "Blocked", "Partial", "Training bots and PerplexityBot blocked, other AI search bots not mentioned"],
  ["YouTube", "Open", "Open", "Watch pages open, but only text such as titles and descriptions is readable"],
]

function AccessMark({ v }: { v: Access }) {
  if (v === "Open") return <span className="font-bold text-emerald-600">Open</span>
  if (v === "Blocked") return <span className="font-bold text-red-500">Blocked</span>
  return <span className="font-bold text-amber-600">Partial</span>
}

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
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <EnArticle href={PATH} kicker="Korea market guide" title={TITLE} description={DESC} date="September 15, 2026" readingMinutes={9}>
        <p>
          In 2026, customers in Korea find brands through two separate paths: the Naver ecosystem, and the open web that
          ChatGPT, Perplexity and Google&rsquo;s AI read. The two do not substitute for each other, so a foreign brand needs a
          plan for both.
        </p>
        <p>
          This guide covers why the market share numbers you will see disagree so sharply, how Naver walls its content off
          from outside AI, which Korean platforms AI search bots can and cannot read, and what to set up first.
        </p>

        <h2>Naver vs Google: why the share figures range from 28% to 65%</h2>
        <p>
          Headlines in 2026 have said both that Google finally beat Naver and that Naver still dominates. Both are true,
          because they count different things. Here are the figures published this year side by side.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">Source</th>
                <th className="px-4 py-3 font-bold text-gray-900">What was counted</th>
                <th className="px-4 py-3 font-bold text-gray-900">Naver</th>
                <th className="px-4 py-3 font-bold text-gray-900">Google</th>
              </tr>
            </thead>
            <tbody>
              {SHARE_ROWS.map((r) => (
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
          We compiled this table from reports and data public as of August 21, 2026. The original source of each figure is
          the research firm named in the table. Some values were quoted through news outlets or blogs.
        </p>

        <h3>1. App MAU: did someone open the app at least once this month?</h3>
        <p>
          The Chosun Ilbo report that Google&rsquo;s app passed Naver in Korean monthly active users uses this measure:
          47.02 million for Google against 46.84 million for Naver, based on IGAWorks Mobile Index data. But MAU counts
          anyone who opens an app once a month, and the Google app comes preinstalled on Android phones. The same report
          showed a very different picture on a daily basis:
        </p>
        <ul>
          <CheckItem>
            <strong>Daily active users.</strong> Naver 26 to 27 million, Google 16 to 17 million.
          </CheckItem>
          <CheckItem>
            <strong>Daily time per user.</strong> Naver 21 to 24 minutes, Google 6 minutes.
          </CheckItem>
          <CheckItem>
            <strong>Total daily time.</strong> Naver 9 to 10 million hours, Google 1.6 to 1.7 million hours.
          </CheckItem>
        </ul>

        <h3>2. Web traffic: which search engine sent the visit?</h3>
        <p>
          StatCounter-style data counts where visitors to websites carrying its tag came from. The results depend on what
          kind of sites carry the tag, which is why Google tends to look stronger in this measure in Korea.
        </p>

        <h3>3. Korean panels: where did a sample group actually search?</h3>
        <p>
          Korean studies such as InternetTrend track the real search behavior of a sample. On this measure Naver stays in
          the 60% range, more than 30 percentage points away from the web traffic figures for the same period.
        </p>
        <Callout>
          None of these sources is wrong. &ldquo;Search share&rdquo; is one phrase covering three different measurements. Before
          you act on a number, check what was counted. Better still, measure where your own customers come from rather
          than relying on a national average.
        </Callout>

        <h2>Naver blocks outside AI crawlers</h2>
        <p>
          Many brands assume that if there is plenty of content about them on Naver Blog and Naver Cafe, AI assistants will
          pick it up. They will not. Open the robots.txt files for Naver Blog and Naver Cafe and this line appears at the
          top, in English:
        </p>
        <blockquote>
          &ldquo;BOT ACCESS FOR THE PURPOSES OF AI TRAINING AND RETRIEVAL-AUGMENTED GENERATION (RAG) IS STRICTLY
          PROHIBITED.&rdquo;
        </blockquote>
        <p>It does not stop at a statement. The file names the crawlers it blocks, including:</p>
        <ul>
          <CheckItem>
            <strong>GPTBot and OAI-SearchBot.</strong> OpenAI&rsquo;s training crawler and the bot that builds ChatGPT&rsquo;s
            search answers.
          </CheckItem>
          <CheckItem>
            <strong>Google-Extended.</strong> Google&rsquo;s access token for training models such as Gemini.
          </CheckItem>
          <CheckItem>
            <strong>ClaudeBot and Claude-SearchBot.</strong> Anthropic&rsquo;s crawlers.
          </CheckItem>
          <CheckItem>
            <strong>PerplexityBot and CCBot.</strong> Perplexity&rsquo;s crawler, and Common Crawl&rsquo;s bot, whose data is used
            to train many AI models.
          </CheckItem>
        </ul>
        <p>
          The main page, www.naver.com, goes further with <code>User-agent: *</code> and <code>Disallow: /</code>, which
          blocks every bot from the whole site. Blocking search bots has a direct effect on visibility. OpenAI&rsquo;s own
          documentation puts it this way:
        </p>
        <blockquote>
          &ldquo;Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still
          appear as navigational links.&rdquo;
        </blockquote>
        <p>
          In short, Naver keeps its data for its own services. What ChatGPT, Google and Perplexity can read is the open web.
          We cover the details in{" "}
          <a href="/en/insights/naver-blocks-ai-crawlers">how Naver blocks ChatGPT, Claude and Perplexity crawlers</a>.
        </p>

        <h3>Which Korean platforms AI search bots can read</h3>
        <p>
          We checked the robots.txt files of 15 platforms where Korean businesses publish content on July 27, 2026, and
          rechecked all 15 bot by bot on August 27, 2026. It helps to separate two kinds of AI bots. Training bots (GPTBot,
          ClaudeBot, Google-Extended, CCBot and others) collect data to train models. AI search bots (OAI-SearchBot,
          ChatGPT-User, Claude-SearchBot, PerplexityBot and others) read pages at the moment a user asks a question and cite
          them in the answer. If search bots are blocked, the content cannot be cited.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">Platform</th>
                <th className="px-4 py-3 font-bold text-gray-900">AI training bots</th>
                <th className="px-4 py-3 font-bold text-gray-900">AI search bots</th>
                <th className="px-4 py-3 font-bold text-gray-900">Note</th>
              </tr>
            </thead>
            <tbody>
              {PLATFORM_ROWS.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700"><AccessMark v={r[1]} /></td>
                  <td className="px-4 py-2.5 text-gray-700"><AccessMark v={r[2]} /></td>
                  <td className="px-4 py-2.5 text-gray-700">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Naver Place is not in the table: our requests were rate limited (HTTP 429), so we could not retrieve its
          robots.txt. robots.txt can change at any time, and the table is a snapshot from the check dates. Brunch&rsquo;s
          robots.txt, for example, carries an update note dated April 22, 2026. A platform that is open today can close
          tomorrow.
        </p>

        <h2>What this means for a foreign brand</h2>
        <p>
          Market share debates aside, the practical conclusion is to treat Korea as two discovery systems and build for each
          one. These are the principles we start from.
        </p>
        <ul>
          <CheckItem>
            <strong>A Korean-language website on your own domain that AI crawlers can read.</strong> This is the asset that
            ChatGPT, Perplexity and Google&rsquo;s AI can cite, and the only place where platform policy changes cannot shut
            you out. Having a site is not enough on its own: if a firewall or robots.txt setting blocks AI crawlers, the site
            looks fine to people but does not exist for AI.
          </CheckItem>
          <CheckItem>
            <strong>A presence on Naver.</strong> Naver&rsquo;s AI Briefing reads Naver&rsquo;s own index. However well your website
            is built, it will not be cited in the Briefing unless it is indexed by Naver. In our own test, one of our pages
            ranked first in Naver&rsquo;s AI Briefing but did not appear in ChatGPT: same content, same day, different result.
          </CheckItem>
          <CheckItem>
            <strong>Consistent business details across Naver, Google and Kakao Map.</strong> When facts about you differ
            between channels, AI answers fill the gaps from whatever outdated page they find.
          </CheckItem>
          <CheckItem>
            <strong>Measure each engine separately.</strong> Each engine reads different sources, so a strong result on one
            says little about the others. Ask the same fixed questions repeatedly and track the rate, rather than trusting a
            single screenshot.
          </CheckItem>
        </ul>

        <h3>Example: a clinic that Naver AI knew and ChatGPT did not</h3>
        <p>
          A clinic we work with shows how far apart the engines can be. On August 6, 2026, we
          asked 10 questions a new patient might ask, without naming the clinic, three times each per engine. Naver&rsquo;s AI
          and Gemini named the clinic for all 10 questions. ChatGPT named it for only 4, a mention rate of 17%, and never
          cited the clinic&rsquo;s own site. ChatGPT knew facts about the clinic, such as its evening and weekend hours, but
          could not connect them to the clinic&rsquo;s name.
        </p>
        <p>
          The clinic&rsquo;s site was rebuilt so AI could read it and tie the name to those facts on pages the clinic owns.
          39 days later, on September 14, 2026, we asked the same 10 questions with the same model and search settings. The
          clinic appeared for all 10 questions, the average mention rate across 30 answers rose to 93%, and the clinic&rsquo;s
          site was cited as a source in 16 of 30 answers. The full record, including its limits, is in{" "}
          <a href="/en/insights/case-clinic-chatgpt">the clinic case study: ChatGPT mentions from 17% to 93%</a>.
        </p>
        <p>
          This is why we measure AI search visibility weekly, engine by engine, with an in-house monitoring system. It is not
          a product we sell: clients receive reports, not accounts.
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

        <h2>Where to start</h2>
        <p>
          WizThePlanning is a Seoul-based marketing agency that has worked with 7,000+ advertisers since 2016, across AI
          search optimization, SEO, Naver marketing, Meta and Google ads, content and websites. If you are planning a Korean
          launch, our <a href="/en/korea-market-entry">Korea market entry service</a> lays out how we set up both discovery
          paths. To see how your brand currently shows up on Naver, Google and AI assistants in Korea,{" "}
          <a href="/en/contact">contact our team</a>.
        </p>
      </EnArticle>
    </>
  )
}
