"use client"

import { useEffect, useRef } from "react"

// 11-11 대표: 「'당신의 브랜드를 분석한 제안서부터 받아 보세요'가 여기저기서 날아와 합쳐졌다가 흩어지고,
//  '섭외부터 기획 실행 완벽한 성과까지 만들어내는'이 여러 효과로 나온 뒤, 마지막에 '위즈더플래닝'이 딱 나타나고 반복」
// 로컬 시안. 검색엔진·화면 낭독기가 읽는 제목은 옆의 실제 <h1>이 그대로 맡고, 이 무대는 보이는 움직임만 맡는다(aria-hidden).
// 시간은 한 줄(t초)로만 흐른다. 움직임 줄이기를 켠 사람에게는 멈춘 제목만 보여 준다.

const L1 = "당신의 브랜드를 분석한"
const L2 = "제안서부터 받아 보세요"
const HL = [9, 12] // L1에서 '분석한' 자리(파란 칸)
const T = 9.4 // 11-11 대표 「모일 때·흩어질 때·나머지도 더 속도감 있게」
const WORDS: { t: number; d: number; text: string; fx: "up" | "zoom" | "flip" | "wipe" | "track" }[] = [
  { t: 2.95, d: 0.72, text: "섭외부터", fx: "up" },
  { t: 3.62, d: 0.66, text: "기획", fx: "zoom" },
  { t: 4.24, d: 0.66, text: "실행", fx: "flip" },
  { t: 4.86, d: 0.92, text: "완벽한 성과까지", fx: "wipe" },
]
const BRAND_T = 5.85
const BRAND_OUT = 8.8

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a))
const outCubic = (k: number) => 1 - Math.pow(1 - k, 3)
const inCubic = (k: number) => k * k * k
const outExpo = (k: number) => (k >= 1 ? 1 : 1 - Math.pow(2, -10 * k))
const outBack = (k: number) => 1 + 2.4 * Math.pow(k - 1, 3) + 1.4 * Math.pow(k - 1, 2)
// 글자마다 늘 같은 방향으로 날아오게 번호로 만든 가짜 난수
const rnd = (i: number, s: number) => {
  const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453
  return x - Math.floor(x)
}

export default function HeroKinetic() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const chars = [...el.querySelectorAll<HTMLElement>(".hk-ch")]
    const words = [...el.querySelectorAll<HTMLElement>(".hk-w")]
    const brand = el.querySelector<HTMLElement>(".hk-brand")!
    const bar = el.querySelector<HTMLElement>(".hk-bar")!
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const frame = (t: number) => {
      // ① 글자가 사방에서 날아와 제목이 되고, 잠깐 머문 뒤 흩어진다
      chars.forEach((c, i) => {
        const a = outExpo(seg(t, 0.08 + i * 0.022, 0.58 + i * 0.022))
        const z = inCubic(seg(t, 2.5 + rnd(i, 9) * 0.1, 2.9))
        const ang = rnd(i, 1) * Math.PI * 2, dist = 420 + rnd(i, 2) * 520
        const ang2 = rnd(i, 3) * Math.PI * 2, dist2 = 380 + rnd(i, 4) * 620
        const x = Math.cos(ang) * dist * (1 - a) + Math.cos(ang2) * dist2 * z
        const y = Math.sin(ang) * dist * 0.62 * (1 - a) + Math.sin(ang2) * dist2 * 0.62 * z
        const r = (rnd(i, 5) - 0.5) * 220 * (1 - a) + (rnd(i, 6) - 0.5) * 260 * z
        const s = 1 + (rnd(i, 7) * 1.6 - 0.4) * (1 - a) + rnd(i, 8) * 0.9 * z
        c.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${r.toFixed(1)}deg) scale(${s.toFixed(3)})`
        c.style.opacity = String(clamp(a * 1.4) * (1 - z))
        c.style.filter = a < 1 || z > 0 ? `blur(${((1 - a) * 6 + z * 5).toFixed(1)}px)` : "none"
      })
      // ② 낱말이 하나씩, 저마다 다른 효과로
      words.forEach((w, i) => {
        const { t: t0, d, fx } = WORDS[i]
        const a = seg(t, t0, t0 + 0.24), z = seg(t, t0 + d - 0.16, t0 + d)
        const on = t >= t0 && t < t0 + d
        let tf = "", op = on ? 1 : 0, extra = ""
        if (fx === "up") { tf = `translateY(${(1 - outBack(a)) * 90 - inCubic(z) * 70}%)`; op = on ? clamp(a * 2) * (1 - z) : 0 }
        if (fx === "zoom") { tf = `scale(${3.2 - 2.2 * outExpo(a) + inCubic(z) * 0.5})`; op = on ? clamp(a * 2) * (1 - z) : 0; extra = `blur(${((1 - outExpo(a)) * 14 + z * 6).toFixed(1)}px)` }
        if (fx === "flip") { tf = `perspective(900px) rotateX(${(1 - outBack(a)) * 96 + inCubic(z) * -80}deg)`; op = on ? clamp(a * 2.5) * (1 - z) : 0 }
        if (fx === "wipe") { w.style.clipPath = `inset(0 ${((1 - outCubic(a)) * 100).toFixed(1)}% 0 ${(inCubic(z) * 100).toFixed(1)}%)`; tf = `translateX(${(1 - outCubic(a)) * -30}px)` }
        if (fx === "track") { w.style.letterSpacing = `${(0.9 * (1 - outCubic(a)) - 0.035).toFixed(3)}em`; tf = `translateY(${inCubic(z) * -40}%)`; op = on ? clamp(a * 1.6) * (1 - z) : 0 }
        w.style.transform = tf
        w.style.opacity = String(op)
        w.style.filter = extra || "none"
      })
      // ③ '위즈더플래닝'이 멀리서 날아와 쿵 박힌다: 가속하며 내리꽂히고, 닿는 순간 눌렸다가 튕기며 세게 흔들린다. 그 뒤 밑줄이 그어진다
      const FLY = 0.24, hit = BRAND_T + FLY
      const f = inCubic(seg(t, BRAND_T, hit)), bz = inCubic(seg(t, BRAND_OUT, BRAND_OUT + 0.3))
      const k = seg(t, hit, hit + 0.85) // 닿은 뒤 0.85초 동안 크게 흔들리다 멎는다(11-11 대표 「조금 더 많이 흔들리면서 고정」)
      const decay = 1 - k
      const shakeX = t >= hit && k < 1 ? Math.sin((t - hit) * 78) * 34 * decay * decay : 0
      const shakeY = t >= hit && k < 1 ? Math.cos((t - hit) * 64) * 18 * decay * decay : 0
      const shakeR = t >= hit && k < 1 ? Math.sin((t - hit) * 52) * 4.5 * decay * decay : 0
      const squashY = t >= hit && k < 1 ? 1 - 0.26 * Math.cos(k * Math.PI * 5) * decay * decay : 1
      const squashX = t >= hit && k < 1 ? 1 + 0.13 * Math.cos(k * Math.PI * 5) * decay * decay : 1
      const sc = 7 - 6 * f
      brand.style.transform = `translate(${((1 - f) * 260 + shakeX).toFixed(1)}px, ${((1 - f) * -420 + shakeY + bz * -30).toFixed(1)}px) rotate(${((1 - f) * -14 + shakeR).toFixed(1)}deg) scale(${(sc * squashX).toFixed(3)}, ${(sc * squashY).toFixed(3)})`
      brand.style.opacity = String(t >= BRAND_T ? clamp(f * 4 + 0.15) * (1 - bz) : 0)
      brand.style.filter = f < 1 ? `blur(${((1 - f) * 12).toFixed(1)}px)` : "none"
      bar.style.transform = `scaleX(${outExpo(seg(t, hit + 0.05, hit + 0.3))})`
      bar.style.opacity = String(t >= hit ? 1 - bz : 0)
    }

    if (reduce) {
      frame(1.6)
      return
    }
    let raf = 0
    // 가장자리 카드(HeroCards)와 같은 시계를 쓴다
    const w = window as unknown as { __hkT0?: number }
    // 처음 열었을 때는 제목이 다 모인 장면(1.2초 지점)에서 시작한다. 빈 화면에서 글자가 날아오기를 기다리지 않게
    if (!w.__hkT0) w.__hkT0 = performance.now() - 1200
    const t0 = w.__hkT0
    const loop = () => {
      frame(((performance.now() - t0) / 1000) % T)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const line = (text: string, hl?: number[]) =>
    [...text].map((ch, i) =>
      ch === " " ? (
        <span key={i} className="hk-sp" />
      ) : (
        <span key={i} className={`hk-ch${hl && i >= hl[0] && i < hl[1] ? " hk-hl" : ""}`}>
          {ch}
        </span>
      ),
    )

  return (
    <div className="hk" ref={root}>
      {/* 이 페이지의 실제 큰 제목. 검색엔진과 낭독기는 aria-label 과 글자 그대로를 읽고, 눈에는 모션으로 보인다 */}
      <h1 className="hk-layer hk-title" aria-label={`${L1} ${L2}`}>
        <span className="hk-ln" aria-hidden="true">{line(L1, HL)}</span>
        <span className="hk-ln" aria-hidden="true">{line(L2)}</span>
      </h1>
      {WORDS.map((w) => (
        <div className="hk-layer" key={w.text} aria-hidden="true">
          <span className={`hk-w hk-${w.fx}`}>{w.text}</span>
        </div>
      ))}
      <div className="hk-layer" aria-hidden="true">
        <span className="hk-brand">
          위즈더플래닝
          <i className="hk-bar" />
        </span>
      </div>
    </div>
  )
}
