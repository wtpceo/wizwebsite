import Link from "next/link"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { MG } from "./mg"
import { Icon } from "./icons"
import { DocShell, Crumb, Meta, Sec, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, Nums } from "./parts"
import Works from "./Works"
import { CaseBox, TimeBox, SampleBox, NotFit, Reads, Consult } from "./DocMore"

/** 받침 있으면 「과」, 없으면 「와」 */
function wa(w: string) {
  const c = w.charCodeAt(w.length - 1)
  return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 !== 0 ? "과" : "와"
}

// 서비스 상세 — 한 문법 7칸(계획서 §4): ① 개요와 핵심 가치 ② 세부 상품 ③ 직접 실행이 다른 점
// ④ 진행 방식과 리포트 예시 ⑤ 함께하면 좋은 서비스 ⑥ 자주 묻는 질문 ⑦ 그 서비스가 미리 골라진 문의 폼
// 11-05 보강 칸(기간표·견본·사례·안 맞는 경우·이어 읽기·첫 상담)은 DocMore. 근거가 없는 칸은 쪽에서 빠진다
export default function ServiceDoc({ slug }: { slug: string }) {
  const s = SERVICES.find((x) => x.slug === slug)!
  const d = DETAILS[s.k]
  const m = MORE[s.k]
  const crumbs = [
    { name: "홈", path: "/" },
    { name: s.n, path: `/services/${s.slug}` },
  ]
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/${s.slug}#service`,
        name: s.n,
        serviceType: s.n,
        description: s.t1,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "대한민국" },
        url: `${SITE}/services/${s.slug}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${s.n} 세부 상품`,
          itemListElement: s.items.map(([n, t]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n, description: t } })),
        },
      },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }
  return (
    <DocShell>
      <JsonLd data={ld} />
      <section className="dp-hero" aria-label={`${s.n} 소개`}>
        {/* 11-05 사장님 「숏폼이 뒤에서 도는 배경을 소개 쪽에도」 — 홈 첫 화면과 같은 벽, 막을 더 짙게 */}
        <div className="dp-bg" aria-hidden="true">
          <div className="bgt" data-wall="" />
        </div>
        <div className="dp-veil" aria-hidden="true" />
        <div className="dp-w dp-hero-in">
          <div>
            <Crumb items={[{ name: "홈", href: "/" }, { name: s.n }]} />
            <p className="dp-no">
              서비스 {s.no} / 08{s.k === "search" ? " · 대표 서비스" : ""}
            </p>
            <h1 aria-label={`${s.n} ${s.cap.replace("\n", " ")}`}>
              <Chars text={s.n} />{" "}
              <small>{s.cap.replace("\n", " ")}</small>
            </h1>
            <p className="dp-lead">{d.lead}</p>
            <p className="dp-first">
              <span>먼저 하는 일</span>
              {s.first}
            </p>
            <div className="dp-btns">
              <a className="p1" href={`/contact?svc=${s.k}`}>
                무료 상담 신청
              </a>
              <a className="p2" href="tel:16700704" data-tel>
                전화 1670-0704
              </a>
            </div>
            {/* 옛 상세 쪽은 주소 그대로 두고 여기서 잇는다(지시서 「옛 쪽은 새 쪽에서 잇기만」) */}
            {s.more ? (
              <p className="dp-more">
                <a href={s.more.href}>{s.more.label} →</a>
              </p>
            ) : null}
          </div>
          <div className="dp-mg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MG[s.k] }} />
        </div>
      </section>
      <Meta />

      <Sec q={d.q1}>
        {d.overview.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Sec>

      <Sec q={`${s.n}에는 어떤 상품이 있나요?`}>
        <p>{d.itemsLead}</p>
        <ul className="dp-items">
          {s.items.map(([n, t]) => (
            <li key={n}>
              <b>{n}</b>
              <span>{d.itemNotes?.[n] || t}</span>
            </li>
          ))}
        </ul>
      </Sec>

      <Works k={s.k} />

      <Sec q={d.q3}>
        <ol className="dp-num">
          {d.diff.map(([t, x]) => (
            <li key={t}>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
      </Sec>

      <Sec q="어떤 순서로 진행하고 무엇을 보고받나요?">
        <ol className="dp-num">
          {d.process.map(([t, x]) => (
            <li key={t}>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
        {m.time ? <TimeBox t={m.time} /> : null}
        <div className="dp-rep">
          <div>
            <h3>보고서 항목</h3>
            <ul>
              {d.report.map((r) => (
                <li key={r}>
                  <Nums text={r} />
                </li>
              ))}
            </ul>
          </div>
          <div className="dp-deck">
            <div className="deck" data-tiles={s.k} />
            <Ex>{s.k === "global" ? "예시 화면" : "예시 화면 · 업체명 가림"}</Ex>
          </div>
        </div>
        {m.sample ? <SampleBox s={m.sample} /> : null}
        {m.case ? (
          <CaseBox c={m.case} down={m.down} recs={m.hideRec ? [] : s.rec} recNote={d.recNote} />
        ) : s.rec.length ? (
          <div className="dp-recs">
            <p>실제 기록</p>
            <ul>
              {s.rec.map((r) => (
                <li key={r}>
                  <Nums text={r} />
                </li>
              ))}
            </ul>
            {d.recNote ? <small className="dp-recn">{d.recNote}</small> : null}
          </div>
        ) : null}
      </Sec>

      <Sec q={`${s.n}${wa(s.n)} 같이 하면 좋은 서비스는 무엇인가요?`}>
        <p>{d.pairsLead}</p>
        <ul className="dp-pairs">
          {d.pairs.map(([k, why]) => {
            const o = SERVICES.find((x) => x.k === k)!
            return (
              <li key={k}>
                <Link href={`/services/${o.slug}`}>
                  <span className="ic">
                    <Icon k={o.k} />
                  </span>
                  <span>
                    <b>{o.n}</b>
                    <span>{why}</span>
                  </span>
                  <Icon k="arrow" className="ar" />
                </Link>
              </li>
            )
          })}
        </ul>
      </Sec>

      <NotFit items={m.notFit} />

      <Sec q={`${s.n} 자주 묻는 질문`}>
        <Faq items={d.faq} />
        {m.reads ? <Reads items={m.reads} /> : null}
      </Sec>

      <Consult items={m.consult} />

      <nav className="dp-other" aria-label="다른 서비스">
        <div className="dp-w">
          <p>다른 서비스</p>
          <nav>
            {SERVICES.map((o) => (
              <Link key={o.k} href={`/services/${o.slug}`} aria-current={o.k === s.k ? "page" : undefined}>
                {o.n}
              </Link>
            ))}
          </nav>
        </div>
      </nav>

      <ContactBlock title={`${s.n}, 무료 상담부터 받아 보세요.`} initial={[s.k]} source={`service_${s.slug}`} />
    </DocShell>
  )
}
