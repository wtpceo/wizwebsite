import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 42자
const TITLE = "GEO 직접 할까 대행 맡길까: 시간과 비용으로 갈리는 지점"
const DESC =
  "AI 검색에 우리 가게를 올리는 일은 직접 할 수도 있고 맡길 수도 있습니다. 갈리는 기준은 예산이 아니라 매주 반복할 수 있느냐입니다. 직접과 위탁의 차이, 대행 유형 3가지, 직접 하다 전환할 때 무엇이 남는지를 정리했습니다."
const DATE = "2026-08-27"
const URL = "https://wiztheplanning.com/guide/geo-diy-or-agency"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "GEO 대행", "GEO 직접", "AI 검색 최적화 대행", "GEO 비용",
    "AI 노출 셀프", "GEO 업체 유형",
  ],
  alternates: { canonical: "/guide/geo-diy-or-agency" },
  openGraph: { images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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
      name: "직접 하다가 중간에 대행으로 바꿔도 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "됩니다. 그리고 직접 해보신 경우가 오히려 유리합니다. 정리해둔 사업 정보, 만들어둔 FAQ, 무엇보다 어떤 질문으로 확인해왔는지가 그대로 자산이 됩니다. 대행으로 넘어갈 때 가장 오래 걸리는 것이 질문 세트를 정하는 일인데, 그게 이미 있으면 첫 달을 아낍니다.",
      },
    },
    {
      "@type": "Question",
      name: "직접 하면 비용이 안 드나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "돈은 거의 안 들지만 시간이 듭니다. 한 번 세팅하는 것은 하루면 되는데, 문제는 그다음입니다. AI 답변은 같은 질문에도 매번 달라져서 한 번 확인한 결과는 근거가 되지 않습니다. 같은 질문을 주기적으로 반복해 기록해야 변화를 알 수 있고, 이 반복을 사장님이 직접 이어갈 수 있느냐가 실제 갈림길입니다.",
      },
    },
    {
      "@type": "Question",
      name: "며칠 만에 AI에 노출되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "정해진 기간이 없습니다. 색인 주기와 신뢰 신호가 쌓이는 속도에 따라 편차가 크기 때문입니다. 특정 일수 안에 노출을 보장한다고 말하는 곳은 근거를 확인해보셔야 합니다. AI 답변은 같은 질문에도 결과가 달라지므로 보장이 구조적으로 어렵습니다.",
      },
    },
    {
      "@type": "Question",
      name: "효과가 없으면 환불되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "업체마다 다르므로 계약 전에 서면으로 확인하셔야 합니다. 특히 노출 보장 문구가 있는데 미달성 시 조항이 없다면 그 문구는 지켜지지 않아도 책임을 물을 근거가 없다는 뜻입니다.",
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
        href="/guide/geo-diy-or-agency"
        kicker="실전 전략 · 판단 기준"
        title={TITLE}
        description={DESC}
        date="2026년 8월 27일"
      >
        {/* 결론 우선 */}
        <p>
          <strong>갈리는 기준은 예산이 아니라 &lsquo;매주 반복할 수 있느냐&rsquo;입니다.</strong> 한 번
          세팅하는 일은 사장님도 하실 수 있습니다. 문제는 그다음입니다.{" "}
          <strong>AI 답변은 같은 질문에도 매번 달라져서, 반복해서 재지 않으면 좋아졌는지 알 수
          없습니다.</strong>
        </p>

        <h2>직접과 위탁, 실제로 갈리는 곳</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">항목</th>
                <th className="px-4 py-3 font-bold text-gray-900">직접</th>
                <th className="px-4 py-3 font-bold text-gray-900">위탁</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["초기 세팅", "하루면 가능", "대행사가 진행"],
                ["매주 반복 측정", "사장님이 직접", "대행사가 같은 기준으로"],
                ["기준의 일관성", "바쁘면 흔들림", "같은 질문·같은 엔진 유지"],
                ["돈", "거의 안 듦", "월 단위 비용"],
                ["가장 큰 부담", "시간과 지속성", "비용과 업체 선택"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          <strong>세팅은 한 번이고 측정은 계속입니다.</strong> 홈페이지에 정보를 정리하고 구조화
          데이터를 넣는 것은 끝이 있는 일입니다. 그런데 그게 효과가 있는지 확인하는 일에는 끝이
          없습니다. <strong>직접 할지 맡길지는 이 반복을 누가 감당하느냐의 문제</strong>입니다.
        </Callout>

        <h2>직접 하는 게 나은 경우</h2>
        <ul>
          <CheckItem>
            <strong>가게가 한 곳이고 주력 질문이 몇 개로 뻔한 경우.</strong> 질문 10개 정도를 정해두고
            한 달에 한 번 직접 물어보며 적기만 해도 아무것도 안 재는 것보다 훨씬 낫습니다
          </CheckItem>
          <CheckItem>
            <strong>홈페이지를 직접 고칠 수 있는 경우.</strong> 남에게 부탁해야 한 줄 고치는 구조라면
            직접 진행은 금방 막힙니다
          </CheckItem>
          <CheckItem>
            <strong>당장 예산이 없는 경우.</strong> 돈을 들이기 전에 무엇이 문제인지 스스로 파악해두면,
            나중에 맡길 때 훨씬 유리한 위치에서 이야기할 수 있습니다
          </CheckItem>
        </ul>
        <p>
          무엇을 먼저 손봐야 하는지는{" "}
          <a href="/guide/get-cited-by-ai">우리 가게가 AI 답변에 나오게 하는 7가지 방법</a>에
          정리해두었고, 지금 우리 홈페이지 상태는{" "}
          <a href="/site-check">무료 사이트 진단</a>에서 주소만 넣으면 바로 확인됩니다.
        </p>

        <h2>맡기는 게 나은 경우</h2>
        <ul>
          <CheckItem>
            <strong>매장 운영만으로 하루가 다 가는 경우.</strong> 가장 흔한 이유이고 가장 정직한
            이유입니다
          </CheckItem>
          <CheckItem>
            <strong>지점이 여러 곳이거나 진료과목이 많은 경우.</strong> 질문 세트가 곱하기로 늘어나
            손으로는 유지가 안 됩니다
          </CheckItem>
          <CheckItem>
            <strong>경쟁사와 비교해서 봐야 하는 경우.</strong> 우리만 재는 것과, 같은 질문에 누가
            대신 추천되는지까지 재는 것은 작업량이 다릅니다
          </CheckItem>
        </ul>

        <h2>대행 유형은 세 가지입니다</h2>
        <p>
          &ldquo;GEO 대행&rdquo;이라는 한 단어 안에 성격이 다른 서비스가 섞여 있습니다. 견적을 비교하기
          전에 <strong>어느 유형을 원하는지부터 정하셔야</strong> 금액 비교가 의미를 갖습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">유형</th>
                <th className="px-4 py-3 font-bold text-gray-900">받는 것</th>
                <th className="px-4 py-3 font-bold text-gray-900">이럴 때</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["진단형", "현황 진단과 개선 순서", "직접 실행할 여력은 있을 때"],
                ["부분 위탁형", "구조화 세팅과 콘텐츠 일부", "시간은 없고 예산은 빠듯할 때"],
                ["전담형", "측정·콘텐츠·리포트 전부", "반복을 통째로 넘기고 싶을 때"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          <strong>&ldquo;몇 개월 안에 반드시 노출된다&rdquo;고 단정하는 곳은 근거를
          확인하세요.</strong> AI 답변은 같은 질문에도 결과가 달라지기 때문에 특정 기간 보장이
          구조적으로 어렵습니다. 계약 전에 물어볼 것은{" "}
          <a href="/guide/how-to-choose-geo-agency">GEO 대행사 고르는 법</a>에 7가지로 정리해
          두었습니다.
        </Callout>

        <h2>직접 하다 맡겨도 처음부터 다시 하지 않습니다</h2>
        <p>
          직접 해보신 분이 오히려 유리합니다. <strong>남는 것이 세 가지</strong>입니다.
        </p>
        <ul>
          <CheckItem><strong>정리해둔 사업 정보</strong>와 홈페이지 구조</CheckItem>
          <CheckItem><strong>만들어둔 FAQ</strong>와 콘텐츠</CheckItem>
          <CheckItem>
            <strong>어떤 질문으로 확인해왔는지</strong>. 이게 가장 큽니다
          </CheckItem>
        </ul>
        <p>
          <strong>대행으로 넘어갈 때 가장 오래 걸리는 일이 질문 세트를 정하는 것</strong>인데, 직접
          해보셨다면 그게 이미 있습니다. 첫 달을 통째로 아낍니다.
        </p>

        <h2>어느 쪽이든 이건 먼저 하세요</h2>
        <p>
          맡기든 직접 하든 <strong>지금 상태를 한 번은 재두셔야</strong> 합니다. 기준선이 없으면
          한 달 뒤에 좋아졌다는 말도, 나빠졌다는 말도 증명할 수 없습니다.
        </p>
        <p>
          재는 방법은 <a href="/guide/measure-ai-traffic">AI 검색 유입 측정: 4단계로 나눠 세기</a>에
          단계별로 정리해두었습니다. 검색엔진 순위와 AI 답변 노출이 어떻게 다른지는{" "}
          <a href="/guide/geo-vs-seo">GEO와 SEO 차이</a>에서 다뤘습니다.
        </p>
        <p>
          저희에게 맡기실 경우 어떻게 진행되는지는{" "}
          <a href="/site-check">무료 진단 결과 화면 아래</a>에 4단계로 적어두었습니다. 질문 세트를
          만들고, 세 엔진에 반복 측정하고, 주 1회 리포트를 드리고, 우선순위대로 고칩니다.
        </p>
        <p>
          아직 GEO가 뭔지 감이 안 오시면{" "}
          <a href="/guide/what-is-geo">AI 검색 최적화 쉬운 설명</a>에 정리해 두었습니다.
        </p>
        <p>
          대행사를 고를 때 추천 순위를 믿어도 되는지는{" "}
          <a href="/guide/geo-agency-recommendation-check">검색 상위 추천 글 검증</a>에 정리했습니다.
        </p>
      </GuideArticle>
    </>
  )
}
