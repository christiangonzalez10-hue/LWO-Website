/**
 * Check generated documents and production URL mappings without running JS.
 * A successful React route alone cannot catch a host serving the SPA fallback.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
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

  for (const alias of path === '/' ? ['/'] : [path.replace(/\/$/, ''), path]) {
    const rule = rewrites.find((rewrite) => matches(rewrite.from, alias));
    assert.equal(
      rule?.to,
      documentPath,
      `${alias} must map to ${documentPath} before any homepage fallback.`,
    );
  }
  console.log(`[check-prerender] ✓ ${path} — content, canonical, metadata, and URL mappings`);
}