import { ClipboardCheck, DraftingCompass, Paintbrush, CheckCircle2 } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  seo: {
    title: 'Commercial Painting Services in Salt Lake City | Lakewoods',
    description:
      'Commercial office painting in Salt Lake City — brand colors, low-VOC options, after-hours scheduling. Serving businesses across Utah & the Wasatch Front.',
    canonical: '/services/commercial-painting',
    ogImage: 'https://www.lwosolutions.com/images/lwo-painting.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Painting Services',
      description:
        'Professional commercial painting in Salt Lake City — interior and exterior, low-VOC options, brand-aligned color consulting, and after-hours scheduling across the Wasatch Front.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.lwosolutions.com/#business',
        name: 'Lakewoods Office Solutions',
      },
      areaServed: { '@type': 'State', name: 'Utah' },
      url: 'https://www.lwosolutions.com/services/commercial-painting',
    },
  },
  label: 'COMMERCIAL PAINTING — SALT LAKE CITY',
  title: 'Commercial Painting Services in Salt Lake City',
  intro:
    'Professional commercial painting that transforms your workspace — precise application, minimal disruption, and finishes built to last, for offices across Salt Lake City and the Wasatch Front.',
  image: '/images/lwo-painting.png',
  imageAlt: 'Professional painters in a bright commercial office',
  benefits: [
    'Interior and exterior commercial painting',
    'Color consultation and brand alignment',
    'Low-VOC and eco-friendly paint options',
    'After-hours and weekend scheduling — keep your team productive',
    'Surface prep, priming, and finishing included',
    'Coordinated with moves and renovations — one team, less downtime',
  ],
  process: [
    ['01', 'CONSULT', 'We discuss your goals, palette, surfaces, and schedule — working around your Salt Lake City business hours.', DraftingCompass],
    ['02', 'PREP', 'Thorough protection, patching, sanding, and priming set up a clean, lasting finish.', ClipboardCheck],
    ['03', 'PAINT', 'Our team applies consistent coats with care around every detail and surface.', Paintbrush],
    ['04', 'INSPECT', 'We walk the space with you, address every punch-list item, and leave it ready.', CheckCircle2],
  ],
  faqs: [
    [
      'Can you paint after hours or on weekends?',
      'Yes. We regularly schedule evening and weekend work so your Salt Lake City team never loses a productive day. After-hours availability is standard for us, not an exception.',
    ],
    [
      'Do you offer color consulting?',
      'Yes. We help translate your brand and workplace goals into a considered, practical palette — including options that work across lighting conditions common in Utah office buildings.',
    ],
    [
      'Can painting be combined with a move or renovation?',
      'Absolutely. Because we also handle office moving and furniture installation, painting can be sequenced into a broader transition — one coordinated team means fewer scheduling conflicts and less downtime.',
    ],
    [
      'What paint brands and products do you use?',
      'We specify professional-grade products selected for durability, coverage, low odor, and the specific demands of your space.',
    ],
    [
      'Do you serve areas outside Salt Lake City?',
      "Yes. We're based in Salt Lake City and paint for businesses across the Wasatch Front — including Sandy, Lehi, Provo, Ogden, and Park City — and throughout Utah.",
    ],
  ],
  serviceAreaLine:
    'Proudly serving Salt Lake City, Sandy, Lehi, Provo, Ogden, Park City, and businesses across Utah.',
};

export default function PaintingPage() {
  return <ServiceTemplate config={config} />;
}
