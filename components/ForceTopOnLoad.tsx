"use client"

import { useEffect } from "react"

/**
 * 광고 랜딩은 항상 맨 위에서 시작해야 한다.
 *
 * 광고를 누른 사람은 이 페이지를 처음 본다. 그런데 브라우저가 이전 방문의
 * 스크롤 위치를 복원하면(Chrome 기본값 history.scrollRestoration = "auto")
 * 히어로와 설명을 건너뛰고 신청 폼 한가운데에서 시작하게 된다.
 * 그러면 "무엇에 대한 폼인지" 모른 채 이탈한다.
 *
 * 재현이 환경에 따라 갈리는 문제라(사용자 보고 2026-08-20, 개발 환경에서 미재현)
 * 원인을 특정하는 대신 **맨 위에서 시작하는 것을 보장**하는 쪽으로 막는다.
 *
 * 주의: 사용자가 CTA(#apply)를 눌러 이동하는 것은 막지 않는다.
 *       해시가 있는 진입은 의도된 것이므로 그대로 둔다.
 */
export default function ForceTopOnLoad() {
  useEffect(() => {
    // 브라우저가 이전 스크롤 위치를 되돌리지 않게 한다
    const prev = history.scrollRestoration
    try {
      history.scrollRestoration = "manual"
    } catch {
      /* 지원하지 않는 브라우저는 무시 */
    }

    // 해시로 들어온 경우(#apply 등)는 사용자가 그 위치를 원한 것이다
    if (!window.location.hash) {
      window.scrollTo(0, 0)
      // 이미지·폰트가 늦게 잡히며 레이아웃이 밀리는 경우까지 덮는다
      const t = window.setTimeout(() => {
        if (!window.location.hash && window.scrollY !== 0) window.scrollTo(0, 0)
      }, 300)
      return () => {
        window.clearTimeout(t)
        try {
          history.scrollRestoration = prev
        } catch {
          /* 무시 */
        }
      }
    }

    return () => {
      try {
        history.scrollRestoration = prev
      } catch {
        /* 무시 */
      }
    }
  }, [])

  return null
}
