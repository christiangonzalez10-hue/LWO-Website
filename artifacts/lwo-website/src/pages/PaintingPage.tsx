import { ClipboardCheck, DraftingCompass, Paintbrush, CheckCircle2 } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  seo: {
    title: 'Commercial Painting Services | Lakewoods Office Solutions',
    description: 'Professional commercial office painting — interior and exterior, low-VOC options, brand-aligned color consulting, and after-hours scheduling to minimize business disruption.',
    canonical: '/services/commercial-painting',
    ogImage: 'https://www.lwosolutions.com/images/lwo-painting.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Painting Services',
      description: 'Professional commercial painting — interior and exterior, low-VOC options, color consulting, and after-hours scheduling.',
      provider: { '@type': 'LocalBusiness', '@id': 'https://www.lwosolutions.com/#business', name: 'Lakewoods Office Solutions' },
      areaServed: { '@type': 'Country', name: 'United States' },
      url: 'https://www.lwosolutions.com/services/commercial-painting',
    },
  },
  label: 'PROFESSIONAL WORKSPACE PAINTING',
  title: 'Commercial Painting Services',
  intro: 'Professional commercial painting that transforms your workspace — precise application, minimal disruption, and finishes built to last.',
  image: '/images/lwo-painting.png',
  imageAlt: 'Professional painters in a bright commercial office',
  benefits: [
    'Interior and exterior commercial painting',
    'Color consultation and brand alignment',
    'Low-VOC and eco-friendly paint options',
    'After-hours scheduling to minimize downtime',
    'Surface prep, priming, and finishing included',
  ],
  process: [
    ['01', 'CONSULT', 'We discuss your goals, palette, surfaces, and schedule.', DraftingCompass],
    ['02', 'PREP', 'Thorough protection, patching, sanding, and priming set up a clean finish.', ClipboardCheck],
    ['03', 'PAINT', 'Our team applies consistent coats with care around every detail.', Paintbrush],
    ['04', 'INSPECT', 'We review the work with you and address the final details.', CheckCircle2],
  ],
  faqs: [
    ['Can you paint after hours?', 'Yes. We regularly schedule evening and weekend work to protect your team\u2019s productivity.'],
    ['Do you offer color consulting?', 'Yes. We help translate your brand and workplace goals into a considered, practical palette.'],
    ['What paint brands do you use?', 'We specify professional-grade products selected for durability, coverage, low odor, and the needs of your space.'],
    ['How long does a typical commercial project take?', 'Timing depends on scope and surfaces; after a walkthrough, we provide a clear schedule and phased plan.'],
  ],
};

export default function PaintingPage() {
  return <ServiceTemplate config={config} />;
}
