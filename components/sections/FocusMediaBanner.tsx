"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Tv, Building2, Users, TrendingUp, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const FOCUSMEDIA_DATA = {
  title: "엘리베이터TV 광고",
  subtitle: "포커스미디어 공식 총판",
  description: "서울 아파트 엘리베이터의 50.3%에서 만나는 광고",
  stats: [
    { icon: Building2, value: "6,700+", label: "아파트 단지" },
    { icon: Tv, value: "91,000+", label: "엘리베이터TV" },
    { icon: Users, value: "1,000만+", label: "일일 시청자" },
    { icon: TrendingUp, value: "95%", label: "시청 호감도" },
  ],
  cta: "광고 문의하기"
}

export default function FocusMediaBanner() {
  return (
    <section className="w-full relative overflow-hidden py-16 md:py-24">
      {/* Background with Premium Gradient & Animation */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/30 via-red-500/20 to-transparent" />

        {/* Animated Orbs */}
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-medium text-white/90">{FOCUSMEDIA_DATA.subtitle}</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">엘리베이터TV</span><br />
                <span className="text-white">50.3% 장악하다</span>
              </h2>

              <p className="text-lg text-white/70 max-w-lg leading-relaxed">
                하루 1,000만 명이 매일 시청하는 강력한 매체력.<br />
                당신의 동네 상권을 완벽하게 선점하세요.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/focusmedia">
                <Button size="lg" className="h-14 px-8 text-lg bg-orange-600 hover:bg-orange-700 text-white rounded-full border-none shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transition-all duration-300 group">
                  <span>자세히 보기</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {FOCUSMEDIA_DATA.stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-orange-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
