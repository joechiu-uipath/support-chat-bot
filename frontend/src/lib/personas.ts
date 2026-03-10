import type { Locale } from '../i18n/translations';

export const personaNames: Record<string, Record<Locale, string>> = {
  'premium-gourmet': {
    'zh-TW': '高端美食家',
    en: 'Premium Gourmet',
    ja: 'プレミアム美食家',
    ko: '프리미엄 미식가',
    fr: 'Gourmet Premium',
    de: 'Premium-Feinschmecker',
    nl: 'Premium Fijnproever',
  },
  'family-shopper': {
    'zh-TW': '家庭採購',
    en: 'Family Shopper',
    ja: '家庭購入者',
    ko: '가족 쇼핑객',
    fr: 'Acheteur Familial',
    de: 'Familien-Einkäufer',
    nl: 'Gezinsinkoper',
  },
  'restaurant-operator': {
    'zh-TW': '餐飲業者',
    en: 'Restaurant',
    ja: 'レストラン',
    ko: '레스토랑',
    fr: 'Restaurateur',
    de: 'Restaurant',
    nl: 'Restaurant',
  },
  'wholesale-distributor': {
    'zh-TW': '批發經銷商',
    en: 'Wholesale',
    ja: '卸売業者',
    ko: '도매업자',
    fr: 'Grossiste',
    de: 'Großhändler',
    nl: 'Groothandelaar',
  },
  'gift-festival': {
    'zh-TW': '送禮節慶',
    en: 'Gift & Festival',
    ja: 'ギフト・祝祭',
    ko: '선물·명절',
    fr: 'Cadeaux & Fêtes',
    de: 'Geschenk & Fest',
    nl: 'Cadeau & Feest',
  },
};
