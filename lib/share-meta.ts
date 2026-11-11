import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"

/**
 * 공유 미리보기(og·twitter) 메타를 한 곳에서 채운다(2026-11-10 대표 「메타데이터와 메타 이미지도 통일」).
 *
 * 페이지가 openGraph 를 적으면 Next 는 레이아웃의 openGraph 를 통째로 덮는다. 그래서 글마다
 * og:site_name·og:locale·og:image 크기가 빠졌고, twitter 는 레이아웃 것(홈 제목·홈 표지)이 그대로 나갔다.
 * 각 page 의 metadata 를 share(...) 로 감싸면:
 *  - og:site_name, og:locale 을 언어에 맞게 채우고
 *  - og:image 에 실제 파일의 가로·세로를 붙이고
 *  - twitter 카드를 og 와 같은 제목·설명·이미지로 맞춘다(page 가 twitter 를 따로 적었으면 그대로 둔다)
 */
type Lang = "ko" | "en" | "zh" | "vi"
const SITE: Record<Lang, { siteName: string; locale: string }> = {
  ko: { siteName: "위즈더플래닝", locale: "ko_KR" },
  en: { siteName: "WizThePlanning", locale: "en_US" },
  zh: { siteName: "WizThePlanning", locale: "zh_CN" },
  vi: { siteName: "WizThePlanning", locale: "vi_VN" },
}

const sizeCache = new Map<string, { width: number; height: number } | null>()

/** public 폴더 이미지의 가로·세로(JPEG·PNG). 못 읽으면 null */
function sizeOf(url: string): { width: number; height: number } | null {
  const clean = url.split("?")[0]
  if (!clean.startsWith("/")) return null
  if (sizeCache.has(clean)) return sizeCache.get(clean)!
  let out: { width: number; height: number } | null = null
  try {
    const b = fs.readFileSync(path.join(process.cwd(), "public", clean))
    if (b[0] === 0x89 && b[1] === 0x50) {
      out = { width: b.readUInt32BE(16), height: b.readUInt32BE(20) }
    } else if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2
      while (i < b.length - 9) {
        if (b[i] !== 0xff) { i++; continue }
        const m = b[i + 1]
        if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
          out = { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) }
          break
        }
        i += 2 + b.readUInt16BE(i + 2)
      }
    }
  } catch {
    out = null
  }
  sizeCache.set(clean, out)
  return out
}

function text(v: unknown): string | undefined {
  if (typeof v === "string") return v
  if (v && typeof v === "object") {
    const o = v as { absolute?: string; default?: string }
    return o.absolute || o.default
  }
  return undefined
}

export function share(meta: Metadata, lang: Lang = "ko"): Metadata {
  const og = meta.openGraph as Record<string, unknown> | undefined | null
  if (!og) return meta
  const raw = og.images === undefined ? [] : Array.isArray(og.images) ? og.images : [og.images]
  const images = raw.map((im) => {
    const o: Record<string, unknown> = typeof im === "string" || im instanceof URL ? { url: String(im) } : { ...(im as object) }
    if (o.width === undefined && typeof o.url === "string") {
      const s = sizeOf(o.url)
      if (s) Object.assign(o, s)
    }
    return o
  })
  const openGraph = { ...SITE[lang], ...og, ...(images.length ? { images } : {}) }
  const first = images[0]?.url as string | undefined
  const twitter =
    meta.twitter ??
    ({
      card: "summary_large_image",
      title: text(og.title) ?? text(meta.title),
      description: (og.description as string | undefined) ?? meta.description ?? undefined,
      ...(first ? { images: [first] } : {}),
    } as Metadata["twitter"])
  return { ...meta, openGraph: openGraph as Metadata["openGraph"], twitter }
}
