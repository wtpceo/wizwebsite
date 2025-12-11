"use client"

import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useMemo, useState } from "react"
import React from "react"
// import { useTranslations } from 'next-intl'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const HERO_TEXT = {
  badge: '2016년부터 7,000여 광고주와 함께',
  heading: {
    desktop: {
      1: '자영업 마케팅',
      2: 'ALL IN ONE'
    },
    mobile: {
      1: '자영업 마케팅',
      2: 'ALL IN ONE'
    }
  },
  subheading: {
    desktop: '9년간의 노하우 가성비 최적화 솔루션',
    mobile: {
      1: '9년간의 노하우',
      2: '가성비 최적화 솔루션'
    }
  },
  titles: {
    desktop: [
      '음식점, 학원, 뷰티, 운동',
      '캠핑장, 팬션, 숙박업',
      '성형외과, 외과, 내과, 병원',
      '공간이 있는 곳',
      '마케팅 시작과 끝',
      '위즈더플래닝'
    ],
    mobile: [
      '음식점 학원',
      '뷰티샵 운동',
      '캠핑장 팬션',
      '공간이 있는 곳',
      '마케팅의 시작',
      '위즈더플래닝'
    ]
  },
  cta: {
    primary: '무료 상담 받기',
    secondary: '서비스 둘러보기'
  },
  features: [
    {
      desktop: '9년 전문 경험',
      mobile: { 1: '9년', 2: '전문 경험' }
    },
    {
      desktop: '7,000+ 고객사',
      mobile: { 1: '7,000+', 2: '고객사' }
    },
    {
      desktop: '통합 솔루션',
      mobile: { 1: '통합', 2: '솔루션' }
    }
  ]
};

const imageLoader = ({ src, width, quality }) => {
  return `https://your-cdn.com/${src}?w=${width}&q=${quality || 75}`
}

export default function HeroSection({ locale }: { locale?: string }) {
  // const t = useTranslations('hero');
  const [titleNumber, setTitleNumber] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const titles = useMemo(
    () => isMobile ? HERO_TEXT.titles.mobile : HERO_TEXT.titles.desktop,
    [isMobile]
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles, locale])

  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={fadeIn}>
            <Badge
              className="w-fit mx-auto bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:from-purple-200 hover:to-blue-200 border-purple-200"
              variant="outline"
            >
              {HERO_TEXT.badge}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
              <span className="hidden md:inline">
                {HERO_TEXT.heading.desktop[1]} <span className="rainbow-text font-extrabold">{HERO_TEXT.heading.desktop[2]}</span>
              </span>
              <span className="block md:hidden">
                {HERO_TEXT.heading.mobile[1]}<br />
                <span className="rainbow-text font-extrabold">{HERO_TEXT.heading.mobile[2]}</span>
              </span>
              <br />
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className={`absolute font-semibold ${index === 0
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                        : index === 1
                          ? "bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
                          : index === 2
                            ? "bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
                            : index === 3
                              ? "bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"
                              : "bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent"
                      }`}
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                          y: 0,
                          opacity: 1,
                        }
                        : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                    }
                  >
                    <span className="hidden md:inline">{title}</span>
                    <span className="block md:hidden">{title}</span>
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="max-w-[800px] mx-auto text-gray-700 md:text-2xl mb-8">
              <span className="hidden md:inline">{HERO_TEXT.subheading.desktop}</span>
              <span className="block md:hidden">{HERO_TEXT.subheading.mobile[1]}<br />{HERO_TEXT.subheading.mobile[2]}</span>
            </p>
          </motion.div>
          <motion.div className="flex flex-col gap-3 min-[400px]:flex-row" variants={fadeIn}>
            <Link href="#contact">
              <Button
                size="lg"
                className="gap-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 text-lg px-8 py-6"
              >
                {HERO_TEXT.cta.primary}
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300 text-lg px-8 py-6"
              >
                {HERO_TEXT.cta.secondary}
              </Button>
            </Link>
          </motion.div>
          <motion.div className="flex flex-col items-center gap-2 text-base md:flex-row md:gap-6" variants={fadeIn}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-purple-600" />
              <span className="text-gray-800 hidden md:inline">{HERO_TEXT.features[0].desktop}</span>
              <span className="text-gray-800 block md:hidden text-sm">{HERO_TEXT.features[0].mobile[1]}<br />{HERO_TEXT.features[0].mobile[2]}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <span className="text-gray-800 hidden md:inline">{HERO_TEXT.features[1].desktop}</span>
              <span className="text-gray-800 block md:hidden text-sm">{HERO_TEXT.features[1].mobile[1]}<br />{HERO_TEXT.features[1].mobile[2]}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-teal-600" />
              <span className="text-gray-800 hidden md:inline">{HERO_TEXT.features[2].desktop}</span>
              <span className="text-gray-800 block md:hidden text-sm">{HERO_TEXT.features[2].mobile[1]}<br />{HERO_TEXT.features[2].mobile[2]}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 