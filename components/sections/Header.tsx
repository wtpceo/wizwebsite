"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Globe } from "lucide-react"
import { AD_SERVICES } from "@/lib/ad-services"

// 사이트 머리(2026-11 리브랜딩). 디자인기준 v1: 흰 바탕, 선·그림자·유리 효과 없음, 높이 64px.
// 워드마크 + 메뉴 다섯 개(다루는 광고, 병원, 일한 기록, 인사이트, 회사) + 버튼 하나(광고 상담 받기).
// 예전 홈 앵커 메뉴(#services, #team, #faq, #contact)는 새 홈에 없어 뺐다.
// 여러 페이지가 이 파일을 import하므로 파일 이름과 default export는 그대로 둔다

type SubItem = { label: string; href: string }
type MenuItem = { label: string; href?: string; items?: SubItem[] }

const MENU: MenuItem[] = [
  { label: "다루는 광고", items: AD_SERVICES.filter((a) => a.inMenu !== false).map((a) => ({ label: a.label, href: a.href })) },
  {
    label: "병원",
    items: [
      { label: "병원 통합 마케팅", href: "/medical-geo-agency" },
      { label: "병원 무료 AI 검색 진단", href: "/medical-diagnosis" },
    ],
  },
  { label: "일한 기록", href: "/portfolio" },
  {
    label: "인사이트",
    items: [
      { label: "기업 인사이트", href: "/business/insights" },
      { label: "가이드", href: "/guide" },
    ],
  },
  { label: "회사", href: "/business" },
]

const LANGS = [
  { label: "한국어", href: "/", hrefLang: "ko" },
  { label: "English", href: "/en", hrefLang: "en" },
  { label: "中文", href: "/zh", hrefLang: "zh-Hans" },
  { label: "Tiếng Việt", href: "/vi", hrefLang: "vi" },
]

// 현재 경로가 그 주소이거나 그 아래면 켠다
const matches = (pathname: string, href: string) => pathname === href || pathname.startsWith(href + "/")

// tone="mint": 새 홈 첫 화면용. 민트 바탕에 잉크 글자, 흐르지 않고 자리에 선다(첫 화면이 머리줄까지 한 면이 되게).
// 모바일 메뉴 판은 흰 바탕으로 되돌린다
const MINT_VARS = { "--bg": "#00E5A0", "--surface": "#00cc8e", "--surface-2": "#00b67e", "--ink": "#070B14", "--muted": "#0f3b2c" } as React.CSSProperties
const PANEL_VARS = { "--bg": "#ffffff", "--surface": "#efefed", "--surface-2": "#e2e2df", "--ink": "#0a0a0a", "--muted": "#4a4a48" } as React.CSSProperties

export default function Header({ tone }: { tone?: "mint" } = {}) {
  const mint = tone === "mint"
  const [open, setOpen] = useState(false)
  const pathname = usePathname() ?? "/"

  // 하위 항목 중 가장 길게 맞는 주소 하나만 현재로 본다(/business 아래 /business/insights가 '회사'까지 켜지지 않게)
  const allHrefs = MENU.flatMap((m) => (m.items ? m.items.map((i) => i.href) : m.href ? [m.href] : []))
  const current = allHrefs.filter((h) => matches(pathname, h)).sort((a, b) => b.length - a.length)[0]
  const isCurrent = (href: string) => href === current
  const menuActive = (m: MenuItem) => (m.items ? m.items.some((i) => isCurrent(i.href)) : !!m.href && isCurrent(m.href))

  // 모바일 메뉴가 열렸을 때 바탕 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // 페이지를 옮기면 모바일 메뉴를 닫는다
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const topItem =
    "inline-flex h-10 items-center gap-1 px-3 text-[15px] font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--surface)]"

  return (
    <header className={`${mint ? "relative" : "sticky top-0"} z-50 w-full bg-[var(--bg)] text-[var(--ink)]`} style={mint ? MINT_VARS : undefined}>
      <div className="mx-auto flex h-16 items-center justify-between gap-4 px-3 md:px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex items-baseline gap-0.5">
            <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-[var(--ink)]">위즈더플래닝</span>
            {/* 점은 잉크색. 첫 화면 민트는 주 버튼 한 곳만 쓴다(디자이너 점검 2026-11-03) */}
            <span className="h-2 w-2 rounded-full bg-[var(--ink)]" />
          </span>
        </Link>

        {/* 데스크톱 메뉴. 드롭다운은 마우스를 올리거나 키보드로 들어가면(focus-within) 열린다 */}
        <nav aria-label="주요 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-1 whitespace-nowrap">
            {MENU.map((m) => {
              const active = menuActive(m)
              return (
                <li key={m.label} className={m.items ? "group relative" : undefined}>
                  {m.items ? (
                    <>
                      <button
                        type="button"
                        aria-haspopup="true"
                        className={`${topItem} ${active ? "bg-[var(--surface)] font-extrabold" : ""}`}
                      >
                        {m.label}
                        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      {/* 마우스가 빠져나가도 끊기지 않도록 위쪽 여백(pt-2)을 둔다 */}
                      <div className="invisible absolute left-0 top-full z-50 min-w-[220px] pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                        <ul className="bg-[var(--surface)] py-2">
                          {m.items.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                aria-current={isCurrent(sub.href) ? "page" : undefined}
                                className={`block px-4 py-2.5 text-[15px] transition-colors hover:bg-[var(--surface-2)] ${
                                  isCurrent(sub.href) ? "bg-[var(--surface-2)] font-bold" : "font-medium"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={m.href as string}
                      aria-current={active ? "page" : undefined}
                      className={`${topItem} ${active ? "bg-[var(--surface)] font-extrabold" : ""}`}
                    >
                      {m.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* 언어 선택: 영문 B2B, 중국어·베트남어 페이지로 가는 입구(크롤러 발견성 + 사용자 접근) */}
          <div className="group relative hidden md:block">
            <button
              type="button"
              aria-haspopup="true"
              aria-label="언어 선택 / Language"
              className="inline-flex h-10 items-center gap-1 px-2.5 text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--ink)]"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <div className="invisible absolute right-0 top-full z-50 w-40 pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="bg-[var(--surface)] py-2">
                {LANGS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      hrefLang={l.hrefLang}
                      className="block px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--surface-2)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/business/contact"
            className="hidden h-12 items-center bg-[var(--ink)] px-5 text-[15px] font-bold text-[var(--on-dark)] transition-[background,transform] duration-200 hover:bg-[var(--tone-1)] active:scale-[0.97] sm:inline-flex"
          >
            광고 상담 받기
          </Link>

          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center bg-[var(--surface)] lg:hidden"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴: 호버가 없으므로 하위 항목을 펼쳐 둔다. 애니메이션 없이 바로 보인다 */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="주요 메뉴"
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-[var(--bg)] px-4 pb-8 pt-2 lg:hidden"
          style={mint ? PANEL_VARS : undefined}
        >
          <ul className="flex flex-col gap-1.5">
            {MENU.map((m) => (
              <li key={m.label} className="bg-[var(--surface)]">
                {m.items ? (
                  <div className="px-4 py-3">
                    <span className="block text-base font-extrabold">{m.label}</span>
                    <ul className="mt-1.5 flex flex-col">
                      {m.items.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            aria-current={isCurrent(sub.href) ? "page" : undefined}
                            className={`block py-2 text-[15px] ${isCurrent(sub.href) ? "font-bold" : "font-medium text-[var(--muted)]"}`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={m.href as string}
                    onClick={() => setOpen(false)}
                    aria-current={menuActive(m) ? "page" : undefined}
                    className={`flex min-h-[56px] items-center px-4 text-base ${menuActive(m) ? "bg-[var(--surface-2)] font-extrabold" : "font-extrabold"}`}
                  >
                    {m.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/business/contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex h-14 items-center justify-center bg-[var(--ink)] text-base font-bold text-[var(--on-dark)] active:scale-[0.97]"
          >
            광고 상담 받기
          </Link>

          {/* 외국어 페이지 */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <Globe className="h-4 w-4 text-[var(--muted)]" aria-hidden="true" />
            {LANGS.filter((l) => l.href !== "/").map((l) => (
              <Link
                key={l.href}
                href={l.href}
                hrefLang={l.hrefLang}
                onClick={() => setOpen(false)}
                className="bg-[var(--surface)] px-3 py-1.5 font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
