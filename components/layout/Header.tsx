"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold"
            >
              <span className={isScrolled ? "text-gray-900" : "text-white"}>위즈더플래닝</span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "서비스 소개", href: "/#services" },
              { name: "포트폴리오", href: "/#portfolio" },
              { name: "가격 안내", href: "/#pricing" },
              { name: "고객 후기", href: "/#testimonials" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={isScrolled ? "default" : "outline"}
                className={isScrolled ? "bg-red-600 hover:bg-red-700" : "border-white text-white hover:bg-white/10"}
              >
                무료 상담 받기
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
} 