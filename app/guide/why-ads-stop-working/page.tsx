import type { Metadata } from "next"
import Link from "next/link"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "네이버 광고비는 오르는데 문의는 그대로일 때 — 지금 매장에 무슨 일이 일어나고 있나"
const DESC =
  "광고 예산을 늘려도 예전만큼 문의가 안 늘어난다면, 매장 문제가 아니라 고객의 검색 방식이 바뀐 것일 수 있습니다. 광고 효율이 떨어지는 진짜 이유와, 지금 확인해야 할 것을 정리했습니다."
const DATE = "2026-07-09"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guide/why-ads-stop-working" },
  openGraph: { title: TITLE, description: DESC, url: "https://wiztheplanning.com/guide/why-ads-stop-working", type: "article" },
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
  mainEntityOfPage: "https://wiztheplanning.com/guide/why-ads-stop-working",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle kicker="마케팅 고민 진단" title={TITLE} description={DESC} date="2026년 7월 9일">
        <p>
          결론부터 말씀드리면, 광고비를 늘려도 문의가 안 늘어난다면 <strong>우리 매장이나 광고 소재의
          문제가 아니라, 고객이 매장을 찾는 방식 자체가 바뀌었을 가능성</strong>이 큽니다. 예전엔
          효과가 있던 광고가 지금은 시원찮은 이유, 하나씩 짚어보겠습니다.
        </p>

        <h2>혹시 이런 증상이 있으신가요?</h2>
        <ul>
          <CheckItem>네이버 광고(파워링크·플레이스광고) 예산을 늘렸는데 전화·예약은 비슷하다</CheckItem>
          <CheckItem>체험단·블로그를 돌려도 예전만큼 신규 손님이 안 늘어난다</CheckItem>
          <CheckItem>손님에게 "어떻게 알고 오셨어요?" 물으면 답이 제각각이라 감이 안 잡힌다</CheckItem>
          <CheckItem>리뷰는 꽤 쌓였는데 정작 신규 방문으로 이어지는 느낌이 약하다</CheckItem>
        </ul>
        <p>
          하나라도 해당된다면, 아래 변화가 우리 매장 상권에서도 일어나고 있는 것일 수 있습니다.
        </p>

        <h2>고객이 검색을 멈추고, AI에게 묻기 시작했습니다</h2>
        <p>
          최근 몇 년 사이 고객의 행동에 큰 변화가 생겼습니다. 예전에는 네이버에 키워드를 검색하고
          여러 목록을 비교했다면, 지금은 <strong>ChatGPT·퍼플렉시티·네이버 AI에게 직접 물어보고
          '답 하나'를 받는</strong> 사람이 빠르게 늘고 있습니다.
        </p>
        <p>
          이게 왜 광고 효율에 영향을 줄까요? AI는 검색 결과 목록을 보여주는 대신 <strong>결론을
          말합니다.</strong> "이 근처 괜찮은 곳은 ○○입니다"처럼요. 이때 <strong>AI의 답변에
          포함되지 못한 매장은 고객의 선택지에서 아예 사라집니다.</strong> 광고를 아무리 잘 걸어도,
          고객이 광고를 보는 화면 자체에 도달하지 않는 겁니다.
        </p>

        <Callout>
          즉 광고 효율 하락의 상당 부분은 "광고를 못해서"가 아니라, <strong>고객의 일부가 검색·광고를
          거치지 않고 AI 추천으로 바로 결정</strong>하기 시작했기 때문입니다. 이 흐름을 놓치면 예산을
          늘려도 밑 빠진 독이 됩니다.
        </Callout>

        <h2>지금 바로 확인해볼 수 있는 것</h2>
        <p>
          어렵지 않습니다. 사장님이 직접 5분이면 해볼 수 있어요.
        </p>
        <ul>
          <CheckItem>
            <strong>ChatGPT나 네이버 AI에 물어보세요.</strong> "○○동에서 [우리 업종] 잘하는 곳
            추천해줘"라고. 우리 가게가 나오나요?
          </CheckItem>
          <CheckItem>
            <strong>우리 가게 이름을 직접 물어보세요.</strong> "○○(우리 상호) 어때?"라고. 전화번호·
            영업시간·위치를 <strong>정확히</strong> 답하나요? 틀린 정보를 말하지는 않나요?
          </CheckItem>
          <CheckItem>
            카테고리 추천("○○ 추천")엔 안 나오는데 상호로는 나온다면 — <strong>AI가 우리를 알지만
            추천 목록엔 못 넣고 있다</strong>는 신호입니다.
          </CheckItem>
        </ul>

        <h2>그래서 무엇을 해야 하나요?</h2>
        <p>
          광고를 끊으라는 얘기가 아닙니다. 광고는 광고대로 하되, <strong>AI가 우리 매장을 추천하도록
          만드는 작업(AI 검색 최적화, GEO)을 함께</strong> 해야 새는 부분을 막을 수 있습니다. AI가
          근거로 삼는 플레이스 정보·리뷰·콘텐츠를 정리하고, AI가 읽을 수 있는 형태로 매장 정보를
          구조화하는 일입니다.
        </p>
        <p>
          이 주제가 처음이시라면{" "}
          <Link href="/guide/what-is-geo" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
            AI 검색 최적화(GEO)란 무엇인가
          </Link>
          부터 보시면 그림이 잡힙니다. 우리 업종이 병원·치과·피부라면 업종별 가이드도 준비되어 있습니다.
        </p>

        <Callout>
          지금 우리 매장이 AI 검색에서 어떻게 나오는지(혹은 안 나오는지) 궁금하다면, 위즈더플래닝의
          무료 AI 검색 진단으로 네이버 AI·ChatGPT·제미나이 세 엔진의 노출 현황을 리포트로 받아보실
          수 있습니다.
        </Callout>
      </GuideArticle>
    </>
  )
}
