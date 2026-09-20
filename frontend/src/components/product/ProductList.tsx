import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/product/ProductCard';
import { SearchInput } from '@/components/ui/SearchInput';
import { Button } from '@/components/ui/Button';
import { ViewToggle, type ViewMode } from '@/components/ui/ViewToggle';
import { filterProducts } from '@/data/catalog';
import type { Product } from '@/types/product';

/** Products shown before the "show more" button, kept small so the page stays readable. */
const PAGE_SIZE = 24;

/** Below this many products the list fits on screen, so a search box is only clutter. */
const SEARCH_THRESHOLD = 8;

interface ProductListProps {
  /** Section heading, e.g. "รายการสินค้า" for parts or "ภาพผลงาน" for a showcase */
  title: string;
  searchLabel: string;
  products: Product[];
}

export function ProductList({ title, searchLabel, products }: ProductListProps) {
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [view, setView] = useState<ViewMode>('list');

  const matches = useMemo(() => filterProducts(products, query), [products, query]);
  const visible = matches.slice(0, visibleCount);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  };

  if (products.length === 0) return null;

  return (
    <section className="section">
      <div className="product-list__header">
        <h2>
          {title} ({products.length} รายการ)
        </h2>
        {products.length >= SEARCH_THRESHOLD && <ViewToggle value={view} onChange={setView} />}
      </div>

      {products.length >= SEARCH_THRESHOLD && (
        <SearchInput
          label={searchLabel}
          value={query}
          placeholder="พิมพ์ชื่อสินค้า เช่น แผงคอ, เบาะ, ไฟหน้า"
          onChange={handleQueryChange}
        />
      )}

      {matches.length === 0 ? (
        <p className="text-muted">ไม่พบสินค้าที่ตรงกับคำค้นหา ลองพิมพ์คำสั้นลงหรือลบคำค้นหาออก</p>
      ) : (
        <>
          {visible.length < matches.length && (
            <p className="text-small text-muted">
              แสดง {visible.length} จาก {matches.length} รายการ
            </p>
          )}
          <div className={view === 'grid' ? 'product-list product-list--grid' : 'product-list'}>
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} compact={view === 'grid'} />
            ))}
          </div>
          {visibleCount < matches.length && (
            <div className="product-list__more">
              <Button type="button" onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)}>
                แสดงสินค้าเพิ่มอีก {Math.min(PAGE_SIZE, matches.length - visibleCount)} รายการ
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
