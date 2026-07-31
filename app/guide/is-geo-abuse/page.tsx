import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"

const TITLE = "SEO·GEO는 어뷰징인가요? — 검색 마케팅에 대한 5가지 오해와 진실"
const DESC =
  "SEO와 GEO(AI 검색 최적화)를 검색엔진을 속이는 편법·불법으로 오해하는 분들이 있습니다. 하지만 이것은 검색엔진과 AI가 공식적으로 권장하는 정당한 마케팅 기술입니다. 무엇이 정상적인 최적화이고 무엇이 진짜 어뷰징인지, 그 경계를 명확히 정리했습니다."
const DATE = "2026-07-15"
const URL = "https://wiztheplanning.com/guide/is-geo-abuse"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "SEO 어뷰징", "GEO 어뷰징", "SEO 불법", "검색 최적화 편법",
    "어뷰징 뜻", "화이트햇 SEO", "블랙햇 SEO", "AI 검색 최적화 정당성",
    "가짜 리뷰 처벌", "검색 마케팅 오해",
  ],
  alternates: { canonical: "/guide/is-geo-abuse" },
  openGraph: {
    images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
  },
}

// FAQ 데이터 — 화면과 FAQPage 스키마가 공유 (AI가 질문/답변을 직접 인용하도록)
const FAQ = [
  {
    q: "SEO·GEO는 검색엔진이나 AI를 속이는 편법 아닌가요?",
    a: "아닙니다. SEO(검색엔진 최적화)와 GEO(AI 검색 최적화)의 핵심은 '속이는 것'이 아니라 '정확하게 알리는 것'입니다. 매장 정보를 정확히 정리하고, 고객에게 도움이 되는 콘텐츠를 만들고, 데이터를 검색엔진과 AI가 읽을 수 있는 구조로 정돈하는 작업입니다. 오히려 정보를 조작하거나 가짜로 부풀리면 검색엔진과 AI에서 배제되기 때문에, 정직한 최적화가 유일하게 지속 가능한 방법입니다.",
  },
  {
    q: "AI가 우리를 추천하도록 '조작'하는 것 아닌가요?",
    a: "조작이 아니라 '자격을 갖추는 것'입니다. AI는 신뢰할 수 있는 근거(정확한 매장 정보, 실제 방문 리뷰, 잘 정리된 웹사이트)가 있는 곳을 추천합니다. GEO는 우리 매장이 그 근거를 제대로 갖추도록 돕는 일입니다. 존재하지 않는 장점을 지어내는 것이 아니라, 실제로 가진 강점이 AI에 제대로 전달되지 않는 문제를 바로잡는 것입니다.",
  },
  {
    q: "그럼 진짜 '어뷰징(하면 안 되는 것)'은 무엇인가요?",
    a: "가짜 리뷰 작성·구매, 실제와 다른 정보로 유인하기, 눈에 안 보이는 키워드를 페이지에 몰래 심는 키워드 스터핑, 사람과 검색봇에게 다른 페이지를 보여주는 클로킹, 매크로·프로그램을 이용한 순위 어뷰징 같은 것들이 진짜 편법입니다. 이런 방식은 검색엔진 정책 위반일 뿐 아니라, 가짜 후기의 경우 표시·광고법 위반으로 법적 처벌 대상이 됩니다. 정상적인 대행사는 이런 방법을 쓰지 않으며, 위즈더플래닝도 마찬가지입니다.",
  },
  {
    q: "돈 내고 하는 광고랑 SEO·GEO는 뭐가 다른가요?",
    a: "광고는 비용을 내고 노출 '자리'를 사는 것이고, SEO·GEO는 콘텐츠와 데이터의 신뢰도를 높여 '검색·AI 답변에 자연스럽게 포함되도록' 만드는 것입니다. 둘 다 합법적이고 정당한 마케팅 수단이며, 목적이 다를 뿐입니다. 광고가 즉각적인 노출을 산다면, SEO·GEO는 장기적으로 쌓이는 자산을 만듭니다. 실제로는 두 가지를 함께 운영할 때 효과가 가장 큽니다.",
  },
  {
    q: "네이버·구글·AI 회사들은 SEO·GEO를 인정하나요?",
    a: "네, 공식적으로 인정하고 오히려 권장합니다. 구글은 'Google 검색 필수 요소(Search Essentials)'라는 공식 SEO 가이드라인을 제공하고, 네이버는 '서치어드바이저'라는 공식 도구로 사이트 등록과 최적화를 지원합니다. 검색엔진과 AI 입장에서도 정확하고 잘 구조화된 정보가 많아지는 것이 사용자에게 좋은 답을 주는 길이기 때문입니다. SEO·GEO는 이 공식 가이드라인을 따라 정직하게 최적화하는 마케팅 분야이자 기술입니다.",
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
      <GuideArticle href="/guide/is-geo-abuse" kicker="MARKETING BASICS" title={TITLE} description={DESC} date="2026년 7월 15일">
        <p>
          "SEO나 GEO는 검색엔진을 속이는 편법 아니야?", "AI한테 우리를 추천하라고 조작하는 거 아니야?" —
          상담을 하다 보면 이런 오해를 가진 분들을 종종 만납니다. 결론부터 말씀드리면,{" "}
          <strong>SEO와 GEO는 어뷰징도, 불법도, 편법도 아닙니다.</strong> 검색엔진과 AI가 공식적으로
          권장하는, 엄연한 마케팅의 한 분야이자 기술입니다.
        </p>

        <h2>오해의 출발점: '최적화'와 '어뷰징'을 구분하지 못해서</h2>
        <p>
          이 오해는 대부분 한 가지 뿌리에서 나옵니다. 과거 일부 업체가 가짜 리뷰나 순위 조작 같은{" "}
          <strong>편법(블랙햇, black-hat)</strong>을 쓰면서 그것을 'SEO'라고 불렀기 때문입니다. 하지만
          그것은 SEO가 아니라 정책 위반이자 어뷰징입니다. 정상적인 SEO·GEO는{" "}
          <strong>정직한 최적화(화이트햇, white-hat)</strong>를 의미합니다.
        </p>
        <ul>
          <CheckItem>
            <strong>정상적인 최적화(화이트햇)</strong> — 정확한 정보 정리, 유용한 콘텐츠 제작,
            검색봇·AI가 읽을 수 있는 구조 설계
          </CheckItem>
          <CheckItem>
            <strong>어뷰징(블랙햇)</strong> — 가짜 리뷰, 키워드 스터핑, 클로킹, 매크로 순위 조작 등
            사용자를 속이는 행위
          </CheckItem>
        </ul>
        <p>
          이 둘은 목적부터 정반대입니다. 최적화는 <strong>사실을 더 잘 전달</strong>하는 것이고, 어뷰징은{" "}
          <strong>사실이 아닌 것을 사실처럼 보이게</strong> 하는 것입니다.
        </p>

        <h2>자주 묻는 오해 5가지</h2>
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

        <Callout>
          진짜 편법은 오히려 위험합니다. 가짜 후기 작성·구매는 표시·광고법 위반으로 과징금·형사처벌
          대상이며, 검색엔진의 순위 조작 어뷰징은 적발 시 노출에서 완전히 배제됩니다. 정직한
          최적화만이 지속 가능한 이유입니다.
        </Callout>

        <h2>SEO·GEO는 '기술'입니다</h2>
        <p>
          SEO·GEO는 감이나 요령이 아니라 데이터에 기반한 기술 영역을 포함합니다. 매장·브랜드 정보를
          기계가 이해할 수 있게 정리하는 <strong>구조화 데이터(Schema.org)</strong>, 검색봇과 AI
          크롤러가 페이지를 제대로 읽도록 하는 <strong>서버 렌더링·크롤링 접근성</strong>, 정보의
          일관성을 맞추는 <strong>엔터티 정리</strong>가 대표적입니다. 위즈더플래닝은 이 기술을 자사
          홈페이지에 직접 적용하고, 같은 기준을 광고주에게 적용합니다.
        </p>

        <h2>정리하면</h2>
        <p>
          SEO와 GEO는 검색엔진과 AI를 속이는 편법이 아니라,{" "}
          <strong>정확한 정보와 좋은 콘텐츠로 정당하게 추천받게 만드는 마케팅 기술</strong>입니다.
          구글과 네이버가 공식 가이드라인으로 권장하고, AI 역시 신뢰할 수 있는 데이터를 선호합니다.
          편법은 짧고 위험하지만, 정직한 최적화는 오래가고 안전합니다. 정직한 업체와 편법 업체를
          견적 단계에서 가려내는 방법은{" "}
          <a href="/guide/how-to-choose-geo-agency">GEO 대행사 고르는 법 — 계약 전 7가지 질문</a>에
          정리했습니다.
        </p>
        <p>
          우리 매장이 AI 검색에서 지금 어떤 상태인지 궁금하시다면,{" "}
          <a href="/#contact">무료 AI 검색 진단</a>으로 실제 데이터를 먼저 확인해 보세요.
        </p>
      </GuideArticle>
    </>
  )
}
