import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE =
  "네이버가 ChatGPT·구글 AI의 접근을 막았습니다 — 그래서 홈페이지가 필수입니다"
const DESC =
  "블로그·카페에 아무리 리뷰를 쌓아도 ChatGPT·퍼플렉시티·구글 AI는 그 안을 읽지 못합니다. 네이버가 robots.txt에 'AI 학습·RAG 목적의 접근을 금지한다'고 명시하며 GPTBot·ClaudeBot 등을 이름까지 지정해 차단했기 때문입니다. AI가 읽을 수 있는 건 열린 웹, 곧 우리 홈페이지입니다. 왜 지금 홈페이지가 필수인지, 우리 홈페이지가 AI에 열려 있는지 확인하는 법까지 정리했습니다."
const DATE = "2026-07-24"
const URL = "https://wiztheplanning.com/guide/naver-blocks-ai-crawlers"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "네이버 AI 검색", "ChatGPT 네이버", "네이버 robots.txt", "GPTBot 차단",
    "AI 크롤러 차단", "홈페이지 필요", "홈페이지 제작", "GEO 홈페이지",
    "생성형 AI 검색", "네이버 블로그 AI", "퍼플렉시티 네이버", "구글 AI 개요",
  ],
  alternates: { canonical: "/guide/naver-blocks-ai-crawlers" },
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
      name: "네이버 블로그에 글이 많으면 ChatGPT에도 인용되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "대부분 아닙니다. 네이버 블로그(blog.naver.com)와 카페(cafe.naver.com)는 robots.txt에서 GPTBot·OAI-SearchBot·ClaudeBot·PerplexityBot·Google-Extended 등 생성형 AI 크롤러를 이름까지 지정해 차단하고 있습니다. 규약을 준수하는 이 크롤러들은 네이버 안의 글을 수집하지 않으므로, 네이버 밖 AI 답변에는 그 글이 근거로 쓰이기 어렵습니다.",
      },
    },
    {
      "@type": "Question",
      name: "그럼 네이버 마케팅은 소용없나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아닙니다. 네이버 플레이스·블로그와 네이버 자체 AI 검색 안에서는 여전히 중요합니다. 다만 그것은 '네이버 안'에서만 유효하고, ChatGPT·구글 AI·퍼플렉시티 같은 '네이버 밖' AI에 노출되려면 별도로 열려 있는 홈페이지가 필요합니다. 엔진마다 참고하는 출처가 다르기 때문입니다.",
      },
    },
    {
      "@type": "Question",
      name: "홈페이지만 있으면 자동으로 AI에 나오나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아닙니다. 홈페이지가 있어도 보안 방화벽이나 robots.txt로 크롤러가 막혀 있으면 AI에게는 없는 것과 같습니다. AI 크롤러가 접근할 수 있고, 기계가 이해할 수 있는 구조(구조화 데이터·질문형 콘텐츠)를 갖춰야 인용됩니다. 현재 상태는 무료 진단으로 바로 확인할 수 있습니다.",
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
        href="/guide/naver-blocks-ai-crawlers"
        kicker="네이버 · AI 검색"
        title={TITLE}
        description={DESC}
        date="2026년 7월 24일"
      >
        <p>
          손님이 가게를 찾는 방식이 둘로 갈라졌습니다. 한쪽은 예전처럼 네이버에 검색합니다. 다른
          한쪽은 <strong>ChatGPT·퍼플렉시티·구글 AI에게 대화하듯 묻습니다.</strong> &ldquo;○○동에서
          아이랑 가기 좋은 치과 추천해줘&rdquo; 같은 식으로요. 문제는, 이 두 세계가 서로 다른
          곳을 본다는 데 있습니다.
        </p>

        <h2>네이버는 AI의 접근을 &lsquo;문서로&rsquo; 막아두었습니다</h2>
        <p>
          많은 사장님이 이렇게 생각합니다. &ldquo;네이버 블로그·카페에 리뷰가 이렇게 많은데, AI도
          그걸 보고 우리 가게를 추천하겠지.&rdquo; 하지만 <strong>그렇지 않습니다.</strong> 네이버는
          외부 AI가 자사 콘텐츠를 수집하는 것을 명시적으로 차단하고 있습니다.
        </p>
        <p>
          웹사이트에는 크롤러에게 접근 규칙을 알려주는 <strong>robots.txt</strong>라는 파일이 있습니다.
          이것은 2022년 국제인터넷표준화기구(IETF)가{" "}
          <a
            href="https://www.rfc-editor.org/rfc/rfc9309.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline underline-offset-2"
          >
            RFC 9309 &lsquo;로봇 배제 프로토콜&rsquo;
          </a>
          로 정식 표준화한 규약이고, OpenAI·구글·앤트로픽 등 주요 AI 업체는 이 규칙을 준수한다고
          공식 문서에서 밝히고 있습니다.
        </p>
        <p>
          그런데{" "}
          <a
            href="https://blog.naver.com/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline underline-offset-2"
          >
            네이버 블로그의 robots.txt
          </a>
          와{" "}
          <a
            href="https://cafe.naver.com/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline underline-offset-2"
          >
            네이버 카페의 robots.txt
          </a>
          를 직접 열어보면, 맨 위에 이런 문장이 영어로 적혀 있습니다.
        </p>
        <Callout>
          &ldquo;BOT ACCESS FOR THE PURPOSES OF AI TRAINING AND RETRIEVAL-AUGMENTED GENERATION (RAG)
          IS STRICTLY PROHIBITED.&rdquo;
          <br />
          <span className="mt-2 block text-sm text-gray-600">
            (AI 학습 및 검색증강생성(RAG) 목적의 봇 접근을 엄격히 금지합니다.)
          </span>
        </Callout>
        <p>
          선언에 그치지 않고, <strong>차단할 크롤러를 이름까지 지정</strong>해 두었습니다. 확인되는
          것만 정리하면 이렇습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>GPTBot</strong> — OpenAI가{" "}
            <a
              href="https://developers.openai.com/api/docs/bots"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 underline underline-offset-2"
            >
              공식 문서
            </a>
            에서 &ldquo;생성형 AI 파운데이션 모델 학습에 사용될 수 있는 콘텐츠를 크롤링한다&rdquo;고
            설명하는 학습용 봇
          </CheckItem>
          <CheckItem>
            <strong>OAI-SearchBot</strong> — ChatGPT의 검색 답변을 만드는 봇
          </CheckItem>
          <CheckItem>
            <strong>Google-Extended</strong> — 구글 제미나이 등 학습용 접근 토큰
          </CheckItem>
          <CheckItem>
            <strong>ClaudeBot · Claude-SearchBot</strong> — 앤트로픽(클로드)의 크롤러
          </CheckItem>
          <CheckItem>
            <strong>PerplexityBot · CCBot</strong> — 퍼플렉시티, 그리고 다수 AI의 학습 데이터로 쓰이는
            Common Crawl의 봇
          </CheckItem>
        </ul>
        <p>
          메인 페이지(<code>www.naver.com</code>)는 아예 <code>User-agent: *</code> /{" "}
          <code>Disallow: /</code>, 즉 <strong>모든 봇에게 전체 접근 금지</strong>로 설정돼 있습니다.
          네이버 안은 사실상 담장이 둘러진 정원입니다.
        </p>

        <h2>차단당한 AI는 우리 가게를 &lsquo;근거 없이&rsquo; 추천할 수 없습니다</h2>
        <p>
          AI가 특정 가게를 답변에 넣으려면 <strong>그 가게에 대한 읽을 수 있는 근거</strong>가
          있어야 합니다. 그런데 그 근거가 네이버 블로그·카페 안에만 쌓여 있다면, 차단된 AI 입장에서는
          존재하지 않는 정보와 같습니다.
        </p>
        <p>
          이건 검색 노출에도 직접 영향을 줍니다. OpenAI 공식 문서는{" "}
          <strong>검색용 봇을 막으면 어떻게 되는지</strong>를 이렇게 못박아 두었습니다.
        </p>
        <Callout>
          &ldquo;Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search
          answers, though can still appear as navigational links.&rdquo;
          <br />
          <span className="mt-2 block text-sm text-gray-600">
            (OAI-SearchBot을 차단한 사이트는 ChatGPT 검색 답변에 표시되지 않습니다. 단순 링크로만
            등장할 수 있을 뿐입니다.)
          </span>
        </Callout>
        <p>
          정리하면, 네이버는 <strong>자사 데이터는 자사 서비스 안에서만 쓰고 외부 AI에는 닫아둔</strong>
          구조입니다. 반대로 <strong>ChatGPT·구글·퍼플렉시티가 읽을 수 있는 정보는 &lsquo;열린
          웹&rsquo;에 있는 것들</strong>입니다. 그리고 자영업·병원 사장님에게 열린 웹이란,
          결국 <strong>본인 명의의 홈페이지</strong>입니다.
        </p>

        <h2>그래서 홈페이지가 &lsquo;선택&rsquo;이 아니라 &lsquo;기반&rsquo;이 됩니다</h2>
        <p>
          엔진마다 참고하는 출처가 다릅니다. 네이버 AI는 플레이스·리뷰를, ChatGPT·구글은 열린 웹의
          홈페이지를 주로 봅니다. 자세한 차이는{" "}
          <a href="/guide/ai-engines-cite-differently">엔진별 인용 출처의 차이</a>에 정리해
          두었습니다. 핵심만 말하면, <strong>네이버 밖 AI에 노출되는 통로는 홈페이지</strong>라는
          것입니다.
        </p>
        <p>
          실제 사례에서도 같은 결론이 나옵니다. 네이버 플레이스·카페 홍보만으로 성장이 멈춰 있던{" "}
          <a href="/guide/case-mobile-carwash">한 출장세차 업체</a>는, 채널별 정보를 일치시키고
          홈페이지를 기계가 읽을 수 있는 구조로 정비한 뒤 <strong>2개월 만에 구글 AI 개요에
          노출</strong>되고 이어서 ChatGPT 추천을 받기 시작했습니다.
        </p>

        <h2>홈페이지가 &lsquo;있는데&rsquo; 안 보이는 경우도 많습니다</h2>
        <p>
          여기서 흔한 오해가 하나 더 있습니다. &ldquo;우리는 홈페이지가 있으니 괜찮다&rdquo;는
          생각입니다. 하지만 홈페이지가 있어도 <strong>보안 방화벽이나 robots.txt 설정으로 AI
          크롤러가 막혀 있으면, 사람 눈에는 멀쩡히 열려도 AI에게는 없는 사이트</strong>입니다.
        </p>
        <p>
          <a href="/guide/case-urology-clinic">ChatGPT에 아예 안 뜨던 비뇨기과 사례</a>가 정확히
          그랬습니다. 콘텐츠 문제가 아니라, 제작사가 기본값으로 남겨둔 방화벽이 크롤러까지 막고 있던
          것이었습니다. 그래서 새로 만들 것인가, 열어줄 것인가를 판단하려면{" "}
          <strong>지금 우리 홈페이지가 AI에게 어떤 상태인지부터 확인</strong>해야 합니다.
        </p>

        <h2>우리 홈페이지, 지금 AI에게 열려 있을까요?</h2>
        <p>
          이건 짐작이 아니라 <strong>확인할 수 있는 문제</strong>입니다. 위즈더플래닝은 주소만 넣으면
          홈페이지의 SEO·GEO 상태를 즉시 점검하는 도구를 무료로 열어두었습니다. AI 크롤러 접근 허용
          여부, 구조화 데이터, 제목·모바일 대응 같은 기초 요소를 실제로 검사합니다.
        </p>
        <Callout>
          지금 바로{" "}
          <a
            href="/site-check"
            className="font-bold text-emerald-700 underline underline-offset-2"
          >
            우리 홈페이지가 AI에 열려 있는지 무료로 진단
          </a>
          해 보세요. 주소 한 줄이면 됩니다. 부족한 부분이 어디인지, 새로 만들어야 할지 고쳐야 할지
          판단하는 출발점이 됩니다.
        </Callout>
        <p>
          홈페이지가 없다면 지금이 만들 때이고, 있다면 AI가 읽을 수 있게 열려 있는지 점검할
          때입니다. 네이버가 담장을 높일수록, <strong>담장 밖에 열려 있는 우리 홈페이지의 가치는
          더 커집니다.</strong>
        </p>
      </GuideArticle>
    </>
  )
}
