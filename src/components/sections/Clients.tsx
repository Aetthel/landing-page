import React from "react";

export const Clients: React.FC = () => {
  const clientList = [
    "Addi",
    "Agile TV",
    "Angulas Aguinaga",
    "Bultz",
    "Copreci",
    "Danobat",
    "Dikar",
    "Eroski",
    "Erreka",
    "Fagor Electrónica",
    "Guidinn",
    "Orbea",
    "Salto Systems",
    "Tekniker",
    "Ternua",
  ];

  return (
    <section id="clientes" className="w-full py-20 sm:py-28 border-b border-neutral-300/80 bg-canvas">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        
        {/* Section Label */}
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
          Nuestros Clientes & Colaboradores
        </div>

        {/* Clients Minimalist Grid / Marquee Tag List */}
        <div className="flex flex-wrap items-center gap-3">
          {clientList.map((client) => (
            <span
              key={client}
              className="px-5 py-2.5 rounded-full bg-white border border-neutral-300/80 text-sm font-sans font-medium text-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all cursor-default"
            >
              {client}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
