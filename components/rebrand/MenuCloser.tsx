"use client"

import { useEffect } from "react"

// 좁은 화면 메뉴(<details>)에서 링크를 누르면 패널을 닫는다. 같은 페이지 앵커로 이동할 때 패널이 본문을 가리지 않게
export default function MenuCloser() {
  useEffect(() => {
    const menu = document.querySelector<HTMLDetailsElement>(".rb-menu")
    if (!menu) return
    const onClick = (e: Event) => {
      if ((e.target as HTMLElement).closest(".rb-menu-panel a")) menu.open = false
    }
    menu.addEventListener("click", onClick)
    return () => menu.removeEventListener("click", onClick)
  }, [])
  return null
}
