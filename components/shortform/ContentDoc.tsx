import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { DocShell, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, Nums, vars } from "./parts"
import { Icon } from "./icons"
import { WORKS } from "./Works"
import { NotFit, Reads } from "./DocMore"

/**
 * /services/content — 콘텐츠 프로덕션 상세. 2026-11-08 카피 세션 안(docs/카피개선-콘텐츠-2026-11-08.md)으로 새로 짬.
 * 퍼포먼스 쪽과 같은 줄기: 퍼포먼스는 소재 싸움 → 찍는 팀이 반응 올 장면을 알고 찍어야 → 퍼포먼스팀이 촬영 회의부터 → 저희 촬영은 납품 날이 아니라 광고 반응을 보고 끝남.
 * 화면 문법은 인플루언서·바이럴 쪽(.gx.ix)과 같음. 장면 수·비율은 노하우 비공개라 쓰지 않음.
 */

/** 외주로 찍을 때 / 저희가 찍을 때 — 왼쪽 칸은 특정 회사를 가리키지 않게 조건으로만 */
const VS: [string, string, string][] = [
  ["무엇을 찍을지", "브리프를 보고 감독이 정함", "광고를 돌릴 퍼포먼스팀이 반응 올 장면을 먼저 정함"],
  ["반응이 떨어지면", "새 견적과 새 일정", "반응을 보고 다음 촬영을 다시 짬"],
  ["찍은 소스", "납품한 영상 한 편", "광고·블로그·지도·홈페이지에 쓸 장면을 미리 나눠 찍음"],
  ["끝난 뒤", "납품으로 끝", "조회수와 광고 반응을 같이 봄"],
]

/** 촬영 장면 목록 예시 [장면, 그림, 쓸 곳들] — 사진은 저희 촬영 예시 컷 */
const SCENES: [string, string, string[]][] = [
  ["장면 A · 제품 클로즈업", "/sf/ex/beauty-flat.jpg", ["광고 소재", "홈페이지 메인"]],
  ["장면 B · 매장 안 자리", "/sf/ex/cafe.jpg", ["지도 대표 사진", "블로그 가이드"]],
  ["장면 C · 제품을 다루는 장면", "/sf/ex/shootcos.jpg", ["릴스·쇼츠", "광고 소재"]],
  ["장면 D · 대표 메뉴", "/sf/pf/w3.jpg", ["지도 메뉴 사진", "홈페이지 메뉴 안내"]],
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

export default function ContentDoc() {
  const s = SERVICES.find((x) => x.k === "content")!
  const d = DETAILS.content
  const m = MORE.content
  const w = WORKS.content
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
        name: "콘텐츠 제작 대행",
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
      <div className="gx ix vx cx">
        <JsonLd data={ld} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="콘텐츠 제작 소개">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall={s.slug} />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="콘텐츠 제작 대행: 저희 촬영은 납품에서 끝나지 않습니다">
              <small className="ix-kw">콘텐츠 제작 대행</small>{" "}
              <Chars text={"저희 촬영은\n납품에서 끝나지 않습니다"} mark="끝나지 않습니다" />
            </h1>
            <p className="vx-era">광고 소재는 금방 닳습니다</p>
            <p className="dp-lead">
              어떤 장면에 반응이 오는지 퍼포먼스팀이 먼저 알려 주고, 자체 촬영팀이 그 장면을 찍습니다.
              <br />
              광고 반응을 보고 <span className="nw">다음 촬영을 다시 짭니다.</span>
            </p>
            <p className="vx-first">
              <span>접근 방식</span>
              촬영 날짜를 잡기 전에, 그날 찍은 장면을 어디에 쓸지부터 정합니다.
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                지금 쓰는 소재 무료 점검
              </a>
              <a className="p2 vx-tel" href="tel:16700704" data-tel>
                대표전화 1670-0704
              </a>
            </div>
            <p className="vx-trust">자체 촬영팀 · 퍼포먼스팀 촬영 회의 참여 · <span className="nw">숏폼 360편 넘게 · 전담 AE</span></p>
          </div>
          <a className="ix-cue" href="#outsourced" aria-label="외주 촬영과 다른 점으로 내려가기">
            <span>외주 촬영과 다른 점</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 외주로 찍을 때(어두운 바탕): 비교표 */}
        <div className="ix-dark">
          <CSec
            id="outsourced"
            eb="외주로 찍을 때"
            tone="k"
            cls="ix-fit cx-out"
            q={
              <>
                외주 촬영은 납품 날 끝나고,{" "}
                <br />
                <span>광고는 그날 시작합니다</span>
              </>
            }
            sub="광고 성과는 소재를 올린 다음부터 보입니다. 저희는 그 숫자를 보는 퍼포먼스팀과 찍는 촬영팀이 같은 회사에 있어서, 반응을 보고 다음 촬영을 바로 고칩니다."
          >
            <div className="px-vs-t vx-vs" role="table" aria-label="외주로 찍을 때와 저희가 찍을 때">
              <div className="px-vs-h" role="row">
                <span role="columnheader" aria-label="구분" />
                <span role="columnheader">외주로 찍을 때</span>
                <span role="columnheader" className="us">
                  저희가 찍을 때
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
        </div>

        {/* ③ 한 번 찍는 날: 장면 목록 예시 보드 */}
        <CSec
          id="shotlist"
          eb="촬영 장면 목록"
          q={
            <>
              촬영하는 날,{" "}
              <br />
              <span>
                <span className="nw">쓸 곳을</span> 다 정해 갑니다
              </span>
            </>
          }
          sub="촬영 전에 장면 목록을 만들고, 장면마다 어디에 쓸지 적어 갑니다. 그래서 하루 촬영으로 광고 소재 여러 버전과 지도 대표 사진, 블로그·체험단 가이드 사진, 홈페이지 사진까지 나옵니다."
        >
          <div className="cx-board" aria-label="촬영 장면 목록 예시">
            <div className="cx-board-h">
              <span>촬영 장면 목록</span>
              <em>예시</em>
            </div>
            <ol>
              {SCENES.map(([t, img, uses], i) => (
                <li key={t} style={vars({ i })}>
                  <figure>
                    <img src={img} alt={`${t} 예시 컷`} loading="lazy" width={640} height={480} />
                  </figure>
                  <b>{t}</b>
                  <span className="cx-arrow" aria-hidden="true">
                    →
                  </span>
                  <ul aria-label="쓸 곳">
                    {uses.map((u) => (
                      <li key={u}>{u}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </CSec>

        {/* ④ 무엇을 하나요(첫 문단만 고침) */}
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

        {/* ⑥ 자체 팀이 촬영하면(둘째 항목 첫 문장 고침, 퍼포먼스 쪽 소재 칸과 같은 말) */}
        <CSec id="diff" eb="자체 촬영팀" tone="mist" q={d.q3}>
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

        {/* ⑦ 브랜드 채널과 인플루언서(새 칸) */}
        <CSec
          id="channel"
          eb="브랜드 채널과 인플루언서"
          q={
            <>
              브랜드 채널 숏폼과 인플루언서 영상을{" "}
              <br />
              <span>한 설계로 찍습니다</span>
            </>
          }
          sub="브랜드 채널에 올릴 숏폼과 인플루언서가 올릴 영상을 따로 기획하지 않습니다. 같은 장면 목록에서 나누고, 반응 좋은 영상은 2차 활용 계약을 거쳐 광고 소재로 다시 씁니다."
        >
          <p className="vx-more">
            <Link href="/services/influencer">한 번 찍은 콘텐츠가 쉬지 않고 일하는 방식</Link> 보기 →
          </p>
        </CSec>

        {/* ⑧ 진행 순서·리포트(그대로) */}
        <CSec
          id="process"
          eb="진행 순서"
          tone="mist"
          q={
            <>
              장면 목록부터 게시·리포트까지,{" "}
              <br />
              <span>네 단계</span>
            </>
          }
        >
          <ol className="ix-steps2 vx-steps2" aria-label="진행 네 단계">
            {d.process.map(([t, x], i) => (
              <li key={t} className={i === 0 ? "on" : undefined} style={vars({ i })}>
                <span className="ic" aria-hidden="true">
                  <Icon k={(["plan", "content", "infl", "perf"] as const)[i] ?? "plan"} />
                </span>
                <em>{String(i + 1).padStart(2, "0")}</em>
                <b>{t}</b>
                <span className="tx">{x}</span>
              </li>
            ))}
          </ol>
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
        </CSec>

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
