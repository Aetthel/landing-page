/* ==========================================================================
   Aetthel Lab — el contenido de la página del estudio.

   Vive aquí y no dentro de los componentes por lo mismo que `services.ts`: el
   texto de cara al cliente se retoca a menudo y no debería obligar a abrir
   marcado para cambiarle una coma.

   La página son cuatro secciones y ni una más: el estudio —que va todo en
   marcado, sin datos—, el equipo (`team`), el proceso —que se sirve de
   `processSteps` en `services.ts`— y el trato (`pillars`). Añadir aquí datos
   que no alimenten a una de esas cuatro es la forma de que vuelva a crecer
   sola.

   IMÁGENES. Las rutas de `team[].photo` apuntan a archivos que todavía no
   existen. No hay que comentar nada ni borrar rutas: la pieza comprueba al
   construir si el archivo está (`lib/assets.ts`) y, si no, dibuja una lámina
   de reserva. Suelta los JPG con esos nombres exactos en `public/team/` y
   aparecen solos.
   ========================================================================== */

export interface TeamMember {
  name: string;
  /** Iniciales del monograma, en mayúsculas. */
  initials: string;
  role: string;
  bio: string;
  skills: string[];
  /**
   * Retrato vertical, proporción 3:4 (p. ej. 900×1200). Si el archivo no
   * existe, el hueco lo ocupa un panel tipográfico con el monograma.
   *
   * OJO al añadir gente: en escritorio el nombre se compone a una sola línea a
   * `clamp(2rem, 6vw, 5.5rem)`. Por encima de ~15 caracteres hay que bajar ese
   * máximo en `.roster-name` (globals.css) o el nombre se saldrá de la caja.
   */
  photo: string;
  github: string;
  linkedin: string;
}

/** Cómo es trabajar con nosotros. Tres, no diez: son promesas, no una lista. */
export interface Pillar {
  num: string;
  title: string;
  desc: string;
}

export const team: TeamMember[] = [
  {
    name: "Martí Castaño",
    initials: "MC",
    role: "Ingeniería y arquitectura",
    bio: "Se ocupa de lo que sostiene el proyecto por debajo: base de datos, servidor y rendimiento. Diseña sistemas que aguantan crecer sin tener que rehacerlos.",
    skills: ["PostgreSQL", "Docker", "Node.js", "Arquitectura"],
    photo: "/team/marti-castano.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Alex Cortell",
    initials: "AC",
    role: "Diseño y producto",
    bio: "Se ocupa de lo que ves y de lo que tocas: interfaz, interacción y la traducción de lo que necesita tu negocio a algo que se usa sin manual.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "UX/UI"],
    photo: "/team/alex-cortell.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

/**
 * Los valores que desfilan por la rueda de `StudioCare`.
 *
 * OJO al número: el CSS de `.wordwheel` reparte el ciclo entre las palabras a
 * partir de `--wordwheel-count`, que la pieza calcula desde este array. Añadir o
 * quitar palabras no obliga a tocar nada, pero sí alarga o acorta la vuelta
 * entera —cada palabra manda lo mismo—. Por debajo de cuatro la rueda se lee
 * como un parpadeo; por encima de ocho, nadie llega al final.
 *
 * De una palabra, y sustantivos: la rueda las compone a tamaño de titular y
 * cualquier cosa más larga que «Profesionalidad» se sale de la caja.
 */
export const careValues: string[] = [
  "Compromiso",
  "Profesionalidad",
  "Cercanía",
  "Transparencia",
  "Constancia",
  "Confianza",
];

/**
 * Las tres promesas del trato.
 *
 * SIN USAR AHORA MISMO: la columna que las pintaba en `StudioCare` la ocupa la
 * rueda de valores. Se quedan porque son la versión con argumento de lo que la
 * rueda solo insinúa —una palabra no explica qué es «hablar con quien
 * programa»— y volverían debajo de la rueda sin tocar nada más.
 */
export const pillars: Pillar[] = [
  {
    num: "01",
    title: "Hablas con quien programa",
    desc: "Sin comerciales ni gestores de cuenta que traduzcan lo que has pedido. La persona que escucha tu problema es la que escribe el código.",
  },
  {
    num: "02",
    title: "Te enteras de todo",
    desc: "Cuentas cada semana, en tu idioma y sin jerga. Sabes por dónde va el proyecto sin tener que preguntar ni esperar a la entrega.",
  },
  {
    num: "03",
    title: "Lo acordado no se mueve",
    desc: "El alcance y el precio se cierran por escrito antes de empezar. Si algo crece por el camino, se presupuesta aparte y lo decides tú.",
  },
];
