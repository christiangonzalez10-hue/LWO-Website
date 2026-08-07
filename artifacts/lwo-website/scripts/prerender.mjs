/**
 * Static pre-render script — runs after `vite build` as part of `npm run build`.
 *
 * 1. Builds an SSR bundle (entry-server.tsx → dist/.ssr/entry-server.js)
 * 2. Loads the built HTML template from dist/index.html
 * 3. For each route: renders the React tree to static HTML, injects per-route
 *    meta tags, and writes the result to dist/{route}/index.html
 * 4. Cleans up the temporary SSR bundle
 *
 * Result: Cloudflare Pages serves fully-populated HTML for every URL, so
 * crawlers and link-preview scrapers see real content without executing JS.
 */

import { build } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const ssrOutDir = resolve(root, 'dist/.ssr');

// ── 1. Build the SSR bundle ──────────────────────────────────────────────────
console.log('\n[prerender] Building SSR bundle…');
await build({
  configFile: resolve(root, 'vite.config.ts'),
  mode: 'production',
  logLevel: 'warn',
  build: {
    ssr: resolve(root, 'src/entry-server.tsx'),
    outDir: ssrOutDir,
    emptyOutDir: true,
    // Keep the file format predictable for our dynamic import below
    rollupOptions: {
      output: { format: 'esm' },
    },
  },
});

// ── 2. Load the SSR render function ─────────────────────────────────────────
const { render } = await import(resolve(ssrOutDir, 'entry-server.js'));

// ── 3. Load the built HTML template (produced by `vite build` client pass) ──
const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8');

// ── 4. Per-route SEO metadata ────────────────────────────────────────────────
const BASE = 'https://www.lwosolutions.com';
const DEFAULT_IMAGE = `${BASE}/images/lwo-hero.png`;

/** Minimal Schema.org Service block shared by every service page */
function svc(name, description, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE}/#business`,
      name: 'Lakewoods Office Solutions',
    },
    areaServed: { '@type': 'State', name: 'Utah' },
    url: `${BASE}${path}`,
  };
}

const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#business`,
  name: 'Lakewoods Office Solutions',
  description:
    'Family-owned commercial office solutions — furniture installation, moving, painting, and space planning. Proudly serving Utah and the surrounding Mountain West.',
  url: BASE,
  email: 'contact@lwosolutions.com',
  logo: `${BASE}/images/lwo-logo.png`,
  image: DEFAULT_IMAGE,
  areaServed: { '@type': 'State', name: 'Utah' },
  address: { '@type': 'PostalAddress', addressRegion: 'UT', addressCountry: 'US' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Commercial Office Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Office Furniture Installation',
          url: `${BASE}/services/office-installations`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Storage Solutions',
          url: `${BASE}/services/commercial-storage`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Moving Services',
          url: `${BASE}/services/commercial-moving`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Painting Services',
          url: `${BASE}/services/commercial-painting`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Office Design & Furniture',
          url: `${BASE}/services/commercial-design-furniture`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Office Relocation',
          url: `${BASE}/services/commercial-relocation`,
        },
      },
    ],
  },
};

const ROUTES = [
  {
    url: '/',
    title: 'Office Furniture Installation & Workspace Design | Lakewoods Office Solutions',
    description:
      'Family-owned commercial office solutions — furniture installation, moving, painting, and space planning. Proudly serving Utah and the surrounding Mountain West.',
    image: DEFAULT_IMAGE,
    jsonLd: LOCAL_BUSINESS_JSONLD,
  },
  {
    url: '/about',
    title: 'About Lakewoods Office Solutions | Utah-Based Family-Owned Office Services',
    description:
      'Family-owned and Utah-based, Lakewoods Office Solutions delivers furniture installation, moving, painting, and space planning across Utah and the Mountain West.',
    image: `${BASE}/images/lwo-about.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Lakewoods Office Solutions',
      description:
        'Family-owned and Utah-based, Lakewoods Office Solutions is committed to revolutionizing the way businesses think about their office environments.',
      url: `${BASE}/about`,
      about: {
        '@type': 'LocalBusiness',
        '@id': `${BASE}/#business`,
        name: 'Lakewoods Office Solutions',
      },
    },
  },
  {
    url: '/contact',
    title: 'Contact Lakewoods Office Solutions | Request a Consultation',
    description:
      'Get in touch with Lakewoods Office Solutions. Request a free consultation for office furniture installation, commercial moving, painting, design, or relocation services.',
    image: DEFAULT_IMAGE,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Lakewoods Office Solutions',
      url: `${BASE}/contact`,
    },
  },
  {
    url: '/services/office-installations',
    title: 'Office Furniture Installation Services | Lakewoods Office Solutions',
    description:
      'Professional office furniture installation serving Utah and the Mountain West. Expert assembly, placement, leveling, and punch-list support for workstations, desks, panels, and conference rooms.',
    image: `${BASE}/images/lwo-installation.png`,
    jsonLd: svc(
      'Office Furniture Installation',
      'Professional office furniture installation — receiving, assembly, placement, leveling, and punch-list support for commercial workspaces.',
      '/services/office-installations',
    ),
  },
  {
    url: '/services/commercial-storage',
    title: 'Commercial Storage Solutions | Lakewoods Office Solutions',
    description:
      'Secure, organized commercial storage for business assets, inventory, documents, and equipment. Flexible short- and long-term options serving Utah and the Mountain West.',
    image: `${BASE}/images/lwo-storage.png`,
    jsonLd: svc(
      'Commercial Storage Solutions',
      'Secure, organized commercial storage for business assets, inventory, documents, and equipment with flexible terms and inventory tracking.',
      '/services/commercial-storage',
    ),
  },
  {
    url: '/services/commercial-moving',
    title: 'Commercial Moving Services | Lakewoods Office Solutions',
    description:
      'Full-service commercial office moving serving Utah and the Mountain West. Pre-move planning, furniture disassembly, IT equipment handling, and after-hours availability.',
    image: `${BASE}/images/lwo-moving.png`,
    jsonLd: svc(
      'Commercial Moving Services',
      'Full-service commercial office moving — pre-move planning, furniture disassembly, IT equipment handling, and after-hours scheduling.',
      '/services/commercial-moving',
    ),
  },
  {
    url: '/services/commercial-painting',
    title: 'Commercial Painting Services | Lakewoods Office Solutions',
    description:
      'Professional commercial office painting — interior and exterior, low-VOC options, brand-aligned color consulting, and after-hours scheduling to minimize business disruption.',
    image: `${BASE}/images/lwo-painting.png`,
    jsonLd: svc(
      'Commercial Painting Services',
      'Professional commercial painting — interior and exterior, low-VOC options, color consulting, and after-hours scheduling.',
      '/services/commercial-painting',
    ),
  },
  {
    url: '/services/commercial-design-furniture',
    title: 'Commercial Office Design & Custom Furniture | Lakewoods Office Solutions',
    description:
      'Bespoke commercial workspace design and custom furniture fabrication. Space planning, brand-aligned interiors, ergonomic layouts, and turnkey project management in Utah and the Mountain West.',
    image: `${BASE}/images/lwo-design.png`,
    jsonLd: svc(
      'Commercial Office Design & Custom Furniture',
      'Bespoke commercial workspace design and custom furniture fabrication — space planning, brand-aligned interiors, and turnkey project management.',
      '/services/commercial-design-furniture',
    ),
  },
  {
    url: '/services/commercial-relocation',
    title: 'Commercial Office Relocation Services | Lakewoods Office Solutions',
    description:
      'End-to-end commercial office relocation management — site surveys, vendor coordination, decommissioning, multi-site moves, and complete setup at your new location. Serving Utah and the Mountain West.',
    image: `${BASE}/images/lwo-relocation.png`,
    jsonLd: svc(
      'Commercial Office Relocation Services',
      'End-to-end office relocation management — site surveys, vendor coordination, decommissioning, and complete setup at the new location.',
      '/services/commercial-relocation',
    ),
  },
];

// ── 5. Build a <head> fragment for each route ────────────────────────────────
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildHead(route) {
  const { url, title, description, image, jsonLd } = route;
  const canonical = `${BASE}${url}`;
  const t = esc(title);
  const d = esc(description);
  const img = esc(image);
  const c = esc(canonical);
  const lines = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${c}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Lakewoods Office Solutions" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${c}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  ];
  return lines.join('\n    ');
}

// ── 6. Render and write every route ─────────────────────────────────────────
console.log('[prerender] Rendering routes…');
for (const route of ROUTES) {
  const appHtml = render(route.url);
  const headHtml = buildHead(route);

  const html = template
    .replace('<!--app-head-->', headHtml)
    .replace('<!--app-html-->', appHtml);

  const outPath =
    route.url === '/'
      ? resolve(root, 'dist/index.html')
      : resolve(root, `dist${route.url}/index.html`);

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`  ✓  ${route.url}`);
}

// ── 7. Clean up the temporary SSR bundle ────────────────────────────────────
rmSync(ssrOutDir, { recursive: true, force: true });
console.log('\n[prerender] Done.\n');
