"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Tv, Building2, Users, TrendingUp, ChevronRight, ArrowRight,
  CheckCircle, MapPin, Clock, Eye, Target, Megaphone, BarChart3,
  Home, Briefcase, ShoppingBag, Utensils, Dumbbell, Scissors
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import ContactSection from "@/components/sections/ContactSection"

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* 배경 사진 */}
    <div className="absolute inset-0 bg-[url('/images/focusmedia/data-map.png')] bg-cover bg-center" />

    {/* 가독성용 잉크 오버레이 */}
    <div className="absolute inset-0 bg-[#070b14]/80" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/60 via-transparent to-[#070b14]" />
    <div className="geo-grid-bg absolute inset-0 opacity-40" />

    {/* 파트너 오렌지 포인트 글로우 */}
    <motion.div
      className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500 rounded-full blur-[140px] opacity-[0.12]"
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-500 rounded-full blur-[160px] opacity-[0.08]"
      animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, -50, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
)

const FloatingTVIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-4"
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            opacity: 0,
            rotate: Math.random() * 360
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        >
          <Tv size={Math.random() * 30 + 30} />
        </motion.div>
      ))}
    </div>
  )
}

export default function FocusMediaPage() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const statsData = [
    { icon: Building2, value: 6700, label: "설치 아파트 단지", suffix: "+" },
    { icon: Tv, value: 91000, label: "엘리베이터TV", suffix: "+" },
    { icon: Users, value: 1000, label: "일일 시청자", suffix: "만+" },
    { icon: TrendingUp, value: 95, label: "시청 호감도", suffix: "%" },
  ]

  const benefits = [
    {
      icon: Eye,
      title: "압도적인 노출량",
      description: "하루 평균 1,000만 명이 4.3회씩 시청하는 강력한 노출 효과",
    },
    {
      icon: Target,
      title: "정밀한 지역 타겟팅",
      description: "원하는 지역의 아파트 단지만 선별하여 광고 집행 가능",
    },
    {
      icon: Clock,
      title: "반복 노출 효과",
      description: "출퇴근 시간, 일상생활에서 자연스럽게 반복 노출",
    },
    {
      icon: MapPin,
      title: "동네 상권 최적화",
      description: "매장 반경 내 아파트 주민에게 직접 광고 도달",
    },
  ]

  const targetBusinesses = [
    { icon: Utensils, name: "음식점/카페", description: "배달앱보다 효과적인 동네 홍보" },
    { icon: Scissors, name: "뷰티샵", description: "신규 고객 유치 및 인지도 상승" },
    { icon: Dumbbell, name: "피트니스", description: "주변 주민 타겟 회원 모집" },
    { icon: ShoppingBag, name: "소매점", description: "동네 단골 고객 확보" },
    { icon: Briefcase, name: "학원/교육", description: "학부모 대상 효과적 홍보" },
    { icon: Home, name: "부동산/인테리어", description: "이사 예정 고객 타겟팅" },
  ]

  const CountUp = ({ value, duration = 2, suffix = "" }: { value: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const isInView = useInView(countRef)

    useEffect(() => {
      if (!isInView) return

      let start = 0
      const end = value
      const incrementTime = (duration * 1000) / end

      const timer = setInterval(() => {
        start += Math.ceil(end / 100)
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, incrementTime * 10)

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
    <div className="flex min-h-screen flex-col bg-white overflow-hidden font-sans">
      <Header />
      <main className="flex-1">
        {/* 히어로 섹션 */}
        <motion.div
          ref={heroRef}
          className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#070b14]"
          style={{ opacity, scale, y }}
        >
          <AnimatedBackground />
          {isVisible && <FloatingTVIcons />}

          <div className="container relative z-10 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-6 py-2.5 mb-8 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-orange-300 font-semibold tracking-wide text-sm md:text-base">포커스미디어 공식 총판</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold mb-8 text-white leading-tight tracking-tight">
                <span className="block text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 text-slate-200">서울 아파트 엘리베이터</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-500">
                  50.3%
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-slate-200">를 장악하다</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
              >
                하루 1,000만 명이 시청하는 강력한 매체력.<br className="hidden md:block" />
                <span className="text-white font-bold">엘리베이터TV</span>로 당신의 동네 상권을 완벽하게 선점하세요.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-5 w-full justify-center"
              >
                <Button
                  size="lg"
                  className="bg-[#00e5a0] text-[#070b14] hover:bg-[#3cf0bb] text-xl px-10 py-8 rounded-full font-bold shadow-lg shadow-[#00e5a0]/25 hover:shadow-xl hover:shadow-[#00e5a0]/35 transition-all duration-300 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>무료 견적 받기</span>
                  <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/20 text-slate-200 hover:bg-white/10 hover:text-white text-xl px-10 py-8 rounded-full backdrop-blur-sm font-semibold transition-all"
                  onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  서비스 소개서 보기
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-white/40 text-sm tracking-widest uppercase">Scroll Down</span>
                <ChevronRight className="h-6 w-6 text-white/40 transform rotate-90" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-20 max-w-6xl">
          {/* 통계 섹션 */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-32"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-200 transition-all duration-300 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/[0.07] hover:-translate-y-2"
                >
                  <div className="bg-orange-50 p-4 rounded-2xl mb-6 ring-1 ring-orange-100">
                    <stat.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900 tracking-tight">
                    {isStatsInView && <CountUp value={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div className="text-gray-500 font-medium text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 왜 엘리베이터TV인가? */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-32"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 relative">
                <Card className="border border-gray-200 shadow-xl rounded-3xl overflow-hidden bg-white relative z-10">
                  <CardContent className="p-10 md:p-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10 text-gray-900 leading-tight">
                      왜 <span className="text-orange-600">엘리베이터TV</span><br />
                      광고인가요?
                    </h2>

                    <div className="space-y-8">
                      <motion.div className="group" whileHover={{ x: 10 }}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm font-bold">1</span>
                          압도적인 노출 빈도
                        </h3>
                        <p className="text-gray-600 pl-11 text-lg leading-relaxed">
                          TV 광고 대비 <span className="font-bold text-orange-600">3.2배</span> 더 자주 노출됩니다.<br />
                          매일 반복되는 확실한 각인 효과를 경험하세요.
                        </p>
                      </motion.div>

                      <motion.div className="group" whileHover={{ x: 10 }}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm font-bold">2</span>
                          95%의 시청 호감도
                        </h3>
                        <p className="text-gray-600 pl-11 text-lg leading-relaxed">
                          입주민에게 신뢰받는 생활 정보 매체입니다.<br />
                          거부감 없는 자연스러운 정보 전달이 가능합니다.
                        </p>
                      </motion.div>

                      <motion.div className="group" whileHover={{ x: 10 }}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm font-bold">3</span>
                          집중도 높은 폐쇄 공간
                        </h3>
                        <p className="text-gray-600 pl-11 text-lg leading-relaxed">
                          평균 탑승 시간 108초, 스마트폰보다<br />
                          엘리베이터 TV에 시선이 머무는 시간입니다.
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 ring-1 ring-emerald-100">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">동네 상권 직격타</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    우리 매장 반경 500m 내 아파트 주민에게만<br />
                    <span className="font-bold text-gray-900">핀셋 타겟팅</span>하여 낭비 없는 광고가 가능합니다.
                  </p>
                </div>

                <div className="bg-[#0b1220] p-8 rounded-2xl text-white relative overflow-hidden group">
                  <div className="geo-grid-bg absolute inset-0 opacity-50" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-orange-500/15 transition-colors"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-orange-500/15 rounded-2xl text-orange-400">
                        <TrendingUp className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold">확실한 매출 상승</h3>
                    </div>
                    <p className="text-slate-400 text-lg">
                      <span className="text-orange-400 font-bold">"엘리베이터에서 봤어요"</span><br />
                      실제 방문 고객들의 생생한 후기가 증명합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 혜택 섹션 (Ad Strengths) */}
          <motion.div
            id="benefits"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.25em] text-orange-600 uppercase mb-3 block">Strong Point</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                엘리베이터TV 광고의 <span className="text-orange-600">강력한 효과</span>
              </h2>
              <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
                데이터로 증명된 광고 효과, 포커스미디어가 약속합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden bg-white rounded-2xl p-10 border border-gray-200 transition-all duration-300 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/[0.07]"
                >
                  <div className="relative w-16 h-16 bg-orange-50 ring-1 ring-orange-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{benefit.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 추천 업종 (Target Businesses) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-32 bg-[#f6f8f7] rounded-3xl p-8 md:p-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
                이런 업종에 <span className="text-orange-600">특히 효과적</span>입니다
              </h2>
              <p className="text-lg text-gray-500">동네 주민을 타겟으로 하는 모든 오프라인 매장에 필수입니다.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {targetBusinesses.map((business, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-400/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <business.icon className="h-7 w-7 text-gray-600 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{business.name}</h3>
                  <p className="text-sm text-gray-500 break-keep">{business.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 서비스 범위 (Coverage) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-32"
          >
            <div className="relative overflow-hidden rounded-3xl bg-[#0b1220] shadow-2xl">
              <div className="geo-grid-bg absolute inset-0 opacity-50" />
              <div className="absolute -top-32 right-0 h-[320px] w-[480px] rounded-full bg-orange-500/[0.08] blur-3xl" />

              <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white">
                <div className="md:w-1/2">
                  <span className="text-xs font-bold tracking-[0.25em] text-orange-400 uppercase mb-3 block">Coverage</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                    대한민국 <span className="text-orange-400">주요 랜드마크</span>를<br />
                    모두 커버합니다
                  </h2>
                  <div className="space-y-5 text-lg">
                    <div className="flex items-center gap-4 group">
                      <div className="p-2 bg-white/[0.06] rounded-full text-slate-300 group-hover:bg-orange-400 group-hover:text-[#0b1220] transition-colors duration-300">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">서울 전역 4,600개 아파트 단지</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="p-2 bg-white/[0.06] rounded-full text-slate-300 group-hover:bg-orange-400 group-hover:text-[#0b1220] transition-colors duration-300">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">수도권 61,000대 엘리베이터TV</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="p-2 bg-white/[0.06] rounded-full text-slate-300 group-hover:bg-orange-400 group-hover:text-[#0b1220] transition-colors duration-300">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">프라임 오피스 및 지식산업센터</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 w-full">
                  <div className="bg-white/[0.04] backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-orange-400/30 transition-colors duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-orange-400 p-3 rounded-xl text-[#0b1220]">
                        <BarChart3 className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">광고 효과 퍼포먼스</h3>
                        <p className="text-slate-400 text-sm">실제 집행 데이터 기준</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="relative pt-2">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-slate-300 font-medium">평균 시청 횟수</span>
                          <span className="text-2xl font-bold text-orange-400">4.3회<span className="text-sm font-normal text-slate-400 ml-1">/일</span></span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-orange-400 rounded-full"
                          />
                        </div>
                      </div>

                      <div className="relative pt-2">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-slate-300 font-medium">광고 인지율</span>
                          <span className="text-2xl font-bold text-orange-400">87<span className="text-sm font-normal text-slate-400 ml-1">%</span></span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "87%" }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="h-full bg-amber-400 rounded-full"
                          />
                        </div>
                      </div>

                      <div className="relative pt-2">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-slate-300 font-medium">구매 전환 의향</span>
                          <span className="text-2xl font-bold text-orange-400">62<span className="text-sm font-normal text-slate-400 ml-1">%</span></span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "62%" }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className="h-full bg-[#00e5a0] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 위즈더플래닝 차별점 (Differentiation) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">
                <span className="text-emerald-600">위즈더플래닝</span>이<br className="md:hidden" /> 답인 이유
              </h2>
              <p className="text-xl text-gray-500">수많은 대행사 중 왜 위즈더플래닝이어야 할까요?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Megaphone,
                  title: "공식 총판의 혜택",
                  desc: "포커스미디어 공식 파트너로서\n가장 합리적이고 유리한 조건을\n제안드립니다."
                },
                {
                  icon: Target,
                  title: "온·오프라인 통합 마케팅",
                  desc: "엘리베이터TV 광고와\nAI 검색 최적화·네이버 마케팅을 연계하여\n시너지를 극대화합니다."
                },
                {
                  icon: Users,
                  title: "9년의 검증된 노하우",
                  desc: "7,000여 곳 이상의 광고주가 선택한\n데이터 기반의 성공 전략을\n그대로 적용해드립니다."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-10 border border-gray-200 flex flex-col items-center text-center relative overflow-hidden group transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07]"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#00e5a0] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="w-20 h-20 rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center mb-8 group-hover:bg-[#00e5a0] transition-colors duration-300">
                    <item.icon className="w-10 h-10 text-emerald-600 group-hover:text-[#070b14] transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA 섹션 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20 relative"
          >
            <div className="relative bg-gradient-to-br from-[#0b1220] to-[#101b2e] rounded-3xl p-12 md:p-24 text-white overflow-hidden">
              <div className="geo-grid-bg absolute inset-0 opacity-50" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00e5a0]/[0.07] rounded-full blur-3xl -ml-32 -mb-32" />

              <div className="relative z-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Tv className="h-20 w-20 mx-auto mb-8 text-orange-400 drop-shadow-lg" />
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight"
                >
                  우리 동네 1등 매장,<br />
                  <span className="text-[#00e5a0]">지금 바로 시작하세요</span>
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium"
                >
                  전문가의 무료 컨설팅으로 우리 매장에 딱 맞는<br className="hidden md:block" />
                  광고 전략과 견적을 받아보세요.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#00e5a0] text-[#070b14] hover:bg-[#3cf0bb] text-xl px-12 py-9 rounded-full font-bold shadow-lg shadow-[#00e5a0]/25 hover:shadow-xl hover:shadow-[#00e5a0]/35 transition-all duration-300 group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span>무료 견적/상담 신청하기</span>
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.div>
                  </Button>
                  <p className="mt-6 text-slate-500 text-sm">
                    * 상담 신청 시 100% 무료로 예상 견적서를 보내드립니다
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </div>
  )
}
