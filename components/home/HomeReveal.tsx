"use client"

import { useEffect } from "react"
import s from "./home.module.css"

// 등장 효과. 서버 렌더에서는 전부 보이는 상태로 나가고(크롤러·JS 꺼진 브라우저),
// 마운트 뒤 <html>에 js 클래스를 붙여야 .rise/.shutter가 숨었다가 화면에 들어올 때 차례로 올라온다.
// 이미 화면 안에 있는 것은 js를 붙이기 전에 먼저 보이게 해 깜빡임을 막는다
export default function HomeReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    const html = document.documentElement

    els.forEach((el, i) => {
      // 섹션 안 요소가 70ms씩 차례로
      el.style.transitionDelay = `${(i % 4) * 70}ms`
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
      { threshold: 0.15 },
    )
    els.forEach((el) => {
      if (!el.classList.contains(s.in)) io.observe(el)
    })

    return () => {
      io.disconnect()
      // 다른 페이지로 옮겨 가면 떼어 둔다
      html.classList.remove("js")
    }
  }, [])

  return null
}
