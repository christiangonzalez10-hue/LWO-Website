import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [["Home", "#home"], ["Services", "#services"], ["Why us", "#why-us"], ["About", "#about"], ["Contact", "#contact"]];
  return <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#1A1A1A]/95 text-white backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
      <a href="#home" className="flex items-center gap-3"><img src="/__mockup/images/lwo-logo.png" className="h-9 w-auto brightness-0 invert" alt="Lakewoods Office Solutions" /></a>
      <nav className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-[11px] font-semibold uppercase tracking-[.16em] text-white/65 transition-colors hover:text-white">{label}</a>)}</nav>
      <a href="#contact" className="hidden items-center gap-2 bg-[#F46D0B] px-5 py-3 text-[11px] font-bold uppercase tracking-[.14em] text-white transition-colors hover:bg-[#ff8530] md:flex">Plan your space <ArrowUpRight size={15}/></a>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#1A1A1A] px-5 py-6 md:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="text-xs font-bold uppercase tracking-[.18em] text-white/80">{label}</a>)}</nav>}
  </header>;
}

export function Footer() {
  return <footer className="bg-[#1A1A1A] px-5 py-14 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
    <div><img src="/__mockup/images/lwo-logo.png" className="mb-6 h-10 w-auto brightness-0 invert" alt="Lakewoods Office Solutions"/><p className="max-w-xs text-sm leading-7 text-white/55">Commercial office solutions, installed with precision. Serving businesses nationwide.</p></div>
    <div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#F46D0B]">Explore</p><div className="flex flex-col gap-3 text-sm text-white/65"><a href="#services" className="hover:text-white">Services</a><a href="#why-us" className="hover:text-white">Why Lakewoods</a><a href="#about" className="hover:text-white">About the team</a></div></div>
    <div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#F46D0B]">Services</p><div className="flex flex-col gap-3 text-sm text-white/65"><a href="#services">Furniture installation</a><a href="#services">Office relocations</a><a href="#services">Space planning</a></div></div>
    <div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#F46D0B]">Contact</p><div className="flex flex-col gap-3 text-sm text-white/65"><a href="tel:18005550184">1 800 555 0184</a><a href="mailto:hello@lwosolutions.com">hello@lwosolutions.com</a><span>Serving businesses nationwide</span></div></div>
  </div><div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.14em] text-white/35">© 2025 Lakewoods Office Solutions <span className="float-right">Built for better work</span></div></footer>
}

export const Arrow = () => <ArrowUpRight size={17}/>;