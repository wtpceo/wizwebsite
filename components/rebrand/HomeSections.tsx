import Link from "next/link"
import StagePicker from "@/components/rebrand/StagePicker"
import { MEDIA_A, MEDIA_B, CLIENTS, TEAMS, AGENTS, RUNS, PLATFORMS, type Medium } from "@/lib/rebrand-data"
import { FAQ_ITEMS } from "@/lib/faq-data"

/* ───────── 매체 띠 ───────── */
function TickerList({ items, hidden }: { items: Medium[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden ? "true" : undefined}>
      {items.map((m) => (
        <li key={m.name}>
          <b>{m.name}</b>
          <span>{m.stages}</span>
        </li>
      ))}
    </ul>
  )
}

/* ───────── 첫 화면 ─────────
   순서(대표 지시 2026-10-15): 질문 한 문장 → 돌아가는 매체 → 상태부터 본다는 답 → 맞춤 기획서 */
export function Hero() {
  return (
    <section className="rb-hero">
      <div className="rb-wrap">
        <h1>아직도 영업사원이 권하는 매체에 회사를 맞추고 있나요?</h1>
      </div>
      <div className="rb-ticker is-hero" aria-label="다루는 매체">
        <div className="rb-ticker-row is-a">
          <TickerList items={MEDIA_A} />
          <TickerList items={MEDIA_A} hidden />
        </div>
        <div className="rb-ticker-row is-b">
          <TickerList items={MEDIA_B} />
          <TickerList items={MEDIA_B} hidden />
        </div>
      </div>
      <div className="rb-wrap">
        <div className="rb-ticker-note">
          <p className="rb-small">열네 개 매체를 다룹니다. 전부 권하지 않습니다.</p>
          <p className="rb-small">이름 옆은 그 매체가 주로 맡는 퍼널 단계입니다</p>
        </div>
        <div className="rb-hero-sub">
          <p className="rb-hero-claim">매체는 회사의 지금 상태를 알고 나서 고르는 겁니다.</p>
          <div className="rb-hero-ask">
            <p>
              위즈더플래닝이 회사를 먼저 분석합니다. 손님이 퍼널 어디에서 빠지는지 재고 그 단계에 맞춘 기획서를 드립니다.
            </p>
            <a className="rb-btn" href="#stage">
              맞춤 기획서 받아 보기 <span className="rb-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 단계 고르기 ───────── */
export function Stage() {
  return (
    <section className="rb-stage-sec">
      <div className="rb-wrap">
        <StagePicker />
      </div>
    </section>
  )
}

/* ───────── 누구와 ───────── */
export function Clients() {
  return (
    <section className="rb-clients" id="clients">
      <div className="rb-wrap">
        <div className="rb-head">
          <p className="rb-name">누구와 일하나</p>
          <div>
            <h2 className="rb-h2">같은 단계여도 회사마다 걸리는 데가 다릅니다</h2>
            <p className="rb-lead">
              대표가 바로 결정하는 매장과 결재가 여러 번 오가는 조직은 같은 순서로 가도 말과 속도가 다릅니다. 그래서
              시작하는 문을 넷으로 나눴습니다.
            </p>
          </div>
        </div>
        <div className="rb-index">
          {CLIENTS.map((c) => (
            <Link key={c.name} href={c.href}>
              <span className="rb-index-name">{c.name}</span>
              <span className="rb-index-desc">{c.desc}</span>
              <span className="rb-index-go">
                {c.go} <span className="rb-arrow" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 무엇을 (어두운 면, 실사진) ───────── */
const PHOTOS = [
  { src: "/images/rebrand/record-bar.jpg", alt: "위즈더플래닝이 촬영한 바 매장 내부", cls: "p1" },
  { src: "/images/rebrand/table-spread.jpg", alt: "위즈더플래닝이 촬영한 음식 상차림", cls: "p2" },
  { src: "/images/rebrand/salon.jpg", alt: "위즈더플래닝이 촬영한 미용실 내부", cls: "p3" },
  { src: "/images/rebrand/meat-cut.jpg", alt: "위즈더플래닝이 촬영한 고기 손질 장면", cls: "p4" },
  { src: "/images/rebrand/restaurant-tree.jpg", alt: "위즈더플래닝이 촬영한 식당 홀", cls: "p5" },
  { src: "/images/rebrand/pilates.jpg", alt: "위즈더플래닝이 촬영한 필라테스 스튜디오", cls: "p6" },
]

export function Work() {
  return (
    <section className="rb-work rb-night" id="work">
      <div className="rb-wrap">
        <div className="rb-head">
          <p className="rb-name">무엇을 하나</p>
          <div>
            <h2 className="rb-h2">설계한 사람이 직접 찍고 만들고 운영합니다</h2>
            <p className="rb-lead">
              기획과 촬영, 개발, 광고 운영이 한 팀 안에 있습니다. 중간에 외주가 없어서 고칠 곳이 보이면 그날 고칩니다.
            </p>
          </div>
        </div>
        <div className="rb-work-photos">
          {PHOTOS.map((p) => (
            <figure key={p.src} className={p.cls}>
              <img src={p.src} alt={p.alt} loading="lazy" width={1400} height={934} />
            </figure>
          ))}
        </div>
        <p className="rb-small rb-work-cap">사내 촬영팀이 광고주 매장에서 찍은 사진입니다. 상호는 싣지 않습니다.</p>
        <table className="rb-teams">
          <thead>
            <tr>
              <th>팀</th>
              <th>하는 일</th>
              <th>실제로 내는 것</th>
            </tr>
          </thead>
          <tbody>
            {TEAMS.map((t) => (
              <tr key={t.team}>
                <td>{t.team}</td>
                <td>{t.what}</td>
                <td>{t.out}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

/* ───────── 진단서 ───────── */
export function Report() {
  return (
    <section className="rb-report" id="report">
      <div className="rb-wrap rb-report-grid">
        <div className="rb-report-side">
          <h2 className="rb-h2">진단이 먼저고 매체는 그다음입니다</h2>
          <p className="rb-lead" style={{ marginTop: 20 }}>
            오른쪽은 진단서 첫 장의 양식입니다. 숫자는 한 정형외과를 계약 전에 실제로 잰 값이고 단계 판정과 매체
            판단은 양식을 보여 드리려고 채운 예시입니다.
          </p>
          <ol className="rb-report-steps">
            <li>
              <span>1</span>지금 검색과 AI에서 어떻게 불리는지 잽니다
            </li>
            <li>
              <span>2</span>다섯 단계 중 어디서 손님이 빠지는지 판정합니다
            </li>
            <li>
              <span>3</span>그 단계에 맞는 매체만 고르고 나머지는 이유와 함께 뺍니다
            </li>
            <li>
              <span>4</span>같은 질문으로 매주 다시 재서 보고합니다
            </li>
          </ol>
          <a className="rb-btn" href="/diagnosis">
            맞춤 기획서 받아 보기 <span className="rb-arrow" aria-hidden="true" />
          </a>
        </div>

        <article className="rb-sheet" aria-label="진단서 양식 예시">
          <div className="rb-sheet-meta">
            <div>
              문서번호<b>WTP-260806-03</b>
            </div>
            <div>
              대상<b>정형외과 (비공개)</b>
            </div>
            <div>
              측정일<b>2026. 8. 6.</b>
            </div>
            <div>
              구분<b>계약 전 진단</b>
            </div>
          </div>
          <h3>네이버와 제미나이는 이 병원을 알고 ChatGPT만 모릅니다</h3>
          <div className="rb-sheet-sec">
            <span>현재 상태</span>
            <p>
              환자가 칠 법한 질문 10개를 3번씩, 모두 30번 물었습니다. 네이버 AI와 제미나이는 질문 10개 모두에서 병원을
              답했지만 <b>ChatGPT는 30번 중 5번</b>만 이름을 불렀고 병원 홈페이지를 출처로 단 적은 없었습니다.
            </p>
          </div>
          <div className="rb-sheet-sec">
            <span>막힌 단계</span>
            <div className="rb-funnel">
              <div>
                인지<small>지역 검색 노출 있음</small>
              </div>
              <div>
                탐색<small>정보는 찾아짐</small>
              </div>
              <div className="is-at">
                비교<small>추천 질문에서 빠짐</small>
              </div>
              <div>
                문의·구매<small>예약 경로 정상</small>
              </div>
              <div>
                재방문<small>판단 보류</small>
              </div>
            </div>
          </div>
          <div className="rb-sheet-sec">
            <span>맞춤 매체</span>
            <table className="rb-mix">
              <thead>
                <tr>
                  <th>매체</th>
                  <th>판단</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI 검색</td>
                  <td>먼저 합니다. 추천 질문에서 빠지는 게 이번 문제의 중심입니다</td>
                </tr>
                <tr>
                  <td>홈페이지</td>
                  <td>AI가 읽을 수 있게 정리합니다. 진료시간 같은 기본 정보가 사이트마다 같은지도 봅니다</td>
                </tr>
                <tr>
                  <td>네이버 플레이스</td>
                  <td>유지합니다. 이미 잘 불리고 있습니다</td>
                </tr>
                <tr className="is-off">
                  <td>메타 광고</td>
                  <td>지금은 뺍니다. 찾아와서 비교에서 지면 광고비가 샙니다</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>
  )
}

/* ───────── 30칸 실측 ───────── */
export function Runs() {
  return (
    <section className="rb-runs" id="runs">
      <div className="rb-wrap">
        <div className="rb-head">
          <p className="rb-name">기록</p>
          <div>
            <h2 className="rb-h2">그 뒤로 같은 질문을 두 번 더 물었습니다</h2>
            <p className="rb-lead">
              칸 하나가 ChatGPT에게 물은 한 번입니다. 가로 10칸이 질문 10개, 세로 3칸이 같은 질문을 다시 물은 횟수입니다.
              칠한 칸은 병원 이름이 나온 답입니다. 세 번째는 내려갔습니다. 내려간 것도 숨기지 않고 둡니다.
            </p>
          </div>
        </div>
        <div className="rb-grids">
          {RUNS.map((r) => {
            const on = r.grid.flat().filter(Boolean).length
            return (
              <figure key={r.date} className={`rb-grid${r.peak ? " is-peak" : ""}`}>
                <figcaption className="rb-grid-cap">
                  <span>
                    {r.label} · {r.date}
                  </span>
                  <b>
                    {on}
                    <small>/30</small>
                  </b>
                </figcaption>
                <div className="rb-cells" role="img" aria-label={`30번 중 ${on}번 이름이 나옴`}>
                  {r.grid.flat().map((v, i) => (
                    <i key={i} className={v ? "is-on" : undefined} />
                  ))}
                </div>
                <p className="rb-small">{r.note}</p>
              </figure>
            )
          })}
        </div>
        <p className="rb-small" style={{ marginTop: 28 }}>
          ChatGPT(gpt-4o, 웹 검색), 한국 위치 기준. 계약 전 측정은 질문별 횟수만 남아 있어 칸 위치는 질문 안에서 위부터
          채웠습니다.{" "}
          <Link className="rb-link" href="/guide/case-orthopedic-chatgpt">
            이 사례의 원자료와 경과
          </Link>
          {" · "}
          <Link className="rb-link" href="/how-we-measure">
            측정 방식
          </Link>
        </p>
      </div>
    </section>
  )
}

/* ───────── AI 에이전트 ───────── */
export function Ax() {
  return (
    <section className="rb-ax rb-night" id="ax">
      <div className="rb-wrap">
        <div className="rb-head">
          <p className="rb-name">회사</p>
          <div>
            <h2 className="rb-h2">AI 에이전트가 먼저 일하고 사람이 확인하고 정합니다</h2>
            <p className="rb-lead">
              2016년에 문을 열었습니다. 지금은 원고와 측정, 제안서, 영상 편집을 사내 전산 위의 에이전트가 먼저 하고 사람은 확인과
              결정만 맡습니다. 적은 인원으로도 매주 다시 재는 일을 빠뜨리지 않는 이유입니다.
            </p>
          </div>
        </div>
        <div className="rb-ax-figure">
          <div>
            <b>19명</b>
            <span>사람 · 2026년 10월 기준 임직원</span>
          </div>
          <div>
            <b>{AGENTS.length}개</b>
            <span>업무에 쓰는 AI 에이전트</span>
          </div>
        </div>
        <div className="rb-ax-wrap">
          <table className="rb-ax-table">
            <thead>
              <tr>
                <th>에이전트</th>
                <th>하는 일</th>
                <th>사람이 확인하는 지점</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {AGENTS.map((a) => (
                <tr key={a.name}>
                  <td>{a.name}</td>
                  <td>{a.does}</td>
                  <td>{a.human}</td>
                  <td>{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/* ───────── 관계사 플랫폼 ───────── */
export function Family() {
  return (
    <section className="rb-family" id="family">
      <div className="rb-wrap">
        <div className="rb-head">
          <p className="rb-name">관계사 플랫폼</p>
          <div>
            <h2 className="rb-h2">관계사 (주)위플이 운영하는 서비스 둘</h2>
            <p className="rb-lead">
              대행으로 배운 것을 소프트웨어로 만든 서비스입니다. 위즈더플래닝과는 다른 법인이 운영하고 숫자도 따로
              셉니다.
            </p>
          </div>
        </div>
        <div className="rb-family-grid">
          {PLATFORMS.map((p) => (
            <div className="rb-brand" key={p.name}>
              <div className="rb-brand-top">
                <h3>{p.name}</h3>
                <span>{p.kind} · (주)위플 운영</span>
              </div>
              <p style={{ color: "var(--rb-body)" }}>{p.desc}</p>
              <dl>
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.value}</dt>
                    <dd>{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <p className="rb-small rb-family-note">
          {PLATFORMS[0].note}{" "}
          <Link className="rb-link" href="/family">
            두 서비스 자세히 보기
          </Link>
        </p>
      </div>
    </section>
  )
}

/* ───────── 자주 받는 질문 (FAQ JSON-LD와 같은 내용) ───────── */
export function Faq() {
  return (
    <section className="rb-faq" id="faq">
      <div className="rb-wrap">
        <div className="rb-head">
          <p className="rb-name">자주 받는 질문</p>
          <h2 className="rb-h2">상담 전에 많이 물어보시는 것</h2>
        </div>
        <div className="rb-faq-list">
          {FAQ_ITEMS.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 마무리 ───────── */
export function Close() {
  return (
    <section className="rb-close" id="contact">
      <div className="rb-wrap">
        <h2 className="rb-h2">지금 어느 단계인지부터 같이 봅니다</h2>
        <div className="rb-close-grid">
          <div>
            <h3 className="rb-h3">기업과 브랜드</h3>
            <p>
              회사 메일로 제안 요청을 보내 주시면 사전미팅에서 과제를 정리하고 단계에 맞춘 기획서를 드립니다. 월 운영은
              300만 원부터 최소 3개월입니다.
            </p>
            <a className="rb-btn" href="/business/contact">
              제안 요청 보내기 <span className="rb-arrow" aria-hidden="true" />
            </a>
          </div>
          <div>
            <h3 className="rb-h3">로컬 사업자와 병·의원</h3>
            <p>가게나 병원 이름만 주시면 지금 검색과 AI에서 어떻게 불리는지 재서 보내 드립니다. 받고 끝내셔도 됩니다.</p>
            <a className="rb-btn rb-btn-line" href="/diagnosis">
              무료 진단 신청 <span className="rb-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 바닥글 ───────── */
export function SiteFooter() {
  return (
    <footer className="rb-foot rb-night">
      <div className="rb-wrap">
        <div className="rb-foot-cols">
          <div className="rb-foot-co">
            <b>위즈더플래닝</b>
            <p>
              (주)위즈더플래닝 · 대표 정현우
              <br />
              서울 금천구 가산디지털로 178 2518, 2519호
              <br />
              사업자등록번호 668-81-00391
              <br />
              1670-0704 · wiz@wiztheplanning.com
            </p>
          </div>
          <div>
            <h4>단계 진단</h4>
            <ul>
              <li><a href="/diagnosis">무료 진단</a></li>
              <li><a href="/site-check">홈페이지 진단</a></li>
              <li><a href="/medical-diagnosis">병원 AI 검색 진단</a></li>
            </ul>
          </div>
          <div>
            <h4>누구와</h4>
            <ul>
              <li><a href="/business">기업</a></li>
              <li><a href="/diagnosis">로컬 사업자</a></li>
              <li><a href="/medical-geo-agency">병·의원</a></li>
              <li><a href="/portfolio">브랜드</a></li>
            </ul>
          </div>
          <div>
            <h4>기록</h4>
            <ul>
              <li><a href="/guide">인사이트</a></li>
              <li><a href="/how-we-measure">측정 방식</a></li>
              <li><a href="/portfolio">포트폴리오</a></li>
              <li><a href="/theater">위즈 극장</a></li>
            </ul>
          </div>
          <div>
            <h4>회사</h4>
            <ul>
              <li><a href="/#ax">AI 에이전트</a></li>
              <li><a href="/family">관계사 플랫폼</a></li>
              <li><a href="/privacy">개인정보처리방침</a></li>
              <li><a href="/terms">이용약관</a></li>
            </ul>
          </div>
        </div>
        <div className="rb-foot-bar">
          <span>© 2026 WizThePlanning Inc.</span>
          <span>순위를 약속하지 않고 측정해서 보여 드립니다</span>
        </div>
      </div>
    </footer>
  )
}
