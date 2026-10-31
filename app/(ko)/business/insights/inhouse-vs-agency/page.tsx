import type { Metadata } from "next"
import BizArticle, { CheckItem, Callout, BizContactNote } from "@/components/business/BizArticle"

// 주 키워드: 인하우스 vs 대행사
// 연관 검색어(2026-09-19 자동완성 227개 조사): 대행사 vs 인하우스 / 인하우스 마케팅 / 인하우스 마케팅 뜻 /
//   마케팅 아웃소싱 / 마케팅팀 구성 / 인하우스 퍼포먼스 마케팅
// 1페이지(2026-10-27 네이버 실측): AI 브리핑 있음. 취업 커뮤니티 글, 블로그, 소수 대행사 웹사이트가 섞여 있고
//   의사결정자 기준으로 비용을 계산한 글이 없다.
// 숫자 출처: 국민연금 9.5%(보건복지부 2025-12-29 브리핑), 건강보험 7.19%(보건복지부 2025-08-28 보도자료),
//   장기요양 0.9448%(보건복지부 2025-11-04 장기요양위원회). 고용보험은 실업급여 0.9% + 150인 미만 0.25%.
//   연봉 4,800만 원은 계산을 보여 주려는 가정이다. 시장 평균 연봉으로 쓰지 않는다.
const TITLE = "인하우스 vs 대행사: 마케터 1명 실제 비용과 업무를 나누는 기준"
const DESC =
  "인하우스와 대행사는 둘 중 하나를 고르는 문제가 아닙니다. 마케터 한 명을 뽑으면 회사가 실제로 내는 돈을 2026년 4대보험 요율로 계산하고 안에 둘 일과 밖에 맡길 일을 나누는 기준을 정리했습니다."
const DATE = "2026-10-27"
const URL = "https://wiztheplanning.com/business/insights/inhouse-vs-agency"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | 위즈더플래닝` },
  description: DESC,
  keywords: ["인하우스 vs 대행사", "대행사 vs 인하우스", "인하우스 마케팅", "마케팅 아웃소싱", "마케팅팀 구성", "인하우스 퍼포먼스 마케팅"],
  alternates: { canonical: "/business/insights/inhouse-vs-agency" },
  openGraph: { images: ["/covers/business-inhouse.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "ko",
  image: "https://wiztheplanning.com/covers/business-inhouse.jpg",
  author: { "@id": "https://wiztheplanning.com/#organization" },
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  mainEntityOfPage: URL,
}

/** 연봉 4,800만 원(가정), 직원 150명 미만 회사 기준 회사 부담분 */
const COST: [string, string, string][] = [
  ["연봉", "가정", "48,000,000원"],
  ["국민연금", "회사 4.75% (전체 9.5%)", "2,280,000원"],
  ["건강보험", "회사 3.595% (전체 7.19%)", "1,725,600원"],
  ["장기요양보험", "회사 0.4724% (전체 0.9448%)", "226,752원"],
  ["고용보험", "회사 0.9% + 0.25% (150명 미만)", "552,000원"],
  ["퇴직금 적립", "1년에 한 달치", "4,000,000원"],
  ["합계 (산재보험 제외)", "연봉의 약 1.18배", "56,784,352원"],
]

/** 업무별로 어디에 두는 편이 나은지. 위즈더플래닝 판단 기준 */
const SPLIT: [string, string, string][] = [
  ["목표와 예산 결정", "안", "회사 사정과 다른 부서 일정을 아는 사람이 정해야 합니다"],
  ["브랜드 말투와 승인", "안", "밖에서 초안을 써도 마지막 판단은 회사가 합니다"],
  ["광고 계정과 분석 도구 소유", "안", "대행사를 바꿔도 데이터가 남아야 합니다"],
  ["영업·제품팀과의 조율", "안", "회의에 매일 들어갈 수 있는 사람이 맡습니다"],
  ["매체 운영 (검색광고, 메타, 구글)", "밖 또는 안", "예산이 크고 매일 손이 가면 안, 매체가 여럿이면 밖"],
  ["촬영과 영상 편집", "밖", "장비와 인력을 한 회사가 상시로 두기 어렵습니다"],
  ["홈페이지와 랜딩페이지 개발", "밖", "자주 생기는 일이 아니라 상시 인력이 놀게 됩니다"],
  ["AI 검색 노출 측정과 개선", "밖", "질문 수십 개를 매주 같은 조건으로 다시 재는 도구와 시간이 듭니다"],
]

const FAQ = [
  {
    q: "인하우스 마케팅이 뭔가요?",
    a: "회사 안에 마케팅 담당자나 팀을 두고 직접 하는 방식입니다. 대행사에 맡기는 방식과 반대말처럼 쓰이지만, 실제로는 판단은 인하우스가 하고 촬영이나 매체 운영 같은 실행 일부를 대행사에 맡기는 회사가 많습니다.",
  },
  {
    q: "인하우스와 대행사 중 어느 쪽이 더 싼가요?",
    a: "필요한 전문 분야가 몇 개인지에 따라 갈립니다. 연봉 4,800만 원인 담당자 한 명을 두면 4대보험 회사 부담분과 퇴직금만 더해도 연 5,678만 원 정도가 듭니다(산재보험 제외). 그 한 명이 맡을 일이 한두 분야라면 인하우스가 낫고, 촬영과 개발과 매체 운영처럼 세 분야를 넘으면 한 사람으로 채우기 어려워 대행이 쌉니다.",
  },
  {
    q: "마케팅 아웃소싱은 어디까지 맡길 수 있나요?",
    a: "실행은 대부분 맡길 수 있습니다. 다만 목표와 예산 결정, 브랜드 승인, 광고 계정과 분석 도구의 소유권은 회사가 쥐고 있는 편이 안전합니다. 이 셋을 넘기면 대행사를 바꿀 때 데이터와 기록이 같이 사라집니다.",
  },
  {
    q: "인하우스 퍼포먼스 마케터 한 명이면 충분한가요?",
    a: "검색광고나 메타 광고처럼 매체 한두 개를 매일 운영하는 일이라면 한 명으로 됩니다. 소재 촬영과 랜딩페이지 수정, 측정 설계까지 같이 기대하면 부족합니다. 한 명을 뽑는다면 실행보다 목표를 세우고 외부 파트너를 관리할 수 있는 사람을 먼저 권합니다.",
  },
  {
    q: "대행사를 쓰다가 인하우스로 옮길 때 무엇을 챙겨야 하나요?",
    a: "광고 계정과 GA4 같은 분석 도구가 회사 명의인지, 촬영 원본과 디자인 원본을 넘겨받을 수 있는지, 그동안의 주간 보고서와 측정 기준을 받을 수 있는지 확인하세요. 계약할 때 이 조항이 없으면 옮길 때 처음부터 다시 쌓아야 합니다.",
  },
  {
    q: "마케팅팀 구성은 몇 명부터 하나요?",
    a: "정해진 숫자는 없습니다. 저희가 보는 기준은 사람 수보다 역할입니다. 목표와 예산을 정하고 외부 파트너를 관리하는 역할이 먼저 있어야 하고 매일 손이 가는 매체가 생기면 운영 담당을 더합니다. 촬영과 개발은 상시로 일이 생길 때까지 밖에 두는 편이 낫습니다.",
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
        href="/business/insights/inhouse-vs-agency"
        kicker="조직 구성"
        title={TITLE}
        description={DESC}
        date="2026년 10월 27일"
        ctaTitle="안에 둘 일과 맡길 일부터 나눠 보세요"
        ctaBody="지금 팀 구성과 맡기려는 업무를 적어 주시면 어디까지 안에서 하고 무엇을 밖에 맡길지 나눠서 회신하겠습니다. 저희를 쓰지 않는 편이 낫다면 그 구성으로 말씀드립니다."
      >
        <p>
          <strong>인하우스와 대행사는 둘 중 하나를 고르는 문제가 아닙니다.</strong> 판단은 안에 두고 한
          사람으로 채울 수 없는 전문 실행은 밖에 맡기는 쪽이 대개 가장 쌉니다. 마케터 한 명을 뽑으면 회사가
          실제로 내는 돈은 연봉의 1.18배쯤인데, 그 계산부터 아래에 적었습니다.
        </p>
        <p>
          이 글은 마케팅 담당자가 이미 있거나 첫 담당자를 뽑으려는 조직을 기준으로 씁니다. 대표 혼자 모든
          결정을 하는 작은 가게라면 계산 방식이 달라집니다.
        </p>

        <h2>인하우스 마케터 1명의 실제 비용</h2>
        <p>
          채용 공고에 적는 연봉과 회사가 실제로 내는 돈은 다릅니다. 4대보험 회사 부담분과 퇴직금이 붙기
          때문인데, 2026년에는 국민연금 요율이 9%에서 9.5%로 올라 그 차이가 조금 더 커졌습니다.
        </p>

        <h3>2026년 요율로 계산한 예시</h3>
        <p>
          연봉 4,800만 원, 직원 150명 미만 회사라고 가정했습니다. 연봉은 계산을 보여 드리려고 정한 숫자이고
          시장 평균이 아닙니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">항목</th>
                <th className="px-4 py-3 font-bold text-gray-900">기준</th>
                <th className="px-4 py-3 text-right font-bold text-gray-900">1년 금액</th>
              </tr>
            </thead>
            <tbody>
              {COST.map(([a, b, c], i) => (
                <tr key={a} className={`border-t border-slate-100${i === COST.length - 1 ? " bg-slate-50" : ""}`}>
                  <td className={`px-4 py-2.5 ${i === COST.length - 1 ? "font-bold" : "font-semibold"} text-gray-900`}>{a}</td>
                  <td className="px-3 py-2.5 text-gray-700">{b}</td>
                  <td className={`whitespace-nowrap px-3 py-2.5 text-right tabular-nums ${i === COST.length - 1 ? "font-bold text-gray-900" : "text-gray-700"}`}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          여기에 산재보험료가 업종 요율만큼 더 붙습니다. 채용 공고비, 노트북과 업무 도구 구독료, 교육비는
          넣지 않았습니다. 그래도 월로 나누면 473만 원 정도입니다.
        </p>
        <Callout>
          <strong>숫자를 가져온 곳.</strong> 국민연금 9.5%는 보건복지부가 2025년 12월 29일 브리핑에서,
          건강보험 7.19%는 2025년 8월 28일 건강보험정책심의위원회 결정으로, 장기요양 0.9448%는 2025년 11월
          4일 장기요양위원회 의결로 정해진 2026년 요율입니다. 국민연금은 소득 상한이 있어 연봉이 아주 높으면
          비율이 조금 낮아집니다.
        </Callout>

        <h3>비교는 금액보다 일의 범위로</h3>
        <p>
          저희 월 운영은 300만 원부터라 1년이면 3,600만 원입니다. 숫자만 놓고 보면 대행이 싸 보이지만 이렇게
          비교하면 틀립니다. 인하우스 담당자는 일주일 내내 한 회사 일만 하고, 대행사는 여러 회사 일을 나눠
          합니다. 같은 돈으로 무엇을 얼마나 할 수 있는지가 따져 볼 지점입니다.
        </p>
        <p>
          그래서 저희는 필요한 전문 분야 수부터 셉니다. 매체 운영 하나, 많아야 둘이면 한 사람이 매일 붙어 있는
          쪽이 낫습니다. 촬영, 홈페이지 개발, 여러 매체 운영, AI 검색 측정처럼 세 분야를 넘어가면 한 사람으로는
          채워지지 않아서, 그 사람 연봉을 올려도 결국 외주를 따로 쓰게 됩니다.
        </p>

        <h2>대행사 vs 인하우스, 업무로 나누는 기준</h2>
        <p>
          저희가 보는 기준을 표로 옮겼습니다. 안에 둘 일은 판단과 소유, 밖에 맡길 일은 장비와 시간이
          드는 전문 실행입니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">업무</th>
                <th className="px-4 py-3 font-bold text-gray-900">어디에</th>
                <th className="px-4 py-3 font-bold text-gray-900">이유</th>
              </tr>
            </thead>
            <tbody>
              {SPLIT.map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="whitespace-nowrap px-4 py-2.5 text-gray-700">{b}</td>
                  <td className="px-4 py-2.5 text-gray-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>인하우스 마케팅이 맞을 때와 마케팅 아웃소싱이 맞을 때</h2>
        <h3>인하우스가 맞는 경우</h3>
        <ul>
          <CheckItem>제품이나 가격이 매주 바뀌어서 마케팅이 그 속도를 바로 따라가야 할 때</CheckItem>
          <CheckItem>검색광고나 메타 광고처럼 매체 한두 개를 매일 들여다봐야 할 만큼 예산이 클 때</CheckItem>
          <CheckItem>영업팀과 리드를 주고받는 일이 많아서 내부 회의에 매일 들어가야 할 때</CheckItem>
        </ul>
        <h3>대행사가 맞는 경우</h3>
        <ul>
          <CheckItem>촬영, 개발, 매체 운영처럼 필요한 분야가 셋을 넘을 때</CheckItem>
          <CheckItem>캠페인이 시기별로 몰려서 일 년 내내 같은 인원이 필요하지 않을 때</CheckItem>
          <CheckItem>다른 회사들과 비교한 기준이 필요할 때. 안에서는 우리 숫자가 높은지 낮은지 알기 어렵습니다</CheckItem>
        </ul>
        <p>
          대부분은 두 목록에 한 줄씩 걸립니다. 그럴 때는 판단하는 사람 한 명을 안에 두고 실행을 밖에 맡기는 구성이
          남습니다.
        </p>

        <BizContactNote>
          어느 쪽에 걸리는지 애매하다면 지금 팀에 누가 있고 무엇을 맡기려는지 <a href="/business/contact">기업 제안 요청 양식</a>에 적어 주세요. 안에 둘 일과 밖에 맡길 일을 나눠서 답장드리겠습니다.
        </BizContactNote>

        <h2>마케팅팀 구성: 첫 한 명은 누구를 뽑을까</h2>
        <p>
          첫 담당자를 뽑을 때 광고를 잘 돌리는 사람부터 찾는 경우가 많은데, 저희는 순서를 반대로 권합니다. 첫 한
          명은 목표를 숫자로 세우고 외부 파트너가 낸 결과를 읽을 줄 아는 사람이 좋습니다. 매체 운영은 대행사나
          프리랜서로 채울 수 있지만, 무엇을 맡길지 정하는 일은 밖에서 대신해 줄 수 없습니다.
        </p>
        <p>
          그다음에 매일 손이 가는 매체가 생기면 인하우스 퍼포먼스 마케터를 더합니다. 촬영과 개발은 상시로 일이
          생길 때까지 밖에 두는 편이 인건비가 놀지 않습니다.
        </p>

        <h2>대행사를 쓰더라도 회사가 쥐고 있어야 할 것</h2>
        <ul>
          <CheckItem>
            <strong>광고 계정과 분석 도구.</strong> 메타 광고 계정, 구글 광고 계정, GA4는 회사 명의로 만들고
            대행사에는 권한만 주세요.
          </CheckItem>
          <CheckItem>
            <strong>원본 파일.</strong> 촬영 원본과 디자인 원본을 계약이 끝난 뒤에도 쓸 수 있는지 계약서에
            적습니다.
          </CheckItem>
          <CheckItem>
            <strong>측정 기준.</strong> 무엇을 성과로 셀지 회사가 정하고 대행사가 바뀌어도 같은 기준으로 잴 수
            있게 남겨 둡니다.
          </CheckItem>
        </ul>
        <p>
          이 내용을 제안 요청서에 넣는 방법은{" "}
          <a href="/business/insights/marketing-agency-rfp">마케팅 대행사 RFP에 넣어야 할 12가지</a>에, 제안서를
          점수로 비교하는 방법은 <a href="/business/insights/agency-selection-criteria">광고대행사 선정 기준 6가지와 평가표</a>에
          정리했습니다. 대행료가 어떤 구조로 붙는지는{" "}
          <a href="/business/insights/marketing-agency-fee">마케팅 대행사 수수료 구조 3가지</a>에서 보실 수
          있습니다.
        </p>

        <h2>AI 도구가 들어온 뒤 달라진 것</h2>
        <p>
          원고 초안이나 광고 문구 몇 개를 뽑는 일은 이제 인하우스 담당자 혼자서도 꽤 빨리 합니다. 저희도 원고
          초안, 측정, 제안서 정리는 AI 에이전트가 먼저 하고 사람이 확인합니다. 그래서 단순 제작만 맡기던 외주는
          안에서 해결할 여지가 커졌습니다.
        </p>
        <p>
          반대로 늘어난 일도 있습니다. ChatGPT나 네이버 AI 브리핑에서 회사가 어떻게 소개되는지 재려면 같은 질문을
          여러 번, 매주 같은 조건으로 물어야 합니다. 한 번 물어본 답은 다음 날 달라지기 때문입니다. 이렇게 반복해서
          재는 일은 도구와 시간이 들어서 인하우스 한 명이 겸하기 어렵습니다.
        </p>
        <p>
          AI 검색 대응을 조직에 들일 때 법무와 홍보가 어디에 들어가는지는{" "}
          <a href="/business/insights/enterprise-geo-adoption">기업 GEO 도입 순서 6단계</a>에 정리했습니다.
        </p>

        <h2>저희에게 맡기지 않는 편이 나은 경우</h2>
        <p>
          월 마케팅 예산이 대행료와 광고비를 합쳐 300만 원이 안 된다면, 지금은 담당자 한 명이 직접 운영하면서 필요한
          촬영만 건별로 맡기시는 편이 낫습니다. 제품이 매주 바뀌는 초기 단계도 마찬가지입니다. 이런 경우 상담을
          주시면 저희를 쓰지 않는 구성으로 말씀드립니다.
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
