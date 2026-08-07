import React from "react";

export const Clients: React.FC = () => {
  const clients = [
    { name: "Fagor Professional" },
    { name: "Guidinn" },
    { name: "Onnera Group" },
    { name: "Ternua" },
    { name: "Bultz" },
    { name: "Tekniker" },
    { name: "Dikar" },
    { name: "Angulas Aguinaga" },
    { name: "Orbea" },
    { name: "Adi Revolution" },
    { name: "Fagor Electrónica" },
    { name: "Danobat" },
    { name: "Eroski" },
    { name: "Agile TV" },
    { name: "Grupo GTM" },
    { name: "Copreci" },
    { name: "Inzu Group" },
    { name: "Erreka" },
    { name: "Lacer" },
    { name: "Addi" },
    { name: "Salto..." },
  ];

  return (
    <section
      id="clientes"
      className="w-full py-16 sm:py-24 lg:py-28 bg-[#FAF9F6]"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-8 sm:space-y-12">
        {/* Section Label */}
        <div className="font-sans text-base sm:text-lg uppercase tracking-wider text-neutral-600 font-medium">
          NUESTROS CLIENTES & COLABORADORES
        </div>

        {/* Fluid Text Paragraph List matching screenshot */}
        <p className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.25] font-sans">
          {clients.map((client, index) => (
            <React.Fragment key={client.name}>
              <span className="transition-colors duration-200 cursor-pointer hover:text-brand">
                {client.name}
              </span>
              {index < clients.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};
