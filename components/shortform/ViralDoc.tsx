import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { DocShell, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, Nums, vars } from "./parts"
import { Icon } from "./icons"
import { WORKS } from "./Works"
import { CaseBox, SampleBox, NotFit, Reads } from "./DocMore"

/**
 * /services/viral — 바이럴·평판 관리 상세. 2026-11-08 카피 세션 안(docs/카피개선-바이럴-2026-11-08.md)으로 새로 짬.
 * 대표 논리: 광고·인플루언서·AI 답변으로 이름을 본 고객은 브랜드를 다시 검색하고, 첫 화면 글을 읽고 정한다 → 그 첫 화면에 읽을 글을 둔다.
 * GEO 쪽과 나누는 선: GEO는 「왜 두 번째 검색에서 지면 안 되나」와 측정, 여기는 「그 첫 화면을 무엇으로 채우나」(실행).
 * 화면 문법은 인플루언서 쪽(.gx.ix)을 그대로 씀: 숏폼 벽 첫 화면, 왼쪽 정렬, 칸마다 화면에 들어올 때 차례로 등장.
 * 사례·리포트 견본·안 맞는 경우·이어 읽기는 공용 틀(ServiceDoc)에 있던 근거를 그대로 옮김.
 */

/** 고객이 읽는 순서 [이름, 한 줄, 아이콘] — 셋째(읽고 정합니다)가 이 페이지가 맡는 자리 */
const ORDER: [string, string, "infl" | "search" | "viral"][] = [
  ["봅니다", "광고, 인플루언서 영상, AI 답변에서 브랜드 이름을 봅니다", "infl"],
  ["다시 찾습니다", "브랜드 이름이나 「지역+업종」을 네이버·구글에 칩니다", "search"],
  ["읽고 정합니다", "첫 화면의 블로그·기사·후기를 읽고 문의하거나 삽니다", "viral"],
]

/** 글만 따로 살 때 / 이어서 할 때 [구분, 따로, 이어서] — 왼쪽 칸은 특정 회사를 가리키지 않게 조건으로만 */
const VS: [string, string, string][] = [
  ["검색어", "글을 쓰고 나서 붙임", "GEO팀과 지도·AI 검색어를 한 표에 놓고 먼저 정함"],
  ["사진", "블로거가 찍은 것만", "부족하면 촬영팀이 먼저 찍어 둠"],
  ["보고", "게시 주소 목록", "고객이 치는 검색어에서의 위치 캡처"],
  ["올린 뒤", "글로 끝남", "반응 좋은 후기는 지도 리뷰·AI 브리핑의 근거로 이어서 씀"],
]

/** FAQ 하나 더(카피 세션 11-08) */
const FAQ_MORE: [string, string][] = [
  ["블로그 바이럴, 지금도 효과가 있나요?", "고객이 검색해서 글을 읽는 동안은 있습니다. 다만 키워드만 되풀이한 글은 검색에서 빠지기 쉬워서, 운영자가 겪은 일과 고객 질문을 담는 글로 씁니다."],
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

export default function ViralDoc() {
  const s = SERVICES.find((x) => x.k === "viral")!
  const d = DETAILS.viral
  const m = MORE.viral
  const w = WORKS.viral
  const faq = [...d.faq, ...FAQ_MORE]
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
        name: "바이럴 마케팅 대행",
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
      <div className="gx ix vx">
        <JsonLd data={ld} />

        {/* ① 첫 화면: 숏폼 벽 위에 왼쪽 정렬 큰 제목. 키워드 머리말은 H1 안 <small>(인플루언서·퍼포먼스·GEO와 같은 구조) */}
        <section className="dp-hero geo-hero ix-hero" aria-label="바이럴 마케팅 소개">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall={s.slug} />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="바이럴 마케팅 대행: 검색 첫 화면이 두 번째 상세페이지입니다">
              <small className="ix-kw">바이럴 마케팅 대행</small>{" "}
              <Chars text={"검색 첫 화면이\n두 번째 상세페이지입니다"} mark="두 번째" />
            </h1>
            <p className="vx-era">광고를 본 고객이 다음에 하는 일</p>
            <p className="dp-lead">
              광고를 본 고객은 브랜드 이름을 다시 검색해서, 거기 올라온 블로그와 기사를 읽고 정합니다.
              <br />
              그래서 글보다 <span className="nw">고객이 실제로 치는 검색어를</span> 먼저 정하고, 그 첫 화면에 읽을 글을 둡니다.
            </p>
            <p className="vx-first">
              <span>접근 방식</span>
              {s.first}
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                검색 첫 화면 무료 진단
              </a>
              <a className="p2 vx-tel" href="tel:16700704" data-tel>
                대표전화 1670-0704
              </a>
            </div>
            <p className="vx-trust">바이럴팀 · 자체 촬영팀 · 협찬 표시 준수 · <span className="nw">올라간 위치 캡처 리포트</span></p>
          </div>
          <a className="ix-cue" href="#order" aria-label="고객이 읽는 순서로 내려가기">
            <span>고객이 읽는 순서</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 고객이 읽는 순서(어두운 바탕): 봅니다 → 다시 찾습니다 → 읽고 정합니다. 셋째 칸이 이 페이지가 맡는 자리 */}
        <div className="ix-dark">
          <CSec
            id="order"
            eb="고객이 읽는 순서"
            tone="k"
            cls="ix-fit vx-order"
            q={
              <>
                이름은 광고가 알리고,{" "}
                <br />
                <span>결정은 검색 결과에서 합니다</span>
              </>
            }
          >
            <ol className="geo-twice vx-steps" aria-label="고객이 브랜드를 고르는 세 걸음">
              {ORDER.map(([t, x, k], i) => (
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
            <p className="vx-leak">이 첫 화면이 비어 있거나 오래된 글뿐이면, 앞에서 쓴 광고비가 여기서 샙니다.</p>
            <p className="vx-src">
              챗GPT 이용자의 91.4%가 네이버도 함께 씁니다. (전자신문, 아이지에이웍스 모바일인덱스, 2026.10.26){" "}
              <Link href="/services/search#twice">AI 추천 뒤 두 번째 검색 →</Link>
            </p>
          </CSec>
        </div>

        {/* ③ 글만 따로 살 때: 비교표 */}
        <CSec
          id="alone"
          eb="글만 따로 살 때"
          q={
            <>
              제목을 통째로 쳐야 나오는 글은{" "}
              <br />
              <span>성과가 아닙니다</span>
            </>
          }
          sub="바이럴 글을 따로 사서 올리면, 올렸다는 주소만 남는 경우가 많습니다. 저희는 고객이 실제로 치는 검색어에서 몇 번째인지로 봅니다."
        >
          <div className="px-vs-t vx-vs" role="table" aria-label="글만 따로 살 때와 이어서 할 때">
            <div className="px-vs-h" role="row">
              <span role="columnheader" aria-label="구분" />
              <span role="columnheader">글만 따로 살 때</span>
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

        {/* ④ 무엇을 하나요(그대로): 협찬 표시·표시광고법 문단은 꼭 남김 */}
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

        {/* ⑤ 세부 상품(리드만 고침) + 실제 결과물 */}
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

        {/* ⑥ 브랜드 평판(줄임): GEO 쪽 평판 칸과 겹쳐 H2와 첫 두 문장만 두고 GEO로 보냄(카피 세션 기본값) */}
        <CSec
          id="reputation"
          eb="브랜드 평판"
          tone="mist"
          q={
            <>
              나쁜 글을 지우는 대신,{" "}
              <br />
              <span>읽을 글을 먼저 둡니다</span>
            </>
          }
          sub={
            <>
              솔직한 불만은 신고할 대상이 아닙니다. 근거 없는 비방만 사실관계를 정리해 네이버·배민 절차대로 게시중단을 신청하고, 내릴지는 플랫폼이 정합니다.
            </>
          }
        >
          <p className="vx-more">
            <Link href="/services/search#reputation">포털 첫 화면 평판을 AI 답변과 함께 보는 방법</Link> 보기 →
          </p>
        </CSec>

        {/* ⑦ 검색 담당과 같이 하면(그대로) */}
        <CSec id="diff" eb="검색 담당과 같이" q={d.q3}>
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
              검색어 정하기부터 위치 리포트까지,{" "}
              <br />
              <span>네 단계</span>
            </>
          }
        >
          <ol className="ix-steps2 vx-steps2" aria-label="진행 네 단계">
            {d.process.map(([t, x], i) => (
              <li key={t} className={i === 0 ? "on" : undefined} style={vars({ i })}>
                <span className="ic" aria-hidden="true">
                  <Icon k={(["search", "person", "viral", "perf"] as const)[i] ?? "plan"} />
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
          {m.sample ? <SampleBox s={m.sample} /> : null}
        </CSec>

        {/* ⑨ 기록과 사례(그대로): 1위 기록과 함께 2주 뒤 75위 밖으로 내려간 기록을 같이 둠 */}
        {m.case ? (
          <CSec id="cases" eb="기록과 사례" q="맡은 글이 오른 기록, 내려간 기록">
            <CaseBox c={m.case} down={m.down} recs={m.hideRec ? [] : s.rec.filter((r) => !r.includes("사례)"))} recNote={d.recNote} />
          </CSec>
        ) : null}

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
