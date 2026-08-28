import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, ArrowRight, BookOpen } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { EPISODES } from "@/lib/theater-episodes"

const ep = EPISODES.find((e) => e.slug === "ep7-toll-gate")!

const TITLE = "펜션 예약 수수료 10.45% 아끼는 법: 자체 사이트 직접 예약 실측 (위즈 극장 EP.7 통행료 받는 문)"
const DESC =
  "네이버 펜션 실시간예약 수수료는 부가세 포함 10.45%, 야놀자·여기어때 중개수수료는 10%입니다(공정위 자율규제 기준). 수도권 근교 펜션이 자체 예약 사이트를 만들고 8일간 광고비 18만 563원으로 랜딩 조회 2,890건(조회당 62원)을 만든 실측 기록을 위즈의 애니메이션으로 풀었습니다. 수수료보다 큰 문제는 AI 인용까지 플랫폼에 넘어간다는 것입니다."
const URL = "https://wiztheplanning.com/theater/ep7-toll-gate"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "펜션 예약 수수료", "펜션 직접 예약", "야놀자 수수료", "네이버 예약 수수료",
    "숙박 플랫폼 수수료 절감", "위즈 극장",
  ],
  alternates: { canonical: "/theater/ep7-toll-gate" },
  openGraph: { images: ["/theater/ep7-poster1.png"], title: TITLE, description: DESC, url: URL, type: "video.episode" },
}

const videoJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.7: 통행료 받는 문 (1부: 동전이 떠오르는 길)",
    description:
      "숲속 펜션 진입로에 선 화려한 톨게이트 문. 손님이 지나갈 때마다 주머니에서 동전이 떠올라 통행료 통에 쌓이고, AI 부엉이 위즈가 놀라 지켜보는 장면. 숙박 플랫폼의 예약 수수료 구조를 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep7-poster1.png",
    contentUrl: "https://wiztheplanning.com/theater/ep7-clip1.mp4",
    uploadDate: "2026-08-28T13:00:00+09:00",
    duration: "PT10S",
    publisher: { "@id": "https://wiztheplanning.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.7: 통행료 받는 문 (2부: 자기 문이 생긴 날)",
    description:
      "펜션 마당에 새로 선 소박한 나무 문(자체 예약 사이트). 손님이 통행료 없이 그 문으로 직접 들어가고, 위즈가 그 문을 읽는 장면. 자체 사이트가 예약 그릇이자 AI가 읽는 원본이 되는 순간을 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep7-poster2.png",
    contentUrl: "https://wiztheplanning.com/theater/ep7-clip2.mp4",
    uploadDate: "2026-08-28T13:00:00+09:00",
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
          <p className="mt-8 text-xs font-bold tracking-[0.25em] text-[#00e5a0]">EPISODE 7</p>
          <h1 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-snug tracking-tight text-white">
            통행료 받는 문
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            손님이 문을 지날 때마다, 동전이 떠올랐습니다.
          </p>

          {/* 프롤로그 캡션 */}
          <div className="mt-12 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              오늘 밤 AI 부엉이 <strong className="text-[#00e5a0]">위즈</strong>가 도착한 곳은
              숲속의 아늑한 <strong className="text-white">펜션</strong>. 창문마다 따뜻한 불이
              켜져 있습니다. 그런데 펜션으로 가는 길목에{" "}
              <strong className="text-white">화려한 문</strong>이 하나 서 있습니다. 손님들은 모두
              그 문을 지나서 들어갑니다 — 그리고 지나갈 때마다, 무언가가 떠오릅니다.
            </p>
          </div>

          {/* 클립 1 */}
          <div className="mt-10">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep7-poster1.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep7-clip1.mp4" type="video/mp4" />
            </video>
            <Caption>
              손님이 지나갈 때마다 주머니에서 <strong className="text-white">동전이 떠올라
              통행료 통에 쌓입니다.</strong> 사장님도 이 문이 아까운 걸 압니다. 그래도 못
              치웁니다 — <strong className="text-white">문을 치우면 손님이 끊길까 봐서입니다.</strong>
            </Caption>
          </div>

          {/* 막간 해설 */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">이 장면은 실화입니다</p>
            <p className="mt-3 text-base leading-[1.9] text-slate-300">
              네이버 펜션 실시간예약은 매출연동수수료 6.6%에 네이버페이 결제수수료 2.9%를 더해{" "}
              <strong className="text-white">부가세 포함 10.45%</strong>, 야놀자·여기어때
              중개수수료는 <strong className="text-white">10%</strong>입니다(공정위 자율규제 기준).
              저희는 수도권 근교의 한 펜션과 자체 예약 사이트를 만들고 메타 광고 하나만 8일간
              돌렸습니다 — <strong className="text-white">지출 18만 563원, 랜딩페이지 조회
              2,890건, 조회당 62원</strong>(2026년 8월 5~12일, 광고 관리자 실측). 예약은 광고
              지표가 아니라 업소 예약 현황으로 따로 확인했고, 그 8일 동안 객실이 채워졌습니다 —
              저희는 이 두 숫자를 한 줄에 놓고 과장하지 않습니다.
            </p>
          </div>

          {/* 클립 2 */}
          <div className="mt-14">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep7-poster2.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep7-clip2.mp4" type="video/mp4" />
            </video>
            <Caption>
              펜션 마당에 <strong className="text-white">자기 문</strong>이 생겼습니다. 손님은
              통행료 없이 그 문으로 들어오고 — 위즈도{" "}
              <strong className="text-white">이 문을 읽을 수 있습니다.</strong>
            </Caption>
          </div>

          {/* 에필로그 */}
          <div className="mt-14 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              <strong className="text-white">수수료 10%는 눈에 보이는 비용이고, 인용을 뺏기는 건
              눈에 안 보이는 비용입니다.</strong> 손님이 AI에게 &ldquo;근처 가족 펜션
              추천해줘&rdquo;라고 묻는 시대에, 자기 사이트가 없으면 AI가 답변에 다는 출처는 업소가
              아니라 플랫폼이 됩니다.{" "}
              <Link href="/guide/case-third-party-citation" className="font-bold text-[#00e5a0] hover:underline">한 음식점 사례</Link>가
              정확히 그랬습니다. 자체 사이트는 예약을 받는 그릇인 동시에,{" "}
              <strong className="text-white">AI가 우리 업소를 읽어갈 수 있는 유일한
              원본</strong>입니다. 이 구조는 펜션만이 아니라 수수료를 내는 모든 업종에 그대로
              적용됩니다.
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
              우리 가게에도 통행료 없는 문이 있나요?
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
