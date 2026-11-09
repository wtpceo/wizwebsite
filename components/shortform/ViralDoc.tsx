import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, vars } from "./parts"
import { Icon } from "./icons"
import { WORKS } from "./Works"
import { CaseBox, SampleBox } from "./DocMore"

/**
 * /services/viral — 바이럴·평판 관리 상세. 2026-11-08 카피 세션 안(docs/카피개선-바이럴-2026-11-08.md)으로 새로 짬.
 * 대표 논리: 광고·인플루언서·AI 답변으로 이름을 본 고객은 브랜드를 다시 검색하고, 첫 화면 글을 읽고 정한다 → 그 첫 화면에 읽을 글을 둔다.
 * GEO 쪽과 나누는 선: GEO는 「왜 두 번째 검색에서 지면 안 되나」와 측정, 여기는 「그 첫 화면을 무엇으로 채우나」(실행).
 * 화면 문법은 인플루언서 쪽(.gx.ix)을 그대로 씀: 숏폼 벽 첫 화면, 왼쪽 정렬, 칸마다 화면에 들어올 때 차례로 등장.
 * 사례·리포트 견본·안 맞는 경우·이어 읽기는 공용 틀(ServiceDoc)에 있던 근거를 그대로 옮김.
 */

/** 검색 첫 화면 칸(예시) [칸, 예시 제목, 부가, 채우는 상품] */
const SLOTS: [string, string, string, string][] = [
  ["블로그 인기글", "OO 다녀왔어요, 동네 사람이 추천한 곳", "사진 14장 · 3일 전", "블로그 상위노출"],
  ["체험단 후기", "OO 처음 가 본 솔직 후기", "협찬 표시 · 1주 전", "블로그 체험단"],
  ["뉴스", "OO, 2016년 문 연 동네 가게의 10년", "기사형 콘텐츠", "기자단·보도자료"],
  ["카페 글", "OO동 맘카페 · 추천 부탁드려요", "정식 광고 표시", "커뮤니티 바이럴"],
  ["리뷰", "★ 4.7 · 방문자 리뷰 312", "비방 리뷰는 절차대로 신고", "온라인 평판 관리"],
]

/** 세부 상품 사진 */
const PROD_IMG: Record<string, string> = {
  "블로그 상위노출": "/sf/pf/w3.jpg",
  "블로그 체험단": "/sf/ex/fnb-dessert.jpg",
  "기자단": "/geo/media-editor.jpg",
  "커뮤니티 바이럴": "/sf/ex/m-phone.jpg",
  "언론 보도자료 배포": "/sf/ex/seminar.jpg",
  "온라인 평판 관리": "/sf/ex/m-team.jpg",
}

/** 검색 담당과 같이 두 칸 사진·표시 */
const DIFF_IMG = ["/sf/ex/m-shoot.jpg", "/sf/img/report.jpg"]
const DIFF_TAGS = [["지도", "AI 검색", "블로그 검색어 한 표"], ["검색 위치 캡처"]]

/** 진행 순서 사진 */
const PROC_IMG = ["/sf/ex/m-team.jpg", "/geo/media-editor.jpg", "/sf/ex/m-phone.jpg", "/sf/img/report.jpg"]

/** 같이 하면 사진 */
const PAIR_IMG: Record<string, string> = { search: "/geo/media-ai.jpg", infl: "/sf/pf/infl-food.jpg" }

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
      <div className="gx ix vx cx vw">
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
              <Chars text={"검색 첫 화면이\n두 번째 상세페이지입니다"} mark="두 번째 상세페이지" />
            </h1>
            <p className="vx-era">고객은 사기 전에 이름을 한 번 더 검색합니다</p>
            <p className="dp-lead">
              그 검색 첫 화면을 <span className="nw">블로그 후기, 체험단,</span> <span className="nw">기자단 기사로 채웁니다.</span>
              <br />
              고객이 치는 검색어부터 정하고, <span className="nw">올라간 위치는 캡처해 보고드립니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                문의하기
              </a>
            </div>
            <p className="vx-trust">바이럴팀 · 자체 촬영팀 · 협찬 표시 준수 · <span className="nw">올라간 위치 캡처 리포트</span></p>
          </div>
          <a className="ix-cue" href="#what" aria-label="하는 일로 내려가기">
            <span>위즈더플래닝은 이렇게 일해요</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 하는 일(11-08 대표 「뺄 섹션 빼고 리디자인·리카피」): 검색 첫 화면을 무엇으로 채우는지 한 장으로 + 협찬 표시 */}
        <section className="dp-sec geo-sec geo-sec-mist rv vw-what" id="what">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">하는 일</p>
                <h2>
                  검색어를 먼저 정하고,{" "}
                  <br />
                  <span>그 첫 화면을 채웁니다</span>
                </h2>
              </div>
              <p className="geo-lead">고객이 브랜드 이름이나 동네 이름으로 찾았을 때 읽을 글을 만들어, 검색 첫 화면 위쪽에 올립니다.</p>
            </div>
            <div className="vw-serp" aria-label="검색 첫 화면을 채우는 상품, 예시">
              <div className="vw-serp-box">
                <div className="vw-serp-q">
                  <i aria-hidden="true" />
                  OO동 OO 추천
                </div>
                <ul>
                  {SLOTS.map(([kind, title, meta, by], i) => (
                    <li key={kind} style={vars({ i })}>
                      <div className="vw-slot">
                        <small>{kind}</small>
                        <b>{title}</b>
                        <span>{meta}</span>
                      </div>
                      <i className="cw-line" aria-hidden="true" />
                      <span className="vw-by">{by}</span>
                    </li>
                  ))}
                </ul>
                <Ex>예시 화면</Ex>
              </div>
              <div className="vw-law">
                <em>모든 글에 협찬 표시</em>
                <p>체험단·기자단·인플루언서 글에는 모두 협찬이나 대가 표시를 넣습니다. 표시광고법 추천·보증 심사지침을 따르고, 고객인 척 쓰는 위장 후기는 하지 않습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ③ 세부 상품: 사진 카드 여섯 장 + 올라간 화면 예시 */}
        <section className="dp-sec geo-sec rv cw-items" id="items">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">세부 상품</p>
                <h2>
                  첫 화면에 빈 곳부터{" "}
                  <br />
                  <span>골라 채웁니다</span>
                </h2>
              </div>
              <p className="geo-lead">지금 검색 첫 화면을 먼저 보고, 블로그·후기·기사 가운데 비어 있는 것부터 맡기시면 됩니다.</p>
            </div>
            <ul className="cw-prod">
              {s.items.map(([n, t], i) => (
                <li key={n} style={vars({ i })}>
                  <figure>
                    <img src={PROD_IMG[n] ?? "/sf/pf/w1.jpg"} alt="" loading="lazy" decoding="async" />
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
                <p className="vx-sub-h">{w.q || "실제로 어떤 결과물이 나오나요?"}</p>
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

        {/* ④ 검색 담당과 같이 하면: 사진 카드 두 장 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-diff" id="diff">
          <div className="dp-w">
            <p className="geo-eb">검색 담당과 같이</p>
            <h2>
              검색 담당과 같이 하면{" "}
              <br />
              <span>무엇이 다른가요?</span>
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

        {/* ⑤ 진행 순서·리포트: 사진 네 단계 + 「제목을 통째로 쳐야 나오는 글은 성과로 세지 않는다」 + 리포트 견본 */}
        <section className="dp-sec geo-sec rv cw-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">진행 순서</p>
                <h2>
                  검색어부터 위치 리포트까지,{" "}
                  <br />
                  <span>네 단계로 진행합니다</span>
                </h2>
              </div>
              <p className="geo-lead">제목을 통째로 쳐야 나오는 글은 성과로 세지 않습니다. 고객이 실제로 치는 검색어에서 몇 번째인지 캡처해서 보고드립니다.</p>
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
            <div className="cw-rep">
              <b>리포트에 들어가는 것</b>
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

        {/* ⑥ 기록과 사례(그대로): 1위 기록과 함께 2주 뒤 75위 밖으로 내려간 기록을 같이 둠 */}
        {m.case ? (
          <CSec id="cases" eb="기록과 사례" tone="mist" q="맡은 글이 오른 기록, 내려간 기록">
            <CaseBox c={m.case} down={m.down} recs={m.hideRec ? [] : s.rec.filter((r) => !r.includes("사례)"))} recNote={d.recNote} />
          </CSec>
        ) : null}

        {/* ⑦ 같이 하면: 사진 카드 두 장 */}
        <section className="dp-sec geo-sec rv cw-pairs vw-pairs" id="pairs">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">같이 하면</p>
                <h2>
                  한 번 올린 글이{" "}
                  <br />
                  <span>여러 곳에 걸립니다</span>
                </h2>
              </div>
              <p className="geo-lead">체험단 후기와 기사는 검색뿐 아니라 AI가 답할 때 끌어오는 출처가 되고, 블로그 다음은 릴스·쇼츠 후기로 넓힙니다.</p>
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
        <FaqBlock items={faq} note="여기 없는 질문은 문의로 남겨 주세요. 담당자가 답해 드립니다." />

        {/* ⑨ 문의 */}
        <ContactBlock title={d.ct?.title ?? `${s.n}, 진단 신청부터 시작하세요.`} sub={d.ct?.sub} label={d.ct?.label} initial={[s.k]} source={`service_${s.slug}`} />
      </div>
    </DocShell>
  )
}
