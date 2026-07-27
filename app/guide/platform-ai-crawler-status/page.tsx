import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE =
  "한국 플랫폼 15곳, AI가 읽을 수 있는 곳은 어디인가 — robots.txt 전수 실측 현황판 (2026.7)"
const DESC =
  "네이버 블로그·카페, 카카오맵, 브런치, 티스토리, 다이닝코드, 식신, 배민, 당근, 인스타그램, 유튜브까지 — 한국 사장님들이 콘텐츠를 쌓는 플랫폼 15곳의 robots.txt를 2026년 7월 27일 직접 전수 확인했습니다. 결과는 극명하게 갈립니다. 네이버 계열은 AI 학습·검색 봇을 전부 차단했고, 브런치·다이닝코드는 '학습은 차단, AI 검색은 허용'이라는 정교한 선택을 했으며, 식신·티스토리는 완전 개방입니다. 어디에 쌓은 콘텐츠가 AI 답변에 인용될 수 있는지, 원문 인용과 출처를 그대로 공개합니다."
const DATE = "2026-07-27"
const URL = "https://wiztheplanning.com/guide/platform-ai-crawler-status"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "AI 크롤러 차단 현황", "robots.txt AI 차단", "GPTBot 차단 사이트", "네이버 블로그 AI 차단",
    "ChatGPT 크롤링 허용 플랫폼", "OAI-SearchBot", "AI 검색봇 학습봇 차이", "다이닝코드 AI",
    "브런치 AI 크롤러", "플랫폼별 AI 접근",
  ],
  alternates: { canonical: "/guide/platform-ai-crawler-status" },
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
      name: "네이버 블로그에 쓴 글을 ChatGPT가 읽을 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "읽을 수 없습니다. 2026년 7월 27일 실측 기준, 네이버 블로그 robots.txt는 학습용 봇(GPTBot, ClaudeBot, Google-Extended 등)과 AI 검색용 봇(OAI-SearchBot, PerplexityBot, Claude-SearchBot)을 모두 이름으로 지정해 차단하고 있으며, 'AI 학습 및 RAG 목적의 봇 접근을 엄격히 금지한다'는 경고문을 명시하고 있습니다. 네이버 카페와 스마트스토어도 마찬가지입니다.",
      },
    },
    {
      "@type": "Question",
      name: "AI 학습봇 차단과 AI 검색봇 차단은 뭐가 다른가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "학습봇(GPTBot, ClaudeBot, Google-Extended, CCBot 등)은 AI 모델 훈련용 데이터를 수집하고, 검색봇(OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot 등)은 사용자가 질문한 순간 실시간으로 페이지를 읽어 답변에 인용합니다. 학습봇만 차단하면 데이터는 안 뺏기면서 AI 답변 인용은 유지됩니다. 검색봇까지 차단하면 AI 답변에 인용될 수 없습니다. 다이닝코드와 브런치가 전자의 전략을 쓰고 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "그럼 어디에 콘텐츠를 쌓아야 AI가 인용하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026년 7월 27일 실측 기준으로 AI 검색봇이 읽을 수 있는 곳은 자기 소유의 홈페이지, 브런치, 티스토리, 다이닝코드(맛집), 식신(맛집), 요기요, 유튜브(제목·설명 등 텍스트 영역)입니다. 반대로 네이버 블로그·카페·스마트스토어, 카카오맵, 배민, 당근, 캐치테이블, 인스타그램은 차단 상태입니다. 가장 확실한 것은 차단 정책이 언제 바뀔지 걱정할 필요가 없는 자기 홈페이지입니다.",
      },
    },
  ],
}

// 실측 요약 데이터 (2026-07-27 확인) — 표 렌더링용
type Row = {
  platform: string
  train: "block" | "allow" | "partial"
  search: "block" | "allow" | "partial"
  note: string
}
const ROWS: Row[] = [
  { platform: "네이버 블로그", train: "block", search: "block", note: "학습·검색봇 이름 지정 전부 차단 + RAG 금지 경고문" },
  { platform: "네이버 카페", train: "block", search: "block", note: "모든 봇 전면 차단 (구글·빙 검색봇까지)" },
  { platform: "네이버 스마트스토어", train: "block", search: "block", note: "AI봇 지정 차단 + 나머지 전면 차단" },
  { platform: "네이버 메인", train: "block", search: "block", note: "첫 화면 외 전체 차단" },
  { platform: "카카오맵", train: "block", search: "block", note: "네이버와 동일한 RAG 금지 경고문 채택" },
  { platform: "브런치 (카카오)", train: "block", search: "allow", note: "학습봇 차단, AI 검색봇은 일반 검색과 동급 허용" },
  { platform: "티스토리 (카카오)", train: "allow", search: "allow", note: "AI봇 제한 없음 — 관리 경로만 차단" },
  { platform: "다이닝코드", train: "block", search: "partial", note: "학습봇 차단, ChatGPT 검색봇 허용 (퍼플렉시티는 차단)" },
  { platform: "식신", train: "allow", search: "allow", note: "AI봇 제한 없음" },
  { platform: "캐치테이블", train: "block", search: "block", note: "허용 목록 방식 — AI봇은 목록에 없음" },
  { platform: "배달의민족", train: "block", search: "block", note: "구글봇·네이버봇만 허용, 나머지 전면 차단" },
  { platform: "요기요", train: "allow", search: "allow", note: "AI봇 제한 없음 — 결제 경로 등만 차단" },
  { platform: "당근", train: "block", search: "block", note: "국내 콘텐츠(/kr/)에서 AI봇 47종 차단 — 가장 광범위" },
  { platform: "인스타그램", train: "block", search: "block", note: "AI봇 지정 차단 + 자동 수집 전면 금지 고지" },
  { platform: "유튜브", train: "allow", search: "allow", note: "시청 페이지 개방 — 단 읽히는 건 제목·설명 등 텍스트" },
]

function Mark({ v }: { v: Row["train"] }) {
  if (v === "allow") return <span className="font-bold text-emerald-600">허용</span>
  if (v === "block") return <span className="font-bold text-red-500">차단</span>
  return <span className="font-bold text-amber-600">일부</span>
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/platform-ai-crawler-status"
        kicker="자체 실측 · 현황판"
        title={TITLE}
        description={DESC}
        date="2026년 7월 27일"
      >
        <p>
          &ldquo;블로그에 열심히 쓰면 AI도 언젠가 읽지 않을까요?&rdquo; — 이 질문에 추측으로 답하는
          글은 많지만, <strong>실제로 확인한 자료는 찾기 어렵습니다.</strong> 그래서 저희가 직접
          했습니다. <strong>2026년 7월 27일</strong>, 한국 사장님들이 콘텐츠를 쌓는 주요 플랫폼{" "}
          <strong>15곳의 robots.txt를 전수 확인</strong>했습니다. robots.txt는 각 사이트가
          &ldquo;어떤 봇의 접근을 허용·차단하는지&rdquo; 공개적으로 선언하는 표준 파일입니다. 아래
          내용은 전부 원문에서 확인한 사실이며, 출처(각 플랫폼의 robots.txt 주소)를 함께 남깁니다.
        </p>

        <h2>먼저 알아야 할 것 — AI 봇은 두 종류입니다</h2>
        <ul>
          <CheckItem>
            <strong>학습봇</strong> (GPTBot, ClaudeBot, Google-Extended, CCBot 등) — AI 모델을
            훈련시킬 데이터를 수집합니다. 차단해도 AI 답변 인용에 주는 영향은 제한적입니다.
          </CheckItem>
          <CheckItem>
            <strong>AI 검색봇</strong> (OAI-SearchBot, ChatGPT-User, Claude-SearchBot,
            PerplexityBot 등) — 사용자가 질문한 순간 <strong>실시간으로 페이지를 읽어 답변에
            인용</strong>합니다. <strong>이게 차단되면 AI 답변에 인용될 수 없습니다.</strong>
          </CheckItem>
        </ul>
        <p>
          이 구분이 중요한 이유: 아래에서 보듯, 어떤 플랫폼은 <strong>둘 다 차단</strong>하고, 어떤
          플랫폼은 <strong>학습만 차단하고 검색은 열어두는</strong> 정교한 선택을 하고 있기
          때문입니다.
        </p>

        <h2>실측 결과 한눈에 (2026년 7월 27일 기준)</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">플랫폼</th>
                <th className="px-3 py-3 font-bold text-gray-900">AI 학습봇</th>
                <th className="px-3 py-3 font-bold text-gray-900">AI 검색봇</th>
                <th className="px-4 py-3 font-bold text-gray-900">비고</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.platform} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r.platform}</td>
                  <td className="px-3 py-2.5"><Mark v={r.train} /></td>
                  <td className="px-3 py-2.5"><Mark v={r.search} /></td>
                  <td className="px-4 py-2.5 text-gray-600">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="!mt-3 text-sm text-gray-500">
          * 네이버 플레이스는 확인 시도 시 요청 제한(429)으로 robots.txt를 받지 못해 표에서
          제외했습니다. robots.txt는 언제든 변경될 수 있어 위 표는 확인 시점의 스냅샷입니다.
        </p>

        <h2>발견 ① 네이버 계열 — 학습도, AI 검색도 전부 닫았다</h2>
        <p>
          네이버 블로그 robots.txt 최상단에는 이렇게 적혀 있습니다(
          <a href="https://blog.naver.com/robots.txt" target="_blank" rel="noopener noreferrer">원문 보기</a>).
        </p>
        <Callout>
          &ldquo;BOT ACCESS FOR THE PURPOSES OF AI TRAINING AND RETRIEVAL-AUGMENTED GENERATION
          (RAG) IS STRICTLY PROHIBITED.&rdquo; — AI 학습 및 검색 증강 생성(RAG) 목적의 봇 접근을
          엄격히 금지한다는 뜻입니다.
        </Callout>
        <p>
          그 아래로 GPTBot, <strong>OAI-SearchBot</strong>, PerplexityBot, ClaudeBot,{" "}
          <strong>Claude-SearchBot</strong>, Google-Extended 등이 전부 이름으로 지정돼 차단돼
          있습니다. 학습봇만이 아니라 <strong>AI 검색봇까지</strong> 막았다는 게 핵심입니다.
          네이버 카페는 한 걸음 더 나가 <strong>구글봇·빙봇 같은 일반 검색봇까지 전면
          차단</strong>이고(
          <a href="https://cafe.naver.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>),
          스마트스토어도 같은 구조입니다(
          <a href="https://smartstore.naver.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
          네이버가 왜 이런 선택을 했는지는{" "}
          <a href="/guide/naver-blocks-ai-crawlers">네이버가 AI 접근을 막은 이유</a>에서 자세히
          다뤘습니다.
        </p>

        <h2>발견 ② 카카오 계열 — 같은 회사인데 서비스마다 다르다</h2>
        <p>
          흥미로운 건 카카오입니다. <strong>카카오맵</strong>은 네이버와 똑같은 영문 경고문까지
          채택하며 전부 차단했지만(
          <a href="https://map.kakao.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>),{" "}
          <strong>브런치</strong>는 정반대의 선택을 했습니다(
          <a href="https://brunch.co.kr/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
        </p>
        <p>
          브런치 robots.txt는 봇을 세 등급으로 나눕니다. 학습봇(GPTBot·ClaudeBot 등)은 전면
          차단하되, 주석에 &ldquo;Other search engines and AI search assistants&rdquo;라고 적힌
          그룹 — <strong>OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User,
          PerplexityBot</strong> — 은 빙봇과 같은 등급으로 <strong>허용</strong>합니다. 즉{" "}
          <strong>브런치에 쓴 글은 ChatGPT·클로드·퍼플렉시티 검색이 읽고 인용할 수
          있습니다.</strong> <strong>티스토리</strong>는 아예 AI봇 제한 자체가 없어 완전
          개방입니다(<a href="https://notice.tistory.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
        </p>

        <h2>발견 ③ 다이닝코드 — &lsquo;학습은 차단, 인용은 유지&rsquo;라는 정교한 수</h2>
        <p>
          다이닝코드 robots.txt에는 한국어 주석이 그대로 적혀 있습니다(
          <a href="https://www.diningcode.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
        </p>
        <Callout>
          &ldquo;AI 모델 무단 학습 차단 (검색 인덱싱/트래픽 유입은 유지)&rdquo; — GPTBot·ClaudeBot
          등 학습봇은 차단하되, ChatGPT 검색이 쓰는 OAI-SearchBot과 ChatGPT-User는 차단 목록에
          없습니다. 즉 <strong>데이터는 안 뺏기면서, AI 답변에는 인용되는</strong> 구조입니다.
        </Callout>
        <p>
          이 발견은 저희의 앞선 실험과 정확히 맞물립니다.{" "}
          <a href="/guide/case-third-party-citation">한 중식당의 GEO 실험</a>에서 AI가 식당을
          추천하며 인용한 출처는 홈페이지가 아니라 다이닝코드였는데 — <strong>다이닝코드가 AI
          검색봇에게 열려 있었기 때문에 가능했던 일</strong>입니다. 반면 경쟁 서비스인{" "}
          <strong>식신은 AI봇 제한이 아예 없고</strong>(
          <a href="https://www.siksinhot.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>),{" "}
          <strong>캐치테이블은 허용 목록 방식이라 AI봇이 전부 막혀</strong> 있습니다(
          <a href="https://app.catchtable.co.kr/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
          같은 맛집 정보라도 <strong>어느 플랫폼에 실리느냐에 따라 AI 인용 가능성이
          갈립니다.</strong>
        </p>

        <h2>발견 ④ 나머지 — 배민·당근·인스타는 닫혔고, 유튜브는 열려 있다</h2>
        <ul>
          <CheckItem>
            <strong>배달의민족</strong> — 구글봇·네이버봇(Yeti)만 허용, 나머지 전면 차단(
            <a href="https://www.baemin.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
            배민에 쌓인 리뷰·가게 정보는 AI가 못 읽습니다.
          </CheckItem>
          <CheckItem>
            <strong>당근</strong> — 국내 콘텐츠(/kr/) 전체에서 AI 관련 봇 <strong>47종</strong>을
            이름으로 지정해 차단. 이번 실측에서 가장 광범위한 차단 목록이었습니다(
            <a href="https://www.daangn.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
          </CheckItem>
          <CheckItem>
            <strong>인스타그램</strong> — AI봇 지정 차단 + &ldquo;서면 허가 없는 자동 수집
            금지&rdquo; 고지(
            <a href="https://www.instagram.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
            인스타에 아무리 쌓아도 AI 검색은 못 읽습니다.
          </CheckItem>
          <CheckItem>
            <strong>유튜브</strong> — 시청 페이지에 봇 차단이 없습니다(
            <a href="https://www.youtube.com/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
            단, AI가 읽는 건 제목·설명·자막 같은 <strong>텍스트 영역</strong>입니다. 쇼츠를 올릴 때
            제목과 설명을 공들여야 하는 이유입니다.
          </CheckItem>
          <CheckItem>
            <strong>요기요</strong> — AI봇 제한 없음. 결제·관리 경로만 차단돼 있습니다(
            <a href="https://www.yogiyo.co.kr/robots.txt" target="_blank" rel="noopener noreferrer">원문</a>).
          </CheckItem>
        </ul>

        <h2>이 현황판이 사장님에게 의미하는 것</h2>
        <ul>
          <CheckItem>
            <strong>콘텐츠를 어디에 쌓느냐가 곧 AI 노출 전략입니다.</strong> 같은 노력으로 글을
            써도 네이버 블로그에만 쓰면 AI 답변에서는 존재하지 않는 콘텐츠가 됩니다. AI가 읽을 수
            있는 곳 — 자기 홈페이지, 브런치, 티스토리, (맛집이라면) 다이닝코드·식신 — 에 콘텐츠의
            거점을 두어야 합니다.
          </CheckItem>
          <CheckItem>
            <strong>플랫폼 정책은 언제든 바뀝니다.</strong> 브런치 robots.txt의 갱신 주석은
            2026년 4월 22일입니다 — 최근에도 정책이 조정됐다는 뜻입니다. 오늘 열려 있는 플랫폼이
            내일 닫힐 수 있습니다. <strong>차단 걱정이 없는 유일한 곳은 자기 소유의
            홈페이지</strong>입니다. 이 원리는{" "}
            <a href="/guide/naver-blocks-ai-crawlers">네이버 차단 분석 글</a>에서 자세히 다뤘습니다.
          </CheckItem>
          <CheckItem>
            <strong>robots.txt는 &lsquo;요청&rsquo;이지 물리적 강제가 아닙니다.</strong> 다만 주요
            AI 기업들은 공식적으로 이를 준수한다고 밝히고 있어, 실무적으로는 차단 = 인용 불가로
            보는 것이 안전합니다. 또한 차단 이전에 이미 학습된 데이터가 지워지는 것은 아닙니다.
          </CheckItem>
        </ul>

        <h2>우리 홈페이지는 AI에게 열려 있을까</h2>
        <p>
          플랫폼만 문제가 아닙니다. <a href="/guide/case-urology-clinic">한 비뇨기과 사례</a>처럼
          자기 홈페이지가 방화벽·보안 설정 때문에 AI 크롤러를 막고 있는 경우도 있습니다. 우리
          홈페이지가 GPTBot·OAI-SearchBot에게 열려 있는지는{" "}
          <a href="/site-check">무료 사이트 진단</a>으로 1분 만에 확인할 수 있습니다.
        </p>
      </GuideArticle>
    </>
  )
}
