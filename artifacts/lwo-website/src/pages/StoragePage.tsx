import { ClipboardCheck, DraftingCompass, ShieldCheck, Truck } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  seo: {
    title: 'Commercial Office Storage in Salt Lake City | Lakewoods',
    description:
      'Secure commercial and office furniture storage in Salt Lake City — short- or long-term, ideal for moves and renovations. Serving Utah & the Wasatch Front.',
    canonical: '/services/commercial-storage',
    ogImage: 'https://www.lwosolutions.com/images/lwo-storage.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Office Storage',
      description:
        'Secure commercial and office furniture storage in Salt Lake City — short- or long-term, with inventory tracking. Ideal for moves and renovations across the Wasatch Front.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.lwosolutions.com/#business',
        name: 'Lakewoods Office Solutions',
      },
      areaServed: { '@type': 'State', name: 'Utah' },
      url: 'https://www.lwosolutions.com/services/commercial-storage',
    },
  },
  label: 'COMMERCIAL OFFICE STORAGE — SALT LAKE CITY',
  title: 'Commercial & Office Storage in Salt Lake City',
  intro:
    'Secure, organized storage for office furniture, equipment, and business assets — short-term or long-term — for businesses across Salt Lake City and the Wasatch Front.',
  image: '/images/lwo-storage.png',
  imageAlt: 'Organized commercial storage facility for office furniture and equipment',
  benefits: [
    'Office furniture storage — short-term & long-term',
    'Storage during office moves and renovations',
    'Climate-controlled and secure facilities',
    'Inventory tracking and access management',
    'Integrated with moving and installation — one team handles it all',
    "Furniture delivered and reinstalled when you're ready",
  ],
  process: [
    ['01', 'ASSESS', 'We catalog what needs storing, your timeline, and how it will need to be accessed or reinstalled.', DraftingCompass],
    ['02', 'PACK & LABEL', 'Every item is documented, protected, and labeled for easy retrieval — whether it\'s a single desk or a full floor of workstations.', ClipboardCheck],
    ['03', 'SECURE', 'Assets move into a controlled facility with clear custody records and inventory tracking.', ShieldCheck],
    ['04', 'RETRIEVE', 'When you\'re ready, we coordinate delivery and — if needed — full reinstallation at your Salt Lake City or Wasatch Front location.', Truck],
  ],
  faqs: [
    [
      'What can you store?',
      'We store office furniture, workstations, cubicles, files, equipment, fixtures, and other business assets. If it came out of an office, we can hold it safely.',
    ],
    [
      'Is storage available during an office move or renovation?',
      'Yes — and it\'s one of the most common reasons businesses work with us. Because the same team handles moving, storage, and furniture installation, your assets stay tracked and ready to go back in the moment the space is ready.',
    ],
    [
      'Do you offer inventory tracking?',
      'Yes. We create a practical inventory record so your team can locate and request assets with confidence at any point during storage.',
    ],
    [
      'How is access managed?',
      'Your project lead coordinates authorized access and documents every movement in and out of storage, from first drop-off through final retrieval.',
    ],
    [
      'Where do you offer commercial storage?',
      'We provide commercial and office storage for businesses across Salt Lake City and the Wasatch Front — including Sandy, Lehi, Provo, Ogden, and Park City — and throughout Utah.',
    ],
  ],
  serviceAreaLine:
    'Proudly serving Salt Lake City, Sandy, Lehi, Provo, Ogden, Park City, and businesses across Utah.',
};

export default function StoragePage() {
  return <ServiceTemplate config={config} />;
}
