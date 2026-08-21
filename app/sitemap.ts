import type { MetadataRoute } from "next"
import { GUIDE_ARTICLES } from "@/lib/guide-articles"

const BASE_URL = "https://wiztheplanning.com"

// lastmod는 "실제로 고친 날"이어야 한다. 전부 빌드 시각으로 내보내면
// 검색엔진이 매 배포마다 전 페이지가 바뀐 걸로 읽고, 어느 게 새 글인지 구분하지 못한다.
// (구글은 lastmod가 반복적으로 부정확하면 무시한다고 명시. 빙은 크롤 예산까지 깎인다)
// 가이드 글은 lib/guide-articles.ts의 발행일을, 나머지는 아래 상수를 쓴다.
const SITE_UPDATED = "2026-08-20"

// "2026. 8. 20" → "2026-08-20"
function parseKoDate(d: string): string | null {
  const m = d.match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})/)
  if (!m) return null
  return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`
}

const GUIDE_DATES = new Map<string, string>(
  GUIDE_ARTICLES.flatMap((a) => {
    const d = parseKoDate(a.date)
    return d ? ([[a.href, d]] as [string, string][]) : []
  })
)

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; lastmod?: string }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/zh", priority: 0.9, changeFrequency: "monthly" },
    { path: "/vi", priority: 0.9, changeFrequency: "monthly" },
    { path: "/focusmedia", priority: 0.8, changeFrequency: "monthly" },
    { path: "/naver-marketing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.7, changeFrequency: "monthly" },
    { path: "/medical-diagnosis", priority: 0.9, changeFrequency: "monthly" },
    { path: "/diagnosis", priority: 0.9, changeFrequency: "monthly" },
    { path: "/medical-geo-agency", priority: 0.9, changeFrequency: "monthly" },
    { path: "/site-check", priority: 0.9, changeFrequency: "monthly" },
    { path: "/strategy/1", priority: 0.8, changeFrequency: "monthly" },
    { path: "/strategy/2", priority: 0.8, changeFrequency: "monthly" },
    { path: "/strategy/3", priority: 0.8, changeFrequency: "monthly" },
    { path: "/strategy/4", priority: 0.8, changeFrequency: "monthly" },
    { path: "/strategy/5", priority: 0.8, changeFrequency: "monthly" },
    { path: "/strategy/6", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide", priority: 0.9, changeFrequency: "weekly" },
    { path: "/guide/geo", priority: 1.0, changeFrequency: "weekly" },
    { path: "/guide/geo-vs-seo", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/naver-google-share", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/measure-ai-traffic", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/naver-ai-briefing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/geo-cost", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/case-pension-direct-booking", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/case-third-party-citation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/platform-ai-crawler-status", priority: 0.9, changeFrequency: "weekly" },
    { path: "/guide/how-to-choose-geo-agency", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/bing-index-bottleneck", priority: 0.9, changeFrequency: "weekly" },
    { path: "/theater", priority: 0.8, changeFrequency: "weekly" },
    { path: "/theater/ep1-closed-door", priority: 0.8, changeFrequency: "monthly" },
    { path: "/theater/ep2-half-open-door", priority: 0.8, changeFrequency: "monthly" },
    { path: "/theater/ep3-invisible-wall", priority: 0.8, changeFrequency: "monthly" },
    { path: "/theater/ep4-doorless-shop", priority: 0.8, changeFrequency: "monthly" },
    { path: "/theater/ep5-unread-invitation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/theater/ep6-picky-guests", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/what-is-geo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/is-geo-abuse", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/case-mobile-carwash", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/case-urology-clinic", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/check-hospital-ai-visibility", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/case-blog-omission", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/naver-blocks-ai-crawlers", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/ranked-but-not-in-chatgpt", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guide/get-cited-by-ai", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/naver-place-checklist", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/medical-geo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/dental-geo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/skincare-geo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/ai-engines-cite-differently", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guide/why-ads-stop-working", priority: 0.8, changeFrequency: "monthly" },
  ]

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: r.lastmod ?? GUIDE_DATES.get(r.path) ?? SITE_UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
