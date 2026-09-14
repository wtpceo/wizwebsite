import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"
import CaseAccessRequest from "@/components/guide/CaseAccessRequest"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내
const TITLE = "네이버 블로그 상위노출, 1위 글은 뭐가 달랐나: 2위 글과 나란히 비교"
const DESC =
  "발행 3일째인 저희 글이 5월 말에 올라온 글에 밀려 네이버 블로그 탭 2위에 있습니다. 두 글을 나란히 뜯어보니 1위 글이 더 좋은 글이라기보다 네이버가 읽는 신호를 더 많이 깔아 둔 쪽에 가까웠습니다. 다만 그 신호 중 일부는 과하면 누락을 부르는 양날의 검입니다. 확정이 아니라 시도해 볼 만한 것들로 정리했습니다."
const DATE = "2026-09-14"
const URL = "https://wiztheplanning.com/guide/naver-blog-rank-compare"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "네이버 블로그 상위노출", "블로그 순위", "네이버 블로그 1위", "블로그 사진 설명",
    "블로그 이미지 파일명", "지역 키워드 블로그", "블로그 누락",
  ],
  alternates: { canonical: "/guide/naver-blog-rank-compare" },
  openGraph: { images: ["/covers/naver-blog-rank-compare.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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

const FAQ = [
  {
    q: "몇 달 된 글이 새 글보다 위에 있는 이유는 뭔가요?",
    a: "발행일만으로 순위가 정해지지 않기 때문입니다. 이번에 비교한 1위 글은 5월 말에 올라왔는데도 발행 3일째인 글보다 위에 있었습니다. 다만 새 글은 1~2주 정도 순위가 오르내리다 자리를 잡는 경우가 많고, 저희가 로그아웃 상태의 모바일로 검색했을 때는 새 글이 먼저 나왔습니다. 지금 순위를 확정된 결과로 보지 않는 이유입니다.",
  },
  {
    q: "사진 설명을 넣으면 순위가 오르나요?",
    a: "보장할 수 없습니다. 네이버는 순위 기준을 공개하지 않습니다. 다만 두 글에서 가장 크게 벌어진 차이가 사진 설명이었습니다. 1위 글은 8장에 설명을 전부 달았고 저희 글은 하나도 없었습니다. 이미 올린 글에서 바로 고칠 수 있는 항목이라 가장 먼저 시도하고, 결과는 이 글에 추가하겠습니다.",
  },
  {
    q: "지역명을 많이 넣을수록 유리한가요?",
    a: "그렇게 단정하지 않습니다. 1위 글은 본문 속 지역명이 저희 글보다 3배 이상 많았습니다. 그런데 저희가 앞서 공개한 다른 사례에서는 키워드를 문장마다 반복한 것이 누락의 원인이었고, 반복을 걷어내자 순위가 올랐습니다. 그래서 본문에 억지로 반복하기보다 자연스럽게 들어갈 자리부터 채웁니다.",
  },
  {
    q: "블로그 이름을 키워드로 바꾸는 게 좋을까요?",
    a: "신중하게 판단해야 합니다. 1위 블로그는 이름 자체가 지역명과 시술명으로 되어 있어 검색결과에 그대로 노출됐고, 상위 12개 결과 중 5개가 이 블로그 글이었습니다. 하지만 상호로 찾아오는 손님이 있는 매장이라면 이름을 바꾸는 순간 그 연결이 약해집니다. 한 번에 바꾸기보다 영향을 먼저 따져보는 편이 안전합니다.",
  },
  {
    q: "우리 블로그도 이렇게 비교해 볼 수 있나요?",
    a: "가능합니다. 같은 키워드에서 우리보다 위에 있는 글의 원문을 받아 제목, 분량, 사진 설명, 파일명, 지역명 빈도, 블로그 이름, 발행 흐름을 나란히 대조합니다. 문의 주시면 우리 매장 키워드 기준으로 진행해 드립니다.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

// 경쟁 매장이 그대로 따라 할 수 있는 실행 세부는 가린다. 전문은 사업자 인증 후 열람.
function M({ w = "****" }: { w?: string }) {
  return (
    <span
      title="작업 기록 전문에서 공개합니다"
      aria-label="비공개 정보"
      className="mx-0.5 inline-block select-none rounded bg-slate-900 px-1.5 align-baseline font-mono text-[0.85em] tracking-widest text-slate-400"
    >
      {w}
    </span>
  )
}

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left font-bold text-gray-900">{children}</th>
)

export default function Page() {
  const rows: [string, React.ReactNode, React.ReactNode][] = [
    ["발행 시점", "5월 말", "관찰 시점 기준 3일째"],
    ["제목 속 핵심 키워드 위치", "맨 앞", "맨 앞 (같음)"],
    ["본문 분량 (공백 제외)", <b key="a">1,971자</b>, "1,404자"],
    ["사진 수", <b key="b">11장</b>, "7장"],
    ["사진 설명(캡션)", <b key="c">8개</b>, <b key="d" className="text-rose-600">0개</b>],
    ["사진 설명 문구", <M key="e" />, "없음"],
    ["사진 파일명", <span key="f">키워드형 <M /></span>, "숫자형 (1.jpeg)"],
    ["본문 속 지역명 빈도", <b key="g">약 3배 이상</b>, "기준"],
    ["블로그 이름", "지역명 + 시술명 + '전문'", "상호"],
    ["지도(플레이스) 첨부", "있음", "있음"],
    ["태그", "12개", "8개"],
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/naver-blog-rank-compare"
        kicker="네이버 블로그 · 실측 비교"
        title={TITLE}
        description={DESC}
        date="2026년 9월 14일"
      >
        <p>
          <strong>발행 3일째인 저희 글이 5월 말에 올라온 글에 밀려 네이버 블로그 탭 2위에 있습니다.</strong>{" "}
          두 글을 나란히 뜯어보니 1위 글이 더 좋은 글이어서라기보다{" "}
          <strong>네이버가 읽는 신호를 더 많이 깔아 둔 쪽</strong>에 가까웠습니다. 다만 그 신호 중 일부는
          과하면 누락을 부르는 양날의 검입니다. 그래서 정답이 아니라 시도해 볼 만한 것들로 정리합니다.
        </p>

        <h2>어떤 상황인가</h2>
        <p>
          &lsquo;지역명 + 반영구 눈썹&rsquo; 키워드로 네이버 블로그 탭을 관련도순으로 봤을 때의 결과입니다.
          2026년 9월 14일에 확인했습니다. 광고주 보호를 위해 두 매장의 상호와 지역은 밝히지 않습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>1위</strong>: 다른 매장의 블로그 글. 5월 말에 올라왔습니다.
          </CheckItem>
          <CheckItem>
            <strong>2위</strong>: 저희가 운영을 돕는 매장의 블로그 글. 관찰 시점 기준 발행 3일째입니다.
          </CheckItem>
        </ul>
        <p>
          한 가지 먼저 짚어 둡니다. 저희가 로그아웃 상태의 모바일로 같은 키워드를 검색했을 때는 저희 글이
          먼저 나왔습니다. <strong>기기와 로그인 상태, 시점에 따라 순위가 달라진다</strong>는 뜻이고, 지금의
          2위가 확정된 자리는 아닙니다.
        </p>

        <h2>두 글을 나란히 놓고 보면</h2>
        <p>두 글의 원문을 받아 같은 항목으로 셌습니다. 가린 칸은 아래에서 설명합니다.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-slate-50"><Th>항목</Th><Th>1위 글</Th><Th>저희 글 (2위)</Th></tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>차이를 만든 것으로 보이는 다섯 가지</h2>
        <p>영향이 커 보이는 순서대로 적었습니다. 네이버가 기준을 밝히지 않으므로 전부 추정입니다.</p>

        <h3>1. 사진 설명과 파일명</h3>
        <p>
          가장 크게 벌어진 차이입니다. 1위 글은 사진 8장에 설명을 전부 달았고 파일 이름도 키워드 형태로
          올렸습니다. 저희 글은 사진 설명이 <strong>하나도 없었고</strong> 파일 이름은 숫자였습니다. 본문
          속 지역명 빈도가 크게 벌어진 것도 상당 부분이 이 사진 설명에서 나왔습니다. 사진 설명은 화면에
          글자로 표시되는 본문의 일부입니다. 파일명이 순위에 얼마나 반영되는지는 네이버가 밝히지
          않았습니다.
        </p>

        <h3>2. 블로그 이름이 곧 키워드</h3>
        <p>
          1위 블로그는 이름이 &lsquo;지역명 + 시술명 + 전문&rsquo; 형태라, 검색결과의 글쓴이 자리에 키워드가
          그대로 노출됩니다. 이 주제만 다루는 블로그라는 신호로 읽힐 수 있고, 검색하는 사람 입장에서도
          눈에 띕니다. 같은 키워드 상위 12개 결과 중 이 블로그의 글이 5개였습니다.
        </p>

        <h3>3. 다른 매장이 흉내 낼 수 없는 경험</h3>
        <p>
          1위 글은 원장이 해외에서 직접 배워 온 특정 기법 이야기입니다. 직접 겪은 일에 국내에서 흔치 않은
          내용까지 들어가 있어 다른 매장이 똑같이 쓸 수 없습니다. 저희 글은 시술 후 색이 자리 잡는 과정을
          날짜별로 안내한 정보성 글이라, 유익하지만 어느 매장이든 쓸 수 있는 주제입니다. 네이버 검색 공식
          블로그가 2026년 5월 26일 발행한 가이드도 첫 번째 조건으로 직접 경험을 듭니다. 몇 달 된 글이 아직
          위에 있는 이유 중 하나로 보입니다.
        </p>

        <h3>4. 분량과 사진 수</h3>
        <p>
          1위 글이 공백 제외 1,971자로 저희 글보다 약 40% 길고, 사진도 4장 더 많습니다. 결정적인 차이는
          아니지만 쌓이는 차이입니다.
        </p>

        <h3>5. 최근 발행 흐름</h3>
        <p>
          1위 블로그는 관찰 직전 며칠 사이에 여러 편을 연달아 올렸습니다. 블로그 단위의 활동이 활발한
          상태였다는 뜻입니다. 이것이 개별 글 순위에 얼마나 작용하는지는 확인할 방법이 없습니다.
        </p>

        <h2>저희 글이 앞서는 것도 있습니다</h2>
        <ul>
          <CheckItem>
            <strong>주제 집중도.</strong> 저희 블로그는 최근 30편 제목이 전부 같은 시술 주제입니다. 1위
            블로그는 다른 주제의 글이 섞여 있습니다.
          </CheckItem>
          <CheckItem>
            <strong>구성.</strong> 소제목 서식, 지도, 상담 버튼까지 글 구성은 저희 쪽이 더 촘촘합니다.
          </CheckItem>
          <CheckItem>
            <strong>시간.</strong> 발행 3일째입니다. 새 글은 보통 1~2주 출렁이다 자리를 잡습니다.
          </CheckItem>
        </ul>

        <h2>양날의 검: 키워드는 많을수록 좋은가</h2>
        <p>
          여기서 멈춰야 합니다. 표만 보면 &ldquo;지역명을 3배 넣으면 이긴다&rdquo;로 읽힙니다. 그런데 저희가
          앞서 공개한 사례에서는 정반대 일이 있었습니다. 키워드를 문장마다 반복한 글이{" "}
          <a href="/guide/case-blog-omission">연속으로 검색에서 누락</a>됐고, 반복을 걷어내고 경험을 담자
          순위가 올랐습니다. 생성형 엔진 최적화 연구에서도 키워드 반복은 오히려 노출을 떨어뜨렸습니다(
          <a href="/guide/what-ai-quotes">AI가 인용하는 문장</a>).
        </p>
        <p>
          그래서 저희는 1위 글을 그대로 따라 하지 않습니다. <strong>본문에 억지로 반복하는 대신, 원래 글자가
          들어갈 자리인데 비어 있던 곳부터 채웁니다.</strong> 사진 설명이 대표적입니다. 같은 문구를 복사해
          붙이지 않고 사진마다 다르게 씁니다.
        </p>

        <h2>시도해 볼 만한 것들</h2>
        <p>
          확정된 공식이 아니라, 이번 비교에서 근거가 가장 뚜렷했던 순서입니다. 구체적인 문구와 기준치는
          다른 매장이 그대로 가져갈 수 있는 정보라 가렸습니다.
        </p>
        <ul>
          <CheckItem>
            <strong>1. 이미 올린 글의 사진 설명부터 채우기 (5분).</strong> 가장 쉽고 가장 크게 벌어진
            항목입니다. 설명 문구는 <M /> 조합으로, 사진마다 <M /> 식으로 변형합니다.
          </CheckItem>
          <CheckItem>
            <strong>2. 다음 글부터 사진 파일명 바꾸기.</strong> 올리기 전에 파일 이름을 <M w="********" /> 규칙으로
            바꿉니다. 올린 뒤에는 바꿀 수 없어서 미리 해야 합니다.
          </CheckItem>
          <CheckItem>
            <strong>3. 사진 수와 분량을 한 단계 올리기.</strong> 사진 <M w="**" />장 이상, 공백 제외{" "}
            <M /> 자 이상을 기준으로 잡습니다.
          </CheckItem>
          <CheckItem>
            <strong>4. 지역명은 본문 반복이 아니라 다른 자리로.</strong> 적정 빈도는 <M w="**~**" />회이고,
            대부분을 <M /> 에 배치합니다. 본문에 억지로 넣으면 감점될 수 있습니다.
          </CheckItem>
          <CheckItem>
            <strong>5. 우리만 쓸 수 있는 경험형 글 한 편.</strong> 정보성 글로는 넘기 어려운 벽을 넘는 가장
            큰 수단으로 봅니다. 어떤 소재가 먹히는지 고르는 기준은 <M /> 입니다.
          </CheckItem>
          <CheckItem>
            <strong>6. 블로그 이름 점검.</strong> 무작정 바꾸지 않습니다. 상호 검색 유입을 지키면서 키워드를
            더하는 방식은 <M /> 순서로 진행합니다.
          </CheckItem>
          <CheckItem>
            <strong>7. 발행 흐름 만들기.</strong> 몰아서 올리는 것이 답인지는 확인되지 않았습니다. 저희가 쓰는
            간격은 <M /> 입니다.
          </CheckItem>
        </ul>

        <h2>이 비교의 한계</h2>
        <ul>
          <CheckItem>네이버는 순위 기준을 공개하지 않습니다. 위 순서는 측정한 차이를 근거로 한 추정입니다.</CheckItem>
          <CheckItem>공감, 댓글, 체류 시간 같은 반응 지표는 외부에서 볼 수 없어 비교에 넣지 못했습니다.</CheckItem>
          <CheckItem>글 두 편의 비교입니다. 다른 업종과 키워드에 그대로 적용된다고 말하지 않습니다.</CheckItem>
          <CheckItem>저희 글은 발행 3일째라 순위가 아직 움직이는 중입니다.</CheckItem>
        </ul>
        <Callout>
          <strong>2주 뒤 다시 잽니다.</strong> 사진 설명을 채운 뒤 같은 키워드, 같은 조건으로 순위를 다시
          확인해 이 글에 추가하겠습니다. 올라가면 올라간 대로, 그대로면 그대로인 대로 적습니다.
        </Callout>

        <CaseAccessRequest
          caseKey="naver-blog-rank-compare"
          heading="비교 분석 전문"
          intro="가린 칸의 실제 사진 설명 문구 조합과 변형 방식, 파일명 규칙, 사진 수와 분량 기준치, 지역명 적정 빈도와 배치 위치, 경험형 소재 고르는 기준, 블로그 이름 바꾸는 순서: 재현 가능한 실행 세부는 본문에 공개하지 않습니다."
          includes={[
            "두 글 비교표 전체 수치",
            "사진 설명 문구 조합과 변형 예시",
            "사진 파일명 규칙",
            "사진 수·분량·지역명 빈도 기준치",
            "경험형 글 소재 고르는 기준",
            "블로그 이름 점검 순서",
          ]}
          buttonLabel="비교 분석 전문 열람 신청"
        />

        <h2>우리 블로그도 비교해 보고 싶다면</h2>
        <p>
          같은 키워드에서 우리보다 위에 있는 글이 무엇을 다르게 했는지는 원문을 나란히 놓으면 보입니다.
          감으로 &ldquo;저품질인가&rdquo;를 의심하기 전에 먼저 대조해 보세요.{" "}
          <a href="/#contact">상담 문의</a>를 남겨 주시면 우리 매장 키워드 기준으로 비교해 드립니다.
          블로그와 함께 AI 검색 노출까지 보고 싶으시면{" "}
          <a href="/diagnosis">무료 AI 검색 진단</a>도 함께 신청하실 수 있습니다.
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
