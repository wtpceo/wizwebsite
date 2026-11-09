import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Chars, vars } from "./parts"
import { Icon } from "./icons"
import { WORKS } from "./Works"

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

/** 두 나라 카드 [나라, 쓰는 앱, 사진, 이 나라 상품 이름들] */
const LANDS: [string, string, string, string[]][] = [
  ["중국", "샤오홍슈 · 도우인 · 따중디엔핑", "/sf/ex/m-tourist.jpg", ["샤오홍슈 · 도우인 · 콰이쇼우", "따중디엔핑", "왕홍 라이브커머스"]],
  ["일본", "인스타그램 · LINE", "/sf/ex/myeong.jpg", ["일본 인스타그램 인플루언서", "LINE 공식계정 · LINE 광고"]],
]

/** 국내 팀과 같이 세 칸 사진·표시 */
const DIFF_IMG = ["/sf/ex/m-team.jpg", "/sf/ex/m-shoot.jpg", "/sf/ex/palace.jpg"]
const DIFF_TAGS = [["국내", "해외", "한 리포트"], ["국내 촬영분 다시 쓰기"], ["관광객이 오는 지역"]]

/** 진행 순서 사진 */
const PROC_IMG = ["/geo/media-editor.jpg", "/sf/ex/shop.jpg", "/geo/media-unbox.jpg", "/sf/img/report.jpg"]

/** 같이 하면 사진 */
const PAIR_IMG: Record<string, string> = { infl: "/sf/pf/infl-fashion.jpg", search: "/geo/media-ai.jpg" }

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
              <Chars text={"한국에 오기 전에,\n갈 곳은 이미 정해집니다"} mark="이미 정해집니다" />
            </h1>
            <p className="vx-era">중국·일본 고객은 여행 전에 현지 앱에서 고릅니다</p>
            <p className="dp-lead">
              샤오홍슈·도우인과 일본 인스타그램·LINE에 <span className="nw">브랜드를 올리고,</span>{" "}
              <br />
              한국에 와서 지도를 열어도 <span className="nw">같은 정보가 나오게 맞춥니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                문의하기
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

        {/* ③ 하는 일 + 세부 상품 + 현지 크리에이터를 한 칸으로(11-08 대표 「없앨 것 없애고 리디자인」): 중국·일본 두 나라 카드 + 올라간 화면 예시 */}
        <section className="dp-sec geo-sec geo-sec-mist rv gb-what" id="what">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">하는 일</p>
                <h2>
                  중국과 일본은{" "}
                  <br />
                  <span>쓰는 앱이 다릅니다</span>
                </h2>
              </div>
              <p className="geo-lead">나라마다 고객이 여행을 준비하는 앱에 브랜드를 현지 말로 소개합니다. 브랜드 소개와 메뉴를 중국어·일본어로 옮기는 일부터 합니다.</p>
            </div>
            <div className="gb-land">
              {LANDS.map(([name, sub, img, keys], li) => (
                <article key={name} style={vars({ i: li })}>
                  <figure>
                    <img src={img} alt="" loading="lazy" decoding="async" />
                    <figcaption>
                      <b>{name}</b>
                      <span>{sub}</span>
                    </figcaption>
                  </figure>
                  <ul>
                    {s.items
                      .filter(([n]) => keys.includes(n))
                      .map(([n, t]) => (
                        <li key={n}>
                          <b>{n}</b>
                          <span>{d.itemNotes?.[n] || t}</span>
                        </li>
                      ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="gb-pick">
              <em>현지 크리에이터 고르는 기준</em>
              <p>팔로워 숫자보다 우리 고객층이 실제로 보는 계정인지, 최근 반응이 오르고 있는지를 봅니다. 후보는 고른 이유를 붙여 리스트로 먼저 드리고, 고객사가 고른 뒤에 섭외합니다.</p>
            </div>
            {w ? (
              <div className="vw-works">
                <p className="vx-sub-h">현지 앱에는 이렇게 올라갑니다</p>
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

        {/* ④ 국내 팀과 같이: 사진 카드 세 장 */}
        <section className="dp-sec geo-sec rv cw-diff gb-diff" id="diff">
          <div className="dp-w">
            <p className="geo-eb">국내 팀과 같이</p>
            <h2>
              국내 팀이 같이 하면{" "}
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

        {/* ⑤ 진행 순서: 사진 네 단계 + 리포트 띠 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">진행 순서</p>
                <h2>
                  현지 말로 옮기는 일부터,{" "}
                  <br />
                  <span>네 단계로 진행합니다</span>
                </h2>
              </div>
              <p className="geo-lead">국내 캠페인과 같은 전담 AE가 같은 리포트 틀로 해외 채널까지 챙깁니다.</p>
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
          </div>
        </section>

        {/* ⑥ 같이 하면: 사진 카드 두 장 */}
        <section className="dp-sec geo-sec rv cw-pairs" id="pairs">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">같이 하면</p>
                <h2>
                  해외 고객도 결국{" "}
                  <br />
                  <span>한국에서 지도를 엽니다</span>
                </h2>
              </div>
              <p className="geo-lead">현지 앱에서 본 브랜드를 한국에 와서 찾을 때, 지도와 국내 후기까지 같은 정보로 이어지게 합니다.</p>
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

        {/* ⑦ FAQ: 공통 부품 */}
        <FaqBlock items={d.faq} note="여기 없는 질문은 문의로 남겨 주세요. 담당자가 답해 드립니다." />

        {/* ⑧ 문의 */}
        <ContactBlock title={d.ct?.title ?? `${s.n}, 진단 신청부터 시작하세요.`} sub={d.ct?.sub} label={d.ct?.label} initial={[s.k]} source={`service_${s.slug}`} />
      </div>
    </DocShell>
  )
}
