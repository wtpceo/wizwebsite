// 선 아이콘(24 격자) — 첫 화면 시안 c1b 와 같은 모양
export const IC: Record<string, string> = {
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
  perf: '<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',
  viral: '<path d="M5 4h14v16H5z"/><path d="M8 9h8M8 13h8M8 17h5"/>',
  infl: '<path d="M12 20s-7-4.4-7-9.5A4 4 0 0 1 12 8a4 4 0 0 1 7 2.5C19 15.6 12 20 12 20z"/>',
  content: '<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>',
  global: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/>',
  home: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/>',
  off: '<rect x="6" y="3" width="12" height="18" rx="1.5"/><path d="M12 3v18M9 11h.01M15 11h.01"/>',
  plan: '<path d="M4 6h16M4 12h10M4 18h7"/><circle cx="18" cy="17" r="3"/>',
  person: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6"/>',
  phone: '<path d="M6.6 3h3l1.5 4.2-2.1 1.3a11 11 0 0 0 6.5 6.5l1.3-2.1L21 14.4v3A2.6 2.6 0 0 1 18.4 20 15.4 15.4 0 0 1 4 5.6 2.6 2.6 0 0 1 6.6 3z"/>',
  chat: '<path d="M21 11.5a8.5 7.5 0 0 1-12.4 6.6L4 19.5l1.3-3.7A7.2 7.2 0 0 1 3.5 11.5 8.5 7.5 0 0 1 21 11.5z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  loop: '<path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 4v4.5h-4.5"/>',
}

export function Icon({ k, className }: { k: string; className?: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className} dangerouslySetInnerHTML={{ __html: IC[k] || "" }} />
}
