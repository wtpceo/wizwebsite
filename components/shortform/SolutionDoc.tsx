import Link from "next/link"
import { SERVICES, SOLUTIONS } from "./content"
import { SOL_DETAILS, MORE } from "./details"
import { Icon } from "./icons"
import { DocShell, Crumb, Meta, Sec, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars } from "./parts"
import Works from "./Works"
import { CaseBox, NotFit, Reads, Consult, Month } from "./DocMore"

// 업종별 솔루션 3쪽 — 누구에게 · 고민 · 묶어서 하는 순서 · 진행 · 자주 묻는 질문 · 문의
export default function SolutionDoc({ slug }: { slug: string }) {
  const f = SOLUTIONS.find((x) => x.slug === slug)!
  const d = SOL_DETAILS[slug]
  const m = MORE[slug]
  const crumbs = [
    { name: "홈", path: "/" },
    { name: f.n, path: `/solutions/${f.slug}` },
  ]
  const keys = f.c.map((c) => c[0]).filter((k) => k !== "plan")
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/solutions/${f.slug}#service`,
        name: `${f.n} 마케팅`,
        description: d.lead,
        provider: { "@id": ORG_ID },
        audience: { "@type": "BusinessAudience", audienceType: f.who.replace(/ · /g, ", ") },
        areaServed: { "@type": "Country", name: "대한민국" },
        url: `${SITE}/solutions/${f.slug}`,
      },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }
  return (
    <DocShell>
      <JsonLd data={ld} />
      <section className="dp-hero t-k" aria-label={`${f.n} 소개`}>
        <div className="dp-bg" aria-hidden="true">
          <div className="bgt" data-wall="" />
        </div>
        <div className="dp-veil" aria-hidden="true" />
        <div className="dp-w dp-hero-in">
          <div>
            <Crumb items={[{ name: "홈", href: "/" }, { name: f.n }]} />
            <p className="dp-no">업종별 마케팅 · {f.who}</p>
            <h1 aria-label={`${f.n} ${f.q.replace("\n", " ")}`}>
              <Chars text={f.n} />{" "}
              <small>{f.q.replace("\n", " ")}</small>
            </h1>
            <p className="dp-lead">{d.lead}</p>
            <div className="dp-btns">
              <a className="p1" href="/contact">
                무료 상담 신청
              </a>
              <a className="p2" href="tel:16700704" data-tel>
                전화 1670-0704
              </a>
            </div>
          </div>
          <figure className="dp-ph">
            <img src={`/sf/ex/${f.img}.jpg`} alt={f.alt} width={640} height={960} />
            <Ex>예시 사진</Ex>
          </figure>
        </div>
      </section>
      <Meta />

      <Sec q={d.q1}>
        <ol className="dp-num">
          {d.pains.map(([t, x]) => (
            <li key={t}>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
      </Sec>

      {m.month ? <Month m={m.month} /> : null}

      <Works k={slug} />

      <Sec q={d.q2}>
        <p>{d.comboLead}</p>
        <ul className="dp-pairs">
          {f.c.map(([k, n, why]) => {
            const o = SERVICES.find((x) => x.k === k)
            const inner = (
              <>
                <span className="ic">
                  <Icon k={k} />
                </span>
                <span>
                  <b>{n}</b>
                  <span>{why}</span>
                </span>
                {o ? <Icon k="arrow" className="ar" /> : <span />}
              </>
            )
            return <li key={n}>{o ? <Link href={`/services/${o.slug}`}>{inner}</Link> : <a href="#contact">{inner}</a>}</li>
          })}
        </ul>
      </Sec>

      <Sec q="어떻게 진행되나요?">
        <ol className="dp-num">
          {d.process.map(([t, x]) => (
            <li key={t}>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
        {m.case ? <CaseBox c={m.case} /> : null}
      </Sec>

      <NotFit items={m.notFit} />

      <Sec q={`${f.n} 자주 묻는 질문`}>
        <Faq items={d.faq} />
        {m.reads ? <Reads items={m.reads} /> : null}
      </Sec>

      <Consult items={m.consult} />

      <nav className="dp-other" aria-label="다른 업종">
        <div className="dp-w">
          <p>업종별 마케팅</p>
          <nav>
            {SOLUTIONS.map((o) => (
              <Link key={o.slug} href={`/solutions/${o.slug}`} aria-current={o.slug === f.slug ? "page" : undefined}>
                {o.n}
              </Link>
            ))}
          </nav>
        </div>
      </nav>

      {/* 무료 진단은 기업·병원 대상(사장님 11-04) — 매장·학원·전문직이 대상인 로컬 쪽은 상담부터(사령탑 11-04) */}
      {f.slug === "local" ? (
        <ContactBlock
          title={`${f.n}에 맞는 조합, 상담부터 받아 보세요.`}
          sub="매장·학원·전문직은 아래 신청이나 전화·카카오톡으로 편하게 먼저 물어보셔도 됩니다. 가격은 상담 뒤 제안서로 안내합니다."
          label="무료 상담 신청"
          initial={keys}
          source={`solution_${f.slug}`}
        />
      ) : (
        <ContactBlock title={`${f.n}에 맞는 조합, 상담부터 받아 보세요.`} initial={keys} source={`solution_${f.slug}`} />
      )}
    </DocShell>
  )
}
