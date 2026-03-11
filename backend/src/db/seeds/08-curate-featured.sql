-- Curate featured/signature products down to 15 items
UPDATE products SET is_featured = 0;
UPDATE products SET is_featured = 1 WHERE id IN (
  1,   -- 藍鑽蝦（全蝦） Blue Diamond Whole Shrimp
  3,   -- 藍鑽蝦仁（大尾） Blue Diamond Jumbo Peeled Shrimp
  4,   -- 寶寶雪鰈菲力 Baby Halibut Fillet
  5,   -- 冰釣雪鰈切片 Ice-caught Halibut Steak
  6,   -- 北海道生食級干貝 Hokkaido Sashimi-Grade Scallops
  8,   -- 帝王蟹腳 King Crab Legs
  10,  -- 龍蝦尾 Lobster Tails
  11,  -- 綜合海鮮拼盤 Premium Seafood Platter
  12,  -- 品元堂佛跳牆 Buddha Jumps Over the Wall
  41,  -- 鮭魚卵（Ikura） Salmon Roe
  42,  -- 珍珠龍膽石斑菲力 Pearl Grouper Fillet
  47,  -- 帝王蟹（整隻） Whole King Crab
  50,  -- 波士頓龍蝦 Boston Lobster
  55,  -- 鮑魚（整顆） Whole Abalone
  70   -- 藥膳羊肉爐 Herbal Lamb Hot Pot
);
