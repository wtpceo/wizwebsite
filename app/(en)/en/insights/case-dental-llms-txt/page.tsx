import type { Metadata } from "next"
import EnArticle, { CheckItem, Callout } from "@/components/en/EnArticle"

const TITLE = "Dental Case Study: A 3-Page Site Got Cited First"
const DESC =
  "A 167-page dental website with 51 blog posts and 22 FAQs was not cited by ChatGPT, while a 3-page site nearby was. The difference was the AI guide file. After rewriting llms.txt as a fact sheet, the clinic appeared in ChatGPT answers."
const DATE = "2026-09-15"
const PATH = "/en/insights/case-dental-llms-txt"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/case-dental-llms-factsheet.jpg"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      en: URL,
      ko: "https://wiztheplanning.com/guide/case-dental-llms-factsheet",
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
    q: "What should llms.txt contain if you want AI assistants to cite you?",
    a: "Facts, not a table of contents. In this case, the file started as a list of page links. Once it held the clinic's name, the lead dentist's credentials, phone number, address, coordinates, business registration number, opening hours by day, lunch break, closed days, treatment areas and official channels, the clinic appeared in ChatGPT answers. One sentence in an answer, \"open until 8 p.m. on Thursdays\", matched a single line in that file. Treatment definitions and the full FAQ went into a separate, longer file.",
  },
  {
    q: "Doesn't more content make AI citation more likely?",
    a: "Not in this case. The 167-page site with 51 blog posts and 22 FAQ entries was not cited, while a 3-page site in the same area already was. Whether the AI could easily pull answer material from the site mattered more than volume. This is a comparison of two sites, so we do not present it as a general rule.",
  },
  {
    q: "Does publishing a lot on Naver Blog help with ChatGPT?",
    a: "No. Naver uses robots.txt to block outside AI crawlers, so tools like ChatGPT cannot read Naver Blog posts. This clinic had blogged consistently, but from a GEO point of view that content did not exist. Putting the main content on the clinic's own domain became the first requirement.",
  },
  {
    q: "Should you fix everything an external GEO audit tool flags?",
    a: "No. Across two external audits in this project, 11 of 31 findings were false positives. Examples included an intentional noindex on admin pages, standard-compliant handling of alt text on decorative icons, and Korean word-spacing differences read as separate topics. Open the actual response behind each finding before deciding whether to fix it or push back. Following the reports blindly would have broken settings that were working correctly.",
  },
  {
    q: "Will these results last?",
    a: "There is no guarantee. Generative AI answers to the same question vary by time, account and model. This article records what was observed at a specific point in time, and the clinic's visibility is being re-measured regularly. Appearing for question-style queries is still at an early stage, and some information, such as prices for treatments not covered by national health insurance, has not been added yet.",
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

const STATS = [
  ["51 days", "July 21 to September 9, 2026"],
  ["37 days", "Actual working days"],
  ["120 pages", "Indexable pages"],
  ["4 languages", "Korean, English, Japanese, Chinese"],
  ["15 crawlers", "AI crawlers explicitly allowed"],
]

const LLMS_COMPARE = [
  ["Role", "Table of contents: \"this is where things are\"", "Fact sheet: \"every fact you need to answer is here\""],
  [
    "Contents",
    "A list of links",
    "Clinic name, lead dentist's credentials, phone, address, coordinates, business registration number, hours by day, lunch break, closed days, directions, treatment areas, official channels",
  ],
  [
    "Effect",
    "No answer material, so the AI has to open pages one by one",
    "The file alone can answer the question. Treatment definitions and the full FAQ sit in a separate long version (/llms-full.txt)",
  ],
]

const ISSUES = [
  ["Slow pages and occasional 503 errors", "Time to first byte went from 3.85 seconds to 0.60 to 0.70 seconds. The cause was server-side configuration, not content."],
  ["The site's design disappeared the day after launch", "The deployment procedure was fixed in place, with no recurrence. It looked normal on the build team's computers, so it went unnoticed for hours."],
  ["\"We deleted a post, but it is still on the site\"", "A process that had been failing silently for a week was found and fixed. Failures are now logged."],
  ["Search engines reported \"page not found\"", "The way the blog post list was pulled in was changed, and 6 missing posts were restored."],
  ["The same post existed at 4 different URLs", "The canonical URL was set to the Korean version. Sitemap entries went from 308 to 167 to 120. No pages were lost: duplicate entries were removed."],
  ["External GEO audit reports flagged dozens of issues", "11 of 31 findings across two audits were false positives. Each finding was checked against the actual response to decide what to fix and what to dispute."],
  ["Treatment pages were called thin", "The problem was missing steps, not length. 21 pages were expanded, from 275 to 1,192 characters of body text to 758 to 1,585 characters."],
  ["Debate over adding the area name to the clinic name", "Measurements showed the clinic name did not explain rankings, so the officially registered name was kept."],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <EnArticle href={PATH} kicker="Case study" title={TITLE} description={DESC} date="September 15, 2026" readingMinutes={8}>
        <p>
          A dental clinic's new 167-page website was not being cited by ChatGPT, while a 3-page competitor site was. After the
          team rewrote the site's llms.txt file from a table of contents into a fact sheet, ChatGPT began naming the clinic in its
          answers, and one sentence in those answers could be traced back to a single line in that file.
        </p>
        <p>
          WizThePlanning, a Seoul-based marketing agency operating since 2016, built a new website for a dental clinic in a busy
          downtown district of a major Korean city and designed GEO (generative engine optimization: getting AI assistants to cite
          you) into it from the start. The project began on July 21, 2026, and ran to September 9, 2026: 51 days, 37 of them
          working days. At the client's request, the clinic's name and exact location are not disclosed. Every number here comes
          from work records and measurements. No estimates are included.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {STATS.map(([n, d]) => (
            <div key={n} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xl font-extrabold text-gray-900">{n}</p>
              <p className="mt-1 text-xs leading-snug text-gray-600">{d}</p>
            </div>
          ))}
        </div>

        <h2>The result: ChatGPT started naming the clinic</h2>
        <p>
          The clinic first appeared for a keyword-style query, then for a question-style query. Question-style queries are a step
          harder, because the AI has to understand a condition and choose clinics that meet it. Both queries and answers were in
          Korean. The English below is our translation, and the area name is replaced with [area].
        </p>

        <h3>Query 1, keyword style: "Recommend an orthodontic dental clinic in [area]"</h3>
        <blockquote>
          <p>
            (Translated from Korean) "If you are looking for an orthodontic clinic in [area], start by comparing and consulting
            these 4 clinics. … A clinic that has practiced in [area] for a long time, offering implants and general dentistry as
            well as orthodontics. It says the lead dentist treats patients directly, and it is close to the station."
          </p>
        </blockquote>

        <h3>Query 2, question style: "Recommend a dental clinic in [area] with evening hours"</h3>
        <blockquote>
          <p>
            (Translated from Korean) "Looking at evening-hours convenience in [area], these three clinics are worth recommending.
            … Open until 8 p.m. on Thursdays / Focuses on orthodontics, implants and cosmetic dentistry / Worth considering if you
            want an orthodontic or veneer consultation in [area]."
          </p>
        </blockquote>

        <h2>The key finding: the source of the citation could be traced</h2>
        <p>
          The phrase "open until 8 p.m. on Thursdays" in the answer to Query 2 did not come from the website's page body. It
          matched, exactly, one line in the AI guide file the team had written, /llms.txt:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100">{`- Thursday: 10:00 to 20:00 (evening hours)`}</pre>
        <p>
          That means it was possible to see where the AI read before it answered. This one sentence shows that GEO is not
          guesswork. It is the work of placing facts, in a precise form, where AI systems actually read.
        </p>

        <h2>Starting constraints: why "just blog more" was not an option</h2>
        <h3>Naver blocks outside AI crawlers</h3>
        <p>
          The clinic had been posting consistently on Naver Blog. But Naver uses robots.txt to block outside AI crawlers, so tools
          like ChatGPT cannot read those posts at all. From a GEO point of view, content that lived only on the blog did not exist.
          The first requirement became clear: the main content had to live on the clinic's own domain. We covered this in more
          detail in{" "}
          <a href="/en/insights/naver-blocks-ai-crawlers">what Naver's AI crawler block means for brands</a>.
        </p>
        <h3>Medical advertising law comes before GEO</h3>
        <p>
          Sentences that get cited easily tend to be assertive. Korean medical advertising, however, cannot use superlatives,
          guarantees of results or unverified figures (Medical Service Act, Article 56). Punchier wording to raise the citation
          rate was never an option. Instead, the team raised the density of verifiable facts: opening hours, how degrees are
          stated, national health insurance coverage criteria, coordinates and the business registration number.
        </p>
        <h3>If a page is slow, nothing else matters</h3>
        <p>
          At kickoff, time to first byte was 3.85 seconds, and some pages hit server resource limits and returned 503 errors.
          Crawlers do not wait. Before any content work, the site had to reliably load fast.
        </p>

        <h2>The turning point: watching a competitor changed the plan</h2>
        <p>
          Midway through the project, the team noticed something odd. A dental clinic in the same area had a site with just 3
          pages, yet ChatGPT was citing it. At that point this clinic's site was far bigger, with 167 pages, 51 blog posts and 22
          FAQ entries, and it was not being cited. The difference was not the amount of content. It was what kind of file
          /llms.txt was.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900"></th>
                <th className="px-4 py-3 font-bold text-gray-900">Before</th>
                <th className="px-4 py-3 font-bold text-gray-900">After</th>
              </tr>
            </thead>
            <tbody>
              {LLMS_COMPARE.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 align-top font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 align-top text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 align-top text-gray-700">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          The "open until 8 p.m. on Thursdays" line came in with exactly this change. Turning the table of contents into a fact
          sheet was the highest-return piece of work in the whole project.
        </p>

        <h2>Problems we actually hit</h2>
        <p>
          Far more time went into fundamentals than into GEO techniques. The table below lists only symptoms and results, taken
          from the work record.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">Visible symptom</th>
                <th className="px-4 py-3 font-bold text-gray-900">Result</th>
              </tr>
            </thead>
            <tbody>
              {ISSUES.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 align-top font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 align-top text-gray-700">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>The order we would follow again</h2>
        <ol>
          <li>
            <strong>Put the main content on your own domain.</strong> Content that exists only on a platform does not exist for AI.
          </li>
          <li>
            <strong>Send fully rendered HTML from the server.</strong> Miss this and everything after it is wasted.
          </li>
          <li>
            <strong>Make pages load fast, every time.</strong> This comes before content.
          </li>
          <li>
            <strong>Make /llms.txt a fact sheet.</strong> As a table of contents, it does not get cited. This was the smallest
            effort with the biggest difference.
          </li>
          <li>
            <strong>Allow AI crawlers one by one.</strong> Default settings often block them. In this case, 15 were explicitly
            allowed.
          </li>
          <li>
            <strong>Write every fact exactly the same way everywhere,</strong> down to the character.
          </li>
          <li>
            <strong>Clean up duplicate URLs.</strong>
          </li>
          <li>
            <strong>Put decision-making values in the page body.</strong> Generic statements do not get cited.
          </li>
        </ol>

        <h2>What changed in our thinking</h2>
        <ul>
          <CheckItem>
            <strong>Content volume mattered less than expected.</strong> A 3-page site was cited before a 167-page one. What
            counted more was whether the AI could easily pull answer material from the site.
          </CheckItem>
          <CheckItem>
            <strong>External audit tools should not be followed blindly.</strong> Across two audits, 11 of 31 findings were false
            positives. Tools sometimes misread structures such as server rendering, multilingual setups and hub pages.
          </CheckItem>
          <CheckItem>
            <strong>The constraint set the direction.</strong> Medical advertising law ruled out strong wording, so the site was
            filled only with verifiable facts. Those were exactly the values that got cited.
          </CheckItem>
          <CheckItem>
            <strong>Most of the time went into fundamentals, not GEO.</strong> Caching, deployment procedure, duplicate URLs and
            error handling. Keeping the site reliably working took far more effort than any clever technique.
          </CheckItem>
        </ul>
        <p>
          To see how the same principles worked for a different medical specialty, with before-and-after measurements, read{" "}
          <a href="/en/insights/case-clinic-chatgpt">our clinic case study on ChatGPT visibility</a>.
        </p>

        <h2>What is still open</h2>
        <ul>
          <CheckItem>
            <strong>In progress.</strong> The visibility described here is an observation at a point in time. Whether it holds is
            being re-measured regularly.
          </CheckItem>
          <CheckItem>
            <strong>In progress.</strong> Visibility for question-style queries is at an early stage, and more query types are
            being tested.
          </CheckItem>
          <CheckItem>
            <strong>Pending.</strong> Some information is still missing, such as prices for treatments not covered by national
            health insurance, so the site gives AI nothing to answer price questions with.
          </CheckItem>
        </ul>
        <Callout>
          <strong>A caution.</strong> Generative AI answers to the same question vary by time, account and model. This article
          records results observed at a specific point in time. It is not a guarantee of rankings or ongoing visibility.
        </Callout>

        <Callout>
          <strong>Want the full work record?</strong> The public version leaves out the details. The full record covers the root
          cause and fix for each issue above, how false positives in the external audits were judged, the structure of the fact
          sheet and the crawler settings. We share it with prospective clients on request.{" "}
          <a href="/en/contact">Contact us to request it</a>.
        </Callout>

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
          <a href="/guide/case-dental-llms-factsheet" hrefLang="ko">
            치과 홈페이지 GEO 51일
          </a>
        </p>
      </EnArticle>
    </>
  )
}
