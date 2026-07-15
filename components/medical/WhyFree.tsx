"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gauge, Swords, ShieldCheck, ChevronRight } from "lucide-react"

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
    icon: Gauge,
    title: "AI 3개 엔진 실측 리포트",
    desc: "ChatGPT·퍼플렉시티·네이버 AI에서 우리 병원이 실제로 어떻게 답변되는지 엔진별로 실측합니다.",
  },
  {
    icon: Swords,
    title: "경쟁 병원과 격차 대조",
    desc: "AI가 추천하는 경쟁 병원과 항목별로 나란히 비교해, 어디서 밀리는지 정확히 찾아냅니다.",
  },
  {
    icon: ShieldCheck,
    title: "의료광고법 안전 범위 안내",
    desc: "인용은 되지만 위반이 되는 표현을 걸러내고, 안전하게 개선할 수 있는 범위를 짚어드립니다.",
  },
]

export default function WhyFree() {
  return (
    <section
      id="why-free"
      className="relative w-full overflow-hidden bg-[#0b1220] py-24 md:py-28"
    >
      <div className="geo-grid-bg absolute inset-0 opacity-50" />
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
            왜 무료인가
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            진단은 무료입니다.
            <br />
            <span className="bg-gradient-to-r from-[#00e5a0] to-sky-400 bg-clip-text text-transparent">
              병원만요.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">
            진단은 우리 병원이 AI 검색에서 지금 어떤 상태인지{" "}
            <span className="font-semibold text-slate-200">
              &lsquo;보여드리는 것&rsquo;까지 무료
            </span>
            입니다. 실제 개선(콘텐츠·홈페이지·플레이스 정비)은 유료지만, 진단 없이 시작하지
            않습니다. 병원·의원에 한해 조건 없이 무료로 드립니다.
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
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#00e5a0]/30 hover:bg-white/[0.07]"
            >
              <div className="w-fit rounded-xl bg-[#00e5a0]/15 p-2.5 text-[#00e5a0]">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 text-center"
        >
          <Link href="#apply">
            <Button
              size="lg"
              className="gap-1 bg-[#00e5a0] px-8 font-bold text-[#070b14] hover:bg-[#3cf0bb]"
            >
              무료 진단 신청하기
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
