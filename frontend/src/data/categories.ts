import type { Category } from '@/types/category';

/**
 * Product categories migrated from the original Dreamweaver site. The legacy
 * pages and image folders each category was built from live in
 * src/data/legacySources.mjs, which the catalog generator reads.
 */
export const categories: Category[] = [
  // --- YAMAHA -----------------------------------------------------------
  {
    slug: 'sr400-500',
    title: 'SR 400, 500 (New)',
    group: 'yamaha',
    description: 'อะไหล่และของแต่ง Yamaha SR400 / SR500',
  },
  {
    slug: 'sr-dream',
    title: 'SR ในฝันของคุณ',
    group: 'yamaha',
    kind: 'showcase',
    description: 'ภาพ Yamaha SR ของลูกค้าที่แต่งกับทางร้าน แยกตามปีของรถ',
  },
  {
    slug: 'sr-maintenance',
    title: 'วิธีดูแลรักษา SR ของคุณ',
    group: 'yamaha',
    kind: 'showcase',
    description: 'วิธีดูแลรักษา Yamaha SR ให้ใช้งานได้นาน สรุปจากประสบการณ์ของทางร้าน',
  },
  {
    slug: 'sr-swingarm',
    title: 'Swingarm SR',
    group: 'yamaha',
    kind: 'showcase',
    description: 'สวิงอาร์มอลูมิเนียมสำหรับ SR ที่ทางร้านออกแบบและผลิตเอง',
  },
  {
    slug: 'sr-trip',
    title: 'ทริป SR',
    group: 'yamaha',
    kind: 'showcase',
    description: 'ภาพทริปขี่รถของกลุ่มลูกค้าและเพื่อน ๆ ของร้าน',
  },
  {
    slug: 'srx400-600',
    title: 'SRX 400-600',
    group: 'yamaha',
  },
  {
    slug: 'sr-seat',
    title: 'เบาะ SR',
    group: 'yamaha',
  },
  {
    slug: 'xs650',
    title: 'XS650, TX650',
    group: 'yamaha',
  },
  {
    slug: 'xt500',
    title: 'XT, TT500',
    group: 'yamaha',
  },
  {
    slug: 'r15-xsr155',
    title: 'R15, XSR155, XMAX300',
    group: 'yamaha',
  },
  {
    slug: 'xsr',
    title: 'XSR',
    group: 'yamaha',
  },
  {
    slug: 'r3-mt03',
    title: 'R3, MT03, R25',
    group: 'yamaha',
  },
  {
    slug: 'r7-r9',
    title: 'R7, R9 (New)',
    group: 'yamaha',
  },
  {
    slug: 'r1-r6',
    title: 'R1, R6',
    group: 'yamaha',
  },
  {
    slug: 'tempter400',
    title: 'Tempter 400, Virago 250',
    group: 'yamaha',
  },

  // --- HONDA --------------------------------------------------------------
  {
    slug: 'cb750',
    title: 'CB750 K0-K7',
    group: 'honda',
  },
  {
    slug: 'gb250-400',
    title: 'GB250, GB400, CB400SS',
    group: 'honda',
  },
  {
    slug: 'cb400ss',
    title: 'CB400SS',
    group: 'honda',
  },
  {
    slug: 'nc35',
    title: 'NC30, NC35, CB1300',
    group: 'honda',
  },
  {
    slug: 'nsr-2t',
    title: 'NSR150SP, Dash125 & 2T, NSR50',
    group: 'honda',
  },
  {
    slug: 'monkey-msx125',
    title: 'Monkey 50, 125, MSX, Grom, DAX125',
    group: 'honda',
  },
  {
    slug: 'cbr150-250',
    title: 'CBR250RR, CBR250-300, CBR150R',
    group: 'honda',
  },
  {
    slug: 'cb150r',
    title: 'CB150R',
    group: 'honda',
  },
  {
    slug: 'cbr600-1000',
    title: 'CBR600RR, CBR1000RR, CBR650R',
    group: 'honda',
    description: 'อะไหล่และของแต่งสำหรับ Honda CBR600RR, CBR1000RR และ CBR650R',
  },

  // --- KAWASAKI -------------------------------------------------------------
  {
    slug: 'w650-w800',
    title: 'W650, W800',
    group: 'kawasaki',
  },
  {
    slug: 'estrella250',
    title: 'Estrella250, TR250',
    group: 'kawasaki',
  },
  {
    slug: 'ksr110',
    title: 'KSR110, KR150',
    group: 'kawasaki',
  },
  {
    slug: 'ninja250-400',
    title: 'Ninja ZX250R, Ninja 250, 300, 400',
    group: 'kawasaki',
  },
  {
    slug: 'ninja300',
    title: 'Ninja300',
    group: 'kawasaki',
  },
  {
    slug: 'zx10rr',
    title: 'ZX10RR',
    group: 'kawasaki',
  },

  // --- SUZUKI ---------------------------------------------------------------
  {
    slug: 'suzuki',
    title: 'Suzuki',
    group: 'suzuki',
  },

  // --- EUROPEAN / OTHER BRANDS ----------------------------------------------
  {
    slug: 'bmw',
    title: 'BMW, S1000RR',
    group: 'european',
  },
  {
    slug: 'ducati-monster',
    title: 'Ducati Monster 795/796/Hyper821',
    group: 'european',
  },
  {
    slug: 'triumph-truxton',
    title: 'Truxton 900, T100, T120, Street Twin',
    group: 'european',
  },
  {
    slug: 'ktm-rc390',
    title: 'KTM RC390',
    group: 'european',
  },
  {
    slug: 'harley-sportster',
    title: 'Harley Davidson Sportster 883-1200',
    group: 'european',
  },
  {
    slug: 'royal-enfield',
    title: 'Royal Enfield',
    group: 'european',
  },
  {
    slug: 'royal-enfield-gt535',
    title: 'Royal Enfield GT535, Interceptor 650',
    group: 'european',
  },
  {
    slug: 'stallions-centaur',
    title: 'Stallions Centaur 150',
    group: 'other',
  },

  // --- PARTS / ACCESSORIES ----------------------------------------------------
  {
    slug: 'ohlins',
    title: 'Ohlins FG620 & FG433',
    group: 'parts',
    description: 'โช้คอัพ Ohlins สำหรับรถคลาสสิกและรถแต่ง',
  },
  {
    slug: 'sprocket-alloys',
    title: 'Sprocket & Alloys, Circuit Parts',
    group: 'parts',
  },
  {
    slug: 'bolts-nut',
    title: 'น็อตซิ่ง (Bolts & Nut for Racing)',
    group: 'parts',
  },
  {
    slug: 'parts-all',
    title: 'อะไหล่ทั้งหมด',
    group: 'parts',
    kind: 'showcase',
    description: 'แค็ตตาล็อกภาพอะไหล่ทั้งหมดที่ทางร้านผลิต',
  },
  {
    slug: 'part-numbers',
    title: 'หมายเลขอะไหล่',
    group: 'parts',
    description: 'ตารางรหัสอะไหล่และราคา สำหรับใช้อ้างอิงเวลาสั่งสินค้า',
  },
  {
    slug: 'products',
    title: 'สินค้าทั้งหมด',
    group: 'parts',
    description: 'รายการสินค้าทั้งหมดพร้อมรหัสอะไหล่และราคา',
  },

  // --- RACING / GALLERY --------------------------------------------------------
  {
    slug: 'racing-team',
    title: 'Giga Bike Racing Team',
    group: 'racing',
    kind: 'showcase',
    description: 'ทีมแข่ง Giga Bike Racing Team และภาพจากสนามแข่ง',
  },
  {
    slug: 'gallery',
    title: 'ภาพกิจกรรม',
    group: 'racing',
    kind: 'showcase',
    description: 'ภาพรถที่ทางร้านแต่งและผลงานที่ผ่านมา',
  },
  {
    slug: 'race-photos',
    title: 'รวมภาพการแข่งขัน',
    group: 'racing',
    kind: 'showcase',
    description: 'รวมภาพการแข่งขันที่ทีมของร้านเข้าร่วม',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoriesByGroup(group: Category['group']): Category[] {
  return categories.filter((category) => category.group === group);
}
