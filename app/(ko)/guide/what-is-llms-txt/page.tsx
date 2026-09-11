import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 → 현재 47자
const TITLE = "llms.txt란? AI에게 사이트를 안내하는 파일과 실제 인용 기록"
const DESC =
  "llms.txt는 검색엔진이 공식 지원을 발표한 표준이 아니라 2024년에 나온 제안입니다. 넣는다고 순위가 오르지도 않습니다. 그런데 저희가 만든 치과 홈페이지에서는 ChatGPT 답변에 나온 문장이 이 파일의 한 줄과 정확히 일치했습니다. 무엇인지, 무엇이 아닌지, 어떻게 써야 하는지 정리했습니다."
const DATE = "2026-09-11"
const URL = "https://wiztheplanning.com/guide/what-is-llms-txt"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "llms.txt", "llms.txt 란", "llms.txt 작성법", "AI 안내 파일",
    "llms-full.txt", "robots.txt 차이", "AI 검색 최적화",
  ],
  alternates: { canonical: "/guide/what-is-llms-txt" },
  openGraph: { images: ["/covers/what-is-llms-txt.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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
    q: "llms.txt는 공식 표준인가요?",
    a: "아닙니다. 2024년 9월 3일 제러미 하워드가 제안한 문서이고, 2026년 8월 10일에 v2로 갱신됐습니다. 구글이나 OpenAI가 '이 파일을 읽어 순위에 반영한다'고 공식 발표한 적은 없습니다. robots.txt처럼 검색엔진이 규격을 지키기로 약속한 파일과는 성격이 다릅니다.",
  },
  {
    q: "llms.txt를 넣으면 검색 순위가 오르나요?",
    a: "오르지 않습니다. 순위는 본문과 링크, 기술 상태로 결정됩니다. llms.txt는 순위를 올리는 파일이 아니라, AI가 답을 만들 때 필요한 사실을 한곳에 모아 두는 파일입니다. 본문이 부실한데 이 파일만 잘 써도 소용이 없습니다.",
  },
  {
    q: "robots.txt와 무엇이 다른가요?",
    a: "robots.txt는 '들어와도 되는가'를 정하는 접근 제어 파일이고, llms.txt는 '들어왔다면 이걸 보라'고 알려주는 안내 파일입니다. 둘은 대체 관계가 아니라 순서 관계입니다. robots.txt에서 AI 크롤러를 막아 두면 llms.txt를 아무리 잘 써도 읽히지 않습니다.",
  },
  {
    q: "무엇을 적어야 하나요?",
    a: "페이지 목차가 아니라 팩트시트로 씁니다. 상호, 대표자 자격, 전화, 주소, 좌표, 사업자등록번호, 요일별 영업시간과 휴무일, 취급 분야, 공식 채널처럼 답변에 그대로 쓰일 수 있는 사실을 담습니다. 링크 목록만 나열하면 AI가 답할 재료가 없어 페이지를 일일이 열어야 합니다.",
  },
  {
    q: "llms-full.txt는 또 뭔가요?",
    a: "짧은 llms.txt에 다 넣기 어려운 긴 내용을 담는 별도 파일입니다. 시술이나 서비스의 정의, 자주 묻는 질문 전문처럼 분량이 큰 것을 여기에 둡니다. OpenAI와 Anthropic, 퍼플렉시티도 자사 개발자 문서에 같은 방식으로 두 파일을 함께 두고 있습니다.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/what-is-llms-txt"
        kicker="GEO 기초"
        title={TITLE}
        description={DESC}
        date="2026년 9월 11일"
      >
        <p>
          <strong>llms.txt는 사이트 루트에 두는 마크다운 파일로, AI에게 우리 사이트의 핵심 사실을 한곳에
          모아 알려주는 안내문입니다.</strong> 다만 검색엔진이 공식 지원을 발표한 표준은 아니고, 넣는다고
          순위가 오르지도 않습니다. 그런데 저희가 만든 치과 홈페이지에서는 ChatGPT 답변에 나온 문장이 이
          파일의 한 줄과 정확히 일치했습니다.
        </p>

        <h2>무엇인가: 표준이 아니라 제안입니다</h2>
        <p>
          제러미 하워드가 2024년 9월 3일 제안했고, 2026년 8월 10일에 v2로 갱신됐습니다. 제안 문서는 스스로를
          이렇게 소개합니다.
        </p>
        <blockquote>
          &ldquo;A proposal to standardise on using an /llms.txt file to provide information to help agents use
          a website.&rdquo;
          <br />
          <span className="text-sm text-gray-500">llmstxt.org, v2 (2026년 8월 10일 갱신)</span>
        </blockquote>
        <p>
          제안 문서가 밝히는 이유는 단순합니다. 웹페이지는 사람을 위해 만들어져서 내비게이션과 광고, 자바스크립트
          안에 정보가 묻혀 있고, 이것을 깨끗한 텍스트로 되돌리는 일은 어렵고 부정확하다는 것입니다. 그래서 답에
          필요한 내용만 한 파일에 모아 두자는 제안입니다.
        </p>

        <h2>지금 어디까지 왔나</h2>
        <p>v2 문서가 2년간의 변화를 이렇게 정리합니다.</p>
        <blockquote>
          &ldquo;thousands of sites publish an llms.txt file, documentation platforms generate one
          automatically, and Chrome&rsquo;s Lighthouse audits sites for one as part of its agentic browsing
          checks. The AI labs themselves publish llms.txt files for their own developer docs.&rdquo;
        </blockquote>
        <p>
          저희도 2026년 9월 11일에 직접 확인했습니다. OpenAI 개발자 문서 페이지 상단에는 전체 문서 목록을
          llms.txt에서 보라는 안내가 있고, 퍼플렉시티 문서에는 &ldquo;Fetch the complete documentation index
          at: https://docs.perplexity.ai/llms.txt&rdquo;라는 문장이 먼저 나옵니다. Anthropic 문서도 llms.txt와
          llms-full.txt를 함께 둡니다. <strong>AI를 만드는 회사들이 자기 문서에 이 파일을 두고 있다</strong>는
          것이 지금 상황입니다.
        </p>

        <h2>무엇이 아닌가: 오해 세 가지</h2>
        <ul>
          <CheckItem>
            <strong>순위를 올리는 파일이 아닙니다.</strong> 검색 순위는 본문과 링크, 기술 상태로 정해집니다.
            이 파일을 넣었다고 검색결과가 올라가지 않습니다.
          </CheckItem>
          <CheckItem>
            <strong>robots.txt의 대체품이 아닙니다.</strong> robots.txt는 &ldquo;들어와도 되는가&rdquo;를 정하고,
            llms.txt는 &ldquo;들어왔다면 이걸 보라&rdquo;고 알려줍니다. 순서가 있습니다. 크롤러를 막아 둔 상태라면
            이 파일을 아무리 잘 써도 읽히지 않습니다. 어떤 봇을 열어야 하는지는{" "}
            <a href="/guide/ai-crawler-names">AI 크롤러 이름과 역할</a>에 정리했습니다.
          </CheckItem>
          <CheckItem>
            <strong>반드시 읽힌다는 보장이 없습니다.</strong> 어느 AI 회사도 &ldquo;llms.txt를 읽어 답변에
            반영한다&rdquo;고 공식 발표한 적이 없습니다. 이 글도 보장이 아니라 저희가 관찰한 기록을 전할
            뿐입니다.
          </CheckItem>
        </ul>

        <h2>그런데 저희 실측에서는 인용됐습니다</h2>
        <p>
          2026년 7월부터 9월까지 한 치과 홈페이지를 만들면서 이 파일을 함께 설계했습니다. 처음에는 페이지
          목차 형태였고, 그때는 ChatGPT 답변에 병원이 나오지 않았습니다. 링크 목록을 걷어내고 사실을 채운
          팩트시트로 바꾼 뒤 답변에 등장하기 시작했습니다. 그리고 답변에 이런 문장이 나왔습니다.
        </p>
        <blockquote>&ldquo;목요일 오후 8시까지 야간진료&rdquo;</blockquote>
        <p>이 문장은 홈페이지 본문이 아니라 llms.txt에 적어 둔 한 줄과 정확히 일치했습니다.</p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100">{`- 목요일: 10:00 ~ 20:00 (야간진료)`}</pre>
        <p>
          한 건의 관찰이라 법칙이라고 말하지는 않겠습니다. 다만 AI가 어디를 읽고 답했는지 역추적이 가능했다는
          점은 분명합니다. 전체 과정은{" "}
          <a href="/guide/case-dental-llms-factsheet">치과 홈페이지 GEO 51일 기록</a>에 적었습니다.
        </p>

        <h2>어떻게 쓰나: 목차가 아니라 팩트시트로</h2>
        <p>
          가장 흔한 실수는 사이트맵처럼 링크만 나열하는 것입니다. 그러면 AI는 답할 재료가 없어서 페이지를
          일일이 열어야 합니다. 답에 바로 쓰일 사실을 파일 안에 넣으세요.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">넣을 것</th>
                <th className="px-4 py-3 font-bold text-gray-900">왜</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["상호(등록 명칭 그대로)와 한 줄 소개", "여러 채널의 표기가 다르면 AI가 같은 업체로 묶지 못합니다"],
                ["대표자 자격·경력(근거 있는 것만)", "신뢰 신호가 됩니다. 없는 자격은 쓰지 않습니다"],
                ["전화·주소·좌표·사업자등록번호", "잘못된 안내를 막는 가장 확실한 수단입니다"],
                ["요일별 영업시간·점심시간·휴무일", "저희 사례에서 실제로 인용된 항목입니다. 한 줄에 하나씩 적습니다"],
                ["취급 분야와 각 상세 페이지 주소", "AI가 더 깊이 볼 곳을 알려줍니다"],
                ["공식 채널 목록", "가짜 계정과 구분됩니다"],
                ["긴 내용은 llms-full.txt로 분리", "시술·서비스 정의와 FAQ 전문처럼 분량이 큰 것을 따로 둡니다"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout>
          <strong>반드시 지킬 것.</strong> 이 파일의 내용은 홈페이지 본문과 한 글자도 어긋나면 안 됩니다.
          영업시간을 바꿨는데 이 파일만 옛날 그대로면, AI는 틀린 정보를 자신 있게 안내합니다. 사실을 모아
          두는 파일이라 틀리면 더 위험합니다. 저희 사이트의 llms.txt도 같은 원칙으로 씁니다.
        </Callout>

        <h2>정리</h2>
        <ul>
          <CheckItem>표준이 아니라 제안입니다. 효과를 보장하는 장치로 팔면 안 됩니다.</CheckItem>
          <CheckItem>순위와는 무관합니다. 본문이 먼저입니다.</CheckItem>
          <CheckItem>크롤러 접근이 열려 있어야 의미가 생깁니다. robots.txt가 먼저입니다.</CheckItem>
          <CheckItem>목차로 쓰면 효과가 없고, 팩트시트로 쓰면 답변 문장이 됩니다(저희 실측 기준).</CheckItem>
          <CheckItem>본문과 불일치하면 오히려 해롭습니다.</CheckItem>
        </ul>
        <p>
          우리 사이트에 이 파일이 있는지, AI 크롤러가 막혀 있지는 않은지는{" "}
          <a href="/site-check">무료 사이트 진단</a>에서 주소만 넣으면 바로 확인하실 수 있습니다. GEO 전체
          그림은 <a href="/guide/geo">GEO란? 총정리</a>에 모아 두었습니다.
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
