import { categoryImages } from '@/data/categoryImages.generated';

/** All photos migrated for this category, in a stable order. */
export function getCategoryGallery(slug: string): string[] {
  return categoryImages[slug] ?? [];
}

/** First photo, used as the category's card thumbnail. Undefined shows a placeholder. */
export function getCategoryThumbnail(slug: string): string | undefined {
  return getCategoryGallery(slug)[0];
}
