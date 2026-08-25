import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 46자
const TITLE = "GEO 측정 도구 고르는 법: 직접 만들어 돌려보고 알게 된 5가지"
const DESC =
  "AI 검색 노출을 재는 도구를 고르기 전에 정해야 할 것이 있습니다. 무엇을 질문으로 쓸지, 어떤 엔진을 볼지, 언급과 인용을 나눌지입니다. 저희는 손으로 재다 포기하고 사내 측정 시스템을 만들었고, 그 과정에서 확인한 5가지를 정리했습니다. 실제로 발행한 주간 보고서도 함께 공개합니다."
const DATE = "2026-08-24"
const URL = "https://wiztheplanning.com/guide/geo-measurement-tools"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "GEO 측정 도구", "AI 검색 모니터링", "AI 인용 추적", "GEO 성과 측정",
    "AI 노출 측정", "브랜드 언급 추적", "GEO 도구 비교",
  ],
  alternates: { canonical: "/guide/geo-measurement-tools" },
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
      name: "AI 검색 노출은 그냥 직접 물어보면 되지 않나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "한 번 확인하는 용도라면 직접 물어보는 것이 맞습니다. 문제는 반복입니다. AI 답변은 같은 질문에도 매번 달라져서 한 번 잘 나온 결과는 근거가 되지 않습니다. 질문 수십 개를 여러 엔진에 매주 같은 방식으로 던지고 기록해야 변화를 말할 수 있는데, 이 작업은 손으로 유지하기 어렵습니다.",
      },
    },
    {
      "@type": "Question",
      name: "브랜드 언급과 출처 인용은 어떻게 다른가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "언급은 AI 답변 문장 안에 브랜드 이름이 나오는 것이고, 인용은 답변 아래 출처로 우리 사이트 링크가 달리는 것입니다. 둘은 따로 움직입니다. 저희 측정에서 ChatGPT는 9건을 언급했지만 출처로는 5건만 달았습니다. 언급만 세면 실제보다 좋게 보이고, 인용만 세면 브랜드가 알려지는 과정을 놓칩니다.",
      },
    },
    {
      "@type": "Question",
      name: "엔진은 몇 개를 봐야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "최소한 네이버 AI 브리핑과 글로벌 AI를 함께 봐야 합니다. 네이버는 robots.txt로 글로벌 AI 크롤러를 막고 있어서 두 축이 서로 다른 자료를 봅니다. 한쪽만 재면 다른 쪽에서 무슨 일이 일어나는지 알 수 없습니다. 저희는 네이버 AI 브리핑, Gemini, ChatGPT 세 곳을 기준으로 재고 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "측정 도구를 직접 만들어야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "대부분은 그럴 필요가 없습니다. 시중 도구로 충분하고, 만들면 유지 비용이 계속 듭니다. 저희가 만든 이유는 여러 광고주의 업종별 질문 세트를 따로 관리하고 사이트 진단과 한 화면에서 묶어야 했기 때문입니다. 매장 한 곳을 운영하신다면 도구를 만들 것이 아니라 질문 세트를 정하는 데 시간을 쓰는 편이 낫습니다.",
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
        href="/guide/geo-measurement-tools"
        kicker="실전 전략 · 자체 구축 기록"
        title={TITLE}
        description={DESC}
        date="2026년 8월 24일"
      >
        {/* 결론 우선 */}
        <p>
          <strong>도구를 비교하기 전에 무엇을 잴지부터 정해야 합니다.</strong> 질문 세트, 엔진 범위,
          언급과 인용의 구분. <strong>이 셋이 정해지지 않으면 어떤 도구를 써도 숫자가 흔들립니다.</strong>
          저희는 손으로 재다 포기하고 사내 측정 시스템을 만들었고, 그때 확인한 것을 적습니다.
        </p>

        <h2>1. 한 번 확인과 매주 측정은 완전히 다른 일입니다</h2>
        <p>
          우리 브랜드가 AI에 나오는지 <strong>한 번 보는 건 도구가 필요 없습니다.</strong> ChatGPT에
          직접 물어보면 됩니다(<a href="/guide/check-hospital-ai-visibility">확인하는 법</a>).
        </p>
        <p>
          문제는 그다음입니다. <strong>AI 답변은 같은 질문에도 매번 달라집니다.</strong> 한 번 잘 나온
          화면은 근거가 되지 못합니다. &ldquo;지난주보다 나아졌다&rdquo;고 말하려면 같은 질문을 같은
          방식으로 반복해야 하는데, 여기서 손으로 하는 방식이 무너집니다.
        </p>
        <ul>
          <CheckItem>질문 50개를 3개 엔진에 던지면 <strong>1회 측정에 150번</strong>입니다</CheckItem>
          <CheckItem>답변마다 언급 여부와 출처 링크를 <strong>따로 기록</strong>해야 합니다</CheckItem>
          <CheckItem>이걸 <strong>매주</strong>, 광고주 수만큼 반복합니다</CheckItem>
        </ul>
        <p>
          엑셀로 두세 번은 됩니다. <strong>넉 주째부터 기준이 흐트러집니다.</strong> 누가 언제 어떤
          질문으로 쟀는지가 사람마다 달라지기 때문입니다.
        </p>

        <h2>2. 질문 세트가 도구보다 먼저입니다</h2>
        <p>
          가장 흔한 실수가 <strong>업종명만 넣고 재는 것</strong>입니다. 손님은 그렇게 묻지 않습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">이렇게 재면</th>
                <th className="px-4 py-3 font-bold text-gray-900">이렇게 재야 합니다</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["강남 피부과", "강남에서 여드름 흉터 잘 보는 피부과 추천해줘"],
                ["가평 펜션", "가평 근처 아이랑 갈 만한 조용한 펜션 있어?"],
                ["GEO 대행사", "서울에서 AI 검색 최적화 대행사 찾는데 어디가 괜찮아?"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 text-gray-500">{r[0]}</td>
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>질문이 틀리면 뒤의 모든 숫자가 의미를 잃습니다.</strong> 도구는 시킨 대로 재줄 뿐,
          무엇을 물을지는 정해주지 않습니다. 여기가 사람이 해야 하는 일입니다.
        </p>

        <h2>3. 언급과 인용은 반드시 나눠서 세야 합니다</h2>
        <p>
          <strong>브랜드 언급</strong>은 답변 문장에 이름이 나오는 것이고, <strong>출처 인용</strong>은
          답변 아래 우리 사이트 링크가 달리는 것입니다. 둘은 같이 움직이지 않습니다.
        </p>
        <p>2026년 8월 3주차에 저희 사이트를 재본 결과입니다.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">엔진</th>
                <th className="px-4 py-3 font-bold text-gray-900">브랜드 언급</th>
                <th className="px-4 py-3 font-bold text-gray-900">출처 인용</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Gemini", "10 / 50", "10 / 50"],
                ["ChatGPT", "9 / 50", "5 / 50"],
                ["네이버 AI 브리핑", "7 / 39", "5 / 39"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Gemini는 언급한 10건을 전부 출처로도 달았고, ChatGPT는 9건 중 5건만 달았습니다.</strong>{" "}
          언급만 세면 실제보다 좋아 보이고, 인용만 세면 브랜드가 알려지는 과정을 놓칩니다. 도구를 고를 때
          이 둘을 나눠서 보여주는지 확인하셔야 합니다.
        </p>

        <h2>4. 엔진은 두 축을 다 봐야 합니다</h2>
        <p>
          <strong>네이버는 robots.txt로 글로벌 AI 크롤러를 막고 있습니다</strong>(
          <a href="/guide/naver-blocks-ai-crawlers">실측 기록</a>). 그래서 네이버 AI 브리핑과
          ChatGPT는 애초에 서로 다른 자료를 봅니다.
        </p>
        <p>
          저희 페이지가 <strong>네이버 AI 브리핑 1위인데 ChatGPT에는 안 나온 적</strong>도 있습니다(
          <a href="/guide/ranked-but-not-in-chatgpt">실험 기록</a>). 한쪽만 재고 있었다면 이 사실을
          영영 몰랐을 겁니다.
        </p>
        <Callout>
          해외 도구는 대부분 <strong>네이버 AI 브리핑을 지원하지 않습니다.</strong> 국내 로컬 업종이라면
          이게 결정적입니다. 도구 목록을 비교하기 전에 <strong>네이버를 재주는가</strong>부터 확인하세요.
        </Callout>

        <h2>5. 대부분은 직접 만들 필요가 없습니다</h2>
        <p>
          솔직하게 적겠습니다. <strong>저희가 만들었다고 해서 만드시라는 뜻이 아닙니다.</strong> 만들면
          유지 비용이 계속 듭니다. 엔진 API가 바뀌면 따라가야 하고, 응답 형식이 달라지면 파서를 고쳐야
          합니다.
        </p>
        <p>저희가 만든 이유는 조건이 달랐기 때문입니다.</p>
        <ul>
          <CheckItem><strong>광고주마다 업종·지역이 달라</strong> 질문 세트를 따로 관리해야 했습니다</CheckItem>
          <CheckItem><strong>사이트 진단과 AI 측정을 한 화면</strong>에서 봐야 원인을 찾을 수 있었습니다</CheckItem>
          <CheckItem><strong>매주 같은 양식의 보고서</strong>를 광고주 수만큼 만들어야 했습니다</CheckItem>
        </ul>
        <p>
          <strong>매장 한 곳을 운영하신다면 도구를 만들 게 아니라 질문 세트를 정하는 데 시간을
          쓰세요.</strong> 질문 10개를 정해두고 한 달에 한 번 직접 물어보며 적기만 해도, 아무것도 안 재는
          것보다 훨씬 낫습니다.
        </p>

        <h2>저희는 이렇게 씁니다</h2>
        <p>
          위 다섯 가지를 반영해 사내 측정 시스템을 만들었고, <strong>저희 회사부터 첫 번째 대상으로
          넣었습니다.</strong> 아래가 실제로 발행한 주간 보고서입니다. 광고주께 드리는 것과 같은
          양식이고 숫자는 손대지 않았습니다.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <img
            src="/report/weekly-report-1.jpg"
            alt="위즈더플래닝 AI 검색 노출 주간 보고서 1면: 멘션 노출률 20%, 출처 인용률 22%, 엔진별 상세"
            className="w-full rounded-xl border border-gray-200"
            loading="lazy"
          />
          <img
            src="/report/weekly-report-2.jpg"
            alt="위즈더플래닝 AI 검색 노출 주간 보고서 2면: 구글 검색 순위 변화와 다음 주 작업 계획"
            className="w-full rounded-xl border border-gray-200"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-sm text-gray-500">
          이 시스템은 사내 운영용이라 외부에 판매하지 않습니다. 광고주께는 시스템 계정이 아니라 정리된
          보고서와 해석을 드립니다.
        </p>

        <h2>정리</h2>
        <p>
          <strong>도구 비교표를 먼저 보지 마세요.</strong> 질문 세트를 정하고, 언급과 인용을 나누고,
          네이버와 글로벌 AI 두 축을 다 볼 것인지 결정하면 후보는 자연히 좁혀집니다. 그 셋이 없으면
          비싼 도구를 써도 매주 다른 숫자가 나옵니다.
        </p>
        <p>
          측정을 4단계로 나눠 세는 방법은{" "}
          <a href="/guide/measure-ai-traffic">AI 검색 유입 측정: 4단계로 나눠 세기</a>에 정리해 두었고,
          우리 홈페이지가 AI에게 어떻게 보이는지는 <a href="/site-check">무료 사이트 진단</a>으로 바로
          확인하실 수 있습니다.
        </p>
        <p>
          구조화 데이터를 넣었는데도 노출이 없다면 원인 7가지를{" "}
          <a href="/guide/structured-data-not-working">구조화 데이터 넣었는데 AI 검색에 안 잡히는 7가지 이유</a>에
          점검 순서와 함께 정리했습니다.
        </p>
      </GuideArticle>
    </>
  )
}
