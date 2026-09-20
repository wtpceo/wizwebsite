import type { Metadata } from "next"
import Link from "next/link"
import {
  Gauge, Globe2, Search, FileText, Megaphone, LineChart,
  ArrowRight, CheckCircle2, XCircle,
} from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

// 기업 마케팅 허브. 자영업 페이지와 말과 경로를 분리한다.
// - "사장님·가게" 대신 "담당자·브랜드·조직"
// - CTA는 무료 진단이 아니라 제안 요청(/business/contact)
// - 기준(리테이너 월 300만원, 최소 3개월, 온보딩 별도)을 페이지에 적어 스스로 걸러지게 한다
// 수치는 공개된 자사 사례에서만 가져온다. 보장 문구는 쓰지 않는다.
const TITLE = "기업 마케팅: AI 검색·SEO·콘텐츠를 한 팀에서 | 위즈더플래닝"
const DESC =
  "마케팅 담당자가 있는 조직을 위한 대행 서비스입니다. ChatGPT·네이버 AI·구글에서 브랜드가 어떻게 인용되는지 매주 같은 기준으로 측정하고, 홈페이지·콘텐츠·광고까지 한 팀에서 실행합니다. 대행료 월 300만원부터, 최소 3개월."
const URL = "https://wiztheplanning.com/business"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    "기업 마케팅 대행", "B2B 마케팅 대행사", "AI 검색 최적화 기업", "기업 SEO 컨설팅",
    "퍼포먼스 마케팅 대행사", "마케팅 대행사 선정", "GEO 대행",
  ],
  alternates: { canonical: "/business" },
  openGraph: { title: TITLE, description: DESC, url: URL, images: ["/covers/geo.jpg"], type: "website" },
}

const SCOPE = [
  { icon: Gauge, title: "AI 검색 가시성 측정", desc: "고객이 실제로 쓸 질문을 정하고 네이버 AI·ChatGPT·제미나이·퍼플렉시티에 반복해 물어, 브랜드가 언급되는 비율과 인용되는 출처를 기록합니다." },
  { icon: Globe2, title: "웹사이트·랜딩 구축", desc: "검색엔진과 AI 크롤러가 읽을 수 있는 구조로 만듭니다. 리뉴얼이라면 주소 체계와 리다이렉트, 측정 설계를 먼저 잡습니다." },
  { icon: Search, title: "검색 최적화(SEO·GEO)", desc: "구글·네이버 검색과 AI 답변을 나눠서 봅니다. 네이버는 AI 크롤러 접근을 막고 있어 두 경로의 작업이 다릅니다." },
  { icon: FileText, title: "콘텐츠 제작", desc: "고객의 질문에 답하는 글과 사진·영상. 인용되기 쉬운 형태로 씁니다." },
  { icon: Megaphone, title: "광고 운영", desc: "메타·구글 캠페인을 검색·콘텐츠 작업과 같은 목표 아래 운영합니다. 매체 운영 범위는 협의해서 정합니다." },
  { icon: LineChart, title: "주간 리포트", desc: "매주 같은 질문, 같은 기준으로 다시 측정해 무엇이 바뀌었고 다음에 무엇을 하는지 보고합니다." },
]

const STEPS = [
  { n: "01", t: "기준선 측정", d: "계약 전에 지금 상태부터 기록합니다. 어떤 질문에 어떤 브랜드가 불리고 있는지, 우리 사이트가 인용되는지. 이 기록이 뒤에 나오는 모든 숫자의 기준이 됩니다." },
  { n: "02", t: "우선순위 합의", d: "고칠 것을 순서대로 정리해 드립니다. 무엇을 먼저 하고 무엇을 뒤로 미룰지, 왜 그런지까지 적습니다." },
  { n: "03", t: "실행", d: "사이트, 콘텐츠, 광고를 실행합니다. 광고 계정과 도메인은 고객사 명의를 원칙으로 합니다." },
  { n: "04", t: "주간 재측정", d: "같은 질문을 매주 다시 물어 변화를 봅니다. 자체 개발한 관제 시스템으로 측정하고, 시스템 자체는 판매하지 않습니다." },
]

const PROOF = [
  { k: "17% → 93%", v: "수도권 정형외과의 ChatGPT 언급률. 계약 전 10개 질문 중 4개에만 나왔고, 39일 뒤 같은 모델·같은 질문으로 다시 재자 10개 모두에 나왔습니다.", href: "/guide/case-orthopedic-chatgpt" },
  { k: "3쪽 vs 167쪽", v: "167쪽짜리 치과 사이트가 인근 3쪽짜리 사이트에 밀려 인용되지 않던 사례. 분량이 아니라 읽히는 구조의 문제였습니다.", href: "/guide/case-dental-llms-factsheet" },
  { k: "18 / 100", v: "2026년 9월 9일 기준 우리 자신의 AI 검색 점수. 잘한 숫자만 보여드리지 않습니다.", href: "/how-we-measure" },
]

const NOT = [
  "검색 순위나 AI 답변 노출을 보장하지 않습니다. 같은 질문에도 답이 매번 달라집니다.",
  "관제 시스템 계정을 판매하거나 제공하지 않습니다. 리포트로 드립니다.",
  "광고 계정을 대행사 명의로 만들지 않습니다. 계약이 끝나면 데이터가 고객사에 남아야 합니다.",
  "인위적인 트래픽이나 리뷰를 만들지 않습니다.",
]

const FAQ = [
  {
    q: "최소 계약 조건이 어떻게 되나요?",
    a: "대행료 기준 월 300만원부터, 최소 3개월입니다. AI 검색은 한 달 만에 결과가 나오지 않습니다. 실제로 홈페이지를 전면 개선한 비뇨의학과의 경우 홈페이지 작업에만 약 2개월, ChatGPT·구글·네이버에서 안정적으로 노출되기까지 약 6개월이 걸렸습니다. 광고비는 대행료와 별도이며 고객사가 매체에 직접 집행합니다.",
  },
  {
    q: "기준선 측정은 무엇이고 비용이 따로 드나요?",
    a: "계약 전에 현재 상태를 기록하는 작업입니다. 고객의 질문을 정하고 네 개 엔진에 반복해 물어 언급 비율, 인용된 출처, 잘못된 정보를 정리합니다. 온보딩 항목으로 별도 견적을 냅니다. 이 기록이 없으면 나중에 무엇이 좋아졌는지 증명할 수 없습니다.",
  },
  {
    q: "이미 대행사가 있는데 같이 쓸 수 있나요?",
    a: "가능합니다. 광고 운영은 기존 대행사가 하고 검색·AI 노출과 사이트 구조를 저희가 맡는 식으로 나눌 수 있습니다. 역할과 데이터 접근 범위를 계약서에 적어 두면 충돌이 줄어듭니다.",
  },
  {
    q: "보고는 어떤 형태로 받나요?",
    a: "주 1회 문서로 드립니다. 엔진별 언급 비율, 인용된 페이지, 사이트 점검 결과, 그 주에 한 일과 다음 주 계획이 들어갑니다. 담당자가 사내 보고에 그대로 쓸 수 있는 형태로 만듭니다.",
  },
  {
    q: "제안서(RFP)를 보내면 그 형식으로 회신해 주시나요?",
    a: "네. 평가 항목과 제출 기한을 보내 주시면 그 형식에 맞춰 제안서를 작성합니다. 보안 서약이 필요하면 먼저 체결한 뒤 자료를 받습니다.",
  },
  {
    q: "예산이 월 300만원보다 작으면 방법이 없나요?",
    a: "기업 대행은 어렵습니다. 대신 무료 진단으로 현재 상태를 확인하시고, 직접 하실 수 있는 순서를 정리한 가이드를 보시는 편이 낫습니다. 규모가 커지면 그때 다시 이야기하면 됩니다.",
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
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "KRW",
      minPrice: 3000000,
      description: "대행료 기준 월 300만원부터, 최소 3개월. 광고비는 별도.",
    },
  },
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
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main className="flex-1">
        {/* 히어로 */}
        <section className="relative overflow-hidden bg-[#070b14] py-20 md:py-28">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">기업 마케팅</p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-[1.15] tracking-tight text-white">
              고객이 AI에게 물었을 때, 브랜드가 불리게 만듭니다
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              마케팅 담당자가 있는 조직을 위한 대행입니다. ChatGPT·네이버 AI·구글에서 브랜드가 어떻게
              인용되는지 매주 같은 기준으로 측정하고, 홈페이지·콘텐츠·광고까지 한 팀에서 실행합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/business/contact">
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
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["2016년", "대행 시작"],
                ["7,000여", "함께한 광고주"],
                ["4개 엔진", "매주 측정"],
                ["월 300만원~", "대행료 기준"],
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
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">이런 조직에 맞습니다</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900">맞는 경우</h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-gray-600">
                <li>마케팅을 맡은 담당자나 팀이 있는 조직</li>
                <li>대행료로 월 300만원 이상을 쓸 수 있는 규모</li>
                <li>검색과 AI 답변에서 브랜드가 밀리고 있다고 느끼는 곳</li>
                <li>보고서로 사내 설득을 해야 하는 담당자</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#f6f8f7] p-6">
              <h3 className="text-lg font-bold text-gray-900">진행 기준</h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-gray-600">
                <li><strong className="text-gray-900">대행료 월 300만원부터.</strong> 광고비는 별도이고 매체에 직접 집행하십니다.</li>
                <li><strong className="text-gray-900">최소 3개월.</strong> 한 달로는 측정 자체가 되지 않습니다.</li>
                <li><strong className="text-gray-900">온보딩 기준선 측정은 별도.</strong> 계약 전 현재 상태부터 기록합니다.</li>
                <li>이 조건보다 작은 규모라면 <Link href="/diagnosis" className="font-semibold text-emerald-700 underline underline-offset-4">무료 진단</Link>이 더 맞습니다.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 범위 */}
        <section className="bg-[#f6f8f7] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">맡는 범위</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
              필요한 것만 골라서 진행합니다. 전부 해야 하는 것은 아닙니다.
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
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">진행 방식</h2>
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

        {/* 근거 */}
        <section className="bg-[#070b14] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">숫자로 남긴 기록</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
              광고주 이름은 밝히지 않습니다. 대신 측정 방법과 원자료를 공개합니다.
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
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">하지 않는 것</h2>
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
              대신 측정 방법을 공개합니다. 같은 질문을 같은 방식으로 다시 물어 확인할 수 있게 적어
              두는 것이 저희가 할 수 있는 최선입니다.
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

        {/* CTA */}
        <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-6 py-12 text-center md:px-12">
            <p className="text-2xl font-extrabold text-white md:text-3xl">제안을 받아 보시겠습니까</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              회사와 목표를 알려 주시면 담당자가 회사 메일로 회신드립니다. 평가 항목이 있는 제안
              요청서라면 그 형식에 맞춰 작성합니다.
            </p>
            <Link href="/business/contact" className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#00e5a0] px-7 py-3.5 text-sm font-bold text-[#070b14] hover:bg-[#3cf0bb]">
              제안 요청 보내기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
