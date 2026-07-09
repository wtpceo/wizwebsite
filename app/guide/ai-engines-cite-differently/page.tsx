import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "ChatGPT와 네이버 AI는 왜 다른 가게를 추천할까 — 엔진별 인용 출처의 차이"
const DESC =
  "같은 질문을 해도 네이버 AI, ChatGPT, 구글 AI는 서로 다른 매장을 추천합니다. 엔진마다 근거로 삼는 출처가 다르기 때문입니다. 어떤 AI가 어디를 보는지, 그래서 무엇을 준비해야 하는지 정리했습니다."
const DATE = "2026-07-09"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guide/ai-engines-cite-differently" },
  openGraph: { title: TITLE, description: DESC, url: "https://wiztheplanning.com/guide/ai-engines-cite-differently", type: "article" },
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
  mainEntityOfPage: "https://wiztheplanning.com/guide/ai-engines-cite-differently",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle kicker="GEO INSIGHT" title={TITLE} description={DESC} date="2026년 7월 9일">
        <p>
          "우리 동네 맛집 추천해줘"라고 네이버 AI, ChatGPT, 구글에 각각 물어보면 <strong>서로 다른
          가게가 나옵니다.</strong> 겹치는 경우가 오히려 드뭅니다. 이유는 단순합니다. 엔진마다 답변의
          근거로 삼는 출처가 완전히 다르기 때문입니다. 이 차이를 알면 "어디에 힘을 줄지"가 명확해집니다.
        </p>

        <h2>네이버 AI — 리뷰와 후기 블로그를 본다</h2>
        <p>
          네이버 AI는 <strong>네이버 플레이스 리뷰와 후기 블로그</strong>를 근거로 답변을 만듭니다.
          리뷰 속의 구체적인 표현("친절하게 설명해줬다", "대기가 짧았다", "재방문 의사 있다")을 그대로
          추천 근거로 인용합니다. 즉 네이버에서 인용받으려면 이런 신호가 중요합니다.
        </p>
        <ul>
          <CheckItem>리뷰의 <strong>양(볼륨)</strong> — 리뷰가 충분히 쌓여 있는가</CheckItem>
          <CheckItem>리뷰에 반복되는 <strong>일관된 속성어</strong> — 같은 장점이 여러 리뷰에 반복되는가</CheckItem>
          <CheckItem>리뷰의 <strong>최신성</strong> — 최근에도 리뷰가 꾸준히 달리는가</CheckItem>
          <CheckItem>플레이스 <strong>소식</strong>과 업체 정보가 채워져 있는가</CheckItem>
        </ul>

        <h2>ChatGPT·구글 AI — 홈페이지와 디렉토리를 본다</h2>
        <p>
          ChatGPT와 구글 AI는 <strong>업체 자체 웹사이트</strong>와 전문 디렉토리(업종별 정보 플랫폼)를
          주로 인용합니다. 여기엔 결정적인 이유가 있습니다.
        </p>
        <Callout>
          <strong>네이버는 외부 AI 크롤러의 접근을 막고 있습니다.</strong> 그래서 ChatGPT 같은 외부
          AI는 네이버 플레이스나 네이버 블로그를 가져가지 못합니다. 결국 이들은 네이버 밖의 소스 —
          <strong> 업체 홈페이지, 티스토리, 디렉토리, 유튜브</strong>에 의존할 수밖에 없습니다.
        </Callout>
        <p>
          이 사실의 함의는 큽니다. <strong>홈페이지가 부실하면 ChatGPT·구글 AI 답변에서는 거의 나올
          수 없다</strong>는 뜻입니다. 반대로, 우리가 100% 통제할 수 있는 유일한 인용 표면이 바로
          홈페이지라는 뜻이기도 합니다.
        </p>

        <h2>구글 AI — 정보성 질문엔 뜨고, 로컬 추천엔 잘 안 뜬다</h2>
        <p>
          구글 AI 개요는 <strong>"임플란트 비용은?", "필라테스 효과는?"</strong> 같은 정보성 질문에는
          잘 나타납니다. 하지만 <strong>"○○동 치과 추천"</strong> 같은 지역 추천 질문에서는 AI 개요
          대신 지도·플레이스가 답을 대신하는 경우가 많습니다. 그래서 구글에서는 정보성 콘텐츠로
          접근하는 것이 유효합니다.
        </p>

        <h2>브랜드명은 100%, 카테고리는 0% — 진짜 싸움은 카테고리</h2>
        <p>
          한 가지 더 알아둘 패턴이 있습니다. AI에게 <strong>우리 가게 이름을 직접 물으면</strong> 거의
          항상 정확히 압니다. 하지만 <strong>"○○ 추천"처럼 카테고리로 물으면</strong> 우리 가게가 잘
          나오지 않습니다. 즉 진짜 경쟁은 <strong>카테고리 추천 질문에서 호명되는 것</strong>이고,
          이것이 GEO의 핵심 목표입니다.
        </p>

        <h2>그래서 무엇을 준비해야 하나요?</h2>
        <p>
          엔진마다 출처가 다르니, 한쪽만 해서는 반쪽짜리입니다. 두 갈래를 모두 관리해야 합니다.
        </p>
        <ul>
          <CheckItem>
            <strong>네이버 축</strong>: 플레이스 정보 완비 + 자발적 리뷰의 양·최신성·일관된 속성 관리
          </CheckItem>
          <CheckItem>
            <strong>외부 AI 축</strong>: AI가 읽을 수 있는 홈페이지(텍스트 기반 HTML) + 질문형 정보
            콘텐츠 + 구조화 데이터(스키마)
          </CheckItem>
          <CheckItem>
            <strong>공통</strong>: 모든 채널의 기본정보(상호·주소·전화·영업시간)를 하나로 통일 — AI가
            오정보를 안내하는 사고를 막는 가장 기본적인 작업
          </CheckItem>
        </ul>

        <Callout>
          한 문장으로: <strong>네이버 AI는 리뷰를 보고, ChatGPT·구글은 홈페이지를 봅니다.</strong>{" "}
          우리 매장이 세 엔진에서 각각 어떻게 나오는지 궁금하다면, 위즈더플래닝의 무료 AI 검색 진단으로
          엔진별 노출 현황을 확인해 보세요.
        </Callout>
      </GuideArticle>
    </>
  )
}
