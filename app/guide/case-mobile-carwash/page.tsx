import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "네이버만으로는 한계였던 출장세차 — 2개월 만에 구글 AI 개요에 뜨기까지 (실제 GEO 사례)"
const DESC =
  "네이버 플레이스와 카페 홍보에 집중했지만 성장이 멈춰 있던 신도시 출장세차 광고주. 구글·카카오맵·네이버에 흩어진 정보를 일치시키고, 홈페이지를 AI가 읽는 스키마 구조로 정비하고, 실제 작업 사례를 쌓았습니다. 2개월 만에 구글 AI 개요에 노출되기 시작했고, 이어서 ChatGPT 추천을 받기 시작한 실제 사례입니다."
const DATE = "2026-07-17"
const URL = "https://wiztheplanning.com/guide/case-mobile-carwash"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "출장세차 마케팅", "GEO 사례", "AI 검색 최적화 사례", "구글 AI 개요 노출",
    "ChatGPT 추천 받기", "네이버 플레이스 한계", "지역 서비스업 마케팅",
    "스키마 마크업", "정보 비대칭", "신도시 출장세차",
  ],
  alternates: { canonical: "/guide/case-mobile-carwash" },
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle
        kicker="CASE STUDY"
        title={TITLE}
        description={DESC}
        date="2026년 7월 17일"
      >
        <p>
          이번에 소개할 사례는 수도권 한 신도시에서 <strong>출장세차</strong>를 운영하는 광고주입니다.
          광고주 요청에 따라 상호와 정확한 지역은 공개하지 않지만, 어떤 상태였고 무엇을 바꿨고 무슨 일이
          일어났는지는 있는 그대로 정리했습니다.
        </p>

        <h2>어떤 상태였나</h2>
        <p>
          이 광고주는 <strong>네이버 플레이스와 지역 카페 홍보에 집중</strong>하고 있었습니다. 잘못된
          방향은 아니었습니다. 실제로 그 채널들로 일이 어느 정도 들어오고 있었으니까요. 문제는{" "}
          <strong>거기서 더 늘지 않는다는 것</strong>이었습니다. 들어오는 일감은 있지만 충분한 수준은
          아니었고, 홍보를 더 해도 눈에 띄게 늘지 않는 구간에 들어와 있었습니다.
        </p>
        <p>
          많은 지역 기반 서비스업이 여기서 멈춥니다. 네이버라는 한 채널 안에서만 경쟁하고 있기
          때문입니다.
        </p>

        <h2>진단에서 확인한 것</h2>
        <p>
          AI 검색 진단을 돌려보니 두 가지가 명확했습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>채널마다 정보가 달랐습니다</strong> — 구글, 카카오맵, 네이버에 등록된 정보가 서로
            일치하지 않는 <strong>정보 비대칭</strong> 상태였습니다. AI는 여러 출처를 대조해 신뢰도를
            판단하는데, 출처마다 말이 다르면 그 업체를 확신 있게 추천하지 못합니다.
          </CheckItem>
          <CheckItem>
            <strong>홈페이지를 AI가 제대로 읽지 못했습니다</strong> — 사람 눈에는 멀쩡해 보여도, 기계가
            "이 업체가 무엇을 하는 곳이고 어디서 어떤 서비스를 제공하는지" 구조적으로 이해할 수 있는
            형태가 아니었습니다.
          </CheckItem>
        </ul>
        <Callout>
          네이버에 아무리 집중해도 ChatGPT·구글 AI에는 잘 안 걸리는 이유가 여기 있습니다. 엔진마다
          근거로 삼는 출처가 다르기 때문입니다. 자세한 내용은{" "}
          <a href="/guide/ai-engines-cite-differently">ChatGPT와 네이버 AI는 왜 다른 가게를 추천할까</a>{" "}
          에서 정리했습니다.
        </Callout>

        <h2>무엇을 했나</h2>
        <p>화려한 기법은 없었습니다. 순서대로 기본을 채웠습니다.</p>
        <ol>
          <CheckItem>
            <strong>흩어진 정보를 전부 일치시켰습니다</strong> — 구글, 카카오맵, 네이버에 등록된 업체명,
            지역·서비스 범위, 연락처, 영업시간, 제공 서비스를 하나의 기준으로 통일했습니다. AI가 어느
            출처를 보든 같은 답이 나오게 만드는 작업입니다.
          </CheckItem>
          <CheckItem>
            <strong>홈페이지를 스키마 구조로 정확하게 정비했습니다</strong> — 업종·서비스·지역·연락 정보를
            구조화 데이터(Schema.org)로 명시해서, 검색엔진과 AI가 이 업체를 하나의 명확한 실체로 인식할 수
            있게 만들었습니다. GEO에서 홈페이지가 중요한 이유는 디자인이 아니라 이 구조 때문입니다.
          </CheckItem>
          <CheckItem>
            <strong>실제 작업 사례를 쌓았습니다</strong> — AI는 근거 없이 추천하지 않습니다. 실제로 어떤
            차량에 어떤 작업을 했는지가 축적되면서, AI가 인용할 수 있는 근거가 생겼습니다.
          </CheckItem>
        </ol>

        <h2>무슨 일이 일어났나</h2>
        <p>
          작업을 시작하고 <strong>약 2개월 뒤, 구글 AI 개요(AI Overviews)에 노출되기 시작했습니다.</strong>{" "}
          고객이 구글에 관련 질문을 했을 때 AI가 요약해 주는 답변 안에 이 업체가 등장하기 시작한
          것입니다.
        </p>
        <p>
          그리고 조금 더 시간이 지나자 <strong>ChatGPT에서도 추천을 받기 시작했습니다.</strong> 네이버
          한 채널에 갇혀 있던 업체가, 고객이 어디에 물어보든 후보에 오르는 상태로 넘어가기 시작한
          것입니다.
        </p>
        <Callout>
          이 사례는 <strong>지금도 진행 중</strong>입니다. 완료된 성공담이 아니라, 성장이 멈춰 있던
          한계에서 벗어나고 있는 과정입니다. 저희는 끝난 것처럼 포장하지 않습니다.
        </Callout>

        <h2>이 사례가 말해주는 것</h2>
        <ul>
          <CheckItem>
            <strong>네이버를 잘하는 것과 AI에 추천받는 것은 다른 문제입니다.</strong> 채널 하나를
            열심히 해도, 다른 엔진이 보는 출처가 비어 있으면 그 엔진의 답변에는 나오지 않습니다.
          </CheckItem>
          <CheckItem>
            <strong>정보 비대칭은 생각보다 치명적입니다.</strong> 없는 걸 만드는 것보다, 이미 있는 정보가
            채널마다 어긋나 있는 걸 맞추는 게 먼저입니다. 가장 빠르게 효과가 나는 작업이기도 합니다.
          </CheckItem>
          <CheckItem>
            <strong>홈페이지는 예뻐서가 아니라 읽혀야 의미가 있습니다.</strong> AI가 이해할 수 있는 구조
            여야 인용 후보가 됩니다.
          </CheckItem>
          <CheckItem>
            <strong>시간이 걸립니다.</strong> 하루아침에 되지 않습니다. 정보 정비 후 몇 주, 인용 확대까지
            몇 개월 단위로 봐야 합니다. 대신 한 번 쌓이면 광고처럼 끄면 사라지지 않습니다.
          </CheckItem>
        </ul>

        <h2>우리 업종도 될까요?</h2>
        <p>
          출장세차만의 특별한 방법을 쓴 게 아닙니다. 고객이 AI에게{" "}
          <strong>"○○ 잘하는 곳 추천해줘"</strong>라고 묻는 업종이라면 원리는 같습니다. 음식점, 병원,
          학원, 뷰티, 인테리어, 각종 출장·방문 서비스 모두 해당됩니다. 오히려 이 사례처럼{" "}
          <strong>경쟁사가 아직 AI 검색을 신경 쓰지 않는 업종·지역일수록 선점 효과가 큽니다.</strong>
        </p>
        <p>
          우리 업체가 지금 AI 검색에서 어떤 상태인지, 채널 간 정보가 어긋나 있지는 않은지 궁금하시다면{" "}
          <a href="/#contact">무료 AI 검색 진단</a>으로 실제 데이터를 먼저 확인해 보세요. 이 사례도
          진단에서 시작했습니다.
        </p>
      </GuideArticle>
    </>
  )
}
