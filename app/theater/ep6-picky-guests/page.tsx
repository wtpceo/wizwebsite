import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, ArrowRight, BookOpen } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { EPISODES } from "@/lib/theater-episodes"

const ep = EPISODES.find((e) => e.slug === "ep6-picky-guests")!

const TITLE = "같은 질문에 ChatGPT와 네이버 AI가 다른 가게를 추천하는 이유 (위즈 극장 EP.6 입맛이 다른 손님들)"
const DESC =
  "같은 질문을 해도 네이버 AI는 플레이스 리뷰·후기 블로그를, ChatGPT·구글 AI는 홈페이지와 디렉토리를 근거로 답합니다. 네이버가 외부 AI 크롤러를 차단해 ChatGPT는 네이버 안을 읽지 못하기 때문입니다. 엔진마다 '읽는 곳'이 다르다는 사실을 AI 부엉이 위즈와 세 손님의 애니메이션으로 풀었습니다."
const URL = "https://wiztheplanning.com/theater/ep6-picky-guests"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "ChatGPT 네이버 AI 추천 차이", "AI 검색 인용 출처", "네이버 AI 리뷰", "구글 AI 개요",
    "AI 맛집 추천 기준", "위즈 극장",
  ],
  alternates: { canonical: "/theater/ep6-picky-guests" },
  openGraph: { images: ["/theater/ep6-poster1.png"], title: TITLE, description: DESC, url: URL, type: "video.episode" },
}

const videoJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.6: 입맛이 다른 손님들 (1부: 같은 질문, 다른 손가락)",
    description:
      "AI 부엉이 위즈의 식탁에 세 로봇 새 손님이 같은 질문 카드('맛집 추천')를 들고 찾아왔지만, 각자 서로 다른 방향을 가리키는 장면. AI 엔진마다 인용하는 출처가 다르다는 사실을 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep6-poster1.png",
    contentUrl: "https://wiztheplanning.com/theater/ep6-clip1.mp4",
    uploadDate: "2026-08-19T13:00:00+09:00",
    duration: "PT10S",
    publisher: { "@id": "https://wiztheplanning.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.6: 입맛이 다른 손님들 (2부: 손님마다 다른 메뉴)",
    description:
      "위즈가 세 손님에게 서로 다른 자료를 배달하는 장면: 초록 손님에게는 리뷰 두루마리, 하늘색 손님에게는 홈페이지 책, 노란 손님에게는 질문형 정보 문서. 엔진별로 준비할 것이 다르다는 결론을 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep6-poster2.png",
    contentUrl: "https://wiztheplanning.com/theater/ep6-clip2.mp4",
    uploadDate: "2026-08-19T13:00:00+09:00",
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
          <p className="mt-8 text-xs font-bold tracking-[0.25em] text-[#00e5a0]">EPISODE 6</p>
          <h1 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-snug tracking-tight text-white">
            입맛이 다른 손님들
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            같은 질문을 받았는데, 세 손님은 서로 다른 곳을 가리켰습니다.
          </p>

          {/* 프롤로그 캡션 */}
          <div className="mt-12 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              오늘 밤 AI 부엉이 <strong className="text-[#00e5a0]">위즈</strong>의 식탁에
              세 손님이 찾아왔습니다. 셋 다 손에 든 질문 카드는 똑같았습니다. {" "}
              <strong className="text-white">&ldquo;맛집 추천해줘.&rdquo;</strong> 그런데 답을
              찾으러 가는 곳은, 셋 다 달랐습니다.
            </p>
          </div>

          {/* 클립 1 */}
          <div className="mt-10">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep6-poster1.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep6-clip1.mp4" type="video/mp4" />
            </video>
            <Caption>
              같은 질문, <strong className="text-white">다른 손가락.</strong> 초록 손님은 리뷰
              쪽을, 하늘색 손님은 홈페이지 쪽을, 노란 손님은 정보 문서 쪽을 가리켰습니다.
              위즈는 고개를 갸우뚱했습니다.
            </Caption>
          </div>

          {/* 막간 해설 */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">이 장면은 실화입니다</p>
            <p className="mt-3 text-base leading-[1.9] text-slate-300">
              <strong className="text-white">네이버 AI는 플레이스 리뷰와 후기 블로그</strong>를
              근거로 추천합니다. 리뷰의 양, 반복되는 속성어, 최신성이 신호입니다. 반면{" "}
              <strong className="text-white">ChatGPT·구글 AI는 업체 홈페이지와 디렉토리</strong>를
              인용합니다. 이유는 <Link href="/theater/ep1-closed-door" className="text-[#00e5a0] hover:underline">EP.1의 닫힌 문</Link> 그대로:
              네이버가 외부 AI 크롤러를 차단하고 있어, ChatGPT는 네이버 안의 리뷰·블로그를
              아예 읽지 못하기 때문입니다. 그리고 어느 AI든{" "}
              <strong className="text-white">가게 이름을 직접 물으면 잘 알지만, &ldquo;○○
              추천&rdquo;처럼 카테고리로 물으면 얘기가 달라집니다</strong>: 진짜 경쟁은 카테고리
              질문에서 호명되는 것입니다.
            </p>
          </div>

          {/* 클립 2 */}
          <div className="mt-14">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep6-poster2.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep6-clip2.mp4" type="video/mp4" />
            </video>
            <Caption>
              그래서 위즈는 <strong className="text-white">손님마다 다른 메뉴</strong>를
              내놓았습니다. 초록 손님에겐 리뷰 두루마리, 하늘색 손님에겐 홈페이지 책, 노란
              손님에겐 질문형 정보 문서. <strong className="text-white">한 가지만 준비하면
              반쪽</strong>입니다.
            </Caption>
          </div>

          {/* 에필로그 */}
          <div className="mt-14 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              엔진마다 읽는 곳이 다르니, 준비도 두 갈래여야 합니다.{" "}
              <strong className="text-white">네이버 축</strong>은 플레이스 정보 완비와 자발적
              리뷰의 양·최신성·일관성 관리, <strong className="text-white">외부 AI 축</strong>은
              AI가 읽을 수 있는 홈페이지와 질문형 정보 콘텐츠·구조화 데이터입니다. 그리고 공통으로,
              모든 채널의 상호·주소·전화·영업시간을{" "}
              <strong className="text-white">하나로 통일</strong>해야 AI가 오정보를 안내하는
              사고를 막을 수 있습니다.
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
              하늘색 손님은 우리 가게를 읽을 수 있을까요?
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
