"use client"

import { useEffect, useRef } from "react"

// 11-11 대표: 「배경 주변으로 인플루언서 사진들로 낼 수 있는 효과. 윗유 히어로 느낌도 괜찮은데 너무 똑같으면 안 되고」(로컬 시안)
// 윗유는 카드가 가운데로 모여 부채꼴이 된다. 여기는 반대로 카드가 가장자리에 흩어져 떠다니고, 가운데 글자 모션과 맞물려 움직인다:
//   제목이 모일 때 카드도 안쪽으로 살짝 끌려오고, 흩어질 때 바깥으로 밀리고, '위즈더플래닝'이 박히는 순간 충격으로 튕겨 나갔다 돌아온다.
// 시간은 HeroKinetic 과 같은 시계를 쓴다(window.__hkT0). 사진은 대표가 준 인플루언서 이미지(public/sf/home/card-*.webp).

const T = 9.4
const HIT = 5.85 + 0.24 // '위즈더플래닝'이 닿는 순간 (HeroKinetic 의 BRAND_T + FLY)
// [가로 %, 세로 %, 폭 px, 기울기] — 가운데 글자 자리(가로 22~78%)는 비워 둔다
const CARDS: [number, number, number, number][] = [
  // 11-11 대표 「카드 크기 좀 더 키우고 개수 늘려 줘」: 10장 → 15장, 폭 약 1.3배
  [5, 21, 198, -9],
  [15.5, 55, 168, 6],
  [4, 87, 214, -5],
  [20.5, 5, 142, 8],
  [95, 23, 202, 8],
  [84.5, 54, 166, -7],
  [96, 85, 216, 6],
  [79.5, 4, 144, -9],
  [24.5, 100, 158, 5],
  [75.5, 101, 160, -6],
  [-1, 52, 150, 8],
  [101, 51, 152, -7],
  [39.5, 105, 132, -4],
  [60.5, 105, 134, 4],
  [9.5, -3, 124, 6],
]

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a))
const outCubic = (k: number) => 1 - Math.pow(1 - k, 3)

export default function HeroCards() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const cards = [...el.querySelectorAll<HTMLElement>(".hc-c")]
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const w = window as unknown as { __hkT0?: number }
    if (!w.__hkT0) w.__hkT0 = performance.now() - 1200

    const frame = (t: number, life: number) => {
      const rect = el.getBoundingClientRect()
      cards.forEach((c, i) => {
        const [px, py, , rot] = CARDS[i]
        // 가운데에서 바깥으로 향하는 방향
        const dx = px - 50, dy = (py - 50) * 0.7
        const len = Math.hypot(dx, dy) || 1
        const ux = dx / len, uy = dy / len
        // 처음 한 번: 바깥에서 날아 들어온다
        const enter = outCubic(seg(life, 0.1 + i * 0.07, 1.0 + i * 0.07))
        // 늘: 천천히 떠다닌다
        const fy = Math.sin(t * 0.9 + i * 1.7) * 12, fx = Math.cos(t * 0.6 + i * 2.3) * 7, fr = Math.sin(t * 0.7 + i) * 2.4
        // 제목이 모일 때 안쪽으로 끌려왔다 놓인다
        const pull = Math.sin(seg(t, 0.05, 0.9) * Math.PI) * 26
        // 제목이 흩어질 때 바깥으로 밀린다
        const push = Math.sin(seg(t, 2.45, 3.2) * Math.PI) * 30
        // '위즈더플래닝'이 박히는 충격: 확 튕겨 나갔다가 흔들리며 돌아온다
        const k = seg(t, HIT, HIT + 0.95)
        const shock = t >= HIT && k < 1 ? Math.exp(-k * 4.2) * Math.cos(k * 15) * 62 : 0
        const out = (1 - enter) * 320 - pull + push + shock
        const x = ux * out + fx, y = uy * out + fy
        const r = rot + fr + (t >= HIT && k < 1 ? Math.exp(-k * 4) * Math.sin(k * 20 + i) * 9 : 0)
        c.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${r.toFixed(2)}deg)`
        c.style.opacity = String(enter)
      })
      void rect
    }

    if (reduce) {
      frame(1.6, 9)
      return
    }
    let raf = 0
    const born = performance.now()
    const loop = () => {
      const now = performance.now()
      frame((((now - (w.__hkT0 as number)) / 1000) % T + T) % T, (now - born) / 1000)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="hc" ref={root} aria-hidden="true">
      {CARDS.map(([x, y, wd], i) => (
        <span key={i} className="hc-c" style={{ left: `${x}%`, top: `${y}%`, width: wd, marginLeft: -wd / 2, marginTop: (-wd * 4) / 6 }}>
          <img src={`/sf/home/card-${String(i + 1).padStart(2, "0")}.webp`} alt="" width={360} height={480} loading="eager" decoding="async" />
        </span>
      ))}
    </div>
  )
}
