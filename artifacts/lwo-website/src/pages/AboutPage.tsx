import { ArrowUpRight, Heart, Lightbulb, Target } from 'lucide-react';
import { Footer, SectionMark, SiteHeader } from '@/components/SiteChrome';
import { useSEO } from '@/hooks/useSEO';

export default function AboutPage() {
  useSEO({
    title: 'About Lakewoods Office Solutions | Utah-Based Family-Owned Office Services',
    description: 'Family-owned and Utah-based, Lakewoods Office Solutions delivers furniture installation, moving, painting, and space planning across Utah and the Mountain West.',
    canonical: '/about',
    ogImage: 'https://www.lwosolutions.com/images/lwo-about.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Lakewoods Office Solutions',
      description: 'Family-owned and Utah-based, Lakewoods Office Solutions is committed to revolutionizing the way businesses think about their office environments.',
      url: 'https://www.lwosolutions.com/about',
      about: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.lwosolutions.com/#business',
        name: 'Lakewoods Office Solutions',
      },
    },
  });

  return (
    <main className="min-h-screen bg-white font-['Montserrat'] text-[#4E4B66]">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center md:py-28">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">OUR STORY</p>
        <h1 className="mt-7 text-3xl font-bold uppercase leading-[1.3] tracking-[.18em] text-[#1F8080] md:text-5xl">
          Who We Are
        </h1>
        <div className="mx-auto mt-8 h-px w-20 bg-[#C9A96E]" />
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8">
          As a family owned business based in Utah we are committed to revolutionizing the way
          businesses think about their office environments. As a young, dynamic company with
          extensive experience, we offer innovative and personalized solutions in office supplies
          and services.
        </p>
      </section>

      {/* Image + intro panel */}
      <section className="mx-auto grid max-w-7xl gap-0 border-y border-[#d8d0c3] lg:grid-cols-2">
        <div className="relative min-h-[380px] overflow-hidden bg-[#1A1A1A]">
          <picture>
            <source type="image/webp" srcSet="/images/lwo-about.webp" />
            <img
              src="/images/lwo-about.jpg"
              alt="Lakewoods Office Solutions team collaborating in a Utah office"
              loading="lazy"
              width={800}
              height={800}
              className="h-full w-full object-cover opacity-70"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 border-t border-[#C9A96E] bg-[#1A1A1A]/80 px-7 py-5">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#C9A96E]">
              Family owned · Utah based · Mountain West
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-10 py-14">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
            BUILT ON TRUST
          </p>
          <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.35] tracking-[.14em] text-[#1A1A1A]">
            A personal touch<br />at every scale.
          </h2>
          <p className="mt-7 text-sm leading-8">
            Being family owned means every client relationship is personal to us. We bring the
            care and accountability of a small business with the expertise to handle projects of
            any scale — so no matter the size of your project, you work with people who
            genuinely care about the outcome.
          </p>
          <a
            href="mailto:contact@lwosolutions.com"
            className="mt-9 inline-flex w-fit items-center gap-3 bg-[#F46D0B] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#d95d07]"
          >
            GET IN TOUCH <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <SectionMark />

      {/* Mission / Vision / Values */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
            WHAT DRIVES US
          </p>
          <h2 className="mt-5 text-3xl font-bold uppercase tracking-[.15em] text-[#1A1A1A]">
            Mission, vision & values
          </h2>
        </div>
        <div className="grid gap-px border border-[#d8d0c3] bg-[#d8d0c3] md:grid-cols-3">
          {[
            {
              Icon: Target,
              label: 'OUR MISSION',
              heading: 'Tailored solutions, trusted results.',
              body: 'To provide tailored office solutions that meet the unique needs of every client, improving their day-to-day operations and overall business performance. We are dedicated to delivering top-quality products and exceptional service that our clients can trust.',
            },
            {
              Icon: Lightbulb,
              label: 'OUR VISION',
              heading: 'The leading choice for business.',
              body: "To be the leading choice for businesses seeking office solutions, recognized for our innovation, commitment to sustainability, and focus on customer success. We aim to make a positive impact on both our clients\u2019 businesses and the wider community.",
            },
            {
              Icon: Heart,
              label: 'OUR VALUES',
              heading: 'People first, always.',
              body: 'We believe great workspaces start with great relationships. We show up with honesty, follow through on our commitments, and treat every project — large or small — with the same level of care and craftsmanship.',
            },
          ].map(({ Icon, label, heading, body }) => (
            <div key={label} className="bg-white p-10">
              <Icon size={26} className="text-[#C9A96E]" strokeWidth={1.5} />
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[.24em] text-[#1F8080]">
                {label}
              </p>
              <h3 className="mt-3 text-lg font-bold uppercase leading-[1.4] tracking-[.12em] text-[#1A1A1A]">
                {heading}
              </h3>
              <p className="mt-5 text-sm leading-8">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-[#d8d0c3] px-5 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-[#1F8080]">
          LET'S WORK TOGETHER
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold uppercase leading-[1.35] tracking-[.15em] text-[#1A1A1A]">
          Ready to transform your workspace?
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
