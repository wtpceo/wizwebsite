import Script from "next/script"
import Link from "next/link"
import { GUIDE_ARTICLES } from "@/lib/guide-articles"
import {
  SERVICES,
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
  INSIGHT_LABELS,
  CONTACT,
  HOME_FAQ,
  TRUST,
} from "./content"
import { MG } from "./mg"
import { DETAILS } from "./details"
import { Icon } from "./icons"
import { Words, Chars, Cut, Ex, vars, Nums } from "./parts"
import SfContactForm from "./SfContactForm"
import { Faq } from "./DocParts"
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
/* 첫 화면 키워드 띠(11-06 밤 대표: 유튜버·메가/마이크로 인플루언서·SEO·GEO·홈페이지 제작이 첫 화면에서 보여야 한다) */
const HERO_KEYS: [string, string][] = [
  ["유튜버 섭외", "/services/influencer"],
  ["메가 인플루언서", "/services/influencer"],
  ["마이크로 인플루언서", "/services/influencer"],
  ["퍼포먼스 광고", "/services/performance"],
  ["SEO", "/services/search"],
  ["GEO", "/services/search"],
  ["숏폼 촬영", "/services/content"],
  ["블로그·바이럴", "/services/viral"],
  ["마케팅 홈페이지 제작", "/services/homepage"],
  ["중국·일본 글로벌", "/services/global"],
  ["오프라인 미디어", "/services/offline"],
]

export default function ShortformHome() {
  const insights = INSIGHT_HREFS.map((h) => GUIDE_ARTICLES.find((a) => a.href === h)).filter(Boolean) as typeof GUIDE_ARTICLES
  let no = 0
  const next = () => ++no

  return (
    <main className="sf" id="sf">
      <SfHeader home />
      <SfMenu />

      {/* 0 인트로(검은 화면에 글자가 지나가고 「한 곳.」) — 11-06 밤 대표 지시로 뺐다. sf.js 의 intro()는 #intro 가 없으면 바로 첫 화면을 켠다.
          html 에 sf-pre 를 붙이던 인라인 스크립트도 같이 빼서, 그 때문에 나던 hydration 경고도 사라진다 */}

      {/* 1 훅 — 확정 첫 화면 A */}
      <section className="cut cut-hero hero t-c" id="c1" data-no={next()} data-ch={0} data-tone="c" aria-label="첫 화면">
        <div className="bg" aria-hidden="true">
          <div className="bgt" id="bgt" />
        </div>
        <div className="veil" />
        <div className="wrap">
          <div className="left">
            <p className="kick in1">INTEGRATED MARKETING COMMUNICATIONS · IMC</p>
            {/* 2026-11-06 저녁 대표: 진단으로 시작해 성과까지 함께 가는 회사. 메시지 설계는 docs/메시지설계-2026-11-06-대표뜻.md */}
            {/* 11-06 밤 대표: '진단' → '분석', 부제는 퍼널 위치부터 확인해 드린다는 말로 */}
            {/* 11-07 대표가 고른 제목(1번안): "당신을 분석해서 제안서를 줄 테니 받아 보라"를 받는 쪽 말로 */}
            <h1 className="in2">
              당신의 브랜드를 분석한
              <br />
              제안서부터 받아 보세요.
            </h1>
            {/* 버튼은 무료 분석 신청 하나 + 카카오. 되돌리기 기준점 5a2e8b8 */}
            {/* 11-07 카피 개선안: 첫 화면 150자 안에 '무슨 회사인지(IMC 대행사)'를 넣는다 */}
            <p className="sub in3">
              IMC(통합 마케팅) 대행사 위즈더플래닝입니다. 2016년부터 광고주와 일해 왔고, 광고를 켜기 전에 브랜드가 어디까지 알려져 있고 어디서 새는지 먼저 분석해
              <br />
              그 결과로 짠 계획을 제안서로 보내 드립니다.
            </p>
            <div className="btns in4">
              <a className="b1" href="/contact">
                무료 분석 받기
              </a>
              {/* 11-06 밤 대표: 카카오 노란 버튼 */}
              <a className="kk" href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
                <Icon k="kakao" />
                카카오톡으로 바로 묻기
              </a>
            </div>
            {/* 11-06 밤 대표: 하는 일이 첫 화면에서 다 보여야 한다 — 키워드 띠가 돈다(CSS만, sf-hero.css .tick) */}
            {/* 11-07: 띠의 낱말을 누르면 그 매체 상세 페이지로(메인이 입구 노릇). 두 번째 묶음은 이어 붙이기용이라 읽기·탭에서 뺀다 */}
            <div className="tick in3" aria-label="위즈더플래닝이 하는 일">
              <ul>
                {[...HERO_KEYS, ...HERO_KEYS].map(([k, href], i) => {
                  const dup = i >= HERO_KEYS.length
                  return (
                    <li key={i} aria-hidden={dup ? true : undefined}>
                      <Link href={href} tabIndex={dup ? -1 : undefined}>
                        {k}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <ul className="trust in4" aria-label="위즈더플래닝 운영 체계">
              {TRUST.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* 11-06 저녁 대표: 2016년부터라 11년차. 아래로 내리게 끄는 줄 */}
        <a className="hint" href="#c1a">
          <span>11년차 대행사가 일하는 순서 보기</span>
          <Icon k="down" />
        </a>
      </section>

      {/* 1-2 여덟 가지 + 휴대폰 고리 — 11-06 밤 대표 「첫 화면은 카피만, 이미지는 다음 섹션에서」. 옛 첫 화면 오른쪽(고리·접근 방식 상자)과 목록을 그대로 옮겼다. sf.js heroInit 가 #svl·#ring·#cf 를 찾는다 */}
      {/* 1-1 왜 우리인가 — 11-06 밤 대표가 고른 카피(A안, 제목은 대표가 고침). 글만 있는 짧은 컷 */}
      <Cut id="c1a" no={next()} ch={0} tone="w" label="왜 위즈더플래닝인가" className="c1a">
        {/* 11-07 대표 「둘째·셋째 컷은 첫 화면처럼 가운데로」: 글은 가운데, 제목이 다 뜬 뒤 화면 곳곳에 빨간 도장 "다 했습니다"가 네 번 찍히고(대행사 꼬리표), 흐려지면서 아래 가운데 "그래서, 성과는요?"가 올라온다. CSS만(sf-hero.css .stp) */}
        <div className="c1a-in">
          <div className="c1a-t">
            <p className="eb">WHY WIZ THE PLANNING</p>
            <p className="cap sz-xl">
              <Words text={"광고는 A사, 바이럴은 B사, 영상은 C사.\n그리고 매달 듣는 말은\n'하기로 한 건 다 했습니다'."} />
            </p>
            <p className="sm">
              캠페인을 기획하고, 인플루언서를 섭외하고, 소재를 찍고, 그 소재를 광고와 후기로 2차·3차로 다시 쓰고, 성과를 재서 검색과 AI 답변까지 잇는 일을 전담 부서들이 한 설계로 합니다.
              <br />
              {" "}그래서 '했다'가 아니라 숫자로 보고할 수 있습니다.
            </p>
          </div>
          {/* 11-07 대표 「기존 디자인이 훨씬 좋다, 최대한 가져와서 가운데로」: 개발자의 카톡 채팅 목록(대행사마다 방이 쌓이고 안 읽은 숫자가 올라감)을 글 아래 가운데에 둔다 */}
          <div className="kt" aria-hidden="true">
            <p className="kt-h">
              <b>채팅</b>
              <span className="kt-n">안 읽은 대화 4</span>
            </p>
            <ul className="pings">
              {/* 한 화면에 들어오게 네 방만(개발자 원본은 여섯). 글은 content.ts PROBLEM_PINGS */}
              {[PROBLEM_PINGS[0], PROBLEM_PINGS[1], PROBLEM_PINGS[4], PROBLEM_PINGS[5]].map((p, i) => {
                const room = ["광고 대행사 담당자", "바이럴 대행사 담당자", "영상 프로덕션 PD", "인플루언서 에이전시"][i]
                const unread = [3, 12, 2, 21][i]
                return (
                  <li key={p} style={vars({ i })} className={`pv${i % 4}`}>
                    <span className="pg-av">{room.slice(0, 1)}</span>
                    <i>{room}</i>
                    <span className="pg-b">{p}</span>
                    <small className="pg-t">
                      오후 {i + 2}:{String(14 + i * 7).padStart(2, "0")}
                    </small>
                    <em className="pg-n">
                      <span data-count={unread} data-delay={700 + i * 260}>
                        {unread}
                      </span>
                    </em>
                  </li>
                )
              })}
            </ul>
          </div>
          <p className="ask" aria-hidden="true">
            <span>그래서,</span>
            <b>성과는요?</b>
          </p>
        </div>
      </Cut>

      {/* 1-2 어떻게 일하는지 — 11-07 대표 카피 「퍼널 상태를 확인하고, 브랜드를 공부하고, 철저한 설계로 일합니다. 궁금하지 않으세요?」
          오른쪽: 마케팅 퍼널 다섯 단이 위에서부터 켜지고, 스캔 줄이 내려가다 비어 있는 단(홈페이지)에 멈춰 표시가 붙고, "여기서 계획이 시작됩니다" 메모가 뜬다(예시, CSS만) */}
      <Cut id="c1c" no={next()} ch={0} tone="c" label="어떻게 일하는지" className="c1c">
        {/* 11-07 대표 「가운데로」: 글은 가운데 위, 그 아래 화면 폭 전체에 가로로 눕힌 깔때기(왼쪽 노출 → 오른쪽 성과로 좁아짐). 빛이 왼쪽에서 오른쪽으로 쓸고 가다 '홈페이지'에서 멈추고 그 칸이 붉게 켜진다. CSS만(sf-hero.css .hfn) */}
        <div className="c1c-in">
          <div className="c1c-t">
            <p className="eb">HOW WE WORK</p>
            <p className="cap sz-xl">
              <Words text={"먼저 어디가 비어 있는지 보고,\n그 자리에 필요한 것만 제안합니다."} />
            </p>
            <p className="sm">
              노출·검색·홈페이지·문의, 이 네 칸 가운데 어디가 비어 있는지부터 봅니다. 그다음 브랜드를 공부하고, 빈 칸을 채우는 순서로 계획을 짭니다. 정해진 패키지는 없습니다.
            </p>
          </div>
          {/* 11-07 대표 「기존 디자인을 가져와서 가운데로」: 개발자 프로세스 장의 문서 세 장(진단 표 · 제안서 · 주간 리포트)을 한 줄로. 퍼널 확인 → 브랜드 공부·제안 → 성과 리포트 */}
          <div className="docs3" aria-hidden="true">
            <div style={vars({ i: 0 })}>
              <p className="dk">
                <em>1</em>어디가 비어 있는지 확인
              </p>
              <div className="doc diag">
                <p className="doc-h">채널별 노출 현황</p>
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
                <p className="doc-f">비어 있는 구간이 제안의 출발점이 됩니다.</p>
                <Ex />
              </div>
            </div>
            <div style={vars({ i: 1 })}>
              <p className="dk">
                <em>2</em>브랜드 공부 · 제안서
              </p>
              <div className="doc prop">
                <p className="doc-h">분석 결과로 짠 계획</p>
                <dl>
                  <div style={vars({ i: 0 })}>
                    <dt>우선 과제</dt>
                    <dd>
                      유튜버·인플루언서 섭외로 노출부터 채웁니다<small>후보 리스트를 먼저 드립니다</small>
                    </dd>
                  </div>
                  <div style={vars({ i: 1 })}>
                    <dt>병행 과제</dt>
                    <dd>
                      홈페이지 첫 화면 보강<small>섭외한 영상은 광고 소재와 검색 콘텐츠로 다시 씁니다</small>
                    </dd>
                  </div>
                  <div style={vars({ i: 2 })}>
                    <dt>운영 체계</dt>
                    <dd>
                      전담 AE<small>주간 리포트 · 성과 보고는 직접 찾아뵙고</small>
                    </dd>
                  </div>
                </dl>
                <p className="doc-f">비용은 분석이 끝난 뒤 제안서에 적어 드립니다.</p>
                <Ex />
              </div>
            </div>
            <div style={vars({ i: 2 })}>
              <p className="dk">
                <em>3</em>성과로 보고
              </p>
              <WeeklyReport />
            </div>
          </div>
          {/* 11-07 카피 개선안: '궁금하지 않으세요?'는 묻지 않아도 될 질문이라 뺐다. 버튼은 무엇을 보는지로 */}
          <p className="c1c-q">
            <a href="#c38">
              일하는 순서 다섯 단계 보기 <Icon k="arrow" />
            </a>
          </p>
        </div>
      </Cut>

      {/* 1-3 섭외 증명 — 11-07 대표 「다음 섹션은 네 생각대로」: 셋째 컷이 '노출·섭외'에서 끝나니 그 섭외를 화면으로 보여 준다.
          왼쪽 카피 + 단계 띠 + 버튼, 오른쪽은 위플루언서식 후보 리스트 화면(필터 → 채널 후보가 한 줄씩 쌓임 → 리스트 보내기). 채널 이름은 가린 막대, 숫자는 예시(CSS만, sf-hero.css .cast) */}
      <Cut id="c1d" no={next()} ch={0} tone="w" label="유튜버·인플루언서 섭외" className="c1d">
        <div className="c1d-in">
          <div className="c1d-t">
            <p className="eb">INFLUENCER CASTING</p>
            <p className="cap sz-xl">
              <Words text={"후보 리스트부터\n먼저 보여 드립니다."} />
            </p>
            <p className="sm">
              고객사에 딱 맞는 인플루언서를 찾아 섭외합니다. 자체 도구 위플루언서로 유튜브·인스타 채널을 카테고리·구독자·성장 추이로 거른 리스트를 먼저 드리고, 저희와 연결된 사람에 더해 캠페인마다 새로 섭외합니다. 고르시면 섭외와 계약, 콘텐츠 가이드까지 섭외팀이 맡고, 그 영상은 광고 소재로, 검색과 AI가 읽는 바깥 출처로 다시 씁니다.
            </p>
          </div>
          {/* 11-07 대표 「기존 디자인을 가져와서」: 개발자 인플루언서 컷의 크리에이터 릴스 세 장(AI 예시 사진, 계정 이름 가림)을 가운데에 */}
          <div className="c1d-v sa-reel3" aria-hidden="true">
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
                  {i === 1 ? <small>예시 화면 · 계정 이름 가림</small> : null}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="c1d-act">
            <ol className="c1d-steps" aria-label="섭외 진행 순서">
              {["후보 리스트", "섭외·계약", "콘텐츠 가이드", "2차·3차 활용"].map((s, i) => (
                <li key={s} style={vars({ i })}>
                  <em>{i + 1}</em>
                  {s}
                </li>
              ))}
            </ol>
            <a className="c1d-btn" href="/contact?svc=infl">
              후보 리스트 받아 보기 <Icon k="arrow" />
            </a>
          </div>
        </div>
      </Cut>

      <Cut id="c1b" no={next()} ch={0} tone="c" label="하는 일 여덟 가지" className="c1b">
        <div className="c1b-in">
          <div className="c1b-t">
            <p className="eb">WHAT WE DO</p>
            <p className="cap sz-lg">
              <Words text={"한 캠페인으로 묶는\n여덟 가지 일"} />
            </p>
            <p className="sm">마우스를 올리면 그 일의 화면이 돌아갑니다. 휴대폰을 누르면 자세히 볼 수 있습니다.</p>
            <ol className="svl" id="svl" aria-label="위즈더플래닝이 하는 일 여덟 가지">
              {SERVICES.map((s, i) => (
                <li key={s.k} style={vars({ i })}>
                  {/* 누르면 그 서비스 상세 쪽으로(11-05) · 마우스를 올리면 휴대폰 고리가 그 일로 돈다(sf.js) */}
                  <Link className="svb" href={`/services/${s.slug}`} data-i={i} data-k={s.k}>
                    <em className="no" aria-hidden="true">{s.no}</em>
                    <span className="n">{s.ls ?? s.n}</span>
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
                <span>접근 방식</span>
                <p id="cf">
                  {SERVICES[0].first}
                  <small>{SERVICES[0].n} · 휴대폰을 누르면 자세히</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Cut>

      {/* 개발자의 과제 1~3(퍼포먼스는 A사·카톡방·대행사 넷)·해법 1~2(한 곳에 맡기면·떠넘길 곳이 없습니다) 다섯 컷은 11-07 대표 지시로 뺐다. 둘째 컷(c1a)이 같은 말을 하고 있어서다. 코드는 git 45c878d 에 있다 */}
      {/* 보고 기준 비교표(옛 해법 3)만 남긴다 */}
      <Cut id="c7" no={next()} ch={1} tone="c" fx="shutter" label="보고 기준">
        <div className="sv-c">
          <p className="cap sz-lg">
            <Words text={"보고 기준이\n다릅니다."} />
          </p>
          <div className="cmp" role="table" aria-label="채널별 개별 대행과 위즈더플래닝 비교">
            <div className="cmp-h" role="row">
              <span role="columnheader">구분</span>
              <span role="columnheader">채널별 개별 대행</span>
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
            <Cut id={`c${base}`} no={next()} ch={2} tone={SVC_TONE[si]} fx={s.fx} label={`${s.n} 1`} className="sa sa-has">
              {/* 옛 쪽의 /#services 링크가 여기로 온다 */}
              {si === 0 ? <span id="services" className="sf-anchor" aria-hidden="true" /> : null}
              <div className="sa-in">
                <p className="sa-no">
                  <span className="eb">{s.eb}</span>
                  <b>{s.no}</b> / 08 · {s.n}
                </p>
                <h2 className="cap sz-xl sa-cap">{s.fx === "flip" || s.fx === "slot" ? <Chars text={s.cap} /> : <Words text={s.cap} />}</h2>
                {/* 다 보지 않아도 상세 쪽으로(11-05) · 인증 배지는 제목 바로 아래(카피덱: 실적 칸에서 뺌) */}
                <div className="sa-foot">
                  {s.badge ? <p className="sa-badge">{s.badge}</p> : null}
                  <Link className="sa-more" href={`/services/${s.slug}`}>
                    서비스 자세히 보기 <Icon k="arrow" />
                  </Link>
                </div>
                {/* 11-05: 제목만 떠 있던 첫 컷을 실제 작업물·예시 화면으로 채움(PC는 오른쪽, 휴대폰은 제목 아래) */}
                {SA_TILES[s.k] ? <div className={`sa-vis sa-tiles sa-n${SA_TILES[s.k].split(",").length}`} data-tiles={s.k} data-pick={SA_TILES[s.k]} aria-hidden="true" /> : null}
                {/* 검색 최적화 — 소비자가 보는 AI 답변 화면(우리 브랜드가 1번 · 예시) + 아래 리얼지이오 실제 리포트 띠(11-05 사장님) */}
                {s.k === "search" ? (
                  <figure className="sa-vis sa-ai">
                    <div className="ai-c" data-tiles="search" data-pick="0" aria-hidden="true" style={vars({ i: 0 })} />
                    <img src="/images/report/report-1.jpg" alt="AI 답변에 브랜드가 언급된 비율을 보여 주는 리얼지이오 리포트 화면" loading="lazy" width={1600} height={396} style={vars({ i: 1 })} />
                    <figcaption>위: AI 답변 화면 예시 · 아래: 리얼지이오(realGEO) 실제 리포트, 고객사명 가림</figcaption>
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
                          {i === 1 ? <small>예시 화면</small> : null}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}
                {s.k === "content" ? (
                  <div className="sa-vis sa-wall" aria-hidden="true">
                    {/* 11-05 사장님 「숏폼이 한 개만 돌아 아쉬움」 — 위 사진 3장, 아래 숏폼 3편이 같이 돈다 */}
                    {["w4", "w5", "w6", "v:b1", "v:f1", "v:r15"].map((m, i) =>
                      m.startsWith("v:") ? (
                        <video key={m} data-src={`/sf/v/${m.slice(2)}.mp4`} poster={`/sf/v/${m.slice(2)}.jpg`} muted loop playsInline preload="none" style={vars({ i })} />
                      ) : (
                        <img key={m} src={`/sf/pf/${m}.jpg`} alt="" loading="lazy" width={720} height={540} style={vars({ i })} />
                      ),
                    )}
                    <small>찍은 사진 · 숏폼 예시</small>
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

            <Cut id={`c${base + 1}`} no={next()} ch={2} tone="b" fx="mg" label={`${s.n} 2`} className="sb">
              <div className="sb-in">
                <div className="sb-mg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MG[s.k] }} />
                <div className="sb-t">
                  <p className="sb-k">
                    {s.n} · 접근 방식
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

            <Cut id={`c${base + 2}`} no={next()} ch={2} tone="w" fx="deal" label={`${s.n} 3`} className={`sc sc-${s.k}`}>
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
                      <p>주요 성과</p>
                      <ul>
                        {s.rec.map((r) => (
                          <li key={r}>
                  <Nums text={r} />
                </li>
                        ))}
                      </ul>
                      {DETAILS[s.k].recNote ? (
                        <small className="sc-recn">
                          {DETAILS[s.k].recNote} <Link href="/how-we-measure">측정 방식 보기 →</Link>
                        </small>
                      ) : null}
                    </div>
                  ) : null}
                  <div className="sc-btn">
                    <a className="p1" href={`/contact?svc=${s.k}`}>
                      진단 신청
                    </a>
                    <Link className="p2" href={`/services/${s.slug}`}>
                      서비스 자세히 보기
                    </Link>
                  </div>
                </div>
                <div className={`sc-v lay-${s.k}`} aria-hidden="true">
                  {s.k === "content" ? (
                    <div className="sc-reel">
                      <video data-src="/sf/v/b2.mp4" poster="/sf/v/b2.jpg" muted loop playsInline preload="none" />
                    </div>
                  ) : null}
                  <div className="deck" data-tiles={s.k} />
                  <Ex>{s.k === "global" ? "예시 화면" : "예시 화면 · 고객사명 가림"}</Ex>
                </div>
              </div>
            </Cut>
          </div>
        )
      })}

      <Cut id="c32" no={next()} ch={2} tone="k" fx="montage" label="여덟 가지 몽타주">
        <div className="mt">
          <div className="mt-h">
            <p className="eb">WHAT WE DO</p>
            <p className="cap sz-xl">
              <Words text={"캠페인 기획에서 AI 답변까지,\n한 설계를 이루는\n여덟 가지."} />
            </p>
          </div>
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
        <Cut key={f.n} id={`c${33 + i}`} no={next()} ch={3} tone={(["w", "c", "k"] as const)[i]} fx="cwipe" label={`업종별 ${f.n}`} className={`so so-${i}`}>
          <div className="so-in">
            <div className="so-t">
              {i === 0 ? (
                <>
                  <p className="eb">INDUSTRIES</p>
                  <p className="so-k">
                    동네 가게와 자사몰, 대기업은 비어 있는 자리가 다릅니다.
                    <br />
                    그래서 진단을 먼저 하고, 필요한 채널만 골라 묶습니다.
                  </p>
                </>
              ) : null}
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
                {f.n} 전략 자세히 보기 <Icon k="arrow" />
              </Link>
            </div>
            <figure className="so-ph">
              <img src={`/sf/ex/${f.img}.jpg`} alt={f.alt} loading="lazy" width={640} height={960} />
              <Ex>예시 사진</Ex>
            </figure>
          </div>
        </Cut>
      ))}

      {/* 6 전문팀 */}
      <Cut id="c36" no={next()} ch={4} tone="w" fx="folder" label="전문팀 1">
        <div className="tm">
          <p className="eb">OUR TEAM</p>
          <p className="cap sz-lg">
            <Words text={"여섯 개의 부서가\n한 고객사를 함께 맡습니다."} />
          </p>
          <div className="tm-map">
            <div className="tm-c">
              <span className="ic">
                <Icon k="person" />
              </span>
              <b>전담 AE</b>
              <small>고객사별 담당 지정</small>
            </div>
            <ul>
              {TEAMS.map(([k, n, , en], i) => (
                <li key={n} style={vars({ i })}>
                  <span className="ic">
                    <Icon k={k} />
                  </span>
                  <span>
                    <small>{en}</small>
                    {n}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="sm">영업 따로, 실행 따로가 아닙니다. 계약 자리에 있던 사람이 실행도 챙기고, 여섯 부서가 외주 없이 직접 움직입니다.</p>
        </div>
      </Cut>

      <Cut id="c37" no={next()} ch={4} tone="c" fx="flipb" label="전문팀 2">
        <div className="tm2">
          <p className="cap sz-lg">
            <Words text={"부서는 여섯,\n창구는 하나."} />
          </p>
          <div className="tm2-rows">
            {TEAMS.map(([k, n, jobs, en], i) => (
              <div className="tm2-r" key={n} style={vars({ i })}>
                <span className="tm2-ph" aria-hidden="true">
                  <Icon k={k} />
                </span>
                <b>
                  <small>{en}</small>
                  {n}
                </b>
                <span className="tm2-j">{jobs.join(" · ")}</span>
              </div>
            ))}
          </div>
          <p className="sm">계약할 때 만난 AE가 실행 때도 팀을 움직이고, 성과 보고는 전화가 아니라 직접 찾아뵙고 합니다.</p>
          <Link className="so-more" href="/team">
            전문팀 자세히 보기 <Icon k="arrow" />
          </Link>
        </div>
      </Cut>

      {/* 7 프로세스 */}
      {STEPS.map((st, i) => (
        <Cut key={st.w} id={`c${38 + i}`} no={next()} ch={5} tone={STEP_TONE[i]} fx="slot" label={`프로세스 ${i + 1}`} className={`ps ps-${i}`}>
          <div className="ps-in">
            <div className="ps-t">
              {i === 0 ? (
                <>
                  <p className="eb">HOW WE WORK</p>
                  <p className="ps-k">문제를 찾는 데서 시작해, 성과가 날 때까지 돕니다.</p>
                </>
              ) : null}
              <p className="ps-no">
                {i + 1} / 5 · {st.en}
              </p>
              <h2 className="sr">{st.w}</h2>
              <p className="ps-w" aria-hidden="true">
                <span className="ps-wi">{st.w}</span>
              </p>
              <p className="ps-l">{st.t}</p>
              <ol className="ps-flow" aria-label="프로세스 순서">
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
                  <p className="doc-h">채널별 노출 현황</p>
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
                  <p className="doc-f">비어 있는 구간이 제안의 출발점이 됩니다. 정해진 패키지는 없습니다.</p>
                  <Ex />
                </div>
              ) : null}
              {i === 1 ? (
                <div className="doc prop">
                  <p className="doc-h">업종별 채널 조합 · 제안서</p>
                  <dl>
                    <div style={vars({ i: 0 })}>
                      <dt>우선 과제</dt>
                      <dd>
                        지도·홈페이지 정보를 같은 말로<small>AI가 같은 정보를 읽게 합니다</small>
                      </dd>
                    </div>
                    <div style={vars({ i: 1 })}>
                      <dt>병행 과제</dt>
                      <dd>
                        블로그 체험단<small>검색한 고객이 읽을 후기를 모읍니다</small>
                      </dd>
                    </div>
                    <div style={vars({ i: 2 })}>
                      <dt>운영 체계</dt>
                      <dd>
                        전담 AE<small>주간 리포트</small>
                      </dd>
                    </div>
                  </dl>
                  <p className="doc-f">비용은 진단이 끝난 뒤 제안서에 적어 드립니다.</p>
                  <Ex />
                </div>
              ) : null}
              {i === 2 ? (
                <div className="doc week">
                  <p className="doc-h">주간 실행 계획: 전담 AE 통합 관리</p>
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
                  <p className="doc-h">전환 퍼널 병목 구간</p>
                  <div className="fn">
                    {FUNNEL.map(([a, b, v], j) => (
                      <div key={a} className={`fn-b${j === 2 ? " hit" : ""}`} style={vars({ i: j, v: `${v}%` })}>
                        <i />
                        <b>{a}</b>
                        <small>{b}</small>
                      </div>
                    ))}
                  </div>
                  <p className="doc-f">문의 직전에 많이 빠지면, 버튼 글자와 첫 문장부터 다시 씁니다.</p>
                  <a className="loop" href="#c38">
                    <Icon k="loop" />
                    최적화 이후, 다시 진단으로
                  </a>
                  <Ex />
                </div>
              ) : null}
            </div>
          </div>
        </Cut>
      ))}

      {/* 8 인사이트 */}
      <Cut id="c43" no={next()} ch={6} tone="w" fx="liquid" label="인사이트">
        <div className="ins">
          <div className="ins-t">
            <div>
              <p className="eb">INSIGHTS</p>
              <p className="cap sz-lg">
                <Words text={"저희가 직접 집행하고\n직접 잰 숫자로만 씁니다."} />
              </p>
            </div>
            <Link className="ins-all" href="/guide">
              인사이트 리포트 전체 보기 <Icon k="arrow" />
            </Link>
          </div>
          <ul className="ins-track">
            {insights.map((a, j) => (
              <li key={a.href} style={vars({ i: j })}>
                <Link href={a.href}>
                  <small>{INSIGHT_LABELS[a.href] ?? a.kicker}</small>
                  <b>{a.title}</b>
                  <span>{a.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Cut>

      {/* 9 자주 묻는 질문(사장님 11-06) */}
      <Cut id="cfaq" no={next()} ch={7} tone="w" fx="liquid" label="자주 묻는 질문">
        <div className="hf">
          <div>
            <p className="eb">FAQ</p>
            <h2 className="cap sz-lg">
              <Words text={"계약 전에\n많이 묻는 질문"} />
            </h2>
          </div>
          <Faq items={HOME_FAQ} />
        </div>
      </Cut>

      {/* 10 문의 */}
      <Cut id="c44" no={next()} ch={8} tone="c" fx="swipe" label="문의하기">
        {/* 옛 쪽(가이드·극장·옛 머리글)의 /#contact 링크가 여기로 온다 */}
        <span id="contact" className="sf-anchor" aria-hidden="true" />
        <div className="ct">
          <div className="ct-t">
            <p className="eb">CONTACT</p>
            <h2 className="cap sz-lg">
              <Words text={"지금 어디가 비어 있는지,\n먼저 같이 보겠습니다."} />
            </h2>
            <p className="sm">문의를 남겨 주시면 전담 AE가 연락드리고, 검색·AI 답변·홈페이지·채널이 지금 어떻게 나오는지 같이 봅니다. 비용은 그 결과로 짠 제안서에 적어 드립니다.</p>
            <p className="sm ct-n">
              대기업·프랜차이즈·브랜드사는 <a href="/business/contact">기업 제안 요청</a>에서 RFP와 제안서를 요청하시면 됩니다.
            </p>
            <p className="sm ct-n">
              매장·병원·학원은{" "}
              <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao>
                카카오톡
              </a>
              으로 먼저 물어보셔도 됩니다.
            </p>
            <div className="ct-ways">
              <a href={CONTACT.telHref} data-tel>
                <Icon k="phone" />
                <b>대표전화 {CONTACT.tel}</b>
                <small>{CONTACT.hours}</small>
              </a>
              <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao className="kk">
                <Icon k="kakao" />
                <b>카카오톡 실시간 상담</b>
                <small>채팅 문의</small>
              </a>
              <a href="/business/contact">
                <Icon k="plan" />
                <b>기업 제안 요청 (RFP)</b>
                <small>대기업·프랜차이즈·브랜드사 전용</small>
              </a>
            </div>
          </div>
          <SfContactForm />
        </div>
      </Cut>

      {/* 11 끝 — 로고 */}
      <Cut id="c45" no={next()} ch={8} tone="k" fx="logo" label="끝">
        <div className="lg-rv">
          <div className="lg-mark" aria-hidden="true">
            <img src="/sf/img/wiz-symbol.png" alt="" width={733} height={460} />
          </div>
          <p className="lg-name">WIZ THE PLANNING</p>
          <p className="lg-sub">맡긴 곳이, 직접 합니다.</p>
          <p className="lg-en">Integrated Marketing Partner, WIZ THE PLANNING</p>
        </div>
      </Cut>

      <SfFooter />

      <SfDock home />

      <script
        type="application/json"
        id="sf-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            svc: SERVICES.map((s) => ({ k: s.k, n: s.n, ln: s.ln, first: s.first, t1: s.t1, d: s.steps, rec: s.rec, rn: DETAILS[s.k].recNote, more: `/services/${s.slug}` })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Script src="/sf/sf.js" strategy="afterInteractive" />
    </main>
  )
}
