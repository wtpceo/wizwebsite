import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE =
  "네이버 AI 1위·구글 2위인데 ChatGPT엔 안 나옵니다: 우리 사이트로 직접 한 GEO 실험"
const DESC =
  "'병원 GEO 대행' 키워드에서 우리 페이지는 공개 2일 만에 네이버 AI 브리핑 1위, 구글 2위, 네이버 통합검색 4위에 올랐습니다. 그런데 ChatGPT·제미나이·퍼플렉시티에 '추천해줘'라고 물으면 아직 나오지 않습니다. 왜 같은 회사가 검색엔진에서는 상위인데 생성형 AI에서는 빠질까요? 우리 사이트를 실험대에 올려 그 이유를 그대로 공개합니다."
const DATE = "2026-07-25"
const URL = "https://wiztheplanning.com/guide/ranked-but-not-in-chatgpt"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "병원 GEO 대행", "네이버 AI 브리핑", "ChatGPT 추천", "GEO SEO 차이",
    "AI 검색 최적화", "생성형 AI 노출", "구글 상위노출", "GEO 사례",
    "AI 검색 안 나올 때", "제미나이 퍼플렉시티",
  ],
  alternates: { canonical: "/guide/ranked-but-not-in-chatgpt" },
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
      name: "네이버·구글에 상위 노출되면 ChatGPT에도 자동으로 나오나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아닙니다. 엔진마다 답변을 만드는 출처가 다릅니다. 네이버 AI는 네이버 안 데이터, 구글은 자사 색인 순위를 보지만, ChatGPT·제미나이·퍼플렉시티는 여러 독립 출처가 공통으로 언급하는지(제3자 교차 근거)와 학습된 지식을 봅니다. 그래서 검색엔진 상위 노출이 곧 생성형 AI 추천으로 이어지지 않습니다.",
      },
    },
    {
      "@type": "Question",
      name: "왜 생성형 AI에는 노출까지 시간이 더 걸리나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "두 가지 이유입니다. 첫째, 생성형 AI는 자사 사이트 최적화만으로는 부족하고 외부 도메인의 교차 언급이 쌓여야 추천 후보로 인식합니다. 둘째, 모델의 학습 데이터에는 시차가 있어 최근에 새로 최적화한 내용이 바로 반영되지 않습니다.",
      },
    },
    {
      "@type": "Question",
      name: "그럼 네이버·구글 최적화는 의미가 없나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아닙니다. 검색엔진 최적화는 여전히 필수 기반입니다. 다만 생성형 AI가 추천하게 하려면 그 위에 제3자 노출과 엔티티 근거를 쌓는 추가 작업이 더 필요합니다. GEO는 SEO의 연장이 아니라 겹치되 다른 게임입니다.",
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
        href="/guide/ranked-but-not-in-chatgpt"
        kicker="자체 실험 · GEO INSIGHT"
        title={TITLE}
        description={DESC}
        date="2026년 7월 25일"
      >
        <p>
          GEO를 대행하는 회사가 정작 자기 사이트는 어떤지: 그걸 우리 사이트로 직접 실험대에
          올려봤습니다. 결과가 흥미로워서, 잘된 것과 <strong>아직 안 된 것을 있는 그대로</strong>
          공개합니다.
        </p>

        <h2>실험: 우리 서비스를 우리 사이트에 그대로 적용</h2>
        <p>
          <strong>2026년 7월 23일</strong>, &lsquo;병원 GEO 대행&rsquo; 키워드를 겨냥한{" "}
          <a href="/medical-geo-agency">병원 GEO 대행 서비스 페이지</a>를 새로 공개했습니다. 우리가
          고객에게 적용하는 기준: AI가 읽을 수 있는 구조, 구조화 데이터, 명확한 서비스 정보, 질문형
          콘텐츠: 을 그대로 넣었습니다. (구체적인 실행 방식은 우리 노하우라 공개하지 않습니다.)
        </p>

        <h2>결과: 이틀 만에 검색엔진 상위</h2>
        <p>
          공개 이틀 뒤인 <strong>7월 25일 확인 시점 기준</strong>, &lsquo;병원 GEO 대행&rsquo;
          검색에서 이렇게 나왔습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>네이버 AI 브리핑 1위</strong>: AI 답변 카드 최상단에 우리 페이지가 인용됨
          </CheckItem>
          <CheckItem>
            <strong>구글 검색 결과 2위</strong>: 광고를 제외한 자연 검색 결과 상단
          </CheckItem>
          <CheckItem>
            <strong>네이버 통합검색 4위</strong>: 웹사이트 영역 상위권
          </CheckItem>
        </ul>
        <p>
          경쟁이 있는 신생 키워드에서 <strong>공개 2일</strong> 만에 나온 수치입니다. (검색 순위는
          시점과 지역·기기에 따라 달라질 수 있어, 위 숫자는 해당 시점의 스냅샷입니다.)
        </p>

        <h2>그런데: ChatGPT·제미나이·퍼플렉시티엔 아직 안 나옵니다</h2>
        <p>
          같은 키워드로 <strong>ChatGPT·제미나이·퍼플렉시티</strong>에 &ldquo;병원 GEO 대행
          추천해줘&rdquo;라고 물으면, <strong>우리 회사는 아직 나오지 않습니다.</strong> 네이버 AI
          1위, 구글 2위인 회사가 말이죠. 왜 이런 일이 생길까요?
        </p>
        <Callout>
          핵심은 이겁니다: <strong>&ldquo;검색엔진 상위 노출&rdquo;과 &ldquo;생성형 AI 추천&rdquo;은
          다른 게임입니다.</strong> 엔진마다 답을 만드는 출처가 다르기 때문입니다. 자세한 구조는{" "}
          <a href="/guide/ai-engines-cite-differently">엔진별 인용 출처의 차이</a>에 정리해
          두었습니다.
        </Callout>

        <h2>왜 검색은 되는데 AI 추천은 안 될까: 3가지 이유</h2>
        <ol>
          <CheckItem>
            <strong>생성형 AI는 &lsquo;제3자 교차 언급&rsquo;을 봅니다.</strong> ChatGPT·퍼플렉시티는
            &ldquo;여러 독립 출처가 공통으로 추천하는가&rdquo;를 근거로 답합니다. 자기 사이트가 아무리
            잘 돼 있어도 &lsquo;자기가 자기를 추천&rsquo;하는 건 근거로 약합니다. 실제로 이 키워드를
            물으면 AI는 제3자가 쓴 &lsquo;GEO 대행사 Top 5&rsquo; 류 비교 글에 실린 회사들을 댑니다.
          </CheckItem>
          <CheckItem>
            <strong>네이버 안의 권위를 글로벌 AI는 못 읽습니다.</strong> 네이버 1위는 네이버 생태계
            안에서 나온 신호인데, ChatGPT·제미나이·퍼플렉시티는 네이버를 읽지 못합니다. 네이버가
            robots.txt로 &ldquo;AI 학습·RAG 목적의 접근을 엄격히 금지한다&rdquo;고 명시해 두었기
            때문입니다. 이 구조는{" "}
            <a href="/guide/naver-blocks-ai-crawlers">네이버가 AI 접근을 막은 이유</a>에서 원문까지
            확인할 수 있습니다.
          </CheckItem>
          <CheckItem>
            <strong>학습 데이터에는 시차가 있습니다.</strong> 생성형 AI가 &ldquo;추천해줘&rdquo;에
            답할 때는 상당 부분을 학습된 지식에서 꺼냅니다. 최근에 새로 최적화한 페이지는 아직 모델의
            &lsquo;기억&rsquo;에 들어가 있지 않습니다. 검색엔진은 실시간 색인이라 이틀 만에 반영되지만,
            모델의 학습 반영은 그보다 훨씬 느립니다.
          </CheckItem>
        </ol>

        <h2>이 실험이 말해주는 것</h2>
        <ul>
          <CheckItem>
            <strong>&ldquo;네이버·구글 상위 = AI가 추천한다&rdquo;가 아닙니다.</strong> 검색엔진
            최적화는 필수 기반이지만, 그 자체가 생성형 AI 추천을 보장하지 않습니다.
          </CheckItem>
          <CheckItem>
            <strong>GEO는 SEO의 연장선이 아닙니다.</strong> 겹치는 부분은 있지만, 생성형 AI에
            인용되려면 <strong>자사 도메인 밖 제3자 근거</strong>와 <strong>엔티티로 각인되는 작업</strong>이
            추가로 필요합니다. 이건 순위 올리기와는 다른 종류의 일입니다.
          </CheckItem>
          <CheckItem>
            <strong>그래서 순서와 시간이 중요합니다.</strong> 검색 상위는 빠르게 되기도 하지만, AI
            추천은 보통 더 오래 걸립니다. 지금 정확히 진단하고 순서를 잡는 것이 먼저인 이유입니다.
          </CheckItem>
        </ul>

        <h2>그래서 우리가 지금 하고 있는 것 (다음 편 예고)</h2>
        <p>
          우리는 지금 우리 사이트를 대상으로 다음 단계를 진행하고 있습니다. 제3자 매체에 &lsquo;병원
          GEO 대행&rsquo; 맥락으로 등장시키기, 신뢰 가능한 출처에 회사 정보를 일관되게 각인시키기, AI
          검색이 참고하는 색인에 편입시키기. 방금 <strong>빙(Bing) 색인</strong>도 마쳤습니다. ChatGPT
          검색이 빙 색인을 참고하기 때문입니다.
        </p>
        <p>
          이 작업으로 <strong>ChatGPT·제미나이·퍼플렉시티에도 노출되기 시작하면</strong>, 그 과정과
          결과를 <strong>2편에서 그대로 공개</strong>하겠습니다. 잘된 것만이 아니라 무엇이 얼마나 걸렸는지까지요.
        </p>

        <p>
          GEO가 정확히 무엇이고 어떤 순서로 진행되는지는{" "}
          <a href="/guide/geo">GEO 총정리</a>에 한 페이지로 정리해 두었습니다.
        </p>

        <h2>우리 홈페이지도 궁금하다면</h2>
        <p>
          검색엔진에는 잘 나오는데 AI 답변에는 빠지는지, 아니면 아예 크롤조차 안 되는지는 확인해 보면
          바로 알 수 있습니다. 먼저{" "}
          <a href="/site-check">무료 사이트 진단</a>으로 홈페이지의 구조·기술 상태를 확인하고, AI 실제
          노출까지 보는 정밀 진단이 필요하면 이어서 요청하실 수 있습니다. 이 실험도 진단에서
          시작했습니다.
        </p>
        <p>
          측정 도구를 고르는 기준과 저희가 직접 만들며 확인한 것은{" "}
          <a href="/guide/geo-measurement-tools">GEO 측정 도구 고르는 법</a>에 따로 정리했습니다.
        </p>
      </GuideArticle>
    </>
  )
}
