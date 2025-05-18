"use client"

import { useEffect, useRef } from "react"

export function EqualHeightCards({ selector }: { selector: string }) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const equalizeCardHeights = () => {
      const cards = document.querySelectorAll(selector)
      if (!cards.length) return

      // 먼저 모든 카드의 높이를 초기화
      cards.forEach((card) => {
        ;(card as HTMLElement).style.height = "auto"
      })

      // 가장 큰 높이 찾기
      let maxHeight = 0
      cards.forEach((card) => {
        const height = (card as HTMLElement).offsetHeight
        maxHeight = Math.max(maxHeight, height)
      })

      // 모든 카드에 동일한 높이 적용
      cards.forEach((card) => {
        ;(card as HTMLElement).style.height = `${maxHeight}px`
      })
    }

    // 초기 실행
    equalizeCardHeights()

    // 윈도우 리사이즈 시 다시 계산
    window.addEventListener("resize", equalizeCardHeights)

    // 클린업 함수
    return () => {
      window.removeEventListener("resize", equalizeCardHeights)
    }
  }, [selector])

  return null
} 