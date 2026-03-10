import { useState, useCallback, useEffect, useMemo } from 'react';
import Header from './components/Header';
import ContentPane from './components/ContentPane';
import ChatPane from './components/ChatPane';
import { ContentSyncContext, type ContentState } from './hooks/useContentSync';
import { I18nContext, createT } from './i18n/context';
import type { Locale } from './i18n/translations';
import { fetchCustomers, type Product, type CustomerSummary } from './lib/api';

interface UserSettings {
  theme: 'dark' | 'light';
  locale: Locale;
}

const DEFAULT_SETTINGS: UserSettings = { theme: 'dark', locale: 'zh-TW' };
const VALID_LOCALES = ['zh-TW', 'en', 'ja', 'ko', 'fr', 'de', 'nl'];

function loadUserSettings(userId: number): UserSettings {
  try {
    const raw = localStorage.getItem(`yens-user-${userId}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        theme: parsed.theme === 'light' ? 'light' : 'dark',
        locale: VALID_LOCALES.includes(parsed.locale) ? parsed.locale : 'zh-TW',
      };
    }
  } catch { /* ignore */ }
  return { ...DEFAULT_SETTINGS };
}

function saveUserSettings(userId: number, settings: UserSettings) {
  localStorage.setItem(`yens-user-${userId}`, JSON.stringify(settings));
}

export default function App() {
  const [customers, setCustomers] = useState<CustomerSummary[]>([]);
  const [currentUser, setCurrentUser] = useState<CustomerSummary | null>(null);
  const [settings, setSettings] = useState<UserSettings>(DEFAULT_SETTINGS);

  const [contentState, setContentState] = useState<ContentState>({
    highlightedProductId: null,
    highlightReason: null,
    filterCategory: null,
  });
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  // Load customers on mount
  useEffect(() => {
    fetchCustomers().then((list) => {
      setCustomers(list);
      if (list.length > 0) {
        const lastUserId = localStorage.getItem('yens-last-user');
        const restored = lastUserId ? list.find((c) => c.id === Number(lastUserId)) : null;
        const user = restored || list[0];
        setCurrentUser(user);
        setSettings(loadUserSettings(user.id));
      }
    }).catch(console.error);
  }, []);

  // Apply theme + locale to DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.documentElement.setAttribute('data-locale', settings.locale);
  }, [settings.theme, settings.locale]);

  // Persist settings when they change
  useEffect(() => {
    if (currentUser) {
      saveUserSettings(currentUser.id, settings);
      localStorage.setItem('yens-last-user', String(currentUser.id));
    }
  }, [currentUser, settings]);

  const handleThemeChange = useCallback((theme: 'dark' | 'light') => {
    setSettings((prev) => ({ ...prev, theme }));
  }, []);

  const handleLocaleChange = useCallback((locale: Locale) => {
    setSettings((prev) => ({ ...prev, locale }));
  }, []);

  const handleUserChange = useCallback((userId: number) => {
    const user = customers.find((c) => c.id === userId);
    if (user) {
      setCurrentUser(user);
      setSettings(loadUserSettings(user.id));
    }
  }, [customers]);

  const t = useMemo(() => createT(settings.locale), [settings.locale]);
  const i18nValue = useMemo(() => ({ locale: settings.locale, t }), [settings.locale, t]);

  const highlightProduct = useCallback((productId: number, reason: string) => {
    setContentState((prev) => ({
      ...prev,
      highlightedProductId: productId,
      highlightReason: reason,
    }));
  }, []);

  const filterByCategory = useCallback((category: string | null) => {
    setContentState((prev) => ({ ...prev, filterCategory: category }));
  }, []);

  const clearHighlight = useCallback(() => {
    setContentState((prev) => ({
      ...prev,
      highlightedProductId: null,
      highlightReason: null,
    }));
  }, []);

  const handleProductClick = useCallback((product: Product) => {
    const msg = t('chat.productAsk')
      .replace('{name}', product.name)
      .replace('{name_secondary}', product.name_secondary);
    setPendingMessage(msg);
  }, [t]);

  const handlePendingConsumed = useCallback(() => {
    setPendingMessage(null);
  }, []);

  return (
    <I18nContext.Provider value={i18nValue}>
      <ContentSyncContext.Provider
        value={{ state: contentState, highlightProduct, filterByCategory, clearHighlight }}
      >
        <div className="app">
          <Header
            theme={settings.theme}
            onThemeChange={handleThemeChange}
            locale={settings.locale}
            onLocaleChange={handleLocaleChange}
            currentUser={currentUser}
            customers={customers}
            onUserChange={handleUserChange}
            persona={currentUser?.persona || 'family-shopper'}
          />
          <div className="main">
            <ContentPane onProductClick={handleProductClick} persona={currentUser?.persona || 'family-shopper'} />
            <ChatPane
              key={`${currentUser?.id ?? 0}-${settings.locale}`}
              pendingMessage={pendingMessage}
              onPendingConsumed={handlePendingConsumed}
              currentUser={currentUser}
            />
          </div>
        </div>
      </ContentSyncContext.Provider>
    </I18nContext.Provider>
  );
}
