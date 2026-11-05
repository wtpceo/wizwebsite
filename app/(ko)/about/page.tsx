import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, COMPARE, PROBLEMS, CONTACT } from "@/components/shortform/content"
import { Icon } from "@/components/shortform/icons"
import { DocShell, Crumb, Meta, Sec, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "@/components/shortform/DocParts"
import { ABOUT_PAGE } from "@/components/shortform/details"
import { Chars, vars } from "@/components/shortform/parts"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 회사소개(2026-11-04 리뉴얼) — 위즈더플래닝 소개 · 왜 한 팀인가 · 여덟 가지 · 회사 정보·오시는 길
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
            <p className="dp-no">위즈더플래닝 소개</p>
            <h1 aria-label="나눠 맡기던 마케팅, 이제 한 팀이 직접. 재하청 없이, 우리 팀이 직접 책임집니다.">
              <Chars text={"나눠 맡기던 마케팅,\n이제 한 팀이 직접."} />{" "}
              <small>재하청 없이, 우리 팀이 직접 책임집니다.</small>
            </h1>
            <p className="dp-lead">{d.lead}</p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                무료 진단 신청
              </a>
              <a className="p2" href="tel:16700704" data-tel>
                전화 1670-0704
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
        <p>채널마다 업체가 다르면 우리 브랜드 하나를 두고 연락이 여러 갈래로 갈라집니다.</p>
        <ol className="dp-num">
          {PROBLEMS.map(([t, x]) => (
            <li key={t}>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
      </Sec>

      <Sec q="한 팀이 하면 무엇이 달라지나요?">
        <p>광고 운영부터 촬영·편집까지 사내 팀이 직접 하고, 손님은 담당 마케터 한 명과만 이야기합니다.</p>
        <table className="ab-cmp">
          <thead>
            <tr>
              <th scope="col">구분</th>
              <th scope="col">따로 맡길 때</th>
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
            <dt>상담 시간</dt>
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

      <ContactBlock title="우리 브랜드 마케팅, 지금 무료로 진단받아 보세요." source="about" />
    </DocShell>
  )
}
