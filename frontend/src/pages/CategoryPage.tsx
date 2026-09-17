import { Link, useParams } from 'react-router-dom';
import { getCategoryBySlug } from '@/data/categories';
import { getCategoryGallery } from '@/data/categoryImages';
import { Notice } from '@/components/ui/Notice';
import { PhotoGallery } from '@/components/ui/PhotoGallery';
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

  const images = getCategoryGallery(category.slug);

  return (
    <div>
      <p className="text-small">
        <Link to="/">หน้าแรก</Link> / {category.title}
      </p>
      <h1>{category.title}</h1>
      {category.description && <p>{category.description}</p>}

      <Notice>
        สอบถามรุ่น สี ราคา และความพร้อมของสินค้าได้ทางโทรศัพท์หรือ Line ID{' '}
        <strong>{shopInfo.lineId}</strong> โทร. {shopInfo.phone}
      </Notice>

      {images.length > 0 ? (
        <PhotoGallery title={category.title} images={images} />
      ) : (
        <p className="text-muted">ยังไม่มีรูปสินค้าสำหรับหมวดนี้</p>
      )}
    </div>
  );
}
