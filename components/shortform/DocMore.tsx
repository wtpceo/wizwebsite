import Link from "next/link"
import { Sec } from "./DocParts"
import { Nums } from "./parts"
import { CONSULT, CONSULT_LEAD, type CaseCard, type More } from "./details"

// 소개 쪽 보강 칸(11-05). 쓰는 곳: ServiceDoc·SolutionDoc. 글은 details.ts 의 MORE.

/** 사례 카드 — 문제 → 한 일 → 다시 잰 숫자. 내려간 숫자·못 잰 것도 같은 줄에 적는다 */
export function CaseBox({ c, down, recs = [], recNote }: { c: CaseCard; down?: [string, string]; recs?: string[]; recNote?: string }) {
  return (
    <article className="dp-case">
      <p className="dp-case-h">
        <span>사례</span>
        <span>{c.when}</span>
      </p>
      <h3>{c.t}</h3>
      <dl>
        {c.rows.map(([k, big, x, low]) => (
          <div key={k} className={low ? "low" : undefined}>
            <dt>{k}</dt>
            <dd className="big">{big}</dd>
            <dd>{x}</dd>
          </div>
        ))}
      </dl>
      <p className="dp-case-f">
        <small>{c.src}</small>
        <Link href={c.href}>사례 글 읽기 →</Link>
      </p>
      {down ? (
        <p className="dp-case-d">
          <b>내려간 기록</b>
          {down[0]} <Link href={down[1]}>글 보기 →</Link>
        </p>
      ) : null}
      {recs.length ? (
        <div className="dp-case-r">
          <b>다른 성과</b>
          <ul>
            {recs.map((r) => (
              <li key={r}>
                <Nums text={r} />
              </li>
            ))}
          </ul>
          {recNote ? (
            <small>
              {recNote} <Link href="/how-we-measure">측정 방식 보기 →</Link>
            </small>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

export function TimeBox({ t }: { t: NonNullable<More["time"]> }) {
  return (
    <div className="dp-time">
      <h3>{t.q}</h3>
      <dl>
        {t.rows.map(([k, x]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{x}</dd>
          </div>
        ))}
      </dl>
      <small>{t.src}</small>
    </div>
  )
}

/** 받는 것 견본 — 값은 예시. 휴대폰에서는 줄마다 칸 이름을 붙여 세로로 편다 */
export function SampleBox({ s }: { s: NonNullable<More["sample"]> }) {
  return (
    <div className="dp-smp">
      <h3>{s.t}</h3>
      <table>
        <thead>
          <tr>
            {s.head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {s.rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={s.head[i]} data-l={s.head[i]}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <small>{s.note}</small>
    </div>
  )
}

export function NotFit({ items }: { items: [string, string][] }) {
  return (
    <Sec q="진행이 어려운 경우">
      <ul className="dp-nf">
        {items.map(([t, x]) => (
          <li key={t}>
            <b>{t}</b>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </Sec>
  )
}

export function Reads({ items }: { items: [string, string][] }) {
  return (
    <nav className="dp-reads" aria-label="이어 읽을 글">
      <h3>이어서 읽을 인사이트</h3>
      <ul>
        {items.map(([href, t]) => (
          <li key={href}>
            <Link href={href}>{t} →</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Consult({ items }: { items?: [string, string][] }) {
  return (
    <Sec q="문의 후 진행 순서">
      {items ? null : <p>{CONSULT_LEAD}</p>}
      <ol className="dp-num">
        {(items || CONSULT).map(([t, x]) => (
          <li key={t}>
            <b>{t}</b>
            <span>{x}</span>
          </li>
        ))}
      </ol>
    </Sec>
  )
}

/** 업종별 순서 — 로컬 쪽 */
export function Month({ m }: { m: NonNullable<More["month"]> }) {
  return (
    <Sec q="업종별 먼저 할 일">
      <ul className="dp-mon">
        {m.rows.map(([k, seq, x]) => (
          <li key={k}>
            <b>{k}</b>
            <div>
              <strong>{seq}</strong>
              <span>{x}</span>
            </div>
          </li>
        ))}
      </ul>
      <small className="dp-mon-n">{m.src}</small>
    </Sec>
  )
}
