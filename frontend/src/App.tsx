import { useState, useCallback, useEffect, useMemo } from 'react';
import Header from './components/Header';
import ContentPane from './components/ContentPane';
import ChatPane from './components/ChatPane';
import { ContentSyncContext, type ContentState } from './hooks/useContentSync';
import { I18nContext, createT } from './i18n/context';
import type { Locale } from './i18n/translations';
import { fetchCustomers, fetchProducts, type Product, type CustomerSummary } from './lib/api';

/** Parse /product/:id from a URL pathname. Returns product ID or null. */
function parseProductRoute(pathname: string): number | null {
  const m = pathname.match(/^\/product\/(\d+)$/);
  return m ? Number(m[1]) : null;
}

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
    const newPath = `/product/${productId}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
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
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    setContentState((prev) => ({
      ...prev,
      highlightedProductId: null,
      highlightReason: null,
    }));
  }, []);

  // Navigate to a product: update URL + highlight + send chat message
  const navigateToProduct = useCallback((productId: number, productName?: string, productNameSecondary?: string) => {
    const newPath = `/product/${productId}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
    setContentState((prev) => ({
      ...prev,
      highlightedProductId: productId,
      highlightReason: null,
    }));
    if (productName) {
      const msg = t('chat.productAsk')
        .replace('{name}', productName)
        .replace('{name_secondary}', productNameSecondary || '');
      setPendingMessage(msg);
    }
  }, [t]);

  const handleProductClick = useCallback((product: Product) => {
    navigateToProduct(product.id, product.name, product.name_secondary);
  }, [navigateToProduct]);

  const handlePendingConsumed = useCallback(() => {
    setPendingMessage(null);
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const onPopState = () => {
      const productId = parseProductRoute(window.location.pathname);
      if (productId) {
        // Navigated back to a product URL — highlight it (no chat message on back/forward)
        setContentState((prev) => ({
          ...prev,
          highlightedProductId: productId,
          highlightReason: null,
        }));
      } else {
        // Navigated back to root — clear highlight
        setContentState((prev) => ({
          ...prev,
          highlightedProductId: null,
          highlightReason: null,
        }));
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // On initial load, if URL is /product/:id, trigger product selection
  const [initialRouteHandled, setInitialRouteHandled] = useState(false);
  useEffect(() => {
    if (initialRouteHandled || !currentUser) return;
    const productId = parseProductRoute(window.location.pathname);
    if (productId) {
      // We need to fetch the product to get its name for the chat message
      fetchProducts(settings.locale).then((products) => {
        const product = products.find((p) => p.id === productId);
        if (product) {
          navigateToProduct(product.id, product.name, product.name_secondary);
        } else {
          // Product not found in list — still highlight, skip chat message
          setContentState((prev) => ({
            ...prev,
            highlightedProductId: productId,
            highlightReason: null,
          }));
        }
      }).catch(console.error);
    }
    setInitialRouteHandled(true);
  }, [currentUser, initialRouteHandled, settings.locale, navigateToProduct]);

  return (
    <I18nContext.Provider value={i18nValue}>
      <ContentSyncContext.Provider
        value={{ state: contentState, highlightProduct, filterByCategory, clearHighlight, navigateToProduct }}
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
