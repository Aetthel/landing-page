import { Service } from "@/types";

/* --------------------------------------------------------------------------
   Los tres servicios, desplegados.

   La home los presenta en una frase cada uno; aquí van con sus niveles, lo que
   incluye cada uno, para quién es y —sobre todo— lo que NO entra. Esa última
   lista es deliberada: es la parte que un cliente sin equipo técnico no sabe
   preguntar y la que evita la discusión del mes tres.

   Sin cifras de ningún tipo: ni tarifas, ni plazos en semanas, ni rangos. Las
   tarifas todavía no están cerradas y una cifra provisional publicada es la
   clase de dato que luego cuesta desdecir. Lo que sí está cerrado es el modelo
   —pago único, mensualidad, soporte aparte— y eso sí se dice con claridad. El
   número sale de la primera conversación, a medida.
   -------------------------------------------------------------------------- */
export const services: Service[] = [
  {
    id: "landing-pages",
    index: "01",
    name: "Landing pages",
    headline:
      "Capturamos la esencia de tu negocio y lo que quieres transmitir.",
    summary:
      "El sitio al que mandas el tráfico que ya estás pagando: anuncios, redes, la tarjeta que repartes en una feria. Una página escrita y diseñada para que quien entra entienda tu propuesta en diez segundos y sepa qué hacer con ella. Se contrata por paquetes, y cada paquete es un salto de alcance, no una versión recortada del anterior.",
    audience:
      "Negocios que ya tienen algo que vender y no tienen dónde mandar a la gente. También si tu web actual recibe visitas y no las convierte en nada.",
    billing: "Pago único, con soporte opcional",
    tiersLabel: "Paquetes",
    tiersIntro:
      "Tres niveles según hasta dónde quieras llegar. Si no sabes en cuál encajas, nos lo cuentas y te lo decimos nosotros: no vendemos hacia arriba.",
    tiers: [
      {
        name: "Básico",
        fit: "Necesitas existir en internet ya, y que lo poco que haya esté bien hecho.",
        scope: [
          "Página única con las secciones imprescindibles.",
          "Diseño adaptado a tu marca sobre una base nuestra.",
          "Formulario de contacto que llega a tu correo.",
          "Publicada en tu dominio y lista para recibir visitas.",
        ],
      },
      {
        name: "Estándar",
        fit: "Ya mandas gente a tu web y quieres que esas visitas se conviertan en algo.",
        scope: [
          "Varias secciones o páginas, con su propio recorrido de lectura.",
          "Diseño propio desde cero, sin plantilla de partida.",
          "Textos redactados por nosotros a partir de una entrevista contigo.",
          "Analítica y eventos configurados, para saber qué pasa de verdad.",
          "SEO técnico de base y velocidad cuidada.",
        ],
      },
      {
        name: "Premium",
        fit: "La web es tu escaparate principal y tiene que notarse al entrar.",
        scope: [
          "Dirección de arte propia, con animación y piezas hechas para ti.",
          "Blog, catálogo o casos que puedas actualizar tú.",
          "Varios idiomas, si tu público no está solo aquí.",
          "Integrada con lo que ya uses: CRM, reservas, correo o pagos.",
          "Acompañamiento durante el lanzamiento y los primeros ajustes.",
        ],
      },
    ],
    includes: [
      {
        title: "Pensada en móvil",
        detail:
          "Se prueba en teléfono desde el primer día, no como revisión final.",
      },
      {
        title: "Todo a tu nombre",
        detail:
          "Dominio, certificado, accesos y código quedan en tus cuentas, no en las nuestras.",
      },
      {
        title: "Los mensajes te llegan",
        detail:
          "Formulario conectado a tu correo, con aviso inmediato y copia de cada consulta.",
      },
      {
        title: "Preparada para que te encuentren",
        detail:
          "Metadatos, sitemap y carga rápida en todos los paquetes, también en el básico.",
      },
    ],
    support: {
      title: "Soporte mensual, si lo quieres",
      copy: "Aparte del pago único, puedes dejar la página a nuestro cargo. Se contrata al mes, se presupuesta por separado y se cancela cuando quieras.",
      items: [
        "Mantenimiento y actualizaciones técnicas.",
        "Copias de seguridad y vigilancia del servicio.",
        "Gestión de caídas e incidencias cuando algo se rompe.",
        "Cambios pequeños de contenido sin abrir un proyecto nuevo.",
      ],
    },
    excludes: [
      "Gestión de campañas ni presupuesto de publicidad.",
      "Producción de fotografía y vídeo.",
      "Tienda con carrito y pasarela de pago: eso es una web app.",
      "Redacción continuada de blog o redes sociales.",
    ],
    stack: [
      "Next.js",
      "Tailwind",
      "Vercel o VPS",
      "Analítica",
      "Correo transaccional",
    ],
    cta: "Solicita presupuesto",
    diagram: "landing",
  },
  {
    id: "web-apps",
    index: "02",
    name: "Web apps",
    headline: "El programa que se adapta a tu forma de trabajar, no al revés.",
    summary:
      "Cuando la operativa vive en hojas de cálculo, grupos de WhatsApp y correos reenviados, el problema deja de ser el orden y pasa a ser el tiempo. Construimos la aplicación que necesitas, con tu vocabulario y tus reglas. Aquí no hay paquetes cerrados: hay complejidad, y de ella depende también cómo se paga.",
    audience:
      "Equipos con un proceso propio que ningún programa de catálogo respeta del todo, y gente con un producto en la cabeza que necesita una primera versión real para enseñarla.",
    billing: "Pago único o mensualidad",
    tiersLabel: "Complejidad",
    tiersIntro:
      "El proyecto se sitúa en uno de estos tres escalones en la primera conversación. Ese escalón es lo que decide el alcance, el calendario y si conviene cerrarlo en un pago o llevarlo por mensualidad.",
    tiers: [
      {
        name: "MVP simple",
        fit: "Quieres validar una idea con algo real en las manos, no con una presentación.",
        scope: [
          "Un flujo principal y las pantallas que lo sostienen.",
          "Acceso privado por usuario.",
          "Datos guardados, consultables y exportables.",
          "Construida para poder crecer después sin rehacerla.",
        ],
      },
      {
        name: "Media",
        fit: "La operativa ya existe y hoy se sostiene a base de hojas de cálculo y memoria.",
        scope: [
          "Varios roles, cada uno viendo lo suyo.",
          "Panel de administración para el día a día, sin depender de nosotros.",
          "Conectada a lo que ya usas: facturación, correo, calendario o almacén.",
          "Estados, avisos e informes del proceso.",
          "Instalable en el móvil como una app más.",
        ],
      },
      {
        name: "Avanzada",
        fit: "La aplicación es el negocio, no una herramienta interna de apoyo.",
        scope: [
          "Reglas de negocio propias y lógica que no cabe en un catálogo.",
          "Pagos, suscripciones o facturación dentro del producto.",
          "Procesos en segundo plano y tareas programadas.",
          "Entorno de pruebas, despliegues controlados y vigilancia del servicio.",
        ],
      },
    ],
    includes: [
      {
        title: "El flujo, mapeado antes de programar",
        detail:
          "Dibujamos cómo trabajáis hoy de verdad. Ese mapa es el primer entregable, y es tuyo aunque el proyecto se pare ahí.",
      },
      {
        title: "Tus datos, tuyos",
        detail:
          "Base de datos a tu nombre, con copias automáticas y exportación completa cuando la pidas.",
      },
      {
        title: "Repositorio a tu nombre",
        detail:
          "El código se entrega en tu cuenta. Si mañana sigues con otro equipo, te lo llevas entero.",
      },
      {
        title: "Formación y manual",
        detail:
          "Una sesión con quien la va a usar y un manual corto, escrito en vuestro vocabulario.",
      },
    ],
    support: {
      title: "Cómo se paga",
      copy: "Las dos vías existen y se eligen por el tipo de proyecto, no por lo que nos convenga a nosotros. Se decide antes de empezar y queda por escrito en la propuesta.",
      items: [
        "Pago único: alcance cerrado, entrega y punto final. Encaja en un MVP o en una herramienta acotada.",
        "Mensualidad: cuota mientras dura el desarrollo y sigue después como evolución continua. Encaja en producto que va a seguir creciendo.",
      ],
    },
    excludes: [
      "Apps nativas publicadas en App Store o Google Play: trabajamos web instalable.",
      "Migrar datos sin revisarlos antes: si vienen sucios, primero se limpian.",
      "Guardias nocturnas ni soporte de madrugada.",
      "Licencias de servicios de terceros, que van siempre a tu nombre.",
    ],
    stack: [
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Autenticación y roles",
      "Despliegue en tu servidor",
    ],
    cta: "Cuéntanos tu proyecto",
    diagram: "app",
  },
  {
    id: "automatizaciones",
    index: "03",
    name: "Automatizaciones",
    headline: "Que el trabajo repetitivo deje de ser trabajo.",
    summary:
      "Si alguien de tu equipo dedica su semana a mover datos de un sitio a otro a mano, eso no es trabajo: es una factura invisible. Montamos el proceso para que ocurra solo. Cada automatización se clasifica por dificultad —cuántos pasos tiene, con cuántas herramientas habla y cuánta lógica hay que decidir por el camino—, y de ahí sale el presupuesto.",
    audience:
      "Cualquier negocio con algo que se repite: presupuestos, altas de cliente, pedidos, informes, avisos. Es la puerta de entrada más sencilla para ver cómo trabajamos.",
    billing: "Pago único por proceso",
    tiersLabel: "Dificultad",
    tiersIntro:
      "No se cobra por lo bonito que quede, sino por lo que hay dentro: pasos encadenados, integraciones distintas y decisiones que el flujo tiene que tomar solo.",
    tiers: [
      {
        name: "Simple",
        fit: "Una tarea concreta que se repite siempre igual, sin excepciones.",
        scope: [
          "Pocos pasos y un disparador claro.",
          "Un par de herramientas hablándose entre sí.",
          "Sin condiciones: entra un dato, sale otro.",
          "Aviso por correo al terminar.",
        ],
      },
      {
        name: "Intermedia",
        fit: "El proceso cambia según lo que llegue y hoy alguien decide a mano.",
        scope: [
          "Cadena larga de pasos y varias integraciones.",
          "Condiciones y ramas: según el caso, el flujo va por un lado o por otro.",
          "Tratamiento de datos: limpieza, formato y cálculo por el camino.",
          "Reintentos automáticos y aviso a una persona cuando algo falla.",
        ],
      },
      {
        name: "Avanzada",
        fit: "El proceso es parte del negocio y el día que se cae, se nota.",
        scope: [
          "Flujos extensos, con muchos nodos y bifurcaciones.",
          "Integraciones con APIs propias o servicios sin conector hecho.",
          "Lógica condicional encadenada y colas de trabajo.",
          "Registro de cada ejecución, vigilancia y plan para volver a arrancar.",
        ],
      },
    ],
    includes: [
      {
        title: "Auditoría del proceso",
        detail:
          "Dónde se va el tiempo, dónde se rompe y qué está costando. Antes de tocar nada.",
      },
      {
        title: "Funcionando en producción",
        detail:
          "Conectado entre tus herramientas y trabajando de verdad, no en una demostración.",
      },
      {
        title: "Avisos cuando algo falla",
        detail:
          "Un proceso automático que se cae en silencio es peor que no tenerlo. Este avisa.",
      },
      {
        title: "Documentado y explicado",
        detail:
          "Qué hace, cada cuánto, cómo se para y cómo se vuelve a arrancar. En una página, sin jerga.",
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
    cta: "Solicita presupuesto",
    diagram: "automation",
  },
];

/* --------------------------------------------------------------------------
   El proyecto entero, paso a paso.

   Pendiente de montar en Aetthel Lab: cuenta cómo trabaja el estudio, no qué
   se contrata, y por eso salió de /servicios. El componente que lo pinta,
   <ServicesProcess>, sigue en pie esperando su página.

   La columna de la derecha —lo que se espera del cliente— es la que casi nadie
   publica: contratar desarrollo da miedo por el tiempo que uno va a tener que
   poner, y nadie le sabe decir cuánto.

   Cada paso dice también qué queda por escrito al terminarlo, en lugar de
   cuánto tarda: los plazos reales dependen del nivel elegido y salen en la
   propuesta, no en una tabla genérica de la web.
   -------------------------------------------------------------------------- */
export const processSteps = [
  {
    step: "00",
    title: "Nos escribes",
    output: "Respuesta con nuestras dudas",
    us: "Leemos tu mensaje y te contestamos pronto, con las preguntas que nos hayan surgido al leerlo.",
    you: "Un párrafo contando qué quieres.",
  },
  {
    step: "01",
    title: "Conversación de encaje",
    output: "Un sí o un no honesto",
    us: "Escuchamos, preguntamos, situamos tu proyecto en un nivel y te decimos con franqueza si es para nosotros.",
    you: "Un rato y las preguntas incómodas.",
  },
  {
    step: "02",
    title: "Presupuesto a medida",
    output: "Alcance y precio por escrito",
    us: "Un documento con qué entra, qué no, cómo se paga y cuánto cuesta. Cerrado, no orientativo.",
    you: "Leerlo y decir sí o no.",
  },
  {
    step: "03",
    title: "Diseño y validación",
    output: "El proyecto dibujado",
    us: "Ves cómo va a quedar antes de que exista una línea de código. Cambiarlo aquí sale gratis.",
    you: "Revisar y señalar lo que no encaja.",
  },
  {
    step: "04",
    title: "Construcción por entregas",
    output: "Un enlace privado que crece",
    us: "Cada entrega deja algo nuevo funcionando y visible. Nada de silencios largos.",
    you: "Un vistazo rápido a cada entrega.",
  },
  {
    step: "05",
    title: "Entrega y acompañamiento",
    output: "Todo en marcha y a tu nombre",
    us: "Puesta en marcha, formación, documentación y garantía sobre lo entregado.",
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
    title: "Garantía sobre lo entregado",
    copy: "Los errores de lo que hemos construido se arreglan sin coste durante el periodo de garantía que fijamos en la propuesta.",
  },
  {
    title: "Soporte mensual, si lo quieres",
    copy: "Mantenimiento, copias, gestión de incidencias y cambios pequeños con una cuota mensual. Se presupuesta aparte y se cancela cuando quieras.",
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
      "Depende del nivel y del alcance, y por eso no publicamos tarifas: preferimos mirar tu caso antes de decir un número. El presupuesto sale de la primera conversación, se cierra por escrito y no se mueve salvo que amplíes el proyecto tú.",
  },
  {
    question: "¿Cómo sé en qué nivel encaja lo mío?",
    answer:
      "No hace falta que lo sepas. Nos cuentas qué necesitas, lo situamos nosotros y te explicamos por qué. Si con el nivel más sencillo te vale, te lo decimos: no tenemos ningún interés en venderte de más.",
  },
  {
    question: "¿Qué diferencia hay entre pago único y mensualidad?",
    answer:
      "El pago único es para un alcance cerrado: se define, se construye y se entrega. La mensualidad es para producto que va a seguir creciendo, con desarrollo continuo. Las landings van siempre a pago único, con soporte mensual aparte si lo quieres; en las web apps se elige según la complejidad.",
  },
  {
    question: "¿El soporte mensual es obligatorio?",
    answer:
      "No. Es opcional en todos los casos, se contrata aparte y se puede cancelar cuando quieras. Si prefieres llevar el mantenimiento por tu cuenta o con otro equipo, te dejamos todo documentado para que sea posible.",
  },
  {
    question: "¿Quién va a trabajar en mi proyecto?",
    answer:
      "Nosotros. Somos un equipo joven y pequeño: hablas directamente con quien programa, sin gestores de cuenta por medio. Lo que no sabemos lo decimos, y lo que aceptamos lo entregamos.",
  },
  {
    question: "¿De quién es el código cuando terminamos?",
    answer:
      "Tuyo. Repositorio, base de datos, dominio y servidor van a tu nombre desde el primer día, no al final como premio.",
  },
  {
    question: "¿Cuánto tiempo tengo que dedicarle yo?",
    answer:
      "Una conversación inicial, un vistazo rápido a cada entrega y los accesos a las herramientas que ya uses. El resto lo llevamos nosotros.",
  },
  {
    question: "¿Trabajáis fuera de Barcelona?",
    answer:
      "Sí. Estamos en Barcelona y trabajamos en remoto con toda España. Si el proyecto lo pide, nos vemos en persona.",
  },
  {
    question: "¿Y si a mitad de proyecto quiero añadir cosas?",
    answer:
      "Se presupuesta como ampliación, con su alcance y su precio. Lo ya acordado no se toca ni se encarece por el camino.",
  },
  {
    question: "¿Qué pasa si mi proyecto no os encaja?",
    answer:
      "Te lo decimos en la primera conversación, no tres semanas después. Y si conocemos a alguien que lo hará mejor que nosotros, también te lo decimos.",
  },
] as const;
