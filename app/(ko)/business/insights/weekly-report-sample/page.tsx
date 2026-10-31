import type { Metadata } from "next"
import BizArticle, { BizContactNote } from "@/components/business/BizArticle"

// 계약하면 무엇을 받는지 소개하는 글 (작가 원고 2026-10-29).
// 주 키워드: 마케팅 성과 측정 지표
// 연관 검색어(2026-09-19 자동완성 kpi 군집): 마케팅 KPI 설정 / 마케팅 성과 측정 방법 /
//   브랜드 마케팅 성과 측정 / 데이터 기반 마케팅 사례
// 숫자 출처: 자사 주간 리포트 42주차(2026년 10월 12~18일, 10월 19일 측정). 관제 화면 숫자는 기준이 달라 쓰지 않는다.
// PDF 원본은 글에 걸지 않고 제안 요청 회신 메일로 보낸다. '매주 측정'을 새로 강조하지 않는다(10/29 총괄 요청).
const TITLE = "마케팅 성과 측정 지표: 계약하면 받는 주간 보고서 6쪽"
const DESC =
  "위즈더플래닝과 월 운영 계약을 맺으면 받는 주간 보고서를 저희 회사 것으로 보여 드립니다. 첫 장의 지표 네 개와 엔진별 표, 카테고리 점유율 0%처럼 안 좋은 숫자까지 그대로입니다."
const DATE = "2026-10-31"
const URL = "https://wiztheplanning.com/business/insights/weekly-report-sample"

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | 위즈더플래닝` },
  description: DESC,
  keywords: ["마케팅 성과 측정 지표", "마케팅 KPI 설정", "마케팅 성과 측정 방법", "브랜드 마케팅 성과 측정", "데이터 기반 마케팅 사례"],
  alternates: { canonical: "/business/insights/weekly-report-sample" },
  openGraph: { images: ["/covers/business-weekly-report-sample.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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

const METRICS: [string, string, string][] = [
  ["카테고리 점유율", "0%", "회사 이름을 넣지 않은 일반 질문 8개 가운데 AI 답변에 저희 이름이 나온 비율"],
  ["출처 인용률", "13%", "같은 질문들에서 AI가 저희 사이트를 출처 링크로 단 비율"],
  ["인용 키워드", "3/9", "추적하는 키워드 9개 가운데 한 번이라도 인용된 수"],
  ["웹 건강도", "100점", "AI와 검색엔진이 사이트를 읽어 갈 때 걸리는 문제가 얼마나 적은지"],
]

const ENGINES: [string, number, number, number][] = [
  ["Gemini", 2, 2, 10],
  ["ChatGPT", 2, 2, 10],
  ["Perplexity", 3, 2, 10],
]

const FAQ = [
  {
    q: "샘플 보고서를 받아 볼 수 있나요?",
    a: "네. 제안 요청을 주시면 회신 메일에 이 글의 6쪽 PDF를 같이 보내 드립니다. 저희 회사를 잰 42주차 보고서입니다.",
  },
  {
    q: "측정 화면 계정을 받을 수 있나요?",
    a: "아니요. 측정 시스템은 사내에서만 쓰고 계정을 따로 드리지 않습니다. 광고주께는 정리된 보고서로 보내 드립니다.",
  },
  {
    q: "마케팅 성과 측정 지표는 무엇으로 정하나요?",
    a: "마케팅이 직접 책임질 수 있는 단계까지 끊어서 정합니다. 주간 보고서가 맡는 노출 단계에서는 카테고리 점유율, 출처 인용률, 인용 키워드, 웹 건강도 네 가지를 봅니다. 문의와 매출은 광고주 쪽 숫자와 따로 맞춥니다.",
  },
  {
    q: "숫자가 나쁘게 나오면 어떻게 하나요?",
    a: "같은 자리에 그대로 적고, 그 숫자에서 다음 할 일을 뽑습니다. 이 샘플의 카테고리 점유율 0%도 고치지 않고 옮겼고, 그 아래에 미인용 키워드를 공략하는 일이 다음 할 일로 붙어 있습니다.",
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
        href="/business/insights/weekly-report-sample"
        kicker="보고 체계"
        title={TITLE}
        description={DESC}
        date="2026년 10월 31일"
        ctaTitle="보고서 샘플을 회신 메일로 받아 보세요"
        ctaBody="과제와 예산 구간을 남겨 주시면 이 글의 6쪽 보고서 PDF를 회신 메일에 같이 넣어 보내 드리겠습니다. 월 운영은 월 300만 원부터, 최소 3개월이고 기준선 측정은 별도입니다."
      >
        <p>
          <strong>저희와 월 운영 계약을 맺으면 AI 검색 노출과 사이트 상태를 정리한 주간 보고서를 받으십니다.</strong>{" "}
          첫 장에는 지표 네 개(카테고리 점유율, 출처 인용률, 인용 키워드, 웹 건강도)와 지난 측정 대비 변화가 있고,
          그 뒤로 엔진별 표와 달라진 것, 다음에 할 일이 이어집니다. 아래는 저희 회사를 잰 2026년 42주차 보고서(10월
          19일 측정)를 그대로 옮긴 것입니다.
        </p>

        <h2>광고주 보고서 대신 저희 보고서를 보여 드리는 이유</h2>
        <p>
          광고주 보고서에는 그 회사의 숫자가 들어 있어서 밖에 보여 드릴 수 없습니다. 그래서 같은 시스템이 같은
          양식으로 만든 저희 회사 보고서를 샘플로 씁니다. 저희 숫자는 좋은 편이 아닌데, 그 점도 고치지 않고
          옮겼습니다. 측정 도구와 화면은 <a href="/how-we-measure">측정 방식</a> 페이지에 따로 공개해 두었습니다.
        </p>

        <h2>첫 장: 마케팅 성과 측정 지표 네 개</h2>
        <p>첫 장에는 담당자가 상사에게 그대로 옮길 수 있는 숫자만 둡니다. 42주차 저희 숫자는 이렇습니다.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">지표</th>
                <th className="px-4 py-3 font-bold text-gray-900">42주차</th>
                <th className="px-4 py-3 font-bold text-gray-900">뜻</th>
              </tr>
            </thead>
            <tbody>
              {METRICS.map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                  <td className="px-4 py-2.5 text-gray-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <figure className="mt-6">
          <img
            src="/report/business-report-summary.jpg"
            alt="위즈더플래닝 자사 42주차 주간 보고서 첫 장: 카테고리 점유율, 출처 인용률, 인용 키워드, 웹 건강도 네 지표와 지난 측정 대비 변화"
            width={1200}
            height={1221}
            loading="lazy"
            className="w-full rounded-xl border border-slate-200"
          />
          <figcaption className="mt-2 text-sm text-gray-500">주간 보고서 첫 장, 42주차 지표 네 개와 지난 측정 대비 변화</figcaption>
        </figure>
        <p>
          카테고리 점유율이 0%인데 출처 인용률이 13%인 건, 질문 8개 중 1개에서 저희 이름 없이 사이트 링크만 출처로
          달렸기 때문입니다. 이름은 안 불렸지만 AI가 저희 글을 근거로는 읽었다는 뜻입니다. 두 숫자를 한 칸에 합치면
          이런 차이가 보이지 않아서 나눠 둡니다.
        </p>
        <p>
          카테고리 점유율을 첫 칸에 두는 이유도 있습니다. 회사 이름을 대고 물으면 AI는 대개 그 회사를 찾아 줍니다.
          아직 저희를 모르는 사람이 일반 질문을 했을 때 나오는지가 새 고객 앞의 자리라서, 이 숫자를 가장 앞에 둡니다.
        </p>
        <h3>네이버 AI 브리핑은 기본 보고서에서 뺍니다</h3>
        <p>
          네이버 AI 브리핑은 결과를 약속하기 어려운 채널이라 기본 보고서에서 빼고, 네이버에서 잘 보이는 회사만 넣어서
          보내 드립니다. 그래서 42주차 표의 엔진은 Gemini, ChatGPT, Perplexity 세 곳입니다.
        </p>

        <h2>마케팅 성과 측정 방법: 한 화면이 아니라 비율로</h2>
        <p>
          같은 질문도 물을 때마다 답이 달라집니다. 한 번 캡처한 화면으로 판단하면 그날 운에 따라 결론이 뒤집혀서,
          엔진마다 같은 조건으로 묻고 받은 응답 수를 분모로 적습니다. 42주차는 각 엔진의 API로 로그인 없이, 같은 질문
          10개를 엔진마다 한 번씩 물었습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">엔진</th>
                <th className="px-4 py-3 font-bold text-gray-900">출처 인용</th>
                <th className="px-4 py-3 font-bold text-gray-900">본문 언급</th>
                <th className="px-4 py-3 font-bold text-gray-900">응답 수</th>
              </tr>
            </thead>
            <tbody>
              {ENGINES.map(([a, b, c, d]) => (
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
        <figure className="mt-6">
          <img
            src="/report/business-report-engines.jpg"
            alt="주간 보고서의 엔진별 표: Gemini, ChatGPT, Perplexity의 출처 인용과 본문 언급을 응답 수를 분모로 적었다"
            width={1200}
            height={1077}
            loading="lazy"
            className="w-full rounded-xl border border-slate-200"
          />
          <figcaption className="mt-2 text-sm text-gray-500">엔진별로 응답 수를 분모로 둔 인용·언급 표</figcaption>
        </figure>
        <p>
          출처 인용은 AI가 답의 근거로 사이트 링크를 단 경우이고, 본문 언급은 답변 글 안에 이름이 나온 경우입니다.
          이름만 불린 것과 사이트를 읽고 근거로 쓴 것은 다른 일이라 칸을 나눕니다.
        </p>

        <h2>얻은 것과 잃은 것을 같이 적습니다</h2>
        <p>
          보고서에는 지난 측정과 비교해 새로 인용된 키워드와 인용을 잃은 키워드가 같은 자리에 찍힙니다. 42주차는 둘 다
          없었습니다. 사이트 이슈도 심각 0건, 경고 3건, 참고 12건으로 지난번과 같았습니다. 숫자가 움직이지 않은 주에는
          움직이지 않았다고 적습니다.
        </p>
        <p>
          마지막 쪽은 다음에 할 일입니다. 42주차에는 아직 인용되지 않은 키워드 6개(SEO와 GEO 차이, GEO란 무엇인가 등)에
          근거가 되는 콘텐츠를 만드는 일, 그리고 경고 이슈 3건을 고치는 일이 적혔습니다. 숫자 바로 다음에 할 일이 붙어
          있어야 보고서가 회의 자료로 끝나지 않습니다.
        </p>

        <BizContactNote>
          이 글에 나온 6쪽짜리 보고서는 PDF로 보내 드릴 수 있습니다. <a href="/business/contact">기업 제안 요청 양식</a>으로
          문의를 주시면 회신 메일에 샘플을 같이 넣어 드리겠습니다.
        </BizContactNote>

        <h2>마케팅 KPI 설정은 계약 전에 합니다</h2>
        <p>
          보고서의 숫자가 의미를 가지려면 시작 시점의 숫자가 있어야 합니다. 그래서 저희는 계약 전에 기준선을 한 번 재고,
          어떤 질문과 키워드를 고정해서 볼지를 먼저 정합니다. 이 일은 월 운영료와 별도인 온보딩 단계에서 하는데, 왜 나눠
          받는지는 <a href="/business/insights/marketing-agency-fee">마케팅 대행사 수수료 구조 3가지</a>에 적었습니다.
        </p>
        <p>
          성과를 노출, 유입, 전환, 그 뒤 단계로 나눠 정의하는 방법은{" "}
          <a href="/business/insights/marketing-agency-rfp">마케팅 대행사 RFP에 넣어야 할 12가지</a>에 정리했습니다. 주간
          보고서는 그중 노출 단계를 맡습니다.
        </p>

        <h2>이 보고서로 알 수 없는 것</h2>
        <p>
          이 보고서는 AI 검색과 사이트 상태를 보여 줍니다. 문의나 매출처럼 광고주 쪽에 있는 숫자는 여기에 담기지 않습니다.
          그런 숫자는 광고주의 관리자 화면이나 분석 도구와 따로 맞춰 봐야 하는데, 저희가 실제로 맞춰 본 기록은{" "}
          <a href="/business/insights/case-payment-meta-ads">결제 서비스 기업 메타 광고 3주 사례</a>에 있습니다.
        </p>

        <h2>자주 묻는 질문</h2>
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
