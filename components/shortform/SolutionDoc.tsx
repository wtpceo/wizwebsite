import Link from "next/link"
import { SERVICES, SOLUTIONS } from "./content"
import { SOL_DETAILS, MORE } from "./details"
import { Icon } from "./icons"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Chars, vars } from "./parts"
import { WORKS } from "./Works"
import { CaseBox } from "./DocMore"

/** 첫 화면 파란 띠를 칠할 말 */
const MARK: Record<string, string> = { local: "지역 검색부터", growth: "클릭 뒤부터", enterprise: "하나의 창구로" }
/** 묶음 카드 사진 */
const SVC_IMG: Record<string, string> = {
  search: "/geo/media-ai.jpg",
  viral: "/sf/ex/fnb-dessert.jpg",
  perf: "/sf/ex/m-shop.jpg",
  infl: "/sf/pf/infl-beauty.jpg",
  content: "/sf/ex/m-shoot.jpg",
  off: "/sf/ex/truck-ad.jpg",
  plan: "/sf/ex/seminar.jpg",
}
/** 같은 종류 카드가 두 장일 때 두 번째 카드 사진(11-09 점검: 로컬 검색 카드 두 장이 같은 사진이던 것) */
const SVC_IMG2: Record<string, string> = { search: "/tools/realgeo-dashboard.jpg" }
/** 업종별로 카드 사진을 바꿀 때(11-09 2차 점검: 성장 브랜드의 제품 검색 카드에 로컬용 케이크 사진이 나오던 것) */
const SVC_BY_SLUG: Record<string, Partial<Record<string, string>>> = { growth: { viral: "/sf/ex/cosme.jpg" } }
/** 진행 단계 사진 */
/** 진행 단계 사진: 업종마다 단계 내용에 맞춰(11-09 점검: 세 쪽이 같은 네 장을 돌려 쓰던 것을 나눔) */
const PROC_IMG: Record<string, string[]> = {
  local: ["/sf/gen/sol-local.jpg", "/sf/ex/m-phone.jpg", "/sf/gen/viral-guide.jpg", "/sf/img/report.jpg"],
  growth: ["/sf/gen/sol-growth.jpg", "/sf/ex/shootcos.jpg", "/geo/media-unbox.jpg", "/report/weekly-report-1.jpg"],
  enterprise: ["/sf/gen/sol-ent.jpg", "/sf/gen/global-meeting.jpg", "/geo/media-crew.jpg", "/report/weekly-report-1.jpg"],
}

/**
 * 업종별 솔루션 3쪽(/solutions/local·growth·enterprise). 11-08 대표 「업종 전략도 서비스 페이지와 같은 디자인으로」.
 * 순서: 첫 화면 → 이런 고민 → (로컬) 업종마다 먼저 할 일 → 묶는 순서 → 결과물 → 진행 순서·사례 → 다른 업종 → 자주 묻는 질문 → 문의.
 * 맡기지 않는 경우·이어 읽기·문의 뒤 절차 칸은 다른 쪽과 같이 뺐다.
 */
export default function SolutionDoc({ slug }: { slug: string }) {
  const f = SOLUTIONS.find((x) => x.slug === slug)!
  const d = SOL_DETAILS[slug]
  const m = MORE[slug]
  const w = WORKS[slug]
  const crumbs = [
    { name: "홈", path: "/" },
    { name: f.n, path: `/solutions/${f.slug}` },
  ]
  const keys = f.c.map((c) => c[0]).filter((k) => k !== "plan")
  const isLocal = f.slug === "local"
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/solutions/${f.slug}#service`,
        name: `${f.n} 마케팅`,
        description: d.lead,
        provider: { "@id": ORG_ID },
        audience: { "@type": "BusinessAudience", audienceType: f.who.replace(/ · /g, ", ") },
        areaServed: { "@type": "Country", name: "대한민국" },
        url: `${SITE}/solutions/${f.slug}`,
      },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }
  const title = f.q.replace(/\.$/, "")
  return (
    <DocShell cta={isLocal ? { href: "/contact", label: "상담 신청" } : undefined}>
      <div className="gx ix vx cx sw">
        <JsonLd data={ld} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label={`${f.n} 소개`}>
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall={slug} />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label={`${f.n} 마케팅: ${title.replace("\n", " ")}`}>
              <small className="ix-kw">{f.n} 마케팅</small> <Chars text={title} mark={MARK[slug]} />
            </h1>
            <p className="vx-era">{f.who}</p>
            <p className="dp-lead">{d.lead}</p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                문의하기
              </a>
            </div>
          </div>
          <a className="ix-cue" href="#pains" aria-label="이런 고민으로 내려가기">
            <span>위즈더플래닝의 업종별 맞춤 설계</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 이런 고민 */}
        <section className="dp-sec geo-sec geo-sec-mist rv sw-pains" id="pains">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">주요 과제</p>
                <h2>
                  현장에서 자주 겪는{" "}
                  <br />
                  <span>마케팅 고민</span>
                </h2>
              </div>
              <p className="geo-lead">{d.comboLead}</p>
            </div>
            <ol className="sw-pain-g" style={vars({ n: d.pains.length })}>
              {d.pains.map(([t, x], i) => (
                <li key={t} style={vars({ i })}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <p>{x}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ③ (로컬) 업종마다 먼저 할 일 */}
        {m.month ? (
          <section className="dp-sec geo-sec rv sw-month" id="month">
            <div className="dp-w">
              <div className="gt-head">
                <div>
                  <p className="geo-eb">업종별 우선순위</p>
                  <h2>
                    업종 특성에 맞춘{" "}
                    <br />
                    <span>초기 실행 순서</span>
                  </h2>
                </div>
                <p className="geo-lead">{m.month.src}</p>
              </div>
              <ul className="sw-mon">
                {m.month.rows.map(([k, seq, x], i) => (
                  <li key={k} style={vars({ i })}>
                    <b>{k}</b>
                    <strong>{seq}</strong>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {/* ④ 묶는 순서: 서비스 사진 카드 */}
        <section className={`dp-sec geo-sec rv sw-combo${m.month ? " geo-sec-mist" : ""}`} id="combo">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">솔루션 구성</p>
                <h2>
                  {f.n}에 맞춘{" "}
                  <br />
                  <span>채널 결합 순서</span>
                </h2>
              </div>
              <p className="geo-lead">카드를 누르면 서비스 상세 내용을 볼 수 있습니다.</p>
            </div>
            <ol className="sw-combo-g" style={vars({ n: f.c.length })}>
              {f.c.map(([k, n, why], i) => {
                const o = SERVICES.find((x) => x.k === k)
                const inner = (
                  <>
                    <figure>
                      <img src={SVC_BY_SLUG[slug]?.[k] || (f.c.findIndex((x) => x[0] === k) !== i && SVC_IMG2[k]) || SVC_IMG[k] || "/sf/ex/m-team.jpg"} alt="" loading="lazy" decoding="async" />
                      <em>STEP {String(i + 1).padStart(2, "0")}</em>
                    </figure>
                    <div>
                      <b>{n}</b>
                      <span>{why}</span>
                      {o ? (
                        <span className="cw-next-go">
                          {o.n} <Icon k="arrow" />
                        </span>
                      ) : null}
                    </div>
                  </>
                )
                return (
                  <li key={n} style={vars({ i })}>
                    {o ? <Link href={`/services/${o.slug}`}>{inner}</Link> : <a href="#contact">{inner}</a>}
                  </li>
                )
              })}
            </ol>
            {w ? (
              <div className="vw-works">
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
                    if ("video" in it) return null
                    return (
                      <li key={i} className={it.wide ? "wk-w" : it.tall ? "wk-tall" : it.img.startsWith("/sf/pf/") ? "wk-p" : undefined} style={vars({ n: i })}>
                        <img src={it.img} alt={it.cap} width={it.w} height={it.h} loading="lazy" decoding="async" />
                        <span>{it.cap}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        {/* ⑤ 진행 순서 + 사례 */}
        <section className={`dp-sec geo-sec rv cw-proc${m.month ? "" : " geo-sec-mist"}`} id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">진행 순서</p>
                <h2>
                  {d.process[0][0]}부터 리포트까지{" "}
                  <br />
                  <span>네 단계로 진행합니다</span>
                </h2>
              </div>
              <p className="geo-lead">전담 AE가 기획부터 실행까지 1:1로 맡습니다. 모든 채널 성과는 매주 통합 리포트 한 장으로 정리해 드립니다.</p>
            </div>
            <ol className="cw-proc-g" aria-label="진행 네 단계">
              {d.process.map(([t, x], i) => (
                <li key={t} style={vars({ i })}>
                  <figure>
                    <img src={(PROC_IMG[slug] ?? PROC_IMG.local)[i] ?? PROC_IMG.local[0]} alt="" loading="lazy" decoding="async" />
                    <em>STEP {String(i + 1).padStart(2, "0")}</em>
                  </figure>
                  <div>
                    <b>{t}</b>
                    <span>{x}</span>
                  </div>
                </li>
              ))}
            </ol>
            {m.case ? <CaseBox c={m.case} /> : null}
          </div>
        </section>

        {/* ⑥ 다른 업종 */}
        <nav className="sw-other" aria-label="다른 업종">
          <div className="dp-w">
            <p>업종별 전략</p>
            <ul>
              {SOLUTIONS.map((o) => (
                <li key={o.slug}>
                  <Link href={`/solutions/${o.slug}`} aria-current={o.slug === f.slug ? "page" : undefined}>
                    <b>{o.n}</b>
                    <span>{o.who}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ⑦ 자주 묻는 질문 */}
        <FaqBlock items={d.faq} />

        {/* ⑧ 문의 */}
        {isLocal ? (
          <ContactBlock
            title={`${f.n}, 어떤 순서가 맞을지 상담해 드립니다.`}
            sub="매장·병원·학원 등은 아래 양식이나 전화, 카카오톡으로 편하게 문의해 주세요. 비용은 상담 뒤에 맞춤 제안서로 보내 드립니다."
            label="문의하기"
            initial={keys}
            source={`solution_${f.slug}`}
          />
        ) : (
          <ContactBlock title={d.ct?.title ?? `${f.n}, 어떤 순서가 맞는지 짚어 드립니다.`} label="문의하기" initial={keys} source={`solution_${f.slug}`} />
        )}
      </div>
    </DocShell>
  )
}
