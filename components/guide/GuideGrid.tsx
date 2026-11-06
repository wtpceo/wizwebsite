"use client"

import { useState } from "react"
import Link from "next/link"
import { CATEGORIES, GUIDE_ARTICLES, type CategoryKey } from "@/lib/guide-articles"
import { fmtDate } from "@/components/guide/format"
import s from "@/components/guide/guide.module.css"

// 가이드 목록. 2026-11 리브랜딩: 표지 카드 그리드 대신 면 막대 목록. 카테고리 거르기는 그대로 둔다
export default function GuideGrid() {
  const [active, setActive] = useState<"all" | CategoryKey>("all")
  const items = active === "all" ? GUIDE_ARTICLES : GUIDE_ARTICLES.filter((g) => g.category === active)

  return (
    <>
      <div className={s.filter}>
        <div className={s.chips} role="group" aria-label="카테고리">
          <FilterChip label="전체" count={GUIDE_ARTICLES.length} active={active === "all"} onClick={() => setActive("all")} />
          {CATEGORIES.map((c) => {
            const n = GUIDE_ARTICLES.filter((g) => g.category === c.key).length
            if (!n) return null
            return <FilterChip key={c.key} label={c.short} count={n} active={active === c.key} onClick={() => setActive(c.key)} />
          })}
        </div>
      </div>

      <section className={s.listRows} aria-label="가이드 글">
        <div className={s.rows}>
          {items.map((g) => {
            const cat = CATEGORIES.find((c) => c.key === g.category)
            return (
              <Link key={g.href} href={g.href} className={s.row}>
                <span className={s.rowMeta}>
                  <b>{cat?.short}</b>
                  <span className={s.num}>{fmtDate(g.updated ?? g.date)}</span>
                </span>
                <h2 className={s.rowTitle}>{g.title}</h2>
                <span className={s.rowDesc}>{g.desc}</span>
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
    <button type="button" onClick={onClick} aria-pressed={active} className={s.chip}>
      {label}
      <span>{count}</span>
    </button>
  )
}
