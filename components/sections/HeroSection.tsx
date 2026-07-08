"use client"

import Link from "next/link"
import { ChevronRight, Sparkles, MapPin, FileText, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const fadeIn = {
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

// AI 채팅 시뮬레이션 시나리오
const SCENARIOS = [
  {
    question: "강남역 근처에서 회식하기 좋은 고깃집 추천해줘",
    answer: [
      { text: "강남역 인근에서는 ", highlight: false },
      { text: "OO정육식당", highlight: true },
      {
        text: "이 가장 많이 추천됩니다. 단체석과 프라이빗 룸을 갖추고 있고, 방문자 리뷰 평점이 4.8점으로 높아요.",
        highlight: false,
      },
    ],
    sources: ["네이버 플레이스", "방문자 리뷰 1,240건", "블로그 후기"],
  },
  {
    question: "우리 아이 보낼 만한 동탄 수학학원 어디가 좋아?",
    answer: [
      { text: "동탄에서는 ", highlight: false },
      { text: "OO수학학원", highlight: true },
      {
        text: "이 자주 인용됩니다. 학년별 소수정예 커리큘럼과 입시 실적이 검증된 곳으로 학부모 만족도가 높습니다.",
        highlight: false,
      },
    ],
    sources: ["학원 웹사이트", "학부모 커뮤니티", "블로그 후기"],
  },
  {
    question: "허리가 아픈데 수원에서 잘 보는 정형외과 알려줘",
    answer: [
      { text: "수원에서는 ", highlight: false },
      { text: "OO정형외과", highlight: true },
      {
        text: "가 신뢰할 만한 곳으로 언급됩니다. 비수술 치료 프로그램이 체계적이고, 진료 정보와 환자 후기가 잘 정리되어 있어요.",
        highlight: false,
      },
    ],
    sources: ["병원 웹사이트", "네이버 플레이스", "환자 후기"],
  },
]

const SOURCE_ICONS = [MapPin, FileText, Globe]

// 채팅 시뮬레이션: 질문 타이핑 → 답변 표시 → 출처 → 다음 시나리오
function AiChatDemo() {
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [typedQuestion, setTypedQuestion] = useState("")
  const [phase, setPhase] = useState<"typing" | "thinking" | "answer" | "sources" | "reset">("typing")

  const scenario = SCENARIOS[scenarioIdx]

  useEffect(() => {
    if (phase !== "typing") return
    if (typedQuestion.length < scenario.question.length) {
      const t = setTimeout(
        () => setTypedQuestion(scenario.question.slice(0, typedQuestion.length + 1)),
        45,
      )
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setPhase("thinking"), 400)
    return () => clearTimeout(t)
  }, [phase, typedQuestion, scenario.question])

  useEffect(() => {
    if (phase === "thinking") {
      const t = setTimeout(() => setPhase("answer"), 1100)
      return () => clearTimeout(t)
    }
    if (phase === "answer") {
      const t = setTimeout(() => setPhase("sources"), 1400)
      return () => clearTimeout(t)
    }
    if (phase === "sources") {
      // 답변을 먼저 지우고(reset) 다음 시나리오 타이핑 시작
      const t = setTimeout(() => {
        setTypedQuestion("")
        setPhase("reset")
      }, 3800)
      return () => clearTimeout(t)
    }
    if (phase === "reset") {
      const t = setTimeout(() => {
        setScenarioIdx((i) => (i + 1) % SCENARIOS.length)
        setPhase("typing")
      }, 700)
      return () => clearTimeout(t)
    }
  }, [phase])

  return (
    <div className="geo-glow relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0d1424]/90 backdrop-blur">
      {/* 창 상단 바 */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex items-center gap-1.5 text-xs font-medium tracking-wide text-slate-400">
          <Sparkles className="h-3.5 w-3.5 text-[#00e5a0]" />
          AI 검색
        </span>
      </div>

      <div className="flex min-h-[320px] flex-col gap-4 px-5 py-6 sm:px-6">
        {/* 사용자 질문 */}
        {phase !== "reset" && (
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-br-md bg-slate-700/60 px-4 py-3 text-sm leading-relaxed text-slate-100">
              {typedQuestion}
              {phase === "typing" && <span className="geo-cursor ml-0.5" />}
            </div>
          </div>
        )}

        {/* AI 응답 — exit 애니메이션 없이 즉시 언마운트 (백그라운드 탭에서 잔류 방지) */}
        <>
          {phase === "thinking" && (
            <motion.div
              key={`thinking-${scenarioIdx}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-1 text-sm text-slate-400"
            >
              <span className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#00e5a0]"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </span>
              신뢰할 수 있는 매장을 찾는 중...
            </motion.div>
          )}

          {(phase === "answer" || phase === "sources") && (
            <motion.div
              key={`answer-${scenarioIdx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[92%] rounded-2xl rounded-bl-md border border-white/5 bg-white/[0.04] px-4 py-3.5 text-sm leading-relaxed text-slate-200"
            >
              {scenario.answer.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="font-bold text-[#00e5a0]">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}

              {phase === "sources" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mt-3 flex flex-wrap gap-1.5 border-t border-white/10 pt-3"
                >
                  <span className="mr-1 text-[11px] text-slate-500">인용 출처</span>
                  {scenario.sources.map((s, i) => {
                    const Icon = SOURCE_ICONS[i % SOURCE_ICONS.length]
                    return (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 * i }}
                        className="flex items-center gap-1 rounded-full border border-[#00e5a0]/25 bg-[#00e5a0]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#7ef0c8]"
                      >
                        <Icon className="h-3 w-3" />
                        {s}
                      </motion.span>
                    )
                  })}
                </motion.div>
              )}
            </motion.div>
          )}
        </>
      </div>

      {/* 하단 캡션 */}
      <div className="border-t border-white/10 px-5 py-3 text-center text-[11px] tracking-wide text-slate-500">
        AI에게 인용되는 매장만이 추천됩니다 — 그 자리를 만드는 것이 GEO입니다
      </div>
    </div>
  )
}

export default function HeroSection({ locale }: { locale?: string }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#070b14]">
      {/* 배경 레이어 */}
      <div className="geo-grid-bg absolute inset-0" />
      <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[480px] rounded-full bg-sky-500/[0.06] blur-3xl" />

      <div className="container relative px-4 py-20 md:px-6 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* 좌측: 카피 */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00e5a0]/30 bg-[#00e5a0]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#00e5a0]">
                <Sparkles className="h-3.5 w-3.5" />
                GEO · AI 검색 최적화
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl xl:text-6xl"
            >
              고객은 이제
              <br />
              검색하지 않습니다.
              <br />
              <span className="bg-gradient-to-r from-[#00e5a0] to-sky-400 bg-clip-text text-transparent">
                AI에게 질문합니다.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-6 max-w-[520px] text-base leading-relaxed text-slate-400 md:text-lg"
            >
              ChatGPT, 퍼플렉시티, 네이버 AI가 당신의 가게를 추천하게 만드는 기술.
              <br className="hidden md:block" />
              9년간 7,000여 광고주와 쌓은 로컬 마케팅 데이터로
              <span className="font-semibold text-slate-200"> AI 검색 시대의 첫 페이지</span>를
              선점하세요.
            </motion.p>

            <motion.div variants={fadeIn} className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="gap-1 bg-[#00e5a0] px-8 py-6 text-lg font-bold text-[#070b14] shadow-lg shadow-[#00e5a0]/25 transition-all duration-300 hover:bg-[#3cf0bb] hover:shadow-xl hover:shadow-[#00e5a0]/35"
                >
                  AI 검색 무료 진단
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 bg-transparent px-8 py-6 text-lg text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-white/5 hover:text-white"
                >
                  마케팅 서비스 보기
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 lg:justify-start"
            >
              <span>2016년부터 9년</span>
              <span className="h-1 w-1 rounded-full bg-slate-700" />
              <span>7,000+ 광고주</span>
              <span className="h-1 w-1 rounded-full bg-slate-700" />
              <span className="text-[#00e5a0]/80">AI 검색 최적화 전문</span>
            </motion.div>
          </motion.div>

          {/* 우측: AI 채팅 데모 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <AiChatDemo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
