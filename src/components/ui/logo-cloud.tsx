"use client";

import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 md:grid-cols-4 border-x border-line",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-line/60" />

      <LogoCard
        className="relative border-r border-b border-line bg-surface/50"
        logo={{
          src: "https://svgl.app/library/n8n-wordmark-light.svg",
          alt: "n8n Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-ink-muted/40 stroke-[1]"
        />
      </LogoCard>

      <LogoCard
        className="border-b border-r border-line bg-canvas"
        logo={{
          src: "https://svgl.app/library/mongodb-wordmark-light.svg",
          alt: "MongoDB Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-line bg-surface/50"
        logo={{
          src: "https://svgl.app/library/github_wordmark_light.svg",
          alt: "GitHub Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-ink-muted/40 stroke-[1]"
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-ink-muted/40 stroke-[1]"
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-line bg-surface/50 md:bg-canvas"
        logo={{
          src: "https://svgl.app/library/openai_wordmark_light.svg",
          alt: "OpenAI Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b md:border-b-0 border-line bg-surface/50 md:bg-canvas"
        logo={{
          src: "https://svgl.app/library/tailwindcss-wordmark.svg",
          alt: "Tailwind CSS Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-ink-muted/40 stroke-[1]"
        />
      </LogoCard>

      <LogoCard
        className="border-b md:border-b-0 border-r border-line bg-canvas md:bg-surface/50"
        logo={{
          src: "https://svgl.app/library/cloudflare.svg",
          alt: "Cloudflare Logo",
        }}
      />

      <LogoCard
        className="border-r border-line bg-canvas"
        logo={{
          src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
          alt: "Claude AI Logo",
        }}
      />

      <LogoCard
        className="bg-surface/50"
        logo={{
          src: "https://svgl.app/library/vercel_wordmark.svg",
          alt: "Vercel Logo",
        }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-line/60" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-canvas px-6 py-12 md:py-16 lg:py-20 transition-colors duration-300 hover:bg-surface/80",
        className
      )}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={logo.alt}
        className="pointer-events-none h-7 select-none md:h-9 lg:h-10 opacity-80 transition-opacity hover:opacity-100 object-contain max-w-[160px] md:max-w-[200px]"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
