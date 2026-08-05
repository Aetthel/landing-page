import React from "react";

export const PromotionalVideo: React.FC = () => {
  return (
    <section id="video" className="w-full py-20 border-b border-neutral-300/70 dark:border-neutral-800">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Structural Tag */}
        <div className="mb-6 inline-block border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-500 rounded">
          [ ESTRUCTURA: PROMOTIONAL VIDEO ]
        </div>

        {/* Video Placeholder Container */}
        <div className="w-full max-w-3xl mx-auto aspect-video border border-dashed border-neutral-400 dark:border-neutral-700 rounded-lg flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900/30">
          <span className="font-mono text-sm uppercase tracking-wider text-neutral-400">
            Video aquí
          </span>
        </div>
      </div>
    </section>
  );
};
