import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 주 키워드: 아파트 엘리베이터 광고 비용
// 연관 검색어(2026-09-20 자동완성·서치콘솔 실측): 엘리베이터 광고 비용 / 아파트 엘리베이터 광고 효과 /
//   아파트 엘리베이터 광고 업체 / 포커스미디어 광고 비용 / DOOH 광고 / 아파트 광고 업체
// 매체 수치는 포커스미디어코리아 공식 사이트(2026-09-20 확인) 기준만 쓴다.
const TITLE = "아파트 엘리베이터 광고 비용은 무엇으로 정해지나: 엘리베이터TV 집행 기준"
const DESC =
  "엘리베이터 광고 비용은 단가표가 아니라 단지 수, 기간, 소재 세 가지로 정해집니다. 아파트 엘리베이터 광고 효과를 무엇으로 재는지, 업체를 고를 때 확인할 것, 병원이라면 걸리는 의료광고 심의까지 정리했습니다."
const DATE = "2026-09-20"
const URL = "https://wiztheplanning.com/guide/elevator-tv-ad-cost"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "아파트 엘리베이터 광고 비용", "엘리베이터 광고 비용", "아파트 엘리베이터 광고 효과",
    "아파트 엘리베이터 광고 업체", "포커스미디어 광고 비용", "DOOH 광고", "아파트 광고 업체",
  ],
  alternates: { canonical: "/guide/elevator-tv-ad-cost" },
  openGraph: {
    images: ["/covers/elevator-tv-ad-cost.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
  },
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
    q: "아파트 엘리베이터 광고 비용은 얼마인가요?",
    a: "단가표 한 장으로 답하기 어렵습니다. 같은 매체라도 몇 개 단지에, 몇 주 동안, 어떤 소재로 내보내느냐에 따라 금액이 달라지기 때문입니다. 매장 반경 안에 잡히는 단지 수와 세대 수를 먼저 뽑고, 그 목록으로 견적을 받는 순서가 정확합니다. 지역과 단지 규모에 따라 같은 기간이라도 차이가 납니다.",
  },
  {
    q: "엘리베이터TV 광고 효과는 어떻게 확인하나요?",
    a: "클릭이 없는 매체라서 네 가지를 같이 봅니다. 첫째 집행 전후 네이버 플레이스 유입과 전화 수, 둘째 상호 검색량 변화, 셋째 전용 할인 코드나 QR의 사용 수, 넷째 신규 손님에게 어디서 보셨는지 묻고 기록하는 것입니다. 넷 중 하나만 보면 판단이 흔들립니다.",
  },
  {
    q: "우리 동네 단지만 골라서 집행할 수 있나요?",
    a: "가능합니다. 지역과 단지를 선별해 집행하는 것이 이 매체의 장점입니다. 매장 반경을 정하고 그 안의 단지 목록과 세대 수를 받아 보시면, 광고비가 실제로 어디에 쓰이는지 눈으로 확인할 수 있습니다.",
  },
  {
    q: "DOOH 광고가 무슨 뜻인가요?",
    a: "Digital Out Of Home의 줄임말로, 집 밖에서 만나는 디지털 화면 광고를 말합니다. 옥외 전광판, 지하철 스크린, 엘리베이터TV가 모두 여기에 들어갑니다. 인쇄물과 달리 소재를 언제든 바꿀 수 있고 송출 기록이 남는다는 점이 다릅니다.",
  },
  {
    q: "병원도 엘리베이터TV 광고를 할 수 있나요?",
    a: "할 수 있지만 의료광고 사전심의를 먼저 확인해야 합니다. 의료법 제57조의 심의 대상에는 전광판이 들어가고, 의료광고심의 안내에서는 전광판을 LED·LCD·모니터 등 전류로 표시되는 모든 형태로 설명합니다. 엘리베이터TV도 모니터 매체라 해당 여부를 매체사와 심의기구에 확인한 뒤 소재를 만드는 편이 안전합니다. 심의를 염두에 두지 않고 만든 소재는 표현을 고쳐 다시 만들어야 해서 제작비와 일정이 함께 밀립니다.",
  },
  {
    q: "전단지와 비교하면 무엇이 다른가요?",
    a: "세는 단위가 다릅니다. 전단지는 몇 장을 뿌렸는지로 세고 받은 사람이 바로 버리는 경우가 많습니다. 엘리베이터TV는 같은 주민이 오르내리며 반복해서 보고, 송출 기록이 남습니다. 대신 전단지처럼 손에 쥐여 주는 정보가 아니라서 전화번호나 위치를 한 화면에 분명히 넣어야 합니다.",
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

const COST_ROWS: [string, string][] = [
  ["단지 수와 세대 수", "매장 반경 안에 몇 개 단지, 몇 세대가 잡히는지가 금액의 뼈대입니다. 반경을 넓히면 비용이 늘고 낭비도 함께 늘어납니다."],
  ["기간", "보통 주 단위나 월 단위로 끊습니다. 짧게 여러 번 나눌지, 길게 한 번에 갈지에 따라 단가가 달라집니다."],
  ["소재", "이미 영상이 있으면 송출비만, 새로 만들면 제작비가 붙습니다. 규격과 길이는 매체사 기준을 따라야 합니다."],
  ["집행 시기", "이사철이나 연말처럼 수요가 몰리는 시기는 조건이 달라질 수 있습니다."],
  ["지역", "서울과 지방, 대단지와 소규모 단지의 조건이 같지 않습니다."],
]

const STEP_ROWS: [string, string][] = [
  ["1. 반경 정하기", "손님이 실제로 오는 거리를 먼저 정합니다. 매장에서 도보 10분인지, 차로 15분인지에 따라 단지 목록이 달라집니다."],
  ["2. 단지 목록 받기", "그 반경 안의 단지명과 세대 수를 목록으로 받습니다. 여기서 '우리 손님이 살 만한 단지'인지 사장님이 직접 판단하십니다."],
  ["3. 기간과 예산 정하기", "한 달을 몰아서 할지, 두 달로 나눌지 정합니다. 한 번 보고 기억되는 매체가 아니라 반복해서 쌓이는 매체입니다."],
  ["4. 소재 제작과 검수", "규격과 길이를 맞춰 만듭니다. 업종에 따라 심의나 매체사 검수 일정이 붙습니다."],
  ["5. 송출과 측정", "집행 전 2주, 집행 중, 집행 후 2주의 숫자를 같은 기준으로 비교합니다."],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/elevator-tv-ad-cost"
        kicker="실전 전략 · 오프라인 매체"
        title={TITLE}
        description={DESC}
        date="2026년 9월 20일"
      >
        <p>
          <strong>아파트 엘리베이터 광고 비용은 단가표가 아니라 단지 수, 기간, 소재 세 가지로
          정해집니다.</strong> 그래서 같은 매체를 써도 견적이 다르게 나옵니다. 금액을 물어보기 전에
          매장 반경 안에 몇 개 단지, 몇 세대가 잡히는지부터 뽑아 보셔야 비교가 됩니다.
        </p>

        <h2>엘리베이터TV는 어떤 매체인가 (DOOH 광고의 한 종류)</h2>
        <p>
          엘리베이터TV는 아파트나 오피스 엘리베이터 안의 모니터에 광고를 내보내는 매체입니다.
          집 밖에서 만나는 디지털 화면 광고를 묶어 <strong>DOOH(Digital Out Of Home)</strong>라고
          부르는데, 옥외 전광판이나 지하철 스크린과 같은 갈래입니다.
        </p>
        <p>
          국내에서 아파트 엘리베이터TV를 가장 넓게 운영하는 곳은 포커스미디어코리아입니다. 공식
          사이트 기준으로 <strong>전국 4,600여 개 아파트 단지, 엘리베이터TV 64,000대, 하루 시청자
          680만 명</strong>이고, <strong>서울 아파트 엘리베이터의 50.3%</strong>가 이 매체라고
          밝히고 있습니다(2026년 9월 확인).
        </p>
        <p>
          광고주 입장에서 중요한 것은 규모 자체가 아니라 <strong>우리 매장 반경 안에 그 단지가 몇 개
          있느냐</strong>입니다. 전국 숫자는 견적과 관계가 없습니다.
        </p>

        <h2>엘리베이터 광고 비용을 가르는 다섯 가지</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">요소</th>
                <th className="px-4 py-3 font-bold text-gray-900">왜 금액이 달라지나</th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map(([a, b]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          저희는 포커스미디어 공식 총판이라 단가를 이 글에 적을 수 있지만 적지 않습니다. 단지 구성에
          따라 같은 예산으로 도달하는 세대 수가 크게 달라져서, 숫자 하나만 보면 오히려 잘못된 비교가
          됩니다. 반경 안 단지 목록과 세대 수를 먼저 뽑아 드리고 그 위에서 견적을 냅니다.{" "}
          <a href="/focusmedia">엘리베이터TV 광고 안내</a>에서 진행 방식을 보실 수 있습니다.
        </Callout>

        <h2>아파트 엘리베이터 광고 효과는 무엇으로 재나</h2>
        <p>
          이 매체의 약점은 분명합니다. <strong>클릭이 없습니다.</strong> 본 사람이 바로 누르지 않으니
          광고 계정 안에서 성과가 나오지 않습니다. 그래서 밖에서 네 가지를 같이 봅니다.
        </p>
        <ul>
          <CheckItem>
            <strong>플레이스 유입과 전화.</strong> 집행 전 2주와 집행 중의 네이버 플레이스 조회수,
            길찾기, 전화 수를 같은 요일 기준으로 비교합니다.
          </CheckItem>
          <CheckItem>
            <strong>상호 검색량.</strong> 광고를 본 사람은 상호를 검색합니다. 매장 이름으로 검색이
            늘었는지 보는 것이 가장 정직한 신호입니다.
          </CheckItem>
          <CheckItem>
            <strong>전용 코드나 QR.</strong> 엘리베이터TV 소재에만 쓰는 할인 코드를 넣으면 몇 명이
            들고 왔는지 셀 수 있습니다.
          </CheckItem>
          <CheckItem>
            <strong>물어보고 기록하기.</strong> 신규 손님에게 어디서 보셨는지 묻고 한 줄로 적습니다.
            두 달만 모아도 채널별 비중이 보입니다.
          </CheckItem>
        </ul>
        <p>
          숫자를 어디서 보는지는{" "}
          <a href="/guide/slow-business-checks">장사 안될 때 먼저 셀 숫자 3가지</a>에 정리한 노출·유입·연락
          기준을 그대로 쓰시면 됩니다.
        </p>

        <h2>집행 순서: 반경부터 정합니다</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">단계</th>
                <th className="px-4 py-3 font-bold text-gray-900">하는 일</th>
              </tr>
            </thead>
            <tbody>
              {STEP_ROWS.map(([a, b]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>아파트 엘리베이터 광고 업체를 고를 때 확인할 것</h2>
        <ul>
          <CheckItem>
            <strong>단지 목록을 먼저 주는가.</strong> 금액부터 말하는 곳보다, 반경 안 단지와 세대 수를
            먼저 보여주는 곳이 정확합니다.
          </CheckItem>
          <CheckItem>
            <strong>매체사와의 관계가 분명한가.</strong> 공식 총판인지 재판매인지에 따라 조건과 응대
            속도가 달라집니다.
          </CheckItem>
          <CheckItem>
            <strong>소재 제작비가 따로 적혀 있는가.</strong> 송출비와 제작비가 한 줄로 묶여 있으면
            다음 견적과 비교할 수 없습니다.
          </CheckItem>
          <CheckItem>
            <strong>집행 후 무엇을 보여주는가.</strong> 송출 보고서만 주는 곳과, 매장 쪽 숫자까지 같이
            보는 곳은 다릅니다.
          </CheckItem>
        </ul>

        <h2>어떤 업종에 맞나</h2>
        <p>
          반경 안 주민이 반복해서 오는 업종일수록 맞습니다. 학원, 병의원, 헬스장, 세탁소, 식당,
          부동산처럼 &lsquo;가까워서 가는&rsquo; 업종입니다. 실제로 저희 사이트에도{" "}
          <strong>&ldquo;헬스·피트니스 공간에서 DOOH 전략 짜줄 파트너 추천해줘&rdquo;</strong>라는
          검색으로 노출이 잡히고 있습니다. 온라인으로만 파는 브랜드라면 같은 예산을 검색과 AI 노출에
          쓰는 편이 낫습니다.
        </p>

        <h3>병원이라면 의료광고 심의를 먼저 확인하세요</h3>
        <p>
          의료법 제57조의 사전심의 대상에는 전광판이 들어가고, 의료광고심의 안내는 전광판을{" "}
          <strong>LED·LCD·모니터 등 전류로 표시되는 모든 형태</strong>로 설명합니다. 엘리베이터TV도
          모니터 매체라 해당 여부를 매체사와 심의기구에 확인한 뒤 소재를 만드는 편이 안전합니다.
          병원 광고 예산을 나누는 기준은{" "}
          <a href="/guide/hospital-marketing-cost">병원 마케팅 비용: 견적서를 나눠 보는 법</a>에
          정리했습니다.
        </p>

        <h2>온라인과 같이 쓰면 달라지는 것</h2>
        <p>
          엘리베이터TV는 이름을 알리는 데 강하고, 검색은 이미 관심이 생긴 사람을 받는 데 강합니다.
          광고를 보고 상호를 검색했는데 정보가 부실하거나 AI가 우리 가게를 모르면 거기서 끊깁니다.
          집행 전에 플레이스 정보와 홈페이지부터 정리하시는 이유입니다. 지금 AI가 우리 가게를 아는지는{" "}
          <a href="/site-check">무료 사이트 진단</a>으로 확인하실 수 있습니다.
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
