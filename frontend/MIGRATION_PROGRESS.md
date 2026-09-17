# Legacy site migration progress

Tracks the move from `frontend/public/legacy-site/*.html` (the original
Dreamweaver export) into the React app in `frontend/src`, following
`legacy-website-redesign.md`. Update this file whenever a page's status
changes, so the next work session can pick up where this one left off.

Status values: `done` (content migrated into a real page/component),
`stub` (route exists, shows a "content coming soon" notice, image wired
up), `todo` (not started), `dropped` (dead page from the old site, not
being carried forward), `duplicate` (superseded by another row).

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

All rows below have a `Category` entry in `src/data/categories.ts` and a
working route, but only show a generic "content coming soon" notice
(`stub`) until their real photos/specs/text are migrated from the legacy
HTML. `SR.html` and `Ohlins.html` additionally have a representative
image wired up already.

| Legacy file | slug | Status |
|---|---|---|
| `SR.html` | `sr400-500` | stub (image done) |
| `SR2.html` | — | duplicate of `SR.html` |
| `SR ในฝันของคุณ.html` | `sr-dream` | stub |
| `วิธีดูแลรักษา SR ของคุณ.html` | `sr-maintenance` | stub |
| `swingarm_sr.html` | `sr-swingarm` | stub |
| `swingarmsr.html` | — | duplicate of `swingarm_sr.html` |
| `tripsr.html` | `sr-trip` | stub |
| `yamaha srx.html` | — | duplicate of `srx.html` |
| `srx.html` | `srx400-600` | stub |
| `Seat.html` | `sr-seat` | stub |
| `xs650.html` | `xs650` | stub |
| `xt500.html` | `xt500` | stub |
| `R15_XSR.html` | `r15-xsr155` | stub |
| `XSR.html` | `xsr` | stub |
| `R3.html` | `r3-mt03` | stub |
| `R9-R7.html` | `r7-r9` | stub |
| `R1_R6.html` | `r1-r6` | stub |
| `Tempter400.html` | `tempter400` | stub |
| `CB750k.html` | `cb750` | stub |
| `honda_GB250_400.html` | `gb250-400` | stub |
| `honda gb250-400.html` | — | duplicate of `honda_GB250_400.html` |
| `honda cb400ss.html` | `cb400ss` | stub |
| `NC35.html` | `nc35` | stub |
| `2T.html` | `nsr-2t` | stub |
| `Monkey_msx125.html` | `monkey-msx125` | stub |
| `msx125.html` | — | duplicate of `Monkey_msx125.html` |
| `CBR150r_CBR250rr.html` | `cbr150-250` | stub |
| `CB150r.html` | `cb150r` | stub |
| `w650.html` | `w650-w800` | stub |
| `Estrella250.html` | `estrella250` | stub |
| `KSR110.html` | `ksr110` | stub |
| `Ninja250_300_Ninja400.html` | `ninja250-400` | stub |
| `Ninja300.html` | `ninja300` | stub |
| `Ninjazx10rr.html` | `zx10rr` | stub |
| `suzuki.html` | `suzuki` | stub |
| `BMW.html` | `bmw` | stub |
| `ducati_Monter795.html` | `ducati-monster` | stub |
| `triumph_Truxton900.html` | `triumph-truxton` | stub |
| `KTM-RC390.html` | `ktm-rc390` | stub |
| `HD.html` | `harley-sportster` | stub |
| `Royal Enfield.html` | `royal-enfield` | stub |
| `RoyalEnfield_GT500.html` | `royal-enfield-gt535` | stub |
| `Stallions.html` | `stallions-centaur` | stub |
| `Ohlins.html` | `ohlins` | stub (image done) |
| `Sprocket_Alloys.html` | `sprocket-alloys` | stub |
| `Bolts-nut.html` | `bolts-nut` | stub |
| `Part All.html` | `parts-all` | stub |
| `nunber part.html` | `part-numbers` | stub |
| `products.html` | `products` | stub |
| `products all.html` | — | duplicate of `products.html` |
| `Racing.html` | `racing-team` | stub |
| `Racing Tame.html` | — | duplicate of `Racing.html` |
| `Pictures.html` | `gallery` | stub |
| `รวมภาพแข่ง.html` | `race-photos` | stub |

## Next steps

1. Pick a handful of category pages per session and replace their `stub`
   status with real migrated content (text + correct image from
   `frontend/public/assets/bikes/...`), following the pattern in
   `src/pages/CategoryPage.tsx`.
2. Once several categories have rich content that no longer fits the
   generic template, consider splitting `CategoryPage` into per-brand
   page components under `src/pages/` while keeping the shared UI
   components (`Card`, `Notice`, `DataTable`) in place.
3. Once every row above is `done`, delete `frontend/public/legacy-site/`
   (keep `frontend/public/assets/` — the images are still used by the
   new pages).
