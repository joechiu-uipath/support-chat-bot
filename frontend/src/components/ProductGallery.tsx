import { useEffect, useState, useCallback } from 'react';
import { fetchProducts, type Product } from '../lib/api';
import ProductCard from './ProductCard';
import { useContentSync } from '../hooks/useContentSync';
import { useInfiniteScroll } from '../hooks/useScrollReveal';
import { useI18n, useT } from '../i18n/context';
import { isCJK } from '../i18n/translations';
import { personaHero, personaSections } from '../lib/persona-copy';

interface Props {
  onProductClick: (product: Product) => void;
  persona: string;
}

const PAGE_SIZE = 8;

// High-density personas show more items per page and use compact grid
const DENSE_PERSONAS = ['wholesale-distributor', 'restaurant-operator'];

export default function ProductGallery({ onProductClick, persona }: Props) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const isDense = DENSE_PERSONAS.includes(persona);
  const pageSize = isDense ? 12 : PAGE_SIZE;
  const [displayCount, setDisplayCount] = useState(pageSize);
  const [loadingMore, setLoadingMore] = useState(false);
  const { state } = useContentSync();
  const { locale } = useI18n();
  const t = useT();

  useEffect(() => {
    setLoading(true);
    fetchProducts(locale)
      .then(setAllProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [locale]);

  // Reset display count when persona changes
  useEffect(() => {
    setDisplayCount(isDense ? 12 : PAGE_SIZE);
  }, [persona, isDense]);

  useEffect(() => {
    if (state.highlightedProductId) {
      setDisplayCount(allProducts.length);
      setTimeout(() => {
        const el = document.getElementById(`product-${state.highlightedProductId}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [state.highlightedProductId, allProducts.length]);

  const filtered = state.filterCategory
    ? allProducts.filter((p) => p.category === state.filterCategory)
    : allProducts;

  const featured = filtered.filter((p) => p.is_featured);
  const others = filtered.filter((p) => !p.is_featured);
  const displayedOthers = others.slice(0, displayCount);
  const hasMore = displayCount < others.length;

  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + pageSize, others.length));
      setLoadingMore(false);
    }, 300);
  }, [loadingMore, hasMore, others.length, pageSize]);

  const sentinelRef = useInfiniteScroll(loadMore, hasMore, loadingMore);
  const cjk = isCJK(locale);

  const gridClass = isDense ? 'product-grid product-grid-dense' : 'product-grid';
  const featuredGridClass = isDense ? 'product-grid product-grid-dense' : 'product-grid product-grid-featured';

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        <div className="loading-text">{t('loading.text')}</div>
      </div>
    );
  }

  return (
    <div className={`product-gallery page-enter ${isDense ? 'gallery-dense' : ''}`}>
      {/* Dense personas skip the hero section */}
      {!isDense && (() => {
        const hero = personaHero[persona]?.[locale];
        return (
          <div className="hero-section">
            <div className={`hero-title ${cjk ? 'hero-title-cjk' : 'hero-title-western'}`}>
              <span className="hero-title-accent">{hero?.titleAccent || t('hero.titleAccent')}</span>
              {' '}{hero?.titleRest || t('hero.titleRest')}
            </div>
            <div className="hero-subtitle">{hero?.subtitle || t('hero.subtitle')}</div>
            <span className="hero-line" />
          </div>
        );
      })()}

      {featured.length > 0 && (() => {
        const sec = personaSections[persona]?.[locale];
        const featMain = sec?.featuredMain || t('section.featuredMain');
        const featSub = sec?.featuredSub ?? t('section.featuredSub');
        return <>
          <div className="section-header">
            <span className="section-line" />
            <div className="section-title">
              {cjk && <span className="section-title-zh">{featMain}</span>}
              {!cjk && featMain}
              {featSub && (
                <> {featSub}</>
              )}
            </div>
            <span className="section-line" />
          </div>
          <div className={featuredGridClass}>
            {featured.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                highlighted={state.highlightedProductId === product.id}
                highlightReason={
                  state.highlightedProductId === product.id ? state.highlightReason : null
                }
                onClick={() => onProductClick(product)}
                index={i}
                featured={!isDense}
                persona={persona}
              />
            ))}
          </div>
        </>;
      })()}

      {displayedOthers.length > 0 && (() => {
        const sec = personaSections[persona]?.[locale];
        const allMain = sec?.allMain || t('section.allMain');
        const allSub = sec?.allSub ?? t('section.allSub');
        return <>
          <div className="section-header">
            <span className="section-line" />
            <div className="section-title">
              {cjk && <span className="section-title-zh">{allMain}</span>}
              {!cjk && allMain}
              {allSub && (
                <> {allSub}</>
              )}
            </div>
            <span className="section-line" />
          </div>
          <div className={gridClass}>
            {displayedOthers.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                highlighted={state.highlightedProductId === product.id}
                highlightReason={
                  state.highlightedProductId === product.id ? state.highlightReason : null
                }
                onClick={() => onProductClick(product)}
                index={i}
                persona={persona}
              />
            ))}
          </div>
        </>;
      })()}

      {hasMore && (
        <div ref={sentinelRef} className="scroll-sentinel">
          <div className="scroll-loading">
            <div className="scroll-loading-dots">
              <div className="scroll-loading-dot" />
              <div className="scroll-loading-dot" />
              <div className="scroll-loading-dot" />
            </div>
            <span className="scroll-loading-text">{t('scroll.discovering')}</span>
          </div>
        </div>
      )}

      {!hasMore && others.length > 0 && (
        <div className="scroll-end">
          <span className="scroll-end-line" />
          <div className="scroll-end-text">{t('scroll.end')}</div>
        </div>
      )}
    </div>
  );
}
