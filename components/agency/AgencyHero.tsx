"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeIn: Variants = {
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
    transition: { staggerChildren: 0.12 },
  },
}

export default function AgencyHero() {
  return (
    <section
      id="agency-hero"
      className="relative flex min-h-[88vh] w-full items-center overflow-hidden bg-[#070b14]"
    >
      {/* 배경: 앰비언트 루프 비디오 */}
      <video
        src="/videos/agency-hero.mp4"
        poster="/images/agency/hero-key-visual.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 잉크 오버레이 — 텍스트 가독성 확보 */}
      <div className="absolute inset-0 bg-[#070b14]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/30 via-[#070b14]/55 to-[#070b14]" />
      <div className="geo-grid-bg absolute inset-0 opacity-50" />

      {/* 민트 글로우 포인트 */}
      <div className="absolute -left-32 top-1/4 h-[420px] w-[560px] rounded-full bg-[#00e5a0]/[0.06] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[460px] rounded-full bg-sky-500/[0.05] blur-3xl" />

      <div className="container relative px-4 py-24 md:px-6 md:py-32">
        {/* 좌측 정렬 매거진 스타일 */}
        <motion.div
          className="flex max-w-3xl flex-col items-start text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeIn}>
            <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
              GEO · SEO · PERFORMANCE ADS · CONTENT
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            <span className="bg-gradient-to-r from-[#00e5a0] to-sky-400 bg-clip-text text-transparent">
              AI가 추천하는
            </span>
            <br />
            브랜드를 만듭니다
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-6 max-w-[620px] text-base leading-relaxed text-slate-400 md:text-lg"
          >
            ChatGPT·퍼플렉시티·네이버 AI가 당신의 브랜드를 인용하게 만드는 GEO부터,
            기술 SEO·메타/구글 퍼포먼스 광고·자체 제작 콘텐츠·홈페이지까지.
            <br className="hidden md:block" />
            <span className="font-semibold text-slate-200">
              2016년부터 7,000여 광고주와 함께한 풀서비스 에이전시
            </span>
            , 위즈더플래닝입니다.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-9 flex flex-col gap-3 min-[400px]:flex-row">
            <Link href="/#contact">
              <Button
                size="lg"
                className="gap-1 bg-[#00e5a0] px-8 py-6 text-lg font-bold text-[#070b14] shadow-lg shadow-[#00e5a0]/25 transition-all duration-300 hover:bg-[#3cf0bb] hover:shadow-xl hover:shadow-[#00e5a0]/35"
              >
                무료 AI 검색 진단
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 bg-transparent px-8 py-6 text-lg text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-white/5 hover:text-white"
              >
                포트폴리오 보기
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
            <span className="text-[#00e5a0]/80">외주 없는 자체 제작팀</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
