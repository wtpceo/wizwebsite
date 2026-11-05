import Script from "next/script"
import type { ReactNode } from "react"
import { SERVICES, CONTACT } from "./content"
import { Icon } from "./icons"
import SfContactForm from "./SfContactForm"
import { SfHeader, SfMenu, SfFooter, SfDock } from "./SiteChrome"
import "./sf-hero.css"
import "./sf.css"
import "./sf-doc.css"

const SITE = "https://wiztheplanning.com"
export const UPDATED = "2026-11-04"

/** 새 쪽 공통 틀 — 머리글·메뉴·바닥글·아래 바·예시 화면 스크립트 */
export function DocShell({ children }: { children: ReactNode }) {
  return (
    <main className="sf sf-doc" id="sf">
      <SfHeader />
      <SfMenu />
      {children}
      <SfFooter />
      <SfDock />
      <script
        type="application/json"
        id="sf-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            svc: SERVICES.map((s) => ({ k: s.k, n: s.n, ln: s.ln, first: s.first, t1: s.t1, d: s.steps, rec: s.rec, more: `/services/${s.slug}` })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Script src="/sf/sf.js" strategy="afterInteractive" />
    </main>
  )
}

export function Crumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <ol className="dp-crumb" aria-label="현재 위치">
      {items.map((c) => (
        <li key={c.name}>{c.href ? <a href={c.href}>{c.name}</a> : <span aria-current="page">{c.name}</span>}</li>
      ))}
    </ol>
  )
}

export function Meta() {
  return (
    <p className="dp-meta">
      <span className="dp-w" style={{ display: "block" }}>
        글 <b>위즈더플래닝 마케팅팀</b> · 수정일 <time dateTime={UPDATED}>{UPDATED.replace(/-/g, ".")}</time>
      </span>
    </p>
  )
}

/** 질문형 제목 구역 */
export function Sec({ id, q, children }: { id?: string; q: string; children: ReactNode }) {
  return (
    <section className="dp-sec" id={id}>
      <div className="dp-w dp-sec-in">
        <h2>{q}</h2>
        <div className="dp-body rv">{children}</div>
      </div>
    </section>
  )
}

export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="dp-faq">
      {items.map(([q, a], i) => (
        <details key={q} open={i === 0}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}

export function ContactBlock({ title, sub, label, initial = [], source }: { title: string; sub?: string; label?: string; initial?: string[]; source: string }) {
  return (
    <section className="dp-ct" id="contact" aria-label="문의하기">
      <div className="dp-w dp-ct-in">
        <div>
          <h2>{title}</h2>
          <p className="sm">{sub || "무료 진단은 기업과 병원을 대상으로 합니다. 신청하시면 담당 마케터가 연락드려 진단부터 시작합니다. 가격은 진단 뒤 제안서로 안내합니다."}</p>
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
          </div>
        </div>
        <SfContactForm services={SERVICES.map((s) => ({ k: s.k, n: s.n }))} initial={initial} source={source} label={label} />
      </div>
    </section>
  )
}

/** 구조화 데이터 — 화면 글과 같은 값만 */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE}${c.path}` })),
  }
}

export function faqLd(items: [string, string][]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }
}

export const ORG_ID = `${SITE}/#organization`
export { SITE }
