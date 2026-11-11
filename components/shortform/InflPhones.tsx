"use client"

import { useEffect, useRef } from "react"

// 11-11 대표: 「휴대폰이 모였다 흩어지고 이 페이지에 어울리는 움직임이 이어지게」 → 첫 판을 보고 「좀 더 휙휙 속도감 있고 큼직하게 움직이고 사진을 더 활용」(로컬 시안)
// 휴대폰 여섯 대가 큰 원을 그리며 한 박자(1.15초)마다 한 칸씩 휙 넘어간다. 가운데로 온 휴대폰이 크게 서고, 그때마다
// 이 콘텐츠가 '다시 쓰이는 곳' 이름표가 쾅 찍혔다가 다음 박자에 날아간다. 사진 여섯 장이 한 바퀴에 모두 가운데를 지난다.
// 마우스를 움직이면 전체가 그쪽으로 기운다. 화면 안에는 숫자를 넣지 않는다(실제 성과처럼 보이지 않게).

const BEAT = 1.15
// [사진, 매체 한글, 매체 영문]
const PHONES: [string, string, string][] = [
  ["yt", "유튜브", "YouTube Shorts"],
  ["tt", "틱톡", "TikTok"],
  ["4", "인스타그램", "Instagram Reels"],
  ["5", "유튜브", "YouTube Shorts"],
  ["ig", "인스타그램", "Instagram Reels"],
  ["6", "틱톡", "TikTok"],
]
// 이름표 문구는 이 페이지 아래 「이렇게 다시 씁니다」「콘텐츠 2차·3차 확장」 구간의 항목 이름 그대로. [문구, 붓칠 색, 글자 색]
const USES: [string, string, string][] = [
  ["광고 소재", "#0055FF", "#fff"],
  ["AI 답변 출처", "#FFE27A", "#0A1A33"],
  ["쇼핑몰 상세페이지", "#FF9D8A", "#0A1A33"],
  ["블로그", "#C8B4F6", "#0A1A33"],
  ["지도·플레이스", "#2A2D34", "#fff"],
  ["매장 POP", "#FFC3D2", "#0A1A33"],
]
const N = PHONES.length
const T = BEAT * N

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a))
const inCubic = (k: number) => k * k * k
const outExpo = (k: number) => (k >= 1 ? 1 : 1 - Math.pow(2, -10 * k))
const outBack = (k: number) => 1 + 2.6 * Math.pow(k - 1, 3) + 1.6 * Math.pow(k - 1, 2)
// 가운데에서 떨어진 칸 수(0·1·2·3)에 따른 자리: [가로(무대 폭 대비), 크기, 기울기, 불투명도]
const SLOT: [number, number, number, number][] = [
  [0, 1.16, 0, 1],
  [0.37, 0.8, 10, 1],
  [0.7, 0.56, 20, 0],
  [0.8, 0.4, 24, 0],
]
const mix = (a: number, b: number, k: number) => a + (b - a) * k

export default function InflPhones() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const stage = el.querySelector<HTMLElement>(".iw2-stage")!
    const phones = [...el.querySelectorAll<HTMLElement>(".iw2-ph")]
    const chips = [...el.querySelectorAll<HTMLElement>(".iw2-use")]
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let W = el.clientWidth, H = el.clientHeight
    const onSize = () => { W = el.clientWidth; H = el.clientHeight }
    window.addEventListener("resize", onSize)

    const frame = (t: number) => {
      const step = Math.floor(t / BEAT), tb = t - step * BEAT
      const s = step + outBack(seg(tb, 0, 0.5)) // 한 박자의 앞 0.5초에 휙 넘어가고 살짝 지나쳤다 돌아온다
      phones.forEach((p, i) => {
        let d = (((i - s) % N) + N) % N
        if (d > N / 2) d -= N // -3 < d <= 3
        const a = Math.min(Math.abs(d), 3), lo = Math.floor(a), hi = Math.min(lo + 1, 3), k = a - lo
        const x = mix(SLOT[lo][0], SLOT[hi][0], k) * W * Math.sign(d)
        const sc = mix(SLOT[lo][1], SLOT[hi][1], k)
        const rot = mix(SLOT[lo][2], SLOT[hi][2], k) * Math.sign(d)
        // 무대가 넓으면(가운데 정렬 판) 두 칸 떨어진 휴대폰도 옅게 보여 다섯 대가 한 줄로 선다
        const far = W >= 700 ? 0.5 : 0
        const o3 = [1, 1, far, 0]
        const op = mix(o3[lo], o3[hi], k)
        const lift = a < 1 ? Math.sin(t * 2.2) * 5 * (1 - a) : 0
        p.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${(a * H * 0.05 + lift).toFixed(1)}px) rotate(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`
        p.style.opacity = String(clamp(op))
        p.style.zIndex = String(20 - Math.round(a * 4))
      })
      chips.forEach((c, i) => {
        const on = step % N === i
        const a = on ? outExpo(seg(tb, 0.3, 0.58)) : 0
        const z = on ? inCubic(seg(tb, BEAT - 0.16, BEAT)) : 0
        const left = i % 2 === 0
        const bx = (left ? -0.33 : 0.33) * W, by = (left ? 0.3 : -0.3) * H
        const sc = (2.6 - 1.6 * a) * (1 - z * 0.3)
        c.style.transform = `translate(-50%, -50%) translate(${(bx + (left ? -1 : 1) * z * W * 0.5).toFixed(1)}px, ${(by + (1 - a) * (left ? 40 : -40)).toFixed(1)}px) rotate(${((left ? -5 : 4) + (1 - a) * (left ? -14 : 14)).toFixed(2)}deg) scale(${sc.toFixed(3)})`
        c.style.opacity = String(clamp(a * 2) * (1 - z))
      })
    }

    if (reduce) {
      frame(BEAT * 0.9)
      return () => window.removeEventListener("resize", onSize)
    }
    let raf = 0
    const t0 = performance.now()
    const loop = () => {
      frame(((performance.now() - t0) / 1000) % T)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    const hero = el.closest("section") as HTMLElement | null
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !hero) return
      const r = hero.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5
      stage.style.transform = `perspective(1100px) rotateY(${(px * 12).toFixed(2)}deg) rotateX(${(-py * 9).toFixed(2)}deg) translate(${(px * 22).toFixed(1)}px, ${(py * 14).toFixed(1)}px)`
    }
    const onLeave = () => { stage.style.transform = "" }
    hero?.addEventListener("pointermove", onMove)
    hero?.addEventListener("pointerleave", onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onSize)
      hero?.removeEventListener("pointermove", onMove)
      hero?.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <div className="iw2-phones iw2-live iw2-ring" ref={root} aria-hidden="true">
      <div className="iw2-stage">
        {PHONES.map(([k, ko, en]) => (
          <figure key={k} className="iw2-ph">
            <img src={`/sf/home/phone-${k}.webp`} alt="" width={600} height={1066} decoding="async" />
            <span className="iw2-ph-top">
              <b>{ko}</b>
              <small>{en}</small>
            </span>
            <span className="iw2-ph-side">
              <i />
              <i />
              <i />
            </span>
            <span className="iw2-ph-bot">
              <i />
              <i />
            </span>
          </figure>
        ))}
        {USES.map(([t, bg, ink]) => (
          <span key={t} className="iw2-use" style={{ "--ub": bg, color: ink } as React.CSSProperties}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
