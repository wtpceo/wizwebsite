import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 42자
const TITLE = "GEO 대행사 추천 TOP5, 누가 쓴 글인지 확인해봤습니다"
const DESC =
  "'GEO 대행사 추천'으로 검색하면 나오는 TOP5 글 9개를 전부 열어 누가 썼는지, 1위가 누구인지, 도메인 등록 정보는 어떤지 확인했습니다. 8개가 대행사 본인이 쓴 글이었고 전부 자기 회사를 1위에 올렸습니다. 연구소 명칭을 쓰는 도메인 두 곳은 같은 날 같은 등록인이 만들었고 같은 업체를 1위로 소개합니다. 저희도 이 검색어에서는 나오지 않습니다."
const DATE = "2026-09-02"
const URL = "https://wiztheplanning.com/guide/geo-agency-recommendation-check"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "GEO 대행사 추천", "GEO 대행사 TOP5", "AI 검색 최적화 대행사", "GEO 업체 비교",
    "GEO 대행사 고르는 법", "추천 글 검증",
  ],
  alternates: { canonical: "/guide/geo-agency-recommendation-check" },
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
      name: "GEO 대행사 추천 TOP5 글은 믿을 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026년 9월 2일 기준으로 구글과 빙 상위에 뜨는 추천 글 9개를 열어보니 8개가 대행사 본인 도메인이나 그 회사의 브런치에 올린 글이었고, 전부 자기 회사를 1위로 소개했습니다. 글 자체가 거짓이라는 뜻은 아니지만, 추천이 아니라 자기소개로 읽는 것이 정확합니다. 글을 쓴 도메인이 누구 것인지부터 확인하시면 됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "연구소 이름을 쓰는 사이트의 추천 글은 다른가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "이번 확인에서 연구소 명칭을 쓰는 .re.kr 도메인 두 곳이 상위에 있었는데, 공개된 도메인 등록 정보를 보면 두 곳 모두 2026년 3월 3일에 같은 등록인이 등록했고, 두 글 모두 같은 업체를 1위로 소개하며 그 업체 사이트로 링크합니다. 누가 운영하는지는 등록 정보만으로 단정할 수 없지만, 독립된 기관의 평가로 읽기에는 확인할 것이 많습니다.",
      },
    },
    {
      "@type": "Question",
      name: "위즈더플래닝은 이 검색어에서 몇 위인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "나오지 않습니다. 구글 20위 안, 빙 상위, 네이버 웹문서 상위, 구글 AI 개요 어디에도 없습니다. 저희는 자기 회사를 1위에 올리는 추천 글을 쓰지 않았고, 다른 대행사가 저희를 목록에 넣어줄 이유도 없기 때문입니다. 이 글은 그 사실을 숨기지 않고 씁니다.",
      },
    },
    {
      "@type": "Question",
      name: "그러면 대행사는 어떻게 골라야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "추천 순위 대신 검증 가능한 것을 보시면 됩니다. 글을 올린 도메인이 누구 것인지, 성과라고 주장하는 수치의 측정 방법이 적혀 있는지, 광고주 사례에 익명 처리와 시점이 있는지입니다. 계약 전에 물어볼 질문 7가지는 별도 글에 정리해 두었습니다.",
      },
    },
  ],
}

const NINE: [string, string, string][] = [
  ["zestcompany.co.kr (블로그)", "제스트컴퍼니 본인", "제스트컴퍼니"],
  ["brunch.co.kr/@zestcompany", "제스트컴퍼니 본인", "제스트컴퍼니"],
  ["snu.re.kr", "연구소 명칭 도메인", "지오랭크"],
  ["hrc.re.kr", "연구소 명칭 도메인", "지오랭크"],
  ["georank.co.kr (리포트)", "지오랭크 본인", "지오랭크"],
  ["lead-gen.team", "리드젠랩 본인", "자사 포함 목록"],
  ["searchpolaris.com", "대행사 본인", "자사 포함 목록"],
  ["dicompany.co.kr", "대행사 본인", "자사 포함 목록"],
  ["villion.io", "비교 블로그", "순위 없이 비교"],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/geo-agency-recommendation-check"
        kicker="실제 사례 · 자체 실측"
        title={TITLE}
        description={DESC}
        date="2026년 9월 2일"
      >
        {/* 결론 우선 */}
        <p>
          <strong>&lsquo;GEO 대행사 추천&rsquo;으로 검색해 나오는 TOP5 글 9개를 전부 열어봤습니다.
          8개가 대행사 본인이 쓴 글이었고, 전부 자기 회사를 1위에 올렸습니다.</strong> 연구소 명칭을
          쓰는 도메인 두 곳은 같은 날 같은 등록인이 만들었고, 같은 업체를 1위로 소개합니다.{" "}
          <strong>그리고 저희도 이 검색어에서는 나오지 않습니다.</strong>
        </p>

        <h2>세 엔진에서 누가 뜨나</h2>
        <p>2026년 9월 2일에 직접 검색한 결과입니다.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">엔진</th>
                <th className="px-4 py-3 font-bold text-gray-900">상위에 나오는 곳</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["구글 AI 개요", "써밋피드 · 제스트컴퍼니 · 원플랜마케팅"],
                ["구글 검색 1~9위", "브런치(제스트) · georank · 제스트 · 리드젠랩 · villion · searchpolaris · search-nine · dicompany · next-t"],
                ["빙 검색 1~6위", "제스트 · 제스트 · snu.re.kr · georank · hrc.re.kr · 브런치(제스트)"],
                ["네이버 웹문서", "원플랜 · georank · 써밋피드 · searchpolaris"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>빙이 중요합니다.</strong> ChatGPT 검색이 빙 색인을 참고하기 때문에, 빙 상위가 곧
          ChatGPT가 볼 후보입니다(<a href="/guide/bing-index-bottleneck">실측 기록</a>).
        </p>

        <h2>글 9개를 열어보니</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">글이 올라간 곳</th>
                <th className="px-4 py-3 font-bold text-gray-900">누가 썼나</th>
                <th className="px-4 py-3 font-bold text-gray-900">1위로 소개한 곳</th>
              </tr>
            </thead>
            <tbody>
              {NINE.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-mono text-xs text-gray-700">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>9개 중 순위를 매기지 않은 글은 villion.io 하나였습니다.</strong> 나머지는 자기
          회사 도메인, 자기 회사 브런치, 또는 자기 회사로 링크가 향하는 곳에 올라간 글이고, 1위는
          예외 없이 글을 쓴 쪽이었습니다.
        </p>
        <Callout>
          이 글들이 거짓이라는 뜻은 아닙니다. <strong>&ldquo;추천&rdquo;이 아니라
          &ldquo;자기소개&rdquo;로 읽어야 정확하다는 뜻입니다.</strong> 자기소개는 유용한 정보입니다.
          다만 제3자의 평가로 오해하면 판단이 틀어집니다.
        </Callout>

        <h2>연구소 이름을 단 도메인 두 곳</h2>
        <p>
          빙 3위와 5위에 <code>snu.re.kr</code>과 <code>hrc.re.kr</code>이 있었습니다. 사이트 제목은
          각각 &ldquo;서울대학교차세대연구원&rdquo;과 &ldquo;한국리서치휴먼연구소&rdquo;입니다.
          공개된 도메인 등록 정보(whois)를 확인했습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">도메인</th>
                <th className="px-4 py-3 font-bold text-gray-900">등록인</th>
                <th className="px-4 py-3 font-bold text-gray-900">등록일</th>
                <th className="px-4 py-3 font-bold text-gray-900">추천 1위</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["snu.re.kr", "한국 학술 대학 연구소", "2026-03-03", "지오랭크"],
                ["hrc.re.kr", "한국 학술 대학 연구소", "2026-03-03", "지오랭크"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-mono text-xs text-gray-700">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[2]}</td>
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          두 도메인은 <strong>같은 날, 같은 등록인</strong>이 등록했고, 두 글 모두 같은 업체를 1위로
          소개하며 본문 링크가 그 업체 사이트로 향합니다. <code>hrc.re.kr</code> 본문에는
          &ldquo;자화자찬이 아니라&rdquo;는 문구가 직접 적혀 있습니다.
        </p>
        <p>
          <strong>누가 이 도메인을 운영하는지는 등록 정보만으로 단정할 수 없습니다.</strong> 저희가
          말할 수 있는 건 여기까지입니다. 다만 독립된 연구기관의 평가로 읽기에는 확인할 것이 많다는
          점은 분명합니다.
        </p>

        <h2>저희도 없습니다</h2>
        <p>
          숨기지 않겠습니다. <strong>위즈더플래닝은 이 검색어에서 구글 20위 안에도, 빙 상위에도,
          네이버 웹문서 상위에도, 구글 AI 개요에도 없습니다.</strong> 저희 주간 보고서에서도 이
          키워드는 &lsquo;권외&rsquo;입니다.
        </p>
        <p>이유는 단순합니다.</p>
        <ul>
          <CheckItem>저희는 자기 회사를 1위에 올리는 추천 글을 쓰지 않았습니다</CheckItem>
          <CheckItem>다른 대행사가 저희를 자기 목록에 넣어줄 이유가 없습니다</CheckItem>
          <CheckItem>
            AI는 &ldquo;추천&rdquo; 질문에 목록 글을 근거로 씁니다. 목록에 없으면 언급할 근거가 없습니다
          </CheckItem>
        </ul>
        <p>
          <strong>이 구조를 알면서도 같은 방식으로 글을 쓰지는 않겠습니다.</strong> 저희가{" "}
          <a href="/guide/how-to-choose-geo-agency">계약 전 확인할 7가지</a>에서 그 방식을 문제 삼았기
          때문입니다. 대신 이 글처럼 검색 결과 자체를 검증해서 공개합니다.
        </p>

        <h2>추천 글을 만났을 때 30초 확인법</h2>
        <ul>
          <CheckItem>
            <strong>주소창의 도메인이 누구 것인가.</strong> 대행사 도메인이나 그 회사 브런치라면
            자기소개입니다
          </CheckItem>
          <CheckItem>
            <strong>1위가 글쓴이 본인인가.</strong> 이번 9개 중 8개가 그랬습니다
          </CheckItem>
          <CheckItem>
            <strong>기관 이름을 쓰는 사이트라면 등록 정보를 봅니다.</strong> whois는 누구나 무료로
            조회할 수 있고, 등록인과 등록일이 나옵니다
          </CheckItem>
          <CheckItem>
            <strong>본문 링크가 어디로 향하는가.</strong> 1위로 소개한 업체로만 링크가 간다면 그
            글의 목적이 드러납니다
          </CheckItem>
        </ul>

        <h2>정리</h2>
        <p>
          <strong>&lsquo;GEO 대행사 추천&rsquo; 검색 결과는 지금 추천이 아니라 자기소개의 모음입니다.</strong>{" "}
          그걸 알고 읽으면 여전히 쓸모가 있습니다. 각 회사가 무엇을 잘한다고 스스로 말하는지는
          거기 다 적혀 있으니까요. 다만 순위는 무시하시고, 주장하는 성과의{" "}
          <a href="/guide/measure-ai-traffic">측정 방법이 적혀 있는지</a>를 보시면 됩니다.
        </p>
        <p>
          직접 할지 맡길지부터 고민 중이시면{" "}
          <a href="/guide/geo-diy-or-agency">직접 할까 대행 맡길까</a>에 판단 기준을 정리해 두었고,
          우리 홈페이지 상태는 <a href="/site-check">무료 사이트 진단</a>에서 바로 확인됩니다.
        </p>
      </GuideArticle>
    </>
  )
}
