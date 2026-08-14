import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 76자 → 53자 (검색결과 잘림 해소. 노출 315·CTR 1.6%였음)
const TITLE =
  "GEO 대행사 고르는 법 — 계약 전 7가지 질문과 'TOP3 추천 글' 판별법"
const DESC =
  "GEO 대행을 알아보면 'AI 노출 보장', '업체 추천 TOP3' 같은 말들이 쏟아집니다. 어디까지 믿어야 할까요. 견적 단계에서 업체의 수준이 그대로 드러나는 7가지 질문과, 검색에서 만나는 '추천 글'이 진짜 제3자의 비교인지 업체의 자기 광고인지 10초 만에 확인하는 방법까지 — GEO를 직접 실측하며 일하는 회사의 기준으로 정리했습니다."
const DATE = "2026-07-28"
const URL = "https://wiztheplanning.com/guide/how-to-choose-geo-agency"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "GEO 대행사 추천", "GEO 업체 선택", "GEO 대행 업체 비교", "AI 검색 최적화 업체",
    "GEO 대행사 고르는 법", "병원 GEO 업체", "GEO 업체 추천 TOP3", "AI 노출 보장",
    "GEO 대행 계약", "AI 마케팅 업체",
  ],
  alternates: { canonical: "/guide/how-to-choose-geo-agency" },
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
      name: "GEO 대행사는 어떤 기준으로 골라야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "계약 전에 7가지를 확인하세요. ① 계약 전에 현재 상태 진단을 먼저 주는가 ② '노출 보장'을 약속하지 않는가(보장 약속은 위험 신호) ③ 매월 어떤 숫자를 보고하는가(질문별·엔진별 언급 여부) ④ 홈페이지와 콘텐츠 소유권이 계약 종료 후 누구에게 남는가 ⑤ 크롤러 접근·구조화 데이터 같은 기술 작업을 직접 하는가 ⑥ (병원이라면) 의료광고법 검수 체계가 있는가 ⑦ 그 업체를 추천하는 글이 업체 자신의 도메인에 올라간 자기 광고는 아닌가.",
      },
    },
    {
      "@type": "Question",
      name: "'AI 노출 보장'을 약속하는 GEO 업체는 믿어도 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "주의가 필요합니다. AI 답변은 엔진·시점·질문 방식에 따라 매번 달라지기 때문에 노출을 보장하는 것은 구조적으로 불가능합니다. 경험 있는 업체일수록 보장 대신 측정을 제시합니다 — 시작 전 현재 상태를 실측하고, 매월 같은 기준으로 재측정해 변화를 숫자로 보고하는 방식입니다.",
      },
    },
    {
      "@type": "Question",
      name: "'GEO 업체 추천 TOP3' 같은 글은 믿어도 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "글이 올라간 도메인부터 확인하세요. 주소창의 도메인이 그 글에서 1위로 추천된 업체의 도메인과 같다면, 그것은 제3자의 비교가 아니라 업체가 직접 쓴 자기 광고입니다. 작성자가 'OO 리서치팀'처럼 표기돼 있어도 도메인이 진실을 말해줍니다. 2026년 7월 기준 실제로 GEO 대행 관련 검색 상위에는 이런 자작 추천 글이 다수 있었습니다.",
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
        href="/guide/how-to-choose-geo-agency"
        kicker="실전 전략 · 계약 가이드"
        title={TITLE}
        description={DESC}
        date="2026년 7월 28일"
      >
        <p>
          GEO 대행을 알아보기 시작하면 이상한 경험을 하게 됩니다. 검색하면 &ldquo;업체 추천
          TOP3&rdquo; 글이 쏟아지고, 상담을 받으면 &ldquo;AI 노출 보장&rdquo;을 약속하는 곳이
          나타납니다. GEO는 새 시장이라 표준도, 축적된 평판도 아직 없습니다.{" "}
          <strong>그래서 업체가 하는 말이 아니라, 업체에게 던지는 질문으로 수준을 확인해야
          합니다.</strong> 견적 단계에서 아래 7가지를 물어보면 대부분 판별됩니다.
        </p>

        <h2>질문 ① &ldquo;계약 전에 우리 현재 상태를 진단해서 보여주시나요?&rdquo;</h2>
        <p>
          제대로 하는 업체는 <strong>계약 전에 현재 상태부터 측정</strong>합니다. 지금 어떤 질문에서
          AI가 우리 가게·병원을 언급하는지(안 하는지), 홈페이지가 AI 크롤러에게 열려 있는지를 먼저
          숫자로 보여주고 시작합니다. 진단 없이 계약서부터 내미는 곳은, 출발점을 재지 않았으니{" "}
          <strong>나중에 성과를 증명할 방법도 없습니다.</strong>
        </p>

        <h2>질문 ② &ldquo;노출을 보장하시나요?&rdquo; — &lsquo;네&rsquo;라고 하면 위험 신호</h2>
        <p>
          역설적이지만 이 질문에는 <strong>&ldquo;보장할 수 없다&rdquo;고 답하는 업체가 정직한
          업체</strong>입니다. AI 답변은 엔진·시점·질문 방식에 따라 매번 달라서, 노출 보장은 구조적으로
          불가능합니다. 저희는 이걸 직접 겪었습니다 —{" "}
          <a href="/guide/ranked-but-not-in-chatgpt">네이버 AI 1위·구글 2위인 저희 페이지도 ChatGPT엔
          아직 안 나옵니다</a>. 그 과정을 그대로 공개하는 이유는, 이 일의 정직한 물리학이 그렇기
          때문입니다. 경험 있는 업체는 보장 대신 <strong>측정</strong>을 제시합니다.
        </p>

        <h2>질문 ③ &ldquo;매달 어떤 숫자를 보고해 주시나요?&rdquo;</h2>
        <p>
          GEO는 검색 순위처럼 눈으로 바로 확인되지 않습니다. 그래서 보고서에 숫자가 없으면 세 달이
          지나도 판단할 근거가 없습니다. 확인할 것: <strong>어떤 질문 목록을 기준으로, 어떤 AI
          엔진에서, 언급 여부를 어떻게 재서 보여주는가.</strong> &ldquo;열심히 하고 있습니다&rdquo;가
          아니라 표와 수치가 나오는지 물어보세요.
        </p>

        <h2>질문 ④ &ldquo;계약이 끝나면 뭐가 남나요?&rdquo; — 소유권 확인</h2>
        <p>
          의외로 가장 많이 놓치는 부분입니다. 홈페이지, 콘텐츠, 블로그 계정의 <strong>소유권이 계약
          종료 후 누구에게 남는지</strong> 계약서에서 확인하세요. 대행사 소유의 채널에만 콘텐츠를
          쌓아주는 구조라면, 계약을 끊는 순간 그동안 쌓은 자산이 전부 사라집니다. AI가 신뢰를
          판단하는 핵심 자산은 <strong>당신 소유의 홈페이지</strong>여야 합니다.
        </p>

        <h2>질문 ⑤ &ldquo;기술 작업도 직접 하시나요, 글만 쓰시나요?&rdquo;</h2>
        <p>
          GEO의 절반은 기술입니다. 홈페이지가 방화벽으로 AI 크롤러를 막고 있으면 콘텐츠를 아무리
          만들어도 소용없습니다 —{" "}
          <a href="/guide/case-urology-clinic">실제로 그런 병원 사례</a>가 있었습니다. 크롤러 접근
          점검, 구조화 데이터(Schema.org) 설계, 색인 세팅을 <strong>내부에서 직접 하는지</strong>,
          아니면 콘텐츠만 만들고 기술은 &ldquo;홈페이지 업체에 문의하라&rdquo;고 하는지 확인하세요.
        </p>

        <h2>질문 ⑥ (병원이라면) &ldquo;의료광고법 검수는 누가 어떻게 하나요?&rdquo;</h2>
        <p>
          AI에 인용되려고 쓴 표현이 의료광고법 위반이 되는 경우가 실제로 있습니다. 치료 효과 단정,
          근거 없는 최상급 표현, 환자 치료경험담의 광고 활용은 금지 영역이고,{" "}
          <strong>문제가 생기면 책임은 병원이 집니다.</strong> 검수 절차를 물었을 때 구체적인
          프로세스가 바로 나오는지, 얼버무리는지로 병원 경험 유무가 드러납니다. 기준은{" "}
          <a href="/guide/medical-geo">병원·의원 GEO 가이드</a>에 정리해 두었습니다.
        </p>

        <h2>질문 ⑦ &ldquo;이 업체를 추천한 글, 누가 쓴 거지?&rdquo; — 10초 판별법</h2>
        <p>
          업체를 검색하다 보면 &ldquo;OO 업체 추천 TOP3&rdquo;, &ldquo;대행사 비교&rdquo; 같은 글을
          만나게 됩니다. 그 글을 믿기 전에 딱 하나만 확인하세요.
        </p>
        <Callout>
          <strong>주소창의 도메인을 보세요.</strong> 글이 올라간 도메인이 그 글에서 1위로 추천된
          업체의 도메인과 같다면 — 그건 제3자의 비교가 아니라 <strong>업체가 자기 사이트에 올린 자기
          광고</strong>입니다. 작성자가 &ldquo;OO 리서치팀&rdquo;처럼 적혀 있어도, 경쟁사를 2·3위에
          구색으로 실어놨어도, 도메인이 진실을 말해줍니다.
        </Callout>
        <p>
          이런 글이 많은 이유는 명확합니다. AI가 &ldquo;추천해줘&rdquo; 질문에 비교·리스트형 콘텐츠를
          인용하는 성질을 노린 겁니다. 실제로 <strong>2026년 7월 저희가 확인했을 때, GEO 대행 관련
          검색 상위에는 업체가 자기 도메인에 올린 자기 추천 글이 다수</strong>였습니다. 문제는 두
          가지입니다. 첫째, 자기 광고를 객관적 비교처럼 위장하는 건 기만 광고 소지가 있고 그 리스크는
          결국 광고주에게 번집니다. 둘째, 더 실용적인 판단 기준 — <strong>영업을 그런 방식으로 하는
          업체가, 당신의 마케팅은 정직하게 해줄까요?</strong> 정상적인 방법과 어뷰징의 경계는{" "}
          <a href="/guide/is-geo-abuse">SEO·GEO는 어뷰징인가</a>에서 자세히 다뤘습니다.
        </p>

        <h2>7가지 질문 요약 체크리스트</h2>
        <ul>
          <CheckItem><strong>계약 전 진단</strong> — 현재 상태를 숫자로 먼저 보여주는가</CheckItem>
          <CheckItem><strong>보장 여부</strong> — &ldquo;보장&rdquo;을 약속하면 위험 신호, &ldquo;측정&rdquo;을 제시하면 신뢰 신호</CheckItem>
          <CheckItem><strong>월간 리포트</strong> — 질문별·엔진별 언급 여부가 숫자로 담기는가</CheckItem>
          <CheckItem><strong>소유권</strong> — 계약 종료 후 홈페이지·콘텐츠가 내 것으로 남는가</CheckItem>
          <CheckItem><strong>기술 역량</strong> — 크롤러·구조화 데이터를 직접 다루는가</CheckItem>
          <CheckItem><strong>의료광고법</strong> — (병원) 검수 프로세스가 구체적으로 나오는가</CheckItem>
          <CheckItem><strong>추천 글 도메인</strong> — 그 업체 추천 글이 자기 도메인 자기 광고는 아닌가</CheckItem>
        </ul>

        <h2>이 기준으로 저희도 비교해 보세요</h2>
        <p>
          이 글을 쓴 저희도 GEO 대행사입니다. 그래서 이 체크리스트는 저희를 빼고 만든 게 아니라,{" "}
          <strong>저희를 포함해 어느 업체든 검증할 수 있게</strong> 만든 것입니다. 저희가 어떤
          방식으로 일하는지는 <a href="/medical-geo-agency">병원 GEO 대행 페이지</a>의 &lsquo;우리가
          하지 않는 것&rsquo; 섹션에, 실제 실험 데이터는{" "}
          <a href="/guide/platform-ai-crawler-status">플랫폼 15곳 크롤러 실측</a> 같은 공개 자료에
          그대로 있습니다. 위 7가지 질문을 저희에게 먼저 던지셔도 좋습니다 — 계약 전 무료 진단부터
          시작하는 이유가 질문 ①의 답이기도 합니다.
        </p>
        <p>
          업체를 좁힌 뒤에는 견적서를 봐야 합니다. 구축비와 운영비가 왜 나뉘어 있어야 하는지, 계약이
          끝났을 때 무엇이 남는지는{" "}
          <a href="/guide/geo-cost">GEO 비용 — 견적서 뜯어보는 법</a>에 이어서 정리했습니다.
        </p>
      </GuideArticle>
    </>
  )
}
