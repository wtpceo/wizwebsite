// 선 아이콘(24 격자) — 서비스 8개는 11-05 사장님 「아이콘 바꾸기」로 하는 일이 바로 보이는 모양으로(검색+반짝임·오르는 선·펜·재생·카메라·지구·코드 창·화면)
export const IC: Record<string, string> = {
  search: '<circle cx="10" cy="11" r="6"/><path d="M20 21l-5.6-5.6"/><path d="M18.5 2.6l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8z"/>',
  perf: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  viral: '<path d="M4 20.5h16"/><path d="M15 4l3.5 3.5L8.5 17.5H5V14z"/>',
  infl: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9.2v5.6l4.8-2.8z"/>',
  content: '<path d="M3 8.6A1.6 1.6 0 0 1 4.6 7h2.6l1.6-2.3h6.4L16.8 7h2.6A1.6 1.6 0 0 1 21 8.6v8.8a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 17.4z"/><circle cx="12" cy="12.8" r="3.4"/>',
  global: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/>',
  home: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8.5h18"/><path d="M9.5 12l-2.5 2.3 2.5 2.3M14.5 12l2.5 2.3-2.5 2.3"/>',
  off: '<rect x="2.5" y="4" width="19" height="12.5" rx="1.6"/><path d="M8 20.5h8M12 16.5v4"/><path d="M10 8.2v4.6l4-2.3z"/>',
  kakao: '<path fill="currentColor" stroke="none" d="M12 3.6c-5 0-9 3.1-9 7 0 2.5 1.7 4.7 4.2 6l-.9 3.4c-.1.3.3.6.6.4l4-2.7c.4 0 .7.1 1.1.1 5 0 9-3.1 9-7s-4-7.2-9-7.2z"/>',
  plan: '<path d="M4 6h16M4 12h10M4 18h7"/><circle cx="18" cy="17" r="3"/>',
  person: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6"/>',
  phone: '<path d="M6.6 3h3l1.5 4.2-2.1 1.3a11 11 0 0 0 6.5 6.5l1.3-2.1L21 14.4v3A2.6 2.6 0 0 1 18.4 20 15.4 15.4 0 0 1 4 5.6 2.6 2.6 0 0 1 6.6 3z"/>',
  chat: '<path d="M21 11.5a8.5 7.5 0 0 1-12.4 6.6L4 19.5l1.3-3.7A7.2 7.2 0 0 1 3.5 11.5 8.5 7.5 0 0 1 21 11.5z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
  loop: '<path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 4v4.5h-4.5"/>',
}

export function Icon({ k, className }: { k: string; className?: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className} data-k={k} dangerouslySetInnerHTML={{ __html: IC[k] || "" }} />
}
