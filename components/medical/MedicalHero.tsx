"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// 히어로는 전환의 핵심 — opacity로 숨기지 않고 y 슬라이드만으로 등장(항상 가독 보장)
const fadeIn: Variants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

export default function MedicalHero() {
  return (
    <section
      id="medical-hero"
      className="relative flex min-h-[88vh] w-full items-center overflow-hidden bg-[#070b14]"
    >
      {/* 도트 그리드 + 잉크 그라데이션 */}
      <div className="geo-grid-bg absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070b14]/40 to-[#070b14]" />

      {/* 민트 글로우 blob */}
      <div className="absolute -left-32 top-1/4 h-[420px] w-[560px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[480px] rounded-full bg-sky-500/[0.05] blur-3xl" />

      <div className="container relative px-4 py-24 md:px-6 md:py-32">
        <motion.div
          className="flex max-w-3xl flex-col items-start text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeIn}>
            <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
              병원·의원 전용 · 무료 AI 검색 진단
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="mt-6 text-[clamp(2.25rem,5vw,5.25rem)] font-extrabold leading-[1.15] tracking-tight text-white"
          >
            원장님 병원,
            <br />
            <span className="bg-gradient-to-r from-[#00e5a0] to-sky-400 bg-clip-text text-transparent">
              ChatGPT에 물어보면
            </span>
            <br />
            나올까요?
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-6 max-w-[640px] text-base leading-relaxed text-slate-400 md:text-lg"
          >
            환자들은 이제 네이버가 아니라 ChatGPT·퍼플렉시티·네이버 AI에게{" "}
            <span className="font-semibold text-slate-200">
              &ldquo;○○ 잘하는 병원 추천해줘&rdquo;
            </span>
            라고 묻습니다. AI가 우리 병원을 어떻게 답하는지(혹은 잘못 답하는지) 무료로 진단해
            드립니다.{" "}
            <span className="font-semibold text-slate-200">
              병원·의원만, 조건 없이 무료입니다.
            </span>
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="mt-9 flex flex-col gap-3 min-[400px]:flex-row"
          >
            <Link href="#apply">
              <Button
                size="lg"
                className="gap-1 bg-[#00e5a0] px-8 py-6 text-lg font-bold text-[#070b14] shadow-lg shadow-[#00e5a0]/25 transition-all duration-300 hover:bg-[#3cf0bb] hover:shadow-xl hover:shadow-[#00e5a0]/35"
              >
                무료 진단 신청하기
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#report-preview">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 bg-transparent px-8 py-6 text-lg text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-white/5 hover:text-white"
              >
                진단서 미리보기
              </Button>
            </Link>
          </motion.div>

          {/* 신뢰 라인 */}
          <motion.div
            variants={fadeIn}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500"
          >
            <span>2016년부터</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>7,000+ 광고주</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span className="text-[#00e5a0]/80">의료광고법 반영 진단</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
