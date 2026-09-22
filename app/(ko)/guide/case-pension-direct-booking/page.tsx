import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 주 키워드: 펜션 광고 (펜션 광고 방법)
// 연관 검색어(2026-09-22 자동완성): 펜션 마케팅 / 인스타 릴스 광고 / 릴스 광고 비용·단가 / 네이버 펜션 예약 수수료
// 원자료: 02.비즈니스/24.메타광고/레퍼런스/2026-08_하얀돔펜션_릴스광고 (광고 관리자 최종 집계, 08.28 종료)
// 업소명·시군 단위 지역은 쓰지 않는다. 내부 해석 문서의 품질 순위·오터치 추정은 광고주 보고서에 없던 내용이라 싣지 않는다.
// 2026-09-22 전면 수정: 8일차 중간 수치와 확인되지 않은 표현(수도권 근교, 자체 사이트, 만실, 예산 700만원)을 최종 기록으로 바로잡음.
const TITLE = "펜션 릴스 광고 24일 실측: 클릭당 50원이 말해주지 않는 것"
const DESC =
  "강원도 계곡 펜션의 메타 릴스 광고 24일 최종 기록입니다. 광고비 131만 3,861원, 링크 클릭 2만 6,456회, 클릭당 50원. 숫자는 좋았지만 예약으로 몇 건이 됐는지는 광고 데이터만으로 알 수 없었습니다. 펜션 광고 방법과 네이버 펜션 예약 수수료까지 정리했습니다."
const DATE = "2026-08-12"
const MODIFIED = "2026-09-22"
const URL = "https://wiztheplanning.com/guide/case-pension-direct-booking"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "펜션 광고", "펜션 광고 방법", "펜션 마케팅", "인스타 릴스 광고", "릴스 광고 비용",
    "네이버 펜션 예약 수수료", "펜션 인스타그램 광고",
  ],
  alternates: { canonical: "/guide/case-pension-direct-booking" },
  openGraph: {
    images: ["/covers/case-pension-direct-booking.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: DATE,
  dateModified: MODIFIED,
  inLanguage: "ko",
  author: { "@id": "https://wiztheplanning.com/#organization" },
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  mainEntityOfPage: URL,
}

const FAQ = [
  {
    q: "펜션 광고 방법, 무엇부터 해야 하나요?",
    a: "광고를 켜기 전에 세 가지를 먼저 준비하는 편이 낫습니다. 첫째 광고 직전 한 달의 예약·문의 건수를 적어 두는 것, 둘째 예약 페이지의 실제 주소를 확인하고 가능하면 메타 픽셀을 설치하는 것, 셋째 인스타그램 계정에 게시물을 채워 두는 것입니다. 이 세 가지가 없으면 광고 지표는 좋아도 예약에 얼마나 기여했는지 판정할 수 없습니다.",
  },
  {
    q: "인스타 릴스 광고 비용은 얼마나 드나요?",
    a: "저희가 진행한 강원도 계곡 펜션 한 곳의 24일 기록으로는 광고비 131만 3,861원에 노출 23만 9,459회, 링크 클릭 2만 6,456회였습니다. 1,000회 노출당 5,487원, 클릭당 50원입니다. 한 업소·한 시즌·한 소재 조합에서 나온 숫자라 다른 펜션에 그대로 적용되지는 않습니다.",
  },
  {
    q: "클릭률이 높으면 예약도 많이 들어오나요?",
    a: "꼭 그렇지 않습니다. 이 캠페인은 클릭률이 11.05%였지만 좋아요는 99개, 저장 20개, 공유 12개였습니다. 클릭 267회에 좋아요 1개꼴입니다. 클릭은 예약 페이지를 여는 동작까지만 세기 때문에, 실제 예약 증감과 대조하기 전에는 성공이라고 말할 수 없습니다.",
  },
  {
    q: "네이버 펜션 예약 수수료는 얼마인가요?",
    a: "네이버 고객센터 안내 기준으로 '네이버 펜션예약(펜션 실시간 예약)' 검색결과를 통해 들어와 네이버페이로 결제된 예약이 확정되면 매출연동수수료 6.6%와 네이버페이 예약주문관리 수수료 2.9%가 부과되어 합계 9.5%(모두 부가세 별도), 부가세를 포함하면 10.45%입니다. 요율과 부과 조건은 네이버 정책에 따라 바뀔 수 있으므로 본인 정산 내역으로 확인해야 합니다.",
  },
  {
    q: "야놀자·여기어때 중개수수료는 몇 퍼센트인가요?",
    a: "2024년 9월 공정거래위원회 숙박플랫폼 자율규제 방안 발표 기준으로 10%입니다. 거래액 하위 40% 제휴점에 한해 9%를 한시 적용하기로 했고, 광고비와 쿠폰비는 별도입니다.",
  },
  {
    q: "펜션 광고에서 쓰면 안 되는 표현이 있나요?",
    a: "사실로 확인되지 않는 표현은 빼는 편이 안전합니다. 최저가·1위 같은 최상급 표현, '아이들도 안전' 같은 안전 보장, 소유나 관리 주체가 분명하지 않은 '전용 계곡' 같은 표현, 촬영하지 못한 시설을 앞세우는 것이 대표적입니다. 사진도 실제 객실로만 씁니다. 실제와 다르면 광고비를 들여 불만 리뷰를 사는 셈이 됩니다.",
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

const RESULT_ROWS: [string, string, string][] = [
  ["집행액", "1,313,861원", "약정 160만원 중 82.1%"],
  ["노출", "239,459회", "광고가 화면에 뜬 횟수"],
  ["도달", "188,461명", "광고를 본 사람 수"],
  ["빈도", "1.27회", "1인당 평균 노출 (목표 2회 이하)"],
  ["링크 클릭", "26,456회", "클릭률 11.05% (목표 1% 이상)"],
  ["클릭당 비용", "50원", "사전 목표 300~800원"],
  ["1,000회 노출당 비용", "5,487원", "사전 목표 3,000~6,000원"],
  ["예약 페이지 도달", "24,465회", "조회당 54원, 인앱 브라우저 로딩 기준"],
]

const CREATIVE_ROWS: [string, string, string, string, string][] = [
  ["15초 · 첫 1초 계곡", "1,228,166원 (93.5%)", "11.21%", "48원", "5,356원"],
  ["30초 · 롱폼", "85,818원 (6.5%)", "7.34%", "115원", "8,434원"],
]

const REACTION_ROWS: [string, string][] = [
  ["링크 클릭", "26,456"],
  ["좋아요", "99"],
  ["저장", "20"],
  ["공유", "12"],
  ["댓글", "1"],
  ["인스타그램 팔로우", "3"],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/case-pension-direct-booking"
        kicker="실제 사례 · 메타 광고 실측"
        title={TITLE}
        description={DESC}
        date="2026년 8월 12일 (9월 22일 최종 기록으로 수정)"
      >
        <p>
          <strong>강원도 계곡 펜션의 메타 릴스 광고를 24일 동안 돌려 131만 3,861원을 썼고, 링크 클릭
          2만 6,456회, 클릭당 50원이 나왔습니다.</strong> 사전 목표를 모든 지표에서 넘겼습니다. 그런데
          이 광고로 예약이 몇 건 늘었는지는 광고 데이터만으로는 알 수 없었습니다. 이 글은 숫자가
          어디까지 말해주고 어디서 멈추는지에 대한 기록입니다.
        </p>

        <Callout>
          <strong>정정합니다.</strong> 8월 12일에 이 글을 처음 쓸 때는 집행 8일차 중간 수치(광고비
          18만 563원, 랜딩 조회 2,890건)를 썼고, &lsquo;수도권 근교 펜션&rsquo;, &lsquo;자체 사이트로
          만실&rsquo;, &lsquo;예산 700만원&rsquo;이라는 표현을 썼습니다. 캠페인이 끝난 뒤 최종 기록과
          대조해 보니 펜션은 강원도에 있었고, 광고는 네이버 예약 페이지로 연결했으며, 예약 결과는 아직
          확인되지 않았습니다. 광고 약정 금액은 160만원이었습니다. 확인된 기록으로 다시 씁니다.
        </Callout>

        <h2>펜션 릴스 광고 24일 최종 수치</h2>
        <p>
          2026년 8월 5일부터 28일까지, 인스타그램 릴스 중심으로 집행한 결과입니다. 메타 광고
          관리자 최종 집계 기준입니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">지표</th>
                <th className="px-4 py-3 font-bold text-gray-900">값</th>
                <th className="px-4 py-3 font-bold text-gray-900">참고</th>
              </tr>
            </thead>
            <tbody>
              {RESULT_ROWS.map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{a}</td>
                  <td className="px-4 py-2.5 font-bold text-gray-900">{b}</td>
                  <td className="px-4 py-2.5 text-gray-600">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          계곡을 내세운 소재의 유효 기간이 8월 말에 끝나서, 예정보다 사흘 이른 8월 28일에 멈췄습니다.
          남은 28만 6,139원은 억지로 쓰지 않고 다음 시즌으로 넘겼습니다.
        </p>

        <h2>릴스 광고 비용을 가른 건 첫 1초였습니다</h2>
        <p>
          15초와 30초 소재 두 편을 같이 올리고 메타가 예산을 나누도록 뒀습니다. 개입하지 않았는데
          15초 한 편이 예산의 93.5%를 가져갔습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">소재</th>
                <th className="px-4 py-3 font-bold text-gray-900">지출</th>
                <th className="px-4 py-3 font-bold text-gray-900">클릭률</th>
                <th className="px-4 py-3 font-bold text-gray-900">클릭당</th>
                <th className="px-4 py-3 font-bold text-gray-900">1,000회 노출당</th>
              </tr>
            </thead>
            <tbody>
              {CREATIVE_ROWS.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  {r.map((c, i) => (
                    <td key={i} className={`px-4 py-2.5 ${i === 0 ? "font-semibold text-gray-800" : "text-gray-700"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          차이는 편집이었습니다. 15초는 <strong>첫 1초에 계곡</strong>을 넣었고, 30초는 시설을 차례로
          보여주는 구성이었습니다. 클릭당 비용이 절반 이하로 벌어졌습니다. 광고주도 &ldquo;시설 컷보다
          체험 장면&rdquo;을 원했는데, 숫자가 같은 답을 냈습니다. 롱폼은 광고보다 계정 게시물에 맞습니다.
        </p>

        <h2>펜션 광고 방법: 타겟은 펜션 주변이 아닙니다</h2>
        <ul>
          <CheckItem>
            <strong>손님이 출발하는 곳을 겨눕니다.</strong> 펜션이 강원도에 있어도 손님은
            수도권에서 옵니다. 위치를 펜션 주변으로 잡으면 여행을 떠날 사람이 아니라 동네 주민에게
            광고비를 씁니다.
          </CheckItem>
          <CheckItem>
            <strong>노출 위치를 직접 고릅니다.</strong> 릴스와 스토리로 지정했고, 실제로 예산의
            98.6%가 인스타그램 릴스에 쓰였습니다. 자동 배치로 두면 효율이 낮은 지면으로 예산이 샐 수
            있습니다.
          </CheckItem>
          <CheckItem>
            <strong>지출 한도를 약정 금액으로 걸어 둡니다.</strong> 일 예산을 올려도 약정을 넘지
            않게 하는 안전장치입니다. 예산을 늘릴 때는 한 번에 3배 이내로 올리고, 그 이상이 필요하면
            기간을 늘리는 편이 학습이 덜 흔들립니다.
          </CheckItem>
        </ul>

        <h2>클릭 2만 6천 회, 좋아요 99개</h2>
        <p>
          이 캠페인에서 가장 많이 배운 대목입니다. 광고 목표를 &lsquo;예약 페이지 방문&rsquo;으로
          잡으면 메타는 누를 사람에게 노출을 몰아줍니다. 그래서 클릭은 폭발했는데 다른 반응은
          조용했습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">반응</th>
                <th className="px-4 py-3 font-bold text-gray-900">수</th>
              </tr>
            </thead>
            <tbody>
              {REACTION_ROWS.map(([a, b]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 text-gray-800">{a}</td>
                  <td className="px-4 py-2.5 font-bold text-gray-900">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          클릭 267회에 좋아요 1개꼴입니다. 관심이 있어 누른 클릭만으로는 설명하기 어려운 비율이라,
          클릭당 50원만 보고 &ldquo;성공&rdquo;이라고 말하지 않기로 했습니다. 팔로우가 3명에 그친 건
          계정 탓이 큽니다. 집행 기간 대부분 인스타그램 계정에 게시물이 없어서, 광고를 보고 프로필로
          넘어와도 볼 것이 없었습니다.
        </p>

        <h2>측정하지 못한 것: 예약</h2>
        <p>
          광고는 네이버 예약 페이지로 연결했습니다. 그 페이지에 메타 픽셀이 없어서, 광고를 보고 들어온
          사람이 실제로 예약을 마쳤는지는 매체 데이터로 셀 수 없었습니다. &lsquo;예약 페이지 도달
          2만 4,465회&rsquo;는 인스타그램 앱 안 브라우저에서 페이지가 열린 횟수이지 예약 완료가
          아닙니다.
        </p>
        <Callout>
          최종 판정은 <strong>광고 전 7월과 광고 중 8월의 예약·문의 건수를 비교</strong>해야 나옵니다.
          그 자료를 받는 대로 이 글에 덧붙이겠습니다. 다음 집행부터는 광고 시작 전에 직전 한 달 예약
          건수를 먼저 받아 두고, 예약 페이지에 픽셀을 설치하는 것을 조건으로 두기로 했습니다.
        </Callout>

        <h2>네이버 펜션 예약 수수료는 그대로 나갑니다</h2>
        <p>
          이번 광고는 예약을 네이버 예약으로 받았습니다. 그래서 광고로 데려온 손님의 예약에도 플랫폼
          정산 구조가 그대로 적용됩니다. 공식 안내로 확인되는 요율은 다음과 같습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">항목</th>
                <th className="px-4 py-3 font-bold text-gray-900">요율</th>
                <th className="px-4 py-3 font-bold text-gray-900">비고</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["네이버 매출연동수수료", "6.6%", "부가세 별도"],
                ["네이버페이 예약주문관리 수수료", "2.9%", "부가세 별도"],
                ["네이버 합계 (부가세 포함)", "10.45%", "펜션예약 검색결과로 들어온 예약 기준"],
                ["야놀자·여기어때 중개수수료", "10%", "하위 40% 제휴점 9% 한시 적용, 광고비·쿠폰비 별도"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 font-bold text-gray-900">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          출처는{" "}
          <a href="https://help.naver.com/alias/booking" target="_blank" rel="noopener noreferrer">
            네이버 스마트플레이스 사업주 고객센터의 펜션 실시간 예약 수수료 안내
          </a>
          와{" "}
          <a href="https://www.khan.co.kr/article/202409051600001" target="_blank" rel="noopener noreferrer">
            경향신문 &lsquo;야놀자·여기어때, 거래액 적은 업체에 중개수수료 10% 한시 인하&rsquo;(2024.9.5)
          </a>
          입니다. 네이버 수수료는 <strong>어느 경로로 들어온 예약이냐</strong>에 따라 부과 여부가
          갈리므로, 광고로 들어온 예약에 무엇이 붙었는지는 본인 정산 내역에서 확인하셔야 합니다.
        </p>
        <p>
          수수료를 줄이는 길은 예약을 자기 채널로 받는 것이지만, 이번 캠페인은 거기까지 가지
          않았습니다. 예약 창구를 바꾸면 손님을 데려오던 경로도 함께 새로 만들어야 하고, 그 경로가
          얼마나 예약을 만드는지부터 재야 합니다. 이번 광고가 그 첫 번째 측정이 되려면 앞에서 말한
          예약 비교가 먼저입니다.
        </p>

        <h2>광고보다 오래 걸린 것: 계정 명의</h2>
        <p>
          이 펜션은 시작 시점에 인스타그램·페이스북 계정이 없어서 대행사 쪽에서 대신 만들었습니다.
          나중에 광고주에게 넘기는 과정이 광고 운영보다 오래 걸렸습니다. 결론은 단순합니다.{" "}
          <strong>계정은 처음부터 광고주 명의로, 광고주 휴대폰과 이메일로 만들고, 대행사는 운영 권한만
          받습니다.</strong> 계약이 끝나면 권한만 회수하면 되고, 그동안 쌓인 게시물과 팔로워는
          광고주에게 남습니다.
        </p>

        <h2>다음 펜션 광고에서 바꾸는 것</h2>
        <ul>
          <CheckItem>광고 직전 한 달의 예약·문의 건수를 먼저 받아 둡니다. 이게 없으면 효과를 판정할 기준이 없습니다.</CheckItem>
          <CheckItem>예약 페이지의 실제 주소를 확인하고, 가능하면 픽셀을 설치합니다. 단축링크는 지도로 떨어지기도 합니다.</CheckItem>
          <CheckItem>광고를 켜기 전에 인스타그램 게시물을 최소 한 화면(9개) 채워 둡니다.</CheckItem>
          <CheckItem>소재는 첫 1초에 가장 강한 장면을 넣고, 길이가 다른 두 편 이상을 같이 올립니다.</CheckItem>
          <CheckItem>클릭률만 보지 않고 좋아요·저장·공유를 같이 봅니다. 클릭만 좋으면 품질부터 의심합니다.</CheckItem>
          <CheckItem>사진으로 확인되는 것만 말합니다. 실제 객실이 아닌 이미지는 쓰지 않습니다.</CheckItem>
        </ul>

        <h2>AI 추천까지 생각하면</h2>
        <p>
          손님이 ChatGPT나 네이버 AI에 &ldquo;계곡 가까운 가족 펜션 추천해줘&rdquo;라고 묻기
          시작했습니다. AI가 답에 다는 출처는 정보가 실려 있는 곳입니다. 자기 사이트 없이 플랫폼에만
          정보가 있으면 인용되는 주체도 플랫폼이 됩니다. 한 음식점에서 실제로 관찰한 내용은{" "}
          <a href="/guide/case-third-party-citation">홈페이지는 인용되지 않아도 인용을 만들어낸다</a>에
          정리했습니다. 지금 우리 가게가 AI에 읽히는 상태인지는{" "}
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
