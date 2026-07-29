import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [["HOME", "#home"], ["SERVICES", "#services"], ["WHY US", "#why-us"], ["ABOUT", "#about"], ["CONTACT US", "#contact"]];
  return <header className="bg-white">
    <section id="home" className="relative flex min-h-[min(100vh,820px)] items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <img src="/__mockup/images/lwo-hero.png" alt="Moody architectural office building exterior" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-[#0b0d0d]/55" />
      <div className="relative z-10 flex flex-col items-center px-5 text-center"><img src="/__mockup/images/lwo-logo.png" alt="Lakewoods Office Solutions" className="w-[230px] md:w-[300px]" /><p className="mt-8 max-w-md text-[10px] font-semibold uppercase tracking-[.38em] text-white/70">Commercial workplace design & installation</p></div>
    </section>
    <div className="mx-auto h-px max-w-7xl bg-[#C9A96E]" />
    <nav className="relative mx-auto flex max-w-7xl items-center justify-center px-5 py-5">
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="absolute right-5 text-[#1A1A1A] md:hidden">{open ? <X size={19}/> : <Menu size={19}/>}</button>
      <div className={`${open ? "flex" : "hidden"} absolute left-0 top-full z-30 w-full flex-col gap-5 border-b border-[#C9A96E] bg-white px-5 py-6 md:static md:flex md:flex-row md:items-center md:justify-between md:border-0 md:px-0 md:py-0`}>
        {links.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} href={href} className="text-center text-[10px] font-bold tracking-[.24em] text-[#1A1A1A] transition-colors hover:text-[#1F8080]">{label}</a>)}
      </div>
    </nav>
    <div className="mx-auto h-px max-w-7xl bg-[#d8d0c3]" />
  </header>;
}

export function SectionMark() {
  return <div className="flex items-center justify-center gap-5 py-10"><span className="h-px w-20 bg-[#C9A96E]" /><img src="/__mockup/images/lwo-logomark.png" alt="" className="h-10 w-10 object-contain" /><span className="h-px w-20 bg-[#C9A96E]" /></div>;
}

export function Footer() {
  return <footer className="bg-[#1A1A1A] px-5 py-14 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]"><div><img src="/__mockup/images/lwo-logo.png" alt="Lakewoods Office Solutions" className="mb-6 w-44" /><p className="max-w-xs text-sm leading-7 text-white/60">Commercial office solutions, installed with precision. Serving businesses nationwide.</p></div><div><p className="mb-5 text-[10px] font-bold tracking-[.24em] text-[#C9A96E]">EXPLORE</p><div className="flex flex-col gap-3 text-xs tracking-[.12em] text-white/60"><a href="#services">SERVICES</a><a href="#why-us">WHY US</a><a href="#about">ABOUT</a></div></div><div><p className="mb-5 text-[10px] font-bold tracking-[.24em] text-[#C9A96E]">CONTACT</p><div className="flex flex-col gap-3 text-sm text-white/60"><a href="tel:18005550184">1 800 555 0184</a><a href="mailto:hello@lwosolutions.com">hello@lwosolutions.com</a><span>Serving businesses nationwide</span></div></div></div><div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-5 text-[10px] uppercase tracking-[.18em] text-white/35">© 2025 Lakewoods Office Solutions</div></footer>;
}

export const CtaArrow = () => <ArrowUpRight size={16} />;