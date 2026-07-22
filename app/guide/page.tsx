import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, BookOpen, Sparkles, MapPin, Stethoscope, GitCompareArrows, Smile, Gem, TrendingDown, ShieldCheck, Car, ShieldAlert } from "lucide-react"
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

// 카테고리 정의 (표시 순서 + 스캔용 짧은 라벨/색상)
const CATEGORIES = [
  { key: "concern", label: "이런 고민, 있으세요?", short: "고민 진단", tile: "bg-amber-50 text-amber-600 ring-amber-100" },
  { key: "case", label: "실제 사례", short: "실제 사례", tile: "bg-emerald-50 text-emerald-600 ring-emerald-100" },
  { key: "basics", label: "GEO 기초", short: "GEO 기초", tile: "bg-sky-50 text-sky-600 ring-sky-100" },
  { key: "playbook", label: "실전 전략", short: "실전 전략", tile: "bg-violet-50 text-violet-600 ring-violet-100" },
  { key: "industry", label: "업종별 가이드", short: "업종별", tile: "bg-rose-50 text-rose-600 ring-rose-100" },
  { key: "naver", label: "네이버·플랫폼", short: "네이버", tile: "bg-lime-50 text-lime-700 ring-lime-100" },
] as const

const GUIDES = [
  {
    href: "/guide/case-urology-clinic",
    category: "case",
    icon: ShieldAlert,
    kicker: "비뇨기과 사례",
    title: "ChatGPT에 아예 안 뜨던 비뇨기과 — 원인은 홈페이지 방화벽이었습니다",
    desc: "콘텐츠 문제가 아니었습니다. 제작사가 기본값으로 남겨둔 보안 방화벽이 AI 크롤러까지 막고 있었습니다. 차단 해제와 홈페이지 전면 개선 후 6개월, ChatGPT·구글·네이버 모두에 안정적으로 노출되기까지의 실제 사례입니다.",
    date: "2026. 7. 17",
  },
  {
    href: "/guide/case-mobile-carwash",
    category: "case",
    icon: Car,
    kicker: "출장세차 사례",
    title: "네이버만으로는 한계였던 출장세차 — 2개월 만에 구글 AI 개요에 뜨기까지",
    desc: "네이버 플레이스·카페 홍보로 성장이 멈춰 있던 신도시 출장세차. 구글·카카오맵·네이버 정보 비대칭을 맞추고 홈페이지를 스키마 구조로 정비한 뒤, 2개월 만에 구글 AI 개요에 노출되고 이어서 ChatGPT 추천을 받기 시작한 실제 사례입니다.",
    date: "2026. 7. 17",
  },
  {
    href: "/guide/is-geo-abuse",
    category: "concern",
    icon: ShieldCheck,
    kicker: "오해와 진실",
    title: "SEO·GEO는 어뷰징인가요? — 검색 마케팅에 대한 5가지 오해와 진실",
    desc: "SEO·GEO를 편법·불법으로 오해하는 분들을 위해. 무엇이 정상적인 최적화이고 무엇이 진짜 어뷰징인지, 검색엔진과 AI가 공식 권장하는 정당한 마케팅 기술임을 정리했습니다.",
    date: "2026. 7. 15",
  },
  {
    href: "/guide/why-ads-stop-working",
    category: "concern",
    icon: TrendingDown,
    kicker: "마케팅 고민 진단",
    title: "네이버 광고비는 오르는데 문의는 그대로일 때 — 지금 매장에 무슨 일이 일어나고 있나",
    desc: "광고를 늘려도 문의가 안 늘어난다면 매장 문제가 아니라 고객의 검색 방식이 바뀐 것일 수 있습니다. 5분이면 직접 확인해볼 수 있어요.",
    date: "2026. 7. 9",
  },
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
    href: "/guide/dental-geo",
    category: "industry",
    icon: Smile,
    kicker: "DENTAL GEO",
    title: "치과 AI 검색 최적화(GEO) 가이드 — 의료광고법 지키면서 인용받는 치과의 조건",
    desc: "치과 특유의 GEO 실행 포인트. 시술별 페이지, 질문형 콘텐츠, 방문후기 설계까지 의료광고법 안에서 AI에 인용받는 법.",
    date: "2026. 7. 9",
  },
  {
    href: "/guide/skincare-geo",
    category: "industry",
    icon: Gem,
    kicker: "SKINCARE GEO",
    title: "피부·에스테틱 AI 검색 최적화(GEO) 가이드 — 홈페이지가 인용을 가른다",
    desc: "에스테틱은 홈페이지 인용 의존도가 가장 큰 업종. AI가 읽을 수 있는 홈페이지를 만드는 것이 이 업종 GEO의 핵심입니다.",
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
