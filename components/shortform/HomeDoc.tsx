import Link from "next/link"
import { GUIDE_ARTICLES } from "@/lib/guide-articles"
import { coverFor } from "@/lib/guide-cover"
import { SERVICES, SOLUTIONS, TEAMS, STEPS, HOME_FAQ, PROBLEM_PINGS, INSIGHT_HREFS, CONTACT } from "./content"
import { TEAM_PAGE } from "./details"
import { DocShell, FaqBlock, ContactBlock, JsonLd, faqLd } from "./DocParts"
import { Chars, vars } from "./parts"
import { Icon } from "./icons"

/**
 * 메인(/) — 11-08 대표 「전체를 다 아니까 메인을 함축해서, 필요한 것만」.
 * 45컷이던 숏폼형 홈(ShortformHome)을 서비스·업종·전문팀·인사이트 페이지와 같은 문법의 아홉 칸으로 줄였다.
 * 첫 화면 → 왜(대행사가 쪼개져 있을 때) → 여덟 가지 → 한 창구(전담 AE + 여섯 부서) → 일하는 순서 → 업종별 → 인사이트 → 자주 묻는 질문 → 문의.
 * 서비스마다 세 컷씩 있던 소개는 서비스 페이지가 맡으므로 카드 한 장씩으로 잇는다. 옛 홈 파일은 되돌릴 수 있게 남겨 둔다.
 */

/** 서비스 카드 사진 */
const SVC_IMG: Record<string, string> = {
  infl: "/sf/pf/infl-beauty.jpg",
  perf: "/sf/ex/m-shop.jpg",
  search: "/geo/media-ai.jpg",
  content: "/sf/ex/m-shoot.jpg",
  viral: "/sf/ex/fnb-dessert.jpg",
  global: "/sf/ex/m-tourist.jpg",
  home: "/sf/ex/m-team.jpg",
  off: "/sf/ex/truck-ad.jpg",
}
const STEP_IMG = ["/sf/ex/m-team.jpg", "/sf/ex/seminar.jpg", "/sf/ex/m-shoot.jpg", "/sf/img/report.jpg", "/geo/media-editor.jpg"]

export default function HomeDoc() {
  const insights = [
    ...INSIGHT_HREFS.map((h) => GUIDE_ARTICLES.find((a) => a.href === h)).filter(Boolean),
    ...GUIDE_ARTICLES.filter((a) => !INSIGHT_HREFS.includes(a.href)).slice(0, 3),
  ].slice(0, 6) as typeof GUIDE_ARTICLES
  const slug = (k: string) => SERVICES.find((s) => s.k === k)?.slug ?? ""
  return (
    <DocShell>
      <div className="gx ix vx cx hm">
        <JsonLd data={{ "@context": "https://schema.org", ...faqLd(HOME_FAQ) }} />

        {/* ① 첫 화면 */}
        <section className="dp-hero geo-hero ix-hero" aria-label="첫 화면">
          <div className="dp-bg" aria-hidden="true">
            <div className="bgt" data-wall="main" />
          </div>
          <div className="dp-veil" aria-hidden="true" />
          <div className="dp-w geo-hero-in">
            <h1 aria-label="IMC 통합 마케팅 대행 위즈더플래닝: 당신의 브랜드를 분석한 제안서부터 받아 보세요">
              <small className="ix-kw">IMC 통합 마케팅 대행 · 위즈더플래닝</small> <Chars text={"당신의 브랜드를 분석한\n제안서부터 받아 보세요"} mark="분석한" />
            </h1>
            <p className="vx-era">2016년부터 · 자체 6개 부서 · 전담 AE</p>
            <p className="dp-lead">
              광고를 켜기 전에 브랜드가 어디까지 알려져 있고 <span className="nw">어디서 새는지 먼저 분석하고,</span>{" "}
              <br />
              그 결과로 짠 계획을 <span className="nw">제안서로 보내 드립니다.</span>
            </p>
            <div className="dp-btns">
              <a className="p1" href="#contact">
                무료 분석 받기
              </a>
              <a className="hm-kk" href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
                <Icon k="kakao" />
                카카오톡으로 묻기
              </a>
            </div>
          </div>
          <a className="ix-cue" href="#why" aria-label="왜 위즈더플래닝인가로 내려가기">
            <span>위즈더플래닝은 이렇게 일해요</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ② 왜: 대행사가 쪼개져 있을 때 듣는 말 */}
        <section className="dp-sec geo-sec rv hm-why" id="why">
          <div className="dp-w">
            <div className="hm-why-in">
              <div>
                <p className="geo-eb">왜 위즈더플래닝인가</p>
                <h2>
                  광고는 A사, 바이럴은 B사.{" "}
                  <br />
                  <span>매달 듣는 말은 &lsquo;다 했습니다&rsquo;</span>
                </h2>
                <p className="geo-lead">
                  캠페인 기획, 인플루언서 섭외, 촬영, 광고, 검색과 AI 답변까지 저희 전담 부서들이 한 설계로 합니다. 그래서 &lsquo;했다&rsquo;가 아니라 숫자로 보고할 수 있습니다.
                </p>
              </div>
              <ul className="hm-chat" aria-label="대행사를 따로 둘 때 자주 듣는 말">
                {PROBLEM_PINGS.map((t, i) => (
                  <li key={t} style={vars({ i })} className={i === PROBLEM_PINGS.length - 1 ? "me" : undefined}>
                    <small>{i === PROBLEM_PINGS.length - 1 ? "담당자" : ["광고 대행사", "영상 프로덕션", "광고 대행사", "바이럴 대행사", "광고 대행사"][i]}</small>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ③ 여덟 가지 */}
        <section className="dp-sec geo-sec geo-sec-mist rv hm-svc" id="services">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">하는 일</p>
                <h2>
                  캠페인 기획에서 AI 답변까지,{" "}
                  <br />
                  <span>여덟 가지를 직접 합니다</span>
                </h2>
              </div>
              <p className="geo-lead">하나만 맡기셔도 되고 묶어서 맡기셔도 됩니다. 카드를 누르면 서비스마다 자세히 볼 수 있습니다.</p>
            </div>
            <ul className="hm-svc-g">
              {SERVICES.map((s, i) => (
                <li key={s.k} style={vars({ i })}>
                  <Link href={`/services/${s.slug}`}>
                    <figure>
                      <img src={SVC_IMG[s.k] ?? "/sf/ex/m-team.jpg"} alt="" loading="lazy" decoding="async" />
                      <span className="ic" aria-hidden="true">
                        <Icon k={s.k} />
                      </span>
                    </figure>
                    <div>
                      <em>{s.no}</em>
                      <b>{s.n}</b>
                      <span>{s.ln}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ④ 한 창구 */}
        <section className="dp-sec geo-sec rv tw-ae hm-team" id="team">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">전문팀</p>
                <h2>
                  부서는 여섯,{" "}
                  <br />
                  <span>창구는 하나입니다</span>
                </h2>
              </div>
              <div className="gt-side">
                <p className="geo-lead">{TEAM_PAGE.marketer[1]}</p>
                <p className="hm-more">
                  <Link href="/team">전문팀과 일하는 방식 보기 →</Link>
                </p>
              </div>
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

        {/* ⑤ 일하는 순서 */}
        <section className="dp-sec geo-sec rv cw-proc tw-proc" id="process">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">일하는 순서</p>
                <h2>
                  분석에서 최적화까지,{" "}
                  <br />
                  <span>성과가 날 때까지 돕니다</span>
                </h2>
              </div>
              <p className="geo-lead">정해진 패키지는 없습니다. 비어 있는 자리에 필요한 채널만 골라 제안하고, 숫자가 움직이지 않는 칸에서 다시 시작합니다.</p>
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
                    <span>{TEAM_PAGE.steps[i]}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ⑥ 업종별 */}
        <section className="dp-sec geo-sec geo-sec-mist rv hm-ind" id="industries">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">업종별 전략</p>
                <h2>
                  업종마다{" "}
                  <br />
                  <span>먼저 할 일이 다릅니다</span>
                </h2>
              </div>
              <p className="geo-lead">매장·병원부터 자사몰, 대기업 캠페인까지 업종에 맞는 순서로 묶습니다.</p>
            </div>
            <ul className="hm-ind-g">
              {SOLUTIONS.map((f, i) => (
                <li key={f.slug} style={vars({ i })}>
                  <Link href={`/solutions/${f.slug}`}>
                    <img src={`/sf/ex/${f.img}.jpg`} alt="" loading="lazy" decoding="async" />
                    <span className="hm-ind-tx">
                      <small>{f.who}</small>
                      <b>{f.n}</b>
                      <span>{f.q.replace("\n", " ")}</span>
                    </span>
                    <span className="cw-pair-ar" aria-hidden="true">
                      <Icon k="arrow" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ⑦ 인사이트 */}
        <section className="dp-sec geo-sec rv hm-ins" id="insights">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">인사이트</p>
                <h2>
                  직접 집행하고{" "}
                  <br />
                  <span>직접 잰 숫자로만 씁니다</span>
                </h2>
              </div>
              <div className="gt-side">
                <p className="geo-lead">ChatGPT·네이버 AI·구글에 브랜드가 어떻게 나오는지 직접 재 본 기록과 업체명을 가린 실제 사례입니다.</p>
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
        <FaqBlock items={HOME_FAQ} note="여기 없는 질문은 문의로 남겨 주세요. 전담 AE가 답해 드립니다." />

        {/* ⑨ 문의 */}
        <ContactBlock
          title="지금 어디가 비어 있는지, 먼저 같이 보겠습니다."
          sub="문의를 남겨 주시면 전담 AE가 연락드리고, 검색·AI 답변·홈페이지·채널이 지금 어떻게 나오는지 같이 봅니다. 비용은 그 결과로 짠 제안서에 적어 드립니다."
          label="무료 분석 받기"
          source="home"
        />
      </div>
    </DocShell>
  )
}
