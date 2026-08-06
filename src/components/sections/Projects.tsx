import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Projects: React.FC = () => {
  const projectList = [
    {
      id: "proj-1",
      title: "Guídiñn — Espacio Residencial",
      category: "Arquitectura & Interiorismo",
      year: "2025",
      summary: "Diseño espacial residencial de líneas puras y máxima eficiencia lumínica.",
    },
    {
      id: "proj-2",
      title: "Beldarrain — Headquarters Marca",
      category: "Brand Spaces & Oficinas",
      year: "2025",
      summary: "Sede corporativa integrada con tecnología y arquitectura biofílica.",
    },
    {
      id: "proj-3",
      title: "Copreci — Plataforma Analytics",
      category: "SaaS & Web App",
      year: "2025",
      summary: "Aplicación web en tiempo real para análisis operativo y rendimiento.",
    },
    {
      id: "proj-4",
      title: "Orbea — Flagship Digital Store",
      category: "Retail Space & E-Commerce",
      year: "2024",
      summary: "Espacio comercial insignia con integración omnicanal y experiencia digital.",
    },
  ];

  return (
    <section id="proyectos" className="w-full py-28 sm:py-36 border-b border-neutral-300/80 bg-canvas">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Head */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
              Proyectos Destacados
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950">
              Selección de Trabajos
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
            Total: {projectList.length} Casos
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-3xl bg-white border border-neutral-300/80 flex flex-col justify-between hover:border-neutral-950 transition-all duration-300 group cursor-pointer space-y-8"
            >
              {/* Top Row: Category & Year */}
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-neutral-500">
                <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>

              {/* Title & Summary */}
              <div className="space-y-2">
                <h3 className="text-2xl font-normal tracking-tight text-neutral-950 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-neutral-800">
                <span>Ver Caso de Estudio</span>
                <div className="p-2 rounded-full border border-neutral-300 group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950 transition-all">
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

