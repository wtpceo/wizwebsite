import s from "./home.module.css"
import WallLights from "./WallLights"

// 첫 화면: 실제 작업으로 채운 판. JS로 그리지 않고 서버 마크업으로 30장을 찍는다.
// 캡션("치과 · 홈페이지 개발")이 크롤러에 그대로 읽혀야 해서다. 순서·파일명은 프로토타입 그대로.
// k: w = 가로(PC 캡처·관제 화면), t = 세로(모바일 캡처·숏폼)
const WALL: [string, "w" | "t", string][] = [
  ["hp01-pc", "w", "치과 · 홈페이지 개발"],
  ["strip-2", "t", "한식 · 숏폼 촬영"],
  ["hp13-mo", "t", "치과 · 홈페이지 개발"],
  ["hp07-pc", "w", "법률사무소 · 홈페이지 개발"],
  ["m-search", "w", "검색·AI 노출 관제"],
  ["gen_hands-filming", "t", "촬영 · 제품 숏폼"],
  ["hp12-pc", "w", "조달 컨설팅 · 홈페이지 개발"],
  ["hp10-mo", "t", "에스테틱 · 홈페이지 개발"],
  ["hp09-pc", "w", "헬스 · 홈페이지 개발"],
  ["gen_creator-back", "t", "인플루언서 섭외"],
  ["hp08-pc", "w", "펜션 · 홈페이지 개발"],
  ["hp04-mo", "t", "한의원 · 홈페이지 개발"],
  ["hp11-pc", "w", "한정식 · 홈페이지 개발"],
  ["gen_casting-desk", "t", "섭외 · 후보 검토"],
  ["hp06-pc", "w", "태권도 · 홈페이지 개발"],
  ["hp03-mo", "t", "골프 레슨 · 홈페이지 개발"],
  ["hp05-pc", "w", "치과 · 홈페이지 개발"],
  ["hp07-mo", "t", "법률사무소 · 홈페이지 개발"],
  ["hp16-pc", "w", "카페 · 홈페이지 개발"],
  ["hp15-mo", "t", "한의원 · 홈페이지 개발"],
  ["hp14-pc", "w", "치과 · 홈페이지 개발"],
  ["hp02-mo", "t", "치과 · 홈페이지 개발"],
  ["m-naver", "w", "네이버 광고 운영"],
  ["strip-2", "t", "한식 · 숏폼 촬영"],
  ["hp01-mo", "t", "치과 · 홈페이지 개발"],
  ["hp13-pc", "w", "치과 · 홈페이지 개발"],
  ["hp12-mo", "t", "조달 컨설팅 · 홈페이지 개발"],
  ["hp10-pc", "w", "에스테틱 · 홈페이지 개발"],
  ["hp05-mo", "t", "치과 · 홈페이지 개발"],
  ["hp15-pc", "w", "한의원 · 홈페이지 개발"],
]

const COLS = 6
// 앞 8장은 첫 화면에 바로 보이므로 미리 받는다
const EAGER = 8
const CAP = [s.c0, s.c1, s.c2, s.c3]

export default function HomeWall() {
  // 프로토타입처럼 i번째 장을 i % 6번째 기둥에 쌓는다
  const cols = Array.from({ length: COLS }, (_, c) =>
    WALL.map((item, i) => ({ item, i })).filter(({ i }) => i % COLS === c),
  )

  return (
    <section className={s.sheet} aria-label="위즈더플래닝">
      {/* 데스크톱에서는 판 위에 떠 있고, 휴대폰에서는 판 위로 올라온다. h1을 먼저 읽히게 앞에 둔다 */}
      <div className={s.panel}>
        <h1>
          광고, 촬영, 홈페이지까지
          <br />
          저희가 직접 합니다
        </h1>
        <p>
          2016년에 시작해 광고주 7,000여 곳과 일했습니다. 네이버·메타·구글 광고, 검색과 AI 노출, 숏폼 촬영, 인플루언서
          섭외, 홈페이지 제작을 각 담당 부서가 맡습니다.
        </p>
        <a className={s.btn} href="#contact">
          광고 상담 받기
        </a>
        <nav className={s.panelNav} aria-label="홈 안에서 이동">
          <a href="#ads">다루는 광고</a>
          <a href="#depts">부서</a>
          <a href="#work">일한 기록</a>
          <a href="#contact">문의</a>
        </nav>
      </div>

      <div className={s.sheetCols} id="home-wall">
        {cols.map((col, c) => (
          <div className={s.col} key={c}>
            {col.map(({ item: [file, kind, cap], i }) => (
              <figure key={i} className={`${s.frame} ${s[kind]} ${CAP[i % 4]}`} data-frame="">
                <div className={s.pic}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/home/${file}.jpg`}
                    alt=""
                    loading={i < EAGER ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <figcaption>{cap}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
      <WallLights containerId="home-wall" />
    </section>
  )
}
