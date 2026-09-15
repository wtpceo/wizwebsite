import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Radar, Bell, FileText, Stethoscope, BarChart3, ListChecks } from "lucide-react"
import EnHeader from "@/components/en/EnHeader"
import EnFooter from "@/components/en/EnFooter"

const TITLE = "How We Measure: Our In-House AI Search Monitoring"
const DESC =
  "We measure AI search visibility every week with a monitoring system we built ourselves, across Naver AI Briefing, ChatGPT, Gemini and Perplexity. Six screens from the system, including our own score of 18 out of 100. We do not sell it; clients get reports."
const PATH = "/en/how-we-measure"
const URL = "https://wiztheplanning.com/en/how-we-measure"
const PUBLISHED = "2026-09-15"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | WizThePlanning` },
  description: DESC,
  alternates: {
    canonical: PATH,
    languages: {
      en: "https://wiztheplanning.com/en/how-we-measure",
      ko: "https://wiztheplanning.com/how-we-measure",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    images: ["/tools/realgeo-dashboard.jpg"],
    type: "website",
    locale: "en_US",
  },
}

const SCREENS = [
  {
    src: "/tools/realgeo-dashboard.jpg",
    alt: "WizThePlanning AI search monitoring dashboard: overall score 18/100, AI citation exposure rate 18%, web health 100, citations by engine",
    title: "Monitoring dashboard",
    body: "This is our own account. Our overall score is 18 out of 100, and we are not hiding it. The dashboard shows a 7% share on questions that do not name us and 88% on questions that do, side by side. We keep them apart because blending the two inflates the number.",
  },
  {
    src: "/tools/realgeo-weekly-report.jpg",
    alt: "Weekly report screen: category share, source citation rate 25%, cited keywords 4/9, visibility by engine, new citations and lost citations this week",
    title: "Weekly report",
    body: "Every week we re-measure against the same criteria and show what went up and what dropped compared with the week before. This particular week recorded 2 newly cited keywords and 3 keywords that lost their citation. The losses stay in the report too.",
  },
  {
    src: "/tools/realgeo-alerts.jpg",
    alt: "Alert center screen: weekly briefing after the Monday automatic measurement and a warning for 9 lost citations",
    title: "Alert center",
    body: "When the automatic measurement finishes early on Monday morning, the briefing and warnings land here. If a question that cited us last week stops citing us, a lost citation warning fires right away. This is the first screen the account manager opens at the start of the day.",
  },
  {
    src: "/tools/realgeo-prompts.jpg",
    alt: "AI visibility screen: 10 questions measured on Naver AI Briefing, Gemini, ChatGPT and Perplexity with mention, source and evidence results",
    title: "Results by question and engine",
    body: "We ask the four engines, repeatedly, the kind of questions real customers would ask. For each question we record separately whether the name appeared in the answer (mention), whether it was linked as a source (source), and whether it was used to support the answer (evidence). Being mentioned and being cited are different things, so we count them apart.",
  },
  {
    src: "/tools/realgeo-site-audit.jpg",
    alt: "Site audit screen: web health 100, technical SEO 96 across 5 axes, technical GEO 94 across 4 axes, 52 discovered pages analyzed",
    title: "Site audit",
    body: "We run all 52 pages of the site to score whether search engines and AI can read and cite it. Bot access, structured data, citability and technical health are scored separately, so the output is a list of specific items to fix.",
  },
  {
    src: "/tools/realgeo-monitoring.jpg",
    alt: "Monitoring dashboard: Google Search Console and GA4 linked, last 28 days 128 clicks, 5,731 impressions, 27 AI search referral visits",
    title: "Real traffic check",
    body: "Showing up in an AI answer is not the finish line. With Google Search Console and GA4 linked, we count the visits that actually arrived from ChatGPT, Gemini and Perplexity. In the last 28 days, 27 visits came to our site from AI. It is a small number, and we report it as it is.",
  },
]

const METRICS = [
  {
    icon: BarChart3,
    title: "Unbranded questions are the headline metric",
    body: "Ask an AI \"What do you think of WizThePlanning?\" and of course it answers. So our headline metric, category share, counts only questions that do not name the brand. Brand questions are checked separately and used only for alerts.",
  },
  {
    icon: ListChecks,
    title: "Mention, source and evidence are counted separately",
    body: "A name appearing in the answer text (mention), being linked as a source (source), and being used to support the answer (evidence) are different events. We record all three for every question. Citations are what bring customers.",
  },
  {
    icon: Stethoscope,
    title: "Site health gets a score",
    body: "Bot access, structured data, content quality, trust and technical health are scored axis by axis. If AI cannot read a site, no amount of content will get it cited, so we look at this first.",
  },
]

const ROUTINE = [
  {
    icon: Radar,
    title: "Early Monday: automatic measurement",
    body: "The question set goes to all four engines again, and the site audit reruns. These are not screenshots someone picked by hand.",
  },
  {
    icon: Bell,
    title: "Alerts first thing",
    body: "Questions that lost a citation, questions where a competitor showed up, and new problems on the site come in as warnings.",
  },
  {
    icon: FileText,
    title: "One report a week",
    body: "Change versus last week, the work done this week, and next week's priorities, written by your account manager.",
  },
  {
    icon: ListChecks,
    title: "Fixes in priority order",
    body: "We work on site structure, content and Naver Place in the order the measurement points to. What we changed and why is recorded in the next report.",
  },
]

const NOT_FOR_SALE = [
  {
    title: "We do not sell it",
    body: "We built it to manage client work and use it only in-house. We do not take inquiries about the tool itself.",
  },
  {
    title: "Clients do not get accounts",
    body: "It is a specialist tool that needs interpretation. Clients get a weekly report with the account manager's reading of the numbers.",
  },
  {
    title: "We do not guarantee visibility",
    body: "AI answers vary by engine and by moment. Instead of a guarantee, we keep measuring against the same criteria and report the change in numbers.",
  },
]

const FAQ = [
  {
    q: "Can clients log in and see the system?",
    a: "No, we do not give out accounts. It is a specialist tool, and the numbers need someone who knows SEO and GEO to interpret them. Your account manager takes the numbers from this system, adds an interpretation, and sends you a weekly report. You do not need to learn the tool.",
  },
  {
    q: "Do you sell the tool?",
    a: "No. WizThePlanning built it for managing client work and uses it only in-house. This page is not a sales pitch for software. It shows the evidence we work from.",
  },
  {
    q: "Which AI engines do you measure, and how often?",
    a: "Four engines: Naver AI Briefing, ChatGPT, Gemini and Perplexity. Measurement runs automatically every Monday early in the morning, and a report follows once a week.",
  },
  {
    q: "Why publish your own score?",
    a: "Because we promise measurement instead of guaranteed visibility, and showing only the good numbers would break that promise. Leaving our overall score of 18 and our list of lost keywords in plain view is proof that the reports we send clients are built the same way.",
  },
]

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  url: URL,
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "WizThePlanning", url: "https://wiztheplanning.com/en" },
  primaryImageOfPage: "https://wiztheplanning.com/tools/realgeo-dashboard.jpg",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <EnHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#070b14] py-20 md:py-28">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="absolute -right-32 top-1/4 h-[420px] w-[560px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />
          <div className="container relative mx-auto max-w-5xl px-4 md:px-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00e5a0]/30 bg-[#00e5a0]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00e5a0]">
              <Radar className="h-3.5 w-3.5" />
              HOW WE MEASURE
            </span>
            <h1 className="mt-6 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.15] tracking-tight text-white">
              We show you the screens,<br className="hidden sm:block" /> not the sales talk
            </h1>
            <p className="mt-5 max-w-2xl text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed text-slate-400">
              AI search has no rankings table, so it is easy for an agency to say &ldquo;it&rsquo;s going well&rdquo; and
              leave it there. We measure AI answers across Naver AI Briefing, ChatGPT, Gemini and Perplexity every week
              with a <span className="font-semibold text-slate-200">monitoring system we built ourselves</span> and use
              in-house. Below are six screens from it. Every one of them measures our own company, so nothing is
              blurred out.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-4">
              {[
                { n: "4", d: "AI engines measured" },
                { n: "Weekly", d: "Automatic re-measurement and report" },
                { n: "18", d: "Our own overall score (out of 100)" },
                { n: "0", d: "Accounts sold to outsiders" },
              ].map((s) => (
                <div key={s.d}>
                  <p className="text-xl font-extrabold text-[#00e5a0]">{s.n}</p>
                  <p className="mt-0.5 text-slate-500">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Six screens */}
        <section className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">SCREENS</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            Six screens, captured on September 9, 2026
          </h2>
          <p className="mt-3 max-w-2xl text-base text-gray-600">
            The account being measured is WizThePlanning itself. Client screens belong to clients, so we do not publish
            them.
          </p>
          <p className="mt-2 text-sm text-gray-500">Screens are from our Korean-language dashboard.</p>
          <div className="mt-10 space-y-14">
            {SCREENS.map((s, i) => (
              <figure key={s.src} className="grid items-start gap-6 md:grid-cols-5">
                <div className={`md:col-span-3 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={1800}
                    height={1053}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full rounded-2xl border border-gray-200 shadow-lg shadow-gray-200/60"
                  />
                </div>
                <figcaption className={`md:col-span-2 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="font-mono text-xs font-bold text-emerald-600">0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-gray-600 md:text-base">{s.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Metric definitions */}
        <section className="bg-[#f6f8f7] py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">METRICS</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              We count things separately so the numbers do not inflate
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {METRICS.map((m) => (
                <div key={m.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold tracking-tight text-gray-900">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{m.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              For an example of what re-measurement looks like on a real account, see{" "}
              <Link
                href="/en/insights/case-clinic-chatgpt"
                className="font-semibold text-emerald-700 underline-offset-4 hover:underline"
              >
                our clinic case: re-measuring ChatGPT citations
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Weekly routine */}
        <section className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">ROUTINE</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            The same routine, every week
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ROUTINE.map((r, i) => (
              <div key={r.title} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <r.icon className="h-4 w-4 text-emerald-600" />
                    <h3 className="text-base font-bold text-gray-900">{r.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Not for sale */}
        <section className="bg-[#070b14] py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">NOT FOR SALE</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              What we do not do with this system
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {NOT_FOR_SALE.map((h) => (
                <div key={h.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-lg font-extrabold tracking-tight text-white">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">FAQ</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-4">
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
        </section>

        {/* CTA */}
        <section className="container mx-auto max-w-5xl px-4 pb-20 md:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-8 py-12 text-center shadow-xl">
            <h2 className="text-xl font-extrabold text-white md:text-3xl">Start with where your brand shows up today</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              We measure your current state with the same system first. You are welcome to take the results and stop
              there.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/en/contact"
                className="inline-flex w-full items-center justify-center gap-1 rounded-md bg-[#00e5a0] px-8 py-4 text-base font-bold text-[#070b14] transition-colors hover:bg-[#3cf0bb] sm:w-auto"
              >
                Contact us
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                href="/en/korea-market-entry"
                className="inline-flex w-full items-center justify-center rounded-md border border-slate-700 bg-transparent px-8 py-4 text-base text-slate-300 transition-colors hover:border-slate-500 hover:bg-white/5 hover:text-white sm:w-auto"
              >
                Entering the Korean market
              </Link>
            </div>
          </div>
        </section>
      </main>

      <EnFooter />
    </div>
  )
}
