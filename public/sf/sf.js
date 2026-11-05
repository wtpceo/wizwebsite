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
      '<table><tr><td>'+d.k+'</td><td>1위</td></tr><tr><td>시작한 달</td><td>201위</td></tr><tr><td>순위 확인</td><td>매주</td></tr></table></div>'},
    ads:function(){var a=[['18-24',5],['25-34',95],['35-44',159],['45-54',333],['55-64',429],['65+',286]],h='';
      a.forEach(function(x){h+='<div><i style="height:'+Math.max(3,Math.round(x[1]/429*82))+'%"></i>'+x[0]+'</div>'});
      return '<div class="tile ads">'+TGL+'<div class="hd">메타 광고 결과<small>2026.02 · 한 달</small></div><div class="kp"><div><span>링크 클릭</span><b data-count="1317">1,317</b></div><div><span>쓴 광고비</span><b><i data-count="99939" style="font-style:normal">99,939</i>원</b></div><div class="w"><span>클릭 한 번에</span><b>약 76원</b></div></div><div class="ch"><p>나이대별 클릭</p><div class="br">'+h+'</div></div></div>'},
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
    elev:function(){return '<div class="tile ooh tv"><img class="pic" src="'+IMG('elev-ad1')+'" alt="" loading="lazy"><img class="pic tv2" src="'+IMG('elev-ad2')+'" alt="" loading="lazy"><img class="pic tv3" src="'+IMG('elev-ad3')+'" alt="" loading="lazy">'+TG+'<div class="lb">엘리베이터TV 15초<small>단지·기간을 골라 송출</small></div></div>'},
    /* 택배차 광고는 짐칸에 합성한 사진(11-05 · 칸 비율마다 덧댄 판이 어긋나던 것) */
    truck:function(){return '<div class="tile ooh"><img class="pic" src="'+IMG('truck-ad')+'" alt="" loading="lazy">'+TG+'<div class="lb">택배차량 광고<small>동네를 매일 지나는 차에 부착</small></div></div>'},
    cine:function(){return '<div class="tile dark">'+TG+'<div class="cp">극장 광고<b>본편 시작 전 15초</b></div><div class="scr"><img src="'+IMG('fcafe')+'" alt="" loading="lazy"><span>겨울 신메뉴 나왔어요</span></div><div class="seats"></div></div>'},
    taxi:function(){return '<div class="tile tab">'+TG+'<div class="seat"></div><div class="cp">택시 뒷좌석 화면</div><div class="pad"><img src="'+IMG('derma')+'" alt="" loading="lazy"><span>퇴근길 피부 상담</span></div></div>'}
  };
  var S=[
   {k:"infl",n:"유튜버·인스타·틱톡 MCN",ph:"팔로워 많은 계정이<br>소개하게",rec:["저희 맛집 채널 @matzip_town 팔로워 5.1만 · 2026.11"],t1:"팔로워 많은 계정이 우리 브랜드를 소개합니다. 저희가 직접 운영하는 채널도 있습니다.",d:["업종·손님층에 맞는 계정 찾기","방문 날짜와 올릴 내용 맞추기","게시물 주소와 반응 보고"],
    tiles:[["reel",{img:"fnb-dish",cap:"돌솥 비빔밥에 반찬이 여섯 가지",lk:"2.4만",cm:"612"}],["reel",{img:"fnb-dessert",cap:"성수 카페 여기 진짜 조용해요",lk:"1.1만",cm:"342"}],["reel",{img:"beauty-salon",cap:"메이크업 받고 바로 촬영 갑니다",lk:"8,412",cm:"205"}],["reel",{img:"fashion-look",cap:"출근룩 트렌치 이렇게 입어요",lk:"6,930",cm:"117"}]]},
   {k:"perf",n:"퍼포먼스",ph:"광고는 마케터가<br>직접 돌리고",rec:["메타 광고 1,317번 클릭 · 99,939원 · 2026.02"],t1:"네이버·메타·구글·당근 광고를 담당 마케터가 직접 운영합니다.",d:["담당 마케터가 세팅·운영","자체 제작 영상·이미지 여러 개 비교","반응 좋은 쪽으로 예산 이동"],
    tiles:[["ads",{}],["reel",{img:"derma",cap:"첫 상담 예약 받아요",lk:"3,208",cm:"96",ad:"예약하기"}],["reel",{img:"beauty-flat",cap:"민감한 피부도 순하게",lk:"1.2만",cm:"231",ad:"구매하기"}],["reel",{img:"fashion-detail",cap:"가을 신상 니트 입고됐어요",lk:"5,420",cm:"188",ad:"구매하기"}]]},
   {k:"search",n:"검색 최적화",ph:"AI가 먼저<br>추천하게",rec:["ChatGPT 추천 1순위 · 2026.10.28","네이버 지도 201위 → 1위 · 2026.10"],t1:"AI가 추천할 때, 지도에서 고를 때 우리 브랜드가 먼저 나오게 합니다.",d:["홈페이지·지도 정보를 똑같이 맞추기","손님 질문에 답하는 글 올리기","매주 같은 질문으로 다시 묻고 보고"],
    tiles:[["ai",{q:"판교역 근처 치과 추천해 줘",it:[{img:"dental",k:"치과",why:"야간 진료 · 임플란트 상담 후기가 많아요"},{k:"치과의원",why:"주차 가능 · 토요일 진료",w:14},{k:"치과",why:"교정 상담 따로 받음",w:20}]}],["rank",{t:"네이버 지도 순위",k:"동네 이름 + 업종"}],["ai",{q:"정자동 필라테스 처음인데 어디가 좋아?",it:[{img:"pilates",k:"필라테스",why:"1:1 체험 수업 · 아침 7시 반"},{k:"스튜디오",why:"기구 수업 위주",w:16},{k:"필라테스",why:"주말 수업 있음",w:12}]}],["srch",{q:"분당 피부과",tab:"지도",r:[{img:"derma",t:"피부과의원 · 리프팅·여드름 진료",s:"방문자 리뷰 · 블로그 리뷰",when:"영업 중",b:"1"},{img:"cosme",t:"피부과 · 야간 진료",s:"방문자 리뷰",when:"영업 중"}]}]]},
   {k:"content",n:"콘텐츠·미디어",ph:"찍고 자르고<br>자막까지",rec:[],t1:"자체 촬영팀이 가서 찍고, 자막·음악까지 넣어 릴스·쇼츠로 올립니다.",d:["자체 촬영팀이 가서 촬영","자막·음악 넣어 편집","릴스·쇼츠·블로그에 올리기"],
    tiles:[["edit",{img:"sashimi",s:"오늘 들어온 <em>광어</em>"}],["shoot",{img:"fashion-store"}],["edit",{img:"salon",s:"뿌리 볼륨만 <em>살려 주세요</em>"}],["shoot",{img:"shootcos"}]]},
   {k:"viral",n:"바이럴",ph:"블로그 검색<br>맨 위로",rec:["블로그 탭 1위 · 2026.10.26","인기글 1위 · 2026.01"],t1:"블로그·체험단·기자단·언론 기사로 검색 맨 위를 잡습니다.",d:["올릴 검색어 정하기","블로거 고르고 글 가이드 만들기","올라간 글 주소 보고"],
    tiles:[["srch",{q:"민감성 선크림 추천",tab:"블로그",r:[{img:"sunscreen",t:"민감성 피부 선크림 세 가지 써 봤어요",s:"공감 412 · 댓글 58",when:"3일 전",b:"인기글"},{img:"makeup",t:"출근 전 5분 화장 순서",s:"공감 96",when:"1주 전"},{img:"giftset",t:"선물하기 좋은 화장품 세트 정리",s:"공감 74",when:"2주 전"}]}],["blog",{img:"fnb-dessert",b:"인기글",t:"성수 조용한 카페, 딸기 생크림 케이크 맛집",when:"2026.10.21"}],["news",{img:"sunscreen",t:"국내 화장품 브랜드, 민감성 피부 라인 새로 내놓아",when:"2026.10.14"}],["blog",{img:"fcafe",b:"블로그 1위",red:1,t:"프랜차이즈 카페 겨울 신메뉴 먼저 마셔 봤어요",when:"2026.09.30"}]]},
   {k:"global",n:"글로벌",ph:"샤오홍슈·LINE에도<br>올리고",rec:["중국 샤오홍슈 · 도우인 · 왕홍 공동구매","일본 인스타 · LINE"],t1:"한국에 오기 전 손님이 보는 샤오홍슈·LINE에 업체를 올립니다.",d:["업체 소개·메뉴를 중국어·일본어로 정리","현지 체험단·인플루언서 게시","검색 노출과 저장 수 보고"],
    tiles:[["xhs",{img:"myeong",t:"明洞逛吃攻略｜本地人推荐的小店",lk:"2.3万"}],["line",{img:"palace",t:"景福宮で韓服体験。駅から歩いて5分です",a:"予約する"}],["xhs",{img:"giftset",t:"韩国小众护肤品牌｜敏感肌也能用",lk:"1.8万"}],["line",{img:"cosme",t:"店舗限定のスキンケアセットあります",a:"詳しく見る"}]]},
   {k:"home",n:"홈페이지 제작",ph:"홈페이지는<br>새로 만들고",rec:[],t1:"AI와 검색이 읽기 쉬운 홈페이지를 새로 만들거나, 지금 홈페이지 속 정보만 고칩니다.",d:["구조안과 메인 시안 확인받고 제작","소식·휴무를 직접 고치는 관리자 화면","질문형 글 올리고 색인 요청"],
    tiles:[["web",{img:"dental",h:"아프지 않게,<br>오래 쓰게.",s:"평일 밤 9시까지 진료",b:"진료 예약"}],["web",{img:"academy",h:"밤 10시까지<br>자습을 봐 줍니다",s:"중등 수학 · 소수 정원",b:"상담 신청"}],["web",{img:"ortho",h:"평일 밤 8시까지<br>재활 치료",s:"도수치료 · 운동치료",b:"진료 예약"}],["adm",{}]]},
   {k:"off",n:"오프라인 미디어",ph:"엘리베이터TV에도<br>띄웁니다",rec:["포커스미디어 엘리베이터TV 공식 총판"],t1:"엘리베이터TV·택배차·극장·카카오T까지 고객 눈에 띄는 곳에 광고합니다.",d:["매장·병원 근처 단지·차량·극장 고르기","광고 영상·시안 제작","송출·부착 기간 보고"],
    tiles:[["elev",{}],["truck",{}],["cine",{}],["taxi",{}]]}];
  function tile(t){return T[t[0]](t[1])}

var HT='<svg viewBox="0 0 24 24" class="ht CL"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.8 4.5c2.1 0 3.6 1.1 5.2 3 1.6-1.9 3.1-3 5.2-3 3.8 0 5.9 3.8 4.4 7.2C19.5 16.4 12 21 12 21z"/></svg>';
var MG={
  search:'<div class="mg mg-s"><div class="q">강남역 치과 추천해 줘</div><div class="rw a"><i></i><b></b></div><div class="rw b"><i></i><b></b></div><div class="rw us"><i></i><b>우리 브랜드</b><em>1</em></div></div>',
  perf:'<div class="mg mg-p"><div class="pv">반응 좋은 <b>B안</b>으로 예산 이동</div><div class="col c1"><i></i><span></span><small>A안</small></div><div class="col c2"><i></i><span></span><small>B안</small></div><div class="col c3"><i></i><span></span><small>C안</small></div><span class="k"></span><span class="k k2"></span></div>',
  viral:'<div class="mg mg-v"><div class="sb">민감성 선크림</div><div class="cd g1"><i></i><b></b></div><div class="cd g2"><i></i><b></b></div><div class="cd g3"><i></i><b></b></div><div class="cd me"><i></i><b><em>인기글</em>민감성 선크림 세 가지 써 봤어요</b></div></div>',
  infl:'<div class="mg mg-i"><div class="ph"><span>두께 보고 바로 들어감</span></div>'+HT.replace('CL','')+HT.replace('CL','h2')+HT.replace('CL','h3')+HT.replace('CL','h4')+HT.replace('CL','h5')+'<div class="cnt">좋아요<b></b></div><div class="bb bb1">여기 어디예요?</div><div class="bb bb2">저장했어요</div><div class="bb bb3">주말에 가 볼게요</div></div>',
  content:'<div class="mg mg-c"><div class="vf"></div><div class="rec"><i></i>REC</div><div class="st">오늘 들어온 <em>광어</em></div><div class="tl"><i class="t1"></i><i class="t2"></i><i class="t3"></i></div><div class="tl2"></div><div class="pl"></div></div>',
  global:'<div class="mg mg-g"><div class="gl"></div><svg viewBox="0 0 100 75" preserveAspectRatio="none"><path d="M14 56 Q 26 18 51 28"/><path class="p2" d="M88 52 Q 76 16 51 28"/></svg><div class="pin"></div><div class="sl">서울</div><div class="chip cn">샤오홍슈</div><div class="chip jp">LINE</div><div class="cap">중국·일본 손님이 오기 전에 보는 곳</div></div>',
  home:'<div class="mg mg-h"><div class="br"><div class="tb"><i></i><i></i><i></i></div><div class="nv"></div><div class="hi"></div><div class="t1"></div><div class="t2"></div><div class="l1"></div><div class="l2"></div><div class="btn">예약하기</div></div><svg class="cur" viewBox="0 0 24 24"><path d="M4 2l15 9-7 1.6L9.5 20z"/></svg></div>',
  off:'<div class="mg mg-o"><div class="fl">▲ <b></b></div><div class="ev"><div class="sc"><span>이번 주말<br>오픈합니다</span></div><div class="d1"></div><div class="d2"></div></div><div class="lb">엘리베이터TV<br>택배차<br>극장<br>카카오T</div></div>'
};

/* 히어로 4차 기획 공용 — tiles.js(S·T·tile)와 h4-mg.js(MG) 뒤에 불러온다 */
var H4=(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(hover: hover) and (pointer: fine)').matches;
  /* 새 타일: 사진 한 장 · 모션그래픽 */
  T.pho=function(d){return '<div class="tile pho"><img class="pic" src="'+IMG(d.img)+'" alt="" loading="lazy" decoding="async"><span class="tg">예시 화면</span><div class="cp">'+d.cap+'</div></div>'};
  T.mg=function(d){return '<div class="tile mgt"><span class="tg">예시 화면</span><div class="mgw">'+MG[d.k]+'</div><p>'+d.cap+'</p></div>'};
  /* 서비스마다: 하는 일 한 줄 · 먼저 하는 일 · 휴대폰 화면 3장 */
  var X={
    search:{ln:"AI·지도에서 우리 브랜드가 먼저 나오게",first:"홈페이지·지도 정보부터 똑같이 맞춥니다",ph:[["ai",{q:"판교역 근처 치과 추천해 줘",it:[{img:"m-dental",k:"치과",why:"야간 진료 · 상담 후기가 많아요"},{k:"치과의원",why:"주차 가능 · 토요일 진료",w:14},{k:"치과",why:"교정 상담 따로 받음",w:20}]}],["mg",{k:"search",cap:"AI 답변 3등이던 업체를 1등으로"}],["rank",{t:"네이버 지도 순위",k:"동네 이름 + 업종"}]]},
    perf:{ln:"네이버·메타·구글·당근 광고를 직접 운영",first:"광고 시안 여러 개를 같이 돌려 봅니다",ph:[["reel",{img:"derma",cap:"첫 상담 예약 받아요",lk:"3,208",cm:"96",ad:"예약하기"}],["mg",{k:"perf",cap:"잘 되는 시안으로 광고비를 옮깁니다"}],["ads",{}]]},
    viral:{ln:"블로그·체험단·기자단으로 검색 맨 위",first:"올릴 검색어부터 정합니다",ph:[["srch",{q:"민감성 선크림 추천",tab:"블로그",r:[{img:"sunscreen",t:"민감성 피부 선크림 세 가지 써 봤어요",s:"공감 412 · 댓글 58",when:"3일 전",b:"인기글"},{img:"makeup",t:"출근 전 5분 화장 순서",s:"공감 96",when:"1주 전"},{img:"giftset",t:"선물하기 좋은 화장품 세트 정리",s:"공감 74",when:"2주 전"}]}],["blog",{img:"cafe",b:"인기글",t:"성수 조용한 카페, 딸기 생크림 케이크 맛집",when:"2026.10.21"}],["mg",{k:"viral",cap:"우리 글을 검색 맨 위로"}]]},
    infl:{ln:"업종에 맞는 계정이 우리 브랜드를 소개",first:"손님층에 맞는 계정부터 찾습니다",ph:[["reel",{img:"m-reel",cap:"성수 카페 여기 진짜 조용해요",lk:"2.4만",cm:"612"}],["reel",{img:"m-salon",cap:"펌 하고 3주 지난 상태",lk:"8,412",cm:"205"}],["mg",{k:"infl",cap:"하트·댓글·저장이 붙습니다"}]]},
    content:{ln:"직접 가서 찍고 자막까지 넣어 올림",first:"촬영 날짜와 찍을 장면을 정합니다",ph:[["pho",{img:"m-shoot",cap:"촬영팀이 직접 갑니다"}],["edit",{img:"sashimi",s:"오늘 들어온 <em>광어</em>"}],["edit",{img:"m-chef",s:"불 앞에서 <em>바로</em> 담아요"}]]},
    global:{ln:"샤오홍슈·따중디엔핑·LINE 등에 올림",first:"소개·메뉴를 중국어·일본어로 옮깁니다",ph:[["xhs",{img:"m-tourist",t:"首尔逛吃攻略｜本地人推荐的小店",lk:"2.3万"}],["mg",{k:"global",cap:"중국·일본 손님이 오기 전에 보는 곳"}],["line",{img:"palace",t:"景福宮で韓服体験。駅から歩いて5分です",a:"予約する"}]]},
    home:{ln:"AI와 검색이 읽기 쉬운 홈페이지",first:"구조안과 첫 화면 시안부터 보여 드립니다",ph:[["web",{img:"m-dental",h:"평일 밤 9시까지<br>진료합니다",s:"주차 2시간 무료",b:"진료 예약"}],["mg",{k:"home",cap:"화면을 짜고 예약 버튼까지"}],["web",{img:"m-trainer",h:"아침 7시 반<br>첫 수업",s:"1:1 체험 수업",b:"체험 신청"}]]},
    off:{ln:"엘리베이터TV·택배차·극장·카카오T",first:"매장·병원 근처 단지와 차량부터 고릅니다",ph:[["elev",{}],["mg",{k:"off",cap:"문이 열리면 우리 광고"}],["truck",{}]]}
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
  function wall(el){/* 11-05 음식점 숏폼만 있던 벽에 패션·뷰티 숏폼(f1·f2·b1·b2 — 생성 사진으로 만든 4초 영상) 섞음 */
    var R=['r26','f1','r13','b1','r31','f2','r04','b2','r15','r22','f1','r11','b1','r14'],PLAY={r26:1,f1:1,b1:1}; /* 벽을 화면 전체로 되살린 뒤 첫 화면 프레임이 떨어져(검수 실측 120→30fps) 도는 영상은 3편만 */
    var M=[['pho',{img:'m-reel',cap:'성수 카페 브이로그'}],['ai',{q:'분당 피부과 추천해 줘',it:[{img:'derma',k:'피부과',why:'야간 진료 · 리프팅 상담'},{k:'피부과의원',why:'토요일 진료',w:14}]}],['ads',{}],['pho',{img:'hanui',cap:'한의원 상담실 촬영'}],['web',{img:'academy',h:'밤 10시까지<br>자습을 봐 줍니다',s:'중등 수학 · 소수 정원',b:'상담 신청'}],['xhs',{img:'myeong',t:'明洞逛吃攻略｜本地人推荐的小店',lk:'2.3万'}],['pho',{img:'m-team',cap:'담당 마케터가 직접'}],['srch',{q:'성수 카페',tab:'블로그',r:[{img:'cafe',t:'성수 조용한 카페, 딸기 케이크',s:'공감 312',when:'2일 전',b:'인기글'},{img:'pasta',t:'성수 파스타 데이트 코스',s:'공감 88',when:'1주 전'}]}],['elev',{}],['pho',{img:'m-tourist',cap:'명동 쇼핑 브이로그'}],['rank',{t:'네이버 지도 순위',k:'동네 이름 + 업종'}],['blog',{img:'fcafe',b:'블로그 1위',red:1,t:'프랜차이즈 카페 겨울 신메뉴 먼저 마셔 봤어요',when:'2026.09.30'}],['pho',{img:'m-salon',cap:'펌 하고 3주 뒤'}],['cine',{}],['pho',{img:'shootcos',cap:'화장품 제품 촬영'}],['line',{img:'palace',t:'景福宮で韓服体験',a:'予約する'}],['pho',{img:'fashion-look',cap:'가을 룩북 촬영'}],['pho',{img:'fnb-dessert',cap:'카페 디저트 촬영'}],['pho',{img:'beauty-salon',cap:'뷰티 살롱 촬영'}],['pho',{img:'fashion-detail',cap:'니트 디테일 촬영'}]];
    var it=[],j=0;R.forEach(function(r,i){it.push(PLAY[r]?'<div class="rl"><video src="/sf/v/'+r+'.mp4" poster="/sf/v/'+r+'.jpg" muted loop playsinline autoplay preload="metadata"></video></div>':'<div class="rl"><img src="/sf/v/'+r+'.jpg" alt="" loading="lazy" decoding="async"></div>');if(M[j])it.push('<div class="rl">'+tile(M[j++])+'</div>');});
    while(M[j])it.push('<div class="rl">'+tile(M[j++])+'</div>');
    var c=['','','','','',''];it.forEach(function(h,k){c[k%6]+=h});
    el.innerHTML=c.map(function(h){return '<div class="bgc"><div class="bgk">'+h+h.replace(/ autoplay/g,'')+'</div></div>'}).join('');
    var vids=[].slice.call(el.querySelectorAll('video'));vids.forEach(function(v){v.muted=true});
    return function(on){vids.forEach(function(v){if(on&&v.hasAttribute('autoplay')){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause();})};}

  /* 누르면 그 자리에서 커지며 열리는 창 */
  var xp,xpp,from=null,last=null,busy=false;
  function mountX(){var d=document.createElement('div');d.className='xp';d.id='xp';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-labelledby','xh');
    d.innerHTML='<div class="xbg"></div><div class="xpp"><div class="xl"><small class="xin" id="xs"></small><div id="xmg"></div><p class="first xin" id="xf"></p></div><div class="xr"><div class="xin"><h3 id="xh"></h3><p class="t1" id="xt"></p><div class="recs" id="xrec"></div><ol id="xdo"></ol><div class="exs"><p>이런 화면으로 보고드립니다 · 예시(업체명 가림)</p><div class="strip" id="xstrip"></div></div></div><div class="xb xin"><a class="p1" id="xp1" href="/contact">무료 상담 신청</a><a class="p2" id="xp2" href="#">자세히 보기</a></div></div><button class="xx" type="button" aria-label="닫기"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>';
    (document.getElementById('sf')||document.body).appendChild(d);xp=d;xpp=d.querySelector('.xpp');
    d.querySelector('.xx').addEventListener('click',close);d.querySelector('.xbg').addEventListener('click',close);
    var xp1=d.querySelector('#xp1');if(xp1)xp1.addEventListener('click',function(){close();});
    addEventListener('keydown',function(e){if(e.key==='Escape')close();});}
  function toRect(r){var p=xpp.getBoundingClientRect();return 'translate('+(r.left-p.left)+'px,'+(r.top-p.top)+'px) scale('+(r.width/p.width)+','+(r.height/p.height)+')';}
  function open(i,btn){if(!xp)mountX();if(busy)return;busy=true;from=btn;last=document.activeElement;var s=S[i];
    document.getElementById('xs').textContent='위즈더플래닝 · '+String(i+1).padStart(2,'0')+' / 08';
    document.getElementById('xmg').innerHTML=MG[s.k];
    document.getElementById('xf').innerHTML='<span>먼저 하는 일</span>'+s.first;
    document.getElementById('xh').textContent=s.n;document.getElementById('xt').textContent=s.t1;
    document.getElementById('xrec').innerHTML=s.rec.map(function(r){return '<span>'+r+'</span>'}).join('');
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
    fl.forEach(function(s,k){ids.push(setTimeout(function(){fl.forEach(function(x){x.classList.remove('on')});s.classList.add('on');},120+k*105));});
    ids.push(setTimeout(function(){fl.forEach(function(x){x.classList.remove('on')});el.classList.add('land');},120+fl.length*105));
    ids.push(setTimeout(go,2400));el.addEventListener('click',go);}
  var INTRO='<div class="intro" id="intro" aria-hidden="true"><div class="fl"><span>MCN</span><span>광고</span><span>검색</span><span>촬영</span><span>블로그</span><span>해외</span><span>홈페이지</span><span>엘리베이터TV</span></div><div class="big"><i>한</i><i>곳</i><i>.</i></div><div class="bar"></div></div>';
  /* 화면 밖이면 멈춤 */
  /* 11-05 렉 재측정: 2번 컷으로 넘어갈 때 끊김의 주범이 돌아가는 휴대폰 고리 — 화면에 보이는 첫 화면이 화면 높이의 85% 아래로 줄면 바로 멈춘다(전에는 5% 아래에서 · 휴대폰처럼 첫 화면이 화면보다 길어도 맞게) */
  function pauseOff(hero,play){var last=null;if('IntersectionObserver' in window)new IntersectionObserver(function(es){es.forEach(function(e){var need=Math.min(innerHeight,e.boundingClientRect.height)*.85,on=e.isIntersecting&&e.intersectionRect.height>=need;if(on===last)return;last=on;hero.classList.toggle('paused',!on);play(on);})},{threshold:[0,.3,.5,.6,.65,.7,.75,.8,.85,.9,.95,1]}).observe(hero);}
  return {reduce:reduce,fine:fine,phone:phone,story:story,wall:wall,open:open,close:close,intro:intro,INTRO:INTRO,pauseOff:pauseOff};
})();


/* ── 홈 숏폼형 실행부(2026-11-04) — 위 타일·모션·첫 화면 공용 위에 얹는다 ── */
var SFD = {};
try { SFD = JSON.parse(document.getElementById('sf-data').textContent); } catch (e) { SFD = {}; }
if (SFD.svc) SFD.svc.forEach(function (d, i) { var s = S[i]; if (!s || s.k !== d.k) return; s.ln = d.ln; s.first = d.first; s.t1 = d.t1; s.d = d.d; s.rec = d.rec; s.more = d.more; });
var CHN = ['한 곳', '따로 맡기면', '한 곳에 맡기면', '여덟 가지', '업종별', '전문 인력', '진행 과정', '인사이트', '문의', '끝'];

/* 첫 화면 — 시안 c1b 를 서버가 그린 목록에 묶음 */
function heroInit() {
  var hero = document.getElementById('c1'); if (!hero) return;
  var RW = SFD.ends || [], N = S.length, ring = document.getElementById('ring'), rw = document.getElementById('rw');
  var btns = [].slice.call(document.querySelectorAll('#svl .svb')), cards = [], ctl = [], step = 0, live = false, SL = 1300, shown = 0; /* 휴대폰 화면 한 장 1.3초(11-05 움직임 줄이기 · 전에는 0.9초) */
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
  function word(a) {
    if (a === shown || !RW[a]) return; shown = a;
    var o = rw.querySelector('span.in'); if (o) { o.className = 'out'; setTimeout(function () { o.remove(); }, 320); }
    var sp = document.createElement('span'); sp.className = 'in'; sp.textContent = RW[a]; rw.appendChild(sp);
  }
  function place() {
    ring.style.transform = 'translateZ(calc(var(--z) * -1)) rotateY(' + (-step * 360 / N) + 'deg)';
    var a = idx();
    cards.forEach(function (c, i) { c.classList.toggle('on', i === a); if (i !== a) ctl[i].stop(); });
    btns.forEach(function (b, i) { var on = i === a; if (on && live) { b.classList.remove('on'); void b.offsetWidth; } b.classList.toggle('on', on); });
    word(a);
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
  H4.pauseOff(hero, function (on) { heroOn = on; play(on); if (!on) { live = false; ctl.forEach(function (c) { c.stop(); }); } else if (hero.classList.contains('ready')) { live = true; place(); } });
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
    var play = H4.wall(w), sec = w.closest('.dp-hero');
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
    function step(t) { var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = fmt(Math.round(from + (to - from) * e)); if (k < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  if (!('IntersectionObserver' in window)) return;
  if (!cntIO) cntIO = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { cntIO.unobserve(e.target); run(e.target); } }); }, { threshold: .5 });
  els.forEach(function (el) { el.setAttribute('data-cn', ''); cntIO.observe(el); });
}

hardNav();
chromeInit();
cutsInit();
heroInit();
docInit();
countUp(document);

})();
