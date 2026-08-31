"use client"

import { useEffect } from "react"

/**
 * 광고 랜딩은 항상 맨 위에서 시작해야 한다.
 *
 * 광고를 누른 사람은 이 페이지를 처음 본다. 히어로와 설명을 건너뛰고
 * 신청 폼 한가운데에서 시작하면 "무엇에 대한 폼인지" 모른 채 이탈한다.
 *
 * 막아야 할 원인은 둘이다.
 *
 * 1) 브라우저의 스크롤 복원 (history.scrollRestoration = "auto")
 * 2) URL 끝에 붙은 해시 — 광고 URL에 `#apply` 가 섞여 들어가 있었다.
 *    `[실측 2026-08-30]` /diagnosis#apply 로 열면 scrollY 8,831 (신청 폼)에서 시작한다.
 *    해시 없이 열면 0 이다. 인앱 브라우저에서만 보고된 이유는 광고 링크로만
 *    그 URL을 타기 때문이었다.
 *
 * ⚠️ 이전 버전은 "해시가 있는 진입은 사용자가 원한 것"이라고 보고 그냥 뒀는데,
 *    광고에서 들어오는 해시는 사용자가 원한 게 아니다. 그래서 지우고 상단으로 되돌린다.
 *    페이지 안의 CTA(#apply) 클릭은 마운트 이후 사용자 조작이라 영향받지 않는다.
 */

// 브라우저가 해시 위치로 점프하기 전에 지워야 한다.
// useEffect 는 하이드레이션 이후라 이미 늦다 — 하단이 한 번 보였다 올라오는 깜빡임이 생긴다.
// 그래서 문서 파싱 중에 실행되는 인라인 스크립트로 먼저 끊는다.
const STRIP_HASH_EARLY = `
try {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  if ("scrollRestoration" in history) { history.scrollRestoration = "manual"; }
} catch (e) {}
`

export default function ForceTopOnLoad() {
  useEffect(() => {
    const prev = history.scrollRestoration
    try {
      history.scrollRestoration = "manual"
    } catch {
      /* 지원하지 않는 브라우저는 무시 */
    }

    // 인라인 스크립트가 막히는 환경(CSP·인앱 브라우저)을 위한 2차 방어
    if (window.location.hash) {
      try {
        history.replaceState(null, "", window.location.pathname + window.location.search)
      } catch {
        /* 무시 */
      }
    }

    window.scrollTo(0, 0)

    // 이미지·폰트가 늦게 잡히며 레이아웃이 밀리는 경우까지 덮는다.
    // 인앱 브라우저는 로드가 느려 한 번으로는 놓치는 경우가 있어 두 번 확인한다.
    const timers = [120, 600].map((ms) =>
      window.setTimeout(() => {
        if (window.scrollY !== 0) window.scrollTo(0, 0)
      }, ms),
    )

    return () => {
      timers.forEach(window.clearTimeout)
      try {
        history.scrollRestoration = prev
      } catch {
        /* 무시 */
      }
    }
  }, [])

  return <script dangerouslySetInnerHTML={{ __html: STRIP_HASH_EARLY }} />
}
