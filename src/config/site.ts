import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Aetthel",
  description:
    "Estudio digital especializado en landing pages, aplicaciones web a medida y automatización de procesos.",
  url: "https://aetthel.com",
  ogImage: "https://aetthel.com/og.png",
  mainNavItems: [
    { label: "Aetthel Lab", href: "/estudio" },
    { label: "Servicios", href: "/servicios" },
    { label: "Tienda", href: "/tienda" },
  ],
  secondaryNavItems: [
    { label: "Contacto", href: "/contacto" },
  ],
  socials: [
    { platform: "Instagram", href: "https://www.instagram.com/aetthellab/" },
    // TODO: sustituir por la URL exacta de la página de empresa cuando esté.
    { platform: "LinkedIn", href: "https://www.linkedin.com/" },
    { platform: "X", href: "https://x.com" },
  ],
};