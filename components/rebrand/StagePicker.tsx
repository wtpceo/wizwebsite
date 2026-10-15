"use client"

import { useState } from "react"
import { STAGES } from "@/lib/rebrand-data"

// 첫 화면의 "한 가지 해볼 수 있는 것". 단계를 고르면 증상, 설계, 맞는 매체가 바뀐다.
// 기본값은 '비교'. 상담에서 가장 자주 만나는 막힘이다.
export default function StagePicker() {
  const [active, setActive] = useState("compare")
  const stage = STAGES.find((s) => s.id === active) ?? STAGES[2]

  return (
    <div className="rb-stage" id="stage">
      <div className="rb-stage-q">
        <h2>우리 회사는 지금 어느 단계에 있나요?</h2>
        <p className="rb-small">해당하는 단계를 눌러 보세요</p>
      </div>

      <div className="rb-stage-tabs" role="tablist" aria-label="퍼널 단계">
        {STAGES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={s.id === stage.id}
            aria-controls="stage-panel"
            onClick={() => setActive(s.id)}
          >
            <b>{i + 1}단계</b>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      <dl className="rb-stage-panel" id="stage-panel" role="tabpanel" aria-labelledby={`tab-${stage.id}`}>
        <div>
          <dt>이런 상태라면</dt>
          <dd className="rb-quote">{stage.symptom}</dd>
        </div>
        <div>
          <dt>이렇게 설계합니다</dt>
          <dd>{stage.design}</dd>
        </div>
        <div>
          <dt>이 단계에 맞는 매체</dt>
          <dd>
            <ul className="rb-stage-media">
              {stage.media.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <div className="rb-stage-foot">
        <p className="rb-small">
          막힌 단계 하나만 고치지 않고 그 앞 단계까지 같이 봅니다. 어느 단계인지는 진단에서 실제로 재서 정합니다.
        </p>
        <a className="rb-btn" href="/diagnosis">
          우리 회사 단계 진단받기 <span className="rb-arrow" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
