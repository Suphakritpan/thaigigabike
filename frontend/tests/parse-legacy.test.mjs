// Checks the two legacy parsers against real pages in frontend/public/legacy-site.
// Run with: npm test
import { strict as assert } from 'node:assert';
import test from 'node:test';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseLegacyPage } from '../scripts/lib/parse-legacy-page.mjs';
import { parseLegacyPartTable } from '../scripts/lib/parse-legacy-part-table.mjs';
import { toPublicUrl } from '../scripts/lib/html-text.mjs';

const legacyDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'legacy-site');

test('reads products, prices and photos from a product page', () => {
  const { items } = parseLegacyPage(join(legacyDir, 'Ohlins.html'));
  assert.ok(items.length > 20, `expected many products, got ${items.length}`);

  const brakeMount = items.find((item) => item.description.includes('ขาปั๊มเบรกเรเดี้ยนเม้าท์'));
  assert.ok(brakeMount, 'known product is missing');
  assert.equal(brakeMount.price, '3,800 ฿');
  assert.ok(brakeMount.images.every((image) => image.startsWith('/assets/')));
  assert.ok(brakeMount.name.length <= 60 && brakeMount.name.length > 0);
});

test('drops the shop header and menu images repeated on every legacy page', () => {
  const { items } = parseLegacyPage(join(legacyDir, 'Ohlins.html'));
  assert.ok(!items.some((item) => item.description.includes('GIGA BIKE FACTORY')));
  assert.ok(!items.some((item) => item.images.some((image) => image.includes('LOGO-GIGA'))));
});

test('keeps image folder names that contain spaces', () => {
  const { trailingImages } = parseLegacyPage(join(legacyDir, 'swingarm_sr.html'));
  assert.ok(trailingImages.some((image) => image.includes('svingarm sr/')));
});

test('reads the price list spread over several sibling tables', () => {
  const rows = parseLegacyPartTable(join(legacyDir, 'products all.html'));
  const withCode = rows.filter((row) => row.code);
  assert.ok(withCode.length > 100, `expected the full price list, got ${withCode.length}`);
  assert.deepEqual(withCode[0], { code: 'G.1', name: 'Fender Front Type 1', price: '2,200 ฿' });
});

test('escapes spaces in asset urls but leaves ampersands alone', () => {
  // A percent-encoded "&" makes the dev server miss the file and serve the app shell.
  assert.equal(toPublicUrl('/assets/bikes/bangclon sr/a.jpg'), '/assets/bikes/bangclon%20sr/a.jpg');
  assert.equal(toPublicUrl('/assets/bikes/k&n/a.jpg'), '/assets/bikes/k&n/a.jpg');
});
