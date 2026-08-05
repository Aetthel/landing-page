import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Aetthel",
  description: "Estudio de arquitectura, espacios de marca y proyectos creativos.",
  url: "https://aetthel.com",
  ogImage: "https://aetthel.com/og.png",
  mainNavItems: [
    { label: "Aetthel Lab", href: "#aetthel-lab" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
  ],
  secondaryNavItems: [
    { label: "Brand Spaces", href: "#brand-spaces" },
    { label: "Be Next", href: "#be-next" },
    { label: "Shop", href: "#shop" },
    { label: "Contacto", href: "#contacto" },
  ],
  socials: [
    { platform: "Instagram", href: "https://instagram.com" },
    { platform: "LinkedIn", href: "https://linkedin.com" },
    { platform: "X", href: "https://x.com" },
  ],
};