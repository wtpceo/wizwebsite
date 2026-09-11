import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 → 현재 45자
const TITLE = "AI 크롤러 이름과 역할: 무엇을 열고 무엇을 막아야 하나"
const DESC =
  "우리 사이트에 오는 AI 봇은 하나가 아닙니다. 답변에 우리를 띄우는 검색봇과, 모델 학습에 쓰는 학습봇은 이름이 다르고 따로 설정합니다. OpenAI·퍼플렉시티·구글 공식 문서 기준으로 봇 이름과 역할, 무엇을 열고 무엇을 막을지, 우리 사이트 상태를 확인하는 법을 정리했습니다."
const DATE = "2026-09-11"
const URL = "https://wiztheplanning.com/guide/ai-crawler-names"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "AI 크롤러", "GPTBot 차단", "OAI-SearchBot", "PerplexityBot", "Google-Extended",
    "robots.txt AI", "ChatGPT 검색 노출",
  ],
  alternates: { canonical: "/guide/ai-crawler-names" },
  openGraph: { images: ["/covers/ai-crawler-names.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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

const FAQ = [
  {
    q: "GPTBot을 막으면 ChatGPT에 안 나오나요?",
    a: "아닙니다. 둘은 다른 봇입니다. ChatGPT 검색 답변에 노출되는지는 OAI-SearchBot이 정하고, GPTBot은 모델 학습용입니다. OpenAI 공식 문서도 두 설정이 서로 독립적이며 검색 노출을 원하면 OAI-SearchBot을 허용하라고 안내합니다. 학습에 쓰이는 것이 싫으면 GPTBot만 막고 OAI-SearchBot은 열어 두면 됩니다.",
  },
  {
    q: "Google-Extended를 막으면 구글 검색에서 사라지나요?",
    a: "아닙니다. 구글 공식 문서는 Google-Extended가 제미나이 모델 학습과 답변 근거 제공에 콘텐츠를 쓸지를 관리하는 토큰이며, 구글 검색 노출에는 영향을 주지 않는다고 명시합니다. 별도의 접속 신호 없이 robots.txt 토큰으로만 동작한다는 점도 함께 적혀 있습니다.",
  },
  {
    q: "robots.txt를 고치면 언제 반영되나요?",
    a: "OpenAI와 퍼플렉시티 문서 모두 약 24시간이 걸릴 수 있다고 안내합니다. 고치자마자 결과가 바뀌지 않으니 하루는 기다린 뒤 다시 확인하세요.",
  },
  {
    q: "보안 프로그램이 봇을 막고 있을 수도 있나요?",
    a: "있습니다. robots.txt에는 아무 문제가 없는데 방화벽이나 보안 서비스가 봇 요청을 차단하는 경우가 실제로 있습니다. 저희가 진단한 한 비뇨의학과는 제작사가 기본값으로 둔 보안 설정이 AI 크롤러까지 막고 있어 ChatGPT에 아예 나오지 않았습니다. robots.txt만 보고 안심하면 안 되는 이유입니다.",
  },
  {
    q: "그럼 결론적으로 무엇을 열어야 하나요?",
    a: "답변 노출이 목적이라면 검색용 봇인 OAI-SearchBot과 PerplexityBot은 여는 편이 좋습니다. 학습용인 GPTBot과 Google-Extended는 콘텐츠를 모델 학습에 제공할지에 대한 판단이라 회사 방침에 따라 정하면 되고, 막아도 검색이나 답변 노출에는 영향이 없습니다.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

const BOTS: [string, string, string, string][] = [
  ["OAI-SearchBot", "OpenAI", "검색", "ChatGPT 검색 답변에 사이트를 띄우는 봇. 막으면 답변에 나오지 않습니다"],
  ["GPTBot", "OpenAI", "학습", "모델 학습에 쓸 콘텐츠를 수집합니다. 막아도 검색 노출과는 무관합니다"],
  ["ChatGPT-User", "OpenAI", "사용자 요청", "사용자가 질문한 그 순간 페이지를 방문합니다. 학습에는 쓰지 않습니다"],
  ["PerplexityBot", "퍼플렉시티", "검색", "퍼플렉시티 답변에 사이트를 띄우고 링크합니다. 학습에는 쓰지 않습니다"],
  ["Google-Extended", "구글", "학습·근거", "제미나이 학습과 답변 근거 제공에 쓸지를 관리합니다. 구글 검색과는 무관합니다"],
  ["Googlebot", "구글", "검색", "구글 검색의 기본 크롤러. AI 개요도 이 색인을 씁니다"],
  ["Bingbot", "마이크로소프트", "검색", "빙 색인용. ChatGPT 검색이 빙 색인을 참고하기 때문에 중요합니다"],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/ai-crawler-names"
        kicker="GEO 기초"
        title={TITLE}
        description={DESC}
        date="2026년 9월 11일"
      >
        <p>
          <strong>AI 봇은 하나가 아니고, 답변에 우리를 띄우는 검색봇과 모델 학습에 쓰는 학습봇은 이름이
          다릅니다.</strong> 그래서 &ldquo;AI 차단&rdquo;을 한 번에 켜고 끄는 스위치는 없습니다. 학습에
          쓰이는 것이 싫어서 전부 막았다가 답변 노출까지 같이 잃는 경우가 가장 흔한 사고입니다.
        </p>

        <h2>봇 이름과 역할</h2>
        <p>
          아래는 2026년 9월 11일 기준 각 회사 공식 문서에 적힌 내용을 정리한 것입니다. 이름은 바뀔 수 있으니
          설정 전에 각 문서를 다시 확인하세요.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">봇 이름</th>
                <th className="px-4 py-3 font-bold text-gray-900">운영</th>
                <th className="px-4 py-3 font-bold text-gray-900">용도</th>
                <th className="px-4 py-3 font-bold text-gray-900">설명</th>
              </tr>
            </thead>
            <tbody>
              {BOTS.map((b) => (
                <tr key={b[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-mono text-[13px] font-semibold text-gray-900 whitespace-nowrap">{b[0]}</td>
                  <td className="px-4 py-2.5 whitespace-nowrap text-gray-700">{b[1]}</td>
                  <td className="px-4 py-2.5 whitespace-nowrap font-semibold text-emerald-700">{b[2]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>가장 흔한 오해: &ldquo;GPTBot 막으면 ChatGPT에 안 나온다&rdquo;</h2>
        <p>OpenAI 공식 문서는 두 봇이 서로 독립이라고 명시합니다.</p>
        <blockquote>
          &ldquo;Each setting is independent of the others. For example, a webmaster can allow OAI-SearchBot in
          order to appear in search results while disallowing GPTBot to indicate that crawled content should not
          be used for training OpenAI&rsquo;s generative AI foundation models.&rdquo;
          <br />
          <span className="text-sm text-gray-500">OpenAI, Overview of OpenAI Crawlers</span>
        </blockquote>
        <p>
          같은 문서에 OAI-SearchBot을 막은 사이트는 ChatGPT 검색 답변에 나오지 않는다는 설명도 함께 있습니다.
          즉 <strong>학습은 막고 노출은 살리는 조합이 가능</strong>합니다.
        </p>
        <p>
          구글도 같습니다. Google-Extended 문서에는 이 토큰이 제미나이 학습과 답변 근거 제공에 콘텐츠를 쓸지
          관리하는 용도이며 <strong>구글 검색 노출에는 영향을 주지 않는다</strong>고 적혀 있습니다. 별도의
          접속 신호 없이 robots.txt 토큰으로만 동작한다는 설명도 함께 있습니다.
        </p>

        <h2>목적별로 정하면 이렇게 됩니다</h2>
        <ul>
          <CheckItem>
            <strong>AI 답변에 노출되고 싶다</strong>: OAI-SearchBot, PerplexityBot, Googlebot, Bingbot을 엽니다.
            특히 빙은 ChatGPT 검색이 참고하는 색인이라 빠지면 곤란합니다(
            <a href="/guide/bing-index-bottleneck">빙 색인 병목 실측</a>).
          </CheckItem>
          <CheckItem>
            <strong>학습에 쓰이는 것은 원치 않는다</strong>: GPTBot과 Google-Extended를 막습니다. 답변 노출에는
            영향이 없습니다. 다만 막는다고 이미 학습된 내용이 지워지지는 않습니다.
          </CheckItem>
          <CheckItem>
            <strong>아무것도 모르겠다</strong>: 검색봇을 막지 않는 것부터 확인하세요. 대부분의 사고는 열어야 할
            것을 막아서 생깁니다.
          </CheckItem>
        </ul>

        <Callout>
          <strong>고친 뒤 하루는 기다리세요.</strong> OpenAI와 퍼플렉시티 문서 모두 robots.txt 변경이 반영되기까지
          약 24시간이 걸릴 수 있다고 안내합니다. 바꾸자마자 검색해 보고 &ldquo;효과가 없다&rdquo;고 판단하지
          마세요.
        </Callout>

        <h2>robots.txt만 보고 안심하면 안 됩니다</h2>
        <p>
          파일에는 아무 문제가 없는데 방화벽이나 보안 서비스가 봇 요청 자체를 막는 경우가 실제로 있습니다.
          저희가 진단한 한 비뇨의학과는 홈페이지 제작사가 기본값으로 남겨둔 보안 설정이 AI 크롤러까지 막고
          있어서 ChatGPT에 아예 나오지 않았습니다. 콘텐츠 문제가 아니라 개발 영역의 문제였습니다(
          <a href="/guide/case-urology-clinic">사례 기록</a>).
        </p>
        <p>
          그래서 확인은 두 단계로 합니다. 먼저 robots.txt 내용을 보고, 그다음 실제로 봇 이름으로 요청했을 때
          본문이 돌아오는지 봅니다. 두 번째가 진짜 확인입니다.
        </p>

        <h2>우리 사이트는 지금 어떤 상태인가</h2>
        <p>
          주소만 넣으면 <a href="/site-check">무료 사이트 진단</a>이 AI 크롤러 접근을 포함해 24개 항목을 바로
          점검합니다. 가입이나 결제는 없습니다. 국내 주요 플랫폼들이 어떤 봇을 열고 막는지는{" "}
          <a href="/guide/platform-ai-crawler-status">플랫폼 15곳 robots.txt 전수 실측</a>에 정리해 두었고,
          네이버가 외부 AI를 막는 것이 왜 홈페이지를 필수로 만드는지는{" "}
          <a href="/guide/naver-blocks-ai-crawlers">네이버 차단 실측</a>에 있습니다.
        </p>
        <p>
          크롤러를 열었다면 다음 순서는 읽을 내용을 정리하는 일입니다. AI가 답에 쓸 사실을 한곳에 모으는{" "}
          <a href="/guide/what-is-llms-txt">llms.txt</a>가 그 역할을 합니다.
        </p>

        <h2>자주 묻는 질문</h2>
        <div className="mt-6 space-y-4">
          {FAQ.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 md:p-6">
              <p className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
                <span className="shrink-0 text-[#00b57f]">Q{i + 1}.</span>
                <span>{f.q}</span>
              </p>
              <p className="mt-3 text-base leading-[1.85] text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </GuideArticle>
    </>
  )
}
