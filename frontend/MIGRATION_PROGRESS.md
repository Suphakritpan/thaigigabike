# Legacy site migration progress

Tracks the move from the original Dreamweaver export in
`frontend/public/legacy-site/` into the React app in `frontend/src`, following
`legacy-website-redesign.md`.

`frontend/public/` is **read-only**: the old pages and their images stay exactly as
they were exported. Everything the new site shows is produced from them by
`scripts/generate-catalog.mjs`.

## How the migration works

```
public/legacy-site/*.html   (TIS-620, table layout, read-only)
        |
        |  scripts/lib/parse-legacy-page.mjs        products, prices, photos, prose
        |  scripts/lib/parse-legacy-part-table.mjs  price-list tables
        v
scripts/generate-catalog.mjs          (npm run catalog)
        |
        v
src/data/catalog.generated.ts      products / notes / galleries / price lists
src/data/thumbnails.generated.ts   one photo per category for the home page
        |
        v
src/data/catalog.ts -> src/components/product/* -> src/pages/CategoryPage.tsx
```

Which legacy pages and image folders feed each category is declared once in
`src/data/legacySources.mjs`. After editing it, or either parser, run
`npm run catalog` and then `npm test`.

Nothing written on the old pages is thrown away. A block with a price or a photo
becomes a product; a block that is only text becomes a note shown under
"ข้อมูลเพิ่มเติมจากทางร้าน"; a part-number table becomes a price list.

## Framework / infrastructure

| Item | Status |
|---|---|
| Vite + React + TypeScript scaffold | done |
| ESLint (browser + Node script configs) + Prettier + `.prettierignore` | done |
| Design system (`src/styles/*.css`, office-like tokens) | done |
| Layout components (`Header`, `Navbar`, `Footer`, `AppLayout`) | done |
| Shared UI components (`Card`, `Button`, `Notice`, `DataTable`, `PhotoGallery`, `SearchInput`) | done |
| Product components (`ProductList`, `ProductCard`, `CategoryNotes`, `PartNumberTable`) | done |
| Shared shop details (`ContactMethodRows`, `src/data/shopInfo.ts`) | done |
| Legacy content pipeline (`npm run catalog`) | done |
| Parser tests (`npm test`) | done |
| Catalog code-split out of the first page load | done |
| Keyboard focus rings, skip link, underlined content links, `scope` on table headers | done |

## Static pages

| Legacy file | New route | Status | Notes |
|---|---|---|---|
| `index.html` | `/` | done | Category grid grouped by brand. Its own product blocks were merged into `sr400-500` |
| `index 1.html` | - | done | English product list; merged into `/category/products` |
| `index jp.html` | - | dropped | Japanese variant of the home page. Its Japanese text is corrupted in the export and its photos already appear elsewhere, so `/contact` carries an English section instead |
| `YAMAHA.html` | - | done | R1/R6 parts merged into `r1-r6` |
| `honda.html` | - | done | CBR parts became the new `cbr600-1000` category |
| `kawasaki.html` | - | done | Estrella250/TR250 parts merged into `estrella250` |
| `contact.html` / `ติดต่อเรา.html` | `/contact` | done | Shop info + FAQ; phone and e-mail are links |
| `payment.html` / `วิธีการชำระเงิน.html` | `/payment` | done | Ordering steps + shipping notice |
| `ตัวแทนจำหน่าย.html` | `/dealers` | done | Dealer + repair shop directory in `src/data/dealers.ts` |
| `เว็ปบอร์ด.html` | - | dropped | Old webboard link, not carried forward |
| `suzuki.html`, `products.html` | - | done | Contents already covered by their categories |

## Product categories (`/category/:slug`)

Counts are what the site renders today, from `npm run catalog`. A source marked `*`
is a brand landing page: only the products no other category already carries are
taken from it, so nothing appears twice.

| Slug | Legacy source(s) | Products | Notes | Photos | Price-list rows |
|---|---|---|---|---|---|
| `sr400-500` | SR.html, SR2.html, index.html * | 379 | 0 | 26 | 0 |
| `sr-dream` | SR ในฝันของคุณ.html | 16 | 7 | 0 | 0 |
| `sr-maintenance` | วิธีดูแลรักษา SR ของคุณ.html | 1 | 6 | 0 | 0 |
| `sr-swingarm` | swingarm_sr.html, swingarmsr.html | 0 | 0 | 55 | 0 |
| `sr-trip` | tripsr.html | 3 | 0 | 11 | 0 |
| `srx400-600` | srx.html, yamaha srx.html | 5 | 0 | 1 | 0 |
| `sr-seat` | Seat.html | 8 | 1 | 15 | 0 |
| `xs650` | xs650.html | 45 | 0 | 3 | 0 |
| `xt500` | xt500.html | 9 | 0 | 1 | 0 |
| `r15-xsr155` | R15_XSR.html | 26 | 0 | 6 | 0 |
| `xsr` | XSR.html | 22 | 0 | 5 | 0 |
| `r3-mt03` | R3.html | 55 | 5 | 46 | 0 |
| `r7-r9` | R9-R7.html | 26 | 0 | 0 | 0 |
| `r1-r6` | R1_R6.html, YAMAHA.html * | 46 | 0 | 1 | 0 |
| `tempter400` | Tempter400.html | 5 | 0 | 13 | 0 |
| `cb750` | CB750k.html | 25 | 0 | 11 | 0 |
| `gb250-400` | honda_GB250_400.html, honda gb250-400.html | 14 | 0 | 0 | 0 |
| `cb400ss` | honda cb400ss.html | 1 | 0 | 4 | 0 |
| `nc35` | NC35.html | 3 | 0 | 2 | 0 |
| `nsr-2t` | 2T.html | 24 | 0 | 13 | 0 |
| `monkey-msx125` | Monkey_msx125.html, msx125.html | 55 | 1 | 3 | 0 |
| `cbr150-250` | CBR150r_CBR250rr.html | 35 | 1 | 0 | 0 |
| `cb150r` | CB150r.html | 28 | 1 | 1 | 0 |
| `cbr600-1000` | honda.html * | 13 | 0 | 2 | 0 |
| `w650-w800` | w650.html | 32 | 0 | 9 | 0 |
| `estrella250` | Estrella250.html, kawasaki.html * | 26 | 0 | 7 | 0 |
| `ksr110` | KSR110.html | 9 | 0 | 2 | 0 |
| `ninja250-400` | Ninja250_300_Ninja400.html | 66 | 0 | 16 | 0 |
| `ninja300` | Ninja300.html | 63 | 0 | 2 | 0 |
| `zx10rr` | Ninjazx10rr.html | 13 | 0 | 2 | 0 |
| `suzuki` | suzuki.html | 5 | 0 | 0 | 0 |
| `bmw` | BMW.html | 3 | 0 | 0 | 0 |
| `ducati-monster` | ducati_Monter795.html | 20 | 0 | 10 | 0 |
| `triumph-truxton` | triumph_Truxton900.html | 86 | 0 | 18 | 0 |
| `ktm-rc390` | KTM-RC390.html | 15 | 0 | 1 | 0 |
| `harley-sportster` | HD.html, Sportter.html | 23 | 0 | 17 | 0 |
| `royal-enfield` | Royal Enfield.html | 29 | 0 | 2 | 0 |
| `royal-enfield-gt535` | RoyalEnfield_GT500.html | 33 | 0 | 0 | 0 |
| `stallions-centaur` | Stallions.html | 12 | 0 | 2 | 0 |
| `ohlins` | Ohlins.html | 27 | 0 | 11 | 0 |
| `sprocket-alloys` | Sprocket_Alloys.html | 78 | 2 | 18 | 0 |
| `bolts-nut` | Bolts-nut.html | 21 | 0 | 10 | 0 |
| `parts-all` | Part All.html | 0 | 2 | 45 | 0 |
| `part-numbers` | nunber part.html | 0 | 0 | 0 | 10 |
| `products` | products.html, products all.html, index 1.html * | 10 | 0 | 74 | 160 |
| `racing-team` | Racing.html, Racing Tame.html | 0 | 0 | 27 | 0 |
| `gallery` | Pictures.html | 1 | 0 | 24 | 0 |
| `race-photos` | รวมภาพแข่ง.html | 0 | 1 | 30 | 0 |

Totals: 1,416 products, 27 notes, 546 category photos, 170 price-list rows.

## Decisions made

- **Prices.** The shop keeps the prices exactly as the old pages had them, so
  `parse-legacy-page.mjs` copies each price through verbatim ("3,800 ฿", "700 ฿")
  and nothing is rounded, converted or re-checked. Editing a price means editing
  the legacy page it came from and re-running `npm run catalog`.

## Next steps

1. Ask the shop which overseas phone number is current. The old pages list several
   for English and Japanese speakers (081-416-5060, 089-762-3199, 087-590-7500,
   092-408-2220, 083-029-6533) with no way to tell which still work, so `/contact`
   shows only the main number.
2. If the catalogue keeps growing, split `catalog.generated.ts` per category and load
   each one on demand. Today it is a single 459 kB chunk (89 kB gzipped) fetched the
   first time a visitor opens any category page, which is fine at the current size.
   The first page load itself is 185 kB (62 kB gzipped).
