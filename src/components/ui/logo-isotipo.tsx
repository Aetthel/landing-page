import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IsotipoIconProps {
  className?: string;
  variant?: "brand" | "claro" | "oscuro";
}

/**
 * IsotipoIcon — Isotipo oficial de Aetthel renderizado directamente desde /public/logos.
 */
export const IsotipoIcon: React.FC<IsotipoIconProps> = ({
  className,
  variant = "claro",
}) => (
  <Image
    src={`/logos/aetthel-isotipo-${variant}.svg`}
    alt="Aetthel"
    width={40}
    height={40}
    priority
    className={cn("h-9 w-auto shrink-0", className)}
  />
);
