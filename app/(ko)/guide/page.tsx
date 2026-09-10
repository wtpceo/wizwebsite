import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import GuideGrid from "@/components/guide/GuideGrid"

export const metadata: Metadata = {
  title: "마케팅 가이드: AI 검색 최적화·플레이스 실전 노하우",
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
              AI 검색 최적화(GEO)부터 네이버 플레이스, 업종별 전략까지,
              <br className="hidden md:block" />
              7,000여 광고주와 쌓은 노하우를 사장님 눈높이로 정리했습니다.
            </p>
          </div>
        </section>

        <GuideGrid />

        <p className="pb-16 text-center text-sm text-gray-500">
          새 가이드가 매주 추가됩니다. 궁금한 주제가 있다면{" "}
          <Link href="/#contact" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
            문의하기
          </Link>
          로 알려주세요.
        </p>
      </main>
      <Footer />
    </div>
  )
}
