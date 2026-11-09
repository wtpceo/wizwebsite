import { Sec } from "./DocParts"
import { vars } from "./parts"

// 새 쪽 「실제로 어떤 결과물이 나오나요?」 띠(11-05).
// 실제 것(촬영 사진·보고서 캡처·직접 운영 채널)과 예시 화면을 꼬리표로 구분한다. 광고주 상호·간판·얼굴이 보이는 사진은 쓰지 않는다.
type Item =
  | { img: string; w: number; h: number; cap: string; wide?: boolean; tall?: boolean; reel?: boolean; photo?: boolean }
  | { video: string; poster: string; cap: string }
  | { tiles: string; pick: string; cap: string }

type Works = { q?: string; lead: string; tag: string; items: Item[] }

const REP = (n: number) => `/images/report/report-${n}.jpg`

export const WORKS: Record<string, Works> = {
  search: {
    lead: "AI 답변과 포털 검색에서 브랜드가 얼마나 인용되고 노출되는지 수치로 보여 드립니다. 실제 고객사에 드린 리포트 화면입니다.",
    tag: "실제 리포트 · 고객사명 가림",
    items: [
      { img: REP(1), w: 1600, h: 396, cap: "네이버 AI·ChatGPT·Gemini 내 브랜드 언급 비율", wide: true },
      { img: REP(5), w: 1600, h: 514, cap: "AI 인용 콘텐츠 9가지 요건 대조표", wide: true },
      { img: REP(9), w: 1600, h: 534, cap: "AI 답변 출처 유형별 인용 비중", wide: true },
      { img: "/report/weekly-report-1.jpg", w: 1400, h: 1980, cap: "위즈더플래닝 주간 리포트(2026년 8월 3주차)", tall: true },
      { img: "/report/business-report-engines.jpg", w: 1200, h: 1077, cap: "엔진별 질의 수 대비 브랜드 인용 횟수" },
    ],
  },
  perf: {
    lead: "캠페인 성과는 클릭 수, 집행 비용, CPC 등 실제 지표로 알려 드립니다. 첫 번째는 실제 데이터고 오른쪽은 예시 화면입니다.",
    tag: "예시 화면 · 첫 번째는 실제 성과",
    items: [
      { tiles: "perf", pick: "0", cap: "메타 광고 월간 성과(2026년 2월 실제 데이터)" },
      { tiles: "perf", pick: "1", cap: "예약 유도 광고 소재" },
      { tiles: "perf", pick: "2", cap: "구매 유도 광고 소재" },
    ],
  },
  viral: {
    lead: "블로그, 체험단, 보도자료 콘텐츠가 실제 포털 검색 결과에 나오는 예시 화면입니다.",
    tag: "예시 화면",
    items: [
      { tiles: "viral", pick: "0", cap: "블로그 탭 상단 「인기글」 영역" },
      { tiles: "viral", pick: "1", cap: "블로그 체험단 리뷰 콘텐츠" },
      { tiles: "viral", pick: "2", cap: "언론사 뉴스 보도자료" },
    ],
  },
  infl: {
    lead: "위플루언서에서 구독자, 평균 조회수, 조회율을 따져 알맞은 채널을 고릅니다. 아래는 업종별 크리에이터 콘텐츠 연출 예시입니다.",
    tag: "위플루언서 실제 화면(채널·브랜드명 가림) · 아래는 연출 예시",
    items: [
      { img: "/sf/ex/wipl-campaign.jpg", w: 1188, h: 724, cap: "위플루언서 대시보드: 조건 맞는 유튜브 채널 89곳 조회율 순 정렬", wide: true },
      { img: "/sf/pf/infl-fashion.jpg", w: 450, h: 675, cap: "패션 크리에이터 콘텐츠 예시", reel: true },
      { img: "/sf/pf/infl-beauty.jpg", w: 450, h: 675, cap: "뷰티 크리에이터 콘텐츠 예시", reel: true },
      { img: "/sf/pf/infl-food.jpg", w: 450, h: 675, cap: "푸드 크리에이터 콘텐츠 예시", reel: true },
    ],
  },
  content: {
    lead: "사내 촬영팀이 현장에서 직접 찍고 편집한 사진과 숏폼 영상입니다. 업종에 맞춰 연출하며 뷰티·패션은 참고용 예시입니다.",
    tag: "직접 찍은 사진 · 숏폼 · 연출 예시",
    items: [
      { video: "/sf/v/b1.mp4", poster: "/sf/v/b1.jpg", cap: "숏폼 예시: 뷰티 세럼 리뷰" },
      { video: "/sf/v/f1.mp4", poster: "/sf/v/f1.jpg", cap: "숏폼 예시: 데일리 스타일링" },
      { video: "/sf/v/b2.mp4", poster: "/sf/v/b2.jpg", cap: "숏폼 예시: 메이크업 튜토리얼" },
      { img: "/sf/pf/w4.jpg", w: 720, h: 540, cap: "헤어살롱 공간 촬영" },
      { img: "/sf/pf/w5.jpg", w: 720, h: 540, cap: "필라테스 스튜디오 공간 촬영" },
      { img: "/sf/pf/g6.jpg", w: 720, h: 540, cap: "상업 매장 공간 촬영" },
      { video: "/sf/v/r15.mp4", poster: "/sf/v/r15.jpg", cap: "숏폼: 일식 다이닝 메뉴 연출" },
      { img: "/sf/pf/w1.jpg", w: 720, h: 540, cap: "외식 매장 상차림 촬영" },
      { img: "/sf/pf/w6.jpg", w: 720, h: 540, cap: "조리 과정 클로즈업 촬영" },
    ],
  },
  global: {
    lead: "샤오홍슈와 LINE 같은 현지 플랫폼에 브랜드가 올라간 예시 화면입니다.",
    tag: "예시 화면",
    items: [
      { tiles: "global", pick: "0", cap: "샤오홍슈 뷰티 리뷰 노트" },
      { tiles: "global", pick: "1", cap: "LINE 공식계정 안내 메시지" },
      { tiles: "global", pick: "2", cap: "샤오홍슈 패션 매장 소개 노트" },
    ],
  },
  off: {
    lead: "매장 근처 택배차량, 극장, 모빌리티 매체를 골라 맞춤 소재를 만들어 내보냅니다. 매체별 송출 화면 예시입니다.",
    tag: "예시 화면",
    items: [
      { tiles: "off", pick: "0", cap: "택배차량 측면 래핑" },
      { tiles: "off", pick: "1", cap: "극장 상영 전 스크린 광고" },
      { tiles: "off", pick: "2", cap: "카카오T 택시 뒷좌석 모니터" },
    ],
  },
  /* 업종별 솔루션 */
  local: {
    q: "업종별 실행 화면과 결과물",
    lead: "소비자에게 보이는 검색·웹사이트 화면 예시와 사내 촬영팀이 직접 찍은 사진입니다.",
    tag: "예시 화면 · 직접 촬영한 사진",
    items: [
      { tiles: "search", pick: "0", cap: "병·의원: AI 답변 노출률 측정" },
      { img: "/sf/pf/w3.jpg", w: 720, h: 540, cap: "식음료 매장: 직접 찍은 메뉴 사진" },
      { tiles: "home", pick: "1", cap: "교육·학원: 상담 유도 웹사이트" },
    ],
  },
  growth: {
    q: "캠페인 산출물과 리포트",
    lead: "퍼포먼스 광고 데이터, 전환 소재, 숏폼 영상, 글로벌 채널 성과를 전담 AE가 하나의 리포트로 묶어 보고합니다.",
    tag: "예시 화면",
    items: [
      { tiles: "perf", pick: "0", cap: "퍼포먼스 광고 월간 리포트" },
      { tiles: "perf", pick: "2", cap: "구매 유도 광고 소재" },
      { tiles: "global", pick: "1", cap: "일본 LINE 공식계정 매장 안내" },
    ],
  },
  enterprise: {
    q: "주간 통합 리포트 구성",
    lead: "첫 장에 KPI 4가지를 요약하고 뒤에서 AI 엔진과 출처별 세부 데이터를 분석합니다. 임원 보고에 바로 쓸 수 있게 만듭니다.",
    tag: "실제 리포트 화면",
    items: [
      { img: "/report/business-report-summary.jpg", w: 1200, h: 1221, cap: "첫 장: 주간 KPI 4대 지표 요약" },
      { img: "/report/business-report-engines.jpg", w: 1200, h: 1077, cap: "AI 엔진별 출처 인용과 본문 언급" },
      { img: REP(9), w: 1600, h: 534, cap: "AI 답변 근거 출처 유형 분포", wide: true },
    ],
  },
  team: {
    q: "전담 AE 정기 리포트",
    lead: "주간 성과, 사전 진단, 엔터프라이즈 통합 리포트까지 전담 AE가 직접 쓰고 만나서 보고합니다.",
    tag: "실제 리포트 · 고객사명 가림",
    items: [
      { img: REP(1), w: 1600, h: 396, cap: "AI 검색 진단: 엔진별 언급 비율", wide: true },
      { img: "/report/business-report-summary.jpg", w: 1200, h: 1221, cap: "엔터프라이즈 통합 리포트 표지" },
      { img: "/report/weekly-report-1.jpg", w: 1400, h: 1980, cap: "주간 성과 리포트", tall: true },
    ],
  },
}

export default function Works({ k }: { k: string }) {
  const w = WORKS[k]
  if (!w) return null
  return (
    <Sec q={w.q || "실제 산출물과 리포트 예시"}>
      <p>{w.lead}</p>
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
          if ("video" in it) {
            return (
              <li key={i} className="wk-v" style={vars({ n: i })}>
                <video data-src={it.video} poster={it.poster} muted loop playsInline preload="none" aria-label={it.cap} />
                <span>{it.cap}</span>
              </li>
            )
          }
          return (
            <li key={i} className={it.wide ? "wk-w" : it.tall ? "wk-tall" : it.reel ? "wk-r" : it.img.startsWith("/sf/pf/") ? "wk-p" : undefined} style={vars({ n: i })}>
              <img src={it.img} alt={it.cap} width={it.w} height={it.h} loading="lazy" decoding="async" />
              <span>{it.cap}</span>
            </li>
          )
        })}
      </ul>
      <small className="dp-works-tag">{w.tag}</small>
    </Sec>
  )
}
