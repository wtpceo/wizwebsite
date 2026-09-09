import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Radar, Bell, FileText, Stethoscope, BarChart3, ListChecks } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 → 현재 33자
const TITLE = "측정 방식: 자체 개발 GEO 관제 시스템으로 매주 재는 것"
const DESC =
  "위즈더플래닝은 AI 검색 노출을 감이 아니라 자체 개발한 GEO 관제 시스템으로 매주 측정합니다. 관제 화면 6장을 그대로 공개합니다. 우리 회사 점수가 100점 만점에 18점인 것까지 그대로입니다. 외부에 판매하지 않고, 광고주께는 계정이 아니라 정리된 주간 리포트를 드립니다."
const URL = "https://wiztheplanning.com/how-we-measure"
const PUBLISHED = "2026-09-09"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ["GEO 관제 시스템", "AI 검색 노출 측정", "GEO 측정 도구", "AI 인용 측정", "주간 리포트", "위즈더플래닝 측정 방식"],
  alternates: { canonical: "/how-we-measure" },
  openGraph: { images: ["/tools/realgeo-dashboard.jpg"], title: TITLE, description: DESC, url: URL, type: "website" },
}

const SCREENS = [
  {
    src: "/tools/realgeo-dashboard.jpg",
    alt: "위즈더플래닝 GEO 관제 대시보드: REALGEO 스코어 18/100, AI 인용 노출률 18%, 웹 건강도 100, 엔진별 인용 현황",
    title: "관제 대시보드",
    body: "우리 회사 것입니다. 종합 점수는 100점 만점에 18점입니다. 좋게 보이려고 숨기지 않습니다. 상호 없는 질문에서의 점유율 7%와 상호를 대고 물었을 때의 88%를 따로 보여주는 이유는, 둘을 섞으면 숫자가 부풀려지기 때문입니다.",
  },
  {
    src: "/tools/realgeo-weekly-report.jpg",
    alt: "주간 리포트 화면: 카테고리 점유율, 출처 인용률 25%, 인용 키워드 4/9, 엔진별 노출, 이번 주 신규 인용과 인용 상실 목록",
    title: "주간 리포트",
    body: "매주 같은 기준으로 다시 재서 지난주 대비 무엇이 올라가고 무엇이 빠졌는지를 냅니다. 이 주에는 새로 인용된 키워드 2건과 인용이 빠진 키워드 3건이 함께 찍혔습니다. 빠진 것도 그대로 적힙니다.",
  },
  {
    src: "/tools/realgeo-alerts.jpg",
    alt: "알림 센터 화면: 월요일 자동 측정 후 주간 브리핑과 인용 상실 9건 경고",
    title: "알림 센터",
    body: "매주 월요일 새벽에 자동 측정이 끝나면 브리핑과 경고가 여기로 들어옵니다. 지난주에 인용되던 질문에서 인용이 빠지면 '인용 상실'로 바로 경고가 뜹니다. 담당자는 출근해서 이 화면부터 봅니다.",
  },
  {
    src: "/tools/realgeo-prompts.jpg",
    alt: "AI 노출 현황 화면: 질문 10개를 네이버 AI 브리핑·Gemini·ChatGPT·Perplexity에 측정한 멘션·소스·근거 결과",
    title: "질문별 · 엔진별 결과",
    body: "손님이 실제로 던질 법한 질문을 네 엔진에 반복해서 묻고, 답변에 이름이 나왔는지(멘션), 출처로 링크됐는지(소스), 답의 근거로 쓰였는지(근거)를 질문마다 따로 기록합니다. 언급과 인용은 다른 것이라 나눠서 셉니다.",
  },
  {
    src: "/tools/realgeo-site-audit.jpg",
    alt: "사이트 진단 화면: 웹 건강도 100점, 기술 SEO 96점 5축, 기술 GEO 94점 4축, 발견 52개 페이지 분석",
    title: "사이트 진단",
    body: "검색엔진과 AI가 홈페이지를 읽고 인용할 수 있는 상태인지 52개 페이지를 전부 돌려 점수로 냅니다. 봇 접근성, 구조화 데이터, 인용 가능성, 기술 건강도를 따로 보기 때문에 어디를 고쳐야 하는지가 항목으로 나옵니다.",
  },
  {
    src: "/tools/realgeo-monitoring.jpg",
    alt: "모니터링 대시보드: 구글 서치콘솔과 GA4 연동, 최근 28일 클릭 128, 노출 5,731, AI 검색 유입 27",
    title: "실제 유입 확인",
    body: "AI 답변에 나왔다고 끝이 아닙니다. 구글 서치콘솔과 GA4를 연동해 ChatGPT, Gemini, Perplexity에서 실제로 넘어온 방문을 셉니다. 최근 28일 저희 사이트로 AI에서 넘어온 방문은 27명입니다. 작아도 그대로 씁니다.",
  },
]

const ROUTINE = [
  { icon: Radar, title: "월요일 새벽, 자동 측정", body: "질문 세트를 네 엔진에 반복해서 묻고, 홈페이지 진단을 다시 돌립니다. 사람이 손으로 고르는 화면 캡처가 아닙니다." },
  { icon: Bell, title: "출근하면 알림부터", body: "인용이 빠진 질문, 경쟁사가 끼어든 질문, 사이트에 새로 생긴 문제가 경고로 올라옵니다." },
  { icon: FileText, title: "주 1회 리포트", body: "지난주 대비 증감, 이번 주에 한 작업, 다음 주 우선순위를 담당 매니저가 직접 써서 드립니다." },
  { icon: ListChecks, title: "우선순위대로 수정", body: "측정에서 드러난 순서대로 홈페이지 구조, 콘텐츠, 플레이스를 손봅니다. 무엇을 왜 고쳤는지는 다음 리포트에 남습니다." },
]

const FAQ = [
  {
    q: "이 시스템을 광고주도 직접 볼 수 있나요?",
    a: "계정을 드리지는 않습니다. 전문 도구라 SEO와 GEO를 아는 사람이 봐야 해석이 됩니다. 광고주께는 이 시스템에서 나온 숫자를 담당 매니저가 해석을 붙여 주 1회 리포트로 정리해 드립니다. 도구를 배우실 필요가 없습니다.",
  },
  {
    q: "외부에 판매하나요?",
    a: "판매하지 않습니다. 위즈더플래닝이 광고주 관리에 쓰기 위해 직접 개발해 사내에서만 씁니다. 이 페이지는 도구를 팔기 위한 것이 아니라, 저희가 어떤 근거로 일하는지 보여드리기 위한 것입니다.",
  },
  {
    q: "왜 자기 회사 점수를 그대로 공개하나요?",
    a: "노출을 보장하는 대신 측정을 약속하기 때문입니다. 좋은 숫자만 골라 보여드리면 그 약속이 무너집니다. 저희 회사의 종합 점수 18점, 인용이 빠진 키워드 목록까지 그대로 두는 것이 광고주께 드리는 리포트도 그렇게 만든다는 증거입니다.",
  },
]

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  url: URL,
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: "ko-KR",
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  primaryImageOfPage: "https://wiztheplanning.com/tools/realgeo-dashboard.jpg",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />

      <main className="flex-1">
        {/* 히어로 */}
        <section className="relative overflow-hidden bg-[#070b14] py-20 md:py-28">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="absolute -right-32 top-1/4 h-[420px] w-[560px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />
          <div className="container relative mx-auto max-w-5xl px-4 md:px-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00e5a0]/30 bg-[#00e5a0]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00e5a0]">
              <Radar className="h-3.5 w-3.5" />
              HOW WE MEASURE
            </span>
            <h1 className="mt-6 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.15] tracking-tight text-white">
              말 대신 관제 화면으로<br className="hidden sm:block" /> 보여드립니다
            </h1>
            <p className="mt-5 max-w-2xl text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed text-slate-400">
              AI 검색은 순위표가 없어서 &ldquo;잘되고 있다&rdquo;는 말로 넘어가기 쉽습니다. 저희는 AI 답변을
              반복 측정하고 인용 출처를 기록하는 <span className="font-semibold text-slate-200">GEO 관제 시스템을
              직접 개발해</span> 사내에서 씁니다. 아래는 그 화면 6장입니다. 전부 저희 회사 자신을 측정한 것이라
              가린 것이 없습니다.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-4">
              {[
                { n: "4개", d: "측정 엔진" },
                { n: "주 1회", d: "자동 재측정·리포트" },
                { n: "18점", d: "우리 회사 종합 점수 (100점 만점)" },
                { n: "0", d: "외부 판매 계정" },
              ].map((s) => (
                <div key={s.d}>
                  <p className="text-xl font-extrabold text-[#00e5a0]">{s.n}</p>
                  <p className="mt-0.5 text-slate-500">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 화면 6장 */}
        <section className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">SCREENS</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            관제 화면 6장, 2026년 9월 9일 캡처
          </h2>
          <p className="mt-3 max-w-2xl text-base text-gray-600">
            측정 대상은 위즈더플래닝 자신입니다. 광고주 화면은 광고주 것이라 공개하지 않습니다.
          </p>
          <div className="mt-10 space-y-14">
            {SCREENS.map((s, i) => (
              <figure key={s.src} className="grid items-start gap-6 md:grid-cols-5">
                <div className={`md:col-span-3 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={1800}
                    height={1053}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full rounded-2xl border border-gray-200 shadow-lg shadow-gray-200/60"
                  />
                </div>
                <figcaption className={`md:col-span-2 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="font-mono text-xs font-bold text-emerald-600">0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-gray-600 md:text-base">{s.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 지표 정의 */}
        <section className="bg-[#f6f8f7] py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">METRICS</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              숫자가 부풀려지지 않도록 나눠서 셉니다
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: BarChart3,
                  title: "상호 없는 질문만 대표 지표로",
                  body: "“위즈더플래닝 어때?”처럼 이름을 대고 물으면 AI는 당연히 답합니다. 그래서 대표 지표인 카테고리 점유율은 상호가 없는 질문만 셉니다. 브랜드 질문은 따로 검증하고 경고에만 씁니다.",
                },
                {
                  icon: ListChecks,
                  title: "멘션과 인용을 분리",
                  body: "답변 본문에 이름이 나온 것(멘션)과 출처로 링크된 것(인용), 답의 근거로 쓰인 것(근거)은 다른 일입니다. 셋을 질문마다 따로 기록합니다. 인용이 손님을 데려옵니다.",
                },
                {
                  icon: Stethoscope,
                  title: "홈페이지 상태를 점수로",
                  body: "봇 접근성, 구조화 데이터, 콘텐츠 품질, 신뢰도, 기술 건강도를 축별로 점수화합니다. AI가 읽지 못하는 홈페이지는 콘텐츠를 아무리 만들어도 인용되지 않기 때문에 이것을 먼저 봅니다.",
                },
              ].map((m) => (
                <div key={m.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold tracking-tight text-gray-900">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{m.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              측정 도구를 고를 때 무엇을 먼저 정해야 하는지는{" "}
              <Link href="/guide/geo-measurement-tools" className="font-semibold text-emerald-700 underline-offset-4 hover:underline">
                GEO 측정 도구 고르는 법
              </Link>
              에, 유입까지 세는 방법은{" "}
              <Link href="/guide/measure-ai-traffic" className="font-semibold text-emerald-700 underline-offset-4 hover:underline">
                AI 검색 유입 측정: 4단계로 나눠 세기
              </Link>
              에 적어 두었습니다.
            </p>
          </div>
        </section>

        {/* 주간 루틴 */}
        <section className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">ROUTINE</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            매주 이 순서로 돌아갑니다
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ROUTINE.map((r, i) => (
              <div key={r.title} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">{i + 1}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <r.icon className="h-4 w-4 text-emerald-600" />
                    <h3 className="text-base font-bold text-gray-900">{r.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 하지 않는 것 */}
        <section className="bg-[#070b14] py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">NOT FOR SALE</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              이 시스템으로 하지 않는 것
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { title: "외부에 팔지 않습니다", body: "광고주 관리에 쓰려고 만들었고 사내에서만 씁니다. 도구 문의는 받지 않습니다." },
                { title: "계정을 드리지 않습니다", body: "전문 도구라 해석이 필요합니다. 광고주께는 담당 매니저가 해석을 붙인 주간 리포트를 드립니다." },
                { title: "노출을 보장하지 않습니다", body: "AI 답변은 엔진과 시점마다 다릅니다. 보장 대신 같은 기준으로 계속 재서 변화를 숫자로 보고합니다." },
              ].map((h) => (
                <div key={h.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-lg font-extrabold tracking-tight text-white">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">FAQ</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">자주 묻는 질문</h2>
          <div className="mt-8 space-y-4">
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
        </section>

        {/* CTA */}
        <section className="container mx-auto max-w-5xl px-4 pb-20 md:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-8 py-12 text-center shadow-xl">
            <h2 className="text-xl font-extrabold text-white md:text-3xl">우리 가게는 지금 어떻게 나오는지부터</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              같은 시스템으로 현재 상태를 먼저 측정해 드립니다. 진단 결과만 받아보시고 마무리하셔도 됩니다.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/diagnosis">
                <Button size="lg" className="w-full gap-1 bg-[#00e5a0] px-8 py-6 text-base font-bold text-[#070b14] hover:bg-[#3cf0bb] sm:w-auto">
                  무료 AI 검색 진단 신청
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/medical-diagnosis">
                <Button size="lg" variant="outline" className="w-full border-slate-700 bg-transparent px-8 py-6 text-base text-slate-300 hover:border-slate-500 hover:bg-white/5 hover:text-white sm:w-auto">
                  병원·의원은 여기로
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
