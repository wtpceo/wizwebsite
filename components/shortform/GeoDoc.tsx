import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, vars } from "./parts"
import { Icon } from "./icons"
import GeoToolReel from "./GeoToolReel"
import { ProofModal } from "./ProofModal"

/**
 * /services/search — AI 검색 최적화(GEO)·SEO 상세. 2026-11-07 대표 지시로 매체 페이지 중 첫 번째로 새로 짬.
 * 11-07 저녁: 참고 페이지(로그통 유튜브 쪽)의 문법을 가져옴. 색은 우리 것.
 *  - 칸마다: 영문 머리말(작게) → 두 줄 제목(둘째 줄 파랑) → 한 줄 부제(흐리게) → 보조 자료
 *  - 보조 자료는 번호 카드 + 실제 화면, '일반적인 생각 vs 실제' 두 판, 비교표(우리 vs 일반 대행사), 단계 카드(기간·팁), 사례 그리드
 * 숫자 원칙: PRESS 는 기사 원문을 확인한 것만. realGEO 칸은 저희 회사 사이트를 잰 실제 값(2026.9.7). 사례는 날짜 붙은 것만, 상호 비공개.
 */

/** 언론 보도 숫자 — 원문 확인 2026-11-07. [숫자, 단위, 설명, 출처, 날짜, 링크] */
const PRESS: [string, string, string, string, string, string, string][] = [
  ["2,470", "만 명", "국내 챗GPT 월간 사용자(9월). AI 앱 1위", "와이즈앱·리테일 조사, 한국경제", "2026.11.4", "https://www.hankyung.com/article/202611044353g",
    "와이즈앱·리테일이 국내 스마트폰 사용자를 조사한 결과, 9월 챗GPT 앱 월간 사용자가 2,470만 명으로 AI 앱 가운데 가장 많았습니다."],
  ["10", "억 명", "제미나이 앱 월간 이용자, 구글 공식 발표", "구글코리아 블로그", "2026.8.12", "https://blog.google/intl/ko-kr/company-news/inside-google/gemini-one-billion-monthly-users-kr/",
    "구글이 제미나이 앱의 월간 활성 이용자가 10억 명을 넘었다고 공식 블로그에서 밝혔습니다."],
  ["78.1", "%", "국민 생성형 AI 이용률(만 19~69세 2,500명)", "과학기술정보통신부 '2025년 부가통신사업 실태조사', 파이낸셜투데이", "2026.6.3", "https://www.ftoday.co.kr/news/articleView.html?idxno=359909",
    "과학기술정보통신부가 만 19~69세 2,500명을 조사한 결과, 생성형 AI를 써 본 사람이 78.1%였습니다."],
  ["60", "%", "생성형 AI 이용자 중 '검색의 절반 이상을 AI로 대체했다'고 답한 비율", "같은 조사", "2026.6.3", "https://www.ftoday.co.kr/news/articleView.html?idxno=359909",
    "같은 조사에서 생성형 AI 이용자 열 명 중 여섯 명이 검색의 절반 이상을 AI로 대신하고 있다고 답했습니다."],
  // 11-08 카피 세션: 앞의 네 장(AI로 옮겨 간다)을 뒤집는 다리. 기사에 '지난달'로만 적혀 있어 월은 쓰지 않고 보도 날짜만
  ["91.4", "%", "챗GPT 이용자 가운데 네이버도 쓰는 비율", "아이지에이웍스 모바일인덱스, 전자신문", "2026.10.26", "https://www.etnews.com/20261026000292",
    "챗GPT 이용자 열 명 중 아홉 명은 네이버도 씁니다. 같은 기사에 따르면 두 서비스를 함께 쓰는 사람은 1,646만 명으로 1년 새 41.9% 늘었습니다."],
]


/** 마무리 세 갈래 [이름, 한 줄, 사진] */
const ONE: [string, string, string][] = [
  ["인플루언서 협업", "브랜드에 맞는 유튜버와 인플루언서가 리뷰를 만듭니다", "/sf/pf/infl-beauty.jpg"],
  ["외부 출처 축적", "언론 기사와 체험단 후기, 커뮤니티에 같은 브랜드 정보가 쌓입니다", "/sf/gen/viral-guide.jpg"],
  ["퍼포먼스 광고", "타깃 광고로 인지도를 넓혀 브랜드명 재검색을 이끕니다", "/sf/ex/shootcos.jpg"],
]

/** 포털 첫 화면 예시 칸 [칸 이름, 예시 줄, 저희가 맡는 일] */
const SERP: [string, string, string][] = [
  ["블로그 후기", "OO 한 달 사용 리뷰 · 상세 사진 12장", "실제 사용 후기가 맨 위에 뜨도록 저희가 기획합니다"],
  ["쇼핑", "★ 4.8 · 리뷰 1,204 · 공식 스토어", "상품 정보와 고객 리뷰 응대를 저희가 직접 관리합니다"],
  ["언론 기사", "OO, 2016년 출범한 브랜드의 성장 기록", "사실에 맞는 브랜드 보도자료를 써서 내보냅니다"],
]

/** 11-08 새 칸 「브랜드 평판」 세 가지 */
const REP: [string, string][] = [
  ["실제 이용 후기", "체험단과 인플루언서 후기를 공정위 기준에 맞춰 쌓습니다"],
  ["일관된 브랜드 정보", "웹사이트와 플레이스, 언론 기사에 같은 사실을 적습니다"],
  ["권리 침해 신고 안내", "허위 사실이나 명예훼손성 게시물은 플랫폼 공식 신고 절차를 안내해 드립니다"],
]

/** 11-08 FAQ 추가 두 개 */
const FAQ_MORE: [string, string][] = [
  ["AI 추천만 받으면 충분하지 않나요?", "AI의 추천을 접한 소비자는 네이버나 구글에서 브랜드명을 다시 검색해 교차 검증합니다. 챗GPT 이용자 열 명 중 아홉 명은 네이버를 병행 사용한다는 조사 결과가 있습니다(전자신문, 2026. 10. 26.). 이때 확인하는 포털 첫 화면의 후기와 평판이 최종 선택을 좌우합니다."],
  ["부정적인 게시물을 삭제해 주나요?", "임의 삭제를 약속하지는 않습니다. 긍정 후기와 공식 정보가 먼저 뜨도록 관리하고, 허위 사실이나 명예훼손 게시물은 플랫폼 공식 신고 절차를 안내해 드립니다."],
]

/** 코너벨 열 장 [제목, 두 줄 설명, 그림, 대체문] — 전부 저희 회사 워크스페이스. 고객사명 없음 */
const REEL: [string, string, string, string][] = [
  ["관제실: 매주 측정하는 질문", "주요 AI 엔진에서 브랜드가 얼마나 언급되는지 측정합니다.\n추측이 아니라 실제 데이터로 현황을 봅니다.", "/tools/realgeo-dashboard.jpg", "realGEO 관제실 화면"],
  ["전략맵: 순위와 인용률 비교", "포털 검색 순위와 AI 답변 인용을 비교해 과제를 나눕니다.\n이번 주에 무엇부터 할지 데이터로 정합니다.", "/tools/realgeo-strategy.jpg", "realGEO 전략맵 화면"],
  ["콘텐츠 제작소: 원고 기획", "실제 데이터를 보고 AI가 인용하기 좋은 원고를 짭니다.\n기획부터 발행까지 키워드별로 저희가 관리합니다.", "/tools/realgeo-content.jpg", "realGEO 콘텐츠 제작소 화면"],
  ["주간 리포트: 하락 지표 포함", "오른 지표만 골라서 보고하지 않습니다.\n지난주보다 노출이 떨어진 질문과 그 원인까지 같이 적습니다.", "/tools/realgeo-weekly-report.jpg", "realGEO 주간 리포트 화면"],
  ["측정 질문: 소비자가 실제로 묻는 패턴 반영", "핵심 질문 10개를 짜고,\n브랜드명이 들어갔는지 나누어 꼼꼼히 측정합니다.", "/tools/realgeo-prompts.jpg", "realGEO 측정 질문 화면"],
  ["포트폴리오 뷰: 교차 분석", "키워드별 포털 순위와 AI 인용률을 한눈에 비교합니다.\n어디를 먼저 보강해야 할지 바로 알 수 있습니다.", "/tools/realgeo-portfolio.jpg", "realGEO 전략맵 포트폴리오 화면"],
  ["사이트 진단: 크롤링 점검", "전화번호나 정보가 이미지로만 있으면 AI가 읽지 못합니다.\n기술 SEO와 GEO 진단 점수로 고칠 곳을 먼저 찾습니다.", "/tools/realgeo-site-audit.jpg", "realGEO 사이트 진단 화면"],
  ["알림 센터: 주간 브리핑", "매주 월요일 새벽에 자동으로 측정을 마칩니다.\n노출이 어떻게 변했는지 무엇을 해야 할지 알려 드립니다.", "/tools/realgeo-alerts.jpg", "realGEO 알림 센터 화면"],
  ["모니터링: 실제 유입 트래픽", "포털 검색 성과와 생성형 AI로 들어온 실제 방문자 수를\n대시보드 하나에서 바로 비교합니다.", "/tools/realgeo-monitoring.jpg", "realGEO 모니터링 대시보드 화면"],
  ["Raw 데이터: 측정 원본", "가공한 요약본만 드리지 않습니다.\n측정 원본 파일을 그대로 드려서 직접 확인하실 수 있습니다.", "/tools/realgeo-raw.jpg", "realGEO Raw 데이터 내려받기 화면"],
]

/** 노하우 섹션 사진 띠 — 섭외·촬영 현장 */
const MEDIA: [string, string][] = [
  ["/geo/media-beauty.jpg", "뷰티 크리에이터가 링라이트 앞에서 제품을 소개하는 모습"],
  ["/geo/media-crew.jpg", "촬영팀이 식당 주방에서 사장님을 촬영하는 모습"],
  ["/geo/media-fashion.jpg", "패션 크리에이터가 거울 앞에서 코디 영상을 찍는 모습"],
  ["/geo/media-ai.jpg", "카페에서 AI 답변을 보는 휴대폰 화면"],
  ["/geo/media-food.jpg", "푸드 유튜버가 카페 디저트를 촬영하는 모습"],
  ["/geo/media-unbox.jpg", "두 크리에이터가 제품을 개봉하며 촬영하는 모습"],
  ["/geo/media-fitness.jpg", "피트니스 크리에이터가 운동 팁을 촬영하는 모습"],
  ["/geo/media-editor.jpg", "편집자가 영상을 편집하는 작업실"],
]

/** realGEO 메뉴 구성 — 실제 사이드바 순서 그대로 */
const MENU: [string, string[]][] = [
  ["진단", ["기본정보", "사이트 진단", "키워드 현황", "키워드 분석"]],
  ["전략", ["전략맵", "AI 노출 현황", "AI 노출 분석", "AI 답변 원문", "경쟁사 정찰"]],
  ["실행", ["콘텐츠 제작소", "페르소나", "브랜드·경쟁사 사전"]],
  ["공통", ["관제실", "대시보드", "알림 센터", "주간 리포트", "Raw 데이터"]],
]

/** 개발자 + 마케터 */
const TEAM_MK = ["소비자가 실제로 묻는 질문을 모아 측정 프롬프트를 짭니다", "매달 성과 리포트를 쓰고 다음 달 전략을 세웁니다", "데이터에 문제가 생기면 개발팀에 바로 알립니다"]
const TEAM_DEV = ["4대 AI 엔진을 정기적으로 자동 측정하는 시스템을 만듭니다", "코드로 기준을 세워 노출 지표를 뽑습니다", "마케터의 개선 요청을 매주 시스템에 반영합니다"]
const TEAM_LOG: [string, string][] = [
  ["브랜드 약칭으로 언급되면 AI 답변 속 노출이 집계되지 않아요.", "저희와 경쟁사 별칭 사전을 만들어 약칭까지 정확히 잡도록 고쳤습니다."],
  ["계약 범위에 없는 채널이 고객사 리포트에 함께 표시돼요.", "고객사 리포트에서 계약하지 않은 채널은 빼는 기능을 넣었습니다."],
  ["월요일 오전에 주간 수치를 바로 확인할 수 있으면 좋겠어요.", "매주 월요일 새벽에 자동으로 측정하고 알림 센터에 브리핑을 올려 드립니다."],
]

/** AI가 고르는 조건 세 가지 */
const PICKS: [string, string][] = [
  ["같은 기본 정보", "웹사이트와 네이버 플레이스, 카카오맵, 구글 지도의 주소와 전화번호, 영업시간이 한 글자까지 같아야 AI가 같은 브랜드로 알아봅니다."],
  ["질문에 답하는 콘텐츠", "소비자 질문에 두괄식으로 답하는 글이 웹사이트에 있어야 AI가 그 문장을 근거로 씁니다."],
  ["믿을 수 있는 외부 출처", "블로그 후기나 언론 기사, 유튜브 리뷰처럼 남이 쓴 글이 있어야 AI가 추천 근거로 삼습니다."],
]

/** 비교표 — 우리 vs 일반 대행사 */
const VS: [string, [string, string], [string, string]][] = [
  ["진행 방식", ["기술과 콘텐츠를 같이 설계", "마케터와 개발자가 한 팀이 되어 사이트 구조부터 원고 기획, AI 인용까지 같이 짭니다"], ["원고나 기술 중 하나만", "원고만 쓰거나 사이트 개발만 해서 두 가지가 따로 놉니다"]],
  ["보고 기준", ["숫자로 보는 성과", "AI 언급률과 출처 인용 횟수, 포털 순위 변동을 매달 표로 보여 드립니다"], ["단순 작업 내역", "원고 발행 건수나 작업 완료 여부만 알려 줍니다"]],
  ["외부 출처 만들기", ["내부 섭외팀과 바이럴팀이 직접", "AI가 인용할 유튜브 영상과 체험단 후기, 언론 기사를 저희가 직접 만듭니다"], ["외주를 주거나 안 함", "외부 출처는 고객사가 다른 대행사를 찾아 알아서 만들어야 합니다"]],
]

/** 미디어 믹스 — 메인 설계도와 같은 흐름 */
const FLOW: [string, string, "infl" | "search" | "viral" | "phone"][] = [
  ["외부 출처 쌓기", "유튜버와 인플루언서 리뷰 영상, 체험 후기, 언론 기사를 쌓습니다", "infl"],
  ["AI 답변 인용", "쌓인 영상과 후기를 근거로 AI가 브랜드를 추천합니다", "search"],
  ["포털 다시 검색", "소비자가 네이버와 구글에 브랜드명을 다시 검색해 확인합니다", "viral"],
  ["자연 유입 전환", "광고비 없이 들어오는 진짜 문의와 구매로 이어집니다", "phone"],
]

/** 진행 다섯 단계 [이름, 한 줄, 기간] — 기간은 details.ts search.time 과 같은 범위 */
const STEPS: [string, string, string][] = [
  ["사전 진단과 기준선 측정", "브랜드명으로 주요 AI 엔진의 답변 현황을 먼저 측정합니다", "계약 전 · 무료"],
  ["채널 정보 맞추기", "웹사이트와 지도, 플랫폼에 적힌 브랜드 정보를 똑같이 맞춥니다", "2~4주"],
  ["질문에 답하는 콘텐츠 발행", "소비자 질문에 분명하게 답하는 글을 매주 웹사이트에 올립니다", "매주"],
  ["정기 재측정과 리포트", "같은 질문으로 노출 변화를 다시 측정하고 다음 주에 할 일을 찾습니다", "매주"],
  ["외부 출처 넓히기", "인플루언서 영상과 기자단, 체험단 후기로 AI가 인용할 출처를 늘립니다", "1~3개월"],
]

const CHAT: [string, string, string][] = [
  ["판교역 근처 치과 추천해 줘", "야간 진료가 되고 임플란트 상담 후기가 많은 ", "치과를 많이 찾아요."],
  ["민감성 피부용 선크림, 30대 직장인한테 뭐가 좋아?", "자극이 적고 백탁이 없다는 후기가 많은 ", "선크림이 자주 추천돼요."],
  ["우리 회사 사무실 커피 머신 렌탈 업체 비교해 줘", "관리 방문이 빠르고 계약이 유연한 ", "렌탈이 평이 좋아요."],
  ["정자동 필라테스 처음인데 어디가 좋아?", "1:1 체험 수업이 있는 ", "필라테스가 처음 하는 분께 맞아요."],
  ["단백질 보충제 처음 사는데 무난한 브랜드 알려줘", "맛 후기가 고르고 성분 표기가 정확한 ", "제품부터 시작하는 분이 많아요."],
  ["중소기업용 재고 관리 프로그램 추천해 줘", "엑셀 가져오기가 쉽고 월 요금이 명확한 ", "서비스가 많이 언급돼요."],
  ["출장세차 믿을 만한 데 있어?", "예약이 쉽고 후기가 꾸준한 ", "세차를 추천해요."],
  ["결혼 답례품 50개 주문할 데 어디가 좋아?", "기업 단체 주문과 포장이 깔끔하다는 ", "브랜드가 자주 나와요."],
  ["성수 조용한 카페 알려줘", "딸기 생크림 케이크로 알려진 ", "카페가 조용한 편이에요."],
  ["제조업인데 홈페이지 제작 업체 어디가 괜찮아?", "검색과 AI 노출까지 같이 챙긴다는 ", "회사가 언급돼요."],
  ["우리 동네 정형외과 밤에도 하는 데 있어?", "평일 밤 9시까지 진료하는 ", "정형외과가 있어요."],
  ["아이 학원 가방 튼튼한 걸로 추천", "지퍼 내구성 후기가 좋은 ", "가방을 많이 골라요."],
]

/** 가운데 정렬 칸: 영문 머리말 → 두 줄 제목(둘째 줄 파랑) → 한 줄 부제 → 보조 자료 */
function CSec({ id, eb, q, sub, children, tone }: { id?: string; eb: string; q: ReactNode; sub?: ReactNode; children?: ReactNode; tone?: "k" | "mist" }) {
  return (
    <section className={`dp-sec geo-sec rv${tone ? ` geo-sec-${tone}` : ""}`} id={id}>
      <div className="dp-w">
        <p className="geo-eb">{eb}</p>
        <h2>{q}</h2>
        {sub ? <p className="geo-lead">{sub}</p> : null}
        {children}
      </div>
    </section>
  )
}

export default function GeoDoc() {
  const s = SERVICES.find((x) => x.k === "search")!
  const d = DETAILS.search
  const faq = [...d.faq.slice(0, 4), ...FAQ_MORE]
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
        name: "AI 검색 최적화(GEO)·SEO 대행",
        serviceType: "AI 검색 최적화(GEO)·SEO",
        description: d.desc,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "대한민국" },
        url: `${SITE}/services/${s.slug}`,
      },
      breadcrumbLd(crumbs),
      faqLd(faq),
    ],
  }

  return (
    <DocShell>
      <div className="gx ix gxl">
      <JsonLd data={ld} />

      {/* ① 첫 화면. 11-07 낮 비평 적용: 주인공은 제목 하나, 키워드 줄은 작게 위로, 카드는 행동 상자, CTA 하나, 전화는 글자 링크 */}
      <section className="dp-hero geo-hero ix-hero gx-hero" aria-label="AI 검색 최적화 소개">
        {/* 배경: AI와 주고받는 대화가 흐른다. 열마다 한 쌍은 가린 막대 대신 "당신의 브랜드"를 띄워 제목과 잇는다 */}
        <div className="geo-chat" aria-hidden="true">
          {[0, 1, 2].map((c) => (
            <div className="gc-col" key={c} style={vars({ i: c })}>
              {[...CHAT, ...CHAT].map(([q, a1, a2], i) => {
                const you = i % CHAT.length === (c * 4 + 1) % CHAT.length
                return (
                  <div className="gc-pair" key={i}>
                    <p className="gc-q">{q}</p>
                    <p className="gc-a">
                      <i>AI</i>
                      <span>
                        {a1}
                        {you ? <b className="gc-you">당신의 브랜드</b> : <b className="gc-b" />}
                        {a2}
                      </span>
                    </p>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
        <div className="dp-veil" aria-hidden="true" />
        <div className="dp-w geo-hero-in">
          {/* 11-08 대표 「인플루언서·퍼포먼스와 같은 컨셉, 왼쪽 정렬」: 키워드 머리말 H1 안, 큰 제목에 파란 띠, 시대 한 줄, 부제, 버튼 하나, 스크롤 유도 */}
          {/* 11-08 대표: 메인은 「2027년 꼭 해야 할 마케팅, GEO 검색엔진 최적화」, 부제는 「AI에 뜨기만 해서는 안 되고 포털에서 2차 검증」 논리 */}
          <h1 aria-label="AI 검색 최적화(GEO) 대행: 2027년 꼭 해야 할 마케팅, GEO 검색엔진 최적화">
            <small className="ix-kw">AI 검색 최적화(GEO) 대행</small>{" "}
            <Chars text={"2027년 꼭 해야 할 마케팅,\nGEO 검색엔진 최적화"} mark="GEO" />
          </h1>
          <p className="dp-lead">
            AI 답변에 이름이 나오는 것만으로는 부족합니다.{" "}<br className="gx-br" />
            소비자는 AI가 추천한 브랜드를 <span className="nw">네이버와 구글에</span> 다시 검색해 확인합니다.
            <br />
            <b>위즈더플래닝은 AI 답변 인용과 포털 첫 화면, 이 두 단계를 <span className="nw">같이 짭니다.</span></b>
          </p>
          <div className="dp-btns">
            <a className="p1" href="#contact">
              무료 AI 노출·평판 진단
            </a>
          </div>
        </div>
        <a className="ix-cue" href="#twice" aria-label="두 번째 검색으로 내려가기">
          <span>위즈더플래닝의 GEO·SEO 설계</span>
          <i aria-hidden="true" />
        </a>
      </section>

      {/* ② 두 번째 검색(11-08 대표: 두 번째 자리로, 「제로클릭의 시대라지만」). AI에게 묻기 → 포털에서 다시 검색 → 확인하고 결정을 실제 화면 흐름으로. 아래는 포털 첫 화면 예시(코드)와 칸마다 저희가 맡는 일 */}
      <section className="dp-sec geo-sec rv gt" id="twice">
        <div className="dp-w gt-head">
          <div>
            <p className="geo-eb">교차 검증 여정</p>
            <h2>
              제로클릭 시대에도 이어지는{" "}
              <br />
              <span>소비자의 두 번째 검색과 검증</span>
            </h2>
            <p className="geo-lead gt-lead">
              AI 답변으로 브랜드를 알게 된 소비자는 바로 사지 않습니다.{" "}<br className="gx-br" />
              네이버와 구글에 브랜드명을 다시 검색해 실제 후기와 평판을 보고 나서 고릅니다.
            </p>
          </div>
          {/* 11-09 대표 「텍스트만으로 가되 디자인·정렬」: 설명 두 문장을 끊고, 기사 인용은 신문 스크랩 카드로 */}
          <div className="gt-side gt-side-clip">
            <figure className="gt-clip">
              <figcaption className="gt-clip-top">
                <b>전자신문</b>
                <span>2026. 10. 26.</span>
              </figcaption>
              <blockquote>
                <p>“네이버·구글 같은 검색 엔진으로 정보를 교차 검증하는 사례가 증가”</p>
              </blockquote>
              <a className="gt-clip-a" href="https://www.etnews.com/20261026000292" target="_blank" rel="noopener noreferrer" data-pm-src="https://www.etnews.com/20261026000292" data-pm-who="전자신문 · 2026. 10. 26." data-pm-title="“네이버·구글 같은 검색 엔진으로 정보를 교차 검증하는 사례가 증가”">
                기사 원문 보기 ↗
              </a>
            </figure>
            <ProofModal scope="#twice" />
          </div>
        </div>
        <div className="gt-stage">
          <div className="dp-w">
            <ol className="gj" aria-label="고객이 브랜드를 고르는 세 화면, 예시">
              <li className="gj-step" style={vars({ i: 0 })}>
                <p className="gj-lb">
                  <em>01</em> AI에게 질문
                  <small>AI가 조건에 맞는 후보 브랜드를 찾아 줍니다</small>
                </p>
                <div className="gj-ph" aria-hidden="true">
                  <div className="gj-sb"><b>9:41</b><span /></div>
                  <div className="gj-scr gj-chat">
                    <div className="gj-appbar"><i className="gj-menu" /><b>AI 검색</b><i className="gj-new" /></div>
                    <div className="gj-body">
                      <p className="gj-me">민감한 피부에 쓸 보습 크림 추천해 줘</p>
                      <div className="gj-src">
                        <small>출처 6곳</small>
                        <div><span><i>B</i>민감 피부 보습 크림 정리</span><span><i>S</i>쇼핑 · 리뷰 많은 크림</span><span><i>N</i>보습 크림 고르는 법 기사</span></div>
                      </div>
                      <div className="gj-ans">
                        <p>순한 보습 크림을 찾으신다면 이런 제품이 자주 언급돼요.</p>
                        <ol>
                          <li><b className="hit">OO 수분크림</b><span>향이 없고 흡수가 빠르다는 평이 많아요</span></li>
                          <li><b>△△ 시카크림</b><span>가볍게 바르기 좋아요</span></li>
                          <li><b>□□ 장벽크림</b><span>건조한 계절에 많이 찾아요</span></li>
                        </ol>
                        <p className="gj-more">OO 수분크림은 끈적이지 않아서 아침에 쓰기 좋다는 후기가 많아요.</p>
                      </div>
                    </div>
                    <div className="gj-input"><span>무엇이든 물어보세요</span><i /></div>
                  </div>
                </div>
              </li>
              <li className="gj-step" style={vars({ i: 1 })}>
                <p className="gj-lb">
                  <em>02</em> 포털 다시 검색
                  <small>추천받은 브랜드명을 네이버와 구글에 다시 검색합니다</small>
                </p>
                <div className="gj-ph" aria-hidden="true">
                  <div className="gj-sb"><b>9:41</b><span /></div>
                  <div className="gj-scr gj-portal">
                    <div className="gj-search"><i className="gj-mag" /><span>OO 수분크림 후기<em className="gj-caret" /></span></div>
                    <div className="gj-tabs"><b>통합</b><span>블로그</span><span>쇼핑</span><span>이미지</span><span>뉴스</span></div>
                    <div className="gj-body">
                      <div className="gj-brief"><small>AI 요약</small><p>후기에서는 순하고 흡수가 빠르다는 평이 많아요.</p></div>
                      <div className="gj-place-card">
                        <div className="gj-pc-h"><b>OO 수분크림 50ml</b><small>공식 스토어</small></div>
                        <p className="gj-pc-m"><em>★ 4.8</em> 리뷰 1,204 · <strong>32,000원</strong></p>
                        <div className="gj-pics"><img src="/sf/ex/giftset.jpg" alt="" loading="lazy" decoding="async" /><span className="gj-zoom gj-lo"><img src="/sf/ex/cosme.jpg" alt="" loading="lazy" decoding="async" /></span><span className="gj-zoom"><img src="/sf/ex/giftset.jpg" alt="" loading="lazy" decoding="async" /></span></div>
                      </div>
                      <div className="gj-blog">
                        <div><small>뷰티 기록 · 2일 전</small><b>예민한 피부로 OO 수분크림 한 통 다 써 본 후기</b><p>향이 없고 금방 스며들어서 아침 화장 전에도 밀리지 않았어요.</p></div>
                        <span className="gj-zoom gj-lo"><img src="/sf/ex/cosme.jpg" alt="" loading="lazy" decoding="async" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="gj-step" style={vars({ i: 2 })}>
                <p className="gj-lb">
                  <em>03</em> 평판 확인과 구매
                  <small>실제 후기와 리뷰를 보고 나서 고릅니다</small>
                </p>
                <div className="gj-ph" aria-hidden="true">
                  <div className="gj-sb gj-sb-on"><b>9:41</b><span /></div>
                  <div className="gj-scr gj-place">
                    <div className="gj-hero"><img src="/sf/ex/giftset.jpg" alt="" loading="lazy" decoding="async" /><small>1 / 12</small></div>
                    <div className="gj-body">
                      <p className="gj-brand">OO 공식 스토어</p>
                      <div className="gj-pl-h"><b>OO 수분크림 50ml</b></div>
                      <p className="gj-pc-m"><em>★ 4.8</em> 리뷰 1,204</p>
                      <p className="gj-price"><b>32,000원</b><span>오늘 출발 · 무료배송</span></p>
                      <div className="gj-acts"><span><i className="a1" />문의</span><span><i className="a2" />찜</span><span><i className="a3" />매장 찾기</span><span><i className="a4" />공유</span></div>
                      <div className="gj-kw"><small>이런 점이 좋았어요</small><p><span style={vars({ w: 92 })}>촉촉해요<b>512</b></span><span style={vars({ w: 72 })}>순해요<b>388</b></span><span style={vars({ w: 48 })}>흡수가 빨라요<b>241</b></span></p></div>
                    </div>
                    <div className="gj-cta"><span>구매하기</span></div>
                  </div>
                </div>
              </li>
            </ol>
            <Ex>예시 화면</Ex>
          </div>
        </div>
        <div className="dp-w gt-ours">
          <h3>
            두 번째 검색에서 보는{" "}
            <span className="nw">포털 첫 화면의 세 가지 영역</span>
          </h3>
          <ol>
            {SERP.map(([k, line, ours], i) => (
              <li key={k} style={vars({ i })}>
                <small>{k}</small>
                <b>{ours}</b>
                <span>예: {line}</span>
              </li>
            ))}
          </ol>
          <p className="geo-stmt">
            포털에 다시 검색할 때도 네이버 AI 브리핑과 구글 AI 개요가 맨 위에 뜹니다. <span>이 요약을 만드는 근거도 결국 외부 출처입니다.</span>
          </p>
        </div>
      </section>

      {/* ③ 왜 지금(11-08 대표 「퍼포먼스 페이지처럼 기사처럼」): 퍼포먼스 근거 칸(pp-*) 부품으로 콜라주.
          왼쪽 큰 카드 = 91.4%(포털을 떠나지 않는다), 가운데 = 한국경제 기사 스크랩, 오른쪽 = 구글 블로그 화면, 아래 = 과기정통부 조사 막대와 저희 실측. 숫자는 PRESS(원문 확인 11-07) 그대로 */}
      <section className="dp-sec geo-sec rv gw" id="why">
        <div className="dp-w">
          <div className="gt-head">
            <div>
              <p className="geo-eb">시장 데이터</p>
              <h2>
                AI 검색의 일상화와{" "}
                <br />
                <span>포털 검색의 공존</span>
              </h2>
            </div>
            <p className="pp-note gw-note">언론 보도와 공식 발표에서 원문을 확인한 숫자만 썼습니다. 카드를 누르면 원문을 보실 수 있습니다.</p>
          </div>
          <div className="pp-grid gw-grid">
            <a className="pp-card pp-stat gw-stat" href={PRESS[4][5]} target="_blank" rel="noopener noreferrer" data-pm-src={PRESS[4][5]} data-pm-who="전자신문 · 2026. 10. 26." data-pm-title="챗GPT 이용자 열 명 중 아홉 명은 네이버도 씁니다" data-pm-note={PRESS[4][6]}>
              <div className="pp-cover" aria-hidden="true">
                <span>MOBILE INDEX</span>
                <span>2026</span>
              </div>
              <em className="pp-tag">모바일인덱스 · 전자신문</em>
              <p className="pp-big">
                91.4<small>%</small>
              </p>
              <p className="gw-cap">챗GPT 이용자 열 명 중 아홉 명은 네이버도 씁니다.</p>
              <div className="gw-venn" aria-hidden="true">
                <i className="a"><span>챗GPT</span></i>
                <i className="b"><span>네이버</span></i>
              </div>
              <p className="gw-both">
                둘 다 쓰는 사람 <b>1,646만 명</b>
                <span>1년 새 41.9% 늘었습니다</span>
              </p>
              <span className="pp-src">전자신문 · 2026. 10. 26. 원문 보기 ↗</span>
            </a>

            <a className="pp-card pp-news gw-news" href={PRESS[0][5]} target="_blank" rel="noopener noreferrer" data-pm-src={PRESS[0][5]} data-pm-who="한국경제 · 2026. 11. 4." data-pm-title="9월 챗GPT 앱 월간 사용자 2,470만 명" data-pm-note={PRESS[0][6]}>
              <i className="pp-tape" aria-hidden="true" />
              <div className="pp-mast">
                <b>한국경제</b>
                <span>2026. 11. 4.</span>
              </div>
              <p className="pp-kicker">와이즈앱·리테일 조사</p>
              <p className="pp-head-q">
                9월 챗GPT 앱 월간 사용자 <em>2,470만 명</em>, AI 앱 가운데 가장 많았습니다
              </p>
              <div className="pp-lines" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span className="pp-read">기사 원문 보기 ↗</span>
            </a>

            <a className="pp-card pp-win gw-google" href={PRESS[1][5]} target="_blank" rel="noopener noreferrer" data-pm-src={PRESS[1][5]} data-pm-who="구글코리아 블로그 · 2026. 8. 12." data-pm-title="제미나이 앱 월간 이용자 10억 명" data-pm-note={PRESS[1][6]} data-pm-embed="0">
              <div className="pp-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>blog.google/intl/ko-kr</span>
              </div>
              <em className="pp-tag">구글 공식 · 2026. 8. 12.</em>
              <p className="pp-big sm">
                10<small>억 명</small>
              </p>
              <p className="gw-txt">제미나이 앱 월간 활성 이용자가 10억 명을 넘었다고 구글이 공식 블로그에서 밝혔습니다.</p>
              <span className="pp-src">구글코리아 블로그 ↗</span>
            </a>

            <a className="pp-card gw-report" href={PRESS[2][5]} target="_blank" rel="noopener noreferrer" data-pm-src={PRESS[2][5]} data-pm-who="파이낸셜투데이 · 2026. 6. 3." data-pm-title="2025년 부가통신사업 실태조사" data-pm-note={PRESS[2][6]} data-pm-embed="0">
              <em className="pp-tag">과학기술정보통신부 실태조사 · 만 19~69세 2,500명</em>
              <ul className="gw-bars">
                <li style={vars({ v: 78.1, i: 0 })}>
                  <span>생성형 AI를 써 본 사람</span>
                  <i aria-hidden="true" />
                  <b>78.1%</b>
                </li>
                <li style={vars({ v: 60, i: 1 })}>
                  <span>그중 검색의 절반 이상을 AI로 대신한다</span>
                  <i aria-hidden="true" />
                  <b>60%</b>
                </li>
              </ul>
              <span className="pp-src">「2025년 부가통신사업 실태조사」, 파이낸셜투데이 · 2026. 6. 3. ↗</span>
            </a>

            <div className="pp-card gw-own" aria-label="저희 사이트 실측값">
              <p>
                <b>당사 웹사이트 실측 지표</b>
                <span>realGEO · 2026. 9. 7. · 질문 10개</span>
              </p>
              <ul>
                <li>
                  근거 인용률 <b>40%</b>
                </li>
                <li>
                  AI 브리핑 인용률 <b>22%</b>
                </li>
                <li>
                  웹 건강도 <b>100</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ProofModal scope="#why" />
      </section>

      {/* ③ 자체 툴 realGEO: 실제 화면 열 장이 원을 그리며 돌아가는 코너벨 (GeoToolReel) */}
      <CSec
        id="realgeo"
        eb="자체 솔루션"
        q={
          <>
            측정부터 전략까지 한곳에서{" "}
            <br />
            <span>자체 관제 솔루션 realGEO</span>
          </>
        }
        sub={
          <>
            2016년부터 쌓은 검색 마케팅 노하우로 저희가 직접 만든 AI 검색 관제 시스템입니다.{" "}
            <br />
            노출 측정부터 전략을 짜고 원고를 기획하는 일까지 한곳에서 합니다. 아래는 저희 웹사이트를 측정한 실제 화면입니다.
          </>
        }
        tone="mist"
      >
        <GeoToolReel slides={REEL} />
        <ul className="geo-menu" aria-label="realGEO 메뉴 구성">
          {MENU.map(([g, items], i) => (
            <li key={g} style={vars({ i })}>
              <b>{g}</b>
              <span>{items.join(" · ")}</span>
            </li>
          ))}
        </ul>
        <p className="geo-note geo-menu-note">포털 첫 화면의 평판이 어떤지도 같이 진단해서 알려 드립니다.</p>
      </CSec>

      {/* ⑥ 개발자와 마케터가 같은 회사 + 일반 대행과 다른 자리('한 팀' 표현은 11-03 기준으로 뺌) */}
      <CSec
        id="team"
        eb="내부 협업 구조"
        q={
          <>
            마케터와 개발자가 같이 짜는{" "}
            <br />
            <span>기술과 콘텐츠 설계</span>
          </>
        }
        sub={
          <>
            {/* 11-09 대표: SEO·GEO는 마케터 일과 개발 일이 섞여 있다 → 같은 회사라 어디가 문제인지 바로 말하고 바로 고친다 */}
            SEO와 GEO는 콘텐츠 기획과 웹사이트 기술 설계가 같이 가야 합니다.{" "}
            <br />
            저희 마케터와 개발자가 문제를 바로 찾고 매주 고쳐 나갑니다.
          </>
        }
      >
        <div className="geo-team">
          <div className="geo-team-col">
            <b>마케터 담당 영역</b>
            <ul>
              {TEAM_MK.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="geo-team-loop" aria-hidden="true">
            <span>요청</span>
            <i />
            <span>반영</span>
          </div>
          <div className="geo-team-col">
            <b>개발자 담당 영역</b>
            <ul>
              {TEAM_DEV.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <ol className="geo-team-log" aria-label="실제로 이렇게 바뀐 것">
          {TEAM_LOG.map(([ask, done], i) => (
            <li key={ask} style={vars({ i })}>
              <p>
                <em>마케터</em>
                {ask}
              </p>
              <p>
                <em>개발자</em>
                {done}
              </p>
            </li>
          ))}
        </ol>
        <p className="geo-note">위 세 가지는 realGEO 시스템에 실제로 반영한 내용입니다.</p>
        <p className="geo-sub-h">일반 대행사와 다른 점</p>
        <div className="geo-vs" role="table" aria-label="위즈더플래닝과 일반 대행사 비교">
          <div className="geo-vs-h" role="row">
            <span role="columnheader">비교 항목</span>
            <span role="columnheader" className="us">
              위즈더플래닝
            </span>
            <span role="columnheader">일반 대행사</span>
          </div>
          {VS.map(([k, [a1, a2], [b1, b2]], i) => (
            <div className="geo-vs-r" role="row" key={k} style={vars({ i })}>
              <span role="rowheader">{k}</span>
              <span role="cell" className="us">
                <b>{a1}</b>
                <small>{a2}</small>
              </span>
              <span role="cell">
                <b>{b1}</b>
                <small>{b2}</small>
              </span>
            </div>
          ))}
        </div>
      </CSec>

      {/* ⑦ 노하우: 섭외·기자단이 AI 언급을 강하게 만든다 + 섭외 현장 사진 마퀴 */}
      <CSec
        eb="외부 출처 넓히기"
        q={
          <>
            SEO와 GEO 노출을 같이 끌어올리는{" "}
            <br />
            <span>믿을 수 있는 외부 출처</span>
          </>
        }
        sub={
          <>
            유튜브 리뷰와 체험단 후기, 언론 기사는 AI가 답변을 쓸 때 가져다 쓰는 출처입니다.{" "}
            <br />
            포털에 다시 검색할 때 소비자가 믿고 보는 글이기도 합니다. 저희 섭외팀과 바이럴팀이 직접 만듭니다.
          </>
        }
        tone="mist"
      >
        <ol className="geo-flow">
          {FLOW.map(([t, x, k], i) => (
            <li key={t} style={vars({ i })}>
              <span className="ic">
                <Icon k={k} />
              </span>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
        <p className="geo-note geo-note-1">2026년 조사에서 AI 검색 엔진이 가장 자주 인용한 출처 상위에 레딧과 유튜브가 포함되었습니다(Peec AI, 3,000만 건 분석, 2026.3).</p>
        <div className="geo-media" aria-label="섭외·촬영 현장">
          <div className="geo-media-track">
            {[...MEDIA, ...MEDIA].map(([src, alt], i) => (
              <figure key={i} aria-hidden={i >= MEDIA.length}>
                <img src={src} alt={i < MEDIA.length ? alt : ""} loading="lazy" width={800} height={600} />
              </figure>
            ))}
          </div>
        </div>
        <p className="geo-note">
          <Link href="/services/influencer">유튜버·인플루언서 섭외 자세히 보기 →</Link>
        </p>
      </CSec>

      {/* ⑧ 마무리(11-08 대표): 인플루언서 활용 → 외부 언급 → 퍼포먼스를 한 회사에서 해야 GEO에 강하게 잡힌다. 세 갈래가 하나의 결과(AI 답변·포털 첫 화면)로 모이는 그림 */}
      <section className="dp-sec geo-sec rv gf" id="one">
        <div className="dp-w">
          <div className="gt-head">
            <div>
              <p className="geo-eb">통합 마케팅 설계</p>
              <h2>
                인플루언서부터 퍼포먼스까지{" "}
                <br />
                <span>GEO를 완성하는 통합 설계</span>
              </h2>
            </div>
            <div className="gt-side">
              <p className="geo-lead">
                인플루언서로 브랜드를 알리고, 후기로 출처를 쌓으며, 퍼포먼스 광고로 재검색을 이끕니다. 한곳에서 같이 짜야 브랜드 정보가 어긋나지 않고 평판이 쌓입니다.
              </p>
              <div className="dp-btns">
                <a className="p1" href="#contact">
                  무료 AI 노출·평판 진단
                </a>
              </div>
            </div>
          </div>
          <div className="gf-map">
            <ol className="gf-src">
              {ONE.map(([t, x, img], i) => (
                <li key={t} style={vars({ i })}>
                  <img src={img} alt="" loading="lazy" decoding="async" />
                  <div>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <b>{t}</b>
                    <span>{x}</span>
                  </div>
                </li>
              ))}
            </ol>
            <svg className="gf-lines" viewBox="0 0 200 420" preserveAspectRatio="none" aria-hidden="true">
              {["M0 70 C 110 70, 90 210, 200 210", "M0 210 L 200 210", "M0 350 C 110 350, 90 210, 200 210"].map((d, i) => (
                <g key={d}>
                  <path d={d} />
                  <circle r="4">
                    <animateMotion dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              ))}
            </svg>
            <div className="gf-out">
              <p className="gf-out-h">같은 브랜드 정보가 AI와 포털 양쪽에 뜹니다</p>
              <div className="gf-ai">
                <small>AI 답변</small>
                <p>
                  순한 보습 크림으로는 <b>OO 수분크림</b>이 자주 언급돼요.
                </p>
                <span>출처 · 유튜브 리뷰 · 기사 · 블로그 후기</span>
              </div>
              <div className="gf-portal">
                <small>포털 첫 화면</small>
                <div className="gf-q">
                  <i aria-hidden="true" />
                  OO 수분크림 후기
                </div>
                <p>
                  <span>블로그 후기</span>
                  <span>쇼핑 ★ 4.8</span>
                  <span>기사</span>
                </p>
              </div>
              <Ex>예시 화면</Ex>
            </div>
          </div>
        </div>
      </section>

      {/* ⑩ FAQ: 퍼포먼스·인플루언서와 같은 부품 */}
      <FaqBlock items={faq} note="더 궁금하신 점은 문의로 남겨 주세요. 전담 AE가 자세히 알려 드리겠습니다." />

      <ContactBlock title="AI 검색 최적화, 무료 AI 노출·평판 진단부터 시작하세요." label="무료 AI 노출·평판 진단" sub="브랜드명을 알려 주시면 주요 AI 엔진의 답변 현황과 포털 첫 화면 평판을 먼저 측정해 보내 드리겠습니다." initial={["search"]} source="service_search" />
      </div>
    </DocShell>
  )
}
