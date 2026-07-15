"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
// import { useTranslations } from 'next-intl'
// import LanguageToggle from '@/components/LanguageToggle'

export default function Header() {
  // 번역 훅 대신 하드코딩된 텍스트 사용
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
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
                href={item.isExternal ? item.href : `/#${item.anchor}`}
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
          className="flex items-center gap-4"
        >
          <Link href="/#contact">
            <Button className="bg-[#070b14] font-bold text-white transition-all duration-300 hover:bg-[#101b2e] hover:shadow-lg hover:shadow-emerald-500/15">
              {menuTexts.consultation}
            </Button>
          </Link>
          {/* 언어 토글 제거 */}
          <Button variant="outline" size="icon" className="md:hidden border-gray-200 text-gray-700">
            <span className="sr-only">메뉴 열기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </header>
  )
} 