// Small shared helpers for reading the legacy Dreamweaver pages, which are
// TIS-620 encoded HTML written by hand over many years.

const ENTITIES = {
  '&nbsp;': ' ',
  '&amp;': '&',
  '&quot;': '"',
  '&apos;': "'",
  '&lt;': '<',
  '&gt;': '>',
  '&ndash;': '-',
  '&mdash;': '-',
  '&lsquo;': "'",
  '&rsquo;': "'",
  '&ldquo;': '"',
  '&rdquo;': '"',
  '&hellip;': '...',
  '&times;': 'x',
  '&deg;': '°',
};

const ENTITY_PATTERN = /&(?:#\d+|#x[0-9a-f]+|[a-z]+);/gi;

/** Replaces the HTML entities the legacy pages use, named or numeric. */
export function decodeEntities(text) {
  return text.replace(ENTITY_PATTERN, (entity) => {
    const named = ENTITIES[entity.toLowerCase()];
    if (named !== undefined) return named;
    const numeric = entity.match(/^&#(x)?([0-9a-f]+);$/i);
    if (numeric) return String.fromCodePoint(parseInt(numeric[2], numeric[1] ? 16 : 10));
    return entity;
  });
}

/** Strips tags from a fragment and collapses its whitespace into single spaces. */
export function toPlainText(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Escapes only the characters that would break a URL path, so folder names such as
 * "bangclon sr" work. `&` is deliberately left alone: it is legal in a path segment,
 * and percent-encoding it makes the dev server miss the file and serve the app shell
 * instead of the image.
 */
export function toPublicUrl(path) {
  return path.replace(/[ #?%]/g, (character) => {
    return `%${character.charCodeAt(0).toString(16).toUpperCase()}`;
  });
}
