import { createContext, useContext } from 'react';

export interface ContentState {
  highlightedProductId: number | null;
  highlightReason: string | null;
  filterCategory: string | null;
}

export interface ContentSyncContextType {
  state: ContentState;
  highlightProduct: (productId: number, reason: string) => void;
  filterByCategory: (category: string | null) => void;
  clearHighlight: () => void;
}

export const ContentSyncContext = createContext<ContentSyncContextType>({
  state: { highlightedProductId: null, highlightReason: null, filterCategory: null },
  highlightProduct: () => {},
  filterByCategory: () => {},
  clearHighlight: () => {},
});

export function useContentSync() {
  return useContext(ContentSyncContext);
}
