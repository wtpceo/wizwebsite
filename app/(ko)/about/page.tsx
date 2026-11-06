import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, COMPARE, PROBLEMS, CONTACT, TEAMS } from "@/components/shortform/content"
import { Icon } from "@/components/shortform/icons"
import { DocShell, Crumb, Meta, Sec, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "@/components/shortform/DocParts"
import { ABOUT_PAGE } from "@/components/shortform/details"
import { Chars, vars } from "@/components/shortform/parts"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 회사소개(2026-11-04 리뉴얼) — 위즈더플래닝 소개 · 왜 한 곳인가 · 여덟 가지 · 회사 정보·오시는 길
const d = ABOUT_PAGE

export const metadata: Metadata = {
  title: d.title,
  description: d.desc,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${d.title} | 위즈더플래닝`,
    description: d.desc,
    url: "https://wiztheplanning.com/about",
    siteName: "위즈더플래닝",
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: d.title }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${d.title} | 위즈더플래닝`, description: d.desc, images: [`/og-home.jpg?v=${timestamp}`] },
}

export default function AboutPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "회사소개", path: "/about" },
  ]
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": `${SITE}/about#page`, name: d.title, description: d.desc, about: { "@id": ORG_ID }, url: `${SITE}/about` },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }
  return (
    <DocShell>
      <JsonLd data={ld} />
      <section className="dp-hero" aria-label="위즈더플래닝 소개">
        <div className="dp-w dp-hero-in">
          <div>
            <Crumb items={[{ name: "홈", href: "/" }, { name: "회사소개" }]} />
            <p className="dp-no">ABOUT WIZ THE PLANNING</p>
            <h1 aria-label="맡긴 곳이, 직접 합니다. 재위탁 없이, 자체 전문팀이 직접 수행합니다.">
              <Chars text={"맡긴 곳이,\n직접 합니다."} />{" "}
              <small>재위탁 없이, 자체 전문팀이 직접 수행합니다.</small>
            </h1>
            <p className="dp-lead">{d.lead}</p>
            <div className="dp-btns">
              <a className="p1" href="/contact">
                진단 신청
              </a>
              <a className="p2" href="tel:16700704" data-tel>
                대표전화 1670-0704
              </a>
            </div>
          </div>
          <ul className="ab-svc" aria-label="위즈더플래닝이 하는 일 여덟 가지">
            {SERVICES.map((s, i) => (
              <li key={s.k} style={vars({ n: i })}>
                <Link href={`/services/${s.slug}`}>
                  <span className="ic">
                    <Icon k={s.k} />
                  </span>
                  <b>{s.n}</b>
                  <small>{s.ln}</small>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Meta />

      <Sec q={d.q1}>
        {d.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Sec>

      <Sec id="one-team" q="따로 맡기면 무엇이 어려운가요?">
        <p>대행사가 늘어날수록 브랜드는 흩어지고, 비용과 시간, 책임의 공백이 생깁니다.</p>
        <ol className="dp-num">
          {PROBLEMS.map(([t, x]) => (
            <li key={t}>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
      </Sec>

      <Sec q="한 곳에 맡기면 무엇이 달라지나요?">
        <p>운영 구조가 다릅니다. 창구는 전담 AE 하나로 줄고, 같은 이야기를 여러 번 할 일이 없습니다.</p>
        <table className="ab-cmp">
          <thead>
            <tr>
              <th scope="col">구분</th>
              <th scope="col">채널별 개별 대행</th>
              <th scope="col">위즈더플래닝</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE.map(([k, a, b]) => (
              <tr key={k}>
                <th scope="row">{k}</th>
                <td>{a}</td>
                <td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Sec>

      <Sec q="전문팀은 어떻게 나뉘어 있나요?">
        <p>여섯 개의 부서가 직접 수행합니다. 일정은 전담 AE가 통합 관리합니다.</p>
        <ul className="dp-items">
          {TEAMS.map(([k, n, xs, en]) => (
            <li key={k}>
              <b>
                {en} {n}
              </b>
              <span>{xs.join(" · ")}</span>
            </li>
          ))}
        </ul>
      </Sec>

      <Sec q="위즈더플래닝이 직접 보유한 것은 무엇인가요?">
        <ol className="dp-num">
          {d.own.map(([t, x]) => (
            <li key={t}>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
      </Sec>

      <Sec id="location" q="어디에 있고, 언제 연락하면 되나요?">
        <p>{d.where}</p>
        <dl className="ab-info">
          <div>
            <dt>주소</dt>
            <dd>서울시 금천구 디지털로 178 퍼블릭가산 A동 2518호·2519호</dd>
          </div>
          {d.access ? (
            <div>
              <dt>오시는 길</dt>
              <dd>{d.access}</dd>
            </div>
          ) : null}
          <div>
            <dt>대표전화</dt>
            <dd>
              <a href={CONTACT.telHref} data-tel>
                {CONTACT.tel}
              </a>
            </dd>
          </div>
          <div>
            <dt>이메일</dt>
            <dd>{CONTACT.email}</dd>
          </div>
          <div>
            <dt>운영 시간</dt>
            <dd>평일 10:00–18:00 · 점심시간 12:15–13:30 · 주말 및 공휴일 휴무</dd>
          </div>
          <div>
            <dt>대표</dt>
            <dd>정현우 · 사업자등록번호 668-81-00391</dd>
          </div>
        </dl>
      </Sec>

      <Sec q="회사소개 자주 묻는 질문">
        <Faq items={d.faq} />
      </Sec>

      <ContactBlock title="상담은 무료입니다. 신청하시면 전담 AE가 연락드립니다." source="about" />
    </DocShell>
  )
}
