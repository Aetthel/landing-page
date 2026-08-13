export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

/* Una línea de la ficha técnica de un servicio: lo que se entrega y qué es
   exactamente. El detalle no es adorno —es lo que separa "diseño propio" de
   una promesa vacía—, así que va en la estructura y no como texto suelto. */
export interface ServiceDeliverable {
  title: string;
  detail: string;
}

export interface Service {
  /** Ancla del documento: el sumario enlaza aquí. */
  id: string;
  /** Ordinal del pliego. Se imprime, y el sumario lo usa para referirse a la ficha. */
  index: string;
  name: string;
  headline: string;
  summary: string;
  audience: string;
  timeline: string;
  delivery: string;
  deliverables: ServiceDeliverable[];
  /** Lo que queda fuera. Se imprime igual de grande que lo que entra. */
  excludes: string[];
  stack: string[];
  /** Qué lámina ilustrativa acompaña a la ficha. */
  diagram: "landing" | "app" | "automation";
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mainNavItems: NavItem[];
  secondaryNavItems?: NavItem[];
  socials: SocialLink[];
}