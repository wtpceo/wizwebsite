import Link from "next/link"
import { EN_NAV, EN_ORG } from "@/lib/en/site"
import { INTL_HOME } from "@/lib/intl/home"

// 영문 하위 쪽 공통 바닥. 11-14: 영문 홈(새 디자인)의 남색 바닥과 같은 구성 — 큰 메일 주소, 다섯 칸 메뉴, 사업자 정보.
const t = INTL_HOME.en

export default function EnFooter() {
  return (
    <footer className="bg-[#0A1A33] py-14 text-sm text-white/75">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <p className="text-xs font-bold text-white/60">{t.contact.emailLabel}</p>
          <a href={`mailto:${EN_ORG.email}`} className="text-2xl font-black tracking-[-0.03em] text-white md:text-4xl">
            {EN_ORG.email}
          </a>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="mb-3 text-[13.5px] font-extrabold text-white">{t.footer.company}</p>
            <p className="max-w-[22em] leading-relaxed">{t.footer.about}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-1 text-[13.5px] font-extrabold text-white">{t.services.eb}</p>
            {t.services.items.map((s) => (
              <Link key={s.k} href="/en#services" className="hover:text-white">
                {s.n}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-1 text-[13.5px] font-extrabold text-white">{t.footer.explore}</p>
            {EN_NAV.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-1 text-[13.5px] font-extrabold text-white">{t.footer.contactH}</p>
            <a href={`mailto:${EN_ORG.email}`} className="hover:text-white">
              {EN_ORG.email}
            </a>
            <span>
              {t.contact.phoneLabel} {EN_ORG.phoneKorea}
            </span>
            <span>{t.contact.hours}</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-1 text-[13.5px] font-extrabold text-white">Language</p>
            <Link href="/" hrefLang="ko" className="hover:text-white">한국어</Link>
            <Link href="/en" hrefLang="en" className="hover:text-white">English</Link>
            <Link href="/zh" hrefLang="zh-Hans" className="hover:text-white">中文</Link>
            <Link href="/vi" hrefLang="vi" className="hover:text-white">Tiếng Việt</Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:justify-between">
          <p>
            WizThePlanning ({EN_ORG.nameKo}) · {t.footer.bizNo} {EN_ORG.bizRegNo} · {t.footer.address}
          </p>
          <p className="flex gap-4">
            <Link href="/terms" hrefLang="ko" className="hover:text-white">{t.footer.terms}</Link>
            <Link href="/privacy" hrefLang="ko" className="hover:text-white">{t.footer.privacy}</Link>
            <span>© 2016–2026 WizThePlanning</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
