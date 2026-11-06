import { BLUEPRINT_STEPS, HOME_H1, HOME_SUB } from "@/lib/home-blueprint"
import FitLines from "./FitLines"
import s from "./blueprint.module.css"

// 첫 화면(A안 색 챕터): 민트 한 면에 첫 줄 두 줄 + 보조 줄·버튼, 맨 아래 띠가 설계도 지도다.
// 지도 칸 너비는 그 단계의 채널 수(--w)만큼이고, 누르면 그 챕터로 내려간다
export default function BlueprintHero() {
  return (
    <section className={s.hero} aria-labelledby="home-h1">
      <div className={s.stage}>
        <FitLines as="h1" id="home-h1" lines={HOME_H1} max={136} maxMo={50} />
        <div className={s.side}>
          <p className={s.rv}>{HOME_SUB}</p>
          <a className={`${s.btn} ${s.rv}`} style={{ "--i": 1 } as React.CSSProperties} href="#contact">
            광고 상담 받기
          </a>
        </div>
      </div>
      <nav className={s.map} aria-label="마케팅 설계도">
        {BLUEPRINT_STEPS.map((st) => (
          <a
            key={st.n}
            className={s[`c${st.n}`]}
            style={{ "--w": st.channels.length } as React.CSSProperties}
            href={`#step-${st.n}`}
          >
            <small>{st.n}</small>
            <div>
              <b>{st.name}</b>
              <span>{st.channels.join(" · ")}</span>
            </div>
          </a>
        ))}
      </nav>
    </section>
  )
}
