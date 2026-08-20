import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "GEO란? 뜻부터 GEO 최적화 방법·업체 선택까지 총정리"
const DESC =
  "GEO(Generative Engine Optimization)는 ChatGPT·제미나이·네이버 AI 같은 생성형 AI가 답변에서 우리 브랜드를 인용·추천하게 만드는 작업입니다. GEO의 정확한 뜻, SEO와의 차이, 실제 최적화 방법 5단계, 우리 상태를 확인하는 진단법, 직접 할지 대행을 맡길지 판단하는 기준까지 — 저희가 직접 실측하며 정리한 내용을 한 페이지에 모았습니다."
const DATE = "2026-08-05"
const URL = "https://wiztheplanning.com/guide/geo"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "GEO", "GEO란", "GEO 뜻", "GEO 최적화", "GEO 최적화 방법", "GEO 마케팅이란",
    "AI 검색 최적화", "GEO 서비스", "GEO 진단", "GEO 대행사", "생성형 엔진 최적화",
  ],
  alternates: { canonical: "/guide/geo" },
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
  about: { "@type": "Thing", name: "GEO (Generative Engine Optimization)" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "GEO란 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO는 Generative Engine Optimization(생성형 엔진 최적화)의 약자로, ChatGPT·제미나이·퍼플렉시티·네이버 AI 브리핑 같은 생성형 AI가 사용자 질문에 답할 때 우리 브랜드를 인용하거나 추천하도록 만드는 작업입니다. 검색 결과에서 순위를 올리는 SEO와 달리, AI가 만들어내는 '답변 자체'에 포함되는 것이 목표입니다.",
      },
    },
    {
      "@type": "Question",
      name: "GEO와 SEO는 무엇이 다른가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO는 검색 결과 목록에서 상위에 노출되는 것이 목표이고, GEO는 AI가 생성한 답변 안에 인용되는 것이 목표입니다. 둘은 겹치지만 같지 않습니다. 실제로 저희 페이지는 네이버 AI 브리핑 1위·구글 2위였는데도 ChatGPT에는 나오지 않았습니다. 생성형 AI는 자사 도메인 최적화만으로는 부족하고, 여러 독립 출처가 공통으로 언급하는 제3자 교차 근거를 함께 봅니다.",
      },
    },
    {
      "@type": "Question",
      name: "GEO 최적화는 어떻게 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "다섯 단계로 진행합니다. ① AI가 우리를 어떻게 답하는지 현재 상태를 실측하고 ② AI 크롤러가 홈페이지를 읽을 수 있는지 기술 점검을 하고 ③ 홈페이지·지도·디렉토리의 정보를 하나로 통일하고 ④ 고객의 실제 질문에 답하는 콘텐츠와 구조화 데이터를 설계하고 ⑤ 매월 같은 기준으로 재측정합니다. 순서가 중요합니다. 크롤러가 막혀 있는 상태에서 콘텐츠부터 늘리는 것이 가장 흔한 실수입니다.",
      },
    },
    {
      "@type": "Question",
      name: "우리 브랜드가 AI에 나오는지 어떻게 확인하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "고객이 실제로 쓸 법한 질문을 ChatGPT·제미나이·네이버 AI에 그대로 입력해 보고, 우리가 언급되는지·정보가 정확한지·경쟁사는 어떻게 나오는지 확인하면 됩니다. 답변은 매번 달라지므로 한 번이 아니라 여러 번 반복해 경향을 봐야 합니다. 그 전에 홈페이지가 AI 크롤러에게 열려 있는지부터 확인하는 것이 순서입니다.",
      },
    },
    {
      "@type": "Question",
      name: "GEO는 직접 할 수 있나요, 대행을 맡겨야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "정보 정합성 정리, 리뷰 관리, FAQ 작성 같은 콘텐츠 영역은 직접 할 수 있습니다. 반면 크롤러 접근 점검, 구조화 데이터 설계, 색인 관리 같은 기술 영역과 매월 측정·리포팅은 손이 많이 갑니다. 대행을 검토한다면 계약 전 진단을 먼저 주는지, 노출을 보장한다고 하지 않는지, 계약 종료 후 홈페이지와 콘텐츠가 누구 소유로 남는지를 확인하세요.",
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
        href="/guide/geo"
        kicker="GEO 완전 정리"
        title={TITLE}
        description={DESC}
        date="2026년 8월 5일"
      >
        <p>
          <strong>GEO(지오)는 Generative Engine Optimization, 우리말로 &lsquo;생성형 엔진
          최적화&rsquo;입니다.</strong> ChatGPT·제미나이·퍼플렉시티·네이버 AI 브리핑 같은 생성형
          AI가 사용자 질문에 답할 때 <strong>우리 브랜드를 인용하거나 추천하도록 만드는 작업</strong>을
          말합니다.
        </p>
        <p>
          이 글은 GEO의 뜻부터 최적화 방법, 진단법, 대행 판단 기준까지 한 페이지에 정리한
          안내서입니다. 각 항목마다 저희가 직접 실측하며 쓴 상세 글로 연결해 두었으니 필요한
          부분만 골라 보셔도 됩니다.
        </p>

        <h2>GEO가 필요해진 이유 — 답변이 검색을 대신합니다</h2>
        <p>
          예전에는 &ldquo;강남 치과&rdquo;를 검색하면 목록이 나왔고, 사람이 그 목록을 눌러가며
          비교했습니다. 지금은 <strong>AI가 몇 곳을 골라 바로 답합니다.</strong> 사용자는 더 이상
          목록을 훑지 않고, AI가 고른 답 안에서 선택을 끝냅니다.
        </p>
        <Callout>
          그래서 문제는 하나로 좁혀집니다 — <strong>AI가 만든 그 답변 안에 우리가 있는가.</strong>{" "}
          없으면 순위가 낮은 게 아니라, 고객의 선택지에 <strong>아예 존재하지 않는</strong> 것과
          같습니다.
        </Callout>

        <h2>GEO와 SEO는 무엇이 다른가</h2>
        <p>
          한 줄로 정리하면 — <strong>SEO는 목록에서 위로 올라가는 일, GEO는 답변 안에 들어가는
          일</strong>입니다. 겹치는 부분이 있지만 같은 게임은 아닙니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">구분</th>
                <th className="px-4 py-3 font-bold text-gray-900">SEO</th>
                <th className="px-4 py-3 font-bold text-gray-900">GEO</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["목표", "검색 결과 순위 상승", "AI 답변에 인용·추천"],
                ["결과 형태", "링크 목록", "AI가 쓴 문장"],
                ["핵심 신호", "키워드·링크·기술 최적화", "정보 일관성·제3자 교차 근거·구조화"],
                ["확인 방법", "검색 후 순위 확인", "AI에 질문해 언급 여부 확인"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          중요한 건 <strong>검색 상위 노출이 곧 AI 추천을 보장하지 않는다</strong>는 점입니다.
          저희 페이지는 &lsquo;병원 GEO 대행&rsquo; 검색에서 네이버 AI 브리핑 1위·구글 2위였는데도
          ChatGPT에는 나오지 않았습니다. 그 이유를{" "}
          <a href="/guide/ranked-but-not-in-chatgpt">우리 사이트를 실험대에 올린 기록</a>에 그대로
          공개했습니다. 엔진마다 답을 만드는 출처가 다르기 때문인데, 그 구조는{" "}
          <a href="/guide/ai-engines-cite-differently">엔진별 인용 출처의 차이</a>에 정리했습니다.
          두 개념의 차이만 더 자세히 보고 싶다면{" "}
          <a href="/guide/geo-vs-seo">GEO와 SEO 차이 — 검색 1위인데 ChatGPT엔 안 나온 이유</a>에
          실측 사례와 함께 정리해 두었습니다.
        </p>

        <h2>GEO 최적화 방법 — 5단계</h2>
        <p>
          방법 자체보다 <strong>순서가 중요합니다.</strong> 홈페이지가 막혀 있는 상태에서 콘텐츠부터
          늘리는 것이 가장 흔하고 비싼 실수입니다.
        </p>
        <ol>
          <CheckItem>
            <strong>1단계 · 현재 상태 실측</strong> — 고객이 쓸 법한 질문을 AI에 넣어 우리가
            언급되는지, 정보가 틀리게 안내되지는 않는지, 경쟁사는 어떻게 나오는지 확인합니다.
            출발점을 재지 않으면 나중에 성과를 증명할 수 없습니다.
          </CheckItem>
          <CheckItem>
            <strong>2단계 · AI 크롤러 접근 점검</strong> — AI가 홈페이지를 읽을 수 있는 상태인지
            확인합니다. 보안 설정이 크롤러까지 막고 있는 경우가 실제로 있습니다(
            <a href="/guide/case-urology-clinic">방화벽에 막혀 있던 병원 사례</a>).
          </CheckItem>
          <CheckItem>
            <strong>3단계 · 정보 정합성 통일</strong> — 홈페이지·지도 서비스·디렉토리에 흩어진
            상호·주소·연락처·영업시간을 하나의 기준으로 맞춥니다. AI는 여러 출처를 대조해 신뢰도를
            판단합니다.
          </CheckItem>
          <CheckItem>
            <strong>4단계 · 콘텐츠 제작과 구조화</strong> — 고객의 실제 질문을 그대로 제목으로 쓰고,
            첫 문단에서 결론부터 말하며, 기계가 읽을 수 있는 구조화 데이터(Schema.org)를 함께
            설계합니다. 구체적인 방법은{" "}
            <a href="/guide/get-cited-by-ai">AI 답변에 나오게 하는 7가지 방법</a>에 정리했습니다.
          </CheckItem>
          <CheckItem>
            <strong>5단계 · 재측정과 반복</strong> — 매월 같은 기준으로 다시 재서 변화를 숫자로
            확인합니다. AI 답변은 매번 달라지므로 단발 확인이 아니라 추이로 봐야 합니다.
          </CheckItem>
        </ol>

        <h2>어디에 콘텐츠를 쌓느냐가 결과를 가릅니다</h2>
        <p>
          같은 노력으로 글을 써도 <strong>쌓는 장소에 따라 AI가 읽을 수 있는지가 갈립니다.</strong>{" "}
          네이버는 robots.txt에 &ldquo;AI 학습·검색 목적의 접근을 금지한다&rdquo;고 명시하고
          GPTBot·ClaudeBot 등을 이름으로 지정해 차단하고 있습니다. 블로그·카페에 아무리 쌓아도
          생성형 AI는 그 안을 읽지 못합니다(
          <a href="/guide/naver-blocks-ai-crawlers">원문 확인</a>).
        </p>
        <p>
          저희는 2026년 7월 한국 주요 플랫폼 15곳의 robots.txt를 전수 확인해{" "}
          <a href="/guide/platform-ai-crawler-status">어디가 열려 있고 어디가 닫혀 있는지 현황판</a>
          으로 공개했습니다. 결론은 명확합니다. <strong>정책이 바뀔 걱정이 없는 곳은 자기 소유의
          홈페이지뿐</strong>입니다.
        </p>
        <p>
          다만 홈페이지가 직접 인용되지 않을 수도 있습니다. 저희 실험에서 AI는 한 식당을 추천하며
          홈페이지가 아니라 제3자 플랫폼을 인용했는데, 그럼에도 홈페이지가 결정적이었습니다. 그
          구조는 <a href="/guide/case-third-party-citation">홈페이지는 인용되지 않아도 인용을
          만들어낸다</a>에서 다뤘습니다.
        </p>

        <h2>GEO 진단 — 우리 브랜드는 지금 어떤 상태인가</h2>
        <p>
          시작 전에 현재 위치부터 확인하는 것이 순서입니다. 직접 해볼 수 있는 것은 두 가지입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>AI에 직접 물어보기</strong> — 고객이 쓸 법한 질문을 ChatGPT·제미나이·네이버
            AI에 그대로 넣고, 우리가 나오는지·정보가 정확한지 확인합니다. 답이 매번 다르므로 여러 번
            반복해 경향을 봐야 합니다. 병원이라면{" "}
            <a href="/guide/check-hospital-ai-visibility">5분 만에 확인하는 법</a>을 참고하세요.
          </CheckItem>
          <CheckItem>
            <strong>홈페이지가 읽히는 상태인지 확인</strong> — 크롤러 접근이 막혀 있으면 콘텐츠를
            아무리 만들어도 소용없습니다. <a href="/site-check">무료 사이트 진단</a>으로 기술
            상태를 1분 만에 확인할 수 있습니다.
          </CheckItem>
        </ul>

        <h2>직접 할까, 대행을 맡길까</h2>
        <p>
          <strong>직접 하기 좋은 것</strong>: 정보 정합성 정리, 리뷰 관리, 고객 질문 기반 FAQ 작성.
          손은 가지만 전문 지식 없이도 가능합니다.
        </p>
        <p>
          <strong>맡기는 편이 나은 것</strong>: 크롤러 접근 점검, 구조화 데이터 설계, 색인 관리 같은
          기술 영역과 매월 반복되는 측정·리포팅. 특히 병원처럼 의료광고법을 함께 지켜야 하는
          업종은 표현 하나가 위반이 될 수 있어 검수 체계가 필요합니다.
        </p>
        <p>
          대행을 검토 중이라면 계약 전에 확인할 기준을{" "}
          <a href="/guide/how-to-choose-geo-agency">GEO 대행사 고르는 법 — 7가지 질문</a>에
          정리했습니다. 핵심만 미리 말씀드리면 — <strong>계약 전 진단을 주는가, 노출을
          &lsquo;보장&rsquo;한다고 하지 않는가, 계약이 끝나면 홈페이지와 콘텐츠가 내 것으로
          남는가.</strong>
        </p>

        <h2>GEO는 어뷰징이 아닙니다</h2>
        <p>
          &ldquo;검색엔진을 속이는 편법 아니냐&rdquo;는 오해가 있습니다. GEO는 정확한 정보를 AI가
          읽을 수 있는 형태로 정리하는 일이지, 없는 사실을 만들거나 순위를 조작하는 일이 아닙니다.
          무엇이 정상이고 무엇이 진짜 어뷰징인지는{" "}
          <a href="/guide/is-geo-abuse">SEO·GEO는 어뷰징인가</a>에 정리했습니다.
        </p>

        <h2>업종별 가이드</h2>
        <p>
          업종마다 AI가 참고하는 근거와 지켜야 할 규제가 다릅니다. 해당하는 업종이 있다면 아래에서
          바로 확인하세요.
        </p>
        <ul>
          <CheckItem>
            <a href="/guide/medical-geo">병원·의원</a> — 의료광고법 안에서 인용받는 법
          </CheckItem>
          <CheckItem>
            <a href="/guide/dental-geo">치과</a> · <a href="/guide/skincare-geo">피부·에스테틱</a> —
            경쟁이 치열한 진료과의 질문망 설계
          </CheckItem>
          <CheckItem>
            <a href="/guide/naver-place-checklist">지역 매장</a> — 네이버 플레이스 기본 정비
          </CheckItem>
          <CheckItem>
            <a href="/guide/case-mobile-carwash">지역 서비스업 사례</a> — 2개월 만에 구글 AI 개요에
            노출되기까지
          </CheckItem>
        </ul>

        <h2>얼마나 걸리나요</h2>
        <p>
          <strong>엔진마다 시계가 다릅니다.</strong> 저희 실측에서 정보 정합성 교정처럼 빠른 작업은
          몇 주 안에 반영되기 시작했고, 홈페이지를 전면 개선한 병원은 안정적인 노출까지 약 6개월이
          걸렸습니다. 검색엔진 색인도 엔진별로 차이가 커서, 같은 글을 구글은 3일 만에 색인했지만
          빙은 8일이 지나도 읽지 않은 사례를{" "}
          <a href="/guide/bing-index-bottleneck">그대로 기록해 두었습니다</a>. ChatGPT 노출을
          목표로 한다면 이 차이를 알고 시작해야 합니다.
        </p>
        <Callout>
          그래서 <strong>&lsquo;보장&rsquo;을 약속하는 곳은 오히려 주의해야 합니다.</strong> AI
          답변은 엔진·시점·질문 방식에 따라 매번 달라 누구도 보장할 수 없습니다. 보장 대신{" "}
          <strong>측정</strong>을 제시하는 곳이 정직한 곳입니다.
        </Callout>

        <h2>지금 시작한다면</h2>
        <p>
          순서는 하나입니다. <strong>진단 먼저, 실행은 그다음.</strong> 우리 홈페이지가 AI에게
          열려 있는지, 지금 AI가 우리를 어떻게 답하는지 확인하는 데는 비용이 들지 않습니다.{" "}
          <a href="/site-check">무료 사이트 진단</a>으로 기술 상태를 먼저 확인하고, 병원이라면{" "}
          <a href="/medical-geo-agency">병원 GEO 대행</a>에서 진행 방식을 보실 수 있습니다.
          저희가 실측한 기록은 <a href="/guide">전체 가이드</a>에, 개념을 영상으로 보고 싶다면{" "}
          <a href="/theater">위즈 극장</a>에 정리해 두었습니다.
        </p>
      </GuideArticle>
    </>
  )
}
