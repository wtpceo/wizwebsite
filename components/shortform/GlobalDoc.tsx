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
 * /services/global — 글로벌 마케팅(중국·일본) 상세. 2026-11-08 카피 세션 안(docs/카피개선-글로벌-2026-11-08.md)으로 새로 짬.
 * 대표 논리: 중국·일본 소비자는 한국에 오기 전 현지 앱에서 갈 곳을 정한다 → 그 앱에 현지 말로 → 한국 지도에서도 같은 정보 → 국내와 같은 전담 AE·한 리포트.
 * 인플루언서 쪽 「해외 인플루언서가 필요하신가요?」 띠가 이 쪽으로 옴. 위플루언서는 유튜브·인스타 도구라 샤오홍슈·도우인에 쓴다고 적지 않음.
 * 기본값(대표 확인 전): '왕홍 라이브커머스'로 줄임, 지도는 구글만, 위플루언서 언급 없음.
 */

/** 해외 소비자의 동선 [이름, 한 줄, 아이콘] — 셋째(한국 지도)가 놓치기 쉬운 자리 */
const PATH: [string, string, "infl" | "plan" | "search" | "viral"][] = [
  ["현지 앱에서 발견", "샤오홍슈 노트, 도우인 영상, 일본 인스타그램 게시물", "infl"],
  ["저장하고 일정에 넣음", "가고 싶은 곳을 저장해 여행 일정에 넣습니다", "plan"],
  ["한국에 와서 지도로 찾음", "도착해서 지도 앱으로 가는 길을 찾습니다", "search"],
  ["방문하고 후기를 남김", "그 후기가 다음 여행자의 검색에 걸립니다", "viral"],
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

export default function GlobalDoc() {
  const s = SERVICES.find((x) => x.k === "global")!
  const d = DETAILS.global
  const m = MORE.global
  const w = WORKS.global
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
        name: "중국·일본 마케팅 대행",
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
      <div className="gx ix vx cx gb">
        <JsonLd data={ld} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="중국·일본 마케팅 소개">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall={s.slug} />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="중국·일본 마케팅 대행: 한국에 오기 전에, 갈 곳은 이미 정해집니다">
              <small className="ix-kw">중국·일본 마케팅 대행</small>{" "}
              <Chars text={"한국에 오기 전에,\n갈 곳은 이미 정해집니다"} mark="이미" />
            </h1>
            <p className="vx-era">중국·일본 소비자가 한국 여행을 준비하는 곳</p>
            <p className="dp-lead">
              중국 소비자는 샤오홍슈와 도우인에서, 일본 소비자는 인스타그램과 LINE에서 찾아보고 옵니다.
              <br />
              그 화면에 현지 크리에이터와 함께 브랜드를 올리고, 한국에 도착해 지도를 열었을 때도 같은 정보가 나오게 맞춥니다.
            </p>
            <p className="vx-first">
              <span>접근 방식</span>
              {s.first}
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                해외 고객 유입 무료 상담
              </a>
              <a className="p2 vx-tel" href="tel:16700704" data-tel>
                대표전화 1670-0704
              </a>
            </div>
            <p className="vx-trust">현지 크리에이터 섭외 · 중국어·일본어 현지화 · <span className="nw">국내와 같은 전담 AE</span> · <span className="nw">국내외 한 리포트</span></p>
          </div>
          <a className="ix-cue" href="#path" aria-label="해외 소비자의 동선으로 내려가기">
            <span>해외 소비자의 동선</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 해외 소비자의 동선(어두운 바탕): 네 칸 흐름 */}
        <div className="ix-dark">
          <CSec
            id="path"
            eb="해외 소비자의 동선"
            tone="k"
            cls="ix-fit vx-order gb-path"
            q={
              <>
                발견은 현지 앱에서,{" "}
                <br />
                <span>길 찾기는 한국 지도에서</span>
              </>
            }
          >
            <ol className="geo-twice vx-steps gb-steps" aria-label="해외 소비자가 한국 매장에 오는 네 걸음">
              {PATH.map(([t, x, k], i) => (
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
            <p className="vx-leak">현지 앱에만 올리고 한국 지도 정보가 비어 있으면, 찾아온 사람을 문 앞에서 놓칩니다. 그래서 두 쪽을 같이 봅니다.</p>
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

        {/* ③-1 현지 크리에이터(새 칸). 위플루언서는 쓴다고 적지 않음(기본값) */}
        <CSec
          id="creators"
          eb="현지 크리에이터"
          q={
            <>
              국내 섭외와 같은 기준으로{" "}
              <br />
              <span>현지 크리에이터를 고릅니다</span>
            </>
          }
          sub="팔로워 숫자보다 우리 고객층이 실제로 보는 계정인지, 최근 반응이 오르고 있는지를 봅니다. 후보는 고른 이유를 붙여 리스트로 먼저 드리고, 고객사가 고른 뒤에 섭외합니다."
        >
          <p className="vx-more">
            <Link href="/services/influencer">국내 인플루언서·유튜버 섭외</Link> 보기 →
          </p>
        </CSec>

        {/* ⑤ 세부 상품(그대로) + 실제 결과물 */}
        <CSec id="items" eb="세부 상품" q="글로벌 마케팅에는 어떤 상품이 있나요?" sub={d.itemsLead}>
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

        {/* ⑥ 국내 팀이 같이 하면(그대로) */}
        <CSec id="diff" eb="국내 팀과 같이" tone="mist" q={d.q3}>
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
              현지 말로 옮기는 일부터 리포트까지,{" "}
              <br />
              <span>네 단계</span>
            </>
          }
        >
          <ol className="ix-steps2 vx-steps2" aria-label="진행 네 단계">
            {d.process.map(([t, x], i) => (
              <li key={t} className={i === 0 ? "on" : undefined} style={vars({ i })}>
                <span className="ic" aria-hidden="true">
                  <Icon k={(["global", "content", "infl", "perf"] as const)[i] ?? "plan"} />
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
              <Ex>예시 화면</Ex>
            </div>
          </div>
        </CSec>

        {/* ⑨ 같이 하면(그대로) */}
        <CSec id="pairs" eb="같이 하면" q="글로벌 마케팅과 같이 하면 좋은 서비스는 무엇인가요?" sub={d.pairsLead}>
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
        <CSec id="faq" eb="자주 묻는 질문" tone="mist" q="글로벌 마케팅 자주 묻는 질문">
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
