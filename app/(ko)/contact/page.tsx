import type { Metadata } from "next"
import { CONTACT } from "@/components/shortform/content"
import { Icon } from "@/components/shortform/icons"
import { DocShell, Crumb, Sec, Faq, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "@/components/shortform/DocParts"
import SfInquiryForm from "@/components/shortform/SfInquiryForm"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 문의하기 쪽(2026-11-06 사장님 「로그통 문의 쪽 디자인 그대로, 품목만 우리 것으로」) — 머리글·홈·상세 쪽의 신청 버튼이 모두 여기로 온다. 홈 44번 문의 칸은 그대로.
// 어두운 화면·두 칸 폼·칸 이름은 그쪽을 따르고, 색은 우리 파랑, 제목·안내 문장은 우리 말로 새로 썼다. 폼은 홈과 같은 /api/contact.
const TITLE = "문의하기: 광고·검색·인플루언서 상담"
const DESC = "URL과 연락처를 남겨 주시면 담당 마케터가 직접 연락드립니다. 준비가 덜 됐어도 괜찮습니다. 가격은 진단 뒤 제안서로 안내합니다."
const FAQ: [string, string][] = [
  ["상담 비용이 있나요?", "상담은 무료입니다. 진행하실 때의 비용은 진단 뒤 제안서로 안내합니다."],
  ["무엇을 준비해야 하나요?", "별표 칸만 채워 보내 주시면 됩니다. 나머지는 담당 마케터가 통화로 여쭙니다."],
  ["대기업·프랜차이즈도 여기로 신청하나요?", "기업 제안 요청 쪽에서 따로 받습니다. 제안 요청서 항목표와 평가표는 회사 메일로 보내 드립니다."],
  ["전화나 카카오톡으로 먼저 물어봐도 되나요?", `됩니다. ${CONTACT.tel}(${CONTACT.hours})로 전화 주시거나 카카오톡 채널로 바로 물어보셔도 됩니다.`],
]

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${TITLE} | 위즈더플래닝`,
    description: DESC,
    url: `${SITE}/contact`,
    siteName: "위즈더플래닝",
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: TITLE }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${TITLE} | 위즈더플래닝`, description: DESC, images: [`/og-home.jpg?v=${timestamp}`] },
}

export default function ContactPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "문의하기", path: "/contact" },
  ]
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ContactPage", "@id": `${SITE}/contact#page`, name: TITLE, description: DESC, about: { "@id": ORG_ID }, url: `${SITE}/contact` },
      breadcrumbLd(crumbs),
      faqLd(FAQ),
    ],
  }
  return (
    <DocShell>
      <JsonLd data={ld} />
      <section className="iq" id="contact" aria-label="문의하기">
        <div className="iq-top">
          <Crumb items={[{ name: "홈", href: "/" }, { name: "문의하기" }]} />
          <h1>문의하기</h1>
          <p>남겨 주시면 담당 마케터가 직접 연락드립니다.</p>
        </div>
        <div className="iq-wrap">
          <div className="iq-head">
            <h2>
              지금 우리 브랜드, <mark>어디에</mark> 어떻게 나오고 있나요?
            </h2>
            <p>
              <b>다 채우지 않으셔도 됩니다.</b>
              아시는 만큼만 적어 주세요. 나머지는 <mark>담당 마케터가 통화로 여쭙겠습니다.</mark>
            </p>
          </div>
          <SfInquiryForm />
          <div className="iq-ways">
            <a href={CONTACT.telHref} data-tel>
              <Icon k="phone" />
              <span>
                <b>{CONTACT.tel}</b>
                <small>{CONTACT.hours}</small>
              </span>
            </a>
            <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
              <Icon k="kakao" />
              <span>
                <b>카카오톡 상담</b>
                <small>채팅으로 바로 물어보기</small>
              </span>
            </a>
            <a href="/business/contact">
              <Icon k="plan" />
              <span>
                <b>기업 제안 요청</b>
                <small>대기업·프랜차이즈·브랜드사</small>
              </span>
            </a>
          </div>
        </div>
      </section>
      <Sec q="상담 전에 많이 물어보시는 질문">
        <Faq items={FAQ} />
      </Sec>
    </DocShell>
  )
}
