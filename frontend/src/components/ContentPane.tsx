import ProductGallery from './ProductGallery';
import type { Product } from '../lib/api';

interface Props {
  onProductClick: (product: Product) => void;
  persona: string;
}

export default function ContentPane({ onProductClick, persona }: Props) {
  return (
    <div className="content-pane">
      <ProductGallery onProductClick={onProductClick} persona={persona} />
    </div>
  );
}
