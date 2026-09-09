import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 53자
const TITLE = "펜션 예약 수수료 10.45%: 자체 사이트로 만실 채운 8일 광고비 18만원"
const DESC =
  "네이버 펜션 실시간예약은 매출연동수수료 6.6% + 네이버페이 2.9%로 부가세 포함 10.45%, 야놀자·여기어때 중개수수료는 10%입니다(공정위 자율규제 기준, 하위 40%는 9%). 사장님들이 못 끊는 이유는 수수료가 아까운 걸 몰라서가 아니라 플랫폼을 끊으면 예약이 끊길까 봐입니다. 수도권 근교 펜션 한 곳의 8일치 실측: 지출 18만 563원, 랜딩페이지 조회 2,890건, 조회당 62원."
const DATE = "2026-08-12"
const URL = "https://wiztheplanning.com/guide/case-pension-direct-booking"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "펜션 예약 수수료", "네이버 예약 수수료", "네이버 펜션예약 수수료",
    "매출연동수수료", "펜션 자체 예약시스템", "펜션 홈페이지 제작",
    "야놀자 여기어때 수수료", "펜션 마케팅",
  ],
  alternates: { canonical: "/guide/case-pension-direct-booking" },
  openGraph: {
    images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "네이버 펜션 예약 수수료는 얼마인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네이버 고객센터 안내 기준으로 '네이버 펜션예약(펜션 실시간 예약)' 검색결과를 통해 들어와 네이버페이로 결제된 예약이 확정되면 매출연동수수료 6.6%와 네이버페이 예약주문관리 수수료 2.9%가 부과되어 합계 9.5%(모두 부가세 별도), 부가세를 포함하면 10.45%입니다. 요율과 부과 조건은 네이버 정책에 따라 변경될 수 있으므로 계약 시점의 공식 안내와 본인 정산 내역을 확인해야 합니다.",
      },
    },
    {
      "@type": "Question",
      name: "야놀자·여기어때 중개수수료는 몇 퍼센트인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2024년 9월 공정거래위원회 숙박플랫폼 자율규제 방안 발표 기준으로 야놀자와 여기어때의 중개수수료는 10%입니다. 두 회사는 거래액 하위 40% 제휴점에 한해 1%포인트 인하해 9%를 적용하기로 했고, 여기어때는 2024년 11월부터 1년간, 야놀자는 2025년 1월부터 1년 6개월간 한시 적용하기로 했습니다. 광고비와 쿠폰비는 이 중개수수료와 별개로 발생합니다.",
      },
    },
    {
      "@type": "Question",
      name: "자체 예약 시스템을 만들면 수수료를 아낄 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "예약 건당 매출연동수수료나 중개수수료는 줄고 결제대행(PG) 수수료만 남습니다. 다만 수수료를 아끼는 것과 객실을 채우는 것은 다른 문제입니다. 플랫폼이 가져가던 10% 안팎은 '손님을 데려다주는 값'이기 때문에, 자체 사이트로 전환하려면 그 손님을 대신 데려올 유입 경로를 함께 만들어야 합니다. 유입 없이 시스템만 바꾸면 수수료는 줄어도 예약이 같이 줄어듭니다.",
      },
    },
    {
      "@type": "Question",
      name: "자체 사이트로 예약을 채우는 데 광고비가 얼마나 드나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "저희가 진행한 수도권 근교 펜션 한 곳의 실측 기준으로, 8일간 메타 광고 지출은 18만 563원이었고 랜딩페이지 조회는 2,890건, 조회당 비용은 62원이었습니다. 같은 기간 도달 27,110명, 노출 30,163회, 빈도 1.11회였습니다. 이 수치는 특정 업소·시즌·상품 조건에서 나온 것이므로 모든 펜션에 그대로 적용되지는 않습니다.",
      },
    },
    {
      "@type": "Question",
      name: "펜션 자체 사이트 구축에 비용이 얼마나 드나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "저희가 진행한 수도권 근교 펜션 사례에서는 현장 촬영, 광고 소재 제작, 랜딩페이지 제작, 메타 광고비를 전부 합쳐 700만원을 예산으로 잡았고 그 절반도 쓰지 않았습니다. 비교 기준은 '0원'이 아니라 지금 내고 있는 수수료입니다. 네이버 펜션예약 10.45% 기준으로 연 6,700만원어치를 팔면 수수료로만 약 700만원이 나가므로, 1년치 수수료 정도의 금액으로 자체 채널을 만들 수 있다는 계산이 나옵니다. 다만 업소 규모와 필요한 기능에 따라 비용은 달라집니다.",
      },
    },
    {
      "@type": "Question",
      name: "플랫폼에만 있으면 AI 추천에는 어떤 영향이 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI가 숙소를 추천할 때 인용하는 것은 정보가 실려 있는 곳입니다. 자기 사이트 없이 플랫폼에만 정보가 있으면 AI 답변에 인용되는 주체는 업소가 아니라 플랫폼이 됩니다. 저희가 관찰한 한 음식점 사례에서도 AI는 그 가게를 추천하면서 홈페이지가 아니라 제3자 플랫폼을 출처로 달았습니다. 수수료뿐 아니라 '누가 인용되는가'도 플랫폼에 넘어가는 구조입니다.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/case-pension-direct-booking"
        kicker="실제 사례 · 자체 실측"
        title={TITLE}
        description={DESC}
        date="2026년 8월 12일"
      >
        {/* 결론 우선 — 상단 150자 이내 */}
        <p>
          <strong>플랫폼 수수료 10% 안팎은 &lsquo;손님을 데려다주는 값&rsquo;입니다. 그래서 예약
          시스템만 바꾸면 수수료는 줄어도 예약이 같이 줄어듭니다.</strong> 자체 사이트로 옮기려면
          손님을 대신 데려올 경로를 함께 만들어야 합니다. 저희가 수도권 근교 펜션 한 곳에서 그걸
          해본 8일치 숫자를 그대로 공개합니다.
        </p>

        <h2>먼저 수수료부터: 공식 출처로 확인한 숫자</h2>
        <p>
          업계에서 &ldquo;13%다, 15%다&rdquo; 하는 말이 돌지만, 공식 안내와 규제 발표 자료를 확인하면
          숫자가 다릅니다. 인용 가능한 출처가 있는 것만 적습니다.
        </p>

        <h3>네이버 펜션 실시간예약</h3>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">항목</th>
                <th className="px-4 py-3 font-bold text-gray-900">요율</th>
                <th className="px-4 py-3 font-bold text-gray-900">비고</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["매출연동수수료", "6.6%", "부가세 별도"],
                ["네이버페이 예약주문관리 수수료", "2.9%", "부가세 별도"],
                ["합계", "9.5%", "부가세 별도"],
                ["합계 (부가세 포함)", "10.45%", "실제 부담액"],
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
          입니다. 중요한 건 <strong>부과 조건</strong>입니다. 이 수수료는{" "}
          <strong>&lsquo;네이버 펜션예약&rsquo; 검색결과를 통해 들어온 예약</strong>에 붙습니다. 네이버는
          해당 영역에서의 노출·정보 제공이라는 혜택이 발생한 것으로 보고 과금한다고 안내하고
          있습니다. 즉 <strong>유입 경로가 요금을 결정합니다.</strong>
        </p>

        <h3>야놀자·여기어때 중개수수료</h3>
        <ul>
          <CheckItem>
            <strong>10%</strong>: 2024년 9월 공정거래위원회 숙박플랫폼 자율규제 방안 발표 기준
          </CheckItem>
          <CheckItem>
            <strong>9%</strong>: 거래액 <strong>하위 40% 제휴점</strong>에 한해 1%포인트 인하.
            여기어때는 2024년 11월부터 1년간, 야놀자는 2025년 1월부터 1년 6개월간 한시 적용
          </CheckItem>
          <CheckItem>
            <strong>광고비·쿠폰비는 별도</strong>입니다. 중개수수료만 보면 실제 부담을 과소평가하게
            됩니다
          </CheckItem>
        </ul>
        <p>
          출처는{" "}
          <a
            href="https://www.khan.co.kr/article/202409051600001"
            target="_blank"
            rel="noopener noreferrer"
          >
            경향신문 &lsquo;야놀자·여기어때, 거래액 적은 업체에 중개수수료 10% 한시 인하&rsquo;(2024.9.5)
          </a>
          입니다.
        </p>
        <Callout>
          <strong>요율은 정책·계약 조건에 따라 변동됩니다.</strong> 위 숫자는 각 시점의 공식 안내와
          규제 발표 기준이며, 프로모션 참여 여부·제휴사 계약·유입 경로에 따라 실제 부담은
          달라집니다. <strong>정확한 숫자는 남의 글이 아니라 본인 계약서와 정산 내역에서 확인</strong>
          하셔야 합니다.
        </Callout>

        <h2>이번 실측 수치</h2>
        <p>
          2026년 8월 5일부터 12일까지 <strong>8일간</strong>, 메타(페이스북·인스타그램) 광고 하나만
          돌린 결과입니다. 광고 관리자 화면에 찍힌 숫자 그대로입니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">지표</th>
                <th className="px-4 py-3 font-bold text-gray-900">값</th>
                <th className="px-4 py-3 font-bold text-gray-900">의미</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["지출 금액", "180,563원", "8일 총 광고비"],
                ["랜딩페이지 조회", "2,890건", "실제로 사이트를 연 횟수"],
                ["조회당 비용", "62원", "사이트 방문 1건을 만든 값"],
                ["도달", "27,110명", "광고를 본 사람 수"],
                ["노출", "30,163회", "광고가 보인 총 횟수"],
                ["빈도", "1.11회", "1인당 평균 노출: 같은 사람에게 반복되지 않음"],
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

        <Callout>
          <strong>여기서 정직하게 선을 긋겠습니다.</strong> 위 6개는 메타 광고 관리자에 찍힌
          측정값입니다. 하지만 <strong>&lsquo;객실이 다 찼다&rsquo;는 광고 지표가 아닙니다.</strong>{" "}
          메타가 셀 수 있는 건 랜딩페이지 조회까지고, 그 뒤 예약이 몇 건 들어왔는지는 업소 측
          예약 현황 확인 기준입니다. 광고 성과와 예약 결과를 같은 줄에 놓고 &ldquo;광고로
          만실&rdquo;이라고 쓰는 게 흔한 과장이라서, 저희는 두 숫자를 분리해서 적습니다.
        </Callout>

        <h2>왜 사장님들은 수수료를 알면서도 못 끊나</h2>
        <p>
          펜션 사장님 중에 수수료가 아까운 줄 모르는 분은 없습니다. 알면서도 못 끊습니다. 이유는
          하나입니다. <strong>플랫폼을 끊으면 예약이 끊길까 봐서입니다.</strong>
        </p>

        <h3>수수료는 &lsquo;시스템 이용료&rsquo;가 아니라 &lsquo;손님 값&rsquo;이다</h3>
        <p>
          플랫폼이 가져가는 10% 안팎은 예약 버튼을 빌려주는 값이 아닙니다. <strong>손님을 데려다주는
          값</strong>입니다. 네이버가 &ldquo;검색결과를 통한 예약&rdquo;에만 매출연동수수료를 붙이는
          것도 같은 논리입니다. <strong>데려다준 만큼 받겠다</strong>는 구조입니다.
        </p>
        <p>
          이 구분이 중요한 이유는, 예약 시스템만 자체로 바꿔놓고 유입 경로를 안 만들면{" "}
          <strong>수수료는 0이 되지만 예약도 같이 0에 가까워지기</strong> 때문입니다. 시중의
          &ldquo;자체 예약시스템으로 수수료 절감&rdquo; 이야기가 자주 빠뜨리는 대목이 여기입니다.
          시스템은 절반이고, 나머지 절반은 손님을 데려오는 일입니다.
        </p>

        <h2>이번에 실제로 한 것</h2>
        <p>
          이 펜션은 시작 시점에 자체 예약 채널이 없었습니다. 그래서 예약을 받을 그릇부터
          만들었습니다.
        </p>
        <ul>
          <CheckItem><strong>랜딩페이지 구축</strong>: 객실·요금·예약이 한 화면에서 끝나는 구조</CheckItem>
          <CheckItem><strong>네이버 쇼핑 등재</strong>: 검색으로 들어오는 경로 확보</CheckItem>
          <CheckItem><strong>현장 촬영</strong>: 스톡 이미지가 아닌 실제 객실·전경</CheckItem>
          <CheckItem><strong>광고 소재 제작</strong>: 촬영본으로 릴스 영상 소재 구성</CheckItem>
          <CheckItem><strong>메타 광고 집행</strong>: 수도권 30~45세 캠핑·가족여행 관심층 타깃</CheckItem>
        </ul>
        <p>
          순서가 중요합니다. <strong>그릇을 먼저 만들고 물을 부었습니다.</strong> 랜딩페이지가 없는
          상태에서 광고부터 돌리면, 62원을 주고 데려온 방문자가 도착할 곳이 플랫폼 상세페이지밖에
          없습니다. 그러면 광고비는 우리가 쓰고 수수료는 플랫폼이 가져갑니다.
        </p>

        <h3>빈도 1.11이 말해주는 것</h3>
        <p>
          위 표에서 눈여겨볼 숫자는 <strong>빈도 1.11회</strong>입니다. 도달한 27,110명에게 평균 1.11번
          보였다는 뜻으로, <strong>같은 사람에게 광고를 반복해 태우지 않았다</strong>는 의미입니다.
          아직 안 본 사람이 남아 있다는 뜻이기도 합니다. 소진을 걱정할 단계가 아니었습니다.
        </p>

        <h2>수수료 계산: 언제 자체 사이트가 이기나</h2>
        <p>
          자체 사이트가 유리해지는 지점은 간단한 산수로 확인됩니다. 아래는 <strong>요율만 넣어 계산한
          예시</strong>이며, 특정 업소의 실제 매출이 아닙니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">경로</th>
                <th className="px-4 py-3 font-bold text-gray-900">예약 1건당 비용</th>
                <th className="px-4 py-3 font-bold text-gray-900">성격</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["네이버 펜션예약 (10.45%)", "20만원 예약 → 20,900원", "매출에 비례해 계속 늘어남"],
                ["OTA 중개 (10%)", "20만원 예약 → 20,000원 + 광고비 별도", "매출에 비례해 계속 늘어남"],
                ["자체 사이트 + 광고", "고정 광고비 ÷ 예약 수", "예약이 늘수록 1건당 비용은 내려감"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          핵심은 <strong>비용의 성격이 다르다</strong>는 것입니다. 플랫폼 수수료는 매출이 늘면 같이
          늘어나는 <strong>변동비</strong>입니다. 자체 사이트 구축비는 한 번 쓰고 끝나는{" "}
          <strong>고정비</strong>이고, 광고비는 우리가 조절할 수 있는 변동비입니다. 그래서 초기에는
          자체 사이트가 불리해 보이고, <strong>운영 기간이 길어질수록 역전됩니다.</strong>
        </p>
        <h3>이번 건의 예산은 700만원이었습니다</h3>
        <p>
          촬영·소재 제작·랜딩페이지 제작·메타 광고비를 <strong>전부 합쳐 700만원</strong>을 잡고
          시작했습니다. 실제로는 <strong>그 절반도 쓰지 않고</strong> 객실이 찼습니다(예약 현황은
          업소 확인 기준). 8일간 광고비 18만 563원은 그 안에 포함된 금액입니다.
        </p>
        <p>
          이 700만원이 큰지 작은지는 <strong>플랫폼 수수료와 비교하면</strong> 바로 보입니다. 아래는
          요율만 넣은 산수이며, 특정 업소의 매출이 아닙니다.
        </p>
        <ul>
          <CheckItem>
            네이버 펜션예약(10.45%)으로 <strong>연 6,700만원</strong>어치를 팔면, 수수료로만{" "}
            <strong>약 700만원</strong>이 나갑니다
          </CheckItem>
          <CheckItem>
            OTA 중개(10%)라면 <strong>연 7,000만원</strong>에서 같은 700만원이 나갑니다. 여기에
            광고비·쿠폰비는 별도입니다
          </CheckItem>
          <CheckItem>
            즉 <strong>1년치 수수료 정도의 돈이면</strong> 촬영·소재·랜딩·광고를 한 번에 새로 만들
            수 있다는 뜻입니다. 그리고 그렇게 만든 자산은 <strong>이듬해에도 남습니다</strong>
          </CheckItem>
        </ul>
        <p>
          제작 견적으로 수천만원을 부르는 곳이 많아서 대부분 여기서 포기합니다. 하지만 비교 대상은{" "}
          <strong>&lsquo;0원&rsquo;이 아니라 &lsquo;지금 내고 있는 수수료&rsquo;</strong>입니다. 이미
          매년 나가고 있는 돈이라는 걸 계산에 넣어야 판단이 달라집니다.
        </p>

        <Callout>
          그래서 &ldquo;플랫폼을 다 끊으세요&rdquo;가 답이 아닙니다. 현실적인 순서는{" "}
          <strong>플랫폼은 그대로 두고, 자체 채널을 병행해서 키운 뒤, 비중을 옮기는 것</strong>입니다.
          예약이 끊길 위험을 감수하지 않고도 수수료 비중을 낮출 수 있습니다.
        </Callout>

        <h2>수수료만의 문제가 아닙니다: 인용도 넘어갑니다</h2>
        <p>
          여기서부터가 저희가 이 사례를 굳이 정리한 이유입니다.{" "}
          <strong>플랫폼에만 얹혀 있으면 넘어가는 건 수수료만이 아닙니다.</strong>
        </p>
        <p>
          손님이 요즘 숙소를 찾는 경로 하나가 늘었습니다. ChatGPT나 네이버 AI에 &ldquo;가평 근처 가족
          펜션 추천해줘&rdquo;라고 묻는 방식입니다. 이때 <strong>AI가 인용하는 건 정보가 실려 있는
          곳</strong>입니다. 자기 사이트가 없으면 AI가 답변에 다는 출처는 업소가 아니라 플랫폼이
          됩니다.
        </p>
        <p>
          저희가 관찰한 한 음식점 사례가 정확히 그랬습니다. AI는 그 가게를 추천 4위로 올려주면서,
          출처로 홈페이지가 아니라 제3자 플랫폼을 달았습니다.{" "}
          <a href="/guide/case-third-party-citation">홈페이지는 인용되지 않아도 인용을 만들어낸다</a>.
        </p>
        <p>
          <strong>수수료 10%는 눈에 보이는 비용이고, 인용을 뺏기는 건 눈에 안 보이는 비용입니다.</strong>{" "}
          자체 사이트는 예약을 받는 그릇인 동시에, AI가 우리 업소를 읽어갈 수 있는 유일한 원본입니다.
          이 구조 전체는 <a href="/guide/geo">GEO 총정리</a>에 정리해 두었습니다.
        </p>

        <h2>다른 업종에도 그대로 적용되는 구조</h2>
        <p>
          펜션 이야기로 썼지만 병목은 업종을 가리지 않습니다. 배달앱을 쓰는 식당, 예약앱을 쓰는
          미용실, 플랫폼에 등록된 병원 모두 같은 구조입니다.
        </p>
        <ul>
          <CheckItem><strong>플랫폼이 손님을 데려온다</strong> → 수수료를 낸다</CheckItem>
          <CheckItem><strong>자기 채널이 없다</strong> → 플랫폼을 못 끊는다</CheckItem>
          <CheckItem><strong>정보가 플랫폼에만 있다</strong> → AI도 플랫폼을 인용한다</CheckItem>
        </ul>
        <p>
          끊는 게 답이 아니라, <strong>병행할 자기 채널을 하나 갖는 것</strong>이 답입니다. 네이버
          플레이스부터 점검하시려면{" "}
          <a href="/guide/naver-place-checklist">네이버 플레이스 체크리스트</a>를 참고하세요.
        </p>

        <h2>정리</h2>
        <p>
          <strong>수수료를 아끼는 일과 객실을 채우는 일은 다른 문제입니다.</strong> 자체 예약
          시스템만 만들면 전자는 해결되지만 후자가 무너집니다. 둘을 같이 풀어야 하고, 그래서
          랜딩페이지·소재·광고가 한 묶음으로 들어갔습니다. 8일간 18만 563원으로 랜딩 조회 2,890건,
          조회당 62원이 그 결과이고, 촬영부터 광고까지 잡아둔 예산 700만원의 절반도 쓰지
          않았습니다.
        </p>
        <p>
          그리고 그렇게 만든 자체 사이트는 수수료를 줄이는 데서 끝나지 않습니다.{" "}
          <strong>AI가 우리 가게를 읽어갈 수 있는 원본</strong>이 됩니다. 지금 우리 사이트가 AI
          크롤러에게 열려 있는지는 <a href="/site-check">무료 사이트 진단</a>으로 1분이면 확인됩니다.
        </p>
      </GuideArticle>
    </>
  )
}
