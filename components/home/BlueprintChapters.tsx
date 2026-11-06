import Link from "next/link"
import { BLUEPRINT_STEPS } from "@/lib/home-blueprint"
import FitLines from "./FitLines"
import s from "./blueprint.module.css"

// 설계도 다섯 챕터. 단계마다 화면 한 장이 민트 → 남색 → 종이 → 흰색 → 검정으로 이어진다.
// 자료가 있는 단계(1·2·5)는 왼쪽 사진 + 오른쪽 글, 없는 단계(3·4)는 글자만으로 세운다(.t)
export default function BlueprintChapters() {
  return (
    <>
      <h2 className={s.sr}>마케팅 설계도</h2>
      {BLUEPRINT_STEPS.map((st) => (
        <section
          key={st.n}
          id={`step-${st.n}`}
          className={`${s.ch} ${s[`c${st.n}`]} ${st.img ? "" : s.t}`}
          aria-labelledby={`step-${st.n}-h`}
        >
          <div className={`${s.no} ${s.rv}`}>
            {st.n} · {st.name}
          </div>
          <FitLines as="h2" id={`step-${st.n}-h`} lines={[st.title]} max={96} maxMo={44} />
          {st.img && (
            <figure className={s.rv} style={{ "--i": 2 } as React.CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={st.img.src} width={st.img.w} height={st.img.h} alt={st.img.alt} loading="lazy" decoding="async" />
            </figure>
          )}
          <div className={`${s.txt} ${s.rv}`} style={{ "--i": 3 } as React.CSSProperties}>
            <p>{st.desc}</p>
            <ul>
              {st.channels.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className={s.go}>
              {st.links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
