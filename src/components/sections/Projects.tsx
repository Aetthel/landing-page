import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Projects: React.FC = () => {
  const projectList = [
    {
      id: "proj-1",
      title: "Proyecto 01 — Espacio Residencial",
      category: "Arquitectura / Interiorismo",
      year: "2025",
    },
    {
      id: "proj-2",
      title: "Proyecto 02 — Headquarters Marca",
      category: "Brand Spaces",
      year: "2025",
    },
    {
      id: "proj-3",
      title: "Proyecto 03 — Pabellón Temporal",
      category: "Instalación",
      year: "2024",
    },
    {
      id: "proj-4",
      title: "Proyecto 04 — Flagship Store",
      category: "Retail Space",
      year: "2024",
    },
  ];

  return (
    <section id="proyectos" className="w-full py-20 border-b border-neutral-300/70 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Structural Tag */}
        <div className="mb-6 flex items-center justify-between">
          <div className="inline-block border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-500 rounded">
            [ ESTRUCTURA: PROYECTOS ]
          </div>
          <span className="font-mono text-xs text-neutral-400">Total: {projectList.length} Items</span>
        </div>

        {/* Section Title */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-neutral-900 dark:text-neutral-100 font-normal">
              Selección de Proyectos
            </h2>
            <p className="text-sm text-neutral-500 mt-1 font-sans">
              Rejilla estructural de trabajos destacados y publicaciones.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="border border-neutral-300 dark:border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group cursor-pointer"
            >
              {/* Media Skeleton */}
              <div className="w-full aspect-video border border-dashed border-neutral-300 dark:border-neutral-700 rounded bg-neutral-100/50 dark:bg-neutral-900/40 flex items-center justify-center mb-6">
                <span className="font-mono text-xs text-neutral-400 uppercase">
                  [ MEDIA PLACEHOLDER: {project.id} ]
                </span>
              </div>

              {/* Info Row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 mb-1">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-lg font-serif text-neutral-900 dark:text-neutral-100 group-hover:underline">
                    {project.title}
                  </h3>
                </div>

                <div className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-900 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
