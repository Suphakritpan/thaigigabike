// Some legacy pages (nunber part.html, Part All.html, products all.html) carry the
// shop's price list as an HTML table: part number + name, a photo that was never
// uploaded, and a price. This reads those tables into plain rows so the new site can
// show them as a readable price list instead of a picture of a table.
//
// Used by scripts/generate-part-numbers.mjs.
import { readFileSync } from 'node:fs';
import { decodeEntities } from './html-text.mjs';

const ROW_PATTERN = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
const CELL_PATTERN = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
const CODE_PATTERN = /^([A-Z]{1,4}[.\s]?\d+[A-Za-z]?)\b[.\s-]*(.*)$/;
const PRICE_PATTERN = /[\d][\d,]*(?:\.\d+)?/;

function cellText(html) {
  return decodeEntities(html.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ''))
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join(' ');
}

function rowCells(rowHtml) {
  return [...rowHtml.matchAll(CELL_PATTERN)].map((match) => cellText(match[1]));
}

function findColumns(cells) {
  const part = cells.findIndex((cell) => /part\s*number/i.test(cell));
  const price = cells.findIndex((cell) => /^price$/i.test(cell));
  return part === -1 || price === -1 ? undefined : { part, price };
}

function splitCode(text) {
  const match = text.match(CODE_PATTERN);
  if (!match) return { name: text };
  return { code: match[1].replace(/\s+/g, ''), name: match[2].trim() || match[1] };
}

/**
 * The price list is split across many sibling <table> elements and only the first
 * one repeats the header row, so rows are read in document order and the column
 * layout from the most recent header is reused until another header appears.
 *
 * @param {string} file absolute path to a legacy .html page
 * @returns {{ code?: string, name: string, price?: string }[]}
 */
export function parseLegacyPartTable(file) {
  const html = new TextDecoder('windows-874').decode(readFileSync(file));
  const rows = [];
  let columns;

  for (const match of html.matchAll(ROW_PATTERN)) {
    const cells = rowCells(match[1]);
    const header = findColumns(cells);
    if (header) {
      columns = header;
      continue;
    }
    if (!columns) continue;

    const partCell = cells[columns.part] ?? '';
    if (!partCell) continue;
    const price = (cells[columns.price] ?? '').match(PRICE_PATTERN)?.[0];
    rows.push({ ...splitCode(partCell), ...(price ? { price: `${price} ฿` } : {}) });
  }

  return rows;
}
