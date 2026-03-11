-- Product images for cross-fade feature
-- Rules:
--   Products 1-18 (original featured): at least 2 images each
--   Premium showcase products (13, 46, 49, 50, 55): 3 images each
--   Featured/premium products: 2-3 images
--   Standard products: 1-2 images
--   All products have at least 1 image (sort_order 0 = primary)

INSERT INTO product_images (product_id, image_url, sort_order) VALUES

-- =====================================================
-- Products 1-18: Original catalog (all get 2+ images)
-- =====================================================

-- Product 1: 藍鑽蝦（全蝦） [featured]
(1, '/cdn/images/products/1-01.jpg', 0),

-- Product 2: 藍鑽蝦仁 [featured]
(2, '/cdn/images/products/2-01.jpg', 0),

-- Product 3: 藍鑽蝦仁（大尾） [featured]
(3, '/cdn/images/products/3-01.jpg', 0),

-- Product 4: 寶寶雪鰈菲力 [featured]
(4, '/cdn/images/products/4-01.jpg', 0),

-- Product 5: 冰釣雪鰈切片 [featured]
(5, '/cdn/images/products/5-01.jpg', 0),

-- Product 6: 北海道生食級干貝 [featured]
(6, '/cdn/images/products/6-01.jpg', 0),
(6, '/cdn/images/products/6-03.jpg', 2),

-- Product 7: 鮮凍蛤蜊
(7, '/cdn/images/products/7-01.jpg', 0),

-- Product 8: 帝王蟹腳 [featured]
(8, '/cdn/images/products/8-01.jpg', 0),
(8, '/cdn/images/products/8-02.jpg', 1),

-- Product 9: 鮭魚切片
(9, '/cdn/images/products/9-01.jpg', 0),

-- Product 10: 鱈魚切片
(10, '/cdn/images/products/10-01.jpg', 0),

-- Product 11: 顏師傅海鮮濃湯
(11, '/cdn/images/products/11-01.jpg', 0),

-- Product 12: 顏師傅酸辣海鮮湯
(12, '/cdn/images/products/12-01.jpg', 0),
(12, '/cdn/images/products/12-02.jpg', 1),

-- Product 13: 品元堂佛跳牆 [featured, PREMIUM SHOWCASE]
(13, '/cdn/images/products/13-01.jpg', 0),

-- Product 14: 品元堂花膠雞湯
(14, '/cdn/images/products/14-01.jpg', 0),

-- Product 15: 草蝦（全蝦）
(15, '/cdn/images/products/15-01.jpg', 0),

-- Product 16: 小卷（透抽）
(16, '/cdn/images/products/16-01.jpg', 0),

-- Product 17: 龍蝦尾 [featured]
(17, '/cdn/images/products/17-01.jpg', 0),
(17, '/cdn/images/products/17-02.jpg', 1),

-- Product 18: 綜合海鮮拼盤 [featured]
(18, '/cdn/images/products/18-01.jpg', 0),

-- =====================================================
-- Products 19-100: Expanded catalog
-- =====================================================

-- Product 19: 白蝦仁（小）/ Small White Shrimp [standard]
(19, '/cdn/images/products/19-01.jpg', 0),

-- Product 20: 甜蝦刺身 / Sweet Shrimp Sashimi [featured]
(20, '/cdn/images/products/20-01.jpg', 0),

-- Product 21: 天使紅蝦 / Argentine Red Shrimp [featured]
(21, '/cdn/images/products/21-01.jpg', 0),

-- Product 22: 牡丹蝦 / Botan Shrimp [featured/premium]
(22, '/cdn/images/products/22-01.jpg', 0),

-- Product 23: 明蝦 / King Prawn [standard]
(23, '/cdn/images/products/23-01.jpg', 0),

-- Product 24: 櫻花蝦 / Sakura Shrimp [standard]
(24, '/cdn/images/products/24-01.jpg', 0),

-- Product 25: 蝦米 / Dried Shrimp [standard]
(25, '/cdn/images/products/25-01.jpg', 0),

-- Product 26: 鮮蝦丸 / Shrimp Balls [standard]
(26, '/cdn/images/products/26-01.jpg', 0),

-- Product 27: 鮮蝦水餃 / Shrimp Dumplings [standard]
(27, '/cdn/images/products/27-01.jpg', 0),

-- Product 28: 蝦仁燒賣 / Shrimp Siu Mai [standard]
(28, '/cdn/images/products/28-01.jpg', 0),

-- Product 29: 鮭魚菲力 / Salmon Fillet [standard]
(29, '/cdn/images/products/29-01.jpg', 0),

-- Product 30: 煙燻鮭魚 / Smoked Salmon [featured]
(30, '/cdn/images/products/30-01.jpg', 0),

-- Product 31: 鮭魚肚 / Salmon Belly [standard]
(31, '/cdn/images/products/31-01.jpg', 0),

-- Product 32: 鱈魚菲力 / Cod Fillet [standard]
(32, '/cdn/images/products/32-01.jpg', 0),

-- Product 33: 比目魚鰭邊肉 / Halibut Engawa [featured]
(33, '/cdn/images/products/33-01.jpg', 0),

-- Product 34: 土魠魚切片 / Spanish Mackerel Steak [standard]
(34, '/cdn/images/products/34-01.jpg', 0),

-- Product 35: 秋刀魚 / Saury [standard]
(35, '/cdn/images/products/35-01.jpg', 0),

-- Product 36: 鯖魚片 / Mackerel Fillet [standard]
(36, '/cdn/images/products/36-01.jpg', 0),

-- Product 37: 虱目魚肚 / Milkfish Belly [standard]
(37, '/cdn/images/products/37-01.jpg', 0),

-- Product 38: 鱸魚切片 / Sea Bass Portion [standard]
(38, '/cdn/images/products/38-01.jpg', 0),

-- Product 39: 日本鰻魚蒲燒 / Unagi Kabayaki [featured]
(39, '/cdn/images/products/39-01.jpg', 0),

-- Product 40: 魷魚圈 / Squid Rings [standard]
(40, '/cdn/images/products/40-01.jpg', 0),

-- Product 41: 花枝丸 / Cuttlefish Balls [standard]
(41, '/cdn/images/products/41-01.jpg', 0),

-- Product 42: 章魚腳 / Octopus Tentacles [standard]
(42, '/cdn/images/products/42-01.jpg', 0),

-- Product 43: 軟絲 / Soft Cuttlefish [standard]
(43, '/cdn/images/products/43-01.jpg', 0),

-- Product 44: 松葉蟹腳 / Snow Crab Legs [featured]
(44, '/cdn/images/products/44-01.jpg', 0),

-- Product 45: 紅蟳 / Mud Crab [featured/seasonal]
(45, '/cdn/images/products/45-01.jpg', 0),

-- Product 46: 帝王蟹（整隻）/ Whole King Crab [PREMIUM SHOWCASE]
(46, '/cdn/images/products/46-01.jpg', 0),
(46, '/cdn/images/products/46-02.jpg', 1),
(46, '/cdn/images/products/46-03.jpg', 2),

-- Product 47: 三點蟹 / Blue Swimmer Crab [standard]
(47, '/cdn/images/products/47-01.jpg', 0),
(47, '/cdn/images/products/47-02.jpg', 1),

-- Product 48: 花蟹 / Flower Crab [standard]
(48, '/cdn/images/products/48-01.jpg', 0),

-- Product 49: 波士頓龍蝦 / Boston Lobster [PREMIUM SHOWCASE]
(49, '/cdn/images/products/49-01.jpg', 0),

-- Product 50: 生凍龍蝦 / Raw Frozen Lobster [PREMIUM SHOWCASE]
(50, '/cdn/images/products/50-01.jpg', 0),
(50, '/cdn/images/products/50-02.jpg', 1),

-- Product 51: 淡菜（孔雀蛤）/ Green Mussels [standard]
(51, '/cdn/images/products/51-01.jpg', 0),

-- Product 52: 生蠔 / Raw Oysters [featured]
(52, '/cdn/images/products/52-01.jpg', 0),
(52, '/cdn/images/products/52-02.jpg', 1),

-- Product 53: 烤牡蠣 / Grilled Oysters [standard]
(53, '/cdn/images/products/53-01.jpg', 0),

-- Product 54: 文蛤 / Hard Clams [standard]
(54, '/cdn/images/products/54-01.jpg', 0),

-- Product 55: 鮑魚（整顆）/ Whole Abalone [PREMIUM SHOWCASE]
(55, '/cdn/images/products/55-01.jpg', 0),

-- Product 56: 九孔鮑 / Small Abalone [featured]
(56, '/cdn/images/products/56-01.jpg', 0),

-- Product 57: 海參 / Sea Cucumber [featured/premium]
(57, '/cdn/images/products/57-01.jpg', 0),

-- Product 58: 魚翅（人造）/ Imitation Shark Fin [standard]
(58, '/cdn/images/products/58-01.jpg', 0),

-- Product 59: 魚丸 / Fish Balls [standard]
(59, '/cdn/images/products/59-01.jpg', 0),

-- Product 60: 蟹肉棒 / Imitation Crab Sticks [standard]
(60, '/cdn/images/products/60-01.jpg', 0),

-- Product 61: 魚餃 / Fish Dumplings [standard]
(61, '/cdn/images/products/61-01.jpg', 0),

-- Product 62: 蝦餃 / Shrimp Har Gow [standard]
(62, '/cdn/images/products/62-01.jpg', 0),

-- Product 63: 花枝漿 / Cuttlefish Paste [standard]
(63, '/cdn/images/products/63-01.jpg', 0),

-- Product 64: 龍蝦沙拉 / Lobster Salad [standard]
(64, '/cdn/images/products/64-01.jpg', 0),

-- Product 65: 鮭魚卵 / Salmon Roe [featured]
(65, '/cdn/images/products/65-01.jpg', 0),

-- Product 66: 飛魚卵 / Flying Fish Roe [standard]
(66, '/cdn/images/products/66-01.jpg', 0),

-- Product 67: 明太子 / Mentaiko [featured]
(67, '/cdn/images/products/67-01.jpg', 0),

-- Product 68: 烏魚子 / Mullet Roe [featured/premium seasonal]
(68, '/cdn/images/products/68-01.jpg', 0),

-- Product 69: 海苔酥 / Crispy Seaweed Flakes [standard]
(69, '/cdn/images/products/69-01.jpg', 0),

-- Product 70: 柴魚片 / Bonito Flakes [standard]
(70, '/cdn/images/products/70-01.jpg', 0),

-- Product 71: 顏師傅海鮮粥 / Chef Yen Seafood Congee [standard]
(71, '/cdn/images/products/71-01.jpg', 0),

-- Product 72: 顏師傅蟹肉羹 / Chef Yen Crab Meat Soup [standard]
(72, '/cdn/images/products/72-01.jpg', 0),

-- Product 73: 顏師傅海鮮炒飯 / Chef Yen Seafood Fried Rice [standard]
(73, '/cdn/images/products/73-01.jpg', 0),

-- Product 74: 顏師傅蝦仁炒飯 / Chef Yen Shrimp Fried Rice [standard]
(74, '/cdn/images/products/74-01.jpg', 0),

-- Product 75: 顏師傅魚湯麵 / Chef Yen Fish Soup Noodles [standard]
(75, '/cdn/images/products/75-01.jpg', 0),

-- Product 76: 品元堂干貝雞湯 / Pin Yuan Tang Scallop Chicken Soup [featured]
(76, '/cdn/images/products/76-01.jpg', 0),

-- Product 77: 品元堂麻油雞 / Pin Yuan Tang Sesame Oil Chicken [standard]
(77, '/cdn/images/products/77-01.jpg', 0),

-- Product 78: 品元堂藥膳排骨 / Pin Yuan Tang Herbal Ribs Soup [standard]
(78, '/cdn/images/products/78-01.jpg', 0),

-- Product 79: 品元堂鮑魚粥 / Pin Yuan Tang Abalone Congee [featured]
(79, '/cdn/images/products/79-01.jpg', 0),

-- Product 80: 品元堂紅燒牛肉麵 / Pin Yuan Tang Braised Beef Noodle Soup [standard]
(80, '/cdn/images/products/80-01.jpg', 0),

-- Product 81: 海鮮XO醬 / Seafood XO Sauce [featured]
(81, '/cdn/images/products/81-01.jpg', 0),

-- Product 82: 蝦醬 / Shrimp Paste [standard]
(82, '/cdn/images/products/82-01.jpg', 0),

-- Product 83: 干貝醬 / Scallop Sauce [standard]
(83, '/cdn/images/products/83-01.jpg', 0),

-- Product 84: 海鮮咖哩調理包 / Seafood Curry Ready Pack [standard]
(84, '/cdn/images/products/84-01.jpg', 0),

-- Product 85: 奶油白醬海鮮義大利麵 / Creamy Seafood Pasta Kit [standard]
(85, '/cdn/images/products/85-01.jpg', 0),

-- Product 86: 鮮蝦腸粉 / Shrimp Rice Noodle Rolls [standard]
(86, '/cdn/images/products/86-01.jpg', 0),

-- Product 87: 海鮮煎餅 / Seafood Pancake [standard]
(87, '/cdn/images/products/87-01.jpg', 0),

-- Product 88: 炸蝦天婦羅 / Shrimp Tempura [standard]
(88, '/cdn/images/products/88-01.jpg', 0),

-- Product 89: 魚排 / Breaded Fish Fillet [standard]
(89, '/cdn/images/products/89-01.jpg', 0),

-- Product 90: 蟹黃豆腐 / Crab Roe Tofu [standard]
(90, '/cdn/images/products/90-01.jpg', 0),

-- Product 91: 鮑魚罐頭 / Canned Abalone [standard]
(91, '/cdn/images/products/91-01.jpg', 0),

-- Product 92: 海帶芽 / Wakame Seaweed [standard]
(92, '/cdn/images/products/92-01.jpg', 0),

-- Product 93: 昆布高湯包 / Kombu Dashi Stock Pack [standard]
(93, '/cdn/images/products/93-01.jpg', 0),

-- Product 94: 火鍋海鮮組合（豪華）/ Hot Pot Seafood Set (Deluxe) [featured]
(94, '/cdn/images/products/94-01.jpg', 0),

-- Product 95: 火鍋海鮮組合（經濟）/ Hot Pot Seafood Set (Value) [standard]
(95, '/cdn/images/products/95-01.jpg', 0),

-- Product 96: 中秋烤肉海鮮組 / Mid-Autumn BBQ Seafood Set [seasonal/featured]
(96, '/cdn/images/products/96-01.jpg', 0),

-- Product 97: 年菜海鮮禮盒 / Lunar New Year Seafood Gift Box [seasonal/featured]
(97, '/cdn/images/products/97-01.jpg', 0),

-- Product 98: 母親節海鮮禮盒 / Mother's Day Seafood Gift Box [seasonal]
(98, '/cdn/images/products/98-01.jpg', 0),

-- Product 99: 海鮮年菜全套 / CNY Complete Seafood Feast [seasonal/premium]
(99, '/cdn/images/products/99-01.jpg', 0),

-- Product 100: 企業送禮海鮮大禮盒 / Corporate Gift Premium Seafood Box [premium]
(100, '/cdn/images/products/100-01.jpg', 0),
(100, '/cdn/images/products/100-02.jpg', 1);
