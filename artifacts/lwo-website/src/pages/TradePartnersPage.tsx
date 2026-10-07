import { ArrowUpRight, Check, ClipboardList, Handshake, Truck } from 'lucide-react';
import { Footer, SectionMark, SiteHeader } from '@/components/SiteChrome';
import { useSEO } from '@/hooks/useSEO';

const BUSINESS_ID = 'https://www.lwosolutions.com/#business';

const partners = [
  'Furniture dealers and manufacturers’ representatives',
  'General contractors',
  'Architects and designers',
  'Facility managers',
];

const workTypes = [
  'Multi-brand furniture installation and reconfiguration',
  'Large-scale and phased installations',
  'Receiving and warehouse staging',
  'Punch-list closeout',
  'On-site installation support during peak workloads',
];

const reasons = [
  {
    Icon: Handshake,
    title: 'One accountable team',
    description:
      'Coordinate commercial installation and related services with one Utah team.',
  },
  {
    Icon: Truck,
    title: 'Flexible crews and scheduling',
    description:
      'Plan phased installations and after-hours work around project timelines.',
  },
  {
    Icon: ClipboardList,
    title: 'In-house warehouse staging',
    description:
      'Use Lakewoods’ warehouse for receiving and staging project materials before installation.',
  },
];

const faqs = [
  {
    question: 'Can you install commercial furniture from any supplier?',
    answer:
      'Yes. Lakewoods installs commercial furniture from any supplier and can also coordinate moving, storage, and painting.',
  },
  {
    question: 'What installation work can your team handle?',
    answer:
      'We support multi-brand and phased installations, receiving and warehouse staging, reconfiguration, punch-list closeout, and on-site installation needs during peak workloads.',
  },
  {
    question: 'Where do you serve trade partners?',
    answer: 'We serve Salt Lake City and the Wasatch Front.',
  },
];

export default function TradePartnersPage() {
  useSEO({
    title:
      'Commercial Installation Partner for Furniture Dealers, General Contractors & Architects | Lakewoods Office Solutions',
    description:
      'A Utah commercial installation partner for furniture dealers, general contractors, and architects. Installation, receiving, staging, and closeout in Salt Lake City and the Wasatch Front.',
    canonical: '/trade-partners/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://www.lwosolutions.com/trade-partners/#webpage',
      name: 'Commercial Installation Partner for Furniture Dealers, General Contractors & Architects | Lakewoods Office Solutions',
      url: 'https://www.lwosolutions.com/trade-partners/',
      about: { '@type': 'LocalBusiness', '@id': BUSINESS_ID },
      publisher: { '@type': 'LocalBusiness', '@id': BUSINESS_ID },
    },
  });

  return (
    <main className="min-h-screen bg-white font-['Montserrat'] text-[#4E4B66]">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-5 py-20 text-center md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
          FOR COMMERCIAL TRADE PARTNERS
        </p>
        <h1 className="mt-7 text-3xl font-bold uppercase leading-[1.3] tracking-[.12em] text-[#1F8080] md:text-5xl">
          Your Installation Partner for Commercial Workspace Projects.
        </h1>
        <div className="mx-auto mt-8 h-px w-20 bg-[#C9A96E]" />
        <p className="mx-auto mt-8 max-w-3xl text-sm leading-8">
          Lakewoods installs commercial furniture from any supplier and handles moving,
          storage, and painting under one accountable team, so dealers, general contractors,
          and architects can hand off the installation phase with confidence. We serve Salt
          Lake City and the Wasatch Front.
        </p>
        <a
          href="/contact/"
          className="mt-9 inline-flex items-center gap-3 bg-[#BF5200] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#D95C00]"
        >
          DISCUSS YOUR PROJECT <ArrowUpRight size={15} />
        </a>
      </section>

      <SectionMark />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
              BUILT FOR YOUR TEAM
            </p>
            <h2 className="mt-4 text-2xl font-bold uppercase tracking-[.12em] text-[#1A1A1A]">
              Who We Work With
            </h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {partners.map((partner) => (
                <li key={partner} className="flex gap-3 border-t border-[#d8d0c3] pt-4 text-sm leading-7">
                  <Check size={16} className="mt-1 shrink-0 text-[#1F8080]" />
                  {partner}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
              FROM RECEIVING TO CLOSEOUT
            </p>
            <h2 className="mt-4 text-2xl font-bold uppercase tracking-[.12em] text-[#1A1A1A]">
              What We Handle
            </h2>
            <ul className="mt-7 grid gap-4">
              {workTypes.map((work) => (
                <li key={work} className="flex gap-3 border-t border-[#d8d0c3] pt-4 text-sm leading-7">
                  <Check size={16} className="mt-1 shrink-0 text-[#1F8080]" />
                  {work}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8d0c3] bg-[#fbfaf7] px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
              COMMERCIAL PROJECT EXPERIENCE
            </p>
            <h2 className="mt-4 text-2xl font-bold uppercase tracking-[.12em] text-[#1A1A1A]">
              Why Partners Choose Us
            </h2>
          </div>
          <div className="mt-10 grid gap-px border border-[#d8d0c3] bg-[#d8d0c3] md:grid-cols-3">
            {reasons.map(({ Icon, title, description }) => (
              <article key={title} className="bg-white p-8">
                <Icon size={24} className="text-[#1F8080]" strokeWidth={1.5} />
                <h3 className="mt-5 text-sm font-bold uppercase leading-6 tracking-[.1em] text-[#1A1A1A]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7">{description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-8">
            Lakewoods’ commercial installation experience includes service as the exclusive
            installation partner for a major Utah public-sector organization and a full workplace
            build for a Utah professional sports organization’s offices.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-center text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
          COMMON QUESTIONS
        </p>
        <h2 className="mt-4 text-center text-2xl font-bold uppercase tracking-[.12em] text-[#1A1A1A]">
          Trade Partner FAQ
        </h2>
        <div className="mt-8 divide-y divide-[#d8d0c3] border-y border-[#d8d0c3]">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="cursor-pointer text-sm font-bold text-[#1A1A1A]">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-7">{answer}</p>
            </details>
          ))}
        </div>
        <div className="pt-10 text-center">
          <a
            href="/contact/"
            className="inline-flex items-center gap-3 bg-[#BF5200] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#D95C00]"
          >
            DISCUSS YOUR PROJECT <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <Footer serviceArea="Salt Lake City and the Wasatch Front" />
    </main>
  );
}
