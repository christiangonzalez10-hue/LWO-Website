import { ArrowUpRight, ChevronDown, CheckCircle2, type LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Footer, SectionMark, SiteHeader } from '@/components/SiteChrome';
import { useSEO, type SEOMeta } from '@/hooks/useSEO';

export type ServiceConfig = {
  seo: SEOMeta;
  label: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  process: [string, string, string, LucideIcon][];
  faqs: [string, string][];
};

export default function ServiceTemplate({ config }: { config: ServiceConfig }) {
  const [active, setActive] = useState<number | null>(0);
  useSEO(config.seo);

  return (
    <main className="min-h-screen bg-white font-['Montserrat'] text-[#4E4B66]">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">{config.label}</p>
        <h1 className="mt-7 text-3xl font-bold uppercase leading-[1.3] tracking-[.18em] text-[#1F8080] md:text-5xl">
          {config.title}
        </h1>
        <div className="mx-auto mt-8 h-px w-20 bg-[#C9A96E]" />
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8">{config.intro}</p>
        <a
          href="mailto:contact@lwosolutions.com"
          className="mt-9 inline-flex items-center gap-3 bg-[#F46D0B] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#d95d07]"
        >
          CALL NOW <ArrowUpRight size={15} />
        </a>
      </section>

      {/* Detail */}
      <section className="mx-auto grid max-w-7xl gap-12 border-y border-[#d8d0c3] px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <img
            src={config.image}
            alt={config.imageAlt}
            loading="lazy"
            className="h-[220px] w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
            BUILT FOR THE WAY BUSINESS MOVES
          </p>
          <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.35] tracking-[.14em] text-[#1A1A1A]">
            Confidence in every detail.
          </h2>
          <p className="mt-7 text-sm leading-8">
            {config.intro} Our team keeps the work organized, visible, and accountable from first
            conversation through final handoff.
          </p>
          <div className="mt-8 grid gap-4">
            {config.benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-xs font-bold uppercase tracking-[.1em] text-[#1F8080]"
              >
                <CheckCircle2 size={17} className="shrink-0 text-[#C9A96E]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionMark />

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">OUR PROCESS</p>
          <h2 className="mt-5 text-3xl font-bold uppercase tracking-[.15em] text-[#1A1A1A]">
            A clear path to a finished project
          </h2>
        </div>
        <div className="mt-14 grid gap-px border border-[#d8d0c3] bg-[#d8d0c3] md:grid-cols-4">
          {config.process.map(([num, title, body, Icon]) => (
            <div key={title} className="bg-white p-7 text-center">
              <Icon size={25} className="mx-auto text-[#C9A96E]" />
              <p className="mt-8 text-xs font-bold tracking-[.2em] text-[#C9A96E]">{num}</p>
              <h3 className="mt-3 text-sm font-bold tracking-[.14em] text-[#1F8080]">{title}</h3>
              <p className="mt-4 text-sm leading-7">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-5xl gap-10 border-t border-[#d8d0c3] px-5 py-20 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">FAQ</p>
          <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.35] tracking-[.14em] text-[#1A1A1A]">
            Before the work begins.
          </h2>
        </div>
        <div>
          {config.faqs.map(([q, a], i) => (
            <div key={q} className="border-t border-[#d8d0c3]">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left text-xs font-bold uppercase leading-6 tracking-[.12em] text-[#1F8080]"
              >
                {q}
                <ChevronDown
                  size={17}
                  className={`shrink-0 text-[#C9A96E] transition-transform ${active === i ? 'rotate-180' : ''}`}
                />
              </button>
              {active === i && <p className="pb-6 pr-8 text-sm leading-7">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-[#d8d0c3] px-5 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">LET'S GET TO WORK</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold uppercase leading-[1.35] tracking-[.15em] text-[#1A1A1A]">
          A sharper space starts with a sharper plan.
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
