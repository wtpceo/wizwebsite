"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ChevronRight, Sparkles, BookOpen, TrendingDown, ArrowRight } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const GUIDES = [
  {
    href: "/guide/what-is-geo",
    icon: Sparkles,
    kicker: "GEO BASICS",
    title: "AI 검색 최적화(GEO)란?",
    desc: "SEO와 뭐가 다른지, AI는 어떤 매장을 추천하는지, 왜 지금 시작해야 하는지 — GEO의 기본을 사장님 눈높이로 정리했습니다.",
  },
  {
    href: "/guide/get-cited-by-ai",
    icon: BookOpen,
    kicker: "GEO PLAYBOOK",
    title: "우리 가게가 AI 답변에 나오게 하는 7가지 방법",
    desc: "실제 진단 데이터에서 확인된, AI에게 추천받는 매장들의 공통점 7가지를 실행 순서대로 담았습니다.",
  },
  {
    href: "/guide/why-ads-stop-working",
    icon: TrendingDown,
    kicker: "마케팅 고민 진단",
    title: "광고비는 오르는데 문의는 그대로일 때",
    desc: "광고를 늘려도 문의가 안 늘어난다면, 매장 문제가 아니라 고객의 검색 방식이 바뀐 것일 수 있습니다. 5분이면 직접 확인해볼 수 있어요.",
  },
]

export default function GuidePreview() {
  return (
    <section id="insights" className="w-full bg-[#f6f8f7] py-24 md:py-28">
      <div className="container px-4 md:px-6">
        {/* 헤드라인 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">INSIGHTS</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            AI 검색 시대의 마케팅,
            <br className="md:hidden" /> 먼저 읽어보세요
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            7,000여 광고주와 쌓은 노하우를 가이드로 정리했습니다.
            <br className="hidden md:block" />
            상담 전에 읽어보시면 대화가 훨씬 빨라집니다.
          </p>
        </motion.div>

        {/* 가이드 카드 */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {GUIDES.map((guide, i) => (
            <motion.div
              key={guide.href}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={guide.href}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] md:p-7"
              >
                <div className="w-fit rounded-xl bg-emerald-50 p-3 text-emerald-600 ring-1 ring-emerald-100">
                  <guide.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-[11px] font-bold tracking-[0.2em] text-emerald-600">
                  {guide.kicker}
                </p>
                <h3 className="mt-1.5 text-lg font-extrabold tracking-tight text-gray-900 group-hover:text-emerald-700 md:text-xl">
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{guide.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-600">
                  가이드 읽기
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 전체 보기 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 text-center"
        >
          <Link
            href="/guide"
            className="group inline-flex items-center gap-1.5 font-bold text-gray-900 underline-offset-4 hover:text-emerald-700 hover:underline"
          >
            가이드 전체 보기
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
