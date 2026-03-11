import { useState, useEffect, useRef, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n, useT } from '../i18n/context';
import { isCJK } from '../i18n/translations';
import { getProductSynopsis } from '../lib/product-synopsis';
import type { Product } from '../lib/api';

/** Localize unit strings like "600g/pack" → "600g/包" */
function localizeUnit(unit: string, t: (key: string) => string): string {
  const slash = unit.lastIndexOf('/');
  if (slash === -1) return unit;
  const weight = unit.slice(0, slash);
  const container = unit.slice(slash + 1);
  const localized = t(`unit.${container}`);
  // If translation returns the key itself, it's missing — fall back to original
  if (localized === `unit.${container}`) return unit;
  return `${weight}/${localized}`;
}

interface Props {
  product: Product;
  highlighted?: boolean;
  highlightReason?: string | null;
  onClick?: () => void;
  index?: number;
  featured?: boolean;
  persona?: string;
}

const categoryEmoji: Record<string, string> = {
  shrimp: '🦐',
  fish: '🐟',
  shellfish: '🦪',
  prepared: '🍽',
};

const DENSE_PERSONAS = ['wholesale-distributor', 'restaurant-operator'];

const CROSSFADE_INTERVAL = 4000; // ms between image transitions

/** Description text that scrolls slowly on hover when content overflows 4 lines */
function DescWithScroll({ text }: { text: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (outer && inner) {
      const isOverflowing = inner.scrollHeight > outer.clientHeight + 2;
      setOverflows(isOverflowing);
      if (isOverflowing) {
        const dist = inner.scrollHeight - outer.clientHeight;
        outer.style.setProperty('--scroll-dist', `-${dist}px`);
      }
    }
  }, [text]);

  return (
    <div ref={outerRef} className={`product-card-desc${overflows ? ' product-card-desc-overflow' : ''}`}>
      <span ref={innerRef} className="product-card-desc-inner">{text}</span>
    </div>
  );
}

function useCrossfade(images: string[], isVisible: boolean) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    if (!isVisible || images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, CROSSFADE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isVisible, images.length]);

  return activeIndex;
}

export default function ProductCard({ product, highlighted, highlightReason, onClick, index = 0, featured, persona = 'family-shopper' }: Props) {
  const [primaryError, setPrimaryError] = useState(false);
  const [failedIndices, setFailedIndices] = useState<Set<number>>(() => new Set());
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { locale } = useI18n();
  const t = useT();
  const delayClass = `reveal-delay-${Math.min((index % 6) + 1, 6)}`;
  const cjk = isCJK(locale);
  const isDense = DENSE_PERSONAS.includes(persona);
  const allImages = product.images && product.images.length > 0 ? product.images : (product.image_url ? [product.image_url] : []);
  const images = allImages.filter((_, i) => !failedIndices.has(i));
  const activeImageIndex = useCrossfade(images, isVisible);

  const handleImgError = useCallback((originalIndex: number) => {
    if (originalIndex === 0) setPrimaryError(true);
    setFailedIndices(prev => { const next = new Set(prev); next.add(originalIndex); return next; });
  }, []);

  const primaryName = product.name;
  const secondaryName = product.name_secondary;
  const synopsis = getProductSynopsis(product.id, persona, locale, product.description);
  const localizedUnit = localizeUnit(product.unit, t);

  // Dense layout: compact horizontal card
  if (isDense) {
    return (
      <div
        ref={ref}
        className={`product-card-wrapper reveal ${isVisible ? 'visible' : ''} ${delayClass}`}
      >
        <div
          className={`product-card product-card-compact${highlighted ? ' highlighted' : ''}`}
          onClick={onClick}
          id={`product-${product.id}`}
        >
          <div className="product-card-compact-img">
            {!primaryError && images.length > 0 ? (
              allImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={primaryName}
                  loading="lazy"
                  className={`crossfade-img ${!failedIndices.has(i) && images[activeImageIndex] === src ? 'active' : ''}`}
                  onError={() => handleImgError(i)}
                  style={failedIndices.has(i) ? { display: 'none' } : undefined}
                />
              ))
            ) : (
              <span className="fallback-emoji-sm">{categoryEmoji[product.category] || '🐟'}</span>
            )}
          </div>
          <div className="product-card-compact-body">
            <div className="product-card-compact-top">
              <div className="product-card-compact-name">{primaryName}</div>
              <div className="product-card-compact-price">NT${product.price}<span className="product-card-unit"> / {localizedUnit}</span></div>
            </div>
            <div className="product-card-compact-synopsis">{synopsis}</div>
            <div className="product-card-compact-meta">
              <span className="product-card-compact-brand">{product.brand}</span>
              <span className="product-card-compact-cat">{product.category}</span>
              {product.features.length > 0 && (
                <span className="product-card-compact-feat">{t(`tag.${product.features[0]}`)}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`product-card-wrapper reveal ${isVisible ? 'visible' : ''} ${delayClass}`}
    >
      {highlighted && highlightReason && (
        <div className="recommendation-badge">{highlightReason}</div>
      )}
      <div
        className={`product-card${highlighted ? ' highlighted' : ''}${featured ? ' featured' : ''}`}
        onClick={onClick}
        id={`product-${product.id}`}
      >
        <div className="product-card-image">
          {!primaryError && images.length > 0 ? (
            <>
              {allImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={primaryName}
                  loading="lazy"
                  className={`crossfade-img ${!failedIndices.has(i) && images[activeImageIndex] === src ? 'active' : ''}`}
                  onError={() => handleImgError(i)}
                  style={failedIndices.has(i) ? { display: 'none' } : undefined}
                />
              ))}
              {images.length > 1 && (
                <span className="product-card-multi-img" aria-label="Multiple images">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <rect x="3" y="3" width="11" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="6" y="6" width="11" height="11" rx="2" />
                  </svg>
                </span>
              )}
              <div className="product-card-overlay">
                <span className="product-card-overlay-text">{t('card.viewDetails')}</span>
              </div>
            </>
          ) : (
            <div className="product-card-image-fallback">
              <span className="fallback-emoji">{categoryEmoji[product.category] || '🐟'}</span>
              <span className="fallback-name">{product.name}</span>
            </div>
          )}
        </div>
        <div className="product-card-body">
          <div className="product-card-brand">{product.brand}</div>
          {product.is_featured && <span className="product-card-badge">{t('card.signature')}</span>}
          <div className="product-card-name">{primaryName}</div>
          <div className="product-card-name-en">{secondaryName}</div>
          <DescWithScroll text={synopsis} />
          {persona === 'gift-festival' && product.price >= 600 && (
            <div className="product-card-gift-tag">
              {cjk ? '🎁 適合送禮' : '🎁 Great for gifting'}
            </div>
          )}
          <div className="product-card-footer">
            <div>
              <span className="product-card-price">NT${product.price}</span>
              <span className="product-card-unit"> / {localizedUnit}</span>
            </div>
          </div>
          {product.features.length > 0 && (
            <div className="product-features">
              {product.features.slice(0, persona === 'premium-gourmet' ? 4 : 3).map((f, i) => (
                <span key={i} className="product-feature-tag">{t(`tag.${f}`)}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
