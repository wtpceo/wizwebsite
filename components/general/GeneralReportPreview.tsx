"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  AlertTriangle,
  Quote,
  Swords,
  ListChecks,
  X,
  Check,
  ChevronRight,
} from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

// ⚠️ 아래 수치는 전부 리포트 "형식"을 보여주기 위한 샘플이다.
//    실제 광고주 데이터가 아니며, 화면에도 샘플임을 명시한다 (_shared/03_FACT_RULES.md)

// 블록1 — AI 엔진별 노출 점유율(SoV)
const SOV = [
  { engine: "네이버 AI", percent: 22, note: "언급 5/10" },
  { engine: "ChatGPT", percent: 15, note: "언급 3/10 · 인용 0/10" },
  { engine: "제미나이", percent: 19, note: "언급 7/10" },
]

// 블록2 — 정보 정합성(오정보)
const MISINFO = [
  { label: "네이버 AI · 영업시간", desc: "실제와 다른 영업시간을 안내" },
  { label: "ChatGPT · 전화번호", desc: "다른 가게 번호를 우리 가게 번호로 안내" },
  { label: "ChatGPT · 위치", desc: "위치 확인이 불가하다고 답변" },
  { label: "제미나이 · 예약", desc: "예약 방법을 부분 정보만 안내" },
  { label: "네이버 AI · 주차", desc: "무료 주차가 가능하다고 답변 (실제와 다름)" },
]

// 블록3 — 인용 출처
const SOURCES = [
  { name: "개별 웹사이트 (가게 홈페이지)", percent: 41, tag: "있음", tone: "own" },
  { name: "지도·예약·업종 디렉토리", percent: 27, tag: "공략 대상", tone: "target" },
  { name: "블로그 (네이버·티스토리)", percent: 12, tag: "공략 대상", tone: "target" },
  { name: "SNS", percent: 9, tag: "", tone: "neutral" },
  { name: "검색엔진", percent: 6, tag: "", tone: "neutral" },
  { name: "유튜브", percent: 4, tag: "", tone: "neutral" },
  { name: "공공·협회", percent: 1, tag: "", tone: "neutral" },
]

// 블록4 — 경쟁사 비교
const RIVAL_TRAITS = [
  "메뉴·서비스 정보가 정리돼 있음",
  "최근 리뷰가 꾸준히 쌓임",
  "영업시간·주차 정보가 일치",
  "예약·문의 경로가 명확함",
]

// 블록5 — 액션 플랜
const ACTIONS = [
  "H1·H2로 콘텐츠 구조화",
  "방문 후기 섹션 추가",
  "메뉴·서비스 정보 명확·투명하게",
  "가격 정보 표시",
  "FAQ 섹션 추가",
  "예약·문의 기능 통합",
  "영업시간·주차·위치 채널 간 통일",
  "카카오톡 등 직접 채널 링크",
  "schema 마크업(LocalBusiness·FAQPage)",
  "강점·경력 등 전문성 콘텐츠",
]

function GlassCard({
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#00e5a0]/30 md:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-[#00e5a0]/15 p-2.5 text-[#00e5a0]">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00e5a0]/80">
            {eyebrow}
          </span>
          <h3 className="text-lg font-bold text-white md:text-xl">{title}</h3>
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </motion.div>
  )
}

export default function GeneralReportPreview() {
  return (
    <section
      id="report-preview"
      className="relative w-full overflow-hidden bg-[#070b14] py-20 md:py-28"
    >
      <div className="geo-grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -bottom-40 left-1/3 h-[420px] w-[640px] rounded-full bg-[#00e5a0]/[0.06] blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
            SAMPLE REPORT
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            진단서에 이런 내용이 담깁니다
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">
            실제 광고주에게 전달된 리포트의 형식입니다 (가게 정보는 익명 처리).
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-8 max-w-4xl text-center text-xs tracking-wide text-slate-500"
        >
          아래는 샘플 가게(카페) 진단 예시입니다. 모든 수치는 형식을 보여주기 위한 샘플 리포트 예시입니다.
        </motion.p>

        <div className="mx-auto mt-8 grid max-w-4xl gap-5">
          {/* 블록1 — SoV */}
          <GlassCard
            icon={BarChart3}
            eyebrow="01 · AI 노출 점유율"
            title="AI 엔진별 노출 점유율(SoV)"
          >
            <ul className="space-y-5">
              {SOV.map((s) => (
                <li key={s.engine}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-slate-200">{s.engine}</span>
                    <span className="text-sm text-slate-400">
                      <strong className="text-[#00e5a0]">{s.percent}%</strong>{" "}
                      <span className="text-slate-500">({s.note})</span>
                    </span>
                  </div>
                  <div
                    className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10"
                    role="img"
                    aria-label={`${s.engine} 점유율 ${s.percent}%`}
                  >
                    <div
                      className="h-2 rounded-full bg-[#00e5a0]"
                      style={{ width: `${s.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              SoV(점유율) = 카테고리 추천 답변에서 우리 가게가 언급된 비율.
            </p>
          </GlassCard>

          {/* 블록2 — 오정보 */}
          <GlassCard
            icon={AlertTriangle}
            eyebrow="02 · 정보 정합성"
            title="AI가 손님에게 잘못 안내하는 정보"
          >
            <ul className="space-y-3">
              {MISINFO.map((m) => (
                <li key={m.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-300">
                    <strong className="font-semibold text-slate-100">{m.label}:</strong>{" "}
                    {m.desc}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              AI가 틀린 정보를 손님에게 말하면 즉시 교정 대상입니다.
            </p>
          </GlassCard>

          {/* 블록3 — 인용 출처 */}
          <GlassCard
            icon={Quote}
            eyebrow="03 · 인용 출처"
            title="AI는 어디서 가게 정보를 가져올까요?"
          >
            <ul className="space-y-4">
              {SOURCES.map((s) => (
                <li key={s.name}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-200">
                      {s.name}
                      {s.tag && (
                        <span
                          className={
                            s.tone === "own"
                              ? "rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-400"
                              : "rounded-full bg-[#00e5a0]/15 px-2 py-0.5 text-[10px] font-bold text-[#00e5a0]"
                          }
                        >
                          {s.tag}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-slate-400">
                      {s.percent}%
                    </span>
                  </div>
                  <div
                    className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10"
                    role="img"
                    aria-label={`${s.name} 인용 비중 ${s.percent}%`}
                  >
                    <div
                      className={
                        s.tone === "own"
                          ? "h-2 rounded-full bg-emerald-400"
                          : s.tone === "target"
                            ? "h-2 rounded-full bg-[#00e5a0]"
                            : "h-2 rounded-full bg-sky-400/70"
                      }
                      style={{ width: `${s.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              인용 비중이 큰 채널 중 &lsquo;공략 대상&rsquo;을 우선 확보해 AI 인용 가능성을 높입니다.
            </p>
          </GlassCard>

          {/* 블록4 — 경쟁사 비교 */}
          <GlassCard
            icon={Swords}
            eyebrow="04 · 경쟁사 비교"
            title="추천받는 가게들의 공통점"
          >
            <div className="flex flex-wrap gap-2">
              {RIVAL_TRAITS.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-200"
                >
                  <Check className="h-3.5 w-3.5 text-[#00e5a0]" />
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xs text-slate-500">우리 가게 리뷰</p>
                <p className="mt-1 text-2xl font-extrabold text-white">
                  412<span className="text-base font-bold text-slate-400">건</span>
                </p>
              </div>
              <div className="rounded-xl border border-[#00e5a0]/20 bg-[#00e5a0]/[0.06] p-4">
                <p className="text-xs text-slate-500">경쟁 가게 리뷰</p>
                <p className="mt-1 text-2xl font-extrabold text-[#00e5a0]">
                  약 1,180<span className="text-base font-bold text-[#00e5a0]/70">건</span>
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              리뷰 격차 약 2.9배 — AI가 신뢰하는 &lsquo;누적 근거&rsquo;에서 밀리고 있습니다.
            </p>
          </GlassCard>

          {/* 블록5 — 액션 플랜 */}
          <GlassCard
            icon={ListChecks}
            eyebrow="05 · 액션 플랜"
            title="AI에 인용되려면 무엇을 해야 하나 (10)"
          >
            <ol className="grid gap-3 sm:grid-cols-2">
              {ACTIONS.map((a, i) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00e5a0]/15 text-xs font-bold text-[#00e5a0]">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-300">{a}</span>
                </li>
              ))}
            </ol>
          </GlassCard>
        </div>

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
              이 진단서를 무료로 받아보기
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
