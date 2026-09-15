import type { Metadata } from "next"
import EnArticle, { CheckItem, Callout } from "@/components/en/EnArticle"

const TITLE = "Clinic Case Study: ChatGPT Mentions From 17% to 93%"
const DESC =
  "Before working with us, a clinic in the Seoul metropolitan area appeared in Naver AI and Gemini answers for all 10 test questions but in only 4 on ChatGPT. Re-measured the same way 39 days later, its ChatGPT mention rate rose from 17% to 93%."
const DATE = "2026-09-15"
const PATH = "/en/insights/case-clinic-chatgpt"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/case-orthopedic-chatgpt.jpg"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: { en: URL, ko: "https://wiztheplanning.com/guide/case-orthopedic-chatgpt" },
  },
  openGraph: { title: TITLE, description: DESC, url: URL, images: [COVER], type: "article", locale: "en_US" },
}

const FAQ = [
  {
    q: "Why would a clinic show up on Naver AI and Gemini but not on ChatGPT?",
    a: "Each engine reads different sources. Before working with us, this clinic was named in Naver AI and Gemini answers for all 10 test questions, but in only 4 on ChatGPT. Every source ChatGPT cited was a third-party page such as a blog or a clinic directory, and the clinic's own site was never cited. ChatGPT knew facts about the clinic but had no page that tied those facts to the clinic's name.",
  },
  {
    q: "How were the results measured?",
    a: "We asked the same 10 questions as in the first measurement, 3 times each, with the same model and the same search settings. An answer counted as a mention if the clinic's name appeared in the answer text, and as a citation if the clinic's site appeared in the source list. The result is based on 30 answers, not on a single screenshot.",
  },
  {
    q: "Isn't a screenshot of ChatGPT enough to check?",
    a: "No. One ChatGPT screenshot for this clinic showed a cost figure, but when we asked the same question 30 more times, that figure never appeared. Answers change by account and by time, so you need repeated questions and a rate, not a single screen.",
  },
  {
    q: "What happens when an AI assistant gets the facts wrong?",
    a: "It happened here too: of the 28 answers that named the clinic, 3 gave an out-of-date weekday closing time. As citations grow, managing inaccurate information becomes the next piece of work.",
  },
  {
    q: "Why is there no before and after comparison for Gemini?",
    a: "The Gemini model used in the first measurement was no longer available for new use at re-measurement time, so we had to use a different model. A different model is not the same condition, so we did not treat it as a before and after comparison. For reference, the new model named the clinic in 8 of 10 questions and cited the clinic's site in 21 of 30 answers.",
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
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

const th = "px-4 py-3 font-bold text-gray-900"
const td = "px-4 py-2.5 text-gray-700"
const tdLead = "px-4 py-2.5 font-semibold text-gray-800"
const tr = "border-t border-slate-100"

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <EnArticle
        href={PATH}
        kicker="Case study"
        title={TITLE}
        description={DESC}
        date="September 15, 2026"
        readingMinutes={6}
      >
        <p>
          An orthopedic clinic that ChatGPT mentioned in only <strong>17%</strong> of answers was mentioned in{" "}
          <strong>93%</strong> after we rebuilt its website so the clinic&apos;s name and facts sat together on pages it owns.
          We asked the same questions the same way 39 days apart, and the clinic&apos;s site went from 0 citations to 16.
        </p>
        <p>
          The client is an orthopedic clinic near a subway station in the Seoul metropolitan area. To protect the client, we
          do not share its name or location. Every number below comes from saved answer logs from the first measurement and
          the re-measurement.
        </p>

        <h2>Before: ChatGPT was the weak spot among three engines</h2>
        <p>
          On August 6, 2026, we asked 10 questions a real patient might ask, 3 times each on every engine.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className={th}>Engine</th>
                <th className={th}>Questions where the clinic was named</th>
                <th className={th}>Average mention rate (30 answers)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={tr}>
                <td className={tdLead}>Naver AI</td>
                <td className={td}>10/10</td>
                <td className={td}>100%</td>
              </tr>
              <tr className={tr}>
                <td className={tdLead}>Gemini</td>
                <td className={td}>10/10</td>
                <td className={td}>97%</td>
              </tr>
              <tr className={tr}>
                <td className={tdLead}>ChatGPT</td>
                <td className={td}>
                  <strong className="text-rose-600">4/10</strong>
                </td>
                <td className={td}>
                  <strong className="text-rose-600">17%</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          None of the questions included the clinic&apos;s name. They looked like &ldquo;Which orthopedic clinic near
          [station] is the best?&rdquo; or &ldquo;Is there an orthopedic clinic in [neighborhood] that&apos;s open on
          weekends?&rdquo; Any engine can answer when you give it the name, so we only counted the kind of question a new
          patient actually asks.
        </p>

        <h2>Reading the answers: ChatGPT knew the facts but not the name</h2>
        <p>
          We read all 30 ChatGPT answers one by one. The most telling was the answer to &ldquo;which one is the best?&rdquo;
          ChatGPT described this clinic without naming it:
        </p>
        <blockquote>
          &ldquo;An orthopedic clinic on the 2nd floor of [building] was introduced as a patient-friendly
          option, offering evening hours on weekdays as well as weekend appointments.&rdquo;
          <br />
          <span className="text-sm text-gray-500">
            ChatGPT answer, August 6, 2026 (translated from Korean). Source: a &ldquo;Top 5&rdquo; recommendation post on a
            third-party blog.
          </span>
        </blockquote>
        <ul>
          <CheckItem>
            <strong>It knew the facts.</strong> The building, the weekday evening hours and the weekend hours were all correct.
          </CheckItem>
          <CheckItem>
            <strong>It had no name.</strong> We read this as ChatGPT not finding a page that tied those facts to the
            clinic&apos;s name in one place.
          </CheckItem>
          <CheckItem>
            <strong>The clinic&apos;s site was cited 0 times.</strong> Every source was a third-party page: personal blogs,
            clinic directories and news.
          </CheckItem>
        </ul>
        <p>
          In the same period, Naver AI named the clinic correctly using its Naver Place listing, and Gemini did so using
          clinic information pages in Google&apos;s index. Different engines read different places. For background on how
          Naver treats AI crawlers, see{" "}
          <a href="/en/insights/naver-blocks-ai-crawlers">what Naver blocking AI crawlers means for brands</a>.
        </p>
        <p>
          One more observation. A July 2025 web archive snapshot shows the clinic&apos;s site was built with a site builder:
          of 470KB of HTML, only 844 characters were text a machine could read. The site as it stood just before the
          contract was not archived, so we could not check that version.
        </p>

        <h2>What we changed</h2>
        <p>
          After the contract, we rebuilt the clinic&apos;s site so AI assistants could read and cite it. One principle guided
          the work: <strong>bind the clinic&apos;s name and the facts about it together, on a page the clinic owns.</strong>
        </p>
        <ul>
          <CheckItem>
            <strong>Service-specific pages.</strong> Each condition and treatment got its own page.
          </CheckItem>
          <CheckItem>
            <strong>Machine-readable by default.</strong> Page text is rendered on the server, and the site carries
            structured data. The homepage HTML is now 27KB with 7 scripts.
          </CheckItem>
          <CheckItem>
            <strong>An AI guide file written as a fact sheet.</strong> Location, opening hours, medical staff and treatment
            definitions are collected in one file. A similar approach is covered in{" "}
            <a href="/en/insights/case-dental-llms-txt">our dental clinic llms.txt case study</a>.
          </CheckItem>
          <CheckItem>
            <strong>AI search bots allowed.</strong> Search crawlers were allowed by name.
          </CheckItem>
        </ul>

        <h2>39 days later: same questions, same method, 30 answers</h2>
        <p>
          On September 14, the client sent us a screenshot of ChatGPT recommending the clinic first. We did not judge by a
          single screen. We asked the same 10 questions 3 times each, with the same model and search settings as on August 6.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className={th}>ChatGPT</th>
                <th className={th}>August 6</th>
                <th className={th}>September 14</th>
              </tr>
            </thead>
            <tbody>
              <tr className={tr}>
                <td className={tdLead}>Questions where the clinic was named</td>
                <td className={td}>4/10</td>
                <td className={td}>
                  <strong className="text-emerald-700">10/10</strong>
                </td>
              </tr>
              <tr className={tr}>
                <td className={tdLead}>Average mention rate (30 answers)</td>
                <td className={td}>17%</td>
                <td className={td}>
                  <strong className="text-emerald-700">93% (28 of 30)</strong>
                </td>
              </tr>
              <tr className={tr}>
                <td className={tdLead}>Answers citing the clinic&apos;s site</td>
                <td className={td}>0/30</td>
                <td className={td}>
                  <strong className="text-emerald-700">16/30</strong>
                </td>
              </tr>
              <tr className={tr}>
                <td className={tdLead}>Answers recommending the clinic first</td>
                <td className={td}>Not recorded</td>
                <td className={td}>
                  <strong className="text-emerald-700">24/30</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>The answer to the same &ldquo;which one is the best?&rdquo; question now read like this:</p>
        <blockquote>
          &ldquo;1. [clinic name]. Location and access: a 1-minute walk from Exit 1 of [station]. Care: non-surgical,
          incision-free treatment for spine and joint pain, with the head physician personally handling everything from
          diagnosis to procedure.&rdquo;
          <br />
          <span className="text-sm text-gray-500">
            ChatGPT answer, September 14, 2026 (translated from Korean). Clinic name and location removed.
          </span>
        </blockquote>
        <p>
          The facts that floated around without a name in August now appear right next to the name. When we counted which
          clinic pages ChatGPT cited, they were <strong>service-specific pages, not the homepage</strong>.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className={th}>Clinic site page cited</th>
                <th className={th}>Times cited</th>
              </tr>
            </thead>
            <tbody>
              <tr className={tr}>
                <td className={tdLead}>Manual therapy page</td>
                <td className={td}>7</td>
              </tr>
              <tr className={tr}>
                <td className={tdLead}>Non-surgical treatments list page</td>
                <td className={td}>5</td>
              </tr>
              <tr className={tr}>
                <td className={tdLead}>Joint clinic page</td>
                <td className={td}>3</td>
              </tr>
              <tr className={tr}>
                <td className={tdLead}>About the clinic page</td>
                <td className={td}>2</td>
              </tr>
              <tr className={tr}>
                <td className={tdLead}>Sports injury clinic page</td>
                <td className={td}>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For questions about reviews, booking and weekend hours, ChatGPT cited the clinic&apos;s neighborhood business
          profile on a Korean local marketplace app in 4 answers. The site and that profile never appeared together in the
          same answer, and 20 of 30 answers cited one or the other. Questions about treatments and symptoms leaned on the
          clinic&apos;s site; questions about reviews and booking leaned on the external profile.
        </p>

        <h2>What to watch out for</h2>
        <ul>
          <CheckItem>
            <strong>A number from one screenshot did not reproduce.</strong> The client&apos;s screenshot showed a price
            range for manual therapy. Across 30 re-asks it never appeared, and that figure is not on the clinic&apos;s site.
          </CheckItem>
          <CheckItem>
            <strong>Old information crept in.</strong> Of the 28 answers that named the clinic, 3 gave a weekday closing time
            earlier than the real one. It appears to come from old data left on a clinic directory.
          </CheckItem>
          <CheckItem>
            <strong>Wording not on the site kept appearing.</strong> A specialty the site does not state was mentioned 10
            times. When a business does not state something first, AI assistants fill the gap from elsewhere.
          </CheckItem>
        </ul>
        <p>Once citations grow, managing inaccurate information becomes the next piece of work.</p>

        <h2>Limitations of this case</h2>
        <ul>
          <CheckItem>
            <strong>One clinic, 39 days.</strong> We do not claim the result transfers as-is to other specialties or regions.
          </CheckItem>
          <CheckItem>
            <strong>Several changes at once.</strong> The site structure, the AI guide file and bot access changed together,
            so we cannot isolate which had the biggest effect.
          </CheckItem>
          <CheckItem>
            <strong>Gemini used a different model.</strong> The original model was unavailable for new use at re-measurement,
            so we used another one. It named the clinic in 8 of 10 questions and cited the clinic&apos;s site in 21 of 30
            answers, but we do not use this as a before and after comparison.
          </CheckItem>
          <CheckItem>
            <strong>Naver AI was not re-measured.</strong>
          </CheckItem>
          <CheckItem>
            <strong>AI answers vary by account and time.</strong> We keep measuring weekly on the same basis to see whether
            the result holds.
          </CheckItem>
        </ul>
        <p>
          WizThePlanning is a Seoul-based marketing agency that has worked with 7,000+ advertisers since 2016. We measure AI
          search visibility weekly with an in-house monitoring system; the process is described in{" "}
          <a href="/en/how-we-measure">how we measure AI search visibility</a>. Fixing the question set matters: without
          the same questions each time, you cannot tell improvement from chance.
        </p>

        <Callout>
          The full implementation notes for this case (page structure, structured data, the AI guide file, question design
          and error handling) are shared with prospective clients on request.{" "}
          <a href="/en/contact">Contact us to request the notes</a>.
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
          <a href="/guide/case-orthopedic-chatgpt" hrefLang="ko">
            ChatGPT만 모르던 정형외과
          </a>
        </p>
      </EnArticle>
    </>
  )
}
