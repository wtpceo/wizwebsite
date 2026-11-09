import type { ReactNode } from "react"
import { Chars } from "./parts"

/**
 * 인사이트 쪽(칼럼·위즈 극장·측정 방식) 첫 화면. 11-08 대표 「인사이트 메뉴도 디자인 통일」.
 * 서비스 페이지와 같은 문법: 사진 벽 위 왼쪽 정렬 큰 제목, 키워드 머리말은 H1 안 <small>, 파란 띠, 한 줄, 부제, 버튼.
 * 벽은 sf.js(data-wall) 대신 이 쪽 그림(칼럼 표지·극장 포스터·관제 화면)으로 서버에서 바로 그린다. 홈 벽과 같은 .bgt·.bgc·.bgk·.rl 구조.
 */
export default function InsightHero({
  label,
  kw,
  text,
  mark,
  era,
  lead,
  imgs,
  btn,
  cue,
  children,
}: {
  label: string
  kw: string
  text: string
  mark?: string
  era?: string
  lead: ReactNode
  imgs: string[]
  btn?: { href: string; label: string }
  cue?: { href: string; label: string }
  children?: ReactNode
}) {
  const cols = Array.from({ length: 6 }, (_, c) => imgs.filter((_, i) => i % 6 === c))
  return (
    <section className="dp-hero geo-hero ix-hero ih" aria-label={label}>
      <div className="dp-bg" aria-hidden="true">
        <div className="bgt">
          {cols.map((col, c) => {
            const set = col.length ? col : imgs.slice(c, c + 3)
            const half = [...set, ...set]
            return (
              <div className="bgc" key={c}>
                <div className="bgk">
                  {[...half, ...half].map((src, i) => (
                    <div className="rl" key={i}>
                      <img src={src} alt="" loading={i < 3 ? "eager" : "lazy"} decoding="async" />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="dp-veil" aria-hidden="true" />
      <div className="dp-w geo-hero-in">
        <h1 aria-label={`${kw}: ${text.replace(/\n/g, " ")}`}>
          <small className="ix-kw">{kw}</small> <Chars text={text} mark={mark} />
        </h1>
        {era ? <p className="vx-era">{era}</p> : null}
        <p className="dp-lead">{lead}</p>
        {btn ? (
          <div className="dp-btns">
            <a className="p1" href={btn.href}>
              {btn.label}
            </a>
          </div>
        ) : null}
        {children}
      </div>
      {cue ? (
        <a className="ix-cue" href={cue.href} aria-label={`${cue.label}로 내려가기`}>
          <span>{cue.label}</span>
          <i aria-hidden="true" />
        </a>
      ) : null}
    </section>
  )
}
