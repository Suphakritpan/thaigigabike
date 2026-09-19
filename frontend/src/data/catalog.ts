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
