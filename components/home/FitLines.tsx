"use client"

import { createElement, useLayoutEffect, useRef } from "react"
import s from "./blueprint.module.css"

// 줄마다 폭에 꽉 차게 글자 크기를 맞추는 제목. 서버 렌더에서는 CSS clamp 크기로 나가고(크롤러·JS 꺼진 브라우저),
// 글꼴이 준비된 뒤 각 줄을 100px로 재서 컨테이너 폭에 맞춘다. max(데스크톱)·maxMo(모바일)가 상한이다.
// 폰에서 30px 밑으로 내려가야 맞는 줄은 줄바꿈을 허용한다(시안 shared.js와 같은 규칙).
type Props = {
  as?: "h1" | "h2"
  lines: string[]
  max: number
  maxMo: number
  id?: string
  className?: string
}

export default function FitLines({ as = "h2", lines, max, maxMo, id, className }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-ln]"))

    const fit = () => {
      const mobile = window.innerWidth < 768
      const cap = mobile ? maxMo : max
      const W = el.clientWidth
      if (!W) return
      spans.forEach((sp) => {
        sp.style.display = "inline-block"
        sp.style.whiteSpace = "nowrap"
        sp.style.fontSize = "100px"
        const w = sp.getBoundingClientRect().width || 1
        const fs = Math.min(cap, (100 * W) / w)
        if (mobile && fs < 30) {
          sp.style.fontSize = "30px"
          sp.style.whiteSpace = "normal"
        } else {
          sp.style.fontSize = `${fs}px`
        }
        sp.style.display = "block"
      })
    }

    let alive = true
    const ready = typeof document !== "undefined" && document.fonts ? document.fonts.ready : Promise.resolve()
    ready.then(() => alive && fit())
    const ro = new ResizeObserver(() => fit())
    ro.observe(el)
    return () => {
      alive = false
      ro.disconnect()
    }
  }, [max, maxMo, lines])

  return createElement(
    as,
    { ref, id, className },
    lines.map((l, i) => (
      <span key={i} data-ln="" className={s.ln}>
        {l}
      </span>
    )),
  )
}
