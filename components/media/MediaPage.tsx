import Link from "next/link"
import type { CSSProperties, ReactNode } from "react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import HomeReveal from "@/components/home/HomeReveal"
import HomeContactForm from "@/components/home/HomeContactForm"
import h from "@/components/home/home.module.css"
import { keepDots } from "@/components/home/keepDots"
import { AD_SERVICES } from "@/lib/ad-services"
import s from "./media.module.css"

// 매체 페이지 공통 틀(사이트구성안 v1 §05). 일곱 매체가 같은 순서로 쓴다.
// 첫 화면 → 맞는 회사 → 부서가 하는 일 → 다른 매체와 잇기 → 일한 기록 → 받는 것 → 자주 묻는 질문 → 상담.
// 문구는 페이지 파일이 원고에서 그대로 옮겨 넘긴다. 이 파일에는 화면 문구를 두지 않는다(링크 이름 제외).
// 등장 효과는 홈의 HomeReveal과 .rise/.shutter를 그대로 빌려 쓴다(서버 렌더에서는 전부 보인다)

/** 제목. 줄바꿈 위치는 원고 그대로 "\n"으로 넘긴다. 어느 폭에서나 두 줄을 넘지 않게 글자 크기를 칸 폭에 맞춘다.
 *  한 줄에 들어가는 짧은 제목("공개한 사례", "숏폼 제작 상담")은 "\n" 없이 넘긴다. 폭이 모자랄 때만 낱말 사이에서 꺾인다 */
type Lines = string

/** 본문 안 링크는 [이름](/주소)로 적는다. 화면에서는 링크, FAQ JSON-LD에서는 이름만 남는다 */
type Rich = string

export type MediaImage = { src: string; alt: string }

export type MediaPageData = {
  /** 문의 폼의 source 값이자 관리자 메일에 붙는 이름. 예: "search-ai" */
  source: string
  hero: {
    title: Lines
    lede: string
    /** shape: square는 가로 넓은 칸, tall은 세로 사진용 좁은 칸. fit: contain은 문서 캡처처럼 잘리면 안 되는 것 */
    image: MediaImage & { shape: "square" | "tall"; fit?: "cover" | "contain" }
    /** 첫 화면 사진 앞에 겹쳐 놓는 두 번째 사진(오른쪽 아래, 세로). 홈페이지 PC 캡처 위에 모바일 캡처를 올릴 때 */
    front?: MediaImage
  }
  suits: { title: Lines; lede?: string; good: string[]; better: string[] }
  work: {
    title: Lines
    lede?: string
    steps: { name: string; desc: string }[]
    /** 링크 한 줄: 소제목 + 본문(링크 포함) */
    note?: { title: string; body: Rich }
    /** 병원 한 줄 */
    hospital?: string
  }
  links: {
    title: Lines
    /** hrefs는 lib/ad-services.ts의 주소. 이름은 그 목록에서 가져온다 */
    items: { name: string; desc: string; hrefs?: string[] }[]
  }
  records: {
    title: Lines
    lede: string
    /** figure는 숫자가 공개된 사례에만 */
    items?: { industry: string; work: string; figure?: string; href: string }[]
    /** 공개한 사례 글이 없는 매체: 한 일만 막대로 적는다 */
    done?: string[]
    /** 영상이 오기 전까지 영상 칸 자리에 둘 세로 사진. 영상이 오면 이 자리를 바꾼다 */
    stills?: MediaImage[]
    /** stills가 가로 화면 캡처(홈페이지)일 때 */
    stillsWide?: boolean
  }
  receive: { title: Lines; metrics: { name: string; desc: string }[]; aside: Rich }
  faq: { q: string; a: Rich }[]
  contact: { title: Lines; lede: string }
}

// ---------- 제목 맞춤 ----------
// 한 줄의 폭을 글자 크기(em) 단위로 어림한다. SUIT 한글(굵기 800)은 실측 약 0.86em이라 0.9로 잡는다.
// 자간 -0.04em만큼 빼고, 4%를 남긴다. 실측으로 가장 긴 줄이 칸의 90% 남짓을 채운다(2026-11-03, 390·1440 폭).
// CSS에서 font-size = min(최대 크기, 칸 폭 / 이 값)
function emWidth(line: string) {
  let w = 0
  const chars = Array.from(line)
  for (const ch of chars) {
    if (/[가-힣]/.test(ch)) w += 0.9
    else if (ch === " ") w += 0.28
    else if (/[,.·:]/.test(ch)) w += 0.32
    else if (/[A-Z]/.test(ch)) w += 0.7
    else if (/[0-9]/.test(ch)) w += 0.62
    else if (/[a-z]/.test(ch)) w += 0.58
    else w += 0.7
  }
  return w - chars.length * 0.04
}

function Title({ text, as: Tag = "h2", id, className }: { text: Lines; as?: "h1" | "h2"; id?: string; className?: string }) {
  const lines = text.split("\n")
  // 한 줄 제목은 꺾일 수 있으니 두 줄 몫의 폭으로 어림한다(가장 긴 낱말이 한 줄에 들어가는 크기는 넘지 않는다)
  const single = lines.length === 1
  const est = single
    ? Math.max(emWidth(text) / 1.8, ...text.split(" ").map(emWidth))
    : Math.max(...lines.map(emWidth))
  const len = (est * 1.04).toFixed(2)
  return (
    <div className={s.tw}>
      <Tag
        id={id}
        className={`${s.title} ${single ? s.flow : ""} ${className ?? ""} ${h.rise}`}
        data-reveal=""
        style={{ "--len": len } as CSSProperties}
      >
        {lines.map((l, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {l}
          </span>
        ))}
      </Tag>
    </div>
  )
}

// ---------- 본문 안 링크 ----------
const LINK = /\[([^\]]+)\]\(([^)]+)\)/g

function rich(text: Rich): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(LINK)) {
    out.push(keepDots(text.slice(last, m.index)))
    out.push(
      <Link key={m.index} href={m[2]}>
        {m[1]}
      </Link>,
    )
    last = (m.index ?? 0) + m[0].length
  }
  out.push(keepDots(text.slice(last)))
  return out
}

const plain = (text: Rich) => text.replace(LINK, "$1")

const labelOf = (href: string) => AD_SERVICES.find((a) => a.href === href)?.label ?? href

// ---------- 페이지 ----------
export default function MediaPage({ data }: { data: MediaPageData }) {
  const { hero, suits, work, links, records, receive, faq, contact } = data

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className={s.page}>
        {/* 1. 첫 화면: 왼쪽 글, 오른쪽 작업 화면 한 장. 글과 사진을 겹치지 않는다 */}
        <section className={`${s.hero} ${hero.image.shape === "tall" ? s.tall : ""}`} aria-labelledby="h-hero">
          <div className={s.heroText}>
            <Title as="h1" id="h-hero" text={hero.title} className={s.display} />
            <div className={s.heroFoot}>
              <p className={h.rise} data-reveal="">
                {keepDots(hero.lede)}
              </p>
              <Link className={`${h.btn} ${s.heroBtn}`} href="/business/contact">
                광고 상담 받기
              </Link>
            </div>
          </div>
          <figure
            className={`${s.heroPic} ${s.ph} ${hero.image.fit === "contain" ? s.contain : ""} ${hero.front ? s.layered : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={hero.front ? s.back : undefined}
              src={hero.image.src}
              alt={hero.image.alt}
              decoding="async"
              fetchPriority="high"
            />
            {hero.front && (
              <span className={s.front}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={hero.front.src} alt={hero.front.alt} decoding="async" />
              </span>
            )}
          </figure>
        </section>

        {/* 2. 이런 회사에 맞습니다: 왼쪽 제목, 오른쪽에 맞는 경우와 다른 매체가 나은 경우를 위아래로 */}
        <section className={`${s.sec} ${s.grid}`} aria-labelledby="h-suits">
          <div className={s.suitsHead}>
            <Title id="h-suits" text={suits.title} />
            {suits.lede && (
              <p className={`${s.lede} ${h.rise}`} data-reveal="">
                {keepDots(suits.lede)}
              </p>
            )}
          </div>
          <div className={s.suitsBody}>
            <div className={`${s.good} ${h.rise}`} data-reveal="">
              <h3>맞는 경우</h3>
              <ul className={s.list}>
                {suits.good.map((t) => (
                  <li key={t}>{keepDots(t)}</li>
                ))}
              </ul>
            </div>
            <div className={`${s.better} ${h.rise}`} data-reveal="">
              <h3>다른 매체가 나은 경우</h3>
              <ul className={s.list}>
                {suits.better.map((t) => (
                  <li key={t}>{keepDots(t)}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. 저희 부서가 하는 일: 번호 대신 계단. 뒤 단계일수록 높고 밝다 */}
        <section className={s.sec} aria-labelledby="h-work">
          <div className={s.workHead}>
            <Title id="h-work" text={work.title} />
            {work.lede && (
              <p className={`${s.lede} ${h.rise}`} data-reveal="">
                {keepDots(work.lede)}
              </p>
            )}
          </div>
          <ol className={s.stairs} style={{ "--n": work.steps.length } as CSSProperties}>
            {work.steps.map((st, i) => (
              <li key={st.name} className={`${s.step} ${h.rise}`} data-reveal="" style={{ "--i": i } as CSSProperties}>
                <h3>{st.name}</h3>
                <p>{keepDots(st.desc)}</p>
              </li>
            ))}
          </ol>
          {work.note && (
            <div className={`${s.grid} ${s.note}`}>
              <h3 className={h.rise} data-reveal="">
                {work.note.title}
              </h3>
              <p className={h.rise} data-reveal="">
                {rich(work.note.body)}
              </p>
            </div>
          )}
          {work.hospital && (
            <div className={`${s.grid} ${s.note}`}>
              <p className={`${s.hospital} ${h.rise}`} data-reveal="">
                {keepDots(work.hospital)}
              </p>
            </div>
          )}
        </section>

        {/* 4. 다른 매체와 이렇게 이어집니다: 어두운 띠 위에 가로 막대 */}
        <section className={`${s.band} ${s.dark}`} aria-labelledby="h-links">
          <Title id="h-links" text={links.title} />
          <div className={s.rows}>
            {links.items.map((it) => (
              <div key={it.name} className={`${s.row} ${h.rise}`} data-reveal="">
                <h3>{it.name}</h3>
                <p>{keepDots(it.desc)}</p>
                {it.hrefs && (
                  <div className={s.go}>
                    {it.hrefs.map((href) => (
                      <Link key={href} href={href} aria-label={`${labelOf(href)} 페이지로 가기`}>
                        {labelOf(href)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 5. 일한 기록: 업종을 크게. 영상 칸만 있는 매체는 세로 사진 띠 */}
        <section className={s.sec} aria-labelledby="h-records">
          <div className={s.recHead}>
            <Title id="h-records" text={records.title} />
            <p className={`${s.lede} ${h.rise}`} data-reveal="">
              {keepDots(records.lede)}
            </p>
          </div>
          {records.items && (
            <div className={s.recs}>
              {records.items.map((r) => (
                <article key={r.href} className={`${s.rec} ${h.rise}`} data-reveal="">
                  <h3>{r.industry}</h3>
                  <p className={s.what}>{keepDots(r.work)}</p>
                  {r.figure && <p className={`${s.fig} ${h.num}`}>{keepDots(r.figure)}</p>}
                  <Link href={r.href} aria-label={`${r.industry} 기록 보기`}>
                    기록 보기
                  </Link>
                </article>
              ))}
            </div>
          )}
          {records.done && (
            <ul className={s.done}>
              {records.done.map((t) => (
                <li key={t} className={h.rise} data-reveal="">
                  {keepDots(t)}
                </li>
              ))}
            </ul>
          )}
          {records.stills && (
            <div className={`${s.reel} ${records.stillsWide ? s.wide : ""}`}>
              {records.stills.map((p) => (
                <figure key={p.src} className={`${s.ph} ${h.shutter}`} data-reveal="">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          )}
        </section>

        {/* 6. 받는 것: 회색 띠, 지표는 흰 칸에 이름과 뜻 */}
        <section className={`${s.band} ${s.grey} ${s.grid}`} aria-labelledby="h-receive">
          <div className={s.receiveHead}>
            <Title id="h-receive" text={receive.title} />
          </div>
          <div className={s.receiveBody}>
            <dl className={s.metrics}>
              {receive.metrics.map((m) => (
                <div key={m.name} className={`${s.metric} ${h.rise}`} data-reveal="">
                  <dt>{m.name}</dt>
                  <dd>{keepDots(m.desc)}</dd>
                </div>
              ))}
            </dl>
            <p className={`${s.aside} ${h.rise}`} data-reveal="">
              {rich(receive.aside)}
            </p>
          </div>
        </section>

        {/* 7. 자주 묻는 질문: name="faq"로 한 번에 하나만 열린다 */}
        <section className={`${s.sec} ${s.grid}`} aria-labelledby="h-faq">
          <div className={s.faqHead}>
            <Title id="h-faq" text="자주 묻는 질문" />
          </div>
          <div className={s.faq}>
            {faq.map((f, i) => (
              <details key={f.q} name="faq" open={i === 0}>
                <summary>
                  <span>{f.q}</span>
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{rich(f.a)}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 8. 상담: 홈과 같은 폼. source로 페이지별 문의를 가른다 */}
        <section className={s.contact} id="contact" aria-labelledby="h-contact">
          <Title id="h-contact" text={contact.title} />
          <p className={`${s.contactLede} ${h.rise}`} data-reveal="">
            {keepDots(contact.lede)}
          </p>
          <HomeContactForm source={data.source} />
        </section>

        <HomeReveal />
      </main>
      <Footer />
    </>
  )
}
