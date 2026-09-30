"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ChevronRight, ArrowUpRight, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import BrandAskBox from "@/components/agency/BrandAskBox"

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

/**
 * 히어로 우측 패널에 노출하는 실측 기록.
 * 모두 광고 관리자·서치콘솔 원본 화면에서 확인한 값이며, 각 항목은 근거 글로 연결한다.
 * 추정치·목업 수치를 넣지 않는다(경쟁사 가짜 대시보드와의 차별점).
 */
const PROOF_ROWS = [
  {
    label: "정형외과 · ChatGPT 언급률",
    metric: "17% → 93% → 83%",
    detail: "계약 전 · 39일 뒤 · 2주 뒤 재측정",
    href: "/guide/case-orthopedic-chatgpt",
  },
  {
    label: "펜션 · 메타 릴스 광고 24일",
    metric: "클릭당 50원",
    detail: "링크 클릭 26,456회 · 지출 1,313,861원",
    href: "/guide/case-pension-direct-booking",
  },
  {
    label: "치과 홈페이지 · 3쪽 vs 167쪽",
    metric: "3쪽이 이겼습니다",
    detail: "분량이 아니라 구조의 문제였습니다",
    href: "/guide/case-dental-llms-factsheet",
  },
]

/**
 * 히어로 전면 배경 — 위즈 극장 클립으로 만든 GEO 루프 (무음·자동재생).
 * 클립마다 명도 차가 커서(어두운 골목 ↔ 밝은 문) 카피 가독성을 위해 스크림을 3겹으로 깐다.
 */
function WizBackdrop() {
  return (
    <div className="relative w-full lg:absolute lg:inset-0 lg:h-full">
      <video
        src="/videos/wiz-hero-bg.mp4"
        poster="/videos/wiz-hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="aspect-video w-full object-cover lg:h-full lg:aspect-auto"
      />

      {/* 모바일: 영상을 온전히 보여주고 아래쪽만 배경색으로 흡수 */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#070b14] to-transparent lg:hidden" />

      {/* 데스크톱: 카피가 영상 위에 올라가므로 가독성 스크림 3겹 */}
      <div className="hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-[#070b14]/60" />
        <div className="absolute inset-0 bg-[#070b14]/25" />
      </div>
    </div>
  )
}

/** 히어로 하단 — 실측 3건 가로 스트립 */
function ProofStrip() {
  return (
    <div className="mt-10 border-t border-white/[0.08] pt-8 lg:mt-14">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-xs font-semibold tracking-wide text-slate-300">
          실측 기록: 내려간 숫자도 그대로 적습니다
        </span>
        <Link
          href="/theater"
          className="group flex items-center gap-1.5 text-[11px] text-slate-500 transition-colors hover:text-[#00e5a0]"
        >
          <Film className="h-3 w-3" />
          배경 영상은 위즈 극장 5편입니다
          <ArrowUpRight className="h-3 w-3 transition-colors group-hover:text-[#00e5a0]" />
        </Link>
      </div>
      <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
        {PROOF_ROWS.map((row) => (
          <Link
            key={row.href}
            href={row.href}
            className="group flex items-start justify-between gap-3 bg-[#0d1424] px-5 py-4 transition-colors hover:bg-[#111a2e]"
          >
            <div className="min-w-0">
              <p className="text-[11px] tracking-wide text-slate-500">{row.label}</p>
              <p className="mt-1 text-lg font-bold text-[#00e5a0]">{row.metric}</p>
              <p className="mt-0.5 text-xs text-slate-400">{row.detail}</p>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-600 transition-colors group-hover:text-[#00e5a0]" />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function AgencyHero() {
  return (
    <section
      id="agency-hero"
      className="relative flex w-full flex-col justify-center overflow-hidden border-b border-white/[0.06] bg-[#070b14] lg:min-h-[92vh]"
    >
      <WizBackdrop />

      <div className="container relative z-10 px-4 py-12 md:px-6 md:py-16 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* 좌측: 카피 */}
          <motion.div
            className="flex flex-col items-start text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <span className="text-[clamp(0.7rem,0.85vw,0.9rem)] font-bold tracking-[0.25em] text-[#00e5a0]">
                검색 · AI · 콘텐츠 · 광고를 한 팀에서
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="mt-4 text-[clamp(2.25rem,4.6vw,4.5rem)] md:mt-6 font-extrabold leading-[1.12] tracking-tight text-white"
            >
              제안서보다
              <br />
              질문이 먼저입니다
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-5 max-w-[600px] text-[clamp(1rem,1.3vw,1.25rem)] leading-relaxed text-slate-400"
            >
              위즈더플래닝은 브랜드가 검색과 AI에서 지금 어떻게 불리는지 먼저 재고,{" "}
              <span className="font-semibold text-slate-200">같은 질문으로 매주 다시 잽니다.</span>{" "}
              기획·촬영·편집·개발·광고를 외주 없이 안에서 하기 때문에 고칠 곳은 그날 고칩니다.
            </motion.p>

            <motion.div variants={fadeIn} className="mt-7 flex flex-col gap-3 min-[400px]:flex-row md:mt-9">
              <Link href="/diagnosis">
                <Button
                  size="lg"
                  className="gap-1 rounded-md bg-[#00e5a0] px-8 py-6 text-lg font-bold text-[#070b14] transition-colors duration-200 hover:bg-[#3cf0bb]"
                >
                  우리가 물어볼 질문 보기
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/how-we-measure">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-md border-slate-700 bg-transparent px-8 py-6 text-lg text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:bg-white/5 hover:text-white"
                >
                  측정 기록 전체
                </Button>
              </Link>
            </motion.div>

            {/* 신뢰 라인 */}
            <motion.div
              variants={fadeIn}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 md:mt-12"
            >
              <span>2016년부터</span>
              <span className="h-1 w-1 rounded-full bg-slate-700" />
              <span>7,000+ 광고주</span>
              <span className="h-1 w-1 rounded-full bg-slate-700" />
              <span className="text-[#00e5a0]/80">기획·촬영·편집·개발 전부 사내</span>
            </motion.div>
          </motion.div>

          {/* 우측: 상담 첫 5분 재현 — 브랜드 이름으로 측정 질문을 즉석 생성 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex justify-start lg:justify-end"
          >
            <BrandAskBox />
          </motion.div>
        </div>

        <ProofStrip />
      </div>
    </section>
  )
}
