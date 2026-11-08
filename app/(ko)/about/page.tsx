import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, COMPARE, PROBLEMS, CONTACT, TEAMS } from "@/components/shortform/content"

/** 한 캠페인이 흐르는 순서(11-07 대표 논리). 번호·제목·한 줄·링크 */
const CHAIN: [string, string, string, string | null][] = [
  ["01", "캠페인 기획", "브랜드가 어디까지 알려져 있고 어디서 새는지 먼저 분석", "/diagnosis"],
  ["02", "인플루언서 섭외", "고객사에 딱 맞는 유튜버·인플루언서를 찾아 후보 리스트부터", "/services/influencer"],
  ["03", "촬영·제작", "소재는 자체 촬영팀이 찍고, 반응이 떨어지면 다시 찍습니다", "/services/content"],
  ["04", "광고", "툴은 같습니다. 소재와 클릭 뒤 설계에서 갈립니다", "/services/performance"],
  ["05", "받을 곳", "광고를 본 사람과 AI가 둘 다 읽는 홈페이지·플레이스", "/services/homepage"],
  ["06", "2차·3차 활용", "한 번 찍은 장면을 광고 소재와 후기·바깥 출처로 다시", "/services/viral"],
  ["07", "SEO·GEO", "AI가 우리 브랜드를 추천하는지 realGEO로 매주 잽니다", "/services/search"],
]

/** 부서가 일하는 장면. 이미지 생성 모델로 만든 연출 사진이라 실존 인물·고객사가 아니다 */
const PHOTOS: [string, string, string][] = [
  ["/geo/media-crew.jpg", "촬영팀 · 현장 촬영", "촬영팀이 식당 주방에서 사장님을 촬영하는 모습"],
  ["/geo/media-editor.jpg", "촬영팀 · 편집", "편집자가 영상을 편집하는 작업실"],
  ["/geo/media-unbox.jpg", "섭외팀 · 크리에이터 콘텐츠", "두 크리에이터가 제품을 개봉하며 촬영하는 모습"],
  ["/geo/media-ai.jpg", "GEO팀 · AI 답변 확인", "카페에서 AI 답변을 보는 휴대폰 화면"],
]
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
            <h1 aria-label="맡긴 곳이, 직접 합니다. 외주 없이 여섯 부서가 한 설계로 움직입니다.">
              <Chars text={"맡긴 곳이,\n직접 합니다."} />{" "}
              <small>외주 없이 여섯 부서가 한 설계로 움직입니다.</small>
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
        {/* 11-07 카피 개선안 보조 자료: 한 설계의 순서. 코드로 그린다(이미지 금지) */}
        <ol className="ab-chain" aria-label="한 캠페인이 흐르는 순서">
          {CHAIN.map(([no, t, x, href]) => (
            <li key={no}>
              <em>{no}</em>
              {href ? <Link href={href}><b>{t}</b></Link> : <b>{t}</b>}
              <span>{x}</span>
            </li>
          ))}
        </ol>
        <p className="ab-chain-f">GEO는 이 설계의 마지막 칸입니다. 앞 칸이 비어 있으면 AI가 끌어올 출처도 없습니다.</p>
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
        <p>여섯 부서가 직접 합니다. 일정은 전담 AE가 한데 모아 관리합니다.</p>
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
        {/* 11-07 보조 이미지: 부서가 일하는 장면(이미지 생성 모델로 만든 연출 사진, 실존 인물 아님) */}
        <ul className="ab-photos" aria-label="부서가 일하는 장면">
          {PHOTOS.map(([src, cap, alt]) => (
            <li key={src}>
              <img src={src} alt={alt} loading="lazy" />
              <span>{cap}</span>
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

      <ContactBlock title="상담은 무료입니다. 신청하시면 전담 AE가 연락드립니다." sub="전담 AE가 보고 연락드리겠습니다. 비용은 진단이 끝난 뒤 제안서에 적어 드립니다." source="about" />
    </DocShell>
  )
}
