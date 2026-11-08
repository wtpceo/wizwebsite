import type { Metadata } from "next"
import Link from "next/link"
import { Gauge, ShieldCheck, Zap } from "lucide-react"
import SiteCheckTool from "@/components/site-check/SiteCheckTool"
import { DocShell } from "@/components/shortform/DocParts"

const TITLE = "무료 홈페이지 SEO·GEO 진단: 주소만 넣으면 즉시 확인"
const DESC =
  "홈페이지 주소만 넣으면 AI 크롤러가 읽을 수 있는지, 구조화 데이터와 제목·모바일 대응이 돼 있는지 바로 검사해 알려 드립니다. 검색과 AI에 보이는 홈페이지의 기초 상태를 확인하세요."
const URL = "https://wiztheplanning.com/site-check"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "홈페이지 진단", "무료 SEO 진단", "GEO 진단", "사이트 진단",
    "AI 크롤러 차단 확인", "구조화 데이터 확인", "홈페이지 SEO 점검",
    "웹사이트 최적화 진단", "SEO 체크", "AI 검색 최적화 진단",
  ],
  alternates: { canonical: "/site-check" },
  openGraph: {
    images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "website",
  },
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "홈페이지 SEO·GEO 무료 진단",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  provider: { "@type": "ProfessionalService", name: "위즈더플래닝", url: "https://wiztheplanning.com" },
  description: DESC,
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://wiztheplanning.com" },
    { "@type": "ListItem", position: 2, name: "무료 홈페이지 진단", item: URL },
  ],
}

export default function Page() {
  return (
    // 2026-11-05 사장님 「여기도 아직 이전 페이지」 — 머리글·바닥글만 새 틀(DocShell)로, 본문은 그대로
    <DocShell>
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      <div className="flex-1">
        {/* 히어로 + 진단 도구 */}
        <section className="relative overflow-hidden bg-[#070b14] py-16 md:py-24">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="absolute -left-32 top-0 h-[420px] w-[560px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />
          <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">FREE SITE CHECK</span>
              <h1 className="mx-auto mt-4 max-w-3xl text-balance break-keep text-[clamp(1.9rem,4.2vw,3.5rem)] font-extrabold leading-[1.2] tracking-tight text-white">
                우리 홈페이지,
                <br className="hidden sm:block" />{" "}
                AI와 검색에 잘 보이나요?
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed text-slate-400">
                주소만 넣으면 SEO·GEO 기초 상태를 바로 검사해 드립니다.
                <br className="hidden md:block" />
                AI 크롤러가 우리 사이트를 읽을 수 있는지부터 보세요.
              </p>
            </div>

            <SiteCheckTool />

            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-[#00e5a0]/80" /> 즉시 결과</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#00e5a0]/80" /> 설치·가입 없음</span>
              <span className="flex items-center gap-1.5"><Gauge className="h-4 w-4 text-[#00e5a0]/80" /> 실제 사이트 검사</span>
            </div>
          </div>
        </section>

        {/* 무엇을 검사하나 */}
        <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            무엇을 검사하나요?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            사람이 브라우저로 접속하는 것과 AI 크롤러가 페이지를 읽는 것은 다릅니다. 이 진단은 실제로
            사이트를 열어 다음을 확인합니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { tag: "GEO", title: "AI 크롤러 접근 허용", desc: "GPTBot·ClaudeBot 등이 차단돼 있으면 홈페이지가 열려도 AI가 읽지 못해 인용·추천에서 제외됩니다." },
              { tag: "GEO", title: "구조화 데이터(Schema.org)", desc: "AI가 '무엇을 하는 곳인지' 읽어 내는 데 쓰는 표시입니다." },
              { tag: "SEO", title: "제목·설명·H1 구조", desc: "검색 결과 노출과 콘텐츠 구조의 기본입니다." },
              { tag: "SEO", title: "사이트맵·공유 미리보기", desc: "크롤러가 페이지를 찾을 수 있는지, 카톡·SNS에 공유할 때 미리보기가 뜨는지 봅니다." },
              { tag: "기술", title: "HTTPS·모바일 대응", desc: "검색엔진이 신뢰하는 기본 조건입니다." },
              { tag: "기술", title: "첫 응답 속도", desc: "느린 사이트는 이탈과 순위에 불리합니다." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5">
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 ring-1 ring-emerald-100">{item.tag}</span>
                <h3 className="mt-3 text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-[#f9fafb] p-6">
            <p className="text-base leading-[1.85] text-gray-700">
              이 검사는 홈페이지의 <strong>구조와 기술 상태</strong>를 봅니다. 실제로 AI가
              우리를 추천하는지, 채널별 정보가 맞는지는 사람이 따로 재야 합니다.{" "}
              <Link href="/guide/check-hospital-ai-visibility" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
                우리 병원이 ChatGPT에 나오는지 확인하는 법
              </Link>
              과{" "}
              <Link href="/guide/case-urology-clinic" className="font-bold text-emerald-600 underline-offset-4 hover:underline">
                크롤러 차단으로 ChatGPT에 안 뜨던 사례
              </Link>
              를 같이 읽어 보세요.
            </p>
          </div>
        </section>
      </div>

          </div>
    </DocShell>
  )
}
