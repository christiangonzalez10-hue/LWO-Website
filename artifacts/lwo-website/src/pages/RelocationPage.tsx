import { ClipboardCheck, DraftingCompass, Route, CheckCircle2 } from 'lucide-react';
import ServiceTemplate, { type ServiceConfig } from '@/components/ServiceTemplate';

const config: ServiceConfig = {
  label: 'END-TO-END OFFICE RELOCATION',
  title: 'Commercial Relocation Services',
  intro: 'Comprehensive office relocation management — from the first site walk to the final workstation, we handle every detail so your team hits the ground running in their new space.',
  image: '/images/lwo-relocation.png',
  imageAlt: 'Professional team coordinating a corporate office relocation',
  benefits: [
    'Full relocation project management',
    'Space decommissioning and setup',
    'Vendor and contractor coordination',
    'Technology and infrastructure transition',
    'Employee communication planning support',
  ],
  process: [
    ['01', 'SURVEY', 'We walk both sites, understand constraints, and document every requirement.', DraftingCompass],
    ['02', 'PLAN', 'A detailed move book aligns vendors, people, technology, and timing.', ClipboardCheck],
    ['03', 'EXECUTE', 'Our team manages the transition with visible milestones and one accountable lead.', Route],
    ['04', 'SETTLE IN', 'We complete setup, resolve the details, and help your team find its rhythm.', CheckCircle2],
  ],
  faqs: [
    ['What does a full relocation include?', 'It can include planning, decommissioning, packing, moving, storage, furniture setup, technology coordination, and closeout.'],
    ['How do you minimize business disruption?', 'We phase the work, schedule around operating hours, and keep every stakeholder aligned through one project lead.'],
    ['Do you handle decommissioning the old space?', 'Yes. We can coordinate removal, disposition, recycling, cleaning, and handback requirements.'],
    ['Can you manage multi-site relocations?', 'Yes. We create a consistent plan across locations while adapting to each building and team.'],
  ],
};

export default function RelocationPage() {
  return <ServiceTemplate config={config} />;
}
