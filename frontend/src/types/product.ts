export interface Product {
  /** Stable id built from the category slug and the product's position on the legacy page */
  id: string;
  /** Short label shown as the product heading, derived from the start of the description */
  name: string;
  /** Full product text exactly as the shop wrote it on the old site */
  description: string;
  /** Price as printed by the shop, e.g. "3,800 ฿". Missing when the old page did not list one */
  price?: string;
  /** Product photos, served from frontend/public/assets/ */
  images: string[];
}

export interface PartNumber {
  /** Shop's part number, e.g. "G.001" */
  code?: string;
  /** English part name as printed in the old price list */
  name: string;
  /** Price as printed, e.g. "2,200 ฿" */
  price?: string;
}
