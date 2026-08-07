import { useState } from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Footer, SectionMark, SiteHeader } from '@/components/SiteChrome';
import { useSEO } from '@/hooks/useSEO';

const features: [string, string][] = [
  ['Climate-controlled warehouse', 'Air-conditioned in summer, heated in winter — protects furniture, electronics, records, and sensitive goods.'],
  ['Inventory tracking', 'Your stored items are logged and tracked throughout, so you always know what you have and can retrieve it quickly.'],
  ['Forklift loading & unloading', 'Fast, safe handling of pallets, heavy furniture, and equipment — no renting a dolly and doing it yourself.'],
  ['Experienced crew', 'Our team physically handles the move in and out. You don\'t lift a thing.'],
  ['Flexible scheduling', 'We accommodate your timeline, including tight windows and after-hours access.'],
  ['Highway-convenient location', 'Easy freight and delivery access near a main highway corridor.'],
  ['Month-to-month, scalable space', 'Space that grows or shrinks with your needs — no rigid long-term commitments.'],
];

const useCases = [
  'Office furniture storage between moves or renovations',
  'Overflow and seasonal inventory storage',
  'Equipment and fixture storage',
  'Business records and archive storage',
  'Furniture storage during office reconfiguration or downsizing',
];

const faqs: [string, string][] = [
  [
    'Is this self-storage or managed storage?',
    "We're managed storage — our crew and forklifts handle loading, storage, and redelivery in a climate-controlled warehouse, with inventory tracked throughout. You're not renting an empty unit to fill yourself.",
  ],
  [
    'What can you store?',
    'Office furniture, equipment, fixtures, inventory, and business records — most commercial goods. If it came out of an office or warehouse, we can hold it properly.',
  ],
  [
    'Is the warehouse climate-controlled?',
    'Yes — air-conditioned in summer and heated in winter to protect furniture, electronics, records, and other sensitive items year-round.',
  ],
  [
    "Will I know what's in storage?",
    'Yes. We track your inventory so you always know what you have stored and can retrieve it quickly — no guessing, no digging through an unlabeled unit.',
  ],
  [
    'Do you offer month-to-month storage?',
    'Yes. Our terms are flexible and scale with your needs — whether you need space for a few weeks during a renovation or ongoing, reliable storage for your business.',
  ],
  [
    'Do you serve areas outside Salt Lake City?',
    'Yes — we serve Salt Lake City, the Wasatch Front (Sandy, Lehi, Provo, Ogden, Park City), and businesses throughout Utah.',
  ],
];

export default function StoragePage() {
  const [active, setActive] = useState<number | null>(0);

  useSEO({
    title: 'Commercial Storage in Salt Lake City | Lakewoods',
    description:
      'Managed, climate-controlled commercial storage in Salt Lake City. Our crew loads, tracks, stores & redelivers your furniture, equipment & inventory. Serving Utah.',
    canonical: '/services/commercial-storage',
    ogImage: 'https://www.lwosolutions.com/images/lwo-storage.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Storage in Salt Lake City',
      description:
        'Managed, climate-controlled commercial storage in Salt Lake City — our crew handles loading, tracking, and redelivery of office furniture, equipment, and inventory across the Wasatch Front.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.lwosolutions.com/#business',
        name: 'Lakewoods Office Solutions',
      },
      areaServed: { '@type': 'State', name: 'Utah' },
      url: 'https://www.lwosolutions.com/services/commercial-storage',
    },
  });

  return (
    <main className="min-h-screen bg-white font-['Montserrat'] text-[#4E4B66]">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
          MANAGED COMMERCIAL STORAGE — SALT LAKE CITY
        </p>
        <h1 className="mt-7 text-3xl font-bold uppercase leading-[1.3] tracking-[.18em] text-[#1F8080] md:text-5xl">
          Commercial Storage<br />in Salt Lake City
        </h1>
        <div className="mx-auto mt-8 h-px w-20 bg-[#C9A96E]" />
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8">
          Climate-controlled, fully managed warehouse storage for Salt Lake City and Wasatch Front
          businesses — our team handles loading, storage, tracking, and redelivery, so you're not
          renting an empty unit and doing it yourself.
        </p>
        <a
          href="mailto:contact@lwosolutions.com"
          className="mt-9 inline-flex items-center gap-3 bg-[#BF5200] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#D95C00]"
        >
          REQUEST A QUOTE <ArrowUpRight size={15} />
        </a>
      </section>

      {/* ── Differentiation ── */}
      <section className="border-y border-[#d8d0c3] bg-[#faf9f7]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
              HOW WE'RE DIFFERENT
            </p>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.35] tracking-[.14em] text-[#1A1A1A]">
              Not self-storage. Managed storage.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8">
              Unlike a self-storage unit, our team physically handles your goods — with forklifts
              and an experienced crew, in a climate-controlled warehouse, with your inventory
              tracked throughout. Ideal for businesses that need their furniture, equipment,
              inventory, or records stored and handled properly — not hauled by their own staff.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map(([title, body]) => (
              <div
                key={title}
                className="border border-[#d8d0c3] bg-white p-6"
              >
                <CheckCircle2 size={18} className="text-[#1F8080]" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[.1em] text-[#1F8080]">
                  {title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#4E4B66]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionMark />

      {/* ── Use Cases ── */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
            WHO WE SERVE
          </p>
          <h2 className="mt-5 text-3xl font-bold uppercase tracking-[.15em] text-[#1A1A1A]">
            Common storage situations
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-8">
            Businesses across Salt Lake City, Sandy, Lehi, Provo, and the surrounding Utah market
            use our managed storage for situations like these:
          </p>
        </div>
        <ul className="mx-auto mt-12 max-w-3xl divide-y divide-[#d8d0c3] border-y border-[#d8d0c3]">
          {useCases.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 py-5 text-sm font-bold uppercase tracking-[.1em] text-[#1F8080]"
            >
              <CheckCircle2 size={17} className="shrink-0 text-[#C9A96E]" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Integrated angle ── */}
      <section className="border-t border-[#d8d0c3]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <picture>
              <source type="image/webp" srcSet="/images/lwo-storage.webp" />
              <img
                src="/images/lwo-storage.png"
                alt="Organized commercial warehouse storage for office furniture and equipment"
                loading="lazy"
                width={800}
                height={800}
                className="h-[220px] w-full object-cover"
              />
            </picture>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
              ONE TEAM FOR THE WHOLE JOB
            </p>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.35] tracking-[.14em] text-[#1A1A1A]">
              Store now, reinstall when ready.
            </h2>
            <p className="mt-7 text-sm leading-8">
              Because we also handle office moving and furniture installation, storage doesn't have
              to be a separate project with a separate vendor. We can pick up your furniture or
              equipment, store it in our climate-controlled warehouse with full inventory tracking,
              and redeliver or reinstall it on your schedule — one coordinated team, one point of
              contact, less downtime for your Salt Lake City business.
            </p>
            <p className="mt-5 text-sm leading-8">
              Whether you're in the middle of a renovation, a phased office transition, or simply
              need reliable, ongoing storage space in the Utah market, we handle it.
            </p>
          </div>
        </div>
      </section>

      <SectionMark />

      {/* ── FAQ ── */}
      <section className="mx-auto grid max-w-5xl gap-10 border-t border-[#d8d0c3] px-5 py-20 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">FAQ</p>
          <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.35] tracking-[.14em] text-[#1A1A1A]">
            Before the first pallet arrives.
          </h2>
        </div>
        <div>
          {faqs.map(([q, a], i) => (
            <div key={q} className="border-t border-[#d8d0c3]">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left text-xs font-bold uppercase leading-6 tracking-[.12em] text-[#1F8080]"
              >
                {q}
                <ChevronDown
                  size={17}
                  className={`shrink-0 text-[#1F8080] transition-transform ${active === i ? 'rotate-180' : ''}`}
                />
              </button>
              {active === i && <p className="pb-6 pr-8 text-sm leading-7">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="border-t border-[#d8d0c3] px-5 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
          LET'S GET TO WORK
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold uppercase leading-[1.35] tracking-[.15em] text-[#1A1A1A]">
          Managed storage, handled start to finish.
        </h2>
        <a
          href="mailto:contact@lwosolutions.com"
          className="mt-9 inline-flex items-center gap-3 bg-[#BF5200] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#D95C00]"
        >
          REQUEST A QUOTE <ArrowUpRight size={15} />
        </a>
        <p className="mt-6 text-xs text-[#4E4B66]/70">
          Proudly serving Salt Lake City, Sandy, Lehi, Provo, Ogden, Park City, and businesses across Utah.
        </p>
      </section>

      <Footer />
    </main>
  );
}
