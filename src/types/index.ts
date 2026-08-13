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

/* Un nivel dentro de un servicio: paquete de landing, complejidad de app o
   dificultad de automatización. No lleva precio —ninguno está cerrado— y por
   eso el nivel se reconoce por su alcance y por a quién le encaja, que es lo
   que de verdad ayuda a alguien a situarse antes de escribir. */
export interface ServiceTier {
  /** Rótulo del nivel: Básico, Estándar, Premium… */
  name: string;
  /** Para quién encaja este nivel, en una línea. */
  fit: string;
  /** Qué lo distingue de los anteriores. */
  scope: string[];
}

/* Bloque de contratación complementaria: el soporte mensual de las landings o
   la doble vía —pago único o mensualidad— de las apps. */
export interface ServiceSupport {
  title: string;
  copy: string;
  items: string[];
}

export interface Service {
  /** Ancla del documento: el sumario enlaza aquí. */
  id: string;
  /** Ordinal del pliego. Se imprime, y el sumario lo usa para referirse a la ficha. */
  index: string;
  name: string;
  headline: string;
  summary: string;
  /** Para quién es. Filtra antes de que nadie pierda una reunión. */
  audience: string;
  /** Cómo se contrata. Sin cifras: el modelo sí está cerrado, el precio no. */
  billing: string;
  /** Rótulo del bloque de niveles: cada servicio los ordena por otra cosa. */
  tiersLabel: string;
  tiersIntro: string;
  tiers: ServiceTier[];
  /** Lo que va en todos los niveles, sin tener que pedirlo. */
  includes: ServiceDeliverable[];
  support?: ServiceSupport;
  /** Lo que queda fuera. Se imprime igual de grande que lo que entra. */
  excludes: string[];
  stack: string[];
  /** Texto del botón de la ficha. */
  cta: string;
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