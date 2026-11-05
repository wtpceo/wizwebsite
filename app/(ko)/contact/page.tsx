import type { Metadata } from "next"
import { SERVICES, STEPS, CONTACT } from "@/components/shortform/content"
import { Icon } from "@/components/shortform/icons"
import { DocShell, Crumb, Sec, Faq, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "@/components/shortform/DocParts"
import SfContactForm from "@/components/shortform/SfContactForm"
import { Chars } from "@/components/shortform/parts"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 무료 상담 신청 쪽(2026-11-05 사장님 「따로 페이지 새로」) — 머리글·홈·상세 쪽의 신청 버튼이 모두 여기로 온다. 홈 44번 문의 칸은 그대로.
// 구조 참고: 다 준비하지 않아도 된다는 안내 → 두 칸(왼쪽 진행 순서·다른 연락 방법 / 오른쪽 폼). 폼은 홈과 같은 /api/contact.
const TITLE = "무료 상담 신청: 정리 안 된 마케팅 고민도 괜찮습니다"
const DESC = "회사명과 연락처만 적어도 신청됩니다. 담당 마케터가 연락드려 나머지를 여쭙고, 지금 어디에 어떻게 나오는지부터 같이 봅니다. 가격은 상담 뒤 제안서로 안내합니다."
const FAQ: [string, string][] = [
  ["상담 비용이 있나요?", "상담은 무료입니다. 진행하실 때의 비용은 진단 뒤 제안서로 안내합니다."],
  ["무엇을 준비해야 하나요?", "준비하실 것은 없습니다. 아시는 칸만 채워 보내 주시면 담당 마케터가 연락드려 나머지를 여쭙니다."],
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
    { name: "무료 상담 신청", path: "/contact" },
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
      <section className="dp-hero dp-cq" id="contact" aria-label="무료 상담 신청">
        <div className="dp-w dp-cq-in">
          <div className="dp-cq-t">
            <Crumb items={[{ name: "홈", href: "/" }, { name: "무료 상담 신청" }]} />
            <p className="dp-no">무료 상담 신청</p>
            <h1 aria-label="정리 안 된 고민도 괜찮습니다. 아시는 칸만 채워 보내 주세요.">
              <Chars text={"정리 안 된 고민도\n괜찮습니다."} />{" "}
              <small>아시는 칸만 채워 보내 주세요.</small>
            </h1>
            <p className="dp-lead">회사명과 연락처만 적어도 신청됩니다. 담당 마케터가 연락드려 나머지를 여쭙고, 지금 어디에 어떻게 나오는지부터 같이 봅니다. 가격은 상담 뒤 제안서로 안내합니다.</p>
            <ol className="dp-cq-steps" aria-label="상담 뒤 진행 순서">
              {STEPS.slice(0, 3).map((s, i) => (
                <li key={s.w}>
                  <em>{i + 1}</em>
                  <b>{s.w}</b>
                  <span>{s.t}</span>
                </li>
              ))}
            </ol>
            <div className="ct-ways">
              <a href={CONTACT.telHref} data-tel>
                <Icon k="phone" />
                <b>{CONTACT.tel}</b>
                <small>{CONTACT.hours}</small>
              </a>
              <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao className="kk">
                <Icon k="kakao" />
                <b>카카오톡 상담</b>
                <small>채팅으로 바로 물어보기</small>
              </a>
              <a href="/business/contact">
                <Icon k="plan" />
                <b>기업 제안 요청</b>
                <small>대기업·프랜차이즈·브랜드사</small>
              </a>
            </div>
          </div>
          <SfContactForm services={SERVICES.map((s) => ({ k: s.k, n: s.n }))} source="contact_page" full />
        </div>
      </section>
      <Sec q="상담 전에 많이 물어보시는 질문">
        <Faq items={FAQ} />
      </Sec>
    </DocShell>
  )
}
