import type { Metadata } from "next"
import BizArticle, { CheckItem, Callout, BizContactNote } from "@/components/business/BizArticle"

// 주 키워드: 마케팅 대행사 수수료
// 연관 검색어(2026-10-10 구글 자동완성 · 2026-09-19 1페이지 조사): 광고대행사 수수료율 /
//   네이버 광고대행사 수수료 / 광고 운영 대행 수수료 / 대행 수수료 요율
// 1페이지: 네이버 AI 브리핑이 대행사 웹사이트 세 곳을 출처로 인용. 구조를 정리한 글이 없다.
// 공개 수위(2026-10-10 대표 결정): 월 운영 금액은 공개, 단발 캠페인은 구조만 공개,
//   광고비 연동 % 수치와 제작비 금액은 비공개.
const TITLE = "마케팅 대행사 수수료 구조 3가지: 어디서 손해가 나는가"
const DESC =
  "대행 수수료는 정액, 광고비 연동, 성과형 셋 중 하나이거나 그 조합입니다. 구조마다 광고주가 손해 보는 지점이 다릅니다. 세 구조의 차이와 계약서에서 확인할 조항, 그리고 저희가 받는 방식과 온보딩비를 따로 두는 이유를 공개합니다."
const DATE = "2026-10-10"
const URL = "https://wiztheplanning.com/business/insights/marketing-agency-fee"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | 위즈더플래닝` },
  description: DESC,
  keywords: [
    "마케팅 대행사 수수료", "광고대행사 수수료율", "광고 운영 대행 수수료",
    "대행 수수료 요율", "네이버 광고대행사 수수료", "대행사 비용 구조",
  ],
  alternates: { canonical: "/business/insights/marketing-agency-fee" },
  openGraph: { images: ["/covers/business-fee.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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

/** 세 구조. 금액이 아니라 과금 방식과 위험이 어디로 가는지를 적는다 */
const MODELS: [string, string, string, string][] = [
  [
    "정액 (리테이너)",
    "매달 같은 금액",
    "업무량이 일정하고 예산을 미리 잡아야 할 때",
    "일이 줄어도 금액이 그대로입니다. 범위가 적혀 있지 않으면 무엇이 포함인지 매달 다툼이 생깁니다.",
  ],
  [
    "광고비 연동 (요율)",
    "집행 광고비의 일정 비율",
    "집행 규모가 크고 운영 업무가 광고비에 비례할 때",
    "광고비를 줄이자고 말할 이유가 대행사에 없습니다. 업무량이 그대로여도 광고비가 줄면 대행료만 줄어 운영 품질이 먼저 깎입니다.",
  ],
  [
    "성과형",
    "전환 건당 또는 매출 비율",
    "전환 정의가 명확하고 측정이 양쪽에서 같을 때",
    "무엇을 전환으로 셀지가 갈립니다. 측정 주체가 한쪽이면 숫자를 검증할 방법이 없습니다.",
  ],
]

/** 계약서에서 수수료와 직접 얽히는 조항 */
const CONTRACT: [string, string][] = [
  ["과금 기준", "정액인지 요율인지 혼합인지, 요율이라면 무엇의 몇 퍼센트인지 분모를 적습니다"],
  ["포함 범위", "월 몇 건, 어느 매체, 어느 산출물까지인지. 범위를 넘는 업무의 처리 방식"],
  ["매체비와 대행료의 분리", "청구서에서 광고비와 대행료가 따로 보이는지"],
  ["온보딩비", "별도인지 포함인지, 중도 해지 시 환불 기준이 있는지"],
  ["최소 기간", "몇 개월인지, 중도 해지 조건과 위약 조항"],
  ["제작물 권리", "계약 종료 뒤 촬영 원본과 디자인 원본을 쓸 수 있는지"],
]

const FAQ = [
  {
    q: "마케팅 대행사 수수료는 보통 어떻게 받나요?",
    a: "정액, 광고비 연동, 성과형 셋 중 하나이거나 그 조합입니다. 어느 쪽이 유리한지는 금액보다 업무량이 무엇에 비례하는지로 갈립니다. 콘텐츠 제작과 측정이 중심이면 업무량이 광고비와 무관해서 정액이 맞고, 매체 운영이 중심이고 집행 규모가 크면 요율이 자연스럽습니다.",
  },
  {
    q: "광고대행사 수수료율은 몇 퍼센트인가요?",
    a: "업체와 과제에 따라 다르고, 저희는 공개 자료로 확인되지 않은 시장 평균치를 숫자로 적지 않습니다. 대신 제안을 받으실 때 요율의 분모를 물어보세요. 같은 비율이라도 순 광고비 기준인지 매체 수수료와 부가세를 포함한 금액 기준인지에 따라 실제 금액이 달라집니다.",
  },
  {
    q: "네이버 광고대행사 수수료는 광고주가 내나요?",
    a: "검색광고에는 매체가 대행사에 수수료를 지급하는 구조가 있어서, 운영만 맡기는 경우 광고주가 대행사에 따로 내지 않는다는 설명이 업계에 널리 퍼져 있습니다. 다만 저희가 네이버 공식 문서에서 그 비율과 조건을 확인하지는 못했습니다. 매체 공식 안내로 직접 확인하시고, 어떤 경우에 별도 비용이 붙는지는 계약서에 적어 받으시는 편이 안전합니다.",
  },
  {
    q: "광고 운영 대행 수수료만 따로 받을 수 있나요?",
    a: "가능합니다. 다만 운영만 분리하면 소재와 랜딩을 저희가 통제하지 못해 성과의 원인을 설명하기 어려워집니다. 저희는 운영만 떼어 맡는 건을 기본으로 받지 않고, 받더라도 측정과 보고는 같은 기준으로 넣습니다.",
  },
  {
    q: "온보딩비는 왜 따로인가요?",
    a: "시작할 때 한 번만 드는 일이 따로 있기 때문입니다. 시장과 경쟁을 조사하고, 브랜드를 학습하고, 광고 계정과 측정 도구를 세팅하고, 계약 전 기준선을 재는 일입니다. 이 시간은 집행 기간이 짧아도 똑같이 듭니다. 월 운영료에 녹이면 긴 계약을 한 쪽이 짧은 계약을 보조하는 셈이 되어 따로 두었습니다.",
  },
  {
    q: "최소 계약 기간이 왜 3개월인가요?",
    a: "같은 질문으로 최소 세 번은 다시 재야 숫자가 추세인지 우연인지 갈리기 때문입니다. 한 달치 결과만으로는 올라간 것도 내려간 것도 설명할 수 없습니다. 기간이 그보다 짧으면 저희가 드릴 수 있는 말이 '해봤습니다'뿐이라 받지 않습니다.",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BizArticle
        href="/business/insights/marketing-agency-fee"
        kicker="비용 구조"
        title={TITLE}
        description={DESC}
        date="2026년 10월 10일"
        ctaTitle="견적을 항목별로 받아 보세요"
        ctaBody="예산 구간과 기간을 남겨 주시면 월 운영과 단발 캠페인 중 어느 쪽이 맞는지, 견적에 어떤 항목이 들어가는지 먼저 정리해 보내 드리겠습니다. 금액은 범위를 확인하고 나서 온보딩비와 운영료를 나눠 말씀드립니다."
      >
        <p>
          <strong>대행 수수료는 세 가지 구조뿐입니다.</strong> 정액, 광고비 연동, 성과형. 나머지는 이
          셋의 조합입니다. 비교하실 때 보셔야 할 것은 금액이 아니라{" "}
          <strong>구조마다 손해가 어디서 나는지</strong>입니다. 저희 기준도 아래에 그대로 적었습니다.
        </p>

        <h2>구조가 셋이라는 말의 뜻</h2>
        <p>
          제안서마다 이름이 다르게 적혀 있어도 과금 방식은 결국 셋 중 하나입니다. 그래서 대행 수수료
          요율을 비교하기 전에 그 금액이 무엇에 연동되는지부터 맞춰야 합니다. 업무량이 광고비에
          비례하지 않는 과제에 요율을 쓰면, 광고비가 줄 때 운영 품질이 먼저 깎입니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">구조</th>
                <th className="px-4 py-3 font-bold text-gray-900">과금 방식</th>
                <th className="px-4 py-3 font-bold text-gray-900">맞는 상황</th>
                <th className="px-4 py-3 font-bold text-gray-900">손해가 나는 지점</th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map(([a, b, c, d]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                  <td className="px-4 py-2.5 text-gray-700">{c}</td>
                  <td className="px-4 py-2.5 text-gray-700">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>광고대행사 수수료율이 같아도 금액이 달라집니다</h2>
        <p>
          요율로 제안을 받으셨다면 비율보다 <strong>분모</strong>를 먼저 물어보세요. 순 광고비 기준인지,
          매체 수수료와 부가세를 포함한 금액 기준인지에 따라 같은 비율이라도 청구액이 달라집니다.
          청구서에서 광고비와 대행료가 한 줄로 합쳐져 있으면 나중에 분리해 보기 어렵습니다.
        </p>

        <h2>네이버 광고대행사 수수료는 누가 내는가</h2>
        <p>
          검색광고에는 매체가 대행사에 수수료를 지급하는 구조가 있습니다. 그래서 운영만 맡기면 광고주가
          대행사에 따로 내지 않는다는 설명이 업계에 널리 퍼져 있습니다.
        </p>
        <Callout>
          <strong>저희가 확인하지 못한 것을 적어 둡니다.</strong> 이 구조를 설명하는 글은 많지만, 저희는
          매체사 공식 문서에서 지급 비율과 조건을 확인하지 못했습니다. 그래서 이 글에 비율 숫자를 적지
          않았습니다. 매체 공식 안내로 직접 확인하시고, 어떤 경우에 별도 비용이 붙는지는 계약서에 적어
          받으시길 권합니다.
        </Callout>

        <h2>저희가 받는 방식</h2>
        <p>기업 과제는 두 가지로 나눠 받습니다.</p>
        <ul>
          <CheckItem>
            <strong>월 운영.</strong> AI 검색 최적화와 콘텐츠, 광고 운영, 주간 보고까지 맡는 형태입니다.{" "}
            <strong>월 300만 원부터, 최소 3개월</strong>입니다. 계약 전 기준선 측정은 별도로 둡니다.
          </CheckItem>
          <CheckItem>
            <strong>단발 캠페인.</strong> 2주짜리 메타 광고처럼 기간이 정해진 건입니다. 구조는{" "}
            <strong>온보딩비 + 제작비 + 운영 수수료</strong>이고, 금액은 범위와 매체에 따라 달라져 상담
            뒤에 안내드립니다.
          </CheckItem>
          <CheckItem>
            <strong>광고비 연동 비율은 협의</strong>입니다. 집행 규모와 매체 구성에 따라 달라져 고정된
            숫자를 적지 않습니다.
          </CheckItem>
        </ul>

        <h3>온보딩비를 따로 두는 이유</h3>
        <p>
          시작할 때 한 번만 드는 일이 따로 있습니다. 시장과 경쟁을 조사하고, 브랜드를 학습하고, 광고
          계정과 측정 도구를 세팅하고, 계약 전 기준선을 재는 일입니다.{" "}
          <strong>이 시간은 집행 기간이 2주여도 6개월이어도 거의 같습니다.</strong>
        </p>
        <p>
          이걸 월 운영료에 녹이면 두 가지가 생깁니다. 짧은 건은 조사를 건너뛰게 되고, 긴 계약을 한 쪽이
          짧은 계약을 보조하게 됩니다. 저희가 상담에서 브랜드를 먼저 학습한 뒤 제안하는 방식을 유지하려면
          이 단계를 줄일 수 없어서, 금액을 숨기는 대신 항목을 분리해 두었습니다.
        </p>

        <BizContactNote>
          어느 구조가 맞는지 아직 정하지 못하셨다면 예산 구간과 기간만 <a href="/business/contact">기업 제안 요청 양식</a>에 적어 주셔도 됩니다. 저희가 구조부터 맞춰 보고 회신드리겠습니다.
        </BizContactNote>

        <h2>계약서에서 확인할 여섯 가지</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">항목</th>
                <th className="px-4 py-3 font-bold text-gray-900">확인할 것</th>
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
        <p>
          제안을 나란히 놓고 점수로 바꾸는 방법은{" "}
          <a href="/business/insights/agency-selection-criteria">광고대행사 선정 기준 6가지와 평가표</a>에
          정리했습니다. 요청서 단계라면{" "}
          <a href="/business/insights/marketing-agency-rfp">마케팅 대행사 RFP에 넣어야 할 12가지</a>를 먼저
          보시는 편이 낫습니다.
        </p>
        <p>
          대행을 쓸지 담당자를 뽑을지부터 정하는 단계라면{" "}
          <a href="/business/insights/inhouse-vs-agency">인하우스 vs 대행사 비용 계산과 업무 나누는 기준</a>을 먼저
          보세요.
        </p>

        <h2>자주 받는 질문</h2>
        <dl className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {FAQ.map((f) => (
            <div key={f.q} className="px-5 py-5">
              <dt className="font-bold text-gray-900">{f.q}</dt>
              <dd className="mt-2 text-gray-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </BizArticle>
    </>
  )
}
