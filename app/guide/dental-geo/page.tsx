import type { Metadata } from "next"
import Link from "next/link"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "치과 AI 검색 최적화(GEO) 가이드 — 의료광고법 지키면서 인용받는 치과의 조건"
const DESC =
  "네이버 AI·ChatGPT·구글이 치과를 추천할 때 무엇을 근거로 삼는지, 그리고 의료광고법에 걸리지 않으면서 AI에 인용되는 치과를 만드는 방법을 정리했습니다. 치과 특유의 실행(시술별 페이지·질문형 콘텐츠·방문후기·NAP)에 집중했습니다."
const DATE = "2026-07-09"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guide/dental-geo" },
  openGraph: {
    images: ["/thumbnail.png"], title: TITLE, description: DESC, url: "https://wiztheplanning.com/guide/dental-geo", type: "article" },
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
  mainEntityOfPage: "https://wiztheplanning.com/guide/dental-geo",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticle href="/guide/dental-geo" kicker="DENTAL GEO" title={TITLE} description={DESC} date="2026년 7월 9일">
        <p>
          결론부터 말씀드리면, 치과의 AI 검색 최적화(GEO)는 <strong>"치료효과를 자랑하는 것"이 아니라
          "AI가 신뢰하고 인용할 수 있는 사실 정보를 갖추는 것"</strong>입니다. 치과는{" "}
          <strong>의료광고법 대상</strong>이라, AI에 잘 뜨려고 치료후기·전후사진·"무통" 같은 표현을 쓰는
          순간 인용은 될지 몰라도 <strong>의료법 위반</strong>이 될 수 있습니다. 이 글은 법을 지키면서
          네이버 AI·ChatGPT·구글에 인용되는, 치과 전용 GEO 실행법을 원장님 눈높이로 정리했습니다.
        </p>

        <Callout>
          이 글은 법률 자문이 아닌 마케팅 실무 참고자료입니다. 치과 의료광고는 매체에 따라{" "}
          <strong>사전심의(대한치과의사협회 의료광고심의 등)</strong> 대상이며, 법 해석·개정으로 기준이
          바뀔 수 있습니다. 실제 콘텐츠 집행 전 반드시 사전심의와 전문 자문을 확인하세요.
        </Callout>

        <h2>AI는 치과를 추천할 때 어디를 보나요?</h2>
        <p>
          엔진마다 근거로 삼는 출처가 완전히 다릅니다. 실제로 같은 "○○ 치과 추천"을 물어도 네이버·
          ChatGPT·구글이 서로 다른 치과를 추천하는 경우가 흔합니다. 이 차이를 알아야 어디에 힘을 줄지
          결정할 수 있습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>네이버 AI</strong>는 네이버 플레이스 리뷰·소식과 후기 블로그를 주로 읽습니다. 리뷰
            속 구체적인 방문경험 표현("설명을 자세히 해줬다", "공포증을 배려해줬다", "대기가 짧았다")을
            추천 근거로 뽑습니다.
          </CheckItem>
          <CheckItem>
            <strong>ChatGPT·구글 AI</strong>는 <strong>치과 자체 홈페이지</strong>와 의료 정보
            디렉토리(모두닥 등)를 주로 인용합니다. 네이버가 외부 AI 크롤러를 막아둔 탓에, 외부 엔진은
            홈페이지·디렉토리 같은 비(非)네이버 출처에 더 의존합니다.
          </CheckItem>
          <CheckItem>
            그래서 치과 GEO는 <strong>홈페이지(외부 AI용)</strong>와{" "}
            <strong>플레이스·리뷰(네이버용)</strong>를 함께 관리해야 두 갈래를 모두 잡습니다. 한쪽만
            해서는 절반만 노출됩니다.
          </CheckItem>
        </ul>

        <h2>치과는 왜 일반 업종과 다르게 접근해야 하나요?</h2>
        <p>
          치과는 <strong>의료광고법 적용 대상</strong>이기 때문입니다. 일반 음식점이나 미용실에서 흔히
          쓰는 GEO 전술 — 후기에 강점을 심고, 전후사진을 올리고, "최고·무통" 같은 카피를 쓰는 것 —
          을 치과에 그대로 적용하면 위반이 됩니다. 특히 아래 두 가지가 핵심 리스크입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>치료후기·전후사진은 위험</strong>: 치료효과를 오인하게 할 우려가 있는 환자
            치료경험담 광고는 금지됩니다("임플란트 하나도 안 아프고 결과가 완벽했어요"식). 전후사진을
            나열해 치료 결과를 보여주는 것도 치료경험담 광고로 간주될 수 있습니다.
          </CheckItem>
          <CheckItem>
            <strong>대가성 리뷰는 절대 금지</strong>: 후기 대가로 금품·할인·포인트를 제공하면 환자
            유인행위에 해당합니다. 일반 업종의 "리뷰 이벤트"를 치과에 그대로 쓰면 안 됩니다.
          </CheckItem>
        </ul>
        <p>
          의료광고법의 상세 기준(치료후기 vs 방문후기 구분, 금지 어휘 전체 목록, 처벌 조항 등)은 별도
          가이드에 정리해 두었습니다. 자세한 의료광고법 기준은{" "}
          <Link href="/guide/medical-geo" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
            병원·의원 GEO 가이드
          </Link>
          를 함께 참고하시고, 이 글은 <strong>치과 특유의 실행</strong>에 집중하겠습니다.
        </p>

        <h2>치과 리뷰는 "치료효과" 대신 "방문경험"으로 쌓으세요</h2>
        <p>
          네이버 AI는 리뷰 속 반복되는 구체적 속성어를 추천 근거로 씁니다. 그래서 리뷰 관리는 여전히
          중요합니다. 다만 치과는 <strong>"치료가 잘됐다"가 아니라 "경험·환경·소통이 좋았다"</strong>로
          방향을 틀어야 안전하고, AI도 이 방문경험 속성을 충분히 추천 근거로 사용합니다.
        </p>
        <ul>
          <CheckItem>
            ❌ 위험: "임플란트 하나도 안 아프고 결과가 완벽했어요" — 치료효과·예후를 다룬 치료경험담
          </CheckItem>
          <CheckItem>
            ✅ 안전: "예약 시간에 맞춰 진료해주고, 치료 과정을 이해하기 쉽게 설명해주셨어요" —
            친절·설명·대기·예약 편의 같은 <strong>단순 방문후기</strong>
          </CheckItem>
          <CheckItem>
            리뷰는 <strong>양·최신성·일관성</strong>이 함께 중요합니다. 방문 직후 자연스럽게 리뷰를
            남기도록 상시 안내해 최근 리뷰 흐름이 끊기지 않게 하고, 강점(친절·설명·주차 등)이 여러
            리뷰에 자연스럽게 반복 축적되도록 유도하세요. 대본을 강요하지 말고, 그날 겪은 경험을
            떠올리게 하는 정도입니다.
          </CheckItem>
        </ul>

        <h2>그럼 치과는 무엇을 만들어야 하나요?</h2>
        <p>
          치료효과를 자랑하는 대신, <strong>AI가 신뢰하고 인용할 수 있는 '정보성 콘텐츠'와 정확한
          기본정보</strong>를 만듭니다. 이건 의료법에도 안전하고, 오히려 AI가 더 좋아하는 형태입니다.
          치과에서 특히 효과가 큰 것들만 추렸습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>시술별 개별 페이지</strong>: 임플란트·신경치료·교정·미백을 한 페이지에 다 욱여넣지
            말고 시술마다 별도 페이지로 만드세요. AI는 페이지 단위로 주제를 파악하기 때문에, "한 페이지
            = 하나의 시술"일수록 그 시술 질문에 인용되기 좋습니다.
          </CheckItem>
          <CheckItem>
            <strong>질문형 정보 콘텐츠</strong>: "임플란트는 어떤 경우에 하나요?", "신경치료 과정은
            어떻게 되나요?"처럼 환자가 실제로 묻는 질문에 사실 기반으로 답하는 글을 만드세요. 효과
            보장이 아니라 정보 제공이라 의료법에 안전하고, AI 발췌에 특히 강합니다.
          </CheckItem>
          <CheckItem>
            <strong>질문형 소제목 + answer-first</strong>: AI는 본문 전체보다 후킹 강한 제목·소제목·
            FAQ 블록을 먼저 발췌합니다. 소제목을 질문형으로 달고, 그 바로 아래 2~3문장으로 명확한
            답을 배치하세요.
          </CheckItem>
          <CheckItem>
            <strong>FAQ 페이지 + FAQ 스키마</strong>: 자주 묻는 질문을 Q&A로 정리하고 FAQPage
            구조화 데이터를 적용하면 AI가 질문-답을 그대로 인용하기 쉬워집니다.
          </CheckItem>
          <CheckItem>
            <strong>의료진 정보</strong>: 원장·의료진의 진료 분야, 경력, 학회 활동을 사실대로
            표기하세요. E-E-A-T(경험·전문성·권위·신뢰) 신호가 되어 AI가 믿고 인용하는 근거가 됩니다.
            단, 전문의 자격 없이 "○○ 전문"으로 오인시키는 표기는 피하세요.
          </CheckItem>
          <CheckItem>
            <strong>정확한 기본정보(NAP)</strong>: 치과명·주소·전화·진료시간·야간/주말 진료·휴진일을
            홈페이지·플레이스·디렉토리에서 <strong>모두 동일하게</strong> 맞추세요. 표기가 흔들리면 AI가
            같은 치과로 못 묶고, 잘못된 진료시간을 안내하는 사고도 막습니다.
          </CheckItem>
        </ul>

        <h2>치과가 특히 조심해야 할 표현은?</h2>
        <p>
          홈페이지·플레이스 소개·블로그·리뷰 유도 문구에서 아래 유형의 표현은 근거를 붙여도 위반 소지가
          있습니다. 치과에서 자주 쓰이는 것들이라 특히 주의하세요.
        </p>
        <ul>
          <CheckItem>
            <strong>최상급·배타성</strong>: 최고, 최초, 유일, 1등, 넘버원, 베스트, 가장 ~
          </CheckItem>
          <CheckItem>
            <strong>완전성·단정</strong>: 완치, 완벽, 100% 성공/보장, 부작용 없는, 통증 없이·무통,
            안전한, 흉터 없는
          </CheckItem>
          <CheckItem>
            <strong>치과 특화 단정</strong>: "임플란트 평생 보증/AS", "발치 없이·삭제 없이" 단정,
            "원데이·하루 만에" 과장, "교정 무삭제" 등 결과를 단정하는 표현
          </CheckItem>
          <CheckItem>
            <strong>환자 유인(특히 비급여)</strong>: 무료, 할인, 이벤트, 사은품, 불분명한 가격할인 표시
          </CheckItem>
          <CheckItem>
            <strong>중요정보 누락</strong>: 시술 효과만 강조하고 부작용·후유증·주의사항·비용조건을
            빠뜨리는 것 (생략도 위반)
          </CheckItem>
        </ul>
        <p>
          안전한 방향은 단정·과장 대신 <strong>사실·객관 정보</strong>(시술 과정·재료·기간·주의사항·
          부작용 병기)와 "도움이 될 수 있습니다"식 신중한 서술입니다. 의심되면 사전심의·자문을 받으세요.
        </p>

        <Callout>
          정리하면, 치과 GEO의 원칙은 <strong>"치료효과를 파는 게 아니라, 신뢰할 수 있는 사실 정보를
          제공해서 AI가 인용하게 만드는 것"</strong>입니다. 시술별 페이지·질문형 콘텐츠·FAQ·정확한
          기본정보로 홈페이지를 채우고, 리뷰는 방문경험 중심으로 관리하면 의료법에 안전하면서 AI 인용에도
          가장 유리합니다. 우리 치과가 지금 AI 검색에 어떻게 뜨는지 궁금하시면, 위즈더플래닝의{" "}
          <strong>무료 진단 리포트</strong>로 현황부터 확인해 보세요.
        </Callout>
      </GuideArticle>
    </>
  )
}
