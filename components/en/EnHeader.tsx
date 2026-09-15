import Link from "next/link"
import LangSwitcher from "@/components/i18n/LangSwitcher"
import { EN_NAV } from "@/lib/en/site"

// 영문 사이트 공통 헤더 (서버 컴포넌트). 좁은 화면은 가로 스크롤 칩으로 메뉴를 보여준다.
export default function EnHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <Link href="/en" className="shrink-0 text-base font-extrabold text-white sm:text-lg">
          WizThePlanning<span className="text-[#00e5a0]">.</span>
        </Link>
        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-6 xl:flex">
          {EN_NAV.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-[#00e5a0]">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <LangSwitcher current="en" />
          <Link
            href="/en/contact"
            className="hidden rounded-md bg-[#00e5a0] px-3.5 py-2 text-sm font-bold text-[#070b14] transition-colors hover:bg-[#3cf0bb] sm:inline-block"
          >
            Contact
          </Link>
        </div>
      </div>
      <nav
        aria-label="Main (mobile)"
        className="flex gap-2 overflow-x-auto border-t border-white/5 px-4 py-2 xl:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[...EN_NAV, { label: "Contact", href: "/en/contact" }].map((n) => (
          <Link key={n.href} href={n.href} className="whitespace-nowrap rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
