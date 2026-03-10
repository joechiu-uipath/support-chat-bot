/**
 * Persona-specific UI copy for all surface areas.
 *
 * Each persona gets tailored:
 * - Taglines (rotating header text)
 * - Hero section (title + subtitle)
 * - Section headers
 * - Quick action pills (chat welcome)
 * - Chat welcome message
 *
 * Falls back to default translations for unlisted locales.
 */

import type { QuickAction } from '../i18n/translations';

// ─── Taglines ──────────────────────────────────────────────────
export const personaTaglines: Record<string, Record<string, string[]>> = {
  'premium-gourmet': {
    'zh-TW': ['鑑賞家的海鮮殿堂', '嚴選產地 極致風味', '從海洋到餐桌的藝術', '品味非凡 食材講究', '頂級食材 匠心呈現'],
    en: ['A Connoisseur\'s Ocean', 'Sourced from the Finest Waters', 'From Sea to Art on Your Plate', 'Exquisite Taste, Exceptional Quality', 'Curated for the Discerning Palate'],
    ja: ['美食家の海鮮殿堂', '厳選産地の極上風味', '海から食卓への芸術', '格別な味わい', '至高の食材をお届け'],
    ko: ['미식가의 해산물 전당', '엄선된 산지의 극상 풍미', '바다에서 식탁으로의 예술', '비범한 맛과 품격', '최상의 식재료'],
  },
  'family-shopper': {
    'zh-TW': ['全家人的美味選擇', '安心食材 健康上桌', '輕鬆料理 幸福滿桌', '每一餐都是幸福時光', '好食材 好簡單'],
    en: ['Delicious Choices for the Family', 'Safe Ingredients, Healthy Meals', 'Easy Cooking, Happy Tables', 'Every Meal, a Family Moment', 'Great Food Made Simple'],
    ja: ['家族みんなの美味しい選択', '安心食材で健康な食卓', '簡単調理で幸せな食事', '毎食が家族の幸せ', '良い食材をシンプルに'],
    ko: ['온 가족의 맛있는 선택', '안심 식재료로 건강한 식탁', '쉬운 요리 행복한 식탁', '매 끼니가 가족의 행복', '좋은 식재료 간편하게'],
  },
  'restaurant-operator': {
    'zh-TW': ['餐飲專業食材供應', '穩定品質 準時到貨', '主廚信賴的食材夥伴', '專業廚房的最佳後盾', '食材規格一致 出餐品質穩定'],
    en: ['Professional Foodservice Supply', 'Consistent Quality, On-time Delivery', 'The Chef\'s Trusted Partner', 'Your Kitchen\'s Best Ally', 'Uniform Specs, Consistent Plating'],
    ja: ['飲食業向け食材供給', '安定品質・定時配送', 'シェフが信頼するパートナー', 'プロの厨房を支える', '均一規格で安定した料理品質'],
    ko: ['외식업 전문 식재료 공급', '안정적 품질 정시 배송', '셰프가 신뢰하는 파트너', '전문 주방의 든든한 지원', '균일한 규격 안정적 플레이팅'],
  },
  'wholesale-distributor': {
    'zh-TW': ['B2B水產供應鏈', '大量穩定供貨', '通路商的信賴夥伴', '全品項一站式採購', '供貨穩定 價格透明'],
    en: ['B2B Seafood Supply Chain', 'Volume Supply, Steady Flow', 'Your Trusted Channel Partner', 'Full Catalog, One Source', 'Reliable Supply, Transparent Pricing'],
    ja: ['B2B水産サプライチェーン', '大量安定供給', '信頼のチャネルパートナー', '全品目ワンストップ調達', '安定供給・透明価格'],
    ko: ['B2B 수산 공급망', '대량 안정 공급', '신뢰할 수 있는 채널 파트너', '전 품목 원스톱 조달', '안정 공급 투명한 가격'],
  },
  'gift-festival': {
    'zh-TW': ['送禮首選 尊榮體驗', '用心挑選 傳遞心意', '讓美味代替千言萬語', '每份禮物都是一個故事', '頂級海鮮 最佳心意'],
    en: ['The Premier Gift Experience', 'Chosen with Care, Given with Heart', 'Let Fine Seafood Speak for You', 'Every Gift Tells a Story', 'Premium Seafood, Perfect Sentiment'],
    ja: ['贈り物の最上級体験', '心を込めて選ぶ贈り物', '美味しさで想いを届ける', '贈り物には物語がある', '最高の海鮮で最高の気持ちを'],
    ko: ['선물의 최상급 경험', '정성을 담아 고른 선물', '맛있는 해산물로 마음 전달', '모든 선물에는 이야기가 있다', '최고의 해산물 최고의 마음'],
  },
};

// ─── Hero Section ──────────────────────────────────────────────
export const personaHero: Record<string, Record<string, { titleAccent: string; titleRest: string; subtitle: string }>> = {
  'premium-gourmet': {
    'zh-TW': {
      titleAccent: '鑑賞級海鮮',
      titleRest: '極致風味',
      subtitle: '為講究品味的您，嚴選世界頂級產地的珍稀食材。每一件產品都經過層層把關，從產地故事到料理靈感，為您打造專屬的美食體驗。',
    },
    en: {
      titleAccent: 'Connoisseur\'s Selection',
      titleRest: 'Exquisite Flavors',
      subtitle: 'For the discerning palate — rare ingredients sourced from the world\'s finest waters. Each product is curated with provenance, tasting notes, and pairing inspiration.',
    },
  },
  'family-shopper': {
    'zh-TW': {
      titleAccent: '頂級海鮮',
      titleRest: '鮮味直送',
      subtitle: '從海洋到餐桌 — 四十年匠心精選的頂級冷凍海鮮。每一件產品，都承載著我們對卓越品質的堅持。',
    },
    en: {
      titleAccent: 'Premium Seafood',
      titleRest: 'Fresh Delivered',
      subtitle: 'From ocean to table — premium frozen seafood curated by four decades of mastery. Every product embodies our commitment to exceptional quality.',
    },
  },
  'restaurant-operator': {
    'zh-TW': {
      titleAccent: '餐飲專業',
      titleRest: '食材總覽',
      subtitle: '規格一致、品質穩定的專業食材。依品項分類瀏覽，快速找到您菜單所需的優質海鮮。',
    },
    en: {
      titleAccent: 'Foodservice',
      titleRest: 'Product Catalog',
      subtitle: 'Consistent specs, reliable quality. Browse by category to find the right seafood for your menu.',
    },
  },
  'wholesale-distributor': {
    'zh-TW': {
      titleAccent: 'B2B 供應',
      titleRest: '全品項目錄',
      subtitle: '完整水產品項、規格與通路資訊。一站式查詢供貨狀態與產品規格。',
    },
    en: {
      titleAccent: 'B2B Supply',
      titleRest: 'Full Catalog',
      subtitle: 'Complete seafood portfolio with specs and channel data. One-stop access to supply status and product details.',
    },
  },
  'gift-festival': {
    'zh-TW': {
      titleAccent: '精選海鮮',
      titleRest: '送禮指南',
      subtitle: '為每個重要時刻，挑選最體面的海鮮禮盒。從年節拜訪到喬遷祝賀，我們幫您找到最能傳達心意的禮物。',
    },
    en: {
      titleAccent: 'Premium Seafood',
      titleRest: 'Gift Guide',
      subtitle: 'For every meaningful occasion, choose an impressive seafood gift. From holidays to housewarmings, we help you find the perfect way to show you care.',
    },
  },
};

// ─── Section Headers ───────────────────────────────────────────
export const personaSections: Record<string, Record<string, { featuredMain: string; featuredSub: string; allMain: string; allSub: string }>> = {
  'premium-gourmet': {
    'zh-TW': { featuredMain: '主廚精選', featuredSub: "Chef's Selection", allMain: '品味典藏', allSub: 'The Collection' },
    en: { featuredMain: "Chef's Selection", featuredSub: '', allMain: 'The Collection', allSub: '' },
  },
  'family-shopper': {
    'zh-TW': { featuredMain: '精選推薦', featuredSub: 'Signature Collection', allMain: '全部商品', allSub: 'The Collection' },
    en: { featuredMain: 'Signature Collection', featuredSub: '', allMain: 'The Collection', allSub: '' },
  },
  'restaurant-operator': {
    'zh-TW': { featuredMain: '熱門品項', featuredSub: 'Popular Items', allMain: '完整品項目錄', allSub: 'Full Catalog' },
    en: { featuredMain: 'Popular Items', featuredSub: '', allMain: 'Full Catalog', allSub: '' },
  },
  'wholesale-distributor': {
    'zh-TW': { featuredMain: '主力品項', featuredSub: 'Key Products', allMain: '全品項', allSub: 'All SKUs' },
    en: { featuredMain: 'Key Products', featuredSub: '', allMain: 'All SKUs', allSub: '' },
  },
  'gift-festival': {
    'zh-TW': { featuredMain: '人氣禮盒', featuredSub: 'Best Gift Picks', allMain: '送禮精選', allSub: 'Gift Collection' },
    en: { featuredMain: 'Best Gift Picks', featuredSub: '', allMain: 'Gift Collection', allSub: '' },
  },
};

// ─── Quick Action Pills ────────────────────────────────────────
export const personaQuickActions: Record<string, Record<string, QuickAction[]>> = {
  'premium-gourmet': {
    'zh-TW': [
      { label: '🍷 搭配建議', prompt: '推薦適合搭配紅酒或白酒的頂級海鮮' },
      { label: '🌟 當季嚴選', prompt: '現在有什麼當季的頂級食材？' },
      { label: '⭐ 主廚推薦', prompt: '推薦最能展現食材原味的料理方式' },
      { label: '📦 我的訂單', prompt: '查詢我最近的訂單' },
    ],
    en: [
      { label: '🍷 Wine Pairing', prompt: 'Recommend premium seafood that pairs well with wine' },
      { label: '🌟 Seasonal Picks', prompt: 'What premium seasonal ingredients are available now?' },
      { label: '⭐ Chef\'s Choice', prompt: 'Suggest the best way to prepare these ingredients' },
      { label: '📦 My Orders', prompt: 'Check my recent orders' },
    ],
    ja: [
      { label: '🍷 ペアリング', prompt: 'ワインに合う高級海鮮を教えてください' },
      { label: '🌟 旬の食材', prompt: '今の旬の高級食材は何ですか？' },
      { label: '⭐ シェフ推薦', prompt: '素材の味を引き出す調理法を教えてください' },
      { label: '📦 注文確認', prompt: '最近の注文を確認してください' },
    ],
    ko: [
      { label: '🍷 페어링', prompt: '와인에 어울리는 프리미엄 해산물을 추천해 주세요' },
      { label: '🌟 제철 식재료', prompt: '지금 제철인 프리미엄 식재료는 무엇인가요?' },
      { label: '⭐ 셰프 추천', prompt: '식재료 본연의 맛을 살리는 조리법을 알려주세요' },
      { label: '📦 주문 조회', prompt: '최근 주문을 확인해 주세요' },
    ],
  },
  'family-shopper': {
    'zh-TW': [
      { label: '👨‍👩‍👧‍👦 家庭料理', prompt: '推薦適合全家人吃的海鮮，要好料理的' },
      { label: '📦 查詢訂單', prompt: '查詢我最近的訂單' },
      { label: '🦐 蝦類商品', prompt: '有什麼蝦類商品？小朋友也能吃的' },
      { label: '⭐ 今日推薦', prompt: '今天推薦什麼？要方便料理的' },
    ],
    en: [
      { label: '👨‍👩‍👧‍👦 Family Meals', prompt: 'Recommend easy-to-cook seafood for the whole family' },
      { label: '📦 My Orders', prompt: 'Check my recent orders' },
      { label: '🦐 Kid-friendly', prompt: 'What shrimp products are good for kids?' },
      { label: '⭐ Quick Picks', prompt: 'What\'s easy to cook for dinner tonight?' },
    ],
    ja: [
      { label: '👨‍👩‍👧‍👦 家族の食事', prompt: '家族みんなで食べられる簡単な海鮮を教えてください' },
      { label: '📦 注文確認', prompt: '最近の注文を確認してください' },
      { label: '🦐 お子様向け', prompt: '子供にも安心なえび商品はありますか？' },
      { label: '⭐ 今日のおすすめ', prompt: '今夜の夕食に簡単に作れるものは？' },
    ],
    ko: [
      { label: '👨‍👩‍👧‍👦 가족 식사', prompt: '온 가족이 먹기 좋은 해산물을 추천해 주세요' },
      { label: '📦 주문 조회', prompt: '최근 주문을 확인해 주세요' },
      { label: '🦐 아이 간식', prompt: '아이들도 먹을 수 있는 새우 상품이 있나요?' },
      { label: '⭐ 오늘 추천', prompt: '오늘 저녁에 간편하게 만들 수 있는 것은?' },
    ],
  },
  'restaurant-operator': {
    'zh-TW': [
      { label: '📋 批量詢價', prompt: '我想詢問大量採購的價格和供貨' },
      { label: '📦 進貨查詢', prompt: '查詢我最近的進貨訂單狀態' },
      { label: '📊 庫存確認', prompt: '幫我查詢目前各品項的庫存狀態' },
      { label: '🔄 常用品項', prompt: '顯示我常訂購的品項' },
    ],
    en: [
      { label: '📋 Bulk Pricing', prompt: 'I need pricing for bulk orders' },
      { label: '📦 Order Status', prompt: 'Check my recent supply order status' },
      { label: '📊 Stock Check', prompt: 'Check current inventory levels across items' },
      { label: '🔄 Reorder', prompt: 'Show my frequently ordered items' },
    ],
    ja: [
      { label: '📋 大量見積', prompt: '大量注文の価格を教えてください' },
      { label: '📦 発注確認', prompt: '最近の仕入れ注文状況を確認してください' },
      { label: '📊 在庫確認', prompt: '各品目の在庫状況を確認してください' },
      { label: '🔄 定番商品', prompt: 'よく注文する商品を表示してください' },
    ],
    ko: [
      { label: '📋 대량 견적', prompt: '대량 주문 가격을 알려주세요' },
      { label: '📦 발주 조회', prompt: '최근 입고 주문 상태를 확인해 주세요' },
      { label: '📊 재고 확인', prompt: '각 품목의 재고 상태를 확인해 주세요' },
      { label: '🔄 자주 주문', prompt: '자주 주문하는 품목을 보여주세요' },
    ],
  },
  'wholesale-distributor': {
    'zh-TW': [
      { label: '📊 供貨查詢', prompt: '查詢目前各品項的供貨狀態和預計到貨時間' },
      { label: '💰 量價諮詢', prompt: '我想了解大量採購的階梯價格' },
      { label: '📋 全品項規格', prompt: '列出所有品項的規格和包裝資訊' },
      { label: '🚚 出貨排程', prompt: '查詢最近的出貨排程和物流狀態' },
    ],
    en: [
      { label: '📊 Supply Status', prompt: 'Check supply availability and estimated arrival for all items' },
      { label: '💰 Volume Pricing', prompt: 'I need tiered pricing for bulk purchases' },
      { label: '📋 Full Specs', prompt: 'List all product specifications and packaging info' },
      { label: '🚚 Shipping', prompt: 'Check upcoming shipment schedule and logistics status' },
    ],
    ja: [
      { label: '📊 供給状況', prompt: '全品目の供給状況と入荷予定を確認してください' },
      { label: '💰 ボリューム価格', prompt: '大量購入の段階別価格を教えてください' },
      { label: '📋 全品目仕様', prompt: '全商品の仕様とパッケージ情報を一覧表示してください' },
      { label: '🚚 出荷予定', prompt: '直近の出荷スケジュールと物流状況を確認してください' },
    ],
    ko: [
      { label: '📊 공급 현황', prompt: '전 품목의 공급 현황과 입고 예정을 확인해 주세요' },
      { label: '💰 대량 가격', prompt: '대량 구매 단계별 가격을 알려주세요' },
      { label: '📋 전체 스펙', prompt: '모든 제품의 사양과 포장 정보를 보여주세요' },
      { label: '🚚 배송 일정', prompt: '최근 출하 일정과 물류 상태를 확인해 주세요' },
    ],
  },
  'gift-festival': {
    'zh-TW': [
      { label: '🎁 送禮指南', prompt: '幫我推薦適合送禮的高級海鮮禮盒' },
      { label: '🎊 年節禮盒', prompt: '過年送禮有什麼推薦？' },
      { label: '💝 送客戶', prompt: '推薦適合送重要客戶的高級禮盒' },
      { label: '⭐ 人氣禮品', prompt: '最多人買來送禮的是哪些商品？' },
    ],
    en: [
      { label: '🎁 Gift Guide', prompt: 'Recommend premium seafood gift sets' },
      { label: '🎊 Holiday Gifts', prompt: 'What do you recommend for holiday gifting?' },
      { label: '💝 Corporate', prompt: 'Suggest impressive gifts for important clients' },
      { label: '⭐ Bestsellers', prompt: 'What are the most popular gift items?' },
    ],
    ja: [
      { label: '🎁 ギフトガイド', prompt: '高級海鮮ギフトセットのおすすめを教えてください' },
      { label: '🎊 お歳暮', prompt: 'お歳暮やお中元におすすめは？' },
      { label: '💝 法人ギフト', prompt: '大切なお客様への贈り物を教えてください' },
      { label: '⭐ 人気ギフト', prompt: '一番人気のギフト商品は何ですか？' },
    ],
    ko: [
      { label: '🎁 선물 가이드', prompt: '프리미엄 해산물 선물 세트를 추천해 주세요' },
      { label: '🎊 명절 선물', prompt: '명절 선물로 추천하는 것은?' },
      { label: '💝 기업 선물', prompt: '중요한 고객에게 보낼 인상적인 선물을 추천해 주세요' },
      { label: '⭐ 인기 선물', prompt: '가장 인기 있는 선물 상품은 무엇인가요?' },
    ],
  },
};

// ─── Chat Welcome ──────────────────────────────────────────────
export const personaChatWelcome: Record<string, Record<string, { title: string; body: string }>> = {
  'premium-gourmet': {
    'zh-TW': {
      title: '歡迎蒞臨元家',
      body: '您的專屬美食顧問，為您推薦頂級食材、分享料理靈感、搭配建議，打造極致的味覺體驗。',
    },
    en: {
      title: 'Welcome to Yens',
      body: 'Your personal gourmet concierge — curated recommendations, culinary inspiration, and pairing suggestions for the finest dining experience.',
    },
  },
  'family-shopper': {
    'zh-TW': {
      title: '歡迎蒞臨元家企業',
      body: '您的專屬海鮮顧問，為您推薦適合全家的食材、查詢訂單、解答所有疑問。',
    },
    en: {
      title: 'Welcome to Yens',
      body: 'Your family seafood advisor — easy meal ideas, order tracking, and personalized recommendations for the whole family.',
    },
  },
  'restaurant-operator': {
    'zh-TW': {
      title: '元家餐飲專業服務',
      body: '食材規格查詢、庫存確認、訂單追蹤、批量採購諮詢 — 讓您的廚房運作更順暢。',
    },
    en: {
      title: 'Yens Foodservice',
      body: 'Product specs, inventory checks, order tracking, bulk inquiries — keeping your kitchen running smoothly.',
    },
  },
  'wholesale-distributor': {
    'zh-TW': {
      title: '元家 B2B 服務平台',
      body: '供貨查詢、量價諮詢、物流追蹤、產品規格 — 一站式通路服務。',
    },
    en: {
      title: 'Yens B2B Platform',
      body: 'Supply status, volume pricing, logistics tracking, product specs — your one-stop channel service.',
    },
  },
  'gift-festival': {
    'zh-TW': {
      title: '元家送禮顧問',
      body: '您的專屬禮品顧問，為每個場合推薦最體面的海鮮禮盒，讓送禮成為一種美好的體驗。',
    },
    en: {
      title: 'Yens Gift Advisor',
      body: 'Your personal gift consultant — impressive seafood gifts for every occasion, making gift-giving a delightful experience.',
    },
  },
};

// ─── Helpers ───────────────────────────────────────────────────

/** Get persona taglines, falling back to default locale taglines */
export function getPersonaTaglines(persona: string, locale: string, defaultTaglines: string[]): string[] {
  return personaTaglines[persona]?.[locale] ?? defaultTaglines;
}

/** Get persona quick actions, falling back to default locale actions */
export function getPersonaQuickActions(persona: string, locale: string, defaultActions: QuickAction[]): QuickAction[] {
  return personaQuickActions[persona]?.[locale] ?? defaultActions;
}
