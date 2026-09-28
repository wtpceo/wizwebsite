import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 주 키워드: 병원 개원 준비 (마케팅 관점)
// 연관 검색어(2026-09-28 자동완성·1페이지 조사): 개원 마케팅 / 병원 개원 마케팅 / 병원 개원 컨설팅 /
//   의원 개원 절차 / 치과 개원 준비 / 개원 홍보
// 1페이지는 세무·인허가·컨설팅 회사가 차지. 마케팅을 언제 시작해야 하는지 역산한 글은 없었다.
// 수치는 공개된 자사 사례만 쓴다. 인허가·세무 절차는 우리 영역이 아니므로 단정하지 않는다.
const TITLE = "병원 개원 준비, 마케팅은 언제부터: 개원 90일 전부터 첫 달까지"
const DESC =
  "개원 마케팅을 개원일에 맞춰 시작하면 늦습니다. 홈페이지가 검색과 AI에 반영되는 데 시간이 걸리기 때문입니다. 개원 90일 전부터 첫 달까지 무엇을 언제 해야 하는지, 의료광고 심의 일정과 개원 첫 달 측정까지 순서대로 정리했습니다."
const DATE = "2026-09-28"
const URL = "https://wiztheplanning.com/guide/clinic-opening-marketing"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "병원 개원 준비", "개원 마케팅", "병원 개원 마케팅", "개원 홍보", "병원 개원 컨설팅",
    "치과 개원 준비", "의원 개원 마케팅",
  ],
  alternates: { canonical: "/guide/clinic-opening-marketing" },
  openGraph: {
    images: ["/covers/clinic-opening-marketing.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
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
    q: "개원 마케팅은 언제부터 시작해야 하나요?",
    a: "개원 90일 전을 권합니다. 홈페이지를 만들어도 검색엔진과 AI가 읽고 답변에 반영하기까지 시간이 걸리기 때문입니다. 저희가 홈페이지를 전면 개선한 비뇨의학과의 경우 홈페이지 작업에만 약 2개월, ChatGPT·구글·네이버에서 안정적으로 노출되기까지 약 6개월이 걸렸습니다. 개원일에 맞춰 시작하면 환자가 검색할 때 우리 병원 정보가 아직 어디에도 없습니다.",
  },
  {
    q: "개원 홍보, 무엇부터 만들어야 하나요?",
    a: "병원 이름으로 검색했을 때 나올 곳부터 만듭니다. 순서는 홈페이지, 네이버 플레이스와 지도 정보, 그다음이 광고입니다. 광고를 먼저 켜면 광고비로 데려온 환자가 도착할 곳이 없습니다. 특히 네이버는 robots.txt로 ChatGPT 같은 AI 크롤러의 접근을 막고 있어서, 블로그만 있고 홈페이지가 없으면 AI 답변에는 병원이 나오지 않습니다.",
  },
  {
    q: "병원 개원 컨설팅과 마케팅 대행은 같은 건가요?",
    a: "다릅니다. 개원 컨설팅은 입지 분석, 자금과 대출, 인허가, 장비와 인테리어, 인력 채용처럼 병원을 여는 일 전반을 봅니다. 마케팅 대행은 문을 연 뒤 환자가 병원을 찾아내는 경로를 만듭니다. 컨설팅 업체가 마케팅까지 묶어 제안하는 경우가 많은데, 계약 전에 어느 범위를 누가 하는지와 계정 명의가 누구인지를 나눠서 확인하시는 편이 좋습니다.",
  },
  {
    q: "개원 전에 의료광고 심의를 받아야 하나요?",
    a: "매체에 따라 다릅니다. 의료법 제57조와 시행령 제24조에 따라 전년도 말 기준 직전 3개월간 일일 평균 이용자 수가 10만 명 이상인 인터넷 매체와 SNS에 싣는 의료광고는 사전심의 대상이고, 신문·잡지, 현수막·벽보·전단, 교통수단 광고, 전광판도 대상에 들어갑니다. 개원 일정에 심의 기간을 넣지 않으면 소재를 다시 만들어야 해서 제작비와 집행이 함께 밀립니다. 해당 여부는 각 심의기구에 확인하세요.",
  },
  {
    q: "개원 첫 달에 광고비를 몰아 쓰는 게 좋을까요?",
    a: "권하지 않습니다. 첫 달은 어떤 검색어로 환자가 들어오는지, 전화가 몇 통 오는지 기준을 만드는 달입니다. 기준 없이 예산을 몰아 쓰면 다음 달에 무엇을 줄이고 무엇을 늘릴지 판단할 근거가 남지 않습니다. 광고 전 상태를 먼저 기록하고 시작하세요.",
  },
  {
    q: "개원할 때 병원 이름은 마케팅에 영향이 있나요?",
    a: "있습니다. 같은 지역에 비슷한 이름의 병원이 있으면 환자가 검색해서 다른 병원으로 갈 수 있고, AI도 두 병원의 정보를 섞어 답할 수 있습니다. 이름을 정하기 전에 지역명과 함께 검색해서 겹치는 곳이 있는지 확인하시고, 도메인도 같이 확보해 두시는 편이 낫습니다. 상표 문제는 변리사 확인이 필요합니다.",
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

const TIMELINE: [string, string, string][] = [
  ["개원 90일 전", "이름·도메인·검색 확인", "병원 이름을 지역명과 함께 검색해 겹치는 곳을 확인하고 도메인을 확보합니다."],
  ["개원 60일 전", "홈페이지 제작 착수", "검색엔진과 AI 크롤러가 읽을 수 있는 구조로 만듭니다. 진료과목·의료진·진료시간을 사실 그대로."],
  ["개원 30일 전", "플레이스·지도 정보 준비", "개설 신고가 끝나야 확정되는 항목(상호·주소·대표번호)을 미리 정리해 두고, 확정 즉시 등록합니다."],
  ["개원 2~3주 전", "의료광고 심의 일정 확보", "매체별 심의 대상 여부를 확인하고 소재를 만듭니다. 반려되면 수정 기간이 더 듭니다."],
  ["개원 첫 주", "기준선 기록", "AI와 검색에서 병원 이름이 어떻게 나오는지, 전화가 몇 통 오는지 시작 숫자를 남깁니다."],
  ["개원 첫 달", "광고 시작과 재측정", "예산을 몰아 쓰지 않고, 같은 질문으로 다시 재면서 무엇이 움직였는지 봅니다."],
]

const MISTAKES: string[] = [
  "홈페이지 없이 광고부터 켜기. 광고비로 데려온 환자가 도착할 곳이 없습니다.",
  "심의 일정을 빼고 개원일을 잡기. 소재를 다시 만들면 제작비와 집행이 함께 밀립니다.",
  "채널마다 진료시간이 다른 상태로 개원하기. 환자는 헛걸음하고 AI는 어느 쪽을 인용할지 판단하지 못합니다.",
  "계정을 대행사 명의로 만들기. 홈페이지 도메인, 광고 계정, 분석 계정은 병원 명의가 원칙입니다.",
  "첫 달에 예산을 몰아 쓰기. 비교할 기준이 없어 다음 달 판단이 감에 의존하게 됩니다.",
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/clinic-opening-marketing"
        kicker="업종별 가이드 · 병원·의원"
        title={TITLE}
        description={DESC}
        date="2026년 9월 28일"
      >
        <p>
          <strong>개원 마케팅은 개원일이 아니라 개원 90일 전에 시작해야 합니다.</strong> 홈페이지를
          만들어도 검색엔진과 AI가 읽어 답변에 반영하기까지 시간이 걸리기 때문입니다. 개원일에 맞춰
          시작하면, 환자가 병원 이름을 검색하는 첫날에 우리 정보가 어디에도 없습니다.
        </p>

        <h2>왜 90일인가</h2>
        <p>
          저희가 홈페이지를 전면 개선한 비뇨의학과의 경우 <strong>홈페이지 작업에만 약 2개월</strong>,
          ChatGPT·구글·네이버에서 <strong>안정적으로 노출되기까지 약 6개월</strong>이 걸렸습니다.
          정보 정합성 정리처럼 비교적 빠른 작업은 몇 주 안에 AI 답변에 반영되기 시작합니다.
        </p>
        <p>
          개원은 이 시간을 앞당길 수 있는 드문 기회이기도 합니다. 이미 문을 연 병원은 잘못 퍼진
          정보를 고치는 일부터 해야 하지만, 개원 전에는 <strong>처음부터 맞는 정보로 시작</strong>할
          수 있습니다.
        </p>

        <h2>병원 개원 준비 일정: 마케팅만 떼어 보면</h2>
        <p>
          인허가, 자금, 장비, 인력은 개원 컨설팅의 영역입니다. 여기서는 마케팅만 역산했습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[620px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">시점</th>
                <th className="px-4 py-3 font-bold text-gray-900">할 일</th>
                <th className="px-4 py-3 font-bold text-gray-900">내용</th>
              </tr>
            </thead>
            <tbody>
              {TIMELINE.map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{b}</td>
                  <td className="px-4 py-2.5 text-gray-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>개원 90일 전: 이름과 도메인</h3>
        <p>
          병원 이름을 정하기 전에 <strong>지역명과 함께 검색</strong>해 보세요. 같은 지역에 비슷한
          이름이 있으면 환자가 다른 병원으로 가고, AI도 두 병원의 정보를 섞어 답할 수 있습니다. 이름이
          정해지면 도메인을 먼저 확보합니다. 상표는 변리사 확인이 필요한 영역입니다.
        </p>

        <h3>개원 60일 전: 홈페이지가 먼저입니다</h3>
        <p>
          네이버는 robots.txt에 GPTBot, OAI-SearchBot 같은 AI 크롤러를 적어 두고 접근을 막고
          있습니다(<a href="/guide/naver-blocks-ai-crawlers">실측 기록</a>). 블로그만 열심히 해도
          ChatGPT는 병원을 읽지 못합니다. AI 답변에 나오려면 <strong>병원이 소유한 홈페이지</strong>가
          필요합니다.
        </p>
        <p>
          분량이 아니라 구조입니다. 저희가 작업한 치과에서는 167쪽짜리 사이트를 두고도 인근 3쪽짜리
          사이트가 ChatGPT에 먼저 인용되고 있었습니다. 진료과목, 진료시간, 위치, 의료진처럼 환자가
          묻는 사실을 기계가 읽을 수 있는 형태로 정리하는 것이 먼저입니다(
          <a href="/guide/case-dental-llms-factsheet">치과 사례</a>).
        </p>

        <h3>개원 30일 전: 플레이스와 지도 정보</h3>
        <p>
          상호·주소·대표번호는 개설 신고가 끝나야 확정되는 경우가 많습니다. 확정 전까지 표기안을
          정리해 두고, 확정 즉시 네이버 플레이스와 지도 서비스에 같은 값으로 등록합니다. 채널마다
          진료시간이 다르면 환자는 헛걸음하고 AI는 어느 쪽을 인용할지 판단하지 못합니다. 빠뜨리기 쉬운
          항목은 <a href="/guide/naver-place-checklist">네이버 플레이스 체크리스트</a>에 정리했습니다.
        </p>

        <h3>개원 2~3주 전: 의료광고 심의 일정</h3>
        <p>
          의료법 제57조와 시행령 제24조에 따라 <strong>전년도 말 기준 직전 3개월간 일일 평균 이용자
          수가 10만 명 이상인 인터넷 매체와 사회관계망서비스</strong>에 싣는 의료광고는 사전심의
          대상입니다. 신문·잡지, 현수막·벽보·전단, 교통수단 광고, 전광판도 대상에 들어갑니다.
        </p>
        <p>
          여기서 비용이 생기는 지점은 심의 자체가 아니라 <strong>다시 만드는 일</strong>입니다. 치료
          효과를 단정하거나 환자 치료경험담을 쓴 소재는 통과하지 못합니다. 개원일을 먼저 박아 두고
          소재를 나중에 만들면 일정이 밀립니다. 해당 여부는 각 의료광고심의위원회에 확인하세요. 이 글은
          법률 자문이 아닙니다.
        </p>

        <h3>개원 첫 주: 시작 숫자를 남깁니다</h3>
        <p>
          개원 첫 주에 기록해 둘 것은 네 가지입니다. 병원 이름으로 검색했을 때 무엇이 나오는지,
          ChatGPT와 네이버 AI에 &ldquo;○○동 ○○과 추천&rdquo;을 물었을 때 병원이 나오는지, 플레이스
          노출과 조회가 몇 건인지, 대표번호로 전화가 몇 통 오는지입니다. 확인 순서는{" "}
          <a href="/guide/check-hospital-ai-visibility">원장님이 5분 만에 직접 확인하는 법</a>에
          정리했습니다.
        </p>
        <Callout>
          이 기록이 있어야 나중에 무엇이 좋아졌는지 말할 수 있습니다. 저희가 맡은 수도권의 한
          정형외과는 계약 전 ChatGPT에서 질문 10개 중 4개에만 나왔고 언급률이 17%였는데, 39일 뒤 같은
          모델·같은 질문으로 다시 재자 10개 모두, <strong>언급률 93%</strong>가 됐습니다. 시작 시점을
          같은 방법으로 재 두지 않았다면 이 비교는 불가능했습니다(
          <a href="/guide/case-orthopedic-chatgpt">정형외과 사례</a>).
        </Callout>

        <h2>개원 마케팅과 병원 개원 컨설팅은 다릅니다</h2>
        <p>
          개원 컨설팅은 입지, 자금, 인허가, 장비, 인력처럼 <strong>병원을 여는 일</strong>을 봅니다.
          마케팅은 문을 연 뒤 <strong>환자가 병원을 찾아내는 경로</strong>를 만듭니다. 컨설팅 업체가
          마케팅까지 묶어 제안하는 경우가 많은데, 계약 전에 세 가지만 나눠서 확인하세요.
        </p>
        <ul>
          <CheckItem><strong>범위.</strong> 홈페이지·광고·콘텐츠 중 어디까지가 컨설팅 비용에 들어 있는지.</CheckItem>
          <CheckItem><strong>명의.</strong> 도메인, 광고 계정, 분석 계정이 병원 명의로 만들어지는지.</CheckItem>
          <CheckItem><strong>종료 후.</strong> 계약이 끝나면 홈페이지와 콘텐츠를 병원이 계속 쓸 수 있는지.</CheckItem>
        </ul>
        <p>
          견적서를 광고비·대행료·제작비로 나눠 보는 방법은{" "}
          <a href="/guide/hospital-marketing-cost">병원 마케팅 비용</a>에 정리했습니다.
        </p>

        <h2>개원 초기에 자주 보는 실수</h2>
        <ul>
          {MISTAKES.map((m) => (
            <CheckItem key={m}>{m}</CheckItem>
          ))}
        </ul>

        <h2>개원 전이라면 지금 확인해 보세요</h2>
        <p>
          아직 문을 열기 전이어도 확인할 수 있는 것이 있습니다. 개원 예정지 주변에서 환자가 쓸 법한
          질문을 ChatGPT나 네이버 AI에 넣어 보면, <strong>어떤 병원이 이미 그 자리를 차지하고
          있는지</strong>가 보입니다. 그 자리에 들어가려면 무엇이 필요한지가 개원 마케팅의 출발점입니다.
        </p>
        <p>
          저희는 병원·의원에 한해 조건 없이 무료로 진단해 드립니다. 네이버 AI·ChatGPT·제미나이에 환자
          질문을 반복해 물어 언급 비율과 잘못된 정보를 정리해 보내드리고, 진단만 받고 마치셔도 됩니다.{" "}
          <a href="/medical-geo-agency">병원 GEO 대행 안내</a>에서 진행 방식을 먼저 보셔도 좋습니다.
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
