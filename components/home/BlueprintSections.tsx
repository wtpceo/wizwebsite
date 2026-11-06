import Link from "next/link"
import { AD_SERVICES } from "@/lib/ad-services"
import { WORK_RECORDS } from "@/lib/work-records"
import { HOME_RECORDS_LEAD, HOME_WALL, HOME_WHY } from "@/lib/home-blueprint"
import BlueprintContactForm from "./BlueprintContactForm"
import s from "./blueprint.module.css"

const v = (i: number) => ({ "--i": i }) as React.CSSProperties

/** 하나로 이어서 진행하는 이유: 종이색 한 면에 제목 + 문단 하나 */
export function BlueprintWhy() {
  return (
    <section className={`${s.why} ${s.wrap}`} aria-labelledby="why-h">
      <div className={s.grid}>
        <h2 id="why-h" className={`${s.h2} ${s.rv}`}>
          {HOME_WHY.title[0]}
          <br />
          {HOME_WHY.title[1]}
        </h2>
        <p className={s.rv} style={v(1)}>
          {HOME_WHY.body}
        </p>
      </div>
    </section>
  )
}

/** 다루는 광고 7개: 줄마다 한 매체. lib/ad-services.ts를 헤더·바닥과 같이 쓴다 */
export function BlueprintMedia() {
  return (
    <section className={`${s.media} ${s.wrap}`} id="media" aria-labelledby="media-h">
      <h2 id="media-h" className={`${s.h2} ${s.rv}`}>
        다루는 광고
      </h2>
      <div>
        {AD_SERVICES.map((a, i) => (
          <Link key={a.href} href={a.href} className={`${s.row} ${s.rv}`} style={v(i + 1)}>
            <b>{a.title}</b>
            <span>{a.desc}</span>
            <i aria-hidden="true">→</i>
          </Link>
        ))}
      </div>
    </section>
  )
}

/** 일한 기록: 고르지 않은 벽 + 업종과 맡은 일 목록(업체명은 적지 않는다) */
export function BlueprintRecords() {
  return (
    <section className={`${s.records} ${s.wrap}`} id="records" aria-labelledby="records-h">
      <h2 id="records-h" className={`${s.h2} ${s.rv}`}>
        일한 기록
      </h2>
      <p className={`${s.lead} ${s.rv}`} style={v(1)}>
        {HOME_RECORDS_LEAD}
      </p>
      <div className={s.wall}>
        {HOME_WALL.map((f, i) => (
          <figure key={f.file} className={s.rv} style={{ "--w": f.w, "--h": `${f.h}px`, "--i": (i % 4) + 1 } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/home/${f.file}.jpg`} alt={`위즈더플래닝 ${f.what} 작업 화면`} loading="lazy" decoding="async" width={640} height={400} />
          </figure>
        ))}
      </div>
      <div className={`${s.names} ${s.rv}`}>
        <b>맡은 일</b>
        <ul>
          {WORK_RECORDS.map((r, i) => (
            <li key={i}>
              <Link href={r.href}>
                {r.industry} {r.work}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** 광고 상담 받기: 검정 면, 민트 버튼. 폼은 /api/contact로 간다 */
export function BlueprintContact() {
  return (
    <section className={`${s.contact} ${s.wrap}`} id="contact" aria-labelledby="contact-h">
      <div className={s.grid}>
        <h2 id="contact-h" className={`${s.h2} ${s.rv}`}>
          광고 상담 받기
        </h2>
        <p className={`${s.lead} ${s.rv}`} style={v(1)}>
          브랜드와 지금 하고 있는 마케팅을 적어 주시면, 저희가 확인하고 연락드리겠습니다.
        </p>
        <BlueprintContactForm />
      </div>
    </section>
  )
}
