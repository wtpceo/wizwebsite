import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Chars } from "./parts"
import { ProofModal } from "./ProofModal"
import { Icon } from "./icons"

/**
 * /services/performance — 퍼포먼스 광고 상세. 2026-11-07 대표: 색 체계 「먹과 신호」(docs/디자인시스템-색-2026-11-07.md) 방향으로 다시 설계.
 * 종이 바닥으로 시작하고, 증거(전표·소재 보드)와 마무리는 먹 바닥. 빨강은 화면당 한 번: 주행동 버튼, 움직인 숫자, 제목의 한 어절, 표의 한 줄.
 * 남의 사례 대신 우리가 일하는 장면이 증거. 광고주 상호 없음. 숫자는 펜션 릴스 24일 실측(2026.8.12 글)과 2016년뿐.
 * 스타일: sf-doc.css 의 .pk-* (paper & ink).
 */

/** 촬영 현장 사진 띠 — 노하우 띠와 같은 실사풍 생성 사진 8장 */
const STRIP: [string, string][] = [
  ["/geo/media-crew.jpg", "촬영팀이 식당 주방에서 사장님을 촬영하는 모습"],
  ["/geo/media-editor.jpg", "편집자가 영상을 편집하는 작업실"],
  ["/geo/media-beauty.jpg", "뷰티 크리에이터가 링라이트 앞에서 제품을 소개하는 모습"],
  ["/geo/media-unbox.jpg", "두 크리에이터가 제품을 개봉하며 촬영하는 모습"],
  ["/geo/media-food.jpg", "푸드 유튜버가 카페 디저트를 촬영하는 모습"],
  ["/geo/media-fitness.jpg", "피트니스 크리에이터가 운동 팁을 촬영하는 모습"],
  ["/geo/media-fashion.jpg", "패션 크리에이터가 거울 앞에서 코디 영상을 찍는 모습"],
  ["/geo/media-ai.jpg", "카페에서 AI 답변을 보는 휴대폰 화면"],
]

/** 첫 화면 매체 줄 [이름, 영문] — 인플루언서 쪽 매체 줄과 같은 모양 */
const MEDIA: [string, string][] = [
  ["메타", "Meta"],
  ["구글·유튜브", "Google · YouTube"],
  ["네이버", "Naver"],
  ["카카오", "Kakao"],
  ["당근", "Daangn"],
]

/** 11-08 대표 「출처로 검증」: 원문을 직접 확인한 것만. NCSolutions PDF는 본문에서 숫자 확인(2026-11-08), 메타·구글은 공식 페이지 문장 그대로 */
const NCS_URL = "https://info.ncsolutions.com/hubfs/2023%20Five%20Keys%20to%20Advertising%20Effectiveness/NCS_Five_Keys_to_Advertising_Effectiveness_E-Book_08-23.pdf"
/** 광고가 만든 추가 매출을 가른 요소 [이름, %] — NCSolutions 「Five Keys to Advertising Effectiveness」 2023 업데이트(미국 소비재 광고) */
const KEYS: [string, number][] = [
  ["소재", 49],
  ["브랜드", 21],
  ["도달", 14],
  ["타겟팅", 11],
  ["노출 시점", 5],
]
/** 출처 카드 [누가, 원문 문장, 출처·날짜, 링크] */
const PROOF: [string, string, string, string][] = [
  ["메타", "Advantage+ 타겟: 광고가 전환 가능성이 높은 잠재 고객에게 노출될 수 있도록 지원합니다.", "Meta 뉴스룸, 「Meta Advantage+ 빠르게 이해하기」 · 2025. 4. 23.", "https://about.fb.com/ko/news/2025/04/meta-advantage-explained-in-two-minutes/"],
  ["구글", "목표에 따라 자동으로 최적화되어 최적의 전환과 가치를 창출합니다.", "Google Ads 고객센터, 「실적 최대화 캠페인에 대한 정보」", "https://support.google.com/google-ads/answer/10724817?hl=ko"],
  ["메타 한국", "이제 크리에이티브가 곧 타깃팅이다", "AI매터스, 맥스 서밋 2026 김성욱 메타 어카운트 매니지먼트 총괄 발표 보도 · 2026. 8. 4.", "https://aimatters.co.kr/news-report/47844/"],
]

/** 진짜 실력 세 묶음 [이름, 한 줄, SKILL 시작 번호] */
const PHASES: [string, string, number][] = [
  ["측정", "매체 알고리즘이 학습할 전환 신호를 설계합니다", 0],
  ["소재", "타깃이 반응할 주요 장면과 크리에이터를 찾습니다", 2],
  ["성장", "매출 기여도를 추적해 넓혀갈 영역을 정합니다", 4],
]

/** 진짜 실력 여섯 단계 [이름, 한 줄, 구분] */
const SKILL: [string, string, string][] = [
  ["픽셀·전환 API 구축", "매체 알고리즘이 학습할 전환 신호부터 바로잡습니다", "측정"],
  ["전환 이벤트 설계", "문의·예약·구매를 퍼널 단계별로 나눕니다", "측정"],
  ["소재 크리에이티브", "전환을 이끄는 주요 장면을 자체 촬영팀이 만듭니다", "소재"],
  ["크리에이터 캐스팅", "브랜드에 맞는 인플루언서를 데이터로 찾습니다", "소재"],
  ["GA4 기반 성과 추적", "어느 유입 채널이 실제 매출로 이어졌는지 검증합니다", "분석"],
  ["그로스 확장 설계", "예산을 모을 곳과 고칠 곳을 찾아 다음 분기로 잇습니다", "성장"],
]

/** 연결선(가로 560 × 세로 460 기준): 왼쪽 위·오른쪽 위·아래 상자에서 가운데 퍼포먼스로 */
const FLOWS = ["M120 78 C 150 150, 200 170, 232 196", "M440 78 C 410 150, 360 170, 328 196", "M280 382 C 280 340, 280 320, 280 296"]

/** 퍼포먼스로 모이는 세 부서 [이름, 맡는 몫, 아이콘] */
const FEED: [string, string, "infl" | "viral" | "search"][] = [
  ["인플루언서 섭외", "검증된 광고 소재 확보", "infl"],
  ["바이럴", "포털 검색 첫 화면 구축", "viral"],
  ["SEO·GEO", "AI 답변 인용 설계", "search"],
]

/** AE 칸 리포트 숫자 [항목, 값, 단위] — 펜션 릴스 24일 실측 */
const AE_KPI: [string, string, string][] = [
  ["광고비", "131", "만원"],
  ["클릭", "26,456", "회"],
  ["클릭당 비용", "약 50", "원"],
]
/** AE 칸 세 줄 [제목, 설명] — 기존 본문을 나눈 것 */
const AE_PTS: [string, string][] = [
  ["기획부터 실행까지 1:1 전담", "담당자가 중간에 바뀌지 않습니다. 처음 기획한 전담 AE가 캠페인 끝까지 책임집니다."],
  ["매체 원본 데이터 그대로 공개", "비용과 클릭, 문의 수치를 매체 화면 그대로 적습니다. 측정하기 어려운 항목도 솔직하게 밝힙니다."],
  ["대면 리포트와 예산 개선", "예산을 다시 나누는 근거를 설명해 드립니다. 다음 주에 고칠 소재와 랜딩 과제도 함께 정합니다."],
]

/** 필름 사진 위 표시 [글, 종류] — 사진 순서(STRIP)와 맞춤. 소재 보드(A·B·C)의 뜻을 사진 위로 옮김 */
const TAGS: ([string, "on" | "off" | "up"] | null)[] = [
  ["운영 중", "on"],
  null,
  ["예산 ↑", "up"],
  ["교체 → 재촬영", "off"],
  ["운영 중", "on"],
  null,
  ["예산 ↑", "up"],
  null,
]

/** 11-08 소재가 도는 네 단계 [이름, 누가·무엇] — 4에서 1로 다시 돈다 */
const LOOP: [string, string][] = [
  ["주요 소구 장면 기획", "퍼포먼스팀"],
  ["맞춤 촬영·제작", "인플루언서·인하우스 촬영팀"],
  ["다중 소재 테스트", "성과가 좋은 소재에 예산 집중"],
  ["차기 촬영 반영", "전환 데이터로 다음 촬영 기획"],
]


export default function PerfDoc() {
  const s = SERVICES.find((x) => x.k === "perf")!
  const d = DETAILS.perf
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
        name: d.title,
        serviceType: s.n,
        description: d.desc,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "대한민국" },
        url: `${SITE}/services/${s.slug}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${s.n} 세부 상품`,
          itemListElement: s.items.map(([n, t]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n, description: t } })),
        },
      },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }

  return (
    <DocShell>
      <JsonLd data={ld} />
      <div className="pk px">
        {/* ① 첫 화면. 11-08 대표 「인플루언서 페이지와 똑같은 구성으로」: 인플루언서 첫 화면 부품(.gx.ix .ix-hero)을 그대로 씀.
            키워드 머리말은 H1 안 <small>, 큰 제목 '소재 싸움'에 파란 띠, 매체 이름 줄, 질문형 부제, 버튼 하나, 스크롤 유도.
            뒤 배경은 광고 소재 사진 벽(data-wall="performance") + 타일마다 '광고' 표시(.px-adwall) */}
        <div className="gx ix">
          <section className="dp-hero geo-hero ix-hero px-adwall" aria-label="퍼포먼스 광고 소개">
            <div className="dp-bg" aria-hidden="true">
              <div className="bgt" data-wall="performance" />
            </div>
            <div className="dp-veil" aria-hidden="true" />
            <div className="dp-w geo-hero-in">
              <h1 aria-label="퍼포먼스 광고 대행: 퍼포먼스는 이제 소재 싸움입니다">
                <small className="ix-kw">퍼포먼스 광고 대행</small>{" "}
                {/* 11-09 대표: 「이제」를 교정 부호(V)로 「퍼포먼스는」 뒤에 끼워 「퍼포먼스는 이제 소재 싸움입니다」로 읽히게 */}
                <span className="px-hl">
                  <span className="px-l1">
                    <Chars text="퍼포먼스는" />
                    <span className="px-ins" aria-hidden="true">
                      <span className="px-ins-in">
                        <span className="px-ins-t">이제</span>
                        <svg className="px-ins-v" viewBox="0 0 40 30" fill="none" aria-hidden="true">
                          <path d="M4 4 20 26 36 4" />
                        </svg>
                      </span>
                    </span>
                  </span>{" "}
                  <Chars text="소재 싸움입니다" start={5} mark="소재 싸움" />
                </span>
              </h1>
              <ol className="ix-tags" aria-label="맡는 매체">
                {MEDIA.map(([t, en], i) => (
                  <li key={t}>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <b>{t}</b>
                    <small>{en}</small>
                  </li>
                ))}
              </ol>
              <p className="dp-lead">
                메타·구글 등 주요 매체의 타겟팅과 입찰은 자동화되었습니다.
                <br />
                <b>결국 성과는 크리에이티브 소재와 전환 설계에서 갈립니다.</b>
              </p>
              <div className="dp-btns">
                <a className="p1" href="#contact">
                  무료로 소재·설계 점검받기
                </a>
              </div>
            </div>
            <a className="ix-cue" href="#proof" aria-label="근거로 내려가기">
              <span>위즈더플래닝의 퍼포먼스 설계</span>
              <i aria-hidden="true" />
            </a>
          </section>
        </div>

        {/* ①-1 근거 칸. 11-08 대표 「근거를 더 먼저, 창의적인 레이아웃으로 기사들을」: 크기가 다른 카드를 엇갈려 쌓는 배치.
            왼쪽 큰 카드 = 49% 막대, 가운데 = 기사 스크랩 모양, 오른쪽 = 메타 설정 화면 모양, 아래 = 구글 화면·11%·문의 카드.
            원문을 직접 확인한 문장만(NCSolutions PDF 본문, Meta 뉴스룸, Google Ads 고객센터, AI매터스 2026.8.4) */}
        <section className="px-proof rv" id="proof" aria-labelledby="px-h-proof">
          <div className="dp-w">
            <div className="pp-head">
              <div>
                <p className="pk-k">데이터 근거</p>
                <h2 id="px-h-proof">
                  광고 성과를 가르는 기준,{" "}
                  <br />
                  <span>데이터가 증명하는 소재의 힘</span>
                </h2>
              </div>
              <p className="pp-note">
                조사 보고서와 매체사 공식 발표,{" "}
                <br />
                언론 보도에서 원문을 직접 확인한 수치만 썼습니다.
              </p>
            </div>
            <div className="pp-grid">
              {/* 49% */}
              <figure className="pp-card pp-stat">
                <div className="pp-cover" aria-hidden="true">
                  <span>REPORT</span>
                  <span>2023</span>
                </div>
                <em className="pp-tag">조사 · NCSolutions</em>
                <p className="pp-big">
                  49<small>%</small>
                </p>
                <figcaption>광고가 만든 추가 매출의 절반 가까이는 소재에서 나왔습니다.</figcaption>
                <ul className="pp-bars">
                  {KEYS.map(([k, v], i) => (
                    <li key={k} className={i === 0 ? "on" : k === "타겟팅" ? "tg" : undefined} style={{ ["--v" as string]: v, ["--i" as string]: i }}>
                      <span>{k}</span>
                      <i aria-hidden="true" />
                      <b>{v}%</b>
                    </li>
                  ))}
                </ul>
                <a className="pp-src" href={NCS_URL} target="_blank" rel="noopener noreferrer" data-pm-src={NCS_URL} data-pm-who="NCSolutions 조사 보고서 · 2023" data-pm-title="Five Keys to Advertising Effectiveness" data-pm-embed="0" data-pm-note="광고가 만든 추가 매출을 나눠 보면 소재 49% · 브랜드 21% · 도달 14% · 타겟팅 11% · 노출 시점 5%였습니다." data-pm-why="원문은 미국 소비재 광고를 분석한 영문 PDF 보고서입니다.">
                  「Five Keys to Advertising Effectiveness」 2023 업데이트 · 미국 소비재 광고 분석
                </a>
              </figure>

              {/* 기사 스크랩 */}
              <a className="pp-card pp-news" href={PROOF[2][3]} target="_blank" rel="noopener noreferrer" data-pm-src={PROOF[2][3]} data-pm-who="AI매터스 · 2026. 8. 4." data-pm-title="“이제 크리에이티브가 곧 타깃팅이다”">
                <i className="pp-tape" aria-hidden="true" />
                <div className="pp-mast">
                  <b>AI매터스</b>
                  <span>2026. 8. 4. · 맥스 서밋 2026</span>
                </div>
                <p className="pp-kicker">메타 김성욱 어카운트 매니지먼트 총괄 발표</p>
                <p className="pp-head-q">“이제 크리에이티브가 곧 타깃팅이다”</p>
                <p className="pp-byline">이종철 수석 에디터</p>
                <div className="pp-lines" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <span className="pp-read">기사 원문 보기 ↗</span>
              </a>

              {/* 메타 설정 화면 */}
              <a className="pp-card pp-meta pp-win" href={PROOF[0][3]} target="_blank" rel="noopener noreferrer" data-pm-src={PROOF[0][3]} data-pm-who="Meta 뉴스룸 · 2025. 4. 23." data-pm-title="Meta Advantage+ 빠르게 이해하기" data-pm-embed="0" data-pm-quote="광고가 전환 가능성이 높은 잠재 고객에게 노출될 수 있도록 지원합니다.">
                <div className="pp-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>about.fb.com/ko/news</span>
                </div>
                <em className="pp-tag">메타 공식 · 2025. 4. 23.</em>
                <div className="pp-ui">
                  <p className="pp-ui-h">Advantage+</p>
                  {["타겟", "노출 위치", "캠페인 예산", "크리에이티브"].map((t, i) => (
                    <div className="pp-row" key={t} style={{ ["--i" as string]: i }}>
                      <span>{t}</span>
                      <i aria-hidden="true" />
                    </div>
                  ))}
                </div>
                <blockquote>“광고가 전환 가능성이 높은 잠재 고객에게 노출될 수 있도록 지원합니다.”</blockquote>
                <span className="pp-src">Meta 뉴스룸 「Meta Advantage+ 빠르게 이해하기」 ↗</span>
              </a>

              {/* 구글 화면 */}
              <a className="pp-card pp-google pp-win" href={PROOF[1][3]} target="_blank" rel="noopener noreferrer" data-pm-src={PROOF[1][3]} data-pm-who="Google Ads 고객센터" data-pm-title="실적 최대화 캠페인에 대한 정보" data-pm-quote={PROOF[1][1]} data-pm-embed="0">
                <div className="pp-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>support.google.com/google-ads</span>
                </div>
                <em className="pp-tag">구글 공식</em>
                <p className="pp-g-h">실적 최대화 캠페인</p>
                <ul className="pp-chips" aria-label="자동으로 하는 일">
                  {["입찰", "예산", "잠재고객", "소재 조합"].map((t) => (
                    <li key={t}>{t} 자동</li>
                  ))}
                </ul>
                <blockquote>“목표에 따라 자동으로 최적화되어 최적의 전환과 가치를 창출합니다.”</blockquote>
                <span className="pp-src">Google Ads 고객센터 ↗</span>
              </a>

              {/* 11% */}
              <div className="pp-card pp-tg">
                <p className="pp-big sm">
                  11<small>%</small>
                </p>
                <p>같은 조사에서 타겟팅이 만든 몫은 소재의 4분의 1이 안 됩니다.</p>
              </div>

              {/* 문의 */}
              <a className="pp-card pp-cta" href="#contact">
                <span>지금 쓰는 소재,</span>
                <b>무료로 점검받기</b>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>
          <ProofModal scope=".px-proof" />
        </section>

        {/* ② 진짜 실력(11-08 대표 지시로 「툴은 누구나 같고」 칸을 지우고 새로 넣음). 픽셀 → 전환 추적 → 소재 → 섭외 → GA4 → 그로스 여섯 단계가 계단처럼 올라감.
            아래 NDA 띠: 계약 전 비밀유지계약, 계정은 고객사 명의(투명성) + 데이터는 밖으로 안 냄(비밀 유지) */}
        <section className="px-skill rv" id="skill" aria-labelledby="px-h-skill">
          <div className="dp-w">
            <p className="pk-k">퍼포먼스 설계</p>
            <h2 id="px-h-skill">
              자동화된 광고 툴 시대,{" "}
              <br />
              <span>성과를 가르는 6단계 설계</span>
            </h2>
            <p className="pk-sub px-sub-w">광고 집행 전후로 마케터와 엔지니어가 직접 설계하는 영역입니다.{" "}
              <br className="px-br" />
              먼저 전환을 정확히 측정해야 소재 기획과 예산 배분이 근거를 갖춥니다.
            </p>
            {/* 11-08 대표 「대각선 선·계단 박스 아니다」: 선 없앰. 여섯 단계를 측정 → 소재 → 성장 세 기둥으로 묶고 위를 가지런히 */}
            <ol className="sk-cols" aria-label="성과를 만드는 세 묶음, 여섯 단계">
              {PHASES.map(([name, cap, from], pi) => (
                <li key={name} className={pi === PHASES.length - 1 ? "on" : undefined} style={{ ["--i" as string]: pi }}>
                  <div className="sk-col-h">
                    <em>{String(pi + 1).padStart(2, "0")}</em>
                    <b>{name}</b>
                    <span>{cap}</span>
                  </div>
                  {/* 단계 그림: 측정 = 이벤트 수신 화면, 소재 = 자체 촬영 사진, 성장 = 오르는 매출 그래프(예시) */}
                  <div className={`sk-vis sk-vis-${pi}`} aria-hidden="true">
                    {pi === 0 ? (
                      <div className="sk-ev">
                        <p>
                          <i />
                          이벤트 수신 중
                        </p>
                        {[["PageView", "페이지 조회"], ["Lead", "문의"], ["Schedule", "예약"], ["Purchase", "구매"]].map(([e, k], ei) => (
                          <div key={e} style={{ ["--j" as string]: ei }}>
                            <b>{e}</b>
                            <span>{k}</span>
                            <em>✓</em>
                          </div>
                        ))}
                      </div>
                    ) : pi === 1 ? (
                      <div className="sk-shots">
                        {["/sf/ex/shootcos.jpg", "/sf/pf/infl-beauty.jpg", "/sf/gen/content-bts.jpg"].map((src) => (
                          <img decoding="async" key={src} src={src} alt="" loading="lazy" width={400} height={600} />
                        ))}
                      </div>
                    ) : (
                      <div className="sk-chart">
                        <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                          <path className="ar" d="M0 104 L50 92 L100 96 L150 70 L200 58 L250 34 L300 14 L300 120 L0 120 Z" />
                          <path className="ln" d="M0 104 L50 92 L100 96 L150 70 L200 58 L250 34 L300 14" />
                        </svg>
                        <div className="sk-chart-l">
                          <span>매출 기여</span>
                          <b>↑</b>
                        </div>
                      </div>
                    )}
                  </div>
                  <ol className="sk-items">
                    {SKILL.slice(from, from + 2).map(([t, x], si) => (
                      <li key={t}>
                        <small>{String(from + si + 1).padStart(2, "0")}</small>
                        <b>{t}</b>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ol>
            {/* NDA 띠(11-08 대표: 「밖으로 내보내지 않는다」→「유출하지 않습니다」, 광고주와의 소송 0건 추가, 초록 쓰지 않음).
                왼쪽 계약서 그림 + 가운데 약속 두 줄 + 오른쪽 소송 0건 */}
            <div className="sk-nda">
              <div className="nda-doc" aria-hidden="true">
                <p className="nda-doc-h">비밀유지계약서</p>
                <i />
                <i />
                <i />
                <i className="s" />
                <div className="nda-sign">
                  <span>갑</span>
                  <span>을</span>
                </div>
                <b className="nda-stamp">NDA</b>
              </div>
              <div className="nda-tx">
                <em>계약 전 비밀유지</em>
                <b>모든 작업은 NDA(비밀유지계약)를 맺은 뒤 시작합니다</b>
                <ul>
                  <li>광고 계정은 고객사 명의로 열고, 숫자는 매체 화면 그대로 보여 드립니다.</li>
                  <li>광고주의 데이터와 전략은 유출하지 않습니다.</li>
                </ul>
              </div>
              <div className="nda-stat">
                <span>광고주와의 소송</span>
                <p>
                  <em>2016년부터</em>
                  0<small>건</small>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ③-1 통합 결과(11-08 대표 지시로 「잘되면 광고 덕」 칸을 지우고 새로). 섭외 → 퍼포먼스 → 바이럴 → SEO·GEO 네 부서가 이어 움직인 결과를 궁금하게.
            숫자는 지어내지 않음: 리포트 화면의 숫자 칸은 흐리게 가리고 '예시', 실제 숫자는 미팅에서 */}
        <section className="px-team rv" id="team" aria-labelledby="px-h-team">
          <div className="dp-w tm-g">
            <div className="tm-tx">
              <p className="pk-k">통합 캠페인 실행</p>
              <h2 id="px-h-team">
                섭외부터 AI 답변까지{" "}
                <br />
                <span>퍼포먼스로 모이는 통합 구조</span>
              </h2>
              <p className="pk-sub">인플루언서 섭외로 소재를 얻고 바이럴로 검색 첫 화면을 잡습니다. 여기에 SEO·GEO로 AI 답변을 이어 모든 접점을 퍼포먼스 전환으로 모읍니다.</p>
            </div>
            {/* 11-08 대표 「오른쪽 리포트 상자 삭제, 연결 흐름 모션을 그 자리에」: 세 부서에서 빛 점이 선을 타고 가운데 퍼포먼스로 흘러듦 */}
            <div className="tm-hub" aria-label="인플루언서 섭외·바이럴·SEO·GEO가 퍼포먼스 광고로 모이는 구조">
              <svg className="tm-lines" viewBox="0 0 560 460" aria-hidden="true">
                {FLOWS.map((d, i) => (
                  <g key={d}>
                    <path className="tm-path" d={d} />
                    {[0, 1].map((k) => (
                      <circle key={k} className="tm-dot" r="5">
                        <animateMotion dur="2.4s" begin={`${i * 0.4 + k * 1.2}s`} repeatCount="indefinite" path={d} />
                      </circle>
                    ))}
                  </g>
                ))}
              </svg>
              {FEED.map(([t, x, k], i) => (
                <div key={t} className={`tm-sat tm-sat-${i}`} style={{ ["--i" as string]: i }}>
                  <span className="ic" aria-hidden="true">
                    <Icon k={k} />
                  </span>
                  <b>{t}</b>
                  <small>{x}</small>
                </div>
              ))}
              <div className="tm-core">
                <i className="tm-pulse" aria-hidden="true" />
                <span className="ic" aria-hidden="true">
                  <Icon k="perf" />
                </span>
                <b>퍼포먼스 광고</b>
                <small>문의·구매 전환</small>
              </div>
            </div>
          </div>
        </section>

        {/* ③ 소재(11-08 대표: 「한 팀」 결과 칸 바로 다음으로. 마무리 문의는 맨 끝 칸으로 뗌): 소재 칸 + A·B·C 보드 + 촬영 사진 띠 + 문의 문구를 한 칸으로 합침.
            필름처럼 흐르는 촬영 사진 위에 운영 중·교체·예산 ↑ 표시, 아래 네 단계 고리(빛 점이 계속 돎), 마지막에 문의 */}
        <section className="pk-dark px-close" aria-labelledby="px-h-close">
          <div className="dp-w">
            <div className="cl-head rv">
              <p className="pk-k">소재 순환 고리</p>
              <h2 id="px-h-close">
                {/* 11-09 대표: 위 칸이 「한 팀으로 움직이면?」 질문으로 끝나니, 그 답으로 시작 */}
                전담 부서가 함께 움직여{" "}
                <br />
                <span>크리에이티브 퍼포먼스 완성</span>
              </h2>
              <p className="cl-sub">
                전환을 이끄는 소재는 실제 광고 데이터를 다루는 마케터가 가장 잘 압니다. 퍼포먼스팀이 촬영 기획부터 참여해 장면별 반응을 <b>수치로 검증하고 다음 촬영</b>에 바로 반영합니다.
              </p>
            </div>
          </div>
          <div className="cl-film" aria-label="자체 촬영팀이 찍은 장면들">
            <div className="cl-track">
              {[...STRIP, ...STRIP].map(([src, alt], i) => {
                const tag = TAGS[i % STRIP.length]
                return (
                  <figure key={i} className={tag ? `t-${tag[1]}` : undefined} aria-hidden={i >= STRIP.length}>
                    <img decoding="async" src={src} alt={i < STRIP.length ? alt : ""} loading="lazy" width={800} height={600} />
                    {tag ? <figcaption>{tag[0]}</figcaption> : null}
                  </figure>
                )
              })}
            </div>
          </div>
          <div className="dp-w">
            <ol className="cl-loop" aria-label="소재가 도는 네 단계, 4에서 1로 다시 돕니다">
              {LOOP.map(([t, x], i) => (
                <li key={t} style={{ ["--i" as string]: i }}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <span>{x}</span>
                </li>
              ))}
              <i className="cl-runner" aria-hidden="true" />
            </ol>
            <p className="cl-again">데이터 검증 후 4단계에서 1단계로 순환</p>
          </div>
        </section>

        {/* ⑤ AE 체계(11-08 대표 「디자인·정리 정돈」): 다른 칸과 같은 틀(머리말 → 두 줄 제목 → 부제). 아래 왼쪽 실측 리포트 카드(숫자 세 칸), 오른쪽 짧은 세 줄.
            숫자는 강원도 계곡 펜션 릴스 광고 24일 실측(2026.8.12 글) 그대로 */}
        <section className="pk-dark px-ae" id="px-report" aria-labelledby="pk-h-report">
          <div className="dp-w">
            <div className="ae-head rv">
              <p className="pk-k">전담 AE 시스템</p>
              <h2 id="pk-h-report">
                전담 AE의 데이터 보고와{" "}
                <br />
                <span>주간 예산·소재 개선 설계</span>
              </h2>
            </div>
            <div className="ae-g rv">
              <figure className="ae-rep">
                <div className="ae-rep-h">
                  <span>
                    <i aria-hidden="true" />
                    주간 리포트 · 메타 릴스 · 24일
                  </span>
                  <em>매체 화면 기준</em>
                </div>
                <div className="ae-kpis">
                  {AE_KPI.map(([k, v, u]) => (
                    <div key={k}>
                      <span>{k}</span>
                      <b>
                        {v}
                        <small>{u}</small>
                      </b>
                    </div>
                  ))}
                </div>
                <div className="ae-miss">
                  <span>예약 기여</span>
                  <b>광고 데이터로 셀 수 없었음</b>
                </div>
                <div className="ae-next">
                  <em>다음 주 개선 과제</em>
                  <p>전환 반응이 좋은 세로형 소재에 예산을 모으고 예약 랜딩 페이지를 고치겠습니다.</p>
                </div>
                <figcaption>
                  강원도 계곡 펜션 릴스 광고 24일 실측
                </figcaption>
              </figure>
              <ol className="ae-pts">
                {AE_PTS.map(([t, x], i) => (
                  <li key={t} style={{ ["--i" as string]: i }}>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <b>{t}</b>
                    <span>{x}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ⑦ FAQ(11-08 대표: 제목은 그냥 「자주 묻는 질문」, 인플루언서 쪽과 같은 부품) */}
        <FaqBlock items={d.faq} />


      </div>

      <ContactBlock title="퍼포먼스 광고, 소재·랜딩 설계 점검부터 시작하세요." sub="브랜드명을 알려 주시면 지금 쓰는 광고 소재와 웹사이트 현황을 살펴보고 먼저 집행할 매체와 개선안을 제안해 드립니다." initial={["perf"]} source="service_performance" />
    </DocShell>
  )
}
