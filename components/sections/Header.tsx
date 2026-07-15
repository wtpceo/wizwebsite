"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [open, setOpen] = useState(false)

  const menuTexts: Record<string, string> = {
    services: '서비스',
    team: '제작팀',
    portfolio: '포트폴리오',
    guide: '인사이트',
    faq: 'FAQ',
    contact: '문의하기',
    consultation: '상담 문의'
  };

  // 메뉴 항목과 해당 앵커 ID
  const menuItems = [
    { key: 'services', anchor: 'services' },
    { key: 'team', anchor: 'team' },
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

  const hrefFor = (item: (typeof menuItems)[number]) =>
    item.isExternal ? (item.href as string) : `/#${item.anchor}`

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
            >
              <Link
                href={hrefFor(item)}
                className="text-sm font-medium text-gray-800 hover:text-emerald-600 transition-colors"
              >
                {menuTexts[item.key]}
              </Link>
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
                  <Link
                    href={hrefFor(item)}
                    onClick={() => setOpen(false)}
                    className="block border-b border-gray-50 py-3.5 text-base font-medium text-gray-800 transition-colors hover:text-emerald-600"
                  >
                    {menuTexts[item.key]}
                  </Link>
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
