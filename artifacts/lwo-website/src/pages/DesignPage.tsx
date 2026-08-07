import { ClipboardCheck, DraftingCompass, Hammer, CheckCircle2 } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  seo: {
    title: 'Commercial Office Design & Custom Furniture | Lakewoods Office Solutions',
    description: 'Bespoke commercial workspace design and custom furniture fabrication. Space planning, brand-aligned interiors, ergonomic layouts, and turnkey project management in Utah and the Mountain West.',
    canonical: '/services/commercial-design-furniture',
    ogImage: 'https://www.lwosolutions.com/images/lwo-design.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Office Design & Custom Furniture',
      description: 'Bespoke commercial workspace design and custom furniture fabrication — space planning, brand-aligned interiors, and turnkey project management.',
      provider: { '@type': 'LocalBusiness', '@id': 'https://www.lwosolutions.com/#business', name: 'Lakewoods Office Solutions' },
      areaServed: { '@type': 'Country', name: 'United States' },
      url: 'https://www.lwosolutions.com/services/commercial-design-furniture',
    },
  },
  label: 'WORKSPACE DESIGN SPECIALISTS',
  title: 'Commercial Design & Furniture',
  intro: 'Bespoke commercial space design and custom furniture building — from concept to installation, we shape workspaces that reflect your brand and drive productivity.',
  image: '/images/lwo-design.png',
  imageAlt: 'Custom-designed modern office with bespoke furniture',
  benefits: [
    'Space planning and layout optimization',
    'Custom furniture design and fabrication',
    'Brand-aligned interior design',
    'Ergonomic and wellness-focused layouts',
    'Turnkey project management',
  ],
  process: [
    ['01', 'CONCEPT', 'We listen, survey the space, and define the opportunity.', DraftingCompass],
    ['02', 'DESIGN', 'Plans, materials, and furniture details come together around your goals.', ClipboardCheck],
    ['03', 'BUILD', 'Our makers turn approved concepts into precise, durable pieces.', Hammer],
    ['04', 'INSTALL', 'We deliver, place, and finish the space ready for your team.', CheckCircle2],
  ],
  faqs: [
    ['Do you offer custom furniture fabrication?', 'Yes. We design and build furniture tailored to your dimensions, materials, workflow, and brand.'],
    ['How long does a full design project take?', 'Most projects move from concept to installation over several weeks; we map the timeline after the initial survey.'],
    ['Can you work with our existing furniture?', 'Absolutely. We can integrate, refresh, relocate, or phase existing pieces into a new plan.'],
    ['Do you coordinate with architects and contractors?', 'Yes. Our project leads collaborate with architects, contractors, dealers, and other trades.'],
  ],
};

export default function DesignPage() {
  return <ServiceTemplate config={config} />;
}
