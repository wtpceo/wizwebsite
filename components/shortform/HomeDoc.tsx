import Link from "next/link"
import { GUIDE_ARTICLES } from "@/lib/guide-articles"
import { coverFor } from "@/lib/guide-cover"
import { SERVICES, TEAMS, STEPS, HOME_FAQ, PROBLEM_PINGS, COMPARE, INSIGHT_HREFS, CONTACT } from "./content"
import { TEAM_PAGE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, faqLd } from "./DocParts"
import { Chars, vars } from "./parts"
import { Icon } from "./icons"
import HeroKinetic from "./HeroKinetic"
import HeroCards from "./HeroCards"

/**
 * 메인(/) — 2026-11-09 리디자인 & 섹션 순서 개편본
 * 이전 버전 백업: ./HomeDoc.backup.tsx (언제든 교체 가능)
 *
 * 섹션 순서(고객 의사결정 흐름):
 * ① 첫 화면 (Hero + 4대 핵심 신뢰 지표 바)
 * ② 핵심 솔루션 (8대 인하우스 마케팅 솔루션 · 퍼널 역할별 태그 + 세부 과업 칩)
 * ③ 인하우스 통합 구조 (Before 분리 대행의 한계 vs After 1:1 전담 AE + 6개 인하우스 부서 통합 허브)
 * ⑤ 실측 데이터와 리포트 (realGEO 관제 화면 · 주간 리포트 실물 + 3대 투명성 원칙)
 * ⑥ 진행 프로세스 (진단 → 설계 → 제작 → 집행 → 리포트 5단계 순환 구조)
 * ⑦ 인사이트 리포트 (실측 데이터 기반 마케팅 칼럼 6선)
 * ⑧ 자주 묻는 질문 (FaqBlock)
 * ⑨ 무료 브랜드 분석 신청 (ContactBlock)
 */

const SVC_ROLE: Record<string, string> = {
  infl: "인지 · 확산",
  perf: "유입 · 전환",
  search: "검증 · 노출",
  content: "소재 · 제작",
  viral: "평판 · 신뢰",
  global: "해외 · 인바운드",
  home: "랜딩 · 구조화",
  off: "생활권 · 인지",
}

const HERO_KPIS = [
  { n: "2016년 설립", d: "10년 차 IMC 통합 대행사" },
  { n: "6개 전담 부서", d: "외주 없는 인하우스 조직" },
  { n: "8대 주요 채널", d: "기획·촬영·광고·GEO 직접 실행" },
  { n: "1:1 전담 AE", d: "한 명이 소통과 성과 보고를 맡습니다" },
]

const PROOF_RULES = [
  {
    no: "01",
    t: "착수 전 초기 기준선 기록",
    d: "캠페인 시작 전 현재 검색 순위, AI 답변 언급률, 웹사이트 기술 점수를 기록해 비교 기준선을 세웁니다.",
  },
  {
    no: "02",
    t: "원본 수치 그대로 보고",
    d: "realGEO와 네이버·메타·구글 매체 화면의 실측 지표를 가공 없이 주간·월간 리포트로 보내 드립니다.",
  },
  {
    no: "03",
    t: "떨어진 지표도 그대로 기록",
    d: "유리한 수치만 고르지 않습니다. 순위가 떨어지거나 인용에서 빠진 항목도 공유하고 보강 과제를 실행합니다.",
  },
]

/** 11-09 대표: 박스 안 문장도 마침표에서 줄을 바꾼다 */
function Lines({ t }: { t: string }) {
  const parts = t.split(/(?<=[.?!])\s+/)
  return (
    <>
      {parts.map((x, i) => (
        <span key={i}>
          {i > 0 ? <br /> : null}
          {x}
        </span>
      ))}
    </>
  )
}
/** 11-11 대표 「사진들 폴더에서 알맞은 걸로 인하우스 솔루션 박스에 넣어 봐」(로컬 확인용). 대표가 준 사진 열한 장 중 서비스와 맞는 다섯 장을 넣었다.
    맞는 사진이 없던 GEO·웹사이트·오프라인은 대표 지시대로 구글 이미지에서 참고 장면을 골라 GPT 이미지로 새로 만들었다(글자·로고·실존 인물 없음).
    원본·참고 그림·지시문: 27.자사브랜딩/30_디자인/작업/2026-11-11_홈카드사진 */
// 11-12 대표 「인하우스 솔루션 섹션에서 콘텐츠 프로덕션과 바이럴 박스 위치를 바꿔 줘」: 홈 카드에서만 두 칸 자리를 바꾼다(메뉴·바닥글 순서는 SERVICES 그대로)
const SVC_HOME = (() => {
  const a = [...SERVICES]
  const c = a.findIndex((x) => x.k === "content"), v = a.findIndex((x) => x.k === "viral")
  if (c >= 0 && v >= 0) [a[c], a[v]] = [a[v], a[c]]
  return a
})()

const SVC_PHOTO: Record<string, string> = {
  infl: "/sf/home/svc-infl.webp",
  perf: "/sf/home/svc-perf.webp",
  content: "/sf/home/svc-content.webp",
  viral: "/sf/home/svc-viral.webp",
  global: "/sf/home/svc-global.webp",
  search: "/sf/home/svc-search.webp",
  home: "/sf/home/svc-home.webp",
  off: "/sf/home/svc-off.webp",
}

/** 11-11 대표 「사진이 화려해서 제목이 안 보인다. 제목에 붓칠 느낌으로 색을 넣고, 색은 사진 속 옷 색에 맞춰」: 카드마다 [붓칠 색, 글자 색] */
const SVC_BRUSH: Record<string, [string, string]> = {
  infl: ["#2A2D34", "#FFFFFF"], // 검은 티셔츠
  perf: ["#C8B4F6", "#0A1A33"], // 연보라 티셔츠
  search: ["#0055FF", "#FFFFFF"], // 파란 유리판
  content: ["#FFE27A", "#0A1A33"], // 노란 셔츠
  viral: ["#FFC3D2", "#0A1A33"], // 분홍 니트
  global: ["#FF9D8A", "#0A1A33"], // 코랄 셔츠
  home: ["#BCD2FF", "#0A1A33"], // 화면 속 블루
  off: ["#F6C4D0", "#0A1A33"], // 분홍 니트
}

export default function HomeDoc() {
  const insights = [
    ...INSIGHT_HREFS.map((h) => GUIDE_ARTICLES.find((a) => a.href === h)).filter(Boolean),
    ...GUIDE_ARTICLES.filter((a) => !INSIGHT_HREFS.includes(a.href)).slice(0, 3),
  ].slice(0, 6) as typeof GUIDE_ARTICLES
  const slug = (k: string) => SERVICES.find((s) => s.k === k)?.slug ?? ""

  return (
    <DocShell>
      <div className="gx ix vx cx hm hm2">
        <JsonLd data={{ "@context": "https://schema.org", ...faqLd(HOME_FAQ) }} />

        {/* ① 첫 화면 (Hero + 핵심 신뢰 지표 바) */}
        <section className="dp-hero geo-hero ix-hero hm2-hero hm2-white" aria-label="첫 화면">
          {/* 11-11 운영 배포 전 정리: 흰 히어로에서는 영상과 흐르는 사진 벽이 화면에 나오지 않는데도 파일을 내려받고 있어 뺐다(영상 1개, 사진 12장, 숏폼 2개) */}
          <div className="dp-veil" aria-hidden="true" />
          <HeroCards />
          <div className="dp-w geo-hero-in">
            {/* 11-11 대표: 제목이 날아와 모였다 흩어지고 낱말이 여러 효과로 나온 뒤 '위즈더플래닝'으로 끝나는 글자 모션(로컬 시안, 넓은 화면).
                실제 제목은 아래 <h1>이 그대로 갖고 있고(검색·낭독기용), 넓은 화면에서만 눈에 안 보이게 접는다 */}
            {/* 11-11 대표 「홈 큰 제목 숨긴 거 문제 없게」: 숨겨 둔 제목을 없애고, 눈에 보이는 모션의 제목 글자가 곧 이 페이지의 <h1>이다(HeroKinetic 안).
                처음 열면 제목이 다 모인 상태로 보이고, 그 뒤에 흩어졌다 돌아오는 모션이 이어진다 */}
            <p className="hk-kw">IMC 통합 마케팅 대행사 · 위즈더플래닝</p>
            <HeroKinetic />
            <p className="vx-era">2016년부터 · 인하우스 6개 부서 · <span className="nw">1:1 전담 AE</span></p>
            <p className="dp-lead">
              <span className="hm2-l1">광고를 시작하기 전에 브랜드 인지도와 퍼널의 누수 지점부터 꼼꼼히 짚어봅니다.</span>{" "}
              <br />
              이 결과를 바탕으로 짠 맞춤 전략을 <span className="nw">제안서로 보내 드립니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                무료 분석 받기
              </a>
              <a className="hm-kk" href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
                <Icon k="kakao" />
                카카오톡 상담하기
              </a>
            </div>

            <ul className="hm2-kpis" aria-label="위즈더플래닝 핵심 지표">
              {HERO_KPIS.map((k, i) => (
                <li key={k.n} style={vars({ i })}>
                  <b>{k.n}</b>
                  <span>{k.d}</span>
                </li>
              ))}
            </ul>
          </div>
          <a className="ix-cue" href="#services" aria-label="제공 서비스로 내려가기">
            <span>여덟 가지 인하우스 솔루션</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 여덟 가지 인하우스 솔루션 (가장 먼저 수행 역량을 제시) */}
        <section className="dp-sec geo-sec rv hm-svc hm2-svc" id="services">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">인하우스 솔루션</p>
                <h2>
                  캠페인 기획에서 AI 답변까지,{" "}
                  <br />
                  <span>직접 실행하는 8대 솔루션</span>
                </h2>
              </div>
              <div className="gt-side">
                <p className="geo-lead">
                  브랜드를 처음 접하는 숏폼부터 포털 평판과 AI 답변(GEO),{" "}
                  <br />
                  전환이 일어나는 웹사이트와 퍼포먼스 광고까지 다룹니다.{" "}
                  <br />
                  이 모든 과정을 인하우스에서 직접 실행합니다.
                </p>
                <div className="hm2-funnel-tags" aria-label="마케팅 퍼널 영역">
                  <span>
                    <i>01</i> 인지 · 확산
                  </span>
                  <span>
                    <i>02</i> 검증 · 평판
                  </span>
                  <span>
                    <i>03</i> 유입 · 전환
                  </span>
                </div>
              </div>
            </div>

            <ul className="hm2-svc-g">
              {SVC_HOME.map((s, i) => (
                <li key={s.k} className="rv" style={vars({ i })}>
                  <Link href={`/services/${s.slug}`} className="hm2-svc-card" style={{ "--brush": SVC_BRUSH[s.k]?.[0], "--brush-ink": SVC_BRUSH[s.k]?.[1] } as React.CSSProperties}>
                    {/* 11-09 대표: 글자로 짠 화면 대신 회사소개와 같은 3D 그림 */}
                    <figure className="tw-fig-stage hm2-fig">
                      <img src={SVC_PHOTO[s.k] ?? `/sf/gen/hm-svc-${s.k}.webp`} alt="" width={800} height={533} loading="lazy" decoding="async" />
                      <span className="hm2-fig-tag" aria-hidden="true">
                        <i>{String(i + 1).padStart(2, "0")}</i>
                        {SVC_ROLE[s.k]}
                      </span>
                    </figure>
                    <div className="hm2-svc-body">
                      <b>{s.n}</b>
                      <p>
                        <Lines t={s.ln} />
                      </p>
                      <ul className="hm2-svc-chips" aria-label={`${s.n} 세부 항목`}>
                        {s.items.slice(0, 4).map((it) => (
                          <li key={it[0]}>{it[0]}</li>
                        ))}
                      </ul>
                      <span className="hm2-svc-go">
                        상세 솔루션 보기 <Icon k="arrow" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ③ 왜 위즈더플래닝인가 + 인하우스 통합 구조 (Before 분리 대행 vs After 통합 허브) */}
        <section className="dp-sec geo-sec rv tw-ae hm2-arch hm2-arch-w" id="why">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">인하우스 통합 구조</p>
                <h2>
                  분리 대행의 한계를 깬{" "}
                  <br />
                  <span>전담 AE와 인하우스 6개 부서</span>
                </h2>
              </div>
              <div className="gt-side">
                <p className="geo-lead">
                  광고, 바이럴, 촬영을 따로 맡기면 데이터가 끊기고 책임이 흐려집니다.{" "}
                  <br />
                  위즈더플래닝은 전담 AE가 6개 인하우스 부서를 이끌며 하나의 전략과 리포트로 움직입니다.
                </p>
                <p className="hm-more">
                  <Link href="/team">전담 조직과 협업 구조 자세히 보기 →</Link>
                </p>
              </div>
            </div>

            <div className="hm2-vs-grid">
              {/* 왼쪽: 분리 대행의 현실 */}
              <div className="hm2-vs-bad">
                <div className="hm2-vs-head">
                  <em>FRAGMENTED AGENCIES</em>
                  <b>대행사를 분리 운영할 때 반복되는 문제</b>
                </div>
                <ul className="hm-chat" aria-label="대행사를 따로 둘 때 자주 듣는 말">
                  {PROBLEM_PINGS.map((t, i) => (
                    <li key={t} style={vars({ i })} className={i === PROBLEM_PINGS.length - 1 ? "me" : undefined}>
                      <small>{i === PROBLEM_PINGS.length - 1 ? "고객사 담당자" : ["광고 대행사", "영상 프로덕션", "광고 대행사", "바이럴 대행사", "광고 대행사"][i]}</small>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <ul className="hm2-vs-pts">
                  {COMPARE.map((row) => row[1]).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* 오른쪽: 위즈더플래닝 통합 허브 */}
              <div className="hm2-vs-good" id="team">
                <div className="hm2-vs-head">
                  <em>WIZ IN-HOUSE SYSTEM</em>
                  <b>1:1 전담 AE 중심의 6개 인하우스 부서 직결</b>
                </div>

                <div className="hm2-hub">
                  <div className="hm2-core">
                    <span className="ic" aria-hidden="true">
                      <Icon k="person" />
                    </span>
                    <div>
                      <small>SINGLE POINT OF CONTACT</small>
                      <b>1:1 전담 AE</b>
                      <span>캠페인 통합 설계 · 부서 조율 · 주간 성과 보고</span>
                    </div>
                  </div>

                  <div className="hm2-nodes">
                    {TEAMS.map(([k, n, jobs, en], i) => (
                      <Link key={n} href={`/services/${slug(k)}`} className="hm2-node" style={vars({ i })}>
                        <span className="ic" aria-hidden="true">
                          <Icon k={k} />
                        </span>
                        <span className="hm2-node-tx">
                          <small>{en}</small>
                          <b>{n}</b>
                          <span>{jobs.slice(0, 2).join(" · ")}</span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* 11-09 대표: 남는 자리에 회사 이름, 회사소개 클로징처럼 빛이 위→닝으로 지나감 */}
                  <p className="hm2-sign" aria-hidden="true">
                    <b>
                      위즈더플래닝<i>.</i>
                    </b>
                  </p>

                  <div className="hm2-tech">
                    <span>자체 보유 솔루션</span>
                    <b>realGEO (AI 검색 관제 시스템)</b>
                    <i>·</i>
                    <b>위플루언서 (데이터 기반 캐스팅 플랫폼)</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ⑤ 실측 데이터와 투명한 리포트 체계 */}
        <section className="dp-sec geo-sec rv hm2-proof" id="proof">
          <div className="dp-w">
            {/* 11-09 대표: 오른쪽 화면은 제목 줄에 맞추고, 왼쪽 원칙 3개는 화면 아래 끝에 맞춘다 */}
            <div className="hm2-proof-g hm2-proof-lay">
              <div className="hm2-proof-l">
              <div className="gt-head">
                <div>
                  <p className="geo-eb">실측 기반 리포트</p>
                  <h2>
                    추측과 과장을 덜어낸{" "}
                    <br />
                    <span>실측 데이터와 숨김없는 리포트</span>
                  </h2>
                </div>
                <div className="gt-side">
                  <p className="geo-lead">
                    ‘노출이 잘되고 있습니다’ 같은 모호한 말 대신 계약 전과 비교해 실제 수치가 어떻게 변했는지 매주·매월 보고합니다.{" "}
                    <br />
                    자체 개발한 GEO 관제 시스템과 매체 대시보드 원본 데이터를 기준으로 삼습니다.
                  </p>
                  <p className="hm-more">
                    <Link href="/how-we-measure">자체 개발 GEO 관제 시스템과 측정 방식 보기 →</Link>
                  </p>
                </div>
              </div>

              <ol className="hm2-proof-rules">
                {PROOF_RULES.map((r, i) => (
                  <li key={r.no} style={vars({ i })}>
                    <em>{r.no}</em>
                    <div>
                      <b>{r.t}</b>
                      <p>
                        <Lines t={r.d} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              </div>

              <div className="hm2-proof-vis">
                <figure className="hm2-proof-main">
                  <div className="hm2-proof-bar">
                    <span>
                      <i /> realGEO 자체 관제 대시보드 · 주간 리포트
                    </span>
                    <em>실제 측정 화면</em>
                  </div>
                  <img
                    src="/tools/realgeo-client-dashboard.jpg"
                    alt="realGEO 관제 대시보드 실제 화면(고객사 상호 가림)"
                    width={730}
                    height={674}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="hm2-proof-badges">
                    <div>
                      <small>AI 검색 관제</small>
                      <b>4대 엔진 주간 반복 측정</b>
                    </div>
                    <div>
                      <small>계정 소유권 원칙</small>
                      <b>광고·웹·지도 고객사 명의</b>
                    </div>
                    <div>
                      <small>2016년 이래</small>
                      <b>고객사 법적 분쟁 0건</b>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ⑥ 다섯 단계 순환 프로세스 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-proc tw-proc hm2-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">진행 프로세스</p>
                <h2>
                  진단에서 개선까지,{" "}
                  <br />
                  <span>결과를 만드는 다섯 단계</span>
                </h2>
              </div>
              <p className="geo-lead">
                똑같은 패키지는 제안하지 않습니다.{" "}
                <br />
                브랜드에 꼭 필요한 채널만 골라 설계하고, 집행 후 지표가 멈춘 구간을 찾아 바로 소재와 구조를 고칩니다.
              </p>
            </div>
            <ol className="cw-proc-g" aria-label="일하는 다섯 단계">
              {STEPS.map((st, i) => (
                <li key={st.w} style={vars({ i })}>
                  <figure className="tw-step-fig hm2-fig">
                    {/* 11-11 대표: 사진들 폴더의 단계별 사진(진단·전략·실행·리포트·최적화)으로 채운다. 로컬 시안 */}
                    <img src={`/sf/home/step-${st.en.toLowerCase()}.webp`} alt="" width={800} height={533} loading="lazy" decoding="async" />
                    <span className="hm2-fig-tag" aria-hidden="true">
                      <i>{String(i + 1).padStart(2, "0")}</i>
                      {st.en}
                    </span>
                  </figure>
                  <div>
                    <b>{st.w}</b>
                    <span>
                      <Lines t={TEAM_PAGE.steps[i]} />
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ⑦ 인사이트 리포트 */}
        <section className="dp-sec geo-sec rv hm-ins" id="insights">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">인사이트</p>
                <h2>
                  직접 집행하고 측정한{" "}
                  <br />
                  <span>실측 데이터 리포트</span>
                </h2>
              </div>
              <div className="gt-side">
                <p className="geo-lead">
                  ChatGPT·네이버 AI·구글 검색에서 브랜드가 어떻게 노출되는지 직접 측정했습니다.{" "}
                  <br />
                  실제 캠페인 사례도 익명으로 담았습니다.
                </p>
                <p className="hm-more">
                  <Link href="/guide">인사이트 리포트 전체 보기 →</Link>
                </p>
              </div>
            </div>
            <ul className="ig-grid">
              {insights.map((g) => (
                <li key={g.href} className="rv">
                  <Link href={g.href}>
                    <figure>
                      <img src={coverFor(g.href)} alt={g.title} width={1200} height={675} loading="lazy" decoding="async" />
                    </figure>
                    <div>
                      <p className="ig-meta">
                        <em>{g.kicker}</em>
                        <span>{g.updated ?? g.date}</span>
                      </p>
                      <b>{g.title}</b>
                      <span className="ig-desc">{g.desc}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ⑧ 자주 묻는 질문 */}
        <FaqBlock items={HOME_FAQ} note="추가로 궁금하신 점은 문의로 남겨 주세요. 전담 AE가 상세히 안내해 드립니다." />

        {/* ⑨ 문의 */}
        <ContactBlock
          title="브랜드의 현재 진단부터 함께 시작하겠습니다."
          sub="문의를 남겨 주시면 전담 AE가 검색·AI 답변·웹사이트·채널 현황을 점검하고 맞춤 제안서로 연락드리겠습니다."
          label="무료 분석 받기"
          source="home"
        />
      </div>
    </DocShell>
  )
}
