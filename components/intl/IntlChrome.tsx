import Link from "next/link"
import { LOCALES } from "@/lib/i18n/config"
import { EN_ORG } from "@/lib/en/site"
import { Icon } from "@/components/shortform/icons"
import type { IntlHomeCopy, IntlLocale } from "@/lib/intl/home"

// 11-14 대표 「외국어 페이지도 완벽하게 업데이트」: 국문 새 머리줄·메뉴·바닥과 같은 모양(클래스 sfh·sfm·sff·sfb를 그대로 써서 sf-doc.css가 입혀진다).
// 메뉴 열기·닫기는 국문과 같은 /sf/sf.js 가 #sfhMenu·#sfm·#sfmX 로 잡는다.
// 서비스 상세는 국문 쪽에만 있어 외국어 메뉴는 이 페이지 안 구간(#services 등)과 영문 하위 쪽으로만 보낸다.

const SHORT: Record<string, string> = { ko: "KO", en: "EN", zh: "中文", vi: "VI" }

export type IntlNavItem = { label: string; href: string }

/** 언어별 주 메뉴. 영어는 영문 하위 쪽(측정 방식·인사이트·대행사 협업)이 있고, 중국어·베트남어는 한 쪽 안의 구간으로 보낸다 */
export function intlNav(locale: IntlLocale, t: IntlHomeCopy, onHome = true): IntlNavItem[] {
  const base = locale === "en" ? "/en" : `/${locale}`
  const at = (id: string) => (onHome ? `#${id}` : `${base}#${id}`)
  if (locale === "en")
    return [
      { label: t.nav.services, href: at("services") },
      { label: t.nav.entry, href: "/en/korea-market-entry" },
      { label: t.nav.agencies, href: "/en/agency-partners" },
      { label: t.nav.measure, href: "/en/how-we-measure" },
      { label: t.nav.insights, href: "/en/insights" },
      { label: t.nav.contact, href: "/en/contact" },
    ]
  return [
    { label: t.nav.services, href: at("services") },
    { label: t.nav.process, href: at("process") },
    { label: t.nav.measure, href: at("proof") },
    { label: t.nav.contact, href: at("contact") },
  ]
}

export function IntlLang({ current }: { current: IntlLocale | "ko" }) {
  return (
    <div className="intl-lang" aria-label="Language">
      {LOCALES.map((l) => (
        <Link key={l.code} href={l.prefix || "/"} hrefLang={l.htmlLang} aria-label={l.label} aria-current={l.code === current ? "true" : undefined} className={l.code === current ? "on" : undefined}>
          {SHORT[l.code] ?? l.label}
        </Link>
      ))}
    </div>
  )
}

export function IntlHeader({ locale, t, nav }: { locale: IntlLocale; t: IntlHomeCopy; nav: IntlNavItem[] }) {
  const home = `/${locale}`
  return (
    <header className="sfh sfh-doc intl-h" id="sfh" data-tone="w">
      <Link className="sfh-logo" href={home} aria-label={`WizThePlanning ${t.nav.home}`}>
        <span className="sfh-ko intl-wm" aria-hidden="true">
          <img className="sfh-ko-mark" src="/favicon.svg" alt="" width={30} height={30} />
          WizThePlanning
          <i />
        </span>
      </Link>
      <nav className="sfh-nav intl-nav" aria-label="Main">
        {nav.map((n) => (
          <div className="sfh-it" key={n.href}>
            <Link href={n.href}>{n.label}</Link>
          </div>
        ))}
      </nav>
      <IntlLang current={locale} />
      <button type="button" className="sfh-menu" id="sfhMenu" aria-expanded="false" aria-controls="sfm">
        <Icon k="menu" />
        <span className="sr">{t.nav.menuOpen}</span>
      </button>
    </header>
  )
}

export function IntlMenu({ locale, t, nav }: { locale: IntlLocale; t: IntlHomeCopy; nav: IntlNavItem[] }) {
  return (
    <div className="sfm" id="sfm" hidden>
      <div className="sfm-top">
        <Link className="sfm-logo" href={`/${locale}`} aria-label={`WizThePlanning ${t.nav.home}`}>
          <i aria-hidden="true" />
          <b>WIZ THE PLANNING</b>
        </Link>
        <button type="button" className="sfm-x" id="sfmX" aria-label={t.nav.menuClose}>
          <Icon k="close" />
        </button>
      </div>
      <nav className="sfm-in" aria-label="Menu">
        <div className="sfm-sec">
          <p className="sfm-h">{t.services.eb}</p>
          <div className="sfm-svc">
            {t.services.items.map((s) => (
              <a key={s.k} href={`/${locale}#services`}>
                <span className="ic" aria-hidden="true">
                  <Icon k={s.k as "infl"} />
                </span>
                <b>{s.n}</b>
                <Icon k="arrow" />
              </a>
            ))}
          </div>
        </div>
        <div className="sfm-sec">
          <p className="sfm-h">WizThePlanning</p>
          <div className="sfm-row">
            {nav
              .filter((n) => !n.href.endsWith("#services"))
              .map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
          </div>
        </div>
        <div className="sfm-sec">
          <p className="sfm-h">{t.nav.langLabel}</p>
          <IntlLang current={locale} />
        </div>
      </nav>
      <div className="sfm-cta">
        <a href={`mailto:${EN_ORG.email}`}>
          <Icon k="mail" />
          {EN_ORG.email}
        </a>
        <a href={locale === "en" ? "/en/contact" : `/${locale}#contact`} className="p">
          {t.hero.cta}
          <Icon k="arrow" />
        </a>
      </div>
    </div>
  )
}

export function IntlFooter({ locale, t, nav }: { locale: IntlLocale; t: IntlHomeCopy; nav: IntlNavItem[] }) {
  const f = t.footer
  return (
    <footer className="sff intl-f" id="sff">
      <div className="sff-in">
        <div className="sff-call">
          <p>{t.contact.emailLabel}</p>
          <a href={`mailto:${EN_ORG.email}`}>{EN_ORG.email}</a>
        </div>
        <nav className="sff-nav" aria-label="Footer">
          <div>
            <p>{f.company}</p>
            <span className="intl-f-about">{f.about}</span>
          </div>
          <div>
            <p>{t.services.eb}</p>
            {t.services.items.map((s) => (
              <a key={s.k} href={`/${locale}#services`}>
                {s.n}
              </a>
            ))}
          </div>
          <div>
            <p>{f.explore}</p>
            {nav
              .filter((n) => !n.href.endsWith("#services"))
              .map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
          </div>
          <div>
            <p>{f.contactH}</p>
            <a href={`mailto:${EN_ORG.email}`}>{EN_ORG.email}</a>
            <span>
              {t.contact.phoneLabel} {EN_ORG.phoneKorea}
            </span>
            <span>{t.contact.hours}</span>
          </div>
          <div>
            <p>Language</p>
            <Link href="/" hrefLang="ko">
              한국어
            </Link>
            <Link href="/en" hrefLang="en">
              English
            </Link>
            <Link href="/zh" hrefLang="zh-Hans">
              中文
            </Link>
            <Link href="/vi" hrefLang="vi">
              Tiếng Việt
            </Link>
          </div>
        </nav>
        <div className="sff-biz">
          <p>
            <b>WizThePlanning ({EN_ORG.nameKo})</b> · {f.bizNo} {EN_ORG.bizRegNo}
          </p>
          <p>
            {f.address} · {EN_ORG.email}
          </p>
          <p className="sff-legal">
            <Link href="/terms" hrefLang="ko">
              {f.terms}
            </Link>
            <Link href="/privacy" hrefLang="ko">
              {f.privacy}
            </Link>
            <span>© 2016–2026 WizThePlanning. {f.rights}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export function IntlDock({ locale, t }: { locale: IntlLocale; t: IntlHomeCopy }) {
  return (
    <nav className="sfb intl-dock" aria-label="Contact">
      <a href={`mailto:${EN_ORG.email}`}>
        <Icon k="mail" />
        {t.dock.email}
      </a>
      <a href={locale === "en" ? "/en/contact" : `/${locale}#contact`} className="sfb-p">
        {t.dock.contact}
      </a>
    </nav>
  )
}
