"use client"

import { useRef, useState, type KeyboardEvent } from "react"
import s from "./home.module.css"

// 한 번 만든 소재를 두 번, 세 번 씁니다: 촬영 → 숏폼 → 광고 소재 → 홈페이지·검색 → 다음 캠페인.
// 막대 하나를 누르면 펼쳐진다. 탭 목록처럼 좌우(휴대폰에서는 위아래) 화살표로 옮기고 Enter/Space로 연다
const STAGES = [
  { name: "촬영", desc: "제품, 매장, 사람을 한 번에 넉넉히 찍어 둡니다. 숏폼용 세로 컷과 광고용 가로 컷을 같은 날 함께 찍습니다.", img: "strip-1" },
  { name: "숏폼", desc: "찍은 컷으로 쇼츠와 릴스를 먼저 올려 반응을 봅니다. 어떤 장면이 오래 보이는지가 다음 광고의 기준이 됩니다.", img: "strip-4" },
  { name: "광고 소재", desc: "반응 좋은 컷만 골라 네이버, 메타, 구글 광고 규격으로 다시 만듭니다. 새로 찍지 않아도 됩니다.", img: "m-meta" },
  { name: "홈페이지·검색", desc: "같은 사진과 문장이 홈페이지와 검색 콘텐츠로 이어집니다. 검색 글은 광고를 끈 뒤에도 남습니다.", img: "hp02-pc" },
  { name: "다음 캠페인", desc: "캠페인이 끝나도 소재와 데이터가 남아서, 다음 캠페인은 처음부터 시작하지 않습니다.", img: "strip-5" },
]

export default function HomeStages() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const move = (to: number) => {
    const n = (to + STAGES.length) % STAGES.length
    setActive(n)
    tabs.current[n]?.focus()
  }

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault()
        move(i + 1)
        break
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault()
        move(i - 1)
        break
      case "Home":
        e.preventDefault()
        move(0)
        break
      case "End":
        e.preventDefault()
        move(STAGES.length - 1)
        break
    }
  }

  return (
    <section className={s.sec} id="flow" aria-labelledby="h-flow">
      <div className={s.flowintro}>
        <h2 className={`${s.head} ${s.rise}`} id="h-flow" data-reveal="">
          한 번 찍어서
          <br />
          광고와 홈페이지까지 씁니다
        </h2>
        <p className={s.rise} data-reveal="">
          촬영한 영상은 숏폼으로 먼저 올리고, 반응이 좋은 컷을 광고 소재로 씁니다. 사진과 문장은 홈페이지와 검색 글에도 넣습니다. 그래서 캠페인마다 새로 찍지 않아도 됩니다. 단계를 눌러 보세요.
        </p>
      </div>
      <div className={s.acc} role="tablist" aria-label="소재가 쓰이는 순서">
        {STAGES.map((st, i) => {
          const open = i === active
          return (
            // 버튼 안에는 문장 요소만 둘 수 있어 제목·설명을 span으로 쓴다
            <button
              key={st.name}
              ref={(el) => {
                tabs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`stage-${i}`}
              aria-selected={open}
              tabIndex={open ? 0 : -1}
              className={`${s.stage} ${open ? s.open : ""}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className={s.sliver} aria-hidden={open}>
                {st.name}
              </span>
              <span className={s.body}>
                <span className={s.bodyText}>
                  <span className={s.bodyTitle}>{st.name}</span>
                  <span className={s.bodyDesc}>{st.desc}</span>
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/home/${st.img}.jpg`} alt="" loading="lazy" decoding="async" />
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
