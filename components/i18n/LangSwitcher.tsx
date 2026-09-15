"use client"

import Link from "next/link"
import { Globe } from "lucide-react"
import { LOCALES, type Locale } from "@/lib/i18n/config"

// 언어 전환기. 로케일 홈끼리 이동한다. (ko="/", zh="/zh", vi="/vi")
// 모바일 헤더 폭이 좁아 4개 언어 이름을 다 풀어 쓰면 넘친다(375px에서 442px로 확장). sm 미만은 짧은 표기.
const SHORT: Record<string, string> = { ko: "KO", en: "EN", zh: "中文", vi: "VI" }

export default function LangSwitcher({ current }: { current: Locale }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-white/5 px-1.5 py-1 ring-1 ring-white/10 sm:gap-1.5 sm:px-2">
      <Globe className="hidden h-3.5 w-3.5 shrink-0 text-slate-400 sm:block" aria-hidden />
      {LOCALES.map((l) => {
        const active = l.code === current
        return (
          <Link
            key={l.code}
            href={l.prefix || "/"}
            hrefLang={l.htmlLang}
            aria-label={l.label}
            className={`rounded-full px-1.5 py-0.5 text-xs font-semibold transition-colors sm:px-2 ${
              active ? "bg-[#00e5a0] text-[#070b14]" : "text-slate-300 hover:text-white"
            }`}
            aria-current={active ? "true" : undefined}
          >
            <span className="sm:hidden">{SHORT[l.code] ?? l.label}</span>
            <span className="hidden sm:inline">{l.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
