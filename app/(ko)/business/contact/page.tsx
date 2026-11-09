import { BIZ_CTA } from "@/components/shortform/SiteChrome"
import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, Clock, FileCheck2 } from "lucide-react"
import BusinessContactForm from "@/components/business/BusinessContactForm"
import { DocShell, Crumb } from "@/components/shortform/DocParts"

const TITLE = "기업 제안 요청 | 위즈더플래닝"
const DESC =
  "기업 마케팅 대행 맞춤 제안서를 신청하는 페이지입니다. 기업 현황과 캠페인 목표, 가용 예산 범위를 남겨 주시면 전담 AE가 기업 이메일로 제안서를 회신해 드립니다. 최소 계약 기간은 3개월입니다."
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
  { icon: FileCheck2, t: "지정된 RFP 양식이 있는 경우", d: "평가 항목과 제출 기한을 함께 기재해 주시면 해당 양식에 맞춰 제안서를 작성합니다. 비밀유지협약(NDA)이 필요한 경우 사전 체결 후 자료를 교류합니다." },
  { icon: Clock, t: "초기 현황 진단부터 필요한 경우", d: "회신 시 초기 기준선 측정을 먼저 제안해 드립니다. 주요 탐색 질문별 브랜드 언급 현황부터 정량적으로 파악합니다." },
  { icon: Mail, t: "기업 이메일 기반의 공식 회신", d: "불필요한 전화 영업을 지양합니다. 기재해 주신 이메일로 제안서를 먼저 회신해 드리며, 유선 미팅이 필요한 경우 일정을 사전 조율합니다." },
]

export default function Page() {
  return (
    // 2026-11-05 사장님 「여기도 아직 이전 페이지」 — 머리글·바닥글만 새 틀(DocShell)로, 본문은 그대로
    <DocShell cta={BIZ_CTA}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      {/* 11-05 사장님 「기업 제안 요청 디자인이 너무 다르다」 — 무료 상담 신청 쪽과 같은 두 칸(왼쪽 안내 / 오른쪽 폼) */}
      <section className="dp-hero dp-cq t-k" id="contact" aria-label="기업 제안 요청">
        <div className="dp-w dp-cq-in">
          <div className="dp-cq-t">
            <Crumb items={[{ name: "기업 마케팅", href: "/business" }, { name: "제안 요청" }]} />
            <p className="dp-no">기업 제안 요청</p>
            <h1>맞춤 캠페인 제안 요청</h1>
            <p className="dp-lead">
              전담 AE가 요청 내용을 검토한 뒤 기업 이메일로 제안서를 회신해 드립니다. 세부 견적은 맞춤 제안서에 명시하며, 최소 계약 기간은 3개월 기준입니다.{" "}
              <Link href="/business" className="bz-lk">
                기업 마케팅 안내
              </Link>
              에서 수행 과업 범위와 리포트 체계를 먼저 확인하실 수 있습니다.
            </p>
            <ol className="dp-cq-steps bz-help" aria-label="회신을 빠르게 받으려면">
              {HELP.map(({ t, d }, i) => (
                <li key={t}>
                  <em>{i + 1}</em>
                  <b>{t}</b>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
            <div className="ct-ways">
              <a href="mailto:wiz@wiztheplanning.com">
                <Mail aria-hidden />
                <b>wiz@wiztheplanning.com</b>
                <small>회신은 회사 메일로 드립니다</small>
              </a>
              <a href="tel:16700704" data-tel>
                <Phone aria-hidden />
                <b>1670-0704</b>
                <small>평일 10:00–18:00</small>
              </a>
            </div>
          </div>
          <div className="ct-f bz-f">
            <BusinessContactForm />
          </div>
        </div>
      </section>
    </DocShell>
  )
}
