import { ClipboardCheck, DraftingCompass, Route, CheckCircle2 } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  seo: {
    title: 'Office Relocation Services in Salt Lake City | Lakewoods',
    description:
      'End-to-end office relocation in Salt Lake City — one coordinated team for moving, storage, and setup. Serving Utah & the Wasatch Front.',
    canonical: '/services/commercial-relocation',
    ogImage: 'https://www.lwosolutions.com/images/lwo-relocation.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Office Relocation Services',
      description:
        'End-to-end office relocation management in Salt Lake City — site surveys, vendor coordination, moving, storage, furniture installation, and complete setup across the Wasatch Front.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.lwosolutions.com/#business',
        name: 'Lakewoods Office Solutions',
      },
      areaServed: { '@type': 'State', name: 'Utah' },
      url: 'https://www.lwosolutions.com/services/commercial-relocation',
    },
  },
  label: 'OFFICE RELOCATION — SALT LAKE CITY',
  title: 'Office Relocation Services in Salt Lake City',
  intro:
    'Comprehensive office relocation management for Salt Lake City and Wasatch Front businesses — one integrated team handles moving, storage, and furniture installation, so your people land in a fully operational space.',
  image: '/images/lwo-relocation.png',
  imageAlt: 'Professional team coordinating a corporate office relocation',
  benefits: [
    'Full relocation project management — one point of contact',
    'Office moving, furniture disassembly & reinstallation',
    'Interim storage during the transition',
    'Space decommissioning and new-site setup',
    'Vendor and contractor coordination',
    'Technology and infrastructure transition planning',
  ],
  process: [
    ['01', 'SURVEY', 'We walk both sites, document every requirement, and identify the constraints your Salt Lake City or Utah move presents.', DraftingCompass],
    ['02', 'PLAN', 'A detailed move plan aligns vendors, people, technology, storage, and timing — one accountable lead across every workstream.', ClipboardCheck],
    ['03', 'EXECUTE', 'Our team manages the transition with visible milestones — moving, storing, and reinstalling on the schedule that protects your operations.', Route],
    ['04', 'SETTLE IN', 'We complete setup, resolve every punch-list item, and make sure your Wasatch Front team is ready to work from day one.', CheckCircle2],
  ],
  faqs: [
    [
      'What does a full relocation include?',
      'It can include planning, decommissioning the old space, packing, moving, interim storage, furniture installation and reconfiguration, technology coordination, and closeout. Because we handle moving, storage, and installation in-house, you work with one team instead of three.',
    ],
    [
      'How do you minimize business disruption?',
      'We phase the work, schedule moves around your Salt Lake City operating hours — evenings and weekends when needed — and keep every stakeholder aligned through one project lead.',
    ],
    [
      'Do you handle decommissioning the old space?',
      'Yes. We coordinate removal, disposition, recycling, cleaning, and handback requirements so the origin site is closed properly.',
    ],
    [
      'Can you manage multi-site or phased relocations?',
      'Yes. We create a consistent plan across locations while adapting to each building, team, and timeline — common for Utah businesses relocating across the Wasatch Front.',
    ],
    [
      'Do you handle office relocations outside Salt Lake City?',
      "Yes. We're based in Salt Lake City and manage relocations across the Wasatch Front — including Sandy, Lehi, Provo, Ogden, and Park City — and throughout Utah.",
    ],
  ],
  serviceAreaLine:
    'Proudly serving Salt Lake City, Sandy, Lehi, Provo, Ogden, Park City, and businesses across Utah.',
};

export default function RelocationPage() {
  return <ServiceTemplate config={config} />;
}
