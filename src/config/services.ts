import { Service } from "@/types";

/* --------------------------------------------------------------------------
   Los tres servicios, desplegados.

   La home los presenta en una frase cada uno; aquí van con plazo, entregables
   y —sobre todo— lo que NO entra. Esa última lista es deliberada: es la parte
   que un cliente sin equipo técnico no sabe preguntar y la que evita la
   discusión del mes tres.

   Sin precios: las tarifas todavía no están cerradas, y una cifra provisional
   publicada es la clase de dato que luego cuesta desdecir. El presupuesto sale
   de la primera reunión.
   -------------------------------------------------------------------------- */
export const services: Service[] = [
  {
    id: "landing-pages",
    index: "01",
    name: "Landing pages",
    headline:
      "Capturamos la esencia de tu negocio y lo que quieres transmitir.",
    summary:
      "El sitio al que mandas el tráfico que ya estás pagando: anuncios, redes, la tarjeta que repartes en una feria. Una página escrita y diseñada para que quien entra entienda tu propuesta en diez segundos y sepa qué hacer con ella.",
    audience:
      "Negocios que ya tienen algo que vender y no tienen dónde mandar a la gente. También si tu web actual recibe visitas y no las convierte en nada.",
    timeline: "2 a 4 semanas",
    delivery: "Publicada en tu dominio",
    deliverables: [
      {
        title: "Diseño propio",
        detail:
          "Nada de plantillas. Se dibuja para tu marca y se prueba en móvil desde el primer día.",
      },
      {
        title: "Los textos, escritos",
        detail:
          "Partimos de una entrevista contigo y redactamos nosotros. Tú revisas, no rellenas.",
      },
      {
        title: "Formulario que llega",
        detail:
          "Conectado a tu correo, con aviso inmediato y copia de cada mensaje recibido.",
      },
      {
        title: "Medición desde el minuto uno",
        detail:
          "Analítica y eventos configurados, para saber qué pasa de verdad cuando alguien entra.",
      },
      {
        title: "SEO técnico de base",
        detail:
          "Metadatos, datos estructurados, sitemap y velocidad. Lo que hace falta para que te encuentren.",
      },
      {
        title: "Publicada y en marcha",
        detail:
          "Tu dominio, certificado, copias de seguridad y todos los accesos a tu nombre.",
      },
    ],
    excludes: [
      "Gestión de campañas ni presupuesto de publicidad.",
      "Producción de fotografía y vídeo.",
      "Tienda con carrito y pasarela de pago: eso es otro proyecto.",
      "Redacción continuada de blog o redes sociales.",
    ],
    stack: [
      "Next.js",
      "Tailwind",
      "Vercel o VPS",
      "Analítica",
      "Correo transaccional",
    ],
    diagram: "landing",
  },
  {
    id: "apps-a-medida",
    index: "02",
    name: "Apps a medida",
    headline: "El programa que se adapta a tu forma de trabajar, no al revés.",
    summary:
      "Cuando la operativa vive en hojas de cálculo, grupos de WhatsApp y correos reenviados, el problema deja de ser el orden y pasa a ser el tiempo. Construimos la herramienta interna que tu equipo necesita, con tu vocabulario y tus reglas.",
    audience:
      "Equipos con un proceso propio que ningún programa de catálogo respeta del todo. Suele llegarnos gente que ya pagó por uno que le obligaba a cambiar cómo trabaja.",
    timeline: "6 a 12 semanas la primera versión",
    delivery: "Aplicación web con acceso por usuario",
    deliverables: [
      {
        title: "El flujo, mapeado antes de programar",
        detail:
          "Dibujamos cómo trabajáis hoy de verdad. Ese mapa es el primer entregable, y es tuyo aunque el proyecto se pare ahí.",
      },
      {
        title: "Usuarios y permisos",
        detail:
          "Cada persona ve lo suyo. Funciona en el ordenador y se instala en el móvil como una app más.",
      },
      {
        title: "Panel de administración",
        detail:
          "Para que gestionéis datos, altas y ajustes del día a día sin tener que llamarnos.",
      },
      {
        title: "Tus datos, tuyos",
        detail:
          "Base de datos a tu nombre, con copias automáticas y exportación completa cuando la pidas.",
      },
      {
        title: "Conectada a lo que ya usas",
        detail:
          "Facturación, correo, calendario, pagos o almacén: lo que ya funciona se queda donde está.",
      },
      {
        title: "Formación y manual",
        detail:
          "Una sesión con el equipo y un manual corto. El código queda en un repositorio tuyo.",
      },
    ],
    excludes: [
      "Apps nativas publicadas en App Store o Google Play: trabajamos web instalable.",
      "Migrar datos sin revisarlos antes: si vienen sucios, primero se limpian.",
      "Soporte 24/7 ni guardias nocturnas.",
      "Licencias de servicios de terceros, que van siempre a tu nombre.",
    ],
    stack: [
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Autenticación y roles",
      "Despliegue en tu servidor",
    ],
    diagram: "app",
  },
  {
    id: "automatizaciones",
    index: "03",
    name: "Automatizaciones",
    headline: "Que el trabajo repetitivo deje de ser trabajo.",
    summary:
      "Si alguien de tu equipo dedica horas cada semana a mover datos de un sitio a otro a mano, eso no es trabajo: es una factura invisible. La medimos, montamos el proceso y lo dejamos funcionando solo.",
    audience:
      "Cualquier negocio con algo que se repite: presupuestos, altas de cliente, pedidos, informes, avisos. Es la puerta de entrada más barata para ver cómo trabajamos.",
    timeline: "1 a 3 semanas por proceso",
    delivery: "Flujo funcionando y documentado",
    deliverables: [
      {
        title: "Auditoría del proceso",
        detail:
          "Cuántas horas se van, dónde se rompe y cuánto cuesta al mes. Con números antes de tocar nada.",
      },
      {
        title: "El flujo montado",
        detail:
          "Conectado entre tus herramientas y funcionando en producción, no en una demostración.",
      },
      {
        title: "Avisos cuando algo falla",
        detail:
          "Un proceso automático que se cae en silencio es peor que no tenerlo. Este avisa.",
      },
      {
        title: "Informes automáticos",
        detail:
          "El resumen que hoy alguien monta a mano cada lunes, puntual en tu correo.",
      },
      {
        title: "Documentado",
        detail:
          "Qué hace, cada cuánto, cómo se para y cómo se vuelve a arrancar.",
      },
    ],
    excludes: [
      "Licencias de las herramientas de terceros que use el flujo.",
      "Procesos que dependan de programas sin forma de acceder a sus datos.",
      "Automatizar un proceso que está mal: primero se arregla, después se automatiza.",
    ],
    stack: [
      "n8n y Make",
      "APIs y webhooks",
      "Tareas programadas",
      "Node y Python",
      "Avisos por correo",
    ],
    diagram: "automation",
  },
];

/* --------------------------------------------------------------------------
   El proyecto entero, paso a paso.

   La página de contacto cuenta los tres primeros movimientos —hasta la primera
   reunión—. Aquí va el recorrido completo, y cada paso dice también qué se
   espera del cliente: es la pregunta que nadie hace en voz alta y la que
   decide si alguien se atreve a empezar.
   -------------------------------------------------------------------------- */
export const processSteps = [
  {
    step: "00",
    title: "Nos escribes",
    when: "El mismo día",
    us: "Leemos tu mensaje y respondemos en menos de 24 horas con las dudas que nos hayan surgido.",
    you: "Un párrafo contando qué quieres.",
  },
  {
    step: "01",
    title: "Reunión de encaje",
    when: "60 minutos",
    us: "Escuchamos, preguntamos y te decimos con franqueza si el proyecto es para nosotros.",
    you: "Una hora y las preguntas incómodas.",
  },
  {
    step: "02",
    title: "Propuesta cerrada",
    when: "2 a 4 días",
    us: "Un documento con alcance, plazos, precio cerrado y, sobre todo, qué no entra.",
    you: "Leerla y decir sí o no.",
  },
  {
    step: "03",
    title: "Diseño y validación",
    when: "1 a 3 semanas",
    us: "Ves el proyecto dibujado antes de que exista una línea de código. Cambiarlo aquí sale gratis.",
    you: "Revisar y señalar lo que no encaja.",
  },
  {
    step: "04",
    title: "Construcción por entregas",
    when: "2 a 10 semanas",
    us: "Cada semana hay algo nuevo funcionando en un enlace privado. Nada de silencios de dos meses.",
    you: "Diez minutos por semana para mirarlo.",
  },
  {
    step: "05",
    title: "Entrega y acompañamiento",
    when: "Día 1 de tu proyecto",
    us: "Puesta en marcha, formación, documentación y 30 días de garantía sobre errores.",
    you: "Usarlo.",
  },
] as const;

/* Lo que pasa cuando el proyecto ya está entregado. Es la objeción real de
   quien nunca ha contratado desarrollo: el miedo a quedarse atado. */
export const afterDelivery = [
  {
    title: "El código es tuyo",
    copy: "Se entrega en un repositorio a tu nombre. Si mañana quieres seguir con otro equipo, te lo llevas entero.",
  },
  {
    title: "30 días de garantía",
    copy: "Cualquier error de lo entregado se arregla sin coste durante el primer mes.",
  },
  {
    title: "Mantenimiento, si lo quieres",
    copy: "Actualizaciones, copias y cambios pequeños con una iguala mensual. Se presupuesta aparte y se cancela cuando quieras.",
  },
  {
    title: "Sin ataduras",
    copy: "Dominio, servidor, base de datos y cuentas van a tu nombre desde el principio. Nunca somos el intermediario que te bloquea.",
  },
] as const;

export const faqs = [
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Depende del alcance, y por eso no publicamos tarifas: preferimos mirar tu caso antes de decir un número. La cifra sale de la primera reunión, se cierra por escrito y no se mueve salvo que amplíes el proyecto tú.",
  },
  {
    question: "¿De quién es el código cuando terminamos?",
    answer:
      "Tuyo. Repositorio, base de datos, dominio y servidor van a tu nombre desde el primer día, no al final como premio.",
  },
  {
    question: "¿Cuánto tiempo tengo que dedicarle yo?",
    answer:
      "Una entrevista inicial de una hora, una revisión de diez minutos por entrega y los accesos a las herramientas que ya uses. El resto lo llevamos nosotros.",
  },
  {
    question: "¿Trabajáis fuera de Barcelona?",
    answer:
      "Sí. Estamos en Barcelona y trabajamos en remoto con toda España. Si el proyecto lo pide, nos vemos en persona.",
  },
  {
    question: "¿Y si a mitad de proyecto quiero añadir cosas?",
    answer:
      "Se presupuesta como ampliación, con su plazo y su precio. Lo ya acordado no se toca ni se encarece por el camino.",
  },
  {
    question: "Ya tengo diseñador. ¿Podéis entrar solo a programar?",
    answer:
      "Sí. Si nos llega el diseño hecho, lo construimos. Y al revés: hay quien nos pide solo el diseño y lo monta su equipo.",
  },
  {
    question: "¿Qué pasa si mi proyecto no os encaja?",
    answer:
      "Te lo decimos en la primera reunión, no tres semanas después. Y si conocemos a alguien que lo hará mejor que nosotros, también te lo decimos.",
  },
] as const;
