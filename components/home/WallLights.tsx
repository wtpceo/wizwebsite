"use client"

import { useEffect } from "react"
import s from "./home.module.css"

// 첫 화면 판에서 2초마다 두 장씩 컬러를 켠다(디자인기준 '첫 화면은 몇 장씩 차례로 컬러가 켜진다').
// 움직임 줄이기 설정이면 켜지 않는다
export default function WallLights({ containerId }: { containerId: string }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const root = document.getElementById(containerId)
    if (!root) return
    // 휴대폰에서 숨긴 기둥(display:none)의 장은 빼고 고른다
    const frames = Array.from(root.querySelectorAll<HTMLElement>("[data-frame]")).filter(
      (el) => el.offsetParent !== null,
    )
    if (frames.length === 0) return

    let last: HTMLElement[] = []
    const id = window.setInterval(() => {
      last.forEach((el) => el.classList.remove(s.lit))
      last = [0, 1].map(() => frames[Math.floor(Math.random() * frames.length)])
      last.forEach((el) => el.classList.add(s.lit))
    }, 2000)

    return () => {
      window.clearInterval(id)
      last.forEach((el) => el.classList.remove(s.lit))
    }
  }, [containerId])

  return null
}
