"use client"

import { useEffect, useRef, useState } from "react"
import { HONEYPOT_FIELD, OPENED_AT_FIELD } from "@/lib/form-guard-fields"

// 문의 폼 공통 스팸 방지 부품 (서버 판정은 lib/spam-guard.ts)
//
// 쓰는 법
//   const { guardFields, guardValues } = useFormGuard()
//   <form>{guardFields} ...</form>
//   JSON 으로 보내는 폼: body 에 ...guardValues() 를 섞는다
//   FormData 로 보내는 폼: guardFields 만 넣으면 숨은 input 이 그대로 실린다
//
// 숨은 칸 두 개를 심는다.
//   - 허니팟(company_website): 화면 밖에 두고 탭 순서에서도 뺀다. 사람은 못 보고 봇은 채운다
//   - 폼 연 시각(openedAt): 마운트 뒤 Date.now(). 서버가 3초 안 제출을 거른다
// 값은 DOM 에서 바로 읽는다. 봇이 React 를 거치지 않고 input.value 만 바꿔도 잡히게.

export function useFormGuard() {
  const [openedAt, setOpenedAt] = useState(0)
  const honeypotRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setOpenedAt(Date.now())
  }, [])

  const guardValues = () => ({
    [HONEYPOT_FIELD]: honeypotRef.current?.value ?? "",
    [OPENED_AT_FIELD]: openedAt,
  })

  const guardFields = (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
    >
      <input
        ref={honeypotRef}
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
      <input type="hidden" name={OPENED_AT_FIELD} value={openedAt || ""} readOnly />
    </div>
  )

  return { guardFields, guardValues }
}
