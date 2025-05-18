"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "auto" : "hidden"
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-700 hover:bg-gray-100"
        onClick={toggleMenu}
        aria-label="메뉴 열기"
      >
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:bg-gray-100"
                  onClick={closeMenu}
                  aria-label="메뉴 닫기"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="mt-8 flex flex-col space-y-6">
                <Link
                  href="#strategy"
                  className="text-lg font-medium hover:text-rose-600 transition-colors"
                  onClick={closeMenu}
                >
                  마케팅 전략
                </Link>
                <Link
                  href="#process"
                  className="text-lg font-medium hover:text-rose-600 transition-colors"
                  onClick={closeMenu}
                >
                  고객 행동 흐름
                </Link>
                <Link
                  href="#services"
                  className="text-lg font-medium hover:text-rose-600 transition-colors"
                  onClick={closeMenu}
                >
                  서비스 소개
                </Link>
                <Link
                  href="#gallery"
                  className="text-lg font-medium hover:text-rose-600 transition-colors"
                  onClick={closeMenu}
                >
                  포트폴리오
                </Link>
              </nav>

              <div className="mt-auto pt-8">
                <Button className="w-full bg-rose-600 hover:bg-rose-700" onClick={closeMenu}>
                  무료 진단 받기
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 