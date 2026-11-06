import type { Metadata } from "next"
import { TEAMS, STEPS, DIAG_ROWS, SERVICES } from "@/components/shortform/content"
import { Icon } from "@/components/shortform/icons"
import { DocShell, Crumb, Meta, Sec, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "@/components/shortform/DocParts"
import { TEAM_PAGE } from "@/components/shortform/details"
import WeeklyReport from "@/components/shortform/WeeklyReport"
import { Chars } from "@/components/shortform/parts"
import Works from "@/components/shortform/Works"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 전문팀 · 프로세스(2026-11-04 리뉴얼, 11-06 카피덱 이름). 리더 이름·사진·이력은 회사 준비물 — 받기 전엔 팀과 맡는 일만 싣는다.
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
    { name: "전문팀", path: "/team" },
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
      <section className="dp-hero" aria-label="전문팀 소개">
        <div className="dp-w dp-hero-in">
          <div>
            <Crumb items={[{ name: "홈", href: "/" }, { name: "전문팀" }]} />
            <p className="dp-no">OUR TEAM · HOW WE WORK</p>
            <h1 aria-label="여섯 개의 부서가 직접 수행합니다. 부서는 여섯, 창구는 하나.">
              <Chars text={"여섯 개의 부서가\n직접 수행합니다."} />{" "}
              <small>부서는 여섯, 창구는 하나.</small>
            </h1>
            <p className="dp-lead">{d.lead}</p>
            <div className="dp-btns">
              <a className="p1" href="/contact">
                전담 AE와 상담
              </a>
              <a className="p2" href="tel:16700704" data-tel>
                대표전화 1670-0704
              </a>
            </div>
          </div>
          <div className="tm-hero" aria-hidden="true">
            <div className="tm-c">
              <span className="ic">
                <Icon k="person" />
              </span>
              <b>전담 AE</b>
              <small>고객사별 담당 지정</small>
            </div>
            <ul>
              {/* 팀 칸을 누르면 그 서비스 쪽으로(11-05 점검: 버튼처럼 생겼는데 안 눌리던 것) */}
              {TEAMS.map(([k, n]) => (
                <li key={n}>
                  <a href={`/services/${SERVICES.find((s) => s.k === k)?.slug ?? ""}`}>
                    <span className="ic">
                      <Icon k={k} />
                    </span>
                    {n}
                  </a>
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

      <Sec q="어떤 전문팀이 무슨 일을 맡나요?">
        <p>{d.teamsLead}</p>
        <ul className="dp-items">
          {TEAMS.map(([, n, jobs, en]) => (
            <li key={n}>
              <b>
                {en} {n}
              </b>
              <span>{jobs.join(" · ")}</span>
            </li>
          ))}
        </ul>
      </Sec>

      <Sec id="process" q="진단에서 최적화까지 어떻게 순환하나요?">
        <p>{d.processLead}</p>
        <ol className="dp-steps">
          {STEPS.map((st, i) => (
            <li key={st.w} className={i === 0 ? "on" : ""}>
              <b>
                {i + 1} {st.en} {st.w}
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

      <Sec q="전문팀·프로세스 자주 묻는 질문">
        <Faq items={d.faq} />
      </Sec>

      <ContactBlock title="첫 미팅부터 성과 리포트까지, 전담 AE가 맡습니다." source="team" />
    </DocShell>
  )
}
