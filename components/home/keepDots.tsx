import type { ReactNode } from "react"

// 가운뎃점으로 이은 말("검색·GEO", "2518·2519호")을 한 덩어리로 묶는다.
// 크롬은 word-break: keep-all이어도 가운뎃점 앞뒤에서 줄을 바꿔 "검색 / ·GEO"처럼 끊긴다(2026-11-03 실측).
// 글자에 눈에 안 보이는 문자를 넣으면 검색·복사에 섞이므로, 화면에서만 white-space: nowrap 묶음으로 감싼다
const DOT_WORD = /(\S*·\S*)/g

export function keepDots(text: string): ReactNode {
  if (!text.includes("·")) return text
  return text.split(DOT_WORD).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{ whiteSpace: "nowrap" }}>
        {part}
      </span>
    ) : (
      part
    ),
  )
}
