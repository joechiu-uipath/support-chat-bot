/**
 * Per-product, per-persona synopsis copy.
 *
 * Design principles per persona:
 *
 * PREMIUM GOURMET  (longest, 2-3 sentences)
 *   Focus: Origin story, terroir, tasting notes, wine pairing, cooking technique
 *   Tone:  Refined, evocative, magazine-style
 *
 * FAMILY SHOPPER   (medium, 1-2 sentences)
 *   Focus: Cooking ease, time-saving, nutrition, kid-friendliness, portions
 *   Tone:  Warm, practical, like a helpful neighbor
 *
 * RESTAURANT OPERATOR  (short, 1 sentence)
 *   Focus: Yield, specs, menu application, prep efficiency, consistency
 *   Tone:  Professional, direct, numbers-oriented
 *
 * WHOLESALE DISTRIBUTOR  (shortest, pipe-separated specs)
 *   Focus: Origin, pack size, channel, certification, seasonality
 *   Tone:  Catalogue/data-sheet style
 *
 * GIFT & FESTIVAL  (medium-long, 2 sentences)
 *   Focus: Occasion, impressiveness, recipient matching, presentation
 *   Tone:  Enthusiastic personal shopper
 */

type BilingualText = { zh: string; en: string };
type PersonaSynopsisMap = Record<string, Record<number, BilingualText>>;

export const productSynopses: PersonaSynopsisMap = {
  'premium-gourmet': {
    1: {
      zh: '沙烏地阿拉伯皇室指定蝦場直送，純淨零汙染海域養殖。蝦肉Q彈帶有天然甘甜，建議清蒸或冰鎮後搭配柚子醋享用，感受最純粹的鮮味。',
      en: "Direct from Saudi Arabia's royal shrimp farms, raised in pristine waters. Naturally sweet with a satisfying snap — best enjoyed steamed or chilled with yuzu ponzu to savor the pure ocean flavor.",
    },
    2: {
      zh: '手工去殼去腸泥的藍鑽蝦仁，保留完整蝦肉鮮甜。適合輕炒搭配松露油，或以蒜香橄欖油低溫慢煮，呈現食材本味。',
      en: "Hand-peeled Blue Diamond shrimp preserving full sweetness. Ideal sautéed with truffle oil or slow-cooked in garlic olive oil — letting the natural flavor shine.",
    },
    3: {
      zh: '特選大尾規格，每尾飽滿彈牙。宴客級食材，建議以奶油白酒香煎或搭配干貝組成海鮮雙拼，視覺與味覺兼具。',
      en: "Premium jumbo selection — each piece plump and firm. Restaurant-worthy; try pan-seared in butter and white wine, or paired with scallops for an elegant surf duo.",
    },
    4: {
      zh: '格陵蘭深海雪鰈菲力，無刺處理後肉質如絲般細緻。低溫蒸煮保留天然油脂，搭配檸檬奶油醬，口感滑嫩入口即化。',
      en: "Greenland deep-sea halibut fillet, boneless with a silky texture. Gently steamed to preserve natural oils — pair with lemon beurre blanc for a melt-in-your-mouth experience.",
    },
    5: {
      zh: '北極圈傳統冰釣工法捕獲，厚切帶骨鎖住豐富油脂。大火香煎至表面金黃，內裡仍保持嫩潤，佐以海鹽與黑胡椒即是極品。',
      en: "Caught by traditional Arctic ice-fishing — thick bone-in cuts locking in rich oils. Sear on high heat until golden, keeping the center succulent. Season simply with sea salt and black pepper.",
    },
    6: {
      zh: '北海道噴火灣直送，每顆干貝飽含海洋鮮甜精華。生食可感受絲綢般口感；輕煎至焦糖色澤，搭配夏布利白酒，是味蕾的極致享受。',
      en: "Direct from Hokkaido's Funka Bay — each scallop bursting with ocean sweetness. Enjoy raw for a silky texture, or sear to caramel perfection and pair with Chablis for the ultimate indulgence.",
    },
    7: {
      zh: '急速冷凍保留蛤蜊原始鮮味與海水甘甜。以白酒蒜香清蒸，湯汁拌入天使細麵，就是一道道地的地中海風味料理。',
      en: "Flash-frozen to capture pristine briny sweetness. Steam with white wine and garlic, then toss the broth with angel hair pasta for an authentic Mediterranean preparation.",
    },
    8: {
      zh: '阿拉斯加深海帝王蟹腳，蟹肉飽滿細緻帶有天然甜味。建議清蒸後搭配融化奶油，或炭火輕烤增添煙燻風味，是頂級餐桌的壓軸之作。',
      en: "Alaskan deep-sea king crab legs — full, delicate meat with natural sweetness. Steam and serve with drawn butter, or lightly charcoal-grill for a smoky accent. The crown jewel of any fine table.",
    },
    9: {
      zh: '挪威峽灣冷水域養殖鮭魚，Omega-3含量豐富。厚切適合中低溫香煎，保持中心微粉色，搭配時蘿芥末醬，品味北歐的純淨風味。',
      en: "Norwegian fjord-raised salmon, rich in Omega-3. Thick-cut for medium-rare searing — keep the center blush pink and serve with dill mustard sauce for a taste of Nordic purity.",
    },
    10: {
      zh: '北大西洋深海鱈魚，肉質雪白如玉、口感綿密細嫩。低脂高蛋白的優雅選擇，以味噌醬醃漬後香烤，風味層次豐富。',
      en: "North Atlantic deep-sea cod — snow-white flesh with a delicate, flaky texture. An elegant low-fat choice; marinate in miso paste and broil for beautifully layered flavors.",
    },
    11: {
      zh: '主廚精選多種海鮮慢火熬煮，湯底濃郁醇厚。加入鮮奶油與白蘭地微調，搭配烤麵包丁，如同高級餐廳的開胃前菜。',
      en: "Chef's selection of seafood, slow-simmered to a rich bisque. Finish with cream and a touch of brandy, serve with croutons — a fine-dining starter at home.",
    },
    12: {
      zh: '融合泰式香料與新鮮海產的酸辣湯品，南薑、香茅與檸檬葉層層堆疊的香氣。加入椰奶可轉為冬蔭功風味，是品味東南亞料理的捷徑。',
      en: "Thai-inspired hot & sour broth layered with galangal, lemongrass, and kaffir lime. Add coconut milk for a Tom Kha twist — an effortless gateway to Southeast Asian cuisine.",
    },
    13: {
      zh: '集結鮑魚、干貝、花膠、排翅等八種頂級食材，遵循古法慢燉72小時。每一口都是百年功夫的醇厚滋味，年節宴客的殿堂級珍饈。',
      en: "Eight premium ingredients — abalone, scallops, fish maw, shark fin — slow-braised 72 hours following century-old tradition. Each spoonful is a masterwork of depth. The ultimate festive delicacy.",
    },
    14: {
      zh: '嚴選厚身花膠搭配放山土雞，文火慢燉出豐富膠質與雞汁精華。滋補養顏的極品湯饌，溫潤順口，是懂得善待自己的人的首選。',
      en: "Thick-cut fish maw with free-range chicken, slow-simmered to extract rich collagen and deep poultry essence. A nourishing beauty elixir — smooth, warming, for those who invest in themselves.",
    },
    15: {
      zh: '嚴選大尾草蝦，殼薄肉厚，蝦膏豐富。鹽烤最能展現草蝦的濃郁蝦香，也適合以蒜蓉粉絲蒸煮，是海鮮饕客的經典選擇。',
      en: "Premium tiger prawns — thin shell, thick meat, rich tomalley. Salt-grilling best showcases their intense prawn aroma; also superb steamed with garlic and glass noodles. A classic for seafood connoisseurs.",
    },
    16: {
      zh: '新鮮小卷急凍保留脆嫩口感，料理方式靈活多變。以橄欖油快炒搭配櫻桃番茄，或經典三杯做法，都能展現食材的清甜本質。',
      en: "Flash-frozen baby squid with a crisp, tender bite. Versatile — quick-sauté with olive oil and cherry tomatoes, or prepare three-cup style to bring out its natural sweetness.",
    },
    17: {
      zh: '嚴選龍蝦尾，肉質紮實細緻帶有甘甜餘韻。焗烤搭配帕瑪森起司是經典做法，或簡單清蒸沾取澄清奶油，盡顯龍蝦尊貴風範。',
      en: "Premium lobster tails — firm, refined meat with a lingering sweetness. Broil with Parmesan for a classic preparation, or simply steam and dip in clarified butter for pure lobster elegance.",
    },
    18: {
      zh: '嚴選蝦、干貝、花枝、蛤蜊組成的海鮮饗宴。適合搭配香檳或白酒，作為聚會的華麗開場，一盤盡享海洋精華。',
      en: "A curated ensemble of shrimp, scallops, squid, and clams. Pair with Champagne or white wine as a stunning party opener — the ocean's finest on one platter.",
    },
  },

  'family-shopper': {
    1: {
      zh: '安心無藥物殘留，全家人都能放心吃。退冰後水煮3分鐘就很好吃，一包大約4-5人份，配飯配麵都方便。',
      en: 'No chemical residues — safe for the whole family. Boil for 3 minutes after thawing. One pack serves 4-5 people; great with rice or noodles.',
    },
    2: {
      zh: '已去殼去腸泥，省去備料時間！快炒5分鐘就能上桌，做蝦仁蛋炒飯小朋友最愛。一包約可做2-3道菜。',
      en: 'Pre-peeled and deveined — saves prep time! Stir-fry in 5 minutes for a quick dinner. Kids love shrimp fried rice. One pack makes 2-3 dishes.',
    },
    3: {
      zh: '大尾蝦仁口感更過癮，特別適合做蝦仁料理的主角。鳳梨蝦球、蝦仁豆腐都很讚，宴客或週末加菜都合適。',
      en: 'Jumbo size makes every bite count. Perfect as the star of shrimp dishes — pineapple shrimp balls, shrimp with tofu. Great for weekend upgrades or guests.',
    },
    4: {
      zh: '完全無刺！寶寶副食品首選，蒸熟壓成泥就能餵。大人也愛吃，煎一下灑點鹽就很香。一包約3-4人份，富含DHA幫助腦部發育。',
      en: 'Totally boneless! Perfect for baby food — just steam and mash. Adults love it too — pan-fry with a pinch of salt. Serves 3-4, rich in DHA for brain development.',
    },
    5: {
      zh: '厚切帶骨更有口感，煎或烤都好吃。Omega-3含量高，是全家補充好油脂的健康選擇。建議週末加菜時享用。',
      en: 'Thick bone-in cut with great texture. Pan-fry or grill — both delicious. High in Omega-3, a healthy choice for the family. Perfect for weekend meal upgrades.',
    },
    6: {
      zh: '北海道頂級干貝，煎到兩面金黃就超好吃！一包約10-15顆，可以做兩餐。小朋友也很喜歡干貝的天然甜味。',
      en: 'Premium Hokkaido scallops — just sear until golden on both sides! About 10-15 per pack, good for 2 meals. Kids love their natural sweetness.',
    },
    7: {
      zh: '煮味噌湯加一把就超鮮！也可以炒絲瓜、煮義大利麵。不用吐沙直接煮，省時又方便，CP值超高。',
      en: 'Drop a handful into miso soup for instant umami! Also great with pasta or stir-fried veggies. Pre-cleaned, no purging needed. Amazing value.',
    },
    8: {
      zh: '特別的日子來一隻帝王蟹腳！蒸熟剪開就能吃，小朋友都會搶著吃蟹肉。一包份量大，全家一起享用剛剛好。',
      en: "King crab for special family nights! Just steam, snip, and eat — kids will fight over the sweet meat. One pack is plenty for the whole family.",
    },
    9: {
      zh: '富含Omega-3和DHA，最方便的健康魚類。平底鍋煎5-6分鐘就好，配上檸檬汁，簡單又營養。一包約2-3片。',
      en: 'Rich in Omega-3 and DHA — the easiest healthy fish. Pan-fry 5-6 minutes, squeeze lemon, done. 2-3 steaks per pack, serves 2-3.',
    },
    10: {
      zh: '低脂高蛋白，健身和減脂家庭的好朋友。肉質細嫩不腥，清蒸灑點醬油就很好吃，挑食的小朋友也能接受。',
      en: 'Low fat, high protein — great for health-conscious families. Tender with no fishy taste. Steam with a dash of soy sauce — even picky kids eat it.',
    },
    11: {
      zh: '忙碌的時候加熱5分鐘就有一碗好湯！配白飯或麵包都好吃，小朋友也喜歡濃郁的海鮮味道。冰箱常備最安心。',
      en: 'Heat 5 minutes and dinner is served! Pairs with rice or bread. Kids love the rich seafood flavor. A freezer must-have for busy days.',
    },
    12: {
      zh: '酸酸辣辣很開胃，夏天沒食慾的時候最適合。微辣程度大人小孩都能接受，配碗白飯就是一餐。',
      en: 'Tangy and mildly spicy — great appetite booster, especially in summer. Mild enough for the whole family. Just add rice for a complete meal.',
    },
    13: {
      zh: '過年圍爐必備！加熱就能上桌，不用自己費工準備。料超多超澎湃，長輩吃了都誇獎，一鍋全家吃得滿足。',
      en: 'A must for Lunar New Year dinner! Just heat and serve — no prep needed. Packed with premium ingredients. The whole family will love this hearty stew.',
    },
    14: {
      zh: '膠質超豐富，喝完皮膚會變好！冬天喝暖呼呼的，夏天冰涼喝也很棒。一包約3-4碗，全家一起補身體。',
      en: 'Packed with collagen — great for skin! Warming in winter, refreshing chilled in summer. Makes 3-4 bowls. Nourishing for the whole family.',
    },
    15: {
      zh: '殼薄好剝，小朋友也能自己動手。烤肉或火鍋放幾隻草蝦，瞬間升級。一包份量足，家庭聚餐好幫手。',
      en: 'Thin shell, easy to peel — kids can do it themselves. Add to BBQ or hot pot for an instant upgrade. Generous portions for family gatherings.',
    },
    16: {
      zh: '小卷料理超快速，炒一盤只要5分鐘。鹹酥小卷是小朋友的零嘴首選，三杯做法大人也愛。一包可做2道菜。',
      en: 'Super quick to cook — stir-fry in 5 minutes. Deep-fried squid is a kid favorite; three-cup style for adults. One pack makes 2 dishes.',
    },
    17: {
      zh: '想犒賞家人的時候就來龍蝦尾！焗烤做法最簡單，放烤箱15分鐘就完成。讓全家吃得像在高級餐廳。',
      en: 'Treat the family to lobster tails! Easiest method: broil 15 minutes with cheese. Make any night feel like fine dining.',
    },
    18: {
      zh: '一盤搞定所有海鮮！火鍋、煮湯都方便，不用分開買。份量大約4-6人份，家庭聚會或週末大餐最方便。',
      en: 'All your seafood in one pack! Perfect for hot pot or soup — no need to buy separately. Serves 4-6, ideal for family gatherings.',
    },
  },

  'restaurant-operator': {
    1: {
      zh: '規格一致，出肉率高。適合白灼蝦、蝦料理定食。600g/包便於份量控制。',
      en: 'Consistent sizing, high yield. Suits blanched shrimp platters and set meals. 600g packs for easy portioning.',
    },
    2: {
      zh: '去殼去腸泥，零備料損耗。適用快炒、義麵、丼飯等多種菜單品項。',
      en: 'Peeled and deveined — zero prep waste. Versatile across stir-fry, pasta, and donburi menu items.',
    },
    3: {
      zh: '大尾規格適合單品主菜或宴會料理。視覺份量感佳，提升客單價。',
      en: 'Jumbo size ideal for entrée features or banquet dishes. Strong visual impact, supports premium pricing.',
    },
    4: {
      zh: '無刺魚片，廚房安全風險低。適合兒童餐、輕食套餐。300g小包裝減少解凍浪費。',
      en: "Boneless fillet, low kitchen safety risk. Suits kids' menu and light sets. 300g packs reduce thaw waste.",
    },
    5: {
      zh: '厚切帶骨，適合主菜定位。香煎後擺盤效果佳，適用西式或日式菜單。',
      en: 'Thick bone-in steak for main course positioning. Plates beautifully seared. Fits Western or Japanese menus.',
    },
    6: {
      zh: '生食級認證，適合刺身、壽司、前菜。品質穩定，顆粒大小一致，備料效率高。',
      en: 'Sashimi-grade certified for raw preparations and appetizers. Consistent size for efficient prep.',
    },
    7: {
      zh: '高CP值配料，適合湯品、義麵、熱炒配菜。免吐沙處理，直接出餐。',
      en: 'Cost-effective ingredient for soups, pasta, and stir-fry sides. Pre-cleaned — ready for service.',
    },
    8: {
      zh: '高單價食材，適合單點或宴席主菜。蒸煮即可出餐，廚房作業簡單。利潤空間大。',
      en: 'High-ticket item for à la carte or banquet mains. Steam to serve — minimal kitchen effort. Strong margin.',
    },
    9: {
      zh: '穩定供貨的基本魚類品項。適合定食、早午餐、便當。厚切規格統一，出餐一致。',
      en: 'Reliable staple fish. Suits set meals, brunch, bento. Uniform thick-cut ensures consistent plating.',
    },
    10: {
      zh: '白肉魚低脂定位，適合健康取向菜單。清蒸、煎烤皆可，出餐速度快。',
      en: 'White fish for health-focused menus. Steam or sear — quick to plate. Low-fat positioning.',
    },
    11: {
      zh: '加熱即出餐的湯品，適合套餐附湯或單點前菜。降低廚房人力需求。',
      en: 'Heat-and-serve soup for set meal course or starter. Reduces kitchen labor.',
    },
    12: {
      zh: '酸辣風味差異化品項，適合夏季菜單或東南亞主題。加熱即出餐。',
      en: 'Differentiated hot & sour option for summer menus or SE Asian themes. Heat and serve.',
    },
    13: {
      zh: '高單價宴席料理，適合年節桌菜或預購套餐。加熱即出，免廚師現做。利潤率極高。',
      en: 'Premium banquet dish for holiday menus and pre-order sets. No chef prep needed. Very high margin.',
    },
    14: {
      zh: '養生湯品定位，適合商業午餐或滋補菜單。加熱出餐，品質穩定。',
      en: 'Wellness soup for business lunch or nourishing menus. Consistent quality, heat and serve.',
    },
    15: {
      zh: '帶頭帶殼草蝦，擺盤氣勢足。適合鹽烤、鐵板、火鍋店。殼薄出肉率佳。',
      en: 'Whole prawns with impressive plating. Suits salt-grill, teppan, hot pot. Thin shell, good yield.',
    },
    16: {
      zh: '快速出餐海鮮，炒、炸、三杯皆可。備料簡單，適合熱炒店或居酒屋。',
      en: 'Quick-service seafood — stir-fry, deep-fry, three-cup. Simple prep for casual dining and izakaya.',
    },
    17: {
      zh: '頂級主菜食材，適合節慶特別菜單。焗烤出餐簡單，提升客單價。',
      en: "Premium entrée for Valentine's, Christmas, special menus. Easy broil preparation. Elevates check size.",
    },
    18: {
      zh: '一包多種海鮮，適合火鍋套餐或海鮮拼盤。省去多品項叫貨，庫存簡單。',
      en: 'Multi-seafood pack for hot pot sets or platters. One SKU simplifies ordering and inventory.',
    },
  },

  'wholesale-distributor': {
    1: {
      zh: '沙烏地阿拉伯產 | 600g/包 | SGS認證 | 全年穩定供貨',
      en: 'Saudi Arabia origin | 600g/pack | SGS certified | Year-round supply',
    },
    2: {
      zh: '去殼去腸泥 | 450g/包 | 零損耗規格 | 餐飲通路熱銷品',
      en: 'Peeled & deveined | 450g/pack | Zero-waste spec | Top foodservice seller',
    },
    3: {
      zh: '大尾規格 | 400g/包 | 宴會通路主力 | 高毛利品項',
      en: 'Jumbo spec | 400g/pack | Banquet channel staple | High-margin item',
    },
    4: {
      zh: '格陵蘭產 | 300g/包 | 無刺處理 | 嬰幼兒市場需求穩定',
      en: 'Greenland origin | 300g/pack | Boneless | Stable infant-market demand',
    },
    5: {
      zh: '北極圈冰釣 | 500g/包 | 厚切帶骨 | 西餐通路適用',
      en: 'Arctic ice-caught | 500g/pack | Thick bone-in | Western dining channel',
    },
    6: {
      zh: '北海道產 | 500g/包 | 生食級認證 | 日料通路指定品',
      en: 'Hokkaido origin | 500g/pack | Sashimi-grade cert | Japanese dining standard',
    },
    7: {
      zh: '急速冷凍 | 600g/包 | 免吐沙 | 低價高迴轉品項',
      en: 'Flash-frozen | 600g/pack | Pre-cleaned | Low-cost high-turnover SKU',
    },
    8: {
      zh: '阿拉斯加產 | 800g/包 | 頂級禮盒通路 | 年節預購量大',
      en: 'Alaska origin | 800g/pack | Premium gift channel | High holiday pre-order volume',
    },
    9: {
      zh: '挪威產 | 400g/包 | Omega-3訴求 | 量販超市主力魚種',
      en: 'Norway origin | 400g/pack | Omega-3 positioning | Retail supermarket staple',
    },
    10: {
      zh: '北大西洋產 | 400g/包 | 低脂高蛋白 | 健康通路成長品項',
      en: 'North Atlantic | 400g/pack | Low-fat high-protein | Growing health channel item',
    },
    11: {
      zh: '顏師傅品牌 | 500g/包 | 加熱即食 | 超商便利店通路',
      en: 'Chef Yen brand | 500g/pack | Heat-and-serve | Convenience store channel',
    },
    12: {
      zh: '顏師傅品牌 | 500g/包 | 泰式風味 | 夏季檔期銷售佳',
      en: 'Chef Yen brand | 500g/pack | Thai flavor | Strong summer seasonal sales',
    },
    13: {
      zh: '品元堂品牌 | 1200g/包 | 年節禮盒主力 | 預購期Q4-Q1',
      en: 'Pin Yuan Tang brand | 1200g/pack | Holiday gift flagship | Pre-order peak Q4-Q1',
    },
    14: {
      zh: '品元堂品牌 | 800g/包 | 養生定位 | 全年銷售穩定',
      en: 'Pin Yuan Tang brand | 800g/pack | Wellness positioning | Year-round steady sales',
    },
    15: {
      zh: '大尾草蝦 | 600g/包 | 火鍋烤肉通路 | 秋冬旺季品項',
      en: 'Large tiger prawns | 600g/pack | Hot pot/BBQ channel | Fall-winter peak item',
    },
    16: {
      zh: '急凍小卷 | 500g/包 | 熱炒居酒屋通路 | 全年穩定出貨',
      en: 'Flash-frozen squid | 500g/pack | Casual dining channel | Year-round shipment',
    },
    17: {
      zh: '龍蝦尾 | 400g/包 | 高級餐飲通路 | 節慶檔期需求增',
      en: 'Lobster tails | 400g/pack | Fine dining channel | Holiday seasonal spike',
    },
    18: {
      zh: '綜合海鮮 | 800g/包 | 火鍋套餐組合 | 冬季主力品項',
      en: 'Mixed seafood | 800g/pack | Hot pot set bundle | Winter peak item',
    },
  },

  'gift-festival': {
    1: {
      zh: '元家招牌伴手禮！皇室御用等級，送禮有面子。精緻包裝適合年節拜訪、喬遷祝賀，讓收禮人感受滿滿心意。',
      en: "Yens' signature gift! Royal-grade quality that makes a statement. Beautiful packaging for Lunar New Year visits or housewarming — a gift that truly impresses.",
    },
    2: {
      zh: '方便料理的高級食材，送給忙碌的朋友最貼心。去殼即用的設計，讓收禮人輕鬆享受美味，實用又有質感。',
      en: 'A thoughtful gift for busy friends — premium yet convenient. Pre-peeled for effortless cooking, combining practicality with quality.',
    },
    3: {
      zh: '大尾蝦仁送禮超有氣派！適合送主管、長輩或重要客戶，大器的份量展現您的誠意與品味。',
      en: 'Jumbo shrimp makes a grand impression! Perfect for bosses, elders, or key clients — the generous size shows your sincerity and taste.',
    },
    4: {
      zh: '送給有寶寶的家庭最窩心的禮物！無刺安全設計，讓新手爸媽好放心。實用的育兒好物，彌月送禮好選擇。',
      en: "The most thoughtful gift for families with babies! Boneless safety design gives new parents peace of mind. Great for baby shower gifts.",
    },
    5: {
      zh: '送給愛下廚的朋友，北極圈冰釣的話題性十足！附上簡單食譜卡更顯用心，是獨特又有故事的禮物。',
      en: "For friends who love cooking — Arctic ice-caught fish is a great conversation starter! Add a recipe card for a personal touch. A gift with a story.",
    },
    6: {
      zh: '北海道干貝是送禮的黃金選擇！高級感十足，不論送長輩、客戶或美食愛好者都不會出錯。年節必備頂級禮盒。',
      en: 'Hokkaido scallops are the gold standard of gifting! Universally impressive — perfect for elders, clients, or food lovers. A holiday essential.',
    },
    7: {
      zh: '經濟實惠的伴手禮選擇，份量大方又實用。適合鄰居互贈、同事分享，輕鬆表達心意不傷荷包。',
      en: "A budget-friendly gift that's generous and practical. Perfect for neighbors and coworkers — express appreciation without breaking the bank.",
    },
    8: {
      zh: '帝王蟹腳是送禮的王者之選！開箱瞬間的驚嘆感無可取代。送長輩、慶生、結婚周年，最能傳達「你值得最好的」。',
      en: 'King crab legs are THE gift! The unboxing wow factor is unmatched. For parents, birthdays, anniversaries — says "you deserve the very best."',
    },
    9: {
      zh: '健康又美味的送禮選擇，適合注重養生的長輩或健身朋友。Omega-3豐富，送禮送健康，心意滿分。',
      en: 'A healthy yet delicious gift for health-conscious elders or fitness enthusiasts. Rich in Omega-3 — gifting wellness is always appreciated.',
    },
    10: {
      zh: '低脂高蛋白的健康好物，送給正在控制飲食的朋友最貼心。清淡優雅的魚肉，展現您細膩的關懷。',
      en: 'Low-fat, high-protein goodness for friends watching their diet. Light, elegant fish that shows you truly care about their wellbeing.',
    },
    11: {
      zh: '方便又美味的暖心小禮！加熱即享的設計，最適合送給忙碌的上班族朋友，讓他們在家也能喝到好湯。',
      en: 'A cozy little gift of convenience! Heat-and-serve — perfect for busy working friends who deserve good soup at home.',
    },
    12: {
      zh: '夏日送禮的驚喜之選！酸辣開胃的異國風味，適合喜歡嘗鮮的朋友，為餐桌增添趣味。',
      en: 'A fun summer gift surprise! Exotic hot & sour flavors for adventurous friends who love trying new tastes.',
    },
    13: {
      zh: '年節送禮的殿堂級首選！佛跳牆象徵豐盛圓滿，送長輩表孝心、送客戶顯誠意。高貴大器，收到一定感動。',
      en: 'THE ultimate holiday gift! Buddha Jumps Over the Wall symbolizes abundance and prosperity. For parents — devotion. For clients — respect. Truly magnificent.',
    },
    14: {
      zh: '養顏滋補的頂級湯品，送女性長輩或閨蜜最有心。花膠燉雞湯代表的是呵護與珍惜，溫暖又有質感。',
      en: 'A premium nourishing soup — perfect for mothers, aunts, or close friends. Fish maw chicken soup says "I cherish you." Warm, elegant, meaningful.',
    },
    15: {
      zh: '氣勢十足的大草蝦，中秋烤肉禮盒的人氣品項！收禮人可以直接烤來吃，實用又能炒熱氣氛。',
      en: 'Impressive large tiger prawns — a BBQ gift box favorite for Mid-Autumn Festival! Grill right away. Practical and fun.',
    },
    16: {
      zh: '輕巧的海鮮伴手禮，適合隨手帶去朋友聚會。小卷料理方式多元，不挑人，是不會出錯的安全選擇。',
      en: "A light seafood gift, easy to bring to gatherings. Versatile squid suits all tastes — a safe, crowd-pleasing choice.",
    },
    17: {
      zh: '龍蝦尾送禮極具尊榮感！情人節、結婚紀念日或慶功宴的完美選擇。讓收禮人享受星級餐廳的奢華體驗。',
      en: "Lobster tails radiate luxury! Perfect for Valentine's, anniversaries, or celebrations. Give the gift of a five-star dining experience.",
    },
    18: {
      zh: '豐盛的海鮮組合禮盒，送禮大方又實惠。適合家庭聚會或年節送禮，一盒滿足所有海鮮愛好者。',
      en: 'A generous seafood assortment — impressive yet affordable. Perfect for family gatherings or holiday gifting. One box for all seafood lovers.',
    },
  },
};

/**
 * Get the persona-specific synopsis for a product.
 * Falls back to the default description if no per-product copy exists.
 */
export function getProductSynopsis(
  productId: number,
  persona: string,
  locale: string,
  defaultDescription: string,
): string {
  const personaCopy = productSynopses[persona];
  if (!personaCopy) return defaultDescription;

  const productCopy = personaCopy[productId];
  if (!productCopy) return defaultDescription;

  if (locale === 'zh-TW') return productCopy.zh;
  if (locale === 'en') return productCopy.en;
  // For all other locales (ja, ko, fr, de, nl), the API has already localized
  // the description — use it directly rather than falling back to zh copy.
  return defaultDescription;
}
