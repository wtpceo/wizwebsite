import type { MetadataRoute } from "next"

const BASE_URL = "https://wiztheplanning.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
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
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
