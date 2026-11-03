import Link from "next/link"
import { WORK_RECORDS } from "@/lib/work-records"
import s from "./home.module.css"

// 일한 기록: 책꽂이의 책등처럼 세로로 세운 목록. 휴대폰에서는 가로 글줄로 흘린다
export default function HomeShelf() {
  return (
    <section className={s.sec} id="work" aria-labelledby="h-work">
      <div className={s.workhead}>
        <h2 className={s.rise} id="h-work" data-reveal="">
          일한 기록
        </h2>
        <p className={s.rise} data-reveal="">
          최근에 맡은 일 가운데 일부입니다. 업체 이름은 빼고 업종과 한 일만 적었습니다.
        </p>
      </div>
      <div className={s.shelf}>
        {WORK_RECORDS.map((w, i) => (
          <Link key={i} href={w.href} className={`${s.spine} ${s[w.kind]}`}>
            {w.industry}
            <em>{w.work}</em>
          </Link>
        ))}
      </div>
      <p className={s.shelfNote}>홈페이지 30곳 넘게, 숏폼 360편 넘게 기록에 있습니다.</p>
    </section>
  )
}
