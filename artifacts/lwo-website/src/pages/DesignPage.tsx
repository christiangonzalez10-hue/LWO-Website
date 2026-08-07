import { ClipboardCheck, DraftingCompass, Hammer, CheckCircle2 } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  seo: {
    title: 'Commercial Office Design in Salt Lake City | Lakewoods',
    description:
      'Office design and custom furniture for Salt Lake City businesses — space planning, brand-aligned interiors, and turnkey installation. Serving Utah & the Wasatch Front.',
    canonical: '/services/commercial-design-furniture',
    ogImage: 'https://www.lwosolutions.com/images/lwo-design.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Office Design & Custom Furniture',
      description:
        'Bespoke commercial workspace design and custom furniture for Salt Lake City businesses — space planning, brand-aligned interiors, ergonomic layouts, and turnkey installation across the Wasatch Front.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.lwosolutions.com/#business',
        name: 'Lakewoods Office Solutions',
      },
      areaServed: { '@type': 'State', name: 'Utah' },
      url: 'https://www.lwosolutions.com/services/commercial-design-furniture',
    },
  },
  label: 'OFFICE DESIGN & FURNITURE — SALT LAKE CITY',
  title: 'Commercial Office Design & Furniture in Salt Lake City',
  intro:
    'Bespoke commercial space design and custom furniture — from concept to installation, we shape workspaces that reflect your brand and drive productivity, for businesses across Salt Lake City and the Wasatch Front.',
  image: '/images/lwo-design.png',
  imageAlt: 'Custom-designed modern office with bespoke furniture',
  benefits: [
    'Space planning and layout optimization',
    'Custom furniture design and fabrication',
    'Brand-aligned interior design',
    'Ergonomic and wellness-focused layouts',
    'Turnkey project management — design through installation',
    'Coordinated with moving and storage — one team for the whole transition',
  ],
  process: [
    ['01', 'CONCEPT', 'We listen, survey the space, and define the opportunity — understanding your Salt Lake City or Wasatch Front team and how they work best.', DraftingCompass],
    ['02', 'DESIGN', 'Plans, materials, and furniture details come together around your goals, brand, and budget.', ClipboardCheck],
    ['03', 'BUILD', 'Our makers turn approved concepts into precise, durable pieces tailored to your space.', Hammer],
    ['04', 'INSTALL', 'We deliver, place, and finish the space — ready for your team on day one.', CheckCircle2],
  ],
  faqs: [
    [
      'Do you offer custom furniture fabrication?',
      'Yes. We design and build furniture tailored to your dimensions, materials, workflow, and brand — made for your specific space, not adapted from a catalog.',
    ],
    [
      'How long does a full design project take?',
      'Most projects move from concept to installation over several weeks. After an initial survey of your Salt Lake City or Utah location, we map a clear timeline.',
    ],
    [
      'Can you work with our existing furniture?',
      'Absolutely. We can integrate, refresh, relocate, or phase existing pieces into a new plan — including handling the move and reinstallation if needed.',
    ],
    [
      'Do you coordinate with architects and contractors?',
      'Yes. Our project leads collaborate with architects, general contractors, furniture dealers, and other trades across the Wasatch Front.',
    ],
    [
      'Do you serve areas outside Salt Lake City?',
      "Yes. We design and install for businesses across the Wasatch Front — including Sandy, Lehi, Provo, Ogden, and Park City — and throughout Utah.",
    ],
  ],
  serviceAreaLine:
    'Proudly serving Salt Lake City, Sandy, Lehi, Provo, Ogden, Park City, and businesses across Utah.',
};

export default function DesignPage() {
  return <ServiceTemplate config={config} />;
}
