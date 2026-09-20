import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, Clock, FileCheck2 } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import BusinessContactForm from "@/components/business/BusinessContactForm"

const TITLE = "기업 제안 요청 | 위즈더플래닝"
const DESC =
  "기업 마케팅 대행 제안을 요청하는 곳입니다. 회사와 목표, 예산 구간을 알려 주시면 담당자가 회사 메일로 회신드립니다. 대행료 월 300만원부터, 최소 3개월."
const URL = "https://wiztheplanning.com/business/contact"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/business/contact" },
  openGraph: { title: TITLE, description: DESC, url: URL, images: ["/covers/geo.jpg"], type: "website" },
  robots: { index: true, follow: true },
}

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: TITLE,
  url: URL,
  description: DESC,
  inLanguage: "ko",
  about: { "@id": "https://wiztheplanning.com/#organization" },
}

const HELP = [
  { icon: FileCheck2, t: "제안서 형식이 정해져 있다면", d: "평가 항목과 제출 기한을 적어 주세요. 그 형식에 맞춰 작성합니다. 보안 서약이 필요하면 먼저 체결한 뒤 자료를 받습니다." },
  { icon: Clock, t: "지금 상태를 모르셔도 됩니다", d: "회신 때 기준선 측정을 먼저 제안드립니다. 어떤 질문에 어떤 브랜드가 불리고 있는지부터 기록합니다." },
  { icon: Mail, t: "회신은 회사 메일로", d: "전화 영업을 하지 않습니다. 남겨 주신 메일로 회신드리고, 통화가 필요하면 시간을 먼저 맞춥니다." },
]

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#070b14] py-16 md:py-20">
          <div className="geo-grid-bg absolute inset-0 opacity-60" />
          <div className="container relative mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00e5a0]">기업 제안 요청</p>
            <h1 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
              회사와 목표를 알려 주세요
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              담당자가 내용을 보고 회사 메일로 회신드립니다. 대행료 월 300만원부터, 최소 3개월 기준으로
              진행합니다.{" "}
              <Link href="/business" className="font-semibold text-[#00e5a0] underline underline-offset-4">
                기업 마케팅 안내
              </Link>
              에서 범위와 보고 방식을 먼저 보셔도 됩니다.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-5 md:px-6">
            <div className="md:col-span-2">
              <h2 className="text-xl font-extrabold text-gray-900">회신을 빠르게 받으려면</h2>
              <div className="mt-5 space-y-5">
                {HELP.map(({ icon: Icon, t, d }) => (
                  <div key={t}>
                    <p className="flex items-center gap-2 text-sm font-bold text-gray-900">
                      <Icon className="h-4 w-4 text-[#00b57f]" aria-hidden /> {t}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-2 border-t border-gray-200 pt-6 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-600" aria-hidden />
                  <a href="mailto:wiz@wiztheplanning.com" className="font-semibold hover:underline">wiz@wiztheplanning.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600" aria-hidden /> 1670-0704
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-[#f9fafb] p-5 md:col-span-3 md:p-8">
              <BusinessContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
