import Link from "next/link"
import { SERVICES, TEAMS, STEPS, DIAG_ROWS } from "./content"
import { TEAM_PAGE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, breadcrumbLd, faqLd, ORG_ID, SITE } from "./DocParts"
import { Chars, vars } from "./parts"
import { Icon } from "./icons"

/**
 * /team — 전문팀·프로세스. 11-08 대표 「서비스 페이지와 마찬가지로」: 숏폼 벽 히어로, 왼쪽 정렬, 사진 카드, 공통 FAQ.
 * 리더 이름·사진·이력은 회사 준비물이라 받기 전엔 팀과 맡는 일만 싣는다.
 */

/** 부서 사진 */
const TEAM_IMG: Record<string, string> = {
  infl: "/sf/pf/infl-fashion.jpg",
  perf: "/sf/ex/m-shop.jpg",
  search: "/geo/media-ai.jpg",
  content: "/sf/ex/m-shoot.jpg",
  viral: "/sf/ex/fnb-dessert.jpg",
  home: "/sf/ex/m-team.jpg",
}

/** 다섯 단계 사진 */
const STEP_IMG = ["/sf/ex/m-team.jpg", "/sf/ex/seminar.jpg", "/sf/ex/m-shoot.jpg", "/sf/img/report.jpg", "/geo/media-editor.jpg"]

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
            <div className="bgt" data-wall="team" />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="전문팀·프로세스: 부서는 여섯, 창구는 하나입니다">
              <small className="ix-kw">전문팀·프로세스</small>{" "}
              <Chars text={"부서는 여섯,\n창구는 하나입니다"} mark="창구는 하나" />
            </h1>
            <p className="vx-era">외주 없이 직접 합니다</p>
            <p className="dp-lead">
              고객사마다 전담 AE 한 사람이 <span className="nw">여섯 부서의 일을 모아 전합니다.</span>
              <br />
              분야별 10~20년 경력 담당자가 <span className="nw">재위탁 없이 직접 실행합니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                문의하기
              </a>
            </div>
            <p className="vx-trust">전담 AE · 여섯 부서 · 재위탁 없음 · <span className="nw">주간 리포트</span></p>
          </div>
          <a className="ix-cue" href="#ae" aria-label="전담 AE로 내려가기">
            <span>위즈더플래닝은 이렇게 일해요</span>
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
                  같은 이야기를{" "}
                  <br />
                  <span>여러 번 하실 일이 없습니다</span>
                </h2>
              </div>
              <p className="geo-lead">영업 담당을 거치지 않고 AE와 바로 이야기합니다. 시작 전 기획 회의부터 주간 리포트까지 같은 사람이 맡고, 여섯 부서의 일정을 한데 모아 관리합니다.</p>
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
                <span>고객사마다 한 사람</span>
              </div>
            </div>
          </div>
        </section>

        {/* ③ 여섯 부서: 사진 카드 */}
        <section className="dp-sec geo-sec rv cw-items tw-teams" id="teams">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">여섯 부서</p>
                <h2>
                  어떤 부서가{" "}
                  <br />
                  <span>무슨 일을 맡나요?</span>
                </h2>
              </div>
              <p className="geo-lead">{d.teamsLead} 카드를 누르면 그 부서가 맡는 서비스로 갑니다.</p>
            </div>
            <ul className="cw-prod">
              {TEAMS.map(([k, n, jobs, en], i) => (
                <li key={n} style={vars({ i })}>
                  <Link href={`/services/${slug(k)}`}>
                    <figure>
                      <img src={TEAM_IMG[k]} alt="" loading="lazy" decoding="async" />
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

        {/* ④ 다섯 단계: 사진 + 다시 진단으로 + 진단에서 보는 것 */}
        <section className="dp-sec geo-sec geo-sec-mist rv cw-proc tw-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">일하는 순서</p>
                <h2>
                  진단에서 최적화까지,{" "}
                  <br />
                  <span>다시 진단으로 돌아갑니다</span>
                </h2>
              </div>
              <p className="geo-lead">숫자가 움직이지 않는 칸을 찾아 거기서 다시 시작합니다. 정해진 패키지 없이, 비어 있는 자리에 필요한 채널만 고릅니다.</p>
            </div>
            <ol className="cw-proc-g" aria-label="일하는 다섯 단계">
              {STEPS.map((st, i) => (
                <li key={st.w} style={vars({ i })}>
                  <figure>
                    <img src={STEP_IMG[i]} alt="" loading="lazy" decoding="async" />
                    <em>
                      {String(i + 1).padStart(2, "0")} {st.en}
                    </em>
                  </figure>
                  <div>
                    <b>{st.w}</b>
                    <span>{d.steps[i]}</span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="tw-diag">
              <div className="tw-diag-h">
                <b>진단에서 보는 것</b>
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
                <p className="geo-eb">리포트</p>
                <h2>
                  한 일이 아니라{" "}
                  <br />
                  <span>성과로 보고합니다</span>
                </h2>
              </div>
              <p className="geo-lead">이번 주 한 일, 그 결과, 다음 주 할 일을 한 장의 리포트로 모으고, 전담 AE가 직접 찾아뵙고 설명합니다.</p>
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
        <FaqBlock items={d.faq} note="여기 없는 질문은 문의로 남겨 주세요. 전담 AE가 답해 드립니다." />

        {/* ⑦ 문의 */}
        <ContactBlock title="첫 미팅부터 성과 리포트까지, 전담 AE가 맡습니다." sub="전담 AE가 보고 연락드리겠습니다. 비용은 진단이 끝난 뒤 제안서에 적어 드립니다." label="문의하기" source="team" />
      </div>
    </DocShell>
  )
}
