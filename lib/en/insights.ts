// 영문 인사이트 목록. 한국어 가이드의 번역본이 아니라 해외 마케터용으로 옮긴 글이다.
// ko: 대응하는 국문 글이 있으면 hreflang 상호 연결에 쓴다.
export type EnInsight = {
  href: string
  kicker: string
  title: string
  desc: string
  date: string
  cover: string
  ko?: string
}

export const EN_INSIGHTS: EnInsight[] = [
  {
    href: "/en/insights/korea-press-release-distribution",
    kicker: "Korea market guide",
    title: "Korea Press Release Distribution Guide",
    desc: "Publishing an English press release in Korea requires rewriting it into a local news format and following the strict conditions of outlets we place in, including no URLs and no post-publication edits. Learn how paid bylined placements work across roughly 140 Korean media outlets and what to ask before requesting a quote.",
    date: "2026-11-25",
    cover: "/covers/en-korea-press-release-distribution.jpg",
  },
  {
    href: "/en/insights/naver-seo-guide",
    kicker: "Korea market guide",
    title: "Naver SEO Guide for Foreign Brands in Korea",
    desc: "Publishing on Naver requires more than translating keywords. Learn how Naver Blog, Naver Search Advisor, and Naver Place work together, why you also need Korean pages on your own site since ChatGPT cannot read Naver posts alone, and what weekly tracking and transparent reporting look like when you cannot read Korean.",
    date: "2026-11-25",
    cover: "/covers/en-naver-seo-guide.jpg",
  },
  {
    href: "/en/insights/korean-influencer-marketing",
    kicker: "Korea market guide",
    title: "Korean Influencer Marketing: Agency Guide",
    desc: "Planning an influencer or Naver blogger campaign in Korea without a local team? Learn what to include in your agency brief, how costs are structured, what Korean ad disclosure and copyright rules require, and what reporting to expect when posts go live.",
    date: "2026-11-25",
    cover: "/covers/en-korean-influencer-marketing.jpg",
  },
  {
    href: "/en/insights/marketing-in-korea-2026",
    kicker: "Korea market guide",
    title: "Marketing in Korea 2026: Naver, Google and AI Search",
    desc: "Korea is not a Google-only market, and it is not a Naver-only market either. How Naver, Google and AI assistants split discovery in Korea as of 2026, why share numbers disagree, and what a foreign brand should set up first.",
    date: "2026-09-15",
    cover: "/covers/geo.jpg",
  },
  {
    href: "/en/insights/naver-blocks-ai-crawlers",
    kicker: "Korea data",
    title: "Naver Blocks AI Crawlers: What It Means for Brands",
    desc: "Naver's robots.txt explicitly prohibits AI training and retrieval bots, naming GPTBot, OAI-SearchBot, ClaudeBot and others. Content that lives only on Naver Blog or Cafe is invisible to ChatGPT. What that means for brands entering Korea.",
    date: "2026-09-15",
    cover: "/covers/naver-blocks-ai-crawlers.jpg",
    ko: "/guide/naver-blocks-ai-crawlers",
  },
  {
    href: "/en/insights/naver-vs-google-korea",
    kicker: "Korea data",
    title: "Naver vs Google in Korea: Why Share Estimates Differ",
    desc: "Depending on the source, Naver's share of search in Korea ranges from 28% to 65%. None of them is wrong: app MAU, web traffic referrals and Korean panel studies measure different things. How to read the numbers before planning a Korea launch.",
    date: "2026-09-15",
    cover: "/covers/naver-google-share.jpg",
    ko: "/guide/naver-google-share",
  },
  {
    href: "/en/insights/case-clinic-chatgpt",
    kicker: "Case study",
    title: "Clinic Case Study: ChatGPT Mentions From 17% to 93%",
    desc: "Before working with us, a clinic in the Seoul metropolitan area appeared in Naver AI and Gemini answers for all 10 test questions but in only 4 on ChatGPT. Re-measured the same way 39 days later, its ChatGPT mention rate rose from 17% to 93%.",
    date: "2026-09-15",
    cover: "/covers/case-orthopedic-chatgpt.jpg",
    ko: "/guide/case-orthopedic-chatgpt",
  },
  {
    href: "/en/insights/case-dental-llms-txt",
    kicker: "Case study",
    title: "Dental Case Study: A 3-Page Site Got Cited First",
    desc: "A 167-page dental website with 51 blog posts and 22 FAQs was not cited by ChatGPT, while a 3-page site nearby was. The difference was the AI guide file. After rewriting llms.txt as a fact sheet, the clinic appeared in ChatGPT answers.",
    date: "2026-09-15",
    cover: "/covers/case-dental-llms-factsheet.jpg",
    ko: "/guide/case-dental-llms-factsheet",
  },
]

export function fmtEnDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
}
