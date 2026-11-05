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
import WeeklyReport from "./WeeklyReport"
import { SfHeader, SfMenu, SfFooter, SfDock } from "./SiteChrome"
import "./sf-hero.css"
import "./sf.css"
import "./sf-doc.css"

// 홈 = 숏폼 한 편(46컷 · 장 10개). 글은 전부 여기서 서버가 그린다(AI·검색이 읽는 쪽).
// 움직임은 public/sf/sf.js 가 클래스만 바꾼다. 스크립트가 없어도 모든 컷이 그대로 보인다(html.sf-anim 일 때만 숨김).

const SVC_TONE = ["k", "c", "k", "c", "k", "c", "k", "c"] as const
// 서비스 첫 컷 예시 화면(sf.js 타일 순번) — 가운데 칸이 크게 보인다
const SA_TILES: Record<string, string> = { perf: "1,0,2", viral: "1,0,3", global: "0,1", off: "0,1" }
const STEP_TONE = ["w", "k", "w", "k", "w"] as const

export default function ShortformHome() {
  const insights = INSIGHT_HREFS.map((h) => GUIDE_ARTICLES.find((a) => a.href === h)).filter(Boolean) as typeof GUIDE_ARTICLES
  let no = 0
  const next = () => ++no

  return (
    <main className="sf" id="sf">
      <SfHeader home />
      <SfMenu />

      {/* 0 인트로 — 검은 화면 「한 곳.」 · 처음 읽을 때만(이 줄이 sf-pre 를 붙여야 보임 — JS가 없으면 인트로 없이 바로 첫 화면 · CSS가 5초 뒤 스스로 걷음) */}
      {/* 우리 사이트 안에서 넘어온 방문(로고·메뉴로 홈에 돌아옴)은 인트로를 다시 틀지 않는다 */}
      <script
        dangerouslySetInnerHTML={{
          __html: "try{var r=document.referrer;if(!r||new URL(r).host!==location.host)document.documentElement.classList.add('sf-pre')}catch(e){document.documentElement.classList.add('sf-pre')}",
        }}
      />
      <div className="intro" id="intro" aria-hidden="true">
        <div className="fl">
          {["MCN", "광고", "검색", "촬영", "블로그", "해외", "홈페이지", "엘리베이터TV"].map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
        <div className="big">
          <i>한</i>
          <i>곳</i>
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
              이제 한 곳에서{" "}
              <span className="rw" id="rw">
                <span className="in">{HERO_ENDS[0]}</span>
              </span>
            </h1>
            <p className="sub in3">여덟 가지 일을 저희 팀이 직접 합니다. 궁금한 일을 누르면 자세한 설명으로 넘어갑니다.</p>
            <div className="btns in4">
              <a className="b1" href="/contact">
                무료 상담 신청
              </a>
              <a className="b2 kk" href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
                <Icon k="kakao" />
                카카오톡 상담
              </a>
            </div>
            <ol className="svl" id="svl" aria-label="위즈더플래닝이 하는 일 여덟 가지">
              {SERVICES.map((s, i) => (
                <li key={s.k} style={vars({ i })}>
                  {/* 누르면 그 서비스 상세 쪽으로(11-05) · 마우스를 올리면 휴대폰 고리가 그 일로 돈다(sf.js) */}
                  <Link className="svb" href={`/services/${s.slug}`} data-i={i}>
                    <span className="ic">
                      <Icon k={s.k} />
                    </span>
                    <span className="n">{s.n}</span>
                    <span className="l">{s.ln}</span>
                    <i className="pg" />
                  </Link>
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
          {/* 11-05 사장님 「실제 카톡 대화처럼, 더 가독성 있게」 — 업체 넷이 있는 단톡방(방 이름·네모 프로필·꼬리 말풍선·보낸 시각) */}
          <div className="kt">
            <p className="kt-h" aria-hidden="true">
              <b>마케팅 업체 단톡방</b>
              <span>5</span>
            </p>
            <ul className="pings" aria-label="업체가 넷일 때 오가는 말">
              {PROBLEM_PINGS.map((p, i) => (
                <li key={p} style={vars({ i })} className={`pv${i % 4}`}>
                  <span className="pg-av" aria-hidden="true">
                    {PROBLEM_VENDORS[i % 4][0].slice(0, 1)}
                  </span>
                  <i>{PROBLEM_VENDORS[i % 4][0]}</i>
                  <span className="pg-r">
                    <span className="pg-b">{p}</span>
                    <small aria-hidden="true">오후 2:{String(14 + i * 2).padStart(2, "0")}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
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
            <Chars text="한 곳에 맡기면" />
          </p>
          <p className="sm">채널마다 따로 맡기던 일을 한 곳에서 받습니다.</p>
        </div>
      </Cut>

      <Cut id="c6" no={next()} ch={2} tone="w" fx="folder" label="해결 2">
        <div className="sv-b">
          <div className="sv-b-t">
            <p className="cap sz-lg">
              <Words text={"하청 없이,\n우리 팀이 직접 책임집니다."} />
            </p>
            <p className="sm">광고 운영부터 촬영·편집까지 사내 팀이 직접 합니다. 손님은 담당 마케터 한 명과만 이야기하면 됩니다.</p>
          </div>
          <div className="orb" aria-label="한 곳에서 하는 여덟 가지">
            <div className="orb-c">
              <img src="/sf/img/wiz-symbol.png" alt="" width={733} height={460} />
              <b>위즈더플래닝</b>
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
            <Cut id={`c${base}`} no={next()} ch={3} tone={SVC_TONE[si]} fx={s.fx} label={`${s.n} 1`} className="sa sa-has">
              {/* 옛 쪽의 /#services 링크가 여기로 온다 */}
              {si === 0 ? <span id="services" className="sf-anchor" aria-hidden="true" /> : null}
              <div className="sa-in">
                <p className="sa-no">
                  <b>{s.no}</b> / 08 · {s.n}
                  {s.k === "search" ? " · 대표 서비스" : ""}
                </p>
                <h2 className="cap sz-xl sa-cap">{s.fx === "flip" || s.fx === "slot" ? <Chars text={s.cap} /> : <Words text={s.cap} />}</h2>
                {/* 다 보지 않아도 상세 쪽으로(11-05) */}
                <Link className="sa-more" href={`/services/${s.slug}`}>
                  {s.n} 자세히 <Icon k="arrow" />
                </Link>
                {/* 11-05: 제목만 떠 있던 첫 컷을 실제 작업물·예시 화면으로 채움(PC는 오른쪽, 휴대폰은 제목 아래) */}
                {SA_TILES[s.k] ? <div className={`sa-vis sa-tiles sa-n${SA_TILES[s.k].split(",").length}`} data-tiles={s.k} data-pick={SA_TILES[s.k]} aria-hidden="true" /> : null}
                {/* 검색 최적화 — 리얼지이오(realGEO)로 실제 보내 드린 보고서 화면(11-05 사장님 「리얼지이오 예시」) */}
                {s.k === "search" ? (
                  <figure className="sa-vis sa-rep">
                    <img src="/images/report/report-1.jpg" alt="AI 답변에 업체가 언급된 비율을 보여 주는 리얼지이오 보고서 화면" loading="lazy" width={1600} height={396} style={vars({ i: 0 })} />
                    <img src="/report/business-report-engines.jpg" alt="엔진별로 물어본 수와 인용된 수를 비교한 리얼지이오 보고서 화면" loading="lazy" width={1200} height={1077} style={vars({ i: 1 })} />
                    <figcaption>리얼지이오(realGEO) 실제 보고서 · 업체명 가림</figcaption>
                  </figure>
                ) : null}
                {s.k === "infl" ? (
                  <div className="sa-vis sa-reel3" aria-hidden="true">
                    {/* 11-05 사장님 「우리 맛집 채널 말고 유명 채널처럼, 실제 사례 동의 전이니 AI 예시로」 — 계정 이름은 가린 막대, 예시 꼬리표 */}
                    {[
                      ["infl-fashion", "패션 크리에이터"],
                      ["infl-beauty", "뷰티 크리에이터"],
                      ["infl-food", "푸드 크리에이터"],
                    ].map(([m, who], i) => (
                      <figure key={m} style={vars({ i })}>
                        <img src={`/sf/pf/${m}.jpg`} alt="" loading="lazy" width={450} height={675} />
                        <figcaption>
                          <b>
                            <i className="hd" aria-hidden="true" /> {who}
                          </b>
                          {i === 1 ? <small>예시 화면 · AI 이미지</small> : null}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}
                {s.k === "content" ? (
                  <div className="sa-vis sa-wall" aria-hidden="true">
                    {["w1", "w2", "w3", "v", "w4", "w5"].map((m, i) =>
                      m === "v" ? (
                        <video key={m} data-src="/sf/v/r13.mp4" poster="/sf/v/r13.jpg" muted loop playsInline preload="none" style={vars({ i })} />
                      ) : (
                        <img key={m} src={`/sf/pf/${m}.jpg`} alt="" loading="lazy" width={720} height={540} style={vars({ i })} />
                      ),
                    )}
                    <small>직접 찍은 사진 · 숏폼</small>
                  </div>
                ) : null}
                {s.fx === "iso" ? <div className="sa-vis sa-iso" data-tiles={s.k} data-pick="0,1,2" aria-hidden="true" /> : null}
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
                    <a className="p1" href={`/contact?svc=${s.k}`}>
                      무료 상담 신청
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
            <Words text="이 모든 걸 한 곳에서." />
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
          <p className="sm">광고·검색·블로그·MCN·촬영 팀이 모두 사내에 있습니다.</p>
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
                <span className="ps-wi">{st.w}</span>
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
                <WeeklyReport />
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
          <ul className="ins-track">
            {insights.map((a, j) => (
              <li key={a.href} style={vars({ i: j })}>
                <Link href={a.href}>
                  <small>{a.kicker}</small>
                  <b>{a.title}</b>
                  <span>{a.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Cut>

      {/* 9 문의 */}
      <Cut id="c44" no={next()} ch={8} tone="c" fx="swipe" label="문의하기">
        {/* 옛 쪽(가이드·극장·옛 머리글)의 /#contact 링크가 여기로 온다 */}
        <span id="contact" className="sf-anchor" aria-hidden="true" />
        <div className="ct">
          <div className="ct-t">
            <h2 className="cap sz-lg">
              <Words text={"우리 브랜드 마케팅,\n지금 무료로 상담받아 보세요."} />
            </h2>
            <p className="sm">
              기업·병원은 무료 상담, 대기업·프랜차이즈는 <a href="/business/contact">제안 요청</a>, 매장·학원은{" "}
              <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
                카카오톡 상담
              </a>
              으로 받습니다. 신청하시면 담당 마케터가 연락드려 진단부터 시작합니다. 가격은 진단 뒤 제안서로 안내합니다.
            </p>
            <div className="ct-ways">
              <a href={CONTACT.telHref} data-tel>
                <Icon k="phone" />
                <b>{CONTACT.tel}</b>
                <small>{CONTACT.hours}</small>
              </a>
              <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao className="kk">
                <Icon k="kakao" />
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
          <p className="lg-sub">나눠 맡기던 마케팅, 이제 한 곳에서 직접.</p>
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
