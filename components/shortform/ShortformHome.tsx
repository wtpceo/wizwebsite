import Script from "next/script"
import Link from "next/link"
import { GUIDE_ARTICLES } from "@/lib/guide-articles"
import {
  SERVICES,
  HERO_ENDS,
  PROBLEM_VENDORS,
  PROBLEM_PINGS,
  PROBLEMS,
  COMPARE,
  SOLUTIONS,
  TEAMS,
  STEPS,
  DIAG_ROWS,
  WEEK,
  FUNNEL,
  INSIGHT_HREFS,
  CONTACT,
} from "./content"
import { MG } from "./mg"
import { DETAILS } from "./details"
import { Icon } from "./icons"
import { Words, Chars, Cut, Ex, vars } from "./parts"
import SfContactForm from "./SfContactForm"
import { SfHeader, SfMenu, SfFooter, SfDock } from "./SiteChrome"
import "./sf-hero.css"
import "./sf.css"
import "./sf-doc.css"

// 홈 = 숏폼 한 편(46컷 · 장 10개). 글은 전부 여기서 서버가 그린다(AI·검색이 읽는 쪽).
// 움직임은 public/sf/sf.js 가 클래스만 바꾼다. 스크립트가 없어도 모든 컷이 그대로 보인다(html.sf-anim 일 때만 숨김).

const SVC_TONE = ["k", "c", "k", "c", "k", "c", "k", "c"] as const
const STEP_TONE = ["w", "k", "w", "k", "w"] as const

export default function ShortformHome() {
  const insights = INSIGHT_HREFS.map((h) => GUIDE_ARTICLES.find((a) => a.href === h)).filter(Boolean) as typeof GUIDE_ARTICLES
  let no = 0
  const next = () => ++no

  return (
    <main className="sf" id="sf">
      <SfHeader home />
      <SfMenu home />

      {/* 0 인트로 — 검은 화면 「한 팀.」 · 처음 읽을 때만(이 줄이 sf-pre 를 붙여야 보임 — JS가 없으면 인트로 없이 바로 첫 화면 · CSS가 5초 뒤 스스로 걷음) */}
      {/* 우리 사이트 안에서 넘어온 방문(로고·메뉴로 홈에 돌아옴)은 인트로를 다시 틀지 않는다 */}
      <script
        dangerouslySetInnerHTML={{
          __html: "try{var r=document.referrer;if(!r||new URL(r).host!==location.host)document.documentElement.classList.add('sf-pre')}catch(e){document.documentElement.classList.add('sf-pre')}",
        }}
      />
      <div className="intro" id="intro" aria-hidden="true">
        <div className="fl">
          {["검색", "광고", "블로그", "인플루언서", "촬영", "해외", "홈페이지", "엘리베이터TV"].map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
        <div className="big">
          <i>한</i>
          <i>팀</i>
          <i>.</i>
        </div>
        <div className="bar" />
      </div>

      {/* 1 훅 — 확정 첫 화면 A */}
      <section className="cut cut-hero hero t-c" id="c1" data-no={next()} data-ch={0} data-tone="c" aria-label="첫 화면">
        <div className="bg" aria-hidden="true">
          <div className="bgt" id="bgt" />
        </div>
        <div className="veil" />
        <div className="wrap">
          <div className="left">
            <h1 className="in2">
              나눠 맡기던 마케팅,
              <br />
              이제 한 팀이{" "}
              <span className="rw" id="rw">
                <span className="in">{HERO_ENDS[0]}</span>
              </span>
            </h1>
            <p className="sub in3">여덟 가지 일을 저희 팀이 직접 합니다. 하나를 누르면 휴대폰이 그 일의 진행 화면으로 돌아갑니다.</p>
            <div className="btns in4">
              <a className="b1" href="#c44" data-svc="">
                무료 진단 신청
              </a>
              <a className="b2" href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
                상담 문의
              </a>
            </div>
            <ol className="svl" id="svl" aria-label="위즈더플래닝이 하는 일 여덟 가지">
              {SERVICES.map((s, i) => (
                <li key={s.k} style={vars({ i })}>
                  <button type="button" className="svb" data-i={i} aria-pressed={i === 0 ? "true" : "false"}>
                    <span className="ic">
                      <Icon k={s.k} />
                    </span>
                    <span className="n">{s.n}</span>
                    <span className="l">{s.ln}</span>
                    <i className="pg" />
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="right">
            <div className="stage">
              <div className="orbit" />
              <div className="floor" />
              <div className="i3">
                <div className="ring" id="ring" />
              </div>
            </div>
            <div className="cap1" aria-live="polite">
              <div className="box">
                <span>먼저 하는 일</span>
                <p id="cf">
                  {SERVICES[0].first}
                  <small>{SERVICES[0].n} · 휴대폰을 누르면 자세히</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a className="hint" href="#c2">
          <Icon k="down" />
          <span>밀어서 다음</span>
        </a>
      </section>

      {/* 2 문제 */}
      <Cut id="c2" no={next()} ch={1} tone="w" fx="blocks" label="문제 1">
        <div className="pz pz-a">
          <p className="cap sz-xl">
            <Words text="퍼포먼스는 A사," />
          </p>
          <div className="blk blk-1">
            <b>{PROBLEM_VENDORS[0][0]}</b>
            <span>{PROBLEM_VENDORS[0][1]}</span>
          </div>
        </div>
      </Cut>

      <Cut id="c3" no={next()} ch={1} tone="c" fx="blocks" label="문제 2">
        <div className="pz pz-b">
          <p className="cap sz-lg">
            <Words text={"바이럴은 B사,\n유튜브는 C사?"} />
          </p>
          <div className="blks">
            {PROBLEM_VENDORS.map(([n, d], i) => (
              <div className="blk" key={n} style={vars({ i })}>
                <b>{n}</b>
                <span>{d}</span>
              </div>
            ))}
          </div>
          <ul className="pings" aria-label="업체가 넷일 때 오가는 말">
            {PROBLEM_PINGS.map((p, i) => (
              <li key={p} style={vars({ i })}>
                <i>{PROBLEM_VENDORS[i % 4][0]}</i>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Cut>

      <Cut id="c4" no={next()} ch={1} tone="k" fx="break" label="문제 3">
        <div className="pz pz-c">
          <p className="cap sz-lg brk">
            <Chars text="업체가 넷이면 연락도 넷." />
          </p>
          <ol className="probs">
            {PROBLEMS.map(([t, d], i) => (
              <li key={t} style={vars({ i })}>
                <em>{String(i + 1).padStart(2, "0")}</em>
                <b>{t}</b>
                <span>{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </Cut>

      {/* 3 해결 */}
      <Cut id="c5" no={next()} ch={2} tone="k" fx="build" label="해결 1">
        <div className="sv-a">
          <p className="cap sz-mega asm">
            <Chars text="한 팀이 하면" />
          </p>
          <p className="sm">채널마다 따로 맡기던 일을 한 팀이 받습니다.</p>
        </div>
      </Cut>

      <Cut id="c6" no={next()} ch={2} tone="w" fx="folder" label="해결 2">
        <div className="sv-b">
          <div className="sv-b-t">
            <p className="cap sz-lg">
              <Words text={"재하청 없이,\n우리 팀이 직접 책임집니다."} />
            </p>
            <p className="sm">광고 운영부터 촬영·편집까지 사내 팀이 직접 합니다. 손님은 담당 마케터 한 명과만 이야기하면 됩니다.</p>
          </div>
          <div className="orb" aria-label="한 팀이 하는 여덟 가지">
            <div className="orb-c">
              <img src="/sf/img/wiz-symbol.png" alt="" width={733} height={460} />
              <b>위즈더플래닝 한 팀</b>
              <small>담당 마케터 1명</small>
            </div>
            {SERVICES.map((s, i) => (
              <a className="orb-i" key={s.k} href={`#svc-${s.k}`} style={vars({ i, a: `${i * 45 - 90}deg` })}>
                <span className="ic">
                  <Icon k={s.k} />
                </span>
                <b>{s.n}</b>
              </a>
            ))}
          </div>
        </div>
      </Cut>

      <Cut id="c7" no={next()} ch={2} tone="c" fx="shutter" label="해결 3">
        <div className="sv-c">
          <p className="cap sz-lg">
            <Words text={"따로 맡길 때와\n이렇게 다릅니다."} />
          </p>
          <div className="cmp" role="table" aria-label="따로 맡길 때와 위즈더플래닝 비교">
            <div className="cmp-h" role="row">
              <span role="columnheader">구분</span>
              <span role="columnheader">따로 맡길 때</span>
              <span role="columnheader">위즈더플래닝</span>
            </div>
            {COMPARE.map(([k, a, b], i) => (
              <div className="cmp-r" role="row" key={k} style={vars({ i })}>
                <span role="rowheader">{k}</span>
                <span role="cell" className="cmp-a">
                  {a}
                </span>
                <span role="cell" className="cmp-b">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Cut>

      {/* 4 여덟 가지 — 서비스마다 세 컷 */}
      {SERVICES.map((s, si) => {
        const base = 8 + si * 3
        return (
          <div className="svc" key={s.k} id={`svc-${s.k}`} data-svc={s.k}>
            <Cut id={`c${base}`} no={next()} ch={3} tone={SVC_TONE[si]} fx={s.fx} label={`${s.n} 1`} className="sa">
              {/* 옛 쪽의 /#services 링크가 여기로 온다 */}
              {si === 0 ? <span id="services" className="sf-anchor" aria-hidden="true" /> : null}
              <div className="sa-in">
                <p className="sa-no">
                  <b>{s.no}</b> / 08 · {s.n}
                  {s.k === "search" ? " · 대표 서비스" : ""}
                </p>
                <h2 className="cap sz-xl sa-cap">{s.fx === "flip" || s.fx === "slot" ? <Chars text={s.cap} /> : <Words text={s.cap} />}</h2>
                {s.fx === "cut" ? (
                  <div className="sa-reels" aria-hidden="true">
                    {["r13", "r04", "r17", "r22", "r08"].map((r, i) => (
                      <video key={r} data-src={`/sf/v/${r}.mp4`} poster={`/sf/v/${r}.jpg`} muted loop playsInline preload="none" style={vars({ i })} />
                    ))}
                  </div>
                ) : null}
                {s.fx === "iso" ? <div className="sa-iso" data-tiles={s.k} data-pick="0,1,2" aria-hidden="true" /> : null}
                {s.fx === "wipe" || s.fx === "smooth" || s.fx === "shutter" ? (
                  <div className="sa-wp" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                ) : null}
              </div>
            </Cut>

            <Cut id={`c${base + 1}`} no={next()} ch={3} tone="b" fx="mg" label={`${s.n} 2`} className="sb">
              <div className="sb-in">
                <div className="sb-mg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MG[s.k] }} />
                <div className="sb-t">
                  <p className="sb-k">
                    {s.n} · 먼저 하는 일
                  </p>
                  <p className="cap sz-lg">
                    <Words text={s.first} />
                  </p>
                  <ol className="sb-steps">
                    {s.steps.map((t, i) => (
                      <li key={t} style={vars({ i })}>
                        <em>{i + 1}</em>
                        {t}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Cut>

            <Cut id={`c${base + 2}`} no={next()} ch={3} tone="w" fx="deal" label={`${s.n} 3`} className={`sc sc-${s.k}`}>
              <div className="sc-in">
                <div className="sc-t">
                  <h3 className="sc-h">
                    <span className="ic">
                      <Icon k={s.k} />
                    </span>
                    {s.n}
                  </h3>
                  <p className="sc-l">{s.t1}</p>
                  <ul className="sc-items">
                    {s.items.map(([n, d], i) => (
                      <li key={n} style={vars({ i })}>
                        <b>{n}</b>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  {s.rec.length ? (
                    <div className="sc-rec">
                      <p>실제 기록</p>
                      <ul>
                        {s.rec.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                      {DETAILS[s.k].recNote ? <small className="sc-recn">{DETAILS[s.k].recNote}</small> : null}
                    </div>
                  ) : null}
                  <div className="sc-btn">
                    <a className="p1" href="#c44" data-svc={s.k}>
                      이 서비스 상담
                    </a>
                    <Link className="p2" href={`/services/${s.slug}`}>
                      {s.n} 자세히
                    </Link>
                  </div>
                </div>
                <div className={`sc-v lay-${s.k}`} aria-hidden="true">
                  {s.k === "content" ? (
                    <div className="sc-reel">
                      <video data-src="/sf/v/r26.mp4" poster="/sf/v/r26.jpg" muted loop playsInline preload="none" />
                    </div>
                  ) : null}
                  <div className="deck" data-tiles={s.k} />
                  <Ex>{s.k === "global" ? "예시 화면" : "예시 화면 · 업체명 가림"}</Ex>
                </div>
              </div>
            </Cut>
          </div>
        )
      })}

      <Cut id="c32" no={next()} ch={3} tone="k" fx="montage" label="여덟 가지 몽타주">
        <div className="mt">
          <p className="cap sz-xl">
            <Words text="이 모든 걸 한 팀이." />
          </p>
          <div className="mt-scr" id="montage" aria-hidden="true">
            <img src="/sf/ex/m-shoot.jpg" alt="" loading="lazy" />
          </div>
          <ul className="mt-ls">
            {SERVICES.map((s) => (
              <li key={s.k}>{s.n}</li>
            ))}
          </ul>
        </div>
      </Cut>

      {/* 5 업종별 */}
      {SOLUTIONS.map((f, i) => (
        <Cut key={f.n} id={`c${33 + i}`} no={next()} ch={4} tone={(["w", "c", "k"] as const)[i]} fx="cwipe" label={`업종별 ${f.n}`} className={`so so-${i}`}>
          <div className="so-in">
            <div className="so-t">
              {i === 0 ? <p className="so-k">우리 업종에 맞는 조합을 제안합니다.</p> : null}
              <p className="so-who">
                <b>{f.n}</b> {f.who}
              </p>
              <h2 className="cap sz-lg">
                <Words text={f.q} />
              </h2>
              <ol className="so-path">
                {f.c.map(([k, n, d], j) => (
                  <li key={n} style={vars({ i: j })}>
                    <span className="ic">
                      <Icon k={k} />
                    </span>
                    <b>{n}</b>
                    <span>{d}</span>
                  </li>
                ))}
              </ol>
              <Link className="so-more" href={`/solutions/${f.slug}`}>
                {f.n} 자세히 <Icon k="arrow" />
              </Link>
            </div>
            <figure className="so-ph">
              <img src={`/sf/ex/${f.img}.jpg`} alt={f.alt} loading="lazy" width={640} height={960} />
              <Ex>예시 사진</Ex>
            </figure>
          </div>
        </Cut>
      ))}

      {/* 6 전문 인력 */}
      <Cut id="c36" no={next()} ch={5} tone="w" fx="folder" label="전문 인력 1">
        <div className="tm">
          <p className="cap sz-lg">
            <Words text={"분야별 시니어가\n직접 담당합니다."} />
          </p>
          <div className="tm-map">
            <div className="tm-c">
              <span className="ic">
                <Icon k="person" />
              </span>
              <b>담당 마케터</b>
              <small>손님 한 분에 한 명</small>
            </div>
            <ul>
              {TEAMS.map(([k, n], i) => (
                <li key={n} style={vars({ i })}>
                  <span className="ic">
                    <Icon k={k} />
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <p className="sm">광고·검색·블로그·인플루언서·촬영 팀이 모두 사내에 있습니다.</p>
        </div>
      </Cut>

      <Cut id="c37" no={next()} ch={5} tone="c" fx="flipb" label="전문 인력 2">
        <div className="tm2">
          <p className="cap sz-lg">
            <Words text={"창구는\n담당 마케터 한 명."} />
          </p>
          <div className="tm2-rows">
            {TEAMS.map(([k, n, jobs], i) => (
              <div className="tm2-r" key={n} style={vars({ i })}>
                <span className="tm2-ph" aria-hidden="true">
                  <Icon k={k} />
                </span>
                <b>{n}</b>
                <span className="tm2-j">{jobs.join(" · ")}</span>
              </div>
            ))}
          </div>
          <p className="sm">다섯 팀의 일을 담당 마케터가 모아서 전합니다.</p>
          <Link className="so-more" href="/team">
            전문 인력 자세히 <Icon k="arrow" />
          </Link>
        </div>
      </Cut>

      {/* 7 진행 과정 */}
      {STEPS.map((st, i) => (
        <Cut key={st.w} id={`c${38 + i}`} no={next()} ch={6} tone={STEP_TONE[i]} fx="slot" label={`진행 과정 ${i + 1}`} className={`ps ps-${i}`}>
          <div className="ps-in">
            <div className="ps-t">
              {i === 0 ? (
                <p className="ps-k">상담부터 리포트까지, 한 명의 담당자가 끝까지.</p>
              ) : null}
              <p className="ps-no">
                {i + 1} / 5
              </p>
              <h2 className="sr">{st.w}</h2>
              <p className="ps-w" aria-hidden="true">
                <span className="slot" style={vars({ n: i })}>
                  <span className="slot-r">
                    {STEPS.map((x) => (
                      <span key={x.w}>{x.w} </span>
                    ))}
                  </span>
                </span>
              </p>
              <p className="ps-l">{st.t}</p>
              <ol className="ps-flow" aria-label="진행 순서">
                {STEPS.map((x, j) => (
                  <li key={x.w} className={j === i ? "on" : j < i ? "done" : ""}>
                    {x.w}
                  </li>
                ))}
              </ol>
            </div>
            <div className="ps-v">
              {i === 0 ? (
                <div className="doc diag">
                  <p className="doc-h">지금 어디에 어떻게 나오는지</p>
                  <table>
                    <tbody>
                      {DIAG_ROWS.map(([a, b, c], j) => (
                        <tr key={a} style={vars({ i: j })}>
                          <td>{a}</td>
                          <td className={`st-${c}`}>{b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="doc-f">안 보이는 곳과 서로 다른 곳부터 제안서 맨 위에 올립니다.</p>
                  <Ex />
                </div>
              ) : null}
              {i === 1 ? (
                <div className="doc prop">
                  <p className="doc-h">업종에 맞는 조합 · 제안서</p>
                  <dl>
                    <div style={vars({ i: 0 })}>
                      <dt>먼저 할 일</dt>
                      <dd>
                        지도·홈페이지 정보 맞추기<small>AI 답변이 같은 정보를 읽게 합니다</small>
                      </dd>
                    </div>
                    <div style={vars({ i: 1 })}>
                      <dt>같이 할 일</dt>
                      <dd>
                        블로그 체험단<small>찾아본 손님이 읽을 후기를 쌓습니다</small>
                      </dd>
                    </div>
                    <div style={vars({ i: 2 })}>
                      <dt>담당</dt>
                      <dd>
                        담당 마케터 한 명<small>매주 보고</small>
                      </dd>
                    </div>
                  </dl>
                  <p className="doc-f">비용은 진단 뒤 제안서로 따로 안내합니다.</p>
                  <Ex />
                </div>
              ) : null}
              {i === 2 ? (
                <div className="doc week">
                  <p className="doc-h">한 주 일정 · 담당 마케터가 한 표로 챙깁니다</p>
                  <div className="wk">
                    {WEEK.map(([d, jobs], j) => (
                      <div key={d} className="wk-d" style={vars({ i: j })}>
                        <b>{d}</b>
                        {jobs.map(([t, who]) => (
                          <p key={t}>
                            {t}
                            <small>{who}</small>
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <Ex />
                </div>
              ) : null}
              {i === 3 ? (
                <figure className="doc rep">
                  <img src="/sf/img/report.jpg" alt="실제 주간 보고서 한 장(업체명·글 제목 가림)" loading="lazy" width={975} height={835} />
                  <figcaption>실제 주간 보고서 · 업체명·글 제목 가림</figcaption>
                </figure>
              ) : null}
              {i === 4 ? (
                <div className="doc fun">
                  <p className="doc-h">막힌 단계부터 다시</p>
                  <div className="fn">
                    {FUNNEL.map(([a, b, v], j) => (
                      <div key={a} className={`fn-b${j === 2 ? " hit" : ""}`} style={vars({ i: j, v: `${v}%` })}>
                        <i />
                        <b>{a}</b>
                        <small>{b}</small>
                      </div>
                    ))}
                  </div>
                  <p className="doc-f">문의에서 많이 빠지면 홈페이지 문의 버튼과 첫 문장부터 고칩니다.</p>
                  <a className="loop" href="#c38">
                    <Icon k="loop" />
                    개선이 끝나면 다시 진단부터
                  </a>
                  <Ex />
                </div>
              ) : null}
            </div>
          </div>
        </Cut>
      ))}

      {/* 8 인사이트 */}
      <Cut id="c43" no={next()} ch={7} tone="w" fx="liquid" label="인사이트">
        <div className="ins">
          <div className="ins-t">
            <p className="cap sz-lg">
              <Words text={"저희가 직접\n재고 쓴 글입니다."} />
            </p>
            <Link className="ins-all" href="/guide">
              마케팅 칼럼 전체 보기 <Icon k="arrow" />
            </Link>
          </div>
          <div className="ins-flow">
            <ul className="ins-track">
              {[0, 1].map((rep) =>
                insights.map((a, j) => (
                  <li key={`${rep}-${a.href}`} aria-hidden={rep === 1 ? "true" : undefined} style={vars({ i: j })}>
                    <Link href={a.href} tabIndex={rep === 1 ? -1 : undefined}>
                      <small>{a.kicker}</small>
                      <b>{a.title}</b>
                      <span>{a.date}</span>
                    </Link>
                  </li>
                )),
              )}
            </ul>
          </div>
        </div>
      </Cut>

      {/* 9 문의 */}
      <Cut id="c44" no={next()} ch={8} tone="c" fx="swipe" label="문의하기">
        {/* 옛 쪽(가이드·극장·옛 머리글)의 /#contact 링크가 여기로 온다 */}
        <span id="contact" className="sf-anchor" aria-hidden="true" />
        <div className="ct">
          <div className="ct-t">
            <h2 className="cap sz-lg">
              <Words text={"우리 브랜드 마케팅,\n지금 무료로 진단받아 보세요."} />
            </h2>
            <p className="sm">무료 진단은 기업과 병원을 대상으로 합니다. 세 칸만 적으시면 담당자가 연락드립니다. 가격은 진단 뒤 제안서로 안내합니다.</p>
            <div className="ct-ways">
              <a href={CONTACT.telHref} data-tel>
                <Icon k="phone" />
                <b>{CONTACT.tel}</b>
                <small>{CONTACT.hours}</small>
              </a>
              <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
                <Icon k="chat" />
                <b>카카오톡 상담</b>
                <small>채팅으로 바로 물어보기</small>
              </a>
              <a href="/business/contact">
                <Icon k="plan" />
                <b>기업 제안 요청</b>
                <small>대기업·프랜차이즈·브랜드사</small>
              </a>
            </div>
          </div>
          <SfContactForm services={SERVICES.map((s) => ({ k: s.k, n: s.n }))} />
        </div>
      </Cut>

      {/* 10 끝 — 로고 */}
      <Cut id="c45" no={next()} ch={9} tone="k" fx="logo" label="끝">
        <div className="lg-rv">
          <div className="lg-mark" aria-hidden="true">
            <img src="/sf/img/wiz-symbol.png" alt="" width={733} height={460} />
          </div>
          <p className="lg-name">WIZ THE PLANNING</p>
          <p className="lg-sub">나눠 맡기던 마케팅, 이제 한 팀이 직접.</p>
        </div>
      </Cut>

      <SfFooter />

      <SfDock home />

      <script
        type="application/json"
        id="sf-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ends: HERO_ENDS,
            svc: SERVICES.map((s) => ({ k: s.k, n: s.n, ln: s.ln, first: s.first, t1: s.t1, d: s.steps, rec: s.rec, more: `/services/${s.slug}` })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Script src="/sf/sf.js" strategy="afterInteractive" />
    </main>
  )
}
