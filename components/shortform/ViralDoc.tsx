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
  ["블로그 인기글", "OO 직접 다녀온 후기, 위치·가격·이용 안내", "사진 14장 · 3일 전", "블로그 상위노출"],
  ["체험단 후기", "OO 2주 사용기, 장단점 솔직 정리", "협찬 표시 · 1주 전", "블로그 체험단"],
  ["뉴스", "OO, 소비자 후기 바탕으로 서비스 품질 강화", "기사형 콘텐츠", "기자단·보도자료"],
  ["카페 글", "OO 지역 커뮤니티 · 이용 후기 공유", "정식 광고 표시", "커뮤니티 바이럴"],
  ["리뷰", "★ 4.7 · 방문자 리뷰 312", "허위·비방 리뷰는 절차에 따라 대응", "온라인 평판 관리"],
]

/** 바이럴의 흐름 네 단계 [단계, 제목, 설명, 예시 칩, 아이콘] — 11-09 대표: 키워드 설계 → 체험단·바이럴 → 입소문 → 후기·평판 */
const PATH: [string, string, string, string[], "search" | "viral" | "chat" | "person"][] = [
  ["키워드 설계", "검색 키워드 선별", "소비자가 실제로 검색하는 키워드를 고르고, 지금 검색 첫 화면에 어떤 글이 나오는지 살펴봅니다.", ["브랜드명", "지역 + 업종", "제품명"], "search"],
  ["체험단·바이럴", "채널별 바이럴 발행", "고른 키워드에 맞춰 블로그 체험단과 기자단, 커뮤니티 글을 올립니다. 모든 게시물은 대가성 표기 기준을 지킵니다.", ["블로그 체험단", "기자단", "커뮤니티"], "viral"],
  ["입소문", "검색 결과에 쌓이는 입소문", "글이 쌓이면 검색 첫 화면이 달라집니다. 소비자가 브랜드명을 다시 검색했을 때 믿을 수 있는 정보를 보게 됩니다.", ["인기글", "블로그 탭", "뉴스"], "chat"],
  ["후기·평판", "후기가 만드는 평판", "소비자는 쌓인 후기와 기사를 보고 구매를 결정합니다. 근거 없는 비방 글은 플랫폼 공식 절차에 따라 대응해 드립니다.", ["방문 후기", "리뷰", "평판 관리"], "person"],
]

/** 세부 상품 사진 */
const PROD_IMG: Record<string, string> = {
  "블로그 상위노출": "/sf/pf/w3.jpg",
  "블로그 체험단": "/sf/ex/fnb-dessert.jpg",
  "기자단": "/sf/gen/viral-reporter.jpg",
  "커뮤니티 바이럴": "/sf/ex/m-phone.jpg",
  "언론 보도자료 배포": "/sf/gen/viral-press.jpg",
  "온라인 평판 관리": "/sf/gen/viral-reputation.jpg",
}

/** 검색 담당과 같이 두 칸 사진·표시 */
const DIFF_IMG = ["/sf/gen/sol-local.jpg", "/sf/img/report.jpg"]
const DIFF_TAGS = [["지도", "AI 검색", "통합 키워드 설계"], ["노출 위치 캡처 리포트"]]

/** 진행 순서 사진 */
const PROC_IMG = ["/sf/gen/viral-keyword.jpg", "/sf/gen/viral-guide.jpg", "/sf/gen/home-faq.jpg", "/sf/gen/global-report.jpg"]

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
            {/* 11-09 대표 카피: 「소재로 입소문을 만들고 후기로 평판을 만들어 나갑니다」 */}
            <h1 aria-label="바이럴 마케팅 대행: 소재로 입소문을 만들고 후기로 평판을 만들어 나갑니다" className="vw-h1">
              <small className="ix-kw">바이럴 마케팅 대행</small>{" "}
              <Chars text={"소재로 입소문을 만들고\n후기로 평판을 만들어 나갑니다"} mark="후기로 평판을" />
            </h1>
            <p className="vx-era">소비자는 구매 전에 브랜드명을 한 번 더 검색합니다</p>
            {/* 11-09 대표: 첫 화면 부제는 「저희가 해 드리는 일」이 아니라 바이럴이라는 매체 설명으로(입소문이 시작되고 쌓이는 곳) */}
            <p className="dp-lead">
              바이럴은 브랜드 입소문이 시작되고 쌓이는 과정입니다.{" "}
              <br />
              <span className="nw">검색 결과에 남은 블로그 후기와</span> 기사는 소비자가 브랜드를 판단하는 근거가 됩니다.
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                검색 첫 화면 무료 진단
              </a>
            </div>
            <p className="vx-trust">블로그 상위노출 · 체험단 · 기자단 · 언론 보도자료</p>
          </div>
          <a className="ix-cue" href="#what" aria-label="바이럴 전략으로 내려가기">
            <span>위즈더플래닝의 바이럴 전략</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 하는 일(11-08 대표 「뺄 섹션 빼고 리디자인·리카피」): 검색 첫 화면을 무엇으로 채우는지 한 장으로 + 협찬 표시 */}
        <section className="dp-sec geo-sec geo-sec-mist rv vw-what" id="what">
          <div className="dp-w">
            {/* 11-09 대표: 키워드 설계부터 체험단·바이럴로 입소문과 후기·평판을 만들어 가는 과정. 제목은 문장으로 끝내지 않는다 */}
            <div className="cw-items-head">
              <p className="geo-eb">바이럴의 흐름</p>
              <h2>
                키워드 설계에서 시작해{" "}
                <br />
                <span>평판으로 쌓이는 입소문</span>
              </h2>
              <p className="geo-lead">
                소비자가 실제로 검색하는 키워드를 찾아 블로그와 체험단, 기사를 올립니다.{" "}
                <br className="gx-br" />
                검색 결과에 쌓인 글은 입소문이 되고, 소비자가 읽는 후기는 브랜드 평판이 됩니다.
              </p>
            </div>
            <ol className="vw-path" aria-label="바이럴이 평판이 되기까지 네 단계">
              {PATH.map(([st, t, x, chips, ic], i) => (
                <li key={st} style={vars({ i })} className={i === PATH.length - 1 ? "on" : undefined}>
                  <div className="vw-path-top">
                    <span className="ic" aria-hidden="true">
                      <Icon k={ic} />
                    </span>
                    <em>
                      {String(i + 1).padStart(2, "0")} · {st}
                    </em>
                  </div>
                  <b>{t}</b>
                  <p>{x}</p>
                  <ul>
                    {chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="vx-sub-h vw-serp-h">설계된 검색 결과 첫 화면</p>
            <div className="vw-serp rv" aria-label="검색 첫 화면을 채우는 상품, 예시">
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
                <em>표시광고법 및 협찬 표기 준수</em>
                <p>체험단·기자단·인플루언서 콘텐츠에는 공정거래위원회 추천·보증 등에 관한 표시·광고 심사지침에 따라 협찬 및 대가성 표기를 명확히 기재합니다. 일반 소비자를 가장한 거짓·기만 후기는 제작하지 않습니다.</p>
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
                  검색 첫 화면을 채우는{" "}
                  <br />
                  <span>여섯 가지 바이럴 솔루션</span>
                </h2>
              </div>
              <p className="geo-lead">지금 브랜드 검색 첫 화면을 살펴보고, 블로그·체험단·보도자료 가운데 채워야 할 곳부터 골라 시작할 수 있습니다.</p>
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
              <div className="vw-works rv">
                <p className="vx-sub-h">검색 결과 노출 화면 예시</p>
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
            <p className="geo-eb">검색 연계 운영</p>
            <h2>
              검색 부서와 함께 설계해{" "}
              <br />
              <span>결과에 남는 바이럴</span>
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
                  키워드 설계부터 리포트까지{" "}
                  <br />
                  <span>네 단계로 진행합니다</span>
                </h2>
              </div>
              <p className="geo-lead">
게시물 제목 전체를 쳐야 나오는 글은 성과로 치지 않습니다.{" "}
<br />
소비자가 실제로 검색하는 키워드에서 몇 번째로 나오는지 화면을 캡처해 보여 드립니다.
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
            <div className="cw-rep rv">
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

        {/* ⑥ 기록과 사례(그대로): 1위 기록과 함께 2주 뒤 75위 밖으로 내려간 기록을 같이 둠 */}
        {m.case ? (
          <CSec id="cases" eb="실측 기록과 사례" tone="mist" q="상위 노출 달성 사례와 순위 변동 기록">
            <CaseBox c={m.case} down={m.down} recs={m.hideRec ? [] : s.rec.filter((r) => !r.includes("사례)"))} recNote={d.recNote} />
          </CSec>
        ) : null}

        {/* ⑦ 같이 하면: 사진 카드 두 장 */}
        <section className="dp-sec geo-sec rv cw-pairs vw-pairs" id="pairs">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">연계 서비스</p>
                <h2>
                  검색과 AI 답변까지{" "}
                  <br />
                  <span>확장되는 후기와 기사</span>
                </h2>
              </div>
              <p className="geo-lead">
체험단 후기와 기사는 포털 검색뿐 아니라 생성형 AI가 답변을 만들 때 쓰는 근거가 됩니다.{" "}
<br />
글 후기를 쌓은 뒤에는 릴스나 쇼츠 같은 영상 리뷰로 접점을 넓혀 보세요.
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
        <FaqBlock items={faq} note="더 궁금한 점이 있다면 문의로 남겨 주세요. 전담 AE가 자세히 안내해 드리겠습니다." />

        {/* ⑨ 문의 */}
        <ContactBlock title={d.ct?.title ?? `${s.n}, 진단 신청부터 시작하세요.`} sub={d.ct?.sub} label={d.ct?.label} initial={[s.k]} source={`service_${s.slug}`} />
      </div>
    </DocShell>
  )
}
