# Giga Bike frontend

The rebuilt thaigigabike.com, following `../legacy-website-redesign.md`.

## Running it

```bash
npm install
npm run dev       # development server
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run lint      # ESLint (app code and build scripts)
npm run format    # Prettier
npm test          # parser tests (node --test)
npm run catalog   # rebuild the product data from the legacy site
```

## How the site is put together

```
src/
├── components/
│   ├── layout/    Header, Navbar, Footer, AppLayout
│   ├── product/   ProductList, ProductCard, CategoryNotes, PartNumberTable
│   ├── shop/      shared shop details (ContactMethodRows)
│   └── ui/        Button, Card, DataTable, Notice, PhotoGallery, SearchInput
├── data/          categories, dealers, shop info, generated catalog
├── pages/         one component per route
├── styles/        design tokens and component styles
└── types/         shared TypeScript types
```

Every page is built from the components above; no page repeats another page's markup.
Text, prices and photos are data, never hard-coded inside a page.

## The legacy catalogue

`public/legacy-site/` holds the original Dreamweaver export and is **read-only** -
it is the source of truth for what the shop sells. `npm run catalog` parses it and
writes `src/data/catalog.generated.ts` and `src/data/thumbnails.generated.ts`.
Neither generated file is edited by hand.

To change what a category shows, edit `src/data/legacySources.mjs` (which legacy
pages and image folders feed it) and re-run `npm run catalog`.

`MIGRATION_PROGRESS.md` tracks which legacy page became which part of the new site.
