# Landing Page - Next.js + Tailwind CSS + pnpm

Una plantilla y arquitectura sólida, modular y eficiente para construir Landing Pages de alta conversión utilizando **Next.js 16 (App Router)**, **Tailwind CSS v4** y **pnpm**.

---

## 🚀 Características principales

- **Next.js 16 App Router**: Servidor nativo con React Server Components y máxima optimización SEO.
- **Gestor de paquetes pnpm**: Instalación ultra rápida y eficiente.
- **Tailwind CSS v4**: Estilos modernos con utilities, soporte Dark Mode nativo y diseño responsivo.
- **Estructura limpia & desacoplada**: Toda la información y contenido de la web está centralizada en `src/config/site.ts`.
- **Componentes UI reutilizables**: Botones con variantes (primary, secondary, glow, outline), Badges y componentes modulares.
- **Tipografía moderna**: Fuente `Plus Jakarta Sans` cargada dinámicamente con `next/font/google`.
- **Interacciones cliente completas**:
  - Menú de navegación móvil responsivo.
  - Conmutador de facturación mensual/anual con cálculo de descuentos.
  - Acordión de preguntas frecuentes (FAQ) interactivo.
  - Formulario de captura de correo / lista de espera con estados de carga y confirmación.

---

## 📁 Estructura del proyecto

```text
landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root Layout con fuentes Google y metadatos SEO
│   │   ├── page.tsx           # Página principal ensamblando secciones
│   │   └── globals.css        # Importación de Tailwind y animaciones
│   ├── components/
│   │   ├── layout/            # Navbar y Footer
│   │   ├── sections/          # Secciones modulares (Hero, Features, Pricing, etc.)
│   │   └── ui/                # Componentes atómicos (Button, Badge, etc.)
│   ├── config/
│   │   └── site.ts            # ⚙️ Configuración centralizada de textos, links y precios
│   ├── lib/
│   │   └── utils.ts           # Función cn() con clsx y tailwind-merge
│   └── types/
│       └── index.ts           # Definiciones TypeScript
├── package.json
└── README.md
```

---

## 🛠️ Comandos de desarrollo

Para iniciar el servidor de desarrollo localmente:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página en vivo.

### Para validar y construir la versión de producción:

```bash
# Comprobar errores de TypeScript y Lint
pnpm build
```

---

## ✏️ ¿Cómo personalizar el contenido?

No necesitas editar código JSX complejo para cambiar la información de tu proyecto. Simplemente edita el archivo:

👉 `src/config/site.ts`

Ahí podrás modificar:
- Nombre y descripción de la marca.
- Ítems de navegación.
- Características y beneficios con sus iconos.
- Planes de precios y características incluidas.
- Testimonios de clientes.
- Preguntas frecuentes (FAQs).
