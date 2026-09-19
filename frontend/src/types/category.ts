export type CategoryGroup =
  'yamaha' | 'honda' | 'kawasaki' | 'suzuki' | 'european' | 'other' | 'parts' | 'racing';

export interface Category {
  /** URL-friendly id, used as the route param */
  slug: string;
  /** Display title shown to the user */
  title: string;
  /** Brand / section this category belongs to, used for grouping on the home page */
  group: CategoryGroup;
  /**
   * What the category holds, which decides the wording on the page:
   * 'products' (default) for parts with prices, 'showcase' for customer bikes,
   * trips and race photos.
   */
  kind?: 'products' | 'showcase';
  /** Short description shown on the category card and at the top of the category page */
  description?: string;
}
