import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 44자
const TITLE = "네이버 웹문서엔 없는데 AI 브리핑엔 첫 출처: 같은 검색어 결과가 갈리는 이유"
const DESC =
  "'병원 GEO 대행'으로 네이버에서 검색하면 저희 페이지는 웹문서 탭에 없습니다. 그런데 같은 검색어의 AI 브리핑에서는 첫 번째 출처로 본문에 3번 인용됩니다. 같은 날, 같은 페이지입니다. 웹문서 순위와 AI 브리핑 인용이 왜 따로 움직이는지, 순위가 떨어졌다 싶을 때 무엇부터 확인해야 하는지 저희 사례로 정리했습니다."
const DATE = "2026-09-09"
const UPDATED = "2026-09-10"
const URL = "https://wiztheplanning.com/guide/naver-ai-briefing-vs-web-tab"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "네이버 AI 브리핑 출처", "네이버 웹문서 노출", "네이버 AI 브리핑 인용", "네이버 순위 하락",
    "병원 GEO 대행", "AI 검색 노출 확인", "네이버 통합검색 AI",
  ],
  alternates: { canonical: "/guide/naver-ai-briefing-vs-web-tab" },
  openGraph: { images: ["/covers/naver-ai-briefing-vs-web-tab.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: DATE,
  dateModified: UPDATED,
  inLanguage: "ko",
  author: { "@id": "https://wiztheplanning.com/#organization" },
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  mainEntityOfPage: URL,
}

const FAQ = [
  {
    q: "네이버 웹문서 탭에 안 나오면 네이버 AI에도 안 나오는 건가요?",
    a: "아닙니다. 2026년 9월 8일 저희가 직접 확인한 '병원 GEO 대행' 검색에서 저희 페이지는 웹문서 탭에는 없었지만 같은 검색어의 AI 브리핑에서는 첫 번째 출처로 본문에 3번 인용됐습니다. 웹문서 탭은 문서 순위를 매기는 화면이고, AI 브리핑은 질문에 답이 되는 문단을 고르는 화면이라 결과가 따로 움직입니다. 통합검색 상단의 AI 브리핑 블록에서 출처 목록을 펼쳐 따로 확인해야 합니다.",
  },
  {
    q: "네이버 AI 브리핑은 블로그와 플레이스만 인용하지 않나요?",
    a: "홈페이지도 인용합니다. 저희 사례에서 인용된 것은 회사 홈페이지의 서비스 안내 페이지였고, 인용된 세 곳은 모두 무엇을 어떤 순서로 하는지를 단락으로 설명한 부분이었습니다. 네이버 검색 공식 블로그가 2026년 5월 26일에 밝힌 기준도 출처의 종류가 아니라 직접 경험과 질문에 바로 답하는 구조였습니다.",
  },
  {
    q: "순위가 떨어진 것 같을 때 무엇부터 확인해야 하나요?",
    a: "네 가지를 순서대로 확인하시면 됩니다. 어디에서 떨어졌는지를 AI 브리핑, 웹문서 탭, 구글로 나눠서 보고, 구글 검색 상태 대시보드에서 핵심 업데이트가 있었는지 확인하고, 서치콘솔에서 지난 28일과 이전 28일을 비교해 실제로 떨어진 검색어를 표로 확인하고, 마지막으로 그 페이지를 언제 마지막으로 고쳤는지 봅니다. 저희 경우 구글은 1위 그대로였고, 떨어진 곳은 네이버 웹문서 탭 하나였습니다.",
  },
  {
    q: "웹문서 탭에서 밀린 것은 어떻게 회복하나요?",
    a: "저희가 한 조치는 페이지 본문을 실제로 갱신하고, 관련 글 4편에서 그 페이지로 내부 링크를 걸고, 사이트맵의 수정일을 갱신한 뒤 색인을 다시 요청한 것입니다. 다음 날 네이버 웹문서에 '1일 전' 갱신 표시가 붙어 재수집은 확인했습니다. 순위 변화는 아직 측정 전이라 2주 뒤 다시 재서 이 글에 추가하겠습니다.",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/naver-ai-briefing-vs-web-tab"
        kicker="실제 사례 · 자체 실측"
        title={TITLE}
        description={DESC}
        date="2026년 9월 9일 발행 · 2026년 9월 10일 후속 추가"
      >
        {/* 결론 우선 */}
        <p>
          2026년 9월 8일, 저희 대표가 이렇게 말했습니다. &ldquo;병원 GEO 대행 키워드에서 네이버 인용이
          다 빠졌다.&rdquo; 확인해 보니 <strong>절반만 맞았습니다.</strong> 웹문서 탭에서는 사라졌고,
          같은 검색어의 <strong>AI 브리핑에서는 첫 번째 출처로 본문에 3번 인용</strong>되고 있었습니다.
          같은 날, 같은 페이지입니다.
        </p>
        <p>
          이 글은 그 하루 동안 무엇을 어떤 순서로 확인했는지, 왜 두 결과가 따로 움직이는지, 순위가
          떨어졌다 싶을 때 무엇부터 봐야 하는지를 저희 사례 그대로 적은 기록입니다.
        </p>

        <h2>같은 검색어에서 세 곳이 다르게 답했습니다</h2>
        <p>
          2026년 9월 8일, 로그아웃 상태에서 &lsquo;병원 GEO 대행&rsquo;을 검색한 결과입니다. 확인
          대상은 저희{" "}
          <a href="/medical-geo-agency">병원 GEO 대행 안내 페이지</a> 하나입니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">확인한 곳</th>
                <th className="px-4 py-3 font-bold text-gray-900">저희 페이지</th>
                <th className="px-4 py-3 font-bold text-gray-900">그 자리에 있는 것</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["네이버 AI 브리핑", "출처 4곳 중 첫 번째. 본문에 3회 인용", "저희 포함 4개 도메인"],
                ["네이버 웹문서 탭", "없음", "2026년 6월에 등록된 신규 도메인 한 곳이 상위 7개 전부"],
                ["구글 검색", "일반 결과 1위 (광고 3개 아래)", "AI 개요 없음"],
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
        <p>
          AI 브리핑이 인용한 세 곳은 정해져 있었습니다. 저희 페이지에서 <strong>5단계 프로세스를
          설명한 단락</strong>, <strong>어떤 지표를 보고하는지 적은 단락</strong>,{" "}
          <strong>병원과 어떻게 협업하는지 적은 단락</strong>입니다. 셋 다 &ldquo;무엇을 어떤 순서로
          한다&rdquo;를 문장으로 풀어 쓴 부분이고, 슬로건이나 소개 문구는 하나도 인용되지 않았습니다.
        </p>

        <h2>왜 갈리나: 다른 질문에 답하는 다른 화면입니다</h2>
        <p>
          웹문서 탭과 AI 브리핑은 같은 검색창에서 나오지만 하는 일이 다릅니다.
        </p>
        <ul>
          <CheckItem>
            <strong>웹문서 탭</strong>은 &ldquo;이 검색어에 어떤 문서가 좋은가&rdquo;에 답하는
            순위표입니다. 문서 단위로 점수를 매기고, 새로 발행되거나 자주 갱신되는 사이트에 자리를 잘
            내줍니다. 이번에 상위 7개를 차지한 곳은 두 달 반 전에 등록된 도메인이었습니다.
          </CheckItem>
          <CheckItem>
            <strong>AI 브리핑</strong>은 &ldquo;이 질문에 답이 되는 문단이 어디 있나&rdquo;에 답하는
            화면입니다. 페이지 전체가 아니라 문단을 고르고, 그 문단이 있는 페이지를 출처로 답니다.
            네이버 검색 공식 블로그가 2026년 5월 26일에 밝힌 기준도 출처의 종류가 아니라{" "}
            <strong>직접 경험</strong>과 <strong>질문에 바로 답하는 구조</strong>였습니다. 그 원문과
            저희가 확인한 순서는{" "}
            <a href="/guide/naver-ai-briefing">네이버 AI 브리핑에 인용되기까지의 실제 과정</a>에
            정리해 두었습니다.
          </CheckItem>
          <CheckItem>
            그래서 <strong>두 결과는 같이 움직이지 않습니다.</strong> 눈썹문신 매장 사례에서는 블로그
            순위가 먼저 오르고 AI 브리핑 인용이 뒤따랐는데, 이번 홈페이지 사례에서는 웹문서 탭에서
            밀린 상태에서도 첫 번째 출처였습니다. 두 건뿐이라 규칙이라고 말하지는 않겠습니다. 다만
            &ldquo;웹문서에 없으니 AI에도 없다&rdquo;는 판단은 이 두 건 모두에서 틀렸습니다.
          </CheckItem>
        </ul>

        <Callout>
          <strong>30초 확인법.</strong> 네이버 통합검색에서 검색어를 넣고, 화면 맨 위 AI 브리핑
          블록의 출처 목록을 펼쳐 보세요. 거기 있는 도메인이 &ldquo;네이버 AI에 인용된 곳&rdquo;입니다.
          웹문서 탭은 그 아래 별도 탭이고, 둘은 따로 봐야 합니다. 로그아웃하거나 시크릿 창에서 보시면
          개인화가 빠집니다.
        </Callout>

        <h2>&ldquo;순위 떨어졌다&rdquo; 싶을 때 확인하는 순서</h2>
        <p>
          저희가 9월 8일 하루 동안 실제로 밟은 순서입니다. 감으로 &ldquo;다 빠졌다&rdquo;고 하기
          전에 이 네 가지를 표로 만들면 무엇이 진짜 문제인지 나옵니다.
        </p>
        <ul>
          <CheckItem>
            <strong>1. 어디에서 봤는지 나누기.</strong> 네이버 AI 브리핑, 네이버 웹문서 탭, 구글, 이
            셋을 따로 확인합니다. 저희는 셋 중 하나에서만 밀렸습니다.
          </CheckItem>
          <CheckItem>
            <strong>2. 구글 핵심 업데이트가 있었는지.</strong> 구글 검색 상태 대시보드(status.search.google.com)에
            공식 기록이 있습니다. 2026년 8월과 9월에는 핵심 업데이트가 없었고, 8월 18일부터 21일까지
            스팸 업데이트만 있었습니다. 업데이트 탓으로 돌리기 전에 여기부터 봅니다.
          </CheckItem>
          <CheckItem>
            <strong>3. 서치콘솔에서 지난 28일과 이전 28일 비교.</strong> 검색어 탭에서 위치 차이로
            정렬하면 실제로 떨어진 검색어가 표로 나옵니다. 이것 없이는 어떤 글이 얼마나 떨어졌는지
            아무도 모릅니다.
          </CheckItem>
          <CheckItem>
            <strong>4. 그 페이지를 마지막으로 고친 날.</strong> 저희 대행 페이지는 7월에 발행한 뒤
            제목 표기만 한 번 고쳤을 뿐 본문은 그대로였습니다. 웹문서 탭이 새 사이트에 자리를 내준
            이유로 이것 말고 다른 것을 찾지 못했습니다.
          </CheckItem>
        </ul>

        <h2>저희가 한 조치와 지금까지 확인된 것</h2>
        <ul>
          <CheckItem>
            <strong>9월 8일:</strong> 대행 페이지 본문을 실제로 갱신했습니다. 보고 주기를 현재 운영대로
            주 1회로 고치고, 실제 주간 보고서 양식을 페이지에 넣었습니다. 병원·치과·에스테틱 가이드와
            셀프 체크 글 4편에도 이날 확인한 내용을 반영하고 대행 페이지로 내부 링크를 걸었습니다.
            사이트맵의 수정일을 갱신하고 색인을 다시 요청했습니다.
          </CheckItem>
          <CheckItem>
            <strong>9월 9일:</strong> 네이버 웹문서에서 저희 페이지에 &ldquo;1일 전&rdquo; 갱신 표시가
            붙었습니다. 재수집은 확인됐습니다. 순위 변화는 아직 재지 않았습니다.
          </CheckItem>
          <CheckItem>
            <strong>2주 뒤:</strong> 같은 검색어를 같은 조건으로 다시 재서 이 글에 추가하겠습니다.
            올라가면 올라간 대로, 그대로면 그대로인 대로 적습니다.
          </CheckItem>
        </ul>

        <Callout>
          저희는 노출을 보장하지 않고 측정을 약속합니다. 이 글도 그 약속의 일부입니다. 우리 병원이
          지금 AI 답변에 나오는지는{" "}
          <a href="/guide/check-hospital-ai-visibility">원장님이 5분 만에 직접 확인하는 법</a>으로
          먼저 보시고, 진단이 필요하시면{" "}
          <a href="/medical-diagnosis">병원 전용 무료 AI 검색 진단</a>에서 신청하실 수 있습니다.
        </Callout>

        <h2>후속 (9월 10일): 같은 날, 같은 검색어, 다른 답</h2>
        <p>
          발행 다음 날 두 가지 관찰이 동시에 들어왔습니다. 하나는 저희 대표가 자기 계정으로 본 네이버 AI 탭
          &lsquo;병원 GEO 대행사 추천&rsquo; 답변입니다. 대행사 비교 표에 위즈더플래닝이 &ldquo;자체 GEO 관제
          시스템으로 AI 엔진별 인용 점유율 측정 및 리포트 제공&rdquo;으로 실렸고, 고려사항에도 &ldquo;매주
          같은 기준의 측정 수치로 변화를 보고&rdquo;라는 문장이 저희 사이트 출처로 붙었습니다.{" "}
          <strong>두 문장 모두 9월 8일과 9일에 새로 쓴 문장</strong>입니다. 옛 본문이 아니라 갱신한 본문을 읽고
          만든 답이라는 뜻입니다.
        </p>
        <p>
          다른 하나는 같은 날 저희가 로그아웃 상태의 별도 브라우저에서 같은 검색어를 네 번 새로 생성한
          결과입니다. <strong>네 번 모두 위즈더플래닝이 없었습니다.</strong> 답변 내용과 출처 도메인이 네 번
          다 같았습니다. 계정이나 세션에 따라 저장된 답이 다르게 붙는 것으로 보입니다.
        </p>
        <ul>
          <CheckItem>
            그래서 &ldquo;인용이 돌아왔다&rdquo;고 쓰지 않습니다. 한 화면에서는 돌아왔고, 다른 화면에서는
            아직입니다. 어느 쪽이 대표값인지는 한 번 보기로는 알 수 없습니다.
          </CheckItem>
          <CheckItem>
            판단은 9월 14일 월요일 자동 측정으로 합니다. 같은 질문을 여러 번 새로 물어 인용 비율로 내는
            방식이라, 한 화면의 우연이 걸러집니다. 그 수치를 여기 추가하겠습니다.
          </CheckItem>
          <CheckItem>
            원장님이 직접 확인하실 때도 같습니다. 한 번 나왔다고 안심하거나 한 번 안 나왔다고 실망하지
            마시고, 새 대화창에서 여러 번 물어 몇 번 나오는지를 세어 보세요.
          </CheckItem>
        </ul>

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
