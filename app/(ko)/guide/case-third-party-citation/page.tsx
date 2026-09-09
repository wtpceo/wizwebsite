import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE =
  "홈페이지를 만들었더니 AI가 추천하기 시작했습니다. 정작 인용한 건 우리 홈페이지가 아니었습니다"
const DESC =
  "웹 존재감이 0이던 지방 중소도시의 한 중식당. 플레이스와 상세 홈페이지를 만들고 색인했더니 AI가 이 식당을 4순위로 추천하기 시작했습니다. 그런데 AI가 인용한 출처는 우리 홈페이지가 아니라 다이닝코드였습니다. 왜 홈페이지는 인용되지 않는데 홈페이지 덕분에 추천이 생겼을까요: 우리가 직접 한 실험 결과를 공개합니다."
const DATE = "2026-07-26"
const URL = "https://wiztheplanning.com/guide/case-third-party-citation"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "AI 검색 홈페이지", "홈페이지 AI 노출", "GEO 홈페이지 효과", "AI 맛집 추천 원리",
    "다이닝코드 인용", "네이버 플레이스 AI 노출", "신규 매장 AI 노출", "제3자 인용",
    "GEO 실제 사례", "생성형 AI 노출",
  ],
  alternates: { canonical: "/guide/case-third-party-citation" },
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
      name: "홈페이지를 만들면 AI가 우리 가게를 추천하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "우리 실험에서는 추천으로 이어졌습니다. 다만 AI가 인용한 출처는 우리 홈페이지가 아니라 다이닝코드 같은 제3자 플랫폼이었습니다. 생성형 AI는 '자기가 자기를 추천하는' 1차 출처(홈페이지)보다 여러 독립 출처가 공통으로 인정하는 제3자 근거를 더 신뢰하기 때문입니다. 그래서 홈페이지의 역할은 직접 인용되는 것이 아니라, 제3자가 나를 실을 수 있게 하고 AI가 나를 신뢰하게 만드는 기반이 되는 것입니다.",
      },
    },
    {
      "@type": "Question",
      name: "AI는 왜 내 홈페이지가 아니라 다이닝코드 같은 제3자를 인용하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "세 가지 이유입니다. 첫째, 생성형 AI는 자기 사이트가 자기를 추천하는 1차 근거를 약하게 보고 여러 독립 출처의 제3자 교차 근거를 더 신뢰합니다. 둘째, 다이닝코드는 AI가 이미 신뢰하는 맛집 답변용 인용 도메인인 반면 신생 홈페이지는 인용 이력이 없습니다. 셋째, '○○지역 맛집 추천'처럼 비교를 요구하는 질문에는 단일 매장 페이지보다 리스트형 소스가 맞아떨어집니다.",
      },
    },
    {
      "@type": "Question",
      name: "플레이스만 등록하면 AI 검색에 노출되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "플레이스는 시작점일 뿐입니다. 우리 사례에서 추천이 생긴 것은 플레이스에 더해 실사진과 영상을 갖춘 상세 홈페이지로 신뢰의 근거를 두껍게 쌓고 열린 웹에 색인했기 때문으로 해석됩니다. 다만 특정 시점의 단일 사례라 인과를 단정하기보다 방향으로 보는 것이 맞습니다.",
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
        href="/guide/case-third-party-citation"
        kicker="실제 사례 · GEO INSIGHT"
        title={TITLE}
        description={DESC}
        date="2026년 7월 26일"
      >
        <p>
          &ldquo;홈페이지, 요즘도 필요한가요?&rdquo; 자주 받는 질문입니다. 이번엔 말로 답하는 대신
          직접 실험했습니다. <strong>웹 존재감이 사실상 0이던 한 중식당</strong>(지방 중소도시,
          광고주 보호를 위해 상호·지역은 비공개)을 대상으로, 처음부터 GEO 기반을 세워봤습니다.
        </p>

        <h2>실험: 존재감 0에서 시작한 식당</h2>
        <p>
          이 식당은 검색해도 거의 잡히지 않았습니다. AI에게 지역 중식당을 물어도 당연히 나오지
          않았고요. 여기에 우리가 한 것은 크게 세 가지입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>플레이스 정비</strong>: 구글·네이버에 상호·주소·전화·메뉴를 일관되게 세팅
          </CheckItem>
          <CheckItem>
            <strong>상세 홈페이지 제작</strong>: 실제 매장 사진을 곁들여 상세하게, 쇼츠 영상까지 붙여서
          </CheckItem>
          <CheckItem>
            <strong>색인</strong>: 빙·구글·네이버에 크롤을 통보해 검색·AI가 읽을 수 있게
          </CheckItem>
        </ul>
        <p>
          (광고주 보호를 위해 정확한 상호·지역, 며칠 만에 몇 순위였는지 같은 세부 수치는 익명 처리했습니다.
          중요한 건 개별 숫자보다 <strong>무엇이 왜 작동했는가</strong>이고, 그건 아래에서 그대로
          공개합니다.)
        </p>

        <h2>결과: AI가 이 식당을 4순위로 추천하기 시작</h2>
        <p>
          색인 이후, 지역 중식당을 묻는 질문에서 <strong>AI가 이 식당을 4순위로 추천</strong>하기
          시작했습니다. 1순위는 아니었지만, 얼마 전까지 &lsquo;존재하지 않던&rsquo; 가게가 추천 목록에
          이름을 올린 것 자체가 큰 변화입니다. (검색·추천 순위는 시점·지역·기기에 따라 달라지는
          스냅샷 값입니다.)
        </p>

        <h2>특이점: AI가 인용한 건 우리 홈페이지가 아니었습니다</h2>
        <p>
          흥미로운 지점은 여기입니다. AI가 이 식당을 추천하며 근거로 <strong>인용한 출처는 우리가 만든
          홈페이지가 아니라 다이닝코드</strong>였습니다. 그토록 공들여 만든 홈페이지는 정작 인용문에
          등장하지 않았습니다.
        </p>
        <p>
          처음엔 &ldquo;그럼 홈페이지는 헛수고였나?&rdquo; 싶었습니다. 하지만 뜯어보니 정반대였습니다.
          홈페이지가 인용되지 않았다는 게 <strong>&lsquo;쓸모없었다&rsquo;는 뜻은 아니었습니다.</strong>{" "}
          <strong>&lsquo;인용&rsquo;과 &lsquo;추천&rsquo;은 다른 층위에서 일어나기</strong> 때문입니다.
          홈페이지는 두 가지 방식으로 결정적인 역할을 하고 있었습니다.
        </p>

        <h3>① 홈페이지는 &lsquo;존재하는 가게&rsquo;로 인식시킵니다 (엔티티 앵커)</h3>
        <p>
          AI가 어떤 가게를 추천하려면, 먼저 그 대상이 <strong>하나의 일관된 실체로 존재</strong>한다는
          걸 알아야 합니다. 웹 존재감 0이던 이 식당은 모델에게 사실상 &lsquo;없는 가게&rsquo;였습니다.
          플레이스와 홈페이지가 상호·주소·전화·메뉴·사진을 일관된 신호로 뿌리면서, &ldquo;이 이름 = 이
          위치 = 이 업종&rdquo;을 하나로 묶는 <strong>앵커</strong>가 생긴 겁니다. 추천 후보가 되기 위한
          입장권을 만든 셈이죠.
        </p>

        <h3>② 인용은 제3자에서 나옵니다: 홈페이지는 그 인용을 &lsquo;가능하게&rsquo; 합니다</h3>
        <p>
          생성형 AI는 <strong>&lsquo;자기가 자기를 추천하는&rsquo; 1차 출처(홈페이지)를 근거로 약하게
          봅니다.</strong> 대신 &ldquo;여러 독립 출처가 공통으로 인정하는가&rdquo;라는 제3자 교차 근거를
          더 신뢰합니다. 다이닝코드는 AI가 이미 신뢰하는 &lsquo;맛집 답변용 인용 도메인&rsquo;이고,
          신생 홈페이지는 아직 인용 이력이 없습니다. 게다가 &ldquo;○○지역 중식당 추천해줘&rdquo;라는
          질문에는 단일 매장 페이지보다 <strong>비교·리스트형 소스</strong>가 맞아떨어집니다.
        </p>
        <p>
          이 원리는 우리가 앞서 정리한{" "}
          <a href="/guide/ai-engines-cite-differently">엔진별 인용 출처의 차이</a>와{" "}
          <a href="/guide/ranked-but-not-in-chatgpt">우리 사이트로 직접 한 GEO 실험</a>에서
          말한 &lsquo;제3자 교차 언급&rsquo;과 정확히 일치합니다. 이번 식당 사례가 그 실측 증거인
          셈입니다.
        </p>

        <Callout>
          한 줄로 요약하면 이렇습니다. <strong>&ldquo;홈페이지는 인용되지 않아도, 인용을
          만들어낸다.&rdquo;</strong> 진짜 인과의 순서는: 홈페이지·플레이스로 신뢰 가능한 엔티티 성립 →
          다이닝코드 같은 제3자가 이 실체를 실어줄 자격 발생 → AI가 추천에 쓸 &lsquo;인용 가능한 제3자
          소스&rsquo;로 다이닝코드를 인용. 홈페이지의 역할은 <strong>본인이 인용되는 것</strong>이 아니라,{" "}
          <strong>제3자가 나를 실을 수 있게 하고 AI가 나를 신뢰하게 만드는 기반 인프라</strong>입니다.
        </Callout>

        <h2>홈페이지가 AI 검색 노출에 필요한 이유: 이 사례가 주는 교훈</h2>
        <ul>
          <CheckItem>
            <strong>&ldquo;홈페이지가 직접 인용돼야 의미 있다&rdquo;는 오해를 깹니다.</strong> 인용되지
            않아도, 홈페이지는 나를 추천 후보로 만들고 제3자 인용을 끌어냅니다.
          </CheckItem>
          <CheckItem>
            <strong>네이버 밖 &lsquo;열린 웹&rsquo;이 필요합니다.</strong> AI가 읽는 건 네이버 안이
            아니라 열린 웹입니다. 왜 그런지는{" "}
            <a href="/guide/naver-blocks-ai-crawlers">네이버가 AI 접근을 막은 이유</a>에 원문까지
            정리해 두었습니다.
          </CheckItem>
          <CheckItem>
            <strong>플레이스만으로는 부족합니다.</strong> 신뢰의 근거(실사진·영상·상세 정보)를 두껍게
            쌓아야 &lsquo;추천할 만한 실체&rsquo;가 됩니다.
          </CheckItem>
        </ul>

        <h2>정직하게: 이 사례의 한계</h2>
        <p>
          이건 <strong>특정 시점의 단일 사례(n=1)</strong>입니다. 상관관계일 뿐 인과를 확정한 건
          아닙니다. 홈페이지 없이도 다이닝코드가 이 식당을 실었을 가능성을 완전히 배제할 수 없고,
          4순위 역시 흔들리는 스냅샷 값입니다. 인과를 더 분명히 하려면 대조군(플레이스만 있고 홈페이지는
          없는 경우)과의 비교가 필요합니다. 그 후속 실험도 준비하고 있습니다. 이 글은 &lsquo;정답&rsquo;이
          아니라 <strong>있는 그대로의 관찰과 해석</strong>입니다.
        </p>

        <h2>우리 가게도 이렇게 될 수 있을까요?</h2>
        <p>
          업종·지역·현재 웹 존재감에 따라 순서와 걸리는 시간이 다릅니다. 우리 가게가 지금 AI에게
          어떻게 보이는지: 아예 &lsquo;없는 가게&rsquo;인지, 있는데 신뢰 근거가 얇은 건지: 부터
          확인하는 게 먼저입니다. <a href="/site-check">무료 사이트 진단</a>으로 홈페이지의 구조·기술
          상태를 확인하고, AI 실제 노출까지 보는 정밀 진단이 필요하면 이어서 요청하실 수 있습니다.
          이 실험도 진단에서 시작했습니다.
        </p>
        <p>
          덧붙이면, 제3자 플랫폼에 얹혀 있을 때 넘어가는 건 인용만이 아닙니다. 예약·주문이 플랫폼을
          거치면 수수료도 함께 넘어갑니다. 자체 사이트로 그 흐름을 되돌린 8일치 실측은{" "}
          <a href="/guide/case-pension-direct-booking">펜션 예약 수수료 10.45%, 자체 사이트로 만실 채운 기록</a>에
          정리했습니다.
        </p>
      </GuideArticle>
    </>
  )
}
