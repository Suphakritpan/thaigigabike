# Legacy site migration progress

Tracks the move from `frontend/public/legacy-site/*.html` (the original
Dreamweaver export) into the React app in `frontend/src`, following
`legacy-website-redesign.md`. Update this file whenever a page's status
changes, so the next work session can pick up where this one left off.

Status values: `done` (content migrated into a real page/component),
`gallery` (route exists with a real, generated photo gallery for that
category - see below - but no per-item price/spec text yet), `todo`
(not started), `dropped` (dead page from the old site, not being
carried forward), `duplicate` (superseded by another row).

## Framework / infrastructure

| Item | Status |
|---|---|
| Vite + React + TypeScript scaffold (`package.json`, `vite.config.ts`, `tsconfig*.json`) | done |
| ESLint + Prettier config | done |
| Design system (`src/styles/*.css`, office-like tokens) | done |
| Layout components (`Header`, `Navbar`, `Footer`, `AppLayout`) | done |
| Shared UI components (`Card`, `Button`, `Notice`, `DataTable`) | done |
| Routing (`src/App.tsx`) | done |

## Pages

| Legacy file | New route | Status | Notes |
|---|---|---|---|
| `index.html` | `/` | done | Category grid grouped by brand |
| `index 1.html` | — | dropped | Duplicate of `index.html` |
| `index jp.html` | — | todo | Japanese-language homepage variant; revisit if i18n is needed |
| `YAMAHA.html` | — | dropped | Was just a brand-section landing page; home page groups by brand already |
| `honda.html` | — | dropped | Same as above, Honda |
| `kawasaki.html` | — | dropped | Same as above, Kawasaki |
| `contact.html` / `ติดต่อเรา.html` (duplicate) | `/contact` | done | Real shop info + FAQ migrated |
| `payment.html` / `วิธีการชำระเงิน.html` (duplicate) | `/payment` | done | Ordering steps + shipping notice migrated. Bank account fields were blank in the original source too |
| `ตัวแทนจำหน่าย.html` | `/dealers` | done | Full dealer + repair shop directory migrated to `src/data/dealers.ts` |
| `เว็ปบอร์ด.html` | — | dropped | Old webboard/forum link, not carried forward |

### Product categories (`/category/:slug`)

Every row below has a `Category` entry in `src/data/categories.ts`, a
working route, and a real photo gallery pulled from
`frontend/public/assets/bikes/<folder>` via
`frontend/scripts/generate-category-images.mjs` (folder mapping in
`src/data/categoryImageFolders.mjs`, output committed at
`src/data/categoryImages.generated.ts`). Re-run
`npm run generate:images` after adding/moving photos.

What's still missing per category is the per-item text: prices, sizes,
colors, part numbers - the legacy HTML rarely had much of this as
plain text either (mostly image-only catalog pages), so this is
genuinely new copywriting, not a migration.

| Legacy file | slug | Status |
|---|---|---|
| `SR.html` | `sr400-500` | gallery |
| `SR2.html` | — | duplicate of `SR.html` |
| `SR ในฝันของคุณ.html` | `sr-dream` | gallery |
| `วิธีดูแลรักษา SR ของคุณ.html` | `sr-maintenance` | gallery |
| `swingarm_sr.html` | `sr-swingarm` | gallery |
| `swingarmsr.html` | — | duplicate of `swingarm_sr.html` |
| `tripsr.html` | `sr-trip` | gallery |
| `yamaha srx.html` | — | duplicate of `srx.html` |
| `srx.html` | `srx400-600` | gallery |
| `Seat.html` | `sr-seat` | gallery |
| `xs650.html` | `xs650` | gallery |
| `xt500.html` | `xt500` | gallery |
| `R15_XSR.html` | `r15-xsr155` | gallery |
| `XSR.html` | `xsr` | gallery |
| `R3.html` | `r3-mt03` | gallery |
| `R9-R7.html` | `r7-r9` | gallery |
| `R1_R6.html` | `r1-r6` | gallery |
| `Tempter400.html` | `tempter400` | gallery |
| `CB750k.html` | `cb750` | gallery |
| `honda_GB250_400.html` | `gb250-400` | gallery |
| `honda gb250-400.html` | — | duplicate of `honda_GB250_400.html` |
| `honda cb400ss.html` | `cb400ss` | gallery |
| `NC35.html` | `nc35` | gallery |
| `2T.html` | `nsr-2t` | gallery |
| `Monkey_msx125.html` | `monkey-msx125` | gallery |
| `msx125.html` | — | duplicate of `Monkey_msx125.html` |
| `CBR150r_CBR250rr.html` | `cbr150-250` | gallery |
| `CB150r.html` | `cb150r` | gallery |
| `w650.html` | `w650-w800` | gallery |
| `Estrella250.html` | `estrella250` | gallery |
| `KSR110.html` | `ksr110` | gallery |
| `Ninja250_300_Ninja400.html` | `ninja250-400` | gallery |
| `Ninja300.html` | `ninja300` | gallery |
| `Ninjazx10rr.html` | `zx10rr` | gallery |
| `suzuki.html` | `suzuki` | gallery |
| `BMW.html` | `bmw` | gallery |
| `ducati_Monter795.html` | `ducati-monster` | gallery |
| `triumph_Truxton900.html` | `triumph-truxton` | gallery |
| `KTM-RC390.html` | `ktm-rc390` | gallery |
| `HD.html` | `harley-sportster` | gallery |
| `Royal Enfield.html` | `royal-enfield` | gallery |
| `RoyalEnfield_GT500.html` | `royal-enfield-gt535` | gallery |
| `Stallions.html` | `stallions-centaur` | gallery |
| `Ohlins.html` | `ohlins` | gallery |
| `Sprocket_Alloys.html` | `sprocket-alloys` | gallery |
| `Bolts-nut.html` | `bolts-nut` | gallery |
| `Part All.html` | `parts-all` | gallery |
| `nunber part.html` | `part-numbers` | gallery |
| `products.html` | `products` | gallery |
| `products all.html` | — | duplicate of `products.html` |
| `Racing.html` | `racing-team` | gallery |
| `Racing Tame.html` | — | duplicate of `Racing.html` |
| `Pictures.html` | `gallery` | gallery |
| `รวมภาพแข่ง.html` | `race-photos` | gallery |

## Next steps

1. Pick a handful of categories per session and add real per-item text
   (prices, sizes, colors, part numbers) on top of the existing photo
   gallery, changing their status from `gallery` to `done`.
2. Once several categories have rich text content that no longer fits
   the generic template, consider splitting `CategoryPage` into
   per-brand page components under `src/pages/` while keeping the
   shared UI components (`Card`, `Notice`, `DataTable`, `PhotoGallery`)
   in place.
3. Some legacy asset files are corrupted (not real images despite the
   `.jpg` extension) - `generate-category-images.mjs` already filters
   these out by checking file signatures, so they just show up as one
   less photo in the gallery rather than a broken image icon.
4. Once every row above is `done`, delete `frontend/public/legacy-site/`
   (keep `frontend/public/assets/` — the images are still used by the
   new pages).
