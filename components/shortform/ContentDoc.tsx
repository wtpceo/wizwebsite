import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, Nums, vars } from "./parts"
import { Icon } from "./icons"
import { WORKS } from "./Works"
import { Reads } from "./DocMore"

/**
 * /services/content — 콘텐츠 프로덕션 상세. 2026-11-08 카피 세션 안(docs/카피개선-콘텐츠-2026-11-08.md)으로 새로 짬.
 * 퍼포먼스 쪽과 같은 줄기: 퍼포먼스는 소재 싸움 → 찍는 팀이 반응 올 장면을 알고 찍어야 → 퍼포먼스팀이 촬영 회의부터 → 저희 촬영은 납품 날이 아니라 광고 반응을 보고 끝남.
 * 화면 문법은 인플루언서·바이럴 쪽(.gx.ix)과 같음. 장면 수·비율은 노하우 비공개라 쓰지 않음.
 */

/** 하는 일 네 단계 [이름, 한 줄, 아이콘] — 11-08 대표 「촬영에서 끝나지 않고 필요한 곳에 적용까지」 */
const PIPE: [string, string, "plan" | "content" | "infl" | "perf"][] = [
  ["기획", "어디에 쓸지 정하고 장면 목록을 만듭니다", "plan"],
  ["촬영", "자체 촬영팀이 현장에 갑니다", "content"],
  ["편집", "쓸 곳마다 길이와 크기를 맞춥니다", "infl"],
  ["적용", "필요한 곳에 직접 올립니다", "perf"],
]

/** 촬영 하루치가 올라가는 곳(예시) [파일 종류, 찍어 온 것, 올라가는 곳] */
const FLOW: [string, string, string][] = [
  ["MP4", "숏폼 편집본", "릴스·쇼츠"],
  ["MP4", "광고용 짧은 버전", "광고 소재"],
  ["JPG", "대표 사진", "지도 대표 사진"],
  ["JPG", "보정 사진·설명 문구", "블로그"],
  ["JPG", "메인 사진", "홈페이지"],
  ["SRT", "자막·제목 후보·썸네일", "영상마다 함께"],
]

/** 세부 상품 사진 — 저희 촬영분 위주 */
const PROD_IMG: Record<string, string> = {
  "브랜디드 바이럴 영상": "/sf/pf/w6.jpg",
  "숏폼 제작": "/sf/v/r15.jpg",
  "방송·드라마 PPL": "/sf/ex/m-shoot.jpg",
  "모델 캐스팅": "/sf/ex/makeup.jpg",
  "SNS 채널 운영": "/sf/ex/m-reel.jpg",
  "제품·공간 포토그래피": "/sf/pf/w4.jpg",
}

/** 숏폼 목록 [파일, 이름표, 예시 여부, 화면 자막] — 11-08 대표 「예시 영상도 자막 넣어 위 목록에 섞어」.
    r = 저희가 직접 찍은 숏폼(업체명·간판 보이는 편 뺌), b·f·p = 생성 장면으로 만든 예시라 이름표에 '예시'를 붙인다 */
const REELS: [string, string, boolean, string?][] = [
  ["r31", "고깃집", false],
  ["b3", "세럼 제품", true, "끈적임 없이\n쏙 스며드는 세럼"],
  ["r15", "생선구이·회", false],
  ["f3", "니트 매장", true, "이번 시즌 니트\n이렇게 골라 보세요"],
  ["r11", "소갈비", false],
  ["p1", "선물 세트", true, "선물 고민 끝\n언박싱 해 볼게요"],
  ["r22", "보양식", false],
  ["b1", "세럼 후기", true],
  ["r03", "스크린골프", false],
  ["f1", "출근룩", true],
]

/** 직접 찍은 현장 사진 [파일, 설명] */
const PHOTOS: [string, string][] = [
  ["w1", "고깃집 한상"],
  ["w4", "미용실 공간"],
  ["w6", "토치로 마무리하는 장면"],
  ["w2", "회 한 점"],
  ["g6", "매장 공간"],
  ["w5", "필라테스 공간"],
  ["g2", "고기 손질"],
  ["w3", "찜기 메뉴"],
  ["m1", "찌개 메뉴"],
  ["m3", "구이 메뉴"],
  ["m2", "볶음 메뉴"],
]

/** 자체 촬영팀 두 칸 사진·표시 */
const DIFF_IMG = ["/sf/pf/w1.jpg", "/sf/ex/m-shoot.jpg"]
const DIFF_TAGS = [
  ["광고", "블로그", "지도", "홈페이지"],
  ["퍼포먼스팀 촬영 회의 참여"],
]

/** 진행 순서 사진 */
const PROC_IMG = ["/sf/ex/m-team.jpg", "/sf/ex/m-shoot.jpg", "/geo/media-editor.jpg", "/sf/img/report.jpg"]

/** 같이 하면 사진 */
const PAIR_IMG: Record<string, string> = { infl: "/sf/pf/infl-beauty.jpg", perf: "/sf/ex/m-shop.jpg" }

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
            <p className="vx-era">반응이 오는 소재를 만듭니다</p>
            <p className="dp-lead">
              모델 섭외부터 <span className="nw">숏폼·쇼츠·롱폼까지,</span>{" "}
              <br />
              자체 촬영팀이 <span className="nw">기획하고 찍고 편집합니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                문의하기
              </a>
            </div>
            <p className="vx-trust">자체 촬영팀 · 모델 섭외 · <span className="nw">숏폼 360편 넘게 · 전담 AE</span></p>
          </div>
          <a className="ix-cue" href="#shotlist" aria-label="촬영 장면 목록으로 내려가기">
            <span>위즈더플래닝은 이렇게 일해요</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ③ 한 번 찍는 날: 장면 목록 예시 보드 */}
        <CSec
          id="shotlist"
          eb="촬영 장면 목록"
          q={
            <>
              다양한 곳에서 활용 가능한{" "}
              <br />
              <span>
                <span className="nw">사진과 영상을</span> 촬영합니다
              </span>
            </>
          }
          sub="외주가 아니라 같은 회사 촬영팀이라, 이 장면이 광고 소재가 될지 지도 대표 사진이 될지 블로그 가이드에 들어갈지 찍기 전에 압니다. 그래서 하루 촬영에서 여러 소재로 나눠 쓸 수 있는 콘텐츠 재료를 함께 촬영해 옵니다."
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

        {/* ④ 하는 일(11-08 대표 「디자인」): 기획 → 촬영 → 편집 → 게시 네 칸 + 하루 촬영 납품 폴더(예시) + 채널 소유 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-what" id="what">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">하는 일</p>
                <h2>
                  찍고 끝나지 않고,{" "}
                  <br />
                  <span>필요한 곳에 올려 드립니다</span>
                </h2>
              </div>
              <p className="geo-lead">촬영한 사진과 영상을 릴스·쇼츠, 블로그, 지도, 광고, 홈페이지에 맞게 다듬어 올리는 것까지 저희가 맡습니다.</p>
            </div>
            <ol className="cw-pipe" aria-label="콘텐츠가 만들어지는 네 단계">
              {PIPE.map(([t, x, k], i) => (
                <li key={t} style={vars({ i })}>
                  <span className="ic" aria-hidden="true">
                    <Icon k={k} />
                  </span>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <span className="tx">{x}</span>
                </li>
              ))}
            </ol>
            <div className="cw-flow" aria-label="촬영 하루치 결과물이 올라가는 곳, 예시">
              <div className="cw-flow-h">
                <b>촬영 하루치, 이렇게 나눠 올립니다</b>
                <Ex>예시</Ex>
              </div>
              <div className="cw-flow-cols" aria-hidden="true">
                <span>찍어 온 것</span>
                <span />
                <span>올라가는 곳</span>
              </div>
              <ul>
                {FLOW.map(([t, n, to], i) => (
                  <li key={n} style={vars({ i })}>
                    <span className="cw-src">
                      <span className="cw-file" data-t={t}>
                        {t}
                      </span>
                      <b>{n}</b>
                    </span>
                    <i className="cw-line" aria-hidden="true" />
                    <span className="cw-to">{to}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ⑤ 세부 상품(11-08 대표 「디자인」): 여섯 상품을 사진 카드로. 사진은 저희 촬영분 위주 */}
        <section className="dp-sec geo-sec rv cw-items" id="items">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">세부 상품</p>
                <h2>
                  {s.n}에는{" "}
                  <br />
                  <span>이런 상품이 있습니다</span>
                </h2>
              </div>
              <p className="geo-lead">필요한 것만 골라 맡기시면 됩니다. 여러 개를 같이 맡기시면 한 번 촬영으로 나눠 만듭니다.</p>
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
          </div>
        </section>

        {/* ⑥ 직접 찍은 결과물(11-08 대표 「큰 예시 세 장은 뒤로, 우리 레퍼런스를 더」): 릴스 다섯 편 → 현장 사진 열한 장 → 맨 뒤에 뷰티·패션 예시 세 편(작게) */}
        <section className="dp-sec geo-sec rv cw-works" id="works">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">직접 찍은 결과물</p>
                <h2>
                  저희 촬영팀이{" "}
                  <br />
                  <span>현장에서 찍은 것들입니다</span>
                </h2>
              </div>
              <p className="geo-lead">숏폼은 지금까지 360편 넘게 만들었습니다. 업체 이름과 간판이 보이는 장면은 빼고 골랐고, 뷰티·패션·제품 장면은 예시로 함께 보여 드립니다.</p>
            </div>
            <ul className="dp-works cw-reels">
              {REELS.map(([v, cap, ex, sub], i) => (
                <li key={v} className={`wk-v${ex ? " is-ex" : ""}`} style={vars({ n: i })}>
                  <video data-src={`/sf/v/${v}.mp4`} poster={`/sf/v/${v}.jpg`} muted loop playsInline preload="none" aria-label={`숏폼${ex ? " 예시" : ""}: ${cap}`} />
                  {sub ? (
                    <p className="cw-sub" aria-hidden="true">
                      {sub.split("\n").map((l) => (
                        <b key={l}>{l}</b>
                      ))}
                    </p>
                  ) : null}
                  <span>{ex ? `예시 · ${cap}` : cap}</span>
                </li>
              ))}
            </ul>
            <ul className="cw-photos">
              {PHOTOS.map(([f, cap], i) => (
                <li key={f} style={vars({ i })}>
                  <img src={`/sf/pf/${f}.jpg`} alt={cap} loading="lazy" decoding="async" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ⑦ 자체 팀이 촬영하면: 두 장 사진 카드 */}
        <section className="dp-sec geo-sec rv cw-diff" id="diff">
          <div className="dp-w">
            <p className="geo-eb">자체 촬영팀</p>
            <h2>
              자체 팀이 촬영하면{" "}
              <br />
              <span>무엇이 다른가요?</span>
            </h2>
            <ol className="cw-diff-g">
              {d.diff.map(([t, x], i) => (
                <li key={t} style={vars({ i })}>
                  <figure>
                    <img src={DIFF_IMG[i]} alt="" loading="lazy" decoding="async" />
                    <figcaption>{DIFF_TAGS[i].map((g) => <span key={g}>{g}</span>)}</figcaption>
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

        {/* ⑧ 진행 순서(11-08 대표 「리디자인」): 사진이 붙은 네 단계 + 리포트에 들어가는 것 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">진행 순서</p>
                <h2>
                  장면 목록부터 리포트까지,{" "}
                  <br />
                  <span>네 단계로 진행합니다</span>
                </h2>
              </div>
              <p className="geo-lead">단계마다 고객사 확인을 받고 다음으로 넘어갑니다. 전담 AE 한 명이 처음부터 끝까지 연락을 맡습니다.</p>
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
              <b>월말 리포트에 들어가는 것</b>
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

        {/* ⑨ 같이 하면(11-08 대표 「리디자인」): 찍은 영상이 인플루언서 게시물·광고로 다시 쓰이는 모습 */}
        <section className="dp-sec geo-sec rv cw-next" id="pairs">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">같이 하면</p>
                <h2>
                  찍은 영상은{" "}
                  <br />
                  <span>여기에도 씁니다</span>
                </h2>
              </div>
              <p className="geo-lead">브랜드 채널에 올린 숏폼을 인플루언서 계정에도 같이 올리고, 반응 좋은 영상은 광고 소재로 씁니다.</p>
            </div>
            {/* 11-08 대표 「비주얼 개선」: 가운데 저희가 찍은 숏폼 한 편 → 왼쪽 인플루언서 게시물, 오른쪽 광고로 다시 쓰이는 그림 */}
            <div className="cw-hub">
              <svg className="cw-hub-lines" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
                {["M500 200 C 420 200, 400 120, 300 120", "M500 200 C 580 200, 600 120, 700 120"].map((dd, i) => (
                  <g key={dd}>
                    <path d={dd} />
                    <circle r="5">
                      <animateMotion dur="2.2s" begin={`${i * 0.6}s`} repeatCount="indefinite" path={dd} />
                    </circle>
                  </g>
                ))}
              </svg>
              {d.pairs.map(([k, why], i) => {
                const o = SERVICES.find((x) => x.k === k)!
                return (
                  <Link key={k} href={`/services/${o.slug}`} className={`cw-hub-card ${i === 0 ? "l" : "r"}`}>
                    <div className="cw-hub-vis" aria-hidden="true">
                      {k === "infl" ? (
                        <div className="cw-post">
                          <div className="cw-post-h">
                            <i />
                            <b>creator_00</b>
                            <small>협찬</small>
                          </div>
                          <img src="/sf/v/r31.jpg" alt="" loading="lazy" decoding="async" />
                          <div className="cw-post-f">
                            <span>♡ 좋아요</span>
                            <span>댓글</span>
                            <span>공유</span>
                          </div>
                        </div>
                      ) : (
                        <div className="cw-ad">
                          <div className="cw-post-h">
                            <i />
                            <b>브랜드 계정</b>
                            <small>광고</small>
                          </div>
                          <img src="/sf/v/r31.jpg" alt="" loading="lazy" decoding="async" />
                          <div className="cw-ad-cta">
                            <span>자세히 보기</span>
                            <i>›</i>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="cw-hub-tx">
                      <em>{i === 0 ? "인플루언서 계정에" : "광고 소재로"}</em>
                      <b>{o.n}</b>
                      <span>{why}</span>
                      <span className="cw-next-go">
                        자세히 보기 <Icon k="arrow" />
                      </span>
                    </div>
                  </Link>
                )
              })}
              <div className="cw-hub-core">
                <small>저희가 찍은 숏폼 한 편</small>
                <div className="cw-hub-phone">
                  <video src="/sf/v/r31.mp4" poster="/sf/v/r31.jpg" muted loop playsInline autoPlay preload="none" aria-label="저희가 찍은 고깃집 숏폼" />
                </div>
                <span>브랜드 채널에 먼저 올립니다</span>
              </div>
            </div>
            <Ex>예시 화면</Ex>
          </div>
        </section>

        {/* ⑩ FAQ: 퍼포먼스·인플루언서·GEO와 같은 부품 */}
        <FaqBlock items={d.faq} note="여기 없는 질문은 문의로 남겨 주세요. 담당자가 답해 드립니다." />
        {m.reads ? (
          <div className="dp-w">
            <Reads items={m.reads} />
          </div>
        ) : null}

        {/* ⑪ 문의 */}
        <ContactBlock title={d.ct?.title ?? `${s.n}, 진단 신청부터 시작하세요.`} sub={d.ct?.sub} label={d.ct?.label} initial={[s.k]} source={`service_${s.slug}`} />
      </div>
    </DocShell>
  )
}
