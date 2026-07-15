# SOJO DEV — Portfolio

Portafolio profesional de **Fabián Sojo**, desarrollador Full Stack y estudiante de Ingeniería en Sistemas en Costa Rica. El sitio presenta su perfil, experiencia, proyectos (con páginas de caso de estudio individuales), stack tecnológico, educación/certificaciones, y un flujo de contacto por correo y WhatsApp, pensado tanto para búsqueda de empleo como para captación de clientes.

La especificación completa del producto vive en [`guia-portfolio.md`](./guia-portfolio.md).

## Tecnologías

- [Next.js](https://nextjs.org) (App Router) + TypeScript estricto
- Tailwind CSS + [shadcn/ui](https://ui.shadcn.com)
- Framer Motion (animaciones discretas)
- Lucide Icons
- React Hook Form + Zod (formulario de contacto)
- next-themes (modo claro/oscuro)
- Despliegue en Vercel

## Requisitos

- Node.js 20+
- pnpm

## Instalación

```bash
pnpm install
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa los valores:

```bash
cp .env.example .env.local
```

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio, usada en metadata, Open Graph y el sitemap |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp en formato internacional sin símbolos ni espacios (ej. `50688888888`) |
| `CONTACT_EMAIL` | Dirección de destino del formulario de contacto |
| `RESEND_API_KEY` | API key de [Resend](https://resend.com), si se usa como proveedor de correo |
| `BREVO_API_KEY` | API key de [Brevo](https://www.brevo.com), proveedor alternativo (no está cableado aún, ver más abajo) |

Solo se necesita una de las dos claves de proveedor de correo. Sin ninguna configurada, el envío por correo responde con un error controlado (503) pero el sitio sigue funcionando normalmente, incluyendo el envío por WhatsApp.

## Ejecución local

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
pnpm build
pnpm start
```

Antes de dar por terminado cualquier cambio, verifica que ambos pasen sin errores:

```bash
pnpm lint
pnpm build
```

## Despliegue en Vercel

1. Conecta el repositorio en [vercel.com/new](https://vercel.com/new).
2. Configura las variables de entorno de la tabla anterior en el proyecto de Vercel (Settings → Environment Variables).
3. Vercel detecta Next.js automáticamente; no se necesita configuración adicional de build.
4. Cada push a la rama principal genera un despliegue de producción.

## Estructura del proyecto

```text
src/
├── app/                    # Rutas (App Router): /, /about, /contact, /projects, /projects/[slug]
│   ├── api/contact/        # API route del formulario de contacto (envío por correo)
│   ├── sitemap.ts          # Sitemap dinámico
│   ├── robots.ts           # robots.txt
│   └── manifest.ts         # Web app manifest
├── components/
│   ├── common/              # Componentes compartidos (ej. fade-in, json-ld)
│   ├── layout/               # Header, footer, navegación móvil, theme toggle
│   ├── sections/              # Secciones de la landing (hero, about, experience, technologies, education, certifications, cta, contact)
│   ├── projects/                # Tarjetas de proyecto, filtros, galería
│   ├── contact/                    # Formulario de contacto
│   └── ui/                          # Componentes base de shadcn/ui
├── content/projects/       # Reservado para contenido MDX de casos de estudio (aún sin usar, ver Contenido editable)
├── data/                    # Contenido editable: projects.ts, experience.ts, education.ts, certifications.ts, technologies.ts, languages.ts
├── lib/
│   ├── validations/         # Esquemas Zod
│   ├── constants.ts         # siteConfig: información central del sitio
│   ├── structured-data.ts   # Datos estructurados Schema.org (Person, WebSite, SoftwareApplication, BreadcrumbList)
│   └── utils.ts
└── types/                   # Tipos compartidos (Project, etc.)
```

## Contenido editable

Toda la información del sitio vive en archivos de datos bajo `src/data/`, sin necesidad de tocar componentes visuales:

- `projects.ts` — proyectos
- `experience.ts` — experiencia profesional
- `education.ts` — educación
- `certifications.ts` — certificaciones e insignias digitales
- `technologies.ts` — stack tecnológico por categoría
- `languages.ts` — idiomas

La información personal, de marca y de contacto (nombre, email, redes, WhatsApp) está centralizada en `siteConfig` dentro de `src/lib/constants.ts` — nunca se duplica en los componentes.

### Cómo agregar un proyecto

1. Agrega una nueva entrada al arreglo exportado en `src/data/projects.ts`, siguiendo el tipo `Project` definido en `src/types/project.ts` (título, slug, descripciones, imágenes, tecnologías, rol, contribuciones, retos/soluciones/resultados opcionales, estado, año, etc.).
2. El `slug` define la URL de la página individual (`/projects/[slug]`) — debe ser único y en formato kebab-case.
3. Marca `featured: true` si el proyecto debe aparecer en la sección destacada de la página principal.
4. Si el proyecto tiene estado `"private"`, se excluye automáticamente del sitemap.

> Nota: actualmente todo el contenido del caso de estudio (descripción completa, contribuciones, retos, soluciones, resultados) vive como texto plano en `projects.ts`. La carpeta `src/content/projects/` está reservada para migrar este contenido a MDX en el futuro, tal como sugiere la especificación, pero aún no se ha implementado.

### Cómo agregar imágenes

- Coloca la imagen de portada y la galería de cada proyecto en `public/projects/`.
- Referencia las rutas resultantes (ej. `/projects/mi-proyecto/cover.png`) en los campos `coverImage` y `gallery` de la entrada correspondiente en `projects.ts`.
- Usa imágenes optimizadas (WebP o PNG comprimido); el sitio las sirve mediante `next/image`.

### Cómo actualizar el CV

1. Coloca el PDF del currículum en `public/cv/fabian-sojo-cv.pdf` (el nombre debe coincidir exactamente).
2. La ruta ya está referenciada en `siteConfig.cvUrl` (`src/lib/constants.ts`) y se usa en los botones "Descargar CV" del header y del hero — no se requiere ningún otro cambio.
3. **Estado actual: pendiente.** `public/cv/` solo contiene un `README.txt` de marcador de posición; el botón de descarga apuntará a un archivo inexistente hasta que se agregue el PDF real.

### Cómo modificar la información personal

Edita `siteConfig` en `src/lib/constants.ts` (nombre, marca, título, ubicación, correo, redes, URL del sitio, número de WhatsApp). No dupliques esta información directamente en componentes.

### Cómo configurar el correo

1. Crea una cuenta en [Resend](https://resend.com) (proveedor actualmente implementado en `src/app/api/contact/route.ts`) y genera una API key.
2. Define `RESEND_API_KEY` y `CONTACT_EMAIL` en las variables de entorno.
3. La integración con Brevo está contemplada en la especificación como alternativa, pero no está implementada todavía; añadirla requeriría una rama adicional en `route.ts`.

### Cómo configurar WhatsApp

Define `NEXT_PUBLIC_WHATSAPP_NUMBER` en las variables de entorno, en formato internacional sin símbolos (ej. `50688888888`). El formulario de contacto construye un mensaje estructurado con los datos ingresados y abre `wa.me` con ese número al seleccionar WhatsApp como método de contacto preferido.

## Gaps conocidos

- **CV**: falta el PDF real en `public/cv/` (ver arriba).
- **MDX**: el contenido de los casos de estudio aún no se migró a MDX; vive como texto plano en `projects.ts`.
- **Repositorio de Danceroom**: los repos (`danceroom-api`, `dancerrom-client`, `danceroom-admin`) son privados en GitHub, por lo que el proyecto no tiene botón de repositorio en el sitio. Si se hacen públicos, agregar `repositoryUrl` a la entrada correspondiente en `projects.ts`.
- **Brevo**: solo Resend está cableado como proveedor de correo.

## Diseñado y desarrollado por Fabián Sojo.
