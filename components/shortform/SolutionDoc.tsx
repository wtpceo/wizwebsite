import Link from "next/link"
import { SERVICES, SOLUTIONS } from "./content"
import { SOL_DETAILS } from "./details"
import { Icon } from "./icons"
import { DocShell, Crumb, Meta, Sec, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex } from "./parts"

// 업종별 솔루션 3쪽 — 누구에게 · 고민 · 묶어서 하는 순서 · 진행 · 자주 묻는 질문 · 문의
export default function SolutionDoc({ slug }: { slug: string }) {
  const f = SOLUTIONS.find((x) => x.slug === slug)!
  const d = SOL_DETAILS[slug]
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "업종별 솔루션", path: "/solutions/local" },
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
        <div className="dp-w dp-hero-in">
          <div>
            <Crumb items={[{ name: "홈", href: "/" }, { name: "업종별 솔루션", href: "/#c33" }, { name: f.n }]} />
            <p className="dp-no">업종별 솔루션 · {f.who}</p>
            <h1>
              {f.n}
              <small>{f.q.replace("\n", " ")}</small>
            </h1>
            <p className="dp-lead">{d.lead}</p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                우리 업종 상담
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

      <Sec kicker="이런 고민이 있다면" q={d.q1}>
        <ol className="dp-num">
          {d.pains.map(([t, x]) => (
            <li key={t}>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
      </Sec>

      <Sec kicker="묶어서 하는 순서" q={d.q2}>
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

      <Sec kicker="진행 방식" q="어떻게 진행되나요?">
        <ol className="dp-num">
          {d.process.map(([t, x]) => (
            <li key={t}>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
      </Sec>

      <Sec kicker="자주 묻는 질문" q={`${f.n} 자주 묻는 질문`}>
        <Faq items={d.faq} />
      </Sec>

      <nav className="dp-other" aria-label="다른 업종">
        <div className="dp-w">
          <p>업종별 솔루션</p>
          <nav>
            {SOLUTIONS.map((o) => (
              <Link key={o.slug} href={`/solutions/${o.slug}`} aria-current={o.slug === f.slug ? "page" : undefined}>
                {o.n}
              </Link>
            ))}
          </nav>
        </div>
      </nav>

      <ContactBlock title={`${f.n}에 맞는 조합, 진단부터 받아 보세요.`} initial={keys} source={`solution_${f.slug}`} />
    </DocShell>
  )
}
