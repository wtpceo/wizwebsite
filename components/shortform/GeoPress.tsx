"use client"
import { useEffect, useRef, useState } from "react"

/**
 * 언론 수치 카드 네 장 + 출처 모달.
 * 11-07 대표: 카드를 누르면 새 탭으로 기사가 열려 페이지를 떠났다. 떠나지 않게 모달로 출처를 보여 준다.
 * 모달 안에서만 작은 글씨로 원문 링크를 둔다(출처 확인용).
 */
type Item = [string, string, string, string, string, string, string]

export default function GeoPress({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open !== null && !d.open) d.showModal()
    if (open === null && d.open) d.close()
  }, [open])

  const it = open !== null ? items[open] : null

  return (
    <>
      <ul className="geo-stats">
        {items.map(([n, u, t, src, when], i) => (
          <li key={t} style={{ ["--i" as string]: i }}>
            <button type="button" className="geo-stat-btn" onClick={() => setOpen(i)} aria-haspopup="dialog">
              <b>
                {n}
                <small>{u}</small>
              </b>
              <span>{t}</span>
              <em>
                출처 {src} · {when}
              </em>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={ref}
        className="geo-dlg"
        aria-label="출처"
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null)
        }}
      >
        {it && (
          <div className="geo-dlg-in">
            <button type="button" className="geo-dlg-x" onClick={() => setOpen(null)} aria-label="닫기">
              ×
            </button>
            <b className="geo-dlg-n">
              {it[0]}
              <small>{it[1]}</small>
            </b>
            <p className="geo-dlg-t">{it[2]}</p>
            <p className="geo-dlg-d">{it[6]}</p>
            <dl className="geo-dlg-src">
              <div>
                <dt>출처</dt>
                <dd>{it[3]}</dd>
              </div>
              <div>
                <dt>날짜</dt>
                <dd>{it[4]}</dd>
              </div>
            </dl>
            <div className="geo-dlg-f">
              <button type="button" className="geo-dlg-ok" onClick={() => setOpen(null)}>
                확인
              </button>
              <a href={it[5]} target="_blank" rel="noopener noreferrer">
                기사 원문 보기
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
