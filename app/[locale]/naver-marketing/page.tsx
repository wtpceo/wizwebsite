"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { CheckCircle, Search, FileText, ArrowRight, Shield, TrendingUp, Award, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import ContactSection from "@/components/sections/ContactSection"

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
  const [activeTab, setActiveTab] = useState(0)
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const isHeroInView = useInView(heroRef)

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "김*준",
      business: "계속해서 100위권이었던 한정식 사장님",
      content: "2개월 만에 네이버 검색 노출이 450% 증가했습니다. 주말 예약이 꽉 차고 맛집 2등입니다.!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "이*영",
      business: "경쟁 치열한 지역에서 뷰티샵 사장님",
      content:
        "경쟁이 치열한 지역에서도 계속 상승 하고 있습니다. 비용대비 만족하는 효과에요.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "박*호",
      business: "마케팅회사에 계속 사기 당하던 사장님",
      content:
        "마케팅은 해야하니까 한 번 더 믿어보자 하고 결정했는데 이제 여기랑만 합니다.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const statsData = [
    { value: 450, label: "평균 노출 증가율", suffix: "%" },
    { value: 10000, label: "월 평균 추가 방문자", suffix: "+" },
    { value: 98, label: "고객 만족도", suffix: "%" },
  ]

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

  const CountUp = ({ value, duration = 2, suffix = "" }: { value: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const isInView = useInView(countRef)

    useEffect(() => {
      if (!isInView) return

      let start = 0
      const end = Number.parseInt(value.toString().replace(/,/g, ""))
      const incrementTime = (duration * 1000) / end

      const timer = setInterval(() => {
        start += 1
        const progress = Math.min(start / end, 1)
        setCount(Math.floor(end * progress))

        if (start >= end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }, [value, duration, isInView])

    return (
      <span ref={countRef}>
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-white overflow-hidden">
      <Header />
      <main className="flex-1">
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                <span className="hidden md:inline">검색에서 발견되지 않는 다면<br />존재하지 않는것과 같습니다</span>
                <span className="block md:hidden">검색에서 발견되지 않는 다면<br />존재하지 않는것과 같습니다</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"
              >
                <span className="hidden md:inline">온라인에서도 노출이 되어야 하고 그 다음이 바로 콘텐츠 입니다.</span>
                <span className="block md:hidden">온라인에서도 노출이 되어야 하고<br />그 다음이 바로 콘텐츠 입니다.</span>
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
                    당신의 가게는 사라진게 아니라 <strong>보이지 않고 있을 뿐입니다.</strong> <br /> 지금
                    제대로 정비하고, 고객에게 다시 보이게 만들어 드립니다.<br />
                    <strong>매년 30%의 고객을 잃는 대신,</strong> 매달 새로운 고객이 찾아오는 가게로 바꿔보세요.
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
              <span className="hidden md:inline">네이버 검색을 지배하는 솔루션</span>
              <span className="block md:hidden">네이버 검색을<br />지배하는 솔루션</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
              광고비 없이도 네이버 검색 결과 최상위에 노출되어 <br className="hidden md:block" />
              <span className="font-semibold">지속적인 고객 유입과 매출 증가</span>를 경험하세요
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
                  네이버 알고리즘을 완벽하게 분석하여 귀사의 비즈니스가 관련 키워드에서 최상위에 노출되도록 최적화합니다.
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
                  전문 작가팀이 귀사의 비즈니스에 최적화된 고품질 콘텐츠를 제작하여 네이버 검색 결과를 장악합니다.
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
                  실시간 데이터 분석으로 노출 현황을 모니터링하고 지속적인 개선을 통해 최상의 결과를 보장합니다.
                </p>
                <div className="text-teal-600 font-medium flex items-center justify-center">
                  <span>데이터 기반 성과 관리</span>
                  <ChevronRight className="ml-1 h-5 w-5" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 통계 섹션 */}
          <motion.div
            ref={statsRef}
            className="mb-20 py-16 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-12">우리의 솔루션이 만드는 실제 결과</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-5xl font-bold mb-2">
                    {isStatsInView && <CountUp value={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div className="text-xl text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 광고 아님 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        <span className="text-blue-600">광고가 아닌</span> 자연 검색 노출의 힘
                      </h2>

                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-full mt-1">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">지속적인 효과</h3>
                            <p className="text-gray-600">
                              광고와 달리 한번 최적화된 콘텐츠는 지속적으로 효과를 발휘합니다
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-full mt-1">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">높은 신뢰도</h3>
                            <p className="text-gray-600">소비자들은 광고보다 자연 검색 결과를 더 신뢰하고 클릭합니다</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-full mt-1">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">비용 효율성</h3>
                            <p className="text-gray-600">
                              광고비 지출 없이 지속적인 고객 유입을 만들어 ROI가 극대화됩니다
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="bg-gray-50 p-8 rounded-2xl"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Shield className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">네이버 알고리즘 준수</h3>
                      </div>

                      <p className="text-gray-700 mb-6">
                        우리는 네이버의 알고리즘을 정확히 분석하고 준수합니다. 어뷰징이나 블랙햇 기법을 사용하지 않아 계정 제재 위험이 없으며, 지속 가능한 결과를 제공합니다.
                      </p>

                      <div className="bg-blue-50 p-4 rounded-xl">
                        <p className="text-blue-700 font-medium">
                          "어뷰징으로 효과보고 있나요? 언제까지 그럴까요?"
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 고객 후기 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-4 text-center">실제 고객의 성공 사례</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 text-center">
              우리의 솔루션으로 비즈니스를 성장시킨 고객들의 이야기를 들어보세요
            </p>

            <div className="relative">
              <AnimatePresence mode="wait">
                {testimonials.map(
                  (testimonial, index) =>
                    activeTab === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
                      >
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="md:w-1/4 flex justify-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                              <Users className="h-12 w-12 text-blue-500" />
                            </div>
                          </div>
                          <div className="md:w-3/4">
                            <div className="flex items-center mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Award key={i} className="h-5 w-5 text-yellow-400" />
                              ))}
                            </div>
                            <p className="text-xl text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                            <div>
                              <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                              <p className="text-gray-500">{testimonial.business}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>

              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      activeTab === index ? "bg-blue-600 w-8" : "bg-gray-300",
                    )}
                  />
                ))}
              </div>
            </div>
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
                  <span className="hidden md:inline">지금 시작하세요. <br />3개월 안에 변화는 무조건 찾아옵니다.</span>
                  <span className="block md:hidden">지금 시작하세요.<br />3개월 안에 변화는 무조건 찾아옵니다.</span>
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
      </main>
      <ContactSection />
      <Footer />
    </div>
  )
} 