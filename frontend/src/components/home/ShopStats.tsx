import { categories } from '@/data/categories';
import { getTotalProductCount, getTotalPhotoCount } from '@/data/catalog';
import { catalogUpdatedAt } from '@/data/siteMeta';

/**
 * The old site's sidebar had a raw visitor hit-counter ("สถิติของร้านค้า"). A
 * static site cannot count real visitors without a backend, and a fake number
 * would just be lying to the customer, so this shows real catalog size and an
 * honest last-updated date instead - still "shop stats", just true ones.
 */
export function ShopStats() {
  const stats = [
    { label: 'สินค้าทั้งหมด', value: `${getTotalProductCount().toLocaleString('th-TH')} รายการ` },
    { label: 'หมวดหมู่สินค้า', value: `${categories.length} หมวด` },
    { label: 'รูปภาพสินค้า', value: `${getTotalPhotoCount().toLocaleString('th-TH')} รูป` },
    { label: 'ปรับปรุงข้อมูลล่าสุด', value: catalogUpdatedAt },
  ];

  return (
    <dl className="shop-stats">
      {stats.map((stat) => (
        <div className="shop-stats__item" key={stat.label}>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
