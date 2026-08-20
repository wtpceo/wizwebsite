import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 45자
const TITLE = "GEO 비용 — 견적서 뜯어보는 법과, 지금이 가장 쌀 때인 이유"
const DESC =
  "GEO 비용은 구축비(1회성)·운영비(월)·콘텐츠 제작비 세 갈래로 나뉩니다. 견적서에서 확인할 5가지와, 지금 시작하는 비용이 왜 나중보다 싼지를 저희 실측으로 정리했습니다. 백링크 1개짜리 신생 도메인이 네이버 AI 브리핑 1위를 찍는 지금의 경쟁 밀도는 오래가지 않습니다."
const DATE = "2026-08-14"
const URL = "https://wiztheplanning.com/guide/geo-cost"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "GEO 비용", "GEO 대행 비용", "GEO 외주", "GEO 업체 추천",
    "GEO 대행사", "GEO 견적", "AI 검색 최적화 비용", "GEO 가격",
  ],
  alternates: { canonical: "/guide/geo-cost" },
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
      name: "GEO 대행 비용은 어떻게 구성되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "크게 셋으로 나뉩니다. 첫째 구축비는 홈페이지·구조화 데이터·크롤러 접근 정비처럼 한 번 쓰고 자산으로 남는 비용입니다. 둘째 운영비는 색인 관리, AI 노출 모니터링, 정보 일관성 유지처럼 매달 드는 비용입니다. 셋째 콘텐츠 제작비는 촬영·글·영상처럼 분량에 비례합니다. 견적서가 이 셋을 구분하지 않고 '월 얼마'로만 적혀 있다면 무엇을 사는지 알 수 없으므로 항목을 나눠 달라고 요청하는 것이 맞습니다.",
      },
    },
    {
      "@type": "Question",
      name: "GEO 업체 견적서에서 무엇을 확인해야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "다섯 가지입니다. 구축비와 운영비가 분리돼 있는지, 계약 종료 시 홈페이지와 콘텐츠 소유권이 누구에게 남는지, 성과를 무엇으로 측정하고 몇 번 확인하는지, 어떤 작업을 몇 건 하는지 수량이 적혀 있는지, 그리고 '보장'이라는 단어가 어디에 쓰였는지입니다. AI 답변은 같은 질문에도 매번 달라져서 노출 보장은 구조적으로 성립하기 어렵습니다.",
      },
    },
    {
      "@type": "Question",
      name: "GEO는 지금 시작하는 것이 유리한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "같은 결과를 얻는 데 드는 비용 측면에서는 그렇습니다. 저희 도메인은 외부 링크가 1곳뿐인 신생 사이트인데도 '병원 GEO 대행' 검색에서 네이버 AI 브리핑 1위, 구글 2위에 올랐습니다. 경쟁 밀도가 낮다는 뜻이고, 경쟁자가 늘면 같은 자리를 얻는 데 더 많은 콘텐츠와 시간이 필요해집니다. 다만 현재 GEO 관련 검색량 자체는 아직 작기 때문에, 지금 시작하는 것은 이미 있는 수요를 가져오는 일이라기보다 수요가 커질 때 자리를 갖고 있는 일에 가깝습니다.",
      },
    },
    {
      "@type": "Question",
      name: "예산을 얼마나 잡아야 적정한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "절대 금액보다 비교 기준이 중요합니다. 기준은 '0원'이 아니라 지금 플랫폼에 내고 있는 수수료와 광고비입니다. 예를 들어 네이버 펜션 실시간예약 요율 10.45%로 연 6,700만원어치를 팔면 수수료로만 약 700만원이 나갑니다. 저희가 진행한 수도권 근교 펜션 사례에서는 촬영·소재·랜딩·광고를 합친 예산 700만원을 잡고 그 절반도 쓰지 않았습니다. 이미 매년 나가고 있는 돈과 비교해야 판단이 됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "GEO 노출을 보장한다는 업체는 믿어도 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "구조적으로 보장이 어렵습니다. 생성형 AI는 같은 질문에도 매번 다른 답을 내놓고, 엔진마다 참고하는 색인이 다릅니다. 저희 페이지도 네이버 AI 브리핑 1위, 구글 2위였지만 같은 시점 ChatGPT에는 나오지 않았습니다. 보장을 약속하는 견적서라면 무엇을 근거로 보장하는지, 미달 시 어떻게 정산하는지를 계약서에 적어 달라고 요구하는 것이 안전합니다.",
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
        href="/guide/geo-cost"
        kicker="실전 전략 · 자체 실측"
        title={TITLE}
        description={DESC}
        date="2026년 8월 14일"
      >
        {/* 결론 우선 — 상단 150자 이내 */}
        <p>
          <strong>GEO 비용은 구축비·운영비·콘텐츠비 세 갈래로 나뉘고, 견적서가 이 셋을 구분하지
          않으면 무엇을 사는지 알 수 없습니다.</strong> 그리고 지금 드는 비용은 나중보다 쌉니다. 저희
          도메인은 외부 링크가 1곳뿐인데도 상위에 올랐습니다. 그런 일이 되는 시기는 길지 않습니다.
        </p>

        <h2>GEO 비용은 무엇으로 구성되나</h2>
        <p>
          &ldquo;월 얼마&rdquo; 한 줄짜리 견적서를 자주 봅니다. 그 한 줄 안에 성격이 완전히 다른 세
          가지가 섞여 있습니다.
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
              {[
                ["구축비", "홈페이지, 구조화 데이터, 크롤러 접근 정비, 정보 일관성 정리", "1회성 · 자산으로 남음"],
                ["운영비", "색인 관리, AI 노출 모니터링, 정보 갱신", "월 고정 · 멈추면 효과도 멈춤"],
                ["콘텐츠비", "촬영, 글, 영상 제작", "분량 비례 · 조절 가능"],
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
          이 구분이 필요한 이유는 <strong>계약을 끝냈을 때 남는 것이 다르기 때문</strong>입니다.
          구축비로 만든 홈페이지는 계약이 끝나도 남습니다. 운영비는 멈추면 그날로 끝납니다. 견적서에
          이게 안 나뉘어 있으면, 1년을 쓰고도 손에 남는 게 없을 수 있습니다.
        </p>

        <h2>견적서에서 확인할 5가지</h2>
        <ul>
          <CheckItem>
            <strong>구축비와 운영비가 나뉘어 있는가.</strong> 안 나뉘어 있으면 나눠 달라고 요청하세요.
            거절하는 곳은 그 이유를 들어볼 필요가 있습니다.
          </CheckItem>
          <CheckItem>
            <strong>계약 종료 시 소유권이 누구에게 남는가.</strong> 홈페이지·도메인·콘텐츠·계정.
            대행사 명의로 만들어 두는 관행이 있습니다.
          </CheckItem>
          <CheckItem>
            <strong>성과를 무엇으로, 몇 번 확인하는가.</strong> AI 답변은 매번 달라지므로 단발 캡처는
            성과가 아닙니다. 질문 목록을 정해 두고 월 단위 추이로 보는지 확인하세요.
          </CheckItem>
          <CheckItem>
            <strong>작업 수량이 적혀 있는가.</strong> &lsquo;콘텐츠 제작&rsquo;이 아니라 &lsquo;월 4건,
            건당 분량 O자&rsquo;처럼 세는 단위가 있어야 비교가 됩니다.
          </CheckItem>
          <CheckItem>
            <strong>&lsquo;보장&rsquo;이라는 단어가 어디 쓰였는가.</strong> 노출 보장은 구조적으로
            어렵습니다. 쓰여 있다면 미달 시 정산 방식을 계약서에 넣어 달라고 하세요.
          </CheckItem>
        </ul>
        <p>
          이 다섯 가지를 포함한 계약 전 질문은{" "}
          <a href="/guide/how-to-choose-geo-agency">GEO 대행사 고르는 법 — 계약 전 7가지 질문</a>에 더
          자세히 정리해 두었습니다.
        </p>

        <h2>왜 지금이 가장 쌀 때인가</h2>
        <p>
          여기서부터는 저희 사이트에서 직접 관측한 값입니다. 마케팅 문구가 아니라{" "}
          <strong>측정치와 그 한계를 같이 적습니다.</strong>
        </p>

        <h3>백링크 1개짜리 사이트가 네이버 AI 1위를 찍었습니다</h3>
        <p>
          저희 도메인은 빙 웹마스터도구 기준 <strong>외부에서 링크를 걸어준 사이트가 1곳뿐</strong>인
          신생 사이트입니다. 보통 이런 사이트는 경쟁 키워드에서 상위에 가지 못합니다. 그런데{" "}
          <strong>&lsquo;병원 GEO 대행&rsquo; 검색에서 네이버 AI 브리핑 1위, 구글 2위</strong>에
          올랐습니다(<a href="/guide/ranked-but-not-in-chatgpt">실험 기록</a>).
        </p>
        <Callout>
          이건 저희가 잘해서라기보다 <strong>그 자리를 놓고 다투는 사람이 아직 적다</strong>는
          뜻입니다. 경쟁이 붙은 시장에서는 링크 1개짜리 신생 도메인이 1위에 가는 일이 일어나지
          않습니다.
        </Callout>

        <h3>웹 존재감이 0이던 가게가 2개월 만에 추천됐습니다</h3>
        <p>
          홈페이지도 플레이스도 없던 지방 중식당 한 곳에 웹 자산을 만들었더니, 두 달 뒤 AI가 그 가게를{" "}
          <strong>추천 4위</strong>로 올렸습니다. 다만 인용한 출처는 홈페이지가 아니라 제3자
          플랫폼이었습니다.{" "}
          <a href="/guide/case-third-party-citation">홈페이지는 인용되지 않아도 인용을 만들어낸다</a>.
          출장세차 사례에서도 2개월 만에 구글 AI 개요에 올랐습니다(
          <a href="/guide/case-mobile-carwash">기록 보기</a>).
        </p>

        <h3>정직하게 — 반대 증거도 있습니다</h3>
        <p>
          같은 사이트가 <strong>빙에서는 8일이 지나도 크롤되지 않았습니다.</strong> 구글은 3일 만에
          읽었는데 말이죠(<a href="/guide/bing-index-bottleneck">실측 기록</a>). 링크가 1개뿐인 것이
          네이버·구글에서는 문제가 안 됐지만 빙에서는 병목이 됐습니다.{" "}
          <strong>&ldquo;지금 하면 다 된다&rdquo;가 아니라, 엔진마다 문턱이 다르다</strong>는 것이
          정확한 서술입니다.
        </p>

        <h2>왜 나중에는 더 비싸지나</h2>
        <p>
          &ldquo;나중에 가격이 오른다&rdquo;는 대행사 요금표 이야기가 아닙니다.{" "}
          <strong>같은 자리를 얻는 데 드는 비용</strong>이 오른다는 뜻이고, 이유는 셋입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>축적이 필요한 신호가 있습니다.</strong> AI는 여러 독립 출처가 공통으로 언급하는지를
            봅니다. 제3자 언급과 색인 이력은 하루아침에 만들 수 없어서, 늦게 시작할수록 따라잡을
            거리가 길어집니다.
          </CheckItem>
          <CheckItem>
            <strong>경쟁자가 늘면 콘텐츠 총량 싸움이 됩니다.</strong> 지금은 그 주제를 제대로 다룬
            문서가 적어 몇 편으로도 자리가 잡히지만, 다들 쓰기 시작하면 같은 자리에 훨씬 많은 분량이
            필요해집니다.
          </CheckItem>
          <CheckItem>
            <strong>검색 광고에서 이미 본 패턴입니다.</strong> 경쟁이 붙은 키워드의 광고비가 어떻게
            올랐는지는{" "}
            <a href="/guide/why-ads-stop-working">네이버 광고비는 오르는데 문의는 그대로일 때</a>에
            정리해 두었습니다.
          </CheckItem>
        </ul>

        <h3>다만 이 말도 같이 해야 공정합니다</h3>
        <p>
          <strong>현재 GEO 관련 검색량 자체는 아직 작습니다.</strong> 저희 서치콘솔 28일치 기준으로
          &lsquo;GEO 대행사&rsquo;류 검색어의 노출은 수십 회 단위입니다. 그러니 지금 GEO를 하는 건{" "}
          <strong>이미 있는 수요를 가져오는 일이 아니라, 수요가 커질 때 자리를 갖고 있는 일</strong>에
          가깝습니다.
        </p>
        <p>
          이걸 기회로 볼지 이르다고 볼지는 업종에 따라 갈립니다. 다만{" "}
          <strong>매장으로 손님이 와야 하는 로컬 사업</strong>은 사정이 조금 다릅니다. &ldquo;OO동
          정형외과 추천&rdquo; 같은 질문은 이미 매일 일어나고 있고, 그 답에 들어갈 후보가 아직
          적습니다. 네이버가 AI 크롤러를 막아 둔 탓에{" "}
          <a href="/guide/naver-blocks-ai-crawlers">네이버 안에 쌓은 정보는 AI가 읽지 못하기</a>{" "}
          때문입니다.
        </p>

        <h2>그래서 얼마를 써야 하나</h2>
        <p>
          절대 금액보다 <strong>비교 기준</strong>이 중요합니다. 비교 대상은 &lsquo;0원&rsquo;이 아니라{" "}
          <strong>지금 이미 나가고 있는 수수료와 광고비</strong>입니다.
        </p>
        <p>
          예를 들어 네이버 펜션 실시간예약 요율(부가세 포함 10.45%)로 연 6,700만원어치를 팔면 수수료로만
          약 700만원이 나갑니다. 저희가 진행한 수도권 근교 펜션 한 곳에서는 촬영·소재·랜딩·광고를 합쳐
          예산 700만원을 잡았고 <strong>그 절반도 쓰지 않았습니다.</strong> 8일간 광고비는 18만
          563원, 랜딩 조회는 2,890건이었습니다(
          <a href="/guide/case-pension-direct-booking">전체 기록</a>).
        </p>
        <Callout>
          정리하면 <strong>&ldquo;이 돈을 새로 쓸 만한가&rdquo;가 아니라 &ldquo;이미 나가는 돈을 어디로
          옮길 것인가&rdquo;</strong>의 문제입니다. 매년 반복해서 나가는 비용과, 한 번 쓰고 자산으로
          남는 비용을 같은 줄에 놓고 비교해야 판단이 됩니다.
        </Callout>

        <h2>정리</h2>
        <p>
          <strong>견적서는 구축비·운영비·콘텐츠비로 나뉘어 있어야 하고, 계약이 끝났을 때 무엇이
          남는지가 적혀 있어야 합니다.</strong> 그리고 지금의 낮은 경쟁 밀도는 영원하지 않습니다. 링크
          1개짜리 사이트가 상위에 오르는 시기는, 그 시기에만 있습니다.
        </p>
        <p>
          우리 가게가 지금 AI에게 어떻게 보이는지는{" "}
          <a href="/site-check">무료 사이트 진단</a>으로 1분이면 확인됩니다. GEO의 정의부터 방법까지는{" "}
          <a href="/guide/geo">GEO 총정리</a>에 한 페이지로 모아 두었습니다.
        </p>
      </GuideArticle>
    </>
  )
}
