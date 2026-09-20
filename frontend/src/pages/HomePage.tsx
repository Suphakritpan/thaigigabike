import { Card } from '@/components/ui/Card';
import { Notice } from '@/components/ui/Notice';
import { HeroBanner } from '@/components/home/HeroBanner';
import { ShopStats } from '@/components/home/ShopStats';
import { shopInfo } from '@/data/shopInfo';
import { categories } from '@/data/categories';
import { getCategoryThumbnail } from '@/data/thumbnails';
import { getFeaturedItems } from '@/data/featured';
import type { CategoryGroup } from '@/types/category';

const groupTitles: Record<CategoryGroup, string> = {
  yamaha: 'YAMAHA',
  honda: 'HONDA',
  kawasaki: 'KAWASAKI',
  suzuki: 'SUZUKI',
  european: 'ยี่ห้ออื่น ๆ',
  other: 'อื่น ๆ',
  parts: 'อะไหล่และของแต่ง',
  racing: 'กิจกรรมและการแข่งขัน',
};

const groupOrder: CategoryGroup[] = [
  'yamaha',
  'honda',
  'kawasaki',
  'suzuki',
  'european',
  'other',
  'parts',
  'racing',
];

export function HomePage() {
  const featuredItems = getFeaturedItems();

  return (
    <div>
      <HeroBanner />

      <div className="section">
        <h1>สินค้าและอะไหล่มอเตอร์ไซค์</h1>
        <p>{shopInfo.serviceIntro}</p>
        <p className="text-muted">เลือกดูสินค้าตามยี่ห้อหรือรุ่นรถของท่านได้จากหมวดหมู่ด้านล่าง</p>
        <Notice>
          สอบถามสินค้าและสั่งทำได้ที่ โทร. {shopInfo.phone} หรือ Line ID{' '}
          <strong>{shopInfo.lineId}</strong> ({shopInfo.openingHours})
        </Notice>
        <ShopStats />
      </div>

      {featuredItems.length > 0 && (
        <section className="section">
          <h2>อุปกรณ์ตกแต่งใหม่ๆ อยากแนะนำ</h2>
          <div className="card-grid">
            {featuredItems.map((item) => (
              <Card
                key={item.categorySlug}
                to={`/category/${item.categorySlug}`}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </section>
      )}

      {groupOrder.map((group) => {
        const items = categories.filter((category) => category.group === group);
        if (items.length === 0) return null;

        return (
          <section className="section" key={group}>
            <h2>{groupTitles[group]}</h2>
            <div className="card-grid">
              {items.map((category) => (
                <Card
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  title={category.title}
                  image={getCategoryThumbnail(category.slug)}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
