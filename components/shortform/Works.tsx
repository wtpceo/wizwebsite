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
    lead: "AI 답변과 검색에 우리 업체가 몇 번, 어디서 나오는지 숫자로 보여 드립니다. 아래는 실제로 보내 드린 보고서 화면입니다.",
    tag: "실제 보고서 · 업체명 가림",
    items: [
      { img: REP(1), w: 1600, h: 396, cap: "네이버 AI·ChatGPT·제미나이에서 업체가 언급된 비율", wide: true },
      { img: REP(5), w: 1600, h: 514, cap: "AI가 인용하는 글의 조건 9가지를 우리 쪽과 대조", wide: true },
      { img: REP(9), w: 1600, h: 534, cap: "AI가 근거를 어디서 가져오는지 출처 유형별 비율", wide: true },
      { img: "/report/weekly-report-1.jpg", w: 1400, h: 1980, cap: "위즈더플래닝 자체 주간 보고서(2026년 8월 3주차)", tall: true },
      { img: "/report/business-report-engines.jpg", w: 1200, h: 1077, cap: "엔진별로 물어본 수 대비 인용 수" },
    ],
  },
  perf: {
    lead: "광고 결과는 클릭 수와 쓴 돈, 클릭 한 번 값으로 보고합니다. 시안은 여러 개를 함께 돌려 보고 반응이 좋은 쪽으로 예산을 옮깁니다.",
    tag: "예시 화면 · 첫 칸 숫자는 실제 광고 결과",
    items: [
      { tiles: "perf", pick: "0", cap: "메타 광고 한 달 결과(2026년 2월 실제 숫자)" },
      { tiles: "perf", pick: "1", cap: "예약을 받는 광고 시안" },
      { tiles: "perf", pick: "2", cap: "구매로 잇는 광고 시안" },
    ],
  },
  viral: {
    lead: "목표는 검색했을 때 맨 위에 보이는 글입니다. 블로그·기사·체험단 글이 실제 검색 화면에서 어떻게 보이는지 예시로 보여 드립니다.",
    tag: "예시 화면",
    items: [
      { tiles: "viral", pick: "0", cap: "블로그 탭 맨 위 「인기글」 자리" },
      { tiles: "viral", pick: "1", cap: "체험단 글 한 편" },
      { tiles: "viral", pick: "2", cap: "언론 보도자료" },
    ],
  },
  infl: {
    lead: "섭외는 저희가 직접 만든 플랫폼 위플루언서에서 조건에 맞는 채널을 구독자·평균 조회수·조회율로 골라 시작합니다. 아래 사진 세 장은 업종별로 이런 게시물이 올라간다는 예시입니다.",
    tag: "섭외 플랫폼은 실제 화면(채널·브랜드명 가림) · 사진 세 장은 예시",
    items: [
      { img: "/sf/ex/wipl-campaign.jpg", w: 1188, h: 724, cap: "위플루언서 캠페인 화면: 조건에 맞는 유튜브 채널 89곳을 조회율 순으로", wide: true },
      { img: "/sf/pf/infl-fashion.jpg", w: 450, h: 675, cap: "패션 크리에이터 게시물 예시", reel: true },
      { img: "/sf/pf/infl-beauty.jpg", w: 450, h: 675, cap: "뷰티 크리에이터 게시물 예시", reel: true },
      { img: "/sf/pf/infl-food.jpg", w: 450, h: 675, cap: "푸드 크리에이터 게시물 예시", reel: true },
    ],
  },
  content: {
    lead: "촬영팀이 매장에 가서 찍은 사진과 숏폼입니다. 음식·공간·운동처럼 업종마다 찍는 방법이 다릅니다.",
    tag: "직접 찍은 사진 · 숏폼",
    items: [
      { video: "/sf/v/r15.mp4", poster: "/sf/v/r15.jpg", cap: "숏폼: 모둠회·초밥" },
      { img: "/sf/pf/w1.jpg", w: 720, h: 540, cap: "고깃집 한상" },
      { img: "/sf/pf/w2.jpg", w: 720, h: 540, cap: "제철 생선" },
      { img: "/sf/pf/g2.jpg", w: 720, h: 540, cap: "고기 손질" },
      { video: "/sf/v/r31.mp4", poster: "/sf/v/r31.jpg", cap: "숏폼: 솥뚜껑 삼겹살" },
      { img: "/sf/pf/w4.jpg", w: 720, h: 540, cap: "미용실 공간" },
      { img: "/sf/pf/w5.jpg", w: 720, h: 540, cap: "필라테스 공간" },
      { img: "/sf/pf/g6.jpg", w: 720, h: 540, cap: "매장 공간" },
      { img: "/sf/pf/w6.jpg", w: 720, h: 540, cap: "토치로 마무리하는 장면" },
    ],
  },
  global: {
    lead: "중국 손님은 샤오홍슈에서, 일본 손님은 LINE에서 가게를 찾습니다. 그 화면에 우리 업체가 어떻게 올라가는지 예시로 보여 드립니다.",
    tag: "예시 화면",
    items: [
      { tiles: "global", pick: "0", cap: "샤오홍슈 맛집 글" },
      { tiles: "global", pick: "1", cap: "LINE 공식계정 메시지" },
      { tiles: "global", pick: "2", cap: "샤오홍슈 고깃집 글" },
    ],
  },
  off: {
    lead: "업체 근처 단지와 차량을 고르고, 광고 영상과 시안을 만들어 송출합니다. 매체마다 손님 눈에 들어오는 모습은 이렇습니다.",
    tag: "예시 화면",
    items: [
      { tiles: "off", pick: "0", cap: "엘리베이터TV" },
      { tiles: "off", pick: "1", cap: "택배차 옆면" },
      { tiles: "off", pick: "2", cap: "극장 본편 시작 전" },
      { img: "/images/focusmedia/data-map.jpg", w: 1920, h: 1047, cap: "송출할 단지를 지도에서 고릅니다(항공 사진)", wide: true },
    ],
  },
  /* 업종별 솔루션 */
  local: {
    q: "업종별로 무엇을 먼저 하나요?",
    lead: "매장은 사진과 후기, 병원은 지도와 AI 답변 정보, 학원·전문직은 질문에 답하는 글부터 시작하는 경우가 많습니다.",
    tag: "예시 화면 · 직접 찍은 사진",
    items: [
      { tiles: "search", pick: "0", cap: "병원: AI 답변에 먼저 나오게" },
      { img: "/sf/pf/w3.jpg", w: 720, h: 540, cap: "매장: 직접 찍은 메뉴 사진" },
      { tiles: "home", pick: "1", cap: "학원: 상담 신청을 받는 홈페이지" },
    ],
  },
  growth: {
    q: "성장 브랜드는 어떤 결과물을 받나요?",
    lead: "광고 시안과 숫자, 숏폼, 해외 채널 글을 같은 담당 마케터가 함께 챙깁니다.",
    tag: "예시 화면",
    items: [
      { tiles: "perf", pick: "0", cap: "광고 한 달 결과(실제 숫자)" },
      { tiles: "perf", pick: "2", cap: "구매로 잇는 광고 시안" },
      { tiles: "global", pick: "3", cap: "일본 LINE 매장 안내" },
    ],
  },
  enterprise: {
    q: "기업 리포트는 어떻게 생겼나요?",
    lead: "첫 장에는 숫자 네 개만 두고, 다음 장에서 엔진별·출처별로 나눠 봅니다. 담당자가 상사에게 그대로 옮길 수 있게 만듭니다.",
    tag: "실제 리포트 화면",
    items: [
      { img: "/report/business-report-summary.jpg", w: 1200, h: 1221, cap: "첫 장: 이번 주 숫자 네 개" },
      { img: "/report/business-report-engines.jpg", w: 1200, h: 1077, cap: "엔진별 출처 인용·본문 언급" },
      { img: REP(9), w: 1600, h: 534, cap: "AI가 근거를 가져오는 출처 유형", wide: true },
    ],
  },
  team: {
    q: "실제 보고서는 어떻게 생겼나요?",
    lead: "주간 보고서 말고도 진단 보고서와 기업 리포트를 같은 담당 마케터가 만들어 보냅니다.",
    tag: "실제 보고서 · 업체명 가림",
    items: [
      { img: REP(1), w: 1600, h: 396, cap: "AI 검색 진단: 엔진별 언급 비율", wide: true },
      { img: "/report/business-report-summary.jpg", w: 1200, h: 1221, cap: "기업 리포트 첫 장" },
      { img: "/report/weekly-report-1.jpg", w: 1400, h: 1980, cap: "자체 주간 보고서", tall: true },
    ],
  },
}

export default function Works({ k }: { k: string }) {
  const w = WORKS[k]
  if (!w) return null
  return (
    <Sec q={w.q || "실제로 어떤 결과물이 나오나요?"}>
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
