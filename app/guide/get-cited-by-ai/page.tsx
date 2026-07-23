import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "우리 가게가 AI 답변에 나오게 하는 7가지 방법"
const DESC =
  "ChatGPT와 네이버 AI가 인용하는 매장에는 공통점이 있습니다. 실제 진단 데이터에서 확인된, AI에게 추천받는 매장이 갖춘 7가지 요소를 정리했습니다."
const DATE = "2026-07-08"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guide/get-cited-by-ai" },
  openGraph: {
    images: ["/thumbnail.png"], title: TITLE, description: DESC, url: "https://wiztheplanning.com/guide/get-cited-by-ai", type: "article" },
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
  mainEntityOfPage: "https://wiztheplanning.com/guide/get-cited-by-ai",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle href="/guide/get-cited-by-ai" kicker="GEO PLAYBOOK" title={TITLE} description={DESC} date="2026년 7월 8일">
        <p>
          AI가 실제로 인용한 페이지들을 분석해 보면 공통 구조가 보입니다. 명확한 매장 식별 정보,
          실용 정보(위치·연락처·영업시간), 신뢰 요소(리뷰·평점), 구조화된 콘텐츠. 아래 7가지는 저희가
          실제 광고주 진단에서 반복 확인한, <strong>AI에게 추천받는 매장의 공통점</strong>입니다.
        </p>

        <h2>1. 기본 정보를 모든 채널에서 하나로 통일하세요</h2>
        <p>
          전화번호가 플레이스에는 새 번호, 옛 블로그에는 옛 번호로 남아 있으면 AI는 어느 쪽을 믿어야
          할지 판단하지 못하고, 최악의 경우 틀린 정보를 손님에게 안내합니다. 상호명, 주소(구주소·신주소),
          전화번호, 영업시간을 네이버 플레이스·웹사이트·SNS·디렉토리에서 <strong>완전히 동일하게</strong>
          맞추는 것이 가장 기본이면서 가장 효과가 빠른 작업입니다.
        </p>

        <h2>2. 고객의 실제 질문을 제목으로 쓰세요</h2>
        <p>
          AI는 사용자 질문과 가장 닮은 제목의 글을 우선 참고합니다. "6월 이벤트 안내" 같은 제목보다{" "}
          <strong>"○○동 수학학원 어디가 좋아?"</strong>처럼 고객이 실제로 묻는 문장을 그대로 제목으로
          쓴 글이 인용될 확률이 훨씬 높습니다. 글 하나에는 검색어 하나만 담으세요.
        </p>

        <h2>3. 첫 문단에서 결론부터 말하세요</h2>
        <p>
          AI는 글의 서두 요약을 통째로 발췌하는 경향이 강합니다. 질문에 대한 답을 3~4문장으로 먼저
          쓰고, 업체명·지역·핵심 강점을 첫 문장에 포함하세요. "아래에서 자세히 알아보겠습니다" 같은
          빈 문장으로 시작하면 발췌 대상에서 밀려납니다.
        </p>

        <h2>4. 숫자 리스트로 '고르는 기준'을 제시하세요</h2>
        <p>
          "○○ 고를 때 체크리스트 5가지" 같은 숫자 리스트는 AI가 비교·추천형 질문에 답할 때 골격으로
          삼는 블록입니다. 우리 매장이 그 기준을 충족한다는 내용과 함께 쓰면, 기준과 매장이 함께
          인용됩니다.
        </p>

        <h2>5. 리뷰를 최신 상태로 유지하세요</h2>
        <p>
          AI는 리뷰 수와 최신성을 신뢰 신호로 사용합니다. 반년 전 리뷰만 있는 매장보다 이번 달 리뷰가
          꾸준히 쌓이는 매장이 "지금 운영 중인 믿을 만한 곳"으로 판단됩니다. 방문 고객에게 리뷰를
          요청하는 루틴을 만들고, 낮은 평점 리뷰에는 정중한 답변을 남기세요.
        </p>

        <h2>6. 사진과 가격 정보를 공개하세요</h2>
        <p>
          AI가 인용하는 페이지들의 공통점 중 하나는 <strong>가격·비용 정보와 시각 자료</strong>가 있다는
          것입니다. 메뉴·시술·수업의 가격대를 명시하고, 내부 사진과 결과물 사진을 충분히 올려두면
          "가격 얼마야?", "분위기 어때?" 같은 질문에서 인용될 근거가 생깁니다.
        </p>

        <h2>7. FAQ 블록을 만들어 두세요</h2>
        <p>
          자주 묻는 질문(주차 되나요? 예약 없이 가도 되나요? 첫 방문인데 뭘 준비하나요?)을 질문-답변
          형태로 정리한 페이지는 AI가 개념 설명에 그대로 가져다 쓰기 가장 쉬운 블록입니다. 웹사이트와
          플레이스 양쪽에 FAQ를 정리해 두세요.
        </p>

        <Callout>
          이 7가지 중 우리 매장이 몇 개나 갖춰져 있는지 궁금하다면, 무료 AI 검색 진단으로 항목별
          채점 결과를 받아보실 수 있습니다. 인용된 경쟁 페이지들과의 격차도 함께 보여드립니다.
        </Callout>
      </GuideArticle>
    </>
  )
}
