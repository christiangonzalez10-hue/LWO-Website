import { ClipboardCheck, DraftingCompass, Truck, CheckCircle2 } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  seo: {
    title: 'Commercial Moving Services | Lakewoods Office Solutions',
    description: 'Full-service commercial office moving for businesses of every size. Pre-move planning, furniture disassembly, IT equipment handling, and after-hours availability nationwide.',
    canonical: '/services/commercial-moving',
    ogImage: 'https://www.lwosolutions.com/images/lwo-moving.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Moving Services',
      description: 'Full-service commercial moving — pre-move planning, furniture disassembly and reassembly, IT handling, and after-hours availability.',
      provider: { '@type': 'LocalBusiness', '@id': 'https://www.lwosolutions.com/#business', name: 'Lakewoods Office Solutions' },
      areaServed: { '@type': 'Country', name: 'United States' },
      url: 'https://www.lwosolutions.com/services/commercial-moving',
    },
  },
  label: 'OFFICE MOVING SPECIALISTS',
  title: 'Commercial Moving Services',
  intro: 'Full-service commercial moving for businesses of every size — planned, coordinated, and executed with zero disruption to your operations.',
  image: '/images/lwo-moving.png',
  imageAlt: 'Professional commercial movers handling office furniture',
  benefits: [
    'Pre-move planning and inventory',
    'Furniture disassembly and reassembly',
    'IT and electronics handling',
    'After-hours and weekend availability',
    'Single-point project management',
  ],
  process: [
    ['01', 'PLAN', 'We build the move sequence around your people, assets, and operating hours.', DraftingCompass],
    ['02', 'DISASSEMBLE', 'Furniture and equipment are carefully prepared, labeled, and protected.', ClipboardCheck],
    ['03', 'TRANSPORT', 'A coordinated crew moves everything safely and efficiently.', Truck],
    ['04', 'REINSTALL', 'Your new workplace is reassembled, aligned, and ready for business.', CheckCircle2],
  ],
  faqs: [
    ['How far in advance should we book?', 'Four to six weeks is ideal for most commercial moves, though we can build an accelerated plan when timing is tight.'],
    ['Do you handle IT equipment?', 'Yes. We coordinate careful handling and sequencing for computers, monitors, and other workplace electronics.'],
    ['Can you move after hours?', 'Yes. Evening and weekend scheduling is available to keep your operations moving.'],
    ['What if something is damaged?', 'Your project lead documents the condition of assets and coordinates a prompt resolution for any issue.'],
  ],
};

export default function MovingPage() {
  return <ServiceTemplate config={config} />;
}
