"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

export const PromotionalVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="w-full pt-6 pb-4 sm:pt-8 sm:pb-6 bg-[#FAF9F6]">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
        
        {/* Reel Frame Box */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-300/80 bg-neutral-900 flex flex-col justify-between p-6 text-white group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
          
          {/* Top Tag & Year Row */}
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-neutral-300 z-10">
            <span className="px-3 py-1 rounded-full bg-neutral-800/80 backdrop-blur-sm border border-neutral-700">
              AETTHEL® — Showreel
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800/80 backdrop-blur-sm border border-neutral-700">
              ©2026
            </span>
          </div>

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 text-neutral-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </div>

          {/* Bottom Title inside Video */}
          <div className="z-10 font-mono text-xs uppercase tracking-widest text-neutral-400">
            [ REEL VIDEO DEMOSTRATIVO ]
          </div>

        </div>

        {/* Container Aligned Section Divider Line */}
        <div className="border-b border-neutral-300/80 pt-2" />

      </div>
    </section>
  );
};

