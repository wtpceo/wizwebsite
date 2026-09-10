"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

type Promo = {
  href: string
  image: string
  badge: string
  title: string
  desc: string
  cta: string
}

// 인사이트 목록 상단 홍보 배너. 문구·순서·개수는 이 배열만 고치면 된다.
// 이미지는 글자가 없는 아트워크이고, 한글은 화면에서 얹는다(이미지 속 한글은 깨진다).
const PROMOS: Promo[] = [
  {
    href: "/diagnosis",
    image: "/promo/promo-diagnosis.jpg",
    badge: "100% 무료",
    title: "AI 검색 진단서, 무료로 받으세요",
    desc: "ChatGPT·제미나이·네이버 AI에 우리 가게를 직접 물어보고, 노출 현황과 경쟁사 비교를 리포트로 정리해 드립니다.",
    cta: "무료 진단 신청하기",
  },
  {
    href: "/medical-geo-agency",
    image: "/promo/promo-medical.jpg",
    badge: "병원·의원 전용",
    title: "환자는 이제 AI에게 병원을 묻습니다",
    desc: "크롤러 접근 점검부터 채널 정보 정합성, 의료광고 기준을 반영한 콘텐츠까지. 병원 전용 GEO를 대행합니다.",
    cta: "병원 GEO 대행 보기",
  },
  {
    href: "/#contact",
    image: "/promo/promo-meta-ads.jpg",
    badge: "캠페인 1,000건 이상",
    title: "인스타·페이스북 광고, 전환까지 설계합니다",
    desc: "크리에이티브 테스트와 데이터 기반 운영. 소재 제작부터 예산 최적화까지 담당 마케터가 직접 관리합니다.",
    cta: "메타 광고 상담하기",
  },
  {
    href: "/site-check",
    image: "/promo/promo-sitecheck.jpg",
    badge: "가입 없이 즉시",
    title: "우리 홈페이지, AI가 읽을 수 있나요?",
    desc: "주소만 넣으면 색인 허용, 구조화 데이터, AI 크롤러 접근까지 24개 항목을 바로 점검해 드립니다.",
    cta: "무료로 진단하기",
  },
  {
    href: "/#contact",
    image: "/promo/promo-website.jpg",
    badge: "AI가 읽는 구조로",
    title: "검색과 AI가 함께 읽는 홈페이지를 만듭니다",
    desc: "서버 렌더링과 구조화 데이터는 기본입니다. 브랜드 디자인과 검색 성능, 두 가지를 처음부터 같이 잡습니다.",
    cta: "홈페이지 제작 문의",
  },
  {
    href: "/focusmedia",
    image: "/promo/promo-elevator.jpg",
    badge: "엘리베이터TV",
    title: "주민이 매일 타는 곳에서 반복 노출됩니다",
    desc: "아파트 엘리베이터 TV 광고로 지역 상권 인지도를 빠르게 올립니다. 매체 단가와 송출 지역을 안내해 드립니다.",
    cta: "매체 안내 보기",
  },
]

const INTERVAL = 6000

export default function PromoBanner() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((next: number) => setI((next + PROMOS.length) % PROMOS.length), [])

  useEffect(() => {
    if (paused) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    timer.current = setInterval(() => setI((v) => (v + 1) % PROMOS.length), INTERVAL)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [paused])

  const p = PROMOS[i]

  return (
    <section
      aria-label="위즈더플래닝 서비스 안내"
      aria-roledescription="carousel"
      className="container mx-auto max-w-6xl px-4 pt-8 md:px-6 md:pt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#070b14]">
        {/* 배경 아트워크 */}
        {PROMOS.map((slide, idx) => (
          <img
            key={slide.image}
            src={slide.image}
            alt=""
            width={1600}
            height={658}
            loading={idx === 0 ? "eager" : "lazy"}
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* 글자 가독성용 어둡게 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 to-transparent md:to-[#070b14]/10" />

        {/* 문구 */}
        <div className="relative flex min-h-[340px] flex-col justify-center px-6 py-10 md:min-h-[300px] md:px-12 md:py-12 lg:min-h-[320px]">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-[#00e5a0]/30 bg-[#00e5a0]/10 px-3 py-1 text-[11px] font-bold tracking-wide text-[#00e5a0]">
              {p.badge}
            </span>
            <h2 className="mt-4 text-[clamp(1.375rem,3vw,2.25rem)] font-extrabold leading-[1.25] tracking-tight text-white">
              <Link href={p.href} className="hover:text-[#00e5a0]">
                {p.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300 md:text-base">{p.desc}</p>
            <Link
              href={p.href}
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#00e5a0] px-5 py-2.5 text-sm font-bold text-[#070b14] transition-colors hover:bg-[#3cf0bb]"
            >
              {p.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 조작 */}
          <div className="absolute bottom-5 right-5 flex items-center gap-2 md:bottom-7 md:right-8">
            <button
              type="button"
              aria-label="이전 안내"
              onClick={() => go(i - 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#00e5a0]/60 hover:text-[#00e5a0]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-[42px] text-center text-xs font-bold tabular-nums text-white/60">
              {i + 1} / {PROMOS.length}
            </span>
            <button
              type="button"
              aria-label="다음 안내"
              onClick={() => go(i + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#00e5a0]/60 hover:text-[#00e5a0]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* 진행 점 */}
          <div className="absolute bottom-6 left-6 flex gap-1.5 md:bottom-8 md:left-12">
            {PROMOS.map((slide, idx) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`${idx + 1}번 안내로 이동`}
                aria-current={idx === i}
                onClick={() => go(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-[#00e5a0]" : "w-1.5 bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
