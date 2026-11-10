"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

/** 근거 카드를 누르면 새 창 대신 이 페이지 안에서 원문을 띄운다(11-09 대표).
 *  카드에 data-pm-src(원문 주소)·data-pm-who(출처)·data-pm-title(제목)·data-pm-quote(옮긴 문장)를 달면 된다.
 *  data-pm-embed="0"인 곳(구글·메타처럼 다른 사이트 안에 띄우기를 막아 둔 곳, PDF)은 옮긴 문장(data-pm-quote)이나 요약(data-pm-note)과 원문 열기 단추만 보여 준다.
 *  자바스크립트가 없으면 카드는 원래대로 새 창에서 열린다. */
type Doc = { src: string; who: string; title: string; quote: string; note: string; why: string; embed: boolean }

export function ProofModal({ scope }: { scope: string }) {
  const [doc, setDoc] = useState<Doc | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const backRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as HTMLElement).closest<HTMLElement>(`${scope} [data-pm-src]`)
      if (!a) return
      e.preventDefault()
      backRef.current = a
      setDoc({
        src: a.dataset.pmSrc || "",
        who: a.dataset.pmWho || "",
        title: a.dataset.pmTitle || "",
        quote: a.dataset.pmQuote || "",
        note: a.dataset.pmNote || "",
        why: a.dataset.pmWhy || "",
        embed: a.dataset.pmEmbed !== "0",
      })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [scope])

  useEffect(() => {
    if (!doc) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = "hidden"
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDoc(null)
    window.addEventListener("keydown", onKey)
    return () => {
      document.documentElement.style.overflow = prev
      window.removeEventListener("keydown", onKey)
      backRef.current?.focus()
    }
  }, [doc])

  if (!doc || typeof document === "undefined") return null
  // 머리줄(.sfh)보다 위에 뜨도록 body 바로 아래에 그린다
  return createPortal(
    <div className="pm" role="dialog" aria-modal="true" aria-labelledby="pm-title" onClick={(e) => e.target === e.currentTarget && setDoc(null)}>
      <div className={doc.embed ? "pm-box" : "pm-box pm-sm"}>
        <header className="pm-top">
          <div className="pm-meta">
            <em>{doc.who}</em>
            <b id="pm-title">{doc.title}</b>
          </div>
          <a className="pm-open" href={doc.src} target="_blank" rel="noopener noreferrer">
            원문 사이트에서 열기 ↗
          </a>
          <button ref={closeRef} type="button" className="pm-x" onClick={() => setDoc(null)} aria-label="닫기">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </header>
        {doc.embed ? (
          <div className="pm-frame">
            <p className="pm-wait">원문을 불러오는 중입니다</p>
            <iframe src={doc.src} title={`${doc.who} 원문: ${doc.title}`} loading="eager" referrerPolicy="no-referrer" />
          </div>
        ) : (
          <div className="pm-only">
            {doc.quote ? <blockquote>“{doc.quote}”</blockquote> : null}
            {doc.note ? <p className="pm-note">{doc.note}</p> : null}
            <p>{doc.why || "이 자료는 원문 사이트가 다른 페이지 안에 띄우는 것을 막아 두었습니다."} 위 단추를 누르면 새 창에서 원문이 열립니다.</p>
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}
