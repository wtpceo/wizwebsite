"use client"

import { useEffect } from "react"
import s from "./blueprint.module.css"

// 들어올 때 움직임. 서버 렌더에서는 전부 보이는 상태로 나가고, 마운트 뒤 <html>에 js 클래스를 붙여야
// .rv가 숨었다가 화면에 들어올 때 올라온다. 이미 화면 안에 있는 것은 js를 붙이기 전에 먼저 보이게 해 깜빡임을 막는다.
// (매체 페이지의 HomeReveal과 같은 방식이지만 클래스가 blueprint.module.css 것이라 따로 둔다)
export default function BlueprintReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(`.${s.rv}`))
    const html = document.documentElement

    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add(s.in)
    })
    html.classList.add("js")

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(s.in)
            io.unobserve(e.target)
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    )
    els.forEach((el) => {
      if (!el.classList.contains(s.in)) io.observe(el)
    })

    return () => {
      io.disconnect()
      html.classList.remove("js")
    }
  }, [])

  return null
}
