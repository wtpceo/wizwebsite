"use client"

import Link from "next/link"
import { Globe } from "lucide-react"
import { LOCALES, type Locale } from "@/lib/i18n/config"

// 언어 전환기. 로케일 홈끼리 이동한다. (ko="/", zh="/zh", vi="/vi")
export default function LangSwitcher({ current }: { current: Locale }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
      <Globe className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
      {LOCALES.map((l) => {
        const active = l.code === current
        return (
          <Link
            key={l.code}
            href={l.prefix || "/"}
            hrefLang={l.htmlLang}
            className={`rounded-full px-2 py-0.5 text-xs font-semibold transition-colors ${
              active ? "bg-[#00e5a0] text-[#070b14]" : "text-slate-300 hover:text-white"
            }`}
            aria-current={active ? "true" : undefined}
          >
            {l.label}
          </Link>
        )
      })}
    </div>
  )
}
