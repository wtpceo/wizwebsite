"use client"

import { useEffect } from "react"

// 루트 레이아웃의 <html lang="ko">를 로케일 페이지에서 클라이언트 측으로 교정한다.
// (한국어 URL 색인 보호를 위해 루트를 [locale]로 옮기지 않았기 때문에 필요한 보정)
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang
    document.documentElement.lang = lang
    return () => {
      document.documentElement.lang = prev
    }
  }, [lang])
  return null
}
