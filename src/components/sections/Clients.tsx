import React from "react";

export const Clients: React.FC = () => {
  const clients = [
    { name: "Fagor Professional", highlighted: true },
    { name: "Guidinn", highlighted: false },
    { name: "Onnera Group", highlighted: false },
    { name: "Ternua", highlighted: false },
    { name: "Bultz", highlighted: false },
    { name: "Tekniker", highlighted: false },
    { name: "Dikar", highlighted: false },
    { name: "Angulas Aguinaga", highlighted: false },
    { name: "Orbea", highlighted: false },
    { name: "Adi Revolution", highlighted: false },
    { name: "Fagor Electrónica", highlighted: false },
    { name: "Danobat", highlighted: false },
    { name: "Eroski", highlighted: false },
    { name: "Agile TV", highlighted: false },
    { name: "Grupo GTM", highlighted: false },
    { name: "Copreci", highlighted: false },
    { name: "Inzu Group", highlighted: false },
    { name: "Erreka", highlighted: false },
    { name: "Lacer", highlighted: false },
    { name: "Addi", highlighted: false },
    { name: "Salto...", highlighted: false },
  ];

  return (
    <section
      id="clientes"
      className="w-full pt-6 pb-12 sm:pt-8 sm:pb-16 bg-[#FAF9F6]"
    >
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        {/* Section Label */}
        <div className="font-sans text-base sm:text-lg uppercase tracking-wider text-neutral-600 font-medium">
          NUESTROS CLIENTES & COLABORADORES
        </div>

        {/* Fluid Text Paragraph List matching screenshot */}
        <p className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.25] font-sans">
          {clients.map((client, index) => (
            <React.Fragment key={client.name}>
              <span
                className={`transition-colors duration-200 cursor-pointer ${
                  client.highlighted
                    ? "text-orange-500 font-normal hover:underline"
                    : "hover:text-orange-500"
                }`}
              >
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
