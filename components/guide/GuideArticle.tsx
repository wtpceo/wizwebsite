import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import RelatedArticles from "@/components/guide/RelatedArticles"

type GuideCta = {
  title: string
  body: string
  href: string
  label: string
  /** 버튼 아래 작은 링크 (예: 매장 글에서 병원·의원만 병원 진단으로 보낼 때) */
  sub?: { href: string; label: string }
}

// 하단 박스 기본값. 업종 무관 글은 지금처럼 일반 상담으로 보낸다
const DEFAULT_CTA: GuideCta = {
  title: "우리 가게, AI에게 물어보면 나올까요?",
  body: "무료 진단 리포트로 우리 매장의 AI 검색 현황을 확인해 보세요.",
  href: "/#contact",
  label: "AI 검색 무료 진단 신청",
}

// 병원 주제 글의 하단 박스. '가게'·일반 상담 대신 병원 진단(/medical-diagnosis)으로 보낸다 (작가 원고 2026-10-29)
export const MEDICAL_CTA: GuideCta = {
  title: "우리 병원, AI에게 물어보면 나올까요?",
  body: "병원·의원이면 조건 없이 무료로 진단해 드립니다. 네이버 AI·ChatGPT·제미나이에 환자가 쓸 법한 질문을 물어 언급 비율, 잘못 안내되는 정보, 경쟁 병원과의 차이를 리포트로 보내 드리고, 진단만 받고 마치셔도 됩니다.",
  href: "/medical-diagnosis",
  label: "병원 무료 AI 검색 진단 신청",
}

// 가이드 아티클 공용 레이아웃 (서버 컴포넌트 — 정적 렌더링이라 크롤러/AI가 그대로 읽음)
export default function GuideArticle({
  kicker = "GUIDE",
  title,
  description,
  date,
  href,
  cta = DEFAULT_CTA,
  children,
}: {
  kicker?: string
  title: string
  description: string
  date: string
  /** 이 글의 경로 — "이어서 읽기" 추천에 사용 */
  href?: string
  /** 하단 박스 문구와 행선지. 병원 글은 MEDICAL_CTA */
  cta?: GuideCta
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

        {/* 이어서 읽기 — 관련 글로 회독 유도 + 내부 링크 강화 */}
        {href && <RelatedArticles currentHref={href} />}

        {/* CTA */}
        <section className="container mx-auto max-w-3xl px-4 pb-20 pt-10 md:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-8 py-10 text-center shadow-xl">
            <h2 className="text-xl font-extrabold text-white md:text-2xl">{cta.title}</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">{cta.body}</p>
            <Link href={cta.href} className="mt-6 inline-block">
              <Button size="lg" className="gap-1 bg-[#00e5a0] px-8 font-bold text-[#070b14] hover:bg-[#3cf0bb]">
                {cta.label}
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
            {cta.sub && (
              <p className="mt-4 text-sm">
                <Link href={cta.sub.href} className="text-slate-300 underline underline-offset-4 hover:text-[#00e5a0]">
                  {cta.sub.label}
                </Link>
              </p>
            )}
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
