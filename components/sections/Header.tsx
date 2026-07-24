"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const pathname = usePathname()

  const menuTexts: Record<string, string> = {
    services: '서비스',
    sitecheck: '무료 사이트 진단',
    team: '제작팀',
    medical: '병원',
    portfolio: '포트폴리오',
    guide: '인사이트',
    faq: 'FAQ',
    contact: '문의하기',
    consultation: '상담 문의'
  };

  // 병원 드롭다운 하위 항목 (앞으로 진료과별 페이지도 여기에 추가)
  const medicalSubItems = [
    {
      href: '/medical-geo-agency',
      label: '병원 GEO 대행',
      desc: '병원·의원 AI 검색 최적화 서비스',
    },
    {
      href: '/medical-diagnosis',
      label: '무료 AI 검색 진단',
      desc: '우리 병원 현재 상태 확인 (병원 한정 무료)',
    },
  ];

  // 메뉴 항목과 해당 앵커 ID
  const menuItems = [
    { key: 'services', anchor: 'services' },
    { key: 'sitecheck', href: '/site-check', isExternal: true },
    { key: 'team', anchor: 'team' },
    { key: 'medical', isDropdown: true, highlight: true },
    { key: 'portfolio', href: '/portfolio', isExternal: true },
    { key: 'guide', href: '/guide', isExternal: true },
    { key: 'faq', anchor: 'faq' },
    { key: 'contact', anchor: 'contact' }
  ];

  // 모바일 메뉴 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  // 스크롤 스파이 — 홈에서 현재 화면에 보이는 섹션에 해당하는 앵커 메뉴 활성화
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null)
      return
    }
    const anchorIds = ["services", "team", "faq", "contact"]
    const els = anchorIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (els.length === 0) return

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        // DOM 순서상 화면에 걸친 첫 섹션을 활성으로 (없으면 히어로 등 → 아무것도 활성 안 함)
        const current = anchorIds.find((id) => visible.has(id)) ?? null
        setActiveSection(current)
      },
      // 뷰포트 중앙 부근을 지나는 섹션을 현재 섹션으로 판정
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  const hrefFor = (item: (typeof menuItems)[number]) =>
    item.isExternal ? (item.href as string) : `/#${item.anchor}`

  // 현재 보고 있는 페이지/섹션에 해당하는 메뉴 활성 여부
  const isActive = (item: (typeof menuItems)[number]) => {
    // 병원 드롭다운 — 하위 항목 중 하나라도 현재 경로면 활성
    if (item.isDropdown) {
      return medicalSubItems.some(
        (s) => pathname === s.href || pathname.startsWith(s.href + "/")
      )
    }
    // 실제 페이지 링크 (하위 경로 포함)
    if (item.isExternal && item.href) {
      return pathname === item.href || pathname.startsWith(item.href + "/")
    }
    // 홈 내부 앵커 섹션 (스크롤 스파이)
    if (item.anchor) {
      return pathname === "/" && activeSection === item.anchor
    }
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-baseline gap-0.5"
          >
            <span className="text-xl font-extrabold tracking-tight text-gray-900">위즈더플래닝</span>
            <span className="h-2 w-2 rounded-full bg-[#00e5a0]" />
          </motion.div>
        </Link>

        <nav className="hidden md:flex gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              className={item.isDropdown ? "group relative" : undefined}
            >
              {item.isDropdown ? (
                <>
                  {/* 병원 메뉴 — hover/focus 시 하위 메뉴 노출 */}
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-current={isActive(item) ? "page" : undefined}
                    className={
                      isActive(item)
                        ? "inline-flex items-center gap-1 rounded-full bg-[#00e5a0] px-3 py-1 text-sm font-bold text-[#070b14]"
                        : "inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-600 transition-colors hover:bg-emerald-100"
                    }
                  >
                    <span className={isActive(item) ? "h-1.5 w-1.5 rounded-full bg-[#070b14]" : "h-1.5 w-1.5 rounded-full bg-[#00e5a0]"} />
                    {menuTexts[item.key]}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>

                  {/* 하위 메뉴 — 마우스가 빠져나가도 끊기지 않도록 위쪽 여백 포함 */}
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
                      {medicalSubItems.map((sub) => {
                        const subActive = pathname === sub.href || pathname.startsWith(sub.href + "/")
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            aria-current={subActive ? "page" : undefined}
                            className={
                              subActive
                                ? "block rounded-xl bg-emerald-50 px-3 py-2.5"
                                : "block rounded-xl px-3 py-2.5 transition-colors hover:bg-gray-50"
                            }
                          >
                            <span className={subActive ? "block text-sm font-bold text-emerald-700" : "block text-sm font-bold text-gray-900"}>
                              {sub.label}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">
                              {sub.desc}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </>
              ) : (
              <Link
                href={hrefFor(item)}
                aria-current={isActive(item) ? "page" : undefined}
                className={
                  item.highlight
                    ? isActive(item)
                      ? "inline-flex items-center gap-1 rounded-full bg-[#00e5a0] px-3 py-1 text-sm font-bold text-[#070b14]"
                      : "inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-600 transition-colors hover:bg-emerald-100"
                    : isActive(item)
                      ? "border-b-2 border-[#00e5a0] pb-1 text-sm font-bold text-emerald-600"
                      : "border-b-2 border-transparent pb-1 text-sm font-medium text-gray-800 transition-colors hover:text-emerald-600"
                }
              >
                {item.highlight && (
                  <span className={isActive(item) ? "h-1.5 w-1.5 rounded-full bg-[#070b14]" : "h-1.5 w-1.5 rounded-full bg-[#00e5a0]"} />
                )}
                {menuTexts[item.key]}
              </Link>
              )}
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 md:gap-4"
        >
          {/* 데스크톱: 상담 버튼 노출 / 모바일: 숨김(메뉴 안에 포함) */}
          <Link href="/#contact" className="hidden sm:block">
            <Button className="bg-[#070b14] font-bold text-white transition-all duration-300 hover:bg-[#101b2e] hover:shadow-lg hover:shadow-emerald-500/15">
              {menuTexts.consultation}
            </Button>
          </Link>

          {/* 모바일 햄버거 */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-gray-200 text-gray-700"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">메뉴 열기</span>
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </motion.div>
      </div>

      {/* 모바일 메뉴 패널 (애니메이션 없이 즉시 표시 — 어떤 기기에서도 확실하게) */}
      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-16 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed inset-x-0 top-16 z-50 border-b border-gray-100 bg-white px-4 pb-6 pt-2 shadow-xl">
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.key}>
                  {item.isDropdown ? (
                    /* 모바일에선 호버가 없으므로 하위 항목을 들여쓰기로 펼쳐 표시 */
                    <div className="border-b border-gray-50 py-3">
                      <span className="flex items-center gap-2 text-base font-bold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00e5a0]" />
                        {menuTexts[item.key]}
                      </span>
                      <ul className="mt-1.5 flex flex-col gap-0.5 pl-3.5">
                        {medicalSubItems.map((sub) => {
                          const subActive = pathname === sub.href || pathname.startsWith(sub.href + "/")
                          return (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                aria-current={subActive ? "page" : undefined}
                                className={
                                  subActive
                                    ? "block py-2 text-sm font-bold text-emerald-600"
                                    : "block py-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600"
                                }
                              >
                                {sub.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={hrefFor(item)}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item) ? "page" : undefined}
                      className={
                        isActive(item)
                          ? "flex items-center gap-2 border-b border-gray-50 py-3.5 text-base font-bold text-emerald-600"
                          : "block border-b border-gray-50 py-3.5 text-base font-medium text-gray-800 transition-colors hover:text-emerald-600"
                      }
                    >
                      {isActive(item) && <span className="h-1.5 w-1.5 rounded-full bg-[#00e5a0]" />}
                      {menuTexts[item.key]}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/#contact" onClick={() => setOpen(false)} className="mt-4 block">
              <Button className="w-full bg-[#00e5a0] py-6 text-base font-bold text-[#070b14] hover:bg-[#3cf0bb]">
                무료 AI 검색 진단 받기
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
