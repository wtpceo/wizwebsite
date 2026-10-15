"use client"

import { useState } from "react"
import { STAGES } from "@/lib/rebrand-data"

// 깔때기 모양 단계 고르기. 위로 갈수록 넓다(인지), 아래로 갈수록 좁다(재방문·소개).
// 기본값은 '비교'. 상담에서 가장 자주 만나는 막힘이다.
export default function FunnelPicker() {
  const [active, setActive] = useState("compare")
  const idx = Math.max(0, STAGES.findIndex((s) => s.id === active))
  const stage = STAGES[idx]

  return (
    <div className="rb-funnel-grid">
      <div>
        <div className="rb-funnel" role="tablist" aria-label="퍼널 단계">
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={i === idx}
              aria-controls="stage-detail"
              onClick={() => setActive(s.id)}
            >
              <span>{s.label}</span>
              <b>{i + 1}단계</b>
            </button>
          ))}
        </div>
        <p className="rb-small rb-funnel-note">단계를 눌러 보세요</p>
      </div>

      <div className="rb-detail" id="stage-detail" role="tabpanel" aria-labelledby={`tab-${stage.id}`}>
        <div className="rb-detail-body" key={stage.id}>
          <p className="rb-detail-num">{idx + 1}단계 / 5</p>
          <h3>{stage.label}</h3>
          <p className="rb-detail-symptom">“{stage.symptom}”</p>
          <p className="rb-detail-design">{stage.design}</p>
          <ul className="rb-detail-media" aria-label="이 단계에 맞는 매체">
            {stage.media.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
        <div className="rb-btns">
          <a className="rb-btn" href="/diagnosis">
            우리 회사 단계 진단받기
          </a>
          <a className="rb-btn is-line" href="/business/contact">
            기업 제안 요청
          </a>
        </div>
      </div>
    </div>
  )
}
