"use client"

import { useEffect } from "react"
import { captureAttribution } from "@/lib/attribution"

/**
 * 첫 진입의 UTM·referrer 를 잡아둔다. 화면에는 아무것도 그리지 않는다.
 *
 * RootShell 에 두는 이유: 광고를 눌러 도착하는 페이지가 랜딩만이 아니다.
 * 가이드 글로 들어와 둘러보다 신청하는 경로도 있어서, 모든 페이지에서 잡아야 한다.
 */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution()
  }, [])

  return null
}
