"use client"

import { useState } from "react"
import Link from "next/link"
import { CATEGORIES, GUIDE_ARTICLES, type CategoryKey } from "@/lib/guide-articles"
import { coverFor } from "@/lib/guide-cover"


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
      <div className="gd-filter sticky top-[66px] z-30 border-b border-[#E3EAF2] bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex snap-x gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <FilterChip label="전체" count={GUIDE_ARTICLES.length} active={active === "all"} onClick={() => setActive("all")} />
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
                className="group flex flex-col overflow-hidden rounded-lg border border-[#E3EAF2] bg-white transition-colors hover:border-[#2A93C2]"
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
                    <span className="text-[#1E6C9F]">{cat?.short}</span>
                    <span className="h-3 w-px bg-gray-200" />
                    <span className="font-medium text-[#4B5565]">{fmtDate(g.updated ?? g.date)}</span>
                  </p>
                  <h3 className="mt-2.5 line-clamp-2 text-[17px] font-extrabold leading-snug tracking-tight text-[#0F1B2D] group-hover:text-[#1E6C9F]">
                    {g.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#4B5565]">{g.desc}</p>
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
      className={`inline-flex shrink-0 snap-start items-center gap-1.5 rounded border px-4 py-2 text-sm font-bold transition-colors ${
        active ? "border-[#1E6C9F] bg-[#1E6C9F] text-white" : "border-[#C9D6E3] bg-white text-[#2A3448] hover:border-[#1E6C9F] hover:text-[#1E6C9F]"
      }`}
    >
      {label}
      <span className={`text-xs ${active ? "text-white/75" : "text-[#4B5565]"}`}>{count}</span>
    </button>
  )
}
