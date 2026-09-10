"use client"

import { useState } from "react"
import Link from "next/link"
import { CATEGORIES, GUIDE_ARTICLES, type CategoryKey } from "@/lib/guide-articles"

// 표지 이미지: 기본은 /covers/<slug>.jpg (자동 생성 타이포 표지), 실물 화면이 있는 글은 여기서 덮어쓴다
const COVER_OVERRIDES: Record<string, string> = {
  "/guide/case-pension-direct-booking": "/blog/pension-hero.jpg",
  "/guide/naver-ai-briefing": "/blog/owner-blog-hero.jpg",
  "/guide/geo-measurement-tools": "/tools/realgeo-prompts.jpg",
  "/guide/measure-ai-traffic": "/tools/realgeo-monitoring.jpg",
  "/guide/ranked-but-not-in-chatgpt": "/tools/realgeo-dashboard.jpg",
}

export function coverFor(href: string) {
  return COVER_OVERRIDES[href] ?? `/covers/${href.replace("/guide/", "")}.jpg`
}

const CAT_TEXT: Record<CategoryKey, string> = {
  concern: "text-amber-600",
  case: "text-emerald-600",
  basics: "text-sky-600",
  playbook: "text-violet-600",
  industry: "text-rose-600",
  naver: "text-lime-700",
}

function fmtDate(d: string) {
  // "2026. 9. 10" → "2026.09.10"
  const m = d.match(/(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})/)
  if (!m) return d
  return `${m[1]}.${m[2].padStart(2, "0")}.${m[3].padStart(2, "0")}`
}

export default function GuideGrid() {
  const [active, setActive] = useState<"all" | CategoryKey>("all")
  const items = active === "all" ? GUIDE_ARTICLES : GUIDE_ARTICLES.filter((g) => g.category === active)

  return (
    <>
      {/* 필터 */}
      <div className="sticky top-16 z-30 border-b border-gray-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex snap-x gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <FilterChip label="ALL" count={GUIDE_ARTICLES.length} active={active === "all"} onClick={() => setActive("all")} />
            {CATEGORIES.map((c) => {
              const n = GUIDE_ARTICLES.filter((g) => g.category === c.key).length
              if (!n) return null
              return <FilterChip key={c.key} label={c.short} count={n} active={active === c.key} onClick={() => setActive(c.key)} />
            })}
          </div>
        </div>
      </div>

      {/* 카드 그리드 */}
      <section className="container mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => {
            const cat = CATEGORIES.find((c) => c.key === g.category)
            return (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.08]"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={coverFor(g.href)}
                    alt={g.title}
                    width={1200}
                    height={675}
                    loading={i < 6 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-2 text-xs font-bold">
                    <span className={CAT_TEXT[g.category]}>{cat?.short}</span>
                    <span className="h-3 w-px bg-gray-200" />
                    <span className="font-medium text-gray-400">{fmtDate(g.updated ?? g.date)}</span>
                  </p>
                  <h3 className="mt-2.5 line-clamp-2 text-[17px] font-extrabold leading-snug tracking-tight text-gray-900 group-hover:text-emerald-700">
                    {g.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">{g.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}

function FilterChip({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex shrink-0 snap-start items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
        active
          ? "border-[#00e5a0] bg-[#00e5a0] text-[#070b14]"
          : "border-gray-200 bg-white text-gray-700 hover:border-emerald-500/50 hover:bg-emerald-50 hover:text-emerald-700"
      }`}
    >
      {label}
      <span className={`text-xs ${active ? "text-[#070b14]/60" : "text-gray-400"}`}>{count}</span>
    </button>
  )
}
