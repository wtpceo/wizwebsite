import type { ReactNode } from "react"
import Link from "next/link"
import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
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
const CLAIM_SECOND_USE = "저희가 반응이 좋은 장면을 골라 15초 광고, 세로 숏폼, 이미지 소재로 만들어 퍼포먼스 광고에 씁니다."

/** 섭외 전략 네 장 [이름, 영문, 한 줄, 배경 사진, 매체인지] — PPL은 매체가 아니라 협업 방식.
 *  배경은 2026-11-08 위즈스튜디오 레퍼런스(references 저장소)의 실제 촬영 사진: 스크린골프 스윙·네일숍·마라탕 음식점·안경 든 손(대표 「틱톡은 음식점으로」). 네 장 모두 같은 톤으로 보정(scratchpad grade.py: 자동 대비·채도·그림자 남색). 얼굴·간판 없는 컷만 골랐고 상호는 쓰지 않음 */
const SCOPE: [string, string, string, string, boolean][] = [
  ["유튜버", "YouTube", "심층 리뷰와 브이로그 콘텐츠가 검색 결과에 오래 남습니다.", "/infl/scope-youtube.jpg", true],
  ["인스타그램 인플루언서", "Instagram", "릴스와 피드 콘텐츠로 원하는 고객에게 빠르게 퍼집니다.", "/infl/scope-instagram.jpg", true],
  ["틱톡커", "TikTok", "숏폼 영상으로 젊은 소비층의 빠른 반응을 이끌어 냅니다.", "/infl/scope-tiktok.jpg", true],
]
/* 11-09 대표: 카드 제목을 매체 이름이 아니라 사람(유튜버·인스타그램 인플루언서·틱톡커)으로, PPL 카드는 뺌 */
const SCOPE_LD: Record<string, string> = { YouTube: "유튜버 섭외", Instagram: "인스타그램 인플루언서 섭외", TikTok: "틱톡커 섭외" }

/* 11-09 대표 「협업 결과를 홈페이지·쇼핑몰 상세페이지·뉴스·블로그·플레이스 등에 쓰는 걸 상상하게」: 같은 협업 콘텐츠가 들어간 여섯 군데를 코드 화면으로 그린다.
   상호·로고·실적 숫자는 넣지 않는다(모두 예시). 쓸 곳과 기간은 섭외 계약에서 정한다는 문장을 같이 둔다. */
const USES: [string, string, string][] = [
  ["web", "자사 홈페이지", "첫 화면과 제품 소개에 실제 사용 장면을 올립니다"],
  ["shop", "쇼핑몰 상세페이지", "구매 직전에 보는 상세페이지에 크리에이터 후기를 넣습니다"],
  ["place", "지도·플레이스", "네이버 플레이스와 지도 대표 사진, 소식에 올립니다"],
  ["news", "뉴스 기사", "보도자료에 협업 장면을 실어 언론 기사로 내보냅니다"],
  ["blog", "블로그", "블로그 체험·정보 글에 원본 사진과 영상을 씁니다"],
  ["pop", "매장 POP·전단", "매장 안 POP와 전단, 배너 시안에 씁니다"],
]
const UW = "/infl/original.jpg"
const UT = "/sf/pf/infl-beauty.jpg"
function UseMock({ k }: { k: string }) {
  if (k === "web")
    return (
      <div className="ixu-m ixu-web" aria-hidden="true">
        <div className="ixu-bar"><i /><i /><i /><span>브랜드 공식 홈페이지</span></div>
        <div className="ixu-web-hero">
          <div>
            <small>크리에이터가 먼저 써 본</small>
            <b>OO 세럼</b>
            <p><i /><i /></p>
            <span className="ixu-btn">제품 보기</span>
          </div>
          <figure><img src={UW} alt="" loading="lazy" decoding="async" /><i className="ixu-play" /></figure>
        </div>
      </div>
    )
  if (k === "shop")
    return (
      <div className="ixu-m ixu-shop" aria-hidden="true">
        <div className="ixu-phone">
          <figure><img src={UT} alt="" loading="lazy" decoding="async" /><span className="ixu-tag">크리에이터 리뷰</span></figure>
          <div className="ixu-shop-in">
            <small>OO 브랜드</small>
            <b>OO 세럼 50ml</b>
            <p><i /><i /><i /></p>
            <div className="ixu-shop-rv"><img src={UW} alt="" loading="lazy" decoding="async" /><span>“3주 써 보고 솔직하게 말합니다”</span></div>
            <span className="ixu-btn">구매하기</span>
          </div>
        </div>
      </div>
    )
  if (k === "place")
    return (
      <div className="ixu-m ixu-place" aria-hidden="true">
        <div className="ixu-place-h"><b>OO 매장</b><small>홈 · 소식 · 사진 · 리뷰</small></div>
        <div className="ixu-place-g">
          <img src={UW} alt="" loading="lazy" decoding="async" />
          <img src={UT} alt="" loading="lazy" decoding="async" />
          <img src="/geo/media-beauty.jpg" alt="" loading="lazy" decoding="async" />
        </div>
        <span className="ixu-place-l">대표 사진</span>
      </div>
    )
  if (k === "news")
    return (
      <div className="ixu-m ixu-news" aria-hidden="true">
        <div className="ixu-news-h"><b>OO일보</b><small>유통 · 뷰티</small></div>
        <p className="ixu-news-t">OO 브랜드, 크리에이터와 함께 만든 사용 후기 공개</p>
        <figure><img src={UW} alt="" loading="lazy" decoding="async" /></figure>
        <p className="ixu-lines"><i /><i /><i /></p>
      </div>
    )
  if (k === "blog")
    return (
      <div className="ixu-m ixu-blog" aria-hidden="true">
        <div className="ixu-blog-h"><i /><span>블로그</span></div>
        <p className="ixu-blog-t">OO 세럼 한 달 써 본 솔직 후기</p>
        <figure><img src={UW} alt="" loading="lazy" decoding="async" /><i className="ixu-play" /></figure>
        <p className="ixu-lines"><i /><i /></p>
      </div>
    )
  return (
    <div className="ixu-m ixu-pop" aria-hidden="true">
      <div className="ixu-pop-card">
        <img src={UT} alt="" loading="lazy" decoding="async" />
        <div><small>CREATOR PICK</small><b>OO 세럼</b></div>
      </div>
      <i className="ixu-pop-foot" />
    </div>
  )
}

/* 11-09 대표 「실제 유튜브·인스타·틱톡·방송 화면처럼」: 사진 위에 플랫폼 화면 요소를 코드로 얹는다.
   로고·상표는 넣지 않고, 실적처럼 읽히는 숫자도 넣지 않는다. 카드 아래쪽은 설명 글 자리라 위쪽에만 둔다. */
const UI_ICON = {
  heart: "M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2Z",
  talk: "M4.5 11.5a7.5 7 0 1 1 3.6 6L4.5 19l1.1-3.4a6.8 6.8 0 0 1-1.1-4.1Z",
  send: "M20.5 4 3.5 10.8l6.6 2.6 2.6 6.6L20.5 4Zm-10.4 9.4 4.6-4.6",
  share: "M13.5 5.5 20 11.5l-6.5 6v-3.6c-4.6 0-7.4 1.2-9.5 4.6.6-5.3 3.4-9.1 9.5-9.6V5.5Z",
  save: "M6.5 4.5h11v15l-5.5-4-5.5 4v-15Z",
  note: "M9 17.5V6.5l10-2v11M9 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm10-2a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
} as const
function UiIcon({ d }: { d: keyof typeof UI_ICON }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d={UI_ICON[d]} />
    </svg>
  )
}
function ScopeUI({ k }: { k: number }) {
  if (k === 0)
    return (
      <div className="ix-ui ix-ui-yt" aria-hidden="true">
        <p className="ix-ui-thumb">
          3주 써 보고
          <br />
          <mark>솔직하게 말합니다</mark>
        </p>
        <i className="ix-ui-play" />
        <span className="ix-ui-dur">12:08</span>
        <span className="ix-ui-bar">
          <i />
        </span>
      </div>
    )
  if (k === 1)
    return (
      <div className="ix-ui ix-ui-ig" aria-hidden="true">
        <span className="ix-ui-top">릴스</span>
        <p className="ix-ui-cap">
          <span>이 색 조합,</span>
          <br />
          <span>요즘 제일 많이 찾아요</span>
        </p>
        <span className="ix-ui-side">
          <UiIcon d="heart" />
          <UiIcon d="talk" />
          <UiIcon d="send" />
          <UiIcon d="save" />
        </span>
        <span className="ix-ui-who">
          <i />
          @brand.nail
        </span>
      </div>
    )
  if (k === 2)
    return (
      <div className="ix-ui ix-ui-tt" aria-hidden="true">
        <span className="ix-ui-tabs">
          <span>팔로잉</span>
          <b>추천</b>
        </span>
        <p className="ix-ui-big">
          불맛
          <br />
          미쳤다
        </p>
        <span className="ix-ui-side">
          <i className="ix-ui-av" />
          <UiIcon d="heart" />
          <UiIcon d="talk" />
          <UiIcon d="share" />
        </span>
        <span className="ix-ui-tag">
          <b>@brand.eats</b> #점심메뉴 #불향
          <em>
            <UiIcon d="note" /> 오리지널 사운드
          </em>
        </span>
      </div>
    )
  return (
    <div className="ix-ui ix-ui-tv" aria-hidden="true">
      <span className="ix-ui-notice">간접광고 포함</span>
      <span className="ix-ui-bug">WIZ</span>
      <span className="ix-ui-lower">
        <small>촬영 내내 쓴 바로 그것</small>
        <b>그 선글라스, 어디 거예요?</b>
      </span>
    </div>
  )
}

/** 자체 섭외 도구 위플루언서 화면 다섯 장 [제목, 두 줄 설명, 그림, 대체문] — 2026-11-08 로컬에서 찍은 실제 화면. 채널명·얼굴·브랜드명은 흐림 처리(남의 채널 초상·상표) */
const WIPLU: [string, string, string, string][] = [
  ["채널 탐색: 카테고리·규모·조회율로 고르기", "한국 유튜브 채널 6,740곳을 카테고리·구독자·최근 업로드 주기로 거르고,\n최근 영상 10개의 평균 조회수가 구독자 대비 몇 %인지 분석합니다.", "/tools/wiplu-youtube.jpg", "위플루언서 유튜브 채널 찾기 화면"],
  ["채널 상세: 핵심 지표와 최근 영상 성과", "구독자, 평균 조회수, 조회율, 최근 영상 10개를 한 번에 봅니다.\n계속 크는 채널인지 시청자 반응이 일정한지 확인합니다.", "/tools/wiplu-channel.jpg", "위플루언서 채널 상세 화면"],
  ["인스타그램 탐색: 실제 참여율로 고르기", "공개 계정 1,554곳을 단순 팔로워 수가 아니라\n최근 게시물의 실제 반응과 참여 비율로 가려냅니다.", "/tools/wiplu-instagram.jpg", "위플루언서 인스타그램 계정 찾기 화면"],
  ["틱톡 탐색: 팔로워 밖 확산력 확인", "공개 계정 886곳의 최근 영상 조회수를 팔로워와 비교합니다.\n이 비율이 높을수록 팔로워 밖으로 널리 퍼지는 계정입니다.", "/tools/wiplu-tiktok.jpg", "위플루언서 틱톡 계정 찾기 화면"],
]

/** 광고주 공유 채널 분석 리포트에 들어가는 것 [제목, 한 줄] — 실제 리포트(/r/비밀주소) 항목 순서 그대로 */
const REPORT_ITEMS: [string, string][] = [
  ["채널 규모와 조회율", "구독자 수, 영상당 평균 조회수, 구독자 대비 조회율을 수치로 정리"],
  ["개별 영상 조회수 분포", "최근 영상 10개의 조회수를 비교해 반짝 이슈인지, 평균 도달력은 어떤지 확인"],
  ["롱폼·숏폼 도달 비교", "포맷별 평균 지표를 나눠 구독자 밖으로 퍼지기 좋은 영상 유형을 파악"],
  ["동일 규모 채널 내 순위", "비슷한 구독자를 가진 채널 30곳과 비교해 조회율 백분위를 확인"],
  ["구독자 성장 추이", "일별 누적 구독자 데이터를 바탕으로 채널이 얼마나 크고 있는지 진단"],
  ["참여율 및 업로드 주기", "조회수 대비 좋아요와 댓글 비율, 평균 콘텐츠 발행 주기를 계산"],
  ["유료 광고 진행 이력", "최근 콘텐츠 중 '유료 광고 포함' 영상 비중과 브랜디드 진행 이력을 확인"],
]

/** 광고 리포트 예시 화면 — 숫자는 전부 예시. 실제 값 아님 */
const REPORT_ROWS: [string, string, string, string][] = [
  ["세로 숏폼 A", "18,420", "31", "예시"],
  ["15초 광고 B", "9,760", "12", "예시"],
  ["이미지 소재 C", "4,110", "5", "예시"],
]

/** 진행 일곱 단계 [이름, 한 줄, 아이콘] — 아이콘은 사이트 공용 선 아이콘(icons.tsx) */
const STEPS: [string, string, string][] = [
  ["사전 미팅", "제품 특성과 타깃 고객, 캠페인 일정과 예산을 파악합니다", "chat"],
  ["후보 리스트 제안", "타깃 고객이 보는 채널을 골라 선정한 이유와 함께 제안해 드립니다", "plan"],
  ["섭외 및 계약", "세부 조건을 맞추고 2차 활용 범위까지 계약서에 분명히 적습니다", "person"],
  ["촬영 가이드 설계", "꼭 들어가야 할 장면과 소구점, 공정위 표기 문구를 정리해 드립니다", "content"],
  ["콘텐츠 발행", "가이드를 잘 지켰는지, 대가성 표기를 했는지 확인하고 채널에 올립니다", "infl"],
  ["2·3차 자산화", "반응이 좋은 장면을 퍼포먼스 광고 소재나 웹사이트 콘텐츠로 만듭니다", "loop"],
  ["성과 리포트", "소재별 도달과 문의, 매출 기여도를 월간 수치 리포트로 보내 드립니다", "perf"],
]

/** FAQ — 11-08 대표가 준 네 개(비용·함께 해야 하나·연예인·자체 촬영) + 광고주가 실제로 자주 묻는 것. 숫자는 사이트가 이미 쓰는 것만, 결과 약속 없음 */
const FAQ: [string, string][] = [
  [
    "유튜버나 인플루언서 섭외 비용이 높지 않나요?",
    "섭외 단가는 채널 규모에 따라 다릅니다. 구독자 수천 명 규모의 마이크로 인플루언서부터 수백만 명 규모의 메가 채널까지 예산에 맞춰 가장 알맞은 구성을 제안해 드립니다.",
  ],
  [
    "퍼포먼스 광고와 GEO까지 반드시 함께 진행해야 하나요?",
    "아닙니다. 발행된 콘텐츠를 퍼포먼스 광고 소재와 AI 검색 근거로 연결하는 것은 콘텐츠의 자산 가치를 높이기 위한 제안일 뿐입니다. 인플루언서 섭외만 맡겨 주셔도 브랜드에 맞는 채널을 꼼꼼히 골라 진행해 드립니다.",
  ],
  [
    "연예인이나 셀럽 섭외도 가능한가요?",
    "가능합니다. 연예인 섭외는 인지도와 활동 영역에 따라 조건이 크게 다르므로, 예산을 먼저 확인하고 그 안에서 섭외할 수 있는 셀럽과 인플루언서 후보를 함께 제안해 드립니다.",
  ],
  [
    "콘텐츠 촬영도 대행사에서 직접 진행하나요?",
    "인플루언서 협업은 각 채널의 분위기에 맞춰 크리에이터가 직접 찍고 만드는 것이 기본입니다. 따로 모델을 쓴 브랜드 자체 영상이나 광고 전용 소재가 필요하면 저희 촬영팀이 직접 기획하고 찍어 드립니다.",
  ],
  [
    "의뢰 후 후보 리스트를 받기까지 얼마나 걸리나요?",
    "제품 정보, 타깃 고객, 일정, 예산이 담긴 브리프를 받고 나서 영업일 3일 안에 후보 리스트를 보내 드립니다. 리스트에는 채널별 선정 이유와 예상 단가가 적혀 있고, 리스트 제안까지는 따로 비용이 들지 않습니다.",
  ],
  [
    "유료광고 포함 표기는 필수로 들어가야 하나요?",
    "제품 협찬이나 광고비를 지원받아 올리는 모든 게시물은 공정거래위원회 추천·보증 등에 관한 표시·광고 심사지침에 따라 대가성 표기를 분명히 적어야 합니다. 저희는 이 법적 기준을 철저히 지켜 캠페인을 운영합니다.",
  ],
  [
    "인플루언서가 제작한 영상을 브랜드 광고 소재로 다시 사용할 수 있나요?",
    "크리에이터와 미리 합의해야 합니다. 저희는 계약할 때 2차 활용 매체와 범위, 기간을 계약서에 분명히 적어 나중에 분쟁 없이 광고 소재로 쓰실 수 있게 도와드립니다.",
  ],
]

/** 가운데 정렬 칸: 머리말 → 제목(둘째 줄 파랑) → 부제 → 보조 자료 (GEO 쪽과 같은 문법) */
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
        // 11-08 GEO 점검: 맡는 매체 네 가지를 구조화 데이터에도 적어 AI가 서비스 범위를 정확히 읽게
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "인플루언서 섭외 매체",
          itemListElement: SCOPE.map(([t, en, x]) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: SCOPE_LD[en] ?? `${t} 섭외`, alternateName: en, description: x },
          })),
        },
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
            {/* 11-08 대표(카피 세션 안 승인): 머리말을 「인플루언서 마케팅 대행」으로 바꿔 H1 안에 넣는다 — 검색엔진이 읽는 H1에 핵심 키워드가 들어가게. 큰 글은 대표가 고른 문구 그대로. 다른 서비스 쪽(ServiceDoc)과 같은 h1 + small 구조 */}
            <h1 aria-label="인플루언서 마케팅 대행: 한 번 찍은 콘텐츠가 쉬지 않고 일합니다">
              <small className="ix-kw">인플루언서 마케팅 대행</small>{" "}
              <Chars text={"한 번 찍은 콘텐츠가\n쉬지 않고 일합니다"} mark="쉬지 않고" />
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
              브랜드에 맞는 인플루언서를 찾아 섭외하고, <span className="nw">만들어진 콘텐츠가</span> AI 검색 답변(GEO)과 퍼포먼스 광고 성과로 이어지게 설계합니다.
              <br />
              <b>한 번 협찬하고 끝내지 않는 통합 마케팅(IMC)입니다.</b>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                맞춤 후보 리스트 받기
              </a>
            </div>
          </div>
          <a className="ix-cue" href="#scope" aria-label="맡는 범위로 내려가기">
            <span>위즈더플래닝의 섭외·확장 전략</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ②·③은 한 틀(.ix-dark)로 감싸 그라데이션을 한 번만 깐다 — 칸마다 깔면 경계에 가로줄이 보임(11-08) */}
        <div className="ix-dark">
        {/* ② 섭외 전략 (11-08 대표: 첫 화면과 같은 결 — 어두운 바탕, 왼쪽 정렬, 번호 붙은 매체 글자, 카드 사이 간격) */}
        <CSec
          id="scope"
          eb="맞춤 섭외 전략"
          tone="k"
          cls="ix-fit"
          q={
            <>
              타깃 고객이 보는{" "}
              <br />
              <span>매체별 맞춤 섭외</span>
            </>
          }
        >
          <ol className="ix-scope" aria-label="매체별 섭외">
            {SCOPE.map(([t, en, x, bg, isMedia], i) => (
              <li key={t} className={isMedia ? undefined : "ix-ppl"} style={vars({ i })}>
                <img className="ix-scope-bg" src={bg} alt="" loading="lazy" width={1400} height={933} />
                <ScopeUI k={i} />
                <div className="ix-scope-in">
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <small>{isMedia ? en : `${en} · 유튜브·인스타그램·틱톡 전 매체 적용`}</small>
                  <span>{x}</span>
                </div>
              </li>
            ))}
          </ol>
        </CSec>

        {/* ③ 2차·3차 활용 (11-08 대표: 가공 과정 대신 활용 결과를 보여 줌. 옛 ⑤ 결과(리포트·AI 답변)를 여기로 합침). 첫 화면과 같은 결: 남색·왼쪽 정렬 */}
        <CSec
          id="reuse"
          eb="콘텐츠 자산화"
          tone="k"
          cls="ix-fit ix-use"
          q={
            <>
              광고와 AI 답변으로{" "}
              <br />
              <span>콘텐츠 2차·3차 확장</span>
            </>
          }
          sub={
            <>
              시청자 반응이 좋은 구간은 퍼포먼스 광고 소재로 만들고{" "}
              <br />
              쌓인 영상과 리뷰는 생성형 AI가 브랜드를 추천할 때 쓰는 근거로 씁니다.
            </>
          }
        >
          <div className="ix-use-grid" aria-label="원본 한 편이 광고와 AI 답변으로 이어지는 흐름">
            <div className="ix-use-src">
              <em>1차 · 채널 발행</em>
              <Thumb shape="tall" label="인플루언서 채널 원본" />
              <small>인플루언서 채널에 원본 콘텐츠 발행</small>
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
                  <b>반응 좋은 장면을 광고 소재로</b>
                  <p>{CLAIM_SECOND_USE}</p>
                  <p>소재별 노출과 문의, 매출 전환 성과를 월간 수치 리포트로 보내 드립니다.</p>
                  <Link className="ix-use-more" href="/services/performance">
                    퍼포먼스 광고 대행 자세히 보기
                  </Link>
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
                  <b>AI 답변이 쓰는 <span className="nw">외부 출처 확보</span></b>
                  <p>"OO은 어떤 브랜드야?"라는 질문에 인플루언서들이 많이 리뷰한 브랜드로 답이 나오게 설계합니다. 핵심 내용을 웹사이트와 블로그에도 정리해 검색과 AI 답변에 반영해 드립니다.</p>
                  <Link className="ix-use-more" href="/services/search">
                    AI 검색 최적화(GEO) 자세히 보기
                  </Link>
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
                      <li>웹사이트 콘텐츠</li>
                    </ul>
                    <Ex>예시 화면</Ex>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSec>
        </div>

        {/* ③-2 2차 활용처 (11-09 대표): 같은 협업 콘텐츠가 들어가는 여섯 군데를 화면으로 */}
        <CSec
          id="uses"
          eb="2차 활용처"
          tone="mist"
          cls="ixu"
          q={
            <>
              한 번 받은 협업 콘텐츠,{" "}
              <br />
              <span>이렇게 다시 씁니다</span>
            </>
          }
          sub={
            <>
              크리에이터가 찍은 영상과 사진을 홈페이지, 쇼핑몰 상세페이지, 지도, 기사, 블로그, 매장 POP에 다시 씁니다.{" "}
              <span className="nw">어디에 얼마 동안 쓸지는 섭외 계약 때 크리에이터와 미리 정합니다.</span>
            </>
          }
        >
          <ul className="ixu-g" aria-label="협업 콘텐츠를 다시 쓰는 곳">
            {USES.map(([k, t, x], i) => (
              <li key={k} className={`ixu-${k}-li`} style={vars({ i })}>
                <UseMock k={k} />
                <div className="ixu-tx">
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{t}</b>
                  <span>{x}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="ixu-note">
            <Ex>모두 예시 화면</Ex> 상호·제품명은 OO로 가렸습니다. 실제 활용 범위는 크리에이터 계약 조건을 따릅니다.
          </p>
        </CSec>

        {/* ④ 자체 섭외 도구 위플루언서 (11-08 대표: 비교표 대신 실제 툴 화면으로. GEO 쪽 realGEO 칸과 같은 문법) */}
        <CSec
          id="wiplu"
          eb="자체 섭외 솔루션"
          q={
            <>
              성장세와 반응률 검증{" "}
              <br />
              <span>데이터 기반 채널 분석</span>
            </>
          }
          sub="브랜드 성장을 도울 수 있는 진짜 채널인지, 객관적인 데이터로 확인하고 제안해 드립니다."
        >
          <GeoToolReel slides={WIPLU} />
          <p className="geo-stmt ix-stmt">위플루언서는 저희가 자체 개발한 전용 솔루션입니다. 대면 미팅 때 실제 구동 화면을 <span className="nw">보여 드립니다.</span></p>
        </CSec>

        {/* ⑤ 광고주 공유 채널 분석 리포트 (11-08 대표: 툴 칸과 따로, 리포트 전체를 길게 보여 줌) */}
        <CSec
          id="report"
          eb="채널 분석 리포트"
          tone="mist"
          q={
            <>
              후보 선정 근거를 담은{" "}
              <br />
              <span>맞춤 채널 분석 리포트</span>
            </>
          }
          sub="후보 채널별 세부 지표와 성장 추이를 담은 리포트를 전용 웹 링크로 보내 드립니다."
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
              미팅부터 <span className="nw">리포트까지,</span>{" "}
              <br />
              <span>일곱 단계로 진행합니다</span>
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
                {i === 0 ? <small>의사결정권자 참석 권장</small> : null}
              </li>
            ))}
          </ol>
          <p className="geo-note ix-steps-note">첫 미팅에는 의사결정권자께서 함께 오시기를 권합니다. 예산과 캠페인 방향을 현장에서 정하면 섭외와 실행 일정이 훨씬 빨라집니다.</p>
        </CSec>

        {/* ⑦ 해외 인플루언서는 글로벌 페이지로 (2026-11-08 대표: 중국·일본은 /services/global에서 설명, 여기는 띠 하나. 비용 안내 칸은 같은 날 뺌 → 진행 순서 바로 아래) */}
        <section className="ix-global rv" aria-label="해외 인플루언서 안내">
          <div className="dp-w">
            <div className="ix-gl">
              <div>
                <b>해외 인플루언서 섭외가 필요하신가요?</b>
                <span>중국 왕홍·샤오홍슈와 일본 인스타그램 인플루언서 캠페인은 글로벌 마케팅 페이지에서 자세히 안내해 드립니다.</span>
              </div>
              <Link href="/services/global">글로벌 마케팅 보러 가기</Link>
            </div>
          </div>
        </section>

        {/* ⑧ FAQ */}
        <FaqBlock items={FAQ} note="더 궁금하신 점은 문의로 남겨 주세요. 전담 AE가 자세히 안내해 드리겠습니다." />

        {/* ⑨ 문의 */}
        <ContactBlock
          title="인플루언서 협업, 맞춤형 후보 리스트 제안부터 시작하세요."
          sub={
            <>
              첫 미팅은 빠른 방향 결정을 위해 의사결정권자가 함께 오시기를 권합니다.
              <br />
              문의를 남겨 주시면 전담 AE가 빠르게 연락드리겠습니다.
            </>
          }
          label="맞춤 후보 리스트 받기"
          initial={["infl"]}
          source="service_influencer"
        />
      </div>
    </DocShell>
  )
}
