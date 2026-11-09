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

/** 11-08 대표 「인사이트 메뉴도 디자인 통일」: 서비스 페이지 카드 문법(둥근 카드·위즈블루·떠오르는 그림자). 전체 보기일 때 맨 앞 글은 크게 */
export default function GuideGrid() {
  const [active, setActive] = useState<"all" | CategoryKey>("all")
  const items = active === "all" ? GUIDE_ARTICLES : GUIDE_ARTICLES.filter((g) => g.category === active)

  return (
    <section className="ig-list" id="list" aria-label="칼럼 목록">
      <div className="ig-filter">
        <div className="dp-w">
          <div className="ig-chips" role="group" aria-label="분야 고르기">
            <Chip label="전체" count={GUIDE_ARTICLES.length} active={active === "all"} onClick={() => setActive("all")} />
            {CATEGORIES.map((c) => {
              const n = GUIDE_ARTICLES.filter((g) => g.category === c.key).length
              if (!n) return null
              return <Chip key={c.key} label={c.short} count={n} active={active === c.key} onClick={() => setActive(c.key)} />
            })}
          </div>
        </div>
      </div>

      <div className="dp-w">
        <ul className={`ig-grid${active === "all" ? " has-lead" : ""}`}>
          {items.map((g, i) => {
            const cat = CATEGORIES.find((c) => c.key === g.category)
            return (
              <li key={g.href} className={active === "all" && i === 0 ? "lead" : undefined}>
                <Link href={g.href}>
                  <figure>
                    <img src={coverFor(g.href)} alt={g.title} width={1200} height={675} loading={i < 6 ? "eager" : "lazy"} decoding="async" />
                  </figure>
                  <div>
                    <p className="ig-meta">
                      <em>{cat?.short}</em>
                      <span>{fmtDate(g.updated ?? g.date)}</span>
                    </p>
                    <b>{g.title}</b>
                    <span className="ig-desc">{g.desc}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Chip({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active} className={active ? "on" : undefined}>
      {label}
      <small>{count}</small>
    </button>
  )
}
