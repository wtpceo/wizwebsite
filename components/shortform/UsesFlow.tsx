"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

// 11-11 대표: 「2차 활용처 섹션이 명확하게 그려지지 않는다. 모션그래픽 같은 걸로, 이렇게 활용된다는 걸 더 명료하게」(로컬 시안)
// 왼쪽에 '원본 한 편'을 크게 세우고, 박자마다 그 원본이 오른쪽 여섯 곳 중 하나로 날아가 꽂힌다.
// 날아간 곳만 밝게 커지고 이름이 원본 아래에 크게 뜬다. 여섯 곳을 한 바퀴 돌고 반복한다.
// 화면 밖에 있으면 멈추고, 카드를 누르거나 마우스를 올리면 그 자리로 바로 넘어간다.

const BEAT = 1700

export default function UsesFlow({ src, titles, items }: { src: string; titles: string[]; items: ReactNode[] }) {
  const root = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(0)
  const [live, setLive] = useState(false)
  const hold = useRef(false)
  const first = useRef(true)

  // 화면에 보일 때만 돈다
  useEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let timer = 0
    const io = new IntersectionObserver(
      ([e]) => {
        window.clearInterval(timer)
        if (e.isIntersecting) {
          setLive(true)
          timer = window.setInterval(() => {
            if (!hold.current) setOn((v) => (v + 1) % titles.length)
          }, BEAT)
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      window.clearInterval(timer)
    }
  }, [titles.length])

  // 원본에서 지금 자리로 사진 한 장이 날아간다
  useEffect(() => {
    const el = root.current
    if (!el || !live) return
    if (first.current) {
      first.current = false
    }
    const fly = el.querySelector<HTMLElement>(".ixu2-fly")
    const from = el.querySelector<HTMLElement>(".ixu2-src figure")
    const to = el.querySelectorAll<HTMLElement>(".ixu-g > li")[on]?.querySelector<HTMLElement>(".ixu-m") || el.querySelectorAll<HTMLElement>(".ixu-g > li")[on]
    if (!fly || !from || !to) return
    const base = el.getBoundingClientRect(), a = from.getBoundingClientRect(), b = to.getBoundingClientRect()
    const fx = a.left - base.left, fy = a.top - base.top
    const tx = b.left - base.left + b.width / 2 - a.width / 2, ty = b.top - base.top + b.height / 2 - a.height / 2
    const sc = Math.min(b.height / a.height, 0.55)
    fly.style.width = `${a.width}px`
    fly.style.height = `${a.height}px`
    fly.animate(
      [
        { transform: `translate(${fx}px, ${fy}px) scale(1) rotate(0deg)`, opacity: 0.95 },
        { transform: `translate(${(fx + tx) / 2}px, ${Math.min(fy, ty) - 46}px) scale(${(1 + sc) / 2}) rotate(-7deg)`, opacity: 0.95, offset: 0.55 },
        { transform: `translate(${tx}px, ${ty}px) scale(${sc}) rotate(0deg)`, opacity: 0 },
      ],
      { duration: 620, easing: "cubic-bezier(.3, .7, .2, 1)", fill: "both" },
    )
  }, [on, live])

  const pick = (i: number, h: boolean) => {
    hold.current = h
    setOn(i)
  }

  return (
    <div className={`ixu2${live ? " ixu2-live" : ""}`} ref={root}>
      <div className="ixu2-src">
        <em>원본 한 편</em>
        <figure>
          <img src={src} alt="" loading="lazy" decoding="async" width={720} height={1280} />
          <i className="ixu-play" aria-hidden="true" />
        </figure>
        <p className="ixu2-now" aria-hidden="true">
          <small>지금 쓰이는 곳</small>
          <b key={on}>{titles[on]}</b>
        </p>
        <ol className="ixu2-dots" aria-hidden="true">
          {titles.map((t, i) => (
            <li key={t} className={i === on ? "on" : undefined} />
          ))}
        </ol>
      </div>
      <ul className="ixu-g" aria-label="협업 콘텐츠를 다시 쓰는 곳">
        {items.map((it, i) => (
          <li
            key={i}
            className={i === on ? "on" : undefined}
            onMouseEnter={() => pick(i, true)}
            onMouseLeave={() => (hold.current = false)}
            onClick={() => pick(i, false)}
          >
            {it}
          </li>
        ))}
      </ul>
      <img className="ixu2-fly" src={src} alt="" aria-hidden="true" />
    </div>
  )
}
