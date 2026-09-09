"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Tv, Building2, Users, TrendingUp, ChevronRight, ArrowRight,
  CheckCircle, MapPin, Clock, Eye, Target, Megaphone, BarChart3,
  Home, GraduationCap, ShoppingBag, Utensils, Dumbbell, Scissors,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import ContactSection from "@/components/sections/ContactSection"

/* ────────────────────────────────────────────────────────────
   상수 데이터 (렌더 중 Math.random 금지 → 고정 배열/인덱스 기반)
   ──────────────────────────────────────────────────────────── */

// 히어로 장식용 TV 글리프 — 위치/크기/딜레이 고정
const HERO_GLYPHS = [
  { top: "16%", left: "8%", size: 34, delay: 0 },
  { top: "68%", left: "13%", size: 26, delay: 0.8 },
  { top: "28%", left: "84%", size: 40, delay: 0.4 },
  { top: "74%", left: "80%", size: 28, delay: 1.2 },
  { top: "48%", left: "92%", size: 22, delay: 0.6 },
] as const

const STATS = [
  { icon: Building2, value: 6700, label: "설치 아파트 단지", suffix: "+" },
  { icon: Tv, value: 91000, label: "엘리베이터TV", suffix: "+" },
  { icon: Users, value: 1000, label: "일일 시청자", suffix: "만+" },
  { icon: TrendingUp, value: 95, label: "시청 호감도", suffix: "%" },
] as const

const REASONS = [
  {
    no: "01",
    title: "압도적인 노출 빈도",
    highlight: "TV 광고 대비 3.2배",
    desc: "매일 반복되는 노출로 확실한 브랜드 각인 효과를 만듭니다.",
  },
  {
    no: "02",
    title: "95%의 시청 호감도",
    highlight: "신뢰받는 생활 정보 매체",
    desc: "입주민에게 거부감 없이 자연스럽게 메시지를 전달합니다.",
  },
  {
    no: "03",
    title: "집중도 높은 폐쇄 공간",
    highlight: "평균 탑승 108초",
    desc: "시선을 뺏는 방해 요소 없이 온전히 광고에 집중되는 순간입니다.",
  },
] as const

const STRENGTHS = [
  {
    icon: Eye,
    title: "압도적인 노출량",
    desc: "하루 평균 1,000만 명이 4.3회씩 반복 시청하는 강력한 노출 효과.",
  },
  {
    icon: Target,
    title: "정밀한 지역 타겟팅",
    desc: "원하는 지역의 아파트 단지만 선별해 낭비 없이 집행합니다.",
  },
  {
    icon: Clock,
    title: "반복 노출 효과",
    desc: "출퇴근·일상 동선에서 하루에도 여러 번 자연스럽게 각인됩니다.",
  },
  {
    icon: MapPin,
    title: "동네 상권 최적화",
    desc: "매장 반경 내 아파트 주민에게 광고가 직접 도달합니다.",
  },
] as const

const BUSINESSES = [
  { icon: Utensils, name: "음식점·카페", desc: "배달앱보다 효과적인 동네 홍보" },
  { icon: Scissors, name: "뷰티샵", desc: "신규 고객 유치 및 인지도 상승" },
  { icon: Dumbbell, name: "피트니스", desc: "주변 주민 타겟 회원 모집" },
  { icon: ShoppingBag, name: "소매점", desc: "동네 단골 고객 확보" },
  { icon: GraduationCap, name: "학원·교육", desc: "학부모 대상 효과적 홍보" },
  { icon: Home, name: "부동산·인테리어", desc: "이사 예정 고객 타겟팅" },
] as const

const COVERAGE = [
  "서울 전역 4,600개 아파트 단지",
  "수도권 61,000대 엘리베이터TV",
  "프라임 오피스 및 지식산업센터",
] as const

const PERFORMANCE = [
  { label: "평균 시청 횟수", value: "4.3회", unit: "/일", width: "86%", bar: "bg-orange-400" },
  { label: "광고 인지율", value: "87", unit: "%", width: "87%", bar: "bg-amber-400" },
  { label: "구매 전환 의향", value: "62", unit: "%", width: "62%", bar: "bg-[#00e5a0]" },
] as const

const DIFFERENTIATORS = [
  {
    icon: Megaphone,
    title: "공식 총판의 유리한 조건",
    desc: "포커스미디어 공식 파트너로서\n가장 합리적이고 유리한 조건을\n직접 제안드립니다.",
  },
  {
    icon: Target,
    title: "온·오프라인 통합 마케팅",
    desc: "엘리베이터TV 광고에\nAI 검색 최적화·네이버 마케팅을 연계해\n시너지를 극대화합니다.",
  },
  {
    icon: Users,
    title: "9년의 검증된 노하우",
    desc: "7,000여 곳의 광고주가 선택한\n데이터 기반 성공 전략을\n그대로 적용해드립니다.",
  },
] as const

/* ────────────────────────────────────────────────────────────
   숫자 카운트업 (rAF 기반, Math.random 미사용)
   ──────────────────────────────────────────────────────────── */
function CountUp({ value, suffix = "", duration = 1800 }: { value: number; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return
    let raf = 0
    let startTime = 0
    const step = (t: number) => {
      if (!startTime) startTime = t
      const progress = Math.min((t - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setDisplay(Math.round(value * eased))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

/* 섹션 헤더 (키커 + 제목 + 설명) */
function SectionHead({
  kicker,
  children,
  sub,
  light = false,
}: {
  kicker: string
  children: React.ReactNode
  sub?: string
  light?: boolean
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
      <span className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase">{kicker}</span>
      <h2
        className={`mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {children}
      </h2>
      {sub && (
        <p className={`mt-5 text-lg md:text-xl ${light ? "text-slate-400" : "text-gray-500"}`}>{sub}</p>
      )}
    </div>
  )
}

const viewportOnce = { once: true, amount: 0.2 } as const

/* ════════════════════════════════════════════════════════════ */

export default function FocusMediaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />

      <main className="flex-1">
        {/* ───────── 히어로 ───────── */}
        <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#070b14]">
          {/* 배경 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/focusmedia/data-map.jpg')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-[#070b14]/85" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/70 to-[#070b14]" />
            <div className="geo-grid-bg absolute inset-0 opacity-40" />
            {/* 포커스미디어 오렌지 글로우 */}
            <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-orange-500/[0.14] blur-[150px]" />
            {/* 위즈 민트 보조 글로우 */}
            <div className="absolute -bottom-48 -right-32 h-[560px] w-[560px] rounded-full bg-[#00e5a0]/[0.08] blur-[160px]" />
          </div>

          {/* 장식 TV 글리프 (고정 위치, 은은한 상하 모션) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {HERO_GLYPHS.map((g, i) => (
              <motion.div
                key={i}
                className="absolute text-white/[0.06]"
                style={{ top: g.top, left: g.left }}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: g.delay }}
              >
                <Tv size={g.size} />
              </motion.div>
            ))}
          </div>

          <div className="container relative z-10 mx-auto px-4 py-24">
            <div className="mx-auto max-w-4xl text-center">
              {/* 배지 */}
              <motion.div
                initial={{ y: -12 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span className="text-sm font-bold tracking-wide text-orange-300">포커스미디어 공식 총판</span>
              </motion.div>

              {/* 헤드라인 */}
              <motion.h1
                initial={{ y: 24 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-8 text-[clamp(2.25rem,5.5vw,6rem)] font-extrabold leading-[1.12] tracking-tight text-white"
              >
                서울 아파트 엘리베이터
                <br className="hidden md:block" />{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  50.3%
                </span>
                를 장악하다
              </motion.h1>

              {/* 서브카피 */}
              <motion.p
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-slate-300 md:text-xl"
              >
                하루 <span className="font-bold text-white">1,000만 명</span>이 시청하는 강력한 매체력.
                <br className="hidden md:block" />
                <span className="font-bold text-white">엘리베이터TV</span>로 우리 동네 상권을 완벽하게 선점하세요.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button
                  size="lg"
                  className="group h-14 rounded-full bg-[#00e5a0] px-9 text-base font-bold text-[#070b14] shadow-lg shadow-[#00e5a0]/25 transition-all duration-300 hover:bg-[#3cf0bb] hover:shadow-xl hover:shadow-[#00e5a0]/35"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  무료 견적 받기
                  <ChevronRight className="ml-1.5 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-2 border-white/20 bg-white/[0.03] px-9 text-base font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
                  onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                >
                  서비스 소개서 보기
                </Button>
              </motion.div>

              {/* 신뢰 지표 */}
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-400" /> 6,700+ 아파트 단지
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-400" /> 91,000+ 엘리베이터TV
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-400" /> 9년 · 7,000여 광고주
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────── 통계 스트립 (다크 → 라이트 전환 오버랩) ───────── */}
        <section className="bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
              className="-mt-16 grid grid-cols-2 gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl shadow-black/5 md:grid-cols-4 md:gap-6 md:p-10"
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center px-2 text-center md:border-r md:border-gray-100 md:last:border-none"
                >
                  <div className="mb-4 rounded-2xl bg-orange-50 p-3 ring-1 ring-orange-100">
                    <s.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-sm font-medium text-gray-500 md:text-base">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───────── 왜 엘리베이터TV인가 ───────── */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionHead
              kicker="Why Elevator TV"
              sub="스마트폰마저 잠시 멈추는 순간, 광고에 온전히 집중되는 유일한 공간."
            >
              왜 <span className="text-orange-600">엘리베이터TV</span> 광고인가요?
            </SectionHead>

            {/* 3가지 이유 */}
            <div className="grid gap-6 md:grid-cols-3">
              {REASONS.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/[0.07]"
                >
                  <span className="text-4xl font-extrabold tracking-tight text-orange-500/25 transition-colors group-hover:text-orange-500/60">
                    {r.no}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">{r.title}</h3>
                  <p className="mt-2 text-sm font-bold text-orange-600">{r.highlight}</p>
                  <p className="mt-3 leading-relaxed text-gray-600">{r.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* 보조 카드 2개: 동네 상권 직격타 / 매출 상승 */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-gray-200 bg-[#f6f8f7] p-8 transition-colors hover:border-emerald-500/40"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600 ring-1 ring-emerald-100">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">동네 상권 직격타</h3>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  우리 매장 반경 <span className="font-bold text-gray-900">500m 내 아파트 주민</span>에게만{" "}
                  <span className="font-bold text-emerald-600">핀셋 타겟팅</span>하여 낭비 없는 광고가 가능합니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#0b1220] p-8"
              >
                <div className="geo-grid-bg absolute inset-0 opacity-50" />
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl transition-colors group-hover:bg-orange-500/20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-orange-500/15 p-3 text-orange-400">
                      <TrendingUp className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white">확실한 매출 상승</h3>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-slate-400">
                    <span className="font-bold text-orange-400">“엘리베이터에서 봤어요”</span>
                    <br />
                    실제 방문 고객들의 생생한 후기가 증명합니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────── 광고 강점 (id=benefits) ───────── */}
        <section id="benefits" className="bg-[#f6f8f7] py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionHead
              kicker="Strong Point"
              sub="데이터로 증명된 광고 효과, 포커스미디어와 위즈더플래닝이 약속합니다."
            >
              엘리베이터TV 광고의 <span className="text-orange-600">강력한 효과</span>
            </SectionHead>

            <div className="grid gap-6 md:grid-cols-2">
              {STRENGTHS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-start gap-6 rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/[0.07]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 ring-1 ring-orange-100 transition-colors duration-300 group-hover:bg-orange-500">
                    <s.icon className="h-7 w-7 text-orange-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-600">
                      {s.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── 추천 업종 ───────── */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionHead kicker="Best Fit" sub="동네 주민을 타겟으로 하는 모든 오프라인 매장에 필수입니다.">
              이런 업종에 <span className="text-orange-600">특히 효과적</span>입니다
            </SectionHead>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BUSINESSES.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                  className="group flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/[0.06]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 transition-colors group-hover:bg-orange-100">
                    <b.icon className="h-7 w-7 text-gray-600 transition-colors group-hover:text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{b.name}</h3>
                    <p className="mt-0.5 text-sm text-gray-500 break-keep">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── 커버리지 + 퍼포먼스 (다크) ───────── */}
        <section className="bg-white pb-24 md:pb-32">
          <div className="container mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-[#0b1220] shadow-2xl"
            >
              <div className="geo-grid-bg absolute inset-0 opacity-50" />
              <div className="absolute -top-32 right-0 h-[320px] w-[480px] rounded-full bg-orange-500/[0.09] blur-3xl" />
              <div className="absolute -bottom-32 left-0 h-[320px] w-[420px] rounded-full bg-[#00e5a0]/[0.06] blur-3xl" />

              <div className="relative z-10 grid items-center gap-12 p-8 md:grid-cols-2 md:p-14 lg:p-16">
                {/* 좌: 커버리지 */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">Coverage</span>
                  <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
                    대한민국 <span className="text-orange-400">주요 랜드마크</span>를<br />
                    모두 커버합니다
                  </h2>
                  <ul className="mt-8 space-y-4">
                    {COVERAGE.map((c, i) => (
                      <li key={i} className="group flex items-center gap-4">
                        <div className="rounded-full bg-white/[0.06] p-2 text-slate-300 transition-colors duration-300 group-hover:bg-orange-400 group-hover:text-[#0b1220]">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <span className="text-lg text-slate-300 transition-colors group-hover:text-white">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 우: 퍼포먼스 카드 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="rounded-xl bg-orange-400 p-3 text-[#0b1220]">
                      <BarChart3 className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">광고 효과 퍼포먼스</h3>
                      <p className="text-sm text-slate-400">실제 집행 데이터 기준</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {PERFORMANCE.map((p, i) => (
                      <div key={i}>
                        <div className="mb-2 flex items-end justify-between">
                          <span className="font-medium text-slate-300">{p.label}</span>
                          <span className="text-2xl font-bold text-orange-400">
                            {p.value}
                            <span className="ml-1 text-sm font-normal text-slate-400">{p.unit}</span>
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: p.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                            className={`h-full rounded-full ${p.bar}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────── 위즈더플래닝 차별점 ───────── */}
        <section className="bg-[#f6f8f7] py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00b57e]">Why WizThePlanning</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 md:text-5xl">
                왜 <span className="text-emerald-600">위즈더플래닝</span>이어야 할까요?
              </h2>
              <p className="mt-5 text-lg text-gray-500 md:text-xl">
                공식 총판의 조건, 통합 마케팅 역량, 9년의 노하우까지.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {DIFFERENTIATORS.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 text-center transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07]"
                >
                  <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#00e5a0] transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 transition-colors duration-300 group-hover:bg-[#00e5a0]">
                    <d.icon className="h-9 w-9 text-emerald-600 transition-colors duration-300 group-hover:text-[#070b14]" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{d.title}</h3>
                  <p className="mt-3 whitespace-pre-line leading-relaxed text-gray-600">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── 최종 CTA ───────── */}
        <section className="bg-white pb-24 md:pb-28">
          <div className="container mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1220] to-[#101b2e] p-12 text-center md:p-20"
            >
              <div className="geo-grid-bg absolute inset-0 opacity-50" />
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center rounded-2xl bg-orange-500/15 p-4">
                  <Tv className="h-10 w-10 text-orange-400" />
                </div>
                <h2 className="mt-8 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                  우리 동네 1등 매장,
                  <br />
                  <span className="text-[#00e5a0]">지금 바로 시작하세요</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-slate-400 md:text-xl">
                  전문가의 무료 컨설팅으로 우리 매장에 딱 맞는 광고 전략과 견적을 받아보세요.
                </p>
                <div className="mt-10">
                  <Button
                    size="lg"
                    className="group h-14 rounded-full bg-[#00e5a0] px-10 text-base font-bold text-[#070b14] shadow-lg shadow-[#00e5a0]/25 transition-all duration-300 hover:bg-[#3cf0bb] hover:shadow-xl hover:shadow-[#00e5a0]/35"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    무료 견적 · 상담 신청하기
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="mt-5 text-sm text-slate-500">
                    * 상담 신청 시 100% 무료로 예상 견적서를 보내드립니다
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <ContactSection variant="redOrange" />
      <Footer />
    </div>
  )
}
