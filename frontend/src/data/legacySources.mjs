// Maps each category slug (src/data/categories.ts) to the legacy Dreamweaver
// pages and image folders it was migrated from.
//
//   pages        - file names under frontend/public/legacy-site/ that hold this
//                  category's products. More than one entry means the old site
//                  had duplicate pages for the same category; their products are
//                  merged and de-duplicated.
//   extraPages   - optional. Brand landing pages and the old home page, which mixed
//                  products from several categories together. Only the products that
//                  no category's `pages` already provide are taken from them, so
//                  nothing is listed twice and nothing is lost.
//   imageFolders - folders under frontend/public/assets/bikes/ used as a photo
//                  fallback for categories whose legacy page has no per-product text.
//
// Read only by the scripts in frontend/scripts/, so it stays plain .mjs and can be
// imported by Node without a build step. Re-run both generators after editing:
//
//   node scripts/generate-products.mjs
//   node scripts/generate-category-images.mjs
export const legacySources = {
  'sr400-500': {
    pages: ['SR.html', 'SR2.html'],
    imageFolders: ['yamaha', 'nut', 'th3', 'fity', 'bangclon sr'],
    extraPages: ['index.html'],
  },
  'sr-dream': {
    pages: ['SR ในฝันของคุณ.html'],
    imageFolders: ['official'],
  },
  'sr-maintenance': {
    pages: ['วิธีดูแลรักษา SR ของคุณ.html'],
    // A maintenance guide, not a product page: only its own illustrations belong here.
    imageFolders: [],
  },
  'sr-swingarm': {
    pages: ['swingarm_sr.html', 'swingarmsr.html'],
    imageFolders: ['svingarm sr'],
  },
  'sr-trip': {
    pages: ['tripsr.html'],
    imageFolders: ['tripsr'],
  },
  'srx400-600': {
    pages: ['srx.html', 'yamaha srx.html'],
    imageFolders: ['Srx'],
  },
  'sr-seat': {
    pages: ['Seat.html'],
    imageFolders: ['sr gb'],
  },
  xs650: {
    pages: ['xs650.html'],
    imageFolders: ['XS650'],
  },
  xt500: {
    pages: ['xt500.html'],
    imageFolders: ['yamaha'],
  },
  'r15-xsr155': {
    pages: ['R15_XSR.html'],
    imageFolders: ['R15'],
  },
  xsr: {
    pages: ['XSR.html'],
    imageFolders: ['XSR'],
  },
  'r3-mt03': {
    pages: ['R3.html'],
    imageFolders: ['R3'],
  },
  'r7-r9': {
    pages: ['R9-R7.html'],
    imageFolders: ['R9'],
  },
  'r1-r6': {
    pages: ['R1_R6.html'],
    imageFolders: ['R1'],
    extraPages: ['YAMAHA.html'],
  },
  tempter400: {
    pages: ['Tempter400.html'],
    imageFolders: ['thailand'],
  },
  cb750: {
    pages: ['CB750k.html'],
    imageFolders: ['honda cb750'],
  },
  'gb250-400': {
    pages: ['honda_GB250_400.html', 'honda gb250-400.html'],
    imageFolders: ['Honda Gb250-400'],
  },
  cb400ss: {
    pages: ['honda cb400ss.html'],
    imageFolders: ['honda cb400ss'],
  },
  nc35: {
    pages: ['NC35.html'],
    imageFolders: ['Honda NC35'],
  },
  'nsr-2t': {
    pages: ['2T.html'],
    imageFolders: ['2T'],
  },
  'monkey-msx125': {
    pages: ['Monkey_msx125.html', 'msx125.html'],
    imageFolders: ['MSX'],
  },
  'cbr150-250': {
    pages: ['CBR150r_CBR250rr.html'],
    imageFolders: ['CBR250'],
  },
  cb150r: {
    pages: ['CB150r.html'],
    imageFolders: ['CB150r'],
  },
  'cbr600-1000': {
    pages: [],
    extraPages: ['honda.html'],
    imageFolders: ['CBR600RR'],
  },
  'w650-w800': {
    pages: ['w650.html'],
    imageFolders: ['Kawasaki w650'],
  },
  estrella250: {
    pages: ['Estrella250.html'],
    imageFolders: ['kawasaki-Estrella'],
    extraPages: ['kawasaki.html'],
  },
  ksr110: {
    pages: ['KSR110.html'],
    imageFolders: ['kawasaki ksr 110'],
  },
  'ninja250-400': {
    pages: ['Ninja250_300_Ninja400.html'],
    imageFolders: ['Ninja400'],
  },
  ninja300: {
    pages: ['Ninja300.html'],
    imageFolders: ['Ninja300'],
  },
  zx10rr: {
    pages: ['Ninjazx10rr.html'],
    imageFolders: ['NinjaZX10R'],
  },
  suzuki: {
    pages: ['suzuki.html'],
    imageFolders: ['suzuki'],
  },
  bmw: {
    pages: ['BMW.html'],
    imageFolders: ['BMW'],
  },
  'ducati-monster': {
    pages: ['ducati_Monter795.html'],
    imageFolders: ['Ducati'],
  },
  'triumph-truxton': {
    pages: ['triumph_Truxton900.html'],
    imageFolders: ['Triumph'],
  },
  'ktm-rc390': {
    pages: ['KTM-RC390.html'],
    imageFolders: ['KTM'],
  },
  'harley-sportster': {
    pages: ['HD.html', 'Sportter.html'],
    imageFolders: ['HD'],
  },
  'royal-enfield': {
    pages: ['Royal Enfield.html'],
    imageFolders: ['Royal Enfield'],
  },
  'royal-enfield-gt535': {
    pages: ['RoyalEnfield_GT500.html'],
    imageFolders: ['Royal Enfield'],
  },
  'stallions-centaur': {
    pages: ['Stallions.html'],
    imageFolders: ['Stallions centaur'],
  },
  ohlins: {
    pages: ['Ohlins.html'],
    imageFolders: ['Ohlins'],
  },
  'sprocket-alloys': {
    pages: ['Sprocket_Alloys.html'],
    imageFolders: ['sprocket all'],
  },
  'bolts-nut': {
    pages: ['Bolts-nut.html'],
    imageFolders: ['Nut-Sus'],
  },
  'parts-all': {
    pages: ['Part All.html'],
    // The page carries its own 45-photo catalogue; the shared "part" folder would
    // only repeat photos already shown under the model they belong to.
    imageFolders: [],
  },
  'part-numbers': {
    pages: ['nunber part.html'],
    // The price-list photos were never uploaded, so this page is the table alone.
    imageFolders: [],
  },
  products: {
    pages: ['products.html', 'products all.html'],
    imageFolders: ['official'],
    extraPages: ['index 1.html'],
  },
  'racing-team': {
    pages: ['Racing.html', 'Racing Tame.html'],
    imageFolders: ['Racing'],
  },
  gallery: {
    pages: ['Pictures.html'],
    imageFolders: ['custom bike'],
  },
  'race-photos': {
    pages: ['รวมภาพแข่ง.html'],
    imageFolders: ['Racing Gb'],
  },
};
