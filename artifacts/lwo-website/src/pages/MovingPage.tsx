import { ClipboardCheck, DraftingCompass, Truck, CheckCircle2 } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  seo: {
    title: 'Commercial Office Movers in Salt Lake City | Lakewoods',
    description:
      'Salt Lake City commercial office movers — relocations handled by one team that also installs and stores, minimizing your downtime. Serving Utah & the Wasatch Front.',
    canonical: '/services/commercial-moving',
    ogImage: 'https://www.lwosolutions.com/images/lwo-moving.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Office Moving',
      description:
        'Commercial office movers in Salt Lake City — moving, furniture installation, and storage coordinated by one integrated team to minimize downtime across the Wasatch Front.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.lwosolutions.com/#business',
        name: 'Lakewoods Office Solutions',
      },
      areaServed: { '@type': 'State', name: 'Utah' },
      url: 'https://www.lwosolutions.com/services/commercial-moving',
    },
  },
  label: 'COMMERCIAL OFFICE MOVERS — SALT LAKE CITY',
  title: 'Commercial Office Movers in Salt Lake City',
  intro:
    'One integrated team handles your move, furniture reinstallation, and storage — so Salt Lake City and Wasatch Front businesses spend less time managing vendors and more time back at work.',
  image: '/images/lwo-moving.png',
  imageAlt: 'Professional commercial movers handling office furniture and equipment',
  benefits: [
    'Office relocation planning and pre-move inventory',
    'Workstation, cubicle, and systems furniture disassembly & reassembly',
    'IT and electronics moving — coordinated handling and sequencing',
    'Furniture installation and reconfiguration at the new site',
    'Commercial storage during your transition',
    'After-hours and weekend availability',
  ],
  process: [
    ['01', 'PLAN', 'We map the move sequence around your people, assets, and operating hours — accounting for IT, furniture, and storage in one coordinated plan.', DraftingCompass],
    ['02', 'DISASSEMBLE', 'Workstations, cubicles, panel systems, and equipment are carefully labeled, protected, and staged for transport.', ClipboardCheck],
    ['03', 'TRANSPORT', 'A coordinated crew moves everything safely and on schedule — after hours or on weekends when needed.', Truck],
    ['04', 'REINSTALL', 'Your new Salt Lake City or Wasatch Front workspace is reassembled, configured, and ready for your team on day one.', CheckCircle2],
  ],
  faqs: [
    [
      'What makes Lakewoods different from a standard moving company?',
      'We\'re not just movers. The same team that relocates your office can also reinstall your furniture and handle interim storage — so you have one point of contact instead of three. That means fewer scheduling gaps, less downtime, and a faster path back to normal operations.',
    ],
    [
      'Do you handle IT and electronics during a move?',
      'Yes. We coordinate careful handling and sequencing for computers, monitors, servers, and other workplace electronics — and can sequence IT moves around your IT team\'s schedule.',
    ],
    [
      'Can you move and reconfigure our workstations and cubicles?',
      'Absolutely. We disassemble panel systems, cubicles, and workstations at the origin, transport them, and fully reassemble and reconfigure them at the new location.',
    ],
    [
      'Do you offer after-hours or weekend scheduling?',
      'Yes. Evening and weekend moves are available to keep your business running without interruption during the transition.',
    ],
    [
      'Do you handle office moves outside Salt Lake City?',
      'Yes. We\'re based in Salt Lake City and relocate businesses across the Wasatch Front — including Sandy, Lehi, Provo, Ogden, and Park City — and throughout Utah.',
    ],
  ],
  serviceAreaLine:
    'Proudly serving Salt Lake City, Sandy, Lehi, Provo, Ogden, Park City, and businesses across Utah.',
};

export default function MovingPage() {
  return <ServiceTemplate config={config} />;
}
