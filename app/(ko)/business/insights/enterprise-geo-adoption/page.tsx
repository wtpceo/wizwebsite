import type { Metadata } from "next"
import BizArticle, { CheckItem, BizContactNote } from "@/components/business/BizArticle"

// 기업 GEO 도입 순서 (작가 원고 2026-10-31, 총괄 회의 실행안).
// 주 키워드: 기업 GEO 도입
// 연관 검색어(40_측정/키워드/2026-10-31_기업GEO도입_네이버3편): GEO 도입 / GEO 도입 순서 / GEO 도입 기간 /
//   GEO 인하우스 / AI 검색 최적화 기업. 검색량은 측정하지 못했다.
// 제목·소제목·FAQ에 대행사, 업체, 추천, 고르는 법, 병원, GEO 서비스, 비용, 뜻, 보장을 쓰지 않는다(다른 글 자기잠식 방지).
// 의원 기록은 기업 사례처럼 보이지 않게 본문에 "의원 기록"이라고 밝힌다. 매주·주 1회는 11/2 측정 전이라 쓰지 않는다.
// 기업 글에서 /guide로 링크하지 않는다(CLAUDE.md 기업 경로 정책). 원고의 /guide/geo 링크는 뺐다.
const TITLE = "기업 GEO 도입 순서: 법무·홍보 검토부터 보고 체계까지 6단계"
const DESC =
  "기업 GEO 도입은 사이트 수정보다 지금 상태를 재고 담당을 정하는 일이 먼저입니다. 법무·홍보 검토를 어디에 넣을지, 누가 맡을지, 윗선에 무엇을 보고할지 여섯 단계로 정리했습니다."
const DATE = "2026-10-31"
const URL = "https://wiztheplanning.com/business/insights/enterprise-geo-adoption"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | 위즈더플래닝` },
  description: DESC,
  keywords: ["기업 GEO 도입", "GEO 도입", "GEO 도입 순서", "GEO 도입 기간", "GEO 인하우스", "AI 검색 최적화 기업"],
  alternates: { canonical: "/business/insights/enterprise-geo-adoption" },
  openGraph: { images: ["/covers/business-enterprise-geo-adoption.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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

const STEPS: [string, string, string, string][] = [
  ["1", "질문을 정하고 지금 상태 재기", "마케팅", "기준선 기록 한 부"],
  ["2", "담당자와 역할 정하기", "마케팅 책임자", "역할표와 승인 경로"],
  ["3", "AI에 알릴 사실 승인받기", "홍보, 법무", "승인된 사실 문서"],
  ["4", "사이트 고치기", "개발, 보안", "AI가 읽을 수 있는 공식 페이지"],
  ["5", "바깥 출처 정리하기", "홍보", "고칠 곳 목록과 진행 상태"],
  ["6", "다시 재고 보고하기", "마케팅", "정기 보고 한 장"],
]

const ROLES: [string, string, string][] = [
  ["마케팅 담당자", "질문 목록, 측정, 보고", "처음부터"],
  ["홍보", "회사 소개 문장, 수치, 바깥 출처", "3단계부터"],
  ["법무 또는 준법", "공개 표현 검토", "3단계에서 기준을 정하고, 그 뒤는 예외만"],
  ["개발·보안", "사이트 수정, AI 크롤러 접근 정책", "4단계부터"],
  ["영업·고객 응대", "고객이 실제로 묻는 말 제공", "1단계에 한 번, 이후 필요할 때"],
]

const FACTS = [
  "회사 소개 문장과 공식 서비스 이름",
  "주소, 대표 연락처, 운영 시간처럼 틀리면 바로 불편해지는 정보",
  "공개해도 되는 수치와 그 숫자의 기준일",
  "고객사 이름을 쓸 수 있는 범위",
  "쓰면 안 되는 표현",
]

const FAQ: { q: string; a: string; body?: React.ReactNode }[] = [
  {
    q: "법무 검토는 언제 들어가나요?",
    a: "사실 문서를 만드는 3단계입니다. 표현 기준과 공개할 수치를 그때 한 번에 정하고, 이후에는 문서 밖의 내용만 다시 검토하면 일정이 덜 밀립니다.",
  },
  {
    q: "담당자는 누가 맡나요?",
    a: "측정과 보고를 이미 하는 마케팅 담당자가 맡는 경우가 자연스럽습니다. 다만 사이트와 공개 문구를 바꾸려면 다른 부서의 협조가 필요하니 책임자를 함께 지정해 주세요.",
  },
  {
    q: "GEO 인하우스로 시작해도 되나요?",
    a: "됩니다. 질문을 정하고 재는 1단계는 도구 없이도 시작할 수 있습니다. 사이트 수정과 바깥 출처 정리에 드는 시간을 본 뒤에 나머지를 안에서 할지 정하셔도 늦지 않습니다. 판단 기준은 인하우스와 외부 운영의 손익 계산에 정리해 두었습니다.",
    body: (
      <>
        됩니다. 질문을 정하고 재는 1단계는 도구 없이도 시작할 수 있습니다. 사이트 수정과 바깥 출처 정리에 드는 시간을
        본 뒤에 나머지를 안에서 할지 정하셔도 늦지 않습니다. 판단 기준은{" "}
        <a href="/business/insights/inhouse-vs-agency">인하우스와 외부 운영의 손익 계산</a>에 정리해 두었습니다.
      </>
    ),
  },
  {
    q: "기존 마케팅 예산에서 어떻게 항목을 잡나요?",
    a: "기준선 측정, 사이트 수정, 정기 운영을 나눠서 잡으면 승인받기 쉽습니다. 기준선 측정은 한 번 드는 일이고 운영은 계속 드는 일이라 성격이 다르기 때문입니다.",
  },
  {
    q: "GEO 도입 순서를 바꿔도 되나요?",
    a: "4단계와 5단계는 함께 진행해도 됩니다. 다만 1단계 측정과 3단계 승인을 뒤로 미루면 나중에 변화를 설명하기 어렵고 고친 문장을 다시 고칠 수 있습니다.",
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
        href="/business/insights/enterprise-geo-adoption"
        kicker="도입 준비"
        title={TITLE}
        description={DESC}
        date="2026년 10월 31일"
        ctaTitle="여섯 단계 중 어디서 막혀 있는지부터 보겠습니다"
        ctaBody="과제와 예산 구간, 지금 진행 상태를 남겨 주시면 저희가 맡을 범위와 못 하는 일을 적어 회사 메일로 보내 드리겠습니다. 대행료는 월 300만 원부터이고 최소 3개월이며, 기준선 측정은 별도입니다."
      >
        <p>
          <strong>
            기업 GEO 도입은 지금 상태 측정, 담당 지정, 공개할 사실 승인, 사이트 수정, 바깥 출처 정리, 보고 체계
            순서로 진행하면 됩니다.
          </strong>{" "}
          조직에서는 글을 쓰는 일보다 누가 승인하는지에서 먼저 막힙니다. 그래서 이 글은 법무와 홍보가 어디에
          들어가는지를 중심으로 적었습니다.
        </p>
        <p>GEO를 짧게 말하면 ChatGPT 같은 AI가 답할 때 우리 회사를 근거와 함께 말하게 만드는 일입니다.</p>
        <p>
          미리 밝혀 둘 것이 있습니다. 저희가 공개한 AI 답변 전후 기록은 의원과 매장이 맡긴 일에서 나왔고, 기업 브랜드
          기록은 저희 회사 것뿐입니다. 저희도 회사 이름을 넣지 않은 질문에서는{" "}
          <a href="/business/insights/weekly-report-sample">42주차 보고서 기준 카테고리 점유율이 0%</a>입니다. 아래
          순서는 그 기록과 제안을 준비하며 정리한 것이고, 기업 성과 사례로 읽으시면 안 됩니다.
        </p>

        <h2>GEO 도입 순서 6단계 한눈에</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">단계</th>
                <th className="px-4 py-3 font-bold text-gray-900">할 일</th>
                <th className="px-4 py-3 font-bold text-gray-900">주로 맡는 곳</th>
                <th className="px-4 py-3 font-bold text-gray-900">끝났다는 표시</th>
              </tr>
            </thead>
            <tbody>
              {STEPS.map(([a, b, c, d]) => (
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

        <h2>1단계: 기업 GEO 도입은 지금 상태를 재는 일부터</h2>
        <p>
          처음 정할 것은 질문입니다. 고객이나 구매 담당자가 실제로 칠 만한 말로 적고, 회사 이름을 넣은 질문과 넣지 않은
          질문을 나눠 두세요. 저희 회사 보고서는 질문 10개 가운데 8개가 이름을 넣지 않은 질문입니다. 아직 우리를 모르는
          사람이 만나는 자리는 그쪽이니까요.
        </p>
        <p>
          화면 한 장으로 시작하지 마세요. 저희가 잰 한 정형외과 의원 기록에서는 광고주가 보낸 화면에 나온 비용 범위가
          같은 질문을 30번 다시 물었을 때 한 번도 나오지 않았습니다. 그 의원은 같은 질문 10개를 3번씩 물어 시작 숫자를
          남겼고, 30번 중 5번이던 이름이 39일 뒤 28번, 다시 2주 뒤 25번이 됐습니다. 시작 숫자가 없으면 이 변화를 윗선에
          설명할 수 없습니다.
        </p>
        <p>
          엔진 범위도 이때 적어 두세요. 저희는 Gemini, ChatGPT, Perplexity, 네이버 AI 브리핑 네 곳을 측정하고, 기본
          보고서에는 세 곳을 적습니다. 네이버 AI 브리핑은 결과를 약속하기 어려운 채널이라 기본 보고서에서 뺍니다. 측정
          방법은 <a href="/how-we-measure">측정 방식 페이지</a>에 공개해 두었습니다.
        </p>

        <h2>2단계: GEO 인하우스든 외부든 담당은 한 사람으로</h2>
        <p>
          GEO는 마케팅, 홍보, 개발, 법무에 걸쳐 있어서 맡은 사람이 없으면 부서 사이에 멈춥니다. 안에서 하든 밖에 맡기든
          회사 안에 책임자 한 사람은 있어야 합니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">역할</th>
                <th className="px-4 py-3 font-bold text-gray-900">맡는 일</th>
                <th className="px-4 py-3 font-bold text-gray-900">언제 들어오나</th>
              </tr>
            </thead>
            <tbody>
              {ROLES.map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                  <td className="px-4 py-2.5 text-gray-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          어디까지 안에서 할지 정해지지 않았다면{" "}
          <a href="/business/insights/inhouse-vs-agency">인하우스와 외부 운영의 손익 계산</a>부터 보시면 됩니다. 외부에
          맡기기로 하셨다면 <a href="/business/insights/agency-selection-criteria">제안서 평가표</a>를 함께 쓰실 수
          있습니다. AI 검색 최적화 기업을 비교할 때도 이 역할표를 먼저 보여 주면 제안 범위가 같아집니다.
        </p>

        <h2>3단계: 법무·홍보 검토는 글마다가 아니라 사실 문서로</h2>
        <p>
          글이 나올 때마다 법무 검토를 받으면 일정이 늘 밀립니다. 그래서 먼저 AI에 알려도 되는 사실을 문서 한 부로 묶어
          승인받고, 그 안의 문장은 다시 검토받지 않아도 되게 정하시길 권합니다.
        </p>
        <p>사실 문서에는 보통 이런 것이 들어갑니다.</p>
        <ul>
          {FACTS.map((f) => (
            <CheckItem key={f}>{f}</CheckItem>
          ))}
        </ul>
        <p>
          이 문서가 먼저 있어야 하는 이유가 있습니다. 앞의 의원 기록에서 이름이 나온 답변 28개 중 3개는 평일 진료 마감을
          실제보다 이른 시간으로 적었고, 사이트에 적지 않은 진료과목 표현이 10번 나왔습니다. 공식 정보를 먼저 또렷하게
          적어 두지 않으면 AI는 다른 곳에서 채웁니다.
        </p>
        <p>
          법무에 미리 물어볼 것은 업종마다 다릅니다. 부당한 표시·광고를 막는 표시광고법 제3조는 대부분의 회사에 걸리고,
          금융상품은 금융소비자보호법 제22조, 의료기관은 의료법 제56조처럼 업종별 규정이 더 붙습니다. 이 글은 법률
          자문이 아니니 구체적인 판단은 회사 법무에서 받아 주세요.
        </p>

        <BizContactNote>
          <strong>저희와 같이 시작하신다면</strong>
          <br />
          과제와 예산 구간을 <a href="/business/contact">기업 제안 요청 양식</a>에 적어 주세요. 이 여섯 단계 가운데
          어디서 막혀 있는지 확인해 저희가 맡을 범위와 못 하는 일을 적어 회사 메일로 보내 드리겠습니다.
        </BizContactNote>

        <h2>4단계: 사이트는 보안 정책부터 확인합니다</h2>
        <p>
          고치기 전에 AI 크롤러가 사이트에 들어올 수 있는지부터 보세요. 보안 장비나 방화벽이 막고 있으면 콘텐츠를 아무리
          고쳐도 소용이 없습니다. 이 항목은 마케팅이 혼자 결정할 수 없어서 개발과 보안 담당자가 함께 봐야 합니다.
        </p>
        <p>
          그다음은 3단계에서 승인받은 사실을 공식 페이지에 사람과 기계가 모두 읽을 수 있는 글자로 적는 일입니다. 이미지
          안에만 있는 회사 소개나 로그인 뒤에 있는 자료는 AI가 근거로 쓰기 어렵습니다.
        </p>

        <h2>5단계: 바깥 출처는 고칠 수 있는 곳부터</h2>
        <p>
          AI는 우리 사이트만 읽지 않습니다. 기업정보 사이트, 언론 기사, 협력사 소개 페이지에 적힌 내용도 근거가 됩니다.
          어디에 어떤 정보가 있는지 목록을 만들고, 직접 고칠 수 있는 곳과 수정을 요청해야 하는 곳으로 나누세요.
        </p>
        <p>
          여기서 홍보팀의 일이 커집니다. 수정 요청은 공식 창구로 나가야 하고, 새로 내는 자료도 사실 문서와 문장이 맞아야
          합니다. 없는 평판을 글로 만들어 내려 하면 3단계에서 정한 기준과 부딪히니, 실제로 있는 사실을 잘 보이는 곳에
          놓는 데서 멈추시는 편이 안전합니다.
        </p>

        <h2>6단계: 윗선에는 한 장으로 다시 재서 보고합니다</h2>
        <p>
          보고에는 같은 질문으로 다시 잰 숫자를 올립니다. 저희 보고서 첫 장에는 카테고리 점유율, 출처 인용률, 인용 키워드,
          웹 건강도 네 칸과 지난 측정 대비 변화가 있습니다. 카테고리 점유율 0%에 출처 인용률 13%처럼 좋지 않은 숫자도
          그대로 올립니다. 질문 8개 중 1개에서 이름 없이 사이트 링크만 달렸다는 뜻이라, 두 칸을 나눠 두어야 어디부터
          고칠지 보입니다.
        </p>
        <p>
          내려간 숫자가 나왔을 때 어떻게 보고할지도 미리 정해 두세요. 앞의 의원 기록도 28번에서 25번으로 내려갔는데, 같은
          기간에 사이트가 출처로 걸린 횟수는 16번에서 21번으로 늘었습니다. 한 숫자만 올리면 이런 움직임을 설명하기
          어렵습니다.
        </p>

        <h2>GEO 도입 기간은 얼마나 잡아야 하나요</h2>
        <p>
          정해진 기간은 없고, 사이트 상태와 승인 속도에 따라 달라집니다. 저희가 공개한 기록은 모두 의원 기록이라 기업에
          그대로 대입하실 수는 없습니다. 정형외과 의원은 39일 뒤 재측정에서 숫자가 움직였고, 홈페이지를 전면 개선한
          비뇨의학과는 홈페이지 작업에 약 2개월, 안정적으로 노출되기까지 약 6개월이 걸렸습니다. 기업은 여기에 3단계 승인
          기간이 더해지니 일정표에 따로 잡아 두세요.
        </p>

        <h2>자주 묻는 질문</h2>
        <dl className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {FAQ.map((f) => (
            <div key={f.q} className="px-5 py-5">
              <dt className="font-bold text-gray-900">{f.q}</dt>
              <dd className="mt-2 text-gray-700">{f.body ?? f.a}</dd>
            </div>
          ))}
        </dl>
      </BizArticle>
    </>
  )
}
