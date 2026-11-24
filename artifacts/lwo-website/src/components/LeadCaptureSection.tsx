import { ArrowUpRight, Phone } from 'lucide-react';
import QuoteRequestForm from '@/components/QuoteRequestForm';

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  serviceNote?: string;
};

export default function LeadCaptureSection({ eyebrow, title, intro, serviceNote }: Props) {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-5 px-5 py-6 sm:py-8 md:gap-10 md:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(440px,0.9fr)] lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#1F8080]">{eyebrow}</p>
          <h1 className="mt-3 text-xl font-bold uppercase leading-[1.2] tracking-[.06em] text-[#1F8080] sm:text-2xl md:mt-4 md:text-4xl md:tracking-[.1em]">
            {title}
          </h1>
          <div className="mt-4 h-px w-16 bg-[#C9A96E]" />
          <p className="mt-4 max-w-xl text-[13px] leading-6 md:text-sm md:leading-7">{intro}</p>
          {serviceNote && (
            <p className="mt-3 hidden max-w-xl text-xs leading-5 text-[#4E4B66]/80 md:block">{serviceNote}</p>
          )}
          <a
            href="tel:+18017125772"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#1A1A1A] underline decoration-[#C9A96E] underline-offset-4 hover:text-[#1F8080] md:mt-5"
          >
            <Phone size={16} className="text-[#BF5200]" />
            (801) 712-5772
            <span className="sr-only"> — call Lakewoods Office Solutions</span>
          </a>
        </div>

        <QuoteRequestForm />
      </section>

      <a
        href="tel:+18017125772"
        className="fixed inset-x-0 bottom-0 z-[60] flex min-h-14 items-center justify-center gap-2 bg-[#BF5200] px-5 pb-[env(safe-area-inset-bottom)] pt-3 text-xs font-bold uppercase tracking-[.2em] text-white shadow-[0_-5px_18px_rgba(26,26,26,0.18)] transition-colors hover:bg-[#D95C00] md:hidden"
        aria-label="Call Lakewoods Office Solutions now"
      >
        <Phone size={16} />
        Call Now — (801) 712-5772
      </a>
    </>
  );
}
