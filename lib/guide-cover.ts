// 가이드 표지 이미지 경로. 기본은 /covers/<slug>.jpg (생성한 아트워크),
// 실제 화면을 보여주는 편이 나은 글은 여기서 덮어쓴다.
const COVER_OVERRIDES: Record<string, string> = {
  "/guide/measure-ai-traffic": "/tools/realgeo-monitoring.jpg",
  "/guide/geo-measurement-tools": "/tools/realgeo-prompts.jpg",
}

export function coverFor(href: string) {
  return COVER_OVERRIDES[href] ?? `/covers${href.replace("/guide", "")}.jpg`
}
