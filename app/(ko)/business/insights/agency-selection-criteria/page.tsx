import type { Metadata } from "next"
import BizArticle, { CheckItem, Callout } from "@/components/business/BizArticle"

// 주 키워드: 광고대행사 선정 기준
// 연관 검색어(2026-09-30 자동완성·2026-09-19 1페이지 조사): 광고대행사 선정 공고 / 광고대행사 계약서 /
//   광고대행사 계약해지 / 마케팅 대행사 비교 / 대행사 평가표
// 1페이지: 네이버는 파워링크가 붙는 구매 의도 검색어, 구글은 크몽과 소형 대행사 글. 평가표를 제시한 글이 없다.
const TITLE = "광고대행사 선정 기준 6가지와 평가표: 계약서에서 확인할 것까지"
const DESC =
  "제안서를 나란히 놓고 점수를 매길 축은 여섯 개면 충분합니다. 배점을 공개해야 제안의 초점이 맞고, 레퍼런스는 숫자를 다시 잴 수 있는지로 확인합니다. 광고대행사 계약서에서 확인할 여섯 가지와 해지할 때 챙길 것까지 제안을 받는 쪽에서 정리했습니다."
const DATE = "2026-09-30"
const URL = "https://wiztheplanning.com/business/insights/agency-selection-criteria"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | 위즈더플래닝` },
  description: DESC,
  keywords: [
    "광고대행사 선정 기준", "대행사 평가표", "마케팅 대행사 비교", "광고대행사 계약서",
    "광고대행사 계약해지", "광고대행사 선정 공고", "대행사 선정",
  ],
  alternates: { canonical: "/business/insights/agency-selection-criteria" },
  openGraph: { images: ["/covers/business-agency-selection.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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
    q: "광고대행사 선정 기준은 무엇으로 잡나요?",
    a: "과제 이해도, 실행 계획의 구체성, 측정과 보고, 투입 인력, 유사 경험, 비용 구조 여섯 축이면 대부분의 마케팅 대행 과제를 덮습니다. 회사 규모나 수상 이력은 실행 품질과 직접 이어지지 않아 배점을 낮게 두시는 편이 낫습니다. 배점표는 제안 요청 때 함께 공개하는 것을 권합니다.",
  },
  {
    q: "배점을 공개하면 대행사가 거기에만 맞춰 쓰지 않나요?",
    a: "맞춰 쓰는 것이 목적입니다. 배점을 감추면 제안서는 회사 소개와 수상 이력으로 채워지고, 정작 비교해야 할 항목이 빠집니다. 배점이 공개되면 모든 제안서가 같은 항목을 다루게 되어 나란히 놓고 볼 수 있습니다.",
  },
  {
    q: "레퍼런스는 어떻게 확인하나요?",
    a: "사례의 화려함보다 재현 가능성을 봅니다. 그 숫자를 언제 어떤 방법으로 쟀는지, 시작 시점 수치가 있는지, 같은 방법으로 다시 재면 나오는지를 물어보세요. 시작 기록 없이 개선 폭만 적힌 사례는 검증할 방법이 없습니다. 업종이 같은 것보다 문제의 구조가 같은 사례가 더 유용합니다.",
  },
  {
    q: "광고대행사 계약서에서 무엇을 확인해야 하나요?",
    a: "여섯 가지입니다. 광고 계정과 도메인, 분석 계정의 명의, 산출물의 권리와 계약 종료 후 사용 범위, 보고 주기와 원자료 제공 여부, 최소 계약 기간과 중도 해지 조건, 범위를 넘는 업무의 처리 방식, 그리고 '보장'이라는 단어가 쓰였다면 미달 시 정산 방법입니다.",
  },
  {
    q: "대행사를 바꿀 때 무엇을 챙겨야 하나요?",
    a: "계정 권한과 데이터부터 확보하고 통보하는 순서가 안전합니다. 광고 계정 소유권, 분석 도구 접근 권한, 도메인과 호스팅 관리 권한, 제작물 원본 파일, 지난 보고서와 원자료를 목록으로 정리해 인수인계 항목에 넣으세요. 위약금과 잔여 대금은 계약서 조항에 따르므로 해지 통보 전에 조항을 먼저 확인하시는 편이 낫습니다. 이 글은 법률 자문이 아닙니다.",
  },
  {
    q: "제안사는 몇 곳까지 받는 게 좋나요?",
    a: "3곳 내외를 권합니다. 두 곳이면 비교 기준이 서지 않고, 다섯 곳을 넘어가면 평가에 드는 시간이 과제 규모보다 커집니다. 후보를 늘리기 전에 요청서를 먼저 정리하는 편이 결과가 좋습니다.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const SCORE: [string, string, string][] = [
  ["과제 이해도", "25점", "우리 문제를 자기 말로 다시 설명하는가. 업종 일반론이 아니라 우리 상황을 짚는가."],
  ["실행 계획의 구체성", "25점", "무엇을 몇 건, 언제까지 하는지 수량과 일정이 적혀 있는가."],
  ["측정과 보고", "20점", "어떤 숫자를 어떤 주기로 보여주는가. 원자료를 주는가. 시작 시점을 재는가."],
  ["투입 인력", "15점", "실제 담당자의 이름과 역할, 월 투입 시간. 제안 발표자와 같은 사람인가."],
  ["유사 경험", "10점", "같은 업종보다 같은 구조의 문제를 풀어 본 적이 있는가."],
  ["비용 구조", "5점", "매체비·대행료·제작비가 나뉘어 있는가. 범위를 넘는 업무의 처리 방식이 적혀 있는가."],
]

const CONTRACT: [string, string][] = [
  ["계정 명의", "광고 계정, 도메인, 분석 계정은 광고주 명의가 원칙입니다. 대행사 명의면 바꿀 때 데이터가 함께 사라집니다."],
  ["산출물 권리", "홈페이지, 콘텐츠, 촬영 원본을 계약 종료 후에도 쓸 수 있는지. 대금 완납 조건도 함께 확인합니다."],
  ["보고 체계", "주기와 형식, 원자료 제공 여부. 적지 않으면 월 1회 요약으로 끝납니다."],
  ["최소 기간과 해지", "최소 계약 기간, 중도 해지 통보 기간, 위약금 산정 방식."],
  ["범위 초과 업무", "범위를 넘는 요청이 생겼을 때 시간당인지 건당인지, 사전 합의 절차가 있는지."],
  ["보장 문구", "순위나 노출을 보장한다고 적혀 있다면 미달 시 정산 방법까지 있어야 문장이 효력을 가집니다."],
]

const MISTAKES: string[] = [
  "가격순으로 줄 세우기. 범위가 다른 견적은 금액만 비교하면 항상 싼 쪽이 이깁니다.",
  "발표를 잘하는 곳을 고르기. 발표자와 실제 담당자가 다른 경우가 많습니다.",
  "레퍼런스 로고 수로 판단하기. 로고는 계약 사실일 뿐 성과가 아닙니다.",
  "배점을 비공개로 두기. 제안서가 회사 소개로 채워집니다.",
  "계약 후에 보고 주기를 정하기. 시작하면 협상력이 떨어집니다.",
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BizArticle
        href="/business/insights/agency-selection-criteria"
        kicker="대행사 선정"
        title={TITLE}
        description={DESC}
        date="2026년 9월 30일"
      >
        <p>
          <strong>광고대행사 선정 기준은 여섯 축이면 충분합니다.</strong> 과제 이해도, 실행 계획의
          구체성, 측정과 보고, 투입 인력, 유사 경험, 비용 구조입니다. 중요한 것은 축의 개수가 아니라{" "}
          <strong>배점을 제안 요청 때 함께 공개하는 것</strong>입니다. 그래야 모든 제안서가 같은 항목을
          다루고, 나란히 놓고 볼 수 있습니다.
        </p>

        <h2>선정 기준을 먼저 만들면 제안서가 달라집니다</h2>
        <p>
          저희는 제안을 보내는 쪽입니다. 같은 과제라도 요청서에 평가 기준이 있으면 제안서의 내용이
          바뀝니다. 기준이 없으면 대행사는 안전하게 회사 소개와 수상 이력을 늘립니다. 그러면 광고주는
          비교할 것이 없어 결국 금액으로만 고르게 됩니다. 마케팅 대행사 비교는 같은 요청서를 주고
          같은 표로 점수를 매길 때만 성립합니다.
        </p>
        <p>
          요청서에 무엇을 적어야 하는지는{" "}
          <a href="/business/insights/marketing-agency-rfp">마케팅 대행사 RFP에 넣어야 할 12가지</a>에
          정리했습니다. 이 글은 그다음 단계, 받은 제안서를 어떻게 점수로 바꾸는지입니다.
        </p>

        <h2>대행사 평가표: 여섯 축과 배점 예시</h2>
        <p>
          아래 배점은 출발점입니다. 과제 성격에 따라 조정하시면 됩니다. 브랜드 캠페인이면 과제 이해도
          비중을 올리고, 성과형 운영이면 측정과 보고 비중을 올립니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[620px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">평가 축</th>
                <th className="px-4 py-3 font-bold text-gray-900">배점</th>
                <th className="px-4 py-3 font-bold text-gray-900">무엇을 보는가</th>
              </tr>
            </thead>
            <tbody>
              {SCORE.map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 font-bold text-gray-900">{b}</td>
                  <td className="px-4 py-2.5 text-gray-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          회사 규모, 업력, 수상 이력을 넣고 싶다면 별도 축으로 두되 배점을 낮게 두시길 권합니다. 실행
          품질과 직접 이어지지 않는데 점수가 크면, 큰 회사가 자동으로 이기는 표가 됩니다.
        </p>

        <h2>제안서에서 실제로 갈리는 지점</h2>
        <ul>
          <CheckItem>
            <strong>우리 문제를 다시 설명하는가.</strong> 업종 일반론으로 시작하는 제안서와, 우리가 준
            자료에서 찾은 문제를 짚는 제안서는 첫 장에서 갈립니다.
          </CheckItem>
          <CheckItem>
            <strong>수량이 적혀 있는가.</strong> &lsquo;콘텐츠 제작&rsquo;과 &lsquo;월 4건, 편당 1,500자
            이상&rsquo;은 다른 약속입니다.
          </CheckItem>
          <CheckItem>
            <strong>시작 시점을 재겠다고 하는가.</strong> 기준선 없이 개선 폭을 약속하는 제안은 나중에
            검증할 방법이 없습니다.
          </CheckItem>
          <CheckItem>
            <strong>못 하는 것을 말하는가.</strong> 전부 가능하다고 적힌 제안서는 범위가 없는
            제안서입니다.
          </CheckItem>
        </ul>

        <h2>레퍼런스는 재현 가능성으로 확인합니다</h2>
        <p>
          사례가 화려한지보다 <strong>그 숫자를 다시 잴 수 있는지</strong>가 중요합니다. 물어볼 것은
          셋입니다. 언제 어떤 방법으로 쟀는지, 시작 시점 수치가 있는지, 같은 방법으로 지금 다시 재면
          나오는지.
        </p>
        <Callout>
          저희 사례로 예를 들면 이렇습니다. 한 정형외과의 ChatGPT 언급률은 계약 전 17%(30회 중 5회),
          39일 뒤 같은 모델·같은 질문으로 다시 재서 93%였습니다. 2주 뒤 한 번 더 쟀을 때는{" "}
          <strong>83%</strong>였습니다. 숫자가 내려간 회차도 그대로 공개하는 이유는, 같은 방법으로 반복해
          재지 않으면 처음 숫자도 믿을 수 없기 때문입니다. 측정 방법은{" "}
          <a href="/how-we-measure">측정 방식</a> 페이지에 관제 화면으로 공개해 두었습니다.
        </Callout>

        <h2>광고대행사 계약서에서 확인할 여섯 가지</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">항목</th>
                <th className="px-4 py-3 font-bold text-gray-900">확인할 내용</th>
              </tr>
            </thead>
            <tbody>
              {CONTRACT.map(([a, b]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>광고대행사 계약 해지와 교체: 순서가 있습니다</h3>
        <p>
          해지를 먼저 통보하고 인수인계를 요청하면 협상력이 사라집니다. 계정 권한과 데이터를 먼저
          확보하고, 받을 목록을 문서로 만든 뒤에 통보하는 편이 안전합니다. 챙길 것은 광고 계정
          소유권, 분석 도구 접근 권한, 도메인과 호스팅 관리 권한, 제작물 원본 파일, 지난 보고서와
          원자료입니다. 위약금과 잔여 대금은 계약서 조항을 따릅니다. 이 글은 법률 자문이 아닙니다.
        </p>

        <h2>선정에서 자주 보는 실수</h2>
        <ul>
          {MISTAKES.map((m) => (
            <CheckItem key={m}>{m}</CheckItem>
          ))}
        </ul>

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
      </BizArticle>
    </>
  )
}
