"use client"
import { useEffect, useState } from "react"

/**
 * realGEO 실제 화면 코너벨.
 * 11-07 대표: 캡처가 돌아가면서 가운데로 오고, 양옆은 원을 그리듯 휘어서 대기하다가 다시 돌아온다.
 * 가운데 한 장만 평평하게 크게, 좌우는 rotateY 로 안쪽을 향해 휘고 뒤로 물러난다.
 * 3.6초마다 다음 장. 마우스를 올리면 멈춘다. 옆 장을 누르면 그 장이 가운데로 온다.
 */
type Slide = [string, string, string, string]

export default function GeoToolReel({ slides }: { slides: Slide[] }) {
  const n = slides.length
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => setI((v) => (v + 1) % n), 3600)
    return () => clearInterval(t)
  }, [paused, n])

  const [title, desc] = slides[i]

  return (
    <div className="geo-reel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="geo-reel-stage">
        {slides.map(([t, , img, alt], k) => {
          let d = k - i
          if (d > n / 2) d -= n
          if (d < -n / 2) d += n
          const a = Math.abs(d)
          return (
            <figure
              key={img}
              className={d === 0 ? "on" : a > 3 ? "off" : ""}
              style={{ ["--d" as string]: d, ["--a" as string]: a }}
              aria-hidden={d !== 0}
              onClick={() => setI(k)}
              title={d === 0 ? undefined : t}
            >
              <img src={img} alt={d === 0 ? alt : ""} loading={a <= 1 ? "eager" : "lazy"} width={1800} height={1125} draggable={false} />
            </figure>
          )
        })}
      </div>
      <div className="geo-reel-cap" aria-live="polite">
        <em>
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </em>
        <b>{title}</b>
        <p>
          {desc.split("\n").map((line, j) => (
            <span key={j}>
              {j > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>
      </div>
      <div className="geo-reel-nav">
        <button type="button" onClick={() => setI((v) => (v - 1 + n) % n)} aria-label="이전 화면">
          ←
        </button>
        <ol>
          {slides.map(([t], k) => (
            <li key={t}>
              <button type="button" className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={t} aria-current={k === i ? "true" : undefined} />
            </li>
          ))}
        </ol>
        <button type="button" onClick={() => setI((v) => (v + 1) % n)} aria-label="다음 화면">
          →
        </button>
      </div>
    </div>
  )
}
