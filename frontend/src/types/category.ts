export type CategoryGroup =
  'yamaha' | 'honda' | 'kawasaki' | 'suzuki' | 'european' | 'other' | 'parts' | 'racing';

export interface Category {
  /** URL-friendly id, used as the route param */
  slug: string;
  /** Display title shown to the user */
  title: string;
  /** Brand / section this category belongs to, used for grouping on the home page */
  group: CategoryGroup;
  /** Original Dreamweaver-era filename this content was migrated from, kept for audit purposes */
  legacyFile: string;
  /** Thumbnail image path under /assets, shown on the category card. Falls back to the shop logo when absent. */
  image?: string;
  /** Short description shown on the category card and at the top of the category page */
  description?: string;
}
