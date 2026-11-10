import type { CSSProperties, ReactNode } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, CONTACT, TEAMS } from "@/components/shortform/content"

/** 한 캠페인이 흐르는 순서(11-07 대표 논리). 번호·제목·한 줄·링크 */
const CHAIN: [string, string, string, string | null][] = [
  ["01", "캠페인 기획", "지금 인지도와 고객이 빠져나가는 구간을 찾습니다.", "/diagnosis"],
  ["02", "인플루언서 섭외", "브랜드에 맞는 유튜버와 인플루언서를 먼저 찾아냅니다.", "/services/influencer"],
  ["03", "촬영·제작", "저희 촬영팀이 소재를 만들고 성과를 보며 다시 찍습니다.", "/services/content"],
  ["04", "퍼포먼스 광고", "같은 광고 도구라도 소재와 랜딩을 바꿔 성과를 냅니다.", "/services/performance"],
  ["05", "랜딩 구축", "사람과 AI가 모두 잘 읽는 웹사이트와 플레이스를 만듭니다.", "/services/homepage"],
  ["06", "2차·3차 확장", "반응이 확인된 콘텐츠를 광고 소재와 후기 출처로 다시 씁니다.", "/services/viral"],
  ["07", "SEO·GEO", "AI가 브랜드를 추천하는지 realGEO로 매주 측정합니다.", "/services/search"],
]

/** 회사소개 전용 문제·비교 문구(11-09 제미나이 재작성). 홈이 쓰는 content.ts의 PROBLEMS·COMPARE는 그대로 둔다 */
const PROBLEMS: [string, string][] = [["자기 매체만 보는 시각", "광고 회사는 광고만, 바이럴 업체는 블로그만 봅니다. 외주를 주다 보니 브랜드 전체를 그리는 사람이 없습니다."], ["건수만 채우고 끝나는 보고", "약속한 수량만 채우고 끝냅니다. 실제 문의나 매출이 얼마나 올랐는지는 아무도 책임지지 않습니다."], ["영업 따로 실행 따로", "계약할 때 만난 사람과 진짜 일하는 사람이 다릅니다. 처음 기획했던 의도는 일을 하면서 흐지부지 사라집니다."], ["무턱대고 쓰는 광고비", "웹사이트가 설득력이 없는데 광고비부터 씁니다. 고객이 어디서 나가는지 모르면 돈을 부어도 성과가 없습니다."]]
const COMPARE: [string, string, string][] = [["관리 범위", "맡은 매체 하나만", "노출부터 검색과 웹사이트 문의까지"], ["출발점", "정해진 상품 제안", "고객이 빠져나가는 곳부터 진단"], ["실행 주체", "매체마다 외주와 하청", "6개 부서가 안에서 직접 실행"], ["소통 창구", "계약 따로 실행 따로", "전담 AE 한 사람이 끝까지 책임"], ["보고 기준", "약속한 건수를 채웠는가", "실제 문의와 매출이 올랐는가"], ["보고 방식", "메일이나 서면으로 전달", "전담 AE가 직접 찾아가서 보고"]]

/** 회사 개요 오른쪽 사실 목록(11-09 대표 「우측 글도 디자인해서, 함축해서」). [큰 글자, 한 줄, 풀이] 원문 기업 개요의 사실만 */
const FACTS: [string, string, string][] = [
  ["2016", "로컬 매장·병의원에서 출발", "2016년 설립 후 식음료·교육·뷰티·의료·기업 브랜드로 넓혔습니다."],
  ["7,000+", "누적 7,000여 곳의 캠페인", "업종과 규모가 다른 브랜드의 캠페인을 직접 맡아 왔습니다."],
  ["8 · 6", "8가지 일, 6개 인하우스 부서", "섭외·광고·GEO·촬영·바이럴·글로벌·웹사이트·오프라인을 외주 없이 합니다."],
  ["1:1", "전담 AE 한 사람이 창구", "처음 상담부터 주간 리포트까지 같은 사람이 맡습니다."],
]

/** 나눠 맡길 때 설계도: [맡은 곳, 가로 %, 세로 %] — 문제 네 가지(PROBLEMS)와 같은 순서 */
const SPLIT_NODES: [string, number, number][] = [
  ["광고 대행사", 14, 16],
  ["바이럴 업체", 86, 16],
  ["촬영 외주", 14, 84],
  ["웹 제작사", 86, 84],
]
/** 가운데(500,220)에서 네 곳으로 가다 중간에 끊기는 선 [앞 토막, 뒤 토막] */
const SPLIT_LINES: [string, string][] = [
  ["M430 190 L290 120", "M250 100 L190 76"],
  ["M570 190 L710 120", "M750 100 L810 76"],
  ["M430 250 L290 320", "M250 340 L190 364"],
  ["M570 250 L710 320", "M750 340 L810 364"],
]
/** 선이 끊기는 자리 [가로 %, 세로 %] — 앞 토막 끝 바로 바깥 */
const SPLIT_GAPS: [number, number][] = [[29.5, 28], [70.5, 28], [29.5, 72], [70.5, 72]]
/** 자체 솔루션 [종류, 이름 글자, 링크, 실제 화면, 화면 설명] */
const TOOLS: [string, ReactNode, string, string, string][] = [
  [
    "자체 캐스팅 도구",
    <b key="w" className="aw-wm aw-wm-wiplu">
      위플루언서<span>WIPLUENCER</span>
    </b>,
    "/services/influencer#wiplu",
    "/tools/wiplu-youtube-clean.jpg",
    "위플루언서 채널 찾기 실제 화면(채널명 가림)",
  ],
  [
    "자체 GEO 측정 도구",
    <b key="w" className="aw-wm aw-wm-geo">
      <i>real</i>GEO<span>AI SEARCH MONITORING</span>
    </b>,
    "/services/search",
    "/tools/realgeo-dashboard.jpg",
    "realGEO 관제 현황 실제 화면(저희 웹사이트 측정)",
  ],
]

/** 첫 화면 설명(11-09 대표: 첫 문장 한 줄 + 줄바꿈). 원문은 details.ts ABOUT_PAGE.lead */
const [LEAD1, LEAD2] = (() => {
  const t = ABOUT_PAGE.lead
  const k = t.indexOf(". ")
  return k > 0 ? [t.slice(0, k + 1), t.slice(k + 2)] : [t, ""]
})()
const MAP_URL = "https://map.naver.com/p/search/" + encodeURIComponent("서울 금천구 디지털로 178 퍼블릭가산")

/** 부서가 일하는 장면. 이미지 생성 모델로 만든 연출 사진이라 실존 인물·고객사가 아니다 */
/* 11-09 대표 「사람 나오는 AI 사진은 어설프다, 캐릭터 느낌의 사물 그림이 낫다」: 부서 일을 사물로 그린 3D 그림 */
const PHOTOS: [string, string, string][] = [
  ["/sf/gen/about-shoot.jpg", "촬영팀 · 현장 촬영", "음식을 찍는 카메라와 조명을 그린 3D 그림"],
  ["/sf/gen/about-edit.jpg", "촬영팀 · 편집", "영상 편집 화면이 켜진 모니터를 그린 3D 그림"],
  ["/sf/gen/about-creator.jpg", "섭외팀 · 크리에이터 콘텐츠", "링라이트와 휴대폰으로 제품을 찍는 장면을 그린 3D 그림"],
  ["/sf/gen/about-geo.jpg", "GEO팀 · AI 답변 확인", "AI 답변 말풍선이 뜬 휴대폰과 돋보기를 그린 3D 그림"],
]
import { Icon } from "@/components/shortform/icons"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "@/components/shortform/DocParts"
import { ABOUT_PAGE } from "@/components/shortform/details"
import { Chars, vars } from "@/components/shortform/parts"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"
import HeroWall from "@/components/shortform/HeroWall"

// 회사소개(2026-11-04 리뉴얼, 11-09 대표 「디자인 통일감」: /team·업종 페이지와 같은 틀로).
// 순서: 첫 화면 → 기업 개요·여덟 가지 일 → 한 캠페인의 순서 → 나눠 맡길 때의 한계(남색) → 구조 비교 → 여섯 부서 → 자체 솔루션 → 회사 정보 → 질문 → 문의
const d = ABOUT_PAGE

export const metadata: Metadata = {
  title: d.title,
  description: d.desc,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${d.title} | 위즈더플래닝`,
    description: d.desc,
    url: "https://wiztheplanning.com/about",
    siteName: "위즈더플래닝",
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: d.title }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${d.title} | 위즈더플래닝`, description: d.desc, images: [`/og-home.jpg?v=${timestamp}`] },
}

export default function AboutPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "회사소개", path: "/about" },
  ]
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": `${SITE}/about#page`, name: d.title, description: d.desc, about: { "@id": ORG_ID }, url: `${SITE}/about` },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }
  return (
    <DocShell>
      <div className="gx ix vx cx aw">
        <JsonLd data={ld} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="위즈더플래닝 소개">
          <div className="dp-bg" aria-hidden="true">
            <HeroWall k="about" />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="회사소개: 8가지 통합 마케팅, 한 곳에서 직접">
              <small className="ix-kw">회사소개</small> <Chars text={"8가지 통합 마케팅\n한 곳에서 직접"} mark="한 곳에서 직접" />
            </h1>
            <p className="vx-era">외주 없이 6개 부서가 직접, 1:1 전담 AE가 챙깁니다.</p>
            {/* 11-09 대표: 첫 문장은 한 줄로, 줄을 바꿔 나머지 */}
            <p className="dp-lead aw-lead">
              <span className="aw-l1">{LEAD1}</span>{" "}
              <br />
              {LEAD2}
            </p>
            <div className="dp-btns aw-btns">
              <a className="p1" href="#contact">
                무료 진단 · 제안서 받기
              </a>
              <a className="p2" href={CONTACT.telHref} data-tel>
                <Icon k="phone" />
                <span>대표전화</span>
                <b>{CONTACT.tel}</b>
              </a>
            </div>
            <p className="vx-trust">
              2016년 설립 · 누적 7,000여 곳 · 인하우스 6개 부서 · <span className="nw">외주 없음</span>
            </p>
          </div>
          <a className="ix-cue" href="#overview" aria-label="기업 개요로 내려가기">
            <span>위즈더플래닝 일하는 방식</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 기업 개요 + 여덟 가지 일 */}
        <section className="dp-sec geo-sec rv aw-over" id="overview">
          <div className="dp-w">
            {/* 11-09 대표: 왼쪽 빈자리를 제목 판으로 채우고 가운데에 */}
            <div className="aw-over-g">
              <div className="aw-over-h">
                <p className="geo-eb">{d.q1}</p>
                <h2>
                  하나의 메시지로
                  <br />
                  <span>여덟 가지 일을</span>
                  <br />
                  <span>직접 합니다</span>
                </h2>
                <i aria-hidden="true" />
              </div>
              <dl className="aw-facts" aria-label="위즈더플래닝 한눈에 보기">
                {FACTS.map(([k, t, x], i) => (
                  <div key={k} style={vars({ i })}>
                    <dt>{k}</dt>
                    <dd>
                      <b>{t}</b>
                      <span>{x}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            {/* 11-09 대표 「네모 박스가 AI 디자인 같다」: 아이콘 타일·그림자 카드 대신 번호와 굵은 윗줄의 목록 */}
            <ol className="aw-svc2" aria-label="위즈더플래닝이 하는 일 여덟 가지">
              {SERVICES.map((s, i) => (
                <li key={s.k} style={vars({ i })}>
                  <Link href={`/services/${s.slug}`}>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <b>{s.n}</b>
                    <small>{s.ln}</small>
                    <span className="go">
                      자세히 보기 <Icon k="arrow" />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ③ 한 캠페인이 흐르는 순서 */}
        <section className="dp-sec geo-sec geo-sec-mist rv aw-chain" id="chain">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">일하는 순서</p>
                <h2>
                  기획에서 GEO까지{" "}
                  <br />
                  <span>캠페인이 흐르는 7단계</span>
                </h2>
              </div>
              <p className="geo-lead">각 단계를 누르면 저희가 무슨 일을 어떻게 하는지 자세히 보실 수 있습니다.</p>
            </div>
            <ol className="aw-chain-g" aria-label="한 캠페인이 흐르는 순서">
              {CHAIN.map(([no, t, x, href], i) => {
                const inner = (
                  <>
                    <em>{no}</em>
                    <b>{t}</b>
                    <span>{x}</span>
                  </>
                )
                return (
                  <li key={no} style={vars({ i })}>
                    {href ? <Link href={href}>{inner}</Link> : <div>{inner}</div>}
                  </li>
                )
              })}
            </ol>
            <p className="aw-note">GEO는 7단계 중 가장 마지막에 옵니다. 앞서 만든 콘텐츠와 출처가 탄탄해야 AI도 브랜드를 믿고 추천할 수 있습니다.</p>
          </div>
        </section>

        {/* ④ 나눠 맡길 때의 한계(남색) */}
        <section className="dp-sec geo-sec rv tw-ae aw-prob" id="one-team">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">나눠 맡길 때의 한계</p>
                <h2>
                  대행사를 나눠서 맡기면{" "}
                  <br />
                  <span>이런 문제가 생깁니다</span>
                </h2>
              </div>
              <p className="geo-lead">일을 여러 곳에 쪼개서 맡기면 브랜드 이야기가 흩어지고 돈과 시간만 낭비하기 쉽습니다.</p>
            </div>
            {/* 11-09 대표 「글이 너무 많다, 설계도·그림·모션으로」: 브랜드 하나를 네 곳이 나눠 잡으면 선이 끊긴다 */}
            <div className="aw-split">
              <div className="aw-split-stage" aria-hidden="true">
                <svg viewBox="0 0 1000 440" preserveAspectRatio="none">
                  {SPLIT_LINES.map(([a], i) => (
                    <g key={i} className="aw-split-ln" style={vars({ i })}>
                      <path d={a} />
                      <circle r="5" className="dot">
                        <animateMotion dur="2.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={a} />
                      </circle>
                    </g>
                  ))}
                </svg>
                {/* 11-09 대표 「✕가 버튼 같다」: 끊어진 고리 + '연결 끊김' 표지로 */}
                {SPLIT_GAPS.map(([x, y], i) => (
                  <span key={`${x}-${y}`} className="aw-split-cut" style={{ left: `${x}%`, top: `${y}%`, ...vars({ i }) }}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9.5 14.5 7.8 16.2a3 3 0 0 1-4.2-4.2l2.6-2.6a3 3 0 0 1 4 -.2" />
                      <path d="M14.5 9.5l1.7-1.7a3 3 0 0 1 4.2 4.2l-2.6 2.6a3 3 0 0 1-4 .2" />
                      <path d="M8 4.5 9 7M4.5 8 7 9M16 19.5 15 17M19.5 16 17 15" />
                    </svg>
                    연결 끊김
                  </span>
                ))}
                <div className="aw-split-core">
                  <b>브랜드</b>
                  <span>메시지 하나</span>
                </div>
                {SPLIT_NODES.map(([who, x, y], i) => (
                  <div key={who} className="aw-split-node" style={{ left: `${x}%`, top: `${y}%`, ...vars({ i }) }}>
                    <b>{who}</b>
                    <span>
                      <em>{String(i + 1).padStart(2, "0")}</em>
                      {PROBLEMS[i]?.[0]}
                    </span>
                  </div>
                ))}
              </div>
              <ol className="aw-split-list" aria-label="대행사를 나눠 맡길 때 생기는 문제">
                {PROBLEMS.map(([t, x], i) => (
                  <li key={t} title={x}>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    {t}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ⑤ 구조 비교 */}
        <section className="dp-sec geo-sec rv aw-cmp" id="compare">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">위즈더플래닝 방식</p>
                <h2>
                  운영하는 구조부터{" "}
                  <br />
                  <span>이렇게 다릅니다</span>
                </h2>
              </div>
              <p className="geo-lead">전담 AE 한 사람이 처음부터 끝까지 챙기니까 답답하게 같은 말을 반복하지 않으셔도 됩니다.</p>
            </div>
            {/* 11-09 대표 「표가 눈에 안 들어온다」: 표 대신 두 칸을 나란히, 위즈더플래닝 칸을 남색으로 띄운다 */}
            <div className="aw-vs" aria-label="채널별 대행과 위즈더플래닝 비교">
              <div className="aw-vs-col aw-vs-them">
                <p className="aw-vs-h">채널별 대행</p>
                <ul>
                  {COMPARE.map(([k, a]) => (
                    <li key={k}>
                      <small>{k}</small>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aw-vs-col aw-vs-us">
                <p className="aw-vs-h">위즈더플래닝</p>
                <ul>
                  {COMPARE.map(([k, , b], i) => (
                    <li key={k} style={vars({ i })}>
                      <small>{k}</small>
                      <b>{b}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ⑥ 여섯 부서 */}
        <section className="dp-sec geo-sec geo-sec-mist rv aw-team" id="teams">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">인하우스 부서</p>
                <h2>
                  외주 없이 직접 움직이는{" "}
                  <br />
                  <span>6개 전담 부서</span>
                </h2>
              </div>
              <p className="geo-lead">
                6개 부서가 남에게 넘기지 않고 직접 일합니다. 전체 일정은 전담 AE가 알아서 챙겨 드립니다.{" "}
                <Link href="/team" className="aw-more">
                  부서와 일하는 과정 살펴보기
                </Link>
              </p>
            </div>
            <ul className="aw-team-g">
              {TEAMS.map(([k, n, xs, en], i) => (
                <li key={k} style={vars({ i })}>
                  <em aria-hidden="true">{String(i + 1).padStart(2, "0")}</em>
                  <small>{en}</small>
                  <b>{n}</b>
                  <span className="jobs">{xs.join(" · ")}</span>
                </li>
              ))}
            </ul>
            {/* 부서가 일하는 장면(이미지 생성 모델로 만든 연출 사진, 실존 인물 아님) */}
            <ul className="aw-photos" aria-label="부서가 일하는 장면">
              {PHOTOS.map(([src, cap, alt], i) => (
                <li key={src} style={vars({ i })}>
                  <img src={src} alt={alt} loading="lazy" decoding="async" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ⑦ 자체 솔루션 */}
        <section className="dp-sec geo-sec rv aw-own" id="own">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">자체 솔루션</p>
                <h2>
                  직접 만들어서 쓰는{" "}
                  <br />
                  <span>솔루션과 인프라</span>
                </h2>
              </div>
              <p className="geo-lead">인플루언서를 찾고 성과를 잴 때 쓰는 도구도 저희가 직접 만들었습니다.</p>
            </div>
            {/* 11-09 대표 「참고 자료 제일 좋은 걸로 한 장씩, 이름을 멋지게」 */}
            <ol className="aw-tools">
              {TOOLS.map(([kind, mark, href, shot, cap], i) => (
                <li key={kind} className={`aw-tool aw-tool-${i}`} style={vars({ i })}>
                  <Link href={href}>
                    <div className="aw-tool-tx">
                      <small>
                        {String(i + 1).padStart(2, "0")} · {kind}
                      </small>
                      {mark}
                      <p>{d.own[i]?.[1]}</p>
                    </div>
                    <figure className="aw-tool-shot">
                      <span className="bar" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                      <img src={shot} alt={cap} loading="lazy" decoding="async" />
                      <figcaption>{cap}</figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 11-09 대표: 오시는 길 바로 위 클로징 문장. 흩어진 세 일이 한 줄로 모였다가 회사 이름으로 닫힌다 */}
        <section className="dp-sec rv aw-close" aria-label="위즈더플래닝 한 줄 소개">
          <div className="aw-close-ghost" aria-hidden="true">
            <span>WIZ THE PLANNING · WIZ THE PLANNING · WIZ THE PLANNING · </span>
            <span>WIZ THE PLANNING · WIZ THE PLANNING · WIZ THE PLANNING · </span>
          </div>
          <div className="dp-w aw-close-in">
            <p className="aw-close-three">
              <span style={{ "--i": 0 } as CSSProperties}>인플루언서 섭외</span>
              <span style={{ "--i": 1 } as CSSProperties}>마케팅</span>
              <span style={{ "--i": 2 } as CSSProperties}>개발까지</span>
            </p>
            <p className="aw-close-one">모두 한 곳에서,</p>
            <p className="aw-close-name">
              위즈더플래닝<i aria-hidden="true">.</i>
            </p>
          </div>
        </section>

        {/* ⑧ 회사 정보·오시는 길 */}
        <section className="dp-sec geo-sec geo-sec-mist rv aw-loc" id="location">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">기업 정보</p>
                <h2>
                  회사 위치와{" "}
                  <br />
                  <span>오시는 길</span>
                </h2>
              </div>
              <p className="geo-lead">{d.where}</p>
            </div>
            {/* 11-09 대표 「좀 더 전문적이고 한눈에」: 회사 카드 한 장(왼쪽 남색 주소·바로가기, 오른쪽 정보 목록) */}
            <div className="aw-card">
              <div className="aw-card-main">
                <small>WIZ THE PLANNING</small>
                <b>(주)위즈더플래닝</b>
                <p>
                  서울시 금천구 디지털로 178
                  <br />
                  퍼블릭가산 A동 2518호·2519호
                </p>
                <div className="aw-card-btns">
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
                    네이버 지도로 길찾기
                  </a>
                  <a href={CONTACT.telHref} data-tel>
                    전화 걸기
                  </a>
                </div>
              </div>
              <dl className="aw-card-dl">
                <div>
                  <dt>대표전화</dt>
                  <dd>
                    <a href={CONTACT.telHref} data-tel>
                      {CONTACT.tel}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>이메일</dt>
                  <dd>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>운영 시간</dt>
                  <dd>
                    평일 10:00–18:00
                    <small>점심시간 12:15–13:30 · 주말·공휴일 휴무</small>
                  </dd>
                </div>
                {d.access ? (
                  <div>
                    <dt>오시는 길</dt>
                    <dd>{d.access}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>대표</dt>
                  <dd>정현우</dd>
                </div>
                <div>
                  <dt>사업자등록번호</dt>
                  <dd>668-81-00391</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ⑨ 자주 묻는 질문 */}
        <FaqBlock items={d.faq} />

        {/* ⑩ 문의 */}
        <ContactBlock
          title="상담은 무료입니다. 문의 남겨 주시면 전담 AE가 연락드릴게요."
          sub="전담 AE가 지금 상황을 먼저 살펴보고 연락드리겠습니다. 비용은 진단이 끝나면 제안서로 꼼꼼히 챙겨 드립니다."
          label="무료 진단 · 제안서 받기"
          source="about"
        />
      </div>
    </DocShell>
  )
}
