import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 41자
const TITLE = "구조화 데이터 넣었는데 AI 검색에 안 잡히는 7가지 이유"
const DESC =
  "홈페이지 제작사가 구조화 데이터를 넣어줬는데 검색에도 AI 답변에도 나오지 않는다면, 원인은 대개 7가지로 좁혀집니다. 색인 차단, 사이트맵 누락, 중복 URL, 문법 오류, 스키마 중복 선언, 본문 근거 부재, FAQPage 남용입니다. 점검은 색인부터 시작해야 하며, 순서를 바꾸면 2~3주를 낭비합니다."
const DATE = "2026-08-25"
const URL = "https://wiztheplanning.com/guide/structured-data-not-working"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "구조화 데이터", "JSON-LD", "리치 결과", "스키마 마크업",
    "구조화 데이터 오류", "FAQPage", "색인 안됨", "홈페이지 SEO",
  ],
  alternates: { canonical: "/guide/structured-data-not-working" },
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
      name: "구조화 데이터를 수정하면 며칠 만에 반영되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "빠르면 수일, 보통은 2~4주입니다. 색인 재요청을 해도 크롤러가 다시 방문해야 반영되고, 방문 주기는 사이트 업데이트 빈도와 페이지 중요도에 따라 달라집니다. 반영 여부는 서치콘솔 개선 리포트의 유효 항목 수 변화로 확인하는 것이 가장 정확합니다.",
      },
    },
    {
      "@type": "Question",
      name: "구조화 데이터만 잘 넣으면 AI 답변에 인용되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아닙니다. 마크업은 페이지 내용을 기계가 오해 없이 읽도록 돕는 신호이고, AI가 실제로 인용하는 것은 본문에 적힌 구체적인 문장입니다. 가격, 기간, 조건, 절차 같은 내용이 본문에 없으면 인용할 텍스트 자체가 없습니다. 마크업은 콘텐츠의 요약이지 대체재가 아닙니다.",
      },
    },
    {
      "@type": "Question",
      name: "FAQPage는 이제 넣을 필요가 없나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "검색결과에 아코디언으로 표시되기를 기대한다면 넣을 이유가 줄었습니다. 구글은 2023년 8월 8일 공지에서 FAQ 리치 결과를 정부와 보건 등 공신력 있는 사이트에만 표시한다고 밝혔습니다. 다만 AI가 질문과 답변을 짝지어 읽는 데는 여전히 쓸모가 있으므로, 목적을 리치 결과가 아니라 AI 인용으로 바꿔 잡으면 됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "네이버에도 구조화 데이터가 효과가 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "있습니다. 다만 구글과 지원하는 타입과 표시 방식이 달라서 별도로 확인해야 합니다. 네이버는 서치어드바이저에서 사이트 소유확인과 수집 요청을 따로 받기 때문에, 구글 서치콘솔만 등록하고 끝내면 국내 검색 노출이 통째로 비어 있게 됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "리치 결과가 나오던 페이지가 갑자기 사라졌습니다.",
      acceptedAnswer: {
        "@type": "Answer",
        text: "콘텐츠 변경, 정책 변경, 품질 판단 세 가지를 순서대로 확인하세요. 본문을 고치면서 마크업의 근거 문장이 지워졌는지, 해당 리치 결과 유형 자체가 축소되거나 폐지됐는지, 서치콘솔에 수동 조치 알림이 있는지를 보면 대부분 원인이 잡힙니다.",
      },
    },
  ],
}

const CAUSES: [string, string, string, string][] = [
  ["1", "robots 차단 / noindex 잔존", "robots.txt 직접 열람, 페이지 소스에서 meta robots 확인", "10분"],
  ["2", "사이트맵 미제출", "서치콘솔과 서치어드바이저 양쪽 확인", "30분"],
  ["3", "중복 URL / canonical 충돌", "서치콘솔 URL 검사 결과 확인", "1~3일"],
  ["4", "JSON-LD 문법 오류", "리치 결과 테스트", "1시간"],
  ["5", "스키마 중복 선언", "소스에서 ld+json 블록 개수 확인", "반나절"],
  ["6", "본문 근거 부재", "마크업 값과 화면 텍스트 대조", "1~2일"],
  ["7", "FAQPage 남용", "질문 문장이 실제 검색어인지 검토", "2시간"],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/structured-data-not-working"
        kicker="실전 전략 · 점검 절차"
        title={TITLE}
        description={DESC}
        date="2026년 8월 25일"
      >
        {/* 결론 우선 */}
        <p>
          <strong>구조화 데이터는 노출을 만드는 장치가 아닙니다.</strong> 이미 색인된 페이지의 내용을
          기계가 오해 없이 읽게 해주는 번역 장치입니다. 그래서{" "}
          <strong>색인이 안 된 페이지에 마크업을 아무리 넣어도 AI 답변에는 인용되지 않습니다.</strong>
        </p>
        <p>
          홈페이지를 새로 만들면서 &ldquo;구조화 데이터 넣어드렸습니다&rdquo;라는 말을 들었는데 어디에도
          안 뜬다면, 원인은 대개 아래 7가지로 좁혀집니다.
        </p>

        <h2>인용이 일어나려면 세 조건이 동시에 맞아야 합니다</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">조건</th>
                <th className="px-4 py-3 font-bold text-gray-900">확인 지점</th>
                <th className="px-4 py-3 font-bold text-gray-900">안 맞으면</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["① 크롤링·색인 통과", "robots.txt, 사이트맵, canonical", "마크업이 있는지조차 인식 안 됨"],
                ["② 마크업 유효성", "리치 결과 테스트, 스키마 검증", "오류 블록 전체가 무시됨"],
                ["③ 본문과 마크업 일치", "화면에 보이는 텍스트와 같은가", "스팸 판정·수동 조치 위험"],
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
        <Callout>
          <strong>①이 깨진 상태에서 ②③만 반복해 고치는 것이 가장 흔한 실패입니다.</strong> 정상 마크업을
          지웠다 넣었다 하며 2~3주를 씁니다. 점검은 항상{" "}
          <strong>색인 → 문법 → 중복 → 콘텐츠 일치</strong> 순서로 하셔야 합니다.
        </Callout>

        <h2>원인 1~3. 애초에 색인이 안 된 경우</h2>
        <p>
          <strong>노출이 0이라면 대부분 여기서 끝납니다.</strong> 검색창에{" "}
          <code>site:내도메인.com</code>을 쳐서 페이지가 안 나오면 마크업 문제가 아니라 색인 문제입니다.
        </p>

        <h3>1. robots 차단 또는 noindex가 남아 있다</h3>
        <p>
          제작 단계의 테스트 서버 설정이 그대로 배포되는 경우가 가장 많습니다.{" "}
          <code>도메인/robots.txt</code>에 <code>Disallow: /</code>가 남았는지, 페이지 소스의{" "}
          <code>&lt;head&gt;</code>에 <code>noindex</code>가 있는지 확인합니다. 워드프레스라면{" "}
          <strong>설정 &gt; 읽기의 &lsquo;검색엔진 노출 방지&rsquo; 체크박스</strong>가 원인인 경우가
          흔합니다. 저희 <a href="/site-check">무료 사이트 진단</a>은 이 항목을 가장 무겁게 잡습니다.
        </p>

        <h3>2. 사이트맵을 한쪽에만 냈다</h3>
        <p>
          구글 서치콘솔과 네이버 서치어드바이저는 <strong>완전히 별개 시스템</strong>입니다. 소유확인과
          수집 요청을 각각 해야 합니다. 구글만 등록하고 &ldquo;SEO 끝났다&rdquo;고 판단하면{" "}
          <strong>국내 검색 노출이 통째로 비어 있게 됩니다.</strong>
        </p>

        <h3>3. 중복 URL과 canonical이 충돌한다</h3>
        <p>
          <code>www</code> 유무, <code>http/https</code>, <code>/index.html</code> 병존, 파라미터 URL이
          각각 살아 있으면 색인 신호가 흩어집니다. 이때 A 주소에 마크업을 넣어도{" "}
          <strong>검색엔진이 B 주소를 대표로 고르면 마크업은 평가되지 않습니다.</strong> 대표 URL 하나로
          301 리다이렉트하고 self-canonical을 통일하는 것이 정답입니다.
        </p>
        <Callout>
          서치콘솔 URL 검사 결과가 <strong>&ldquo;대체 페이지(적절한 표준 태그 포함)&rdquo;</strong>로
          나오면 canonical 충돌 신호입니다. 이때는 마크업을 고칠 게 아니라 URL 구조부터 정리해야 합니다.
        </Callout>

        <h2>원인 4~5. 문법 오류와 중복 선언</h2>
        <p>색인이 정상인데 리치 결과가 없다면 도구 두 개로 3분 안에 판정됩니다.</p>
        <ul>
          <CheckItem>
            <strong>리치 결과 테스트</strong>: 구글이 인식한 타입과 오류를 봅니다. &ldquo;감지된 항목
            0개&rdquo;면 마크업 자체가 안 읽힌 것입니다
          </CheckItem>
          <CheckItem>
            <strong>Schema Markup Validator</strong>: schema.org 문법 전반을 봅니다. Error는 필수 수정,
            Warning은 선택입니다
          </CheckItem>
          <CheckItem>
            <strong>서치콘솔 개선 리포트</strong>: 도구는 통과했는데 여기 없으면 다시 색인 문제입니다
          </CheckItem>
        </ul>

        <h3>4. 문법 오류</h3>
        <p>
          필수 속성 누락, 쉼표나 중괄호 깨짐, JSON-LD를{" "}
          <code>&lt;script type=&quot;application/ld+json&quot;&gt;</code>이 아닌 일반 script로 넣은
          경우입니다. <strong>한 블록에 오류가 있으면 그 블록 전체가 무시됩니다.</strong>{" "}
          &ldquo;일부만 반영&rdquo;은 없습니다.
        </p>

        <h3>5. 중복·모순 선언</h3>
        <p>
          테마 기본 스키마, SEO 플러그인 스키마, 제작사가 손으로 넣은 스키마가 겹쳐{" "}
          <strong>한 페이지에 Organization이 3개, 전화번호가 서로 다른 값으로 2개</strong> 들어가는
          상황입니다. 페이지 성격과 안 맞는 타입이 섞여도 신뢰 신호가 흐려집니다.
        </p>
        <p>
          중소기업 홈페이지에서 실효가 큰 스키마는 사실상 5종입니다.{" "}
          <strong>Organization(또는 LocalBusiness), WebSite, BreadcrumbList, Article/BlogPosting,
          Service.</strong> 이 5종이 중복 없이 정확하면 대부분의 인용 요건은 충족됩니다.
        </p>

        <h2>원인 6~7. 본문 근거 부재와 FAQPage 남용</h2>

        <h3>6. 마크업에만 있고 본문에는 없다</h3>
        <p>
          리뷰가 없는데 <code>aggregateRating</code>을 넣거나, 본문에 없는 가격·수상 이력을 스키마에만
          적는 경우입니다. <strong>AI는 답변 근거로 쓸 문장을 본문에서 찾습니다.</strong> 마크업만 있고
          본문 문장이 없으면 인용할 텍스트 자체가 없습니다. 구조화 데이터는 콘텐츠의 요약이지
          대체재가 아닙니다.
        </p>

        <h3>7. FAQPage를 리치 결과 기대하고 넣었다</h3>
        <p>
          구글은{" "}
          <a
            href="https://developers.google.com/search/blog/2023/08/howto-faq-changes"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023년 8월 8일 검색 센터 블로그 공지
          </a>
          에서 이렇게 밝혔습니다.
        </p>
        <blockquote>
          &ldquo;구조화된 FAQPage 데이터의 FAQ 리치 결과는 공신력 있는 정부 및 보건 웹사이트에만
          표시됩니다. 다른 모든 사이트에는 이 리치 결과가 더 이상 정기적으로 표시되지 않습니다.&rdquo;
        </blockquote>
        <p>
          같은 공지에서 <strong>HowTo 리치 결과는 아예 지원이 중단</strong>됐습니다. 2023년 9월 13일부터
          데스크톱에서도 표시되지 않습니다. <strong>HowTo 마크업을 넣어주며 &lsquo;리치 결과가
          나온다&rsquo;고 설명하는 제작사가 있다면 3년 지난 정보입니다.</strong>
        </p>
        <p>그렇다고 FAQPage를 지울 필요는 없습니다. 목적을 바꿔 잡으면 됩니다.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">목적</th>
                <th className="px-4 py-3 font-bold text-gray-900">지금 유효한가</th>
                <th className="px-4 py-3 font-bold text-gray-900">설계 방향</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["검색결과 아코디언 노출", "사실상 불가", "기대하지 않는다"],
                ["AI 답변의 질문·답변 매칭", "유효", "고객이 실제 쓰는 문장 그대로"],
                ["페이지 안에서 전환 보조", "유효", "가격·기간·절차 질문 우선"],
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
          FAQ는 &ldquo;우리 서비스의 강점은?&rdquo; 같은 자문자답이 아니라{" "}
          <strong>고객이 실제로 검색창에 치는 문장</strong>으로 만들어야 인용됩니다.
        </p>

        <h2>원인별 조치 정리</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">#</th>
                <th className="px-4 py-3 font-bold text-gray-900">원인</th>
                <th className="px-4 py-3 font-bold text-gray-900">확인 방법</th>
                <th className="px-4 py-3 font-bold text-gray-900">소요</th>
              </tr>
            </thead>
            <tbody>
              {CAUSES.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-bold text-gray-900">{r[0]}</td>
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-600">{r[2]}</td>
                  <td className="px-4 py-2.5 whitespace-nowrap text-gray-600">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>2주 점검 순서</h2>
        <ul>
          <CheckItem><strong>1일차</strong>: <code>site:도메인</code>으로 색인된 페이지 수 파악</CheckItem>
          <CheckItem><strong>2일차</strong>: robots.txt, noindex, 사이트맵 3종 정리</CheckItem>
          <CheckItem><strong>3~4일차</strong>: 대표 URL 통일과 301 처리</CheckItem>
          <CheckItem><strong>5일차</strong>: 핵심 5개 페이지 리치 결과 테스트 전수 검사</CheckItem>
          <CheckItem><strong>6~7일차</strong>: 중복 스키마 제거, 상호·주소·전화·SNS 정보 일치화</CheckItem>
          <CheckItem><strong>8~10일차</strong>: 본문에 스키마 값의 근거 문장 추가(가격·기간·지역·절차)</CheckItem>
          <CheckItem><strong>11일차</strong>: FAQ 질문 5개를 실제 검색어 기반으로 교체</CheckItem>
          <CheckItem><strong>12일차</strong>: 서치콘솔·서치어드바이저에 색인 재요청</CheckItem>
          <CheckItem><strong>13~14일차</strong>: 개선 리포트 상태 변화 확인</CheckItem>
        </ul>
        <Callout>
          <strong>한 번에 여러 항목을 바꾸지 마세요.</strong> 색인, 문법, 콘텐츠 순으로 나눠서 배포해야
          무엇이 효과를 냈는지 판별할 수 있습니다. 한꺼번에 고치면 좋아져도 이유를 모르고, 나빠져도
          되돌릴 지점을 못 찾습니다.
        </Callout>

        <h2>정리</h2>
        <p>
          <strong>마크업을 의심하기 전에 색인을 확인하세요.</strong> 노출이 0인 사이트의 대부분은
          구조화 데이터가 잘못된 게 아니라 페이지가 아직 검색엔진에 없는 상태입니다. 그리고 마크업이
          정상이어도, <strong>본문에 인용할 문장이 없으면 AI는 인용하지 않습니다.</strong>
        </p>
        <p>
          우리 홈페이지의 색인 허용 여부와 구조화 데이터 상태는{" "}
          <a href="/site-check">무료 사이트 진단</a>에서 주소만 넣으면 바로 확인하실 수 있고, AI 노출을
          단계별로 나눠 재는 방법은{" "}
          <a href="/guide/measure-ai-traffic">AI 검색 유입 측정: 4단계로 나눠 세기</a>에 정리해
          두었습니다.
        </p>
        <p>
          아직 넣기 전이라면 어떤 타입을 어느 페이지에 둘지부터 정해야 합니다.{" "}
          <a href="/guide/structured-data-types">구조화 데이터 종류와 페이지별 배치</a>에
          배치표와 JSON-LD 예시를 정리했습니다.
        </p>
      </GuideArticle>
    </>
  )
}
