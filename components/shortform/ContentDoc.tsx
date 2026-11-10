import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS, MORE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, Nums, vars } from "./parts"
import { Icon } from "./icons"
import { WORKS } from "./Works"
import HeroWall from "./HeroWall"

/**
 * /services/content — 콘텐츠 프로덕션 상세. 2026-11-08 카피 세션 안(docs/카피개선-콘텐츠-2026-11-08.md)으로 새로 짬.
 * 퍼포먼스 쪽과 같은 줄기: 퍼포먼스는 소재 싸움 → 찍는 팀이 반응 올 장면을 알고 찍어야 → 퍼포먼스팀이 촬영 회의부터 → 저희 촬영은 납품 날이 아니라 광고 반응을 보고 끝남.
 * 화면 문법은 인플루언서·바이럴 쪽(.gx.ix)과 같음. 장면 수·비율은 노하우 비공개라 쓰지 않음.
 */

/** 하는 일 네 단계 [이름, 한 줄, 아이콘] — 11-08 대표 「촬영에서 끝나지 않고 필요한 곳에 적용까지」 */
const PIPE: [string, string, "plan" | "content" | "infl" | "perf"][] = [
  ["기획", "어디에 올릴지 먼저 정하고 장면을 구성합니다", "plan"],
  ["촬영", "저희 촬영팀이 현장에 나가 직접 찍습니다", "content"],
  ["편집", "올릴 곳의 크기와 분위기에 맞춰 편집합니다", "infl"],
  ["채널 반영", "광고, 지도, 블로그, SNS 등 필요한 곳에 바로 올립니다", "perf"],
]

/** 촬영 하루치가 올라가는 곳(예시) [파일 종류, 찍어 온 것, 올라가는 곳] */
const FLOW: [string, string, string][] = [
  ["MP4", "세로형 숏폼 편집본", "인스타그램 릴스·유튜브 쇼츠"],
  ["MP4", "광고용 하이라이트 버전", "퍼포먼스 광고 소재"],
  ["JPG", "매장·공간 대표 컷", "네이버 플레이스·지도 대표 사진"],
  ["JPG", "상세 보정 컷·설명 문구", "브랜드 블로그 콘텐츠"],
  ["JPG", "고해상도 메인 비주얼", "공식 웹사이트"],
  ["SRT", "자막·제목 후보안·썸네일", "영상 콘텐츠별 일괄 제공"],
]

/** 세부 상품 사진 — 저희 촬영분 위주 */
const PROD_IMG: Record<string, string> = {
  "브랜디드 바이럴 영상": "/sf/gen/c3-content-prod-1.webp",
  "숏폼 제작": "/sf/gen/c3-content-prod-2.webp",
  "방송·드라마 PPL": "/sf/gen/c3-content-prod-3.webp",
  "모델 캐스팅": "/sf/gen/c3-content-prod-4.webp",
  "SNS 채널 운영": "/sf/gen/c3-content-prod-5.webp",
  "제품·공간 포토그래피": "/sf/gen/c3-content-prod-6.webp",
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
// 11-10 대표 「AI 사진 말고 3D로」: 세부 서비스·이유·단계 카드 그림을 홈과 같은 3D 그림으로 바꿨다(public/sf/gen/c3-*.webp)
const DIFF_IMG = ["/sf/gen/c3-content-diff-1.webp", "/sf/gen/c3-content-diff-2.webp"]
const DIFF_TAGS = [
  ["광고", "블로그", "지도", "홈페이지"],
  ["퍼포먼스팀 촬영 회의 참여"],
]

/** 진행 순서 사진 */
/* 11-09 대표: 진행 순서 네 칸은 홈·회사소개와 같은 3D 그림으로 */
const PROC_IMG = ["/sf/gen/c3-content-proc-1.webp", "/sf/gen/c3-content-proc-2.webp", "/sf/gen/c3-content-proc-3.webp", "/sf/gen/c3-content-proc-4.webp"]

/** 같이 하면 사진 */
const PAIR_IMG: Record<string, string> = { infl: "/sf/pf/infl-beauty.jpg", perf: "/sf/ex/m-shop.jpg" }

/** 촬영 장면 목록 예시 [장면, 그림, 쓸 곳들] — 사진은 저희 촬영 예시 컷 */
const SCENES: [string, string, string[]][] = [
  ["장면 A · 제품 클로즈업", "/sf/ex/beauty-flat.jpg", ["광고 소재", "홈페이지 메인"]],
  ["장면 B · 매장 안 자리", "/sf/ex/cafe.jpg", ["지도 대표 사진", "블로그 가이드"]],
  ["장면 C · 제품을 다루는 장면", "/sf/ex/shootcos.jpg", ["릴스·쇼츠", "광고 소재"]],
  ["장면 D · 대표 메뉴", "/sf/ex/fnb-dish.jpg", ["지도 메뉴 사진", "홈페이지 메뉴 안내"]],
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
      <div className="gx ix vx cx cxp">
        <JsonLd data={ld} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="콘텐츠 제작 소개">
          <div className="dp-bg" aria-hidden="true">
            <HeroWall k={s.slug} />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="콘텐츠 제작 대행: 저희 촬영은 납품에서 끝나지 않습니다">
              <small className="ix-kw">콘텐츠 제작 대행</small>{" "}
              <Chars text={"저희 촬영은\n납품에서 끝나지 않습니다"} mark="끝나지 않습니다" />
            </h1>
            <p className="vx-era">전환을 일으키는 콘텐츠 제작</p>
            <p className="dp-lead">
              모델 캐스팅부터 <span className="nw">숏폼·쇼츠·브랜디드 영상까지,</span>{" "}
              <br />
              저희 촬영팀이 <span className="nw">기획부터 배포까지 모두 맡습니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                촬영 구성 · 견적 받아보기
              </a>
            </div>
            <p className="vx-trust">인하우스 촬영팀 · 모델 캐스팅 · <span className="nw">누적 숏폼 360편 이상 · 전담 AE</span></p>
          </div>
          <a className="ix-cue" href="#shotlist" aria-label="촬영 장면 목록으로 내려가기">
            <span>위즈더플래닝의 콘텐츠 프로덕션</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ③ 한 번 찍는 날: 장면 목록 예시 보드 */}
        <CSec
          id="shotlist"
          eb="통합 촬영 설계"
          q={
            <>
              한 번 찍어 여러 곳에 쓰는{" "}
              <br />
              <span>
                <span className="nw">사진·영상</span> 기획
              </span>
            </>
          }
          sub={
            <>
              저희 촬영팀이 직접 찍어서 광고나 지도, 블로그 중 어디에 쓸지 기획 단계부터 정합니다.{" "}
              <br />
              하루만 촬영해도 모든 채널에 올릴 원본을 얻을 수 있습니다.
            </>
          }
        >
          <div className="cx-board" aria-label="촬영 장면 목록 예시">
            <div className="cx-board-h">
              <span>촬영 장면 구성안</span>
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
                  <ul aria-label="활용 채널">
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
                <p className="geo-eb">운영 범위</p>
                <h2>
                  찍고 끝내지 않고{" "}
                  <br />
                  <span>알맞게 편집해 올려 드립니다</span>
                </h2>
              </div>
              <p className="geo-lead">
                찍은 사진과 영상을 릴스·쇼츠, 블로그, 지도, 광고 크기에 맞춰 편집합니다.{" "}
                <br />
                다 만든 콘텐츠는 저희가 직접 채널에 올려 드립니다.
              </p>
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
            <div className="cw-flow rv" aria-label="촬영 하루치 결과물이 올라가는 곳, 예시">
              <div className="cw-flow-h">
                <b>한 번 찍은 결과물이 올라가는 곳</b>
                <Ex>예시</Ex>
              </div>
              <div className="cw-flow-cols" aria-hidden="true">
                <span>제작 산출물</span>
                <span />
                <span>반영 채널</span>
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
            {/* 11-09 대표: 제목은 「콘텐츠 프로덕션의 서비스」 한 줄, 부제는 제목 바로 아래 한 줄로 붙인다 */}
            <div className="cw-items-head">
              <p className="geo-eb">세부 서비스</p>
              <h2>
                {s.n} <span>세부 서비스</span>
              </h2>
              <p className="geo-lead">
                필요한 것만 따로 맡기셔도 됩니다.{" "}
                <br />
                여러 개를 같이 하시면 한 번에 촬영하여 비용과 시간을 아껴 드립니다.
              </p>
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
            {/* 11-09 대표: 제목은 「레퍼런스」로 간단히. 짧은 제목이라 부제는 제목 아래로 붙인다 */}
            <div className="cw-items-head">
              <p className="geo-eb">제작 포트폴리오</p>
              <h2>
                저희가 직접 찍은 <span>레퍼런스</span>
              </h2>
              <p className="geo-lead cw-lead-2">
                지금까지 360편 넘는 숏폼을 직접 만들었습니다.{" "}
                <br className="gx-br" />
                상호가 안 보이는 장면만 추렸고 <span className="nw">뷰티·패션·제품</span> 연출 컷은 예시로 넣었습니다.
              </p>
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
            <ul className="cw-photos rv">
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
              마케팅팀과 같이 일하는{" "}
              <br />
              <span>자체 촬영팀이 좋은 이유</span>
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
            {/* 11-09 대표: 제목은 「진행 프로세스 네 단계」로 간단히, 부제는 제목 아래 한 줄 */}
            <div className="cw-items-head">
              <p className="geo-eb">진행 순서</p>
              <h2>
                기획부터 채널 반영까지 <span>네 단계로 진행합니다</span>
              </h2>
              <p className="geo-lead">
                단계마다 확인을 받고 다음으로 넘어갑니다.{" "}
                <br />
                전담 AE가 처음부터 끝까지 1:1로 챙겨 드립니다.
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
              <b>월간 결과 리포트에 들어가는 내용</b>
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
            {/* 11-09 대표: 제목 「촬영한 영상은 사용 가능한 모든 곳에 게시」. 부제는 제목 아래로 */}
            <div className="cw-items-head">
              <p className="geo-eb">콘텐츠 활용</p>
              <h2>
                잘 찍은 영상 하나로{" "}
                <br className="cw-br" />
                <span>광고와 인플루언서까지</span>
              </h2>
              <p className="geo-lead">
                공식 채널에 올린 숏폼을 인플루언서 콘텐츠로도 씁니다.{" "}
                <br />
                여기서 반응이 좋은 영상은 퍼포먼스 광고 소재로 바로 돌립니다.
              </p>
            </div>
            {/* 11-08 대표 「비주얼 개선」: 가운데 저희가 찍은 숏폼 한 편 → 왼쪽 인플루언서 게시물, 오른쪽 광고로 다시 쓰이는 그림 */}
            <div className="cw-hub rv">
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
                          <img src="/sf/v/cx-hub.jpg" alt="" loading="lazy" decoding="async" />
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
                          <img src="/sf/v/cx-hub.jpg" alt="" loading="lazy" decoding="async" />
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
                <small>저희가 만든 숏폼 원본</small>
                <div className="cw-hub-phone">
                  <video src="/sf/v/cx-hub.mp4" poster="/sf/v/cx-hub.jpg" muted loop playsInline autoPlay preload="none" aria-label="저희가 찍은 덮밥집 숏폼" />
                </div>
                <span>브랜드 공식 채널에 먼저 올립니다</span>
              </div>
            </div>
            <Ex>예시 화면</Ex>
          </div>
        </section>

        {/* ⑩ FAQ: 퍼포먼스·인플루언서·GEO와 같은 부품 */}
        <FaqBlock items={d.faq} note="더 궁금한 점이 있으시면 문의를 남겨 주세요. 전담 AE가 자세히 알려 드리겠습니다." />

        {/* ⑪ 문의 */}
        <ContactBlock title={d.ct?.title ?? `${s.n}, 진단 신청부터 시작하세요.`} sub={d.ct?.sub} label={d.ct?.label} initial={[s.k]} source={`service_${s.slug}`} />
      </div>
    </DocShell>
  )
}
