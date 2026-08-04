import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, ArrowRight, BookOpen } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { EPISODES } from "@/lib/theater-episodes"

const ep = EPISODES.find((e) => e.slug === "ep3-invisible-wall")!

const TITLE = "위즈 극장 EP.3 보이지 않는 벽 — 문은 열려 있는데 위즈만 튕겨 나간다"
const DESC =
  "밤마다 웹을 읽으러 다니는 AI 부엉이 위즈. 오늘 밤 위즈는 활짝 열린 병원 문 앞에서 보이지 않는 벽에 튕겨 나왔습니다. 사람은 드나드는데 AI만 막는 벽 — ChatGPT에 아예 안 뜨던 병원의 원인이 홈페이지 방화벽이었던 실제 사례를 원작으로 한 애니메이션과 전체 해설."
const URL = "https://wiztheplanning.com/theater/ep3-invisible-wall"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "병원 ChatGPT 안 나옴", "홈페이지 방화벽 AI 차단", "크롤러 차단 확인", "병원 GEO 사례",
    "위즈 극장", "GEO 애니메이션",
  ],
  alternates: { canonical: "/theater/ep3-invisible-wall" },
  openGraph: { images: ["/theater/ep3-poster1.png"], title: TITLE, description: DESC, url: URL, type: "video.episode" },
}

const videoJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.3 — 보이지 않는 벽 (1부: 튕겨 나온 위즈)",
    description:
      "AI 부엉이 위즈가 활짝 열린 병원 문으로 들어가려다 보이지 않는 벽에 튕겨 나오는 장면. 사람은 그대로 드나드는데 위즈만 막힙니다. 홈페이지 보안 방화벽이 AI 크롤러를 차단하던 실제 사례를 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep3-poster1.png",
    contentUrl: "https://wiztheplanning.com/theater/ep3-clip1.mp4",
    uploadDate: "2026-08-04T10:00:00+09:00",
    duration: "PT10S",
    publisher: { "@id": "https://wiztheplanning.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.3 — 보이지 않는 벽 (2부: 벽이 걷힌 날)",
    description:
      "붉은 방화벽이 걷히고 위즈가 드디어 병원 안으로 들어가 진료 안내를 읽는 장면. 차단 해제 후 AI가 병원 정보를 읽을 수 있게 된 순간을 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep3-poster2.png",
    contentUrl: "https://wiztheplanning.com/theater/ep3-clip2.mp4",
    uploadDate: "2026-08-04T10:00:00+09:00",
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
          <p className="mt-8 text-xs font-bold tracking-[0.25em] text-[#00e5a0]">EPISODE 3</p>
          <h1 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-snug tracking-tight text-white">
            보이지 않는 벽
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            문은 활짝 열려 있는데, 위즈만 들어갈 수 없었습니다.
          </p>

          {/* 프롤로그 캡션 */}
          <div className="mt-12 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              <Link href="/theater/ep1-closed-door" className="font-bold text-[#00e5a0] hover:underline">닫힌 문</Link>도,{" "}
              <Link href="/theater/ep2-half-open-door" className="font-bold text-[#00e5a0] hover:underline">반쪽 문</Link>도
              지나온 AI 부엉이 <strong className="text-[#00e5a0]">위즈</strong>. 오늘 밤 도착한 곳은
              불이 환하게 켜진 <strong className="text-white">병원</strong>입니다. 문은 활짝 열려
              있고, 사람들은 자유롭게 드나듭니다. 위즈는 안심하고 날아 들어갔습니다 — 그런데.
            </p>
          </div>

          {/* 클립 1 */}
          <div className="mt-10">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep3-poster1.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep3-clip1.mp4" type="video/mp4" />
            </video>
            <Caption>
              <strong className="text-white">퉁 —.</strong> 열린 문 앞에서 위즈만 튕겨 나왔습니다.
              부딪힌 자리에 붉은 무늬가 일렁입니다. 사람들에게는 없는 벽이,{" "}
              <strong className="text-white">위즈에게만 있습니다.</strong>
            </Caption>
          </div>

          {/* 막간 해설 */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">이 장면은 실화입니다</p>
            <p className="mt-3 text-base leading-[1.9] text-slate-300">
              수도권의 한 비뇨의학과는 홈페이지와 콘텐츠를 갖추고도{" "}
              <strong className="text-white">ChatGPT에서 아예 검색되지 않았습니다.</strong> 원인은
              콘텐츠가 아니라, 홈페이지 제작사가 기본값으로 켜 둔{" "}
              <strong className="text-white">보안 방화벽이 AI 크롤러까지 막고 있던 것</strong>이었습니다.
              사람 방문자에게는 멀쩡히 보이는 홈페이지가 AI에게는 존재하지 않는 것과 같았습니다.
              차단 해제와 홈페이지 전면 개선 후 6개월, 이 병원은 ChatGPT·구글·네이버 모두에
              안정적으로 노출되고 있습니다.
            </p>
          </div>

          {/* 클립 2 */}
          <div className="mt-14">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep3-poster2.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep3-clip2.mp4" type="video/mp4" />
            </video>
            <Caption>
              벽이 걷히자 위즈는 드디어 안으로 들어가{" "}
              <strong className="text-white">진료 안내를 읽었습니다.</strong> 그리고 얼마 뒤,
              누군가 AI에게 병원을 물었을 때 — <strong className="text-white">이 병원이 답에
              나오기 시작했습니다.</strong>
            </Caption>
          </div>

          {/* 에필로그 */}
          <div className="mt-14 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              차단은 네이버처럼 <strong className="text-white">정책으로 막는 경우</strong>(EP.1)도,
              다이닝코드처럼 <strong className="text-white">영리하게 골라 막는 경우</strong>(EP.2)도
              있지만 — 가장 안타까운 것은{" "}
              <strong className="text-white">나도 모르게 막고 있는 경우</strong>입니다. 홈페이지를
              잘 만들어 두고도 방화벽·보안 설정이 AI를 막고 있다면, 쌓은 콘텐츠는 AI에게 존재하지
              않는 글과 같습니다. 우리 홈페이지의 문이 정말 열려 있는지, 확인이 먼저입니다.
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
              우리 홈페이지에도 보이지 않는 벽이 있을까요?
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
