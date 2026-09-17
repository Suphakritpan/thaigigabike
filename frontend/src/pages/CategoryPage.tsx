import { Link, useParams } from 'react-router-dom';
import { getCategoryBySlug } from '@/data/categories';
import { Notice } from '@/components/ui/Notice';
import { shopInfo } from '@/data/shopInfo';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  if (!category) {
    return (
      <div>
        <h1>ไม่พบหมวดหมู่สินค้านี้</h1>
        <Link to="/">กลับหน้าแรก</Link>
      </div>
    );
  }

  return (
    <div>
      <p className="text-small">
        <Link to="/">หน้าแรก</Link> / {category.title}
      </p>
      <h1>{category.title}</h1>
      {category.image && (
        <img className="category-image" src={category.image} alt={category.title} />
      )}
      {category.description && <p>{category.description}</p>}

      <Notice>
        รายละเอียดสินค้าหมวดนี้อยู่ระหว่างปรับปรุงให้เป็นระบบใหม่ สอบถามรุ่น สี
        และราคาได้ทางโทรศัพท์หรือ Line ID <strong>{shopInfo.lineId}</strong> โทร. {shopInfo.phone}
      </Notice>
    </div>
  );
}
