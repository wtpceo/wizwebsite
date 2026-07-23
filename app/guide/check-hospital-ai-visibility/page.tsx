import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "우리 병원이 ChatGPT에 나오는지 5분 만에 확인하는 법 (원장님 셀프 체크)"
const DESC =
  "AI에게 환자가 병원을 물어보는 시대입니다. 우리 병원이 그 답변에 나오는지, 혹시 잘못된 정보가 안내되고 있지는 않은지 원장님이 직접 5분 만에 확인하는 방법을 단계별로 정리했습니다. 결과별로 무엇을 해야 하는지까지 담았습니다."
const DATE = "2026-07-18"
const URL = "https://wiztheplanning.com/guide/check-hospital-ai-visibility"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "병원 GEO", "병원 AI 검색 최적화", "ChatGPT 병원 검색", "우리 병원 AI에 안 나옴",
    "병원 AI 노출 확인", "네이버 AI 병원 추천", "병원 마케팅 셀프 진단",
    "의원 GEO", "병원 홈페이지 크롤링", "AI 검색 진단",
  ],
  alternates: { canonical: "/guide/check-hospital-ai-visibility" },
  openGraph: {
    images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
  },
}

// FAQ — 화면과 FAQPage 스키마 공유 (AI가 Q&A를 직접 인용하도록)
const FAQ = [
  {
    q: "우리 병원이 ChatGPT에 나오는지 어떻게 확인하나요?",
    a: "ChatGPT에 환자가 실제로 물어볼 법한 질문(예: '○○동 ○○과 잘하는 병원 추천해줘')을 그대로 입력해 보시면 됩니다. 병원 이름을 직접 넣지 말고, 환자 입장에서 지역과 진료과목으로만 물어보는 것이 핵심입니다. 답변에 우리 병원이 언급되는지, 몇 번째로 나오는지, 정보가 정확한지를 확인하세요. 네이버 AI와 구글에서도 같은 방식으로 확인하면 엔진별 상태를 비교할 수 있습니다.",
  },
  {
    q: "병원 이름으로 검색하면 나오는데 왜 문제인가요?",
    a: "병원 이름으로 검색해서 나오는 것은 이미 우리 병원을 아는 환자에게만 의미가 있습니다. 새로운 환자는 병원 이름을 모르는 상태에서 '이 지역에 ○○ 잘하는 곳'을 묻습니다. 신규 환자 유입은 이 질문에 우리 병원이 포함되는지에 달려 있기 때문에, 반드시 병원명을 빼고 확인해야 실제 상태를 알 수 있습니다.",
  },
  {
    q: "AI가 우리 병원 정보를 틀리게 말하는데 고칠 수 있나요?",
    a: "고칠 수 있습니다. AI는 홈페이지, 지도 서비스, 의료 디렉토리, 리뷰 등 공개된 출처를 근거로 답변합니다. 그 출처들에 있는 정보가 서로 다르거나 오래됐으면 AI도 틀린 정보를 전달합니다. 각 채널의 정보를 정확한 기준으로 통일하면 AI 답변도 점차 교정됩니다. 다만 반영에는 보통 몇 주가 걸립니다.",
  },
  {
    q: "홈페이지는 잘 열리는데 AI에 안 나올 수도 있나요?",
    a: "네, 실제로 자주 있는 일입니다. 사람이 브라우저로 접속하는 것과 AI 크롤러가 페이지를 읽는 것은 다른 경로입니다. 보안 설정이나 오래된 서버 설정이 크롤러 접근만 차단하고 있으면, 홈페이지는 멀쩡히 열려도 AI에게는 존재하지 않는 것과 같습니다. 이 경우 콘텐츠를 아무리 추가해도 효과가 없기 때문에 기술 점검이 먼저입니다.",
  },
  {
    q: "확인해봤더니 아예 안 나옵니다. 무엇부터 해야 하나요?",
    a: "순서가 중요합니다. 첫째로 홈페이지가 AI 크롤러에게 열려 있는지 기술 점검을 하고, 둘째로 홈페이지·지도·디렉토리에 흩어진 병원 정보를 하나로 일치시키고, 셋째로 진료과목과 자주 묻는 질문을 환자 언어로 충분히 설명한 콘텐츠를 갖춥니다. 콘텐츠부터 늘리는 것은 가장 흔한 실수입니다. 막혀 있는 상태에서는 아무것도 읽히지 않기 때문입니다.",
  },
]

const articleJsonLd = {
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
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        kicker="병원 GEO 셀프 체크"
        title={TITLE}
        description={DESC}
        date="2026년 7월 18일"
      >
        <p>
          요즘 환자들은 병원을 찾을 때 검색창에 키워드를 넣는 대신{" "}
          <strong>AI에게 물어봅니다.</strong> &ldquo;○○동에서 ○○ 잘 보는 병원 어디야?&rdquo;라고
          묻고, AI가 추천하는 <strong>몇 곳 중에서</strong> 고릅니다. 그 목록에 없으면 우리 병원은
          환자의 선택지에 아예 존재하지 않습니다.
        </p>
        <p>
          문제는 <strong>대부분의 원장님이 우리 병원이 그 목록에 있는지 없는지 모른다는 것</strong>
          입니다. 홈페이지는 잘 열리고, 병원 이름으로 검색하면 나오니까요. 아래 방법대로 5분만
          투자하면 직접 확인하실 수 있습니다.
        </p>

        <h2>1단계 — 환자처럼 물어보기 (2분)</h2>
        <p>
          ChatGPT를 열고 <strong>병원 이름을 절대 넣지 말고</strong>, 환자가 물어볼 법한 문장을 그대로
          입력해 보세요.
        </p>
        <ul>
          <CheckItem>&ldquo;○○동 ○○과 잘하는 병원 추천해줘&rdquo;</CheckItem>
          <CheckItem>&ldquo;○○ 증상이 있는데 ○○ 근처에서 어디 가야 해?&rdquo;</CheckItem>
          <CheckItem>&ldquo;○○ 지역 ○○과 중에 후기 좋은 곳 알려줘&rdquo;</CheckItem>
        </ul>
        <Callout>
          <strong>병원 이름으로 검색하면 안 되는 이유</strong> — 이름을 아는 환자는 이미 우리 환자입니다.
          신규 환자는 이름을 모르는 상태에서 지역과 증상으로 묻습니다. 이름을 빼고 물어봐야 실제
          상태가 보입니다.
        </Callout>

        <h2>2단계 — 세 가지를 확인하기 (2분)</h2>
        <p>답변이 나왔다면 다음 세 가지를 보세요.</p>
        <ol>
          <CheckItem>
            <strong>언급 여부</strong> — 우리 병원이 답변에 나오나요? 나온다면 몇 번째인가요? 보통
            상위 3곳 안에 들어야 환자의 실제 선택 후보가 됩니다.
          </CheckItem>
          <CheckItem>
            <strong>정보 정확성</strong> — 전화번호, 위치, 진료시간, 진료과목이 맞나요? AI가 틀린
            정보를 말하고 있다면 그건 지금 이 순간에도 환자에게 잘못 안내되고 있다는 뜻입니다.
          </CheckItem>
          <CheckItem>
            <strong>경쟁 병원</strong> — 우리 대신 어디가 추천되나요? 그 병원들의 공통점(홈페이지 정보량,
            리뷰 수, 진료과목 설명)이 우리가 채워야 할 격차입니다.
          </CheckItem>
        </ol>

        <h2>3단계 — 엔진별로 비교하기 (1분)</h2>
        <p>
          같은 질문을 <strong>네이버 AI와 구글</strong>에도 똑같이 던져 보세요. 엔진마다 결과가 다르게
          나오는 경우가 대부분인데, 그 차이가 곧 진단 결과입니다.
        </p>
        <ul>
          <CheckItem>
            <strong>네이버는 나오는데 ChatGPT는 안 나온다</strong> → 플레이스·리뷰는 되어 있으나
            홈페이지가 AI에 읽히지 않을 가능성이 큽니다.
          </CheckItem>
          <CheckItem>
            <strong>어디에도 안 나온다</strong> → 정보가 채널마다 흩어져 있거나, 홈페이지 자체가 크롤러에
            막혀 있을 수 있습니다.
          </CheckItem>
          <CheckItem>
            <strong>나오긴 하는데 정보가 틀리다</strong> → 오정보 교정이 가장 시급합니다. 노출보다 먼저
            해결해야 합니다.
          </CheckItem>
        </ul>
        <p>
          엔진마다 왜 다른 병원을 추천하는지는{" "}
          <a href="/guide/ai-engines-cite-differently">엔진별 인용 출처의 차이</a>에서 자세히
          정리했습니다.
        </p>

        <h2>결과별로 무엇을 해야 하나</h2>
        <p>
          확인이 끝났다면 순서를 지켜야 합니다. <strong>많은 병원이 순서를 틀려서 돈과 시간을
          낭비합니다.</strong>
        </p>
        <ol>
          <CheckItem>
            <strong>기술 점검이 가장 먼저입니다</strong> — 홈페이지가 AI 크롤러에게 열려 있는지 확인합니다.
            막혀 있으면 콘텐츠를 아무리 만들어도 읽히지 않습니다. 실제로 보안 설정이 크롤러까지 막고 있어
            ChatGPT에 아예 안 나오던 사례가 있습니다:{" "}
            <a href="/guide/case-urology-clinic">ChatGPT에 아예 안 뜨던 비뇨기과</a>.
          </CheckItem>
          <CheckItem>
            <strong>정보를 일치시킵니다</strong> — 홈페이지, 지도 서비스, 의료 디렉토리에 있는 병원명·위치·
            연락처·진료시간·진료과목을 하나의 기준으로 통일합니다. AI는 여러 출처를 대조해 신뢰도를
            판단하기 때문에, 말이 다르면 추천하지 않습니다.
          </CheckItem>
          <CheckItem>
            <strong>환자 언어로 콘텐츠를 채웁니다</strong> — 진료과목을 전문용어가 아니라 환자가 쓰는 말로
            설명하고, 자주 묻는 질문을 Q&amp;A 형태로 정리합니다. AI는 질문과 답변이 명확한 콘텐츠를 특히
            잘 인용합니다.
          </CheckItem>
        </ol>
        <Callout>
          병원은 일반 업종과 달리 <strong>의료광고법</strong>이라는 제약이 있습니다. AI에 인용되려고 쓴
          표현이 위반이 되는 경우가 실제로 많습니다. 무엇이 안전하고 무엇이 위험한지는{" "}
          <a href="/guide/medical-geo">병원·의원 GEO 가이드 — 의료광고법 지키면서 인용받는 법</a>에
          정리했습니다. 병원 GEO를 시작하신다면 이 글을 먼저 읽어보시길 권합니다.
        </Callout>

        <h2>자주 묻는 질문</h2>
        <div className="mt-6 space-y-4">
          {FAQ.map((item, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 md:p-6">
              <p className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
                <span className="shrink-0 text-[#00b57f]">Q{i + 1}.</span>
                <span>{item.q}</span>
              </p>
              <p className="mt-3 text-base leading-[1.85] text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>

        <h2>직접 해보기 어렵다면</h2>
        <p>
          위 방법은 대략적인 상태를 파악하는 데는 충분하지만, 한두 번 물어본 결과는 그날의 우연일 수도
          있습니다. 정확히 알려면 <strong>여러 질문을 반복 측정해서 언급 비율을 계산</strong>해야 하고,
          홈페이지의 크롤러 접근 상태처럼 <strong>개발 영역에서만 확인 가능한 부분</strong>도 있습니다.
        </p>
        <p>
          위즈더플래닝은 병원·의원에 한해 이 진단을 <strong>무료로</strong> 해드립니다. 네이버 AI·ChatGPT·
          제미나이에 실제 환자 질문을 반복해 던져 언급 점유율과 오정보를 측정하고, 경쟁 병원과의 격차까지
          리포트로 정리해 드립니다.{" "}
          <a href="/medical-diagnosis">병원 전용 무료 AI 검색 진단</a>에서 신청하실 수 있습니다.
        </p>
      </GuideArticle>
    </>
  )
}
