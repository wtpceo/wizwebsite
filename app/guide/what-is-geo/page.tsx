import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "AI 검색 최적화(GEO)란? 자영업 사장님을 위한 쉬운 설명"
const DESC =
  "GEO(Generative Engine Optimization)는 ChatGPT·퍼플렉시티·네이버 AI가 답변할 때 우리 매장을 인용하고 추천하게 만드는 마케팅입니다. SEO와의 차이, 작동 원리, 지금 시작해야 하는 이유를 정리했습니다."
const DATE = "2026-07-08"

export const metadata: Metadata = {
  title: "AI 검색 최적화(GEO)란? 자영업 사장님을 위한 쉬운 설명",
  description: DESC,
  alternates: { canonical: "/guide/what-is-geo" },
  openGraph: {
    images: ["/thumbnail.png"], title: TITLE, description: DESC, url: "https://wiztheplanning.com/guide/what-is-geo", type: "article" },
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
  mainEntityOfPage: "https://wiztheplanning.com/guide/what-is-geo",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle href="/guide/what-is-geo" kicker="GEO BASICS" title={TITLE} description={DESC} date="2026년 7월 8일">
        <p>
          결론부터 말씀드리면, AI 검색 최적화(GEO, Generative Engine Optimization)는{" "}
          <strong>ChatGPT, 퍼플렉시티, 네이버 AI 같은 생성형 AI가 답변을 만들 때 우리 매장을 인용하고
          추천하도록 만드는 마케팅</strong>입니다. 고객이 "강남역 근처 회식하기 좋은 고깃집 추천해줘"라고
          AI에게 물었을 때, AI의 답변 속에 우리 가게 이름이 나오게 하는 작업이라고 이해하시면 됩니다.
        </p>

        <h2>검색의 방식이 바뀌고 있습니다</h2>
        <p>
          지금까지 고객은 네이버나 구글에 키워드를 검색하고, 나온 목록을 하나씩 훑어보며 가게를
          골랐습니다. 그런데 생성형 AI가 보편화되면서 행동이 달라졌습니다. 고객은 이제 목록을 받는
          대신 <strong>AI에게 질문하고 '답 하나'를 받습니다.</strong> AI는 여러 후보를 나열하기보다
          결론을 말하기 때문에, AI의 답변에 포함되지 못한 매장은 고객의 선택지에서 아예 사라집니다.
        </p>

        <h2>SEO와 GEO, 무엇이 다른가요?</h2>
        <p>
          SEO(검색엔진 최적화)는 검색 결과 <strong>목록의 상위</strong>에 노출되는 것이 목표입니다.
          반면 GEO는 AI가 만드는 <strong>답변의 내용</strong>에 인용되는 것이 목표입니다. 구체적으로
          이렇게 다릅니다.
        </p>
        <ul>
          <CheckItem>SEO: 키워드·순위 경쟁 → 클릭을 받아야 매장이 알려짐</CheckItem>
          <CheckItem>GEO: 신뢰 데이터 경쟁 → AI의 답변 속에 언급되어야 선택받음</CheckItem>
          <CheckItem>SEO는 페이지를 노출시키고, GEO는 매장 자체를 추천받게 만듭니다</CheckItem>
        </ul>

        <h2>AI는 아무 가게나 추천하지 않습니다</h2>
        <p>
          AI는 답변을 만들 때 네이버 플레이스, 방문자 리뷰, 블로그 후기, 매장 웹사이트, 병원·매장
          디렉토리 같은 <strong>공개된 데이터를 근거로 인용</strong>합니다. 따라서 매장 정보가 소스마다
          다르거나(옛 주소, 잘못된 전화번호), 콘텐츠가 부족하면 AI는 그 매장을 신뢰하지 않고 답변에서
          제외합니다. 심한 경우 AI가 <strong>잘못된 전화번호나 위치를 손님에게 안내</strong>하는 일도
          실제로 일어납니다.
        </p>
        <Callout>
          실제 진단 사례: 한 병원의 경우 네이버 AI와 제미나이가 서로 다른 옛 전화번호를 안내하고
          있었고, ChatGPT는 위치를 다른 동네로 답하고 있었습니다. 이런 오정보 교정이 GEO의 첫 단계입니다.
        </Callout>

        <h2>GEO는 어떤 순서로 진행되나요?</h2>
        <ol>
          <CheckItem>
            <strong>AI 검색 진단</strong> — 네이버 AI·ChatGPT·제미나이에 실제 고객 질문을 던져 우리
            매장의 언급 점유율과 오정보를 측정합니다.
          </CheckItem>
          <CheckItem>
            <strong>매장 데이터 구조화</strong> — 플레이스·웹사이트·메뉴·가격 정보를 AI가 읽고 신뢰할
            수 있는 형태로 정리하고 일치시킵니다.
          </CheckItem>
          <CheckItem>
            <strong>인용되는 콘텐츠 제작</strong> — AI가 답변에 인용하는 리뷰·블로그·미디어 콘텐츠를
            만듭니다.
          </CheckItem>
          <CheckItem>
            <strong>AI 노출 모니터링</strong> — 질문별 AI 답변 노출을 주기적으로 추적하고 매월
            리포트로 보고합니다.
          </CheckItem>
        </ol>

        <p>
          이 과정을 직접 하기 어려워 대행을 검토하고 있다면, 계약 전에 확인할 기준을{" "}
          <a href="/guide/how-to-choose-geo-agency">GEO 대행사 고르는 법 — 계약 전에 물어봐야 할
          7가지 질문</a>에 정리해 두었습니다.
        </p>

        <p>
          GEO의 정의·최적화 방법·진단법·대행 판단 기준을 한 페이지에 모아둔{" "}
          <a href="/guide/geo">GEO 총정리</a>도 함께 보시면 전체 그림이 잡힙니다.
        </p>

        <h2>왜 지금 시작해야 하나요?</h2>
        <p>
          국내 자영업 시장에서 GEO는 이제 시작 단계입니다. AI는 한 번 신뢰한 출처를 반복해서 인용하는
          경향이 있어서, <strong>먼저 최적화한 매장이 우리 동네의 'AI 추천 1순위' 자리를 선점</strong>
          합니다. 경쟁사가 시작하기 전에 데이터를 쌓아두는 것이 가장 저렴한 전략입니다.
        </p>
      </GuideArticle>
    </>
  )
}
