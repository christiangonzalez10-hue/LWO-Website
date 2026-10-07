import { ArrowUpRight, Heart, Lightbulb, Target } from 'lucide-react';
import { Footer, SectionMark, SiteHeader } from '@/components/SiteChrome';
import { useSEO } from '@/hooks/useSEO';

export default function AboutPage() {
  useSEO({
    title: 'About Lakewoods Office Solutions | Salt Lake City & Wasatch Front',
    description: 'Family-owned Lakewoods Office Solutions helps Salt Lake City and Wasatch Front businesses with office installation, moving, painting, and workspace planning.',
    canonical: '/about/',
    ogImage: 'https://www.lwosolutions.com/images/og/lwo-about.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Lakewoods Office Solutions',
      description: 'Family-owned Lakewoods Office Solutions helps commercial workplaces in Salt Lake City and across the Wasatch Front with installation, moving, painting, and space planning.',
      url: 'https://www.lwosolutions.com/about/',
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
          As a family-owned business serving Salt Lake City and the Wasatch Front, we help
          offices, warehouses, and multi-site businesses plan, install, move, and refresh their
          commercial spaces. Our Utah-based team combines hands-on experience with a personal
          approach to every workplace project.
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
              Family owned · Salt Lake City · Wasatch Front
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
            Being family owned means every client relationship is personal to us. For businesses
            in Salt Lake City and across the Wasatch Front, we bring the care and accountability
            of a small business with the expertise to handle commercial projects of any scale.
            From a single office to a multi-site workplace, you work with people who genuinely
            care about the outcome.
          </p>
          <p className="mt-5 text-sm leading-8">
            Lakewoods is the exclusive commercial installation partner for a major Utah
            public-sector organization and recently completed a full workplace build for a
            Utah professional sports organization's offices. We work alongside Utah's leading
            furniture suppliers, general contractors, and architects to deliver installations
            on schedule.
          </p>
          <a
            href="mailto:contact@lwosolutions.com"
            className="mt-9 inline-flex w-fit items-center gap-3 bg-[#BF5200] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#D95C00]"
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
              body: 'To provide tailored office solutions for businesses in Salt Lake City and across the Wasatch Front, improving their day-to-day operations and overall business performance. We are dedicated to delivering top-quality products and dependable service that our commercial clients can trust.',
            },
            {
              Icon: Lightbulb,
              label: 'OUR VISION',
              heading: 'The leading choice for business.',
              body: "To be the leading choice for commercial workplace solutions in Salt Lake City and the Wasatch Front, recognized for our innovation, commitment to sustainability, and focus on customer success. We aim to make a positive impact on our clients\u2019 businesses and the communities we serve.",
            },
            {
              Icon: Heart,
              label: 'OUR VALUES',
              heading: 'People first, always.',
              body: 'We believe great workspaces start with great relationships. Whether your business is in Salt Lake City or elsewhere along the Wasatch Front, we show up with honesty, follow through on our commitments, and treat every commercial project — large or small — with the same care and craftsmanship.',
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
          className="mt-9 inline-flex items-center gap-3 bg-[#BF5200] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#D95C00]"
        >
          REQUEST A CONSULTATION <ArrowUpRight size={15} />
        </a>
      </section>

      <Footer serviceArea="Salt Lake City and the Wasatch Front" />
    </main>
  );
}
