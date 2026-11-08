/* 위즈더플래닝 홈 숏폼형 — 한 파일(2026-11-04)
   1 예시 화면 타일(시안 tiles.js) 2 진행 모션(h4-mg.js) 3 첫 화면 공용(h4-core.js) 4 실행부
   원본: project/wiztheplanning/시안/히어로-2026-11-04 · 바꾼 것: 경로 /sf/ · 예시 표시 「예시 화면」 · 창 버튼 목적지 */
(function(){
  var IMG=function(n){return '/sf/ex/'+n+'.jpg'};
  function bl(w){return '<span class="bl" style="width:'+w+'cqw"></span>'}
  var ICON={
    heart:'<svg class="lk" viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.8 4.5c2.1 0 3.6 1.1 5.2 3 1.6-1.9 3.1-3 5.2-3 3.8 0 5.9 3.8 4.4 7.2C19.5 16.4 12 21 12 21z"/></svg>',
    cm:'<svg viewBox="0 0 24 24"><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.1A8.5 8.5 0 1 1 21 12z"/></svg>',
    send:'<svg viewBox="0 0 24 24"><path d="M22 3L11 13M22 3l-7 18-4-8-8-4 19-6z"/></svg>',
    srch:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    hrt:'<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.8 4.5c2.1 0 3.6 1.1 5.2 3 1.6-1.9 3.1-3 5.2-3 3.8 0 5.9 3.8 4.4 7.2C19.5 16.4 12 21 12 21z"/></svg>'
  };
  var TG='<span class="tg">예시 화면</span>',TGL='<span class="tg lt">예시 화면</span>';
  var T={
    reel:function(d){return '<div class="tile reel'+(d.ad?' withad':'')+'"><img class="pic" src="'+IMG(d.img)+'" alt="" decoding="async" loading="lazy"><div class="sh"></div>'+TG+
      '<div class="rt"><i class="av"></i>'+bl(22)+'<span class="fl">팔로우</span></div>'+
      '<div class="ri">'+ICON.heart+'<span>'+d.lk+'</span>'+ICON.cm+'<span>'+d.cm+'</span>'+ICON.send+'</div>'+
      '<div class="rc"><p>'+d.cap+'</p>'+bl(46)+'</div>'+(d.ad?'<div class="ad"><span><small>광고</small>'+d.ad+'</span><span>›</span></div>':'')+'</div>'},
    ai:function(d){var h='<div class="tile ai">'+TGL+'<div class="hd"><i></i>AI 답변</div><div class="q">'+d.q+'</div><div class="a">이런 곳을 많이 찾아요.</div>';
      d.it.forEach(function(x,i){h+='<div class="it'+(i===0?' hl big':'')+'">'+(x.img?'<img src="'+IMG(x.img)+'" alt="" loading="lazy">':'')+'<div><div class="n"><em>'+(i+1)+'</em>'+bl(x.w||18)+' '+x.k+'</div><p>'+x.why+'</p></div></div>'});
      return h+'<div class="inp">무엇이든 물어보세요</div></div>'},
    srch:function(d){var h='<div class="tile srch">'+TGL+'<div class="bar">'+d.q+ICON.srch+'</div><div class="tabs">';
      ['통합','블로그','지도','카페','이미지'].forEach(function(t){h+='<span'+(t===d.tab?' class="on"':'')+'>'+t+'</span>'});h+='</div>';
      d.r.forEach(function(x,i){h+='<div class="r'+(i===0?' hl':'')+'"><div class="bd"><div class="nm">'+bl(16)+' · '+x.when+'</div><div class="t">'+(x.b?'<span class="bdg">'+x.b+'</span>':'')+x.t+'</div><div class="bd2">'+x.s+'</div></div><img src="'+IMG(x.img)+'" alt="" loading="lazy"></div>'});
      return h+'</div>'},
    rank:function(d){return '<div class="tile rank">'+TGL+'<small>'+d.t+'</small><div class="big"><span>201위 →</span> <b><i data-count="1" data-from="201" style="font-style:normal">1</i>위</b></div>'+
      '<svg viewBox="0 0 200 110"><defs><linearGradient id="rg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#2A93C2" stop-opacity=".28"/><stop offset="1" stop-color="#2A93C2" stop-opacity="0"/></linearGradient></defs><path d="M0 104 L28 96 L56 90 L84 70 L112 52 L140 30 L168 14 L200 6 L200 110 L0 110Z" fill="url(#rg)"/><path d="M0 104 L28 96 L56 90 L84 70 L112 52 L140 30 L168 14 L200 6" fill="none" stroke="#1E6C9F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="200" cy="6" r="5" fill="#1E6C9F"/></svg>'+
      '<table><tr><td>'+d.k+'</td><td>1위</td></tr><tr><td>시작한 달</td><td>201위</td></tr><tr><td>순위 확인</td><td>매달</td></tr></table></div>'},
    ads:function(){var a=[['18-24',5],['25-34',95],['35-44',159],['45-54',333],['55-64',429],['65+',286]],h='';
      a.forEach(function(x){h+='<div><i style="height:'+Math.max(3,Math.round(x[1]/429*82))+'%"></i>'+x[0]+'</div>'});
      return '<div class="tile ads">'+TGL+'<div class="hd">메타 광고 결과<small>2026.02 · 한 달</small></div><div class="kp"><div><span>링크 클릭</span><b data-count="1317">1,317</b></div><div><span>집행 광고비</span><b><i data-count="99939" style="font-style:normal">99,939</i>원</b></div><div class="w"><span>CPC</span><b>약 76원</b></div></div><div class="ch"><p>나이대별 클릭</p><div class="br">'+h+'</div></div></div>'},
    blog:function(d){return '<div class="tile blog"><div class="top"><img src="'+IMG(d.img)+'" alt="" loading="lazy">'+TG+'</div><div class="bd"><span class="bdg'+(d.red?' r':'')+'">'+d.b+'</span><b class="h4t">'+d.t+'</b><div class="by"><i></i>'+bl(18)+' · '+d.when+'</div><div class="ln2"></div><div class="ln2 s"></div></div></div>'},
    news:function(d){return '<div class="tile news">'+TGL+'<div class="mast"><b>'+bl(26)+' 신문</b><span>'+d.when+'</span></div><b class="h4t">'+d.t+'</b><div class="im"><img src="'+IMG(d.img)+'" alt="" loading="lazy"></div><div class="ln2"></div><div class="ln2" style="width:70%"></div></div>'},
    edit:function(d){return '<div class="tile edit"><div class="pv"><img src="'+IMG(d.img)+'" alt="" loading="lazy"><div class="sub2">'+d.s+'</div></div>'+TG+
      '<div class="tl"><div class="tt"><span>00:07</span><span>00:15</span></div><div class="trk"><i style="width:30%;background:#2A93C2"></i><i style="width:24%;background:#5FB3D9"></i><i style="width:40%;background:#2A93C2"></i></div><div class="trk"><i style="width:58%;background:#C98A12"></i><i style="width:36%;background:#E1B04F"></i></div><div class="trk"><i style="width:94%;background:#3D4656"></i></div><span class="ph2"></span></div></div>'},
    shoot:function(d){return '<div class="tile shoot"><img class="pic" src="'+IMG(d.img)+'" alt="" loading="lazy"><div class="gr"></div><div class="fc"></div>'+TG+'<div class="hud2"><span><i></i>00:12</span><span>4K · 60</span></div><div class="bt"><i></i></div></div>'},
    xhs:function(d){return '<div class="tile xhs">'+TGL+'<div class="im"><img src="'+IMG(d.img)+'" alt="" loading="lazy"></div><b class="h4t">'+d.t+'</b><div class="by"><i></i>'+bl(16)+'<b>'+ICON.hrt.replace('<svg','<svg')+d.lk+'</b></div></div>'},
    line:function(d){return '<div class="tile line">'+TG+'<div class="lh"><i></i>'+bl(20)+'</div><div class="msg"><img src="'+IMG(d.img)+'" alt="" loading="lazy"><p>'+d.t+'</p><a>'+d.a+'</a></div><div class="tm">午後 6:12</div></div>'},
    web:function(d){return '<div class="tile web"><div class="hb"><img src="'+IMG(d.img)+'" alt="" loading="lazy"></div><div class="nv">'+bl(24)+'<i></i></div>'+TG+'<div class="hc"><b class="h4t">'+d.h+'</b><p>'+d.s+'</p><a>'+d.b+'</a></div><div class="qb"><div><i></i>전화</div><div><i></i>예약</div><div><i></i>오시는 길</div><div class="ln2"></div></div></div>'},
    adm:function(){var r=[['dental','11월 진료 시간 안내','11.03 · 게시 중',1],['derma','사랑니 뽑은 뒤 먹어도 되는 음식','10.30 · 게시 중',1],['academy','추석 연휴 휴원 안내','09.28 · 내림',0],['pension','주차장 위치가 바뀌었어요','09.12 · 게시 중',1]],h='';
      r.forEach(function(x){h+='<div class="row"><img src="'+IMG(x[0])+'" alt="" loading="lazy"><div><b>'+x[1]+'</b><small>'+x[2]+'</small></div><span class="tgl'+(x[3]?'':' off')+'"></span></div>'});
      return '<div class="tile adm">'+TGL+'<div class="hd">소식 관리<span>새 글</span></div>'+h+'</div>'},
    elev:function(){return '<div class="tile ooh"><img class="pic" src="'+IMG('elev-real')+'" alt="" loading="lazy">'+TG+'<div class="lb">엘리베이터TV 15초<small>단지·기간 선택 송출</small></div></div>'},
    /* 택배차 광고는 짐칸에 합성한 사진(11-05 · 칸 비율마다 덧댄 판이 어긋나던 것) */
    truck:function(){return '<div class="tile ooh"><img class="pic" src="'+IMG('truck-ad')+'" alt="" loading="lazy">'+TG+'<div class="lb">택배차량 광고<small>생활권을 매일 순회하는 차량 광고</small></div></div>'},
    cine:function(){return '<div class="tile ooh"><img class="pic" src="'+IMG('cine-real')+'" alt="" loading="lazy">'+TG+'<div class="lb">극장 광고<small>본편 시작 전 15초</small></div></div>'},
    taxi:function(){return '<div class="tile ooh"><img class="pic" src="'+IMG('kakao-real')+'" alt="" loading="lazy">'+TG+'<div class="lb">카카오T 광고<small>앱과 택시 뒷좌석 화면</small></div></div>'}
  };
  var S=[
   {k:"infl",n:"인플루언서 · 유튜버 섭외 · PPL",ph:"후보 리스트부터<br>먼저 보여 드립니다.",rec:[],t1:"자체 섭외 도구 위플루언서로 유튜브·인스타 채널을 카테고리와 구독자, 성장 추이로 거르고, 타깃이 실제로 보는 크리에이터 후보 리스트를 먼저 드립니다. 섭외와 계약, 콘텐츠 가이드, 광고 소재 활용까지 같은 팀이 맡습니다.",d:["위플루언서로 카테고리·구독자·성장 추이 선별","섭외·계약·콘텐츠 가이드","조회·댓글·저장 성과 리포트"],
    tiles:[["reel",{img:"fashion-look",cap:"출근룩 트렌치 이렇게 입어요",lk:"2.4만",cm:"612"}],["reel",{img:"beauty-salon",cap:"메이크업 받고 바로 촬영 갑니다",lk:"1.1만",cm:"342"}],["reel",{img:"fnb-dessert",cap:"성수 카페 여기 진짜 조용해요",lk:"8,412",cm:"205"}],["reel",{img:"fnb-dish",cap:"돌솥 비빔밥에 반찬이 여섯 가지",lk:"6,930",cm:"117"}]]},
   {k:"perf",n:"퍼포먼스 광고",ph:"데이터가 증명한 소재에,<br>예산을 집중합니다.",rec:["펜션 메타 릴스 캠페인 24일 · 클릭 26,456회 · CPC 약 50원(사례 글 2026.8.12)"],t1:"네이버·메타·구글·카카오·당근 등 주요 매체를 전담 AE가 직접 운영합니다.",d:["매체 세팅 및 측정 설정","다중 소재 A/B 테스트","성과 기반 예산 재배분"],
    tiles:[["ads",{}],["reel",{img:"derma",cap:"첫 상담 예약 받아요",lk:"3,208",cm:"96",ad:"예약하기"}],["reel",{img:"beauty-flat",cap:"민감한 피부도 순하게",lk:"1.2만",cm:"231",ad:"구매하기"}],["reel",{img:"fashion-detail",cap:"가을 신상 니트 입고됐어요",lk:"5,420",cm:"188",ad:"구매하기"}]]},
   {k:"search",n:"AI 검색 최적화 (GEO)",ph:"AI가 추천하는지부터<br>잽니다.",rec:["ChatGPT 추천 1순위 (2026.10)","네이버 지도 201위 → 1위 (2025.08 → 2026.10)","AI 언급률 17% → 39일 뒤 93%, 그 2주 뒤 83% (정형외과 사례)"],t1:"ChatGPT·Gemini·네이버 AI 등 생성형 AI의 답변과 지도 검색에서 브랜드가 정확하게 언급되도록 정보 구조를 설계하고, 매주 측정합니다.",d:["홈페이지·지도·플랫폼 정보 일원화","실제 질의 기반 콘텐츠 설계 및 발행","주간 AI 답변 노출률 측정 (realGEO)"],
    tiles:[["ai",{q:"판교역 근처 치과 추천해 줘",it:[{img:"dental",k:"치과",why:"야간 진료 · 임플란트 상담 후기가 많아요"},{k:"치과의원",why:"주차 가능 · 토요일 진료",w:14},{k:"치과",why:"교정 상담 따로 받음",w:20}]}],["rank",{t:"네이버 지도 순위",k:"동네 이름 + 업종"}],["ai",{q:"정자동 필라테스 처음인데 어디가 좋아?",it:[{img:"pilates",k:"필라테스",why:"1:1 체험 수업 · 아침 7시 반"},{k:"스튜디오",why:"기구 수업 위주",w:16},{k:"필라테스",why:"주말 수업 있음",w:12}]}],["srch",{q:"분당 피부과",tab:"지도",r:[{img:"derma",t:"피부과의원 · 리프팅·여드름 진료",s:"방문자 리뷰 · 블로그 리뷰",when:"영업 중",b:"1"},{img:"cosme",t:"피부과 · 야간 진료",s:"방문자 리뷰",when:"영업 중"}]}]]},
   {k:"content",n:"콘텐츠 프로덕션",ph:"기획에서 배포까지,<br>자체 프로덕션.",rec:[],t1:"외부 프로덕션 없이 자체 촬영팀이 기획·촬영·편집·배포를 일괄 수행합니다.",d:["촬영 기획 및 콘티 확정","자체 촬영·편집","채널별 최적화 배포"],
    tiles:[["edit",{img:"makeup",s:"출근 전 <em>5분</em> 화장"}],["shoot",{img:"fashion-store"}],["edit",{img:"salon",s:"뿌리 볼륨만 <em>살려 주세요</em>"}],["shoot",{img:"shootcos"}]]},
   {k:"viral",n:"바이럴·평판 관리",ph:"검색 결과의 첫 화면을<br>설계합니다.",rec:["블로그 탭 1위 (2026.10)","인기글 1위 (2026.01)","기자단 원고 블로그 탭 1위 (2026.02)"],t1:"소비자가 실제로 검색하는 키워드를 먼저 분석하고, 그 결과 상단에 브랜드 콘텐츠가 자리 잡도록 블로그·언론·커뮤니티를 통합 운영합니다.",d:["키워드 리서치 및 우선순위 설정","블로거 선별 및 원고 가이드","노출 순위 모니터링 리포트"],
    tiles:[["srch",{q:"민감성 선크림 추천",tab:"블로그",r:[{img:"sunscreen",t:"민감성 피부 선크림 세 가지 써 봤어요",s:"공감 412 · 댓글 58",when:"3일 전",b:"인기글"},{img:"makeup",t:"출근 전 5분 화장 순서",s:"공감 96",when:"1주 전"},{img:"giftset",t:"선물하기 좋은 화장품 세트 정리",s:"공감 74",when:"2주 전"}]}],["blog",{img:"fnb-dessert",b:"인기글",t:"성수 조용한 카페, 딸기 생크림 케이크 맛집",when:"2026.10.21"}],["news",{img:"sunscreen",t:"국내 화장품 브랜드, 민감성 피부 라인 새로 내놓아",when:"2026.10.14"}],["blog",{img:"fcafe",b:"블로그 1위",red:1,t:"프랜차이즈 카페 겨울 신메뉴 먼저 마셔 봤어요",when:"2026.09.30"}]]},
   {k:"global",n:"글로벌 마케팅 (중국·일본)",ph:"방한 전, 현지 플랫폼에서<br>브랜드를 알립니다.",rec:[],t1:"중국·일본 소비자가 여행과 구매를 결정하는 현지 플랫폼에, 브랜드를 현지 언어와 문법으로 노출합니다.",d:["브랜드 정보 중국어·일본어 현지화","현지 KOL·KOC 콘텐츠 게시","노출·저장 성과 리포트"],
    tiles:[["xhs",{img:"giftset",t:"韩国小众护肤品牌｜敏感肌也能用",lk:"2.3万"}],["line",{img:"cosme",t:"店舗限定のスキンケアセットあります",a:"詳しく見る"}],["xhs",{img:"fashion-look",t:"首尔通勤穿搭｜风衣这样穿",lk:"1.8万"}],["line",{img:"palace",t:"景福宮で韓服体験。駅から歩いて5分です",a:"予約する"}]]},
   {k:"home",n:"웹사이트 구축",ph:"사람도, AI도<br>정확히 읽는 웹사이트.",rec:[],t1:"신규 구축부터 기존 사이트의 정보 고도화까지. 검색엔진과 생성형 AI가 브랜드를 정확히 읽기 쉬운 구조로 설계합니다.",d:["정보 구조(IA) 및 메인 시안 확정","고객사 직접 관리용 CMS 구축","구조화 데이터·FAQ 콘텐츠 반영 및 검색 등록"],
    tiles:[["web",{img:"dental",h:"평일 밤 9시까지<br>진료합니다",s:"평일 밤 9시까지 진료",b:"진료 예약"}],["web",{img:"academy",h:"밤 10시까지<br>자습을 봐 줍니다",s:"중등 수학 · 소수 정원",b:"상담 신청"}],["web",{img:"ortho",h:"평일 밤 8시까지<br>재활 치료",s:"도수치료 · 운동치료",b:"진료 예약"}],["adm",{}]]},
   {k:"off",n:"오프라인 미디어",ph:"일상의 동선 위에서,<br>반복 노출합니다.",rec:[],t1:"타깃 소비자가 매일 지나는 택배차량·극장·카카오T 모빌리티 매체에 집행합니다. 광고 소재는 자체 팀이 만듭니다.",d:["상권·타깃 반경 분석 및 매체 선정","광고 소재 제작","송출·집행 리포트"],
    tiles:[["truck",{}],["cine",{}],["taxi",{}]]}];
  function tile(t){return T[t[0]](t[1])}

var HT='<svg viewBox="0 0 24 24" class="ht CL"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.8 4.5c2.1 0 3.6 1.1 5.2 3 1.6-1.9 3.1-3 5.2-3 3.8 0 5.9 3.8 4.4 7.2C19.5 16.4 12 21 12 21z"/></svg>';
var MG={
  search:'<div class="mg mg-s"><div class="q">강남역 치과 추천해 줘</div><div class="rw a"><i></i><b></b></div><div class="rw b"><i></i><b></b></div><div class="rw us"><i></i><b>우리 브랜드</b><em>1</em></div></div>',
  perf:'<div class="mg mg-p"><div class="pv">성과 우수 <b>B안</b>으로 예산 재배분</div><div class="col c1"><i></i><span></span><small>A안</small></div><div class="col c2"><i></i><span></span><small>B안</small></div><div class="col c3"><i></i><span></span><small>C안</small></div><span class="k"></span><span class="k k2"></span></div>',
  viral:'<div class="mg mg-v"><div class="sb">민감성 선크림</div><div class="cd g1"><i></i><b></b></div><div class="cd g2"><i></i><b></b></div><div class="cd g3"><i></i><b></b></div><div class="cd me"><i></i><b><em>인기글</em>민감성 선크림 세 가지 써 봤어요</b></div></div>',
  infl:'<div class="mg mg-i"><div class="ph"><span>색 보고 바로 담았어요</span></div>'+HT.replace('CL','')+HT.replace('CL','h2')+HT.replace('CL','h3')+HT.replace('CL','h4')+HT.replace('CL','h5')+'<div class="cnt">좋아요<b></b></div><div class="bb bb1">이거 어디 거예요?</div><div class="bb bb2">저장했어요</div><div class="bb bb3">바로 주문했어요</div></div>',
  content:'<div class="mg mg-c"><div class="vf"></div><div class="rec"><i></i>REC</div><div class="st">가을 <em>신상</em> 입고</div><div class="tl"><i class="t1"></i><i class="t2"></i><i class="t3"></i></div><div class="tl2"></div><div class="pl"></div></div>',
  global:'<div class="mg mg-g"><div class="rt r1"><b class="fr">상하이</b><div class="tr"><i></i></div><div class="pl"><svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg></div><b class="to">서울</b></div><div class="rt r2"><b class="fr">도쿄</b><div class="tr"><i></i></div><div class="pl"><svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg></div><b class="to">서울</b></div><div class="sc xh"><div class="im"></div><span class="lb">샤오홍슈</span><div class="tx">韩国护肤品牌｜敏感肌也能用</div><em>♥ 저장</em></div><div class="sc ln"><div class="im"></div><span class="lb">LINE</span><div class="tx">店舗限定セットあります</div><u>予約する</u></div><div class="cap">현지 소비자가 방한 전에 보는 곳</div></div>',
  home:'<div class="mg mg-h"><div class="br"><div class="tb"><i></i><i></i><i></i></div><div class="nv"></div><div class="hi"></div><div class="t1"></div><div class="t2"></div><div class="l1"></div><div class="l2"></div><div class="btn">예약하기</div></div><svg class="cur" viewBox="0 0 24 24"><path d="M4 2l15 9-7 1.6L9.5 20z"/></svg></div>',
  off:'<div class="mg mg-o"><div class="fl">▲ <b></b></div><div class="ev"><div class="sc"><span>이번 주말<br>오픈합니다</span></div><div class="d1"></div><div class="d2"></div></div><div class="lb">택배차<br>극장<br>카카오T<br>인쇄 매체</div></div>'
};

/* 히어로 4차 기획 공용 — tiles.js(S·T·tile)와 h4-mg.js(MG) 뒤에 불러온다 */
var H4=(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(hover: hover) and (pointer: fine)').matches;
  /* 새 타일: 사진 한 장 · 모션그래픽 */
  T.pho=function(d){return '<div class="tile pho"><img class="pic" src="'+IMG(d.img)+'" alt="" loading="lazy" decoding="async"><span class="tg">예시 화면</span><div class="cp">'+d.cap+'</div></div>'};
  T.mg=function(d){return '<div class="tile mgt"><span class="tg">예시 화면</span><div class="mgw">'+MG[d.k]+'</div><p>'+d.cap+'</p></div>'};
  /* 서비스마다: 하는 일 한 줄 · 먼저 하는 일 · 휴대폰 화면 3장 */
  var X={
    search:{ln:"생성형 AI와 지도 검색의 브랜드 노출을 측정합니다",first:"채널별 브랜드 정보를 한 글자까지 맞춥니다.",ph:[["ai",{q:"판교역 근처 치과 추천해 줘",it:[{img:"m-dental",k:"치과",why:"야간 진료 · 상담 후기가 많아요"},{k:"치과의원",why:"주차 가능 · 토요일 진료",w:14},{k:"치과",why:"교정 상담 따로 받음",w:20}]}],["mg",{k:"search",cap:"AI 답변 노출 측정"}],["rank",{t:"네이버 지도 순위",k:"동네 이름 + 업종"}]]},
    perf:{ln:"주요 매체를 데이터 기반으로 직접 운영합니다",first:"소재는 테스트한 뒤 예산을 배정합니다.",ph:[["reel",{img:"derma",cap:"첫 상담 예약 받아요",lk:"3,208",cm:"96",ad:"예약하기"}],["mg",{k:"perf",cap:"성과 우수 소재로 예산을 재배분합니다"}],["ads",{}]]},
    viral:{ln:"검색 결과 첫 화면을 전략적으로 설계합니다",first:"콘텐츠보다 키워드 전략이 먼저입니다.",ph:[["srch",{q:"민감성 선크림 추천",tab:"블로그",r:[{img:"sunscreen",t:"민감성 피부 선크림 세 가지 써 봤어요",s:"공감 412 · 댓글 58",when:"3일 전",b:"인기글"},{img:"makeup",t:"출근 전 5분 화장 순서",s:"공감 96",when:"1주 전"},{img:"giftset",t:"선물하기 좋은 화장품 세트 정리",s:"공감 74",when:"2주 전"}]}],["blog",{img:"cafe",b:"인기글",t:"성수 조용한 카페, 딸기 생크림 케이크 맛집",when:"2026.10.21"}],["mg",{k:"viral",cap:"검색 결과 상단을 겨냥"}]]},
    infl:{ln:"위플루언서로 거른 후보 채널을 먼저 받아 보고 고릅니다",first:"팔로워 수가 아니라 타깃 일치도와 성장 추이로 고릅니다.",ph:[["reel",{img:"fashion-look",cap:"출근룩 트렌치 이렇게 입어요",lk:"2.4만",cm:"612"}],["reel",{img:"m-salon",cap:"펌 하고 3주 지난 상태",lk:"8,412",cm:"205"}],["mg",{k:"infl",cap:"좋아요·댓글·저장 수까지 리포트합니다"}]]},
    content:{ln:"기획·촬영·편집·배포를 자체 팀이 수행합니다",first:"촬영 일정과 장면 구성을 먼저 확정합니다.",ph:[["pho",{img:"m-shoot",cap:"자체 촬영팀이 현장으로"}],["edit",{img:"makeup",s:"출근 전 <em>5분</em> 화장"}],["edit",{img:"salon",s:"뿌리 볼륨만 <em>살려 주세요</em>"}]]},
    global:{ln:"현지 플랫폼에서 방한 소비자에게 알립니다",first:"브랜드 정보의 현지화가 첫 단계입니다.",ph:[["xhs",{img:"m-tourist",t:"首尔美妆攻略｜本地人推荐的小店",lk:"2.3万"}],["mg",{k:"global",cap:"현지 소비자가 방한 전에 보는 곳"}],["line",{img:"cosme",t:"店舗限定のスキンケアセットあります",a:"詳しく見る"}]]},
    home:{ln:"사람도, AI도 정확히 읽는 웹사이트",first:"정보 구조와 메인 시안을 먼저 확정합니다.",ph:[["web",{img:"m-dental",h:"평일 밤 9시까지<br>진료합니다",s:"주차 2시간 무료",b:"진료 예약"}],["mg",{k:"home",cap:"화면 설계부터 예약 전환까지"}],["web",{img:"m-trainer",h:"아침 7시 반<br>첫 수업",s:"1:1 체험 수업",b:"체험 신청"}]]},
    off:{ln:"택배차량·극장·카카오T, 생활 동선 위의 반복 노출",first:"상권과 타깃 반경 분석에서 시작합니다.",ph:[["truck",{}],["mg",{k:"off",cap:"매일 마주치는 15초"}],["cine",{}]]}
  };
  S.forEach(function(s){var x=X[s.k];s.ln=x.ln;s.first=x.first;s.ph=x.ph;});

  /* 휴대폰 카드 */
  function phone(i,cls){var s=S[i],sl='';s.ph.forEach(function(t,j){sl+='<div class="sl'+(j===0?' on':'')+'">'+tile(t)+'</div>'});
    return '<button type="button" class="pcard '+(cls||'')+'" data-i="'+i+'" aria-label="'+s.n+' 화면 · 누르면 자세히" aria-haspopup="dialog"><span class="glow" aria-hidden="true"></span><div class="ph">'+sl+'<div class="bars"><i></i><i></i><i></i></div></div></button>';}
  /* 한 휴대폰 안에서 화면 3장 넘기기 — 끝나면 onEnd */
  function story(card,ms,onEnd){var sls=card.querySelectorAll('.sl'),bs=card.querySelectorAll('.bars i'),k=0,t=0,live=false;card.style.setProperty('--sd',ms+'ms');
    function show(){sls.forEach(function(x,j){x.classList.toggle('on',j===k)});bs.forEach(function(x,j){x.className=j<k?'done':'';if(j===k&&live){void x.offsetWidth;x.className='run';}});}
    function step(){t=setTimeout(function(){k++;if(k>2){k=0;if(onEnd&&onEnd()===false){show();return;}}show();step();},ms);}
    return {start:function(r){clearTimeout(t);live=!reduce;if(r)k=0;show();if(live)step();},stop:function(){clearTimeout(t);live=false;show();},reset:function(){k=0;show();}};}

  /* 배경 벽 — 릴스 + 예시 화면 + AI 모델 사진을 섞어서, 빠르게 */
  function wall(el,key){/* 11-05 음식점 숏폼만 있던 벽에 패션·뷰티 숏폼(f1·f2·b1·b2 — 생성 사진으로 만든 4초 영상) 섞음 */
    var R=['v/f1','v/s1','v/f2','v/b1','v/s6','v/b2','v/s3','v/s5','v/r31','v/s4','v/s2','v/r15']; /* 11-06 사장님 「패션·뷰티가 먼저, 그다음 음식점·그 외」 */ /* 11-06 사장님 「뒤 배경은 앞 내용과 다르게 · 다 영상 쇼츠 느낌으로」: 앞 휴대폰과 겹치지 않는 세로 장면만. 업체명·간판이 보이는 r13·r14·r26·r04 뺌 */
    /* 11-06 사장님 「뒤 배경은 각 상품에 맞게」: 쪽마다 그 상품 장면만. offline 매체 사진은 실사진 받으면 교체 */
    var W={
      influencer:['v/b1','pf/infl-fashion','v/s6','pf/infl-food','v/f1','pf/infl-beauty','v/s1','ex/m-reel','v/f2','ex/fcafe','v/b2','ex/m-phone'],
      performance:['ex/cosme','ex/fashion-look','ex/sunscreen','ex/m-shop','ex/giftset','ex/fashion-detail','ex/makeup','ex/shop','ex/beauty-flat','ex/fnb-dessert','ex/fashion-store','ex/m-phone'],
      search:['ex/fnb-store','ex/dental','ex/cafe','ex/hanui','ex/salon','ex/pasta','ex/derma','ex/pilates','ex/bbq','ex/academy','ex/m-dental','ex/ortho'],
      content:['ex/m-shoot','v/r31','ex/shootcos','v/s3','ex/m-chef','v/b2','ex/m-reel','v/r15','ex/m-salon','v/s4','ex/makeup','v/f1'],
      viral:['ex/fcafe','ex/pasta','ex/sashimi','ex/fnb-dessert','ex/pension','ex/m-family','ex/bbq','ex/cafe','ex/fnb-dish','ex/beauty-salon','pf/m1','ex/palace'],
      global:['ex/m-tourist','ex/myeong','ex/palace','ex/cosme','ex/makeup','ex/sunscreen','ex/m-shop','ex/fnb-store','v/s5','ex/giftset','ex/beauty-salon','ex/fashion-look'],
      homepage:['ex/m-team','pf/w4','ex/m-phone','ex/seminar','pf/g6','ex/cafe','ex/dental','pf/w5','ex/pension','ex/fnb-store','ex/m-shop','ex/academy'],
      offline:['ex/elev-real','ex/truck-ad','ex/cine-real','ex/kakao-real','ex/cine-seat','ex/m-elev','ex/elev-ad1'],
      local:['ex/bbq','ex/salon','ex/cafe','ex/pilates','ex/hanui','ex/pension','ex/academy','ex/m-chef','ex/fcafe','ex/m-salon','ex/m-trainer','ex/fnb-store'],
      growth:['ex/fashion-look','ex/cosme','ex/giftset','ex/m-shop','ex/sunscreen','ex/shop','ex/fashion-detail','ex/beauty-flat','ex/fashion-store','ex/makeup','v/s6','v/f2'],
      enterprise:['ex/seminar','ex/m-team','ex/m-shoot','ex/truck-ad','ex/shootcos','ex/m-elev','ex/fashion-store','ex/m-tourist','ex/giftset','ex/elev-ad1']
    };
    var L=(key&&W[key])||R,MAXP=key?2:3,PLAY=key?null:{'v/f1':1,'v/s1':1,'v/b1':1},n=0;while(L.length<12)L=L.concat(L);
    var CAP={'v/s1':'세럼 한 달 써 봤어요','v/s2':'국물 한 숟갈이면 끝','v/s3':'허리 말고 엉덩이로 드세요','v/s4':'오늘의 손님 몽이','v/s5':'올레길 걸어 봤어요','v/s6':'냄비 뚜껑 열어 볼게요'};
    var it=[],seen={};L.forEach(function(r){var isv=r.indexOf('v/')===0,has=isv&&r!=='v/s2'&&r!=='v/s4'&&r!=='v/s6',pl=has&&(PLAY?PLAY[r]:1)&&n<MAXP&&!reduce&&!seen[r],c=CAP[r]?'<p class="scp">'+CAP[r]+'</p>':'';seen[r]=1;if(pl)n++;it.push(pl?'<div class="rl"><video src="/sf/'+r+'.mp4" poster="/sf/'+r+'.jpg" muted loop playsinline autoplay preload="metadata"></video>'+c+'</div>':'<div class="rl"><img src="/sf/'+r+'.jpg" alt="" loading="lazy" decoding="async">'+c+'</div>');});
    var c=['','','','','',''];it.forEach(function(h,k){c[k%6]+=h});
    el.innerHTML=c.map(function(h){return '<div class="bgc"><div class="bgk">'+h+h.replace(/ autoplay/g,'')+'</div></div>'}).join('');
    var vids=[].slice.call(el.querySelectorAll('video'));vids.forEach(function(v){v.muted=true});
    return function(on){vids.forEach(function(v){if(on&&v.hasAttribute('autoplay')){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause();})};}

  /* 누르면 그 자리에서 커지며 열리는 창 */
  var xp,xpp,from=null,last=null,busy=false;
  function mountX(){var d=document.createElement('div');d.className='xp';d.id='xp';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-labelledby','xh');
    d.innerHTML='<div class="xbg"></div><div class="xpp"><div class="xl"><small class="xin" id="xs"></small><div id="xmg"></div><p class="first xin" id="xf"></p></div><div class="xr"><div class="xin"><h3 id="xh"></h3><p class="t1" id="xt"></p><div class="recs" id="xrec"></div><ol id="xdo"></ol><div class="exs"><p>리포트는 이런 화면으로 제공됩니다 · 예시(고객사명 가림)</p><div class="strip" id="xstrip"></div></div></div><div class="xb xin"><a class="p1" id="xp1" href="/contact">진단 신청</a><a class="p2" id="xp2" href="#">자세히 보기</a></div></div><button class="xx" type="button" aria-label="닫기"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>';
    (document.getElementById('sf')||document.body).appendChild(d);xp=d;xpp=d.querySelector('.xpp');
    d.querySelector('.xx').addEventListener('click',close);d.querySelector('.xbg').addEventListener('click',close);
    var xp1=d.querySelector('#xp1');if(xp1)xp1.addEventListener('click',function(){close();});
    addEventListener('keydown',function(e){if(e.key==='Escape')close();});}
  function toRect(r){var p=xpp.getBoundingClientRect();return 'translate('+(r.left-p.left)+'px,'+(r.top-p.top)+'px) scale('+(r.width/p.width)+','+(r.height/p.height)+')';}
  function open(i,btn){if(!xp)mountX();if(busy)return;busy=true;from=btn;last=document.activeElement;var s=S[i];
    document.getElementById('xs').textContent='위즈더플래닝 · '+String(i+1).padStart(2,'0')+' / 08';
    document.getElementById('xmg').innerHTML=MG[s.k];
    document.getElementById('xf').innerHTML='<span>접근 방식</span>'+s.first;
    document.getElementById('xh').textContent=s.n;document.getElementById('xt').textContent=s.t1;
    document.getElementById('xrec').innerHTML=s.rec.map(function(r){return '<span>'+r.replace(/(?<![\d.,])(\d{1,3}(?:,\d{3})+|\d{3,})(?![.\d,]|위|년)/g,function(n){return '<span data-count="'+n.replace(/,/g,'')+'">'+n+'</span>'})+'</span>'}).join('')+(s.rn?'<small>'+s.rn+' <a href="/how-we-measure">측정 방식 보기 →</a></small>':'');if(window.SFcount)SFcount(document.getElementById('xrec'));
    document.getElementById('xdo').innerHTML=s.d.map(function(r){return '<li>'+r+'</li>'}).join('');
    var p1=document.getElementById('xp1'),p2=document.getElementById('xp2');p1.setAttribute('href','/contact?svc='+s.k);p2.setAttribute('href',s.more||('#svc-'+s.k));
    document.getElementById('xstrip').innerHTML=s.ph.map(function(t){return '<div class="sk">'+tile(t)+'</div>'}).join('');
    xp.classList.add('open');xpp.classList.remove('anim');
    if(!reduce&&btn){xpp.style.transform=toRect(btn.getBoundingClientRect());xpp.style.borderRadius='40px';void xpp.offsetWidth;xpp.classList.add('anim');}
    xpp.style.transform='';xpp.style.borderRadius='';
    requestAnimationFrame(function(){xp.classList.add('show');});
    setTimeout(function(){busy=false;xp.querySelector('.xx').focus({preventScroll:true});},reduce?0:560);
    document.body.style.overflow='hidden';if(H4.onOpen)H4.onOpen();}
  function close(){if(!xp||busy||!xp.classList.contains('open'))return;busy=true;xp.classList.remove('show');
    if(!reduce&&from){xpp.classList.add('anim');xpp.style.transform=toRect(from.getBoundingClientRect());xpp.style.borderRadius='40px';}
    setTimeout(function(){xp.classList.remove('open');xpp.classList.remove('anim');xpp.style.transform='';xpp.style.borderRadius='';busy=false;document.body.style.overflow='';if(last)last.focus({preventScroll:true});if(H4.onClose)H4.onClose();},reduce?0:560);}

  /* 검은 화면 「한 곳.」 */
  function intro(done){var el=document.getElementById('intro'),cs=el&&getComputedStyle(el);if(!el||reduce||cs.display==='none'||cs.visibility==='hidden'){if(el)el.style.display='none';done();return;}
    var fl=[].slice.call(el.querySelectorAll('.fl span')),ids=[],fin=false;
    function go(){if(fin)return;fin=true;ids.forEach(clearTimeout);el.classList.add('gone');done();setTimeout(function(){el.style.display='none'},800);}
    fl.forEach(function(s,k){ids.push(setTimeout(function(){fl.forEach(function(x){x.classList.remove('on')});s.classList.add('on');},120+k*60));});
    ids.push(setTimeout(function(){fl.forEach(function(x){x.classList.remove('on')});el.classList.add('land');},120+fl.length*60));
    ids.push(setTimeout(go,1500));el.addEventListener('click',go);}
  var INTRO='<div class="intro" id="intro" aria-hidden="true"><div class="fl"><span>MCN</span><span>광고</span><span>검색</span><span>촬영</span><span>블로그</span><span>해외</span><span>홈페이지</span><span>오프라인</span></div><div class="big"><i>한</i><i>곳</i><i>.</i></div><div class="bar"></div></div>';
  /* 화면 밖이면 멈춤 */
  /* 11-05 렉 재측정: 2번 컷으로 넘어갈 때 끊김의 주범이 돌아가는 휴대폰 고리 — 화면에 보이는 첫 화면이 화면 높이의 85% 아래로 줄면 바로 멈춘다(전에는 5% 아래에서 · 휴대폰처럼 첫 화면이 화면보다 길어도 맞게) */
  function pauseOff(hero,play){var last=null;if('IntersectionObserver' in window)new IntersectionObserver(function(es){es.forEach(function(e){var need=Math.min(innerHeight,e.boundingClientRect.height)*.85,on=e.isIntersecting&&e.intersectionRect.height>=need;if(on===last)return;last=on;hero.classList.toggle('paused',!on);play(on);})},{threshold:[0,.3,.5,.6,.65,.7,.75,.8,.85,.9,.95,1]}).observe(hero);}
  return {reduce:reduce,fine:fine,phone:phone,story:story,wall:wall,open:open,close:close,intro:intro,INTRO:INTRO,pauseOff:pauseOff};
})();


/* ── 홈 숏폼형 실행부(2026-11-04) — 위 타일·모션·첫 화면 공용 위에 얹는다 ── */
var SFD = {};
try { SFD = JSON.parse(document.getElementById('sf-data').textContent); } catch (e) { SFD = {}; }
if (SFD.svc) SFD.svc.forEach(function (d, i) { var s = S[i]; if (!s || s.k !== d.k) return; s.n = d.n; s.ln = d.ln; s.first = d.first; s.t1 = d.t1; s.d = d.d; s.rec = d.rec; s.rn = d.rn; s.more = d.more; });
var CHN = ['개요', '보고 기준', '서비스', '업종별 전략', '전문팀', '프로세스', '인사이트', '자주 묻는 질문', '문의']; /* components/shortform/content.ts 의 CHAPTERS 와 같은 이름·순서 */

/* 첫 화면 — 시안 c1b 를 서버가 그린 목록에 묶음 */
function heroInit() {
  var hero = document.getElementById('c1'); if (!hero) return;
  var N = S.length, ring = document.getElementById('ring');
  var btns = [].slice.call(document.querySelectorAll('#svl .svb')), cards = [], ctl = [], step = 0, live = false, SL = 1300; /* 휴대폰 화면 한 장 1.3초(11-05 움직임 줄이기 · 전에는 0.9초) */
  var play = H4.wall(document.getElementById('bgt'));
  S.forEach(function (s, i) { ring.insertAdjacentHTML('beforeend', H4.phone(i)); });
  /* 서비스 버튼은 상세 쪽 링크(11-05) — 마우스를 올리거나 키보드로 고르면 휴대폰 고리만 그 일로 돌린다 */
  btns.forEach(function (b, i) { b.style.setProperty('--pd', (SL * 3) + 'ms'); if (H4.fine) b.addEventListener('mouseenter', function () { if (idx() !== i) go(i); }); b.addEventListener('focus', function () { if (idx() !== i) go(i); }); });
  cards = [].slice.call(ring.querySelectorAll('.pcard'));
  cards.forEach(function (c, i) {
    c.style.transform = 'rotateY(' + (i * 360 / N) + 'deg) translateZ(var(--z))';
    c.insertAdjacentHTML('beforeend', '<span class="tagf">' + String(i + 1).padStart(2, '0') + ' ' + S[i].n + '</span>');
    ctl.push(H4.story(c, SL, function () { if (!live) return false; step++; place(); return false; }));
    c.addEventListener('click', function () { if (idx() === i) H4.open(i, c); else go(i); });
  });
  function setZ() { if (cards[0]) ring.style.setProperty('--z', Math.round(cards[0].offsetWidth * 1.72) + 'px'); }
  function idx() { return ((Math.round(step) % N) + N) % N; }
  function place() {
    ring.style.transform = 'translateZ(calc(var(--z) * -1)) rotateY(' + (-step * 360 / N) + 'deg)';
    var a = idx();
    cards.forEach(function (c, i) { c.classList.toggle('on', i === a); if (i !== a) ctl[i].stop(); });
    btns.forEach(function (b, i) { var on = i === a; if (on && live) { b.classList.remove('on'); void b.offsetWidth; } b.classList.toggle('on', on); });
    document.getElementById('cf').innerHTML = S[a].first + '<small>' + S[a].n + ' · 휴대폰을 누르면 자세히</small>';
    if (live) ctl[a].start(true); else ctl[a].reset();
  }
  function go(i) { var a = idx(), d = ((i - a) % N + N) % N; if (d > N / 2) d -= N; step += d; place(); }
  setZ(); step = H4.reduce ? 0 : -16; place();
  H4.onOpen = function () { live = false; ctl.forEach(function (c) { c.stop(); }); };
  H4.onClose = function () { live = true; place(); };
  var deep = location.hash && location.hash !== '#c1';
  var intro = document.getElementById('intro');
  if (deep && intro) intro.style.display = 'none';
  function start() {
    hero.classList.add('ready'); play(true);
    if (H4.reduce || deep) { live = true; step = 0; place(); return; }
    ring.classList.add('whirl'); requestAnimationFrame(function () { step = 0; place(); });
    setTimeout(function () { ring.classList.remove('whirl'); live = true; place(); }, 1650);
  }
  if (deep) start(); else H4.intro(start);
  var heroOn = true;
  H4.pauseOff(hero, function (on) { heroOn = on; play(on); });
  /* 11-06 밤: 휴대폰 고리는 첫 화면이 아니라 다음 컷(c1b)에 있다 — 고리가 든 컷이 보일 때만 돈다 */
  var ringCut = ring.closest('.cut') || hero;
  H4.pauseOff(ringCut, function (on) { if (!on) { live = false; ctl.forEach(function (c) { c.stop(); }); } else if (hero.classList.contains('ready')) { live = true; place(); } });
  addEventListener('resize', function () { setZ(); place(); });
}

/* 컷 — 지금 보이는 컷에만 .is-on(움직임은 CSS가 그 클래스로만 돈다) */
function cutsInit() {
  var root = document.getElementById('sf'); if (!root || !root.querySelector('.cut')) return;
  var H = document.documentElement;
  H.classList.add('sf-js');
  if (!H4.reduce) H.classList.add('sf-anim', 'sf-snap');
  var cuts = [].slice.call(root.querySelectorAll('.cut')), cur = null;
  var bars = [].slice.call(document.querySelectorAll('#sfp a')), noEl = document.getElementById('sfcNo'), chEl = document.getElementById('sfcCh'), hdr = document.getElementById('sfh'), skip = document.getElementById('sfs');
  var byCh = {};
  cuts.forEach(function (c) { var ch = +c.getAttribute('data-ch'); (byCh[ch] = byCh[ch] || []).push(c); });

  function prep(c) {
    if (c.__prep) return; c.__prep = 1;
    [].forEach.call(c.querySelectorAll('video[data-src]'), function (v) { v.src = v.getAttribute('data-src'); v.removeAttribute('data-src'); v.muted = true; });
    [].forEach.call(c.querySelectorAll('[data-tiles]'), function (el) {
      var k = el.getAttribute('data-tiles'), s = S.filter(function (x) { return x.k === k; })[0]; if (!s) return;
      var pick = (el.getAttribute('data-pick') || '0,1,2,3').split(',').map(Number), h = '';
      pick.forEach(function (p, j) { if (s.tiles[p]) h += '<div class="dk" style="--j:' + j + '">' + tile(s.tiles[p]) + '</div>'; });
      el.innerHTML = h;
    });
    if (c.id === 'c32') montagePrep();
    countUp(c);
  }
  function enter(c) {
    prep(c);
    [].forEach.call(c.querySelectorAll('video'), function (v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); });
    if (c.id === 'c32') montageGo(true);
  }
  function leave(c) {
    [].forEach.call(c.querySelectorAll('video'), function (v) { v.pause(); });
    if (c.id === 'c32') montageGo(false);
  }
  function ui(c) {
    var ch = +c.getAttribute('data-ch'), list = byCh[ch] || [c], k = list.indexOf(c);
    bars.forEach(function (b, i) { b.style.setProperty('--f', i < ch ? 1 : i > ch ? 0 : (k + 1) / list.length); b.classList.toggle('on', i === ch); if (i === ch) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
    if (noEl) noEl.textContent = String(c.getAttribute('data-no')).padStart(2, '0');
    if (chEl) chEl.textContent = CHN[ch] || '';
    if (hdr) hdr.setAttribute('data-tone', c.getAttribute('data-tone'));
    if (skip) skip.setAttribute('data-tone', c.getAttribute('data-tone'));
    if (skip) { if (c.id === 'c44' || c.id === 'c45') skip.setAttribute('data-hide', ''); else skip.removeAttribute('data-hide'); }
  }
  function activate(c) {
    if (c === cur) return;
    if (cur) { cur.classList.remove('is-on'); leave(cur); }
    cur = c; c.classList.add('is-on', 'seen'); enter(c); ui(c);
  }
  function pick() {
    var y = innerHeight * 0.5;
    for (var i = 0; i < cuts.length; i++) { var r = cuts[i].getBoundingClientRect(); if (r.top <= y && r.bottom > y) { activate(cuts[i]); return; } }
    var f = document.getElementById('sff');
    if (f && f.getBoundingClientRect().top < y && cuts.length) activate(cuts[cuts.length - 1]);
  }
  var tick = false;
  addEventListener('scroll', function () { if (tick) return; tick = true; requestAnimationFrame(function () { tick = false; pick(); }); }, { passive: true });
  addEventListener('resize', pick);
  if ('IntersectionObserver' in window) {
    var near = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { prep(e.target); near.unobserve(e.target); } }); }, { rootMargin: '120% 0px' });
    cuts.forEach(function (c) { near.observe(c); });
  } else cuts.forEach(prep);
  pick();
  /* 숨김 안전장치 — 1.5초 안에 보이는 컷이 안 잡히면 전부 보이게 */
  setTimeout(function () { if (!cur) H.classList.remove('sf-anim'); }, 1500);
}

/* 32 몽타주 — 여덟 가지 화면 32장을 0.9초씩(11-05 움직임 줄이기) */
var mtEl, mtKids = [], mtT = 0, mtK = 0;
function montagePrep() {
  mtEl = document.getElementById('montage'); if (!mtEl || mtKids.length) return;
  var h = '';
  S.forEach(function (s) { s.tiles.forEach(function (t) { h += '<div class="mk">' + tile(t) + '</div>'; }); });
  mtEl.innerHTML = h; mtKids = [].slice.call(mtEl.children);
}
function montageGo(on) {
  clearInterval(mtT); if (!mtKids.length) return;
  if (!on || H4.reduce) { mtKids.forEach(function (m, i) { m.classList.toggle('on', i === 0); }); return; }
  mtT = setInterval(function () { mtKids[mtK].classList.remove('on'); mtK = (mtK + 1) % mtKids.length; mtKids[mtK].classList.add('on'); }, 900);
}

/* 버튼들 — 서비스 미리 고르기 · 카카오톡 클릭 기록 · 휴대폰 메뉴 */
function chromeInit() {
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null; if (!a) return;
    if (a.hasAttribute('data-kakao')) {
      try { if (window.gtag) window.gtag('event', 'chat_click', { channel: 'kakao', page_path: location.pathname, transport_type: 'beacon' }); } catch (x) {}
      try { if (window.fbq) window.fbq('track', 'Contact', { content_name: '카카오톡 상담' }); } catch (x) {}
    }
    if (a.closest('#sfm')) menu(false);
  }, true);
  var btn = document.getElementById('sfhMenu'), m = document.getElementById('sfm'), x = document.getElementById('sfmX');
  function menu(on) { if (!m) return; m.hidden = !on; btn.setAttribute('aria-expanded', on ? 'true' : 'false'); document.documentElement.classList.toggle('sf-menu', on); if (on && x) x.focus({ preventScroll: true }); }
  if (btn) btn.addEventListener('click', function () { menu(m.hidden); });
  if (x) x.addEventListener('click', function () { menu(false); btn.focus({ preventScroll: true }); });
  addEventListener('keydown', function (e) { if (e.key === 'Escape' && m && !m.hidden) menu(false); });
}

/* 새 쪽(문서형) — 예시 화면 묶음을 화면 가까이 올 때 그림 · 보이면 .on(등장 움직임) */
function docInit() {
  if (document.querySelector('#sf .cut')) return;
  var H = document.documentElement; H.classList.add('sf-js'); if (!H4.reduce) H.classList.add('sf-anim');
  function build(el) {
    if (el.__b) return; el.__b = 1;
    var k = el.getAttribute('data-tiles'), s = S.filter(function (x) { return x.k === k; })[0]; if (!s) return;
    var pick = (el.getAttribute('data-pick') || '0,1,2,3').split(',').map(Number), h = '';
    pick.forEach(function (p, j) { if (s.tiles[p]) h += '<div class="dk" style="--j:' + j + '">' + tile(s.tiles[p]) + '</div>'; });
    el.innerHTML = h;
    countUp(el);
  }
  /* 소개 쪽 첫 화면 뒤 숏폼 벽(11-05) — 첫 화면이 보일 때만 돌고, 「동작 줄이기」면 멈춘 그림 */
  [].slice.call(document.querySelectorAll('[data-wall]')).forEach(function (w) {
    var play = H4.wall(w, w.getAttribute('data-wall')), sec = w.closest('.dp-hero');
    if (H4.reduce || !sec) return;
    if (!('IntersectionObserver' in window)) { play(true); return; }
    new IntersectionObserver(function (es) { es.forEach(function (e) { sec.classList.toggle('paused', !e.isIntersecting); play(e.isIntersecting); }); }).observe(sec);
  });
  var els = [].slice.call(document.querySelectorAll('[data-tiles]')), rv = [].slice.call(document.querySelectorAll('.rv'));
  /* 작업물 띠 숏폼(11-05) — 화면 가까이 오면 그때 받고, 「동작 줄이기」면 첫 장면만 */
  var vids = [].slice.call(document.querySelectorAll('.dp-works video[data-src]'));
  function vplay(v) { if (v.getAttribute('data-src')) { v.src = v.getAttribute('data-src'); v.removeAttribute('data-src'); v.muted = true; } if (!H4.reduce) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } }
  if ('IntersectionObserver' in window) { var io3 = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) vplay(e.target); else e.target.pause(); }); }, { rootMargin: '20% 0px' }); vids.forEach(function (v) { io3.observe(v); }); } else vids.forEach(vplay);
  if (!('IntersectionObserver' in window)) { els.forEach(build); rv.forEach(function (e) { e.classList.add('on'); }); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { build(e.target); io.unobserve(e.target); } }); }, { rootMargin: '60% 0px' });
  els.forEach(function (e) { io.observe(e); });
  var fired = false, io2 = new IntersectionObserver(function (es) { fired = true; es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); io2.unobserve(e.target); } }); }, { threshold: .12 });
  rv.forEach(function (e) { var r = e.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) e.classList.add('on'); else io2.observe(e); });
  setTimeout(function () { if (!fired) rv.forEach(function (e) { e.classList.add('on'); }); }, 2500);
}

/* 쪽 옮김은 문서를 새로 읽는다 — next/script 는 이 파일을 문서당 한 번만 돌린다.
   넥스트가 쪽만 바꿔 끼우면(링크·뒤로 가기) 새 쪽에 움직임이 안 붙어 홈은 인트로 검은 막이, 새 쪽은 본문이 투명하게 남는다(11-04 검수 Critical).
   그래서 이 파일이 돈 문서에서는 다른 주소로 가는 링크·주소 바꿈·뒤로 가기를 전부 진짜 쪽 이동으로 바꾼다. 같은 쪽 안 #컷 이동은 그대로. */
function hardNav() {
  var here = location.pathname;
  function away(u) { try { var x = new URL(u, location.href); return x.origin === location.origin && x.pathname !== here; } catch (e) { return false; } }
  addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download') || !away(a.href)) return;
    e.preventDefault(); e.stopPropagation(); location.assign(a.href);
  }, true);
  var push = history.pushState, rep = history.replaceState;
  history.pushState = function (st, t, u) { if (u != null && away(u)) { location.assign(new URL(u, location.href).href); return; } return push.apply(history, arguments); };
  history.replaceState = function (st, t, u) { if (u != null && away(u)) { location.replace(new URL(u, location.href).href); return; } return rep.apply(history, arguments); };
  addEventListener('popstate', function () { if (location.pathname !== here) location.reload(); });
}

/* 숫자가 0부터 올라가서 멈춤(11-05 사장님 「숫자가 올라가서 멈추는 모션」) — [data-count] 가 화면에 보이면 1.1초.
   글자는 처음부터 최종 숫자로 들어 있다(검색·AI·스크립트 없을 때 그대로). 「동작 줄이기」면 안 움직임 */
var cntIO = null;
function countUp(root) {
  if (H4.reduce) return;
  var els = [].slice.call((root || document).querySelectorAll('[data-count]:not([data-cn])'));
  if (!els.length) return;
  function run(el) {
    var to = parseFloat(el.getAttribute('data-count')) || 0, from = parseFloat(el.getAttribute('data-from')) || 0, t0 = performance.now(), dur = 1100, comma = /,/.test(el.textContent);
    function fmt(n) { return comma ? n.toLocaleString('ko-KR') : String(n); }
    var dl = parseFloat(el.getAttribute('data-delay')) || 0; t0 += dl;
    function step(t) { if (t < t0) { requestAnimationFrame(step); return; } var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = fmt(Math.round(from + (to - from) * e)); if (k < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  if (!('IntersectionObserver' in window)) return;
  if (!cntIO) cntIO = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { cntIO.unobserve(e.target); run(e.target); } }); }, { threshold: .5 });
  els.forEach(function (el) { el.setAttribute('data-cn', ''); cntIO.observe(el); });
}

window.SFcount = countUp;
hardNav();
chromeInit();
cutsInit();
heroInit();
docInit();
countUp(document);

})();
