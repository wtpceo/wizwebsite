import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, Clapperboard, ArrowRight } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { EPISODES, SERIES_NAME, SERIES_DESC } from "@/lib/theater-episodes"

const TITLE = "위즈 극장: GEO(AI 검색 최적화)를 30초 애니메이션으로 배우는 시리즈"
const URL = "https://wiztheplanning.com/theater"

export const metadata: Metadata = {
  title: TITLE,
  description: SERIES_DESC,
  keywords: [
    "GEO 영상", "AI 검색 최적화 영상", "위즈 극장", "위즈더플래닝 캐릭터",
    "GEO 쉽게 설명", "AI 크롤러 애니메이션",
  ],
  alternates: { canonical: "/theater" },
  openGraph: { images: ["/theater/ep1-poster1.png"], title: TITLE, description: SERIES_DESC, url: URL, type: "website" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: SERIES_NAME,
  description: SERIES_DESC,
  url: URL,
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070b14]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        {/* 극장 헤더 */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="geo-grid-bg absolute inset-0 opacity-40" />
          <div className="absolute -top-24 left-1/3 h-[300px] w-[500px] rounded-full bg-[#00e5a0]/[0.08] blur-3xl" />
          <div className="container relative mx-auto max-w-5xl px-4 md:px-6">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-[#00e5a0]">
              <ChevronLeft className="h-4 w-4" /> 홈으로
            </Link>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#00e5a0]/30 bg-[#00e5a0]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00e5a0]">
              <Clapperboard className="h-3.5 w-3.5" />
              WIZ THEATER · 시리즈
            </div>
            <h1 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              위즈 극장
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              밤마다 웹을 읽으러 다니는 AI 부엉이 <strong className="text-[#00e5a0]">위즈(Wiz)</strong>.
              위즈의 이야기로 GEO(AI 검색 최적화)가 무엇이고 무엇을 해야 하는지 쉽게 풀어냅니다.
              모든 에피소드는 저희가 <Link href="/guide" className="underline underline-offset-4 hover:text-white">직접 실측한 사실</Link>을 원작으로 합니다.
            </p>
          </div>
        </section>

        {/* 에피소드 목록 */}
        <section className="container mx-auto max-w-5xl px-4 pb-24 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {EPISODES.map((e) =>
              e.status === "published" ? (
                <Link
                  key={e.slug}
                  href={`/theater/${e.slug}`}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all hover:border-[#00e5a0]/40 hover:bg-white/[0.06]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.poster} alt={e.title} className="aspect-video w-full object-cover" />
                  <div className="p-6">
                    <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">EP.{e.ep}</p>
                    <h2 className="mt-2 text-lg font-extrabold leading-snug text-white group-hover:text-[#00e5a0]">
                      {e.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{e.logline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#00e5a0]">
                      감상하기 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ) : (
                <div key={e.slug} className="overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] opacity-70">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.poster} alt={e.title} className="aspect-video w-full object-cover opacity-40 grayscale" />
                  <div className="p-6">
                    <p className="text-xs font-bold tracking-[0.2em] text-slate-500">EP.{e.ep} · COMING SOON</p>
                    <h2 className="mt-2 text-lg font-extrabold leading-snug text-slate-300">{e.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{e.logline}</p>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-8 py-10 text-center">
            <h2 className="text-xl font-extrabold text-white md:text-2xl">
              위즈가 우리 가게 문은 열 수 있을까요?
            </h2>
            <p className="mt-2 text-sm text-slate-400 md:text-base">
              무료 사이트 진단으로 AI 크롤러가 우리 홈페이지를 읽을 수 있는지 1분 만에 확인하세요.
            </p>
            <Link
              href="/site-check"
              className="mt-6 inline-flex items-center gap-1 rounded-xl bg-[#00e5a0] px-8 py-3.5 font-bold text-[#070b14] transition-colors hover:bg-[#3cf0bb]"
            >
              무료 사이트 진단 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
