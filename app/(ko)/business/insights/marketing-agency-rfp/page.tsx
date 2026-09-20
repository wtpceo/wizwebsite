import type { Metadata } from "next"
import BizArticle, { CheckItem, Callout } from "@/components/business/BizArticle"

// 기업 경로 첫 글. 대상은 제안을 보내는 마케팅 담당자다.
// 수치는 공개 자료와 자사 실측만 쓴다. 대행 요율은 출처를 밝힌 공개 자료로만 인용한다.
const TITLE = "마케팅 대행사 RFP에 넣어야 할 12가지: 제안을 받는 쪽에서 본 기준"
const DESC =
  "RFP가 비어 있으면 제안서도 비어서 돌아옵니다. 비교 가능한 제안을 받으려면 과제 정의부터 계정 소유권, 보고 체계, 평가 배점까지 적혀 있어야 합니다. 제안을 받는 대행사 입장에서 무엇이 있으면 정확한 견적이 나오는지 정리했습니다."
const DATE = "2026-09-20"
const URL = "https://wiztheplanning.com/business/insights/marketing-agency-rfp"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | 위즈더플래닝` },
  description: DESC,
  keywords: [
    "마케팅 대행사 RFP", "광고대행사 선정 기준", "마케팅 대행사 제안서", "대행사 평가 기준",
    "광고대행사 입찰", "대행사 선정 평가표",
  ],
  alternates: { canonical: "/business/insights/marketing-agency-rfp" },
  openGraph: { images: ["/covers/business-rfp.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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
    q: "RFP는 몇 장이 적당한가요?",
    a: "분량보다 항목입니다. A4 두세 장이어도 과제, 예산 구조, 기간, 성과 정의, 계정 소유권, 보고 체계, 평가 방식이 들어 있으면 비교 가능한 제안이 돌아옵니다. 반대로 열 장이어도 이 항목이 없으면 대행사마다 다른 가정을 세워 견적을 내기 때문에 금액을 나란히 놓을 수 없습니다.",
  },
  {
    q: "예산을 알려주면 그 금액에 맞춰 부르지 않나요?",
    a: "예산을 감추면 비교가 더 어려워집니다. 대행사는 범위를 스스로 정해서 견적을 내고, 그러면 A사는 콘텐츠 중심, B사는 광고 중심으로 제안이 갈라져 비교 자체가 성립하지 않습니다. 구간으로 밝히고 그 안에서 무엇을 할지 제안하게 하는 편이 실질적입니다.",
  },
  {
    q: "성과 보장을 조건으로 걸어도 되나요?",
    a: "검색 순위나 AI 답변 노출은 같은 질문에도 결과가 매번 달라져 보장이 구조적으로 어렵습니다. 보장을 요구하면 보장할 수 있다고 말하는 곳만 남습니다. 대신 측정 방법과 주기, 미달 시 조치를 적게 하는 편이 실효가 있습니다.",
  },
  {
    q: "광고대행사 선정 기준은 무엇으로 잡나요?",
    a: "평가 축을 먼저 정하고 배점을 공개하는 방식이 가장 단순합니다. 과제 이해도, 실행 계획의 구체성, 측정과 보고, 투입 인력, 유사 경험, 비용 구조 여섯 가지면 대부분의 마케팅 대행 과제를 덮습니다. 회사 규모나 수상 이력은 실행과 직접 관련이 적어 배점을 낮게 두시는 편이 낫습니다.",
  },
  {
    q: "마케팅 대행사 제안서는 몇 곳에서 받는 게 좋나요?",
    a: "정답은 없지만 3곳 내외를 권합니다. 두 곳이면 비교 기준이 서지 않고, 다섯 곳을 넘어가면 평가에 드는 시간이 과제 규모보다 커집니다. 대신 후보를 줄이기 전에 RFP를 먼저 정리하시는 편이 낫습니다. 요청서가 같아야 제안서를 나란히 놓을 수 있습니다.",
  },
  {
    q: "제안 인력과 실제 담당자가 다른 경우는 어떻게 막나요?",
    a: "RFP에 투입 인력의 이름과 역할, 월 투입 시간을 적게 하고 교체 시 사전 통지 조항을 넣으면 됩니다. 제안 발표에 실제 담당자가 참석하는지도 확인 항목으로 두시면 좋습니다.",
  },
  {
    q: "기준선 측정은 왜 따로 필요한가요?",
    a: "시작 시점 기록이 없으면 끝난 뒤에 무엇이 좋아졌는지 증명할 수 없습니다. 저희가 진행한 정형외과 사례에서는 계약 전 ChatGPT 언급률이 10개 질문 중 4개, 30번 중 17%였고, 39일 뒤 같은 모델과 같은 질문으로 다시 재서 93%가 됐습니다. 같은 방법으로 두 번 재지 않았으면 비교할 수 없는 숫자였습니다.",
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

const ITEMS: [string, string, string][] = [
  ["1. 과제 정의", "무엇을 해결하려는지 한두 문장", "이게 없으면 대행사는 자기가 잘하는 일을 과제로 바꿔서 제안합니다."],
  ["2. 현재 상태", "지금 쓰는 채널, 최근 성과, 내부 인력", "현황이 없으면 견적이 보수적으로 커집니다."],
  ["3. 성과 정의", "무엇을 성공으로 볼지와 측정 도구", "'매출 증대' 대신 셀 수 있는 지표로 적습니다."],
  ["4. 기준선", "시작 시점 수치를 누가 언제 재는지", "시작 기록이 없으면 종료 시점 숫자를 해석할 수 없습니다."],
  ["5. 예산 구조", "매체비·대행료·제작비를 나눠 표기, 부가세 포함 여부", "한 줄 금액은 비교가 불가능합니다."],
  ["6. 기간과 종료", "계약 기간, 최소 기간, 중도 해지 조건", "해지 조건이 없으면 나중에 위약금 분쟁이 됩니다."],
  ["7. 범위와 수량", "월 산출물 개수, 채널 수, 초과 업무 처리 방식", "수량이 있어야 다음 견적과 비교됩니다."],
  ["8. 계정과 데이터 소유권", "광고 계정·도메인·분석 계정 명의, 종료 시 인수인계", "대행사 명의면 바꿀 때 데이터가 같이 사라집니다."],
  ["9. 보고 체계", "주기, 형식, 참석자, 원자료 제공 여부", "보고 주기를 안 적으면 월 1회 요약으로 끝납니다."],
  ["10. 투입 인력", "이름·역할·월 투입 시간, 교체 시 통지", "제안 인력과 실행 인력이 다른 일을 막습니다."],
  ["11. 규제와 승인", "업종 규제(의료·금융·식품 등), 사내 승인 절차와 소요일", "승인 일정이 빠지면 일정이 전부 밀립니다."],
  ["12. 평가와 일정", "배점표, 질의 창구와 마감, 제출 형식, 발표 여부", "배점이 공개되면 제안서의 초점이 맞습니다."],
]

const SCORE: [string, string][] = [
  ["과제 이해도", "우리 문제를 다시 설명할 수 있는가"],
  ["실행 계획의 구체성", "무엇을 몇 건, 언제까지"],
  ["측정과 보고", "어떤 숫자를 어떤 주기로, 원자료를 주는가"],
  ["투입 인력", "실제 담당자와 투입 시간"],
  ["유사 경험", "같은 업종 또는 같은 규모"],
  ["비용 구조", "매체비·대행료·제작비 분리와 초과 처리"],
]

const RED: string[] = [
  "순위나 AI 노출을 보장한다고 적은 제안서. 미달 시 정산 방법이 없으면 문장만 남습니다.",
  "기준선 측정 없이 개선 폭을 약속하는 제안. 비교 대상이 없으면 어떤 숫자도 만들 수 있습니다.",
  "투입 인력을 '전담팀'으로만 적은 제안. 이름과 시간이 없으면 실제 투입은 확인되지 않습니다.",
  "광고 계정을 대행사 명의로 만들자는 제안. 계약이 끝나면 데이터가 함께 넘어가지 않습니다.",
  "매체비와 대행료가 한 줄로 묶인 견적. 어디에 돈을 쓰는지 알 수 없습니다.",
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BizArticle
        href="/business/insights/marketing-agency-rfp"
        kicker="대행사 선정"
        title={TITLE}
        description={DESC}
        date="2026년 9월 20일"
      >
        <p>
          <strong>RFP에 과제·예산 구조·기간·성과 정의·계정 소유권·보고 체계·평가 방식이 적혀 있으면
          제안서를 나란히 놓고 비교할 수 있습니다.</strong> 이 중 하나라도 비면 대행사마다 다른 가정을
          세워 견적을 내기 때문에, 금액이 달라 보여도 사실은 다른 물건입니다.
        </p>

        <h2>광고대행사 선정 기준을 받는 쪽에서 보면</h2>
        <p>
          저희는 제안을 보내는 쪽입니다. 같은 요청서를 받고도 어떤 곳은 정확한 견적을, 어떤 곳은
          범위를 크게 잡은 견적을 냅니다. 차이는 대부분 RFP에 있습니다. 무엇이 적혀 있으면 견적이
          정확해지는지는 보내는 쪽이 제일 잘 압니다.
        </p>
        <p>
          참고로 2026년 9월 19일에 &lsquo;마케팅 대행사 RFP&rsquo; 검색 결과를 조사해 보니, 1페이지는
          문서 양식 판매 사이트와 공공기관 입찰 공고가 차지하고 있었습니다. 양식은 칸만 있고, 공고는
          공공 조달 기준이라 민간 마케팅 계약과 맞지 않는 항목이 섞여 있습니다.
        </p>

        <h2>마케팅 대행사 RFP에 넣어야 할 12가지</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[620px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">항목</th>
                <th className="px-4 py-3 font-bold text-gray-900">적을 내용</th>
                <th className="px-4 py-3 font-bold text-gray-900">빠지면 생기는 일</th>
              </tr>
            </thead>
            <tbody>
              {ITEMS.map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                  <td className="px-4 py-2.5 text-gray-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>예산과 마케팅 대행사 수수료는 구간으로라도 밝힙니다</h3>
        <p>
          예산을 감추면 견적이 정확해지는 것이 아니라 제안이 갈라집니다. A사는 콘텐츠 중심으로, B사는
          광고 중심으로 범위를 잡아 오면 비교 자체가 성립하지 않습니다. 구간을 주고 그 안에서 무엇을
          할지 제안하게 하는 편이 낫습니다.
        </p>
        <p>
          대행료 산정 방식도 미리 정해 두면 좋습니다. 공개 자료에서는 광고비 연동형의 경우{" "}
          <a href="https://lab.studioplanc.com/marketing-agency-cost-guide/" target="_blank" rel="noopener nofollow">
            보통 15~20%, 월 500만원 이상 집행 시 12%까지 협상이 가능하다고 설명
          </a>
          합니다. 다만 매체마다 구조가 다릅니다. 네이버 검색광고처럼{" "}
          <a href="https://1point.kr/blog/insights/naver-search-ad-agency/" target="_blank" rel="noopener nofollow">
            대행 수수료를 매체사가 대행사에 지급하는 공식 대행사 구조
          </a>
          도 있습니다. 그래서 RFP에는 &ldquo;어떤 매체에서 대행 수수료가 어디서 발생하는지 적어
          달라&rdquo;는 한 줄을 넣는 편이 확실합니다.
        </p>

        <h3>성과는 단계로 나눠서 정의합니다</h3>
        <p>
          &lsquo;매출 증대&rsquo;는 성과 정의가 아닙니다. 마케팅이 직접 책임질 수 있는 구간까지
          끊어야 합니다.
        </p>
        <ul>
          <CheckItem><strong>노출:</strong> 검색 순위, 광고 노출, AI 답변에서 언급되는 비율</CheckItem>
          <CheckItem><strong>유입:</strong> 사이트 방문과 유입 경로</CheckItem>
          <CheckItem><strong>전환:</strong> 문의, 가입, 예약, 구매</CheckItem>
          <CheckItem><strong>그 뒤:</strong> 영업 단계 전환율처럼 마케팅 혼자 책임질 수 없는 구간은 따로 표시</CheckItem>
        </ul>
        <Callout>
          <strong>기준선을 RFP 항목으로 넣으세요.</strong> 저희가 진행한 수도권 정형외과는 계약 전
          ChatGPT 언급률이 10개 질문 중 4개, 30번 중 17%였습니다. 39일 뒤 같은 모델과 같은 질문으로
          다시 재자 10개 질문 모두, 30번 중 28번(93%)으로 바뀌었습니다. 시작 시점을 같은 방법으로
          재두지 않았다면 이 비교는 불가능했습니다.
        </Callout>

        <h2>대행사 평가 기준과 배점은 공개하는 편이 좋습니다</h2>
        <p>
          배점을 알려주면 제안서의 초점이 맞습니다. 비공개로 두면 대행사는 회사 소개와 수상 이력을
          늘립니다. 아래는 마케팅 대행 평가에서 흔히 쓰는 축입니다. 가중치는 과제에 맞춰 조정하시면
          됩니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">평가 축</th>
                <th className="px-4 py-3 font-bold text-gray-900">무엇을 보는가</th>
              </tr>
            </thead>
            <tbody>
              {SCORE.map(([a, b]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>마케팅 대행사 제안서에서 걸러야 할 다섯 가지</h2>
        <ul>
          {RED.map((r) => (
            <CheckItem key={r}>{r}</CheckItem>
          ))}
        </ul>

        <h3>공공기관 광고대행사 입찰 공고를 그대로 쓰면 안 되는 이유</h3>
        <p>
          검색하면 가장 많이 나오는 문서가 공공기관 광고대행사 입찰 공고입니다. 형식은 잘 갖춰져
          있지만 조달 기준에 맞춘 항목이라 민간 계약에는 맞지 않는 것이 섞여 있습니다. 업체 등급이나
          실적 증빙 요건이 과하게 붙는 반면, 광고 계정 명의나 AI 답변에서의 노출처럼 지금 중요한
          항목은 빠져 있는 경우가 많습니다. 형식만 참고하시고 항목은 위 12가지로 다시 채우시는 편이
          낫습니다.
        </p>

        <h2>질의응답 창구를 하나로 두세요</h2>
        <p>
          제안 기간에 담당자마다 다른 답을 주면 제안서가 서로 다른 전제 위에 서게 됩니다. 창구를 한
          명으로 정하고, 질의 마감과 답변 공개 방식(전체 공유 여부)을 RFP에 적어 두시면 됩니다. 받은
          질문과 답을 모든 후보에게 같이 공유하는 방식이 가장 잡음이 적습니다.
        </p>

        <h2>보안과 개인정보도 미리 적습니다</h2>
        <p>
          제안 단계에서 매출이나 고객 데이터를 공유해야 한다면 비밀유지 계약을 먼저 체결하고, 제공
          범위와 파기 시점을 적어 두세요. 계약 후에는 광고 계정과 분석 도구 접근 권한을 누구에게 어떤
          수준으로 줄지, 데이터가 국외로 처리되는 도구를 쓰는지도 확인 항목이 됩니다.
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
      </BizArticle>
    </>
  )
}
