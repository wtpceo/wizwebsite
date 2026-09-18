import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 → 현재 35자
const TITLE = "병원 마케팅 비용: 견적서를 광고비·대행료·제작비로 나눠 보는 법"
const DESC =
  "매달 나가는 병원 마케팅비가 적정한지 판단하려면 견적서부터 나눠 봐야 합니다. 광고비·대행료·제작비가 한 줄로 묶인 견적서에서 확인할 6가지, 병원이라 더 헷갈리는 성과 측정, 의료광고 심의가 비용에 붙는 지점을 정리했습니다."
const DATE = "2026-09-18"
const URL = "https://wiztheplanning.com/guide/hospital-marketing-cost"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "병원 마케팅 비용", "병원 마케팅 대행사", "병원 광고 대행사", "치과 마케팅 대행사",
    "병원 마케팅 현실", "병원 마케팅 견적", "의원 마케팅 비용", "피부과 마케팅 비용",
  ],
  alternates: { canonical: "/guide/hospital-marketing-cost" },
  openGraph: {
    images: ["/covers/hospital-marketing-cost.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
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
    q: "병원 마케팅 비용은 어떻게 구성되나요?",
    a: "크게 넷입니다. 첫째 매체비는 네이버 검색광고, 메타 광고처럼 플랫폼에 직접 나가는 돈입니다. 둘째 대행료는 그 매체를 운영하고 관리하는 인건비 성격의 비용입니다. 셋째 제작비는 홈페이지, 사진·영상, 콘텐츠처럼 분량에 비례해 드는 비용이고 자산으로 남습니다. 넷째로 병원에는 의료광고 심의 대응이 붙습니다. 견적서가 이 넷을 나누지 않고 '월 얼마'로만 적혀 있으면 무엇을 사는지 알 수 없으므로 항목을 나눠 달라고 요청하는 것이 맞습니다.",
  },
  {
    q: "대행료는 광고비의 몇 퍼센트가 적정한가요?",
    a: "업종과 작업량에 따라 달라서 정해진 비율이 있다고 말하기 어렵습니다. 비율보다 구조를 보는 편이 안전합니다. 대행료가 광고비에 연동되면 대행사는 광고비를 늘릴 이유가 생기고, 정액이면 작업량이 줄어도 금액이 같습니다. 어느 쪽이든 '무엇을 몇 건 하는지'와 '얼마나 자주 보고하는지'가 견적서에 적혀 있어야 비교가 됩니다.",
  },
  {
    q: "광고 계정은 누구 명의로 만들어야 하나요?",
    a: "병원 명의를 권합니다. 계정이 대행사 명의로 되어 있으면 대행사를 바꿀 때 그동안 쌓인 광고 데이터와 전환 기록을 가져오기 어렵습니다. 홈페이지 도메인, 분석 도구 계정도 같습니다. 계약 종료 시 계정과 산출물이 누구에게 남는지는 계약서에 적어 두는 것이 좋습니다.",
  },
  {
    q: "병원 마케팅 성과는 무엇으로 봐야 하나요?",
    a: "노출, 사이트 방문, 전화·예약 문의, 실제 내원 네 단계로 나눠 세면 어디서 끊기는지 보입니다. 병원은 문의가 전화로 오는 경우가 많아 전환 추적이 약한 편이라, 대표번호 통화 기록과 예약 경로를 같이 보는 편이 정확합니다. 여기에 AI 검색이 하나 더 붙습니다. 환자가 ChatGPT나 네이버 AI에 '○○ 잘하는 병원'을 물었을 때 병원 이름이 나오는 비율을 같은 질문으로 반복 측정하면 광고를 끄고 켤 때와 다른 흐름이 보입니다.",
  },
  {
    q: "의료광고 심의 때문에 비용이 더 드나요?",
    a: "심의 자체보다 일정과 재작업이 비용입니다. 의료법 제57조와 시행령 제24조에 따라 전년도 말 기준 직전 3개월간 일일 평균 이용자 수가 10만 명 이상인 인터넷 매체와 SNS에 싣는 의료광고는 사전심의 대상입니다. 신문·잡지, 현수막·벽보·전단, 교통수단 광고, 전광판도 대상에 들어갑니다. 심의를 염두에 두지 않고 만든 소재는 표현을 고쳐 다시 만들어야 해서 제작비와 집행 일정이 함께 밀립니다. 매체별 해당 여부는 각 심의기구에 확인하는 것이 정확합니다.",
  },
  {
    q: "광고비를 늘리는 게 먼저인가요, 홈페이지가 먼저인가요?",
    a: "광고를 늘리기 전에 병원 정보가 어디서나 같은지, 홈페이지를 검색엔진과 AI가 읽을 수 있는지부터 확인하는 편이 비용이 덜 듭니다. 진료시간이나 진료과목이 채널마다 다르면 광고로 데려온 환자도 다른 정보를 보고 돌아갑니다. 실제로 저희가 작업한 치과에서는 167쪽짜리 사이트가 있는데도 인근 3쪽짜리 사이트가 ChatGPT에 먼저 인용되고 있었습니다. 분량이 아니라 읽히는 구조의 문제였습니다.",
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

const COST_ROWS: [string, string, string][] = [
  ["매체비(광고비)", "네이버 검색광고, 메타 광고, 유튜브 등 플랫폼에 직접 나가는 돈", "멈추면 그날로 노출도 멈춤"],
  ["대행료", "매체 운영, 소재 교체, 키워드 관리, 리포트 작성", "월 고정 · 사람의 시간"],
  ["제작비", "홈페이지, 사진·영상, 원고, 구조화 작업", "1회성 · 병원 자산으로 남음"],
  ["심의 대응", "의료광고 사전심의 준비, 표현 수정, 재제출", "병원에만 붙는 항목 · 일정에 영향"],
]

const CHECK_ROWS: [string, string][] = [
  ["매체비와 대행료가 나뉘어 있는가", "'월 300만원'처럼 한 줄이면 광고비가 얼마고 인건비가 얼마인지 알 수 없습니다."],
  ["수량이 적혀 있는가", "콘텐츠 몇 건, 소재 몇 개, 리포트 몇 회인지 적혀야 다음 견적과 비교됩니다."],
  ["계정 명의가 병원인가", "광고 계정, 도메인, 분석 도구가 대행사 명의면 바꿀 때 데이터가 함께 사라집니다."],
  ["산출물 소유권이 누구에게 남는가", "홈페이지, 사진, 원고를 계약이 끝난 뒤에도 쓸 수 있는지 계약서에서 확인합니다."],
  ["성과를 무엇으로 재고 몇 번 보고하는가", "'노출 증가' 같은 말 대신, 어떤 숫자를 어떤 주기로 보여줄지 적혀야 합니다."],
  ["'보장'이라는 단어가 어디에 쓰였는가", "검색 순위나 AI 답변 노출은 매번 달라져서 보장이 구조적으로 어렵습니다. 보장을 적었다면 미달 시 정산 방법까지 계약서에 있어야 합니다."],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/hospital-marketing-cost"
        kicker="마케팅 고민 진단 · 병원·의원"
        title={TITLE}
        description={DESC}
        date="2026년 9월 18일"
      >
        <p>
          <strong>병원 마케팅 비용은 광고비·대행료·제작비가 섞여 있고, 견적서가 이 셋을 나누지 않으면
          적정한지 판단할 방법이 없습니다.</strong> 병원은 여기에 의료광고 심의라는 항목이 하나 더
          붙습니다. 이 글은 금액의 정답이 아니라, 지금 받은 견적서를 뜯어보는 순서를 정리한 것입니다.
        </p>

        <h2>&ldquo;매달 나가는데, 이게 맞는 건가&rdquo;</h2>
        <p>
          병원 마케팅 비용을 검색하는 원장님은 대개 두 가지 중 하나입니다. 처음 견적을 받아 비교할
          기준이 없거나, 이미 몇 달째 쓰고 있는데 무엇이 달라졌는지 설명하기 어렵거나.
        </p>
        <p>
          검색창도 그 온도를 그대로 보여줍니다. 저희가 2026년 9월 17일에 조사해 보니 &lsquo;병원
          마케팅&rsquo;을 치면 자동완성에 <strong>&lsquo;병원 마케팅 비용&rsquo;과 함께 &lsquo;병원
          마케팅 현실&rsquo;</strong>이 나란히 떴습니다. 비용을 묻는 사람과 실망한 사람이 같은 검색어
          아래에 있습니다.
        </p>
        <p>
          그래서 금액부터 답하지 않겠습니다. 같은 300만원도 어디에 쓰였는지에 따라 전혀 다른 지출이기
          때문입니다.
        </p>

        <h2>병원 마케팅 비용은 네 갈래입니다</h2>
        <p>
          &lsquo;월 얼마&rsquo; 한 줄짜리 견적서 안에는 성격이 완전히 다른 항목들이 들어 있습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">구분</th>
                <th className="px-4 py-3 font-bold text-gray-900">내용</th>
                <th className="px-4 py-3 font-bold text-gray-900">성격</th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map(([a, b, c]) => (
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
          이 넷을 나누면 질문이 구체적으로 바뀝니다. &ldquo;마케팅비가 비싼가요&rdquo;가 아니라
          &ldquo;광고비 대비 대행료 비중이 이만큼인 게 맞나요&rdquo;, &ldquo;이 제작비는 계약이 끝나도
          병원에 남나요&rdquo;가 됩니다. 뒤쪽 질문에는 대행사가 답을 해야 합니다.
        </p>

        <h2>견적서에서 확인할 6가지</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">확인할 것</th>
                <th className="px-4 py-3 font-bold text-gray-900">왜 봐야 하나</th>
              </tr>
            </thead>
            <tbody>
              {CHECK_ROWS.map(([a, b]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          저희도 병원 견적을 단가표로 안내하지 않습니다. 진료과, 경쟁 강도, 지금 홈페이지 상태에 따라
          해야 할 일의 양이 크게 다르기 때문입니다. 대신 무료 진단으로 현재 상태를 먼저 확인한 뒤
          범위를 정합니다. 단가표를 먼저 내미는 곳이든 진단을 먼저 하는 곳이든, 위 여섯 가지가 적힌
          견적서를 받는 것이 중요합니다.
        </Callout>

        <h2>병원이라 더 헷갈리는 것: 성과를 무엇으로 세나</h2>
        <p>
          쇼핑몰은 결제가 성과라서 계산이 쉽습니다. 병원은 문의가 전화로 오고, 진료 기록은 마케팅
          데이터와 붙일 수 없습니다. 그래서 중간을 나눠 세야 합니다.
        </p>
        <ul>
          <CheckItem>
            <strong>1단계 노출.</strong> 검색 순위, 광고 노출 수, 지도 노출 수. 여기가 0이면 아래는 볼
            필요가 없습니다.
          </CheckItem>
          <CheckItem>
            <strong>2단계 방문.</strong> 홈페이지 방문 수와 어느 채널에서 왔는지. 광고를 껐을 때 무엇이
            남는지도 여기서 보입니다.
          </CheckItem>
          <CheckItem>
            <strong>3단계 문의.</strong> 대표번호 통화, 예약 버튼 클릭, 상담 신청. 병원에서 가장 자주
            비어 있는 칸입니다. 통화 기록만 정리해도 판단이 달라집니다.
          </CheckItem>
          <CheckItem>
            <strong>4단계 내원.</strong> 실제로 온 환자 수. 마케팅 도구로는 알 수 없고 병원 내부
            기록에서만 나옵니다.
          </CheckItem>
        </ul>
        <p>
          최근에는 한 줄이 더 붙었습니다. 환자가 검색창 대신 ChatGPT나 네이버 AI에 &ldquo;○○ 잘하는
          병원 알려줘&rdquo;라고 묻기 시작했기 때문입니다. 이건 순위가 아니라 <strong>언급되느냐
          마느냐</strong>의 문제여서, 같은 질문을 반복해 물어보고 이름이 나온 비율을 세는 방식으로
          측정합니다.
        </p>
        <p>
          저희가 맡은 수도권의 한 정형외과는 계약 전 네이버 AI와 제미나이에서는 질문 10개에 모두
          나왔지만 ChatGPT에서는 4개에만 나왔습니다. 30번 물어 언급률 17%였습니다. 39일 뒤 같은 모델,
          같은 질문으로 다시 재자 <strong>10개 질문 모두, 언급률 93%(30번 중 28번)</strong>가 됐고,
          병원 홈페이지가 출처로 인용된 답변은 0번에서 16번으로 늘었습니다. 광고비를 늘려서 만든 변화가
          아닙니다.
        </p>
        <p>
          측정 방법과 원자료는 <a href="/guide/case-orthopedic-chatgpt">정형외과 사례 글</a>에 그대로
          적어 두었습니다.
        </p>

        <h2>의료광고 심의는 비용이 아니라 일정입니다</h2>
        <p>
          병원 견적서에 잘 안 적히지만 실제로는 돈이 되는 항목입니다. 의료법 제57조와 시행령 제24조에
          따라 <strong>전년도 말 기준 직전 3개월간 일일 평균 이용자 수가 10만 명 이상인 인터넷 매체와
          사회관계망서비스(SNS)</strong>에 싣는 의료광고는 사전심의를 받아야 합니다. 신문·잡지,
          현수막·벽보·전단, 교통수단 광고, 전광판도 대상입니다.
        </p>
        <p>
          여기서 비용이 생기는 지점은 심의 자체가 아니라 <strong>다시 만드는 일</strong>입니다.
          치료효과를 단정하거나 환자 치료경험담을 쓴 소재는 통과하지 못하고, 표현을 고치면 디자인과
          카피를 다시 잡아야 합니다. 집행 일정도 함께 밀립니다. 그래서 소재를 만들기 전에 어떤 매체에
          어떤 형태로 내보낼지부터 정해야 제작비가 한 번에 끝납니다.
        </p>
        <Callout>
          이 글은 법률 자문이 아닙니다. 매체별 심의 대상 여부와 절차는 각 의료광고심의위원회(의사협회,
          치과의사협회, 한의사협회)에 확인하세요. 표현 기준은{" "}
          <a href="/guide/medical-geo">병원 GEO 가이드</a>에 정리해 두었습니다.
        </Callout>

        <h2>광고비를 늘리기 전에 먼저 볼 것</h2>
        <p>
          문의가 줄었을 때 가장 빠른 대응은 광고비를 올리는 것입니다. 그런데 그전에 확인하면 돈이
          덜 드는 항목들이 있습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>병원 정보가 채널마다 같은가.</strong> 홈페이지, 네이버 플레이스, 지도 서비스의
            진료시간·진료과목·전화번호가 다르면 AI도 환자도 헷갈립니다.
          </CheckItem>
          <CheckItem>
            <strong>홈페이지를 기계가 읽을 수 있는가.</strong> 저희가 작업한 치과는 167쪽짜리
            홈페이지에 블로그 51편, FAQ 22개가 있었는데도 인근의 3쪽짜리 사이트가 ChatGPT에 먼저
            인용되고 있었습니다. 분량이 아니라 구조의 문제였습니다.
          </CheckItem>
          <CheckItem>
            <strong>지금 이름이 불리고 있는가.</strong> ChatGPT와 네이버 AI에 환자가 쓸 법한 질문을
            그대로 넣어 보면 5분 만에 확인됩니다. 순서는{" "}
            <a href="/guide/check-hospital-ai-visibility">5분 확인법</a>에 적어 두었습니다.
          </CheckItem>
          <CheckItem>
            <strong>광고를 끄면 무엇이 남는가.</strong> 홈페이지와 검색으로 들어오는 방문이 전혀 없다면,
            광고비는 매달 다시 사야 하는 소모품입니다.
          </CheckItem>
        </ul>
        <p>
          시간은 걸립니다. 저희가 홈페이지를 전면 개선한 비뇨의학과의 경우 홈페이지 작업에만 약 2개월,
          ChatGPT·구글·네이버에서 안정적으로 노출되기까지 약 6개월이 걸렸습니다. 대신 이 작업은 매달
          다시 사지 않아도 됩니다.
        </p>

        <h2>계약 전에 물어볼 질문</h2>
        <ul>
          <CheckItem>이 금액에서 광고비와 대행료는 각각 얼마인가요?</CheckItem>
          <CheckItem>한 달에 무엇을 몇 건 하시나요?</CheckItem>
          <CheckItem>광고 계정과 홈페이지는 누구 명의로 만드나요?</CheckItem>
          <CheckItem>계약이 끝나면 홈페이지와 콘텐츠는 저희가 계속 쓸 수 있나요?</CheckItem>
          <CheckItem>성과는 어떤 숫자로, 얼마나 자주 보여주시나요?</CheckItem>
          <CheckItem>의료광고 심의는 누가 준비하고, 반려되면 수정 비용은 어떻게 되나요?</CheckItem>
          <CheckItem>지금 저희 병원이 AI 답변에 나오는지 확인해 보셨나요?</CheckItem>
        </ul>
        <p>
          마지막 질문에 자료로 답하는 곳이 많지 않습니다. 저희는 병원·의원에 한해 조건 없이 무료로
          진단해 드립니다. 네이버 AI·ChatGPT·제미나이에 환자 질문을 반복해 물어 언급 비율과 잘못된
          정보를 정리해 보내드리고, 진단만 받고 마치셔도 됩니다.{" "}
          <a href="/medical-geo-agency">병원 GEO 대행 페이지</a>에서 무엇을 하는지 먼저 보셔도 좋습니다.
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
