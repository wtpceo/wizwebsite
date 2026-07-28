import type { Metadata } from "next"
import Link from "next/link"
import {
  ChevronRight, Search, FileCheck, Code2, PenLine, BarChart3,
  ShieldCheck, Stethoscope, ArrowRight, Check,
} from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

const TITLE = "병원 GEO 대행 — 병원·의원 AI 검색 최적화 전문"
const DESC =
  "환자가 ChatGPT·네이버 AI에게 병원을 묻는 시대. 위즈더플래닝은 병원·의원 전용 AI 검색 최적화(GEO)를 대행합니다. 크롤러 접근 점검부터 채널 정보 정합성, 홈페이지 구조화, 의료광고 기준을 반영한 콘텐츠까지. 무료 진단으로 현재 상태를 먼저 확인하고 시작합니다."
const URL = "https://wiztheplanning.com/medical-geo-agency"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "병원 GEO 대행", "병원 GEO", "의원 GEO 대행", "병원 AI 검색 최적화",
    "병원 마케팅 대행사", "의료 마케팅 대행", "병원 홈페이지 GEO",
    "ChatGPT 병원 노출", "네이버 AI 병원", "병원 검색 최적화 업체",
  ],
  alternates: { canonical: "/medical-geo-agency" },
  openGraph: {
    images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "website",
  },
}

// 대행 범위 — 실제 사례에서 검증된 순서 그대로
const SCOPE = [
  {
    icon: Search,
    step: "01",
    title: "AI 검색 진단",
    desc: "네이버 AI·ChatGPT·제미나이에 실제 환자 질문을 반복 측정해 언급 점유율, 오정보, 경쟁 병원과의 격차를 리포트로 정리합니다. 모든 작업은 여기서 시작합니다.",
  },
  {
    icon: Code2,
    step: "02",
    title: "크롤러 접근 점검",
    desc: "AI 크롤러가 홈페이지를 읽을 수 있는 상태인지 확인합니다. 막혀 있으면 콘텐츠를 아무리 만들어도 인용되지 않기 때문에, 기술 점검이 콘텐츠보다 먼저입니다.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "채널 정보 정합성",
    desc: "홈페이지·지도 서비스·의료 디렉토리에 흩어진 병원명, 위치, 연락처, 진료시간, 진료과목을 하나의 기준으로 통일합니다. AI는 여러 출처를 대조해 신뢰도를 판단합니다.",
  },
  {
    icon: PenLine,
    step: "04",
    title: "콘텐츠 제작·구조화",
    desc: "진료과목을 환자 언어로 설명하고, 자주 묻는 질문을 Q&A 구조로 정리합니다. 기계가 읽을 수 있는 구조화 데이터(Schema.org)를 함께 설계합니다.",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "월간 재측정·리포트",
    desc: "엔진별 노출 변화를 매월 다시 측정해 보고합니다. 담당 마케터가 직접 설명드립니다.",
  },
] as const

const FAQ = [
  {
    q: "병원 GEO 대행은 무엇을 해주는 건가요?",
    a: "환자가 ChatGPT·네이버 AI 등에 '○○ 잘하는 병원 추천해줘'라고 물었을 때 우리 병원이 답변에 포함되도록 만드는 작업 전체를 대행합니다. AI 검색 진단, 홈페이지 크롤러 접근 점검, 채널별 병원 정보 정합성 정리, 환자 언어 기반 콘텐츠 제작과 구조화 데이터 설계, 월간 재측정 리포트까지 포함합니다.",
  },
  {
    q: "비용은 얼마인가요?",
    a: "병원마다 현재 상태와 진료과, 경쟁 강도가 달라 필요한 작업량이 크게 다릅니다. 그래서 정해진 단가를 안내드리지 않고, 무료 진단으로 현재 상태를 먼저 확인한 뒤 병원별 맞춤 견적을 제안드립니다. 진단은 병원·의원에 한해 조건 없이 무료이며, 진단만 받아보시고 마무리하셔도 됩니다.",
  },
  {
    q: "효과가 나타나기까지 얼마나 걸리나요?",
    a: "병원의 시작 상태에 따라 다릅니다. 실제 사례를 기준으로 말씀드리면, 홈페이지를 전면 개선한 비뇨의학과의 경우 홈페이지 작업에만 약 2개월, ChatGPT·구글·네이버 모두에서 안정적으로 노출되기까지 약 6개월이 걸렸습니다. 정보 정합성 교정처럼 비교적 빠른 작업은 몇 주 안에 AI 답변에 반영되기 시작합니다.",
  },
  {
    q: "의료광고법에 문제가 없나요?",
    a: "의료광고 사전심의와 관련 법규를 준수하는 범위 안에서만 진행합니다. 치료 효과를 단정하거나 환자를 현혹하는 표현 대신 병원 정보의 정확성과 전문성을 구조화하는 데 집중합니다. 치료후기와 방문후기의 차이 등 일반적인 기준은 병원·의원 GEO 가이드에 정리해 두었습니다.",
  },
  {
    q: "홈페이지가 없거나 오래됐는데도 가능한가요?",
    a: "가능합니다. 위즈더플래닝은 홈페이지 제작도 직접 하기 때문에, 오래된 홈페이지는 GEO 기준에 맞는 구조로 다시 만들 수 있습니다. 실제로 한 비뇨의학과는 오래된 홈페이지를 약 2개월에 걸쳐 전면 개선한 뒤 검색 노출이 회복됐습니다.",
  },
  {
    q: "어떤 진료과가 대상인가요?",
    a: "안과, 치과, 피부과, 성형외과, 정형외과, 내과, 이비인후과, 비뇨의학과, 산부인과, 한의원 등 진료과 제한 없이 진행합니다. 특히 의료광고 규제가 강하고 입소문이 잘 돌지 않는 진료과일수록 검색과 AI 답변이 사실상 유일한 유입 통로이기 때문에 효과가 큽니다.",
  },
  {
    q: "AI 노출을 보장해 주나요?",
    a: "보장하지 않습니다. AI 답변은 엔진과 시점, 질문 방식에 따라 매번 달라지기 때문에 누구도 노출을 보장할 수 없습니다. '노출 100% 보장' 같은 약속을 내거는 업체는 오히려 주의가 필요합니다. 위즈더플래닝은 보장 대신 측정을 약속합니다 — 시작 전 현재 상태를 실측하고, 매월 같은 기준으로 재측정해 변화를 숫자로 보고합니다. 우리 회사 자신의 실험에서 잘된 결과와 아직 안 된 결과까지 홈페이지에 그대로 공개하는 이유이기도 합니다.",
  },
  {
    q: "네이버 블로그 마케팅과는 어떻게 다른가요? 병행해야 하나요?",
    a: "역할이 다릅니다. 네이버 블로그는 네이버 검색 안에서 작동하지만, 네이버는 robots.txt로 ChatGPT 등 AI 크롤러의 접근을 차단하고 있어 블로그에 쌓은 콘텐츠를 생성형 AI가 읽지 못합니다. 그래서 AI 답변 노출은 AI가 읽을 수 있는 열린 웹, 즉 병원 홈페이지를 중심으로 만들어야 합니다. 네이버 검색 수요가 큰 진료과라면 병행하는 것이 좋고, 두 채널의 역할을 나눠 설계해 드립니다.",
  },
  {
    q: "병원이 직접 해야 할 일이 있나요?",
    a: "많지 않습니다. 진료 정보와 병원 정보가 정확한지 확인해 주시는 것, 그리고 콘텐츠 발행 전에 내용을 검토·승인해 주시는 것 두 가지입니다. 의료 콘텐츠 특성상 원장님 확인 절차는 생략하지 않습니다. 크롤러 점검, 정보 정합성 정리, 콘텐츠 제작, 구조화, 측정과 리포트는 전부 저희가 수행합니다.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "병원 GEO 대행 (병원·의원 AI 검색 최적화)",
  serviceType: "병원·의원 AI 검색 최적화(GEO) 대행",
  url: URL,
  provider: {
    "@type": "ProfessionalService",
    name: "위즈더플래닝",
    url: "https://wiztheplanning.com",
    telephone: "+82-1670-0704",
  },
  areaServed: { "@type": "Country", name: "대한민국" },
  audience: { "@type": "Audience", audienceType: "병원·의원" },
  description: DESC,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "위플 5단계 프로세스 — 진단·기술·정합·콘텐츠·검증",
    itemListElement: SCOPE.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.desc },
    })),
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
    { "@type": "ListItem", position: 2, name: "병원 GEO 대행", item: URL },
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
          <div className="absolute -left-32 top-1/4 h-[420px] w-[560px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />
          <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00e5a0]/30 bg-[#00e5a0]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00e5a0]">
              <Stethoscope className="h-3.5 w-3.5" />
              병원·의원 전용
            </span>
            <h1 className="mt-6 text-[clamp(2rem,4.6vw,4rem)] font-extrabold leading-[1.15] tracking-tight text-white">
              병원 GEO 대행
            </h1>
            <p className="mt-5 max-w-2xl text-[clamp(1rem,1.5vw,1.375rem)] leading-relaxed text-slate-400">
              환자는 이제 검색창이 아니라 <span className="font-semibold text-slate-200">AI에게</span>{" "}
              병원을 묻습니다. 그 답변에 우리 병원이 포함되도록 만드는 작업을 대행합니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="/medical-diagnosis">
                <Button size="lg" className="gap-1 bg-[#00e5a0] px-8 py-6 text-base font-bold text-[#070b14] shadow-lg shadow-[#00e5a0]/25 hover:bg-[#3cf0bb]">
                  무료 진단부터 시작하기
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:1670-0704">
                <Button size="lg" variant="outline" className="w-full border-slate-700 bg-transparent px-8 py-6 text-base text-slate-300 hover:border-slate-500 hover:bg-white/5 hover:text-white min-[400px]:w-auto">
                  전화 상담 1670-0704
                </Button>
              </a>
            </div>
            {/* 숫자 스트립 — 전부 사이트에서 검증 가능한 수치만 */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-4">
              {[
                { n: "2016~", d: "7,000여 광고주" },
                { n: "3개", d: "AI 엔진 실측 진단" },
                { n: "월 1회", d: "재측정 리포트" },
                { n: "17편", d: "실측 가이드 공개" },
              ].map((s) => (
                <div key={s.d}>
                  <p className="text-xl font-extrabold text-[#00e5a0]">{s.n}</p>
                  <p className="mt-0.5 text-slate-500">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 왜 병원에 GEO가 필요한가 */}
        <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">WHY</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            광고가 어려운 진료과일수록 검색이 유일한 통로입니다
          </h2>
          <div className="mt-6 space-y-4 text-base leading-[1.85] text-gray-700">
            <p>
              병원은 의료광고 규제로 표현이 자유롭지 않습니다. 게다가 진료 특성상 환자가 지인에게
              물어보기 어려운 진료과가 많습니다. 입소문이 잘 돌지 않는다는 뜻입니다. 그래서 환자는
              대부분 <strong>혼자 검색해서</strong> 병원을 고릅니다.
            </p>
            <p>
              문제는 그 검색이 <strong>AI 답변으로 바뀌고 있다</strong>는 점입니다. AI는 여러 병원을
              나열하지 않고 몇 곳만 추천합니다. 그 목록에 없으면 환자의 선택지에 아예 존재하지
              않습니다.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-[#f9fafb] p-6">
            <p className="text-base leading-[1.85] text-gray-700">
              실제로 한 비뇨의학과는 <strong>ChatGPT에서 아예 검색되지 않던 상태</strong>였습니다.
              원인은 콘텐츠가 아니라 제작사가 기본값으로 남겨둔 보안 방화벽이 AI 크롤러까지 막고 있던
              것이었습니다. 차단을 해제하고 홈페이지를 전면 개선한 뒤{" "}
              <strong>약 6개월 만에 ChatGPT·구글·네이버 모두에서 노출</strong>되기 시작했습니다.
            </p>
            <Link
              href="/guide/case-urology-clinic"
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-600 underline-offset-4 hover:underline"
            >
              비뇨기과 실제 사례 자세히 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 대행 범위 */}
        <section id="scope" className="scroll-mt-24 bg-[#f6f8f7] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">PROCESS</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              위플 5단계 프로세스 — 진단에서 검증까지
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
              순서가 중요합니다. 홈페이지가 막혀 있는 상태에서 콘텐츠부터 늘리는 것이 가장 흔한
              실수입니다. 진단 → 기술 → 정합 → 콘텐츠 → 검증, 이 순서대로만 진행합니다.
            </p>

            <div className="mt-8 space-y-4">
              {SCOPE.map((s) => (
                <div key={s.step} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
                  <div className="shrink-0">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                      <s.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs font-bold text-emerald-600">{s.step}</p>
                    <h3 className="mt-0.5 text-lg font-extrabold tracking-tight text-gray-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600 md:text-base">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 차별점 */}
        <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">WHY WIZTHEPLANNING</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            왜 위즈더플래닝인가
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "개발까지 직접 합니다",
                desc: "크롤러 차단 해제, 구조화 데이터 설계, 홈페이지 제작이 전부 내부에서 이뤄집니다. 콘텐츠만 만드는 대행사가 해결할 수 없는 영역입니다.",
              },
              {
                icon: ShieldCheck,
                title: "의료광고 기준을 반영합니다",
                desc: "AI에 인용되려고 쓴 표현이 위반이 되는 경우가 실제로 많습니다. 안전한 범위 안에서 설계합니다.",
              },
              {
                icon: BarChart3,
                title: "감이 아니라 측정입니다",
                desc: "진단으로 시작하고 매월 재측정합니다. 언급 점유율과 오정보를 숫자로 확인하며 진행합니다.",
              },
            ].map((d) => (
              <div key={d.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <d.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight text-gray-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 정직성 — 보장 대신 측정 */}
        <section className="bg-[#070b14] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">HONEST</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              과장에 지친 원장님께 — 우리가 하지 않는 것부터 말씀드립니다
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "노출을 '보장'하지 않습니다",
                  desc: "AI 답변은 엔진·시점·질문에 따라 매번 다릅니다. 보장은 누구도 할 수 없기에, 우리는 보장 대신 매월 같은 기준의 측정 수치로 보고합니다.",
                },
                {
                  title: "자작 추천 글을 만들지 않습니다",
                  desc: "자기 회사를 남의 업체처럼 소개하는 'TOP3 추천' 류의 위장 콘텐츠는 기만 광고 소지가 있고, 그 리스크는 결국 병원이 집니다. 우리는 하지 않습니다.",
                },
                {
                  title: "안 된 것도 공개합니다",
                  desc: "우리 사이트를 실험대에 올려, 검색 상위에 오른 결과와 생성형 AI에 아직 안 나오는 결과까지 그대로 글로 공개하고 있습니다.",
                },
              ].map((h) => (
                <div key={h.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-lg font-extrabold tracking-tight text-white">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{h.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/guide/ranked-but-not-in-chatgpt"
              className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#00e5a0] underline-offset-4 hover:underline"
            >
              우리 자신의 미노출까지 공개한 실험 글 읽어보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 관련 자료 — 실측 자산 */}
        <section className="bg-[#f6f8f7] py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              우리는 실험 결과를 공개하는 회사입니다
            </h2>
            <p className="mt-3 text-base text-gray-600">
              말 대신 실측으로 판단하실 수 있도록, 직접 실험하고 확인한 자료를 공개합니다. 맡기기
              전에 읽어보세요.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { href: "/guide/case-urology-clinic", label: "실제 사례", title: "ChatGPT에 아예 안 뜨던 비뇨기과 — 원인은 홈페이지 방화벽이었습니다" },
                { href: "/guide/platform-ai-crawler-status", label: "자체 실측", title: "한국 플랫폼 15곳, AI가 읽을 수 있는 곳은 어디인가 — robots.txt 전수 실측" },
                { href: "/guide/ranked-but-not-in-chatgpt", label: "자체 실험", title: "네이버 AI 1위·구글 2위인데 ChatGPT엔 안 나옵니다 — 우리 사이트 실험" },
                { href: "/guide/check-hospital-ai-visibility", label: "셀프 체크", title: "우리 병원이 ChatGPT에 나오는지 5분 만에 확인하는 법" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/[0.07]"
                >
                  <span className="text-[11px] font-bold tracking-[0.2em] text-emerald-600">{l.label}</span>
                  <span className="mt-2 line-clamp-3 text-sm font-bold leading-snug text-gray-900 group-hover:text-emerald-700">
                    {l.title}
                  </span>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-semibold text-gray-400 group-hover:text-emerald-600">
                    읽기 <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">FAQ</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            자주 묻는 질문
          </h2>
          <div className="mt-8 space-y-4">
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
        </section>

        {/* CTA */}
        <section className="container mx-auto max-w-4xl px-4 pb-20 md:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-8 py-12 text-center shadow-xl">
            <h2 className="text-xl font-extrabold text-white md:text-3xl">
              진단부터 시작하세요. 병원은 무료입니다.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              계약 여부와 무관하게 현재 상태를 먼저 알려드립니다. 진단 결과만 받아보시고
              마무리하셔도 됩니다.
            </p>
            <ul className="mx-auto mt-6 flex max-w-lg flex-col items-start gap-2 text-sm text-slate-300 sm:flex-row sm:justify-center sm:gap-6">
              {["AI 3개 엔진 실측", "경쟁 병원 비교", "오정보 목록"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#00e5a0]" />
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/medical-diagnosis" className="mt-8 inline-block">
              <Button size="lg" className="gap-1 bg-[#00e5a0] px-8 py-6 text-base font-bold text-[#070b14] hover:bg-[#3cf0bb]">
                병원 무료 AI 검색 진단 신청
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-5 text-sm text-slate-400">
              전화가 편하시면{" "}
              <a href="tel:1670-0704" className="font-bold text-[#00e5a0] underline-offset-4 hover:underline">
                1670-0704
              </a>
              로 바로 상담하실 수 있습니다.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
