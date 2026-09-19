// Builds src/data/catalog.generated.ts - the products, photo galleries and price-list
// rows the new site renders - from the read-only legacy site in frontend/public.
//
//   node scripts/generate-catalog.mjs        (npm run catalog)
//
// Sources per category come from src/data/legacySources.mjs. Nothing under
// frontend/public is written to; the old pages stay exactly as they were exported.

import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { legacySources } from '../src/data/legacySources.mjs';
import { parseLegacyPage } from './lib/parse-legacy-page.mjs';
import { parseLegacyPartTable } from './lib/parse-legacy-part-table.mjs';
import { toPublicUrl } from './lib/html-text.mjs';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectDir = join(scriptDir, '..');
const publicDir = join(projectDir, 'public');
const legacyDir = join(publicDir, 'legacy-site');
const bikesDir = join(publicDir, 'assets', 'bikes');
const catalogFile = join(projectDir, 'src', 'data', 'catalog.generated.ts');
const thumbnailFile = join(projectDir, 'src', 'data', 'thumbnails.generated.ts');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif']);
/** Files smaller than this are spacer and bullet graphics from the old template. */
const MIN_IMAGE_BYTES = 3000;

/** Keeps only photos that really exist, so the new site never shows a broken image. */
function existingImages(images) {
  return images.filter((image) => existsSync(join(publicDir, decodeURIComponent(image).slice(1))));
}

function listFolderImages(folder) {
  const dir = join(bikesDir, folder);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => {
      const extension = name.slice(name.lastIndexOf('.')).toLowerCase();
      if (!IMAGE_EXTENSIONS.has(extension)) return false;
      const stats = statSync(join(dir, name));
      return stats.isFile() && stats.size > MIN_IMAGE_BYTES;
    })
    .sort()
    .map((name) => toPublicUrl(`/assets/bikes/${folder}/${name}`));
}

function readPages(pages) {
  const items = [];
  const pageImages = [];
  for (const page of pages) {
    const parsed = parseLegacyPage(join(legacyDir, page));
    items.push(...parsed.items);
    pageImages.push(...parsed.trailingImages);
  }
  return { items, pageImages };
}

function buildProducts(slug, items, taken, startIndex = 0) {
  const products = [];
  const notes = [];
  for (const item of items) {
    if (taken.has(item.description)) continue;
    taken.add(item.description);
    const images = existingImages(item.images.map(toPublicUrl));
    // A block with neither a price nor a photo is prose: a section heading, a
    // shipping remark, or - on the maintenance page - the whole article. It is
    // kept as a note so nothing the shop wrote is lost.
    if (!item.price && images.length === 0) {
      notes.push(item.description);
      continue;
    }
    products.push({
      id: `${slug}-${startIndex + products.length + 1}`,
      name: item.name,
      description: item.description,
      ...(item.price ? { price: item.price } : {}),
      images,
    });
  }
  return { products, notes };
}

function buildPartNumbers(pages) {
  const rows = [];
  const seen = new Set();
  for (const page of pages) {
    for (const row of parseLegacyPartTable(join(legacyDir, page))) {
      // Every real price-list row carries a part number; rows without one are
      // the old page's navigation leaking out of its footer table.
      if (!row.code || seen.has(row.code)) continue;
      seen.add(row.code);
      rows.push(row);
    }
  }
  return rows;
}

const catalog = { products: {}, notes: {}, galleries: {}, partNumbers: {} };
const pageImagesByCategory = {};

// Pass 1: every category's own pages. De-duplication is per category, so a part the
// shop listed under two models still appears under both.
for (const [slug, source] of Object.entries(legacySources)) {
  const { items, pageImages } = readPages(source.pages);
  const { products, notes } = buildProducts(slug, items, new Set());
  const partNumbers = buildPartNumbers(source.pages);
  catalog.products[slug] = products;
  // On a price-list page every cell reads as prose, so its "notes" would just be the
  // table again. The table itself is the content there.
  catalog.notes[slug] = partNumbers.length > 0 ? [] : notes;
  catalog.partNumbers[slug] = partNumbers;
  pageImagesByCategory[slug] = pageImages;
}

// Pass 2: the brand landing pages, which mixed several categories together. Only
// products no category already carries are added, so nothing is duplicated.
const migrated = new Set(
  Object.values(catalog.products).flatMap((products) =>
    products.map((product) => product.description),
  ),
);
for (const [slug, source] of Object.entries(legacySources)) {
  if (!source.extraPages) continue;
  const { items, pageImages } = readPages(source.extraPages);
  const existing = catalog.products[slug];
  const { products } = buildProducts(slug, items, migrated, existing.length);
  existing.push(...products);
  pageImagesByCategory[slug].push(...pageImages);
}

for (const [slug, source] of Object.entries(legacySources)) {
  const usedImages = new Set(catalog.products[slug].flatMap((product) => product.images));
  catalog.galleries[slug] = [
    ...existingImages(pageImagesByCategory[slug].map(toPublicUrl)),
    ...source.imageFolders.flatMap(listFolderImages),
  ].filter((image, index, all) => !usedImages.has(image) && all.indexOf(image) === index);
}

writeFileSync(
  catalogFile,
  `// Generated by scripts/generate-catalog.mjs - do not edit by hand.
import type { PartNumber, Product } from '@/types/product';

export const productsByCategory: Record<string, Product[]> = ${JSON.stringify(catalog.products, null, 2)};

export const notesByCategory: Record<string, string[]> = ${JSON.stringify(catalog.notes, null, 2)};

export const galleryByCategory: Record<string, string[]> = ${JSON.stringify(catalog.galleries, null, 2)};

export const partNumbersByCategory: Record<string, PartNumber[]> = ${JSON.stringify(catalog.partNumbers, null, 2)};
`,
  'utf-8',
);

// The home page only needs one photo per category, so it gets its own tiny module
// and never pulls the whole catalog into the first page load.
const thumbnails = {};
for (const [slug, products] of Object.entries(catalog.products)) {
  const thumbnail =
    products.find((product) => product.images.length > 0)?.images[0] ?? catalog.galleries[slug][0];
  if (thumbnail) thumbnails[slug] = thumbnail;
}

writeFileSync(
  thumbnailFile,
  `// Generated by scripts/generate-catalog.mjs - do not edit by hand.
export const categoryThumbnails: Record<string, string> = ${JSON.stringify(thumbnails, null, 2)};
`,
  'utf-8',
);

for (const slug of Object.keys(legacySources)) {
  const counts = [
    `${catalog.products[slug].length} product(s)`,
    `${catalog.galleries[slug].length} photo(s)`,
    `${catalog.partNumbers[slug].length} price-list row(s)`,
  ];
  console.log(`${slug}: ${counts.join(', ')}`);
}
