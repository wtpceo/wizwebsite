"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Swords,
  Search,
  ChevronRight,
  ChevronLeft,
  FileCheck2,
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const POINTS = [
  {
    icon: BarChart3,
    title: "데이터로 분석합니다",
    desc: "감이 아니라 AI 엔진별 실측 데이터로 우리 매장의 현재 위치를 정확하게 진단합니다.",
  },
  {
    icon: Swords,
    title: "경쟁사와 대조합니다",
    desc: "AI가 추천하는 경쟁 매장과 항목별로 나란히 비교해, 어디서 이기고 지는지 찾아냅니다.",
  },
  {
    icon: Search,
    title: "검색어를 공략합니다",
    desc: "고객이 실제로 묻는 질문을 하나하나 측정하고, 그 검색어에서 잡히도록 공략합니다.",
  },
]

// 실제 진단 리포트 화면들
const SLIDES = [
  {
    src: "/images/report/report-1.jpg",
    tab: "AI 점유율 진단",
    caption: "네이버 AI · ChatGPT · 제미나이 — 엔진별로 우리 매장이 얼마나 언급되는지 점유율(SoV)을 측정합니다",
  },
  {
    src: "/images/report/report-2.jpg",
    tab: "오정보 파악",
    caption: "AI가 손님에게 잘못 알려주는 전화번호·위치·영업시간을 찾아내 즉시 교정 대상으로 잡습니다",
  },
  {
    src: "/images/report/report-3.jpg",
    tab: "경쟁사 비교",
    caption: "AI가 추천하는 경쟁사들의 공통점을 뽑아 우리 매장과 대조합니다 — 메워야 할 격차가 보입니다",
  },
  {
    src: "/images/report/report-4.jpg",
    tab: "격차 분석",
    caption: "인용되는 곳엔 있고 우리에겐 없는 것 — 항목별로 격차를 정리합니다",
  },
  {
    src: "/images/report/report-5.jpg",
    tab: "E-E-A-T 채점",
    caption: "AI가 인용하는 글의 요건별로 우리 페이지를 채점하고, 인용된 페이지들의 보유율과 대조합니다",
  },
  {
    src: "/images/report/report-6.jpg",
    tab: "검색어별 노출",
    caption: "고객이 실제로 묻는 질문마다 AI 답변 속 우리 언급 횟수를 추적합니다",
  },
  {
    src: "/images/report/report-7.jpg",
    tab: "인용 출처 분석",
    caption: "AI가 실제로 인용한 페이지들을 분석해 '왜 인용되는지' 구조를 밝혀냅니다",
  },
  {
    src: "/images/report/report-8.jpg",
    tab: "실행 체크리스트",
    caption: "분석에서 끝나지 않습니다 — 인용되기 위해 해야 할 일을 우선순위로 정리해 실행합니다",
  },
  {
    src: "/images/report/report-9.jpg",
    tab: "노출 액션 플랜",
    caption: "AI가 근거를 가져오는 채널(디렉토리·뉴스·유튜브·블로그)별로 공략 대상을 정합니다",
  },
]

function ReportViewer() {
  const [idx, setIdx] = useState(0)
  const slide = SLIDES[idx]

  return (
    <div className="geo-glow overflow-hidden rounded-2xl border border-white/10 bg-[#0d1424]/90">
      {/* 창 상단 바 */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex items-center gap-1.5 text-xs font-medium tracking-wide text-slate-400">
          <FileCheck2 className="h-3.5 w-3.5 text-[#00e5a0]" />
          위즈더플래닝 마케팅 진단 리포트
        </span>
        <span className="ml-auto text-[11px] tabular-nums text-slate-500">
          {idx + 1} / {SLIDES.length}
        </span>
      </div>

      {/* 탭 */}
      <div className="flex gap-1.5 overflow-x-auto border-b border-white/10 px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SLIDES.map((s, i) => (
          <button
            key={s.tab}
            onClick={() => setIdx(i)}
            className={
              i === idx
                ? "shrink-0 rounded-full bg-[#00e5a0] px-3.5 py-1.5 text-xs font-bold text-[#070b14]"
                : "shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:border-[#00e5a0]/30 hover:text-slate-200"
            }
          >
            {s.tab}
          </button>
        ))}
      </div>

      {/* 이미지 */}
      <div className="relative flex h-[340px] items-center justify-center bg-[#1c130c] sm:h-[440px] lg:h-[520px]">
        <motion.img
          key={slide.src}
          src={slide.src}
          alt={`위즈더플래닝 진단 리포트 — ${slide.tab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="max-h-full max-w-full object-contain"
        />

        {/* 이전/다음 */}
        <button
          onClick={() => setIdx((idx - 1 + SLIDES.length) % SLIDES.length)}
          aria-label="이전 화면"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#070b14]/70 p-2 text-slate-300 backdrop-blur transition-colors hover:border-[#00e5a0]/40 hover:text-[#00e5a0]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => setIdx((idx + 1) % SLIDES.length)}
          aria-label="다음 화면"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#070b14]/70 p-2 text-slate-300 backdrop-blur transition-colors hover:border-[#00e5a0]/40 hover:text-[#00e5a0]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* 캡션 */}
      <div className="border-t border-white/10 px-5 py-4 text-center">
        <p className="text-sm leading-relaxed text-slate-300">{slide.caption}</p>
        <p className="mt-1 text-[11px] tracking-wide text-slate-500">
          실제 광고주에게 전달된 진단 리포트 화면입니다 (업체 정보만 가림 처리)
        </p>
      </div>
    </div>
  )
}

export default function DiagnosisSection() {
  return (
    <section id="diagnosis" className="relative w-full overflow-hidden bg-[#070b14] py-20 md:py-28">
      <div className="geo-grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -bottom-40 left-1/3 h-[420px] w-[640px] rounded-full bg-[#00e5a0]/[0.06] blur-3xl" />

      <div className="container relative px-4 md:px-6">
        {/* 헤드라인 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
            DATA-DRIVEN DIAGNOSIS
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            감이 아니라,
            <br className="md:hidden" />{" "}
            <span className="bg-gradient-to-r from-[#00e5a0] to-sky-400 bg-clip-text text-transparent">
              데이터로 움직입니다
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">
            마케팅을 시작하기 전, 모든 광고주에게 진단 리포트를 먼저 드립니다.
            <br className="hidden md:block" />
            아래는 실제로 전달된 리포트의 화면들입니다.
          </p>
        </motion.div>

        {/* 3 포인트 */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#00e5a0]/30 hover:bg-white/[0.07]"
            >
              <div className="rounded-xl bg-[#00e5a0]/15 p-2.5 text-[#00e5a0]">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 리포트 뷰어 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <ReportViewer />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 text-center"
        >
          <Link href="#contact">
            <Button
              size="lg"
              className="gap-1 bg-[#00e5a0] px-8 font-bold text-[#070b14] hover:bg-[#3cf0bb]"
            >
              우리 매장 진단 받아보기
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
