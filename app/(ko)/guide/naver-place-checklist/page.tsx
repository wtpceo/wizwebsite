import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "네이버 플레이스 상위 노출 체크리스트 10가지"
const DESC =
  "네이버 플레이스는 지역 검색과 AI 답변의 근거가 되는 가장 중요한 채널입니다. 사장님이 오늘 바로 점검할 수 있는 플레이스 관리 체크리스트 10가지를 정리했습니다."
const DATE = "2026-07-08"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guide/naver-place-checklist" },
  openGraph: {
    images: ["/thumbnail.png"], title: TITLE, description: DESC, url: "https://wiztheplanning.com/guide/naver-place-checklist", type: "article" },
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
  mainEntityOfPage: "https://wiztheplanning.com/guide/naver-place-checklist",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle href="/guide/naver-place-checklist" kicker="NAVER PLACE" title={TITLE} description={DESC} date="2026년 7월 8일">
        <p>
          고객은 매장을 소개받아도 결국 네이버에 검색하고, 가장 먼저 나오는 플레이스를 보고
          첫인상을 결정합니다. 게다가 네이버 AI와 ChatGPT 같은 생성형 AI도{" "}
          <strong>플레이스 정보를 답변의 근거로 인용</strong>하기 때문에, 플레이스 관리는 지역
          검색과 AI 검색 최적화(GEO)의 공통 기반입니다. 아래 10가지를 순서대로 점검해 보세요.
        </p>

        <h2>기본 정보 (1~4)</h2>
        <ol>
          <CheckItem>
            <strong>영업시간·휴무일이 실제와 일치하는가</strong>: 휴게시간, 라스트오더, 임시휴무까지.
            "영업 중"으로 떠 있는데 문이 닫혀 있으면 리뷰 테러로 돌아옵니다.
          </CheckItem>
          <CheckItem>
            <strong>전화번호가 최신인가</strong>: 스마트콜(0507) 번호와 실제 번호가 채널마다 다르지
            않은지 확인하세요. AI가 옛 번호를 안내하는 사례가 실제로 많습니다.
          </CheckItem>
          <CheckItem>
            <strong>주소·찾아오는 길이 정확한가</strong>: 건물명, 층, 출입구 안내까지. 지번/도로명
            주소가 다른 채널과 일치해야 합니다.
          </CheckItem>
          <CheckItem>
            <strong>대표 키워드가 업종과 지역을 담고 있는가</strong>: "○○동 파스타", "○○역 필라테스"처럼
            고객이 검색하는 형태로 설정돼 있는지 확인하세요.
          </CheckItem>
        </ol>

        <h2>콘텐츠 (5~7)</h2>
        <ol start={5}>
          <CheckItem>
            <strong>사진이 최근 3개월 안에 올라갔는가</strong>: 메뉴·내부·외관 사진을 계절감 있게
            갱신하세요. 오래된 사진만 있으면 "지금도 이런가?" 하는 의심이 생깁니다.
          </CheckItem>
          <CheckItem>
            <strong>소식(새소식)을 주기적으로 발행하는가</strong>: 이벤트, 신메뉴, 휴무 안내를 월 2회
            이상. 소식이 살아 있는 플레이스는 '운영 중인 살아있는 매장'으로 평가됩니다.
          </CheckItem>
          <CheckItem>
            <strong>가격 정보가 공개돼 있는가</strong>: 메뉴판·가격표를 등록하세요. "가격 얼마예요?"
            질문에 AI가 답할 수 있는 근거가 됩니다.
          </CheckItem>
        </ol>

        <h2>신뢰 요소 (8~10)</h2>
        <ol start={8}>
          <CheckItem>
            <strong>방문자 리뷰가 이번 달에도 쌓이고 있는가</strong>: 리뷰 수보다 최신성이 중요합니다.
            방문 고객에게 자연스럽게 리뷰를 요청하는 루틴을 만드세요.
          </CheckItem>
          <CheckItem>
            <strong>리뷰에 답변을 남기고 있는가</strong>: 특히 낮은 평점 리뷰일수록 정중한 답변이
            다음 손님에게 신뢰를 줍니다.
          </CheckItem>
          <CheckItem>
            <strong>예약·주문 기능을 연결했는가</strong>: 네이버 예약·톡톡을 열어두면 노출 지면이
            넓어지고, "예약 되나요?" 질문에 대한 답도 생깁니다.
          </CheckItem>
        </ol>

        <Callout>
          10가지 중 7개 이상이 안 되어 있다면, 지금 경쟁 매장이 그 자리를 가져가고 있을 가능성이
          큽니다. 위즈더플래닝의 무료 진단으로 우리 매장과 경쟁사의 플레이스·AI 노출 격차를 확인해
          보세요.
        </Callout>

        <h2>플레이스 관리가 GEO의 시작인 이유</h2>
        <p>
          생성형 AI는 지역 매장 질문에 답할 때 플레이스류 데이터(위치, 영업시간, 리뷰, 평점)를 가장
          신뢰하는 근거로 사용합니다. 즉 위 체크리스트는 네이버 지역 검색 순위만이 아니라{" "}
          <strong>AI 답변에 인용될 확률</strong>을 함께 끌어올리는 작업입니다. 플레이스를 정리한 다음
          단계는 브랜드 블로그와 웹사이트 콘텐츠 구조화입니다.
        </p>
        <p>
          플레이스 다음 단계인 홈페이지·콘텐츠 구조화까지 포함한 전체 그림은{" "}
          <a href="/guide/geo">GEO란? 뜻부터 최적화 방법까지 총정리</a>에서 확인하실 수 있습니다.
        </p>
        <p>
          플레이스 정비가 왜 AI 노출로 이어지는지는{" "}
          <a href="/guide/what-is-geo">AI 검색 최적화 기본</a>에 정리해 두었습니다.
        </p>
      </GuideArticle>
    </>
  )
}
