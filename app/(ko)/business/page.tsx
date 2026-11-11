import { BIZ_CTA } from "@/components/shortform/SiteChrome"
import type { Metadata } from "next"
import Link from "next/link"
import {
  Gauge, Globe2, Search, FileText, Megaphone, LineChart,
  ArrowRight, CheckCircle2, XCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocShell } from "@/components/shortform/DocParts"
import { share } from "@/lib/share-meta"

// 기업 마케팅 허브. 자영업 페이지와 말과 경로를 분리한다.
// - "사장님·가게" 대신 "담당자·브랜드·조직"
// - CTA는 무료 진단이 아니라 제안 요청(/contact)
// - 기준(최소 3개월, 온보딩 별도)을 페이지에 적어 스스로 걸러지게 한다 · 금액은 적지 않고 진단 뒤 제안서로(사장님 11-04)
// 수치는 공개된 자사 사례에서만 가져온다. 보장 문구는 쓰지 않는다.
const TITLE = "기업 마케팅: 캠페인 기획부터 광고·콘텐츠·SEO·GEO까지 | 위즈더플래닝"
const DESC =
  "마케팅 전담 부서가 있는 기업을 위한 통합 대행 서비스입니다. 캠페인 기획, 인플루언서 섭외, 콘텐츠 프로덕션, 메타·구글 퍼포먼스 광고, 웹사이트 구축, SEO·GEO를 과업 범위에 맞춰 수행합니다. 견적은 맞춤 제안서로 안내하며 최소 계약 기간은 3개월입니다."
const URL = "https://wiztheplanning.com/business"

export const metadata: Metadata = share({
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    "기업 마케팅 대행", "B2B 마케팅 대행사", "AI 검색 최적화 기업", "기업 SEO 컨설팅",
    "퍼포먼스 마케팅 대행사", "마케팅 대행사 선정", "GEO 대행",
  ],
  alternates: { canonical: "/business" },
  openGraph: { title: TITLE, description: DESC, url: URL, images: ["/covers/geo.jpg"], type: "website" },
})

const SCOPE = [
  { icon: Gauge, title: "AI 검색 노출 측정", desc: "소비자의 실제 탐색 질문을 설계하고 네이버 AI·ChatGPT·Gemini·Perplexity에 반복 질의하여 브랜드 언급 비율과 인용 출처를 기록합니다." },
  { icon: Globe2, title: "웹사이트·랜딩 구축", desc: "검색엔진과 AI 크롤러가 정확히 인식하는 구조로 구축합니다. 사이트 리뉴얼 시에는 URL 체계와 리다이렉트, 전환 추적 설계를 선행합니다." },
  { icon: Search, title: "검색 최적화(SEO·GEO)", desc: "구글·네이버 자연 검색과 생성형 AI 답변 최적화를 이원화하여 설계합니다. 채널별 로봇 접근 정책 차이에 맞춰 전략을 수립합니다." },
  { icon: FileText, title: "콘텐츠 프로덕션", desc: "소비자의 핵심 질문에 두괄식으로 답하는 아티클과 고품질 사진·영상 소재를 인하우스에서 제작합니다." },
  { icon: Megaphone, title: "퍼포먼스 광고 운영", desc: "메타·구글 등 주요 매체 캠페인을 검색·콘텐츠 전략과 하나의 목표로 연동해 운영합니다." },
  { icon: LineChart, title: "주간 성과 리포트", desc: "매주 동일 질문과 기준으로 재측정하여 전주 대비 지표 변화와 차주 실행 과제를 보고합니다." },
]

const STEPS = [
  { n: "01", t: "초기 기준선 측정", d: "착수 전 현재 브랜드의 노출 현황을 정밀 기록합니다. 탐색 질문별 브랜드 언급 여부와 공식 사이트 출처 인용 빈도를 측정하여 이후 성과의 비교 기준선으로 삼습니다." },
  { n: "02", t: "우선순위 합의", d: "개선 과제를 시급성과 영향도 순으로 정리하여 제안합니다. 선행 과제와 후속 과제의 우선순위 및 선정 근거를 명확히 공유합니다." },
  { n: "03", t: "통합 실행", d: "웹사이트 구조 개선, 콘텐츠 발행, 퍼포먼스 광고를 통합 실행합니다. 광고 계정과 도메인은 고객사 명의 소유를 원칙으로 합니다." },
  { n: "04", t: "주간 정기 재측정", d: "동일 질문을 매주 반복 측정하여 지표 추이를 추적합니다. 자체 개발 관제 시스템으로 측정하며, 솔루션 계정은 외부에 별도 판매하지 않습니다." },
]

const PROOF = [
  { k: "17% → 93%", v: "수도권 정형외과의 ChatGPT 언급률. 동일 질문 10개를 3회씩 질의한 30개 응답 기준, 착수 전 5건에서 39일 후 28건으로 상승했습니다. 2주 뒤 25건(83%)으로 조정된 회차까지 투명하게 기록했습니다.", href: "/guide/case-orthopedic-chatgpt" },
  { k: "3쪽 vs 167쪽", v: "167쪽 규모의 치과 웹사이트보다 인근 3쪽 규모의 사이트가 먼저 ChatGPT에 인용된 사례입니다. AI 안내 파일을 팩트시트 구조로 개편한 뒤 해당 치과도 추천 후보에 진입했습니다.", href: "/guide/case-dental-llms-factsheet" },
  { k: "16 / 100", v: "2026년 10월 19일 기준 위즈더플래닝 자사의 AI 검색 종합 점수입니다. 9월 7일(18점) 대비 2점 하락한 내역까지 가감 없이 공개합니다.", href: "/how-we-measure" },
]

const NOT = [
  "검색 순위나 AI 답변 노출을 확정적으로 보장하지 않습니다. 동일 질문에도 알고리즘과 시점에 따라 응답이 달라집니다.",
  "자체 관제 시스템 계정을 외부에 판매하거나 분양하지 않으며, 분석 리포트 형태로 제공합니다.",
  "광고 계정을 대행사 명의로 개설하지 않습니다. 계약 종료 후에도 모든 데이터는 고객사에 귀속됩니다.",
  "인위적인 트래픽 유도나 허위 리뷰 작업은 일체 수행하지 않습니다.",
]

// 설명 문구는 작가 세션 확정본 (2026-10-29)
const REPORT_SHOTS = [
  {
    src: "/report/business-report-summary.jpg",
    alt: "위즈더플래닝 주간 리포트 42주차 요약: 카테고리 점유율 0%, 출처 인용률 13%, 인용 키워드 3/9, 웹 건강도 100점",
    caption: "주간 리포트 첫 페이지: 4대 핵심 지표 및 직전 회차 대비 증감",
    w: 1200,
    h: 1221,
  },
  {
    src: "/report/business-report-engines.jpg",
    alt: "위즈더플래닝 주간 리포트 42주차 엔진별 노출: Gemini·ChatGPT·Perplexity 응답 10개씩, 출처 인용 2·2·3건",
    caption: "엔진별 동일 조건 질의 결과 및 전체 응답 수 대비 출처 인용 건수",
    w: 1200,
    h: 1077,
  },
]

const FAQ = [
  {
    q: "최소 계약 조건이 어떻게 되나요?",
    a: "최소 계약 기간은 3개월이며, 대행 비용은 과업 범위를 파악한 뒤 맞춤 제안서로 안내해 드립니다. AI 검색 최적화는 단기간에 성과를 단정하기 어렵습니다. 실제로 웹사이트를 전면 개편한 비뇨의학과 사례는 사이트 구축에 약 2개월, ChatGPT·구글·네이버에서 안정적으로 노출되기까지 약 6개월이 소요되었습니다. 매체 광고비는 대행 수수료와 별도이며 고객사가 매체에 직접 집행합니다.",
  },
  {
    q: "기준선 측정은 무엇이고 비용이 따로 드나요?",
    a: "착수 전 현재 브랜드의 노출 현황을 정량적으로 기록하는 작업입니다. 타깃 탐색 질문을 설계해 4대 엔진에 반복 질의하고 브랜드 언급 비율, 인용 출처, 오류 정보를 진단합니다. 초기 온보딩 항목으로 별도 견적이 산정되며, 이후 캠페인 성과를 객관적으로 검증하는 기준점이 됩니다.",
  },
  {
    q: "이미 대행사가 있는데 같이 쓸 수 있나요?",
    a: "가능합니다. 매체 광고 운영은 기존 대행사가 담당하고, 검색·AI 노출 최적화와 웹사이트 구조 고도화를 당사가 전담하는 방식으로 역할을 분담할 수 있습니다. 과업 범위와 데이터 접근 권한을 사전에 명문화하여 원활하게 협업합니다.",
  },
  {
    q: "보고는 어떤 형태로 받나요?",
    a: "주 1회 정기 리포트 문서로 전달합니다. 엔진별 브랜드 언급 비율, 인용 페이지, 사이트 기술 점검 결과, 금주 수행 내역 및 차주 실행 계획이 포함되며, 담당자가 사내 보고에 즉시 활용할 수 있는 양식으로 작성됩니다. 기본 리포트는 Gemini, ChatGPT, Perplexity 3대 엔진을 기준으로 하며, 네이버 AI 브리핑도 함께 추적합니다.",
  },
  {
    q: "제안서(RFP)를 보내면 그 형식으로 회신해 주시나요?",
    a: "네, 평가 항목과 제출 기한을 전달해 주시면 귀사의 양식에 맞춰 제안서를 작성합니다. 비밀유지협약(NDA)이 필요한 경우 사전 체결 후 자료를 교류합니다.",
  },
  {
    q: "예산이 적으면 방법이 없나요?",
    a: "소규모 예산의 경우 기업 통합 대행보다는 무료 AI 검색 진단을 통해 현재 상태를 먼저 점검하시고, 실무 가이드를 참고해 자체 정비를 선행하시는 편을 권해 드립니다.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "기업 마케팅 대행 (AI 검색·SEO·콘텐츠·광고)",
  serviceType: "기업 대상 디지털 마케팅 대행",
  url: URL,
  description: DESC,
  areaServed: { "@type": "Country", name: "대한민국" },
  audience: { "@type": "Audience", audienceType: "마케팅 담당 조직이 있는 기업" },
  provider: { "@id": "https://wiztheplanning.com/#organization" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://wiztheplanning.com" },
    { "@type": "ListItem", position: 2, name: "기업 마케팅", item: URL },
  ],
}

export default function Page() {
  return (
    // 2026-11-05 사장님 「여기도 아직 이전 페이지」 — 머리글·바닥글만 새 틀(DocShell)로, 본문은 그대로
    <DocShell cta={BIZ_CTA}>
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="flex-1">
        {/* 히어로 */}
        <section className="relative overflow-hidden bg-[#070b14] py-20 md:py-28">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">기업 마케팅</p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-[1.15] tracking-tight text-white">
              기업 마케팅 대행,
              <br />
              캠페인 기획부터 검색·AI 노출까지
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              마케팅 전담 조직이 있는 기업을 위한 통합 대행 서비스입니다. 캠페인 기획, 인플루언서 섭외, 콘텐츠 프로덕션, 퍼포먼스 광고,
              웹사이트 구축, SEO·GEO 중 필요한 과업을 선택하여 의뢰하실 수 있습니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="w-full gap-1 bg-[#00e5a0] px-8 py-6 text-base font-bold text-[#070b14] hover:bg-[#3cf0bb] sm:w-auto">
                  제안 요청 보내기 <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/how-we-measure">
                <Button size="lg" variant="outline" className="w-full border-slate-700 bg-transparent px-8 py-6 text-base text-slate-300 hover:border-slate-500 hover:bg-white/5 hover:text-white sm:w-auto">
                  측정 방식 보기
                </Button>
              </Link>
            </div>
            <dl className="mt-12 grid max-w-sm grid-cols-2 gap-6">
              {[
                ["4개 엔진", "측정, 기본 보고서는 3개"],
                ["주 1회", "주간 보고서"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="text-xl font-extrabold text-white md:text-2xl">{v}</dd>
                  <dd className="mt-1 text-xs leading-snug text-slate-400">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 대상과 기준 */}
        <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">적합한 조직과 진행 기준</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900">적합한 기업</h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-gray-600">
                <li>마케팅 전담 실무자나 부서가 있는 기업</li>
                <li>월간·분기별 마케팅 예산을 편성해 운영하는 조직</li>
                <li>포털 검색과 AI 답변 내 브랜드 점유율 개선이 필요한 기업</li>
                <li>정량적 데이터 기반의 사내 보고 자료가 필요한 담당자</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#f6f8f7] p-6">
              <h3 className="text-lg font-bold text-gray-900">진행 기준</h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-gray-600">
                <li><strong className="text-gray-900">맞춤 제안서 기반 견적 산정.</strong> 매체 광고비는 별도이며 고객사가 직접 집행합니다.</li>
                <li><strong className="text-gray-900">최소 계약 기간 3개월.</strong> 정기 재측정 데이터를 축적하고 추이를 검증하기 위한 최소 기간입니다.</li>
                <li><strong className="text-gray-900">초기 기준선 측정 온보딩.</strong> 착수 전 현재 노출 현황을 정밀 기록합니다.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 범위 */}
        <section className="bg-[#f6f8f7] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">수행 과업 범위</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
              조직의 현재 과제에 맞춰 필요한 영역만 선택하여 구성하실 수 있습니다.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SCOPE.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <Icon className="h-6 w-6 text-[#00b57f]" aria-hidden />
                  <h3 className="mt-3 text-base font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 진행 방식 */}
        <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">캠페인 진행 절차</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl border border-gray-200 bg-white p-6">
                <span className="font-mono text-sm font-bold text-[#00b57f]">{s.n}</span>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 주간 리포트 샘플 — 자사 42주차(10/19 측정) 화면. 광고주 리포트는 쓰지 않는다 (10/29 대표 결정) */}
        <section className="bg-[#f6f8f7] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">정기 주간 리포트 예시</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
              위즈더플래닝 자사를 직접 측정한 42주차(10월 12일~18일, 10월 19일 측정) 주간 리포트 화면입니다. 카테고리 점유율
              0% 등 불리한 수치도 가감 없이 기록하며, 6쪽 분량의 샘플 PDF는 제안 요청 시 회신 메일로 전달해 드립니다. 세부 지표의 의미는{" "}
              <Link href="/business/insights/weekly-report-sample" className="font-semibold text-emerald-700 underline underline-offset-4">
                주간 보고서 소개 글
              </Link>
              에서 확인하실 수 있습니다.
            </p>
            {/* 화면 속 글자가 읽혀야 해서 두 장을 나란히 두지 않고 세로로 쌓는다 */}
            <div className="mt-8 max-w-3xl space-y-10">
              {REPORT_SHOTS.map((r) => (
                <figure key={r.src}>
                  <img
                    src={r.src}
                    alt={r.alt}
                    width={r.w}
                    height={r.h}
                    loading="lazy"
                    className="w-full rounded-xl border border-gray-200 bg-white"
                  />
                  <figcaption className="mt-3 text-sm leading-relaxed text-gray-600">{r.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 근거 */}
        <section className="bg-[#070b14] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">실측 데이터 기반의 수행 기록</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
              고객사명은 보안 원칙에 따라 비공개로 처리하며, 구체적인 측정 방식과 회차별 수치 변화를 투명하게 공개합니다.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {PROOF.map((p) => (
                <Link key={p.k} href={p.href} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#00e5a0]/40">
                  <p className="text-xl font-extrabold text-[#00e5a0]">{p.k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.v}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-white group-hover:underline">
                    기록 보기 <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 하지 않는 것 */}
        <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">투명한 운영을 위한 네 가지 원칙</h2>
          <ul className="mt-8 space-y-3">
            {NOT.map((n) => (
              <li key={n} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-700">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" aria-hidden />
                <span>{n}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
            <span>
              확정 보장을 지양하는 대신 측정 방식을 투명하게 공개합니다. 동일한 질문을 동일한 조건으로 질의하시면 리포트의 수치를 직접 교차 검증하실 수 있습니다.
            </span>
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-[#f6f8f7] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">자주 묻는 질문</h2>
            <div className="mt-8 space-y-4">
              {FAQ.map((f, i) => (
                <div key={f.q} className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
                  <h3 className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
                    <span className="shrink-0 text-[#00b57f]">Q{i + 1}.</span>
                    <span>{f.q}</span>
                  </h3>
                  <p className="mt-3 text-base leading-[1.85] text-gray-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 인사이트 */}
        <section className="bg-[#f6f8f7] py-14 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl">기업 마케팅 실무 인사이트</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              대행사 선정 기준, RFP 작성법, 예산 편성 및 성과 측정 등 의사결정에 필요한 실무 가이드를 다룹니다.
              IMC가 처음이라면{" "}
              <Link href="/business/insights/imc-marketing" className="font-semibold text-gray-900 underline underline-offset-4">
                IMC 마케팅의 뜻과 전략 수립 5단계
              </Link>
              부터 보시면 됩니다. 캠페인 예산 산정이 막막하다면{" "}
              <Link href="/business/insights/youtuber-casting" className="font-semibold text-gray-900 underline underline-offset-4">
                유튜버 섭외 비용 기준과 경로별 차이
              </Link>
              를 살펴보세요.
            </p>
            <Link href="/business/insights" className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-gray-900 hover:border-gray-400">
              기업 마케팅 인사이트 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-6 py-12 text-center md:px-12">
            <p className="text-2xl font-extrabold text-white md:text-3xl">맞춤 캠페인 제안 요청</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              조직 현황과 캠페인 목표를 남겨 주시면 전담 AE가 기업 이메일로 맞춤 제안서를 회신해 드립니다. 평가 항목이 지정된 RFP 양식에도 맞춰 작성합니다.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#00e5a0] px-7 py-3.5 text-sm font-bold text-[#070b14] hover:bg-[#3cf0bb]">
              제안 요청 보내기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
    </DocShell>
  )
}
