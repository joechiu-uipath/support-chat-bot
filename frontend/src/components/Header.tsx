import { useState, useRef, useEffect } from 'react';
import { useT, useI18n } from '../i18n/context';
import { localeNames, localeList, taglines, type Locale } from '../i18n/translations';
import { personaNames } from '../lib/personas';
import { getPersonaTaglines } from '../lib/persona-copy';
import type { CustomerSummary } from '../lib/api';

interface Props {
  theme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  currentUser: CustomerSummary | null;
  customers: CustomerSummary[];
  onUserChange: (userId: number) => void;
  persona: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return parts[0][0] + parts[1][0];
  return name.slice(0, 2);
}

function useRotatingTagline(persona: string) {
  const { locale } = useI18n();
  const defaultLines = taglines[locale];
  const lines = getPersonaTaglines(persona, locale, defaultLines);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setIndex(0);
    setFading(false);
  }, [locale, persona]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % lines.length);
        setFading(false);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, [lines.length]);

  return { text: lines[index], fading };
}

export default function Header({ theme, onThemeChange, locale, onLocaleChange, currentUser, customers, onUserChange, persona }: Props) {
  const t = useT();
  const [showSettings, setShowSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const { text: taglineText, fading: taglineFading } = useRotatingTagline(persona);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setShowSettings(false);
      }
    }
    if (showSettings) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showSettings]);

  function getPersonaLabel(customer: CustomerSummary): string {
    const pName = personaNames[customer.persona]?.[locale] || customer.persona;
    return `${customer.name} (${pName})`;
  }

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <img src="/logo-yens.png" alt="YENS 元家企業" className="header-logo-img" />
          <span className="header-logo-zh">元家企業</span>
          YENS
        </div>
        <div className="header-divider" />
        <div className={`header-subtitle ${taglineFading ? 'tagline-fade-out' : 'tagline-fade-in'}`}>
          {taglineText}
        </div>
      </div>
      <div className="header-right">
        {/* User selector dropdown */}
        <select
          className="header-user-select"
          value={currentUser?.id ?? ''}
          onChange={(e) => onUserChange(Number(e.target.value))}
        >
          {customers.map((c) => (
            <option key={c.id} value={c.id}>{getPersonaLabel(c)}</option>
          ))}
        </select>

        {/* User avatar + settings */}
        <div className="settings-container" ref={settingsRef}>
          <button
            className="user-avatar-btn"
            onClick={() => setShowSettings(!showSettings)}
            aria-label="Settings"
          >
            {currentUser ? (
              <span className="user-avatar-initials">{getInitials(currentUser.name)}</span>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
              </svg>
            )}
          </button>
          {showSettings && (
            <div className="settings-dropdown">
              {/* User profile */}
              {currentUser && (
                <div className="settings-section settings-profile">
                  <div className="settings-profile-avatar">
                    {getInitials(currentUser.name)}
                  </div>
                  <div className="settings-profile-info">
                    <div className="settings-profile-name">{currentUser.name}</div>
                    <div className="settings-profile-email">{currentUser.email}</div>
                    <div className="settings-profile-meta">
                      {personaNames[currentUser.persona]?.[locale] || currentUser.persona}
                      {currentUser.city && <> · {currentUser.city}</>}
                    </div>
                  </div>
                </div>
              )}

              {/* Appearance */}
              <div className="settings-section">
                <div className="settings-title">{t('settings.appearance')}</div>
                <div className="settings-options">
                  <button
                    className={`settings-option ${theme === 'dark' ? 'active' : ''}`}
                    onClick={() => { onThemeChange('dark'); }}
                  >
                    <span className="settings-option-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                    </span>
                    <span>{t('settings.dark')}</span>
                  </button>
                  <button
                    className={`settings-option ${theme === 'light' ? 'active' : ''}`}
                    onClick={() => { onThemeChange('light'); }}
                  >
                    <span className="settings-option-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                    </span>
                    <span>{t('settings.light')}</span>
                  </button>
                </div>
              </div>

              {/* Language */}
              <div className="settings-section">
                <div className="settings-title">{t('settings.language')}</div>
                <select
                  className="settings-lang-select"
                  value={locale}
                  onChange={(e) => { onLocaleChange(e.target.value as Locale); }}
                >
                  {localeList.map((loc) => (
                    <option key={loc} value={loc}>{localeNames[loc]}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
