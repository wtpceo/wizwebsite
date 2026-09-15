import Link from "next/link"
import LangSwitcher from "@/components/i18n/LangSwitcher"
import { EN_NAV, EN_ORG } from "@/lib/en/site"

export default function EnFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05080f] py-12 text-sm text-slate-400">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-lg font-extrabold text-white">
            WizThePlanning<span className="text-[#00e5a0]">.</span>
          </p>
          <p className="mt-3 max-w-xs leading-relaxed">
            Seoul-based marketing agency since 2016. Naver, Korean AI search and performance marketing for brands entering Korea.
          </p>
          <div className="mt-5">
            <LangSwitcher current="en" />
          </div>
        </div>
        <nav aria-label="Footer">
          <p className="font-bold text-white">Explore</p>
          <ul className="mt-3 space-y-2">
            {[...EN_NAV, { label: "Contact", href: "/en/contact" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-bold text-white">Contact</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`mailto:${EN_ORG.email}`} className="hover:text-white">{EN_ORG.email}</a>
            </li>
            <li>Phone (Korea): {EN_ORG.phoneKorea}</li>
            <li>{EN_ORG.city}</li>
            <li>Business registration no. {EN_ORG.bizRegNo}</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex flex-col gap-2 border-t border-white/5 px-4 pt-6 text-xs text-slate-500 md:flex-row md:justify-between md:px-6">
        <p>© 2016–2026 WizThePlanning ({EN_ORG.nameKo}). All rights reserved.</p>
        <p>
          <Link href="/privacy" hrefLang="ko" className="hover:text-white">Privacy policy (Korean)</Link>
          <span className="mx-2">·</span>
          <Link href="/terms" hrefLang="ko" className="hover:text-white">Terms (Korean)</Link>
        </p>
      </div>
    </footer>
  )
}
