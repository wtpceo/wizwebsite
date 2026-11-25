import type { Metadata } from "next"
import BizArticle from "@/components/business/BizArticle"
import { share } from "@/lib/share-meta"

// 작가 세션 원고(2026-11-18, 27.자사브랜딩/20_글/원고/2026-11-18_SEO컨설팅_첫달실측사례.md). 문장은 Gemini가 썼고 글자 그대로 옮겼다.
// 대표 11/18: "seo 관련 키워드로 홈페이지에 글하나 올리자". 서비스 소개(/services/search)와 의도를 나눈 '첫 달 실측 사례' 글
// 주 키워드: SEO 컨설팅. 연관 검색어: SEO 업체, SEO 대행사, SEO 컨설팅 비용, 기업 SEO, 구글 서치콘솔
// 표지는 숏폼 제작 글과 같은 틀(30_디자인/작업/2026-11-18_SEO컨설팅글). 제목: 접미사 포함 50자
const TITLE = "SEO 컨설팅 맡기면 첫 달에 무엇을 보고 바꾸나: 기업 SEO 실측 사례"
const DESC =
  "SEO 컨설팅 첫 달에는 노출 검색어 대조, 페이지 제목 수정, 내부 중복 점검, 색인 요청부터 합니다. 구글 서치콘솔 실측 사례로 바뀌는 것과 산출물을 확인하세요."
const DATE = "2026-11-18"
const PATH = "/business/insights/seo-consulting"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/business-seo-consulting.jpg"

export const metadata: Metadata = share({
  title: { absolute: `${TITLE} | 위즈더플래닝` },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { images: [COVER], title: TITLE, description: DESC, url: URL, type: "article" },
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `https://wiztheplanning.com${COVER}`,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "ko",
  author: { "@id": "https://wiztheplanning.com/#organization" },
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  mainEntityOfPage: URL,
}

const FAQ = [
  {
    q: "SEO 컨설팅 비용은 얼마이고 계약 기간은 어떻게 되나요?",
    a: "월 운영 계약은 최소 3개월 단위로 진행합니다. 금액은 맡길 범위를 듣고 제안서로 안내해 드리며, 계약 전 초기 상태를 파악하는 기준선 측정은 별도 항목으로 두어 진행합니다. 에이전시 비용 책정 방식이 궁금하시다면 마케팅 대행사 수수료 구조 글을 참고해 보세요.",
    link: { href: "/business/insights/marketing-agency-fee", text: "마케팅 대행사 수수료 구조" },
  },
  {
    q: "SEO 대행사에 맡기면 검색 첫 페이지 노출을 보장해 주나요?",
    a: "보장하지 않습니다. 검색 순위와 AI 답변 구성은 구글, 네이버 등 각 플랫폼의 알고리즘이 결정합니다. 순위 보장을 내거는 곳보다는 착수 전 기준선 대비 노출 검색어 수와 유입 변화를 투명하게 실측해 보고하는 곳을 고르셔야 안전합니다.",
  },
  {
    q: "SEO 컨설팅을 시작하면 효과가 나타나기까지 얼마나 걸리나요?",
    a: "사이트의 기존 상태와 업종 경쟁도에 따라 다릅니다. 기존 페이지를 다듬어 빠르게 반응이 오는 경우 약 2개월 안에 인용 변화가 보이기도 하지만, 사이트를 전면 재구축한 의료기관 사례처럼 개편에 약 2개월, 주요 검색엔진과 AI에서 안정적으로 노출되기까지 약 6개월이 걸리는 경우도 있습니다.",
  },
  {
    q: "기존 검색최적화(SEO)만 하면 되나요, AI 검색(GEO)도 같이 해야 하나요?",
    a: "함께 보시는 것이 효율적입니다. 생성형 AI의 답변은 검색엔진이 수집한 색인 데이터를 바탕으로 만들어지며, 챗GPT 이용자의 91.4%가 네이버도 함께 사용하며 교차 검색을 합니다(모바일인덱스 조사, 전자신문 2026-10-26). 사이트 구조를 고칠 때 두 기준을 한 번에 맞추는 편이 중복 투자를 막습니다.",
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

// FAQ 답 안의 링크 문구를 화면에서만 링크로 바꾼다. 구조화 데이터는 글자 그대로
function FaqAnswer({ a, link }: { a: string; link?: { href: string; text: string } }) {
  if (!link) return <>{a}</>
  const i = a.indexOf(link.text)
  if (i < 0) return <>{a}</>
  return (
    <>
      {a.slice(0, i)}
      <a href={link.href}>{link.text}</a>
      {a.slice(i + link.text.length)}
    </>
  )
}

const TABLE = [
  ["홈페이지 관련", "'홈페이지' 포함 5개", "24회 (0회)", "'홈페이지 제작 업체' 월 1,000회"],
  ["SEO 관련", "'seo' 포함 51개", "456회 (1회)", "'SEO 컨설팅' 월 590회, 'SEO 업체' 월 480회"],
  ["광고 대행 관련", "'광고 대행' 포함 4개", "4회 (0회)", "'광고 대행사' 월 2,400회"],
]

const code = "rounded bg-slate-100 px-1.5 py-0.5 text-[0.92em] text-[#0F1B2D]"

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BizArticle
        href={PATH}
        kicker="기업 마케팅 · 검색"
        title={TITLE}
        description={DESC}
        date="2026년 11월 18일"
        ctaTitle="우리 회사 사이트는 주력 서비스 검색어에 제대로 나오고 있을까요?"
        ctaBody="사이트 주소와 고민 중인 검색어를 남겨 주시면 맡길 범위를 듣고 제안서로 안내해 드립니다."
      >
        <p>
          <strong>{"SEO 컨설팅을 맡기면 첫 달에 사이트에서 네 가지를 봅니다. 실제 유입 검색어와 파는 서비스의 대조, 페이지 제목의 검색어 포함 여부, 페이지 간 키워드 중복, 새 글의 색인 등록 상태입니다."}</strong>
          {" 품의를 앞두고 실제 작업과 산출물이 궁금한 분들을 위해, 위즈더플래닝이 자사 사이트(wiztheplanning.com)에 먼저 실행한 실측 기록을 공개합니다."}
        </p>
        <p>{"2016년에 문을 열어 광고주 7,000여 곳과 일해 온 검색·AI 마케팅 에이전시라도 예외는 아니었습니다. 마케터와 개발자가 한 팀에서 사이트 구조와 원고 기획을 함께 짜는 우리 역시, 숫자로 뜯어보니 정작 파는 서비스 이름으로는 검색에 거의 잡히지 않고 있었습니다."}</p>

        <h2>{"구글 서치콘솔로 본 현실: 파는 서비스와 노출 검색어의 어긋남"}</h2>
        <p>{"첫 달 가장 먼저 하는 일은 '우리 회사가 파는 것'과 '검색엔진이 우리 사이트를 보여 주는 검색어'를 나란히 놓는 것입니다."}</p>
        <p>{"구글 서치콘솔(2026-08-10~11-08, 90일 기준)로 자사 사이트를 조회해 보니 노출된 검색어는 총 506개, 노출 9,485회, 클릭 196회였습니다. 언뜻 노출이 일어나는 듯 보이지만 속을 들여다보면 달랐습니다. 'geo'가 들어간 검색어가 163개, 노출 5,675회로 대부분을 차지했습니다."}</p>
        <p>{"반면 우리가 주력으로 제공하는 다른 서비스들의 성적표는 초라했습니다. 같은 기간 구글 서치콘솔 실측치와 구글 키워드 플래너의 월평균 검색량(대한민국, 2025-10~2026-09 평균, 2026-11-05 조회)을 대조한 표입니다."}</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-[13px] sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-3 py-3 font-bold text-gray-900 sm:px-4">{"구분"}</th>
                <th className="px-3 py-3 font-bold text-gray-900 sm:px-4">{"우리 사이트 노출 검색어 수"}</th>
                <th className="px-3 py-3 font-bold text-gray-900 sm:px-4">{"노출수 (클릭수)"}</th>
                <th className="px-3 py-3 font-bold text-gray-900 sm:px-4">{"실제 시장 월평균 검색량"}</th>
              </tr>
            </thead>
            <tbody>
              {TABLE.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100 align-top">
                  <td className="px-3 py-2.5 font-semibold text-gray-900 sm:whitespace-nowrap sm:px-4">{r[0]}</td>
                  <td className="px-3 py-2.5 text-gray-700 sm:px-4">{r[1]}</td>
                  <td className="px-3 py-2.5 text-gray-700 sm:whitespace-nowrap sm:px-4">{r[2]}</td>
                  <td className="px-3 py-2.5 text-gray-700 sm:px-4">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{"고객들이 구글에서 매달 수백, 수천 번씩 '홈페이지 제작 업체'나 'SEO 컨설팅'을 찾고 있는데도, 정작 서비스를 파는 우리 사이트는 그 길목에 서 있지 못했던 것입니다. 담당자분께서도 지금 자사 구글 서치콘솔의 '실적' 탭을 열어 주력 제품명을 검색해 보시면 같은 점검을 해 보실 수 있습니다."}</p>

        <h2>{"기업 SEO 첫 달에 사이트에서 직접 고치고 확인하는 것들"}</h2>
        <p>{"현실을 숫자로 확인했다면 사이트의 제목, 역할 분담, 수집 상태를 차례로 손봅니다. 개발자와 마케터가 함께 움직여야 빠르게 끝나는 작업입니다."}</p>

        <h3>{"1. 페이지 제목(Title)에 고객이 실제로 치는 말 넣기"}</h3>
        <p>{"서비스 페이지 제목이 공급자 중심의 설명으로 되어 있으면 검색엔진은 고객의 검색어와 연결해 주지 않습니다. 우리는 2026년 11월 10일, 실제 검색량이 확인된 단어를 앞세워 주요 서비스 페이지의 제목을 바꿨습니다."}</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong>{"AI 검색 최적화 페이지"}</strong>
            <ul className="mt-2 list-[circle] space-y-1.5 pl-5">
              <li>{"변경 전: "}<code className={code}>{"AI 검색 최적화 대행: GEO·SEO·네이버 플레이스·브랜드 평판 관리"}</code></li>
              <li>{"변경 후: "}<code className={code}>{"SEO 컨설팅·GEO 대행사: AI 검색 최적화와 브랜드 평판 관리"}</code></li>
            </ul>
          </li>
          <li>
            <strong>{"홈페이지 제작 페이지"}</strong>
            <ul className="mt-2 list-[circle] space-y-1.5 pl-5">
              <li>{"변경 전: "}<code className={code}>{"홈페이지 제작 대행: 사람과 AI가 정확히 읽는 웹사이트 구축·고도화·유지관리"}</code></li>
              <li>{"변경 후: "}<code className={code}>{"홈페이지 제작 업체: 사람과 AI가 정확히 읽는 웹사이트 제작·고도화"}</code></li>
            </ul>
          </li>
        </ul>
        <p>{"제목을 바꿨다고 당장 다음 날 순위가 뛰지는 않습니다. 변경 후 2~4주 뒤에 서치콘솔에서 페이지별 노출 검색어를 같은 방식으로 다시 측정하기로 했으며, 아직 그 결과는 나오지 않았습니다. 컨설팅에서도 추측으로 효과를 단정하지 않고 전후 실측치만 비교합니다."}</p>

        <h3>{"2. 내 페이지끼리 같은 검색어를 나눠 갖지 않게 교통정리"}</h3>
        <p>{"새 키워드를 페이지에 입히기 전에는, 이미 그 검색어로 노출되고 있는 다른 내부 페이지가 없는지부터 봐야 합니다."}</p>
        <p>{"2026년 11월 3일, 'SEO 업체'(구글 월 480회)를 서비스 페이지의 핵심 키워드로 정하기 전 구글 서치콘솔 90일 자료를 뒤졌습니다. 'seo 업체', 'seo 대행', 'seo 대행사'(구글 월 320회), 'seo 컨설팅' 네 개 모두 우리 사이트 어느 페이지에도 노출이 잡히지 않는 무주공산임을 확인하고 서비스 페이지에 배정했습니다."}</p>
        <p>{"반면 'seo geo'라는 검색어는 이미 "}<a href="/guide/geo-vs-seo">{"GEO와 SEO 차이"}</a>{" 가이드 글이 노출을 받고 있었습니다. 개념을 알아보는 검색과 업체를 찾는 검색은 의도가 다르므로 이 글은 그대로 두었습니다. 대신 업체를 추천받으려는 긴 질문형 검색어를 받는 'GEO 대행사 고르는 법' 글에서는 서비스 페이지로 링크를 걸어 안내판 역할을 맡겼습니다."}</p>

        <h3>{"3. 새 글을 올린 날 검색엔진에 직접 알리기"}</h3>
        <p>{"좋은 글을 써서 홈페이지에 올리기만 해서는 검색 결과에 바로 나오지 않습니다. 실제로 2026년 11월 17일 새 글을 발행한 직후 구글 서치콘솔에서 URL 검사를 했을 때 상태는 'Google에 등록되어 있지 않음'이었습니다."}</p>
        <p>{"그래서 새 페이지가 올라가면 그날 바로 세 곳의 문을 두드립니다. 구글 서치콘솔 URL 검사로 색인을 요청하고, 네이버 서치어드바이저에 수집을 요청하며, 빙(Bing)에는 IndexNow로 알림을 보냅니다."}</p>

        <h3>{"4. 검색 목록 다음 단계인 AI 답변까지 함께 보기"}</h3>
        <p>{"요즘 실무자들이 기업 SEO를 검토할 때 빼놓지 않는 것이 챗GPT 같은 생성형 AI 검색입니다. SEO가 검색 결과 목록의 노출 순위를 다룬다면, GEO는 생성형 AI 답변 안의 브랜드 인용과 추천을 다룹니다."}</p>
        <p>{"AI 답변은 결국 검색엔진이 색인해 둔 웹 문서를 바탕으로 만들어지기 때문에 둘을 떼어 놓고 볼 수 없습니다. 모바일인덱스 조사에 따르면 챗GPT 이용자의 91.4%는 네이버도 함께 씁니다(전자신문, 2026-10-26). AI에게 추천받은 업체 이름을 포털 검색창에 다시 쳐서 확인한다는 뜻입니다. 기업의 도입 흐름이 궁금하다면 "}<a href="/business/insights/enterprise-geo-adoption">{"기업 GEO 도입 순서 6단계"}</a>{"에서 전체 그림을 보실 수 있고, 당장 우리 회사 사이트의 상태가 궁금하다면 "}<a href="/site-check">{"무료 홈페이지 SEO·GEO 진단"}</a>{"에 주소만 넣어 바로 확인해 보실 수 있습니다."}</p>

        <h2>{"SEO 업체·대행사 검토 시 품의서에 들어갈 산출물과 기간"}</h2>
        <p>{"내부 품의를 올릴 때 윗선에서 가장 궁금해하는 것은 '무엇을 보고받느냐'와 '언제쯤 변화가 보이느냐'입니다."}</p>
        <p>{"위즈더플래닝은 자체 AI 검색 관제 솔루션인 realGEO로 사이트 진단과 키워드 현황을 추적합니다. 계약이 시작되면 착수 전에 재 둔 '기준선' 숫자와, 작업 뒤 같은 방식으로 다시 잰 숫자를 있는 그대로 나란히 놓아 비교합니다. 매주 어떤 지표를 받아 보게 되는지는 "}<a href="/business/insights/weekly-report-sample">{"계약하면 받는 주간 보고서 6쪽 샘플"}</a>{"에서 실제 양식 그대로 확인하실 수 있습니다."}</p>
        <p>{"다만 특정 순위나 AI 노출을 보장한다는 약속은 하지 않습니다. 노출 순위와 답변 구성은 각 검색엔진과 플랫폼이 정하는 영역이기 때문입니다. 대신 검색엔진과 AI가 사이트를 정확히 읽고 수집할 수 있는 구조와 콘텐츠를 빈틈없이 만듭니다."}</p>
        <p>{"성과가 눈에 보이기까지의 시간은 업종과 사이트의 처음 상태에 따라 다릅니다. 빠른 경우 약 2개월 안에 인용 변화가 관측되기도 합니다. 사이트를 전면 재구축했던 한 비뇨의학과 사례의 경우, 개편 작업에 약 2개월이 걸렸고 ChatGPT·구글·네이버에서 안정적으로 노출이 잡히기까지 약 6개월이 걸렸습니다. 세부 과업 범위는 "}<a href="/services/search">{"SEO 컨설팅·GEO 대행 서비스 안내"}</a>{"에 정리해 두었습니다."}</p>

        <h2>자주 묻는 질문</h2>
        <dl className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {FAQ.map((f) => (
            <div key={f.q} className="px-5 py-5">
              <dt className="font-bold text-gray-900">{f.q}</dt>
              <dd className="mt-2 text-gray-700">
                <FaqAnswer a={f.a} link={"link" in f ? f.link : undefined} />
              </dd>
            </div>
          ))}
        </dl>
      </BizArticle>
    </>
  )
}
