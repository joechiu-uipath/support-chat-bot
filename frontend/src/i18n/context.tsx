import { createContext, useContext } from 'react';
import translations, { type Locale } from './translations';

interface I18nContextValue {
  locale: Locale;
  t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextValue>({
  locale: 'zh-TW',
  t: (key: string) => key,
});

export function useI18n() {
  return useContext(I18nContext);
}

export function useT() {
  const { t } = useContext(I18nContext);
  return t;
}

export function createT(locale: Locale) {
  const strings = translations[locale] || translations['zh-TW'];
  return (key: string): string => strings[key] ?? (key.startsWith('tag.') ? key.slice(4) : key);
}
