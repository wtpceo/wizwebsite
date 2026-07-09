import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "병원·의원 AI 검색 최적화(GEO) 가이드 — 의료광고법 지키면서 인용받는 법"
const DESC =
  "ChatGPT·네이버 AI가 병원을 추천할 때 무엇을 근거로 삼는지, 그리고 의료광고법에 걸리지 않으면서 AI에 인용되는 콘텐츠를 만드는 방법을 정리했습니다. 치료후기와 방문후기의 차이, 금지 표현까지 실무 기준으로 안내합니다."
const DATE = "2026-07-09"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guide/medical-geo" },
  openGraph: { title: TITLE, description: DESC, url: "https://wiztheplanning.com/guide/medical-geo", type: "article" },
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
  mainEntityOfPage: "https://wiztheplanning.com/guide/medical-geo",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle kicker="MEDICAL GEO" title={TITLE} description={DESC} date="2026년 7월 9일">
        <p>
          병원·의원의 AI 검색 최적화(GEO)는 일반 업종과 결정적으로 다른 점이 하나 있습니다. 바로{" "}
          <strong>의료광고법</strong>입니다. AI에 잘 인용되려고 "환자 치료후기"나 "부작용 없는 시술"
          같은 표현을 쓰는 순간, 인용은 될지 몰라도 <strong>의료법 위반</strong>이 될 수 있습니다.
          이 글은 의료광고법을 지키면서 AI 검색에 인용되는, 병원 전용 GEO 방법을 정리한 것입니다.
        </p>

        <Callout>
          이 글은 법률 자문이 아닌 마케팅 실무 참고자료입니다. 의료광고는 매체에 따라 사전심의
          대상이며, 법 해석·개정으로 기준이 바뀔 수 있습니다. 실제 콘텐츠 집행 전 대한치과의사협회·
          대한의사협회 등 의료광고심의와 전문 자문을 반드시 확인하세요.
        </Callout>

        <h2>AI는 병원을 추천할 때 어디를 보나요?</h2>
        <p>
          엔진마다 근거로 삼는 출처가 다릅니다. 이 차이를 알아야 어디에 힘을 줄지 결정할 수 있습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>네이버 AI</strong>는 네이버 플레이스 리뷰와 후기 블로그를 주로 인용합니다. 리뷰
            속 구체적 표현("설명을 자세히 해줬다", "대기가 짧았다")을 추천 근거로 뽑습니다.
          </CheckItem>
          <CheckItem>
            <strong>ChatGPT·구글 AI</strong>는 병원 자체 웹사이트와 의료 정보 디렉토리(모두닥 등)를
            주로 인용합니다. 특히 병원 홈페이지가 인용 근거로 크게 작용합니다.
          </CheckItem>
          <CheckItem>
            그래서 병원 GEO는 <strong>홈페이지(외부 AI용)</strong>와 <strong>플레이스·리뷰(네이버용)</strong>
            를 함께 관리해야 두 갈래를 모두 잡습니다.
          </CheckItem>
        </ul>

        <h2>치료후기는 위험, 방문후기는 안전</h2>
        <p>
          의료광고법 제56조는 <strong>치료효과를 오인하게 할 우려가 있는 환자 치료경험담</strong> 광고를
          금지합니다. AI 인용을 노린다고 아래처럼 하면 안 됩니다.
        </p>
        <ul>
          <CheckItem>
            ❌ 위험: "임플란트 하나도 안 아프고 결과가 완벽했어요" — 치료효과·예후를 다룬 치료경험담
          </CheckItem>
          <CheckItem>
            ❌ 위험: 시술 전후 사진을 나열해 치료과정·결과를 보여주는 것
          </CheckItem>
          <CheckItem>
            ✅ 안전: "예약 시간에 맞춰 진료해줬고, 설명을 이해하기 쉽게 해주셨어요" — 친절·시설·상담
            만족 같은 <strong>단순 방문후기</strong>
          </CheckItem>
        </ul>
        <p>
          핵심은 <strong>"치료효과"가 아니라 "경험·환경·소통"을 다루게</strong> 콘텐츠와 리뷰를
          설계하는 것입니다. AI는 방문후기의 속성어("친절", "자세한 설명", "짧은 대기")도 충분히
          추천 근거로 사용합니다.
        </p>

        <h2>대가성 리뷰는 절대 금지</h2>
        <p>
          리뷰 수를 늘리려고 후기 대가로 <strong>금품·할인·포인트를 제공하면</strong> 의료법 제27조의
          환자 유인행위에 해당해 <strong>3년 이하 징역 또는 3천만원 이하 벌금</strong> 대상이 됩니다.
          일반 업종에서 흔한 "리뷰 이벤트"를 병원에 그대로 적용하면 안 됩니다. 리뷰는 실제 방문 환자가
          자발적으로 남기도록 유도하는 선에서만 관리합니다.
        </p>

        <h2>피해야 할 표현 — 이 단어들은 근거를 붙여도 위험</h2>
        <p>
          홈페이지·플레이스 소개·블로그에서 아래 유형의 표현은 피하세요. 객관적 근거를 붙여도 위반
          소지가 있습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>최상급·배타성</strong>: 최고, 최초, 유일, 1등, 넘버원, 베스트, 가장 ~
          </CheckItem>
          <CheckItem>
            <strong>완전성·단정</strong>: 완치, 완벽, 100% 보장, 부작용 없는, 무통·통증 없이, 안전한,
            흉터 없는, 평생 보장
          </CheckItem>
          <CheckItem>
            <strong>비교·비방</strong>: "타 병원보다 우수/저렴", 경쟁 병원 언급·비방
          </CheckItem>
          <CheckItem>
            <strong>환자 유인</strong>: (특히 비급여) 무료, 할인, 이벤트, 사은품, 불분명한 가격할인
          </CheckItem>
          <CheckItem>
            <strong>중요정보 누락</strong>: 효과만 강조하고 부작용·후유증·주의사항·비용조건을 빼는 것
            (생략도 위반)
          </CheckItem>
          <CheckItem>
            <strong>자격·인증 오인</strong>: 전문의 자격 없이 "○○ 전문", 근거 없는 "○○ 선정/수상",
            "공식 지정" 오인 표현
          </CheckItem>
        </ul>

        <h2>그럼 병원은 무엇을 만들어야 하나요?</h2>
        <p>
          치료효과를 자랑하는 대신, <strong>AI가 신뢰하고 인용할 수 있는 '정보성 콘텐츠'</strong>를
          만듭니다. 이건 의료법에도 안전하고, 오히려 AI가 더 좋아하는 형태입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>질문형 정보 콘텐츠</strong>: "임플란트는 어떤 경우에 하나요?", "신경치료 과정은
            어떻게 되나요?"처럼 환자가 실제로 묻는 질문에 사실 기반으로 답하는 글. 효과 보장이 아니라
            정보 제공이라 안전하고, AI 발췌에 강합니다.
          </CheckItem>
          <CheckItem>
            <strong>진료과목·시술별 개별 페이지</strong>: 한 페이지에 다 욱여넣지 말고 시술마다 별도
            페이지로. AI는 페이지 단위로 주제를 파악합니다.
          </CheckItem>
          <CheckItem>
            <strong>정확한 기본정보(NAP)</strong>: 병원명·주소·전화·진료시간·휴진일을 모든 채널에서
            동일하게. AI가 잘못된 정보를 안내하는 사고를 막습니다.
          </CheckItem>
          <CheckItem>
            <strong>의료진 정보</strong>: 원장·의료진의 전문 분야, 경력, 학회 활동을 사실대로. E-E-A-T의
            신뢰 신호가 됩니다. (단, 근거 없는 "전문" 표기 주의)
          </CheckItem>
          <CheckItem>
            <strong>FAQ 페이지</strong>: 자주 묻는 질문을 Q&A로 정리하고 FAQ 스키마를 적용하면 AI가
            그대로 인용하기 쉬워집니다.
          </CheckItem>
        </ul>

        <Callout>
          정리하면, 병원 GEO의 원칙은 <strong>"치료효과를 파는 게 아니라, 신뢰할 수 있는 정보를 제공해서
          AI가 인용하게 만드는 것"</strong>입니다. 이 방향이 의료법에 안전하면서 AI 인용에도 가장 유리합니다.
          위즈더플래닝은 의료광고 기준을 반영해 병원 전용 GEO를 진행합니다.
        </Callout>
      </GuideArticle>
    </>
  )
}
