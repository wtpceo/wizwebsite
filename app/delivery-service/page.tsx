"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronDown,
  CheckCircle,
  AlertTriangle,
  BarChart,
  Settings,
  Shield,
  Star,
  MessageSquare,
  ImageIcon,
  PieChart,
  Users,
  Calendar,
  Award,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/sections/Footer"

const fadeIn = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "backOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring", bounce: 0.5 },
  },
}

interface CountUpProps {
  end: number
  duration?: number
  start?: number
  decimals?: number
}

function CountUp({ end, duration = 2, start = 0, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(progress * (end - start) + start)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => cancelAnimationFrame(animationFrame)
  }, [start, end, duration])

  return <>{count.toFixed(decimals)}</>
}

export default function DeliveryServicePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [problemRef, problemInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [platformRef, platformInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [realityRef, realityInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [trustRef, trustInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const contactBlobs = [
    { width: 120, height: 180, left: 10, top: 20 },
    { width: 200, height: 120, left: 60, top: 10 },
    { width: 180, height: 160, left: 30, top: 60 },
    { width: 160, height: 140, left: 70, top: 40 },
    { width: 140, height: 200, left: 40, top: 70 },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-red-600 to-orange-500 text-white overflow-hidden">
          {/* Background animation elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { width: 150, height: 150, left: 10, top: 20 },
              { width: 200, height: 200, left: 80, top: 15 },
              { width: 180, height: 180, left: 30, top: 60 },
              { width: 160, height: 160, left: 70, top: 40 },
              { width: 190, height: 190, left: 20, top: 80 },
              { width: 170, height: 170, left: 60, top: 30 },
              { width: 140, height: 140, left: 40, top: 70 },
              { width: 130, height: 130, left: 90, top: 50 }
            ].map((blob, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/5"
                style={{
                  width: `${blob.width}px`,
                  height: `${blob.height}px`,
                  left: `${blob.left}%`,
                  top: `${blob.top}%`,
                  zIndex: 0,
                  opacity: 0.05
                }}
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  opacity: [0.05, 0.1, 0.05],
                  x: [0, 10, 0],
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>

          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="container mx-auto px-4 text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.h1
                variants={fadeIn}
                className="text-3xl md:text-5xl font-bold mb-8"
                animate={{
                  textShadow: [
                    "0px 0px 0px rgba(255,255,255,0)",
                    "0px 0px 10px rgba(255,255,255,0.3)",
                    "0px 0px 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="hidden md:inline">배달앱 운영, 아직 혼자 하세요?</span>
                <span className="block md:hidden">배달앱 운영,<br />아직 혼자 하세요?</span>
              </motion.h1>
            </motion.div>

            <motion.div
              className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto bg-black/10 p-5 rounded-lg backdrop-blur-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="hidden md:inline">
                <motion.span
                  className="inline-block font-bold text-red-200 mr-1"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  배달의민족
                </motion.span>
                <span>부터</span>
                <motion.span
                  className="inline-block font-bold text-yellow-200 mx-1"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  요기요
                </motion.span>
                <span>,</span>
                <motion.span
                  className="inline-block font-bold text-blue-200 mx-1"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  쿠팡이츠
                </motion.span>
                <span>,</span>
                <motion.span
                  className="inline-block font-bold text-green-200 mx-1"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  땡겨요
                </motion.span>
                <span>까지</span>
              </span>
              <span className="block md:hidden">
                <motion.span
                  className="inline-block font-bold text-red-200 mr-1"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  배달의민족
                </motion.span>
                <span>부터<br /></span>
                <motion.span
                  className="inline-block font-bold text-yellow-200 mx-1"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  요기요
                </motion.span>
                <span>,</span>
                <motion.span
                  className="inline-block font-bold text-blue-200 mx-1"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  쿠팡이츠
                </motion.span>
                <span>,</span>
                <motion.span
                  className="inline-block font-bold text-green-200 mx-1"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  땡겨요
                </motion.span>
                <span>까지</span>
              </span>
              <br />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-3 font-bold text-2xl md:text-3xl"
              >
                <motion.span
                  animate={{
                    color: ["#ffffff", "#ffcc00", "#ffffff"],
                    textShadow: [
                      "0px 0px 0px rgba(255,255,255,0)",
                      "0px 0px 8px rgba(255,255,255,0.5)",
                      "0px 0px 0px rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="hidden md:inline">이제는 선택이 아니라, 생존 전략입니다.</span>
                  <span className="block md:hidden">이제는 선택이 아니라,<br />생존 전략입니다.</span>
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
              className="relative z-10"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-r from-yellow-300 via-red-300 to-orange-300 rounded-xl opacity-80"
                  style={{
                    filter: "blur(15px)",
                    transform: "translateZ(0)",
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl transition-all border border-white/20"
                  >
                    무료 진단 받기
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown size={40} className="text-white opacity-70" />
          </motion.div>

          {/* Floating icons */}
          {[
            { name: "배민", position: { top: "15%", left: "5%" } },
            { name: "요기요", position: { top: "75%", left: "8%" } },
            { name: "쿠팡", position: { top: "20%", right: "5%" } },
            { name: "땡겨요", position: { bottom: "20%", right: "8%" } },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute hidden md:block"
              style={{
                ...item.position,
                zIndex: 1,
              }}
              animate={{
                y: [0, 10, 0],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4 + index,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: index * 0.5,
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-lg text-white font-bold text-sm opacity-70">
                {item.name}
              </div>
            </motion.div>
          ))}
        </section>

        {/* 현실 자극 섹션 */}
        <section id="problem" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              ref={problemRef}
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
                <AlertTriangle className="inline-block mr-2 text-red-600" size={32} />
                <span className="hidden md:inline">매출이 줄고 있는데, 이유를 모른다면...</span>
                <span className="block md:hidden">매출이 줄고 있는데,<br />이유를 모른다면...</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { title: "중개 수수료 인상", icon: <BarChart className="text-red-600" size={24} /> },
                { title: "쿠팡이츠 vs 배민 점유 전쟁", icon: <AlertTriangle className="text-red-600" size={24} /> },
                { title: "땡겨요의 약진", icon: <ChevronDown className="text-red-600" size={24} /> },
                {
                  title: "리뷰 관리부터 광고까지 직접 해야 하는 현실",
                  icon: <Settings className="text-red-600" size={24} />,
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemFadeIn}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="mb-4 flex justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="text-center mt-12">
              <p className="text-xl font-medium text-gray-700">🔍 지금 사장님이 힘든 이유, 알고 계신가요?</p>
            </motion.div>
          </div>
        </section>

        {/* 플랫폼 환경 요약 섹션 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              ref={platformRef}
              initial="hidden"
              animate={platformInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              <span className="hidden md:inline">배달시장은 지금 이렇게 바뀌고 있습니다</span>
              <span className="block md:hidden">배달시장은<br />지금 이렇게<br />바뀌고 있습니다</span>
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={platformInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  title: "깃발 광고 폐지",
                  description: "클릭형(CPC) 광고로 전환되어 광고 방식이 완전히 달라졌습니다.",
                },
                {
                  title: "광고 경쟁 심화",
                  description: '"모르면 손해보는 구조"로 변화하여 전문적인 관리가 필요합니다.',
                },
                {
                  title: "다중 매장 운영",
                  description: "4개 매장을 동시에 운영하는 자영업자가 증가하고 있습니다.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemFadeIn}>
                  <div className="bg-gray-50 p-6 rounded-lg h-full hover:shadow-md transition-all duration-300">
                    <h3 className="font-bold text-lg mb-3 flex items-center">
                      <motion.div whileHover={{ scale: 1.2 }} className="text-red-600 mr-2">
                        <CheckCircle size={20} />
                      </motion.div>
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={platformInView ? "visible" : "hidden"}
              className="text-center"
            >
              <p className="text-xl font-bold text-red-600">이제는 '운영'이 아니라 '관리'가 실력입니다.</p>
            </motion.div>
          </div>
        </section>

        {/* 자영업자가 부딪히는 현실 */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.h2
              ref={realityRef}
              initial="hidden"
              animate={realityInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              <span className="hidden md:inline">사장님이 지금 혼자 하셔야 하는 일</span>
              <span className="block md:hidden">사장님이 지금<br />혼자 하셔야 하는 일</span>
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={realityInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              {[
                {
                  title: "각 플랫폼 메뉴, 가격, 사진 정리",
                  description: "7개 이상의 플랫폼에 동일한 정보를 일일이 업데이트해야 합니다.",
                  icon: <Settings size={24} />,
                },
                {
                  title: "리뷰 응대 + 이벤트 관리",
                  description: "부정적인 리뷰에 대응하고 각종 이벤트를 관리해야 합니다.",
                  icon: <MessageSquare size={24} />,
                },
                {
                  title: "광고 예산 설정, 클릭률 분석",
                  description: "효율적인 광고 예산 분배와 성과 분석이 필요합니다.",
                  icon: <BarChart size={24} />,
                },
                {
                  title: "매출 하락 원인 추적",
                  description: "어떤 플랫폼에서 문제가 발생했는지 파악해야 합니다.",
                  icon: <PieChart size={24} />,
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemFadeIn}>
                  <div className="border border-gray-700 p-6 rounded-lg hover:border-red-500 transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <motion.div
                        className="bg-red-600 p-2 rounded-full mr-4"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={realityInView ? "visible" : "hidden"}
              className="text-center"
            >
              <p className="text-2xl font-bold">
                <span className="hidden md:inline">🤯 혼자 하긴, 불가능한 일이 되었습니다.</span>
                <span className="block md:hidden">🤯 혼자 하긴,<br />불가능한 일이 되었습니다.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* 대응 전략 제시 */}
        <section id="solution" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              ref={solutionRef}
              initial="hidden"
              animate={solutionInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              <span className="hidden md:inline">생존을 위한 핵심 포인트 5가지</span>
              <span className="block md:hidden">생존을 위한<br />핵심 포인트 5가지</span>
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={solutionInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                { title: "플랫폼별 가격 전략 분리", icon: <BarChart className="text-red-600" size={24} /> },
                { title: "사진/메뉴 통합 관리", icon: <ImageIcon className="text-red-600" size={24} /> },
                { title: "리뷰 + 이벤트 자동화", icon: <MessageSquare className="text-red-600" size={24} /> },
                { title: "광고 전환율 체크", icon: <PieChart className="text-red-600" size={24} /> },
                { title: "네이버 플레이스 포장 고객 대응", icon: <Settings className="text-red-600" size={24} /> },
              ].map((item, index) => (
                <motion.div key={index} variants={itemFadeIn}>
                  <Card className="border-none shadow hover:shadow-md transition-all duration-300 h-full hover:bg-gray-50">
                    <CardContent className="p-6">
                      <motion.div
                        className="mb-4 flex justify-center"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="font-semibold text-lg mb-2 text-center">{item.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={solutionInView ? "visible" : "hidden"}
              className="text-center"
            >
              <p className="text-xl font-bold text-gray-800 mb-6">👉 이 모든 걸 자동화 + 전문가가 대신한다면요?</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg transition-all">
                  무료 상담 받기
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 회사 소개 및 통계 섹션 */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              ref={statsRef}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                <span className="hidden md:inline">9년의 노하우, 7,000개 이상의 성공 사례</span>
                <span className="block md:hidden">9년의 노하우,<br />7,000개 이상의<br />성공 사례</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                2016년부터 시작된 위즈더플래닝의 여정은
                <br />
                수많은 자영업자들의 성공 스토리로 이어져 왔습니다.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  title: "설립 연도",
                  value: "2016",
                  icon: <Calendar className="text-red-600" size={32} />,
                  suffix: "년",
                },
                {
                  title: "운영 기간",
                  value: "9",
                  icon: <Award className="text-red-600" size={32} />,
                  suffix: "년",
                },
                {
                  title: "고객사",
                  value: "7000",
                  icon: <Users className="text-red-600" size={32} />,
                  suffix: "+",
                },
              ].map((stat, index) => (
                <motion.div key={index} variants={itemFadeIn}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="mb-4 flex justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        {stat.icon}
                      </motion.div>
                      <h3 className="font-semibold text-lg mb-2">{stat.title}</h3>
                      <div className="text-4xl font-bold text-red-600 flex justify-center items-center">
                        <CountUp end={Number.parseInt(stat.value)} duration={2.5} />
                        <span>{stat.suffix}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="text-center bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">
                <span className="hidden md:inline">위즈더플래닝은 배달앱 관리의 선두주자입니다</span>
                <span className="block md:hidden">위즈더플래닝은<br />배달앱 관리의 선두주자입니다</span>
              </h3>
              <p className="text-gray-700 mb-4">
                9년간의 경험을 바탕으로 7,000개 이상의 매장을 성공적으로 관리해온 노하우를 가지고 있습니다.<br /> 배달앱
                시장의 변화에 발맞춰 끊임없이 진화하는 전략으로 사장님들의 매출 향상을 돕고 있습니다.
              </p>
              <p className="text-gray-700 font-medium">
                위즈더플래닝과 함께라면, 복잡한 배달앱 관리는 더 이상 고민거리가 아닙니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 위즈더플래닝의 역할 */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={servicesRef}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                <span className="hidden md:inline">위즈더플래닝의 역할</span>
                <span className="block md:hidden">위즈더플래닝의<br />역할</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                "7개 플랫폼 운영 + 광고 효율화 + 리뷰/사진 통합관리"
                <br />
                전문 대행사가 사장님의 '마케팅팀'이 됩니다.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "플랫폼 운영 통합 관리",
                  description: "7개 플랫폼의 메뉴, 가격, 사진을 일관되게 관리합니다.",
                  icon: <Settings className="text-red-600" size={32} />,
                },
                {
                  title: "클릭광고 예산 최적화",
                  description: "효율적인 광고 예산 분배로 최대 효과를 얻습니다.",
                  icon: <BarChart className="text-red-600" size={32} />,
                },
                {
                  title: "리뷰 및 고객 반응 분석",
                  description: "부정적 리뷰에 신속하게 대응하고 고객 피드백을 분석합니다.",
                  icon: <MessageSquare className="text-red-600" size={32} />,
                },
                {
                  title: "메뉴/사진 통일 자동화",
                  description: "모든 플랫폼에 일관된 메뉴와 고품질 사진을 유지합니다.",
                  icon: <ImageIcon className="text-red-600" size={32} />,
                },
                {
                  title: "성과 리포트 제공",
                  description: "매주 상세한 성과 리포트로 개선점을 파악합니다.",
                  icon: <PieChart className="text-red-600" size={32} />,
                },
                {
                  title: "전략적 가격 정책",
                  description: "플랫폼별 특성에 맞는 가격 전략을 수립합니다.",
                  icon: <Star className="text-red-600" size={32} />,
                },
              ].map((service, index) => (
                <motion.div key={index} variants={itemFadeIn}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <motion.div
                        className="mb-4 flex justify-center"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="font-bold text-lg mb-2 text-center">{service.title}</h3>
                      <p className="text-gray-600 text-center">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 신뢰 포인트 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              ref={trustRef}
              initial="hidden"
              animate={trustInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="inline-block"
              >
                <Shield className="text-red-600 mx-auto mb-4" size={48} />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">신뢰할 수 있는 파트너</h2>
              <p className="text-xl mb-6">
                🔐 우리는 어뷰징을 하지 않습니다.
                <br />
                플랫폼 알고리즘에 기반한 <span className="font-bold">합법적/지속 가능한 운영 전략</span>만을 씁니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section id="contact" className="py-16 bg-red-600 text-white relative overflow-hidden">
          {/* Background animation elements */}
          <div className="absolute inset-0 overflow-hidden">
            {contactBlobs.map((blob, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/5"
                style={{
                  width: `${blob.width}px`,
                  height: `${blob.height}px`,
                  left: `${blob.left}%`,
                  top: `${blob.top}%`,
                  opacity: 0.1,
                }}
                initial={{ opacity: 0.1, scale: 0 }}
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [0, 1, 0] }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              ref={contactRef}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                <span className="hidden md:inline">이제, 선택이 아닌 '필수'입니다.</span>
                <span className="block md:hidden">이제, 선택이 아닌<br />'필수'입니다.</span>
              </h2>
              <p className="text-xl mb-8">매출이 줄고 있다면, 지금이 바꿀 타이밍입니다.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 text-center">무료 진단 신청하기</h3>
              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const data = {
                  name: formData.get('name'),
                  phone: formData.get('phone'),
                  email: formData.get('email'),
                  message: formData.get('message')
                }

                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })

                  if (response.ok) {
                    alert('문의가 성공적으로 접수되었습니다.')
                    e.currentTarget.reset()
                  } else {
                    alert('문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.')
                  }
                } catch (error) {
                  console.error('문의 처리 중 오류:', error)
                  alert('문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.')
                }
              }}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Input name="name" placeholder="상호명" className="bg-gray-50" required />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Input name="phone" placeholder="연락처" className="bg-gray-50" required />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Input name="email" type="email" placeholder="이메일" className="bg-gray-50" required />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Textarea name="message" placeholder="문의사항" className="bg-gray-50" rows={4} required />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 transition-colors">
                    무료 진단 신청하기
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 