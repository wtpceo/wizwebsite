"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

type Slide = {
  href: string
  image: string
  label: string
  date: string
  title: string
  desc: string
  cta: string
}

// 목록 맨 위 홍보 배너. 가이드 글과 서비스 페이지를 섞어 돌린다.
// 순서를 바꾸거나 새 글을 올릴 때는 이 배열만 고치면 된다.
const SLIDES: Slide[] = [
  {
    href: "/how-we-measure",
    image: "/tools/realgeo-dashboard.jpg",
    label: "위즈더플래닝 측정 방식",
    date: "2026.09.09",
    title: "관제 화면 6장을 그대로 공개합니다",
    desc: "AI 검색 노출을 감이 아니라 자체 개발한 관제 시스템으로 매주 측정합니다. 우리 회사 점수가 100점 만점에 18점인 것까지 가리지 않았습니다.",
    cta: "관제 화면 보기",
  },
  {
    href: "/guide/case-dental-llms-factsheet",
    image: "/covers/case-dental-llms-factsheet.jpg",
    label: "실제 사례",
    date: "2026.09.10",
    title: "3쪽짜리 사이트가 167쪽보다 먼저 인용됐습니다",
    desc: "치과 홈페이지를 새로 만들며 GEO를 함께 설계한 51일의 기록. AI 답변 속 한 문장으로 인용 출처를 역추적한 과정을 그대로 적었습니다.",
    cta: "사례 읽기",
  },
  {
    href: "/site-check",
    image: "/tools/realgeo-site-audit.jpg",
    label: "무료 진단 도구",
    date: "상시 운영",
    title: "우리 홈페이지, AI가 읽을 수 있는 상태인가요?",
    desc: "주소만 넣으면 색인 허용, 구조화 데이터, AI 크롤러 접근까지 24개 항목을 즉시 점검합니다. 가입도 결제도 없습니다.",
    cta: "무료로 진단하기",
  },
  {
    href: "/guide/naver-ai-briefing-vs-web-tab",
    image: "/covers/naver-ai-briefing-vs-web-tab.jpg",
    label: "자체 실측",
    date: "2026.09.10",
    title: "웹문서엔 없는데 AI 브리핑엔 첫 출처였습니다",
    desc: "같은 검색어에서 두 화면의 결과가 갈립니다. 순위가 떨어졌다 싶을 때 무엇부터 확인해야 하는지 저희 사례로 정리했습니다.",
    cta: "실측 기록 보기",
  },
]

const INTERVAL = 7000

export default function FeaturedBanner() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((next: number) => setI((next + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    if (paused) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    timer.current = setInterval(() => setI((v) => (v + 1) % SLIDES.length), INTERVAL)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [paused])

  const s = SLIDES[i]

  return (
    <section
      aria-label="추천 콘텐츠"
      className="container mx-auto max-w-6xl px-4 pt-10 md:px-6 md:pt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="text-[11px] font-bold tracking-[0.25em] text-gray-400">FEATURED</p>

      <div className="mt-4 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm md:grid md:grid-cols-5">
        {/* 이미지 */}
        <Link href={s.href} className="group block md:col-span-3">
          <div className="aspect-[16/10] overflow-hidden bg-slate-100 md:aspect-auto md:h-full">
            {SLIDES.map((slide) => (
              <img
                key={slide.href}
                src={slide.image}
                alt=""
                width={1200}
                height={675}
                loading="eager"
                className={`h-full w-full object-cover transition-opacity duration-500 ${
                  slide.href === s.href ? "opacity-100" : "hidden opacity-0"
                }`}
              />
            ))}
          </div>
        </Link>

        {/* 텍스트 */}
        <div className="flex flex-col justify-center p-6 md:col-span-2 md:p-9">
          <p className="flex items-center gap-2 text-xs font-bold">
            <span className="text-emerald-600">{s.label}</span>
            <span className="h-3 w-px bg-gray-200" />
            <span className="font-medium text-gray-400">{s.date}</span>
          </p>

          <h2 className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-gray-900 md:text-2xl">
            <Link href={s.href} className="hover:text-emerald-700">
              {s.title}
            </Link>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.desc}</p>

          <div className="mt-6 flex items-center justify-between gap-4">
            <Link
              href={s.href}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 underline-offset-4 hover:underline"
            >
              {s.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="이전 추천 콘텐츠"
                onClick={() => go(i - 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-emerald-500/50 hover:text-emerald-700"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-[42px] text-center text-xs font-bold tabular-nums text-gray-400">
                {i + 1} / {SLIDES.length}
              </span>
              <button
                type="button"
                aria-label="다음 추천 콘텐츠"
                onClick={() => go(i + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-emerald-500/50 hover:text-emerald-700"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
