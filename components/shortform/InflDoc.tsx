import type { ReactNode } from "react"
import Link from "next/link"
import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, Crumb, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, vars } from "./parts"

/**
 * /services/influencer — 인플루언서 협업 상세. 2026-11-08 대표 지시(카피 세션과 확정한 안)로 GEO·퍼포먼스 쪽과 같은 색 체계(.gx)로 새로 짬.
 * 한 줄: 인플루언서 협업은 보통 한 번 올리고 끝나서 자산으로 안 남는다. 같은 콘텐츠를 2차·3차로 다시 써서 AI 답변과 퍼포먼스 광고까지 잇는다.
 * 순서: 히어로 → 맡는 범위 → 가공하는 모습 → 차별점 비교 → 결과 → 진행 순서 → 비용 안내 → FAQ → 문의
 * 지킬 것: 금액 안 씀(1,000만·300만 원 금지) · 사례 칸 비움(연결된 인플루언서 외에도 계속 추가 섭외) · 본부장 경력은 회사 사례 아님
 *          · 말풍선은 코드(실제 ChatGPT 캡처처럼 보이면 결과를 약속하는 셈) · '나옵니다'가 아니라 '설계합니다'
 */

/* ── 대표 확인 대기 문장 두 개. 아니라고 하시면 여기만 낮추면 됨 ─────────────────────────── */
/** ① 2차 광고는 인플루언서에게 영상 2차 사용권을 받아야 성립. 계약에 넣고 있는지 확인 전 */
const CLAIM_SECOND_USE = "반응 온 장면을 잘라 15초 광고, 세로 숏폼, 이미지 소재로 다시 만들어 퍼포먼스 광고에 붙입니다."
/** ② "고객사가 말하기 전에 먼저 광고 소재로 돌린다"가 실제 운영과 맞는지 확인 전 */
const CLAIM_PROACTIVE = "반응 온 영상은 고객사가 말하기 전에 저희가 먼저 광고 소재로 돌립니다."

/** 맡는 범위 네 장 [이름, 영문, 한 줄, 배경 사진, 매체인지] — PPL은 매체가 아니라 협업 방식. 배경은 2026-11-08 생성 사진(얼굴·로고 없음) */
const SCOPE: [string, string, string, string, boolean][] = [
  ["유튜브", "YouTube", "리뷰와 브이로그가 검색에 오래 남습니다.", "/infl/scope-youtube.jpg", true],
  ["인스타그램", "Instagram", "릴스와 피드로 빠르게 퍼집니다.", "/infl/scope-instagram.jpg", true],
  ["틱톡", "TikTok", "짧은 숏폼으로 젊은 층에 닿습니다.", "/infl/scope-tiktok.jpg", true],
  ["PPL", "Product Placement", "인기 채널의 콘텐츠 안에 제품이 자연스럽게 들어갑니다.", "/infl/scope-ppl.jpg", false],
]

/** 가공 세 단계 [차수, 이름, 설명] */
const REUSE: [string, string, string][] = [
  ["1차", "게시", "인플루언서 채널에 원본이 올라갑니다."],
  ["2차", "광고", CLAIM_SECOND_USE],
  ["3차", "자산", "같은 콘텐츠를 홈페이지와 블로그로 옮겨 검색과 AI 답변에 남깁니다."],
]

/** 비교표 [항목, 한 매체만 맡으면, 위즈더플래닝] — 왼쪽은 특정 회사가 아니라 조건 표현 */
const VS: [string, string, string][] = [
  ["일이 끝나는 곳", "게시", "매출 보고"],
  ["콘텐츠를 쓰는 횟수", "한 번", "AI 답변과 광고에서 다시"],
  ["보고하는 숫자", "조회수", "문의와 매출"],
]

/** 광고 리포트 예시 화면 — 숫자는 전부 예시. 실제 값 아님 */
const REPORT_ROWS: [string, string, string, string][] = [
  ["세로 숏폼 A", "18,420", "31", "예시"],
  ["15초 광고 B", "9,760", "12", "예시"],
  ["이미지 소재 C", "4,110", "5", "예시"],
]

/** 진행 일곱 단계 [이름, 한 줄] */
const STEPS: [string, string][] = [
  ["미팅", "제품, 알릴 사람, 기간, 예산을 듣습니다"],
  ["후보 리스트", "고객층이 보는 계정을 골라 이유를 붙여 드립니다"],
  ["섭외와 계약", "조건을 맞추고 2차 사용 범위까지 계약서에 적습니다"],
  ["촬영 가이드", "꼭 들어갈 장면과 표시 문구를 정리해 드립니다"],
  ["발행", "협찬 표시를 확인한 뒤 올립니다"],
  ["2·3차 활용", "반응 온 장면을 광고 소재와 홈페이지·블로그 글로"],
  ["결과 보고", "소재마다 문의와 매출을 매달 숫자로"],
]

/** FAQ — 사람들이 실제로 치는 문장. 답은 사실만, 숫자 없음 */
const FAQ: [string, string][] = [
  [
    "유튜버 PPL 비용은 얼마인가요?",
    "채널 구독자 규모, 영상 전체인지 한 장면인지, 2차 사용권을 포함하는지에 따라 차이가 커서 한 금액으로 말씀드리기 어렵습니다. 미팅에서 제품과 예산을 듣고 후보마다 예상 단가대를 적은 리스트를 보내 드리니, 그걸 보고 정하시면 됩니다.",
  ],
  [
    "인스타그램 협찬은 어떻게 진행하나요?",
    "브리프를 받으면 고객층이 보는 계정을 골라 후보 리스트를 드리고, 고르신 분과 조건을 맞춰 계약합니다. 그다음 촬영 가이드를 보내고, 올라온 게시물의 협찬 표시를 확인한 뒤 발행합니다. 끝나면 게시물 주소와 반응을 정리해 보고드립니다.",
  ],
  [
    "유료광고 포함 표기는 꼭 해야 하나요?",
    "네. 경제적 대가를 받고 올리는 게시물은 공정거래위원회의 추천·보증 심사지침에 따라 그 사실을 표시해야 합니다. 저희는 표시가 없는 게시물은 올리지 않고, 표시 문구와 위치를 촬영 가이드에 미리 적어 드립니다.",
  ],
  [
    "찍은 영상을 광고에 다시 써도 되나요?",
    "인플루언서의 동의가 있어야 합니다. 그래서 저희는 섭외할 때 광고에 다시 쓸 수 있는 매체, 범위, 기간을 계약서에 같이 넣습니다. 계약에 없는 영상을 광고에 쓰면 분쟁이 생기니, 처음부터 적어 두는 쪽이 안전합니다.",
  ],
]

/** 가운데 정렬 칸: 머리말 → 제목(둘째 줄 파랑) → 부제 → 보조 자료 (GEO 쪽과 같은 문법) */
function CSec({ id, eb, q, sub, children, tone }: { id?: string; eb: string; q: ReactNode; sub?: ReactNode; children?: ReactNode; tone?: "mist" }) {
  return (
    <section className={`dp-sec geo-sec${tone ? ` geo-sec-${tone}` : ""}`} id={id}>
      <div className="dp-w">
        <p className="geo-eb">{eb}</p>
        <h2>{q}</h2>
        {sub ? <p className="geo-lead">{sub}</p> : null}
        {children}
      </div>
    </section>
  )
}

/** 원본 한 편 — 썸네일 자리만 생성 사진(2026-11-08, 실존 인물·로고 없음). 재생 표시는 코드 */
function Thumb({ shape, label }: { shape: "wide" | "tall" | "square"; label?: string }) {
  return (
    <figure className={`ix-th ix-th-${shape}`}>
      <img src="/infl/original.jpg" alt="" loading="lazy" width={960} height={540} />
      <i className="ix-play" aria-hidden="true" />
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  )
}

export default function InflDoc() {
  const s = SERVICES.find((x) => x.k === "infl")!
  const d = DETAILS.infl
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
        name: "인플루언서·유튜버 섭외·PPL 대행",
        serviceType: "인플루언서 마케팅",
        description: d.desc,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "대한민국" },
        url: `${SITE}/services/${s.slug}`,
      },
      breadcrumbLd(crumbs),
      faqLd(FAQ),
    ],
  }

  return (
    <DocShell>
      <div className="gx ix">
        <JsonLd data={ld} />

        {/* ① 첫 화면: 뒤에 숏폼 벽(소개 쪽과 같은 벽), 제목 하나, CTA 하나 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="인플루언서 협업 소개">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall={s.slug} />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <Crumb items={[{ name: "홈", href: "/" }, { name: s.n }]} />
            <p className="geo-kw">인플루언서 협업, 한 번으로 끝내셨나요?</p>
            <h1 aria-label="한 번 찍은 콘텐츠가 쉬지 않고 일합니다">
              <Chars text={"한 번 찍은 콘텐츠가\n쉬지 않고 일합니다"} />
            </h1>
            <p className="dp-lead">
              고객사에 딱 맞는 인플루언서를 섭외하고, 그 콘텐츠를 AI 답변과 퍼포먼스 광고까지 이어 씁니다.{" "}
              <br />
              매체마다 전담 부서가 한 설계로 움직이니까 가능한 일입니다.
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                제안 요청 보내기
              </a>
            </div>
            <a className="geo-tel ix-tel" href="tel:16700704" data-tel>
              전화 문의 1670-0704
            </a>
          </div>
        </section>

        {/* ② 맡는 범위 */}
        <CSec
          eb="맡는 범위"
          q={
            <>
              유튜브부터 PPL까지,{" "}
              <br />
              <span>한 번에 맡습니다</span>
            </>
          }
        >
          <ul className="ix-scope" aria-label="맡는 매체와 협업 방식">
            {SCOPE.map(([t, en, x, bg, isMedia], i) => (
              <li key={t} className={isMedia ? undefined : "ix-ppl"} style={vars({ i })}>
                <img className="ix-scope-bg" src={bg} alt="" loading="lazy" width={900} height={1200} />
                <div className="ix-scope-in">
                  <em>{isMedia ? "매체" : "협업 방식 · 위 세 매체 어디서든"}</em>
                  <b>{t}</b>
                  <small>{en}</small>
                  <span>{x}</span>
                </div>
              </li>
            ))}
          </ul>
        </CSec>

        {/* ③ 가공하는 모습: 가운데 원본 한 편 → 오른쪽 두 갈래 */}
        <CSec
          eb="가공하는 모습"
          q={
            <>
              완성된 소재는{" "}
              <br />
              <span>두 번, 세 번 다시 씁니다</span>
            </>
          }
          tone="mist"
        >
          <div className="ix-flow" aria-label="원본 한 편이 광고와 자산으로 갈라지는 흐름">
            <div className="ix-src">
              <em>1차 · 게시</em>
              <Thumb shape="wide" label="인플루언서 채널 원본" />
            </div>
            <svg className="ix-lines" viewBox="0 0 120 400" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 200 C 60 200, 60 100, 120 100" />
              <path d="M0 200 C 60 200, 60 300, 120 300" />
            </svg>
            <div className="ix-out">
              <div className="ix-branch">
                <em>2차 · 광고</em>
                <div className="ix-cuts">
                  <Thumb shape="wide" label="15초 광고" />
                  <Thumb shape="tall" label="세로 숏폼" />
                  <Thumb shape="square" label="이미지 소재" />
                </div>
              </div>
              <div className="ix-branch">
                <em>3차 · 자산</em>
                <div className="ix-pages" aria-hidden="true">
                  <div className="ix-pg">
                    <i className="ix-pg-bar" />
                    <img src="/infl/original.jpg" alt="" loading="lazy" width={480} height={270} />
                    <span />
                    <span className="s" />
                    <small>홈페이지</small>
                  </div>
                  <div className="ix-pg">
                    <i className="ix-pg-bar" />
                    <span className="h" />
                    <span />
                    <span />
                    <span className="s" />
                    <small>블로그</small>
                  </div>
                </div>
              </div>
            </div>
            <Ex>예시 화면</Ex>
          </div>
          <ol className="ix-reuse">
            {REUSE.map(([n, t, x], i) => (
              <li key={n} style={vars({ i })}>
                <em>{n}</em>
                <b>{t}</b>
                <span>{x}</span>
              </li>
            ))}
          </ol>
        </CSec>

        {/* ④ 차별점 비교 */}
        <CSec
          eb="차별점"
          q={
            <>
              올라간 다음부터가{" "}
              <br />
              <span>저희 일입니다</span>
            </>
          }
        >
          <div className="ix-vs" role="table" aria-label="한 매체만 맡는 경우와 위즈더플래닝 비교">
            <div className="ix-vs-h" role="row">
              <span role="columnheader" />
              <span role="columnheader">한 매체만 맡으면</span>
              <span role="columnheader" className="us">
                위즈더플래닝
              </span>
            </div>
            {VS.map(([k, a, b], i) => (
              <div className="ix-vs-r" role="row" key={k} style={vars({ i })}>
                <span role="rowheader">{k}</span>
                <span role="cell" data-h="한 매체만 맡으면">
                  {a}
                </span>
                <span role="cell" className="us" data-h="위즈더플래닝">
                  {b}
                </span>
              </div>
            ))}
          </div>
          <p className="geo-stmt ix-stmt">{CLAIM_PROACTIVE}</p>
        </CSec>

        {/* ⑤ 결과: 광고 리포트 · AI 답변. 둘 다 코드로 만든 예시 화면 */}
        <CSec
          eb="결과"
          q={
            <>
              성과는{" "}
              <br />
              <span>두 군데에서 보입니다</span>
            </>
          }
          tone="mist"
        >
          <div className="ix-res">
            <div className="ix-res-col">
              <b>광고 리포트에서</b>
              <p>소재마다 문의와 매출이 얼마나 나왔는지 매달 숫자로 보고합니다.</p>
              <div className="ix-rep" role="table" aria-label="광고 리포트 예시">
                <div className="ix-rep-t">
                  <span>월간 소재 리포트</span>
                  <em>예시</em>
                </div>
                <div className="ix-rep-h" role="row">
                  <span role="columnheader">소재</span>
                  <span role="columnheader">노출</span>
                  <span role="columnheader">문의</span>
                  <span role="columnheader">매출</span>
                </div>
                {REPORT_ROWS.map(([n, imp, lead, sale]) => (
                  <div className="ix-rep-r" role="row" key={n}>
                    <span role="cell">{n}</span>
                    <span role="cell">{imp}</span>
                    <span role="cell">{lead}</span>
                    <span role="cell" className="ex-v">
                      {sale}
                    </span>
                  </div>
                ))}
                <Ex>예시 화면 · 숫자는 예시</Ex>
              </div>
            </div>
            <div className="ix-res-col">
              <b>AI 답변에서</b>
              <p>"OO은 어떤 브랜드야?"라고 물으면 인플루언서들이 자주 소개하는 브랜드로 설명되게 설계합니다.</p>
              <div className="ix-chat" aria-label="AI 답변 예시">
                <p className="ix-q">OO은 어떤 브랜드야?</p>
                <p className="ix-a">
                  <i>AI</i>
                  <span>유튜브에서 인플루언서들이 자주 소개하는 뷰티 브랜드예요. 트렌디한 디자인으로 인플루언서와 일반 소비자 모두에게 사랑받고 있어요.</span>
                </p>
                <Ex>예시 화면</Ex>
              </div>
            </div>
          </div>
        </CSec>

        {/* ⑥ 진행 순서 */}
        <CSec
          eb="진행 순서"
          q={
            <>
              미팅부터 결과 보고까지,{" "}
              <br />
              <span>일곱 단계</span>
            </>
          }
        >
          <ol className="geo-steps ix-steps">
            {STEPS.map(([t, x], i) => (
              <li key={t} className={i === 0 ? "on" : undefined} style={vars({ i })}>
                <em>{String(i + 1).padStart(2, "0")}</em>
                <b>{t}</b>
                <span>{x}</span>
              </li>
            ))}
          </ol>
        </CSec>

        {/* ⑦ 비용 안내 — 금액 없음 */}
        <CSec eb="비용 안내" q="비용은 미팅 뒤에 제안드립니다" tone="mist">
          <p className="ix-cost">
            인플루언서 단가와 협업 방식에 따라 달라서 미리 적어 두기 어렵습니다. 미팅에서 제품과 예산을 듣고 후보마다 예상 단가대를 적은 리스트와 함께 제안드리겠습니다.
          </p>
        </CSec>

        {/* ⑦-1 해외 인플루언서는 글로벌 페이지로 (2026-11-08 대표: 중국·일본은 /services/global에서 설명, 여기는 띠 하나) */}
        <section className="ix-global" aria-label="해외 인플루언서 안내">
          <div className="dp-w">
            <div className="ix-gl">
              <div>
                <b>해외 인플루언서가 필요하신가요?</b>
                <span>중국 왕홍과 샤오홍슈, 일본 인스타그램 인플루언서는 글로벌 마케팅에서 따로 안내합니다.</span>
              </div>
              <Link href="/services/global">글로벌 마케팅 보러 가기</Link>
            </div>
          </div>
        </section>

        {/* ⑧ FAQ */}
        <CSec eb="자주 묻는 질문" q="자주 묻는 질문">
          <div className="geo-faq">
            <Faq items={FAQ} />
          </div>
        </CSec>

        {/* ⑨ 문의 */}
        <ContactBlock
          title="인플루언서 협업, 제안 요청부터"
          sub="제품과 알릴 사람, 기간을 알려 주시면 섭외팀이 보고 연락드리겠습니다. 비용은 미팅 뒤에 제안드립니다."
          label="제안 요청 보내기"
          initial={["infl"]}
          source="service_influencer"
        />
      </div>
    </DocShell>
  )
}
