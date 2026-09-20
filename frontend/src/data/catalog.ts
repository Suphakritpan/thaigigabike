import {
  galleryByCategory,
  notesByCategory,
  partNumbersByCategory,
  productsByCategory,
} from '@/data/catalog.generated';
import type { PartNumber, Product } from '@/types/product';

/** Products migrated from the category's legacy page, in the order the shop listed them. */
export function getProducts(slug: string): Product[] {
  return productsByCategory[slug] ?? [];
}

/** One product by id, for spotlighting a specific item outside its own category page. */
export function getProductById(categorySlug: string, productId: string): Product | undefined {
  return getProducts(categorySlug).find((product) => product.id === productId);
}

/** Total product count across every category, for the homepage stats line. */
export function getTotalProductCount(): number {
  return Object.values(productsByCategory).reduce((sum, products) => sum + products.length, 0);
}

/** Total standalone photo count across every category, for the homepage stats line. */
export function getTotalPhotoCount(): number {
  const productPhotos = Object.values(productsByCategory)
    .flat()
    .reduce((sum, product) => sum + product.images.length, 0);
  const galleryPhotos = Object.values(galleryByCategory).reduce(
    (sum, images) => sum + images.length,
    0,
  );
  return productPhotos + galleryPhotos;
}

/** Photos that belong to the category but not to a single product. */
export function getGallery(slug: string): string[] {
  return galleryByCategory[slug] ?? [];
}

/** Price-list rows for the categories whose legacy page was a part-number table. */
export function getPartNumbers(slug: string): PartNumber[] {
  return partNumbersByCategory[slug] ?? [];
}

/** Case-insensitive search over a category's product names, details and prices. */
export function filterProducts(products: Product[], query: string): Product[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return products;
  return products.filter((product) => {
    const haystack = `${product.name} ${product.description} ${product.price ?? ''}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

/** Prose the old page carried outside any product: advice, headings, team notes. */
export function getNotes(slug: string): string[] {
  return notesByCategory[slug] ?? [];
}
