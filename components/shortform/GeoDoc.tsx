import Link from "next/link"
import type { ReactNode } from "react"
import { SERVICES } from "./content"
import { DETAILS } from "./details"
import { DocShell, Crumb, Faq, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Ex, Chars, vars } from "./parts"
import { Icon } from "./icons"
import BrandAskBox from "@/components/agency/BrandAskBox"
import GeoPress from "./GeoPress"

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
]

/** 근거 네 장 — realGEO 실제 화면(고객사명 가림) */
const EVIDENCE: [string, string, string, string][] = [
  ["자체 관제 시스템으로 매주 잽니다", "같은 질문을 엔진마다 다시 묻고 이름이 나온 비율을 셉니다.\n감이 아니라 숫자로 봅니다.", "/tools/realgeo-dashboard.jpg", "realGEO 관제실 화면"],
  ["리포트에 내려간 숫자도 적습니다", "오른 주만 보여 드리지 않습니다.\n지난주 대비 떨어진 질문이 어느 것인지 같이 적습니다.", "/tools/realgeo-weekly-report.jpg", "realGEO 주간 리포트 화면"],
  ["질문부터 설계합니다", "고객이 실제로 묻는 말로 질문 열 개를 만들고,\n브랜드 이름을 넣은 것과 뺀 것을 나눠 잽니다.", "/tools/realgeo-prompts.jpg", "realGEO 측정 질문 화면"],
  ["홈페이지를 AI가 읽는지 먼저 진단합니다", "전화번호가 그림 속에 있으면 AI는 못 읽습니다.\n기술 SEO·GEO 점수로 고칠 곳을 먼저 찾습니다.", "/tools/realgeo-site-audit.jpg", "realGEO 사이트 진단 화면"],
]

/** realGEO 관제실 — 저희 회사 사이트(wiztheplanning.com)를 잰 실제 값. 2026.9.7 측정, 질문 10개 */
const RG = {
  score: 18,
  tiles: [
    ["AI 인용 노출률", "18", "%", "카테고리 7% · 브랜드 88%"],
    ["멘션 노출률", "18", "%", "측정 38건 중 7건 언급"],
    ["근거 인용률", "40", "%", "측정 질문 10개 중 4개"],
    ["평균 인용 순위", "2.9", "번째", "인용된 답변 7건의 출처 순번 평균"],
    ["브랜드 응답 검증", "88", "%", "브랜드 질문 8건 중 7건 확인"],
    ["AI 브리핑 인용률", "22", "%", "인용 2 · 타사 7 · 없음 1"],
    ["SEO 점수", "27", "", "최고 1위 · Top10 3개"],
    ["웹 건강도", "100", "", "기술 SEO 96 · 기술 GEO 94"],
  ] as [string, string, string, string][],
  engines: [
    ["네이버 AI 브리핑", 1, 9],
    ["Gemini", 2, 10],
    ["ChatGPT", 2, 10],
    ["Perplexity", 4, 9],
  ] as [string, number, number][],
}

/** AI가 고르는 조건 세 가지 */
const PICKS: [string, string][] = [
  ["같은 정보", "홈페이지, 네이버 플레이스, 카카오맵, 구글 지도의 주소·전화·영업시간이 한 글자까지 같아야 AI가 '이 이름 = 이 위치 = 이 업종'으로 묶습니다."],
  ["답이 되는 글", "고객이 묻는 말에 첫 문장으로 답하는 글이 홈페이지에 있어야 AI가 그 문장을 그대로 가져갑니다."],
  ["바깥 출처", "후기, 기사, 유튜브 영상처럼 남이 쓴 글이 있어야 AI가 근거로 붙입니다. 섭외와 기자단이 여기서 이어집니다."],
]

/** 비교표 — 우리 vs 일반 대행사 */
const VS: [string, [string, string], [string, string]][] = [
  ["재는 도구", ["자체 관제 시스템 realGEO", "엔진마다 같은 질문을 매주 자동으로 다시 묻습니다"], ["수작업 검색 몇 번", "담당자가 가끔 쳐 보고 캡처로 대신합니다"]],
  ["재는 범위", ["SEO와 GEO를 한 팀이", "검색 순위와 AI 답변을 같이 봅니다"], ["둘 중 하나만", "AI 답변은 보지 않거나 다른 회사에 맡깁니다"]],
  ["보고 기준", ["성과 숫자", "언급률, 출처 인용 횟수, 순위 변화를 매주 표로"], ["이행 내역", "글 몇 건 발행, 작업 몇 건 완료"]],
  ["출처 만들기", ["같은 팀이 섭외·기자단까지", "AI가 끌어올 영상·후기·기사를 직접 만듭니다"], ["외주 또는 없음", "바깥 출처는 광고주 몫으로 남습니다"]],
  ["솔직함", ["보장하지 않습니다", "계약 전 숫자와 다시 잰 숫자를 나란히 보여 드립니다"], ["상위 노출 약속", "답을 정하는 건 엔진인데 결과를 약속합니다"]],
]

/** 미디어 믹스 — 메인 설계도와 같은 흐름 */
const FLOW: [string, string, "infl" | "search" | "viral" | "phone"][] = [
  ["알리기", "유튜버·인플루언서 영상, 후기, 기사가 쌓입니다", "infl"],
  ["AI 언급", "AI가 그 영상과 후기를 출처로 끌어와 브랜드를 말합니다", "search"],
  ["재검색", "들은 사람이 네이버·구글에 브랜드 이름을 다시 칩니다", "viral"],
  ["오가닉 문의", "검색 결과와 홈페이지가 받아 광고비 없이 문의가 들어옵니다", "phone"],
]

/** 진행 다섯 단계 [이름, 한 줄, 기간] — 기간은 details.ts search.time 과 같은 범위 */
const STEPS: [string, string, string][] = [
  ["상담 · 기준선 측정", "브랜드 이름만 받아 지금 AI가 뭐라고 답하는지 먼저 잽니다", "계약 전 · 무료"],
  ["정보 일원화", "홈페이지·지도·플랫폼에 적힌 정보를 같은 말로 맞춥니다", "2~4주"],
  ["답이 되는 글 발행", "고객이 묻는 말에 첫 문장으로 답하는 글을 홈페이지에 올립니다", "매주"],
  ["재측정 · 리포트", "같은 질문을 다시 묻고 달라진 것과 다음 할 일을 적습니다", "매주"],
  ["출처 넓히기", "섭외 영상·기자단·후기로 AI가 끌어올 바깥 출처를 늘립니다", "1~3개월"],
]

/** 사례 — 날짜 붙은 것만, 상호 비공개. [분류, 큰 숫자, 한 줄, 기간, 링크] */
const CASES: [string, string, string, string, string][] = [
  ["정형외과 · ChatGPT", "17% → 93%", "환자가 물을 법한 질문 10개 중 이름이 나온 비율. 2주 뒤 83%로 내려간 것도 그대로 적었습니다", "2026.8.6 → 9.28", "/guide/case-orthopedic-chatgpt"],
  ["지역 매장 · 네이버 지도", "201위 → 1위", "같은 검색어로 매달 다시 잰 네이버 지도 순위", "2025.08 → 2026.10", "/guide/naver-blog-rank-compare"],
  ["출장세차 · 구글 AI 개요", "2개월", "네이버만 하던 곳이 구글 AI 개요에 나오기까지 걸린 기간", "2026", "/guide/case-mobile-carwash"],
  ["치과 · 홈페이지", "3쪽이 167쪽을", "분량이 아니라 구조였습니다. AI가 읽는 3쪽짜리가 이겼습니다", "2026.9", "/guide/case-dental-llms-factsheet"],
]

/** 첫 화면 배경에 흐르는 AI 대화 [질문, 답 앞, 답 뒤] — 가운데 상호 자리는 막대로 가린다. 모두 예시 */
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

export default function GeoDoc() {
  const s = SERVICES.find((x) => x.k === "search")!
  const d = DETAILS.search
  const faq = d.faq.slice(0, 4)
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
      <JsonLd data={ld} />

      {/* ① 첫 화면: 큰 제목 두 줄 + 한 줄 → 흰 카드(머리말 알약·두 줄 제목·설명·버튼) → 화면 세 장 */}
      <section className="dp-hero geo-hero" aria-label="AI 검색 최적화 소개">
        {/* 11-07 밤 대표: 사진 벽(섭외 느낌) 대신 AI와 주고받는 대화가 계속 흐르는 배경. 상호는 가린 막대(CSS만, sf-doc.css .geo-chat) */}
        <div className="geo-chat" aria-hidden="true">
          {[0, 1, 2].map((c) => (
            <div className="gc-col" key={c} style={vars({ i: c })}>
              {[...CHAT, ...CHAT].map(([q, a1, a2], i) => (
                <div className="gc-pair" key={i}>
                  <p className="gc-q">{q}</p>
                  <p className="gc-a">
                    <i>AI</i>
                    <span>
                      {a1}
                      <b className="gc-b" />
                      {a2}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="dp-veil" aria-hidden="true" />
        <div className="dp-w geo-hero-in">
          <Crumb items={[{ name: "홈", href: "/" }, { name: s.n }]} />
          <p className="dp-no">AI 검색 최적화 · GEO · SEO · 네이버 AI 브리핑</p>
          {/* 11-07 밤 대표: 부제는 "AI가 추천하는 우리 브랜드"까지만, 한 줄은 "자체 개발한 툴로 전문성을 더한 위즈더플래닝" */}
          <h1 aria-label="AI 검색 최적화(GEO)·SEO. AI가 추천하는 우리 브랜드">
            <Chars text="AI 검색 최적화(GEO)·SEO" /> <small>AI가 추천하는 우리 브랜드</small>
          </h1>
          <p className="dp-lead">
            자체 개발한 툴로 전문성을 더한 <b>위즈더플래닝</b>
          </p>
          <div className="geo-card">
            <em>GENERATIVE ENGINE OPTIMIZATION</em>
            <p className="geo-card-h">
              ChatGPT·제미나이 답변부터 네이버 AI 브리핑까지,
              <br />
              {" "}
              <span>브랜드가 언급되게 만드는 측정 기반 GEO</span>
            </p>
            <p className="geo-card-s">
              시작이 늦을수록 노출이 어려워집니다.
              <br />
              {" "}지금 시작하지 않으면 늦습니다.
            </p>
            <div className="dp-btns">
              <a className="p1" href="/contact?svc=search">
                무료 AI 노출 진단
              </a>
              <a className="p2" href="tel:16700704" data-tel>
                대표전화 1670-0704
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ② 왜 지금 */}
      <CSec
        eb="WHY NOW"
        q={
          <>
            검색 대신 AI에게 묻는 사람,
            <br />
            <span>이미 절반을 넘었습니다.</span>
          </>
        }
        sub="기사 원문을 확인한 숫자만 골랐습니다. 날짜와 출처를 같이 적습니다."
      >
        <GeoPress items={PRESS} />
      </CSec>

      {/* ③ 근거 네 장 */}
      <CSec
        eb="RELIABILITY & TRUST"
        q={
          <>
            말보다 먼저,
            <br />
            <span>화면으로 보여 드립니다.</span>
          </>
        }
        sub="2016년부터 광고주와 일해 온 회사가, 자체 관제 시스템 realGEO로 매주 재고 있는 실제 화면입니다."
        tone="mist"
      >
        <ol className="geo-ev">
          {EVIDENCE.map(([t, x, img, alt], i) => (
            <li key={t} style={vars({ i })}>
              <em>{String(i + 1).padStart(2, "0")}</em>
              <b>{t}</b>
              <p>
                {x.split("\n").map((line, j) => (
                  <span key={j}>
                    {j > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </p>
              <figure>
                <img src={img} alt={alt} loading="lazy" width={1600} height={1000} />
              </figure>
            </li>
          ))}
        </ol>
        <p className="geo-note">realGEO 실제 화면 · 고객사명 가림</p>
      </CSec>

      {/* ④ 일반적인 생각 vs 실제 */}
      <CSec
        eb="DATA INSIGHT"
        q={
          <>
            검색 1위면
            <br />
            <span>AI도 우리를 추천할까요?</span>
          </>
        }
        sub="검색 결과와 AI 답변은 고르는 방식이 다릅니다. 순위가 높아도 AI 답에 이름이 없는 곳이 많습니다."
      >
        <div className="geo-cmp" aria-hidden="true">
          <figure>
            <figcaption>
              <em>일반적인 생각</em>
              <b>검색 결과</b>
              <span>열 개가 목록으로 보입니다. "1위니까 AI도 우리를 말하겠지?"</span>
            </figcaption>
            <div className="deck" data-tiles="viral" data-pick="0" />
          </figure>
          <figure className="geo-cmp-on">
            <figcaption>
              <em>실제 AI 답변</em>
              <b>문장 하나, 서너 곳만</b>
              <span>AI는 순위가 아니라 '읽을 수 있는 정보'가 있는 곳을 고릅니다.</span>
            </figcaption>
            <div className="deck" data-tiles="search" data-pick="0" />
          </figure>
          <Ex>예시 화면</Ex>
        </div>
        <p className="geo-stmt">
          순위에 속지 마세요. <span>AI는 '같은 정보·답이 되는 글·바깥 출처'가 있는 곳을 고릅니다.</span>
        </p>
        <ol className="geo-three">
          {PICKS.map(([t, x], i) => (
            <li key={t} style={vars({ i })}>
              <em>{String(i + 1).padStart(2, "0")}</em>
              <b>{t}</b>
              <span>{x}</span>
            </li>
          ))}
        </ol>
      </CSec>

      {/* ⑤ 자체 툴 realGEO */}
      <CSec
        id="realgeo"
        tone="k"
        eb="DATA INTELLIGENCE · realGEO"
        q={
          <>
            감으로 하지 않습니다.
            <br />
            <span>자체 관제 시스템이 매주 잽니다.</span>
          </>
        }
        sub="아래는 저희 회사 사이트를 잰 실제 화면입니다. 낮은 점수도 가리지 않았습니다. 숫자를 꾸미지 않는다는 뜻입니다."
      >
        <div className="rg" aria-label="realGEO 관제실 화면 재현">
          <div className="rg-side" aria-hidden="true">
            <b>realGEO</b>
            <span className="on">관제실</span>
            <span>기본정보</span>
            <span>사이트 진단</span>
            <span>키워드 현황</span>
            <span>전략맵</span>
            <span>AI 노출 현황</span>
            <span>AI 답변 원문</span>
            <span>경쟁사 정찰</span>
            <span>콘텐츠 제작소</span>
            <span>브랜드·경쟁사 사전</span>
          </div>
          <div className="rg-main">
            <div className="rg-top">
              <div>
                <b>위즈더플래닝 관제 현황</b>
                <span>검색과 AI가 지금 우리 브랜드를 어떻게 노출하는지 한눈에</span>
              </div>
              <em>LIVE MEASURED · 2026.9.7</em>
            </div>
            <div className="rg-alert">
              <b>긴급 키워드 3개</b> 검색과 AI 어디에도 노출되지 않고 있어요
            </div>
            <div className="rg-grid">
              <div className="rg-score">
                <span>REALGEO 스코어</span>
                <div className="rg-ring" style={vars({ p: RG.score })}>
                  <b>{RG.score}</b>
                  <small>/ 100</small>
                </div>
                <p>측정마다 변화 추이가 쌓입니다</p>
              </div>
              {RG.tiles.map(([t, n, u, sub], i) => (
                <div className="rg-k" key={t} style={vars({ i })}>
                  <span>{t}</span>
                  <b>
                    {n}
                    <small>{u}</small>
                  </b>
                  <p>{sub}</p>
                </div>
              ))}
              <div className="rg-k rg-eng">
                <span>엔진별 인용</span>
                <ul>
                  {RG.engines.map(([e, a, b]) => (
                    <li key={e}>
                      <i>{e}</i>
                      <b>
                        {a}/{b}
                      </b>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rg-k">
                <span>측정 현황</span>
                <b>
                  10<small>개 질문</small>
                </b>
                <p>매주 자동 · 진단 이슈 13</p>
              </div>
            </div>
          </div>
          <Ex>저희 회사 사이트를 잰 실제 값 · 2026.9.7</Ex>
        </div>
        <div className="geo-ask">
          <h3>브랜드 이름을 넣어 보세요</h3>
          <p>저희가 AI에게 실제로 물어볼 질문 열 개가 바로 나옵니다. 점수는 만들어 내지 않고, 재는 계획만 보여 드립니다.</p>
          <BrandAskBox />
        </div>
      </CSec>

      {/* ⑥ 비교표 */}
      <CSec
        eb="WHY WIZ THE PLANNING"
        q={
          <>
            재는 사람이 고치면
            <br />
            <span>무엇이 다른가요?</span>
          </>
        }
        sub="측정과 수정을 한 팀이 하니까 결과를 본 사람이 바로 고칩니다. 일반 대행과 다른 자리를 표로 적었습니다."
        tone="mist"
      >
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

      {/* ⑦ 미디어 믹스 */}
      <CSec
        eb="MEDIA MIX"
        q={
          <>
            유튜버·인플루언서 영상이 쌓이면
            <br />
            <span>AI가 인용할 출처가 생깁니다.</span>
          </>
        }
        sub="AI는 답을 만들 때 유튜브 영상, 후기, 커뮤니티 글, 기사를 끌어다 씁니다. 2026년 조사에서 AI 검색 엔진이 가장 자주 인용한 출처 상위에 레딧과 유튜브가 들었습니다(Peec AI, 3,000만 건 분석, 2026.3)."
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
        <p className="geo-note">
          <Link href="/services/influencer">유튜버·인플루언서 섭외 보기 →</Link>
        </p>
      </CSec>

      {/* ⑧ 진행 순서 */}
      <CSec
        eb="WORK PROCESS"
        q={
          <>
            계약 전 측정부터 주간 리포트까지,
            <br />
            <span>다섯 단계로 갑니다.</span>
          </>
        }
        sub="시점을 약속하지는 않습니다. 업종과 지금 상태에 따라 다르고, 아래 기간은 보통 걸리는 범위입니다."
        tone="mist"
      >
        <ol className="geo-steps">
          {STEPS.map(([t, x, when], i) => (
            <li key={t} className={i === 0 ? "on" : undefined} style={vars({ i })}>
              <em>{String(i + 1).padStart(2, "0")}</em>
              <b>{t}</b>
              <span>{x}</span>
              <small>{when}</small>
            </li>
          ))}
        </ol>
        <p className="geo-tip">
          <b>Tip</b> 첫 측정은 계약 전에 무료로 합니다. 브랜드 이름만 주시면 지금 AI가 뭐라고 답하는지 먼저 재서 보내 드리겠습니다.
        </p>
      </CSec>

      {/* ⑨ 사례 */}
      <CSec
        eb="CASE RECORD"
        q={
          <>
            계약 전에 잰 숫자와
            <br />
            <span>다시 잰 숫자를 나란히 둡니다.</span>
          </>
        }
        sub="날짜가 붙은 기록만 적었습니다. 상호와 지역은 밝히지 않고, 순위나 AI 노출을 보장하지도 않습니다."
      >
        <ul className="geo-cases">
          {CASES.map(([cat, num, line, when, href], i) => (
            <li key={href} style={vars({ i })}>
              <Link href={href}>
                <em>{cat}</em>
                <b>{num}</b>
                <span>{line}</span>
                <small>{when} · 글 보기 →</small>
              </Link>
            </li>
          ))}
        </ul>
        <p className="geo-note">
          {d.recNote} <Link href="/how-we-measure">측정 방식 보기 →</Link>
        </p>
      </CSec>

      {/* ⑩ FAQ */}
      <CSec eb="FAQ" q="자주 묻는 질문" tone="mist">
        <div className="geo-faq">
          <Faq items={faq} />
        </div>
      </CSec>

      <ContactBlock title="AI 검색 최적화, 무료 진단부터 시작하세요." sub="브랜드 이름만 알려 주시면, 지금 AI가 뭐라고 답하는지 먼저 재서 보내 드리겠습니다." initial={["search"]} source="service_search" />
    </DocShell>
  )
}
