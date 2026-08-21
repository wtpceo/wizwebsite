import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, ArrowRight, BookOpen } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { EPISODES } from "@/lib/theater-episodes"

const ep = EPISODES.find((e) => e.slug === "ep4-doorless-shop")!

const TITLE = "매장 없는 출장 서비스, AI 추천에 뜨는 법: 출장세차 2개월 실제 사례 (위즈 극장 EP.4 문이 없는 가게)"
const DESC =
  "가게도 간판도 없는 출장 서비스는 AI에게 어떻게 발견될까요? 네이버 플레이스만으로 성장이 멈췄던 신도시 출장세차가 흩어진 정보를 일치시키고 AI가 읽는 홈페이지를 만들자, 약 2개월 만에 구글 AI 개요에 노출되고 이어서 ChatGPT 추천을 받기 시작했습니다(진행 중 사례). 이 이야기를 AI 부엉이 위즈의 애니메이션으로 풀었습니다."
const URL = "https://wiztheplanning.com/theater/ep4-doorless-shop"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "출장세차 마케팅", "출장 서비스 AI 노출", "구글 AI 개요 노출", "네이버 플레이스 한계",
    "매장 없는 사업 홍보", "위즈 극장",
  ],
  alternates: { canonical: "/theater/ep4-doorless-shop" },
  openGraph: { images: ["/theater/ep4-poster1.png"], title: TITLE, description: DESC, url: URL, type: "video.episode" },
}

const videoJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.4: 문이 없는 가게 (1부: 문을 찾는 위즈)",
    description:
      "AI 부엉이 위즈가 밤의 아파트 주차장에서 일하는 출장세차 밴을 발견하지만, 읽을 수 있는 가게 문이 어디에도 없어 어리둥절해하는 장면. 매장 없는 출장 서비스가 AI에게 보이지 않는 상태를 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep4-poster1.png",
    contentUrl: "https://wiztheplanning.com/theater/ep4-clip1.mp4",
    uploadDate: "2026-08-06T13:00:00+09:00",
    duration: "PT10S",
    publisher: { "@id": "https://wiztheplanning.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.4: 문이 없는 가게 (2부: 허공에 생긴 문)",
    description:
      "세차 밴 옆 허공에 빛나는 문(홈페이지)이 나타나고, 위즈가 그 안의 작업 사례와 후기를 읽는 장면. 홈페이지가 매장 없는 사업의 '읽을 수 있는 문'이 되는 순간을 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep4-poster2.png",
    contentUrl: "https://wiztheplanning.com/theater/ep4-clip2.mp4",
    uploadDate: "2026-08-06T13:00:00+09:00",
    duration: "PT8S",
    publisher: { "@id": "https://wiztheplanning.com/#organization" },
  },
]

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-slate-300 md:text-lg">
      {children}
    </p>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070b14]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />
      <Header />
      <main className="flex-1">
        <section className="container mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
          <Link href="/theater" className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-[#00e5a0]">
            <ChevronLeft className="h-4 w-4" /> 위즈 극장
          </Link>
          <p className="mt-8 text-xs font-bold tracking-[0.25em] text-[#00e5a0]">EPISODE 4</p>
          <h1 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-snug tracking-tight text-white">
            문이 없는 가게
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            찾아갈 문이 아예 없는 가게를, 위즈는 어떻게 추천할 수 있을까요?
          </p>

          {/* 프롤로그 캡션 */}
          <div className="mt-12 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              누군가 위즈에게 물었습니다. &ldquo;출장세차 잘하는 데 추천해줘.&rdquo;
              닫힌 문, 반쪽 문, 보이지 않는 벽까지 지나온 AI 부엉이{" "}
              <strong className="text-[#00e5a0]">위즈</strong>는 이번에도 문을 찾아 나섰습니다.
              그런데 오늘 밤 도착한 신도시 주차장에는 :{" "}
              <strong className="text-white">찾아갈 문 자체가 없었습니다.</strong>
            </p>
          </div>

          {/* 클립 1 */}
          <div className="mt-10">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep4-poster1.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep4-clip1.mp4" type="video/mp4" />
            </video>
            <Caption>
              눈앞에서 차가 반짝반짝해지는데: <strong className="text-white">가게도, 간판도,
              문도 없습니다.</strong> 일은 분명히 잘하는데, 위즈가{" "}
              <strong className="text-white">읽을 수 있는 것</strong>이 아무것도 없었습니다.
            </Caption>
          </div>

          {/* 막간 해설 */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">이 장면은 실화입니다</p>
            <p className="mt-3 text-base leading-[1.9] text-slate-300">
              한 신도시의 출장세차 업체는 <strong className="text-white">네이버 플레이스와 지역
              카페 홍보</strong>로 일감을 얻고 있었지만, 그 이상 늘지 않는 구간에 멈춰 있었습니다.
              매장이 없는 출장 서비스라 AI에게는{" "}
              <strong className="text-white">읽을 문이 없는 가게</strong>였던 것입니다. 저희는
              구글·카카오맵·네이버에 흩어진 정보를 일치시키고, AI가 읽을 수 있는 구조의{" "}
              <strong className="text-white">홈페이지</strong>를 만들고, 실제 작업 사례를
              쌓았습니다.
            </p>
          </div>

          {/* 클립 2 */}
          <div className="mt-14">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep4-poster2.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep4-clip2.mp4" type="video/mp4" />
            </video>
            <Caption>
              홈페이지가 생기자, 밴 옆 허공에 <strong className="text-white">빛나는 문</strong>이
              나타났습니다. 위즈는 그 안의 작업 사진과 후기를 전부 읽었습니다. {" "}
              <strong className="text-white">이제 이 가게를 추천할 수 있습니다.</strong>
            </Caption>
          </div>

          {/* 에필로그 */}
          <div className="mt-14 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              작업 시작 <strong className="text-white">약 2개월 뒤, 이 업체는 구글 AI
              개요(AI Overviews)에 노출되기 시작했고</strong>, 이어서 ChatGPT에서도 추천을 받기
              시작했습니다(완료된 성공담이 아니라 지금도 진행 중인 사례입니다). 매장이 있는 가게는
              문이라도 있지만, <strong className="text-white">출장 서비스·무점포 사업은 홈페이지가
              유일한 문</strong>입니다. 문이 없으면 AI는 아무리 일 잘하는 가게도 추천할 수 없습니다.
            </p>
          </div>

          {/* 원작 자료 */}
          <div className="mt-14">
            <p className="flex items-center gap-2 text-sm font-bold text-slate-400">
              <BookOpen className="h-4 w-4" /> 이 에피소드의 원작 (실측 자료)
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ep.basedOn.map((b) => (
                <Link
                  key={b.href}
                  href={b.href}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm font-bold text-slate-200 transition-all hover:border-[#00e5a0]/40 hover:text-[#00e5a0]"
                >
                  {b.label}
                  <ArrowRight className="mt-2 h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-[#00e5a0]" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-8 py-10 text-center">
            <h2 className="text-xl font-extrabold text-white md:text-2xl">
              우리 가게의 문은 위즈에게 보이고 있을까요?
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
