import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { CATEGORIES, GUIDE_ARTICLES as GUIDES } from "@/lib/guide-articles"

export const metadata: Metadata = {
  title: "마케팅 가이드 — AI 검색 최적화·플레이스 실전 노하우",
  description:
    "AI 검색 최적화(GEO), 네이버 플레이스, 업종별 마케팅 실전 가이드. 위즈더플래닝이 7,000여 광고주와 쌓은 노하우를 사장님 눈높이로 정리했습니다.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "마케팅 가이드 | 위즈더플래닝",
    description:
      "AI 검색 최적화(GEO), 네이버 플레이스, 업종별 마케팅 실전 가이드 모음.",
    url: "https://wiztheplanning.com/guide",
  },
}

export default function GuidePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* 헤더 */}
        <section className="relative overflow-hidden bg-[#070b14] py-16 md:py-20">
          <div className="geo-grid-bg absolute inset-0" />
          <div className="absolute -top-32 left-1/3 h-[320px] w-[520px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />
          <div className="container relative mx-auto max-w-4xl px-4 text-center md:px-6">
            <p className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">GUIDE</p>
            <h1 className="mt-3 text-[clamp(1.875rem,3.8vw,3.75rem)] font-extrabold tracking-tight text-white">
              마케팅 가이드
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              AI 검색 최적화(GEO)부터 네이버 플레이스, 업종별 전략까지 —
              <br className="hidden md:block" />
              7,000여 광고주와 쌓은 노하우를 사장님 눈높이로 정리했습니다.
            </p>
          </div>
        </section>

        {/* 카테고리 바로가기 — 원하는 주제로 즉시 이동 */}
        <nav
          aria-label="가이드 카테고리 바로가기"
          className="sticky top-16 z-30 border-b border-gray-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <ul className="flex snap-x gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => {
                const count = GUIDES.filter((g) => g.category === cat.key).length
                if (count === 0) return null
                return (
                  <li key={cat.key} className="snap-start">
                    <a
                      href={`#${cat.key}`}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-emerald-500/50 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {cat.short}
                      <span className="text-xs font-bold text-gray-400">{count}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        {/* 최신 글 — 새로 올라온 글을 먼저 보여줌 */}
        <section className="container mx-auto max-w-5xl px-4 pt-12 md:px-6 md:pt-16">
          <h2 className="mb-5 flex items-center gap-3 text-lg font-extrabold tracking-tight text-gray-900">
            <span className="h-5 w-1 rounded-full bg-[#00e5a0]" />
            최신 글
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {GUIDES.slice(0, 3).map((g) => {
              const cat = CATEGORIES.find((c) => c.key === g.category)
              return (
                <Link
                  key={g.href}
                  href={g.href}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07]"
                >
                  <div className={`w-fit rounded-xl p-2.5 ring-1 ${cat?.tile ?? "bg-emerald-50 text-emerald-600 ring-emerald-100"}`}>
                    <g.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-[11px] font-bold tracking-[0.2em] text-emerald-600">{g.kicker}</p>
                  <h3 className="mt-1.5 line-clamp-3 text-base font-extrabold leading-snug tracking-tight text-gray-900 group-hover:text-emerald-700">
                    {g.title}
                  </h3>
                  <p className="mt-auto pt-3 text-xs text-gray-400">{g.date}</p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* 카테고리별 아티클 목록 */}
        <section className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
          <div className="space-y-12">
            {CATEGORIES.map((cat) => {
              const items = GUIDES.filter((g) => g.category === cat.key)
              if (items.length === 0) return null
              return (
                <div key={cat.key} id={cat.key} className="scroll-mt-32">
                  <h2 className="mb-5 flex items-center gap-3 text-lg font-extrabold tracking-tight text-gray-900">
                    <span className="h-5 w-1 rounded-full bg-[#00e5a0]" />
                    {cat.label}
                    <span className="text-sm font-medium text-gray-400">{items.length}</span>
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {items.map((g) => (
                      <Link
                        key={g.href}
                        href={g.href}
                        className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07]"
                      >
                        <div className={`shrink-0 rounded-xl p-2.5 ring-1 ${cat.tile}`}>
                          <g.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-bold tracking-[0.2em] text-emerald-600">{g.kicker}</p>
                          <h3 className="mt-1 line-clamp-2 text-base font-extrabold leading-snug tracking-tight text-gray-900 group-hover:text-emerald-700">
                            {g.title}
                          </h3>
                          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-600">{g.desc}</p>
                          <p className="mt-2 text-xs text-gray-400">{g.date}</p>
                        </div>
                        <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-gray-300 transition-colors group-hover:text-emerald-600" />
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <p className="mt-14 text-center text-sm text-gray-500">
            새 가이드가 매주 추가됩니다. 궁금한 주제가 있다면{" "}
            <Link href="/#contact" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
              문의하기
            </Link>
            로 알려주세요.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
