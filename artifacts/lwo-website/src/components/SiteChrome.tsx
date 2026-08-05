import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';

  // On the homepage anchor-scroll works; from other pages use full-path anchors.
  const href = (hash: string) => (isHome ? hash : `/${hash}`);

  const links: [string, string][] = [
    ['HOME', '/'],
    ['SERVICES', href('#services')],
    ['WHY US', href('#why-us')],
    ['ABOUT', '/about'],
    ['CONTACT US', '/contact'],
  ];

  return (
    <header className="bg-white">
      <div className="sticky top-0 z-50 bg-white">
        <div className="mx-auto h-px max-w-7xl bg-[#C9A96E]" />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="/">
            <img src="/images/lwo-logomark.png" alt="Lakewoods" className="h-9 w-auto object-contain" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="text-[#1A1A1A] md:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {links.map(([label, url]) => (
              <a
                key={label}
                href={url}
                className="text-[10px] font-bold tracking-[.24em] text-[#1A1A1A] transition-colors hover:text-[#1F8080]"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="mailto:contact@lwosolutions.com"
            className="hidden items-center gap-2 bg-[#F46D0B] px-5 py-3 text-[9px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#d95d07] md:flex"
          >
            CALL NOW
          </a>
        </nav>
        <div className="mx-auto h-px max-w-7xl bg-[#d8d0c3]" />
        {open && (
          <nav className="flex flex-col gap-5 border-b border-[#C9A96E] bg-white px-5 py-6 md:hidden">
            {links.map(([label, url]) => (
              <a
                onClick={() => setOpen(false)}
                key={label}
                href={url}
                className="text-[10px] font-bold tracking-[.24em] text-[#1A1A1A]"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
      <section
        id="home"
        className="relative flex min-h-[min(75vh,640px)] items-center justify-center overflow-hidden bg-[#1A1A1A]"
      >
        <img
          src="/images/lwo-hero.png"
          alt="Moody architectural office building exterior"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#0b0d0d]/55" />
        <div className="relative z-10 flex flex-col items-center px-5 text-center">
          <img
            src="/images/lwo-logo.png"
            alt="Lakewoods Office Solutions"
            className="w-[230px] md:w-[300px]"
          />
          <p className="mt-8 max-w-md text-[10px] font-semibold uppercase tracking-[.38em] text-white/70">
            Commercial workplace design & installation
          </p>
        </div>
      </section>
    </header>
  );
}

export function SectionMark() {
  return (
    <div className="flex items-center justify-center gap-5 py-10">
      <span className="h-px w-20 bg-[#C9A96E]" />
      <img src="/images/lwo-logomark.png" alt="" loading="lazy" className="h-10 w-10 object-contain" />
      <span className="h-px w-20 bg-[#C9A96E]" />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <img src="/images/lwo-logo.png" alt="Lakewoods Office Solutions" loading="lazy" className="mb-6 w-44" />
          <p className="max-w-xs text-sm leading-7 text-white/60">
            Commercial office solutions, installed with precision. Serving businesses nationwide.
          </p>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold tracking-[.24em] text-[#C9A96E]">SERVICES</p>
          <div className="flex flex-col gap-3 text-xs tracking-[.12em] text-white/60">
            <a href="/services/office-installations" className="hover:text-white transition-colors">Office Installations</a>
            <a href="/services/commercial-storage" className="hover:text-white transition-colors">Commercial Storage</a>
            <a href="/services/commercial-moving" className="hover:text-white transition-colors">Commercial Moving</a>
            <a href="/services/commercial-painting" className="hover:text-white transition-colors">Commercial Painting</a>
            <a href="/services/commercial-design-furniture" className="hover:text-white transition-colors">Design & Furniture</a>
            <a href="/services/commercial-relocation" className="hover:text-white transition-colors">Commercial Relocation</a>
          </div>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold tracking-[.24em] text-[#C9A96E]">CONTACT</p>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <a href="tel:18005550184" className="hover:text-white transition-colors">1 800 555 0184</a>
            <a href="mailto:contact@lwosolutions.com" className="hover:text-white transition-colors">contact@lwosolutions.com</a>
            <span>Serving businesses nationwide</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-5 text-[10px] uppercase tracking-[.18em] text-white/35">
        © 2025 Lakewoods Office Solutions
      </div>
    </footer>
  );
}

export const CtaArrow = () => <ArrowUpRight size={16} />;
