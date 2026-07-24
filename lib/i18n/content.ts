import type { Locale } from "./config"

// 외국인 사장님 대상 랜딩 콘텐츠. 기계번역 티가 나지 않도록 의역했다.
// 브랜드 사실(2016년 설립, 7,000여 광고주)은 회사 공식 정보와 일치한다.

export type LandingContent = {
  metaTitle: string
  metaDescription: string
  nav: { diagnose: string; contact: string }
  /** 페이지 내 섹션 네비게이션 (헤더 메뉴) */
  menu: { label: string; href: string }[]
  hero: {
    badge: string
    title: string
    highlight: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
    trust: string
  }
  problem: {
    heading: string
    body: string
    points: string[]
  }
  solution: {
    heading: string
    body: string
    items: { title: string; desc: string }[]
  }
  why: {
    heading: string
    body: string
    points: string[]
  }
  services: { heading: string; list: string[] }
  proof: { heading: string; body: string; stats: { value: string; label: string }[] }
  faq: { heading: string; items: { q: string; a: string }[] }
  contact: {
    heading: string
    body: string
    langNote: string
    kakao: string
    form: {
      name: string
      phone: string
      store: string
      message: string
      messagePlaceholder: string
      submit: string
      sending: string
      success: string
      error: string
      required: string
    }
  }
  footer: { company: string; rights: string; langLabel: string }
}

export const LANDING: Record<Exclude<Locale, "ko">, LandingContent> = {
  // ── 中文(简体) ──────────────────────────────
  zh: {
    metaTitle: "在韩华人老板的营销伙伴 — AI搜索优化(GEO)｜WizThePlanning",
    metaDescription:
      "在韩国做生意的华人老板必看。韩国顾客现在用Naver、ChatGPT搜索店铺，但你的店可能根本没出现在答案里。WizThePlanning自2016年起服务7,000多家广告主，用韩语帮你做好SEO与AI搜索优化(GEO)，让韩国人搜索时先找到你。支持中文咨询。",
    nav: { diagnose: "免费诊断", contact: "咨询" },
    menu: [
      { label: "现状", href: "#problem" },
      { label: "服务", href: "#services" },
      { label: "为什么需要官网", href: "#why" },
      { label: "关于我们", href: "#about" },
      { label: "常见问题", href: "#faq" },
      { label: "免费诊断", href: "/site-check" },
    ],
    hero: {
      badge: "在韩华人老板 · AI搜索营销",
      title: "韩国顾客在搜索你的行业，",
      highlight: "但搜不到你的店。",
      sub: "现在韩国人不只用Naver，还会问ChatGPT、Perplexity「附近哪家好」。语言不通、不懂韩国营销，不代表要把客人让给别人。我们用韩语替你把店铺信息做进搜索和AI的答案里。",
      ctaPrimary: "免费诊断我的网站",
      ctaSecondary: "中文咨询",
      trust: "自2016年 · 服务7,000多家广告主 · 支持中文沟通",
    },
    problem: {
      heading: "为什么努力做生意，网上却找不到你？",
      body: "很多在韩华人老板的店明明很好，却卡在同一个地方：韩国顾客搜索时，出现的都是别人家。原因通常不是店不好，而是「搜索引擎和AI读不懂你的店」。",
      points: [
        "没有韩文官网，或官网做得AI读不到——搜索引擎当作「不存在」。",
        "Naver、Google、Kakao地图上的店铺信息互相对不上，AI因此不敢推荐。",
        "语言不通，不知道该在哪里、用什么方式让韩国人搜到自己。",
      ],
    },
    solution: {
      heading: "我们做的事很简单：让韩国人搜索时先看到你",
      body: "你专心经营，韩语和技术的部分交给我们。",
      items: [
        { title: "AI搜索优化 (GEO)", desc: "让ChatGPT、Perplexity、Naver AI在回答时推荐你的店，而不是竞争对手。" },
        { title: "官网制作·改造", desc: "做一个AI和搜索引擎都读得懂的韩文官网。已有官网则检查并打通被挡住的地方。" },
        { title: "信息统一", desc: "把Naver、Google、Kakao地图上不一致的店铺信息统一，让AI放心引用。" },
        { title: "中文沟通", desc: "咨询和进度沟通支持中文，通过翻译对接，不用担心语言问题。" },
      ],
    },
    why: {
      heading: "为什么官网对外国人老板更重要？",
      body: "Naver把外部AI挡在门外——ChatGPT、Google AI读不到Naver博客和咖啡里的内容。它们能读的，是「开放的网页」，也就是你自己的官网。",
      points: [
        "Naver的robots.txt明确禁止GPTBot、ClaudeBot等AI爬虫抓取博客和咖啡内容。",
        "所以就算在Naver上有很多评价，韩国以外的AI也不会拿来推荐你。",
        "有一个AI读得懂的官网，才是被ChatGPT、Google AI推荐的通道。",
      ],
    },
    services: {
      heading: "一个团队，全部搞定",
      list: [
        "AI搜索优化 (GEO)",
        "搜索引擎优化 (SEO)",
        "官网·落地页制作",
        "Naver地点·地图营销",
        "Meta(Instagram·Facebook)广告",
        "Google广告",
        "拍摄·剪辑·内容制作",
      ],
    },
    proof: {
      heading: "不是刚起步的团队",
      body: "WizThePlanning自2016年起，累计服务超过7,000家广告主，专注餐饮、医院、学院、美容等以门店为主的本地生意营销。",
      stats: [
        { value: "2016", label: "开始至今" },
        { value: "7,000+", label: "服务广告主" },
        { value: "中文", label: "支持咨询" },
      ],
    },
    faq: {
      heading: "常见问题",
      items: [
        {
          q: "我韩语不好，也能合作吗？",
          a: "可以。咨询和进度沟通都支持中文，通过翻译对接，你不用直接用韩语交流。",
        },
        {
          q: "费用大概多少？",
          a: "每家店的情况和目标不同，费用也不一样。我们会先免费诊断你的现状，再给出适合的方案和报价，之后由你决定。",
        },
        {
          q: "要多久才能见效？",
          a: "AI搜索优化不是一两天的事，通常需要几周到几个月。所以先把官网和信息基础打好、排好顺序最重要。",
        },
        {
          q: "我已经有Naver博客和店铺了，还需要做吗？",
          a: "需要。Naver用robots.txt挡住了ChatGPT、Google等外部AI爬虫，所以就算Naver上评价再多，韩国以外的AI也读不到、不会拿来推荐你。",
        },
        {
          q: "我还没有官网，可以开始吗？",
          a: "可以。我们能帮你新建一个AI和搜索引擎都读得懂的韩文官网。已有官网的话，就检查并打通被挡住的地方。",
        },
      ],
    },
    contact: {
      heading: "先免费看看你的店现在的状况",
      body: "留下联系方式，我们会用你能懂的方式说明现状和该怎么做。中文咨询没问题。",
      langNote: "请用中文留言即可，我们会通过翻译对接。",
      kakao: "用KakaoTalk咨询",
      form: {
        name: "称呼",
        phone: "电话",
        store: "店名（选填）",
        message: "想咨询的内容",
        messagePlaceholder: "例如：我在○○开店，想让韩国顾客在搜索时能找到我。",
        submit: "免费咨询",
        sending: "发送中…",
        success: "已收到！我们会尽快用中文与你联系。",
        error: "发送失败，请稍后再试，或用KakaoTalk联系我们。",
        required: "请填写称呼和电话。",
      },
    },
    footer: { company: "WizThePlanning (위즈더플래닝)", rights: "版权所有", langLabel: "语言" },
  },

  // ── Tiếng Việt ──────────────────────────────
  vi: {
    metaTitle: "Đối tác marketing cho chủ tiệm người Việt tại Hàn — Tối ưu tìm kiếm AI (GEO)｜WizThePlanning",
    metaDescription:
      "Dành cho chủ tiệm người Việt kinh doanh tại Hàn Quốc. Khách Hàn giờ tìm quán bằng Naver, ChatGPT — nhưng tiệm của bạn có thể không hề xuất hiện. WizThePlanning hoạt động từ 2016, phục vụ hơn 7.000 khách hàng quảng cáo, làm SEO và tối ưu tìm kiếm AI (GEO) bằng tiếng Hàn để người Hàn tìm thấy bạn trước. Hỗ trợ tư vấn tiếng Việt.",
    nav: { diagnose: "Kiểm tra miễn phí", contact: "Tư vấn" },
    menu: [
      { label: "Hiện trạng", href: "#problem" },
      { label: "Dịch vụ", href: "#services" },
      { label: "Vì sao cần website", href: "#why" },
      { label: "Về chúng tôi", href: "#about" },
      { label: "Câu hỏi", href: "#faq" },
      { label: "Kiểm tra miễn phí", href: "/site-check" },
    ],
    hero: {
      badge: "Chủ tiệm người Việt tại Hàn · Marketing tìm kiếm AI",
      title: "Khách Hàn đang tìm ngành của bạn,",
      highlight: "nhưng không tìm ra tiệm bạn.",
      sub: "Người Hàn giờ không chỉ dùng Naver mà còn hỏi ChatGPT, Perplexity «quán nào gần đây ngon». Không giỏi tiếng Hàn, không rành marketing Hàn Quốc — không có nghĩa là phải nhường khách cho người khác. Chúng tôi đưa thông tin tiệm bạn vào câu trả lời của tìm kiếm và AI, bằng tiếng Hàn.",
      ctaPrimary: "Kiểm tra website miễn phí",
      ctaSecondary: "Tư vấn tiếng Việt",
      trust: "Từ 2016 · Hơn 7.000 khách hàng · Hỗ trợ tiếng Việt",
    },
    problem: {
      heading: "Vì sao làm ăn chăm chỉ mà trên mạng không thấy bạn?",
      body: "Nhiều chủ tiệm người Việt có quán rất tốt nhưng vướng cùng một chỗ: khi khách Hàn tìm kiếm, hiện ra toàn tiệm khác. Lý do thường không phải quán dở, mà là «công cụ tìm kiếm và AI không đọc được tiệm bạn».",
      points: [
        "Chưa có website tiếng Hàn, hoặc website làm theo kiểu AI không đọc được — bị coi như «không tồn tại».",
        "Thông tin tiệm trên Naver, Google, Kakao Map không khớp nhau, nên AI không dám giới thiệu.",
        "Rào cản ngôn ngữ khiến bạn không biết nên xuất hiện ở đâu, bằng cách nào để người Hàn tìm thấy.",
      ],
    },
    solution: {
      heading: "Việc của chúng tôi rất đơn giản: để người Hàn thấy bạn trước khi tìm kiếm",
      body: "Bạn lo kinh doanh, phần tiếng Hàn và kỹ thuật để chúng tôi.",
      items: [
        { title: "Tối ưu tìm kiếm AI (GEO)", desc: "Để ChatGPT, Perplexity, Naver AI giới thiệu tiệm bạn khi trả lời, thay vì đối thủ." },
        { title: "Làm·cải tạo website", desc: "Làm một website tiếng Hàn mà AI và công cụ tìm kiếm đều đọc được. Nếu đã có, kiểm tra và mở những chỗ đang bị chặn." },
        { title: "Đồng bộ thông tin", desc: "Thống nhất thông tin tiệm trên Naver, Google, Kakao Map để AI yên tâm trích dẫn." },
        { title: "Giao tiếp tiếng Việt", desc: "Tư vấn và trao đổi tiến độ hỗ trợ tiếng Việt qua phiên dịch, không lo rào cản ngôn ngữ." },
      ],
    },
    why: {
      heading: "Vì sao website lại quan trọng hơn với chủ tiệm nước ngoài?",
      body: "Naver chặn AI bên ngoài — ChatGPT, Google AI không đọc được nội dung trong blog và cafe của Naver. Thứ chúng đọc được là «web mở», tức là website của chính bạn.",
      points: [
        "robots.txt của Naver ghi rõ cấm các bot AI như GPTBot, ClaudeBot thu thập nội dung blog và cafe.",
        "Nên dù có nhiều đánh giá trên Naver, AI ngoài Hàn Quốc cũng không lấy đó để giới thiệu bạn.",
        "Có một website mà AI đọc được mới là con đường để ChatGPT, Google AI giới thiệu bạn.",
      ],
    },
    services: {
      heading: "Một đội, làm trọn gói",
      list: [
        "Tối ưu tìm kiếm AI (GEO)",
        "Tối ưu công cụ tìm kiếm (SEO)",
        "Làm website·landing page",
        "Marketing Naver Place·bản đồ",
        "Quảng cáo Meta (Instagram·Facebook)",
        "Quảng cáo Google",
        "Quay·dựng·sản xuất nội dung",
      ],
    },
    proof: {
      heading: "Không phải đội mới vào nghề",
      body: "WizThePlanning hoạt động từ 2016, phục vụ hơn 7.000 khách hàng quảng cáo, chuyên marketing cho kinh doanh địa phương như quán ăn, phòng khám, trung tâm, làm đẹp.",
      stats: [
        { value: "2016", label: "Từ khi bắt đầu" },
        { value: "7.000+", label: "Khách hàng" },
        { value: "Tiếng Việt", label: "Hỗ trợ tư vấn" },
      ],
    },
    faq: {
      heading: "Câu hỏi thường gặp",
      items: [
        {
          q: "Tôi không giỏi tiếng Hàn, có hợp tác được không?",
          a: "Được. Tư vấn và trao đổi tiến độ đều hỗ trợ tiếng Việt qua phiên dịch, bạn không cần trực tiếp dùng tiếng Hàn.",
        },
        {
          q: "Chi phí khoảng bao nhiêu?",
          a: "Mỗi tiệm có tình trạng và mục tiêu khác nhau nên chi phí cũng khác. Chúng tôi kiểm tra hiện trạng miễn phí trước, rồi đưa ra phương án và báo giá phù hợp để bạn quyết định.",
        },
        {
          q: "Bao lâu thì thấy hiệu quả?",
          a: "Tối ưu tìm kiếm AI không phải chuyện một hai ngày, thường mất vài tuần đến vài tháng. Vì vậy việc quan trọng nhất là làm nền tảng website và thông tin cho chắc, đúng thứ tự.",
        },
        {
          q: "Tôi đã có blog và tiệm trên Naver rồi, có cần làm không?",
          a: "Có. Naver dùng robots.txt chặn các AI bên ngoài như ChatGPT, Google, nên dù có nhiều đánh giá trên Naver, AI ngoài Hàn Quốc cũng không đọc được và không giới thiệu bạn.",
        },
        {
          q: "Tôi chưa có website, có bắt đầu được không?",
          a: "Được. Chúng tôi có thể làm cho bạn một website tiếng Hàn mà AI và công cụ tìm kiếm đều đọc được. Nếu đã có website thì kiểm tra và mở những chỗ đang bị chặn.",
        },
      ],
    },
    contact: {
      heading: "Trước tiên, xem miễn phí tình trạng tiệm bạn",
      body: "Để lại liên hệ, chúng tôi sẽ giải thích tình trạng hiện tại và cần làm gì, theo cách bạn hiểu được. Tư vấn tiếng Việt thoải mái.",
      langNote: "Cứ nhắn bằng tiếng Việt, chúng tôi sẽ trao đổi qua phiên dịch.",
      kakao: "Tư vấn qua KakaoTalk",
      form: {
        name: "Tên xưng hô",
        phone: "Số điện thoại",
        store: "Tên tiệm (không bắt buộc)",
        message: "Nội dung muốn tư vấn",
        messagePlaceholder: "Ví dụ: Tôi mở tiệm ở ○○, muốn khách Hàn tìm thấy khi họ tìm kiếm.",
        submit: "Tư vấn miễn phí",
        sending: "Đang gửi…",
        success: "Đã nhận! Chúng tôi sẽ liên hệ bằng tiếng Việt sớm nhất.",
        error: "Gửi thất bại, vui lòng thử lại sau hoặc liên hệ qua KakaoTalk.",
        required: "Vui lòng điền tên và số điện thoại.",
      },
    },
    footer: { company: "WizThePlanning (위즈더플래닝)", rights: "Bản quyền", langLabel: "Ngôn ngữ" },
  },
}
