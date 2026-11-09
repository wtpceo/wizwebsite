// 폼 스팸 방지에 쓰는 숨은 필드 이름. 클라이언트(components/forms/FormGuard.tsx)와
// 서버(lib/spam-guard.ts)가 같은 이름을 써야 해서 따로 뺐다. 이 파일은 node 모듈을 쓰지 않는다.

/** 허니팟. 사람 눈에는 보이지 않고 봇만 채우는 칸. 값이 있으면 스팸이다 */
export const HONEYPOT_FIELD = "company_website"

/** 폼을 연 시각(ms). 여기서 제출까지 MIN_FILL_MS 가 안 지났으면 스팸이다 */
export const OPENED_AT_FIELD = "openedAt"

/** 사람이 폼을 채우는 데 걸리는 최소 시간. 봇은 0~1초 안에 쏜다 */
export const MIN_FILL_MS = 3000
