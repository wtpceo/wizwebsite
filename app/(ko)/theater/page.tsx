import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import InsightHero from "@/components/shortform/InsightHero"
import { DocShell } from "@/components/shortform/DocParts"
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
  openGraph: { images: ["/theater/ep1-poster1.jpg"], title: TITLE, description: SERIES_DESC, url: URL, type: "website" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: SERIES_NAME,
  description: SERIES_DESC,
  url: URL,
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
}

// 11-08 대표 「인사이트 메뉴도 디자인 통일」: 청록 무대 → 서비스 페이지와 같은 남색·위즈블루. 포스터 벽 첫 화면, 에피소드 카드, 진단 띠
export default function Page() {
  const posters = EPISODES.map((e) => e.poster)
  return (
    <DocShell>
      <div className="gx ix vx cx it">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <InsightHero
          label="위즈 극장 소개"
          kw="WIZ Theater · 위즈 극장"
          text={"AI 부엉이 위즈가\nGEO를 풀어 드립니다"}
          mark="GEO를 풀어"
          era="모든 에피소드는 저희가 직접 잰 사실이 원작입니다"
          lead={
            <>
              밤마다 웹을 읽으러 다니는 AI 부엉이 위즈(Wiz)의 이야기로,
              <br />
              GEO(AI 검색 최적화)가 무엇이고 <span className="nw">무엇을 해야 하는지 쉽게 풀어냅니다.</span>
            </>
          }
          imgs={[...posters, ...posters, ...posters]}
          cue={{ href: "#episodes", label: "에피소드" }}
        />

        <section className="dp-sec geo-sec rv it-eps" id="episodes">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">에피소드</p>
                <h2>
                  {SERIES_NAME},{" "}
                  <br />
                  <span>한 편씩 보세요</span>
                </h2>
              </div>
              <p className="geo-lead">
                편마다 GEO에서 자주 막히는 일 하나를 다룹니다. 원작이 된 실측 기록은 <Link href="/guide">마케팅 칼럼</Link>에 있습니다.
              </p>
            </div>
            <ul className="it-grid">
              {EPISODES.map((e, i) =>
                e.status === "published" ? (
                  <li key={e.slug} style={{ ["--i" as string]: i }}>
                    <Link href={`/theater/${e.slug}`}>
                      <figure>
                        <img src={e.poster} alt={e.title} loading={i < 3 ? "eager" : "lazy"} decoding="async" />
                        <em>EP.{e.ep}</em>
                      </figure>
                      <div>
                        <b>{e.title}</b>
                        <span>{e.logline}</span>
                        <span className="it-go">
                          감상하기 <ArrowRight aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li key={e.slug} className="soon" style={{ ["--i" as string]: i }}>
                    <div className="it-card">
                      <figure>
                        <img src={e.poster} alt={e.title} loading="lazy" decoding="async" />
                        <em>EP.{e.ep} · 준비 중</em>
                      </figure>
                      <div>
                        <b>{e.title}</b>
                        <span>{e.logline}</span>
                      </div>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        <section className="ig-cta" aria-label="무료 진단">
          <div className="dp-w ig-cta-in">
            <div>
              <h2>위즈가 우리 가게 문은 열 수 있을까요?</h2>
              <p>
                무료 사이트 진단으로 AI 크롤러가 우리 홈페이지를 읽을 수 있는지 1분 만에 확인하세요. 어느 편이 우리 가게 이야기 같다면 <Link href="/#c44">무료 AI 검색 진단</Link>을 신청해 보세요. ChatGPT·네이버 AI·제미나이가 우리 가게를 실제로 추천하는지 리포트로 보내 드립니다.
              </p>
            </div>
            <Link className="p1" href="/site-check">
              무료 사이트 진단 <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </DocShell>
  )
}
