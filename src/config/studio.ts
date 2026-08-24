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

   IMÁGENES. `team[].photo` es una ruta pública cualquiera, no una convención de
   nombres: `lib/assets.ts` comprueba al construir si el archivo está y, si no,
   dibuja una lámina con el monograma. Por eso conviven hoy un retrato en
   `/images/home/` y otro pendiente en `/team/` sin que haya que tocar marcado
   —basta con apuntar la ruta a donde de verdad esté el JPG—.

   Falta el de Martí. En cuanto exista, se cambia su ruta igual que la de Alex y
   su lámina de reserva desaparece sola.
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
  /**
   * Los perfiles que cuelgan de cada persona en el reparto.
   *
   * DEJAR EN CADENA VACÍA LO QUE NO EXISTA, nunca inventarse una URL ni apuntar
   * a la cuenta del estudio: el enlace se rotula con el nombre de la persona y
   * llevar a otro sitio es mentir al que lo pulsa. `MemberCard` se salta los
   * vacíos, así que una persona sin Instagram simplemente no lo enseña y no
   * queda ningún enlace muerto.
   */
  links: {
    linkedin: string;
    instagram: string;
    portfolio: string;
  };
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
    role: "Desarrollo y Arquitectura",
    bio: "Construye la estructura técnica de cada proyecto. Se asegura de que tu plataforma sea rápida, estable y preparada para crecer sin problemas.",
    skills: [],
    photo: "/team/marti-castano.jpg",
    links: { linkedin: "", instagram: "", portfolio: "" },
  },
  {
    name: "Alex Cortell",
    initials: "AC",
    role: "Diseño y Producto",
    bio: "Diseña la experiencia visual e interactiva. Transforma las necesidades de tu negocio en una interfaz limpia, intuitiva y atractiva.",
    skills: [],
    photo: "/images/home/alex.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/alexcortell/",
      instagram: "https://www.instagram.com/alxdevstudio/",
      portfolio: "https://cv-sigma-flax.vercel.app/",
    },
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
