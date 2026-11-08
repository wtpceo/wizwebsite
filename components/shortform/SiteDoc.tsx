import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { DocShell, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, Nums, vars } from "./parts"
import { Icon } from "./icons"
import { WORKS } from "./Works"
import { CaseBox, TimeBox, SampleBox, NotFit, Reads } from "./DocMore"

/**
 * /services/homepage — 웹사이트 구축 상세. 2026-11-08 카피 세션 안(docs/카피개선-웹사이트-2026-11-08.md)으로 새로 짬.
 * 대표 논리: 광고를 누른 사람도 AI 답변 링크를 누른 사람도 결국 홈페이지에 닿는다 → 마지막 설득은 홈페이지 → 손님이 둘(사람과 AI).
 * 퍼포먼스팀의 설계 참여는 대표 확인 전이라 뺌(카피 세션 기본값). 화면 문법은 인플루언서·바이럴·콘텐츠와 같음.
 */

/** 손님 둘 [누구, 아이콘, 필요한 것] */
const GUESTS: [string, "person" | "search", string[]][] = [
  ["사람에게 필요한 것", "person", ["첫 화면에서 무엇을 하는 곳인지", "가격과 위치", "헤매지 않고 닿는 문의 버튼"]],
  ["AI에게 필요한 것", "search", ["글자로 된 전화·주소·가격", "페이지마다 다른 제목과 설명", "고객 질문에 답하는 글", "구조화 데이터"]],
]

/** 따로 맡길 때 / 이어서 할 때 — 왼쪽 칸은 특정 회사를 가리키지 않게 조건으로만 */
const VS: [string, string, string][] = [
  ["광고 받을 페이지", "광고를 시작하고 나서 따로 붙임", "설계 때 광고가 보낼 페이지를 같이 만듦"],
  ["지도 정보", "홈페이지와 지도 앱 표기가 따로 놂", "주소·전화·영업시간을 같은 표기로 맞춤"],
  ["오픈 뒤", "오픈으로 끝", "문의와 AI 인용을 다시 잼"],
  ["고칠 때", "요청하고 견적을 기다림", "월간 유지관리로 바로 반영"],
]

/** 왼쪽 정렬 칸(인플루언서 쪽 CSec과 같은 문법) */
function CSec({ id, eb, q, sub, children, tone, cls }: { id?: string; eb: string; q: ReactNode; sub?: ReactNode; children?: ReactNode; tone?: "mist" | "k"; cls?: string }) {
  return (
    <section className={`dp-sec geo-sec rv${tone ? ` geo-sec-${tone}` : ""}${cls ? ` ${cls}` : ""}`} id={id}>
      <div className="dp-w">
        <p className="geo-eb">{eb}</p>
        <h2>{q}</h2>
        {sub ? <p className="geo-lead">{sub}</p> : null}
        {children}
      </div>
    </section>
  )
}

export default function SiteDoc() {
  const s = SERVICES.find((x) => x.k === "home")!
  const d = DETAILS.home
  const m = MORE.home
  const w = WORKS.home
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
        name: "홈페이지 제작 대행",
        serviceType: s.n,
        description: d.desc,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "대한민국" },
        url: `${SITE}/services/${s.slug}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${s.n} 세부 상품`,
          itemListElement: s.items.map(([n, t]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n, description: d.itemNotes?.[n] || t } })),
        },
      },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }

  return (
    <DocShell>
      <div className="gx ix vx cx hx">
        <JsonLd data={ld} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="홈페이지 제작 소개">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall={s.slug} />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="홈페이지 제작 대행: 마지막 설득은 홈페이지가 합니다">
              <small className="ix-kw">홈페이지 제작 대행</small>{" "}
              <Chars text={"마지막 설득은\n홈페이지가 합니다"} mark="홈페이지가" />
            </h1>
            <p className="vx-era">광고가 데려오고, AI가 소개한 다음</p>
            <p className="dp-lead">
              광고를 누른 사람도, AI 답변의 링크를 누른 사람도 결국 홈페이지에 닿습니다.
              <br />
              그래서 AI 답변을 재는 GEO팀이 설계부터 같이 봅니다.
            </p>
            <p className="vx-first">
              <span>접근 방식</span>
              {s.first}
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                지금 홈페이지 무료 점검
              </a>
              <a className="p2 vx-tel" href="tel:16700704" data-tel>
                대표전화 1670-0704
              </a>
            </div>
            <p className="vx-trust">홈페이지 30곳 넘게 · GEO팀 설계 참여 · <span className="nw">고객사가 직접 고치는 관리 화면</span> · <span className="nw">옛 주소 검색 기록 연결</span></p>
          </div>
          <a className="ix-cue" href="#guests" aria-label="홈페이지를 읽는 쪽으로 내려가기">
            <span>홈페이지를 읽는 쪽</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 손님이 둘(어두운 바탕): 사람 / AI 두 칸 */}
        <div className="ix-dark">
          <CSec
            id="guests"
            eb="홈페이지를 읽는 쪽"
            tone="k"
            cls="ix-fit hx-guests"
            q={
              <>
                홈페이지 손님은 둘입니다.{" "}
                <br />
                <span>사람과 AI</span>
              </>
            }
          >
            <div className="hx-two">
              {GUESTS.map(([t, ic, items], i) => (
                <div key={t} className={i === 1 ? "hx-g ai" : "hx-g"} style={vars({ i })}>
                  <span className="ic" aria-hidden="true">
                    <Icon k={ic} />
                  </span>
                  <b>{t}</b>
                  <ul>
                    {items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="vx-leak">사람만 보고 만들면 AI가 우리 번호를 답하지 못하고, AI만 보고 만들면 사람이 문의 버튼 앞에서 나갑니다. 두 쪽을 처음 설계에 같이 넣습니다.</p>
          </CSec>
        </div>

        {/* ③ 따로 맡길 때: 비교표 */}
        <CSec
          id="apart"
          eb="따로 맡길 때"
          q={
            <>
              홈페이지 일은{" "}
              <br />
              <span>오픈한 다음부터입니다</span>
            </>
          }
          sub="홈페이지는 광고와 검색이 데려온 사람을 받는 곳입니다. 만든 곳과 광고하는 곳이 다르면 오픈한 날 일이 끝나기 쉽습니다."
        >
          <div className="px-vs-t vx-vs" role="table" aria-label="따로 맡길 때와 이어서 할 때">
            <div className="px-vs-h" role="row">
              <span role="columnheader" aria-label="구분" />
              <span role="columnheader">따로 맡길 때</span>
              <span role="columnheader" className="us">
                이어서 할 때
              </span>
            </div>
            {VS.map(([k, a, b]) => (
              <div className="px-vs-r" role="row" key={k}>
                <b role="rowheader">{k}</b>
                <span role="cell">{a}</span>
                <span role="cell" className="us">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </CSec>

        {/* ④ 무엇을 하나요(그대로): 「전화번호와 가격이 그림 속에만 있으면 AI가 읽지 못합니다」가 이 쪽의 근거 */}
        <CSec id="what" eb="하는 일" tone="mist" q={d.q1}>
          <ol className="vx-what">
            {d.overview.map((p, i) => (
              <li key={p} style={vars({ i })}>
                <em>{String(i + 1).padStart(2, "0")}</em>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </CSec>

        {/* ⑤ 세부 상품(그대로) + 실제 결과물 */}
        <CSec id="items" eb="세부 상품" q={`${s.n}에는 어떤 상품이 있나요?`} sub={d.itemsLead}>
          <ul className="vx-items">
            {s.items.map(([n, t], i) => (
              <li key={n} style={vars({ i })}>
                <b>{n}</b>
                <span>{d.itemNotes?.[n] || t}</span>
              </li>
            ))}
          </ul>
          {w ? (
            <>
              <p className="vx-sub-h">{w.q || "실제로 어떤 결과물이 나오나요?"}</p>
              <p className="vx-sub-p">{w.lead}</p>
              <ul className="dp-works">
                {w.items.map((it, i) => {
                  if ("tiles" in it) {
                    return (
                      <li key={i} className="wk-tl" style={vars({ n: i })}>
                        <div className="wk-dk" data-tiles={it.tiles} data-pick={it.pick} aria-hidden="true" />
                        <span>{it.cap}</span>
                      </li>
                    )
                  }
                  if ("video" in it) {
                    return (
                      <li key={i} className="wk-v" style={vars({ n: i })}>
                        <video data-src={it.video} poster={it.poster} muted loop playsInline preload="none" aria-label={it.cap} />
                        <span>{it.cap}</span>
                      </li>
                    )
                  }
                  return (
                    <li key={i} className={it.wide ? "wk-w" : it.tall ? "wk-tall" : it.reel ? "wk-r" : it.img.startsWith("/sf/pf/") ? "wk-p" : undefined} style={vars({ n: i })}>
                      <img src={it.img} alt={it.cap} width={it.w} height={it.h} loading="lazy" decoding="async" />
                      <span>{it.cap}</span>
                    </li>
                  )
                })}
              </ul>
            </>
          ) : null}
        </CSec>

        {/* ⑥ 검색 팀이 만들면(그대로, 질문 확대는 대표 확인 뒤) */}
        <CSec id="diff" eb="검색 팀과 같이" tone="mist" q={d.q3}>
          <ol className="vx-diff">
            {d.diff.map(([t, x], i) => (
              <li key={t} style={vars({ i })}>
                <em>{String(i + 1).padStart(2, "0")}</em>
                <b>{t}</b>
                <span>{x}</span>
              </li>
            ))}
          </ol>
        </CSec>

        {/* ⑧ 진행 순서·리포트(그대로) */}
        <CSec
          id="process"
          eb="진행 순서"
          tone="mist"
          q={
            <>
              기획부터 오픈 점검까지,{" "}
              <br />
              <span>네 단계</span>
            </>
          }
        >
          <ol className="ix-steps2 vx-steps2" aria-label="진행 네 단계">
            {d.process.map(([t, x], i) => (
              <li key={t} className={i === 0 ? "on" : undefined} style={vars({ i })}>
                <span className="ic" aria-hidden="true">
                  <Icon k={(["plan", "content", "home", "search"] as const)[i] ?? "plan"} />
                </span>
                <em>{String(i + 1).padStart(2, "0")}</em>
                <b>{t}</b>
                <span className="tx">{x}</span>
              </li>
            ))}
          </ol>
          {m.time ? <TimeBox t={m.time} /> : null}
          <div className="vx-rep">
            <div>
              <h3>리포트 항목</h3>
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
              <Ex>예시 화면 · 고객사명 가림</Ex>
            </div>
          </div>
          {m.sample ? <SampleBox s={m.sample} /> : null}
        </CSec>

        {/* ⑧ 사례(그대로): 167쪽 치과. 「두 사이트를 견준 결과라 일반 법칙으로 말하지 않는다」 주석까지 */}
        {m.case ? (
          <CSec id="cases" eb="사례" q="맡은 홈페이지가 AI 답에 나온 기록">
            <CaseBox c={m.case} down={m.down} recs={[]} recNote={d.recNote} />
          </CSec>
        ) : null}

        {/* ⑨ 같이 하면(그대로) */}
        <CSec id="pairs" eb="같이 하면" q={`${s.n}과 같이 하면 좋은 서비스는 무엇인가요?`} sub={d.pairsLead}>
          <ul className="dp-pairs vx-pairs">
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
        </CSec>

        <NotFit items={m.notFit} />

        {/* ⑩ FAQ(그대로) */}
        <CSec id="faq" eb="자주 묻는 질문" tone="mist" q={`${s.n} 자주 묻는 질문`}>
          <div className="geo-faq">
            <Faq items={d.faq} />
          </div>
          {m.reads ? <Reads items={m.reads} /> : null}
        </CSec>

        {/* ⑪ 문의 */}
        <ContactBlock title={d.ct?.title ?? `${s.n}, 진단 신청부터 시작하세요.`} sub={d.ct?.sub} label={d.ct?.label} initial={[s.k]} source={`service_${s.slug}`} />
      </div>
    </DocShell>
  )
}
