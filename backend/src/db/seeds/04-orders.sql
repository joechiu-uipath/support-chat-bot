-- ============================================================
-- ORDERS — persona-driven purchase history
-- Customer personas:
--   1,2: premium-gourmet (retail) — buy luxury seafood, premium cuts, specialty items
--   3,4: family-shopper (retail) — buy everyday seafood, hot-pot kits, prepared meals
--   5,6: restaurant-operator — large recurring orders of fish fillets, shellfish, proteins
--   7,8: wholesale-distributor — very large bulk orders across many SKUs
--   9,10: gift-festival (en locale) — premium gift items, dried scallops, abalone, tonics
-- ============================================================

-- Customer 1 (林美華) — premium-gourmet, Taipei
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(1,1,'2025-04-10','completed','frozen-logistics','台北市大安區忠孝東路四段100號',3097,'FL20250410001','2025-04-14',NULL),
(11,1,'2025-08-22','completed','frozen-logistics','台北市大安區忠孝東路四段100號',2778,'FL20250822001','2025-08-26',NULL),
(21,1,'2025-12-18','completed','frozen-logistics','台北市大安區忠孝東路四段100號',4758,'FL20251218001','2025-12-22','年節備料'),
(28,1,'2026-02-14','completed','frozen-logistics','台北市大安區忠孝東路四段100號',3560,'FL20260214001','2026-02-18',NULL),
(32,1,'2026-03-06','shipped','frozen-logistics','台北市大安區忠孝東路四段100號',2880,'FL20260306001','2026-03-10',NULL);

-- Customer 2 (王雅琴) — premium-gourmet, Taichung
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(2,2,'2025-04-15','completed','frozen-logistics','台中市西屯區台灣大道三段200號',3877,'FL20250415001','2025-04-19',NULL),
(12,2,'2025-08-28','completed','frozen-logistics','台中市西屯區台灣大道三段200號',2598,'FL20250828001','2025-09-01',NULL),
(22,2,'2025-12-23','completed','frozen-logistics','台中市西屯區台灣大道三段200號',5736,'FL20251223001','2025-12-27','年節'),
(29,2,'2026-02-20','completed','frozen-logistics','台中市西屯區台灣大道三段200號',3197,'FL20260220001','2026-02-24',NULL),
(33,2,'2026-03-06','processing','frozen-logistics','台中市西屯區台灣大道三段200號',2399,NULL,'2026-03-11',NULL);

-- Customer 3 (李淑芬) — family-shopper, Tainan
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(3,3,'2025-04-20','completed','delivery','台南市東區東門路二段80號',1177,'TW20250420001','2025-04-23',NULL),
(13,3,'2025-08-15','completed','delivery','台南市東區東門路二段80號',898,'TW20250815001','2025-08-18',NULL),
(23,3,'2025-12-26','completed','delivery','台南市東區東門路二段80號',1517,'TW20251226001','2025-12-29','年菜'),
(30,3,'2026-02-25','completed','delivery','台南市東區東門路二段80號',758,'TW20260225001','2026-02-28',NULL),
(35,3,'2026-03-07','pending','delivery','台南市東區東門路二段80號',1237,NULL,'2026-03-12',NULL);

-- Customer 4 (劉美玲) — family-shopper, Hsinchu
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(4,4,'2025-04-25','completed','delivery','新竹市東區光復路一段100號',817,'TW20250425001','2025-04-28',NULL),
(14,4,'2025-08-18','completed','delivery','新竹市東區光復路一段100號',1277,'TW20250818001','2025-08-21',NULL),
(24,4,'2026-01-03','completed','delivery','新竹市東區光復路一段100號',956,'TW20260103001','2026-01-06',NULL),
(31,4,'2026-02-28','completed','delivery','新竹市東區光復路一段100號',718,'TW20260228001','2026-03-03',NULL),
(37,4,'2026-03-07','pending','delivery','新竹市東區光復路一段100號',958,NULL,'2026-03-12',NULL);

-- Customer 5 (鼎泰海鮮餐廳) — restaurant-operator, Taipei Songshan
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(5,5,'2025-04-28','completed','frozen-logistics','台北市松山區民生東路三段130號',19870,'FL20250428001','2025-05-02','餐廳月訂'),
(8,5,'2025-06-01','completed','frozen-logistics','台北市松山區民生東路三段130號',21580,'FL20250601001','2025-06-05','餐廳月訂'),
(16,5,'2025-09-10','completed','frozen-logistics','台北市松山區民生東路三段130號',23460,'FL20250910001','2025-09-14','餐廳月訂'),
(26,5,'2026-01-18','completed','frozen-logistics','台北市松山區民生東路三段130號',19640,'FL20260118001','2026-01-22','餐廳月訂'),
(39,5,'2026-03-04','shipped','frozen-logistics','台北市松山區民生東路三段130號',22380,'FL20260304001','2026-03-08','餐廳月訂');

-- Customer 6 (黃建國) — restaurant-operator, Taoyuan
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(6,6,'2025-05-02','completed','frozen-logistics','桃園市中壢區中山路200號',12760,'FL20250502001','2025-05-06','餐廳進貨'),
(19,6,'2025-09-22','completed','frozen-logistics','桃園市中壢區中山路200號',11480,'FL20250922001','2025-09-26','餐廳'),
(36,6,'2026-03-05','shipped','frozen-logistics','桃園市中壢區中山路200號',13960,'FL20260305001','2026-03-09','餐廳'),
(42,6,'2026-03-06','processing','frozen-logistics','桃園市中壢區中山路200號',9870,NULL,'2026-03-11','餐廳');

-- Customer 7 (金饗餐飲集團) — wholesale-distributor, Taipei Zhongzheng
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(10,7,'2025-06-08','completed','frozen-logistics','台北市中正區忠孝西路一段50號',38700,'FL20250608001','2025-06-12','集團採購'),
(17,7,'2025-09-15','completed','frozen-logistics','台北市中正區忠孝西路一段50號',42500,'FL20250915001','2025-09-19','集團'),
(27,7,'2026-01-22','completed','frozen-logistics','台北市中正區忠孝西路一段50號',51200,'FL20260122001','2026-01-26','集團'),
(41,7,'2026-03-03','shipped','frozen-logistics','台北市中正區忠孝西路一段50號',46800,'FL20260303001','2026-03-07','集團');

-- Customer 8 (張家豪) — wholesale-distributor, Kaohsiung
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(7,8,'2025-05-10','completed','frozen-logistics','高雄市前鎮區中山二路150號',14960,'FL20250510001','2025-05-14','批發'),
(18,8,'2025-09-20','completed','frozen-logistics','高雄市前鎮區中山二路150號',18720,'FL20250920001','2025-09-24','批發'),
(34,8,'2026-03-05','shipped','frozen-logistics','高雄市前鎮區中山二路150號',22380,'FL20260305001','2026-03-09','批發');

-- Customer 9 (Tanaka Yuki) — gift-festival, en locale, Taipei Zhongshan
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(9,9,'2025-06-05','completed','delivery','台北市中山區南京東路二段100號',3540,'TW20250605001','2025-06-08','Gift'),
(15,9,'2025-09-03','completed','delivery','台北市中山區南京東路二段100號',4420,'TW20250903001','2025-09-06','Mid-Autumn gift'),
(25,9,'2026-01-12','completed','delivery','台北市中山區南京東路二段100號',5760,'TW20260112001','2026-01-15','Lunar New Year gift'),
(38,9,'2026-03-05','shipped','delivery','台北市中山區南京東路二段100號',3460,'TW20260305001','2026-03-08','Gift');

-- Customer 10 (Sarah Chen) — gift-festival, en locale, Taipei Datong
INSERT INTO orders (id,customer_id,order_date,status,fulfillment_mode,shipping_address,total_amount,tracking_number,estimated_delivery,notes) VALUES
(20,10,'2025-10-12','completed','delivery','台北市大同區承德路三段200號',4360,'TW20251012001','2025-10-15','Birthday gift'),
(40,10,'2026-03-07','pending','delivery','台北市大同區承德路三段200號',2860,NULL,'2026-03-12','Gift');
