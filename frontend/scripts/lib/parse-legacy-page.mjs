// Parses one legacy Dreamweaver page (frontend/public/legacy-site/*.html) into
// structured products. The old pages are TIS-620 encoded table layouts where a
// product is a run of <img> blocks followed by one paragraph of Thai text that
// ends with the price, so the parser walks the markup in order, collects images
// and emits a product every time a text block closes.
//
// Used by scripts/generate-products.mjs; the legacy files themselves are never
// modified.
import { readFileSync } from 'node:fs';
import { decodeEntities } from './html-text.mjs';

/** The legacy template puts the page's own content between these two comments. */
const CONTENT_START = '<!-- End Content Menu Left -->';
const CONTENT_END = '<!-- Content Menu Right -->';

/** Closing tags that end a text block in the legacy markup. */
const BLOCK_END = /^<\/(?:p|div|td|tr|h[1-6]|li|table|center)>$/i;

/** Shop header/footer text repeated on every legacy page; not product content. */
const BOILERPLATE = [
  'GIGA BIKE FACTORY',
  'CNC Racing Parts',
  'We deliver',
  'We design',
  'Product Of Thailand',
  '081-424-9407',
  'aonggb@yahoo.com',
  'thaigigabike',
  'English / Japanese',
  'For customers who speak',
  // dealer-recruitment banner repeated across pages
  'ตัวแทนจำหน่ายสิ',
];

/** Images narrower than this are spacers, bullets and menu chrome. */
const MIN_IMAGE_WIDTH = 100;

/** Shortest run of characters that can be a real product description. */
const MIN_TEXT_LENGTH = 8;

/** Price as printed by the shop, e.g. "อันละ 3,800 ฿" or "ราคา 700 บาท". */
const PRICE_PATTERN = /([\d][\d,]*(?:\.\d+)?)\s*(?:฿|บาท)/g;

/** Words that start the spec part of a description, so the name stops before them. */
const NAME_STOP_PATTERN = /\s(?:ใส่|ผลิตจาก|สำหรับ|ราคา|มีสี|ขนาด|\(|=)/;

const MAX_NAME_LENGTH = 60;

function isBoilerplate(text) {
  return BOILERPLATE.some((phrase) => text.includes(phrase));
}

function extractPrice(text) {
  const matches = [...text.matchAll(PRICE_PATTERN)];
  const last = matches.at(-1);
  return last ? `${last[1]} ฿` : undefined;
}

function extractName(text) {
  const stop = text.search(NAME_STOP_PATTERN);
  const head = stop > 0 ? text.slice(0, stop) : text;
  const name = head.length > MAX_NAME_LENGTH ? head.slice(0, MAX_NAME_LENGTH).trimEnd() : head;
  return name.replace(/[\s,.:-]+$/, '');
}

function readImage(tag) {
  // Quoted first: several legacy image folders have spaces in their name.
  const src = tag.match(/src\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
  if (!src) return undefined;
  const width = Number(tag.match(/width=["']?(\d+)/i)?.[1] ?? 0);
  const path = decodeEntities(src[1] ?? src[2] ?? src[3]).trim();
  if (!path.startsWith('../assets/') || width < MIN_IMAGE_WIDTH) return undefined;
  // The legacy pages sit one level below the assets folder; the app serves it from the root.
  return path.replace('../assets/', '/assets/');
}

/**
 * @param {string} file absolute path to a legacy .html page
 * @returns {{ items: { name: string, description: string, price?: string, images: string[] }[], trailingImages: string[] }}
 */
export function parseLegacyPage(file) {
  const html = new TextDecoder('windows-874').decode(readFileSync(file));
  const start = html.indexOf(CONTENT_START);
  const end = html.indexOf(CONTENT_END, start);
  if (start === -1 || end === -1) {
    throw new Error(`No content region found in ${file}`);
  }

  const content = html
    .slice(start + CONTENT_START.length, end)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  const items = [];
  let images = [];
  let buffer = '';

  const flush = () => {
    const text = decodeEntities(buffer).replace(/\s+/g, ' ').trim();
    buffer = '';
    if (text.length < MIN_TEXT_LENGTH) return;
    if (isBoilerplate(text)) {
      images = [];
      return;
    }
    items.push({
      name: extractName(text),
      description: text,
      price: extractPrice(text),
      images,
    });
    images = [];
  };

  for (const token of content.split(/(<[^>]+>)/)) {
    if (!token) continue;
    if (!token.startsWith('<')) {
      buffer += token;
      continue;
    }
    if (/^<img\b/i.test(token)) {
      const image = readImage(token);
      if (image) images.push(image);
    } else if (BLOCK_END.test(token) || /^<hr\b/i.test(token)) {
      flush();
    }
  }
  flush();

  return { items, trailingImages: images };
}
