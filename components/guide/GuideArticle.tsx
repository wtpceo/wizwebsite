import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

// 가이드 아티클 공용 레이아웃 (서버 컴포넌트 — 정적 렌더링이라 크롤러/AI가 그대로 읽음)
export default function GuideArticle({
  kicker = "GUIDE",
  title,
  description,
  date,
  children,
}: {
  kicker?: string
  title: string
  description: string
  date: string
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* 아티클 헤더 */}
        <section className="relative overflow-hidden bg-[#070b14] py-16 md:py-20">
          <div className="geo-grid-bg absolute inset-0" />
          <div className="absolute -top-32 left-1/3 h-[320px] w-[520px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />
          <div className="container relative mx-auto max-w-3xl px-4 md:px-6">
            <Link
              href="/guide"
              className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-[#00e5a0]"
            >
              <ChevronLeft className="h-4 w-4" />
              가이드 목록
            </Link>
            <p className="mt-6 text-xs font-bold tracking-[0.25em] text-[#00e5a0]">{kicker}</p>
            <h1 className="mt-3 text-[clamp(1.875rem,3.4vw,3.25rem)] font-extrabold leading-snug tracking-tight text-white">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">{description}</p>
            <p className="mt-4 text-sm text-slate-500">위즈더플래닝 · {date}</p>
          </div>
        </section>

        {/* 본문 */}
        <article className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 [&>h2]:mt-12 [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:text-gray-900 [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>p]:mt-4 [&>p]:text-base [&>p]:leading-[1.85] [&>p]:text-gray-700 [&>ul]:mt-4 [&>ul]:space-y-2 [&>ul]:pl-1 [&>ol]:mt-4 [&>ol]:space-y-3 [&>ol]:pl-1">
          {children}
        </article>

        {/* CTA */}
        <section className="container mx-auto max-w-3xl px-4 pb-20 md:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-8 py-10 text-center shadow-xl">
            <h2 className="text-xl font-extrabold text-white md:text-2xl">
              우리 가게, AI에게 물어보면 나올까요?
            </h2>
            <p className="mt-2 text-sm text-slate-400 md:text-base">
              무료 진단 리포트로 우리 매장의 AI 검색 현황을 확인해 보세요.
            </p>
            <Link href="/#contact" className="mt-6 inline-block">
              <Button size="lg" className="gap-1 bg-[#00e5a0] px-8 font-bold text-[#070b14] hover:bg-[#3cf0bb]">
                AI 검색 무료 진단 신청
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// 본문 안에서 쓰는 체크/포인트 리스트 아이템
export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-base leading-relaxed text-gray-700">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00e5a0]" />
      <span>{children}</span>
    </li>
  )
}

// 강조 콜아웃 박스
export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-r-xl border-l-4 border-[#00e5a0] bg-emerald-50 px-5 py-4 text-base leading-relaxed text-gray-800">
      {children}
    </div>
  )
}
