"use client"

// Meta(Facebook) 픽셀 — 광고 성과 측정용
// 주 전환 이벤트는 Lead(상담·진단 폼 제출). 전송 지점은 lib/analytics.ts 에 모아둔다.
//
// pixelId 가 없으면 아무것도 렌더하지 않는다 → 로컬·프리뷰에서 조용히 비활성.
// GA4(@next/third-parties)와 동일하게 body 밖 최상단에서 1회만 마운트한다.

import Script from "next/script"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

export default function MetaPixel({ pixelId }: { pixelId?: string }) {
  const pathname = usePathname()
  const initialized = useRef(false)

  // App Router 는 페이지 이동 시 전체 새로고침이 없다 →
  // base code 의 최초 PageView 만으로는 이후 페이지가 집계되지 않는다.
  useEffect(() => {
    if (!pixelId) return
    if (!initialized.current) {
      initialized.current = true // 최초 1회는 base code 가 이미 보냈다
      return
    }
    window.fbq?.("track", "PageView")
  }, [pathname, pixelId])

  if (!pixelId) return null

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');
fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
