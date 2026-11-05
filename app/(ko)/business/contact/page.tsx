import { BIZ_CTA } from "@/components/shortform/SiteChrome"
import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, Clock, FileCheck2 } from "lucide-react"
import BusinessContactForm from "@/components/business/BusinessContactForm"
import { DocShell, Crumb } from "@/components/shortform/DocParts"

const TITLE = "기업 제안 요청 | 위즈더플래닝"
const DESC =
  "기업 마케팅 대행 제안을 요청하는 곳입니다. 회사와 목표, 예산 구간을 알려 주시면 담당자가 회사 메일로 회신드립니다. 금액은 회신하는 제안서에 적고, 계약은 최소 3개월입니다."
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
  { icon: Clock, t: "지금 상태를 모르셔도 됩니다", d: "회신 때 기준선 측정을 먼저 제안드립니다. 어떤 질문에 어떤 브랜드 이름이 나오는지부터 적습니다." },
  { icon: Mail, t: "회신은 회사 메일로", d: "전화 영업을 하지 않습니다. 남겨 주신 메일로 회신드리고, 통화가 필요하면 시간을 먼저 맞춥니다." },
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
            <h1>회사와 목표를 알려 주세요</h1>
            <p className="dp-lead">
              담당자가 내용을 보고 회사 메일로 회신드립니다. 금액은 제안서에 적어 드리고, 계약은 최소 3개월 기준입니다.{" "}
              <Link href="/business" className="bz-lk">
                기업 마케팅 안내
              </Link>
              에서 범위와 보고 방식을 먼저 보셔도 됩니다.
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
