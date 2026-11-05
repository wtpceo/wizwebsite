import type { Metadata } from "next"
import { TEAMS, STEPS, DIAG_ROWS } from "@/components/shortform/content"
import { Icon } from "@/components/shortform/icons"
import { DocShell, Crumb, Meta, Sec, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "@/components/shortform/DocParts"
import { TEAM_PAGE } from "@/components/shortform/details"
import WeeklyReport from "@/components/shortform/WeeklyReport"
import Works from "@/components/shortform/Works"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 전문 인력 · 진행 과정(2026-11-04 리뉴얼). 리더 이름·사진·이력은 회사 준비물 — 받기 전엔 팀과 맡는 일만 싣는다.
const d = TEAM_PAGE

export const metadata: Metadata = {
  title: d.title,
  description: d.desc,
  alternates: { canonical: "/team" },
  openGraph: {
    title: `${d.title} | 위즈더플래닝`,
    description: d.desc,
    url: "https://wiztheplanning.com/team",
    siteName: "위즈더플래닝",
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: d.title }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${d.title} | 위즈더플래닝`, description: d.desc, images: [`/og-home.jpg?v=${timestamp}`] },
}

export default function TeamPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "전문 인력", path: "/team" },
  ]
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE}/team#page`,
        name: d.title,
        description: d.desc,
        about: { "@id": ORG_ID },
        url: `${SITE}/team`,
      },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }
  return (
    <DocShell>
      <JsonLd data={ld} />
      <section className="dp-hero" aria-label="전문 인력 소개">
        <div className="dp-w dp-hero-in">
          <div>
            <Crumb items={[{ name: "홈", href: "/" }, { name: "전문 인력" }]} />
            <p className="dp-no">전문 인력 · 진행 과정</p>
            <h1>
              분야별 시니어가
              <br />
              직접 담당합니다.{" "}
              <small>창구는 담당 마케터 한 명.</small>
            </h1>
            <p className="dp-lead">{d.lead}</p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                담당 마케터와 상담
              </a>
              <a className="p2" href="tel:16700704" data-tel>
                전화 1670-0704
              </a>
            </div>
          </div>
          <div className="tm-hero" aria-hidden="true">
            <div className="tm-c">
              <span className="ic">
                <Icon k="person" />
              </span>
              <b>담당 마케터</b>
              <small>손님 한 분에 한 명</small>
            </div>
            <ul>
              {TEAMS.map(([k, n]) => (
                <li key={n}>
                  <span className="ic">
                    <Icon k={k} />
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Meta />

      <Sec q={d.q1}>
        {d.marketer.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Sec>

      <Sec q="어떤 팀이 무슨 일을 맡나요?">
        <p>{d.teamsLead}</p>
        <ul className="dp-items">
          {TEAMS.map(([k, n, jobs]) => (
            <li key={n}>
              <b>{n}</b>
              <span>{jobs.join(" · ")}</span>
            </li>
          ))}
        </ul>
      </Sec>

      <Sec id="process" q="상담부터 리포트까지 어떻게 흘러가나요?">
        <p>{d.processLead}</p>
        <ol className="dp-steps">
          {STEPS.map((st, i) => (
            <li key={st.w} className={i === 0 ? "on" : ""}>
              <b>
                {i + 1} {st.w}
              </b>
              <span>{d.steps[i]}</span>
            </li>
          ))}
        </ol>
        <div className="dp-rep">
          <div>
            <h3>진단에서 보는 것(예시)</h3>
            <ul>
              {DIAG_ROWS.map(([a, b]) => (
                <li key={a}>
                  {a}: {b}
                </li>
              ))}
            </ul>
          </div>
          <WeeklyReport />
        </div>
      </Sec>

      <Works k="team" />

      <Sec q="전문 인력·진행 과정 자주 묻는 질문">
        <Faq items={d.faq} />
      </Sec>

      <ContactBlock title="담당 마케터 한 명에게 다 맡겨 보세요." source="team" />
    </DocShell>
  )
}
