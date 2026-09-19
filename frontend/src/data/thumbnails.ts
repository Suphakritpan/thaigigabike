import { categoryThumbnails } from '@/data/thumbnails.generated';

/**
 * One photo per category for the home page grid. Kept apart from catalog.ts so the
 * home page does not have to download the full product catalog to show its tiles.
 */
export function getCategoryThumbnail(slug: string): string | undefined {
  return categoryThumbnails[slug];
}
