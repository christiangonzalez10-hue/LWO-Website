import type { SEOMeta } from '@/hooks/useSEO';

export const serviceTypes = [
  'Office Installation',
  'Commercial Moving',
  'Storage',
  'Painting',
  'Design',
  'Relocation',
] as const;

export type ProjectImage = {
  src: string;
  /** Describe what this particular photo shows, not just the project name. */
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type WorkProject = {
  id: string;
  title: string;
  description: string;
  serviceType: (typeof serviceTypes)[number];
  images: ProjectImage[];
};

/**
 * Add verified completed projects here. Photos belong in public/images/projects/.
 * No stock or illustrative images are presented as completed Lakewoods work.
 * Client names require written permission before they can be published.
 *
 * Copy this shape into the array, replacing all example details and paths:
 * {
 *   id: 'your-project-slug',
 *   title: 'Your completed project title',
 *   description: 'One or two sentences about the work completed for this business.',
 *   serviceType: 'Office Installation',
 *   images: [
 *     {
 *       src: '/images/projects/your-project-01.jpg',
 *       alt: 'Describe the specific completed installation visible in this photo.',
 *       caption: 'Optional photo-specific caption.',
 *       width: 1600,
 *       height: 1067,
 *     },
 *     {
 *       src: '/images/projects/your-project-02.jpg',
 *       alt: 'Describe the second photo and what differs from the first.',
 *       caption: 'Optional second caption.',
 *     },
 *   ],
 * }
 */
export const projects: WorkProject[] = [
  {
    id: 'professional-sports-corporate-offices-build',
    title: 'Professional Sports Organization — Corporate Offices Build',
    description:
      "Lakewoods recently completed a full workplace build for a Utah professional sports organization's offices. We work alongside Utah's leading furniture suppliers, general contractors, and architects to deliver installations on schedule.",
    serviceType: 'Office Installation',
    images: [
      {
        src: '/images/projects/professional-sports-office-build.webp',
        alt: 'Rows of modular workstations and desks beside tall, glass office windows.',
        width: 1600,
        height: 1201,
      },
    ],
  },
  {
    id: 'public-sector-exclusive-installation-partner',
    title: 'Public-Sector Organization — Exclusive Installation Partner',
    description:
      'Lakewoods is the exclusive commercial installation partner for a major Utah public-sector organization. We work alongside Utah’s leading furniture suppliers, general contractors, and architects to deliver installations on schedule.',
    serviceType: 'Office Installation',
    images: [
      {
        src: '/images/projects/public-sector-office-installation.webp',
        alt: 'Rows of office cubicles beneath exposed wood beams and a vaulted ceiling.',
        width: 1200,
        height: 900,
      },
    ],
  },
];

const BASE = 'https://www.lwosolutions.com';
const BUSINESS_ID = `${BASE}/#business`;

export function createOurWorkSchema(items: readonly WorkProject[]): Record<string, unknown> {
  const ids = new Set<string>();
  for (const project of items) {
    if (!project.id.trim() || !project.title.trim() || !project.description.trim()) {
      throw new Error('Our Work projects need an id, title, and description.');
    }
    if (ids.has(project.id)) {
      throw new Error(`Our Work project id "${project.id}" must be unique.`);
    }
    ids.add(project.id);
    if (!serviceTypes.includes(project.serviceType)) {
      throw new Error(`Our Work project "${project.id}" needs a valid service tag.`);
    }
    for (const image of project.images) {
      if (!image.src.trim() || !image.alt.trim()) {
        throw new Error(`Every photo for "${project.id}" needs a path and descriptive alt text.`);
      }
    }
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE}/our-work/#webpage`,
    name: 'Our Work',
    description:
      'Completed commercial projects for offices, warehouses, and multi-site businesses across Salt Lake City and the Wasatch Front.',
    url: `${BASE}/our-work/`,
    about: { '@type': 'LocalBusiness', '@id': BUSINESS_ID },
    publisher: { '@type': 'LocalBusiness', '@id': BUSINESS_ID },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          '@id': `${BASE}/our-work/#${encodeURIComponent(project.id)}`,
          name: project.title,
          description: project.description,
          genre: project.serviceType,
          creator: { '@type': 'LocalBusiness', '@id': BUSINESS_ID },
          image: project.images.map((image) => ({
            '@type': 'ImageObject',
            contentUrl: new URL(image.src, `${BASE}/`).href,
            description: image.alt,
            caption: image.caption ?? project.title,
            ...(image.width ? { width: image.width } : {}),
            ...(image.height ? { height: image.height } : {}),
          })),
        },
      })),
    },
  };
}

export const ourWorkSEO: SEOMeta = {
  title: 'Our Work | Commercial Projects | Lakewoods Office Solutions',
  description:
    'Explore Lakewoods commercial project work for offices, warehouses, and multi-site businesses in Salt Lake City and across the Wasatch Front.',
  canonical: '/our-work/',
  ogImage: `${BASE}/images/og/lwo-hero.jpg`,
  jsonLd: createOurWorkSchema(projects),
};