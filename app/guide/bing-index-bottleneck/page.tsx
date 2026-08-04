import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE =
  "IndexNow로 통보하고 8일 — 빙은 아직 우리 글을 읽지 않았습니다 (ChatGPT 노출의 진짜 병목)"
const DESC =
  "같은 글 하나를 같은 날 올렸습니다. 구글은 3일 만에 크롤하고 색인해 검색 결과에 띄웠습니다. 빙은 발행 당일 URL을 '발견'했지만 8일이 지나도록 읽으러 오지 않았습니다. robots.txt 허용도, 빙봇 접속도, IndexNow 통보도, 수동 제출도 전부 정상인데 말입니다. ChatGPT 검색이 빙 색인을 참고하는 이상 이건 곧 AI 노출의 병목입니다 — 우리 사이트에서 실측한 8일간의 기록을 그대로 공개합니다."
const DATE = "2026-08-04"
const URL = "https://wiztheplanning.com/guide/bing-index-bottleneck"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "빙 색인", "Discovered but not crawled", "IndexNow", "빙 웹마스터도구",
    "ChatGPT 노출 조건", "빙 색인 안됨", "신생 사이트 색인", "크롤 예산",
    "빙 크롤링", "AI 검색 노출",
  ],
  alternates: { canonical: "/guide/bing-index-bottleneck" },
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
      name: "'Discovered but not crawled'는 무슨 뜻인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "빙 웹마스터도구에 표시되는 상태로, 빙이 그 URL의 존재는 알고 있지만 아직 페이지를 읽으러(크롤) 가지 않았다는 뜻입니다. 크롤을 하지 않았으므로 색인도 되지 않았고, 따라서 빙 검색 결과에 나올 수 없습니다. 순위가 낮은 것이 아니라 아예 목록에 없는 상태입니다. 함께 표시되는 붉은 경고문은 특정 위반을 지적하는 것이 아니라 이 상태에 붙는 일반 안내 문구입니다.",
      },
    },
    {
      "@type": "Question",
      name: "IndexNow로 통보하면 바로 색인되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아닙니다. IndexNow는 '새 URL이 생겼다'고 알리는 통보이지 색인 보장이 아닙니다. 우리 실측에서 IndexNow 통보는 당일 작동해 빙이 URL을 발견했지만, 실제로 페이지를 읽으러 오기까지는 8일이 지나도 이뤄지지 않았습니다. 발견과 크롤은 별개의 단계이며, 크롤 여부는 도메인의 크롤 예산이 결정합니다.",
      },
    },
    {
      "@type": "Question",
      name: "빙에 색인이 안 되면 ChatGPT에도 안 나오나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "영향이 큽니다. ChatGPT 검색은 빙 색인을 주요 소스로 참고하기 때문에, 빙이 읽지 않은 페이지는 ChatGPT가 실시간으로 인용할 근거가 없습니다. 구글과 네이버에서 아무리 상위에 있어도 이 경로는 열리지 않습니다. 그래서 ChatGPT 노출을 목표로 한다면 빙 색인 상태를 별도로 관리해야 합니다.",
      },
    },
    {
      "@type": "Question",
      name: "빙이 크롤하러 오게 하려면 어떻게 해야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "기술 설정(robots.txt 허용, 사이트맵 등록, IndexNow, 수동 URL 제출)은 기본으로 갖추되, 그것만으로는 부족합니다. 빙은 신생·저권위 도메인에 크롤 예산을 보수적으로 배정하기 때문에 다른 도메인에서 들어오는 외부 링크와 시간이 필요합니다. 같은 URL을 반복 제출하는 것은 대기열 순서를 바꾸지 않으므로 도움이 되지 않습니다.",
      },
    },
  ],
}

type Row = { label: string; google: string; bing: string; gOk: boolean; bOk: boolean }
const ROWS: Row[] = [
  { label: "발행", google: "2026. 7. 27", bing: "2026. 7. 27", gOk: true, bOk: true },
  { label: "URL 발견", google: "사이트맵·내부링크로 발견", bing: "7. 27 (IndexNow 당일)", gOk: true, bOk: true },
  { label: "실제 크롤", google: "7. 30 오후 2:33 (Googlebot 스마트폰)", bing: "8일째 없음", gOk: true, bOk: false },
  { label: "색인", google: "완료 — 검색 결과 노출 가능", bing: "미도달", gOk: true, bOk: false },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/bing-index-bottleneck"
        kicker="자체 실측 · 8일간의 기록"
        title={TITLE}
        description={DESC}
        date="2026년 8월 4일"
      >
        <p>
          &ldquo;홈페이지도 만들고 색인도 신청했는데, 왜 ChatGPT엔 안 나오죠?&rdquo; — 저희가 가장
          많이 받는 질문입니다. 이번엔 답을 말로 하지 않고,{" "}
          <strong>우리 글 하나를 실험대에 올려 8일간 관찰</strong>했습니다. 같은 글, 같은 날, 같은
          조건. 구글과 빙이 어떻게 다르게 반응했는지 그대로 공개합니다.
        </p>

        <h2>실측: 같은 글, 완전히 다른 8일</h2>
        <p>
          대상은 7월 27일에 올린{" "}
          <a href="/guide/platform-ai-crawler-status">한국 플랫폼 15곳 크롤러 실측 현황판</a>{" "}
          글입니다. 아래는 <strong>2026년 8월 4일 기준</strong>, 구글 서치콘솔과 빙 웹마스터도구에서
          같은 URL을 조회한 결과입니다.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">단계</th>
                <th className="px-4 py-3 font-bold text-gray-900">구글</th>
                <th className="px-4 py-3 font-bold text-gray-900">빙</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r.label}</td>
                  <td className={`px-4 py-2.5 ${r.gOk ? "text-gray-700" : "font-bold text-red-500"}`}>{r.google}</td>
                  <td className={`px-4 py-2.5 ${r.bOk ? "text-gray-700" : "font-bold text-red-500"}`}>{r.bing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="!mt-3 text-sm text-gray-500">
          * 빙 웹마스터도구 표시 상태는 <strong>&ldquo;Discovered but not crawled — URL cannot appear
          on Bing&rdquo;</strong>. 확인 시점의 스냅샷이며, 이후 상태는 달라질 수 있습니다.
        </p>

        <Callout>
          한 줄로 요약하면 — <strong>빙은 우리 글이 존재한다는 걸 발행 당일부터 알고 있었습니다.
          그런데 8일이 지나도록 읽으러 오지 않았습니다.</strong> 순위가 낮은 게 아니라, 애초에 목록에
          들어가지 못한 상태입니다.
        </Callout>

        <h2>먼저: 기술 문제가 아니라는 것부터 확인했습니다</h2>
        <p>
          &ldquo;뭔가 막혀 있는 것 아니냐&rdquo;는 가장 흔한 의심입니다. 저희도 그것부터 확인했고,
          네 가지 모두 정상이었습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>robots.txt에서 빙봇을 막지 않음</strong> — 우리 robots.txt는{" "}
            <code>User-Agent: *</code> / <code>Allow: /</code> 로 전체 허용입니다.
          </CheckItem>
          <CheckItem>
            <strong>빙봇으로 접속해도 정상 응답</strong> — bingbot의 User-Agent로 해당 페이지를
            직접 요청해 <strong>HTTP 200</strong>을 확인했습니다. 방화벽이 차단하는 상황이 아닙니다.
            (<a href="/guide/case-urology-clinic">방화벽이 크롤러를 막고 있던 병원 사례</a>와는
            다른 경우입니다.)
          </CheckItem>
          <CheckItem>
            <strong>IndexNow 통보 접수 완료</strong> — 발행 당일 통보했고 응답 코드 200으로
            접수됐습니다. 실제로 빙이 <strong>같은 날 URL을 발견</strong>한 것이 그 증거입니다.
          </CheckItem>
          <CheckItem>
            <strong>수동 URL 제출과 사이트맵 등록까지 완료</strong> — 빙 웹마스터도구에서 URL을
            직접 제출했고(&ldquo;Success&rdquo; 확인), 사이트맵도 등록된 상태입니다.
          </CheckItem>
        </ul>
        <p>
          할 수 있는 기술 조치는 전부 되어 있습니다. 그런데도 안 읽습니다.{" "}
          <strong>원인은 우리 쪽이 아니라 빙의 판단에 있습니다.</strong>
        </p>

        <h2>그럼 왜 안 읽을까 — 크롤 예산</h2>
        <p>
          검색엔진은 모든 페이지를 무한정 읽지 않습니다. 도메인마다{" "}
          <strong>&lsquo;이 사이트를 얼마나 자주, 얼마나 많이 읽을지&rsquo;</strong> 예산을
          배정하는데, 이 예산은 도메인의 신뢰도·연식·외부 링크 같은 요소로 정해집니다.
        </p>
        <p>
          우리 도메인은 검색 관점에서 아직 <strong>신생</strong>입니다. 구글은 사이트맵과 내부 링크를
          단서로 3일 만에 읽으러 왔지만, 빙은 <strong>&ldquo;존재는 알겠는데, 지금 읽을 만큼
          우선순위가 높지는 않다&rdquo;</strong>고 판단한 셈입니다. 빙이 구글보다 도메인 권위 비중을
          크게 보고 신생 도메인에 보수적이라는 점이 이 차이로 나타납니다.
        </p>
        <p>
          중요한 오해 하나 — <strong>같은 URL을 반복해서 제출해도 순서는 바뀌지 않습니다.</strong>{" "}
          구글 서치콘솔도 &ldquo;여러 번 제출해도 대기열 위치나 우선순위가 변경되지 않는다&rdquo;고
          명시합니다. 기다리거나, 신뢰도를 올리거나 둘 중 하나입니다.
        </p>

        <h2>이게 왜 중요한가 — ChatGPT로 가는 길목</h2>
        <p>
          단순한 검색엔진 하나의 문제가 아닙니다. <strong>ChatGPT 검색은 빙 색인을 주요 소스로
          참고합니다.</strong> 빙이 읽지 않은 페이지는 ChatGPT가 실시간으로 인용할 근거 자체가 없다는
          뜻입니다.
        </p>
        <p>
          저희는 앞서{" "}
          <a href="/guide/ranked-but-not-in-chatgpt">
            네이버 AI 1위·구글 2위인데 ChatGPT엔 안 나온다
          </a>
          는 실험을 공개한 적이 있습니다. 그때는 원인을 &lsquo;제3자 교차 근거 부족&rsquo;과
          &lsquo;학습 데이터 시차&rsquo;로 해석했는데, 이번 관찰로{" "}
          <strong>더 앞단의 물리적 병목</strong>이 하나 더 확인된 셈입니다 — 빙이 아직 우리를 읽지도
          않았다는 것.
        </p>
        <Callout>
          경로를 정리하면 이렇습니다 —{" "}
          <strong>발행 → 빙이 발견 → 빙이 크롤 → 빙이 색인 → 빙 순위 확보 → ChatGPT 검색이 인용
          가능</strong>. 우리는 지금 두 번째와 세 번째 사이에 멈춰 있습니다. 구글·네이버 최적화가
          아무리 잘 돼도 이 줄은 따로 서야 합니다.
        </Callout>

        <h2>사장님이 가져갈 실무 교훈 3가지</h2>
        <ul>
          <CheckItem>
            <strong>&lsquo;색인 신청 = 색인 완료&rsquo;가 아닙니다.</strong> IndexNow도, 수동 제출도
            &lsquo;입장 신청&rsquo;일 뿐입니다. 신청 후 검색 결과에 안 보인다고 설정이 잘못된 게
            아니니, 웹 담당자에게 재촉하기 전에 웹마스터도구에서 <strong>상태부터 확인</strong>하세요.
          </CheckItem>
          <CheckItem>
            <strong>엔진별로 시계가 다릅니다.</strong> 우리 실측에서 구글·네이버는 며칠, 빙은 8일이
            지나도 진행 중이었습니다. &ldquo;구글엔 나오는데 ChatGPT엔 왜 안 나오냐&rdquo;는 질문의
            답이 대부분 여기 있습니다.
          </CheckItem>
          <CheckItem>
            <strong>결국 도메인 신뢰도 싸움입니다.</strong> 기술 설정을 다 해두고도 안 읽힌다면 남은
            지렛대는 <strong>외부에서 들어오는 링크와 언급</strong>입니다. 이건 버튼 하나로 되는 게
            아니라 콘텐츠가 벌어오는 것이고, 그래서 GEO가 몇 주가 아니라 몇 달짜리 작업인 이유이기도
            합니다.
          </CheckItem>
        </ul>

        <h2>정직하게 — 이 기록의 한계</h2>
        <p>
          이건 <strong>도메인 한 개, 페이지 한 개, 8일간의 관찰</strong>입니다. 모든 신생 사이트가
          이렇다는 일반화는 할 수 없고, 빙 내부의 판단 기준을 저희가 확인할 방법도 없습니다. 위 표는
          8월 4일 시점의 스냅샷일 뿐이며, 내일 갑자기 크롤될 수도 있습니다.
        </p>
        <p>
          그래서 이 관찰은 계속됩니다. <strong>빙이 실제로 읽어 가는 날, 며칠이 걸렸고 그 사이 무엇이
          달라졌는지 후속 글로 그대로 공개하겠습니다.</strong> 잘된 결과만이 아니라 이렇게 멈춰 있는
          구간까지 기록하는 것이, 저희가 사례를 다루는 방식입니다.
        </p>

        <h2>우리 홈페이지는 어느 단계에 있을까</h2>
        <p>
          최소한 <strong>크롤러가 읽을 수 있는 상태인지</strong>는 지금 바로 확인할 수 있습니다.
          방화벽이나 설정 때문에 아예 막혀 있다면 기다림의 문제가 아니라 고쳐야 할 문제이기
          때문입니다. <a href="/site-check">무료 사이트 진단</a>으로 1분이면 확인됩니다. 업체를
          알아보는 중이시라면{" "}
          <a href="/guide/how-to-choose-geo-agency">GEO 대행사 고르는 법 — 계약 전 7가지 질문</a>도
          함께 보세요.
        </p>
      </GuideArticle>
    </>
  )
}
