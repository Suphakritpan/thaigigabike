import { Link, useParams } from 'react-router-dom';
import { getCategoryBySlug } from '@/data/categories';
import { getGallery, getNotes, getPartNumbers, getProducts } from '@/data/catalog';
import { Notice } from '@/components/ui/Notice';
import { PhotoGallery } from '@/components/ui/PhotoGallery';
import { ProductList } from '@/components/product/ProductList';
import { CategoryNotes } from '@/components/product/CategoryNotes';
import { PartNumberTable } from '@/components/product/PartNumberTable';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { shopInfo } from '@/data/shopInfo';

/** Wording differs between a parts list and a photo showcase, but nothing else does. */
const wording = {
  products: {
    list: 'รายการสินค้า',
    search: 'ค้นหาสินค้าในหมวดนี้',
    notes: 'ข้อมูลเพิ่มเติมจากทางร้าน',
    gallery: 'รูปสินค้าและผลงาน',
  },
  showcase: {
    list: 'ภาพผลงานและกิจกรรม',
    search: 'ค้นหาในหมวดนี้',
    notes: 'รายละเอียดเพิ่มเติม',
    gallery: 'รูปภาพทั้งหมด',
  },
} as const;

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  if (!category) return <NotFoundPage />;

  const text = wording[category.kind ?? 'products'];
  const products = getProducts(category.slug);
  const notes = getNotes(category.slug);
  const partNumbers = getPartNumbers(category.slug);
  const gallery = getGallery(category.slug);
  const isEmpty =
    products.length === 0 && notes.length === 0 && partNumbers.length === 0 && gallery.length === 0;

  return (
    <div>
      <p className="breadcrumb">
        <Link to="/">หน้าแรก</Link> <span aria-hidden="true">/</span> {category.title}
      </p>
      <h1>{category.title}</h1>
      {category.description && <p className="text-muted">{category.description}</p>}

      <Notice>
        สอบถามรุ่น สี ราคา และสินค้าพร้อมส่งได้ที่ โทร. {shopInfo.phone} หรือ Line ID{' '}
        <strong>{shopInfo.lineId}</strong>
      </Notice>

      <ProductList title={text.list} searchLabel={text.search} products={products} />

      <CategoryNotes title={text.notes} notes={notes} />

      {partNumbers.length > 0 && (
        <section className="section">
          <h2>ตารางรหัสอะไหล่และราคา</h2>
          <PartNumberTable rows={partNumbers} />
        </section>
      )}

      {gallery.length > 0 && (
        <section className="section">
          <h2>{text.gallery}</h2>
          <PhotoGallery title={category.title} images={gallery} />
        </section>
      )}

      {isEmpty && <p className="text-muted">หมวดนี้ยังไม่มีข้อมูลสินค้า กรุณาติดต่อร้านโดยตรง</p>}
    </div>
  );
}
