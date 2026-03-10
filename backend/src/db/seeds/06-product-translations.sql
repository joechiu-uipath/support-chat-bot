-- Product translations for ja, ko, fr, de, nl (18 products × 5 locales = 90 rows)
-- zh-TW and en remain in the base products table

INSERT OR REPLACE INTO product_translations (product_id, locale, name, description) VALUES

-- Product 1: 藍鑽蝦（全蝦） / Blue Diamond Whole Shrimp
(1, 'ja', 'ブルーダイヤモンドエビ（殻付き）', 'サウジアラビア王室御用達の養殖場から届く最高級エビ。弾力のある食感と自然な甘みが特徴で、化学添加物は一切不使用です。'),
(1, 'ko', '블루다이아몬드 새우 (통새우)', '사우디아라비아 왕실 공급 양식장에서 기른 최상급 새우. 탱글한 식감과 자연스러운 단맛이 특징이며, 화학 첨가물을 사용하지 않았습니다.'),
(1, 'fr', 'Crevettes Blue Diamond (entières)', 'Crevettes d''élevage premium de la ferme royale d''Arabie Saoudite, élevées en eau de mer pure. Chair ferme et sucrée, sans additifs chimiques.'),
(1, 'de', 'Blue Diamond Garnelen (ganz)', 'Premium-Garnelen von der königlichen Farm in Saudi-Arabien, in reinem Meerwasser gezüchtet. Festes, süßes Fleisch ohne chemische Zusätze.'),
(1, 'nl', 'Blue Diamond Garnalen (heel)', 'Premium garnalen van de koninklijke kwekerij in Saoedi-Arabië, gekweekt in zuiver zeewater. Stevig, zoet vlees zonder chemische toevoegingen.'),

-- Product 2: 藍鑽蝦仁 / Blue Diamond Peeled Shrimp
(2, 'ja', 'ブルーダイヤモンドむきエビ', '厳選ブルーダイヤモンドエビを手作業で殻むき・背わた除去。炒め物、パスタ、卵料理など幅広い調理にすぐ使えます。'),
(2, 'ko', '블루다이아몬드 깐새우', '엄선 블루다이아몬드 새우를 수작업으로 껍질 제거 및 내장 처리. 볶음, 파스타, 계란 요리 등 다양한 조리에 바로 사용할 수 있습니다.'),
(2, 'fr', 'Crevettes Blue Diamond décortiquées', 'Crevettes Blue Diamond décortiquées et déveinées à la main. Prêtes à cuisiner — parfaites pour sautés, pâtes et plats aux œufs.'),
(2, 'de', 'Blue Diamond Garnelen geschält', 'Handgeschälte und entdarmte Blue Diamond Garnelen. Sofort kochfertig — perfekt für Pfannengerichte, Pasta und Eierspeisen.'),
(2, 'nl', 'Blue Diamond Gepelde Garnalen', 'Handgepelde en ontdarmde Blue Diamond garnalen. Direct klaar om te koken — perfect voor roerbak, pasta en eiergerechten.'),

-- Product 3: 藍鑽蝦仁（大尾） / Blue Diamond Jumbo Peeled Shrimp
(3, 'ja', 'ブルーダイヤモンドむきエビ（ジャンボ）', '特選ジャンボサイズのブルーダイヤモンドむきエビ。宴会や高級料理に最適で、食べ応え抜群の弾力ある食感です。'),
(3, 'ko', '블루다이아몬드 깐새우 (점보)', '특선 점보 사이즈 블루다이아몬드 깐새우. 연회나 프리미엄 요리에 최적이며, 풍성하고 탱글한 식감을 자랑합니다.'),
(3, 'fr', 'Crevettes Blue Diamond décortiquées (jumbo)', 'Crevettes Blue Diamond décortiquées taille jumbo. Idéales pour banquets et plats premium avec une texture pleine et élastique.'),
(3, 'de', 'Blue Diamond Garnelen geschält (Jumbo)', 'Blue Diamond Garnelen geschält in Jumbo-Größe. Ideal für Bankette und Premium-Gerichte mit voller, bissfester Textur.'),
(3, 'nl', 'Blue Diamond Gepelde Garnalen (jumbo)', 'Blue Diamond gepelde garnalen in jumboformaat. Ideaal voor banketten en premium gerechten met een volle, veerkrachtige textuur.'),

-- Product 4: 寶寶雪鰈菲力 / Baby Halibut Fillet
(4, 'ja', 'ベビー用カレイフィレ', 'グリーンランド産カレイの骨なしフィレ。赤ちゃんにも安心、ご家族全員でお楽しみいただける柔らかな口どけです。'),
(4, 'ko', '아기용 가자미 필레', '그린란드산 뼈 없는 가자미 필레. 아기에게도 안심, 온 가족이 즐길 수 있는 부드럽고 입에서 살살 녹는 식감입니다.'),
(4, 'fr', 'Filet de flétan pour bébé', 'Filet de flétan du Groenland sans arêtes — parfait pour bébés et toute la famille. Texture tendre qui fond en bouche.'),
(4, 'de', 'Baby-Heilbutt-Filet', 'Grätenloses Heilbuttfilet aus Grönland — perfekt für Babys und die ganze Familie. Zartes Fleisch, das auf der Zunge zergeht.'),
(4, 'nl', 'Baby Heilbot Filet', 'Graatvrije heilbotfilet uit Groenland — perfect voor baby''s en het hele gezin. Zacht vlees dat smelt op de tong.'),

-- Product 5: 冰釣雪鰈切片 / Ice-caught Halibut Steak
(5, 'ja', '氷上釣りカレイ切り身', '北極圏の氷上釣りで獲れた最高級カレイ。厚切り骨付きで脂のりが良く、ソテーやグリルに最適です。'),
(5, 'ko', '얼음낚시 가자미 스테이크', '북극권 얼음낚시로 잡은 최상급 가자미. 두꺼운 뼈포함 컷으로 기름기가 풍부하며, 팬프라이나 그릴에 최적입니다.'),
(5, 'fr', 'Steak de flétan pêché sous glace', 'Flétan premium pêché sous la glace dans le Cercle Arctique. Coupe épaisse avec os, riche en huile — idéal poêlé ou grillé.'),
(5, 'de', 'Eisfang-Heilbutt-Steak', 'Premium-Heilbutt, im Polarkreis eisfischt. Dicker Schnitt mit Knochen, ölreich — ideal zum Braten oder Grillen.'),
(5, 'nl', 'IJsvangst Heilbot Steak', 'Premium heilbot, ijsgevist in de Poolcirkel. Dikke snede met been, rijk aan olie — ideaal voor bakken of grillen.'),

-- Product 6: 北海道生食級干貝 / Hokkaido Sashimi-Grade Scallops
(6, 'ja', '北海道産 刺身用ホタテ', '北海道直送の生食用ホタテ。一粒一粒がぷりぷりで甘く、お刺身や軽く焼いて極上の海の味わいをお楽しみください。'),
(6, 'ko', '홋카이도 회용 가리비', '홋카이도 직송 회용 가리비. 알알이 통통하고 달콤하며, 회나 살짝 구워 최상의 바다 맛을 즐기세요.'),
(6, 'fr', 'Noix de Saint-Jacques d''Hokkaido (qualité sashimi)', 'Noix de Saint-Jacques qualité sashimi directement d''Hokkaido, Japon. Charnues et sucrées — dégustez crues ou légèrement saisies.'),
(6, 'de', 'Hokkaido Jakobsmuscheln (Sashimi-Qualität)', 'Jakobsmuscheln in Sashimi-Qualität direkt aus Hokkaido, Japan. Prall und süß — roh oder leicht angebraten genießen.'),
(6, 'nl', 'Hokkaido Sint-Jakobsschelpen (sashimi-kwaliteit)', 'Sint-Jakobsschelpen van sashimi-kwaliteit, direct uit Hokkaido, Japan. Mollig en zoet — geniet rauw of licht gebakken.'),

-- Product 7: 鮮凍蛤蜊 / Frozen Clams
(7, 'ja', '冷凍アサリ', '新鮮なアサリを急速冷凍し、天然の旨味をそのまま閉じ込めました。お味噌汁、炒め物、パスタにぴったりです。'),
(7, 'ko', '냉동 바지락', '신선한 바지락을 급속 냉동하여 천연 감칠맛을 그대로 담았습니다. 된장국, 볶음, 파스타에 딱 좋습니다.'),
(7, 'fr', 'Palourdes surgelées', 'Palourdes fraîches surgelées rapidement pour préserver leur saveur naturelle. Parfaites pour soupes, sautés et pâtes.'),
(7, 'de', 'Tiefgefrorene Muscheln', 'Frische Muscheln, schockgefroren für natürlichen Geschmack. Perfekt für Suppen, Pfannengerichte und Pasta.'),
(7, 'nl', 'Diepvries Mosselen', 'Verse mosselen, snel ingevroren voor natuurlijke smaak. Perfect voor soepen, roerbak en pasta.'),

-- Product 8: 帝王蟹腳 / King Crab Legs
(8, 'ja', 'タラバガニ脚', 'アラスカ産タラバガニの脚。身がぎっしり詰まって甘く、蒸すだけで極上の味わい。宴席やギフトに最適です。'),
(8, 'ko', '킹크랩 다리', '알래스카산 킹크랩 다리. 꽉 찬 살이 달콤하며, 찜으로 간편하게 최상의 맛을 즐길 수 있습니다. 연회나 선물에 최적입니다.'),
(8, 'fr', 'Pattes de crabe royal', 'Pattes de crabe royal d''Alaska — chair pleine et sucrée. Simplement cuites à la vapeur. Parfaites pour banquets et cadeaux.'),
(8, 'de', 'Königskrabbenbeine', 'Königskrabbenbeine aus Alaska — volles, süßes Fleisch. Einfach dämpfen und genießen. Perfekt für Bankette und Geschenke.'),
(8, 'nl', 'Koningskrabpoten', 'Koningskrabpoten uit Alaska — vol, zoet vlees. Gewoon stomen en genieten. Perfect voor banketten en cadeaus.'),

-- Product 9: 鮭魚切片 / Salmon Steak Portions
(9, 'ja', 'サーモンステーキ', 'ノルウェー産の厚切りサーモン。オメガ3が豊富で、ソテーやオーブン料理に最適。ご家族の健康的な食卓に。'),
(9, 'ko', '연어 스테이크', '노르웨이산 두꺼운 컷 연어. 오메가3가 풍부하며, 팬프라이나 오븐 요리에 최적. 가족의 건강한 식탁을 위한 선택입니다.'),
(9, 'fr', 'Pavés de saumon', 'Saumon norvégien en coupe épaisse, riche en Oméga-3. Idéal poêlé ou au four — un choix santé pour toute la famille.'),
(9, 'de', 'Lachssteaks', 'Dicker norwegischer Lachs, reich an Omega-3. Ideal zum Braten oder Backen — eine gesunde Wahl für die ganze Familie.'),
(9, 'nl', 'Zalmsteaks', 'Dikke Noorse zalm, rijk aan Omega-3. Ideaal voor bakken of de oven — een gezonde keuze voor het hele gezin.'),

-- Product 10: 鱈魚切片 / Cod Fish Portions
(10, 'ja', 'タラ切り身', '北大西洋産のタラ切り身。雪のように白くきめ細かい身は低脂肪高タンパク。蒸し物やソテーで美味しくいただけます。'),
(10, 'ko', '대구 필레', '북대서양산 대구 필레. 눈처럼 하얗고 부드러운 살은 저지방 고단백. 찜이나 팬프라이로 맛있게 즐길 수 있습니다.'),
(10, 'fr', 'Portions de cabillaud', 'Portions de cabillaud de l''Atlantique Nord. Chair blanche et tendre — faible en gras, riche en protéines. Délicieux cuit à la vapeur ou poêlé.'),
(10, 'de', 'Kabeljau-Portionen', 'Kabeljau-Portionen aus dem Nordatlantik. Schneeweißes, zartes Fleisch — fettarm, proteinreich. Köstlich gedämpft oder gebraten.'),
(10, 'nl', 'Kabeljauw Porties', 'Kabeljauw porties uit de Noord-Atlantische Oceaan. Sneeuwwit, zacht vlees — vetarm, eiwitrijk. Heerlijk gestoomd of gebakken.'),

-- Product 11: 顏師傅海鮮濃湯 / Chef Yen Seafood Bisque
(11, 'ja', '顔シェフ シーフードビスク', 'シェフ特製の海鮮濃厚スープ。厳選された数種の海鮮をじっくり煮込んだ、温めるだけで楽しめる贅沢な一品です。'),
(11, 'ko', '옌 셰프 해산물 비스크', '셰프 특제 해산물 진한 수프. 엄선된 여러 해산물을 정성껏 끓여낸, 데우기만 하면 즐길 수 있는 고급 수프입니다.'),
(11, 'fr', 'Bisque de fruits de mer Chef Yen', 'Bisque de fruits de mer élaborée par le chef avec une sélection de produits premium. Riche et savoureuse — réchauffez et servez.'),
(11, 'de', 'Chef Yen Meeresfrüchte-Bisque', 'Vom Küchenchef zubereitete Meeresfrüchte-Bisque aus erlesenen Zutaten. Reichhaltig und würzig — aufwärmen und genießen.'),
(11, 'nl', 'Chef Yen Zeevruchten Bisque', 'Door de chef bereide zeevruchten bisque met een selectie van premium ingrediënten. Rijk en hartig — opwarmen en serveren.'),

-- Product 12: 顏師傅酸辣海鮮湯 / Chef Yen Hot & Sour Seafood Soup
(12, 'ja', '顔シェフ 酸辣海鮮スープ', 'タイ風の酸っぱ辛い海鮮スープ。新鮮な海産物と東南アジアのスパイスが織りなす、夏にぴったりの爽やかな一品です。'),
(12, 'ko', '옌 셰프 매콤새콤 해산물 수프', '태국풍 새콤매콤 해산물 수프. 신선한 해산물과 동남아 향신료가 어우러진, 여름에 딱 맞는 상쾌한 수프입니다.'),
(12, 'fr', 'Soupe aigre-piquante aux fruits de mer Chef Yen', 'Soupe de fruits de mer aigre-piquante d''inspiration thaïe avec des produits frais de la mer. Rafraîchissante pour l''été.'),
(12, 'de', 'Chef Yen Saure-Scharfe Meeresfrüchtesuppe', 'Thai-inspirierte sauer-scharfe Meeresfrüchtesuppe mit frischen Zutaten. Perfekte Erfrischung für den Sommer.'),
(12, 'nl', 'Chef Yen Zuur-Pittige Zeevruchtsoep', 'Thais geïnspireerde zuur-pittige zeevruchtsoep met verse ingrediënten. Perfecte verfrissing voor de zomer.'),

-- Product 13: 品元堂佛跳牆 / Pin Yuan Tang Buddha Jumps Over the Wall
(13, 'ja', '品元堂 仏跳牆（ぶっちょうしょう）', 'アワビ、干貝、花膠など最高級食材を集結。伝統製法で丁寧に煮込んだ名物料理で、お歳暮やお祝いの贈り物に最適です。'),
(13, 'ko', '핀위안탕 불도장(佛跳牆)', '전복, 가리비, 어교 등 최고급 재료를 한데 모은 전통 명품 요리. 명절 선물이나 연회에 최적입니다.'),
(13, 'fr', 'Pin Yuan Tang — Le Bouddha saute par-dessus le mur', 'Plat classique réunissant ormeaux, pétoncles et vessie natatoire. Recette traditionnelle mijotée longuement — cadeau de fête idéal.'),
(13, 'de', 'Pin Yuan Tang — Buddha springt über die Mauer', 'Klassisches Gericht mit Abalone, Jakobsmuscheln und Fischmagen. Traditionell lange geschmort — ideales Festtagsgeschenk.'),
(13, 'nl', 'Pin Yuan Tang — Boeddha Springt Over de Muur', 'Klassiek gerecht met abalone, sint-jakobsschelpen en visblaas. Traditioneel lang gestoofd — ideaal feestdagcadeau.'),

-- Product 14: 品元堂花膠雞湯 / Pin Yuan Tang Fish Maw Chicken Soup
(14, 'ja', '品元堂 花膠チキンスープ', '厳選花膠と地鶏をじっくり煮込んだコラーゲン豊富な滋養スープ。美容と健康をサポートする極上の一品です。'),
(14, 'ko', '핀위안탕 어교 닭 수프', '엄선 어교와 토종닭을 정성껏 끓여낸 콜라겐 풍부한 보양 수프. 미용과 건강을 서포트하는 최상의 수프입니다.'),
(14, 'fr', 'Soupe de poulet à la vessie natatoire Pin Yuan Tang', 'Vessie natatoire premium mijotée avec du poulet fermier. Riche en collagène — un bouillon nourrissant pour la beauté et le bien-être.'),
(14, 'de', 'Pin Yuan Tang Fischmagen-Hühnersuppe', 'Premium-Fischmagen mit Freilandhuhn langsam geschmort. Reich an Kollagen — eine nährende Suppe für Schönheit und Wohlbefinden.'),
(14, 'nl', 'Pin Yuan Tang Visblaas Kippensoep', 'Premium visblaas langzaam gestoofd met scharrelkip. Rijk aan collageen — een voedzame soep voor beauty en welzijn.'),

-- Product 15: 草蝦（全蝦） / Tiger Prawns (Whole)
(15, 'ja', '大型ブラックタイガー（殻付き）', '厳選大型ブラックタイガーエビ。殻が薄く身が厚い、塩焼き・蒸し・鍋物に最適な旨味たっぷりのエビです。'),
(15, 'ko', '블랙타이거 새우 (통새우)', '엄선 대형 블랙타이거 새우. 껍질이 얇고 살이 두꺼우며, 소금구이·찜·전골에 최적인 감칠맛 풍부한 새우입니다.'),
(15, 'fr', 'Crevettes tigrées (entières)', 'Grosses crevettes tigrées premium à coque fine et chair épaisse. Parfaites grillées au sel, cuites à la vapeur ou en fondue.'),
(15, 'de', 'Riesengarnelen (ganz)', 'Premium große Riesengarnelen mit dünner Schale und dickem Fleisch. Perfekt zum Salzgrillen, Dämpfen oder für Hotpot.'),
(15, 'nl', 'Tijgergarnalen (heel)', 'Premium grote tijgergarnalen met dunne schaal en dik vlees. Perfect voor zoutgrillen, stomen of hotpot.'),

-- Product 16: 小卷（透抽） / Baby Squid (Neritic Squid)
(16, 'ja', 'ヤリイカ（小型イカ）', '新鮮な小型イカを急速冷凍。サクッと柔らかな食感で、炒め物、三杯、フライなど幅広い調理法でお楽しみいただけます。'),
(16, 'ko', '꼴뚜기 (작은 오징어)', '신선한 꼴뚜기를 급속 냉동. 바삭하고 부드러운 식감으로, 볶음·삼배·튀김 등 다양한 조리법으로 즐길 수 있습니다.'),
(16, 'fr', 'Petits calamars', 'Petits calamars frais surgelés rapidement avec une texture croustillante et tendre. Délicieux sautés, en trois tasses ou frits.'),
(16, 'de', 'Baby-Tintenfisch', 'Frische Baby-Tintenfische, schockgefroren mit knuspriger, zarter Textur. Köstlich gebraten, im Drei-Tassen-Stil oder frittiert.'),
(16, 'nl', 'Baby Inktvis', 'Verse baby-inktvis, snel ingevroren met een knapperige, malse textuur. Heerlijk geroerbakt, in drie-kops stijl of gefrituurd.'),

-- Product 17: 龍蝦尾 / Lobster Tails
(17, 'ja', 'ロブスターテール', '厳選ロブスターテール。しっかりとした甘い身は、グラタンや蒸し料理で極上のダイニング体験をお届けします。'),
(17, 'ko', '랍스터 테일', '엄선 랍스터 테일. 탄탄하고 달콤한 살은, 그라탕이나 찜 요리로 최고급 다이닝 경험을 선사합니다.'),
(17, 'fr', 'Queues de homard', 'Queues de homard premium à la chair ferme et sucrée. Gratinées ou cuites à la vapeur pour une expérience gastronomique luxueuse.'),
(17, 'de', 'Hummerschwänze', 'Premium-Hummerschwänze mit festem, süßem Fleisch. Überbacken oder gedämpft für ein luxuriöses Speiseerlebnis.'),
(17, 'nl', 'Kreeftenstaarten', 'Premium kreeftenstaarten met stevig, zoet vlees. Gegratineerd of gestoomd voor een luxueuze eetervaring.'),

-- Product 18: 綜合海鮮拼盤 / Premium Seafood Platter
(18, 'ja', 'プレミアム海鮮盛り合わせ', '厳選のエビ、ホタテ、イカ、アサリなど多種の海鮮を詰め合わせ。一皿でご家族全員が楽しめる、鍋パーティーの必需品です。'),
(18, 'ko', '프리미엄 해산물 모듬', '엄선된 새우, 가리비, 오징어, 바지락 등 다양한 해산물을 모았습니다. 한 접시로 온 가족이 즐기는 전골 파티 필수품입니다.'),
(18, 'fr', 'Plateau de fruits de mer premium', 'Assortiment de crevettes, noix de Saint-Jacques, calamars et palourdes. Un plateau pour toute la famille — incontournable pour les soirées fondue.'),
(18, 'de', 'Premium Meeresfrüchte-Platte', 'Auswahl aus Garnelen, Jakobsmuscheln, Tintenfisch und Muscheln. Eine Platte für die ganze Familie — unverzichtbar für Hotpot-Abende.'),
(18, 'nl', 'Premium Zeevruchtenschotel', 'Assortiment van garnalen, sint-jakobsschelpen, inktvis en mosselen. Eén schotel voor het hele gezin — onmisbaar voor hotpot avonden.');

-- Products 19-100: Extended catalog translations (ja, ko, fr, de, nl)
INSERT OR REPLACE INTO product_translations (product_id, locale, name, description) VALUES

-- Product 19: 熟凍藍鑽蝦 / Cooked Frozen Blue Diamond Shrimp
(19,'ja','熟凍ブルーダイヤモンドエビ','調理済み急速冷凍のブルーダイヤモンドエビ。解凍するだけでそのまま食べられる、弾力と甘みが自慢の逸品です。'),
(19,'ko','숙동 블루다이아몬드 새우','조리 후 급속 냉동한 블루다이아몬드 새우. 해동만 하면 바로 먹을 수 있는 탱글하고 달콤한 최상품입니다.'),
(19,'fr','Crevettes Blue Diamond cuites surgelées','Crevettes Blue Diamond cuites et surgelées rapidement. Décongeler et déguster — texture ferme et saveur douce garanties.'),
(19,'de','Gekochte tiefgekühlte Blue Diamond Garnelen','Blue Diamond Garnelen, gegart und schockgefroren. Auftauen und genießen — feste Textur und natürliche Süße.'),
(19,'nl','Gekookte Diepvries Blue Diamond Garnalen','Blue Diamond garnalen, gekookt en snel ingevroren. Ontdooien en genieten — stevige textuur en natuurlijk zoet.'),

-- Product 20: 皇冠比目魚排 / Crown-Cut Halibut Steak
(20,'ja','クラウンカットカレイステーキ','太平洋産カレイの厚切りステーキ。脂のりが良く雪のように白い身は、ソテーやオーブン焼きに最適です。'),
(20,'ko','크라운 컷 가자미 스테이크','태평양산 가자미의 두꺼운 스테이크 컷. 기름기가 좋고 눈처럼 하얀 살은 팬프라이나 오븐 요리에 최적입니다.'),
(20,'fr','Steak de flétan coupe royale','Steak épais de flétan du Pacifique. Chair blanche et nacrée, bien grasse — idéal poêlé ou au four.'),
(20,'de','Heilbutt-Steak Königsschnitt','Dicker Heilbutt-Steak vom Pazifik. Weißes, fettreiches Fleisch — ideal zum Braten oder Backen im Ofen.'),
(20,'nl','Heilbot Steak Kroonstuk','Dikke heilbotsteak uit de Stille Oceaan. Wit, vetrijk vlees — ideaal om te bakken of in de oven.'),

-- Product 21: 比目魚排 / Halibut Steak
(21,'ja','カレイステーキ','太平洋産の骨付きカレイステーキ。淡泊な白身は揚げ物、蒸し物、煮物と何でも合う万能食材です。'),
(21,'ko','가자미 스테이크','태평양산 뼈 포함 가자미 스테이크. 담백한 흰살은 튀김·찜·조림 모두에 잘 어울리는 만능 식재료입니다.'),
(21,'fr','Steak de flétan','Steak de flétan du Pacifique avec os. Chair blanche et délicate — polyvalent pour fritures, vapeur ou braisé.'),
(21,'de','Heilbutt-Steak','Pazifischer Heilbutt-Steak mit Knochen. Weißes, zartes Fleisch — vielseitig für Frittieren, Dämpfen oder Schmoren.'),
(21,'nl','Heilbot Steak','Pacifische heilbotsteak met been. Wit, delicaat vlees — veelzijdig voor frituren, stomen of smoren.'),

-- Product 22: 去皮比目魚菲力 / Skinned Halibut Fillet
(22,'ja','皮なしカレイフィレ','皮を除いた比目魚フィレ。下処理不要で調理しやすく、ムニエル、シチュー、白ワイン蒸しに最適です。'),
(22,'ko','껍질 제거 가자미 필레','껍질을 벗긴 가자미 필레. 손질 불필요로 조리가 쉬우며, 뫼니에르·스튜·화이트와인 찜에 최적입니다.'),
(22,'fr','Filet de flétan sans peau','Filet de flétan sans peau, prêt à cuisiner. Parfait pour la meunière, les ragoûts ou cuit au vin blanc.'),
(22,'de','Heilbutt-Filet ohne Haut','Enthäutetes Heilbutt-Filet, kochfertig. Perfekt für Müllerin, Eintöpfe oder mit Weißwein gedämpft.'),
(22,'nl','Heilbot Filet Zonder Huid','Onthuid heilbotfilet, klaar om te koken. Perfect voor meunière, stoofpotten of gestoomd met witte wijn.'),

-- Product 23: 麵包粉比目魚 / Breaded Halibut Fillet
(23,'ja','パン粉カレイフライ','比目魚フィレにサクサクのパン粉をまぶした揚げ物用商品。オーブンまたはフライヤーで黄金色に仕上げてください。'),
(23,'ko','빵가루 가자미','빵가루를 입힌 가자미 필레. 오븐이나 에어프라이어로 황금색으로 바삭하게 조리하세요.'),
(23,'fr','Filet de flétan pané','Filet de flétan enrobé de chapelure croustillante. Dorez au four ou à la friteuse pour un résultat parfait.'),
(23,'de','Paniertes Heilbutt-Filet','Heilbutt-Filet mit knuspriger Panade. Im Ofen oder in der Fritteuse goldbraun backen.'),
(23,'nl','Gepaneerd Heilbot Filet','Heilbotfilet met krokante paneermeel. Goudbruin bakken in de oven of friteuse.'),

-- Product 24: 鳳梨醬比目魚 / Halibut with Pineapple Teriyaki Glaze
(24,'ja','パイナップルテリヤキカレイ','フルーティーなパイナップルテリヤキソースで仕上げた比目魚。そのまま温めてご飯に乗せれば絶品丼の完成です。'),
(24,'ko','파인애플 데리야키 가자미','과일향 파인애플 데리야키 소스로 마무리한 가자미. 데워서 밥에 얹으면 맛있는 덮밥이 완성됩니다.'),
(24,'fr','Flétan glacé ananas teriyaki','Flétan nappé d''un glaçage teriyaki à l''ananas fruité. Réchauffez et servez sur du riz pour un bol savoureux.'),
(24,'de','Heilbutt mit Ananas-Teriyaki-Glasur','Heilbutt mit fruchtigem Ananas-Teriyaki-Glasur. Aufwärmen und über Reis servieren für eine köstliche Schüssel.'),
(24,'nl','Heilbot met Ananas Teriyaki Glazuur','Heilbot met fruitige ananasteriyaki glazuur. Opwarmen en over rijst serveren voor een heerlijke bowl.'),

-- Product 25: 炙燒鮭魚肚 / Torched Salmon Belly
(25,'ja','炙りサーモンベリー','厚切りサーモンベリーを直火で炙った贅沢な一品。脂の旨味が表面に凝縮し、芳醇な香りが食欲をそそります。'),
(25,'ko','구운 연어 뱃살','두꺼운 연어 뱃살을 직화로 구운 고급스러운 요리. 지방의 감칠맛이 표면에 응축되어 구수한 향이 식욕을 자극합니다.'),
(25,'fr','Ventre de saumon flambé','Ventre de saumon épais flambé au chalumeau. La graisse se concentre en surface pour un arôme irrésistible.'),
(25,'de','Geflammter Lachsbauch','Dicker Lachsbauch, mit dem Gasbrenner abgeflämmt. Das Fett konzentriert sich an der Oberfläche für ein unwiderstehliches Aroma.'),
(25,'nl','Geroosterde Zalmbuik','Dikke zalmbuik, afgebrand met de brander. Het vet concentreert zich aan het oppervlak voor een onweerstaanbaar aroma.'),

-- Product 26: 鱒鮭壽司薄切 / Salmon Trout Sushi Slices
(26,'ja','トラウトサーモン寿司スライス','寿司用に薄切りにしたトラウトサーモン。均一な厚さで美しく、すぐに使える便利な一品です。'),
(26,'ko','송어연어 스시 슬라이스','스시용으로 얇게 슬라이스한 송어연어. 균일한 두께로 아름답고, 바로 사용할 수 있어 편리합니다.'),
(26,'fr','Tranches de truite saumonée pour sushis','Tranches de truite saumonée coupées finement pour les sushis. Épaisseur uniforme, prêtes à l''emploi.'),
(26,'de','Lachsforellen-Sushi-Scheiben','Dünn geschnittene Lachsforellen-Scheiben für Sushi. Gleichmäßige Dicke, sofort einsatzbereit.'),
(26,'nl','Zalmforel Sushi Plakken','Dun gesneden zalmforel voor sushi. Gelijkmatige dikte, direct klaar voor gebruik.'),

-- Product 27: 炙燒鱒鮭片 / Torched Salmon Trout Slices
(27,'ja','炙りトラウトサーモンスライス','直火で炙ったトラウトサーモンスライス。香ばしい炙り風味とまろやかな脂が絶妙にマッチした人気商品です。'),
(27,'ko','구운 송어연어 슬라이스','직화로 구운 송어연어 슬라이스. 고소한 구이 풍미와 부드러운 지방이 절묘하게 어우러진 인기 상품입니다.'),
(27,'fr','Tranches de truite saumonée flambées','Tranches de truite saumonée flambées au chalumeau. L''arôme grillé et le gras fondant se marient parfaitement.'),
(27,'de','Geflammte Lachsforellen-Scheiben','Mit dem Gasbrenner abgeflammte Lachsforellen-Scheiben. Das Röstaroma und das cremige Fett harmonieren perfekt.'),
(27,'nl','Geroosterde Zalmforel Plakken','Met brander afgebrande zalmforelplakken. Het geroosterd aroma en het romige vet passen perfect samen.'),

-- Product 28: 鹽麴柚香鮭魚 / Yuzu Salt Koji Salmon
(28,'ja','塩麴ゆず香サーモン','塩麴とゆずで丁寧に漬け込んだサーモン。麴の旨味とゆずの爽やかな香りが絶妙で、焼くだけで絶品の一皿に。'),
(28,'ko','소금 누룩 유자향 연어','소금 누룩과 유자에 정성껏 재운 연어. 누룩의 감칠맛과 유자의 상쾌한 향이 절묘하며, 굽기만 하면 최고의 요리가 됩니다.'),
(28,'fr','Saumon mariné miso-yuzu','Saumon mariné au sel koji et au yuzu. L''umami du koji et les agrumes frais du yuzu s''harmonisent à merveille — simplement grillé.'),
(28,'de','Salz-Koji Yuzu Lachs','Lachs in Salz-Koji und Yuzu mariniert. Das Umami des Koji und das frische Yuzu-Aroma harmonieren wunderbar — einfach grillen.'),
(28,'nl','Zout Koji Yuzu Zalm','Zalm gemarineerd in zout koji en yuzu. De umami van koji en het frisse yuzu-aroma harmoniseren perfect — gewoon grillen.'),

-- Product 29: 西西里風味鮭魚 / Sicilian-Style Salmon
(29,'ja','シチリア風サーモン','オリーブ、トマト、レモンのシチリア風ソースで仕上げたサーモン。地中海の風味を手軽に楽しめる調理済み商品です。'),
(29,'ko','시칠리아풍 연어','올리브, 토마토, 레몬의 시칠리아풍 소스로 마무리한 연어. 지중해 풍미를 간편하게 즐길 수 있는 조리 완제품입니다.'),
(29,'fr','Saumon à la sicilienne','Saumon nappé d''une sauce sicilienne aux olives, tomates et citron. Les saveurs méditerranéennes à portée de main — prêt à réchauffer.'),
(29,'de','Sizilianischer Lachs','Lachs mit sizilianischer Sauce aus Oliven, Tomaten und Zitrone. Mediterrane Aromen zum Aufwärmen — einfach und lecker.'),
(29,'nl','Siciliaanse Zalm','Zalm met Siciliaanse saus van olijven, tomaten en citroen. Mediterrane smaken direct beschikbaar — gewoon opwarmen.'),

-- Product 30: 鮭魚涮涮鍋薄切 / Shabu-Shabu Salmon Slices
(30,'ja','サーモンしゃぶしゃぶ用スライス','しゃぶしゃぶ用に薄切りにしたサーモン。さっとお湯にくぐらせるだけで、ふんわりと柔らかく仕上がります。'),
(30,'ko','연어 샤부샤부 슬라이스','샤부샤부용으로 얇게 슬라이스한 연어. 살짝 끓는 물에 담갔다 꺼내면 부드럽고 촉촉하게 완성됩니다.'),
(30,'fr','Tranches de saumon pour shabu-shabu','Saumon finement tranché pour shabu-shabu. Plongez brièvement dans le bouillon — texture moelleuse garantie.'),
(30,'de','Lachs-Scheiben für Shabu-Shabu','Dünn geschnittener Lachs für Shabu-Shabu. Kurz im Brühe eintauchen — garantiert zarte Textur.'),
(30,'nl','Zalmplakken voor Shabu-Shabu','Dun gesneden zalm voor shabu-shabu. Kort in de bouillon dompelen — gegarandeerd malse textuur.'),

-- Product 31: 大西洋鮭魚（整尾）/ Whole Atlantic Salmon
(31,'ja','大西洋サーモン（1尾）','ノルウェー産大西洋サーモンの丸ごと1尾。宴会や仕出し料理に、さばきたての鮮度をそのままお届けします。'),
(31,'ko','대서양 연어 (통 1마리)','노르웨이산 대서양 연어 통 1마리. 연회나 케이터링 요리에, 손질 직전의 신선함을 그대로 배송합니다.'),
(31,'fr','Saumon atlantique entier','Saumon atlantique norvégien entier. Idéal pour banquets et traiteurs — fraîcheur maximale préservée.'),
(31,'de','Ganzer Atlantischer Lachs','Ganzer norwegischer Atlantik-Lachs. Ideal für Bankette und Catering — maximale Frische bewahrt.'),
(31,'nl','Hele Atlantische Zalm','Hele Noorse Atlantische zalm. Ideaal voor banketten en catering — maximale versheid bewaard.'),

-- Product 32: 鱒鮭菲力 / Rainbow Trout Fillet
(32,'ja','レインボートラウトフィレ','淡水養殖のレインボートラウトのフィレ。さっぱりとした風味と柔らかな食感で、ムニエルやソテーに最適です。'),
(32,'ko','무지개 송어 필레','담수 양식 무지개 송어 필레. 담백한 풍미와 부드러운 식감으로, 뫼니에르나 소테에 최적입니다.'),
(32,'fr','Filet de truite arc-en-ciel','Filet de truite arc-en-ciel d''élevage en eau douce. Saveur légère et texture tendre — parfait meunière ou sauté.'),
(32,'de','Regenbogenforellen-Filet','Süßwasser-Regenbogenforellen-Filet. Leichter Geschmack und zarte Textur — perfekt für Müllerin oder Sauté.'),
(32,'nl','Regenboogforel Filet','Zoetwaterkweek regenboogforelfilet. Lichte smaak en malse textuur — perfect voor meunière of sauté.'),

-- Product 33: 銀鮭（Coho）菲力 / Coho Salmon Fillet
(33,'ja','銀鮭（コーホー）フィレ','カナダ太平洋産の銀鮭フィレ。赤身が鮮やかで脂のりが良く、刺身・焼き魚・西洋料理に幅広く使えます。'),
(33,'ko','은연어 (코호) 필레','캐나다 태평양산 은연어 필레. 선홍색 살에 기름기가 좋으며, 회·구이·서양 요리에 폭넓게 사용할 수 있습니다.'),
(33,'fr','Filet de saumon coho','Filet de saumon coho du Pacifique canadien. Chair rouge vif et bien grasse — sashimi, grillé ou en cuisine occidentale.'),
(33,'de','Coho-Lachs-Filet','Coho-Lachs-Filet aus dem kanadischen Pazifik. Leuchtendrotes, fettreiches Fleisch — für Sashimi, Grillen oder westliche Gerichte.'),
(33,'nl','Coho Zalm Filet','Coho-zalmfilet uit de Canadese Stille Oceaan. Helderrood, vetrijk vlees — voor sashimi, grillen of westerse gerechten.'),

-- Product 34: 鮭魚排（帶皮）/ Skin-On Salmon Portion
(34,'ja','サーモンポーション（皮付き）','皮付きサーモンポーション。皮をパリッと焼き上げると絶品の食感に。フライパンで香ばしく仕上げてください。'),
(34,'ko','연어 포션 (껍질 있음)','껍질이 있는 연어 포션. 껍질을 바삭하게 구워내면 최고의 식감을 즐길 수 있습니다. 프라이팬에 고소하게 완성하세요.'),
(34,'fr','Pavé de saumon avec peau','Pavé de saumon avec peau. Faites croustiller la peau à la poêle pour une texture exceptionnelle.'),
(34,'de','Lachsportion mit Haut','Lachsportion mit Haut. Die Haut knusprig braten für eine außergewöhnliche Textur.'),
(34,'nl','Zalmportie Met Huid','Zalmportie met huid. De huid knapperig bakken voor een uitzonderlijke textuur.'),

-- Product 35: 鮭魚切塊 / Salmon Chunks
(35,'ja','サーモンカット','使いやすいカット済みサーモン。煮物、スープ、カレー、炒め物と幅広い料理に活用でき、コスパも抜群です。'),
(35,'ko','연어 컷 조각','사용하기 편한 컷 연어 조각. 조림·수프·카레·볶음 등 다양한 요리에 활용할 수 있어 가성비도 최고입니다.'),
(35,'fr','Morceaux de saumon','Morceaux de saumon prêts à l''emploi. Idéaux pour mijotés, soupes, currys et sautés — excellent rapport qualité-prix.'),
(35,'de','Lachsstücke','Kochfertige Lachsstücke. Ideal für Schmorgerichte, Suppen, Currys und Pfannengerichte — ausgezeichnetes Preis-Leistungs-Verhältnis.'),
(35,'nl','Zalmstukken','Kookklare zalmstukken. Ideaal voor stoofpotten, soepen, curry''s en roerbak — uitstekende prijs-kwaliteitverhouding.'),

-- Product 36: 鮭魚頭 / Salmon Head
(36,'ja','サーモンの頭','コラーゲン豊富なサーモンの頭。煮込み汁やスープのだし取りに最適で、頬肉やカマの部分が美味です。'),
(36,'ko','연어 머리','콜라겐이 풍부한 연어 머리. 조림 육수나 수프 육수 내기에 최적이며, 볼살과 가마살 부위가 맛있습니다.'),
(36,'fr','Tête de saumon','Tête de saumon riche en collagène. Idéale pour les bouillons et fumets — la joue et le collet sont particulièrement savoureux.'),
(36,'de','Lachskopf','Kollagenreicher Lachskopf. Ideal für Brühen und Fonds — Backe und Kragen sind besonders schmackhaft.'),
(36,'nl','Zalmhoofd','Collageen-rijk zalmhoofd. Ideaal voor bouillons en fumets — de wang en kraag zijn bijzonder smakelijk.'),

-- Product 37: 鮭魚下巴 / Salmon Collar (Kama)
(37,'ja','サーモンカマ（鮭の下あご）','脂ののった希少部位のサーモンカマ。塩焼きにするだけで専門店のような味わい。日本酒との相性も抜群です。'),
(37,'ko','연어 가마 (연어 턱살)','기름기가 풍부한 희귀 부위 연어 가마. 소금구이만 해도 전문점 같은 맛. 청주와의 궁합도 최고입니다.'),
(37,'fr','Collier de saumon (Kama)','Partie grasse et rare du saumon — le collier. Simplement grillé au sel, c''est un plat digne d''un restaurant.'),
(37,'de','Lachskragen (Kama)','Fettreicher und seltener Teil des Lachses — der Kragen. Einfach mit Salz gegrillt, schmeckt es wie im Restaurant.'),
(37,'nl','Zalmkraag (Kama)','Vetrijk en zeldzaam deel van de zalm — de kraag. Gewoon gegrild met zout, smaakt het als in een restaurant.'),

-- Product 38: 鹽漬鮭魚片 / Salt-Cured Salmon (Gravlax Style)
(38,'ja','塩漬けサーモンスライス（グラブラックス）','北欧式塩漬けサーモン。スモークサーモンとは異なる、まろやかな塩味と繊細な食感が魅力。そのまま召し上がれます。'),
(38,'ko','염장 연어 슬라이스 (그라브락스)','북유럽식 염장 연어. 훈제 연어와는 다른, 부드러운 짠맛과 섬세한 식감이 매력. 바로 드실 수 있습니다.'),
(38,'fr','Saumon gravlax (saumon mariné au sel)','Saumon mariné au sel façon nordique. Différent du fumé — saveur douce et texture délicate. Prêt à déguster.'),
(38,'de','Gepökelter Lachs (Gravlax-Art)','Lachs nach nordischer Art gepökelt. Anders als Räucherlachs — milder Salzgeschmack und zarte Textur. Sofort verzehrfertig.'),
(38,'nl','Gepekelde Zalm (Gravlax Stijl)','Zalm gepekeld op Scandinavische wijze. Anders dan gerookte zalm — milde zoute smaak en delicate textuur. Direct eetklaar.'),

-- Product 39: 煙燻鮭魚薄片 / Cold Smoked Salmon Slices
(39,'ja','コールドスモークサーモンスライス','冷燻製法で仕上げたサーモン薄切り。クリームチーズやベーグルとの相性が抜群で、贈り物にも最適です。'),
(39,'ko','냉훈제 연어 슬라이스','냉훈제 방식으로 완성한 얇게 슬라이스한 연어. 크림치즈나 베이글과의 궁합이 최고이며, 선물로도 안성맞춤입니다.'),
(39,'fr','Tranches de saumon fumé à froid','Saumon finement tranché, fumé à froid. Parfait avec du fromage à la crème et des bagels — idéal en cadeau.'),
(39,'de','Kaltgeräucherte Lachsscheiben','Dünn geschnittener, kaltgeräucherter Lachs. Perfekt mit Frischkäse und Bagels — ideal als Geschenk.'),
(39,'nl','Koud Gerookte Zalmplakken','Dun gesneden, koud gerookte zalm. Perfect met roomkaas en bagels — ideaal als cadeau.'),

-- Product 40: 鮭魚肚（條狀）/ Salmon Belly Strips
(40,'ja','サーモンベリー（短冊切り）','脂のりの良い部位を短冊形にカットしたサーモンベリー。炙り寿司、塩焼き、照り焼きに最適です。'),
(40,'ko','연어 뱃살 (스트립)','기름기가 좋은 부위를 길쭉하게 컷한 연어 뱃살. 구이 스시·소금구이·데리야키에 최적입니다.'),
(40,'fr','Ventre de saumon en lanières','Ventre de saumon bien gras coupé en lanières. Idéal pour sushis flambés, grillé au sel ou teriyaki.'),
(40,'de','Lachsbauch-Streifen','Fettreicher Lachsbauch in Streifen geschnitten. Ideal für gegrillte Sushis, Salzgrillen oder Teriyaki.'),
(40,'nl','Zalmbuik Reepjes','Vetrijke zalmbuik in reepjes gesneden. Ideaal voor gegrilde sushi, zoutgrillen of teriyaki.');

INSERT OR REPLACE INTO product_translations (product_id, locale, name, description) VALUES

-- Product 41: 鮭魚卵（Ikura）/ Salmon Roe
(41,'ja','いくら（サーモンロー）','肉厚でぷりぷりのいくら。醤油漬けで旨味たっぷり、ご飯に乗せるだけで贅沢ないくら丼の完成です。'),
(41,'ko','이쿠라 (연어알)','알이 굵고 탱탱한 이쿠라. 간장에 절여 감칠맛이 풍부하며, 밥에 얹기만 해도 호화로운 이쿠라 덮밥이 완성됩니다.'),
(41,'fr','Œufs de saumon (Ikura)','Œufs de saumon fermes et dorés, marinés à la sauce soja. Posez-les sur du riz chaud pour un bol luxueux.'),
(41,'de','Lachsrogen (Ikura)','Pralle, goldene Lachseier, in Sojasoße mariniert. Auf warmem Reis — ein luxuriöses Ikura-Donburi.'),
(41,'nl','Zalmkuit (Ikura)','Stevige, gouden zalmeitjes, gemarineerd in sojasaus. Op warme rijst — een luxe ikura donburi.'),

-- Product 42: 珍珠龍膽石斑菲力 / Pearl Grouper Fillet
(42,'ja','パール龍膽石斑フィレ','台湾養殖のパール龍膽石斑フィレ。厚みのある白身は弾力があり、蒸しやソテーで高級料亭の一皿に。'),
(42,'ko','펄 롱단 자바리 필레','대만 양식 펄 롱단 자바리 필레. 두툼한 흰살은 탄력이 있으며, 찜이나 소테로 고급 요리로 완성됩니다.'),
(42,'fr','Filet de mérou perle','Filet de mérou perle élevé à Taïwan. Chair blanche épaisse et ferme — vapeur ou sauté pour un plat de restaurant haut de gamme.'),
(42,'de','Perlzackenbarsch-Filet','Filet des perlenfarbenen Zackenbarschs aus Taiwan. Dickes, festes weißes Fleisch — gedämpft oder gebraten für ein Gericht der gehobenen Küche.'),
(42,'nl','Parelzeebaars Filet','Parelzeebaarsfilet uit Taiwan. Dik, stevig wit vlees — gestoomd of gebakken voor een gerecht uit de haute cuisine.'),

-- Product 43: 龍膽石斑魚排 / Giant Grouper Steak
(43,'ja','龍膽石斑ステーキ','巨大な龍膽石斑の厚切りステーキ。しっかりとした食感と上品な旨味が特徴で、清蒸や紅燒に最適です。'),
(43,'ko','용담 자바리 스테이크','대형 용담 자바리 두꺼운 스테이크. 탄탄한 식감과 고상한 감칠맛이 특징이며, 청증이나 홍소에 최적입니다.'),
(43,'fr','Steak de mérou géant','Steak épais de mérou géant. Texture ferme et umami raffiné — idéal cuit à la vapeur à la cantonaise ou braisé rouge.'),
(43,'de','Riesen-Zackenbarsch-Steak','Dicker Steak des Riesen-Zackenbarschs. Feste Textur und feines Umami — ideal gedämpft kantonesisch oder rot geschmort.'),
(43,'nl','Reuze-Zeebaars Steak','Dikke steak van de reuze-zeebaars. Stevige textuur en verfijnde umami — ideaal gestoomd Kantonees of roodgesmoord.'),

-- Product 44: 龍膽石斑菲力（去骨）/ Giant Grouper Fillet Boneless
(44,'ja','龍膽石斑フィレ（骨なし）','骨を丁寧に除いた龍膽石斑フィレ。高級魚の美味しさをそのままに、調理しやすい便利な一品です。'),
(44,'ko','용담 자바리 필레 (뼈 제거)','뼈를 정성껏 제거한 용담 자바리 필레. 고급 생선의 맛을 그대로 살리면서도 조리하기 쉬운 편리한 상품입니다.'),
(44,'fr','Filet de mérou géant désossé','Filet de mérou géant soigneusement désossé. La saveur du poisson de luxe, sans les arêtes — facile à cuisiner.'),
(44,'de','Riesen-Zackenbarsch-Filet ohne Gräten','Sorgfältig entgrätetes Filet des Riesen-Zackenbarschs. Der Geschmack des Luxusfisches ohne die Gräten — einfach zu kochen.'),
(44,'nl','Reuze-Zeebaars Filet Zonder Graten','Zorgvuldig ontgraat filet van de reuze-zeebaars. De smaak van de luxevis zonder de graten — gemakkelijk te bereiden.'),

-- Product 45: 龍膽石斑下巴 / Giant Grouper Collar
(45,'ja','龍膽石斑カマ','コラーゲンたっぷりの龍膽石斑カマ。塩焼き、煮付けでとろける食感をお楽しみください。'),
(45,'ko','용담 자바리 가마살','콜라겐이 풍부한 용담 자바리 가마살. 소금구이나 조림으로 녹아드는 식감을 즐기세요.'),
(45,'fr','Collier de mérou géant','Collier de mérou géant riche en collagène. Grillé au sel ou braisé — une texture fondante incomparable.'),
(45,'de','Riesen-Zackenbarsch-Kragen','Kollagenreicher Kragen des Riesen-Zackenbarschs. Salzgegrillt oder geschmort — eine unvergleichliche schmelzende Textur.'),
(45,'nl','Reuze-Zeebaars Kraag','Collageen-rijke kraag van de reuze-zeebaars. Gegrild met zout of gestoofd — een onvergelijkbare smeltende textuur.'),

-- Product 46: 帝王蟹（整隻）/ Whole King Crab
(46,'ja','タラバガニ（1杯丸ごと）','ロシア産タラバガニ丸ごと1杯。甘くてぎっしり詰まった身は特別な食卓を演出します。蒸すだけで絶品の味わい。'),
(46,'ko','킹크랩 (통 1마리)','러시아산 킹크랩 통 1마리. 달콤하고 꽉 찬 살은 특별한 식탁을 연출합니다. 쪄서만 먹어도 최고의 맛입니다.'),
(46,'fr','Crabe royal entier','Crabe royal russe entier. Chair dense et sucrée pour une table d''exception. Simplement cuit à la vapeur.'),
(46,'de','Ganzer Königskrabbe','Ganze russische Königskrabbe. Dichtes, süßes Fleisch für einen außergewöhnlichen Tisch. Einfach dämpfen und genießen.'),
(46,'nl','Hele Koningskrab','Hele Russische koningskrab. Dicht, zoet vlees voor een uitzonderlijke tafel. Gewoon stomen en genieten.'),

-- Product 47: 生凍帝王蟹腳 / Raw Frozen King Crab Cluster
(47,'ja','生凍タラバガニ脚（クラスター）','生のまま急速冷凍したタラバガニの脚。鮮度を保ち、自宅で蒸すだけで本格的な蟹料理を楽しめます。'),
(47,'ko','생동 킹크랩 다리 (클러스터)','생 그대로 급속 냉동한 킹크랩 다리. 신선도를 유지하여, 집에서 쪄서 정통 게 요리를 즐길 수 있습니다.'),
(47,'fr','Pinces de crabe royal surgelées crues','Pinces de crabe royal surgelées crues rapidement. Fraîcheur préservée — cuisez à la vapeur chez vous pour un résultat authentique.'),
(47,'de','Rohe gefrorene Königskrabbenscheren','Königskrabbenscheren, roh schockgefroren. Frische bewahrt — zu Hause dämpfen für ein authentisches Krabbengericht.'),
(47,'nl','Rauw Diepgevroren Koningskrab Cluster','Koningskrabcluster, rauw snel ingevroren. Versheid bewaard — thuis stomen voor een authentiek krabgerecht.'),

-- Product 48: 松葉蟹腳（雪蟹）/ Snow Crab Cluster
(48,'ja','松葉ガニ（ズワイガニ）脚','日本海産松葉ガニの脚。細くて長い脚に甘くてジューシーな身がたっぷり。贈り物にも最適な高級食材です。'),
(48,'ko','마쓰바 게 (눈 게) 다리','일본해산 마쓰바 게 다리. 가늘고 긴 다리에 달콤하고 즙이 많은 살이 가득. 선물로도 최적인 고급 식재료입니다.'),
(48,'fr','Pinces de crabe des neiges (matsuba)','Pinces de crabe des neiges de la mer du Japon. Chair douce et juteuse dans de longues pattes fines — cadeau de luxe idéal.'),
(48,'de','Schneekrebs-Scheren (Matsuba)','Scheren des Matsubakrebs aus dem Japanischen Meer. Süßes, saftiges Fleisch in langen, schlanken Beinen — ideales Luxusgeschenk.'),
(48,'nl','Sneeuwkrab Cluster (Matsuba)','Matsuba sneeuwkrabpoten uit de Japanse Zee. Zoet, sappig vlees in lange, slanke poten — ideaal luxecadeau.'),

-- Product 49: 波士頓龍蝦 / Boston Lobster
(49,'ja','ボストンロブスター（生冷凍）','生きたまま急速冷凍したボストンロブスター。自宅でレストラン品質のロブスター料理を楽しんでください。'),
(49,'ko','보스턴 랍스터 (활동 냉동)','살아있는 채로 급속 냉동한 보스턴 랍스터. 집에서 레스토랑 품질의 랍스터 요리를 즐기세요.'),
(49,'fr','Homard de Boston (surgelé vivant)','Homard de Boston surgelé vivant. Profitez de la qualité restaurant chez vous.'),
(49,'de','Boston Hummer (lebendig gefroren)','Boston Hummer, lebendig schockgefroren. Genießen Sie Restaurantqualität zu Hause.'),
(49,'nl','Boston Kreeft (levend bevroren)','Boston kreeft, levend snel ingevroren. Geniet van restaurantkwaliteit thuis.'),

-- Product 50: 生凍龍蝦（整隻）/ Whole Frozen Lobster
(50,'ja','生凍ロブスター（丸ごと1尾）','生のまま急速冷凍した丸ごとロブスター。グリル、蒸し、テルミドールなど様々な料理に対応できます。'),
(50,'ko','생동 랍스터 (통 1마리)','생 그대로 급속 냉동한 통 랍스터. 그릴·찜·테르미도르 등 다양한 요리에 활용할 수 있습니다.'),
(50,'fr','Homard entier surgelé cru','Homard entier surgelé cru. Grillé, cuit à la vapeur, thermidor — polyvalent pour toutes les recettes.'),
(50,'de','Ganzer roher gefrorener Hummer','Ganzer Hummer, roh schockgefroren. Gegrillt, gedämpft, Thermidor — vielseitig für alle Rezepte.'),
(50,'nl','Hele Rauwe Diepgevroren Kreeft','Hele kreeft, rauw snel ingevroren. Gegrild, gestoomd, thermidor — veelzijdig voor alle recepten.'),

-- Product 51: 乾燥干貝（頂級）/ Premium Dried Scallop (Conpoy)
(51,'ja','乾燥干貝（コンポイ）最高級','伝統的な天日乾燥法で仕上げた高級干し貝柱。コラーゲンと旨味たっぷりで、粥や蒸し料理の風味を格段に高めます。'),
(51,'ko','건조 가리비 (콘포이) 최상급','전통 천일 건조법으로 완성한 고급 말린 가리비. 콜라겐과 감칠맛이 풍부하여, 죽이나 찜 요리의 풍미를 한층 높입니다.'),
(51,'fr','Noix de Saint-Jacques séchées premium (Conpoy)','Pétoncles séchés au soleil selon la méthode traditionnelle. Riches en collagène et en umami — subliment congées et plats vapeur.'),
(51,'de','Premium getrocknete Jakobsmuscheln (Conpoy)','Jakobsmuscheln nach traditioneller Sonnentrocknungsmethode getrocknet. Reich an Kollagen und Umami — veredeln Congee und gedämpfte Gerichte.'),
(51,'nl','Premium Gedroogde Sint-Jakobsschelpen (Conpoy)','Jakobsschelpen gedroogd op traditionele zonnedroging. Rijk aan collageen en umami — verheffen congee en gestoomde gerechten.'),

-- Product 52: 熟凍干貝（大）/ Cooked Frozen Scallop Large
(52,'ja','熟凍ホタテ（大）','大ぶりのホタテを熟凍加工。解凍後そのまま食べられる手軽さと、ぷりぷりした食感が魅力です。'),
(52,'ko','숙동 가리비 (대)','큰 가리비를 숙동 가공. 해동 후 바로 먹을 수 있는 편리함과 탱탱한 식감이 매력입니다.'),
(52,'fr','Noix de Saint-Jacques cuites surgelées (grande taille)','Grandes noix de Saint-Jacques cuites et surgelées. Décongeler et déguster directement — texture ferme et savoureuse.'),
(52,'de','Gekochte Tiefkühl-Jakobsmuscheln (groß)','Große Jakobsmuscheln, gegart und tiefgekühlt. Auftauen und direkt genießen — feste, schmackhafte Textur.'),
(52,'nl','Gekookte Diepvries Sint-Jakobsschelpen (groot)','Grote sint-jakobsschelpen, gekookt en ingevroren. Ontdooien en direct genieten — stevige, smakelijke textuur.'),

-- Product 53: 小帆立貝（Bay Scallop）/ Bay Scallop
(53,'ja','ベイスカロップ（小型帆立貝）','小型ホタテを急速冷凍。炒め物、スープ、パスタなど様々な料理に使いやすい万能食材です。'),
(53,'ko','베이 스캘럽 (소형 가리비)','소형 가리비를 급속 냉동. 볶음·수프·파스타 등 다양한 요리에 사용하기 편한 만능 식재료입니다.'),
(53,'fr','Pétoncles baie (petites coquilles)','Petites noix de Saint-Jacques surgelées rapidement. Polyvalentes pour sautés, soupes et pâtes.'),
(53,'de','Bay-Scallop (kleine Jakobsmuscheln)','Kleine Jakobsmuscheln, schockgefroren. Vielseitig für Pfannengerichte, Suppen und Pasta.'),
(53,'nl','Bay Scallop (kleine Sint-Jakobsschelpen)','Kleine sint-jakobsschelpen, snel ingevroren. Veelzijdig voor roerbak, soepen en pasta.'),

-- Product 54: 生蠔（帶殼）/ Fresh Oysters in Shell
(54,'ja','生牡蠣（殻付き）','新鮮な殻付き牡蠣。レモンをかけてそのままいただくか、グラタンや蒸し牡蠣として存分にお楽しみください。'),
(54,'ko','생굴 (껍질 포함)','신선한 껍질 있는 굴. 레몬을 뿌려 그대로 먹거나, 그라탕이나 찜굴로도 충분히 즐기세요.'),
(54,'fr','Huîtres fraîches en coquille','Huîtres fraîches en coquille. Avec un filet de citron crues, ou gratinées et cuites à la vapeur.'),
(54,'de','Frische Austern in der Schale','Frische Austern in der Schale. Mit Zitrone roh oder gratiniert und gedämpft.'),
(54,'nl','Verse Oesters in de Schelp','Verse oesters in de schelp. Met citroen rauw of gegratineerd en gestoomd.'),

-- Product 55: 鮑魚（整顆）/ Whole Abalone
(55,'ja','鮑（丸ごと）','珍重される鮑を丸ごと1個。コラーゲン豊富で濃厚な旨味があり、蒸し物や煮物で至高の食体験をお届けします。'),
(55,'ko','전복 (통째)','귀하게 여기는 전복을 통째로 1개. 콜라겐이 풍부하고 진한 감칠맛이 있으며, 찜이나 조림으로 최고의 식경험을 선사합니다.'),
(55,'fr','Ormeau entier','Ormeau entier — richement prisé. Riche en collagène et en umami profond — cuit à la vapeur ou braisé pour une expérience culinaire sublime.'),
(55,'de','Ganze Abalone','Ganze Abalone — hoch geschätzt. Reich an Kollagen und tiefem Umami — gedämpft oder geschmort für ein erhabenes kulinarisches Erlebnis.'),
(55,'nl','Hele Abalone','Hele abalone — zeer gewaardeerd. Rijk aan collageen en diep umami — gestoomd of gestoood voor een sublieme culinaire ervaring.'),

-- Product 56: 紐西蘭青口（半殼淡菜）/ NZ Green-Lipped Mussels Half Shell
(56,'ja','NZグリーンシェルマッセル（半殻）','ニュージーランド産グリーンリップマッセル。半殻で提供され、蒸すだけで鮮やかな色と豊かな旨味が楽しめます。'),
(56,'ko','뉴질랜드 초록입 홍합 (반껍질)','뉴질랜드산 초록입 홍합. 반껍질로 제공되어, 쪄서만 먹어도 선명한 색과 풍부한 감칠맛을 즐길 수 있습니다.'),
(56,'fr','Moules à lèvres vertes de Nouvelle-Zélande (demi-coquille)','Moules à lèvres vertes de Nouvelle-Zélande sur demi-coquille. Simplement à la vapeur pour une couleur éclatante et un umami généreux.'),
(56,'de','Neuseeländische Grünlippenmuscheln (halbschale)','Grünlippenmuscheln aus Neuseeland auf der Halbschale. Einfach dämpfen für leuchtende Farbe und reichhaltiges Umami.'),
(56,'nl','Nieuw-Zeelandse Groenlipmossel (halve schelp)','Groenlipmossel uit Nieuw-Zeeland op halve schelp. Gewoon stomen voor heldere kleur en rijke umami.'),

-- Product 57: 帶殼扇貝（帆立貝）/ Half-Shell Scallop Hotate
(57,'ja','帆立貝（殻付き）','殻付き帆立貝は見た目も豪華。バター醤油で焼くだけでBBQや宴会の主役になる一品です。'),
(57,'ko','가리비 (껍질 포함 호타테)','껍질 있는 가리비는 외관도 화려합니다. 버터 간장으로 구워내기만 해도 바베큐나 연회의 주인공이 되는 요리입니다.'),
(57,'fr','Coquille Saint-Jacques entière (Hotate)','Coquille Saint-Jacques entière — présentation spectaculaire. Poêlée au beurre-soja, elle devient la star de vos barbecues et banquets.'),
(57,'de','Ganze Jakobsmuschel (Hotate)','Ganze Jakobsmuschel in der Schale — beeindruckende Präsentation. In Butter-Sojasoße gebraten, das Highlight Ihres Grillabends.'),
(57,'nl','Hele Sint-Jakobsschelp (Hotate)','Hele sint-jakobsschelp in de schelp — indrukwekkende presentatie. Gebakken in boter-sojasaus, de ster van uw barbecue.'),

-- Product 58: 海螺（九孔螺）/ Sea Snail Turban Shell
(58,'ja','サザエ（九孔螺）','コリコリとした食感が魅力のサザエ。壺焼きにすると磯の香りと旨味が溢れ出す絶品珍味です。'),
(58,'ko','소라 (구공나선)','쫄깃쫄깃한 식감이 매력인 소라. 껍질 채 구우면 바다향과 감칠맛이 넘치는 최고의 별미입니다.'),
(58,'fr','Turban de mer (escargot de mer)','Escargot de mer à la texture croquante. Grillé dans sa coquille, il libère arômes marins et umami — un vrai délice.'),
(58,'de','Turban-Meeresschnecke','Meeresschnecke mit knuspriger Textur. In der Schale gegrillt, entfalten sich Meeresaromen und Umami — ein echter Genuss.'),
(58,'nl','Turbanhoren (Zeeslak)','Zeeslak met knapperige textuur. In de schelp gegrild, komen zeearoma''s en umami vrij — een echt genot.'),

-- Product 59: 花枝（整尾）/ Whole Cuttlefish
(59,'ja','コウイカ（丸ごと）','丸ごと1尾のコウイカ。さっぱりとした白身で弾力があり、三杯、炒め物、天ぷらと幅広く楽しめます。'),
(59,'ko','갑오징어 (통째)','통째로 1마리 갑오징어. 담백하고 탄력 있는 흰살로, 삼배·볶음·튀김 등 다양하게 즐길 수 있습니다.'),
(59,'fr','Seiche entière','Seiche entière à chair blanche, légère et ferme. Délicieuse sautée aux trois tasses, en wok ou en tempura.'),
(59,'de','Ganzer Tintenfisch','Ganzer Tintenfisch mit weißem, leichtem und festem Fleisch. Köstlich im Drei-Tassen-Stil, im Wok oder als Tempura.'),
(59,'nl','Hele Zeekat','Hele zeekat met wit, licht en stevig vlees. Heerlijk in drie-kops stijl, in de wok of als tempura.'),

-- Product 60: 魷魚（加工切段）/ Processed Squid Pieces
(60,'ja','イカ（カット済み）','下処理済みのカットイカ。使いやすいサイズで、炒め物、鍋、海鮮料理に素早く使える便利な食材です。'),
(60,'ko','오징어 (가공 컷)','손질된 컷 오징어. 사용하기 좋은 크기로, 볶음·전골·해산물 요리에 빠르게 사용할 수 있는 편리한 식재료입니다.'),
(60,'fr','Encornets en morceaux (prêts à cuisiner)','Encornets découpés et prêts à cuisiner. Taille pratique pour sautés, fondues et plats de fruits de mer rapides.'),
(60,'de','Tintenfisch-Stücke (verarbeitet)','Verarbeitete, geschnittene Tintenfischstücke. Praktische Größe für Pfannengerichte, Fondue und schnelle Meeresfrüchtegerichte.'),
(60,'nl','Inktvis Stukken (verwerkt)','Verwerkte, gesneden inktvispstukken. Praktische maat voor roerbak, fondue en snelle zeevruchtgerechten.');

INSERT OR REPLACE INTO product_translations (product_id, locale, name, description) VALUES

-- Product 61: 大魷魚（整條）/ Giant Squid Whole
(61,'ja','大型イカ（丸ごと）','大型のイカを丸ごと1尾。リング切り、刺身、干物など多用途に活用でき、まとめ買いにもお得です。'),
(61,'ko','대형 오징어 (통째)','대형 오징어 통째로 1마리. 링 컷·회·건어물 등 다용도로 활용할 수 있으며, 대량 구매에도 유리합니다.'),
(61,'fr','Grand calmar entier','Grand calmar entier. Polyvalent — rondelles, sashimi ou séché. Idéal en grande quantité.'),
(61,'de','Großer Tintenfisch (ganz)','Ganzer großer Tintenfisch. Vielseitig — Ringe, Sashimi oder getrocknet. Ideal in großen Mengen.'),
(61,'nl','Grote Inktvis (heel)','Hele grote inktvis. Veelzijdig — ringen, sashimi of gedroogd. Ideaal in grote hoeveelheden.'),

-- Product 62: 即食海參（刺參）/ Ready-to-Eat Sea Cucumber
(62,'ja','即食なまこ（刺参）','高級食材として珍重されるなまこを即食加工。独特のコリコリした食感と豊富な栄養素が特徴で、そのままお召し上がりいただけます。'),
(62,'ko','즉석 해삼 (가시해삼)','고급 식재료로 귀하게 여기는 해삼을 즉식 가공. 독특한 쫄깃한 식감과 풍부한 영양소가 특징이며, 바로 드실 수 있습니다.'),
(62,'fr','Concombre de mer prêt à manger (Haishan)','Concombre de mer traité prêt à déguster — un ingrédient de luxe. Texture croquante unique et nutriments abondants.'),
(62,'de','Sofort essbereite Seegurke (Stachel-Seegurke)','Verarbeitete, sofort essfertige Seegurke — eine Delikatesse. Einzigartige knackige Textur und reichhaltige Nährstoffe.'),
(62,'nl','Eetklare Zeekomkommer (Stekelige Zeekomkommer)','Verwerkte, direct eetbare zeekomkommer — een delicatesse. Unieke knapperige textuur en rijke voedingsstoffen.'),

-- Product 63: 魷魚圈 / Squid Rings
(63,'ja','イカリング','コリコリした食感のイカリング。揚げ物やフライパン炒めに使いやすく、子供から大人まで大人気です。'),
(63,'ko','오징어 링','쫄깃쫄깃한 식감의 오징어 링. 튀김이나 프라이팬 볶음에 사용하기 쉬우며, 어린이부터 어른까지 모두 좋아합니다.'),
(63,'fr','Rondelles de calmar','Rondelles de calmar à la texture ferme. Faciles à frire ou sauter — populaires de 7 à 77 ans.'),
(63,'de','Tintenfischringe','Tintenfischringe mit fester Textur. Einfach zu frittieren oder zu braten — beliebt von jung bis alt.'),
(63,'nl','Inktvissringen','Inktvissringen met stevige textuur. Gemakkelijk te frituren of roerbakken — geliefd van jong tot oud.'),

-- Product 64: 海鮮火鍋料理包 / Seafood Hot Pot Meal Kit
(64,'ja','海鮮鍋ミールキット','海鮮素材と専用スープが入った火鍋セット。具材を入れて煮込むだけで本格的な海鮮火鍋が完成します。'),
(64,'ko','해산물 훠궈 밀 키트','해산물 재료와 전용 수프가 들어간 훠궈 세트. 재료를 넣고 끓이기만 하면 본격적인 해산물 훠궈가 완성됩니다.'),
(64,'fr','Kit repas fondue fruits de mer','Kit complet avec fruits de mer et bouillon maison. Ajoutez les ingrédients et mijotez — une vraie fondue en un instant.'),
(64,'de','Meeresfrüchte Hotpot Mahlzeit-Kit','Komplettes Kit mit Meeresfrüchten und Hausbrühe. Zutaten hineingeben und köcheln lassen — ein echter Hotpot in Minuten.'),
(64,'nl','Zeevruchten Hotpot Maaltijdkit','Compleet pakket met zeevruchten en huisbouillon. Ingrediënten toevoegen en laten sudderen — een echte hotpot in minuten.'),

-- Product 65: 烏骨雞（藥膳）/ Black-Bone Silkie Chicken Herbal
(65,'ja','烏骨鶏（薬膳）','漢方薬材と共に仕込んだ烏骨鶏の薬膳料理。温活・滋養強壮に優れ、女性や高齢者に特におすすめです。'),
(65,'ko','오골계 (약선)','한방 약재와 함께 준비한 오골계 약선 요리. 몸을 따뜻하게 하고 보양에 뛰어나며, 여성과 어르신에게 특히 추천합니다.'),
(65,'fr','Poulet à os noir (médecine chinoise)','Poulet à os noir préparé avec des herbes médicinales chinoises. Réchauffant et tonifiant — particulièrement recommandé pour les femmes et les personnes âgées.'),
(65,'de','Schwarzknochenhähnchen (Kräutermedizin)','Schwarzknochenhähnchen, mit chinesischen Kräutern zubereitet. Wärmend und stärkend — besonders empfohlen für Frauen und ältere Menschen.'),
(65,'nl','Zwart-Bot Kip (Kruidentherapie)','Zwart-bot kip bereid met Chinese medicinale kruiden. Verwarmend en versterkend — bijzonder aanbevolen voor vrouwen en ouderen.'),

-- Product 66: 人蔘雞湯 / Ginseng Chicken Soup
(66,'ja','高麗人参チキンスープ','高麗人参と鶏をじっくり煮込んだ伝統の滋養スープ。温めるだけで元気が湧いてくる滋補の一杯です。'),
(66,'ko','인삼 닭 수프','고려인삼과 닭을 정성껏 끓여낸 전통 보양 수프. 데우기만 해도 기운이 솟는 자양강장의 한 그릇입니다.'),
(66,'fr','Soupe de poulet au ginseng','Soupe traditionnelle mijotée lentement avec du ginseng coréen et du poulet. Réchauffez et retrouvez énergie et vitalité.'),
(66,'de','Ginseng-Hühnersuppe','Traditionell langsam gekochte Suppe mit koreanischem Ginseng und Huhn. Aufwärmen und Energie tanken.'),
(66,'nl','Ginseng Kippensoep','Traditioneel langzaam gegaard met Koreaanse ginseng en kip. Opwarmen en energie opdoen.'),

-- Product 67: 砂鍋魚頭豆腐煲 / Claypot Fish Head and Tofu
(67,'ja','砂鍋魚頭豆腐煲','魚頭と豆腐を土鍋でじっくり煮込んだ台湾の家庭料理。コラーゲン豊富なスープと絹ごし豆腐の組み合わせが絶品です。'),
(67,'ko','사봐 어두부 찜 (클레이팟)','어두부를 뚝배기에 정성껏 끓여낸 대만 가정 요리. 콜라겐이 풍부한 국물과 순두부의 조합이 최고입니다.'),
(67,'fr','Casserole de tête de poisson au tofu','Plat maison taïwanais — tête de poisson et tofu mijotés dans une cocotte en argile. Bouillon riche en collagène et tofu soyeux — un mariage parfait.'),
(67,'de','Tontopf Fischkopf mit Tofu','Taiwanesisches Hausgericht — Fischkopf und Tofu in einem Tontopf geschmort. Kollagenreiche Brühe und seidener Tofu — eine perfekte Kombination.'),
(67,'nl','Aardewerken Pot Viskop met Tofu','Taiwanees thuisgerecht — viskop en tofu gesmoord in een aardewerken pot. Collageen-rijke bouillon en zijdezachte tofu — een perfecte combinatie.'),

-- Product 68: 蒜蓉花枝（調理包）/ Garlic Cuttlefish Ready-to-Cook
(68,'ja','ガーリックコウイカ（調理パック）','ニンニクと調味料に漬け込んだコウイカの調理パック。フライパンで炒めるだけで本格的な一品の完成です。'),
(68,'ko','마늘 갑오징어 (조리 팩)','마늘과 조미료에 재운 갑오징어 조리 팩. 프라이팬에 볶기만 해도 본격적인 요리가 완성됩니다.'),
(68,'fr','Seiche à l''ail (prête à cuire)','Seiche marinée à l''ail et aux assaisonnements. Faites sauter en quelques minutes — un plat savoureux instantané.'),
(68,'de','Knoblauch-Tintenfisch (Kochfertig)','Tintenfisch in Knoblauch und Gewürzen mariniert. In wenigen Minuten anbraten — ein sofortiges, schmackhaftes Gericht.'),
(68,'nl','Knoflook Zeekat (Kookklaar)','Zeekat gemarineerd in knoflook en smaakmakers. In een paar minuten roerbakken — een instant, smakelijk gerecht.'),

-- Product 69: 麻油鴨（薑母鴨）/ Sesame Oil Duck (Ginger Duck)
(69,'ja','麻油鴨（ジンジャーダック）','胡麻油と生姜で仕込んだ台湾の冬の定番鍋料理。体を温めるスパイシーな生姜の香りと、コクのある胡麻油の風味が絶妙です。'),
(69,'ko','마유 오리 (생강 오리)','참기름과 생강으로 준비한 대만의 겨울 정통 전골 요리. 몸을 따뜻하게 하는 매콤한 생강향과 구수한 참기름 풍미가 절묘합니다.'),
(69,'fr','Canard à l''huile de sésame (canard au gingembre)','Plat de fondue hivernal taïwanais classique. Huile de sésame et gingembre — réchauffant et aromatique.'),
(69,'de','Sesamöl-Ente (Ingwer-Ente)','Taiwanesisches klassisches Winter-Hotpot-Gericht. Sesamöl und Ingwer — wärmend und aromatisch.'),
(69,'nl','Sesamolie Eend (Gember Eend)','Taiwanees klassiek winter hotpot gerecht. Sesamolie en gember — verwarmend en aromatisch.'),

-- Product 70: 藥膳羊肉爐 / Herbal Lamb Hot Pot
(70,'ja','薬膳ラム鍋','漢方薬材と共に煮込んだラム鍋。体を温める効果があり、秋冬の滋補料理として昔から愛されてきました。'),
(70,'ko','약선 양고기 전골','한방 약재와 함께 끓인 양고기 전골. 몸을 따뜻하게 하는 효과가 있어 가을겨울 보양 요리로 예부터 사랑받아 왔습니다.'),
(70,'fr','Fondue d''agneau aux herbes médicinales','Fondue d''agneau mijotée avec des herbes chinoises. Réchauffante — chérie depuis toujours comme remède tonique d''automne-hiver.'),
(70,'de','Kräuter-Lamm-Hotpot','Lamm-Hotpot mit chinesischen Kräutern geschmort. Wärmend — seit jeher als Herbst-Winter-Tonikum geschätzt.'),
(70,'nl','Kruiden Lamsvlees Hotpot','Lamsvlees hotpot gestoofd met Chinese kruiden. Verwarmend — al eeuwen geliefd als herfst-winter tonicum.'),

-- Product 71: 黑蒜頭雞湯 / Black Garlic Chicken Soup
(71,'ja','黒ニンニクチキンスープ','長期熟成した黒ニンニクと鶏をじっくり煮込んだ深みのある滋養スープ。甘みと旨味が凝縮した独特の風味です。'),
(71,'ko','흑마늘 닭 수프','장기 숙성한 흑마늘과 닭을 정성껏 끓여낸 깊은 맛의 보양 수프. 단맛과 감칠맛이 응축된 독특한 풍미입니다.'),
(71,'fr','Soupe de poulet à l''ail noir','Soupe nourrissante mijotée avec de l''ail noir vieilli et du poulet. Saveur unique aux notes douces et umami concentrés.'),
(71,'de','Schwarzer Knoblauch Hühnersuppe','Nährende Suppe mit lang gereiftem schwarzem Knoblauch und Huhn. Einzigartiger Geschmack mit konzentrierter Süße und Umami.'),
(71,'nl','Zwarte Knoflook Kippensoep','Voedzame soep met langrijpe zwarte knoflook en kip. Unieke smaak met geconcentreerde zoetheid en umami.'),

-- Product 72: 蔥爆胡椒鴨 / Green Onion Pepper Duck
(72,'ja','葱爆胡椒鴨','ネギとブラックペッパーで炒めた鴨肉。香ばしいネギの香りとスパイシーな胡椒が絶妙にマッチした食欲をそそる一品です。'),
(72,'ko','파 볶음 후추 오리','파와 흑후추로 볶은 오리고기. 고소한 파향과 스파이시한 후추가 절묘하게 어우러진 식욕을 돋우는 요리입니다.'),
(72,'fr','Canard sauté aux oignons verts et poivre','Canard sauté aux oignons verts et poivre noir. L''arôme grillé des oignons et le poivre épicé se marient parfaitement.'),
(72,'de','Entenfleisch mit Frühlingszwiebeln und Pfeffer','Entenfleisch mit Frühlingszwiebeln und schwarzem Pfeffer gebraten. Das nussige Aroma der Zwiebeln und der würzige Pfeffer harmonieren perfekt.'),
(72,'nl','Eend Geroerbakt met Lente-ui en Peper','Eend gebakken met lente-uitjes en zwarte peper. Het nootachtig aroma van de uien en de kruidige peper passen perfect samen.'),

-- Product 73: 酸菜魚（川式）/ Sichuan Pickled Fish
(73,'ja','四川風酸菜魚','四川式のすっぱ辛い漬け白菜と白身魚のスープ。シビれる辛さと酸味のバランスが絶妙な四川の名物料理です。'),
(73,'ko','쓰촨식 김치 생선','쓰촨식 새콤매콤한 절인 배추와 흰살생선 수프. 얼얼한 매운맛과 신맛의 균형이 절묘한 쓰촨의 명물 요리입니다.'),
(73,'fr','Poisson aux légumes marinés style Sichuan','Soupe de poisson blanc aux légumes marinés acidulés à la sichuanaise. L''équilibre parfait entre piquant anesthésiant et acidité.'),
(73,'de','Sichuan-Fisch mit eingelegtem Gemüse','Weißfischsuppe mit eingelegtem Gemüse nach Sichuan-Art. Das perfekte Gleichgewicht zwischen betäubender Schärfe und Säure.'),
(73,'nl','Sichuan Vis met Ingelegde Groenten','Witvissoep met ingelegde groenten op Sichuan wijze. De perfecte balans tussen verdovende pit en zuurheid.'),

-- Product 74: 紅燒牛肉麵調理包 / Braised Beef Noodle Soup Kit
(74,'ja','紅燒牛肉麺キット','台湾の国民食・牛肉麺のレトルトキット。じっくり煮込んだ牛肉と濃厚な紅燒スープで、本格的な台湾の味を自宅で。'),
(74,'ko','홍소 쇠고기 국수 밀 키트','대만의 국민 음식 쇠고기 국수 레토르트 키트. 정성껏 끓인 쇠고기와 진한 홍소 수프로 본격 대만 맛을 집에서.'),
(74,'fr','Kit soupe de nouilles au bœuf braisé','Kit retort pour le plat national taïwanais. Bœuf lentement braisé et soupe hongshao riche — la saveur authentique de Taïwan chez vous.'),
(74,'de','Geschmortes Rindfleisch Nudelsuppe Kit','Retort-Kit für Taiwans Nationalgericht. Langsam geschmortes Rindfleisch und reichhaltige Hongshao-Suppe — authentischer Taiwan-Geschmack zu Hause.'),
(74,'nl','Gestoofd Rundvlees Noedelsoep Kit','Retort-kit voor Taiwans nationaal gerecht. Langzaam gestoofde rundvlees en rijke hongshao-soep — authentieke Taiwan smaak thuis.'),

-- Product 75: 四神豬肚湯 / Four Herbs Pork Tripe Soup
(75,'ja','四神豚もつスープ','四神湯（蓮子、薏仁、茯苓、芡実）と豚もつの伝統スープ。消化を助け、体を整える台湾の薬膳スープです。'),
(75,'ko','사신 돼지 위장 수프','사신탕(연자·율무·복령·검실)과 돼지 위장의 전통 수프. 소화를 돕고 몸을 다스리는 대만의 약선 수프입니다.'),
(75,'fr','Soupe de tripes de porc aux quatre herbes','Soupe traditionnelle avec tripes de porc et les quatre herbes (lotus, Job''s tear, poria, euryale). Aide à la digestion et tonifie le corps.'),
(75,'de','Vier-Kräuter-Schweinemagen-Suppe','Traditionelle Suppe mit Schweinemagen und vier Kräutern (Lotus, Hiobstränen, Poria, Euryale). Fördert die Verdauung und stärkt den Körper.'),
(75,'nl','Vier-Kruiden Varkenspens Soep','Traditionele soep met varkenspens en vier kruiden (lotus, Job''s traan, poria, euryale). Bevordert spijsvertering en versterkt het lichaam.'),

-- Product 76: 酸菜白肉鍋 / Pickled Vegetable & Pork Belly Hot Pot
(76,'ja','酸菜白肉鍋','酸っぱい漬け野菜と薄切り豚バラ肉の鍋料理。さっぱりとした酸味と豚の旨味が絶妙にマッチした冬の定番鍋です。'),
(76,'ko','절임 채소 삼겹살 전골','새콤한 절임 채소와 얇게 썬 삼겹살 전골 요리. 상큼한 신맛과 돼지의 감칠맛이 절묘하게 어우러진 겨울 정통 전골입니다.'),
(76,'fr','Fondue au chou mariné et ventre de porc','Fondue avec légumes marinés acidulés et tranches fines de poitrine de porc. Acidité fraîche et umami du porc — un classique hivernal.'),
(76,'de','Eingelegtes Gemüse und Schweinebauch Hotpot','Hotpot mit saurem eingelegtem Gemüse und dünnen Schweinebauchscheiben. Frische Säure und Schweineumami — ein Winterklassiker.'),
(76,'nl','Ingelegde Groenten en Varkensbuik Hotpot','Hotpot met zure ingelegde groenten en dunne varkensbuikplakken. Frisse zuurheid en varkensuami — een winterklassieker.'),

-- Product 77: 糯米雞（荷葉蒸）/ Sticky Rice Chicken Lotus Leaf
(77,'ja','蓮の葉蒸しもち米鶏','蓮の葉に包んで蒸した鶏肉ともち米の点心。荷葉の香りが染み込んだもち米と鶏の旨味が絶品です。'),
(77,'ko','연잎 쌀 닭 (로 마이 가이)','연잎에 싸서 찐 닭고기와 찹쌀 딤섬. 연잎향이 배어든 찹쌀과 닭의 감칠맛이 최고입니다.'),
(77,'fr','Poulet au riz gluant (feuille de lotus)','Dim sum vapeur — poulet et riz gluant enveloppés dans une feuille de lotus. L''arôme du lotus imprègne le riz — une saveur incomparable.'),
(77,'de','Klebreishähnchen in Lotusblatt (Lo Mai Gai)','Dim Sum gedämpft — Huhn und Klebreis in Lotusblatt eingewickelt. Das Lomusaroma durchdringt den Reis — unvergleichlicher Geschmack.'),
(77,'nl','Kleverige Rijst Kip in Lotusblad (Lo Mai Gai)','Dim sum gestoomd — kip en kleverige rijst verpakt in lotusblad. Het lotusaroma doordrenkt de rijst — onvergelijkbare smaak.'),

-- Product 78: 干貝肉包（港式蒸）/ Scallop & Pork Steamed Bun
(78,'ja','干し貝柱肉まん（香港式）','干し貝柱の旨味を豚肉と合わせた香港風蒸し肉まん。ふわふわの生地にじゅわっとした具材が絶品です。'),
(78,'ko','가리비 돼지 찐빵 (홍콩식)','말린 가리비의 감칠맛을 돼지고기와 합친 홍콩식 찐빵. 폭신한 반죽에 즙이 나오는 속재료가 최고입니다.'),
(78,'fr','Baozi aux pétoncles et porc (style Hong Kong)','Baozi vapeur façon Hong Kong — pétoncles séchés et porc juteux dans une pâte moelleuse. Saveur umami incomparable.'),
(78,'de','Jakobsmuschel-Schweinefleisch-Baozi (Hongkong-Stil)','Gedämpfte Baozi im Hongkong-Stil — getrocknete Jakobsmuscheln und saftiges Schweinefleisch in fluffigem Teig. Unvergleichliches Umami.'),
(78,'nl','Jakobsschelp en Varken Gestoomd Broodje (Hong Kong stijl)','Gestoomde baozi Hong Kong stijl — gedroogde sint-jakobsschelpen en sappig varken in luchtig deeg. Onvergelijkbare umami.'),

-- Product 79: 鮮蝦水餃 / Fresh Shrimp Dumplings
(79,'ja','えびの水餃子','プリプリのえびを包んだ水餃子。茹でるだけで手軽に楽しめる、家庭でも本格的な一品です。'),
(79,'ko','새우 물만두','탱탱한 새우를 넣은 물만두. 삶기만 해도 간편하게 즐길 수 있는, 집에서도 본격적인 요리입니다.'),
(79,'fr','Raviolis aux crevettes','Raviolis farcis de crevettes croquantes. Simplement bouillis — un plat savoureux et facile, restaurant à la maison.'),
(79,'de','Garnelen-Wasserdumpling','Dumplings gefüllt mit knackigen Garnelen. Einfach kochen — ein schmackhaftes, einfaches Gericht, Restaurantqualität zu Hause.'),
(79,'nl','Garnalen Watergyoza','Dumplings gevuld met knapperige garnalen. Gewoon koken — een smakelijk, eenvoudig gerecht, restaurantkwaliteit thuis.'),

-- Product 80: 台灣辣椒醬 / Taiwanese Chili Sauce
(80,'ja','台湾チリソース','台湾伝統のピリ辛チリソース。海鮮や餃子のつけダレとして、また料理のアクセントとして幅広く使えます。'),
(80,'ko','대만 칠리 소스','대만 전통의 매콤한 칠리 소스. 해산물이나 만두 찍어 먹기에도, 요리의 포인트로도 폭넓게 사용할 수 있습니다.'),
(80,'fr','Sauce chili taïwanaise','Sauce chili piquante traditionnelle de Taïwan. Parfaite comme sauce trempette pour fruits de mer et raviolis, ou pour relever vos plats.'),
(80,'de','Taiwanesische Chilisauce','Traditionelle würzige Chilisauce aus Taiwan. Perfekt als Dip für Meeresfrüchte und Dumplings oder zum Würzen Ihrer Gerichte.'),
(80,'nl','Taiwanese Chilisaus','Traditionele pittige chilisaus uit Taiwan. Perfect als dipsaus voor zeevruchten en dumplings, of om uw gerechten te kruiden.');

INSERT OR REPLACE INTO product_translations (product_id, locale, name, description) VALUES

-- Product 81: 蒜蓉粉絲蛤蜊 / Garlic Vermicelli Clams
(81,'ja','ガーリック春雨アサリ','ガーリックソースに絡めたアサリと春雨の一品。温めるだけでご飯やパスタと合う鮮甜な一皿が完成します。'),
(81,'ko','마늘 당면 조개','마늘 소스에 버무린 조개와 당면. 데우기만 해도 밥이나 파스타와 잘 어울리는 상큼하고 달콤한 요리가 완성됩니다.'),
(81,'fr','Palourdes à l''ail et vermicelles','Palourdes et vermicelles nappés de sauce à l''ail. Réchauffez — un plat savoureux à servir avec du riz ou des pâtes.'),
(81,'de','Knoblauch-Glasnudeln mit Muscheln','Muscheln und Glasnudeln in Knoblauchsauce. Aufwärmen — ein schmackhaftes Gericht zu Reis oder Pasta.'),
(81,'nl','Knoflook Vermicelli met Mosselen','Mosselen en vermicelli in knoflooksaus. Opwarmen — een smakelijk gerecht bij rijst of pasta.'),

-- Product 82: 醬汁小龍蝦 / Seasoned Crayfish
(82,'ja','ソース漬けザリガニ','秘伝のスパイシーソースに漬け込んだザリガニ。開袋即食で、宴会やビールのつまみに最高の一品です。'),
(82,'ko','소스 가재','비밀 스파이시 소스에 재운 가재. 개봉 즉시 먹을 수 있으며, 연회나 맥주 안주로 최고의 요리입니다.'),
(82,'fr','Écrevisses marinées','Écrevisses marinées dans une sauce épicée maison. Ouvrir et déguster — parfait pour les fêtes ou avec une bière froide.'),
(82,'de','Marinierte Fluss-Krebse','Flusskrebse in hausgemachter würziger Sauce mariniert. Öffnen und genießen — perfekt für Partys oder mit einem kalten Bier.'),
(82,'nl','Gemarineerde Rivierkreeftjes','Rivierkreeftjes gemarineerd in huisgemaakte pittige saus. Openen en genieten — perfect voor feesten of bij een koud bier.'),

-- Product 83: 蟹肉棒 / Crab Sticks
(83,'ja','カニカマ（かに風味かまぼこ）','弾力のある食感と豊かなカニ風味。火鍋、おでん、サラダとどんな料理にも使える万能食材です。'),
(83,'ko','게맛 어묵 (크랩 스틱)','탄력 있는 식감과 풍부한 게맛. 훠궈·오뎅·샐러드 등 어떤 요리에도 사용할 수 있는 만능 식재료입니다.'),
(83,'fr','Bâtonnets de surimi (saveur crabe)','Texture élastique et saveur de crabe généreuse. Polyvalents pour fondues, oden et salades.'),
(83,'de','Surimi-Stäbchen (Krabbengeschmack)','Elastische Textur und reichhaltiger Krabbengeschmack. Vielseitig für Hotpot, Oden und Salate.'),
(83,'nl','Surimi Sticks (Krabsmaak)','Elastische textuur en rijke krabsmaak. Veelzijdig voor hotpot, oden en salades.'),

-- Product 84: 蝦仁年糕 / Shrimp Rice Cake
(84,'ja','エビ入り年糕（ニャオガオ）','プリプリのエビと柔らかな年糕を旨味ソースで和えた点心。温めるだけで楽しめる食べやすい一品です。'),
(84,'ko','새우 떡볶이 (새우 찹쌀떡)','탱탱한 새우와 부드러운 떡을 감칠맛 소스에 버무린 간식. 데우기만 해도 즐길 수 있는 먹기 편한 요리입니다.'),
(84,'fr','Gâteau de riz aux crevettes','Crevettes croquantes et gâteaux de riz tendres en sauce savoureuse. Réchauffez et dégustez — en-cas facile à tout moment.'),
(84,'de','Reiskuchen mit Garnelen','Knackige Garnelen und zarte Reiskuchen in würziger Sauce. Aufwärmen und genießen — einfacher Snack zu jeder Zeit.'),
(84,'nl','Rijstcake met Garnalen','Knapperige garnalen en zachte rijstcakes in hartige saus. Opwarmen en genieten — makkelijke snack op elk moment.');

INSERT OR REPLACE INTO product_translations (product_id, locale, name, description) VALUES

-- Product 85: 冷凍青花菜 / Frozen Broccoli
(85,'ja','冷凍ブロッコリー','新鮮なブロッコリーを急速冷凍。栄養と色を保ち、どんな料理にも手軽に加えられる健康的な食材です。'),
(85,'ko','냉동 브로콜리','신선한 브로콜리를 급속 냉동. 영양과 색을 보존하여, 어떤 요리에도 손쉽게 추가할 수 있는 건강한 식재료입니다.'),
(85,'fr','Brocoli surgelé','Brocoli frais surgelé rapidement. Nutrition et couleur préservées — ajoutez-le facilement à n''importe quel plat.'),
(85,'de','Tiefkühl-Brokkoli','Frischer Brokkoli schockgefroren. Nährstoffe und Farbe bewahrt — einfach zu jedem Gericht hinzufügen.'),
(85,'nl','Diepvries Broccoli','Verse broccoli snel ingevroren. Voedingsstoffen en kleur bewaard — gemakkelijk aan elk gerecht toe te voegen.'),

-- Product 86: 活凍小干貝 / Live-Frozen Bay Scallop
(86,'ja','活凍小帆立貝','生きたまま急速冷凍した小帆立貝。天然の甘みをそのまま閉じ込め、炒め物や粥に重宝します。'),
(86,'ko','활동 냉동 소형 가리비','살아있는 채로 급속 냉동한 소형 가리비. 천연 단맛을 그대로 담아, 볶음이나 죽에 매우 유용합니다.'),
(86,'fr','Petites coquilles surgelées vivantes','Petites coquilles surgelées vivantes pour une douceur naturelle maximale. Idéales pour sautés et congées.'),
(86,'de','Lebend tiefgefrorene kleine Jakobsmuscheln','Klein Jakobsmuscheln, lebendig schockgefroren für maximale natürliche Süße. Ideal für Pfannengerichte und Congee.'),
(86,'nl','Levend Ingevroren Kleine Sint-Jakobsschelpen','Kleine sint-jakobsschelpen, levend snel ingevroren voor maximale natuurlijke zoetheid. Ideaal voor roerbak en congee.'),

-- Product 87: 海鮮調理包 / Seafood Meal Kit
(87,'ja','海鮮調理パック','厳選の複数海鮮と専用ソース付きのミールキット。加熱するだけで本格的な海鮮料理がすぐに完成します。'),
(87,'ko','해산물 조리 팩','엄선된 다양한 해산물과 전용 소스가 포함된 밀 키트. 가열하기만 하면 본격적인 해산물 요리가 바로 완성됩니다.'),
(87,'fr','Kit repas aux fruits de mer','Fruits de mer sélectionnés et sauce maison inclus. Réchauffez et servez — un plat gastronomique en quelques minutes.'),
(87,'de','Meeresfrüchte Mahlzeit-Kit','Ausgewählte Meeresfrüchte und Haushaltssauce enthalten. Aufwärmen und servieren — ein gastronomisches Gericht in Minuten.'),
(87,'nl','Zeevruchten Maaltijdkit','Geselecteerde zeevruchten en huissaus inbegrepen. Opwarmen en serveren — een gastronomisch gerecht in minuten.'),

-- Product 88: 炸海鮮點心 / Fried Seafood Snacks
(88,'ja','揚げ海鮮スナック','様々な海鮮を使った揚げ物の詰め合わせ。外はサクサク中はジューシー。エアフライヤーでも美味しく作れます。'),
(88,'ko','튀김 해산물 스낵','다양한 해산물을 사용한 튀김 모듬. 겉은 바삭하고 속은 촉촉합니다. 에어프라이어로도 맛있게 만들 수 있습니다.'),
(88,'fr','Beignets de fruits de mer assortis','Assortiment de beignets de fruits de mer — croustillants dehors, juteux dedans. Friteuse à air ou bain de friture.'),
(88,'de','Sortiertes frittiertes Meeresfrüchte-Snack','Sortiment an frittiertem Meeresfrüchte-Snack — außen knusprig, innen saftig. In der Heißluftfriteuse oder Fritteuse.'),
(88,'nl','Gesorteerde Gefrituurde Zeevruchtsnacks','Assortiment gefrituurde zeevruchtsnacks — buiten knapperig, binnen sappig. In de airfryer of frituze.'),

-- Product 89: 火鍋料（綜合）/ Hot Pot Ingredients Mix
(89,'ja','総合鍋の具材セット','魚板、カニカマ、えび餃子、花枝丸など多彩な鍋の具材セット。一袋で豪華な鍋料理が楽しめます。'),
(89,'ko','종합 훠궈 재료 세트','어묵·게맛 어묵·새우 만두·꽃오징어볼 등 다양한 전골 재료 세트. 한 봉지로 푸짐한 전골 요리를 즐길 수 있습니다.'),
(89,'fr','Assortiment de garnitures pour fondue','Galettes de poisson, surimi, raviolis aux crevettes, boulettes de seiche et plus. Un sachet pour une fondue généreuse.'),
(89,'de','Sortiment Hotpot-Einlagen','Fischkuchen, Surimi, Garnelenknödel, Tintenfischbällchen und mehr. Ein Beutel für einen üppigen Hotpot.'),
(89,'nl','Gesorteerde Hotpot Ingrediënten','Viskoeken, surimi, garnalenknödels, inktvisballetjes en meer. Eén zak voor een overvloedige hotpot.'),

-- Product 90: 鮑魚切片 / Sliced Abalone
(90,'ja','乾燥鮑スライス','均一に薄切りにした乾燥鮑。伝統工芸の製法で仕上げた濃厚な旨味は、粥や炒め物を格段に引き上げます。'),
(90,'ko','건조 전복 슬라이스','균일하게 얇게 슬라이스한 건조 전복. 전통 공예 제법으로 완성한 진한 감칠맛은 죽이나 볶음을 한층 높여줍니다.'),
(90,'fr','Tranches d''ormeau séché','Tranches d''ormeau séché uniformément. Umami intense par artisanat traditionnel — sublime congées et sautés.'),
(90,'de','Getrocknete Abalone-Scheiben','Gleichmäßig geschnittene getrocknete Abalone. Intensives Umami nach traditionellem Handwerk — veredelt Congee und Pfannengerichte.'),
(90,'nl','Gedroogde Abalone Plakken','Gelijkmatig gesneden gedroogde abalone. Intense umami door traditioneel vakmanschap — verheft congee en roerbakgerechten.'),

-- Product 91: 海鮮沙拉 / Seafood Salad
(91,'ja','シーフードサラダ','蟹肉、エビ、イカを爽やかなドレッシングで和えたチルド前菜。開袋即食で、前菜や軽いランチに最適です。'),
(91,'ko','해산물 샐러드','게살·새우·오징어를 상쾌한 드레싱에 버무린 냉장 전채. 개봉 즉시 먹을 수 있어, 전채나 가벼운 점심에 최적입니다.'),
(91,'fr','Salade de fruits de mer','Salade réfrigérée de crabe, crevettes et calmar en vinaigrette légère. Prête à déguster — idéale en entrée ou déjeuner léger.'),
(91,'de','Meeresfrüchte-Salat','Gekühlter Salat aus Krabbe, Garnelen und Tintenfisch mit leichtem Dressing. Sofort servierfertig — ideal als Vorspeise oder leichtes Mittagessen.'),
(91,'nl','Zeevruchtensalade','Gekoelde salade van krab, garnalen en inktvis met licht dressing. Direct serveerklaar — ideaal als voorgerecht of lichte lunch.'),

-- Product 92: 桂花人蔘燉品 / Osmanthus Ginseng Tonic Soup
(92,'ja','桂花人参燉品（滋養スープ）','韓国高麗人参と桂花をゆっくり煮込んだ滋養スープ。甘く温かく、秋冬の体調管理に最適な健康飲料です。'),
(92,'ko','계화 인삼 탕 (자양 수프)','한국 고려인삼과 계화를 천천히 끓인 자양 수프. 달콤하고 따뜻하며, 가을겨울 건강 관리에 최적인 건강음료입니다.'),
(92,'fr','Bouillon tonique ginseng et osmanthus','Ginseng coréen mijoté lentement avec des fleurs d''osmanthus. Doux, réchauffant — idéal pour la vitalité en automne-hiver.'),
(92,'de','Osmanthus-Ginseng-Tonic-Suppe','Koreanischer Ginseng langsam mit Osmanthusblüten geköchelt. Süß, wärmend — ideal für Vitalität in Herbst und Winter.'),
(92,'nl','Osmanthus Ginseng Tonische Soep','Koreaanse ginseng langzaam gestoofd met osmanthusbloemen. Zoet, verwarmend — ideaal voor vitaliteit in herfst en winter.'),

-- Product 93: 海鮮風味香腸 / Seafood-Flavor Sausage
(93,'ja','海鮮風味ソーセージ','海鮮エキスを注入したユニークなソーセージ。ほのかな磯の香りと食べ応えのある食感が特徴です。焼いてもよし炒めてもよし。'),
(93,'ko','해산물 풍미 소시지','해산물 엑기스를 주입한 독특한 소시지. 은은한 바다향과 먹음직스러운 식감이 특징입니다. 굽거나 볶아도 좋습니다.'),
(93,'fr','Saucisse aux arômes de fruits de mer','Saucisse insolite infusée à l''essence de fruits de mer. Légère note marine et texture généreuse — grillée ou sautée.'),
(93,'de','Meeresfrüchte-Aroma Wurst','Einzigartige Wurst, mit Meeresfrüchte-Essenz infusiert. Leichte Meereesnote und herzhafte Textur — gegrillt oder gebraten.'),
(93,'nl','Zeevruchten Smaak Worst','Unieke worst geïnfuseerd met zeevruchtessence. Lichte zeetoets en hartelijke textuur — gegrild of gebakken.'),

-- Product 94: 白蝦（帶頭）/ Whole White Shrimp with Head
(94,'ja','白エビ（頭付き）','頭付き白エビを急速冷凍。エビ頭の旨味エキスがそのまま残り、塩焼き・蒸し・ニンニク炒めで最大限に楽しめます。'),
(94,'ko','흰 새우 (머리 포함)','머리 포함 흰 새우를 급속 냉동. 새우 머리의 감칠맛 엑기스가 그대로 남아, 소금구이·찜·마늘 볶음으로 최대한 즐길 수 있습니다.'),
(94,'fr','Crevettes blanches entières avec tête','Crevettes blanches entières avec tête, surgelées rapidement. L''umami de la tête préservé — grillées au sel, à la vapeur ou à l''ail.'),
(94,'de','Ganze Weiße Garnelen mit Kopf','Ganze weiße Garnelen mit Kopf, schockgefroren. Umami aus dem Kopf bewahrt — Salzgegrillt, gedämpft oder mit Knoblauch.'),
(94,'nl','Hele Witte Garnalen Met Kop','Hele witte garnalen met kop, snel ingevroren. Umami van de kop bewaard — gegrild met zout, gestoomd of met knoflook.'),

-- Product 95: 大比目魚（整尾）/ Whole Halibut
(95,'ja','大型カレイ（丸ごと1尾）','太平洋産の大型カレイ丸ごと。雪のように白く柔らかな身は清蒸・ソテー・紅燒と様々な料理法に対応できます。'),
(95,'ko','대형 가자미 (통 1마리)','태평양산 대형 가자미 통째로. 눈처럼 하얗고 부드러운 살은 청증·소테·홍소 등 다양한 조리법에 대응할 수 있습니다.'),
(95,'fr','Flétan entier (grand)','Grand flétan du Pacifique entier. Chair blanche et douce comme neige — vapeur cantonaise, sauté ou braisé rouge.'),
(95,'de','Ganzer großer Heilbutt','Ganzer großer Pazifik-Heilbutt. Schneeweißes, zartes Fleisch — kantonesisch gedämpft, gebraten oder rot geschmort.'),
(95,'nl','Hele Grote Heilbot','Hele grote Pacifische heilbot. Sneeuwwit, zacht vlees — Kantonees gestoomd, gebakken of rood gesmoord.'),

-- Product 96: 大比目魚頭 / Halibut Head
(96,'ja','大型カレイの頭','コラーゲン豊富な大型カレイの頭。紅燒や蒸し物に使うと、とろけるような食感とコラーゲンたっぷりのスープが楽しめます。'),
(96,'ko','대형 가자미 머리','콜라겐이 풍부한 대형 가자미 머리. 홍소나 찜에 사용하면 녹아드는 식감과 콜라겐이 풍부한 국물을 즐길 수 있습니다.'),
(96,'fr','Tête de grand flétan','Tête de grand flétan riche en collagène. Braisée rouge ou cuite à la vapeur — texture fondante et bouillon riche en collagène.'),
(96,'de','Großer Heilbutt-Kopf','Kollagenreicher Kopf des großen Heilbutts. Rot geschmort oder gedämpft — schmelzende Textur und kollagenreiche Brühe.'),
(96,'nl','Grote Heilbot Hoofd','Collageen-rijk hoofd van de grote heilbot. Roodgesmoord of gestoomd — smeltende textuur en collageen-rijke bouillon.'),

-- Product 97: 獅爪干貝（特大）/ Giant Lion's Paw Scallop
(97,'ja','獅子の爪干し貝柱（特大）','希少な特大型獅子の爪干し貝柱。伝統的な天日乾燥法で仕上げた濃密な旨味は、他の干貝とは一線を画す逸品です。'),
(97,'ko','사자발 건조 가리비 (특대)','희귀한 특대형 사자발 건조 가리비. 전통 천일 건조법으로 완성한 진밀한 감칠맛은 다른 건조 가리비와는 차원이 다른 최고의 상품입니다.'),
(97,'fr','Noix de Saint-Jacques pattes de lion géantes (extra-grandes)','Pétoncles géants rares séchés au soleil selon la méthode traditionnelle. Un umami dense et profond qui surpasse tous les autres pétoncles séchés.'),
(97,'de','Riesige Löwentatzen-Jakobsmuscheln (extragroß)','Seltene extra-große Löwentatzen-Jakobsmuscheln nach traditioneller Methode sonnengetrocknet. Dichtes, tiefes Umami — übertrifft alle anderen getrockneten Jakobsmuscheln.'),
(97,'nl','Reuze Leeuwenpoot Sint-Jakobsschelpen (extra groot)','Zeldzame extra-grote leeuwenpoot sint-jakobsschelpen op traditionele wijze zongedroogd. Dichte, diepe umami — overtreft alle andere gedroogde sint-jakobsschelpen.'),

-- Product 98: 蛤蜊肉（去殼）/ Shelled Clam Meat
(98,'ja','貝柱むき身（殻なし）','殻をむいたアサリの身を急速冷凍。下処理不要で炒め物、スープ、パスタ、粥にすぐ使えます。'),
(98,'ko','조개살 (껍질 제거)','껍질을 벗긴 조개살을 급속 냉동. 손질 불필요로 볶음·수프·파스타·죽에 바로 사용할 수 있습니다.'),
(98,'fr','Chair de palourde décortiquée','Chair de palourde décortiquée et surgelée rapidement. Sans préparation — directement dans sautés, soupes, pâtes ou congées.'),
(98,'de','Ausgelöste Muschelfleisch','Ausgelöstes Muschelfleisch, schockgefroren. Keine Vorbereitung — direkt in Pfannengerichte, Suppen, Pasta oder Congee.'),
(98,'nl','Uitgehald Mosselenvlees','Uitgehald mosselenvlees, snel ingevroren. Geen voorbereiding — direct in roerbak, soepen, pasta of congee.'),

-- Product 99: 熟凍干貝（小）/ Cooked Frozen Scallop Small
(99,'ja','熟凍ホタテ（小）','小ぶりのホタテを熟凍加工。解凍後そのまま食べられる、炒飯や寿司に便利な使いやすいサイズです。'),
(99,'ko','숙동 가리비 (소)','소형 가리비를 숙동 가공. 해동 후 바로 먹을 수 있어, 볶음밥이나 스시에 편리한 사용하기 좋은 크기입니다.'),
(99,'fr','Petites noix de Saint-Jacques cuites surgelées','Petites noix de Saint-Jacques cuites et surgelées. Décongeler et déguster directement — taille idéale pour riz sauté et sushis.'),
(99,'de','Kleine gekochte Tiefkühl-Jakobsmuscheln','Kleine Jakobsmuscheln, gegart und tiefgekühlt. Auftauen und direkt genießen — ideale Größe für Gebratenen Reis und Sushi.'),
(99,'nl','Kleine Gekookte Diepvries Sint-Jakobsschelpen','Kleine sint-jakobsschelpen, gekookt en ingevroren. Ontdooien en direct genieten — ideale maat voor gebakken rijst en sushi.'),

-- Product 100: 鮭魚鰭邊肉 / Salmon Engawa (Fin Meat)
(100,'ja','サーモン縁側（鰭の脂身）','サーモンの背鰭に沿った希少な脂身部位。豊かなマーブリングとバター風味が圧倒的で、寿司マニア必食の夢の食材です。'),
(100,'ko','연어 엔가와 (지느러미 고기)','연어 등지느러미를 따라 있는 희귀한 지방 부위. 풍부한 마블링과 버터 풍미가 압도적이며, 스시 마니아 필수 시식의 꿈의 식재료입니다.'),
(100,'fr','Engawa de saumon (chair de nageoire)','La précieuse bande grasse le long de la nageoire dorsale du saumon. Persillage abondant et arôme beurré incomparable — incontournable pour les amateurs de sushis.'),
(100,'de','Lachs Engawa (Flossenfleisch)','Das kostbare fettreiche Fleisch entlang der Rückenflosse des Lachses. Reichhaltiges Marmorierung und butterartiges Aroma — ein Muss für Sushi-Liebhaber.'),
(100,'nl','Zalm Engawa (Vinvlees)','Het kostbare vetrijke vlees langs de rugvin van de zalm. Rijke marmering en boterachtigen aroma — een must voor sushi-liefhebbers.');
