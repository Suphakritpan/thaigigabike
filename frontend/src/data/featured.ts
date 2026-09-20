import { getProductById } from '@/data/catalog';

/**
 * Hand-picked "new arrivals" for the homepage, the same idea as the "New" callouts
 * the shop already puts at the top of several category pages (see
 * src/data/catalog.generated.ts, e.g. product id "r1-r6-1"). Update this list to
 * change what shows up here; it does not affect the category pages themselves.
 */
const featuredRefs = [
  { categorySlug: 'r1-r6', productId: 'r1-r6-1' },
  { categorySlug: 'r3-mt03', productId: 'r3-mt03-1' },
  { categorySlug: 'r7-r9', productId: 'r7-r9-1' },
];

export interface FeaturedItem {
  categorySlug: string;
  title: string;
  image?: string;
}

export function getFeaturedItems(): FeaturedItem[] {
  return featuredRefs
    .map(({ categorySlug, productId }) => {
      const product = getProductById(categorySlug, productId);
      if (!product) return undefined;
      return { categorySlug, title: product.name, image: product.images[0] };
    })
    .filter((item): item is FeaturedItem => item !== undefined);
}
