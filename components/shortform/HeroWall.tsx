/**
 * 첫 화면 뒤 사진 벽을 서버에서 바로 그린다(2026-11-10 속도 점검).
 *
 * 예전에는 public/sf/sf.js 의 wall() 이 실행된 뒤에야 사진을 넣었다. 그러면 휴대폰에서 스크립트를 다 받고 나서야
 * 큰 JPG 12장을 받기 시작해, 브라우저가 재는 「가장 큰 그림이 뜨는 시간(LCP)」이 8~11초로 나왔다.
 * 여기서는 같은 구조(.bgt > .bgc > .bgk > .rl)를 HTML 에 미리 넣고, 사진은 가로 360px webp 를 쓴다.
 * sf.js 는 data-wall 안에 이미 그림이 있으면 새로 만들지 않고 영상 재생만 맡는다.
 *
 * 목록과 규칙은 sf.js wall() 과 같아야 한다(쪽마다 그 상품 장면 12장, 6줄, 줄마다 2장을 네 번 이음, 처음 나오는 영상 2개만 재생).
 * 벽 사진을 바꾸면: ① 아래 목록 ② sf.js 의 W ③ public/sf/<경로>.webp(360px) 세 곳을 같이 고친다.
 * fetchPriority="high" 도 붙이지 않는다. 12장이 CSS 와 같은 순위로 내려와 첫 화면 글자가 1초 넘게 늦게 떴다(실측).
 * 사진에 loading="lazy" 를 붙이지 않는다. 벽이 흘러 늦게 들어온 칸이 그때 받아지면 그 칸이 LCP 로 다시 잡힌다.
 */
const DEFAULT = ["v/f1", "v/s1", "v/f2", "v/b1", "v/s6", "v/b2", "v/s3", "v/s5", "v/r31", "v/s4", "v/s2", "v/r15"]

const WALLS: Record<string, string[]> = {
  influencer: ["v/b1", "pf/infl-fashion", "v/s6", "pf/infl-food", "v/f1", "pf/infl-beauty", "v/s1", "ex/m-reel", "v/f2", "ex/fcafe", "v/b2", "ex/m-phone"],
  // 11-11 대표 「사진들 폴더의 퍼포1~10으로 바꿔 줘」: 광고 소재 느낌의 제품 컷 아홉 장(7번 없음), 열두 칸을 채우려 세 장은 한 번 더
  performance: ["perf/ad1","perf/ad2","perf/ad3","perf/ad4","perf/ad5","perf/ad6","perf/ad8","perf/ad9","perf/ad10","perf/ad2","perf/ad4","perf/ad8"],
  search: ["ex/fnb-store", "ex/dental", "ex/cafe", "ex/hanui", "ex/salon", "ex/pasta", "ex/derma", "ex/pilates", "ex/bbq", "ex/academy", "ex/m-dental", "ex/ortho"],
  content: ["v/r31", "pf/w1", "ex/m-shoot", "v/r15", "pf/w6", "v/r11", "pf/w4", "v/r22", "ex/shootcos", "pf/w2", "v/r03", "pf/g2"],
  viral: ["ex/fcafe", "ex/pasta", "ex/sashimi", "ex/fnb-dessert", "ex/pension", "ex/m-family", "ex/bbq", "ex/cafe", "ex/fnb-dish", "ex/beauty-salon", "pf/m1", "ex/palace"],
  global: ["ex/m-tourist", "ex/myeong", "ex/palace", "ex/cosme", "ex/makeup", "ex/sunscreen", "ex/m-shop", "ex/fnb-store", "v/s5", "ex/giftset", "ex/beauty-salon", "ex/fashion-look"],
  homepage: ["ex/m-team", "pf/w4", "ex/m-phone", "ex/seminar", "pf/g6", "ex/cafe", "ex/dental", "pf/w5", "ex/pension", "ex/fnb-store", "ex/m-shop", "ex/academy"],
  offline: ["ex/elev-real", "ex/truck-ad", "ex/cine-real", "ex/kakao-real", "ex/cine-seat", "ex/m-elev", "ex/elev-ad1"],
  local: ["ex/bbq", "ex/salon", "ex/cafe", "ex/pilates", "ex/hanui", "ex/pension", "ex/academy", "ex/m-chef", "ex/fcafe", "ex/m-salon", "ex/m-trainer", "ex/fnb-store"],
  growth: ["ex/fashion-look", "ex/cosme", "ex/giftset", "ex/m-shop", "ex/sunscreen", "ex/shop", "ex/fashion-detail", "ex/beauty-flat", "ex/fashion-store", "ex/makeup", "v/s6", "v/f2"],
  team: ["ex/m-team", "ex/m-shoot", "v/r31", "ex/seminar", "ex/shootcos", "pf/w1", "ex/m-reel", "v/r15", "pf/infl-beauty", "ex/m-chef", "pf/w4", "ex/m-salon"],
  about: ["ex/m-team", "ex/m-shoot", "pf/infl-beauty", "ex/seminar", "ex/cosme", "v/r31", "ex/dental", "pf/w4", "ex/truck-ad", "ex/m-reel", "ex/fnb-store", "ex/m-tourist"],
  enterprise: ["ex/seminar", "ex/m-team", "ex/m-shoot", "ex/truck-ad", "ex/shootcos", "ex/cine-real", "ex/fashion-store", "ex/m-tourist", "ex/giftset", "ex/fashion-look"],
}

const CAP: Record<string, string> = {"v/s1": "세럼 한 달 써 봤어요", "v/s2": "국물 한 숟갈이면 끝", "v/s3": "허리 말고 엉덩이로 드세요", "v/s4": "오늘의 손님 몽이", "v/s5": "올레길 걸어 봤어요", "v/s6": "냄비 뚜껑 열어 볼게요"}

const NO_VIDEO = new Set(["v/s2", "v/s4", "v/s6"])

export default function HeroWall({ k }: { k: string }) {
  let list = WALLS[k] || DEFAULT
  while (list.length < 12) list = list.concat(list)
  const seen = new Set<string>()
  let playing = 0
  const items = list.map((r) => {
    const video = r.startsWith("v/") && !NO_VIDEO.has(r) && playing < 2 && !seen.has(r)
    seen.add(r)
    if (video) playing++
    return { r, video }
  })
  return (
    <div className="bgt" data-wall={k}>
      {Array.from({ length: 6 }, (_, c) => {
        const col = items.filter((_, i) => i % 6 === c)
        const n = col.length
        return (
          <div className="bgc" key={c}>
            <div className="bgk">
              {[...col, ...col, ...col, ...col].map((it, i) => (
                <div className="rl" key={i}>
                  {it.video && i < n ? (
                    <video src={`/sf/${it.r}.mp4`} poster={`/sf/${it.r}.webp`} muted loop playsInline preload="none" data-ap="" />
                  ) : (
                    <img src={`/sf/${it.r}.webp`} alt="" width={360} height={640} />
                  )}
                  {CAP[it.r] ? <p className="scp">{CAP[it.r]}</p> : null}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
