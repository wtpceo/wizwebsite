import Link from "next/link"
import { GUIDE_ARTICLES } from "@/lib/guide-articles"
import { coverFor } from "@/lib/guide-cover"
import { SERVICES, TEAMS, STEPS, HOME_FAQ, PROBLEM_PINGS, COMPARE, INSIGHT_HREFS, CONTACT } from "./content"
import { TEAM_PAGE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, faqLd } from "./DocParts"
import { DeptStage, StepStage } from "./TeamDoc"
import { Chars, vars } from "./parts"
import { Icon } from "./icons"

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
        <section className="dp-hero geo-hero ix-hero hm2-hero" aria-label="첫 화면">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall="main" />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="IMC 통합 마케팅 대행 위즈더플래닝: 당신의 브랜드를 분석한 제안서부터 받아 보세요">
              <small className="ix-kw">IMC 통합 마케팅 대행 · 위즈더플래닝</small>{" "}
              <Chars text={"당신의 브랜드를 분석한\n제안서부터 받아 보세요"} mark="분석한" />
            </h1>
            <p className="vx-era">2016년부터 · 인하우스 6개 부서 · 1:1 전담 AE</p>
            <p className="dp-lead">
              광고를 시작하기 전에 브랜드 인지도와 <span className="nw">퍼널의 누수 지점부터 꼼꼼히 짚어봅니다.</span>{" "}
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
              {HERO_KPIS.map((k) => (
                <li key={k.n}>
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
                  브랜드를 처음 접하는 숏폼부터 포털 평판과 AI 답변(GEO), 전환이 일어나는 웹사이트와 퍼포먼스 광고까지 다룹니다. 이 모든 과정을 인하우스에서 직접 실행합니다.
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
              {SERVICES.map((s, i) => (
                <li key={s.k} style={vars({ i })}>
                  <Link href={`/services/${s.slug}`} className="hm2-svc-card">
                    <figure className="tw-fig-stage">
                      <DeptStage k={s.k} no={s.no} en={SVC_ROLE[s.k]} />
                    </figure>
                    <div className="hm2-svc-body">
                      <b>{s.n}</b>
                      <p>{s.ln}</p>
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
        <section className="dp-sec geo-sec rv tw-ae hm2-arch" id="why">
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
                  광고, 바이럴, 촬영을 따로 맡기면 데이터가 끊기고 책임이 흐려집니다. 위즈더플래닝은 전담 AE가 6개 인하우스 부서를 이끌며 하나의 전략과 리포트로 움직입니다.
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
                  ‘노출이 잘되고 있습니다’ 같은 모호한 말 대신 계약 전과 비교해 실제 수치가 어떻게 변했는지 매주·매월 보고합니다. 자체 개발한 GEO 관제 시스템과 매체 대시보드 원본 데이터를 기준으로 삼습니다.
                </p>
                <p className="hm-more">
                  <Link href="/how-we-measure">자체 개발 GEO 관제 시스템과 측정 방식 보기 →</Link>
                </p>
              </div>
            </div>

            <div className="hm2-proof-g">
              <ol className="hm2-proof-rules">
                {PROOF_RULES.map((r) => (
                  <li key={r.no}>
                    <em>{r.no}</em>
                    <div>
                      <b>{r.t}</b>
                      <p>{r.d}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="hm2-proof-vis">
                <figure className="hm2-proof-main">
                  <div className="hm2-proof-bar">
                    <span>
                      <i /> realGEO 자체 관제 대시보드 · 주간 리포트
                    </span>
                    <em>실제 측정 화면</em>
                  </div>
                  <img
                    src="/tools/realgeo-dashboard.jpg"
                    alt="위즈더플래닝 자체 개발 GEO 관제 대시보드 화면"
                    width={1546}
                    height={672}
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
                똑같은 패키지는 제안하지 않습니다. 브랜드에 꼭 필요한 채널만 골라 설계하고, 집행 후 지표가 멈춘 구간을 찾아 바로 소재와 구조를 고칩니다.
              </p>
            </div>
            <ol className="cw-proc-g" aria-label="일하는 다섯 단계">
              {STEPS.map((st, i) => (
                <li key={st.w} style={vars({ i })}>
                  <figure className="tw-step-fig">
                    <StepStage idx={i} en={st.en} w={st.w} />
                  </figure>
                  <div>
                    <b>{st.w}</b>
                    <span>{TEAM_PAGE.steps[i]}</span>
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
                  ChatGPT·네이버 AI·구글 검색에서 브랜드가 어떻게 노출되는지 직접 측정했습니다. 실제 캠페인 사례도 익명으로 담았습니다.
                </p>
                <p className="hm-more">
                  <Link href="/guide">인사이트 리포트 전체 보기 →</Link>
                </p>
              </div>
            </div>
            <ul className="ig-grid">
              {insights.map((g) => (
                <li key={g.href}>
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
