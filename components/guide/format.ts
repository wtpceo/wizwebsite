// 목록에 쓰는 날짜 표기. "2026. 9. 10" → "2026.09.10" (가이드·인사이트 목록, 이어서 읽기 공용)
export function fmtDate(d: string) {
  const m = d.match(/(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})/)
  if (!m) return d
  return `${m[1]}.${m[2].padStart(2, "0")}.${m[3].padStart(2, "0")}`
}
