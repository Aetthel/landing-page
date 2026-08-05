import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "BeNorth.Studio",
  description: "Estudio de arquitectura, espacios de marca y proyectos creativos.",
  url: "https://benorth.studio",
  ogImage: "https://benorth.studio/og.png",
  mainNavItems: [
    { label: "Servicios", href: "#servicios" },
    { label: "Estudio", href: "#estudio" },
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
