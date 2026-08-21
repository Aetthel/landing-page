/* ==========================================================================
   Aetthel Lab — el contenido de la página del estudio.

   Vive aquí y no dentro de los componentes por lo mismo que `services.ts`: el
   texto de cara al cliente se retoca a menudo y no debería obligar a abrir
   marcado para cambiarle una coma.

   IMÁGENES. Las rutas de `team[].photo` y `workspaceShots[].src` apuntan a
   archivos que todavía no existen. No hay que comentar nada ni borrar rutas:
   cada pieza comprueba al construir si el archivo está (`lib/assets.ts`) y, si
   no, dibuja una reserva propia. Suelta los JPG con esos nombres exactos en
   `public/team/` y `public/workspace/` y aparecen solos.
   ========================================================================== */

export interface TeamMember {
  name: string;
  /** Iniciales del monograma, en mayúsculas. */
  initials: string;
  /** Ruta opcional a la foto de perfil en /public (ej: '/team/marti.jpg'). */
  avatar?: string;
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

/** En qué no cedemos. Cada uno enunciado desde lo que gana el cliente. */
export interface Value {
  title: string;
  desc: string;
}

/**
 * Una foto del taller para la tira arrastrable de la cabecera.
 * `ar` es la proporción ancho/alto: es lo que da el ritmo irregular de la tira
 * —si todas midieran igual sería un carrusel—, así que conviene mantener la
 * mezcla de vertical, cuadrado y panorámico al sustituir las fotos.
 */
export interface WorkspaceShot {
  src: string;
  alt: string;
  /** Pie visible solo mientras no haya foto; luego queda como texto alternativo. */
  caption: string;
  ar: number;
}

export const team: TeamMember[] = [
  {
    name: "Martí Castaño",
    initials: "MC",
    role: "Desarrollo y Arquitectura",
    bio: "Construye la estructura técnica de cada proyecto. Se asegura de que tu plataforma sea rápida, estable y preparada para crecer sin problemas.",
    skills: [],
    photo: "/team/marti-castano.jpg",
    github: "",
    linkedin: "",
  },
  {
    name: "Alex Cortell",
    initials: "AC",
    role: "Diseño y Producto",
    bio: "Diseña la experiencia visual e interactiva. Transforma las necesidades de tu negocio en una interfaz limpia, intuitiva y atractiva.",
    skills: [],
    photo: "/team/alex-cortell.jpg",
    github: "",
    linkedin: "",
  },
];

/* --------------------------------------------------------------------------
   El taller.

   PENDIENTE DE FOTOS REALES: los pies de foto de abajo son de relleno y
   describen un espacio que nadie ha fotografiado todavía. Al soltar las
   imágenes hay que reescribirlos para que digan lo que de verdad se ve, y el
   `alt` con ellos.
   -------------------------------------------------------------------------- */
export const workspaceShots: WorkspaceShot[] = [
  {
    src: "/workspace/01.jpg",
    alt: "El escritorio del estudio recogido antes de empezar la jornada",
    caption: "El escritorio, antes de empezar",
    ar: 1.02,
  },
  {
    src: "/workspace/02.jpg",
    alt: "Pizarra con el alcance de la semana escrito a mano",
    caption: "La pizarra donde cabe el alcance entero",
    ar: 1,
  },
  {
    src: "/workspace/03.jpg",
    alt: "Dos puestos de trabajo enfrentados con las pantallas encendidas",
    caption: "Dos pantallas, un repositorio",
    ar: 1.93,
  },
  {
    src: "/workspace/04.jpg",
    alt: "Cuaderno y café sobre la mesa, sin papeles alrededor",
    caption: "Sin papeles sueltos",
    ar: 0.78,
  },
  {
    src: "/workspace/05.jpg",
    alt: "El rincón del estudio desde donde se hacen las videollamadas",
    caption: "Donde se hacen las llamadas",
    ar: 1.4,
  },
];

/** La lámina ancha que corta la página después del equipo. */
export const workspaceWide: WorkspaceShot = {
  src: "/workspace/wide.jpg",
  alt: "Vista general del estudio con los dos puestos de trabajo",
  caption: "El estudio al completo",
  ar: 2.4,
};

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

export const values: Value[] = [
  {
    title: "Todo a tu nombre",
    desc: "Código, dominio, servidor y base de datos se abren desde el primer día en cuentas tuyas. Nunca somos el intermediario que guarda las llaves.",
  },
  {
    title: "Sin ataduras",
    desc: "Ni plataformas cerradas ni licencias que solo nosotros podamos renovar. Si mañana sigues con otro equipo, se lo llevan todo y funciona.",
  },
  {
    title: "Presupuesto claro",
    desc: "Una cifra cerrada, con lo que entra y lo que no. Sin costes que aparecen a mitad de camino ni extras que nadie te avisó de que lo eran.",
  },
  {
    title: "Utilidad antes que alarde",
    desc: "No montamos tecnología para lucirla. Si un problema se resuelve con algo más simple, lo decimos, aunque nos dé menos trabajo.",
  },
];
