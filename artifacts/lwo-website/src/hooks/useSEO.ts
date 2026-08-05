import { useEffect } from 'react';

export type SEOMeta = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
};

const BASE = 'https://www.lwosolutions.com';
const DEFAULT_IMAGE = `${BASE}/images/lwo-hero.png`;

function setMeta(selector: string, attr: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr.split('=')[0].replace('[', '').replace('"', ''), attr.split('=')[1]?.replace(/['"[\]]/g, '') ?? '');
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertMeta(attrName: string, attrValue: string, content: string) {
  const selector = `meta[${attrName}="${attrValue}"]`;
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function useSEO({ title, description, canonical, ogImage, jsonLd }: SEOMeta) {
  useEffect(() => {
    const image = ogImage ?? DEFAULT_IMAGE;
    const url = `${BASE}${canonical}`;

    // Title
    document.title = title;

    // Standard meta
    upsertMeta('name', 'description', description);

    // Canonical link
    let canonEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonEl) {
      canonEl = document.createElement('link');
      canonEl.rel = 'canonical';
      document.head.appendChild(canonEl);
    }
    canonEl.href = url;

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', 'Lakewoods Office Solutions');

    // Twitter card
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    // JSON-LD structured data
    const JSONLD_ID = 'seo-jsonld';
    let script = document.getElementById(JSONLD_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = JSONLD_ID;
      (script as HTMLScriptElement).type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(
      jsonLd ?? {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url,
      }
    );
  }, [title, description, canonical, ogImage, jsonLd]);
}
