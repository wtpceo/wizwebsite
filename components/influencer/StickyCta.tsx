"use client"

import { useEffect, useState } from "react"

// 모바일 하단 고정 버튼. 첫 화면 버튼이 보이는 동안과 문의 섹션이 화면에 들어온 동안은 숨긴다.
// 오른쪽 아래 카톡 상담 위젯(ChatWidget, right 20px · 약 165px 폭)과 겹치지 않게 왼쪽에만 둔다
export default function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero-cta")
    const contact = document.getElementById("contact")
    if (!hero || !contact) return
    // 스크롤할 때마다 두 위치만 잰다. 화면 밖 탭에서도 처음 상태가 맞도록 한 번 먼저 잰다
    const check = () => {
      const h = hero.getBoundingClientRect()
      const c = contact.getBoundingClientRect()
      const heroGone = h.bottom < 0
      const contactIn = c.top < window.innerHeight && c.bottom > 0
      setShow(heroGone && !contactIn)
    }
    check()
    window.addEventListener("scroll", check, { passive: true })
    window.addEventListener("resize", check)
    return () => {
      window.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
    }
  }, [])

  return (
    <a
      href="#contact"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 left-4 right-[196px] z-40 flex h-[58px] items-center justify-center rounded-md bg-[#070b14] px-3 text-[15.5px] font-bold text-white transition-[opacity,transform] duration-200 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      후보 리스트 무료로 받기
    </a>
  )
}
