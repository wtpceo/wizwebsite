import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// IndexNow — 빙·네이버·얀덱스 등에 "이 URL 지금 크롤해라"를 즉시 통보하는 프로토콜.
// 키 파일: /public/39f37ab7ec2c17eea0adce65d8e6720e.txt (도메인 루트에서 서빙되어 소유 증명)
const INDEXNOW_KEY = "39f37ab7ec2c17eea0adce65d8e6720e"
// 트리거 남용 방지용 토큰(서버 전용, 클라이언트로 노출 안 됨)
const TRIGGER_TOKEN = "6518149f0b33302fe3cbe5be"
const HOST = "wiztheplanning.com"
const BASE = `https://${HOST}`
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"

// 사이트맵에서 전체 URL 목록을 읽어온다
async function getSitemapUrls(): Promise<string[]> {
  const res = await fetch(`${BASE}/sitemap.xml`, { cache: "no-store" })
  if (!res.ok) return []
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  return Array.from(new Set(urls))
}

async function submit(urlList: string[]) {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${BASE}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  })
  return res.status
}

// GET /api/indexnow?token=...            → 사이트맵 전체 제출
// GET /api/indexnow?token=...&url=/guide/x → 특정 URL만 제출
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  if (searchParams.get("token") !== TRIGGER_TOKEN) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  const single = searchParams.get("url")
  const urlList = single
    ? [single.startsWith("http") ? single : `${BASE}${single.startsWith("/") ? "" : "/"}${single}`]
    : await getSitemapUrls()

  if (urlList.length === 0) {
    return NextResponse.json({ error: "제출할 URL이 없습니다." }, { status: 400 })
  }

  const status = await submit(urlList)
  // IndexNow 성공: 200(OK) 또는 202(Accepted)
  return NextResponse.json({
    ok: status === 200 || status === 202,
    indexNowStatus: status,
    submitted: urlList.length,
    urls: urlList,
  })
}
