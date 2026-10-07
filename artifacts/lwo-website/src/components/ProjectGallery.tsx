import { Camera } from 'lucide-react';
import type { WorkProject } from '@/data/our-work';

export function ProjectGallery({ projects }: { projects: readonly WorkProject[] }) {
  return (
    <ul className="grid gap-px border border-[#d8d0c3] bg-[#d8d0c3] md:grid-cols-2" data-testid="gallery-projects">
      {projects.map((project) => {
        const [lead, ...rest] = project.images;
        return (
          <li
            key={project.id}
            id={project.id}
            className="flex flex-col bg-white"
            data-testid={`card-project-${project.id}`}
          >
            {lead ? (
              <figure>
                <div className="aspect-[4/3] overflow-hidden bg-[#f3efe8]">
                  <img
                    src={lead.src}
                    alt={lead.alt}
                    loading="lazy"
                    width={lead.width ?? 1200}
                    height={lead.height ?? 800}
                    className="h-full w-full object-cover"
                  />
                </div>
                {lead.caption && (
                  <figcaption className="border-b border-[#d8d0c3] px-6 py-3 text-xs leading-6 text-[#4E4B66]">
                    {lead.caption}
                  </figcaption>
                )}
              </figure>
            ) : (
              <div
                role="img"
                aria-label={`Project photo placeholder for ${project.title}`}
                data-testid={`placeholder-project-${project.id}`}
                className="flex aspect-[4/3] flex-col items-center justify-center gap-4 border-b border-[#d8d0c3] bg-[#f3efe8] px-6 text-center text-[#6f695f]"
              >
                <Camera size={30} strokeWidth={1.4} aria-hidden="true" className="text-[#C9A96E]" />
                <span className="text-xs font-bold uppercase tracking-[.2em]">
                  Approved project photo placeholder
                </span>
              </div>
            )}
            {rest.length > 0 && (
              <ul className="grid grid-cols-2 gap-px bg-[#d8d0c3] sm:grid-cols-3">
                {rest.map((img, i) => (
                  <li key={`${img.src}-${i}`} className="bg-white">
                    <figure>
                      <div className="aspect-[4/3] overflow-hidden bg-[#f3efe8]">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          width={img.width ?? 800}
                          height={img.height ?? 600}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="px-3 py-2 text-[11px] leading-5 text-[#4E4B66]">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  </li>
                ))}
              </ul>
            )}
            <div className="p-8">
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#1F8080]">
                {project.serviceType}
              </p>
              <h2 className="mt-3 text-lg font-bold uppercase leading-[1.4] tracking-[.12em] text-[#1A1A1A]">
                {project.title}
              </h2>
              <p className="mt-4 text-sm leading-8">{project.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
