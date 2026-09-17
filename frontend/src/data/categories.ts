import type { Category } from '@/types/category';

/**
 * Product categories migrated from the original Dreamweaver site
 * (frontend/public/legacy-site/*.html). See MIGRATION_PROGRESS.md for
 * which legacy pages still need their full content brought over.
 */
export const categories: Category[] = [
  // --- YAMAHA -----------------------------------------------------------
  {
    slug: 'sr400-500',
    title: 'SR 400, 500 (New)',
    group: 'yamaha',
    legacyFile: 'SR.html',
    description: 'อะไหล่และของแต่ง Yamaha SR400 / SR500',
  },
  {
    slug: 'sr-dream',
    title: 'SR ในฝันของคุณ',
    group: 'yamaha',
    legacyFile: 'SR ในฝันของคุณ.html',
  },
  {
    slug: 'sr-maintenance',
    title: 'วิธีดูแลรักษา SR ของคุณ',
    group: 'yamaha',
    legacyFile: 'วิธีดูแลรักษา SR ของคุณ.html',
  },
  {
    slug: 'sr-swingarm',
    title: 'Swingarm SR',
    group: 'yamaha',
    legacyFile: 'swingarm_sr.html',
  },
  {
    slug: 'sr-trip',
    title: 'ทริป SR',
    group: 'yamaha',
    legacyFile: 'tripsr.html',
  },
  {
    slug: 'srx400-600',
    title: 'SRX 400-600',
    group: 'yamaha',
    legacyFile: 'srx.html',
  },
  {
    slug: 'sr-seat',
    title: 'เบาะ SR',
    group: 'yamaha',
    legacyFile: 'Seat.html',
  },
  {
    slug: 'xs650',
    title: 'XS650, TX650',
    group: 'yamaha',
    legacyFile: 'xs650.html',
  },
  {
    slug: 'xt500',
    title: 'XT, TT500',
    group: 'yamaha',
    legacyFile: 'xt500.html',
  },
  {
    slug: 'r15-xsr155',
    title: 'R15, XSR155, XMAX300',
    group: 'yamaha',
    legacyFile: 'R15_XSR.html',
  },
  {
    slug: 'xsr',
    title: 'XSR',
    group: 'yamaha',
    legacyFile: 'XSR.html',
  },
  {
    slug: 'r3-mt03',
    title: 'R3, MT03, R25',
    group: 'yamaha',
    legacyFile: 'R3.html',
  },
  {
    slug: 'r7-r9',
    title: 'R7, R9 (New)',
    group: 'yamaha',
    legacyFile: 'R9-R7.html',
  },
  {
    slug: 'r1-r6',
    title: 'R1, R6',
    group: 'yamaha',
    legacyFile: 'R1_R6.html',
  },
  {
    slug: 'tempter400',
    title: 'Tempter 400, Virago 250',
    group: 'yamaha',
    legacyFile: 'Tempter400.html',
  },

  // --- HONDA --------------------------------------------------------------
  {
    slug: 'cb750',
    title: 'CB750 K0-K7',
    group: 'honda',
    legacyFile: 'CB750k.html',
  },
  {
    slug: 'gb250-400',
    title: 'GB250, GB400, CB400SS',
    group: 'honda',
    legacyFile: 'honda_GB250_400.html',
  },
  {
    slug: 'cb400ss',
    title: 'CB400SS',
    group: 'honda',
    legacyFile: 'honda cb400ss.html',
  },
  {
    slug: 'nc35',
    title: 'NC30, NC35, CB1300',
    group: 'honda',
    legacyFile: 'NC35.html',
  },
  {
    slug: 'nsr-2t',
    title: 'NSR150SP, Dash125 & 2T, NSR50',
    group: 'honda',
    legacyFile: '2T.html',
  },
  {
    slug: 'monkey-msx125',
    title: 'Monkey 50, 125, MSX, Grom, DAX125',
    group: 'honda',
    legacyFile: 'Monkey_msx125.html',
  },
  {
    slug: 'cbr150-250',
    title: 'CBR250RR, CBR250-300, CBR150R',
    group: 'honda',
    legacyFile: 'CBR150r_CBR250rr.html',
  },
  {
    slug: 'cb150r',
    title: 'CB150R',
    group: 'honda',
    legacyFile: 'CB150r.html',
  },

  // --- KAWASAKI -------------------------------------------------------------
  {
    slug: 'w650-w800',
    title: 'W650, W800',
    group: 'kawasaki',
    legacyFile: 'w650.html',
  },
  {
    slug: 'estrella250',
    title: 'Estrella250, TR250',
    group: 'kawasaki',
    legacyFile: 'Estrella250.html',
  },
  {
    slug: 'ksr110',
    title: 'KSR110, KR150',
    group: 'kawasaki',
    legacyFile: 'KSR110.html',
  },
  {
    slug: 'ninja250-400',
    title: 'Ninja ZX250R, Ninja 250, 300, 400',
    group: 'kawasaki',
    legacyFile: 'Ninja250_300_Ninja400.html',
  },
  {
    slug: 'ninja300',
    title: 'Ninja300',
    group: 'kawasaki',
    legacyFile: 'Ninja300.html',
  },
  {
    slug: 'zx10rr',
    title: 'ZX10RR',
    group: 'kawasaki',
    legacyFile: 'Ninjazx10rr.html',
  },

  // --- SUZUKI ---------------------------------------------------------------
  {
    slug: 'suzuki',
    title: 'Suzuki',
    group: 'suzuki',
    legacyFile: 'suzuki.html',
  },

  // --- EUROPEAN / OTHER BRANDS ----------------------------------------------
  {
    slug: 'bmw',
    title: 'BMW, S1000RR',
    group: 'european',
    legacyFile: 'BMW.html',
  },
  {
    slug: 'ducati-monster',
    title: 'Ducati Monster 795/796/Hyper821',
    group: 'european',
    legacyFile: 'ducati_Monter795.html',
  },
  {
    slug: 'triumph-truxton',
    title: 'Truxton 900, T100, T120, Street Twin',
    group: 'european',
    legacyFile: 'triumph_Truxton900.html',
  },
  {
    slug: 'ktm-rc390',
    title: 'KTM RC390',
    group: 'european',
    legacyFile: 'KTM-RC390.html',
  },
  {
    slug: 'harley-sportster',
    title: 'Harley Davidson Sportster 883-1200',
    group: 'european',
    legacyFile: 'HD.html',
  },
  {
    slug: 'royal-enfield',
    title: 'Royal Enfield',
    group: 'european',
    legacyFile: 'Royal Enfield.html',
  },
  {
    slug: 'royal-enfield-gt535',
    title: 'Royal Enfield GT535, Interceptor 650',
    group: 'european',
    legacyFile: 'RoyalEnfield_GT500.html',
  },
  {
    slug: 'stallions-centaur',
    title: 'Stallions Centaur 150',
    group: 'other',
    legacyFile: 'Stallions.html',
  },

  // --- PARTS / ACCESSORIES ----------------------------------------------------
  {
    slug: 'ohlins',
    title: 'Ohlins FG620 & FG433',
    group: 'parts',
    legacyFile: 'Ohlins.html',
    description: 'โช้คอัพ Ohlins สำหรับรถคลาสสิกและรถแต่ง',
  },
  {
    slug: 'sprocket-alloys',
    title: 'Sprocket & Alloys, Circuit Parts',
    group: 'parts',
    legacyFile: 'Sprocket_Alloys.html',
  },
  {
    slug: 'bolts-nut',
    title: 'น็อตซิ่ง (Bolts & Nut for Racing)',
    group: 'parts',
    legacyFile: 'Bolts-nut.html',
  },
  {
    slug: 'parts-all',
    title: 'อะไหล่ทั้งหมด',
    group: 'parts',
    legacyFile: 'Part All.html',
  },
  {
    slug: 'part-numbers',
    title: 'หมายเลขอะไหล่',
    group: 'parts',
    legacyFile: 'nunber part.html',
  },
  {
    slug: 'products',
    title: 'สินค้าทั้งหมด',
    group: 'parts',
    legacyFile: 'products.html',
  },

  // --- RACING / GALLERY --------------------------------------------------------
  {
    slug: 'racing-team',
    title: 'Giga Bike Racing Team',
    group: 'racing',
    legacyFile: 'Racing.html',
  },
  {
    slug: 'gallery',
    title: 'ภาพกิจกรรม',
    group: 'racing',
    legacyFile: 'Pictures.html',
  },
  {
    slug: 'race-photos',
    title: 'รวมภาพการแข่งขัน',
    group: 'racing',
    legacyFile: 'รวมภาพแข่ง.html',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoriesByGroup(group: Category['group']): Category[] {
  return categories.filter((category) => category.group === group);
}
