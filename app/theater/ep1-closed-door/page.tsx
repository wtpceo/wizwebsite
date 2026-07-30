import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, ArrowRight, BookOpen } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { EPISODES } from "@/lib/theater-episodes"

const ep = EPISODES.find((e) => e.slug === "ep1-closed-door")!

const TITLE = "위즈 극장 EP.1 닫힌 문 — 네이버에 쌓은 글을 AI는 읽지 못합니다"
const DESC =
  "밤마다 웹을 읽으러 다니는 AI 부엉이 위즈. 오늘 밤 위즈는 사장님이 열심히 글을 쌓아 둔 초록색 대문 앞에 도착했지만, 문에는 '출입금지 — AI 학습·검색 접근 금지'가 붙어 있었습니다. 네이버 robots.txt 실측 사실을 원작으로 한 30초 애니메이션과 전체 해설."
const URL = "https://wiztheplanning.com/theater/ep1-closed-door"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "네이버 AI 차단 영상", "GEO 애니메이션", "AI 크롤러 차단", "네이버 블로그 ChatGPT",
    "위즈 극장", "GEO 쉽게 설명",
  ],
  alternates: { canonical: "/theater/ep1-closed-door" },
  openGraph: { images: ["/theater/ep1-poster1.png"], title: TITLE, description: DESC, url: URL, type: "video.episode" },
}

const videoJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.1 — 닫힌 문 (1부: 문전박대)",
    description:
      "AI 부엉이 위즈가 네이버를 상징하는 초록 대문에 도착해 노크하지만, 빨간 X와 함께 거절당하는 장면. 네이버 robots.txt의 AI 크롤러 차단을 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep1-poster1.png",
    contentUrl: "https://wiztheplanning.com/theater/ep1-clip1.mp4",
    uploadDate: "2026-07-30",
    duration: "PT10S",
    publisher: { "@id": "https://wiztheplanning.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.1 — 닫힌 문 (2부: 열린 문)",
    description:
      "거절당한 위즈가 활짝 열린 홈페이지 문에서 환영받는 장면. AI 크롤러에게 열린 자기 소유의 홈페이지를 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep1-poster2.png",
    contentUrl: "https://wiztheplanning.com/theater/ep1-clip2.mp4",
    uploadDate: "2026-07-30",
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
          <p className="mt-8 text-xs font-bold tracking-[0.25em] text-[#00e5a0]">EPISODE 1</p>
          <h1 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-snug tracking-tight text-white">
            닫힌 문
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            사장님이 열심히 글을 쌓아 둔 곳에, AI는 들어갈 수 없었습니다.
          </p>

          {/* 프롤로그 캡션 */}
          <div className="mt-12 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              밤마다 웹을 읽으러 다니는 AI 부엉이, <strong className="text-[#00e5a0]">위즈</strong>.
              사람들이 &ldquo;맛집 추천해줘&rdquo;라고 물으면, 위즈가 밤새 읽어 온 것들 중에서
              답을 고릅니다. 오늘 밤 위즈는 어느 사장님이 몇 년째 부지런히 글을 쌓아 둔{" "}
              <strong className="text-white">초록색 대문 앞</strong>에 도착했습니다.
            </p>
          </div>

          {/* 클립 1 */}
          <div className="mt-10">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep1-poster1.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep1-clip1.mp4" type="video/mp4" />
            </video>
            <Caption>
              문에는 이렇게 적혀 있었습니다 — <strong className="text-white">&ldquo;출입금지.&rdquo;</strong>{" "}
              노크를 해도 돌아온 것은 빨간 불빛뿐. 이 초록 대문 안의 글은,{" "}
              <strong className="text-white">위즈가 영원히 읽을 수 없습니다.</strong>
            </Caption>
          </div>

          {/* 막간 해설 */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">이 장면은 실화입니다</p>
            <p className="mt-3 text-base leading-[1.9] text-slate-300">
              네이버는 robots.txt에 <em className="not-italic text-white">&ldquo;AI 학습 및 검색 증강 생성(RAG) 목적의
              봇 접근을 엄격히 금지한다&rdquo;</em>고 명시하고, GPTBot·OAI-SearchBot·ClaudeBot 등
              AI 크롤러를 이름으로 지정해 차단하고 있습니다. 블로그·카페에 아무리 글을 쌓아도{" "}
              <strong className="text-white">ChatGPT·제미나이·퍼플렉시티는 그 안을 읽지 못합니다.</strong>{" "}
              2026년 7월, 저희가 한국 플랫폼 15곳의 robots.txt를 직접 전수 확인한 결과입니다.
            </p>
          </div>

          {/* 클립 2 */}
          <div className="mt-14">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep1-poster2.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep1-clip2.mp4" type="video/mp4" />
            </video>
            <Caption>
              그런데 골목 건너편, <strong className="text-white">활짝 열린 문</strong>이 하나
              있었습니다. 사장님이 직접 만든 <strong className="text-[#00e5a0]">홈페이지</strong>입니다.
              위즈는 이 안의 글을 전부 읽었고 — 다음 날 누군가 &ldquo;추천해줘&rdquo;라고 물었을 때,
              이 가게를 답했습니다.
            </Caption>
          </div>

          {/* 에필로그 */}
          <div className="mt-14 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              콘텐츠를 <strong className="text-white">어디에 쌓느냐</strong>가 AI 추천을 가릅니다.
              닫힌 문 안에 쌓은 글은 존재하지 않는 글과 같습니다. AI가 읽을 수 있는 곳 —{" "}
              <strong className="text-white">자기 소유의 홈페이지</strong> — 에 거점을 두세요.
              그것이 GEO(AI 검색 최적화)의 첫걸음입니다.
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
              우리 가게 문은 위즈에게 열려 있을까요?
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
