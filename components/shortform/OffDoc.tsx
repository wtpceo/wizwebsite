import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { DocShell, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, Nums, vars } from "./parts"
import { Icon } from "./icons"
import { WORKS } from "./Works"
import { TimeBox, SampleBox, NotFit, Reads } from "./DocMore"

/**
 * /services/offline — 오프라인 미디어 상세. 2026-11-08 카피 세션 안(docs/카피개선-오프라인-2026-11-08.md)으로 새로 짬.
 * 대표 논리: 생활 동선에서 반복 노출 → 본 사람은 나중에 검색 → 그때 지도·블로그·홈페이지가 받아야 광고가 끝난다 → 측정할 수 없는 것은 측정한다고 쓰지 않는다.
 * 기본값(대표 확인 전): 브랜드 검색량 줄 없음, 배달앱 운영 관리는 자리 그대로. 화면 문법은 바이럴 쪽과 같음.
 */

/** 걸고 나서 생기는 일 [이름, 한 줄, 아이콘] — 셋째(받습니다)가 저희가 같이 맞추는 자리 */
const AFTER: [string, string, "off" | "search" | "phone"][] = [
  ["봅니다", "택배차 옆면, 극장 스크린, 택시 뒷좌석 화면", "off"],
  ["나중에 찾습니다", "브랜드 이름이나 「동네+업종」을 검색", "search"],
  ["받습니다", "지도 정보·후기·홈페이지를 보고 문의", "phone"],
]

/** 오프라인만 걸 때 / 온라인과 이어서 걸 때 — 왼쪽 칸은 조건으로만 */
const VS: [string, string, string][] = [
  ["본 사람이 검색하면", "지도·블로그가 비어 있거나 옛 정보", "걸기 전에 지도 정보·후기·홈페이지를 맞춰 둠"],
  ["광고 영상", "매체 규격에 맞춘 기본 시안", "촬영팀이 온라인 광고 소재와 같은 장면으로 제작"],
  ["보고", "송출 사진", "송출·부착 사진과 광고 기간의 문의 기록"],
]

/** 측정할 수 있는 것 / 없는 것 */
const MEASURE: [string, string, boolean][] = [
  ["택배차량·극장", "우리 광고만 본 사람 수는 따로 셀 수 없습니다. 송출·부착 사진과 광고 기간의 문의 기록으로 보고합니다.", false],
  ["카카오T", "화면이 있는 매체라 노출·클릭 수를 그대로 드립니다.", true],
  ["매체사 공개 숫자", "저희 성과가 아니라서 가져다 쓰지 않습니다.", false],
]

/** 왼쪽 정렬 칸: 머리말 → 두 줄 제목(둘째 줄 파랑) → 부제 → 보조 자료. 인플루언서 쪽 CSec과 같은 문법 */
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

export default function OffDoc() {
  const s = SERVICES.find((x) => x.k === "off")!
  const d = DETAILS.off
  const m = MORE.off
  const w = WORKS.off
  const faq = d.faq
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
        name: "오프라인 광고 대행",
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
      faqLd(faq),
    ],
  }

  return (
    <DocShell>
      <div className="gx ix vx ox">
        <JsonLd data={ld} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="오프라인 광고 소개">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall={s.slug} />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="오프라인 광고 대행: 길에서 본 광고, 검색에서 마무리합니다">
              <small className="ix-kw">오프라인 광고 대행</small>{" "}
              <Chars text={"길에서 본 광고,\n검색에서 마무리합니다"} mark="검색에서" />
            </h1>
            <p className="vx-era">온라인 광고가 닿지 않는 동선</p>
            <p className="dp-lead">
              택배차량·극장·카카오T로 고객이 매일 지나는 자리에 반복해서 보이게 합니다.
              <br />
              광고를 본 사람이 브랜드를 검색했을 때 지도와 블로그, 홈페이지가 받도록 온라인 쪽을 같이 맞춥니다.
            </p>
            <p className="vx-first">
              <span>접근 방식</span>
              {s.first}
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                우리 매장 반경 매체 무료 상담
              </a>
              <a className="p2 vx-tel" href="tel:16700704" data-tel>
                대표전화 1670-0704
              </a>
            </div>
            <p className="vx-trust">자체 촬영팀 시안 제작 · 송출·부착 사진 리포트 · <span className="nw">전담 AE가 온라인과 같이 봄</span></p>
          </div>
          <a className="ix-cue" href="#after" aria-label="걸고 나서 생기는 일로 내려가기">
            <span>걸고 나서 생기는 일</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 걸고 나서 생기는 일(어두운 바탕): 세 칸 흐름 + 비교표 */}
        <div className="ix-dark">
          <CSec
            id="after"
            eb="오프라인 광고만 걸 때"
            tone="k"
            cls="ix-fit vx-order ox-after"
            q={
              <>
                광고를 본 사람은 그 자리에서 사지 않고,{" "}
                <br />
                <span>나중에 검색합니다</span>
              </>
            }
          >
            <ol className="geo-twice vx-steps" aria-label="오프라인 광고를 본 고객의 세 걸음">
              {AFTER.map(([t, x, k], i) => (
                <li key={t} className={i === 2 ? "on" : undefined} style={vars({ i })}>
                  <span className="ic">
                    <Icon k={k} />
                  </span>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <span className="tx">{x}</span>
                </li>
              ))}
            </ol>
            <div className="px-vs-t vx-vs ox-vs" role="table" aria-label="오프라인만 걸 때와 온라인과 이어서 걸 때">
              <div className="px-vs-h" role="row">
                <span role="columnheader" aria-label="구분" />
                <span role="columnheader">오프라인만 걸 때</span>
                <span role="columnheader" className="us">
                  온라인과 이어서 걸 때
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

        {/* ④ 무엇을 하나요(그대로) */}
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

        {/* ⑤ 세부 상품(그대로). 배달앱 운영 관리는 자리 그대로(기본값) */}
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

        {/* ⑦ 자체 팀이 만들고 직접 잡으면(그대로) */}
        <CSec id="diff" eb="자체 팀이 직접" q={d.q3}>
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

        {/* ⑧ 진행 순서·리포트(그대로) + 리포트 견본 */}
        <CSec
          id="process"
          eb="진행 순서"
          tone="mist"
          q={
            <>
              매체 고르기부터 종료 리포트까지,{" "}
              <br />
              <span>네 단계</span>
            </>
          }
        >
          <ol className="ix-steps2 vx-steps2" aria-label="진행 네 단계">
            {d.process.map(([t, x], i) => (
              <li key={t} className={i === 0 ? "on" : undefined} style={vars({ i })}>
                <span className="ic" aria-hidden="true">
                  <Icon k={(["plan", "content", "off", "perf"] as const)[i] ?? "plan"} />
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

        {/* ⑨ 측정할 수 있는 것, 없는 것(새 칸): FAQ 두 개의 내용을 칸으로 올림. FAQ는 그대로 */}
        <CSec
          id="measure"
          eb="리포트"
          q={
            <>
              측정할 수 없는 숫자는{" "}
              <br />
              <span>쓰지 않습니다</span>
            </>
          }
          sub="택배차량·극장 광고는 우리 광고만 본 사람 수를 따로 셀 수 없습니다. 그래서 송출·부착 사진과 광고 기간의 문의 기록으로 보고하고, 카카오T처럼 화면이 있는 매체는 노출·클릭 수를 그대로 드립니다. 매체사가 공개한 숫자는 저희 성과가 아니라서 가져다 쓰지 않습니다."
        >
          <ul className="ox-measure">
            {MEASURE.map(([t, x, ok], i) => (
              <li key={t} className={ok ? "ok" : undefined} style={vars({ i })}>
                <em>{ok ? "그대로 드림" : "숫자로 쓰지 않음"}</em>
                <b>{t}</b>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </CSec>

        {/* ⑩ 같이 하면 좋은 서비스(리드·검색 쪽 문구 고침) */}
        <CSec id="pairs" eb="같이 하면" tone="mist" q={`${s.n}와 같이 하면 좋은 서비스는 무엇인가요?`} sub={d.pairsLead}>
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

        {/* ⑪ FAQ(다섯 개 + 하나) */}
        <CSec id="faq" eb="자주 묻는 질문" q={`${s.n} 자주 묻는 질문`}>
          <div className="geo-faq">
            <Faq items={faq} />
          </div>
          {m.reads ? <Reads items={m.reads} /> : null}
        </CSec>

        {/* ⑫ 문의 */}
        <ContactBlock title={d.ct?.title ?? `${s.n}, 진단 신청부터 시작하세요.`} sub={d.ct?.sub} label={d.ct?.label} initial={[s.k]} source={`service_${s.slug}`} />
      </div>
    </DocShell>
  )
}
