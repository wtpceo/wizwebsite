import s from "./home.module.css"

// 매체마다 전담 부서: 여섯 칸에 실제 작업 화면 조각. 칸마다 글과 사진의 위아래를 번갈아 바꾼다(up)
// 부서 이름·설명은 원고 §02. 실제 부서 구성은 대표 확인 대기(구성안 §09-2)
const DEPTS = [
  { name: "검색·GEO", desc: "네이버·구글 검색과 AI 답변에 브랜드가 나오게 합니다.", img: "m-search", alt: "위즈더플래닝 검색·AI 노출 관제 화면", up: false, side: "r", tall: false },
  { name: "퍼포먼스 광고", desc: "네이버, 메타, 구글·유튜브 광고를 운영합니다.", img: "m-naver", alt: "위즈더플래닝 광고 운영 화면", up: true, side: "l", tall: false },
  { name: "촬영", desc: "제품, 매장, 숏폼을 직접 찍습니다.", img: "strip-2", alt: "위즈더플래닝 촬영팀이 찍은 숏폼 장면", up: false, side: "r", tall: true },
  { name: "제작", desc: "광고 소재와 영상을 편집하고 디자인합니다.", img: "m-shortform", alt: "위즈더플래닝 제작팀 작업 화면", up: true, side: "l", tall: false },
  { name: "인플루언서 섭외", desc: "브랜드에 맞는 크리에이터를 찾아 섭외합니다.", img: "m-influencer", alt: "인플루언서 섭외 작업 장면", up: false, side: "r", tall: false },
  { name: "홈페이지 개발", desc: "광고가 도착하는 페이지를 만들고 고칩니다.", img: "hp14-mo", alt: "위즈더플래닝이 만든 치과 홈페이지 모바일 화면", up: true, side: "l", tall: true },
] as const

export default function HomeDepts() {
  return (
    <section className={s.sec} id="depts" aria-labelledby="h-depts">
      <h2 className={`${s.head} ${s.rise}`} id="h-depts" data-reveal="">
        매체마다
        <br />
        담당 부서가 따로 있습니다
      </h2>
      <p className={`${s.lede} ${s.rise}`} data-reveal="">
        광고주 한 곳을 맡으면 필요한 부서가 같이 붙습니다. 각 부서가 하는 일은 아래와 같습니다.
      </p>
      <div className={s.depts}>
        {DEPTS.map((d) => (
          <article key={d.name} className={`${s.dept} ${d.up ? s.up : ""} ${s.rise}`} data-reveal="">
            <div className={s.txt}>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
            <div className={`${s.frag} ${d.side === "r" ? s.fragR : s.fragL}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={d.tall ? s.tall : undefined}
                src={`/home/${d.img}.jpg`}
                alt={d.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
