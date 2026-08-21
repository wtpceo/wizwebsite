import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, ArrowRight, BookOpen } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { EPISODES } from "@/lib/theater-episodes"

const ep = EPISODES.find((e) => e.slug === "ep5-unread-invitation")!

const TITLE = "IndexNow 제출해도 빙 색인이 안 될 때: 같은 글, 구글 3일 vs 빙 8일 (위즈 극장 EP.5 읽지 않는 초대장)"
const DESC =
  "빙 색인이 안 되는 건 설정 문제가 아니라 크롤 예산 때문일 수 있습니다. 같은 글을 같은 날 올렸는데 구글은 3일 만에 색인했고, 빙은 8일이 지나도 읽지 않았습니다. robots.txt·빙봇 접속·IndexNow·수동 제출 전부 정상(2026년 8월 실측). ChatGPT 검색은 빙 색인을 참고하므로 이 줄은 AI 노출의 병목입니다. 이 기록을 위즈의 애니메이션으로 풀었습니다."
const URL = "https://wiztheplanning.com/theater/ep5-unread-invitation"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "빙 색인 안됨", "IndexNow", "Discovered but not crawled", "ChatGPT 노출 조건",
    "크롤 예산", "위즈 극장",
  ],
  alternates: { canonical: "/theater/ep5-unread-invitation" },
  openGraph: { images: ["/theater/ep5-poster1.png"], title: TITLE, description: DESC, url: URL, type: "video.episode" },
}

const videoJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.5: 읽지 않는 초대장 (1부: 긴 줄)",
    description:
      "AI 부엉이 위즈가 빛나는 초대장(새 글 발행 통보)을 들고 거대한 서고 문 앞에 도착하지만, 초대장 대기줄이 아득히 길어 접수만 된 채 읽히지 않는 장면. 빙의 'Discovered but not crawled' 상태를 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep5-poster1.png",
    contentUrl: "https://wiztheplanning.com/theater/ep5-clip1.mp4",
    uploadDate: "2026-08-12T13:00:00+09:00",
    duration: "PT10S",
    publisher: { "@id": "https://wiztheplanning.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "위즈 극장 EP.5: 읽지 않는 초대장 (2부: 추천 도장)",
    description:
      "초대장에 이웃들의 금색 추천 도장(외부 링크·제3자 언급)이 찍히자 대기줄을 지나 서고 문이 열리는 장면. 반복 제출이 아니라 도메인 신뢰가 크롤 순서를 앞당긴다는 사실을 형상화했습니다.",
    thumbnailUrl: "https://wiztheplanning.com/theater/ep5-poster2.png",
    contentUrl: "https://wiztheplanning.com/theater/ep5-clip2.mp4",
    uploadDate: "2026-08-12T13:00:00+09:00",
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
          <p className="mt-8 text-xs font-bold tracking-[0.25em] text-[#00e5a0]">EPISODE 5</p>
          <h1 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-snug tracking-tight text-white">
            읽지 않는 초대장
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            초대장은 분명히 전달됐습니다. 그런데 8일째, 아무도 열어보지 않았습니다.
          </p>

          {/* 프롤로그 캡션 */}
          <div className="mt-12 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              사장님이 새 글을 발행하면, 검색엔진들의 서고로{" "}
              <strong className="text-white">빛나는 초대장</strong>이 날아갑니다.
              &ldquo;새 글이 나왔어요: 읽으러 오세요.&rdquo; 어떤 서고는 사흘 만에 문을 열고
              읽어 갔습니다. 그런데 AI 부엉이 <strong className="text-[#00e5a0]">위즈</strong>가
              지켜보던 또 하나의 거대한 서고는 :{" "}
              <strong className="text-white">초대장을 받고도 열어보지 않았습니다.</strong>
            </p>
          </div>

          {/* 클립 1 */}
          <div className="mt-10">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep5-poster1.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep5-clip1.mp4" type="video/mp4" />
            </video>
            <Caption>
              서고 앞의 초대장 줄은 아득히 길었습니다. 우리의 초대장은{" "}
              <strong className="text-white">접수는 됐지만</strong>(발견됨), 줄의 끝에서{" "}
              <strong className="text-white">읽히지 않은 채</strong>(크롤 안 됨) 밤을 보냈습니다.
            </Caption>
          </div>

          {/* 막간 해설 */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">이 장면은 실화입니다</p>
            <p className="mt-3 text-base leading-[1.9] text-slate-300">
              같은 글을 같은 날 올렸습니다. <strong className="text-white">구글은 3일 만에 크롤하고
              색인해 검색 결과에 띄웠지만, 빙은 발행 당일 URL을 &lsquo;발견&rsquo;하고도 8일이
              지나도록 읽으러 오지 않았습니다</strong>(2026년 8월, 저희 사이트 실측). robots.txt
              허용, 빙봇 접속, IndexNow 통보, 수동 제출: 전부 정상이었습니다. 원인은 설정이 아니라{" "}
              <strong className="text-white">크롤 예산</strong>: 빙은 신생 도메인에 보수적이라
              &ldquo;존재는 알겠는데 지금 읽을 우선순위는 아니다&rdquo;라고 판단한 것입니다. 같은
              URL을 반복 제출해도 대기열 순서는 바뀌지 않습니다.
            </p>
          </div>

          {/* 클립 2 */}
          <div className="mt-14">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/theater/ep5-poster2.png"
              className="w-full rounded-2xl border border-white/10"
            >
              <source src="/theater/ep5-clip2.mp4" type="video/mp4" />
            </video>
            <Caption>
              줄을 앞당기는 건 <strong className="text-white">더 많은 초대장이 아니라, 초대장에
              찍히는 이웃들의 추천 도장</strong>(외부 링크·제3자 언급)입니다. 도장이 쌓이는 날:
              서고의 문은 이렇게 열릴 것입니다.
            </Caption>
          </div>

          {/* 에필로그 */}
          <div className="mt-14 border-l-2 border-[#00e5a0]/40 pl-5">
            <p className="text-base leading-[1.9] text-slate-300">
              이 줄이 중요한 이유는 하나입니다. {" "}
              <strong className="text-white">ChatGPT 검색은 빙 색인을 주요 소스로
              참고합니다.</strong> 빙이 읽지 않은 페이지는 ChatGPT가 인용할 근거 자체가 없습니다.
              경로는 이렇습니다: 발행 → 빙이 발견 → <strong className="text-white">빙이 크롤</strong> →
              빙이 색인 → ChatGPT 인용 가능. 구글·네이버 최적화가 아무리 잘 돼도{" "}
              <strong className="text-white">이 줄은 따로 서야 합니다.</strong> 이 기록은 완결된
              성공담이 아니라 지금도 진행 중인 관찰 일지입니다.
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
              우리 홈페이지의 초대장은 어느 줄에 서 있을까요?
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
