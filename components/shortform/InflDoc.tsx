import type { ReactNode } from "react"
import Link from "next/link"
import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, vars } from "./parts"
import GeoToolReel from "./GeoToolReel"
import { Icon } from "./icons"

/**
 * /services/influencer — 인플루언서 협업 상세. 2026-11-08 대표 지시(카피 세션과 확정한 안)로 GEO·퍼포먼스 쪽과 같은 색 체계(.gx)로 새로 짬.
 * 한 줄: 인플루언서 협업은 보통 한 번 올리고 끝나서 자산으로 안 남는다. 같은 콘텐츠를 2차·3차로 다시 써서 AI 답변과 퍼포먼스 광고까지 잇는다.
 * 순서: 히어로 → 맡는 범위 → 가공하는 모습 → 차별점 비교 → 결과 → 진행 순서 → 비용 안내 → FAQ → 문의
 * 지킬 것: 금액 안 씀(1,000만·300만 원 금지) · 사례 칸 비움(연결된 인플루언서 외에도 계속 추가 섭외) · 본부장 경력은 회사 사례 아님
 *          · 말풍선은 코드(실제 ChatGPT 캡처처럼 보이면 결과를 약속하는 셈) · '나옵니다'가 아니라 '설계합니다'
 */

/* ── 대표 확인 대기 문장(②'먼저 광고 소재로 돌린다'는 11-08 비교표와 함께 뺌). 아니라고 하시면 여기만 낮추면 됨 ─────────────────────────── */
/** ① 2차 광고는 인플루언서에게 영상 2차 사용권을 받아야 성립. 계약에 넣고 있는지 확인 전 */
const CLAIM_SECOND_USE = "반응 온 장면을 잘라 15초 광고, 세로 숏폼, 이미지 소재로 다시 만들어 퍼포먼스 광고에 붙입니다."

/** 섭외 전략 네 장 [이름, 영문, 한 줄, 배경 사진, 매체인지] — PPL은 매체가 아니라 협업 방식.
 *  배경은 2026-11-08 위즈스튜디오 레퍼런스(references 저장소)의 실제 촬영 사진: 스크린골프 스윙·네일숍·마라탕 음식점·안경 든 손(대표 「틱톡은 음식점으로」). 네 장 모두 같은 톤으로 보정(scratchpad grade.py: 자동 대비·채도·그림자 남색). 얼굴·간판 없는 컷만 골랐고 상호는 쓰지 않음 */
const SCOPE: [string, string, string, string, boolean][] = [
  ["유튜브", "YouTube", "리뷰와 브이로그가 검색에 오래 남습니다.", "/infl/scope-youtube.jpg", true],
  ["인스타그램", "Instagram", "릴스와 피드로 빠르게 퍼집니다.", "/infl/scope-instagram.jpg", true],
  ["틱톡", "TikTok", "짧은 숏폼으로 젊은 층에 닿습니다.", "/infl/scope-tiktok.jpg", true],
  ["PPL", "Product Placement", "인기 채널의 콘텐츠 안에 제품이 자연스럽게 들어갑니다.", "/infl/scope-ppl.jpg", false],
]

/** 자체 섭외 도구 위플루언서 화면 다섯 장 [제목, 두 줄 설명, 그림, 대체문] — 2026-11-08 로컬에서 찍은 실제 화면. 채널명·얼굴·브랜드명은 흐림 처리(남의 채널 초상·상표) */
const WIPLU: [string, string, string, string][] = [
  ["채널 찾기: 카테고리·규모·조회율로 거릅니다", "한국 유튜브 채널 6,740곳을 카테고리·구독자·최근 업로드로 거르고,\n최근 영상 10개의 평균 조회수가 구독자의 몇 %인지까지 봅니다.", "/tools/wiplu-youtube.jpg", "위플루언서 유튜브 채널 찾기 화면"],
  ["채널 상세: 숫자와 최근 영상을 한 장에", "구독자, 평균 조회수, 조회율, 구독자 추이, 최근 영상 10개를 한 장에서 봅니다.\n성장하는 채널인지, 반응이 꾸준한지를 여기서 가립니다.", "/tools/wiplu-channel.jpg", "위플루언서 채널 상세 화면"],
  ["인스타그램 찾기: 참여율로 봅니다", "공개 계정 1,554곳을 팔로워가 아니라\n최근 게시물에 실제로 반응하는 비율로 고릅니다.", "/tools/wiplu-instagram.jpg", "위플루언서 인스타그램 계정 찾기 화면"],
  ["틱톡 찾기: 팔로워 밖으로 퍼지는 계정", "공개 계정 886곳을 최근 영상 조회수가 팔로워의 몇 %인지로 봅니다.\n높을수록 팔로워 밖까지 퍼지는 계정입니다.", "/tools/wiplu-tiktok.jpg", "위플루언서 틱톡 계정 찾기 화면"],
]

/** 광고주 공유 채널 분석 리포트에 들어가는 것 [제목, 한 줄] — 실제 리포트(/r/비밀주소) 항목 순서 그대로 */
const REPORT_ITEMS: [string, string][] = [
  ["채널 규모와 조회율", "구독자, 영상 한 편당 평균 조회수, 구독자 대비 조회율을 한 문단과 세 숫자로"],
  ["영상마다의 조회수", "최근 영상 10개의 조회수 막대. 터진 영상 한두 편이 평균을 끌어올렸는지 보입니다"],
  ["롱폼과 숏폼", "어느 쪽이 구독자 밖까지 퍼지는지, 길이별 평균으로 나눠 봅니다"],
  ["비슷한 규모 채널과 비교", "구독자 규모가 비슷한 채널 30곳 사이에서 조회율이 몇 위인지"],
  ["구독자 추이", "매일 저장한 구독자 수로 성장하는 채널인지 봅니다"],
  ["반응과 업로드 주기", "조회수 대비 좋아요·댓글 비율과 며칠에 한 편 올리는지"],
  ["유료 광고 이력", "최근 영상 중 '유료 광고 포함' 표시가 붙은 영상이 있는지"],
]

/** 광고 리포트 예시 화면 — 숫자는 전부 예시. 실제 값 아님 */
const REPORT_ROWS: [string, string, string, string][] = [
  ["세로 숏폼 A", "18,420", "31", "예시"],
  ["15초 광고 B", "9,760", "12", "예시"],
  ["이미지 소재 C", "4,110", "5", "예시"],
]

/** 진행 일곱 단계 [이름, 한 줄, 아이콘] — 아이콘은 사이트 공용 선 아이콘(icons.tsx) */
const STEPS: [string, string, string][] = [
  ["미팅", "제품, 알릴 사람, 기간, 예산을 듣습니다", "chat"],
  ["후보 리스트", "고객층이 보는 계정을 골라 이유를 붙여 드립니다", "plan"],
  ["섭외와 계약", "조건을 맞추고 2차 사용 범위까지 계약서에 적습니다", "person"],
  ["촬영 가이드", "꼭 들어갈 장면과 표시 문구를 정리해 드립니다", "content"],
  ["발행", "협찬 표시를 확인한 뒤 올립니다", "infl"],
  ["2·3차 활용", "반응 온 장면을 광고 소재와 홈페이지·블로그 글로", "loop"],
  ["결과 보고", "소재마다 문의와 매출을 매달 숫자로", "perf"],
]

/** FAQ — 11-08 대표가 준 네 개(비용·함께 해야 하나·연예인·자체 촬영) + 광고주가 실제로 자주 묻는 것. 숫자는 사이트가 이미 쓰는 것만, 결과 약속 없음 */
const FAQ: [string, string][] = [
  [
    "유튜버나 인플루언서 섭외, 비용이 많이 들지 않나요?",
    "생각보다 폭이 넓습니다. 구독자 몇천 명대 마이크로 인플루언서부터 수백만 명대 메가 채널까지 단가가 다 달라서, 예산을 먼저 알려 주시면 그 안에서 브랜드에 맞는 쪽으로 섭외합니다. 작은 예산이라고 못 하는 일이 아닙니다.",
  ],
  [
    "꼭 퍼포먼스 광고와 GEO까지 같이 해야 하나요?",
    "아닙니다. 찍은 콘텐츠를 광고와 AI 답변까지 이어 쓰는 건 요즘 마케팅 흐름이라 같이 설계해 드리는 것일 뿐입니다. 섭외만 맡기셔도 성과가 나올 인플루언서를 준비하겠습니다.",
  ],
  [
    "연예인도 섭외할 수 있나요?",
    "가능합니다. 다만 연예인은 유명세에 따라 비용 차이가 커서, 예산을 들은 뒤 그 안에서 가능한 분들을 인플루언서 후보와 함께 제안드립니다.",
  ],
  [
    "촬영도 직접 하시나요?",
    "인플루언서가 자기 채널 톤으로 직접 찍는 게 기본입니다. 저희 안에 촬영팀이 따로 있어서, 모델을 섭외해 브랜드 쪽에서 찍는 영상이나 광고용 소재가 필요하면 그것도 같이 맡습니다.",
  ],
  [
    "진행하면 언제쯤 후보 리스트를 받아 볼 수 있나요?",
    "제품, 알릴 사람, 기간, 예산이 담긴 브리프를 받으면 영업일 3일 안에 후보 리스트를 보내 드립니다. 리스트에는 채널마다 고른 이유와 예상 단가대가 같이 적혀 있고, 여기까지는 비용이 없습니다.",
  ],
  [
    "유료광고 포함 표기는 꼭 해야 하나요?",
    "대가를 받고 올리는 게시물은 공정거래위원회 지침에 따라 표시해야 하고, 저희는 표시 없이는 올리지 않습니다. 다만 그게 끝은 아닙니다. 협업 뒤에 제품이 마음에 들어 직접 사서 쓰고 후기를 다시 올리는 인플루언서들이 있는데, 그 글에는 표시가 붙지 않습니다. 브랜드 핏이 맞는 사람을 고르는 이유가 여기에도 있습니다.",
  ],
  [
    "찍은 영상을 광고에 다시 써도 되나요?",
    "인플루언서의 동의가 있어야 합니다. 그래서 저희는 섭외할 때 광고에 다시 쓸 수 있는 매체, 범위, 기간을 계약서에 같이 넣습니다. 계약에 없는 영상을 광고에 쓰면 분쟁이 생기니, 처음부터 적어 두는 쪽이 안전합니다.",
  ],
]

/** 가운데 정렬 칸: 머리말 → 제목(둘째 줄 파랑) → 부제 → 보조 자료 (GEO 쪽과 같은 문법) */
function CSec({ id, eb, q, sub, children, tone, cls }: { id?: string; eb: string; q: ReactNode; sub?: ReactNode; children?: ReactNode; tone?: "mist" | "k"; cls?: string }) {
  return (
    <section className={`dp-sec geo-sec${tone ? ` geo-sec-${tone}` : ""}${cls ? ` ${cls}` : ""}`} id={id}>
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

        {/* ① 첫 화면: 화면 가득, 왼쪽 정렬, 큰 글자(11-08 대표 「크게크게, 공간 넓게」). 뒤에 숏폼 벽, 오른쪽은 막을 얇게 해 벽이 보이게 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="인플루언서 협업 소개">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall={s.slug} />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            {/* 11-08 대표: 첫 화면 위 경로 표시(홈 › 서비스명)는 뺌. 구조화 데이터의 BreadcrumbList는 그대로 */}
            <p className="geo-kw">인플루언서 협업, 한 번으로 끝내셨나요?</p>
            <h1 aria-label="한 번 찍은 콘텐츠가 쉬지 않고 일합니다">
              <Chars text={"한 번 찍은 콘텐츠가\n쉬지 않고 일합니다"} />
            </h1>
            {/* 11-08 대표: 제목과 부제 사이에 매체 이름이 눈에 띄게 */}
            <ol className="ix-tags" aria-label="맡는 매체">
              {[
                ["유튜브", "YouTube"],
                ["인스타그램", "Instagram"],
                ["틱톡", "TikTok"],
                ["PPL", "Product Placement"],
              ].map(([t, en], i) => (
                <li key={t} className={t === "PPL" ? "on" : undefined}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <small>{en}</small>
                </li>
              ))}
            </ol>
            <p className="dp-lead">
              브랜드에 딱 맞는 인플루언서를 섭외하고, 그 콘텐츠가 AI 답변(GEO)과 퍼포먼스 성과로 이어지게 설계합니다.
              <br />
              <b>이게 바로 IMC에 일을 맡기는 이유입니다.</b>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                제안 요청 보내기
              </a>
            </div>
          </div>
          <a className="ix-cue" href="#scope" aria-label="맡는 범위로 내려가기">
            <span>위즈더플래닝은 이렇게 일해요</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ②·③은 한 틀(.ix-dark)로 감싸 그라데이션을 한 번만 깐다 — 칸마다 깔면 경계에 가로줄이 보임(11-08) */}
        <div className="ix-dark">
        {/* ② 섭외 전략 (11-08 대표: 첫 화면과 같은 결 — 어두운 바탕, 왼쪽 정렬, 번호 붙은 매체 글자, 카드 사이 간격) */}
        <CSec
          id="scope"
          eb="브랜드 핏에 맞춘 섭외 전략"
          tone="k"
          cls="ix-fit"
          q={
            <>
              용도별로 핏에 맞는{" "}
              <br />
              <span>인플루언서를 섭외합니다</span>
            </>
          }
        >
          <ol className="ix-scope" aria-label="매체별 섭외">
            {SCOPE.map(([t, en, x, bg, isMedia], i) => (
              <li key={t} className={isMedia ? undefined : "ix-ppl"} style={vars({ i })}>
                <img className="ix-scope-bg" src={bg} alt="" loading="lazy" width={1400} height={933} />
                <div className="ix-scope-in">
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <small>{isMedia ? en : `${en} · 위 세 매체 어디서든`}</small>
                  <span>{x}</span>
                </div>
              </li>
            ))}
          </ol>
        </CSec>

        {/* ③ 2차·3차 활용 (11-08 대표: 가공 과정 대신 활용 결과를 보여 줌. 옛 ⑤ 결과(리포트·AI 답변)를 여기로 합침). 첫 화면과 같은 결: 남색·왼쪽 정렬 */}
        <CSec
          id="reuse"
          eb="한 번 찍은 콘텐츠의 2차·3차 활용"
          tone="k"
          cls="ix-fit ix-use"
          q={
            <>
              올라간 영상이 광고가 되고,{" "}
              <br />
              <span>AI의 답이 됩니다</span>
            </>
          }
          sub={
            <>
              반응 온 장면은 퍼포먼스 광고 소재로 다시 쓰고,{" "}
              <br />
              쌓인 영상과 후기는 AI가 브랜드를 설명할 때 끌어오는 근거가 되게 설계합니다.
            </>
          }
        >
          <div className="ix-use-grid" aria-label="원본 한 편이 광고와 AI 답변으로 이어지는 흐름">
            <div className="ix-use-src">
              <em>1차 · 게시</em>
              <Thumb shape="tall" label="인플루언서 채널 원본" />
              <small>인플루언서 채널에 원본이 올라갑니다</small>
            </div>
            <svg className="ix-lines" viewBox="0 0 120 400" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 200 C 60 200, 60 100, 120 100" />
              <path d="M0 200 C 60 200, 60 300, 120 300" />
            </svg>
            <div className="ix-use-panes">
              {/* 2차: 퍼포먼스 광고 */}
              <div className="ix-use-pane">
                <div className="ix-use-txt">
                  <em>2차 · 퍼포먼스 광고</em>
                  <b>반응 온 장면이 광고 소재가 됩니다</b>
                  <p>{CLAIM_SECOND_USE}</p>
                  <p>소재마다 문의와 매출이 얼마나 나왔는지 매달 숫자로 보고합니다.</p>
                </div>
                <div className="ix-use-vis">
                  <figure className="ix-ad">
                    <img src="/infl/original.jpg" alt="" loading="lazy" width={540} height={960} />
                    <i className="ix-play" aria-hidden="true" />
                    <figcaption>
                      <span>Sponsored</span>
                      <b>세로 숏폼 광고</b>
                    </figcaption>
                  </figure>
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
              </div>
              {/* 3차: GEO */}
              <div className="ix-use-pane">
                <div className="ix-use-txt">
                  <em>3차 · GEO</em>
                  <b>AI가 브랜드를 설명할 때 근거가 됩니다</b>
                  <p>"OO은 어떤 브랜드야?"라고 물으면 인플루언서들이 자주 소개하는 브랜드로 설명되게 설계합니다. 같은 콘텐츠를 홈페이지와 블로그에도 옮겨 검색과 AI 답변에 남깁니다.</p>
                </div>
                <div className="ix-use-vis">
                  <div className="ix-chat" aria-label="AI 답변 예시">
                    <p className="ix-q">OO은 어떤 브랜드야?</p>
                    <p className="ix-a">
                      <i>AI</i>
                      <span>유튜브에서 인플루언서들이 자주 소개하는 뷰티 브랜드예요. 블로그 후기에서는 디자인과 품질 평가가 좋은 편이에요.</span>
                    </p>
                    <ul className="ix-src-chips" aria-label="AI가 근거로 삼는 출처">
                      <li>유튜브 리뷰</li>
                      <li>블로그 후기</li>
                      <li>홈페이지 글</li>
                    </ul>
                    <Ex>예시 화면</Ex>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSec>
        </div>

        {/* ④ 자체 섭외 도구 위플루언서 (11-08 대표: 비교표 대신 실제 툴 화면으로. GEO 쪽 realGEO 칸과 같은 문법) */}
        <CSec
          id="wiplu"
          eb="자체 섭외 도구 위플루언서"
          q={
            <>
              채널 하나하나를 집중 분석해,{" "}
              <br />
              <span>성장하는 채널인지 데이터로 보여 드립니다</span>
            </>
          }
          sub="당신의 브랜드를 성장시킬 수 있는 인플루언서인지, 확실한 근거를 제시하겠습니다."
        >
          <GeoToolReel slides={WIPLU} />
          <p className="geo-stmt ix-stmt">위플루언서는 내부에서 쓰는 툴입니다. 미팅에서 실제 화면으로 자세히 보여 드리겠습니다.</p>
        </CSec>

        {/* ⑤ 광고주 공유 채널 분석 리포트 (11-08 대표: 툴 칸과 따로, 리포트 전체를 길게 보여 줌) */}
        <CSec
          id="report"
          eb="광고주께 공유하는 채널 분석 리포트"
          tone="mist"
          q={
            <>
              후보를 선정한 근거를{" "}
              <br />
              <span>데이터로 보여 드립니다</span>
            </>
          }
          sub="후보 채널 하나하나를 내부에서 분석한 결과를 광고주께 링크 한 장으로 공유드립니다."
        >
          <div className="ix-rpt">
            <ol className="ix-rpt-list">
              {REPORT_ITEMS.map(([t, x], i) => (
                <li key={t} style={vars({ i })}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <span>{x}</span>
                </li>
              ))}
            </ol>
            <figure className="ix-rpt-frame" aria-label="광고주 공유 채널 분석 리포트 실제 화면">
              <div className="ix-rpt-scroll">
                <img src="/tools/wiplu-report-full.jpg" alt="위플루언서 채널 분석 리포트 전체 화면. 채널 이름과 얼굴은 가림" loading="lazy" width={1400} height={6703} />
              </div>
              <figcaption>실제 리포트 · 마우스를 올리면 멈춥니다</figcaption>
            </figure>
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
          <ol className="ix-steps2" aria-label="진행 일곱 단계">
            {STEPS.map(([t, x, ic], i) => (
              <li key={t} className={i === 0 ? "on" : undefined} style={vars({ i })}>
                <span className="ic" aria-hidden="true">
                  <Icon k={ic} />
                </span>
                <em>{String(i + 1).padStart(2, "0")}</em>
                <b>{t}</b>
                <span className="tx">{x}</span>
                {i === 0 ? <small>결정권자 참석을 부탁드립니다</small> : null}
              </li>
            ))}
          </ol>
          <p className="geo-note ix-steps-note">첫 미팅에는 결정권자가 꼭 참석해 주시길 부탁드립니다. 예산과 방향을 그 자리에서 정해야 다음 단계가 빨라집니다.</p>
        </CSec>

        {/* ⑦ 해외 인플루언서는 글로벌 페이지로 (2026-11-08 대표: 중국·일본은 /services/global에서 설명, 여기는 띠 하나. 비용 안내 칸은 같은 날 뺌 → 진행 순서 바로 아래) */}
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
          sub="첫 미팅은 가능한 결정권자가 동행해 주시길 부탁드립니다. 빠른 시일 안에 연락드리겠습니다."
          label="제안 요청 보내기"
          initial={["infl"]}
          source="service_influencer"
          pt
        />
      </div>
    </DocShell>
  )
}
