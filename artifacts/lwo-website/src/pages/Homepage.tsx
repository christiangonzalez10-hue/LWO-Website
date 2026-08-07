import {
  ArrowUpRight,
  Building2,
  Brush,
  Check,
  Compass,
  MoveRight,
  ShieldCheck,
  Truck,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { Footer, SectionMark, SiteHeader } from '@/components/SiteChrome';
import { useSEO } from '@/hooks/useSEO';

const services: [string, string, string, string, LucideIcon][] = [
  ['01', 'COMMERCIAL STORAGE', 'Secure, organized storage for business assets, inventory, documents, and equipment.', '/services/commercial-storage', Building2],
  ['02', 'COMMERCIAL MOVING', 'A complete move plan, careful handling, and precise reinstallation that keeps business moving.', '/services/commercial-moving', Truck],
  ['03', 'COMMERCIAL PAINTING', 'Precise application, minimal disruption, and finishes built to last.', '/services/commercial-painting', Brush],
  ['04', 'COMMERCIAL DESIGN & FURNITURE', 'Bespoke spaces and custom furniture shaped around your brand and people.', '/services/commercial-design-furniture', Compass],
  ['05', 'COMMERCIAL RELOCATION', 'End-to-end relocation management from first site walk to final workstation.', '/services/commercial-relocation', MoveRight],
  ['06', 'OFFICE INSTALLATIONS', 'Expert assembly and placement of workstations, desks, panels, and ergonomic solutions.', '/services/office-installations', Wrench],
];

const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.lwosolutions.com/#business',
  name: 'Lakewoods Office Solutions',
  description: 'Family-owned commercial office solutions — furniture installation, moving, painting, and space planning. Proudly serving Utah and the surrounding Mountain West.',
  url: 'https://www.lwosolutions.com',
  email: 'contact@lwosolutions.com',
  logo: 'https://www.lwosolutions.com/images/lwo-logo.png',
  image: 'https://www.lwosolutions.com/images/lwo-hero.png',
  areaServed: { '@type': 'State', name: 'Utah' },
  address: { '@type': 'PostalAddress', addressRegion: 'UT', addressCountry: 'US' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Commercial Office Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Furniture Installation', url: 'https://www.lwosolutions.com/services/office-installations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Storage Solutions', url: 'https://www.lwosolutions.com/services/commercial-storage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Moving Services', url: 'https://www.lwosolutions.com/services/commercial-moving' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Painting Services', url: 'https://www.lwosolutions.com/services/commercial-painting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Office Design & Furniture', url: 'https://www.lwosolutions.com/services/commercial-design-furniture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Office Relocation', url: 'https://www.lwosolutions.com/services/commercial-relocation' } },
    ],
  },
};

export default function Homepage() {
  useSEO({
    title: 'Office Furniture Installation & Workspace Design | Lakewoods Office Solutions',
    description: 'Family-owned commercial office solutions — furniture installation, moving, painting, and space planning. Proudly serving Utah and the surrounding Mountain West.',
    canonical: '/',
    jsonLd: LOCAL_BUSINESS_JSONLD,
  });

  return (
    <main className="min-h-screen bg-white font-['Montserrat'] text-[#4E4B66]">
      <SiteHeader />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">LAKEWOODS OFFICE SOLUTIONS</p>
        <h1 className="mt-6 text-3xl font-bold uppercase leading-[1.25] tracking-[.18em] text-[#1A1A1A] md:text-5xl">
          Transforming offices.<br />
          <span className="text-[#1F8080]">Elevating work.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8">
          Family-owned commercial office solutions — furniture installation, moving, painting, and space planning. Proudly serving Utah and the surrounding Mountain West.
        </p>
        <a
          href="mailto:contact@lwosolutions.com"
          className="mt-9 inline-flex items-center gap-3 bg-[#F46D0B] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#d95d07]"
        >
          CALL NOW <ArrowUpRight size={15} />
        </a>
      </section>

      <SectionMark />

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">OFFICE INSTALLATIONS SERVICES</p>
          <h2 className="mt-5 text-3xl font-bold uppercase tracking-[.16em] text-[#1A1A1A] md:text-4xl">
            Built around how you work
          </h2>
        </div>
        <div className="grid gap-px border border-[#d8d0c3] bg-[#d8d0c3] md:grid-cols-2 lg:grid-cols-3">
          {services.map(([num, title, body, href, Icon]) => (
            <a
              key={title}
              href={href}
              className="group bg-white p-8 transition-colors hover:bg-[#fbfaf7]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[.2em] text-[#C9A96E]">{num}</span>
                <Icon size={22} strokeWidth={1.3} className="text-[#1F8080]" />
              </div>
              <h3 className="mt-10 text-sm font-bold uppercase leading-6 tracking-[.12em] text-[#1F8080]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7">{body}</p>
              <p className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#C9A96E]">
                Learn more <ArrowUpRight size={13} />
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="border-y border-[#d8d0c3] bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">WHY LAKEWOODS</p>
          <h2 className="mt-5 text-3xl font-bold uppercase tracking-[.16em] text-[#1A1A1A]">
            Precision is our promise
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8">
            From first measure to final chair, our team brings thoughtful planning, clear
            communication, and white-glove execution to every commercial workspace.
          </p>
          <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
            {[
              ['25+', 'Years of experience'],
              ['MOUNTAIN WEST', 'Serving Utah & surrounding states'],
              ['ONE TEAM', 'Planning through closeout'],
            ].map(([large, small]) => (
              <div key={large} className="border-t-2 border-[#C9A96E] pt-5">
                <p className="text-3xl font-bold tracking-[.1em] text-[#1A1A1A]">{large}</p>
                <p className="mt-3 text-xs uppercase tracking-[.17em] text-[#1F8080]">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionMark />

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-[340px] overflow-hidden bg-[#1A1A1A]">
          <img
            src="/images/lwo-installation.png"
            alt="Office furniture installation by Lakewoods team"
            loading="lazy"
            className="h-full w-full object-cover opacity-75"
          />
          <div className="absolute bottom-0 left-0 border-t border-[#C9A96E] bg-[#1A1A1A]/90 px-7 py-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#C9A96E]">
            The Lakewoods standard
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
            THE DIFFERENCE IS IN THE DETAILS
          </p>
          <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.3] tracking-[.13em] text-[#1A1A1A]">
            Your workplace,<br />done right.
          </h2>
          <p className="mt-7 text-sm leading-8">
            Lakewoods Office Solutions is the trusted partner for organizations that expect more from
            their office installation and workspace design. We protect your investment, your timeline,
            and your people's experience.
          </p>
          <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em] text-[#1F8080]">
            <ShieldCheck size={20} />
            ACCOUNTABLE FROM PLAN TO HANDOFF
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              ['One accountable team', 'Planning, logistics, installation, and closeout aligned from day one.'],
              ['Built around your deadline', 'A clear schedule and proactive communication keep your opening on track.'],
              ['Craft over shortcuts', 'Every workstation leveled, every cable considered, every room ready.'],
              ['Mountain West roots', 'Serving Utah and surrounding states with the same care on every project.'],
            ].map(([t, b]) => (
              <div key={t} className="border-t border-[#d8d0c3] pt-4">
                <Check size={14} className="mb-3 text-[#C9A96E]" />
                <h3 className="text-xs font-bold uppercase tracking-[.1em] text-[#1A1A1A]">{t}</h3>
                <p className="mt-2 text-xs leading-6 text-[#4E4B66]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="border-t border-[#d8d0c3] px-5 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">READY TO GET STARTED?</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold uppercase leading-[1.35] tracking-[.15em] text-[#1A1A1A] md:text-4xl">
          Let's create a space that works harder.
        </h2>
        <a
          href="mailto:contact@lwosolutions.com"
          className="mt-9 inline-flex items-center gap-3 bg-[#F46D0B] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#d95d07]"
        >
          REQUEST A CONSULTATION <ArrowUpRight size={15} />
        </a>
      </section>

      <Footer />
    </main>
  );
}
