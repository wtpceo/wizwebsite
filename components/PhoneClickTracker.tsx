"use client"

import { useEffect } from "react"
import { trackPhoneClick } from "@/lib/analytics"

// 전화(tel:) 링크 클릭 추적. 전화 링크가 서버 컴포넌트 페이지 곳곳(/luke, /medical-geo-agency 등)에 흩어져 있어
// 링크마다 onClick 을 달지 않고 문서 전체에서 한 번만 듣는다. 새로 생기는 tel: 링크도 자동으로 잡힌다.
export default function PhoneClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="tel:"]')
      if (a) trackPhoneClick()
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])
  return null
}
