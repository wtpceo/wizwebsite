"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { CheckCircle, Search, FileText, ArrowRight, Shield, TrendingUp, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactSection from "@/components/sections/ContactSection"
import { DocShell } from "@/components/shortform/DocParts"

const AnimatedBackground = () => {
  const [circles, setCircles] = useState<Array<{
    width: number
    height: number
    left: string
    top: string
  }>>([])

  useEffect(() => {
    const newCircles = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setCircles(newCircles)
  }, [])

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-10">
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: circle.width,
              height: circle.height,
              left: circle.left,
              top: circle.top,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  )
}

const floatingWords = ["블로그", "플레이스", "쿠폰", "소식"]

function getRandomEdgePosition(existing: {top: number, left: number, size: number}[], size: number) {
  // 외곽 4구역 중 하나 선택
  const edge = Math.floor(Math.random() * 4)
  let top = 0, left = 0
  switch (edge) {
    case 0: // 상단
      top = Math.random() * 10
      left = Math.random() * 80 + 10
      break
    case 1: // 하단
      top = Math.random() * 10 + 90
      left = Math.random() * 80 + 10
      break
    case 2: // 좌측
      top = Math.random() * 80 + 10
      left = Math.random() * 10
      break
    case 3: // 우측
      top = Math.random() * 80 + 10
      left = Math.random() * 10 + 90
      break
  }
  // 겹침 방지: 기존 단어들과 일정 거리 이상 떨어지도록
  const minDist = 12 // 최소 거리(%)
  for (let i = 0; i < existing.length; i++) {
    const dx = left - existing[i].left
    const dy = top - existing[i].top
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < minDist + size + existing[i].size) {
      // 너무 가까우면 재귀로 다시 생성
      return getRandomEdgePosition(existing, size)
    }
  }
  return { top, left }
}

const FloatingWordsBackground = () => {
  const [words, setWords] = useState<
    {
      text: string
      top: number
      left: number
      size: number
      opacity: number
      rotate: number
      duration: number
      delay: number
    }[]
  >([])

  useEffect(() => {
    const arr: typeof words = []
    for (let i = 0; i < 10; i++) {
      const text = floatingWords[i % floatingWords.length]
      const size = Math.random() * 2 + 2 // 2~4rem
      const { top, left } = getRandomEdgePosition(arr, size)
      arr.push({
        text,
        top,
        left,
        size,
        opacity: Math.random() * 0.2 + 0.08,
        rotate: Math.random() * 360,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      })
    }
    setWords(arr)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{
            x: 0,
            y: 0,
            rotate: w.rotate,
            opacity: w.opacity,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [w.rotate, w.rotate + 360],
            opacity: w.opacity,
          }}
          transition={{
            duration: w.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: w.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${w.top}%`,
            left: `${w.left}%`,
            fontSize: `${w.size}rem`,
            fontWeight: 700,
            color: "#fff",
            opacity: w.opacity,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            textShadow: "0 2px 16px rgba(0,0,0,0.12)",
            zIndex: 10,
          }}
        >
          {w.text}
        </motion.span>
      ))}
    </div>
  )
}

export default function NaverMarketingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const isHeroInView = useInView(heroRef)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    // 2026-11-05 사장님 「여기도 아직 이전 페이지」 — 머리글·바닥글만 새 틀(DocShell)로, 본문은 그대로
    <DocShell>
    <div className="flex min-h-screen flex-col bg-white overflow-hidden">
      <div className="flex-1">
        {/* 헤더 섹션 */}
        <motion.div
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{ opacity, scale }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 opacity-90"></div>
          <AnimatedBackground />
          <FloatingWordsBackground />

          <div className="container relative z-10 px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-[clamp(2.5rem,5.5vw,6rem)] font-bold mb-6 text-white leading-tight">
                <span className="hidden md:inline">네이버에서 가게 정보가<br />제대로 보이게 정비합니다</span>
                <span className="block md:hidden break-keep">네이버에서<br />가게 정보가 제대로<br />보이게 정비합니다</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"
              >
                <span className="hidden md:inline">플레이스 정보와 사진, 블로그 글을 손보고 검색어별 노출을 확인합니다.</span>
                <span className="block md:hidden">플레이스 정보와 사진, 블로그 글을 손보고<br />검색어별 노출을 확인합니다.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>무료 상담 받기</span>
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatDelay: 2 }}
                  >
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                <ChevronRight className="h-10 w-10 text-white/70 transform rotate-90" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-20 max-w-6xl">
          {/* 문제 상황 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                  <span className="hidden md:inline">혹시 이런 상황을 겪고 계신가요?</span>
                  <span className="block md:hidden">혹시 이런 상황을<br />겪고 계신가요?</span>
                </h2>

                <div className="space-y-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-red-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        오래된 사진,<span className="block md:hidden" />
                        <span className="text-red-500">부족한 정보 때문에</span>
                      </h3>
                      <p className="text-gray-600 mt-1">
                        고객이 그냥 지나치고 있진 않으신가요?
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-red-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        검색만 하면<span className="block md:hidden" />
                        <span className="text-red-500">경쟁업체가 상단에 노출되고</span>
                      </h3>
                      <p className="text-gray-600 mt-1">
                        내 가게는 아래로 밀려 보이지도 않을 때, 속상하셨죠?
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-red-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        광고비는<span className="block md:hidden" />
                        <span className="text-red-500">계속 오르는데</span>
                      </h3>
                      <p className="text-gray-600 mt-1">
                        효과는 단발성이고, 고객은 늘지 않을 때 답답하셨을 꺼에요.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <h3 className="text-2xl font-bold text-red-500 mb-3">지금 바로 바꿀 수 있습니다.</h3>
                  <p className="text-xl text-gray-700">
                    플레이스 정보, 사진, 블로그 글부터 차례로 정비합니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 솔루션 소개 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text inline-block">
              <span className="hidden md:inline">네이버에서 하는 일</span>
              <span className="block md:hidden">네이버에서 하는 일</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
              가게를 찾는 사람이 네이버에서 검색했을 때 <br className="hidden md:block" />
              정보와 사진, 후기 글이 제대로 보이게 합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">검색 최적화 전략</h3>
                <p className="text-gray-600 mb-6">
                  가게를 찾을 때 쓰는 검색어를 정하고, 플레이스 정보와 소개 글을 그 검색어에 맞춰 정비합니다.
                </p>
                <div className="text-blue-600 font-medium flex items-center justify-center">
                  <span>SEO 전략 설계</span>
                  <ChevronRight className="ml-1 h-5 w-5" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">콘텐츠 마케팅</h3>
                <p className="text-gray-600 mb-6">
                  가게에 맞는 블로그 글을 써서 올립니다.
                </p>
                <div className="text-indigo-600 font-medium flex items-center justify-center">
                  <span>콘텐츠 마케팅</span>
                  <ChevronRight className="ml-1 h-5 w-5" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">데이터 기반 성과 관리</h3>
                <p className="text-gray-600 mb-6">
                  검색어별 노출 순위와 방문 수를 확인하고, 결과를 보며 고칩니다.
                </p>
                <div className="text-teal-600 font-medium flex items-center justify-center">
                  <span>데이터 기반 성과 관리</span>
                  <ChevronRight className="ml-1 h-5 w-5" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 네이버 알고리즘 준수 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
              <CardContent className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-gray-50 p-8 rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">네이버 알고리즘 준수</h3>
                  </div>

                  <p className="text-gray-700">
                    네이버 운영 정책을 지킵니다. 어뷰징이나 블랙햇 기법은 쓰지 않습니다.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <CardContent className="p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  <span className="hidden md:inline">무료 상담에서 지금 가게 상태를 같이 보고, <br />먼저 할 일을 말씀드립니다.</span>
                  <span className="block md:hidden break-keep">무료 상담에서 지금 가게 상태를 같이 보고, 먼저 할 일을 말씀드립니다.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-white/90 max-w-3xl mx-auto mb-10"
                >
                  <span className="hidden md:inline">무료 상담을 통해 귀사의 비즈니스에 맞는 맞춤형 전략을 제안해 드립니다.<br />지금 바로 네이버 검색 최적화의 첫 걸음을 시작하세요.</span>
                  <span className="block md:hidden">무료 상담을 통해 귀사의 비즈니스에 맞는 맞춤형 전략을 제안해 드립니다.<br />지금 바로 네이버 검색 최적화의 첫 걸음을 시작하세요.</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col md:flex-row gap-4 justify-center"
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span>무료 상담 신청하기</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatDelay: 1 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <ContactSection />
    </div>
    </DocShell>
  )
} 