import { ArrowUpRight, Camera } from 'lucide-react';
import { Footer, SectionMark, SiteHeader } from '@/components/SiteChrome';
import { ProjectGallery } from '@/components/ProjectGallery';
import { useSEO } from '@/hooks/useSEO';
import { ourWorkSEO, projects, serviceTypes } from '@/data/our-work';

export default function OurWorkPage() {
  useSEO(ourWorkSEO);

  return (
    <main className="min-h-screen bg-white font-['Montserrat'] text-[#4E4B66]">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-5 py-20 text-center md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">COMMERCIAL PROJECTS</p>
        <h1 className="mt-7 text-3xl font-bold uppercase leading-[1.3] tracking-[.18em] text-[#1F8080] md:text-5xl">
          Our Work
        </h1>
        <div className="mx-auto mt-8 h-px w-20 bg-[#C9A96E]" />
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8">
          Commercial projects only — offices, warehouses, and multi-site businesses across the Wasatch Front.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8" data-testid="section-gallery">
        {projects.length > 0 ? (
          <ProjectGallery projects={projects} />
        ) : (
          <div
            className="border border-[#d8d0c3] px-6 py-16 text-center md:py-20"
            data-testid="empty-projects"
          >
            <Camera size={28} strokeWidth={1.5} className="mx-auto text-[#C9A96E]" />
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[.24em] text-[#1F8080]">
              PROJECT PHOTOS COMING SOON
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-xl font-bold uppercase leading-[1.4] tracking-[.12em] text-[#1A1A1A]">
              We only show work we can stand behind.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8">
              Our gallery will feature photos of finished commercial projects, shared with the
              permission of the businesses we served. Until then, we would be glad to talk
              through your project directly.
            </p>
            <ul className="mx-auto mt-9 flex max-w-2xl flex-wrap justify-center gap-2">
              {serviceTypes.map((t) => (
                <li
                  key={t}
                  className="border border-[#C9A96E] px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#1A1A1A]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <SectionMark />

      <section className="border-t border-[#d8d0c3] px-5 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
          LET'S TALK ABOUT YOUR SPACE
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold uppercase leading-[1.35] tracking-[.15em] text-[#1A1A1A]">
          Planning a commercial project?
        </h2>
        <a
          href="/contact/"
          data-testid="link-contact-cta"
          className="mt-9 inline-flex items-center gap-3 bg-[#BF5200] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#D95C00]"
        >
          CONTACT US <ArrowUpRight size={15} />
        </a>
      </section>

      <Footer />
    </main>
  );
}
