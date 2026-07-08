"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Search,
  MessageSquareText,
  Stethoscope,
  Database,
  PenLine,
  LineChart,
  ChevronRight,
  X,
  Check,
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const PARADIGM = {
  old: {
    label: "어제까지의 검색 — SEO",
    icon: Search,
    points: [
      "고객이 키워드를 검색하고 목록을 훑어봄",
      "상위 노출을 위한 키워드·순위 경쟁",
      "클릭을 받아야 매장이 알려짐",
    ],
  },
  new: {
    label: "오늘의 검색 — GEO (AI 검색 최적화)",
    icon: MessageSquareText,
    points: [
      "고객이 AI에게 질문하고 '답 하나'를 받음",
      "AI가 인용할 만한 신뢰 데이터 경쟁",
      "AI의 답변 속에 언급되어야 선택받음",
    ],
  },
}

const REASONS = [
  {
    title: "답은 하나만 남습니다",
    desc: "AI는 목록이 아니라 결론을 말합니다. AI의 답변에 포함되지 못한 매장은 고객의 선택지에서 사라집니다.",
  },
  {
    title: "AI는 아무나 인용하지 않습니다",
    desc: "리뷰, 플레이스 정보, 웹사이트, 콘텐츠가 구조화되어 있고 일관될 때 AI는 그 매장을 신뢰하고 추천합니다.",
  },
  {
    title: "지금이 선점 타이밍입니다",
    desc: "국내 자영업 시장에서 GEO는 이제 시작 단계입니다. 먼저 최적화한 매장이 우리 동네의 'AI 추천 1순위'가 됩니다.",
  },
]

const PROCESS = [
  {
    step: "01",
    icon: Stethoscope,
    title: "AI 검색 진단",
    desc: "ChatGPT·퍼플렉시티·네이버 AI에 우리 매장이 어떻게 나오는지(혹은 안 나오는지) 진단 리포트를 드립니다.",
  },
  {
    step: "02",
    icon: Database,
    title: "매장 데이터 구조화",
    desc: "플레이스·웹사이트·메뉴·가격 정보를 AI가 읽고 신뢰할 수 있는 형태로 정리하고 일치시킵니다.",
  },
  {
    step: "03",
    icon: PenLine,
    title: "인용되는 콘텐츠 제작",
    desc: "9년간의 콘텐츠 노하우로 AI가 답변에 인용하는 리뷰·블로그·미디어 콘텐츠를 만듭니다.",
  },
  {
    step: "04",
    icon: LineChart,
    title: "AI 노출 모니터링",
    desc: "질문별 AI 답변 노출을 주기적으로 추적하고, 매월 리포트와 개선 방향을 보고합니다.",
  },
]

export default function GeoSection() {
  return (
    <section id="geo" className="w-full bg-[#f6f8f7] py-24 md:py-28">
      <div className="container px-4 md:px-6">
        {/* 헤드라인 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">WHY GEO</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            검색의 시대가 끝나고
            <br />
            <span className="text-emerald-600">추천의 시대</span>가 왔습니다
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            AI 검색 최적화(GEO, Generative Engine Optimization)는 ChatGPT·퍼플렉시티·네이버 AI 같은
            생성형 AI가 답변할 때 <strong className="text-gray-900">우리 매장을 인용하고 추천하도록</strong> 만드는
            새로운 마케팅입니다.
          </p>
        </motion.div>

        {/* SEO vs GEO 비교 */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
          {[PARADIGM.old, PARADIGM.new].map((p, idx) => {
            const isNew = idx === 1
            return (
              <motion.div
                key={p.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.12 }}
                className={
                  isNew
                    ? "rounded-2xl border-2 border-emerald-500/60 bg-[#0b1220] p-7 shadow-xl shadow-emerald-500/10"
                    : "rounded-2xl border border-gray-200 bg-white p-7"
                }
              >
                <div className="flex items-center gap-3">
                  <div
                    className={
                      isNew
                        ? "rounded-xl bg-emerald-500/15 p-2.5 text-emerald-400"
                        : "rounded-xl bg-gray-100 p-2.5 text-gray-400"
                    }
                  >
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className={isNew ? "font-bold text-white" : "font-bold text-gray-500"}>
                    {p.label}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm leading-relaxed">
                      {isNew ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
                      )}
                      <span className={isNew ? "text-slate-200" : "text-gray-500"}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* 왜 지금인가 */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <span className="text-2xl font-extrabold text-emerald-500/30">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 진행 프로세스 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            위즈더플래닝의 AI 검색 최적화 4단계
          </h3>
          <p className="mt-3 text-gray-600">
            진단부터 모니터링까지, 담당 마케터가 직접 매장을 찾아가 함께 진행합니다.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[#0b1220] p-6 text-left"
            >
              <span className="absolute -right-2 -top-4 text-6xl font-extrabold text-white/[0.06] transition-colors group-hover:text-emerald-400/10">
                {p.step}
              </span>
              <div className="w-fit rounded-xl bg-emerald-500/15 p-2.5 text-emerald-400">
                <p.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-bold text-white">{p.title}</h4>
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
          className="mx-auto mt-16 max-w-3xl rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-8 py-10 text-center shadow-xl"
        >
          <h3 className="text-xl font-extrabold text-white md:text-2xl">
            우리 가게, AI에게 물어보면 나올까요?
          </h3>
          <p className="mt-2 text-sm text-slate-400 md:text-base">
            지금 무료로 진단해 드립니다. 영업사원이 아닌 전문 마케터가 결과를 직접 설명해 드려요.
          </p>
          <Link href="#contact" className="mt-6 inline-block">
            <Button
              size="lg"
              className="gap-1 bg-[#00e5a0] px-8 font-bold text-[#070b14] hover:bg-[#3cf0bb]"
            >
              AI 검색 무료 진단 신청
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
