import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 → 현재 44자
const TITLE = "AI가 인용하는 문장은 따로 있습니다: 실제로 인용된 문장 분석"
const DESC =
  "AI 답변에 우리 이름이 나오게 하려면 어떤 문장을 써야 할까요. 저희가 실제로 인용된 문장 세 개를 열어보니 공통점이 분명했습니다. 슬로건은 한 번도 인용되지 않았고, 검증 가능한 사실을 담은 짧은 문장만 그대로 발췌됐습니다. 무엇을 바꿔야 하는지 예시로 정리했습니다."
const DATE = "2026-09-11"
const URL = "https://wiztheplanning.com/guide/what-ai-quotes"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "AI 인용", "AI 답변 노출", "GEO 콘텐츠 작성법", "AI가 인용하는 글",
    "생성형 AI 최적화", "AI 검색 콘텐츠",
  ],
  alternates: { canonical: "/guide/what-ai-quotes" },
  openGraph: { images: ["/covers/what-ai-quotes.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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
    q: "왜 우리 회사 소개 문구는 인용되지 않나요?",
    a: "소개 문구는 대개 누구에게나 해당되는 말이기 때문입니다. '최고의 서비스', '고객 만족을 최우선으로' 같은 문장은 검증할 수 없고 어느 업체든 쓸 수 있어서 답변의 근거가 되지 못합니다. 저희가 실제로 인용된 문장은 모두 확인 가능한 사실이었습니다. 요일별 영업시간, 보고 주기, 측정 방식 같은 것입니다.",
  },
  {
    q: "글을 길게 쓰면 인용될 확률이 올라가나요?",
    a: "올라가지 않습니다. 저희가 만든 한 치과 홈페이지는 167쪽에 블로그 51건, FAQ 22문항을 갖추고도 인용되지 않았고, 같은 지역의 3쪽짜리 사이트가 먼저 인용되고 있었습니다. 분량이 아니라 답에 쓸 사실이 꺼내기 쉬운 형태로 있는지가 갈랐습니다.",
  },
  {
    q: "키워드를 많이 넣으면 도움이 되나요?",
    a: "도움이 되지 않습니다. 생성형 엔진 최적화를 다룬 KDD 2024 논문의 실험에서 키워드 반복은 오히려 노출을 떨어뜨렸습니다. 같은 연구에서 통계와 인용을 본문에 넣는 방식은 노출을 최대 40%까지 올렸습니다. 반복이 아니라 근거가 효과를 냅니다.",
  },
  {
    q: "숫자가 없는 업종은 어떻게 하나요?",
    a: "숫자만 사실인 것은 아닙니다. 요일별 운영시간, 주차 가능 여부, 예약 방법, 소요 시간, 자격이나 경력 표기처럼 확인 가능한 정보면 됩니다. 저희 사례에서 인용된 문장도 대단한 수치가 아니라 '목요일 오후 8시까지'라는 운영 정보였습니다.",
  },
  {
    q: "어디에 써야 인용되나요?",
    a: "AI가 읽을 수 있는 곳이어야 합니다. 네이버 블로그는 외부 AI 크롤러가 막혀 있어 ChatGPT 같은 도구가 읽지 못합니다. 글로벌 AI를 노린다면 본문이 자사 홈페이지에 있어야 하고, 네이버 AI 브리핑을 노린다면 네이버 색인 안에 있어야 합니다. 두 경로는 따로 움직입니다.",
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
        href="/guide/what-ai-quotes"
        kicker="GEO 기초"
        title={TITLE}
        description={DESC}
        date="2026년 9월 11일"
      >
        <p>
          <strong>AI는 페이지를 통째로 보여주지 않고 문장 단위로 발췌합니다. 그래서 어떤 문장을 써 두었는지가
          인용 여부를 가릅니다.</strong> 저희가 실제로 인용된 문장 세 개를 열어보니 공통점이 분명했습니다.
          슬로건은 한 번도 인용되지 않았고, 검증 가능한 사실을 담은 짧은 문장만 그대로 발췌됐습니다.
        </p>

        <h2>실제로 인용된 문장 세 개</h2>

        <h3>1. &ldquo;목요일 오후 8시까지 야간진료&rdquo;</h3>
        <p>
          저희가 만든 한 치과 홈페이지가 ChatGPT 답변에 등장했을 때 함께 나온 문장입니다. 이 문장은 홈페이지
          본문이 아니라 AI 안내 파일에 적어 둔 한 줄과 정확히 일치했습니다.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100">{`- 목요일: 10:00 ~ 20:00 (야간진료)`}</pre>
        <p>
          화려한 표현이 아닙니다. 환자가 &ldquo;야간진료 되는 곳&rdquo;을 물었을 때 답이 되는 사실이었을
          뿐입니다. 전체 과정은{" "}
          <a href="/guide/case-dental-llms-factsheet">치과 홈페이지 GEO 51일 기록</a>에 있습니다.
        </p>

        <h3>2. &ldquo;매주 같은 기준의 측정 수치로 변화를 보고&rdquo;</h3>
        <p>
          2026년 9월 10일, 네이버 AI가 &lsquo;병원 GEO 대행사 추천&rsquo; 질문에 답하면서 저희 사이트를 출처로
          달고 인용한 문장입니다. 원문은 저희 대행 페이지에 있던 이 대목입니다.
        </p>
        <blockquote>
          &ldquo;보장은 누구도 할 수 없기에, 우리는 보장 대신 매주 같은 기준의 측정 수치로 보고합니다.&rdquo;
        </blockquote>
        <p>
          같은 페이지에는 &ldquo;AI가 추천하는 브랜드를 만듭니다&rdquo; 같은 문장도 있었지만 인용되지
          않았습니다. <strong>인용된 것은 우리가 무엇을 어떤 주기로 하는지 적은 문장</strong>이었습니다. 두
          화면의 결과가 어떻게 갈렸는지는{" "}
          <a href="/guide/naver-ai-briefing-vs-web-tab">웹문서 탭과 AI 브리핑이 갈리는 이유</a>에 적었습니다.
        </p>

        <h3>3. 경험이 드러난 블로그 문장</h3>
        <p>
          6년째 운영 중인 한 매장의 블로그는 글 구조를 바꾼 뒤 지역 키워드 1위에 올랐고 네이버 AI 브리핑에도
          인용되기 시작했습니다. 바꾼 것은 키워드 반복을 걷어내고 실제 경험을 문장으로 적은 것이었습니다.
          네이버 검색 공식 블로그가 2026년 5월 26일 발행한 가이드도 첫 번째 조건으로{" "}
          <strong>직접 경험</strong>을 들고 있습니다. 과정은{" "}
          <a href="/guide/naver-ai-briefing">네이버 AI 브리핑 인용 기록</a>에 있습니다.
        </p>

        <h2>공통점: 검증 가능한 사실, 짧은 문장, 질문에 바로 답</h2>
        <ul>
          <CheckItem>
            <strong>검증 가능한 사실입니다.</strong> 운영시간, 보고 주기, 측정 방식. 셋 다 누군가 확인할 수
            있는 정보입니다. &ldquo;최고&rdquo;나 &ldquo;믿을 수 있는&rdquo; 같은 말은 확인할 수 없어서 근거가
            되지 못합니다.
          </CheckItem>
          <CheckItem>
            <strong>한 문장에 한 가지만 담겼습니다.</strong> 셋 다 그대로 잘라 써도 뜻이 통합니다. 여러 정보를
            한 문장에 욱여넣으면 AI가 잘라 쓸 수 없습니다.
          </CheckItem>
          <CheckItem>
            <strong>질문에 바로 답합니다.</strong> &ldquo;야간진료 되나요&rdquo;, &ldquo;보고는 얼마나 자주
            받나요&rdquo;라는 질문의 답이 문장 자체입니다. 배경 설명이 앞에 붙어 있지 않습니다.
          </CheckItem>
        </ul>
        <p>
          연구 결과와도 방향이 같습니다. 생성형 엔진 최적화를 다룬{" "}
          <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">
            KDD 2024 논문
          </a>
          은 통계와 인용을 본문에 넣는 방식이 답변 노출을 <strong>최대 40%까지</strong> 올렸다고 보고합니다.
          같은 실험에서 키워드를 반복해 넣는 방식은 오히려 노출을 떨어뜨렸습니다.
        </p>

        <h2>바꿔 쓰는 법</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">인용되지 않는 문장</th>
                <th className="px-4 py-3 font-bold text-gray-900">인용되는 문장</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["고객 만족을 최우선으로 생각합니다", "예약 없이 오셔도 평균 대기 10분 안에 안내합니다"],
                ["최신 장비를 갖추고 있습니다", "2025년 도입한 디지털 구강스캐너로 본을 뜹니다"],
                ["언제나 편하게 방문하세요", "목요일은 오후 8시까지, 일요일은 휴무입니다"],
                ["합리적인 가격으로 모십니다", "기본 관리 6만원부터, 가격표는 홈페이지에 공개합니다"],
                ["교통이 편리한 위치입니다", "2호선 OO역 3번 출구에서 도보 4분, 건물 주차 2시간 무료입니다"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 text-gray-500 line-through">{r[0]}</td>
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          오른쪽 문장들의 공통점은 <strong>손님이 실제로 궁금해하는 것에 숫자나 조건으로 답한다</strong>는
          점입니다. 지어내면 안 됩니다. 확인되지 않은 숫자를 쓰면 AI가 그 틀린 정보를 자신 있게 퍼뜨립니다.
        </p>

        <Callout>
          <strong>쓰기 전에 물어볼 것 하나.</strong> 내가 쓴 이 문장을 경쟁 업체 이름으로 바꿔도 그대로
          말이 되나요? 된다면 그 문장은 인용되지 않습니다. 우리만 쓸 수 있는 문장이어야 우리를 가리키는
          근거가 됩니다.
        </Callout>

        <h2>어디에 써야 하나</h2>
        <p>
          문장을 잘 써도 AI가 읽을 수 없는 곳에 있으면 소용이 없습니다. 네이버 블로그는 외부 AI 크롤러를
          막고 있어 ChatGPT 같은 도구가 읽지 못합니다(
          <a href="/guide/naver-blocks-ai-crawlers">실측</a>). 글로벌 AI를 노린다면 본문이 자사 홈페이지에
          있어야 하고, 네이버 AI 브리핑을 노린다면 네이버 색인 안에 있어야 합니다. 그리고 우리 사이트에 어떤
          봇이 들어올 수 있는지는 <a href="/guide/ai-crawler-names">AI 크롤러 이름과 역할</a>에서,
          답에 쓸 사실을 한곳에 모으는 방법은 <a href="/guide/what-is-llms-txt">llms.txt</a>에서 확인하세요.
        </p>
        <p>
          우리 홈페이지가 지금 읽히는 상태인지는 <a href="/site-check">무료 사이트 진단</a>으로 주소만 넣으면
          바로 확인하실 수 있습니다.
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
