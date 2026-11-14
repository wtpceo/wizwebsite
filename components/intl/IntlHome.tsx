import Script from "next/script"
import Link from "next/link"
import { Icon } from "@/components/shortform/icons"
import { vars } from "@/components/shortform/parts"
import HeroCards from "@/components/shortform/HeroCards"
import { EN_INSIGHTS } from "@/lib/en/insights"
import { INTL_HOME, type IntlLocale } from "@/lib/intl/home"
import IntlContactForm from "./IntlContactForm"
import { IntlHeader, IntlMenu, IntlFooter, IntlDock, intlNav } from "./IntlChrome"
import "@/components/shortform/sf-hero.css"
import "@/components/shortform/sf.css"
import "@/components/shortform/sf-doc.css"

// 외국어 홈(/en, /zh, /vi) — 11-14 대표 「외국어 페이지도 완벽하게 업데이트」(대상: 전부 기업, 범위: 디자인 + 내용).
// 국문 홈(HomeDoc)과 같은 구간·같은 클래스로 그려서 디자인을 함께 쓴다. 다른 점:
//  - 큰 제목은 글자 모션 대신 정지 제목(언어마다 글자 폭이 달라 모션 무대가 맞지 않는다). 가장자리 인플루언서 카드는 같다
//  - 서비스 카드는 국문 상세 쪽 대신 이 쪽 문의 칸으로 보낸다(외국어 상세 쪽이 없다)
//  - 문의는 이메일 중심 폼, 카카오톡·전화 대신 메일
//  - 국문에 있던 '고객사 법적 분쟁 0건'과 위플루언서(관계사 도구) 표기는 외국어에는 싣지 않는다
//  - 인사이트 구간은 영문 글이 있는 영어에만

const SVC_PHOTO: Record<string, string> = {
  infl: "/sf/home/svc-infl.webp",
  perf: "/sf/home/svc-perf.webp",
  content: "/sf/home/svc-content.webp",
  viral: "/sf/home/svc-viral.webp",
  global: "/sf/home/svc-global.webp",
  search: "/sf/home/svc-search.webp",
  home: "/sf/home/svc-home.webp",
  off: "/sf/home/svc-off.webp",
}
const SVC_BRUSH: Record<string, [string, string]> = {
  infl: ["#2A2D34", "#FFFFFF"],
  perf: ["#C8B4F6", "#0A1A33"],
  search: ["#0055FF", "#FFFFFF"],
  content: ["#FFE27A", "#0A1A33"],
  viral: ["#FFC3D2", "#0A1A33"],
  global: ["#FF9D8A", "#0A1A33"],
  home: ["#BCD2FF", "#0A1A33"],
  off: ["#F6C4D0", "#0A1A33"],
}
const STEP_EN = ["diagnose", "strategy", "execute", "report", "optimize"]
const STEP_LABEL = ["Diagnose", "Strategy", "Execute", "Report", "Optimize"]

/** 박스 안 문장도 마침표에서 줄을 바꾼다(국문 홈과 같게). 중국어 마침표도 */
function Lines({ t }: { t: string }) {
  const parts = t.split(/(?<=[.?!。？！])\s*/).filter(Boolean)
  return (
    <>
      {parts.map((x, i) => (
        <span key={i}>
          {i > 0 ? <br /> : null}
          {x}
        </span>
      ))}
    </>
  )
}

export default function IntlHome({ locale }: { locale: IntlLocale }) {
  const t = INTL_HOME[locale]
  const nav = intlNav(locale, t, true)
  const contactHref = "#contact"

  return (
    <main className="sf sf-doc intl" id="sf" lang={locale === "zh" ? "zh-Hans" : locale}>
      <IntlHeader locale={locale} t={t} nav={nav} />
      <IntlMenu locale={locale} t={t} nav={nav} />
      <div className="gx ix vx cx hm hm2">
        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero hm2-hero hm2-white intl-hero" aria-label={t.hero.kw}>
          <div className="dp-veil" aria-hidden="true" />
          <HeroCards />
          <div className="dp-w geo-hero-in">
            <p className="hk-kw">{t.hero.kw}</p>
            <h1 className="intl-h1">
              <span>{t.hero.h1a}</span> <span className="intl-h1-b">{t.hero.h1b}</span>
            </h1>
            <p className="vx-era">{t.hero.era}</p>
            <p className="dp-lead">
              <span className="hm2-l1">{t.hero.lead1}</span> <br />
              {t.hero.lead2}
            </p>
            <div className="dp-btns">
              <a className="p1" href={contactHref}>
                {t.hero.cta}
              </a>
              <a className="hm-kk intl-mail" href="mailto:wiz@wiztheplanning.com">
                <Icon k="mail" />
                {t.hero.cta2}
              </a>
            </div>
            <ul className="hm2-kpis" aria-label="WizThePlanning">
              {t.kpis.map(([n, d], i) => (
                <li key={n} style={vars({ i })}>
                  <b>{n}</b>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <a className="ix-cue" href="#services" aria-label={t.hero.cue}>
            <span>{t.hero.cue}</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 여덟 가지 인하우스 솔루션 */}
        <section className="dp-sec geo-sec rv hm-svc hm2-svc" id="services">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">{t.services.eb}</p>
                <h2>
                  {t.services.h2a} <br />
                  <span>{t.services.h2b}</span>
                </h2>
              </div>
              <div className="gt-side">
                <p className="geo-lead">{t.services.lead}</p>
                <div className="hm2-funnel-tags" aria-hidden="true">
                  {t.services.funnel.map((f, i) => (
                    <span key={f}>
                      <i>{String(i + 1).padStart(2, "0")}</i> {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ul className="hm2-svc-g">
              {t.services.items.map((s, i) => (
                <li key={s.k} className="rv" style={vars({ i })}>
                  <a href={contactHref} className="hm2-svc-card" style={{ "--brush": SVC_BRUSH[s.k]?.[0], "--brush-ink": SVC_BRUSH[s.k]?.[1] } as React.CSSProperties}>
                    <figure className="tw-fig-stage hm2-fig">
                      <img src={SVC_PHOTO[s.k]} alt="" width={800} height={533} loading="lazy" decoding="async" />
                      <span className="hm2-fig-tag" aria-hidden="true">
                        <i>{String(i + 1).padStart(2, "0")}</i>
                        {(t.services.roles as Record<string, string>)[s.k]}
                      </span>
                    </figure>
                    <div className="hm2-svc-body">
                      <b>{s.n}</b>
                      <p>
                        <Lines t={s.ln} />
                      </p>
                      <ul className="hm2-svc-chips">
                        {s.chips.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                      <span className="hm2-svc-go">
                        {t.services.go} <Icon k="arrow" />
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ③ 인하우스 통합 구조 */}
        <section className="dp-sec geo-sec rv tw-ae hm2-arch hm2-arch-w" id="why">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">{t.arch.eb}</p>
                <h2>
                  {t.arch.h2a} <br />
                  <span>{t.arch.h2b}</span>
                </h2>
              </div>
              <div className="gt-side">
                <p className="geo-lead">{t.arch.lead}</p>
              </div>
            </div>
            <div className="hm2-vs-grid">
              <div className="hm2-vs-bad">
                <div className="hm2-vs-head">
                  <em>FRAGMENTED AGENCIES</em>
                  <b>{t.arch.badHead}</b>
                </div>
                <ul className="hm-chat">
                  {t.arch.pings.map((p, i) => (
                    <li key={p} style={vars({ i })} className={i === t.arch.pings.length - 1 ? "me" : undefined}>
                      <small>{t.arch.speakers[i]}</small>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <ul className="hm2-vs-pts">
                  {t.arch.badPts.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="hm2-vs-good" id="team">
                <div className="hm2-vs-head">
                  <em>WIZ IN-HOUSE SYSTEM</em>
                  <b>{t.arch.goodHead}</b>
                </div>
                <div className="hm2-hub">
                  <div className="hm2-core">
                    <span className="ic" aria-hidden="true">
                      <Icon k="person" />
                    </span>
                    <div>
                      <small>{t.arch.coreSmall}</small>
                      <b>{t.arch.coreB}</b>
                      <span>{t.arch.coreSpan}</span>
                    </div>
                  </div>
                  <div className="hm2-nodes">
                    {t.arch.teams.map(([k, n, jobs], i) => (
                      <a key={n} href="#services" className="hm2-node" style={vars({ i })}>
                        <span className="ic" aria-hidden="true">
                          <Icon k={k} />
                        </span>
                        <span className="hm2-node-tx">
                          <b>{n}</b>
                          <span>{jobs}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <p className="hm2-sign" aria-hidden="true">
                    <b>
                      WizThePlanning<i>.</i>
                    </b>
                  </p>
                  <div className="hm2-tech">
                    <span>{t.arch.techLabel}</span>
                    <b>{t.arch.tech}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ④ 실측 데이터와 리포트 */}
        <section className="dp-sec geo-sec rv hm2-proof" id="proof">
          <div className="dp-w">
            <div className="hm2-proof-g hm2-proof-lay">
              <div className="hm2-proof-l">
                <div className="gt-head">
                  <div>
                    <p className="geo-eb">{t.proof.eb}</p>
                    <h2>
                      {t.proof.h2a} <br />
                      <span>{t.proof.h2b}</span>
                    </h2>
                  </div>
                  <div className="gt-side">
                    <p className="geo-lead">{t.proof.lead}</p>
                    {locale === "en" ? (
                      <p className="hm-more">
                        <Link href="/en/how-we-measure">{t.proof.more} →</Link>
                      </p>
                    ) : null}
                  </div>
                </div>
                <ol className="hm2-proof-rules">
                  {t.proof.rules.map(([rt, rd], i) => (
                    <li key={rt} style={vars({ i })}>
                      <em>{String(i + 1).padStart(2, "0")}</em>
                      <div>
                        <b>{rt}</b>
                        <p>
                          <Lines t={rd} />
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="hm2-proof-vis">
                <figure className="hm2-proof-main">
                  <div className="hm2-proof-bar">
                    <span>
                      <i /> {t.proof.bar}
                    </span>
                    <em>{t.proof.barTag}</em>
                  </div>
                  <img src="/tools/realgeo-client-dashboard.jpg" alt={t.proof.imgAlt} width={730} height={674} loading="lazy" decoding="async" />
                  <div className="hm2-proof-badges intl-badges">
                    {t.proof.badges.map(([s, b]) => (
                      <div key={s}>
                        <small>{s}</small>
                        <b>{b}</b>
                      </div>
                    ))}
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ⑤ 다섯 단계 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-proc tw-proc hm2-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">{t.process.eb}</p>
                <h2>
                  {t.process.h2a} <br />
                  <span>{t.process.h2b}</span>
                </h2>
              </div>
              <p className="geo-lead">{t.process.lead}</p>
            </div>
            <ol className="cw-proc-g">
              {t.process.steps.map(([w, d], i) => (
                <li key={w} style={vars({ i })}>
                  <figure className="tw-step-fig hm2-fig">
                    <img src={`/sf/home/step-${STEP_EN[i]}.webp`} alt="" width={800} height={533} loading="lazy" decoding="async" />
                    <span className="hm2-fig-tag" aria-hidden="true">
                      <i>{String(i + 1).padStart(2, "0")}</i>
                      {STEP_LABEL[i]}
                    </span>
                  </figure>
                  <div>
                    <b>{w}</b>
                    <span>
                      <Lines t={d} />
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ⑥ 인사이트(영어만) */}
        {locale === "en" ? (
          <section className="dp-sec geo-sec rv hm-ins" id="insights">
            <div className="dp-w">
              <div className="gt-head">
                <div>
                  <p className="geo-eb">{t.insights.eb}</p>
                  <h2>
                    {t.insights.h2a} <br />
                    <span>{t.insights.h2b}</span>
                  </h2>
                </div>
                <div className="gt-side">
                  <p className="geo-lead">{t.insights.lead}</p>
                  <p className="hm-more">
                    <Link href="/en/insights">{t.insights.more} →</Link>
                  </p>
                </div>
              </div>
              <ul className="ig-grid">
                {EN_INSIGHTS.slice(0, 3).map((g) => (
                  <li key={g.href} className="rv">
                    <Link href={g.href}>
                      <figure>
                        <img src={g.cover} alt={g.title} width={1200} height={675} loading="lazy" decoding="async" />
                      </figure>
                      <div>
                        <p className="ig-meta">
                          <em>{g.kicker}</em>
                          <span>{g.date}</span>
                        </p>
                        <b>{g.title}</b>
                        <span className="ig-desc">{g.desc}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {/* ⑦ 자주 묻는 질문 */}
        <section className="px-faq rv" aria-labelledby="faq-h">
          <div className="dp-w fq-g">
            <div className="fq-head">
              <h2 id="faq-h">{t.faq.title}</h2>
              <p className="fq-more">{t.faq.note}</p>
            </div>
            <div className="dp-faq">
              {t.faq.items.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ⑧ 문의 */}
        <section className="dp-ct" id="contact" aria-label={t.contact.title}>
          <div className="dp-w dp-ct-in">
            <div>
              <h2>{t.contact.title}</h2>
              <p className="sm">{t.contact.sub}</p>
              <div className="ct-ways">
                <a href="mailto:wiz@wiztheplanning.com">
                  <Icon k="mail" />
                  <b>wiz@wiztheplanning.com</b>
                  <small>{t.contact.emailLabel}</small>
                </a>
                <a href="tel:+8216700704">
                  <Icon k="phone" />
                  <b>+82 1670-0704</b>
                  <small>
                    {t.contact.phoneLabel} · {t.contact.hours}
                  </small>
                </a>
              </div>
            </div>
            <IntlContactForm locale={locale} t={t} source={`${locale}_home`} />
          </div>
        </section>
      </div>
      <IntlFooter locale={locale} t={t} nav={nav} />
      <IntlDock locale={locale} t={t} />
      <script type="application/json" id="sf-data" dangerouslySetInnerHTML={{ __html: "{}" }} />
      <Script src="/sf/sf.js" strategy="afterInteractive" />
    </main>
  )
}
