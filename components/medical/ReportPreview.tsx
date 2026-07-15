"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

// 블록1 — AI 엔진별 노출 점유율(SoV)
const SOV = [
  { engine: "네이버 AI", percent: 24, note: "언급 6/10" },
  { engine: "ChatGPT", percent: 18, note: "언급 4/10 · 인용 0/10" },
  { engine: "제미나이", percent: 20, note: "언급 8/10" },
]

// 블록2 — 정보 정합성(오정보)
const MISINFO = [
  {
    label: "네이버 AI · 주차",
    desc: "무료 주차가 가능하다고 답변 (실제와 다름)",
  },
  {
    label: "ChatGPT · 전화번호",
    desc: "다른 병원 번호를 우리 병원 번호로 안내",
  },
  {
    label: "ChatGPT · 위치",
    desc: "위치 확인이 불가하다고 답변",
  },
  {
    label: "제미나이 · 예약",
    desc: "예약 방법을 부분 정보만 안내",
  },
  {
    label: "네이버 AI · 진료시간",
    desc: "실제와 다른 진료시간을 안내",
  },
]

// 블록3 — 인용 출처
const SOURCES = [
  { name: "개별 웹사이트 (병원 홈페이지)", percent: 43, tag: "있음", tone: "own" },
  { name: "의료 디렉토리·플랫폼", percent: 25, tag: "공략 대상", tone: "target" },
  { name: "블로그 (네이버·티스토리)", percent: 10, tag: "공략 대상", tone: "target" },
  { name: "SNS", percent: 8, tag: "", tone: "neutral" },
  { name: "검색엔진", percent: 7, tag: "", tone: "neutral" },
  { name: "유튜브", percent: 5, tag: "", tone: "neutral" },
  { name: "공공·협회", percent: 1, tag: "", tone: "neutral" },
]

// 블록4 — 경쟁사 비교
const RIVAL_TRAITS = [
  "정밀 검사 맞춤형 상담",
  "숙련된 전문의 진료",
  "최신 의료 장비",
  "환자 편의 서비스·사후 관리",
]

// 블록5 — 액션 플랜
const ACTIONS = [
  "H1·H2로 콘텐츠 구조화",
  "방문후기(치료후기 아님) 섹션 추가",
  "시술·서비스 정보 명확·투명하게",
  "가격 정보 표시",
  "FAQ 섹션 추가",
  "예약·상담 기능 통합",
  "의료진 상세 프로필(경력·전문분야)",
  "카카오톡 등 직접 채널 링크",
  "schema 마크업(MedicalOrganization·FAQPage)",
  "강점·장비·경력 등 전문성 콘텐츠",
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

export default function ReportPreview() {
  return (
    <section
      id="report-preview"
      className="relative w-full overflow-hidden bg-[#070b14] py-20 md:py-28"
    >
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
            SAMPLE REPORT
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            진단서에 이런 내용이 담깁니다
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">
            실제 광고주에게 전달된 리포트의 형식입니다 (병원 정보는 익명 처리).
          </p>
        </motion.div>

        {/* 샘플 안내 */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-8 max-w-4xl text-center text-xs tracking-wide text-slate-500"
        >
          아래는 샘플 병원(안과) 진단 예시입니다. 모든 수치는 형식을 보여주기 위한 샘플 리포트 예시입니다.
        </motion.p>

        {/* 진단서 블록들 */}
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
              SoV(점유율) = 카테고리 추천 답변에서 우리 병원이 언급된 비율.
            </p>
          </GlassCard>

          {/* 블록2 — 오정보 */}
          <GlassCard
            icon={AlertTriangle}
            eyebrow="02 · 정보 정합성"
            title="AI가 환자에게 잘못 안내하는 정보 6건"
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
              AI가 틀린 정보를 환자에게 말하면 즉시 교정 대상입니다.
            </p>
          </GlassCard>

          {/* 블록3 — 인용 출처 */}
          <GlassCard
            icon={Quote}
            eyebrow="03 · 인용 출처"
            title="AI는 어디서 병원 정보를 가져올까요?"
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
            title="추천받는 병원들의 공통점"
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
                <p className="text-xs text-slate-500">우리 병원 리뷰</p>
                <p className="mt-1 text-2xl font-extrabold text-white">
                  2,008<span className="text-base font-bold text-slate-400">건</span>
                </p>
              </div>
              <div className="rounded-xl border border-[#00e5a0]/20 bg-[#00e5a0]/[0.06] p-4">
                <p className="text-xs text-slate-500">경쟁사 리뷰</p>
                <p className="mt-1 text-2xl font-extrabold text-[#00e5a0]">
                  약 5,907<span className="text-base font-bold text-[#00e5a0]/70">건</span>
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
              이 진단서를 무료로 받아보기
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
