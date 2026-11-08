import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, vars } from "./parts"
import { Icon } from "./icons"
import GeoToolReel from "./GeoToolReel"

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
  ["인플루언서 활용", "브랜드 핏에 맞는 유튜버·인플루언서가 콘텐츠를 만듭니다", "/sf/pf/infl-beauty.jpg"],
  ["외부 언급", "기사와 체험 후기, 커뮤니티에 같은 사실이 쌓입니다", "/geo/media-editor.jpg"],
  ["퍼포먼스", "광고로 더 많은 사람이 그 이름을 보고 다시 검색합니다", "/sf/ex/shootcos.jpg"],
]

/** 포털 첫 화면 예시 칸 [칸 이름, 예시 줄, 저희가 맡는 일] */
const SERP: [string, string, string][] = [
  ["블로그 후기", "OO 한 달 써 본 솔직 후기 · 사진 12장", "실제 이용 후기가 위에 보이게 합니다"],
  ["쇼핑", "★ 4.8 · 리뷰 1,204 · 공식 스토어", "상품 정보와 리뷰 응대를 정리합니다"],
  ["기사", "OO, 2016년 시작한 브랜드가 걸어온 길", "사실에 맞는 브랜드 소개를 남깁니다"],
]

/** 11-08 새 칸 「브랜드 평판」 세 가지 */
const REP: [string, string][] = [
  ["실제 이용 후기", "체험단·인플루언서 후기를 협찬 표시를 지켜 꾸준히 쌓습니다"],
  ["정확한 브랜드 정보", "홈페이지·플레이스·기사에 같은 사실을 적습니다"],
  ["신고 절차 안내", "허위 사실이나 명예훼손 글은 플랫폼 신고 절차를 안내해 드립니다"],
]

/** 11-08 FAQ 추가 두 개 */
const FAQ_MORE: [string, string][] = [
  ["AI 추천만 받으면 되지 않나요?", "추천받은 고객은 네이버나 구글에서 이름을 다시 찾아봅니다. 챗GPT 이용자 열 명 중 아홉 명은 네이버도 쓴다는 조사가 있습니다(전자신문, 2026. 10. 26.). 그때 보이는 후기와 리뷰가 결정을 가릅니다."],
  ["부정적인 글을 지워 주나요?", "지워 드리지는 않습니다. 사실에 맞는 후기와 브랜드 정보가 먼저 보이도록 채우고, 허위 사실이나 명예훼손 글은 플랫폼 신고 절차를 안내해 드립니다."],
]

/** 코너벨 열 장 [제목, 두 줄 설명, 그림, 대체문] — 전부 저희 회사 워크스페이스. 고객사명 없음 */
const REEL: [string, string, string, string][] = [
  ["관제실: 엔진마다 매주 다시 묻는 같은 질문", "이름이 나온 비율을 셉니다.\n감이 아니라 숫자로 봅니다.", "/tools/realgeo-dashboard.jpg", "realGEO 관제실 화면"],
  ["전략맵: 키워드마다 검색 순위와 AI 인용을 한 표에", "검색 순위와 AI 답변 인용을 같이 보고 긴급·기회·유지로 나눕니다.\n이번 주 무엇부터 할지가 여기서 정해집니다.", "/tools/realgeo-strategy.jpg", "realGEO 전략맵 화면"],
  ["콘텐츠 제작소: 긴급 키워드가 그대로 글감으로", "실측 데이터를 재료로 AI가 인용하기 좋은 구조의 글을 기획하고,\n기획안부터 작성 완료까지 키워드별로 추적합니다.", "/tools/realgeo-content.jpg", "realGEO 콘텐츠 제작소 화면"],
  ["주간 리포트: 내려간 숫자까지 적는 보고", "오른 주만 보여 드리지 않습니다.\n지난주 대비 떨어진 질문이 어느 것인지 같이 적습니다.", "/tools/realgeo-weekly-report.jpg", "realGEO 주간 리포트 화면"],
  ["측정 질문: 고객이 실제로 묻는 말 그대로", "질문 열 개를 만들고,\n브랜드 이름을 넣은 것과 뺀 것을 나눠 잽니다.", "/tools/realgeo-prompts.jpg", "realGEO 측정 질문 화면"],
  ["포트폴리오 보기: 가로는 검색 순위, 세로는 AI 인용률", "원 하나가 키워드 하나입니다.\n어느 쪽이 비어 있는지 한눈에 보입니다.", "/tools/realgeo-portfolio.jpg", "realGEO 전략맵 포트폴리오 화면"],
  ["사이트 진단: 홈페이지를 AI가 읽는지부터", "전화번호가 그림 속에 있으면 AI는 못 읽습니다.\n기술 SEO·GEO 점수로 고칠 곳을 먼저 찾습니다.", "/tools/realgeo-site-audit.jpg", "realGEO 사이트 진단 화면"],
  ["알림 센터: 월요일 아침에 와 있는 주간 브리핑", "매주 월요일 새벽 자동 측정이 끝나면\n변화 경고와 추천 액션이 여기로 들어옵니다.", "/tools/realgeo-alerts.jpg", "realGEO 알림 센터 화면"],
  ["모니터링: 구글이 주는 실측 데이터를 한눈에", "검색 성과와 AI 검색에서 실제로 넘어온 방문을\n같은 화면에서 봅니다.", "/tools/realgeo-monitoring.jpg", "realGEO 모니터링 대시보드 화면"],
  ["Raw 데이터: CSV로 내려받는 측정 원본", "숫자를 믿어 달라고 하지 않습니다.\n원본을 드리니 엑셀에서 직접 확인하시면 됩니다.", "/tools/realgeo-raw.jpg", "realGEO Raw 데이터 내려받기 화면"],
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
const TEAM_MK = ["광고주가 실제로 묻는 말을 측정 질문으로", "매주 리포트를 들고 직접 찾아가는 보고", "숫자가 안 맞는 지점은 바로 개발팀으로"]
const TEAM_DEV = ["네 엔진에 매주 자동으로 묻는 측정 파이프라인", "코드로 고정한 판정 기준과 지표 계산", "마케터가 막힌 것은 그 주에 화면으로"]
const TEAM_LOG: [string, string][] = [
  ["브랜드 이름을 줄여 부르면 AI 답변 속 언급을 못 잡아요.", "자사·경쟁사 별칭 사전을 만들어 사전 기준으로 판정하게 바꿨습니다."],
  ["계약에서 보장하지 않는 채널이 광고주 리포트에 섞여 나가요.", "광고주에게 나가는 문서마다 그 채널을 빼는 스위치를 넣었습니다."],
  ["월요일 아침에 숫자가 준비돼 있으면 좋겠어요.", "매주 월요일 새벽에 자동 측정을 돌리고 알림 센터에 주간 브리핑을 띄웁니다."],
]

/** AI가 고르는 조건 세 가지 */
const PICKS: [string, string][] = [
  ["같은 정보", "홈페이지, 네이버 플레이스, 카카오맵, 구글 지도의 주소·전화·영업시간이 한 글자까지 같아야 AI가 '이 이름 = 이 위치 = 이 업종'으로 묶습니다."],
  ["답이 되는 글", "고객이 묻는 말에 첫 문장으로 답하는 글이 홈페이지에 있어야 AI가 그 문장을 그대로 가져갑니다."],
  ["바깥 출처", "후기, 기사, 유튜브 영상처럼 남이 쓴 글이 있어야 AI가 근거로 붙입니다. 섭외와 기자단이 여기서 이어집니다."],
]

/** 비교표 — 우리 vs 일반 대행사 */
const VS: [string, [string, string], [string, string]][] = [
  ["재는 범위", ["SEO와 GEO를 한 설계로", "검색 순위와 AI 답변을 같이 봅니다"], ["둘 중 하나만", "AI 답변은 보지 않거나 다른 회사에 맡깁니다"]],
  ["보고 기준", ["성과 숫자", "언급률, 출처 인용 횟수, 순위 변화를 매주 표로"], ["이행 내역", "글 몇 건 발행, 작업 몇 건 완료"]],
  ["출처 만들기", ["섭외팀·바이럴팀이 직접", "AI가 끌어올 영상·후기·기사를 직접 만듭니다"], ["외주 또는 없음", "바깥 출처는 광고주 몫으로 남습니다"]],
  ["솔직함", ["보장하지 않습니다", "계약 전 숫자와 다시 잰 숫자를 나란히 보여 드립니다"], ["상위 노출 약속", "답을 정하는 건 엔진인데 결과를 약속합니다"]],
]

/** 미디어 믹스 — 메인 설계도와 같은 흐름 */
const FLOW: [string, string, "infl" | "search" | "viral" | "phone"][] = [
  ["알리기", "쌓이는 유튜버·인플루언서 영상, 후기, 기사", "infl"],
  ["AI 언급", "그 영상과 후기를 출처로 브랜드를 말하는 AI", "search"],
  ["재검색", "네이버·구글에 다시 치는 브랜드 이름", "viral"],
  ["오가닉 문의", "광고비 없이 들어오는 문의", "phone"],
]

/** 진행 다섯 단계 [이름, 한 줄, 기간] — 기간은 details.ts search.time 과 같은 범위 */
const STEPS: [string, string, string][] = [
  ["상담 · 기준선 측정", "브랜드 이름만 받아 지금 AI가 뭐라고 답하는지 먼저 잽니다", "계약 전 · 무료"],
  ["정보 일원화", "홈페이지·지도·플랫폼에 적힌 정보를 같은 말로", "2~4주"],
  ["답이 되는 글 발행", "고객이 묻는 말에 첫 문장으로 답하는 글을 매주 홈페이지에", "매주"],
  ["재측정 · 리포트", "같은 질문을 다시 묻고 달라진 것과 다음 할 일을 적습니다", "매주"],
  ["출처 넓히기", "섭외 영상·기자단·후기로 늘리는 바깥 출처", "1~3개월"],
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
            다만 AI 답변에 뜨기만 해서는 부족합니다. 고객은 AI가 추천한 이름을 <span className="nw">네이버·구글에</span> 다시 쳐서 확인합니다.
            <br />
            <b>그래서 저희는 AI 답변과 포털 첫 화면, 두 번의 검증을 같이 잡습니다.</b>
          </p>
          <div className="dp-btns">
            <a className="p1" href="#contact">
              무료 AI 노출·평판 진단
            </a>
          </div>
        </div>
        <a className="ix-cue" href="#twice" aria-label="두 번째 검색으로 내려가기">
          <span>위즈더플래닝은 이렇게 일해요</span>
          <i aria-hidden="true" />
        </a>
      </section>

      {/* ② 두 번째 검색(11-08 대표: 두 번째 자리로, 「제로클릭의 시대라지만」). AI에게 묻기 → 포털에서 다시 검색 → 확인하고 결정을 실제 화면 흐름으로. 아래는 포털 첫 화면 예시(코드)와 칸마다 저희가 맡는 일 */}
      <section className="dp-sec geo-sec rv gt" id="twice">
        <div className="dp-w gt-head">
          <div>
            <p className="geo-eb">두 번째 검색</p>
            <h2>
              제로클릭의 시대라지만,{" "}
              <br />
              <span>고객은 한 번 더 검색합니다</span>
            </h2>
          </div>
          <div className="gt-side">
            <p className="geo-lead">
              AI 답변에서 브랜드 이름을 알게 된 고객은 거기서 바로 결정하지 않습니다. 네이버·구글에 그 이름을 다시 쳐서 후기와 리뷰로 확인한 뒤에 움직입니다.
            </p>
              <blockquote className="geo-quote">
                <p>"네이버·구글 같은 검색 엔진으로 정보를 교차 검증하는 사례가 증가"</p>
                <cite>
                  <a href="https://www.etnews.com/20261026000292" target="_blank" rel="noopener noreferrer">
                    전자신문, 2026. 10. 26.
                  </a>
                </cite>
              </blockquote>
          </div>
        </div>
        <div className="gt-stage">
          <div className="dp-w">
            <ol className="gj" aria-label="고객이 브랜드를 고르는 세 화면, 예시">
              <li className="gj-step" style={vars({ i: 0 })}>
                <p className="gj-lb">
                  <em>01</em> AI에게 묻기
                  <small>AI가 후보 서너 곳을 골라 줍니다</small>
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
                  <em>02</em> 포털에서 다시 검색
                  <small>그 이름을 네이버·구글에 다시 칩니다</small>
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
                  <em>03</em> 확인하고 구매
                  <small>후기와 리뷰를 보고 나서 삽니다</small>
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
            두 번째 검색에서 고객이 보는 세 곳도{" "}
            <span className="nw">함께 설계해야 합니다</span>
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
            두 번째 검색에서도 네이버 AI 브리핑과 구글 AI 개요가 먼저 요약해 줍니다. <span>그 요약의 재료는 외부 언급입니다.</span>
          </p>
        </div>
      </section>

      {/* ③ 왜 지금(11-08 대표 「퍼포먼스 페이지처럼 기사처럼」): 퍼포먼스 근거 칸(pp-*) 부품으로 콜라주.
          왼쪽 큰 카드 = 91.4%(포털을 떠나지 않는다), 가운데 = 한국경제 기사 스크랩, 오른쪽 = 구글 블로그 화면, 아래 = 과기정통부 조사 막대와 저희 실측. 숫자는 PRESS(원문 확인 11-07) 그대로 */}
      <section className="dp-sec geo-sec rv gw" id="why">
        <div className="dp-w">
          <div className="gt-head">
            <div>
              <p className="geo-eb">왜 지금인가</p>
              <h2>
                AI에게 묻는 사람이 늘어도,{" "}
                <br />
                <span>포털을 떠나지는 않습니다</span>
              </h2>
            </div>
            <p className="pp-note gw-note">기사 원문을 확인한 숫자만 옮겼습니다. 카드를 누르면 원문으로 갑니다.</p>
          </div>
          <div className="pp-grid gw-grid">
            <a className="pp-card pp-stat gw-stat" href={PRESS[4][5]} target="_blank" rel="noopener noreferrer">
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

            <a className="pp-card pp-news gw-news" href={PRESS[0][5]} target="_blank" rel="noopener noreferrer">
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

            <a className="pp-card pp-win gw-google" href={PRESS[1][5]} target="_blank" rel="noopener noreferrer">
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

            <a className="pp-card gw-report" href={PRESS[2][5]} target="_blank" rel="noopener noreferrer">
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
                <b>저희 사이트를 잰 값</b>
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
      </section>

      {/* ③ 자체 툴 realGEO: 실제 화면 열 장이 원을 그리며 돌아가는 코너벨 (GeoToolReel) */}
      <CSec
        id="realgeo"
        eb="자체 툴 realGEO"
        q={
          <>
            저희가 매주 쓰는{" "}
            <br />
            <span>자체 툴, realGEO</span>
          </>
        }
        sub={
          <>
            2016년부터 광고주와 일해 온 회사가 직접 만든 AI 검색 관제 시스템.{" "}
            <br />
            측정에서 전략맵, 콘텐츠까지 한 툴 안에서 가고, 아래는 저희 회사 사이트를 잰 실제 화면입니다.
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
        <p className="geo-note geo-menu-note">브랜드 검색 첫 화면도 점검해 따로 적어 드립니다.</p>
      </CSec>

      {/* ⑥ 개발자와 마케터가 같은 회사 + 일반 대행과 다른 자리('한 팀' 표현은 11-03 기준으로 뺌) */}
      <CSec
        id="team"
        eb="한 회사"
        q={
          <>
            개발자와 마케터가 같은 회사에 있으면{" "}
            <br />
            <span>무엇이 다른가요?</span>
          </>
        }
        sub={
          <>
            재는 사람 옆에 고치는 사람이 있습니다.{" "}
            <br />
            결과를 본 사람이 바로 고치고, 마케터가 현장에서 막힌 것은 개발자가 그 주에 툴에 넣습니다.
          </>
        }
      >
        <div className="geo-team">
          <div className="geo-team-col">
            <b>마케터가 하는 일</b>
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
            <b>개발자가 하는 일</b>
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
        <p className="geo-note">위 세 가지는 realGEO에 실제로 들어간 변경입니다.</p>
        <p className="geo-sub-h">그래서 일반 대행과 이 자리가 다릅니다</p>
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
        eb="외부 언급"
        q={
          <>
            한 번 만든 외부 언급이{" "}
            <br />
            <span>두 검색에 다 걸립니다</span>
          </>
        }
        sub={
          <>
            유튜브 영상, 체험 후기, 기사는 AI가 답을 만들 때 끌어다 쓰는 출처이면서,{" "}
            <br />
            포털에서 브랜드를 다시 찾았을 때 보이는 콘텐츠입니다. 저희는 섭외팀과 바이럴팀이 이 출처를 직접 만듭니다.
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
        <p className="geo-note">2026년 조사에서 AI 검색 엔진이 가장 자주 인용한 출처 상위에 레딧과 유튜브가 들었습니다(Peec AI, 3,000만 건 분석, 2026.3).</p>
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
          <Link href="/services/influencer">유튜버·인플루언서 섭외 보기 →</Link>
        </p>
      </CSec>

      {/* ⑧ 마무리(11-08 대표): 인플루언서 활용 → 외부 언급 → 퍼포먼스를 한 회사에서 해야 GEO에 강하게 잡힌다. 세 갈래가 하나의 결과(AI 답변·포털 첫 화면)로 모이는 그림 */}
      <section className="dp-sec geo-sec rv gf" id="one">
        <div className="dp-w">
          <div className="gt-head">
            <div>
              <p className="geo-eb">한 회사에서</p>
              <h2>
                인플루언서부터 퍼포먼스까지,{" "}
                <br />
                <span>
                  한 회사에서 해야{" "}
                  <br />
                  GEO에 강하게 잡힙니다
                </span>
              </h2>
            </div>
            <div className="gt-side">
              <p className="geo-lead">
                인플루언서 콘텐츠로 이름이 알려지고, 기사와 후기로 외부 언급이 쌓이고, 퍼포먼스 광고가 그 이름을 더 많은 사람에게 보여 줍니다. 세 곳에 나눠 맡기면 말이 갈라지는데, 한 회사가 하면 같은 이름과 같은 사실로 쌓입니다.
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
              <p className="gf-out-h">같은 이름이 두 검색에 함께 잡힙니다</p>
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
      <FaqBlock items={faq} note="여기 없는 질문은 문의로 남겨 주세요. 담당자가 답해 드립니다." />

      <ContactBlock title="AI 검색 최적화, 무료 AI 노출·평판 진단부터" label="무료 AI 노출·평판 진단" sub="브랜드 이름만 알려 주시면, 지금 AI가 뭐라고 답하는지 먼저 재서 보내 드리겠습니다." initial={["search"]} source="service_search" />
      </div>
    </DocShell>
  )
}
