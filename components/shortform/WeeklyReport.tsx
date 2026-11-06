import { vars } from "./parts"

// 실제 주간 리포트 한 장을 화면으로 다시 그린 것(11-05).
// 숫자·날짜·채널은 원본 보고서(public/sf/img/report.jpg) 그대로. 업체명·글 제목은 원본에서도 가린 것이라 칸에서 뺐다.
const KPI: [string, string, string][] = [
  ["7", "편", "이번 주 발행"],
  ["24", "편", "누적 발행 · 9/16 계약 시작부터"],
  ["12", "편", "티스토리 누적"],
]
const POSTS: [string, "n" | "t"][] = [
  ["10/23", "t"],
  ["10/26", "n"],
  ["10/26", "t"],
  ["10/27", "t"],
  ["10/28", "n"],
  ["10/30", "n"],
  ["10/30", "t"],
]
const DAYS = ["10/23", "10/26", "10/27", "10/28", "10/29", "10/30"]
const CH = { n: "네이버", t: "티스토리" }

export default function WeeklyReport() {
  return (
    <figure className="wr" aria-label="주간 리포트 한 장(고객사명 비공개)">
      <div className="wr-hd">
        <div>
          <small>주간 리포트 · 고객사명 비공개</small>
          <b>1주차: 네이버 3편 · 티스토리 4편</b>
        </div>
        <p>
          리포트일 2026. 10. 31.
          <br />
          기간 10. 26. ~ 10. 30.
        </p>
      </div>
      <div className="wr-kp">
        {KPI.map(([v, u, l], i) => (
          <div key={l} className="wr-k" style={vars({ i })}>
            <strong>
              <span data-count={v}>{v}</span>
              <em>{u}</em>
            </strong>
            <span>{l}</span>
          </div>
        ))}
        <div className="wr-k wr-ai" style={vars({ i: 3 })}>
          <svg viewBox="0 0 36 36" aria-hidden="true">
            <circle cx="18" cy="18" r="15.5" className="wr-rb" />
            <circle cx="18" cy="18" r="15.5" className="wr-rf" pathLength="30" strokeDasharray="29 30" transform="rotate(-90 18 18)" />
          </svg>
          <div>
            <strong>
              <span data-count="29">29</span>
              <em>/ 30</em>
            </strong>
            <span>이번 주 키워드 질문 30개 중 AI 답변에 브랜드가 나온 질문 · 홈페이지가 출처로 뜬 답 12개</span>
          </div>
        </div>
      </div>
      <div className="wr-mix" aria-label="채널별 발행 수">
        <div className="wr-bar">
          <i className="n" style={{ width: "42.86%" }} />
          <i className="t" style={{ width: "57.14%" }} />
        </div>
        <p>
          <span className="n">네이버 블로그 3편</span>
          <span className="t">티스토리 4편</span>
        </p>
      </div>
      <div className="wr-tl">
        <p className="wr-h">이번 주 글 발행</p>
        <ol>
          {DAYS.map((d, i) => {
            const ps = POSTS.filter(([x]) => x === d)
            return (
              <li key={d} style={vars({ i })}>
                <small>{d}</small>
                {ps.map(([, c], j) => (
                  <span key={j} className={c}>
                    {CH[c]}
                  </span>
                ))}
              </li>
            )
          })}
        </ol>
      </div>
      <figcaption>
        <span>실제 주간 리포트 재구성 (고객사명 비공개) · 7편 모두 발행 완료</span>
        <span>위즈더플래닝</span>
      </figcaption>
    </figure>
  )
}
