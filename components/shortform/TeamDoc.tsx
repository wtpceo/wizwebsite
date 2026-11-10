import Link from "next/link"
import { SERVICES, TEAMS, STEPS, DIAG_ROWS } from "./content"
import { TEAM_PAGE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Chars, vars } from "./parts"
import { Icon } from "./icons"
import HeroWall from "./HeroWall"

/**
 * /team — 전문팀·프로세스.
 * AI 생성 인물 사진 대신, 각 인하우스 부서의 실제 업무 도구·데이터 구조·타이포그래피를 결합한
 * 인터랙티브 도식·애니메이션 카드(DeptStage / StepStage)로 구성.
 */

export function DeptStage({ k, no, en }: { k: string; no: string; en: string }) {
  return (
    <div className={`tw-vis tw-vis-${k}`} aria-hidden="true">
      <div className="tw-vis-top">
        <span className="tw-vis-no">{no}</span>
        <span className="tw-vis-en">{en}</span>
        <i className="tw-vis-dot" />
      </div>

      {k === "infl" && (
        <div className="tw-sc tw-sc-infl">
          <div className="tw-sc-hd">
            <span>WIPLUENCER · CHANNEL FILTER</span>
            <em>3일 내 리스트업</em>
          </div>
          <div className="tw-sc-rows">
            <div className="tw-sc-r on">
              <b>크리에이터 A · 유튜브</b>
              <span className="tw-bar">
                <i style={{ width: "92%" }} />
              </span>
              <em>조회율 94%</em>
            </div>
            <div className="tw-sc-r on">
              <b>크리에이터 B · 릴스</b>
              <span className="tw-bar">
                <i style={{ width: "86%" }} />
              </span>
              <em>타깃 89%</em>
            </div>
            <div className="tw-sc-r">
              <b>크리에이터 C · 쇼츠</b>
              <span className="tw-bar">
                <i style={{ width: "78%" }} />
              </span>
              <em>2차 광고 ✓</em>
            </div>
          </div>
        </div>
      )}

      {k === "perf" && (
        <div className="tw-sc tw-sc-perf">
          <div className="tw-sc-hd">
            <span>AD OPTIMIZER · A/B/C TEST</span>
            <em>CPC 50원 실측</em>
          </div>
          <div className="tw-perf-box">
            <div className="tw-perf-bars">
              <div className="b1">
                <i />
                <small>소재 A</small>
              </div>
              <div className="b2 on">
                <em>예산 집중</em>
                <i />
                <small>소재 B ★</small>
              </div>
              <div className="b3">
                <i />
                <small>소재 C</small>
              </div>
            </div>
            <div className="tw-perf-kpi">
              <small>ROAS · 전환 추이</small>
              <b>예산 실시간 재배분</b>
              <svg viewBox="0 0 140 48" preserveAspectRatio="none">
                <path d="M2 42 L34 34 L66 26 L98 14 L138 4" className="ln" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {k === "search" && (
        <div className="tw-sc tw-sc-search">
          <div className="tw-sc-hd">
            <span>realGEO · AI &amp; MAP RADAR</span>
            <em>주간 반복 측정</em>
          </div>
          <div className="tw-geo-box">
            <div className="tw-geo-eng">
              <div>
                <span>ChatGPT</span>
                <b>출처 인용 ✓</b>
              </div>
              <div>
                <span>Gemini</span>
                <b>후보 추천 ✓</b>
              </div>
              <div>
                <span>Naver AI</span>
                <b>브리핑 노출 ✓</b>
              </div>
            </div>
            <div className="tw-geo-rank">
              <small>네이버 플레이스</small>
              <strong>
                <span>201위 →</span> 1위
              </strong>
              <em>17% → 93% 언급률</em>
            </div>
          </div>
        </div>
      )}

      {k === "content" && (
        <div className="tw-sc tw-sc-content">
          <div className="tw-sc-hd">
            <span>IN-HOUSE STUDIO · 4K 60FPS</span>
            <em className="rec">● REC 360+편</em>
          </div>
          <div className="tw-nle">
            <div className="tw-nle-vf">
              <span className="c tl" />
              <span className="c tr" />
              <span className="c bl" />
              <span className="c br" />
              <b>SCENE 01 · HOOK</b>
              <small>자체 촬영 · 편집 · 배포</small>
            </div>
            <div className="tw-nle-trks">
              <div className="t1">
                <span>V1</span>
                <i style={{ width: "36%" }} />
                <i style={{ width: "28%" }} />
                <i style={{ width: "32%" }} />
              </div>
              <div className="t2">
                <span>T1</span>
                <i style={{ width: "52%" }} />
                <i style={{ width: "40%" }} />
              </div>
              <div className="t3">
                <span>A1</span>
                <i style={{ width: "94%" }} />
              </div>
              <span className="tw-playhead" />
            </div>
          </div>
        </div>
      )}

      {k === "viral" && (
        <div className="tw-sc tw-sc-viral">
          <div className="tw-sc-hd">
            <span>SERP DESIGN · FIRST SCREEN</span>
            <em>노출 위치 캡처</em>
          </div>
          <div className="tw-serp">
            <div className="tw-serp-q">
              <i />
              <span>주요 업종 · 지역 타깃 키워드</span>
            </div>
            <div className="tw-serp-list">
              <div className="r1">
                <em>인기글 1위</em>
                <b>브랜드 공식·전문 원고</b>
              </div>
              <div className="r2">
                <em>스마트블록</em>
                <b>블로그 체험단 실사용 후기</b>
              </div>
              <div className="r3">
                <em>뉴스 탭</em>
                <b>제휴 언론사 공식 보도자료</b>
              </div>
            </div>
          </div>
        </div>
      )}

      {k === "home" && (
        <div className="tw-sc tw-sc-home">
          <div className="tw-sc-hd">
            <span>WEB ARCHITECTURE · SCHEMA</span>
            <em>30+ 사이트 구축</em>
          </div>
          <div className="tw-web-box">
            <div className="tw-web-ui">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <div className="hero-b">UX · 전환 설계</div>
              <div className="grid-b">
                <span />
                <span />
              </div>
            </div>
            <div className="tw-web-code">
              <div>
                <span>Schema.org</span>
                <b>구조화 ✓</b>
              </div>
              <div>
                <span>llms.txt</span>
                <b>AI 팩트시트 ✓</b>
              </div>
              <div>
                <span>Search Bot</span>
                <b>색인 등록 ✓</b>
              </div>
            </div>
          </div>
        </div>
      )}

      {k === "global" && (
        <div className="tw-sc tw-sc-global">
          <div className="tw-sc-hd">
            <span>INBOUND · CN &amp; JP MEDIA</span>
            <em>방한 전 탐색 접점</em>
          </div>
          <div className="tw-gb-box">
            <div className="tw-gb-card">
              <small>CHINA · 중화권</small>
              <b>샤오홍슈 · 도우인 · 따중디엔핑</b>
              <span>체험 노트 · 왕홍 라이브 · 로컬 리뷰</span>
            </div>
            <div className="tw-gb-card">
              <small>JAPAN · 일본</small>
              <b>LINE 공식계정 · 인스타그램</b>
              <span>현지어 번역 · 쿠폰 발송 · 지도 연동</span>
            </div>
          </div>
        </div>
      )}

      {k === "off" && (
        <div className="tw-sc tw-sc-off">
          <div className="tw-sc-hd">
            <span>OOH · LOCAL RADIUS MEDIA</span>
            <em>생활 동선 반복 노출</em>
          </div>
          <div className="tw-off-box">
            <div className="tw-off-radar">
              <i className="r-ring r1" />
              <i className="r-ring r2" />
              <span className="r-pin">매장 주요 상권</span>
            </div>
            <div className="tw-off-list">
              <span>택배차량 래핑</span>
              <span>극장 스크린 광고</span>
              <span>카카오T 모빌리티</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function StepStage({ idx, en, w }: { idx: number; en: string; w: string }) {
  const no = String(idx + 1).padStart(2, "0")
  return (
    <div className={`tw-step-vis tw-step-${idx + 1}`} aria-hidden="true">
      <div className="tw-step-top">
        <em>
          {no} {en}
        </em>
        <span>{w}</span>
      </div>

      {idx === 0 && (
        <div className="tw-st-body st-diag">
          <div>
            <span>AI 검색 인용률</span>
            <b>기준선 측정</b>
          </div>
          <div>
            <span>지도·플레이스</span>
            <b>순위·리뷰 점검</b>
          </div>
          <div>
            <span>웹·랜딩 구조</span>
            <b>누수 구간 탐색</b>
          </div>
        </div>
      )}

      {idx === 1 && (
        <div className="tw-st-body st-plan">
          <div className="p-chip on">1순위 · 전환 기반 정비</div>
          <div className="p-arr">↓</div>
          <div className="p-chip">2순위 · 주요 검색·후기 장악</div>
          <div className="p-arr">↓</div>
          <div className="p-chip">3순위 · 퍼포먼스·확산 가속</div>
        </div>
      )}

      {idx === 2 && (
        <div className="tw-st-body st-prod">
          <span>4K 영상·포토</span>
          <span>크리에이터 매칭</span>
          <span>검색·AI 원고</span>
          <span>랜딩·배너 시안</span>
        </div>
      )}

      {idx === 3 && (
        <div className="tw-st-body st-exec">
          <div className="ex-core">1:1 전담 AE 통합 가동</div>
          <div className="ex- row">
            <i>광고</i>
            <i>GEO</i>
            <i>바이럴</i>
            <i>인플루언서</i>
          </div>
        </div>
      )}

      {idx === 4 && (
        <div className="tw-st-body st-rep">
          <div className="rp-stat">
            <small>주간·월간 실측</small>
            <b>전주 대비 증감 ↺</b>
          </div>
          <span className="rp-loop">지표가 멈추면 01 진단으로 돌아갑니다</span>
        </div>
      )}
    </div>
  )
}

/** 실제 리포트 [그림, 설명] */
const REPORTS: [string, string][] = [
  ["/report/business-report-summary.jpg", "기업 리포트 첫 장"],
  ["/report/weekly-report-1.jpg", "주간 리포트"],
  ["/report/business-report-engines.jpg", "AI 검색 엔진별 언급"],
]

export default function TeamDoc() {
  const d = TEAM_PAGE
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "전문팀", path: "/team" },
  ]
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${SITE}/team#page`, name: d.title, description: d.desc, about: { "@id": ORG_ID }, url: `${SITE}/team` },
      breadcrumbLd(crumbs),
      faqLd(d.faq),
    ],
  }
  const slug = (k: string) => SERVICES.find((s) => s.k === k)?.slug ?? ""

  return (
    <DocShell>
      <div className="gx ix vx cx tw">
        <JsonLd data={ld} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="전문팀 소개">
          <div className="dp-bg" aria-hidden="true">
            <HeroWall k="team" />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="전문팀·프로세스: 부서는 여섯, 창구는 하나입니다">
              <small className="ix-kw">전문팀·프로세스</small>{" "}
              <Chars text={"부서는 여섯,\n창구는 하나입니다"} mark="창구는 하나" />
            </h1>
            <p className="vx-era">외주 없는 인하우스 직접 실행</p>
            <p className="dp-lead">
              고객사마다 배정된 전담 AE가 <span className="nw">여섯 개 인하우스 부서 업무를 하나로 조율합니다.</span>
              <br />
              분야별 10~20년 경력 전문가가 <span className="nw">외주 없이 직접 실무를 맡습니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                1:1 전담 AE에게 진단 요청
              </a>
            </div>
            <p className="vx-trust">
              1:1 전담 AE · 인하우스 6개 부서 · 외주 없음 · <span className="nw">주간 통합 리포트</span>
            </p>
          </div>
          <a className="ix-cue" href="#ae" aria-label="전담 AE로 내려가기">
            <span>위즈더플래닝의 조직과 프로세스</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 전담 AE(남색): 가운데 AE, 둘레에 여섯 부서 */}
        <section className="dp-sec geo-sec rv tw-ae" id="ae">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">전담 AE</p>
                <h2>
                  같은 말 반복할 필요 없는{" "}
                  <br />
                  <span>1:1 전담 AE 창구</span>
                </h2>
              </div>
              <p className="geo-lead">
영업 담당을 거치지 않고 실무를 총괄하는 전담 AE와 직접 소통합니다.{" "}
<br />
기획 회의부터 주간 리포트까지 한 사람이 맡아 여섯 부서 일정을 관리합니다.
</p>
            </div>
            <div className="tw-hub">
              {TEAMS.map(([k, n, jobs, en], i) => (
                <Link key={n} href={`/services/${slug(k)}`} className="tw-node" style={vars({ i })}>
                  <span className="ic" aria-hidden="true">
                    <Icon k={k} />
                  </span>
                  <span className="tw-node-tx">
                    <small>{en}</small>
                    <b>{n}</b>
                    <span>{jobs[0]}</span>
                  </span>
                </Link>
              ))}
              <div className="tw-core">
                <span className="ic" aria-hidden="true">
                  <Icon k="person" />
                </span>
                <b>전담 AE</b>
                <span>고객사 1:1 전담 배정</span>
              </div>
            </div>
          </div>
        </section>

        {/* ③ 여섯 부서: 인터랙티브 도식 · 타이포그래피 · 모션 카드 */}
        <section className="dp-sec geo-sec rv cw-items tw-teams" id="teams">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">인하우스 6개 부서</p>
                <h2>
                  분야별 전문가가 모인{" "}
                  <br />
                  <span>여섯 개 전담 부서</span>
                </h2>
              </div>
              <p className="geo-lead">{d.teamsLead}{" "}
<br />
카드를 누르면 부서별 서비스 페이지로 이동합니다.</p>
            </div>
            <ul className="cw-prod">
              {TEAMS.map(([k, n, jobs, en], i) => (
                <li key={n} className="rv" style={vars({ i })}>
                  <Link href={`/services/${slug(k)}`}>
                    <figure className="tw-fig-stage">
                      <DeptStage k={k} no={String(i + 1).padStart(2, "0")} en={en} />
                    </figure>
                    <div>
                      <em>{en}</em>
                      <b>{n}</b>
                      <p className="tw-jobs">
                        {jobs.map((j) => (
                          <span key={j}>{j}</span>
                        ))}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ④ 다섯 단계: 도식·타이포그래피 모션 + 다시 진단으로 + 진단에서 보는 것 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-proc tw-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">업무 순서</p>
                <h2>
                  진단부터 실행까지{" "}
                  <br />
                  <span>다섯 단계로 순환합니다</span>
                </h2>
              </div>
              <p className="geo-lead">
지표가 멈춘 구간을 찾아 고치고 다시 진단을 이어 갑니다.{" "}
<br />
정해진 패키지 없이 브랜드에 꼭 필요한 채널만 골라 설계합니다.
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
                    <span>{d.steps[i]}</span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="tw-diag rv">
              <div className="tw-diag-h">
                <b>초기 진단 주요 점검 항목</b>
                <small>예시</small>
              </div>
              <ul>
                {DIAG_ROWS.map(([a, b, st]) => (
                  <li key={a} className={st}>
                    <span>{a}</span>
                    <b>{b}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ⑤ 실제 리포트 */}
        <section className="dp-sec geo-sec rv tw-rep" id="report">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">성과 리포트</p>
                <h2>
                  무엇을 했는지가 아니라{" "}
                  <br />
                  <span>숫자로 증명하는 리포트</span>
                </h2>
              </div>
              <p className="geo-lead">
이번 주 실행 내역과 결과, 다음 주 할 일을 리포트 한 장에 담습니다.{" "}
<br />
전담 AE가 직접 찾아가 설명해 드립니다.
</p>
            </div>
            <ul className="tw-rep-g">
              {REPORTS.map(([src, cap], i) => (
                <li key={src} style={vars({ i })}>
                  <figure>
                    <img src={src} alt={cap} loading="lazy" decoding="async" />
                  </figure>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
            <p className="tw-rep-note">실제 리포트 · 고객사명 가림</p>
          </div>
        </section>

        {/* ⑥ FAQ */}
        <FaqBlock items={d.faq} note="추가로 궁금하신 점은 문의로 남겨 주세요. 전담 AE가 상세히 안내해 드립니다." />

        {/* ⑦ 문의 */}
        <ContactBlock
          title="첫 미팅부터 주간 리포트까지 전담 AE가 1:1로 책임집니다."
          sub="문의를 남겨 주시면 전담 AE가 확인하고 바로 연락드리겠습니다."
          label="1:1 전담 AE에게 진단 요청"
          source="team"
        />
      </div>
    </DocShell>
  )
}
