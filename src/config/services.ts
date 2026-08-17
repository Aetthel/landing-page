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
      "Si sientes que tu negocio no tiene la presencia que merece en internet, este es el servicio que necesitas. En Aetthel diseñamos tu página web con un estilo propio, pensado para representar lo que eres y lo que quieres transmitir a tus clientes.",
    audience:
      "Negocios que ya tienen algo que vender y no tienen dónde mandar a la gente. También si tu web actual recibe visitas y no las convierte en nada.",
    billing: "Pago único con soporte mensual opcional",
    tiersLabel: "Paquetes",
    tiersIntro:
      "Disponemos de tres niveles según las características específicas. Si no sabes en cuál encajaría mejor tu proyecto, nosotros te ayudamos en la primera reunión.",
    tiers: [
      {
        name: "Básico",
        scope: [
          "Página única con las secciones imprescindibles.",
          "Formulario de contacto que llega a tu correo.",
          "Publicada en tu dominio y lista para recibir visitas.",
        ],
      },
      {
        name: "Estándar",
        scope: [
          "Varias secciones y páginas con su propio recorrido de lectura.",
          "Textos redactados por nosotros adaptados a tu idea de negocio.",
          "Analítica y eventos configurados.",
          "Funciones multilenguaje adaptado a cualquier idioma.",
        ],
      },
      {
        name: "Premium",
        scope: [
          "Funcionalidades para que puedas actualizar tú mismo sin necesidad de código.",
          "Base de datos propia integrada, para guardar y gestionar la información que genera tu web.",
          "Integrada con lo que ya uses: CRM, reservas, correo o pagos.",
          "Acompañamiento durante el lanzamiento y los primeros ajustes.",
        ],
      },
    ],
    includes: [
      {
        title: "Pensada en móvil",
        detail:
          "Todas las webs que realizamos están adaptadas al móvil desde el primer día.",
      },
      {
        title: "Todo a tu nombre",
        detail:
          "Dominio, certificado, accesos y código quedan en tus cuentas.",
      },
      {
        title: "Los mensajes te llegan",
        detail:
          "Formulario conectado a tu correo, con aviso inmediato y copia de cada consulta.",
      },
      {
        title: "Preparada para que te encuentren",
        detail:
          "Metadatos, sitemap y carga rápida en todos los paquetes.",
      },
      {
        title: "SEO técnico de base y velocidad cuidada",
        detail:
          "SEO técnico y test de velocidad en todos los paquetes disponibles.",
      },
      {
        title: "Diseño personalizado a tu negocio",
        detail: "Diseñamos tu web adaptada a tu marca desde cero.",
      },
    ],
    support: {
      title: "Soporte Mensual",
      copy: "Puedes dejar tu página a nuestro cargo: ofrecemos un soporte mensual por separado, con un mes gratis y cancelación en cualquier momento.",
      items: [
        { title: "Mantenimiento y actualizaciones técnicas." },
        { title: "Copias de seguridad y vigilancia del servicio." },
        { title: "Gestión de caídas e incidencias." },
        { title: "Cambios pequeños de contenido." },
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
      "Cuando la operativa de tu empresa vive en hojas de cálculo, grupos de WhatsApp o correos reenviados, el problema deja de ser el orden y pasa a ser el tiempo. Construimos la aplicación personalizada que necesitas, con tu vocabulario y tus reglas adaptada a tu forma de trabajar y a la de tu equipo.",
    audience:
      "Equipos con un proceso propio que ningún programa de catálogo respeta del todo, y gente con un producto en la cabeza que necesita una primera versión real para enseñarla.",
    billing: "Pago único o mensualidad",
    tiersLabel: "Paquetes",
    tiersIntro:
      "El proyecto se sitúa en uno de estos tres escalones en la primera conversación. Ese escalón es lo que decide el alcance, el calendario y si conviene cerrarlo en un pago o llevarlo por mensualidad.",
    tiers: [
      {
        name: "MVP simple",
        scope: [
          "Un flujo principal y las pantallas que lo sostienen.",
          "Acceso privado por usuario.",
          "Datos guardados, consultables y exportables.",
          "Construida para poder crecer después sin rehacerla.",
        ],
      },
      {
        name: "Media",
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
        title: "Construimos vuestro flujo de trabajo",
        detail:
          "Dibujamos cómo trabajáis y realizamos un mapa que será el primer entregable, con vuestro flujo de trabajo para la app.",
      },
      {
        title: "Tus datos, son tuyos",
        detail:
          "Base de datos a tu nombre, con copias automáticas y exportación completa cuando la pidas.",
      },
      {
        title: "Repositorio a tu nombre",
        detail:
          "El código se entrega en tu cuenta. Si mañana sigues con otro equipo, te lo llevas entero.",
      },
      {
        title: "Manual de Formación",
        detail:
          "Ofrecemos de forma gratuita un manual de formación personalizado a tu app, para ti o para tus empleados.",
      },
    ],
    support: {
      title: "Método de Pago",
      // El `\n` es un salto de línea deliberado, no un párrafo: lo respeta
      // `whitespace-pre-line` en ServiceSheet y ningún otro navegador lo
      // reordena por su cuenta.
      copy: "Existen dos métodos de pago adaptados según el tipo de proyecto o por pura\ncomodidad del cliente. Se decide antes de empezar y queda por escrito en la propuesta.",
      items: [
        {
          title: "Pago único",
          detail:
            "App con un alcance cerrado, entrega y punto final. Encaja en un MVP o una herramienta acotada.",
        },
        {
          title: "Mensualidad",
          detail:
            "Cuota mientras dura el desarrollo y como evolución continua. Encaja en un producto que va a seguir creciendo.",
        },
      ],
    },
    extra: {
      title: "Exposición de Formación",
      copy: "Servicio adicional de pago, aparte del manual: una sesión de formación en directo con vuestro equipo, donde presentamos la aplicación, explicamos cómo funciona paso a paso y resolvemos las dudas que surjan en el momento.",
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
      "Si tú y tu equipo pasáis parte del día haciendo tareas repetitivas, ese es tiempo que le estáis robando a lo que realmente importa. En Aetthel automatizamos ese trabajo para que dejéis de perder horas en él y podáis centraros en lo que de verdad aporta valor.",
    audience:
      "Cualquier negocio con algo que se repite: presupuestos, altas de cliente, pedidos, informes, avisos. Es la puerta de entrada más sencilla para ver cómo trabajamos.",
    billing: "Pago único por proceso",
    tiersLabel: "Paquetes",
    tiersIntro:
      "Cada automatización se clasifica por dificultad: cuántos pasos tiene, con cuántas herramientas habla y cuánta lógica hay que aplicar, de ahí sale el presupuesto final.",
    tiers: [
      {
        name: "Simple",
        scope: [
          "Pocos pasos y un disparador claro.",
          "Un par de herramientas hablándose entre sí.",
          "Aviso por correo al terminar.",
        ],
      },
      {
        name: "Intermedia",
        scope: [
          "Cadena larga de pasos y varias integraciones.",
          "Condiciones y ramas: según el caso, el flujo va por un lado o por otro.",
          "Tratamiento de datos: limpieza, formato y cálculo por el camino.",
          "Reintentos automáticos y aviso a una persona cuando algo falla.",
        ],
      },
      {
        name: "Avanzada",
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
          "Te informamos de todo el proceso con nuestras posibles soluciones y métodos de trabajo.",
      },
      {
        title: "Funcionando en producción",
        detail:
          "Conectamos el flujo con tus herramientas de trabajo funcionando.",
      },
      {
        title: "Avisos cuando algo falla",
        detail:
          "Aviso recurrente cuando el proceso automático se cae o deja de funcionar.",
      },
      {
        title: "Documentado y explicado",
        detail:
          "Entrega de un manual de funcionamiento de la automatización al completo para tu equipo.",
      },
    ],
    /* Mismo servicio adicional que en Web apps, aquí sobre el flujo: el manual
       entra en todos los paquetes y la sesión en directo se contrata aparte. */
    extra: {
      title: "Exposición de Formación",
      copy: "Servicio adicional de pago, aparte del manual: una sesión de formación en directo con vuestro equipo, donde presentamos la automatización, explicamos paso a paso cómo funciona y resolvemos las dudas que surjan en el momento.",
    },
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
    copy: "El código se entrega en un repositorio a tu nombre. Si mañana quieres seguir con otro equipo, te lo llevas entero.",
  },
  {
    title: "Garantía sobre lo entregado",
    copy: "Los errores propios de lo que hemos construido se arreglan sin coste durante el periodo de garantía que fijamos en la propuesta.",
  },
  {
    title: "Soporte mensual",
    copy: "Mantenimiento, copias, gestión de incidencias y cambios pequeños con una cuota mensual. Se presupuesta aparte y se cancela cuando quieras.",
  },
  {
    title: "Sin ataduras",
    copy: "Dominio, servidor, base de datos y cuentas van a tu nombre desde el principio. La gestión o mejora de los siguientes entra en el presupuesto del soporte mensual.",
  },
] as const;

export const faqs = [
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Depende del nivel y del alcance del mismo y por eso no publicamos tarifas, preferimos estudiar primero tu caso y tus necesidades. El presupuesto sale de la primera conversación, se cierra por escrito y no se mueve salvo que amplíes tú el proyecto.",
  },
  {
    question: "¿Cómo sé en qué paquete encaja mi proyecto?",
    answer:
      "No hace falta que lo sepas. Nos cuentas qué necesitas, y nosotros nos encargamos de situarlo y te explicamos por qué.",
  },
  {
    question: "¿Qué diferencia hay entre pago único y mensualidad?",
    answer:
      "El pago único es para un alcance cerrado: se define, se construye y se entrega. La mensualidad es para producto que va a seguir creciendo, con desarrollo continuo.",
  },
  {
    question: "¿El soporte mensual es obligatorio?",
    answer:
      "No. Es opcional en todos los casos, se contrata aparte y se puede cancelar cuando quieras. Si prefieres llevar el mantenimiento por tu cuenta o con otro equipo, te dejamos todo documentado para que sea posible.",
  },
  {
    question: "¿Quién va a trabajar en mi proyecto?",
    answer:
      "Nosotros. Somos un equipo joven y pequeño, hablas directamente con quien programa, sin gestores de cuenta de por medio.",
  },
  {
    question: "¿De quién es el código cuando terminamos?",
    answer:
      "Tuyo. Repositorio, base de datos, dominio y servidor van a tu nombre desde el primer día.",
  },
  {
    question: "¿Cuánto tiempo tengo que dedicarle yo?",
    answer:
      "Una conversación inicial y un vistazo rápido a cada entrega del desarrollo de tu producto. El resto lo llevamos nosotros.",
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
      "Te lo decimos en la primera conversación, nuestro objetivo es ayudarte: si creemos que no podemos alcanzar el resultado esperado, no te haremos perder el tiempo.",
  },
] as const;
