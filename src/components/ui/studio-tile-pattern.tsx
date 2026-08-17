import React from "react";
import { cn } from "@/lib/utils";

export const StudioTilePattern: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute right-[-12%] top-[-8%] z-0 h-[700px] w-[800px] overflow-hidden select-none opacity-30 sm:opacity-50",
        className
      )}
    >
      <div className="grid grid-cols-4 gap-4 sm:gap-6 transform -rotate-12 scale-110 origin-top-right">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="h-32 sm:h-44 w-28 sm:w-40 rounded-[2rem] border border-neutral-300/50 bg-neutral-200/20"
          />
        ))}
      </div>
    </div>
  );
};
