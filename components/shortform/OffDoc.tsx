import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Chars, vars } from "./parts"
import { Icon } from "./icons"
import { WORKS } from "./Works"
import { TimeBox, SampleBox } from "./DocMore"

/**
 * /services/offline — 오프라인 미디어 상세. 2026-11-08 카피 세션 안(docs/카피개선-오프라인-2026-11-08.md)으로 새로 짬.
 * 대표 논리: 생활 동선에서 반복 노출 → 본 사람은 나중에 검색 → 그때 지도·블로그·홈페이지가 받아야 광고가 끝난다 → 측정할 수 없는 것은 측정한다고 쓰지 않는다.
 * 기본값(대표 확인 전): 브랜드 검색량 줄 없음, 배달앱 운영 관리는 자리 그대로. 화면 문법은 바이럴 쪽과 같음.
 */

/** 걸고 나서 생기는 일 [이름, 한 줄, 아이콘] — 셋째(받습니다)가 저희가 같이 맞추는 자리 */
const AFTER: [string, string, "off" | "search" | "phone"][] = [
  ["오프라인 노출", "택배차량 측면, 극장 스크린, 택시 뒷좌석 화면에서 반복 인지", "off"],
  ["포털·지도 재검색", "기억에 남은 브랜드명이나 「지역명+업종」 키워드로 검색", "search"],
  ["온라인 정보 확인 및 전환", "정비된 지도 정보·후기·웹사이트를 확인하고 방문·문의 결정", "phone"],
]

/** 세부 상품 사진 */
const PROD_IMG: Record<string, string> = {
  "택배차량 광고": "/sf/ex/truck.jpg",
  "극장 스크린 광고": "/sf/ex/cine-seat.jpg",
  "카카오T 모빌리티 광고": "/sf/ex/kakao-real.jpg",
  "인쇄 매체": "/sf/gen/off-print.jpg",
  "배달앱 운영 관리": "/sf/ex/m-phone.jpg",
}

/** 자체 팀이 직접 세 칸 사진·표시 */
const DIFF_IMG = ["/geo/media-crew.jpg", "/sf/gen/sol-growth.jpg", "/sf/gen/off-proof.jpg"]
const DIFF_TAGS = [["인하우스 영상·시안 제작"], ["지도 검색·문의 추이 통합 점검"], ["송출·부착 인증 리포트"]]

/** 진행 순서 사진 */
const PROC_IMG = ["/sf/gen/off-map.jpg", "/geo/media-editor.jpg", "/sf/ex/cine-real.jpg", "/sf/gen/off-report.jpg"]

/** 같이 하면 사진 */
const PAIR_IMG: Record<string, string> = { content: "/sf/ex/m-shoot.jpg", search: "/geo/media-ai.jpg", viral: "/sf/ex/fnb-dessert.jpg" }

/** 측정할 수 있는 것 / 없는 것 */
const MEASURE: [string, string, boolean][] = [
  ["택배차량·극장", "개별 광고 열람 인원은 따로 집계할 수 없습니다. 실제 송출·부착 사진과 집행 기간의 문의 추이로 보고서를 드립니다.", false],
  ["카카오T", "디지털 화면 매체이므로 집계된 노출 수와 클릭 수를 매체 데이터 그대로 보내 드립니다.", true],
  ["매체사 공개 지표", "매체사가 발표하는 평균 유동인구는 저희가 낸 성과가 아니므로 결과 수치로 쓰지 않습니다.", false],
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
      <div className="gx ix vx cx ox">
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
              <Chars text={"길에서 본 광고,\n검색에서 마무리합니다"} mark="검색에서 마무리합니다" />
            </h1>
            <p className="vx-era">타깃 고객의 일상 동선에서 만나는 반복 노출</p>
            <p className="dp-lead">
              택배차량·극장 스크린·카카오T에 광고를 걸고,{" "}<br />
              이를 본 소비자가 검색했을 때 <span className="nw">지도·블로그·웹사이트로</span> <span className="nw">이어지게 만듭니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                상권 맞춤 매체 제안 받기
              </a>
            </div>
            <p className="vx-trust">인하우스 촬영팀 시안 제작 · 송출·부착 사진 리포트 · <span className="nw">전담 AE 통합 관리</span></p>
          </div>
          <a className="ix-cue" href="#after" aria-label="걸고 나서 생기는 일로 내려가기">
            <span>위즈더플래닝의 오프라인 미디어 설계</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 걸고 나서 생기는 일(어두운 바탕): 세 칸 흐름 + 비교표 */}
        <div className="ix-dark">
          <CSec
            id="after"
            eb="노출 이후 전환 여정"
            tone="k"
            cls="ix-fit vx-order ox-after"
            q={
              <>
                길에서 본 브랜드를{" "}<br />
                <span>온라인으로 확인하는 동선</span>
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
          </CSec>
        </div>

        {/* ③ 세부 상품(11-08 대표 「리디자인」): 하는 일을 합쳐 사진 카드 다섯 장 + 매체 화면 예시 */}
        <section className="dp-sec geo-sec rv cw-items ow-items" id="items">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">세부 솔루션</p>
                <h2>
                  상권 반경에 맞춘{" "}<br />
                  <span>매체 선별과 기간 설계</span>
                </h2>
              </div>
              <p className="geo-lead">
매장 위치와 고객 동선에 맞춰 매체를 고릅니다.{" "}
<br />
매체 규격에 맞는 영상과 인쇄 시안은 저희 제작팀이 직접 만듭니다.
</p>
            </div>
            <ul className="cw-prod">
              {s.items.map(([n, t], i) => (
                <li key={n} style={vars({ i })}>
                  <figure>
                    <img src={PROD_IMG[n] ?? "/sf/ex/truck-ad.jpg"} alt="" loading="lazy" decoding="async" />
                  </figure>
                  <div>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <b>{n}</b>
                    <span>{d.itemNotes?.[n] || t}</span>
                  </div>
                </li>
              ))}
            </ul>
            {w ? (
              <div className="vw-works">
                <p className="vx-sub-h">{w.q || "매체별 집행 화면 예시"}</p>
                <p className="vx-sub-p">{w.lead}</p>
                <ul className="dp-works">
                  {w.items.map((it, i) =>
                    "tiles" in it ? (
                      <li key={i} className="wk-tl" style={vars({ n: i })}>
                        <div className="wk-dk" data-tiles={it.tiles} data-pick={it.pick} aria-hidden="true" />
                        <span>{it.cap}</span>
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        {/* ④ 자체 팀이 직접: 사진 카드 세 장 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-diff gb-diff" id="diff">
          <div className="dp-w">
            <p className="geo-eb">인하우스 운영</p>
            <h2>
              제작부터 온라인 연계까지{" "}<br />
              <span>직접 챙기는 캠페인</span>
            </h2>
            <ol className="cw-diff-g">
              {d.diff.map(([t, x], i) => (
                <li key={t} style={vars({ i })}>
                  <figure>
                    <img src={DIFF_IMG[i]} alt="" loading="lazy" decoding="async" />
                    <figcaption>
                      {DIFF_TAGS[i].map((g) => (
                        <span key={g}>{g}</span>
                      ))}
                    </figcaption>
                  </figure>
                  <div>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <b>{t}</b>
                    <p>{x}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ⑤ 진행 순서: 사진 네 단계 + 기간 + 리포트 띠 + 매체 목록 견본 */}
        <section className="dp-sec geo-sec rv cw-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">진행 순서</p>
                <h2>
                  매체 선정부터 결과 보고까지{" "}<br />
                  <span>네 단계로 진행합니다</span>
                </h2>
              </div>
              <p className="geo-lead">
광고가 나가면 부착·송출 사진을 바로 보내 드립니다.{" "}
<br />
끝날 때는 그동안의 문의 추이를 보고 연장할지 같이 정합니다.
</p>
            </div>
            <ol className="cw-proc-g" aria-label="진행 네 단계">
              {d.process.map(([t, x], i) => (
                <li key={t} style={vars({ i })}>
                  <figure>
                    <img src={PROC_IMG[i]} alt="" loading="lazy" decoding="async" />
                    <em>STEP {String(i + 1).padStart(2, "0")}</em>
                  </figure>
                  <div>
                    <b>{t}</b>
                    <span>{x}</span>
                  </div>
                </li>
              ))}
            </ol>
            {m.time ? <TimeBox t={m.time} /> : null}
            <div className="cw-rep">
              <b>결과 리포트 포함 항목</b>
              <ul>
                {d.report.map((r) => (
                  <li key={r}>
                    <i aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            {m.sample ? <SampleBox s={m.sample} /> : null}
          </div>
        </section>

        {/* ⑥ 측정할 수 있는 것, 없는 것(그대로) */}
        <CSec
          id="measure"
          eb="성과 보고 기준"
          tone="mist"
          q={
            <>
              측정할 수 있는 데이터만{" "}<br />
              <span>기록하는 리포트 기준</span>
            </>
          }
          sub="택배차량과 극장 광고는 열람 인원을 따로 집계할 수 없어 송출 사진과 문의 기록으로 보고서를 드립니다. 카카오T 같은 디지털 매체는 노출·클릭 수를 그대로 보내 드립니다."
        >
          <ul className="ox-measure">
            {MEASURE.map(([t, x, ok], i) => (
              <li key={t} className={ok ? "ok" : undefined} style={vars({ i })}>
                <em>{ok ? "실측 수치 제공" : "추정치 미사용"}</em>
                <b>{t}</b>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </CSec>

        {/* ⑦ 같이 하면: 사진 카드 세 장 */}
        <section className="dp-sec geo-sec rv cw-pairs ow-pairs" id="pairs">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">연계 서비스</p>
                <h2>
                  오프라인 인지를 방문으로 잇는{" "}<br />
                  <span>지도·후기·콘텐츠 설계</span>
                </h2>
              </div>
              <p className="geo-lead">
광고를 내보내기 전에 지도 정보와 후기를 먼저 다듬습니다.{" "}
<br />
송출용 영상은 숏폼을 찍을 때 같이 만들어 비용을 아낍니다.
</p>
            </div>
            <ul className="cw-pair">
              {d.pairs.map(([k, why]) => {
                const o = SERVICES.find((x) => x.k === k)!
                return (
                  <li key={k}>
                    <Link href={`/services/${o.slug}`}>
                      <img src={PAIR_IMG[k] ?? "/sf/pf/w1.jpg"} alt="" loading="lazy" decoding="async" />
                      <span className="cw-pair-tx">
                        <b>{o.n}</b>
                        <span>{why}</span>
                      </span>
                      <span className="cw-pair-ar" aria-hidden="true">
                        <Icon k="arrow" />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* ⑧ FAQ: 공통 부품 */}
        <FaqBlock items={faq} note="추가로 궁금하신 점은 문의로 남겨 주세요. 전담 AE가 상세히 안내해 드립니다." />

        {/* ⑨ 문의 */}
        <ContactBlock title={d.ct?.title ?? `${s.n}, 진단 신청부터 시작하세요.`} sub={d.ct?.sub} label={d.ct?.label} initial={[s.k]} source={`service_${s.slug}`} />
      </div>
    </DocShell>
  )
}
