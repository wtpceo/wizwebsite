import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, BookOpen, Sparkles, MapPin, Stethoscope, GitCompareArrows } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"

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

// 카테고리 정의 (표시 순서)
const CATEGORIES = [
  { key: "basics", label: "GEO 기초" },
  { key: "playbook", label: "실전 전략" },
  { key: "industry", label: "업종별 가이드" },
  { key: "naver", label: "네이버·플랫폼" },
] as const

const GUIDES = [
  {
    href: "/guide/medical-geo",
    category: "industry",
    icon: Stethoscope,
    kicker: "MEDICAL GEO",
    title: "병원·의원 AI 검색 최적화(GEO) 가이드 — 의료광고법 지키면서 인용받는 법",
    desc: "AI에 인용되려다 의료법에 걸리지 않도록. 치료후기와 방문후기의 차이, 피해야 할 표현, 안전한 콘텐츠 전략을 정리했습니다.",
    date: "2026. 7. 9",
  },
  {
    href: "/guide/ai-engines-cite-differently",
    category: "basics",
    icon: GitCompareArrows,
    kicker: "GEO INSIGHT",
    title: "ChatGPT와 네이버 AI는 왜 다른 가게를 추천할까 — 엔진별 인용 출처의 차이",
    desc: "네이버 AI는 리뷰를, ChatGPT·구글은 홈페이지를 봅니다. 엔진마다 다른 출처와, 그래서 무엇을 준비해야 하는지 정리했습니다.",
    date: "2026. 7. 9",
  },
  {
    href: "/guide/what-is-geo",
    category: "basics",
    icon: Sparkles,
    kicker: "GEO BASICS",
    title: "AI 검색 최적화(GEO)란? 자영업 사장님을 위한 쉬운 설명",
    desc: "SEO와 뭐가 다른지, AI는 어떤 매장을 추천하는지, 왜 지금 시작해야 하는지 — GEO의 기본을 정리했습니다.",
    date: "2026. 7. 8",
  },
  {
    href: "/guide/get-cited-by-ai",
    category: "playbook",
    icon: BookOpen,
    kicker: "GEO PLAYBOOK",
    title: "우리 가게가 AI 답변에 나오게 하는 7가지 방법",
    desc: "실제 진단 데이터에서 확인된, AI에게 추천받는 매장들의 공통점 7가지를 실행 순서대로 담았습니다.",
    date: "2026. 7. 8",
  },
  {
    href: "/guide/naver-place-checklist",
    category: "naver",
    icon: MapPin,
    kicker: "NAVER PLACE",
    title: "네이버 플레이스 상위 노출 체크리스트 10가지",
    desc: "오늘 바로 점검할 수 있는 플레이스 관리 체크리스트. 지역 검색과 AI 인용의 공통 기반입니다.",
    date: "2026. 7. 8",
  },
]

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
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              마케팅 가이드
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              AI 검색 최적화(GEO)부터 네이버 플레이스, 업종별 전략까지 —
              <br className="hidden md:block" />
              7,000여 광고주와 쌓은 노하우를 사장님 눈높이로 정리했습니다.
            </p>
          </div>
        </section>

        {/* 카테고리별 아티클 목록 */}
        <section className="container mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
          <div className="space-y-14">
            {CATEGORIES.map((cat) => {
              const items = GUIDES.filter((g) => g.category === cat.key)
              if (items.length === 0) return null
              return (
                <div key={cat.key}>
                  <h2 className="mb-5 flex items-center gap-3 text-lg font-extrabold tracking-tight text-gray-900">
                    <span className="h-5 w-1 rounded-full bg-[#00e5a0]" />
                    {cat.label}
                    <span className="text-sm font-medium text-gray-400">{items.length}</span>
                  </h2>
                  <div className="space-y-4">
                    {items.map((g) => (
                      <Link
                        key={g.href}
                        href={g.href}
                        className="group flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] md:p-7"
                      >
                        <div className="hidden rounded-xl bg-emerald-50 p-3 text-emerald-600 ring-1 ring-emerald-100 sm:block">
                          <g.icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-bold tracking-[0.2em] text-emerald-600">{g.kicker}</p>
                          <h3 className="mt-1.5 text-lg font-extrabold tracking-tight text-gray-900 group-hover:text-emerald-700 md:text-xl">
                            {g.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">{g.desc}</p>
                          <p className="mt-3 text-xs text-gray-400">{g.date}</p>
                        </div>
                        <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-gray-300 transition-colors group-hover:text-emerald-600" />
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
