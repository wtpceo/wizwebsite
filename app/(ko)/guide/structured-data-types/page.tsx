import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 43자
const TITLE = "구조화 데이터 종류와 페이지별 배치: 공통 3개 + 유형 1개"
const DESC =
  "구조화 데이터는 타입을 많이 넣는 작업이 아니라 페이지 성격에 맞는 하나를 고르는 작업입니다. 전 페이지에 Organization, WebSite, BreadcrumbList를 깔고 유형별 타입 하나만 더하면 됩니다. 페이지별 배치표와 JSON-LD 예시, 그리고 제작 과정 어느 시점에 넣어야 재작업이 없는지 정리했습니다."
const DATE = "2026-08-26"
const URL = "https://wiztheplanning.com/guide/structured-data-types"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "구조화 데이터 종류", "스키마 타입", "JSON-LD 예시", "Organization 스키마",
    "BreadcrumbList", "sameAs", "홈페이지 제작 SEO",
  ],
  alternates: { canonical: "/guide/structured-data-types" },
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
      name: "한 페이지에 스키마를 몇 개까지 넣어도 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "개수 제한은 없지만 실무에서는 페이지당 2~4개면 충분합니다. 전 페이지 공통 3종에 그 페이지 성격에 맞는 타입 하나를 더하는 구성입니다. 관련 없는 타입을 늘리면 관리 부담만 커지고, 페이지 성격이 오히려 흐려집니다.",
      },
    },
    {
      "@type": "Question",
      name: "구조화 데이터를 넣으면 검색 순위가 오르나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "직접적인 순위 상승 요인은 아닙니다. 구조화 데이터는 순위 알고리즘 신호가 아니라 결과가 어떻게 표시될 수 있는지에 영향을 주는 요소입니다. 다만 AI가 사업 정보를 정확히 인식하게 되어 인용 확률이 올라가는 간접 효과는 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "sameAs는 왜 중요한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "sameAs에 인스타그램, 유튜브, 네이버 블로그 같은 공식 채널 주소를 나열하면 검색엔진과 AI가 흩어져 있는 채널을 하나의 주체로 묶어 인식합니다. 채널마다 상호나 정보가 조금씩 다르면 AI는 어느 값을 믿을지 판단하지 못하고 인용을 피하는데, sameAs가 그 연결을 만들어 줍니다. 비용이 들지 않으면서 효과가 확실한 항목입니다.",
      },
    },
    {
      "@type": "Question",
      name: "구조화 데이터는 제작 과정 어느 시점에 넣어야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "퍼블리싱 단계에서 템플릿 단위로 넣어야 합니다. 오픈한 뒤에 붙이면 페이지마다 손으로 넣게 되어 누락과 중복이 생깁니다. 템플릿에 심어두면 새 글을 올릴 때마다 마크업이 자동으로 따라붙습니다.",
      },
    },
  ],
}

const PLACEMENT: [string, string, string][] = [
  ["메인", "Organization + WebSite", "오프라인 매장이 있으면 LocalBusiness"],
  ["회사소개", "AboutPage", "Organization 필드를 여기서 보강"],
  ["서비스·제품 소개", "Service 또는 Product", "실제 후기가 있을 때만 AggregateRating"],
  ["블로그 목록", "CollectionPage", "ItemList"],
  ["블로그 상세", "Article 또는 BlogPosting", "author, datePublished, dateModified"],
  ["상품 상세", "Product", "Offer(가격·재고), Review"],
  ["문의·연락처", "ContactPage", "LocalBusiness(주소·영업시간)"],
  ["FAQ", "FAQPage", "리치 결과가 아니라 AI 인용 목적으로"],
  ["채용", "JobPosting", "마감일 지나면 반드시 제거"],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/structured-data-types"
        kicker="실전 전략 · 설계 가이드"
        title={TITLE}
        description={DESC}
        date="2026년 8월 26일"
      >
        {/* 결론 우선 */}
        <p>
          <strong>구조화 데이터는 타입을 많이 넣는 작업이 아닙니다.</strong> 전 페이지에{" "}
          <code>Organization</code>, <code>WebSite</code>, <code>BreadcrumbList</code> 세 개를 깔고,{" "}
          <strong>페이지 성격에 맞는 타입 하나만 더하면 됩니다.</strong> 이 &ldquo;공통 3 + 유형
          1&rdquo; 구조로 중소기업 홈페이지에 필요한 건 대부분 충족됩니다.
        </p>

        <h2>페이지별 배치표</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">페이지</th>
                <th className="px-4 py-3 font-bold text-gray-900">여기에 더할 타입</th>
                <th className="px-4 py-3 font-bold text-gray-900">비고</th>
              </tr>
            </thead>
            <tbody>
              {PLACEMENT.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-2.5 text-gray-700">{r[1]}</td>
                  <td className="px-4 py-2.5 text-gray-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          위 표의 타입은 전 페이지 공통 3종(Organization·WebSite·BreadcrumbList)에 <strong>더하는</strong>{" "}
          것입니다.
        </p>

        <h2>타입을 늘리는 것보다 필드를 채우는 게 낫습니다</h2>
        <p>
          타입을 8종, 10종으로 늘려도 <code>Organization</code>의 필드가 비어 있으면 소용이 없습니다.
          <strong> 먼저 채워야 할 것은 name, url, logo, address, sameAs입니다.</strong>
        </p>
        <p>
          이 중 <strong><code>sameAs</code>가 가장 저렴하면서 효과가 확실한 항목</strong>입니다. 인스타그램,
          유튜브, 네이버 블로그 같은 공식 채널 주소를 나열해두면{" "}
          <strong>검색엔진과 AI가 흩어진 채널을 하나의 주체로 묶어 인식합니다.</strong>
        </p>
        <Callout>
          채널마다 상호나 주소가 조금씩 다르면 <strong>AI는 어느 값을 믿을지 판단하지 못하고 인용을
          피합니다.</strong> 저희가 GEO 진단에서 스키마 문법보다 채널 간 정보 일치를 먼저 보는 이유입니다.
          <code>sameAs</code>는 그 연결을 만들어 주는 최소 장치입니다.
        </Callout>

        <h2>JSON-LD 예시</h2>
        <p>지역 사업장을 둔 회사의 메인 페이지 최소 구성입니다.</p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-xs leading-relaxed text-slate-100">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "회사명",
  "url": "https://example.co.kr/",
  "logo": "https://example.co.kr/img/logo.png",
  "description": "한 문장 사업 설명",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "가산디지털1로 00",
    "addressLocality": "금천구",
    "addressRegion": "서울특별시",
    "postalCode": "08590",
    "addressCountry": "KR"
  },
  "sameAs": [
    "https://www.instagram.com/브랜드계정",
    "https://blog.naver.com/브랜드계정"
  ]
}
</script>`}
        </pre>
        <p>서비스 상세 페이지에는 이걸 더합니다.</p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-xs leading-relaxed text-slate-100">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "홈페이지 제작",
  "provider": { "@type": "Organization", "name": "회사명" },
  "areaServed": { "@type": "Country", "name": "KR" },
  "description": "제공 범위를 사실 그대로 서술"
}
</script>`}
        </pre>
        <p>
          <strong>JSON-LD는 HTML과 분리돼 있습니다.</strong> 디자인을 건드리지 않고 스키마만 교체할 수
          있다는 뜻이라, 리뉴얼 없이 구조화 데이터만 손보는 개선이 가능합니다.
        </p>

        <h2>언제 넣어야 재작업이 없나</h2>
        <p>
          <strong>퍼블리싱 단계에서 템플릿에 심는 것이 정답입니다.</strong> 오픈한 뒤에 붙이면 페이지마다
          손으로 넣게 되고, 그 순간부터 누락과 중복이 시작됩니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">단계</th>
                <th className="px-4 py-3 font-bold text-gray-900">할 일</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["기획", "페이지 유형 분류와 URL 규칙 확정"],
                ["퍼블리싱", "템플릿별 JSON-LD 삽입 (핵심 시점)"],
                ["콘텐츠 입력", "본문과 마크업 값이 같은지 확인"],
                ["오픈 직후", "리치 결과 테스트, 서치콘솔·서치어드바이저 등록"],
                ["운영", "월 1회 향상 보고서 오류 확인"],
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
          <strong>템플릿에 심어두면 새 글을 올릴 때마다 마크업이 자동으로 따라붙습니다.</strong> 이게
          손으로 넣는 방식과의 결정적 차이입니다.
        </p>

        <h2>넣기 전에 알아둘 것</h2>
        <ul>
          <CheckItem>
            <strong>순위가 오르지는 않습니다.</strong> 구조화 데이터는 순위 신호가 아니라 결과가 어떻게
            표시될 수 있는지에 영향을 주는 요소입니다. 마크업은 노출 보장이 아니라 후보 진입입니다
          </CheckItem>
          <CheckItem>
            <strong>화면에 없는 값은 넣지 않습니다.</strong> 후기가 없는데 별점을, 본문에 없는 가격을
            마크업에만 적으면 표시 자격이 박탈됩니다
          </CheckItem>
          <CheckItem>
            <strong>빌더나 플러그인이 이미 넣고 있는지 먼저 봅니다.</strong> 소스에서{" "}
            <code>ld+json</code>을 검색해 개수를 세고 시작하세요. 손으로 더 넣었다가{" "}
            <code>Organization</code>이 3개가 되는 일이 흔합니다
          </CheckItem>
          <CheckItem>
            <strong>FAQPage는 목적을 바꿔 잡습니다.</strong> 검색결과 아코디언은 기대하기 어렵고, AI가
            질문과 답을 짝지어 읽는 용도로는 여전히 쓸모가 있습니다
          </CheckItem>
        </ul>

        <h2>정리</h2>
        <p>
          <strong>공통 3개를 전 페이지에 깔고, 페이지마다 하나씩만 더하세요.</strong> 그리고 타입을
          늘리기 전에 <code>Organization</code>의 <code>sameAs</code>부터 채우세요. 흩어진 채널이 하나로
          묶이는 것이 타입 두세 개를 더 얹는 것보다 인용에 크게 작용합니다.
        </p>
        <p>
          <strong>이미 넣었는데 검색에도 AI에도 안 나온다면 문제는 타입이 아닙니다.</strong> 그때는{" "}
          <a href="/guide/structured-data-not-working">원인 7가지와 점검 순서</a>를 따라
          색인부터 확인해야 합니다. 우리 사이트의 현재 상태는{" "}
          <a href="/site-check">무료 사이트 진단</a>에서 주소만 넣으면 바로 확인됩니다.
        </p>
      </GuideArticle>
    </>
  )
}
