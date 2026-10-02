/**
 * Check generated documents and production URL mappings without running JS.
 * A successful React route alone cannot catch a host serving the SPA fallback.
 */
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const base = 'https://www.lwosolutions.com';
const expectedHeadings = new Map([
  ['/', 'Transforming offices. Elevating work.'],
  ['/about/', 'Who We Are'],
  ['/contact/', 'Request a Consultation'],
  ['/our-work/', 'Our Work'],
  ['/services/office-installations/', 'Office Furniture Installation in Salt Lake City'],
  ['/services/commercial-storage/', 'Commercial Storage in Salt Lake City'],
  ['/services/commercial-moving/', 'Commercial Office Movers in Salt Lake City'],
  ['/services/commercial-painting/', 'Commercial Painting Services in Salt Lake City'],
  ['/services/commercial-design-furniture/', 'Commercial Office Design & Furniture in Salt Lake City'],
  ['/services/commercial-relocation/', 'Office Relocation Services in Salt Lake City'],
]);

const sitemap = readFileSync(resolve(root, 'dist/sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(new Set(urls).size, urls.length, 'Sitemap URLs must be unique.');
assert.deepEqual(
  [...urls].sort(),
  [...expectedHeadings.keys()].map((path) => `${base}${path}`).sort(),
  'Every prerendered route needs a sitemap entry and a content regression check.',
);

const config = readFileSync(resolve(root, '.replit-artifact/artifact.toml'), 'utf8');
const rewrites = config
  .split(/^\[\[services\.production\.rewrites\]\]\s*$/m)
  .slice(1)
  .map((section) => ({
    from: section.match(/^from\s*=\s*"([^"]+)"/m)?.[1],
    to: section.match(/^to\s*=\s*"([^"]+)"/m)?.[1],
  }));
const matches = (pattern, path) => {
  if (!pattern) return false;
  const regex = pattern.split('*').map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*');
  return new RegExp(`^${regex}$`).test(path);
};
const titles = new Set();

function jpegDimensions(bytes) {
  assert.equal(bytes.readUInt16BE(0), 0xffd8, 'OG assets must be valid JPEGs.');
  let offset = 2;
  while (offset < bytes.length - 8) {
    assert.equal(bytes[offset], 0xff, 'Invalid JPEG marker.');
    const marker = bytes[offset + 1];
    offset += 2;
    if ([0xc0, 0xc1, 0xc2].includes(marker)) {
      return [bytes.readUInt16BE(offset + 5), bytes.readUInt16BE(offset + 3)];
    }
    offset += bytes.readUInt16BE(offset);
  }
  throw new Error('JPEG dimensions were not found.');
}

const icon = readFileSync(resolve(root, 'dist/favicon.ico'));
assert.equal(icon.readUInt16LE(0), 0);
assert.equal(icon.readUInt16LE(2), 1, 'favicon.ico must be an ICO, not HTML.');
assert.equal(icon.readUInt16LE(4), 3);
const iconSizes = [0, 1, 2].map((index) => {
  const offset = 6 + index * 16;
  assert.equal(icon[offset], icon[offset + 1], 'Favicon frames must be square.');
  return icon[offset];
});
assert.deepEqual(iconSizes.sort((a, b) => a - b), [16, 32, 48]);
for (const subset of ['latin', 'latin-ext']) {
  const font = readFileSync(resolve(root, `dist/fonts/montserrat-${subset}-variable.woff2`));
  assert.equal(font.subarray(0, 4).toString(), 'wOF2', 'Montserrat must be a valid local WOFF2.');
}
const styles = readdirSync(resolve(root, 'dist/assets'))
  .filter((file) => file.endsWith('.css'))
  .map((file) => readFileSync(resolve(root, 'dist/assets', file), 'utf8'))
  .join('\n');
assert.ok(styles.includes('@font-face') && styles.includes('/fonts/montserrat-latin-variable.woff2'));
assert.ok(!/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(styles));

for (const [path, heading] of expectedHeadings) {
  const documentPath = path === '/' ? '/index.html' : `${path}index.html`;
  const html = readFileSync(resolve(root, `dist${documentPath}`), 'utf8');
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  assert.equal(h1, heading, `${path} must contain its own page content.`);
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  assert.equal(canonicals.length, 1, `${path} needs exactly one canonical.`);
  assert.equal(canonicals[0][1], `${base}${path}`, `${path} has the wrong canonical.`);
  assert.ok(html.includes(`<meta property="og:url" content="${base}${path}"`));
  const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  assert.ok(ogImage?.startsWith(`${base}/images/og/`), `${path} needs its landscape OG asset.`);
  const imageFile = resolve(root, 'dist', new URL(ogImage).pathname.slice(1));
  assert.deepEqual(jpegDimensions(readFileSync(imageFile)), [1200, 630]);
  assert.ok(html.includes('<meta property="og:image:width" content="1200"'));
  assert.ok(html.includes('<meta property="og:image:height" content="630"'));
  assert.ok(html.includes('href="/favicon.ico"') && html.includes('href="/favicon.svg"'));
  assert.ok(html.includes('href="/fonts/montserrat-latin-variable.woff2"'));
  assert.ok(!/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(html));
  const beacons = [...html.matchAll(/<script\b[^>]*src="https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js"[^>]*>/g)];
  assert.equal(beacons.length, 1, `${path} needs exactly one Cloudflare Web Analytics beacon.`);
  const beaconConfig = beacons[0][0].match(/data-cf-beacon='([^']+)'/)?.[1];
  assert.ok(beaconConfig, `${path} is missing its beacon configuration.`);
  assert.match(JSON.parse(beaconConfig).token, /^[a-f0-9]{32}$/, 'Use the real Cloudflare public site ID.');
  assert.ok(html.includes("gtag('config', 'G-XE38ZVRD41')"), 'Preserve existing GA4.');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `${path} needs a unique title.`);
  titles.add(title);
  assert.ok(!html.includes('<!--app-html-->') && !html.includes('<!--app-head-->'));

  if (path === '/contact/') {
    assert.ok(html.includes('<form'), 'Contact must contain ContactPage.tsx’s inquiry form.');
    assert.ok(!html.includes('Transforming offices.'), 'Contact must not contain homepage content.');
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(schema['@type'], 'ContactPage');
  }
  if (path === '/about/') {
    assert.ok(html.includes('Salt Lake City') && html.includes('Wasatch Front'));
    assert.ok(!html.includes('Mountain West'), 'About must use the actual local service area.');
    for (const section of ['OUR MISSION', 'OUR VISION', 'OUR VALUES']) assert.ok(html.includes(section));
  }

  for (const alias of path === '/' ? ['/'] : [path.replace(/\/$/, ''), path]) {
    const rule = rewrites.find((rewrite) => matches(rewrite.from, alias));
    assert.equal(
      rule?.to,
      documentPath,
      `${alias} must map to ${documentPath} before any homepage fallback.`,
    );
  }
  console.log(`[check-prerender] ✓ ${path} — content, canonical, 1200×630 OG, fonts, icons, and URL mappings`);
}