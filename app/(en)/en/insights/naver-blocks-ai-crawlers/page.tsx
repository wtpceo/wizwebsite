import type { Metadata } from "next"
import EnArticle, { CheckItem, Callout } from "@/components/en/EnArticle"

const TITLE = "Naver Blocks AI Crawlers: What It Means for Brands"
const DESC =
  "Naver's robots.txt explicitly prohibits AI training and retrieval bots, naming GPTBot, OAI-SearchBot, ClaudeBot and others. Content that lives only on Naver Blog or Cafe is invisible to ChatGPT. What that means for brands entering Korea."
const DATE = "2026-09-15"
const PATH = "/en/insights/naver-blocks-ai-crawlers"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/naver-blocks-ai-crawlers.jpg"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      en: URL,
      ko: "https://wiztheplanning.com/guide/naver-blocks-ai-crawlers",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    images: [COVER],
    type: "article",
    locale: "en_US",
  },
}

const FAQ = [
  {
    q: "If our brand publishes a lot on Naver Blog, will ChatGPT cite it?",
    a: "In most cases, no. The robots.txt files for Naver Blog and Naver Cafe name generative AI crawlers such as GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended and block them. Crawlers that follow the robots.txt standard do not collect those posts, so they are unlikely to be used as sources in AI answers outside Naver.",
  },
  {
    q: "Does that make Naver marketing pointless for a foreign brand?",
    a: "No. Naver Blog, Naver Place and Naver's own AI search still matter inside Naver. That value stays inside Naver, though. To appear in AI answers outside Naver, such as ChatGPT, Google AI and Perplexity, your brand needs a separate website that is open to their crawlers. Each engine draws on different sources.",
  },
  {
    q: "Is having a Korean website enough to show up in AI answers?",
    a: "No. If a security firewall or a robots.txt setting blocks AI crawlers, the site effectively does not exist for AI, even though it loads normally for people. The site has to be reachable by AI crawlers and structured so machines can understand it, for example with structured data and question-based content.",
  },
  {
    q: "What is the difference between blocking AI training bots and AI search bots?",
    a: "Training bots such as GPTBot, ClaudeBot, Google-Extended and CCBot collect data to train AI models. AI search bots such as OAI-SearchBot, ChatGPT-User, Claude-SearchBot and PerplexityBot read pages in real time when a user asks a question and cite them in the answer. A site that blocks only training bots can still be cited. A site that also blocks search bots cannot. Naver blocks both.",
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

type Status = "block" | "allow" | "partial"

const ROWS: { platform: string; train: Status; search: Status; note: string }[] = [
  { platform: "Naver Blog", train: "block", search: "block", note: "Training and search bots blocked by name, plus the RAG prohibition notice" },
  { platform: "Naver Cafe", train: "block", search: "block", note: "All bots blocked, including Google and Bing search crawlers" },
  { platform: "Naver SmartStore", train: "block", search: "block", note: "AI bots blocked by name, everything else blocked too" },
  { platform: "Naver main site", train: "block", search: "block", note: "Everything beyond the front page blocked" },
  { platform: "Kakao Map", train: "block", search: "block", note: "Uses the same RAG prohibition notice as Naver" },
  { platform: "Brunch (Kakao)", train: "block", search: "allow", note: "Training bots blocked; AI search bots allowed on par with regular search" },
  { platform: "Tistory (Kakao)", train: "allow", search: "allow", note: "No AI bot restrictions; only admin paths blocked" },
  { platform: "DiningCode", train: "block", search: "partial", note: "Training bots blocked; ChatGPT search bot allowed, Perplexity blocked" },
  { platform: "Siksin", train: "allow", search: "allow", note: "No AI bot restrictions" },
  { platform: "Catch Table", train: "block", search: "block", note: "Allowlist approach; AI bots are not on the list" },
  { platform: "Baemin", train: "block", search: "block", note: "Only Googlebot and Naver's bot allowed" },
  { platform: "Yogiyo", train: "allow", search: "allow", note: "No AI bot restrictions; only payment and similar paths blocked" },
  { platform: "Daangn", train: "block", search: "block", note: "46 AI and scraping bots blocked on Korean content: the broadest list" },
  { platform: "Instagram", train: "block", search: "partial", note: "Training bots and PerplexityBot blocked; other AI search bots not mentioned" },
  { platform: "YouTube", train: "allow", search: "allow", note: "Watch pages open, but only text such as titles and descriptions is read" },
]

function Mark({ v }: { v: Status }) {
  if (v === "allow") return <span className="font-bold text-emerald-600">Allowed</span>
  if (v === "block") return <span className="font-bold text-red-500">Blocked</span>
  return <span className="font-bold text-amber-600">Partial</span>
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
          Naver's robots.txt explicitly prohibits bots that collect content for AI training or retrieval, and it
          names crawlers such as GPTBot, OAI-SearchBot and ClaudeBot. If your brand's Korean content lives only on
          Naver Blog or Naver Cafe, ChatGPT and Perplexity cannot read it, so they cannot cite it.
        </p>
        <p>
          Korean consumers now look for brands in two ways. Many still search on Naver. A growing number ask
          ChatGPT, Perplexity or Google AI in plain conversational questions. The catch is that these two worlds
          read different sources, and Naver has drawn a clear line between them.
        </p>

        <h2>Naver put the block in writing</h2>
        <p>
          A common assumption among teams entering Korea goes like this: &ldquo;We have plenty of posts and reviews
          on Naver Blog and Cafe, so AI tools will pick those up too.&rdquo; They won't. Naver explicitly blocks
          outside AI systems from collecting its content.
        </p>
        <p>
          Websites use a file called <code>robots.txt</code> to tell crawlers what they may access. The Internet
          Engineering Task Force (IETF) formally standardized this convention in 2022 as RFC 9309, the Robots
          Exclusion Protocol. OpenAI, Google and Anthropic state in their official documentation that their crawlers
          follow it.
        </p>
        <p>
          Open the robots.txt files for Naver Blog and Naver Cafe and the top of each carries this line, in
          English:
        </p>
        <blockquote>
          <p>
            BOT ACCESS FOR THE PURPOSES OF AI TRAINING AND RETRIEVAL-AUGMENTED GENERATION (RAG) IS STRICTLY
            PROHIBITED.
          </p>
        </blockquote>

        <h3>The bots Naver names</h3>
        <p>Naver doesn't stop at a statement. It lists the crawlers it blocks by name, including these:</p>
        <ul>
          <CheckItem>
            <strong>GPTBot.</strong> OpenAI's training crawler. OpenAI's documentation describes it as collecting
            content that may be used to train its generative AI foundation models.
          </CheckItem>
          <CheckItem>
            <strong>OAI-SearchBot.</strong> The bot behind ChatGPT's search answers. OpenAI documents it separately
            from GPTBot.
          </CheckItem>
          <CheckItem>
            <strong>Google-Extended.</strong> Google's access token for training models such as Gemini.
          </CheckItem>
          <CheckItem>
            <strong>ClaudeBot and Claude-SearchBot.</strong> Anthropic's crawlers for Claude.
          </CheckItem>
          <CheckItem>
            <strong>PerplexityBot and CCBot.</strong> Perplexity's crawler, and the Common Crawl bot whose data is
            used to train many AI models.
          </CheckItem>
        </ul>
        <p>
          The key detail: Naver blocks not only training bots but also the AI search bots that fetch pages in real
          time to answer a user's question. Inside Naver, it is effectively a walled garden.
        </p>

        <h2>Why blocked content can't earn AI recommendations</h2>
        <p>
          For an AI assistant to mention a brand in an answer, it needs a source it can actually read about that
          brand. If all of that evidence sits inside Naver Blog or Cafe, then from the blocked assistant's point of
          view the information does not exist.
        </p>
        <p>
          This affects search visibility directly. OpenAI's own documentation spells out what happens when a site
          blocks its search bot:
        </p>
        <blockquote>
          <p>
            Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still
            appear as navigational links.
          </p>
        </blockquote>
        <p>
          Put simply, Naver keeps its data for its own services and closes it to outside AI. What ChatGPT, Google
          and Perplexity can read is the open web. For a brand, the part of the open web you control is your own
          website.
        </p>
        <Callout>
          Content that exists only on Naver Blog or Naver Cafe cannot be read by ChatGPT or Perplexity. Naver
          presence still matters inside Naver, but it does not carry over to AI answers outside it.
        </Callout>

        <h2>How other Korean platforms compare</h2>
        <p>
          Naver is not the only platform making this call. We checked the robots.txt files of 15 major Korean
          platforms on July 27, 2026, and rechecked all 15 at the bot-name level on August 27, 2026. The summary
          below reflects what the files said at the time of checking.
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
              {ROWS.map((r) => (
                <tr key={r.platform} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{r.platform}</td>
                  <td className="px-4 py-2.5 text-gray-700">
                    <Mark v={r.train} />
                  </td>
                  <td className="px-4 py-2.5 text-gray-700">
                    <Mark v={r.search} />
                  </td>
                  <td className="px-4 py-2.5 text-gray-700">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Naver Place is not in the table because its robots.txt could not be retrieved (the request was rate
          limited with a 429 response). Robots.txt files can change at any time, so treat this as a snapshot. The
          Brunch file, for example, carries an update note dated April 22, 2026.
        </p>
        <p>
          Two caveats apply. Robots.txt is a request, not a technical barrier, but because major AI companies
          publicly commit to following it, the practical assumption should be that blocked means not citable. And
          blocking does not erase data that was already used for training before the block.
        </p>

        <h2>What a foreign brand should do</h2>
        <p>
          Each engine leans on different sources. Naver's AI draws on Naver Place and reviews, while ChatGPT and
          Google look mainly at websites on the open web. For a fuller picture of how the two ecosystems differ, see
          our breakdown of <a href="/en/insights/naver-vs-google-korea">Naver vs Google in Korea</a>.
        </p>
        <ul>
          <CheckItem>
            <strong>Own a Korean-language site on your own domain.</strong> This is the channel that AI assistants
            outside Naver can read, and the only one whose crawler policy you control. A platform that is open today
            can close tomorrow.
          </CheckItem>
          <CheckItem>
            <strong>Make sure AI crawlers can actually reach it.</strong> A site can load perfectly for people and
            still be invisible to AI if a firewall or robots.txt setting blocks crawlers. We have seen a site that never
            appeared in ChatGPT for exactly this reason: a default firewall setting left in place by the site builder.
          </CheckItem>
          <CheckItem>
            <strong>Structure it for machines.</strong> Structured data and question-based content help AI systems
            understand what the page is about and cite it.
          </CheckItem>
          <CheckItem>
            <strong>Keep your Naver presence.</strong> Naver Blog, Naver Place and Naver's own AI Briefing still
            shape what Korean users see inside Naver. Treat Naver and your own site as two channels with different
            jobs, not as substitutes.
          </CheckItem>
        </ul>
        <p>
          The more Naver raises its walls, the more valuable an open, well-structured site outside those walls
          becomes. If you are planning a launch, our{" "}
          <a href="/en/korea-market-entry">guide to Korea market entry</a> looks at how the channels fit
          together, or you can <a href="/en/contact">talk to our team in Seoul</a> about your brand's current setup.
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
          <a href="/guide/naver-blocks-ai-crawlers" hrefLang="ko">
            네이버가 AI 접근을 막았습니다
          </a>
        </p>
      </EnArticle>
    </>
  )
}
