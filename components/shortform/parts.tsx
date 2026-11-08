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

/** 글자 하나씩 올라오는 자막.
 *  mark를 주면 그 어구(예: "쉬지 않고")의 낱말들을 <span class="mk"> 하나로 묶는다. 강조 띠를 한 상자에 그리려고(낱말마다 그리면 대체 글꼴 탓에 높이가 달라 띠가 어긋남). mark가 없으면 예전과 똑같이 그린다 */
export function Chars({ text, start = 0, mark }: { text: string; start?: number; mark?: string }) {
  let i = start
  const lines = text.split("\n")
  const mw = mark ? mark.split(" ") : []
  const word = (w: string) => (
    // 낱말 안에서는 줄이 꺾이지 않게 한 덩어리로
    <span className="wd">
      {Array.from(w).map((c, ci) => {
        const n = i++
        return (
          <span key={ci} className="ch" style={{ "--i": n } as V}>
            {c}
          </span>
        )
      })}
    </span>
  )
  return (
    <>
      {lines.map((line, li) => {
        const words = line.split(" ")
        let k = -1
        // 마지막 낱말은 앞부분만 맞아도 됨(예: mark "소재 싸움" → 「싸움입니다」의 「싸움」까지만 띠, 「입니다」는 띠 밖에 바로 붙임)
        if (mw.length) k = words.findIndex((_, x) => mw.every((m, y) => (y === mw.length - 1 ? (words[x + y] ?? "").startsWith(m) : words[x + y] === m)))
        const out: ReactNode[] = []
        words.forEach((w, wi) => {
          const tail = wi < words.length - 1 ? " " : null
          if (k >= 0 && wi === k) {
            const grp = words.slice(k, k + mw.length)
            const last = grp[grp.length - 1]
            const rest = last.slice(mw[mw.length - 1].length)
            grp[grp.length - 1] = mw[mw.length - 1]
            out.push(
              <span key={wi}>
                <span className="mk">
                  {grp.map((g, gi) => (
                    <span key={gi}>
                      {word(g)}
                      {gi < grp.length - 1 ? " " : null}
                    </span>
                  ))}
                </span>
                {rest ? word(rest) : null}
                {k + mw.length < words.length ? " " : null}
              </span>,
            )
          } else if (k >= 0 && wi > k && wi < k + mw.length) {
            return
          } else {
            out.push(
              <span key={wi}>
                {word(w)}
                {tail}
              </span>,
            )
          }
        })
        return (
          <Fragment key={li}>
            <span className="ln">{out}</span>
            {li < lines.length - 1 ? " " : null}
          </Fragment>
        )
      })}
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
  const parts = text.split(/((?<![\d.,])(?:\d{1,3}(?:,\d{3})+|\d{3,})(?![.\d,]|위|년))/)
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
