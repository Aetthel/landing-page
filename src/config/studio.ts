/* ==========================================================================
   Aetthel Lab — el contenido de la página del estudio.

   Vive aquí y no dentro de los componentes por lo mismo que `services.ts`: el
   texto de cara al cliente se retoca a menudo y no debería obligar a abrir
   marcado para cambiarle una coma.
   ========================================================================== */

export interface TeamMember {
  name: string;
  /** Iniciales del monograma, en mayúsculas. */
  initials: string;
  role: string;
  bio: string;
  skills: string[];
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

export const team: TeamMember[] = [
  {
    name: "Martí Castaño",
    initials: "MC",
    role: "Ingeniería y arquitectura",
    bio: "Se ocupa de lo que sostiene el proyecto por debajo: base de datos, servidor y rendimiento. Diseña sistemas que aguantan crecer sin tener que rehacerlos.",
    skills: ["PostgreSQL", "Docker", "Node.js", "Arquitectura"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Alex Cortell",
    initials: "AC",
    role: "Diseño y producto",
    bio: "Se ocupa de lo que ves y de lo que tocas: interfaz, interacción y la traducción de lo que necesita tu negocio a algo que se usa sin manual.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "UX/UI"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

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
