import { ClipboardCheck, DraftingCompass, ShieldCheck, Truck } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  seo: {
    title: 'Commercial Storage Solutions | Lakewoods Office Solutions',
    description: 'Secure, organized commercial storage for business assets, inventory, documents, and equipment. Flexible short- and long-term options serving Utah and the Mountain West.',
    canonical: '/services/commercial-storage',
    ogImage: 'https://www.lwosolutions.com/images/lwo-storage.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Storage Solutions',
      description: 'Secure, organized commercial storage for business assets, inventory, documents, and equipment with flexible terms and inventory tracking.',
      provider: { '@type': 'LocalBusiness', '@id': 'https://www.lwosolutions.com/#business', name: 'Lakewoods Office Solutions' },
      areaServed: { '@type': 'Country', name: 'United States' },
      url: 'https://www.lwosolutions.com/services/commercial-storage',
    },
  },
  label: 'SECURE WORKSPACE STORAGE',
  title: 'Commercial Storage Solutions',
  intro: 'Secure, organized storage solutions for business assets, inventory, documents, and equipment during transitions or on an ongoing basis.',
  image: '/images/lwo-storage.png',
  imageAlt: 'Organized commercial storage facility',
  benefits: [
    'Climate-controlled storage facilities',
    'Flexible short- and long-term options',
    'Inventory tracking and access management',
    'Secure chain of custody',
    'Integration with relocation and moving services',
  ],
  process: [
    ['01', 'ASSESS', 'We understand what needs storing, when, and how it must be accessed.', DraftingCompass],
    ['02', 'PACK & LABEL', 'Every item is documented, protected, and labeled for easy retrieval.', ClipboardCheck],
    ['03', 'SECURE', 'Assets move into a controlled facility with clear custody records.', ShieldCheck],
    ['04', 'RETRIEVE', 'We coordinate timely access, delivery, or return to your workspace.', Truck],
  ],
  faqs: [
    ['What items can you store?', 'We store office furniture, files, equipment, inventory, fixtures, and other business assets that need a secure, organized home.'],
    ['How is access managed?', 'Your project lead coordinates authorized access and documents every movement in and out of storage.'],
    ['Do you offer inventory tracking?', 'Yes. We create a practical inventory record so your team can locate and request assets with confidence.'],
    ['Can storage be combined with a move?', 'Absolutely. Storage can be planned as part of a relocation, renovation, or phased office transition.'],
  ],
};

export default function StoragePage() {
  return <ServiceTemplate config={config} />;
}
