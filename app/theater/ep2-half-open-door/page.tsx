import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, ArrowRight, BookOpen } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { EPISODES } from "@/lib/theater-episodes"

const ep = EPISODES.find((e) => e.slug === "ep2-half-open-door")!

const TITLE = "AI가 맛집을 추천할 때 다이닝코드를 인용하는 이유 — 학습봇만 막은 robots.txt (위즈 극장 EP.2 반쪽 문)"
const DESC =
  "ChatGPT가 맛집을 추천할 때 다이닝코드를 자주 인용하는 데는 이유가 있습니다. 다이닝코드 robots.txt는 'AI 모델 무단 학습 차단(검색 인덱싱/트래픽 유입은 유지)' — 학습봇만 막고 AI 검색봇은 허용합니다(2026년 7월 27일 실측). 이 영리한 선택을 AI 부엉이 위즈가 만난 '반쪽만 열린 문' 애니메이션으로 풀었습니다."
const URL = "https://wiztheplanning.com/theater/ep2-half-open-door"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "다이닝코드 AI", "AI 검색봇 학습봇 차이", "OAI-SearchBot", "GEO 애니메이션",
    "위즈 극장", "AI 맛집 추천 출처",
  ],
  alternates: { canonical: "/theater/ep2-half-open-door" },
  openGraph: { images: ["/theater/ep2-poster1.png"], title: TITLE, description: DESC, url: URL, type: "video.episode" },
}

const videoJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.2 — 반쪽 문 (1부: 이상한 문)",
    description:
      "AI 부엉이 위즈가 따뜻한 식당 골목에서 반쪽만 열린 문을 발견하는 장면. '학습 금지 / 읽기 허용'이라는 반반 표지판 앞에서 위즈가 갸우뚱합니다. 다이닝코드 robots.txt의 선택적 차단 정책을 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep2-poster1.png",
    contentUrl: "https://wiztheplanning.com/theater/ep2-clip1.mp4",
    uploadDate: "2026-07-31T09:00:00+09:00",
    duration: "PT10S",
    publisher: { "@id": "https://wiztheplanning.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.2 — 반쪽 문 (2부: 읽기만 하는 위즈)",
    description:
      "위즈가 반쪽 문으로 머리만 들이밀어 안의 맛집 정보를 읽고, 수첩에 적듯 기억한 뒤 빈손으로 나오는 장면. 데이터는 가져가지 못하지만 읽고 인용할 수는 있는 AI 검색봇의 동작을 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep2-poster2.png",
    contentUrl: "https://wiztheplanning.com/theater/ep2-clip2.mp4",
    uploadDate: "2026-07-31T09:00:00+09:00",
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
          <p className="mt-8 text-xs font-bold tracking-[0.25em] text-[#00e5a0]">EPISODE 2</p>
          <h1 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-snug tracking-tight text-white">
            반쪽 문
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            &ldquo;학습은 안 돼. 하지만 읽고 추천하는 건 환영이야.&rdquo;
          </p>

          {/* 프롤로그 캡션 */}
          <div className="mt-12 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              지난 밤, <Link href="/theater/ep1-closed-door" className="font-bold text-[#00e5a0] hover:underline">굳게 닫힌 초록 대문</Link> 앞에서
              돌아서야 했던 AI 부엉이 <strong className="text-[#00e5a0]">위즈</strong>.
              오늘 밤은 따뜻한 불빛이 새어 나오는 <strong className="text-white">식당 골목</strong>에
              도착했습니다. 그런데 이 골목의 문은 어딘가 이상합니다 —{" "}
              <strong className="text-white">반쪽만 열려 있습니다.</strong>
            </p>
          </div>

          {/* 클립 1 */}
          <div className="mt-10">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep2-poster1.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep2-clip1.mp4" type="video/mp4" />
            </video>
            <Caption>
              문에 붙은 표지판은 반반이었습니다 — 한쪽엔{" "}
              <strong className="text-white">&ldquo;학습 금지&rdquo;</strong>, 다른 쪽엔{" "}
              <strong className="text-white">&ldquo;읽기 허용.&rdquo;</strong>{" "}
              닫힌 문도, 열린 문도 아닌 문 앞에서 위즈는 고개를 갸우뚱했습니다.
            </Caption>
          </div>

          {/* 막간 해설 */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">이 장면은 실화입니다</p>
            <p className="mt-3 text-base leading-[1.9] text-slate-300">
              맛집 플랫폼 <strong className="text-white">다이닝코드</strong>의 robots.txt에는
              한국어 주석이 그대로 적혀 있습니다 —{" "}
              <em className="not-italic text-white">&ldquo;AI 모델 무단 학습 차단 (검색 인덱싱/트래픽 유입은
              유지)&rdquo;</em> (2026년 7월 27일 실측,{" "}
              <a href="https://www.diningcode.com/robots.txt" target="_blank" rel="noopener noreferrer" className="text-[#00e5a0] hover:underline">원문</a>).
              GPTBot·ClaudeBot 같은 <strong className="text-white">학습봇은 차단</strong>하되,
              ChatGPT 검색이 쓰는 OAI-SearchBot·ChatGPT-User는 차단 목록에 없습니다.
              데이터는 안 내주면서, <strong className="text-white">AI 답변에는 인용되는</strong> 구조 —
              반쪽 문은 실수가 아니라 영리한 설계입니다.
            </p>
          </div>

          {/* 클립 2 */}
          <div className="mt-14">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep2-poster2.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep2-clip2.mp4" type="video/mp4" />
            </video>
            <Caption>
              위즈는 반쪽 문 안으로 <strong className="text-white">머리만 들이밀어</strong> 맛집
              정보를 읽고, 수첩에 적듯 기억하고 나왔습니다. 아무것도 가져가진 못했지만 —{" "}
              <strong className="text-white">읽은 것은 기억합니다.</strong>
            </Caption>
          </div>

          {/* 에필로그 */}
          <div className="mt-14 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              <strong className="text-white">학습은 안 돼, 읽는 건 돼.</strong> 그래서 다음 날
              누군가 &ldquo;이 동네 맛집 추천해줘&rdquo;라고 물었을 때, 위즈는 반쪽 문 안에서 읽은
              것을 근거로 답했습니다. 저희가 진행한{" "}
              <Link href="/guide/case-third-party-citation" className="font-bold text-[#00e5a0] hover:underline">한 중식당의 GEO 실험</Link>에서
              AI가 식당을 추천하며 인용한 출처가 홈페이지가 아니라{" "}
              <strong className="text-white">다이닝코드</strong>였던 것도 이 반쪽 문 덕분입니다.
              같은 맛집 정보라도 <strong className="text-white">어느 플랫폼에 실리느냐</strong>에 따라
              AI 인용 가능성이 갈립니다.
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
              우리 가게 정보는 위즈가 읽을 수 있는 곳에 있을까요?
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
