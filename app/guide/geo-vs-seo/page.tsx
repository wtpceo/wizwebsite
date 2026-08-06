import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 47자
const TITLE = "GEO와 SEO 차이 — 검색 1위인데 ChatGPT엔 안 나온 이유"
const DESC =
  "SEO는 검색 결과 목록에서 위로 올라가는 일이고, GEO는 AI가 만든 답변 안에 들어가는 일입니다. 둘은 겹치지만 같지 않습니다. 저희 페이지는 네이버 AI 브리핑 1위, 구글 2위였는데도 ChatGPT에는 나오지 않았습니다. 목표·신호·측정·기간이 어떻게 다른지, 왜 검색 상위가 AI 추천을 보장하지 못하는지 실측 사례로 정리했습니다."
const DATE = "2026-08-06"
const URL = "https://wiztheplanning.com/guide/geo-vs-seo"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "GEO SEO 차이", "GEO와 SEO", "geo seo", "GEO 검색 최적화", "GEO 마케팅이란",
    "AI 검색 최적화 차이", "생성형 엔진 최적화", "SEO 필요없나",
  ],
  alternates: { canonical: "/guide/geo-vs-seo" },
  openGraph: {
    images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "ko",
  author: { "@id": "https://wiztheplanning.com/#organization" },
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  mainEntityOfPage: URL,
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "GEO와 SEO의 차이는 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO는 검색 결과 목록에서 상위로 올라가는 것이 목표이고, GEO는 AI가 생성한 답변 안에 인용되는 것이 목표입니다. SEO의 결과물은 링크 목록이고 GEO의 결과물은 AI가 쓴 문장입니다. 확인 방법도 달라서, SEO는 검색해 순위를 보지만 GEO는 AI에 질문해 언급되는지를 봐야 합니다.",
      },
    },
    {
      "@type": "Question",
      name: "검색 순위가 높으면 AI도 추천해주나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "보장되지 않습니다. 저희가 직접 실험한 결과, '병원 GEO 대행' 검색에서 네이버 AI 브리핑 1위, 구글 2위였던 페이지가 ChatGPT에는 나오지 않았습니다. 생성형 AI는 자사 도메인의 최적화 수준만 보는 것이 아니라 여러 독립 출처가 공통으로 언급하는지(제3자 교차 근거)를 함께 보고, 엔진마다 참고하는 색인이 다르기 때문입니다.",
      },
    },
    {
      "@type": "Question",
      name: "GEO를 하면 SEO는 안 해도 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아닙니다. SEO는 GEO의 기반입니다. 검색엔진이 읽지 못하는 페이지는 AI도 읽지 못하고, 구글 AI 개요처럼 자사 색인과 순위를 기반으로 답을 만드는 엔진도 있습니다. SEO를 대체하는 것이 아니라, SEO 위에 제3자 근거와 정보 일관성을 더 쌓는 작업이 GEO입니다.",
      },
    },
    {
      "@type": "Question",
      name: "GEO 성과는 어떻게 확인하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "검색 순위처럼 한 번 보고 끝나지 않습니다. 고객이 실제로 쓸 법한 질문을 정해 두고, ChatGPT·제미나이·네이버 AI에 반복해서 물어보며 언급 여부를 기록해 경향을 봐야 합니다. AI 답변은 같은 질문에도 매번 달라지기 때문에 단발 확인이 아니라 월 단위 추이로 판단하는 것이 맞습니다.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/geo-vs-seo"
        kicker="GEO 기초 · 자체 실측"
        title={TITLE}
        description={DESC}
        date="2026년 8월 6일"
      >
        {/* 결론 우선 — 상단 150자 이내 */}
        <p>
          <strong>SEO는 검색 결과 목록에서 위로 올라가는 일이고, GEO는 AI가 만든 답변 안에 들어가는
          일입니다.</strong> 겹치는 부분이 있지만 같은 게임은 아닙니다. 검색 1위인데 ChatGPT에는 안
          나오는 일이 실제로 일어나며, 저희 사이트에서 직접 겪었습니다.
        </p>

        <h2>한눈에 보는 차이</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">구분</th>
                <th className="px-4 py-3 font-bold text-gray-900">SEO</th>
                <th className="px-4 py-3 font-bold text-gray-900">GEO</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["무대", "검색 결과 페이지", "AI가 생성한 답변"],
                ["목표", "순위 상승", "인용·추천"],
                ["결과물", "링크 목록", "AI가 쓴 문장"],
                ["핵심 신호", "키워드·링크·기술 최적화", "정보 일관성·제3자 교차 근거·구조화"],
                ["확인 방법", "검색해서 순위 보기", "AI에 질문해 언급 여부 보기"],
                ["측정 성격", "순위는 비교적 안정적", "답변이 매번 달라 추이로 판단"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>우리 사이트로 직접 확인한 차이</h2>
        <p>
          개념만으로는 와닿지 않아서, 저희 페이지를 실험대에 올렸습니다.{" "}
          <strong>&lsquo;병원 GEO 대행&rsquo;</strong> 키워드로 만든 서비스 페이지를 공개하고 이틀 뒤
          결과를 확인했습니다.
        </p>

        <h3>검색엔진 성적: 상위권</h3>
        <ul>
          <CheckItem><strong>네이버 AI 브리핑 1위</strong> — 답변 카드 최상단 인용</CheckItem>
          <CheckItem><strong>구글 검색 2위</strong> — 광고 제외 자연 검색 상단</CheckItem>
          <CheckItem><strong>네이버 통합검색 4위</strong></CheckItem>
        </ul>

        <h3>그런데 ChatGPT: 없음</h3>
        <p>
          같은 키워드로 ChatGPT·제미나이·퍼플렉시티에 &ldquo;병원 GEO 대행 추천해줘&rdquo;라고 물으면{" "}
          <strong>저희 회사는 나오지 않았습니다.</strong> 네이버 AI 1위, 구글 2위인 회사가 말이죠.
          전체 과정은 <a href="/guide/ranked-but-not-in-chatgpt">우리 사이트로 직접 한 GEO 실험</a>에
          기록해 두었습니다.
        </p>
        <Callout>
          이것이 <strong>&ldquo;SEO 잘하면 GEO도 된다&rdquo;가 사실이 아니라는 증거</strong>입니다.
          검색엔진 최적화는 필수 기반이지만, 그 자체로 생성형 AI의 추천을 보장하지 않습니다.
        </Callout>

        <h2>왜 갈릴까 — 세 가지 이유</h2>

        <h3>1. AI는 &lsquo;남이 말해주는 것&rsquo;을 더 믿는다</h3>
        <p>
          생성형 AI는 <strong>자기가 자기를 추천하는 1차 출처를 약하게 봅니다.</strong> 대신 여러
          독립된 곳에서 공통으로 언급되는지를 봅니다. 쉽게 말해, 내 홈페이지에 &ldquo;우리가
          최고&rdquo;라고 백 번 쓰는 것보다 <strong>다른 사이트 한 곳이 나를 언급하는 게 더 크게
          작용</strong>합니다. 순위 싸움과는 다른 종류의 일입니다.
        </p>
        <p>
          저희가 관찰한 한 식당 사례에서도 AI는 그 가게를 추천하며 홈페이지가 아니라 제3자
          플랫폼을 인용했습니다 —{" "}
          <a href="/guide/case-third-party-citation">홈페이지는 인용되지 않아도 인용을 만들어낸다</a>.
        </p>

        <h3>2. 엔진마다 보는 색인이 다르다</h3>
        <p>
          네이버 AI는 네이버 안의 데이터를, 구글 AI 개요는 구글 색인을 봅니다. 그런데{" "}
          <strong>ChatGPT 검색은 빙 색인을 주요 소스로 참고</strong>합니다. 즉 네이버·구글에서 아무리
          잘 나와도 <strong>빙이 내 페이지를 읽지 않았다면 ChatGPT에는 인용될 근거가 없습니다.</strong>
        </p>
        <p>
          저희 실측에서 같은 글을 구글은 3일 만에 크롤·색인했지만 빙은 8일이 지나도록 읽지
          않았습니다(<a href="/guide/bing-index-bottleneck">기록 보기</a>). 엔진별로 시계가 다르다는
          뜻입니다. 여기에 더해 네이버는 robots.txt로 AI 크롤러의 접근 자체를 막고 있어서, 네이버
          안의 콘텐츠는 글로벌 AI가 읽지 못합니다(
          <a href="/guide/naver-blocks-ai-crawlers">원문 확인</a>).
        </p>

        <h3>3. 학습된 지식에는 시차가 있다</h3>
        <p>
          AI가 &ldquo;추천해줘&rdquo;에 답할 때는 실시간 검색만 쓰는 게 아니라 이미 학습된 지식에서도
          꺼냅니다. 최근에 만든 페이지는 아직 모델의 &lsquo;기억&rsquo;에 들어가 있지 않습니다.
          검색엔진은 색인만 되면 며칠 만에 반영되지만, <strong>모델의 학습 반영은 그보다 훨씬
          느립니다.</strong>
        </p>

        <h2>그럼 SEO는 안 해도 되나</h2>
        <p>
          <strong>아닙니다. SEO는 GEO의 기반입니다.</strong> 이유는 단순합니다.
        </p>
        <ul>
          <CheckItem>
            검색엔진이 못 읽는 페이지는 <strong>AI도 못 읽습니다.</strong> 크롤러 접근·렌더링 같은
            기술 기반은 양쪽 모두의 전제 조건입니다.
          </CheckItem>
          <CheckItem>
            구글 AI 개요처럼 <strong>자사 색인과 순위를 근거로 답을 만드는 엔진</strong>도 있습니다.
            이 경로에서는 SEO 성과가 곧 GEO 성과입니다.
          </CheckItem>
          <CheckItem>
            GEO는 SEO를 <strong>대체하는 게 아니라 그 위에 얹는 작업</strong>입니다. 정보 일관성,
            제3자 근거, 질문형 콘텐츠와 구조화 데이터가 추가로 필요할 뿐입니다.
          </CheckItem>
        </ul>

        <h2>성과를 확인하는 방법도 다르다</h2>
        <p>
          SEO는 검색해서 순위를 보면 끝나지만, GEO는 그렇지 않습니다.{" "}
          <strong>AI 답변은 같은 질문에도 매번 달라지기 때문에</strong> 한 번 확인한 결과를 성과라고
          말할 수 없습니다.
        </p>
        <ul>
          <CheckItem>
            고객이 실제로 쓸 법한 <strong>질문 목록을 먼저 정해</strong> 둡니다.
          </CheckItem>
          <CheckItem>
            같은 질문을 <strong>여러 번, 여러 엔진에</strong> 넣어 언급 여부를 기록합니다.
          </CheckItem>
          <CheckItem>
            단발 결과가 아니라 <strong>월 단위 추이</strong>로 판단합니다.
          </CheckItem>
        </ul>
        <p>
          그래서 &ldquo;AI 노출을 보장한다&rdquo;는 약속은 구조적으로 성립하기 어렵습니다. 업체를
          고르는 기준은 <a href="/guide/how-to-choose-geo-agency">계약 전 물어봐야 할 7가지 질문</a>에
          정리했습니다.
        </p>

        <h2>정리</h2>
        <p>
          <strong>SEO는 목록에서 위로 가는 일, GEO는 답변 안으로 들어가는 일.</strong> 기반은
          공유하지만 목표·신호·측정이 다릅니다. 검색 순위가 높다고 안심할 수 없고, 반대로 SEO를
          건너뛰고 GEO만 할 수도 없습니다. 두 가지를 순서대로 쌓아야 합니다.
        </p>
        <p>
          GEO의 정의부터 최적화 방법, 진단법까지는{" "}
          <a href="/guide/geo">GEO 총정리</a>에 한 페이지로 모아 두었습니다. 우리 홈페이지가 지금
          AI 크롤러에게 열려 있는지는 <a href="/site-check">무료 사이트 진단</a>으로 1분이면
          확인됩니다.
        </p>
      </GuideArticle>
    </>
  )
}
