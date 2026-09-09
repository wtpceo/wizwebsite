import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 54자
const TITLE = "AI 검색 유입 측정 방법: 4단계로 나눠 세기, 구글 76 vs 빙 32 실측"
const DESC =
  "AI 검색 성과를 GA4 하나로 보면 틀립니다. 색인·노출·인용·유입은 서로 다른 층이고, 앞 단계가 막히면 뒤 단계는 아예 생기지 않습니다. 2026년 8월 20일 저희 사이트를 직접 재보니 같은 사이트맵을 냈는데도 구글 약 76개, 빙 약 32개였습니다. 4단계로 나눠 세는 법과 저희 숫자를 그대로 공개합니다."
const DATE = "2026-08-20"
const URL = "https://wiztheplanning.com/guide/measure-ai-traffic"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "AI 검색 유입 측정", "GEO 성과 측정", "ChatGPT 유입 확인",
    "AI 트래픽 GA4", "색인 확인 방법", "빙 색인", "GEO 측정 지표",
  ],
  alternates: { canonical: "/guide/measure-ai-traffic" },
  openGraph: { images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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
      name: "ChatGPT에서 우리 사이트로 들어온 방문자를 어떻게 확인하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "구글 애널리틱스(GA4)의 보고서 → 획득 → 트래픽 획득에서 측정기준을 '세션 소스/매체'로 바꾸고 chatgpt.com, perplexity.ai, copilot.microsoft.com 같은 값을 찾으면 됩니다. 다만 이건 마지막 4단계입니다. 앞 단계인 색인이 안 돼 있으면 이 숫자는 애초에 0으로 나오고, GA4만 보면 왜 0인지 알 수 없습니다. 색인·노출·인용을 먼저 확인해야 합니다.",
      },
    },
    {
      "@type": "Question",
      name: "site: 검색으로 나오는 색인 개수는 정확한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "정확한 값이 아니라 추정치입니다. 구글도 site: 연산자의 결과 수가 어림수라고 안내합니다. 그래서 site: 검색은 '구글과 빙 중 어느 쪽이 덜 읽고 있는가' 같은 큰 격차를 30초 만에 잡는 용도로만 쓰고, 정확한 숫자가 필요하면 구글 서치콘솔의 페이지 색인 생성 보고서와 빙 웹마스터도구의 Site Explorer를 봐야 합니다.",
      },
    },
    {
      "@type": "Question",
      name: "빙 색인이 왜 중요한가요? 우리는 구글만 신경 쓰면 되지 않나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT의 웹 검색이 마이크로소프트 빙의 검색 인프라를 참고하기 때문입니다. 국내 검색 점유율만 보면 빙은 작지만, ChatGPT 답변에 인용되고 싶다면 빙 색인이 사실상 입장권입니다. 구글에 다 들어가 있어도 빙에 없으면 ChatGPT 답변에서 빠질 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "대행사가 보고하는 AI 노출 성과, 어디를 봐야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네 단계 중 어느 층의 숫자인지 물어보세요. 색인 개수와 노출수는 늘리기 쉽고, 실제 AI 답변 인용과 방문자 유입은 어렵습니다. 앞 단계 숫자만 크게 보고하고 뒤 단계를 빼놓았다면 성과가 부풀려졌을 가능성이 있습니다. 측정 방법과 원본 화면을 함께 요구하는 것이 확실합니다.",
      },
    },
    {
      "@type": "Question",
      name: "AI 답변에 우리 브랜드가 인용됐는지는 자동으로 알 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "현재로서는 완전 자동화가 어렵습니다. AI 답변은 같은 질문에도 매번 달라지고 사용자·지역·시점에 따라 바뀌기 때문입니다. 저희는 고객이 실제로 쓸 법한 질문 목록을 정해두고 같은 조건에서 주기적으로 직접 물어보며 기록하는 방식을 씁니다. 손이 가지만 이 층만은 대체 수단이 마땅치 않습니다.",
      },
    },
  ],
}

const LAYERS = [
  ["1층 · 색인", "AI와 검색엔진이 우리 페이지를 아예 갖고 있는가", "site: 검색 · 서치콘솔 · 빙 웹마스터도구", "여기가 0이면 아래 전부 0"],
  ["2층 · 노출", "검색 결과에 우리 페이지가 뜨는가, 몇 위인가", "서치콘솔 실적 · 빙 웹마스터도구", "순위와 CTR을 분리해서 본다"],
  ["3층 · 인용", "AI 답변 안에 우리 브랜드가 들어가는가", "직접 질문해서 기록 (자동화 어려움)", "GEO의 본 목적"],
  ["4층 · 유입", "그래서 방문자가 실제로 왔는가", "GA4 → 획득 → 트래픽 획득", "여기만 보면 원인을 못 찾는다"],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/measure-ai-traffic"
        kicker="실전 전략 · 자체 실측"
        title={TITLE}
        description={DESC}
        date="2026년 8월 20일"
      >
        {/* 결론 우선 — 상단 150자 이내 */}
        <p>
          <strong>AI 검색 성과는 GA4 하나로 보면 틀립니다.</strong> 색인·노출·인용·유입은 서로 다른
          층이고, <strong>앞 단계가 막히면 뒤 단계는 아예 생기지 않습니다.</strong> 그래서 방문자 수만
          보면 왜 0인지를 영원히 알 수 없습니다.
        </p>

        <h2>측정은 4층으로 나눠야 합니다</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">단계</th>
                <th className="px-4 py-3 font-bold text-gray-900">무엇을 확인하나</th>
                <th className="px-4 py-3 font-bold text-gray-900">어디서 보나</th>
              </tr>
            </thead>
            <tbody>
              {LAYERS.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-bold text-gray-900 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {r[1]}
                    <span className="mt-1 block text-xs text-gray-400">{r[3]}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>순서가 있습니다.</strong> 1층이 비어 있으면 2·3·4층은 볼 것도 없습니다. 그런데 대개는
          4층(방문자 수)부터 보고 &ldquo;효과가 없네&rdquo;라고 결론 냅니다. 원인은 보통 1층에 있습니다.
        </p>

        <h2>1층: 색인부터 30초 만에 확인하는 법</h2>
        <p>
          검색창에 <strong><code>site:내도메인.com</code></strong>을 그대로 칩니다. 구글과 빙에서 각각
          해보고 <strong>두 숫자를 나란히 놓는 게 핵심</strong>입니다. 한쪽만 보면 격차가 안 보입니다.
        </p>

        <h3>저희 사이트를 오늘 직접 재봤습니다</h3>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">측정 항목</th>
                <th className="px-4 py-3 font-bold text-gray-900">구글</th>
                <th className="px-4 py-3 font-bold text-gray-900">빙</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["site: 사이트 전체", "약 76개", "약 32개"],
                ["site: /guide 하위", "약 25개", "약 13개"],
                ["오늘 발행한 새 글", "당일 색인됨", "미색인"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          2026년 8월 20일 측정. 사이트맵에는 48개 URL을 제출한 상태이고, 가이드 글은 24편입니다.
          같은 사이트맵을 같은 IndexNow로 통보했습니다.
        </p>
        <p>
          <strong>구글은 가이드 글을 사실상 전부 갖고 있는데 빙은 절반쯤입니다.</strong> 같은 사이트에
          같은 날 같은 방식으로 알렸는데 이렇게 갈립니다. 저희가 8월 초에{" "}
          <a href="/guide/bing-index-bottleneck">IndexNow로 통보하고 8일간 빙이 읽지 않은 기록</a>을
          남겼는데, 그 격차가 아직 남아 있습니다.
        </p>
        <Callout>
          <strong>이 숫자는 추정치입니다.</strong> 구글도 <code>site:</code> 결과 수가 어림수라고
          안내합니다. 그래서 이 방법은 &ldquo;어느 쪽이 덜 읽고 있는가&rdquo; 같은 큰 격차를 빠르게
          잡는 용도로만 쓰고, <strong>정확한 값은 서치콘솔의 페이지 색인 생성 보고서와 빙
          웹마스터도구 Site Explorer</strong>에서 봐야 합니다. 추정치를 성과 보고서에 그대로 옮기면
          안 됩니다.
        </Callout>

        <h3>빙을 왜 같이 봐야 하나</h3>
        <p>
          <strong>ChatGPT의 웹 검색이 빙의 검색 인프라를 참고하기 때문입니다.</strong> 국내 점유율만
          보면 빙은 작지만, ChatGPT 답변에 인용되고 싶다면 빙 색인이 사실상 입장권입니다. 구글에 다
          들어가 있어도 빙에 없으면 그 답변에서 빠질 수 있습니다.
        </p>

        <h2>2층: 노출과 순위는 분리해서 봅니다</h2>
        <p>
          서치콘솔 실적 화면에서 <strong>노출수·클릭수·CTR·평균 게재순위를 한 화면에 켜는 것</strong>이
          출발점입니다. 여기서 문제는 두 종류로 갈립니다.
        </p>
        <ul>
          <CheckItem>
            <strong>순위는 높은데 CTR이 낮다</strong> → 제목 문제입니다. 검색 결과에서 우리 제목이
            안 눌리는 겁니다
          </CheckItem>
          <CheckItem>
            <strong>노출은 있는데 순위가 10위권 밖이다</strong> → 콘텐츠·링크 문제입니다. 제목을
            고쳐도 안 올라옵니다
          </CheckItem>
        </ul>
        <p>
          같은 &ldquo;클릭이 없다&rdquo;도 원인이 정반대라, 이걸 안 나누면 엉뚱한 데를 고치게 됩니다.
        </p>

        <h2>3층: AI가 실제로 인용했는지는 직접 물어봐야 합니다</h2>
        <p>
          여기가 GEO의 본 목적인데, <strong>자동으로 재는 방법이 마땅치 않습니다.</strong> AI 답변은
          같은 질문에도 매번 달라지고 사용자·지역·시점에 따라 바뀝니다.
        </p>
        <p>저희가 쓰는 방식은 단순합니다.</p>
        <ul>
          <CheckItem>
            <strong>고객이 실제로 쓸 법한 질문을 목록으로 고정합니다</strong>: &ldquo;OO동 OO 잘하는
            곳 추천해줘&rdquo; 같은 실제 말투로
          </CheckItem>
          <CheckItem>
            <strong>엔진별로 따로 묻습니다.</strong> ChatGPT·퍼플렉시티·제미나이·네이버 AI 브리핑이
            서로 다른 곳을 인용합니다(<a href="/guide/ai-engines-cite-differently">엔진별 인용 출처의 차이</a>)
          </CheckItem>
          <CheckItem>
            <strong>답변에 우리가 나왔는지, 출처로 무엇이 달렸는지를 같이 기록합니다.</strong> 우리
            홈페이지가 아니라 제3자 사이트가 출처로 달리는 경우가 많습니다
          </CheckItem>
          <CheckItem>
            <strong>같은 조건에서 주기적으로 반복합니다.</strong> 한 번 나온 걸로 판단하지 않습니다
          </CheckItem>
        </ul>
        <p>
          저희 사이트로 이 실험을 한 기록은{" "}
          <a href="/guide/ranked-but-not-in-chatgpt">네이버 AI 1위·구글 2위인데 ChatGPT엔 안 나옵니다</a>에
          그대로 남겨두었습니다.
        </p>

        <h2>4층: GA4에서 AI 유입 보는 법</h2>
        <p>
          <strong>보고서 → 획득 → 트래픽 획득</strong>으로 들어가서 측정기준을{" "}
          <strong>&lsquo;세션 소스/매체&rsquo;</strong>로 바꿉니다. 그리고 아래 값을 찾습니다.
        </p>
        <ul>
          <CheckItem><code>chatgpt.com</code> / <code>chat.openai.com</code></CheckItem>
          <CheckItem><code>perplexity.ai</code></CheckItem>
          <CheckItem><code>copilot.microsoft.com</code> / <code>bing.com</code></CheckItem>
          <CheckItem><code>gemini.google.com</code></CheckItem>
        </ul>
        <p>
          <strong>여기가 0이어도 당황할 일이 아닙니다.</strong> 1층이 비어 있으면 4층은 반드시 0입니다.
          거꾸로 4층 숫자만 보고 &ldquo;GEO는 효과 없다&rdquo;라고 결론 내는 게 가장 흔한 실수입니다.
        </p>
        <Callout>
          <strong>AI 유입은 구조적으로 과소 집계됩니다.</strong> AI 앱 안에서 답변만 읽고 끝내면
          방문 자체가 안 일어나고, 사용자가 브랜드명을 따로 검색해서 들어오면 그건 AI 유입이 아니라
          검색 유입으로 잡힙니다. <strong>그래서 4층 숫자는 AI 노출의 하한선이지 전부가 아닙니다.</strong>
        </Callout>

        <h2>성과 보고서를 받을 때 물어볼 것</h2>
        <p>
          이 4층 구조를 알면 <strong>부풀린 보고서가 바로 보입니다.</strong> 앞 단계 숫자는 늘리기
          쉽고 뒤 단계는 어렵기 때문입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>&ldquo;이건 몇 층 숫자입니까&rdquo;</strong>: 색인 개수와 노출수만 크게 적혀 있고
            인용·유입이 빠져 있으면 물어봐야 합니다
          </CheckItem>
          <CheckItem>
            <strong>&ldquo;어떻게 쟀습니까&rdquo;</strong>: <code>site:</code> 추정치를 확정 수치처럼
            적었는지 확인합니다
          </CheckItem>
          <CheckItem>
            <strong>&ldquo;원본 화면을 볼 수 있습니까&rdquo;</strong>: 서치콘솔·GA4 화면은 계정만
            열어주면 사장님이 직접 볼 수 있습니다
          </CheckItem>
          <CheckItem>
            <strong>&ldquo;빙은 어떻습니까&rdquo;</strong>: ChatGPT 노출을 약속하면서 빙 색인을 한
            번도 안 봤다면 앞뒤가 안 맞습니다
          </CheckItem>
        </ul>
        <p>
          계약 전에 확인할 항목은{" "}
          <a href="/guide/how-to-choose-geo-agency">GEO 대행사 고르는 법</a>에 따로 정리해 두었습니다.
        </p>

        <h2>정리</h2>
        <p>
          <strong>AI 검색 성과는 하나의 숫자가 아니라 네 개의 층입니다.</strong> 방문자 수부터 보면
          원인을 못 찾습니다. 색인 → 노출 → 인용 → 유입 순서로 내려가면서, 어느 층에서 끊겼는지를
          찾는 게 측정의 전부입니다.
        </p>
        <p>
          당장은 <code>site:내도메인.com</code>을 구글과 빙에서 각각 쳐보는 것부터 하시면 됩니다.
          30초면 되고, 여기서 격차가 크면 그게 지금 가장 큰 문제입니다. 우리 사이트의 구조적 상태는{" "}
          <a href="/site-check">무료 사이트 진단</a>으로 확인하실 수 있고, GEO 전체 그림은{" "}
          <a href="/guide/geo">GEO 총정리</a>에 모아 두었습니다.
        </p>
        <p>
          점유율 조사마다 숫자가 크게 갈리는 이유와, 매장 운영자가 실제로 봐야 할 지표는{" "}
          <a href="/guide/naver-google-share">구글 네이버 검색 점유율: 왜 출처마다 다른가</a>에
          따로 정리했습니다.
        </p>
        <p>
          측정 도구를 고르는 기준과 저희가 직접 만들며 확인한 것은{" "}
          <a href="/guide/geo-measurement-tools">GEO 측정 도구 고르는 법</a>에 따로 정리했습니다.
        </p>
        <p>
          GEO 자체가 생소하시면{" "}
          <a href="/guide/what-is-geo">자영업 사장님을 위한 쉬운 설명</a>에 정리해 두었습니다.
        </p>
      </GuideArticle>
    </>
  )
}
