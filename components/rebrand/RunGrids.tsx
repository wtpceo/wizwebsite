"use client"

import { useEffect, useRef, useState } from "react"
import { RUNS } from "@/lib/rebrand-data"

// 30칸 실측 격자. 화면에 들어오면 칸이 순서대로 칠해진다.
export default function RunGrids() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!("IntersectionObserver" in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="rb-grids" ref={ref}>
      {RUNS.map((r, gi) => {
        const cells = r.grid.flat()
        const on = cells.filter(Boolean).length
        return (
          <figure key={r.date} className={`rb-grid${r.peak ? " is-peak" : ""}`}>
            <figcaption className="rb-grid-top">
              <span>
                {r.label}
                <br />
                {r.date}
              </span>
              <b>
                {on}
                <small>/30</small>
              </b>
            </figcaption>
            <div className={`rb-cells${inView ? " is-in" : ""}`} role="img" aria-label={`30번 물어 ${on}번 이름이 나옴`}>
              {cells.map((v, i) => (
                <i
                  key={i}
                  className={v ? "is-on" : undefined}
                  style={{ ["--d" as string]: `${gi * 0.5 + i * 0.022}s` }}
                />
              ))}
            </div>
            <p>{r.note}</p>
          </figure>
        )
      })}
    </div>
  )
}
