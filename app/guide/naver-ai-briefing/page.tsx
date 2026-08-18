import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 49자
const TITLE = "네이버 AI 브리핑 노출 방법 — 누락되던 블로그를 1위로 바꾼 글 구조"
const DESC =
  "블로그 글이 누락되기 시작하면 대부분 '저품질'이나 '지수 하락'을 의심합니다. 6년째 운영 중인 한 매장의 사례에서 원인은 달랐습니다. 글 구조였습니다. 키워드 반복형을 경험형으로 바꾸자 '지역명+업종' 키워드에서 브랜드 블로그가 1위로 올라섰고, 네이버 AI 브리핑에도 2순위로 인용되기 시작했습니다. 무엇을 어떻게 바꿨는지 그대로 적었습니다."
const DATE = "2026-08-15"
const URL = "https://wiztheplanning.com/guide/naver-ai-briefing"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "네이버 AI 브리핑", "네이버 AI 브리핑 노출", "네이버 AI 브리핑 노출 방법",
    "AI 브리핑 인용", "네이버 블로그 누락", "블로그 상위노출",
    "브랜드 블로그", "네이버 블로그 글 구조",
  ],
  alternates: { canonical: "/guide/naver-ai-briefing" },
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
      name: "네이버 AI 브리핑에 노출되려면 어떻게 해야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네이버 검색 공식 블로그가 2026년 5월 26일 발행한 'AI 시대에 사용자의 선택을 받는 콘텐츠 작성 가이드'는 첫 번째 조건으로 '직접 경험한 지식'을 들었습니다. 같은 글에서 네이버는 현재 검색 결과에 잘 노출되는 글일수록 AI 브리핑에 인용될 확률이 높다고 밝혔습니다. 즉 별도의 AI 브리핑 전용 작업이 있는 것이 아니라, 검색에서 먼저 인정받는 경험 기반 콘텐츠가 인용 후보가 되는 구조입니다.",
      },
    },
    {
      "@type": "Question",
      name: "블로그 글이 누락되면 저품질인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "누락이 곧 저품질을 뜻하지는 않습니다. 저희가 관찰한 사례에서는 블로그 지수가 떨어진 것이 아니라 글의 구조가 문제였습니다. 키워드를 반복해 채우는 형식의 글이 누락되기 시작했고, 같은 블로그에서 같은 주제를 경험 기반 구조로 다시 쓰자 다시 노출되기 시작했습니다. 계정을 새로 만들거나 글을 지우기 전에 최근 글의 형식부터 점검하는 편이 낫습니다.",
      },
    },
    {
      "@type": "Question",
      name: "블로그 글을 경험형으로 쓴다는 게 구체적으로 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "제목과 본문이 '운영자가 실제로 겪은 것'을 드러내는 형태입니다. 예를 들어 업종 키워드를 반복하는 대신 '6년째 매장을 운영하며 고객들이 가장 많이 묻는 질문 10가지'처럼 연차와 실제 문의를 제목에 담고, 본문은 질문마다 소제목을 달아 나눕니다. 검색자가 실제로 던지는 질문이 소제목이 되므로 AI가 답변에 필요한 부분만 발췌하기 쉬워집니다.",
      },
    },
    {
      "@type": "Question",
      name: "블로그만 잘 쓰면 AI 브리핑에 뜨나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "블로그 글 하나만으로 된 사례가 아닙니다. 이 매장은 6년간 영업하며 플레이스 정보를 정확히 유지했고 방문자 리뷰가 꾸준히 쌓여 있었습니다. 글 구조 변경은 이미 갖춰진 기반 위에서 마지막 단추 역할을 했습니다. 플레이스 정보가 비어 있거나 리뷰가 없는 상태에서 글 형식만 바꾼다고 같은 결과가 나온다고 보기는 어렵습니다.",
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
        href="/guide/naver-ai-briefing"
        kicker="실제 사례 · 자체 실측"
        title={TITLE}
        description={DESC}
        date="2026년 8월 15일"
      >
        {/* 결론 우선 — 상단 150자 이내 */}
        <p>
          <strong>블로그 글이 누락되기 시작했을 때 원인은 저품질도 지수 하락도 아니었습니다. 글
          구조였습니다.</strong> 키워드 반복형을 경험형으로 바꾸자 &lsquo;지역명+업종&rsquo; 키워드에서
          브랜드 블로그가 1위로 올라섰고, 네이버 AI 브리핑에도 2순위로 인용되기 시작했습니다.
        </p>

        <h2>어떤 매장이었나</h2>
        <p>
          지방 중소도시에서 <strong>6년째 운영 중인 매장</strong> 한 곳입니다. 광고주 보호를 위해 상호와
          정확한 지역, 업종은 밝히지 않습니다.
        </p>
        <ul>
          <CheckItem><strong>유료 광고를 거의 하지 않았습니다.</strong> 검색광고도 배너도 없었습니다</CheckItem>
          <CheckItem><strong>브랜드 블로그만 6년간 꾸준히 운영</strong>했습니다</CheckItem>
          <CheckItem>네이버 플레이스 정보를 정확하게 유지하고, 방문 후 리뷰를 자연스럽게 유도해 왔습니다</CheckItem>
        </ul>
        <p>
          정리하면 <strong>돈이 아니라 시간을 쌓아온 매장</strong>입니다. 이 전제가 뒤에 나올 결과를
          이해하는 데 중요합니다.
        </p>

        <h2>문제 — 잘 되던 블로그가 누락되기 시작했다</h2>
        <p>
          네이버 검색 로직이 바뀌면서 <strong>기존에 쓰던 키워드 반복형 글이 검색 결과에서 빠지기
          시작</strong>했습니다. 6년간 같은 방식으로 써왔는데 어느 시점부터 안 걸리는 겁니다.
        </p>
        <p>
          이때 사장님들이 가장 먼저 떠올리는 건 대개 같습니다. <strong>&ldquo;저품질에 걸렸나&rdquo;,
          &ldquo;블로그 지수가 떨어졌나&rdquo;.</strong> 계정을 새로 팔지 고민하고, 기존 글을 지우기도
          합니다.
        </p>
        <Callout>
          <strong>결론부터 말하면 지수 문제가 아니었습니다.</strong> 같은 블로그, 같은 계정에서 글의
          구조만 바꿨더니 다시 노출됐습니다. 블로그를 버렸다면 6년치 자산을 날릴 뻔한 일입니다.
        </Callout>

        <h2>무엇을 바꿨나 — 글 구조 4가지</h2>

        <h3>1. 키워드 반복형 → 경험형</h3>
        <p>
          가장 크게 바꾼 지점입니다. 업종·지역 키워드를 문장마다 반복해 넣는 방식을 버리고,{" "}
          <strong>운영자가 실제로 겪은 것을 쓰는 형태</strong>로 전환했습니다.
        </p>
        <p>
          예를 들어 이런 제목입니다 — <strong>&ldquo;6년째 매장을 운영하며 고객들이 가장 많이 묻는
          질문 10가지&rdquo;.</strong> 연차와 실제 문의가 제목에 그대로 들어갑니다. 지어낼 수 없는
          내용이라 6년 운영한 사람만 쓸 수 있습니다.
        </p>

        <h3>2. 소제목으로 질문을 나눴다</h3>
        <p>
          질문 10가지를 한 덩어리로 쓰지 않고 <strong>질문마다 소제목을 달아 구분</strong>했습니다.
          검색자가 실제로 던지는 질문이 그대로 소제목이 되니, AI가 답변에 필요한 부분만 발췌하기
          쉬워집니다.
        </p>

        <h3>3. AI 생성 이미지를 쓰지 않았다</h3>
        <p>
          매장에서 직접 찍은 사진만 썼습니다. AI 이미지를 배제한 것이{" "}
          <strong>단독으로 순위를 올렸다고 말할 수는 없습니다.</strong> 다만 &lsquo;직접 경험&rsquo;을
          내세우는 글에 생성 이미지를 섞으면 글 전체의 성격이 흐려지는 건 분명합니다.
        </p>

        <h3>4. 내부 링크를 적절히 걸었다</h3>
        <p>
          관련 있는 기존 글로 연결했습니다. 무작정 많이 거는 게 아니라{" "}
          <strong>문맥에 맞는 곳에만</strong> 걸었습니다.
        </p>

        <h2>네이버가 직접 밝힌 기준과 맞아떨어졌다</h2>
        <p>
          글 구조를 바꾼 뒤에 확인해 보니, 네이버 검색 공식 블로그가 먼저 답을 내놓은 상태였습니다.
          2026년 5월 26일 발행된{" "}
          <a
            href="https://blog.naver.com/naver_search"
            target="_blank"
            rel="noopener noreferrer"
          >
            네이버 검색 공식 블로그 &lsquo;AI 시대에 사용자의 선택을 받는 콘텐츠 작성 가이드&rsquo;
          </a>
          입니다.
        </p>
        <p>
          이 가이드가 첫 번째로 든 조건이 <strong>&ldquo;직접 경험한 지식&rdquo;</strong>이었습니다.
          그리고 같은 글에서 네이버는 이렇게 밝혔습니다.
        </p>
        <blockquote>
          &ldquo;현재 검색 결과에 잘 노출되는 글은 이미 품질이 검증된 글일 가능성이 크므로 AI 브리핑에
          인용될 확률이 높습니다.&rdquo;
        </blockquote>
        <p>
          <strong>AI 브리핑만 노리는 별도의 기술이 있는 게 아니라는 뜻입니다.</strong> 검색에서 먼저
          인정받은 글이 인용 후보가 되는 구조입니다. 저희가 현장에서 확인한 순서도 정확히 같았습니다 —
          블로그 순위가 먼저 올라갔고, AI 브리핑 인용은 그 뒤에 따라왔습니다.
        </p>

        <h2>결과</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">항목</th>
                <th className="px-4 py-3 font-bold text-gray-900">결과</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["'지역명+업종' 키워드 블로그", "1위"],
                ["네이버 AI 브리핑 인용", "2순위"],
                ["집행한 유료 광고", "없음"],
                ["새로 만든 블로그 계정", "없음 (기존 계정 그대로)"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>글을 지우지도, 계정을 새로 만들지도 않았습니다.</strong> 쓰던 블로그에서 글의 형식만
          바꿔 여러 차례 반복했습니다.
        </p>

        <h2>정직하게 — 글만으로 된 게 아닙니다</h2>
        <p>
          이 결과를 &ldquo;글 구조 바꾸면 AI 브리핑 뜬다&rdquo;로 요약하면 틀립니다. 이 매장에는 이미
          아래가 갖춰져 있었습니다.
        </p>
        <ul>
          <CheckItem><strong>6년치 운영 이력</strong> — 하루아침에 만들 수 없는 부분입니다</CheckItem>
          <CheckItem><strong>정확하게 관리된 플레이스 정보</strong>와 꾸준히 쌓인 방문자 리뷰</CheckItem>
          <CheckItem><strong>사장님의 응대와 전문성</strong> — 리뷰에 그대로 남아 있던 부분입니다</CheckItem>
        </ul>
        <p>
          글 구조 변경은 <strong>이미 쌓인 기반 위에서 마지막 단추</strong> 역할을 했습니다. 플레이스가
          비어 있고 리뷰가 없는 상태에서 글 형식만 바꾼다고 같은 결과가 난다고 보기는 어렵습니다.
          플레이스 기본 점검은{" "}
          <a href="/guide/naver-place-checklist">네이버 플레이스 상위 노출 체크리스트</a>에 정리해
          두었습니다.
        </p>
        <Callout>
          그리고 이 사례는 <strong>네이버 안에서 벌어진 일</strong>입니다. 네이버는 robots.txt로 글로벌
          AI 크롤러를 막고 있어서, 블로그에 쌓은 이 콘텐츠를 ChatGPT·퍼플렉시티는 읽지 못합니다(
          <a href="/guide/naver-blocks-ai-crawlers">실측 기록</a>). 네이버 AI 브리핑과 글로벌 AI는
          공략 경로가 다릅니다.
        </Callout>

        <h2>블로그가 누락된다면 순서대로 확인하세요</h2>
        <ul>
          <CheckItem>
            <strong>계정을 버리기 전에 최근 글의 형식부터</strong> 봅니다. 키워드를 채워 넣은 글이
            대부분이라면 그게 원인일 수 있습니다
          </CheckItem>
          <CheckItem>
            <strong>내가 아니면 못 쓰는 글</strong>인지 자문합니다. 연차, 실제 문의, 현장 사진처럼
            지어낼 수 없는 요소가 들어 있어야 합니다
          </CheckItem>
          <CheckItem>
            <strong>소제목으로 질문을 쪼갭니다.</strong> 발췌되기 쉬운 형태가 인용되기도 쉽습니다
          </CheckItem>
          <CheckItem>
            <strong>한 번으로 판단하지 않습니다.</strong> 이 사례도 여러 차례 반복한 뒤에 결과가
            나왔습니다
          </CheckItem>
        </ul>
        <p>
          누락 원인이 글 형식이 아니라 키워드 체급인 경우도 있습니다. 그 사례는{" "}
          <a href="/guide/case-blog-omission">블로그 글이 자꾸 누락된다면</a>에 따로 적었습니다.
        </p>

        <h2>정리</h2>
        <p>
          <strong>누락은 벌점이 아니라 신호일 수 있습니다.</strong> 이 매장은 계정을 버리는 대신 글의
          구조를 바꿨고, 6년치 자산을 지키면서 블로그 1위와 AI 브리핑 인용을 함께 얻었습니다. 광고비는
          쓰지 않았습니다.
        </p>
        <p>
          우리 매장이 지금 AI 검색에 어떻게 보이는지는{" "}
          <a href="/site-check">무료 사이트 진단</a>으로 확인하실 수 있고, GEO 전체 그림은{" "}
          <a href="/guide/geo">GEO 총정리</a>에 모아 두었습니다.
        </p>
      </GuideArticle>
    </>
  )
}
