import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, vars } from "./parts"
import { Icon } from "./icons"
import { CaseBox, TimeBox, SampleBox } from "./DocMore"

/**
 * /services/homepage — 웹사이트 구축 상세. 2026-11-08 카피 세션 안(docs/카피개선-웹사이트-2026-11-08.md)으로 새로 짬.
 * 대표 논리: 광고를 누른 사람도 AI 답변 링크를 누른 사람도 결국 홈페이지에 닿는다 → 마지막 설득은 홈페이지 → 손님이 둘(사람과 AI).
 * 퍼포먼스팀의 설계 참여는 대표 확인 전이라 뺌(카피 세션 기본값). 화면 문법은 인플루언서·바이럴·콘텐츠와 같음.
 */

/** 손님 둘 [누구, 아이콘, 필요한 것] */
const GUESTS: [string, "person" | "search", string[]][] = [
  ["방문 고객에게 필요한 요소", "person", ["첫 화면에서 바로 보이는 핵심 가치", "정확한 가격과 위치 안내", "바로 이어지는 문의·예약 동선"]],
  ["AI 엔진에게 필요한 요소", "search", ["텍스트로 구조화된 전화번호·주소·가격", "페이지별 고유 메타 제목과 설명", "고객 질문에 답하는 FAQ 콘텐츠", "표준 구조화 데이터(Schema)"]],
]

/** AI가 읽는 글자(예시) [항목, 값] */
const FACTS: [string, string][] = [
  ["상호", "OO치과"],
  ["전화", "02-000-0000"],
  ["주소", "서울시 OO구 OO로 00"],
  ["진료 시간", "평일 09:30~21:00"],
  ["가격", "스케일링 15,000원"],
  ["자주 묻는 질문", "22문항"],
]

/** 세부 상품 사진 */
const PROD_IMG: Record<string, string> = {
  "신규 구축": "/sf/gen/home-sitemap.jpg",
  "정보 고도화": "/sf/ex/dental.jpg",
  "월간 유지관리": "/sf/ex/m-phone.jpg",
  "FAQ·콘텐츠 발행": "/sf/gen/home-faq.jpg",
}

/** 검색 팀과 같이 네 칸 사진·표시 */
const DIFF_IMG = ["/tools/realgeo-site-audit.jpg", "/sf/gen/sol-local.jpg", "/sf/gen/sol-growth.jpg", "/sf/gen/home-code.jpg"]
const DIFF_TAGS = [["구조화 데이터", "FAQ 콘텐츠"], ["지도 플랫폼 정보 일치"], ["오픈 후 노출 재측정"], ["기존 URL 검색 이력 보존"]]

/** 진행 순서 사진 */
const PROC_IMG = ["/sf/gen/home-wire.jpg", "/sf/gen/home-design.jpg", "/sf/gen/home-build.jpg", "/sf/gen/home-launch.jpg"]

/** 같이 하면 사진 */
const PAIR_IMG: Record<string, string> = { search: "/geo/media-ai.jpg", content: "/sf/ex/m-shoot.jpg" }

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
              <Chars text={"마지막 설득은\n홈페이지가 합니다"} mark="홈페이지가 합니다" />
            </h1>
            <p className="vx-era">광고와 AI 추천으로 들어온 고객의 최종 도착지</p>
            <p className="dp-lead">
              광고를 누른 사람도 AI 답변 링크를 누른 사람도 <span className="nw">최종 결정은 웹사이트에서 내립니다.</span>{" "}
              <br />
              방문객을 설득하고 AI 엔진도 잘 읽도록 웹사이트를 <span className="nw">새로 짓거나 고쳐 드립니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                문의하기
              </a>
            </div>
            <p className="vx-trust">누적 30곳 이상 구축 · SEO·GEO팀 설계 참여 · <span className="nw">고객사 직접 운영 관리자 화면</span> · <span className="nw">기존 URL 검색 이력 보존</span></p>
          </div>
          <a className="ix-cue" href="#guests" aria-label="홈페이지를 읽는 쪽으로 내려가기">
            <span>위즈더플래닝의 웹사이트 설계</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 손님이 둘(11-08 대표 「리디자인」): 같은 홈페이지를 사람이 보는 화면 / AI가 읽는 글자로 나란히 */}
        <section className="dp-sec geo-sec rv hw-two" id="guests">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">이중 설계 기준</p>
                <h2>
                  웹사이트를 찾는 두 손님{" "}
                  <br />
                  <span>사람과 AI 엔진</span>
                </h2>
              </div>
              <p className="geo-lead">디자인에만 치중하면 AI가 핵심 정보를 읽지 못하고 텍스트만 늘어놓으면 방문객이 바로 나갑니다. 처음부터 둘을 함께 고려해 설계합니다.</p>
            </div>
            <div className="hw-view">
              <div className="hw-side">
                <p className="hw-tag">
                  <Icon k="person" /> 방문 고객이 보는 화면
                </p>
                <div className="hw-br" aria-hidden="true">
                  <div className="hw-bar">
                    <i />
                    <i />
                    <i />
                    <span>oo-dental.co.kr</span>
                  </div>
                  <div className="hw-page">
                    <div className="hw-nav">
                      <b>OO치과</b>
                      <span>진료 안내</span>
                      <span>오시는 길</span>
                      <span>자주 묻는 질문</span>
                    </div>
                    <div className="hw-hero">
                      <img src="/sf/ex/m-dental.jpg" alt="" loading="lazy" decoding="async" />
                      <div>
                        <b>
                          평일 밤 9시까지
                          <br />
                          진료합니다
                        </b>
                        <span>주차 2시간 무료</span>
                        <i>진료 예약</i>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="hw-need">
                  {GUESTS[0][2].map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="hw-side ai">
                <p className="hw-tag">
                  <Icon k="search" /> AI 엔진이 인식하는 구조화 텍스트
                </p>
                <div className="hw-code" aria-hidden="true">
                  {FACTS.map(([k, v], i) => (
                    <p key={k} style={vars({ i })}>
                      <span>{k}</span>
                      <b>{v}</b>
                      <i />
                    </p>
                  ))}
                </div>
                <ul className="hw-need">
                  {GUESTS[1][2].map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Ex>예시 화면</Ex>
          </div>
        </section>

        {/* ③ 세부 상품: 네 장 사진 카드 + 얼마나 걸리나요 */}
        <section className="dp-sec geo-sec rv cw-items hw-items" id="items">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">세부 솔루션</p>
                <h2>
                  사이트 진단으로 결정하는{" "}
                  <br />
                  <span>신규 구축과 정보 고도화</span>
                </h2>
              </div>
              <p className="geo-lead">지금 있는 웹사이트 구조부터 봅니다. 전화번호나 가격이 이미지라 AI가 못 읽는다면 텍스트로 바꾸고 지도 정보와 맞추는 일부터 시작합니다.</p>
            </div>
            <ul className="cw-prod">
              {s.items.map(([n, t], i) => (
                <li key={n} style={vars({ i })}>
                  <figure>
                    <img src={PROD_IMG[n] ?? "/sf/ex/m-team.jpg"} alt="" loading="lazy" decoding="async" />
                  </figure>
                  <div>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <b>{n}</b>
                    <span>{d.itemNotes?.[n] || t}</span>
                  </div>
                </li>
              ))}
            </ul>
            {m.time ? <TimeBox t={m.time} /> : null}
          </div>
        </section>

        {/* ④ 검색 팀이 만들면: 사진 카드 네 장 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-diff hw-diff" id="diff">
          <div className="dp-w">
            <p className="geo-eb">SEO·GEO 설계</p>
            <h2>
              검색 최적화 팀이 만드는{" "}
              <br />
              <span>웹사이트의 다른 점</span>
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

        {/* ⑤ 진행 순서: 사진 네 단계 + 리포트 띠 + 적용 확인표 견본 */}
        <section className="dp-sec geo-sec rv cw-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">진행 프로세스</p>
                <h2>
                  구조 기획부터 오픈까지{" "}
                  <br />
                  <span>웹사이트 제작 순서</span>
                </h2>
              </div>
              <p className="geo-lead">단계마다 고객사 확인을 받고 다음으로 넘어갑니다. 오픈하기 전에 예전 URL을 새 주소로 1:1 연결해 기존 검색 자산을 그대로 지켜 드립니다.</p>
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

        {/* ⑥ 사례(그대로): 167쪽 치과 */}
        {m.case ? (
          <CSec id="cases" eb="실제 사례" tone="mist" q="AI 답변에 인용된 실제 사례">
            <CaseBox c={m.case} down={m.down} recs={[]} recNote={d.recNote} />
          </CSec>
        ) : null}

        {/* ⑦ 같이 하면: 사진 카드 두 장 */}
        <section className="dp-sec geo-sec rv cw-pairs" id="pairs">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">연계 서비스</p>
                <h2>
                  고객의 전환을 완성하는{" "}
                  <br />
                  <span>검색 최적화와 콘텐츠 촬영</span>
                </h2>
              </div>
              <p className="geo-lead">사이트를 열고 나서 AI 답변 인용률과 지도 순위를 정기적으로 측정합니다. 웹사이트 신뢰도를 높이는 공간과 제품 사진은 내부 촬영팀이 직접 찍어 드립니다.</p>
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
        <FaqBlock items={d.faq} note="추가로 궁금하신 점은 문의로 남겨 주세요. 전담 AE가 상세히 답변해 드리겠습니다." />

        {/* ⑨ 문의 */}
        <ContactBlock title={d.ct?.title ?? `${s.n}, 진단 신청부터 시작하세요.`} sub={d.ct?.sub} label={d.ct?.label} initial={[s.k]} source={`service_${s.slug}`} />
      </div>
    </DocShell>
  )
}
