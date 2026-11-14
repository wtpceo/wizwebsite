import Link from "next/link"
import { EN_NAV } from "@/lib/en/site"
import { LOCALES } from "@/lib/i18n/config"

// 영문 하위 쪽(시장 진출·대행사 협업·측정 방식·인사이트·문의) 공통 머리줄.
// 11-14 대표 「외국어 페이지도 완벽하게 업데이트」: 영문 홈(새 디자인)과 같은 흰 머리줄 — 파랑 W 심벌 + WizThePlanning + 파란 원 마침표, 가운데 메뉴, 오른쪽 언어 전환.
const SHORT: Record<string, string> = { ko: "KO", en: "EN", zh: "中文", vi: "VI" }

export default function EnHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E3EAF2] bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/en" className="flex shrink-0 items-center gap-2 text-[19px] font-black tracking-[-0.035em] text-[#0A1A33] sm:text-[22px]">
          <img src="/favicon.svg" alt="" width={28} height={28} className="h-7 w-7 rounded-[7px]" />
          <span>
            WizThePlanning
            <span className="ml-0.5 inline-block h-[0.42em] w-[0.42em] rounded-full bg-[#0055FF] align-baseline" />
          </span>
        </Link>
        <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 xl:flex">
          {EN_NAV.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap text-[15px] font-semibold text-[#0A1A33] transition-colors hover:text-[#0055FF]">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#F1F4F8] p-[3px]" aria-label="Language">
          {LOCALES.map((l) => (
            <Link
              key={l.code}
              href={l.prefix || "/"}
              hrefLang={l.htmlLang}
              aria-label={l.label}
              aria-current={l.code === "en" ? "true" : undefined}
              className={`rounded-full px-2.5 py-1 text-xs font-extrabold ${l.code === "en" ? "bg-[#0A1A33] text-white" : "text-[#5B6573] hover:text-[#0055FF]"}`}
            >
              {SHORT[l.code]}
            </Link>
          ))}
        </div>
      </div>
      <nav
        aria-label="Main (mobile)"
        className="flex gap-2 overflow-x-auto border-t border-[#E3EAF2] px-4 py-2 xl:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {EN_NAV.map((n) => (
          <Link key={n.href} href={n.href} className="whitespace-nowrap rounded-full bg-[#F1F4F8] px-3 py-1 text-xs font-semibold text-[#0A1A33] hover:text-[#0055FF]">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
