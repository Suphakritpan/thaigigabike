import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  /** Grid view: one photo and a clamped description, to fit many tiles per row. */
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const images = compact ? product.images.slice(0, 1) : product.images;

  return (
    <article className={compact ? 'product product--compact' : 'product'}>
      {images.length > 0 && (
        <div className="product__photos">
          {images.map((image, index) => (
            <img
              key={image}
              className="product__photo"
              src={image}
              alt={`${product.name} รูปที่ ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      )}
      <div className="product__body">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
        {product.price && (
          <p className="product__price">
            <span className="product__price-label">ราคา</span> {product.price}
          </p>
        )}
      </div>
    </article>
  );
}
