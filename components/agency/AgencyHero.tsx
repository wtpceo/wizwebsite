"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ChevronRight, ArrowUpRight, Film } from "lucide-react"
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

/**
 * 히어로 우측 패널에 노출하는 실측 기록.
 * 모두 광고 관리자·서치콘솔 원본 화면에서 확인한 값이며, 각 항목은 근거 글로 연결한다.
 * 추정치·목업 수치를 넣지 않는다(경쟁사 가짜 대시보드와의 차별점).
 */
const PROOF_ROWS = [
  {
    label: "펜션 · 메타 광고 8일",
    metric: "랜딩 조회 2,890건",
    detail: "지출 180,563원 · 조회당 62원",
    href: "/guide/case-pension-direct-booking",
  },
  {
    label: "자사 페이지 · '병원 GEO 대행'",
    metric: "네이버 AI 브리핑 1위",
    detail: "구글 검색 2위 · ChatGPT는 미노출",
    href: "/guide/ranked-but-not-in-chatgpt",
  },
  {
    label: "같은 글, 엔진별 크롤 시점",
    metric: "구글 3일 / 빙 8일",
    detail: "IndexNow 통보 후 실측",
    href: "/guide/bing-index-bottleneck",
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
        <span className="text-xs font-semibold tracking-wide text-slate-300">실측 기록</span>
        <span className="text-[11px] text-slate-500">
          보정·반올림하지 않은 원본 화면 값입니다 · 2026.08
        </span>
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
                GEO · SEO · PERFORMANCE ADS · CONTENT
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="mt-4 text-[clamp(2.25rem,4.6vw,4.5rem)] md:mt-6 font-extrabold leading-[1.12] tracking-tight text-white"
            >
              AI가 추천하는
              <br />
              브랜드를 만듭니다
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-5 max-w-[600px] text-[clamp(1rem,1.3vw,1.25rem)] leading-relaxed text-slate-400"
            >
              ChatGPT·퍼플렉시티·네이버 AI가 당신의 브랜드를 인용하게 만드는 GEO부터, 기술 SEO·메타/구글
              퍼포먼스 광고·자체 제작 콘텐츠·홈페이지까지.{" "}
              <span className="font-semibold text-slate-200">
                2016년부터 7,000여 광고주와 함께한 풀서비스 에이전시
              </span>
              , 위즈더플래닝입니다.
            </motion.p>

            <motion.div variants={fadeIn} className="mt-7 flex flex-col gap-3 min-[400px]:flex-row md:mt-9">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="gap-1 rounded-md bg-[#00e5a0] px-8 py-6 text-lg font-bold text-[#070b14] transition-colors duration-200 hover:bg-[#3cf0bb]"
                >
                  무료 AI 검색 진단
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-md border-slate-700 bg-transparent px-8 py-6 text-lg text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:bg-white/5 hover:text-white"
                >
                  포트폴리오 보기
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
              <span className="text-[#00e5a0]/80">외주 없는 자체 제작팀</span>
            </motion.div>
          </motion.div>

          {/* 우측: 배경 영상이 무엇인지 알려주는 캡션 (영상 자체는 섹션 배경) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex justify-start lg:justify-end"
          >
            <Link
              href="/theater"
              className="group max-w-sm rounded-lg border border-white/15 bg-[#070b14]/70 p-5 backdrop-blur-sm transition-colors hover:border-[#00e5a0]/40 hover:bg-[#070b14]/85"
            >
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#00e5a0]">
                <Film className="h-3.5 w-3.5" />
                위즈 극장
              </span>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                문 앞을 서성이는 저 부엉이가 <strong className="text-white">위즈</strong>입니다. AI가
                웹을 읽으러 다닐 때 실제로 겪는 일을 20초로 담았습니다.
              </p>
              <span className="mt-3 flex items-center gap-1 text-xs font-semibold text-slate-400 transition-colors group-hover:text-[#00e5a0]">
                5편 전체 보기
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.div>
        </div>

        <ProofStrip />
      </div>
    </section>
  )
}
