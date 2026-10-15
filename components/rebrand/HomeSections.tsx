import Link from "next/link"
import FunnelPicker from "@/components/rebrand/FunnelPicker"
import RunGrids from "@/components/rebrand/RunGrids"
import { MEDIA_A, MEDIA_B, CLIENTS, TEAMS, AGENTS, PLATFORMS } from "@/lib/rebrand-data"
import { FAQ_ITEMS } from "@/lib/faq-data"

const MEDIA = [...MEDIA_A, ...MEDIA_B].map((m) => m.name)

/* ───────── 첫 화면 ─────────
   대표 지시 순서(2026-10-15): 질문 → 영업사원이 권하는 매체(하나씩 지워짐) → 상태부터 본다는 답 → 맞춤 기획서 */
export function Hero() {
  return (
    <section className="rb-hero">
      <div className="rb-wrap">
        <h1>아직도 영업사원이 권하는 매체에 회사를 맞추고 있나요?</h1>
        <div className="rb-hero-foot">
          <div>
            <p className="rb-strike-cap">영업 전화로 들어오는 매체 제안</p>
            <ul className="rb-strike" aria-label="흔히 권유받는 매체">
              {MEDIA.map((m, i) => (
                <li key={m} style={{ ["--i" as string]: i }}>
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="rb-hero-answer">
            <p className="rb-answer">매체는 회사의 지금 상태를 보고 고릅니다.</p>
            <p>위즈더플래닝은 손님이 퍼널 어디에서 빠지는지 먼저 재고 그 단계에 맞춘 기획서를 드립니다.</p>
            <div className="rb-btns">
              <a className="rb-btn is-white" href="#stage">
                맞춤 기획서 받기
              </a>
              <a className="rb-btn is-line-white" href="/business/contact">
                기업 제안 요청
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 단계 고르기 ───────── */
export function Stage() {
  return (
    <section className="rb-funnel-sec" id="stage">
      <div className="rb-wrap">
        <div className="rb-funnel-head">
          <h2 className="rb-h2">우리 회사는 지금 어느 단계에 있나요?</h2>
          <p className="rb-lead">
            단계를 잘못 짚으면 같은 광고비도 샙니다. 막힌 단계를 고르면 그 단계에 맞는 설계와 매체가 나옵니다. 실제
            판정은 진단에서 재서 정합니다.
          </p>
        </div>
        <FunnelPicker />
      </div>
    </section>
  )
}

/* ───────── 실제로 드리는 것 ───────── */
const STEPS = [
  { t: "지금 상태를 잽니다", d: "검색과 AI에서 회사가 어떻게 불리는지 같은 질문으로 여러 번 묻습니다." },
  { t: "막힌 단계를 정합니다", d: "다섯 단계 중 손님이 빠지는 곳을 찾습니다." },
  { t: "매체를 고르고 뺍니다", d: "맞는 매체만 남기고 뺀 매체는 이유를 적습니다." },
  { t: "매주 다시 잽니다", d: "같은 질문으로 다시 재서 주간 보고서로 보냅니다." },
]

export function Proof() {
  return (
    <section className="rb-proof rb-dark" id="proof">
      <div className="rb-wrap">
        <h2 className="rb-h2" style={{ maxWidth: "14em" }}>
          진단부터 매주 보고까지 실제로 이렇게 드립니다
        </h2>
        <div className="rb-proof-grid">
          <div>
            <p className="rb-lead">
              오른쪽은 저희 회사를 직접 잰 관제 화면과 주간 보고서입니다. 광고주께도 같은 도구로 같은 형식을 드립니다.
            </p>
            <ol className="rb-steps" style={{ marginTop: 36 }}>
              {STEPS.map((s, i) => (
                <li key={s.t}>
                  <b>{i + 1}</b>
                  <strong>{s.t}</strong>
                  <span>{s.d}</span>
                </li>
              ))}
            </ol>
          </div>
          <figure>
            <div className="rb-stage">
              <div className="rb-screen">
                <div className="rb-screen-bar">위즈더플래닝 관제 현황</div>
                <img
                  src="/images/rebrand/proof-dashboard.jpg"
                  alt="위즈더플래닝이 자체 개발한 AI 검색 관제 화면. 자사 점수 100점 만점에 18점"
                  width={1800}
                  height={1053}
                  loading="lazy"
                />
              </div>
              <img
                className="rb-paper"
                src="/images/rebrand/proof-report.jpg"
                alt="위즈더플래닝 AI 검색 노출 주간 보고서 첫 장"
                width={1400}
                height={1980}
                loading="lazy"
              />
            </div>
            <figcaption className="rb-small rb-stage-cap">
              자사 측정 화면입니다. 종합 점수 18점도 숨기지 않습니다.{" "}
              <Link className="rb-link" href="/how-we-measure">
                측정 방식 보기
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

/* ───────── 실측 사례 ───────── */
export function Case() {
  return (
    <section className="rb-case" id="case">
      <div className="rb-wrap">
        <div className="rb-case-head">
          <h2 className="rb-h2">ChatGPT가 모르던 정형외과, 39일 뒤</h2>
          <p className="rb-lead">
            환자가 칠 법한 질문 10개를 3번씩 물었습니다. 칸 하나가 답 한 번이고 칠한 칸은 병원 이름이 나온 답입니다.
            세 번째는 내려갔습니다. 내려간 것도 그대로 보여 드립니다.
          </p>
        </div>
        <RunGrids />
        <div className="rb-case-foot">
          <p className="rb-small" style={{ maxWidth: "52em" }}>
            ChatGPT(gpt-4o, 웹 검색), 한국 위치 기준. 계약 전 측정은 질문별 횟수만 남아 있어 칸 위치는 질문 안에서
            위부터 채웠습니다.
          </p>
          <Link className="rb-link" href="/guide/case-orthopedic-chatgpt">
            사례 원자료와 경과 보기
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ───────── 촬영·제작 ───────── */
const PHOTOS = [
  { src: "g-bar", cap: "바 매장 촬영", w: 1400, h: 934 },
  { src: "g-beer", cap: "주류 메뉴 촬영", w: 1068, h: 1600 },
  { src: "g-noodle", cap: "메뉴 촬영", w: 1600, h: 1066 },
  { src: "g-salon", cap: "미용실 촬영", w: 1600, h: 1066 },
  { src: "g-dish", cap: "요리 촬영", w: 1600, h: 1066 },
  { src: "g-studio", cap: "필라테스 스튜디오 촬영", w: 1600, h: 1066 },
  { src: "g-waterside", cap: "식당 상차림 촬영", w: 1600, h: 1066 },
  { src: "g-tree", cap: "대형 식당 홀 촬영", w: 1400, h: 934 },
]

export function Work() {
  return (
    <section className="rb-work" id="work">
      <div className="rb-wrap">
        <div className="rb-work-head">
          <h2 className="rb-h2">기획한 사람이 직접 찍고 만들고 운영합니다</h2>
          <p className="rb-lead">
            촬영팀과 개발팀, 운영팀이 한 사무실에 있습니다. 외주를 거치지 않아서 고칠 곳이 보이면 그날 고칩니다.
          </p>
        </div>
      </div>
      <div className="rb-gallery" tabIndex={0} aria-label="사내 촬영팀 작업 사진">
        {PHOTOS.map((p) => (
          <figure key={p.src}>
            <img
              src={`/images/rebrand/${p.src}.jpg`}
              alt={`위즈더플래닝 사내 촬영팀 작업: ${p.cap}`}
              width={p.w}
              height={p.h}
              loading="lazy"
            />
            <figcaption>{p.cap}</figcaption>
          </figure>
        ))}
      </div>
      <div className="rb-wrap">
        <p className="rb-small rb-gallery-hint">
          옆으로 넘겨 보세요. 사내 촬영팀이 광고주 매장에서 찍은 사진이고 상호는 싣지 않습니다.
        </p>
        <div className="rb-teams">
          {TEAMS.map((t) => (
            <div className="rb-team" key={t.team}>
              <h3>{t.team}</h3>
              <p>{t.what}</p>
              <p>{t.out}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 누구와 ───────── */
function ClinicMock() {
  return (
    <div className="rb-mock" aria-hidden="true">
      <div className="rb-mock-card">
        <span className="rb-mock-q">야간 진료하는 정형외과 추천해 줘</span>
        <div className="rb-mock-a">
          <i />
          <i />
          <b>우리 병원, 평일 밤 9시까지 진료</b>
          <i />
        </div>
      </div>
    </div>
  )
}

const TILE_MEDIA: Record<string, { src?: string; ui?: boolean; alt?: string }> = {
  기업: { src: "/images/rebrand/proof-prompts.jpg", ui: true, alt: "기업 고객에게 드리는 프롬프트별 AI 노출 측정 화면" },
  "로컬 사업자": { src: "/images/rebrand/g-tree.jpg", alt: "위즈더플래닝이 촬영한 로컬 식당 홀" },
  "병·의원": {},
  브랜드: { src: "/images/rebrand/g-glasses.jpg", alt: "위즈더플래닝이 촬영한 안경 제품 사진" },
}

export function Who() {
  return (
    <section className="rb-who" id="who">
      <div className="rb-wrap">
        <div className="rb-funnel-head" style={{ marginBottom: 0 }}>
          <h2 className="rb-h2">같은 단계여도 회사마다 걸리는 데가 다릅니다</h2>
          <p className="rb-lead">
            대표가 바로 정하는 매장과 결재가 여러 번 오가는 조직은 같은 순서로 가도 말과 속도가 다릅니다. 시작하는
            문을 넷으로 나눴습니다.
          </p>
        </div>
        <div className="rb-tiles">
          {CLIENTS.map((c) => {
            const m = TILE_MEDIA[c.name] ?? {}
            return (
              <Link key={c.name} href={c.href} className="rb-tile">
                <div className="rb-tile-img">
                  {m.src ? (
                    <img src={m.src} alt={m.alt ?? ""} loading="lazy" className={m.ui ? "is-ui" : undefined} />
                  ) : (
                    <ClinicMock />
                  )}
                </div>
                <div className="rb-tile-text">
                  <h3>{c.name}</h3>
                  <span className="rb-tile-go">{c.go}</span>
                  <p>{c.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────── AI 에이전트 ───────── */
export function Ax() {
  return (
    <section className="rb-ax rb-dark" id="ax">
      <div className="rb-wrap rb-ax-grid">
        <div>
          <h2 className="rb-h2">AI 에이전트가 먼저 일하고 사람이 확인하고 정합니다</h2>
          <p className="rb-lead" style={{ marginTop: 24 }}>
            2016년에 문을 열었습니다. 원고와 측정, 제안서, 영상 편집은 에이전트가 먼저 하고 사람은 확인과 결정을
            맡습니다. 적은 인원으로도 매주 다시 재는 일을 빠뜨리지 않는 이유입니다.
          </p>
          <div className="rb-ax-nums">
            <div>
              <b>19명</b>
              <span>임직원, 2026년 10월</span>
            </div>
            <div>
              <b className="is-blue">{AGENTS.length}개</b>
              <span>업무에 쓰는 AI 에이전트</span>
            </div>
          </div>
        </div>
        <ul className="rb-agents">
          {AGENTS.map((a) => (
            <li key={a.name}>
              <strong>{a.name}</strong>
              <em>{a.status}</em>
              <span>
                {a.does}. {a.human}.
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ───────── 관계사 플랫폼 ───────── */
export function Family() {
  return (
    <section className="rb-family" id="family">
      <div className="rb-wrap">
        <div className="rb-funnel-head" style={{ marginBottom: 0 }}>
          <h2 className="rb-h2">관계사 (주)위플이 운영하는 서비스 둘</h2>
          <p className="rb-lead">
            대행으로 배운 일을 소프트웨어로 만들었습니다. 위즈더플래닝과는 다른 법인이 운영하고 숫자도 따로 셉니다.
          </p>
        </div>
        <div className="rb-family-grid">
          {PLATFORMS.map((p) => (
            <div className="rb-brand" key={p.name}>
              <div className="rb-brand-top">
                <h3>{p.name}</h3>
                <span>{p.kind}</span>
              </div>
              <p>{p.desc}</p>
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
      <div className="rb-wrap rb-faq-grid">
        <div>
          <h2 className="rb-h2">상담 전에 많이 물어보시는 것</h2>
          <p className="rb-lead" style={{ marginTop: 20 }}>
            여기 없는 질문은 카카오톡 상담으로 남겨 주세요.
          </p>
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
        <h2>지금 몇 단계인지부터 같이 봅니다</h2>
        <div className="rb-close-grid">
          <div>
            <h3>기업과 브랜드</h3>
            <p>
              회사 메일로 제안 요청을 보내 주시면 사전미팅에서 과제를 정리하고 단계에 맞춘 기획서를 드립니다. 월 운영은
              300만 원부터 최소 3개월입니다.
            </p>
            <a className="rb-btn is-white" href="/business/contact">
              제안 요청 보내기
            </a>
          </div>
          <div>
            <h3>로컬 사업자와 병·의원</h3>
            <p>가게나 병원 이름만 주시면 지금 검색과 AI에서 어떻게 불리는지 재서 보내 드립니다. 받고 끝내셔도 됩니다.</p>
            <a className="rb-btn is-line-white" href="/diagnosis">
              무료 진단 신청
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
    <footer className="rb-foot">
      <div className="rb-wrap">
        <div className="rb-foot-cols">
          <div className="rb-foot-co">
            <b>위즈더플래닝</b>
            <p>
              (주)위즈더플래닝 대표 정현우
              <br />
              서울 금천구 가산디지털로 178 2518, 2519호
              <br />
              사업자등록번호 668-81-00391
              <br />
              1670-0704, wiz@wiztheplanning.com
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
