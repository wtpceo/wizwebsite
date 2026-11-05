import { Fragment, type CSSProperties, type ReactNode } from "react"

// 글자를 서버에서 미리 쪼개 둔다(런타임 split-text 아님 — HTML에 글이 그대로 있다)
type V = CSSProperties & Record<`--${string}`, string | number>

/** 낱말 단위 키네틱 자막 — 줄은 \n */
export function Words({ text, start = 0 }: { text: string; start?: number }) {
  let i = start
  const lines = text.split("\n")
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
        <span className="ln">
          {line.split(" ").map((w, wi, arr) => {
            const n = i++
            return (
              <span key={wi}>
                <span className="w" style={{ "--i": n } as V}>
                  {w}
                </span>
                {wi < arr.length - 1 ? " " : null}
              </span>
            )
          })}
        </span>
        {/* 줄 사이 띄어쓰기 — 화면은 줄로 나뉘어도 HTML 글은 「…검색 맨 위로」처럼 낱말이 붙지 않게(검색·AI가 읽는 글) */}
        {li < lines.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  )
}

/** 글자 하나씩 올라오는 자막 */
export function Chars({ text, start = 0 }: { text: string; start?: number }) {
  let i = start
  const lines = text.split("\n")
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
        <span className="ln">
          {line.split(" ").map((word, wi, words) => (
            <span key={wi}>
              {/* 낱말 안에서는 줄이 꺾이지 않게 한 덩어리로 */}
              <span className="wd">
                {Array.from(word).map((c, ci) => {
                  const n = i++
                  return (
                    <span key={ci} className="ch" style={{ "--i": n } as V}>
                      {c}
                    </span>
                  )
                })}
              </span>
              {wi < words.length - 1 ? " " : null}
            </span>
          ))}
        </span>
        {li < lines.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  )
}

/** 컷 한 장 */
export function Cut({
  id,
  no,
  ch,
  tone,
  fx,
  label,
  className,
  children,
}: {
  id: string
  no: number
  ch: number
  tone: "w" | "c" | "k" | "b"
  fx?: string
  label: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`cut t-${tone}${fx ? ` fx-${fx}` : ""}${className ? ` ${className}` : ""}`}
      data-no={no}
      data-ch={ch}
      data-tone={tone}
      aria-label={label}
    >
      {children}
    </section>
  )
}

export function Ex({ children = "예시 화면" }: { children?: ReactNode }) {
  return <small className="ex">{children}</small>
}

export function vars(o: Record<string, string | number>): V {
  const s: Record<string, string | number> = {}
  for (const k of Object.keys(o)) s[`--${k}`] = o[k]
  return s as V
}

/** 실적 줄의 큰 숫자(26,456 · 1,313,861처럼 세 자리 이상)만 0부터 올라가게 감싼다. 날짜(2026.8.12)는 그대로 — 11-05 사장님 「숫자가 올라가서 멈추는 모션 · 필요한 곳 계속」 */
export function Nums({ text }: { text: string }) {
  const parts = text.split(/(\d{1,3}(?:,\d{3})+(?![.\d])|\d{3,}(?![.\d]))/)
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <span key={i} data-count={p.replace(/,/g, "")}>
            {p}
          </span>
        ) : (
          p
        ),
      )}
    </>
  )
}
