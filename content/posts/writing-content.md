---
title: Escribiendo Contenido
description: Agregando nuevas páginas, entradas de blog y proyectos a Nordlys
publishedDate: 2024-10-06
tags:
  - documentación
---

Agregar contenido en Nordlys es tan fácil como crear un nuevo archivo Markdown (o [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/)) y comenzar a escribir. Para proyectos y entradas de blog, `src/content/config.ts` contiene las definiciones del esquema, por lo que define qué propiedades se necesitan y se pueden establecer en el frontmatter.

## Agregando una Nueva Página

Para agregar una nueva página a Nordlys, navega a `src/pages` y crea un nuevo archivo Markdown. Muy probablemente querrás que la página use el diseño predeterminado, así que establécelo en el frontmatter. Después de eso, puedes comenzar a escribir tu contenido.

```markdown src/pages/faq.md
---
layout: '@/layouts/PageLayout.astro'
title: FAQ
---

## ¿Cómo puedo contactarte?

Puedes contactarme en ...
```

Ve a `localhost:4321/faq` en tu navegador, ¡y ahora verás tu página FAQ recién creada! El frontmatter de una página se define de la siguiente manera.

```ts
// las propiedades no establecidas se establecen por defecto en las propiedades configuradas en el tema
type PageFrontmatter = {
  title?: string // título de la pestaña
  author?: string // meta
  description?: string // meta
  canonicalURL?: string // meta
  openGraphImage?: string | ImageMetadata // URL relativa a la imagen en la carpeta public o activo local
  publishedDate?: Date // meta
  scrollProgress?: boolean // barra que indica la ubicación del desplazamiento en la parte superior de la página
  activeHeaderLink?: string // título o href del enlace de encabezado activo
  scrollToTop?: boolean // botón "Volver arriba" cuando se ha desplazado mucho hacia abajo
}
```

## Escribiendo una Entrada de Blog

Escribir una entrada de blog es esencialmente lo mismo que agregar una nueva página, con un frontmatter ligeramente diferente. Puedes seguir el mismo procedimiento, excepto que crearás el archivo en el directorio `src/content/posts`.

```markdown src/content/posts/aprendi-hoy.md
---
title: Aprendí algo hoy
description: Una actualización rápida sobre las cosas nuevas que aprendí
publishedDate: 2024-10-06
tags:
  - programación
  - HAP
---

Así que hoy, comencé a aprender un nuevo lenguaje de programación. Es realmente genial porque ...
```

Navega a `localhost:4321/posts`, y tu nueva entrada aparecerá allí. ¡Hacer clic en ella mostrará el contenido que escribiste, renderizado elegantemente como texto! El frontmatter de una entrada se define de la siguiente manera.

```ts
type PostFrontmatter = {
  title: string
  author?: string // por defecto el autor establecido en la configuración del tema
  description: string
  publishedDate: Date
  draft?: boolean // por defecto false
  canonicalURL?: string // meta
  openGraphImage?: string | ImageMetadata // ya sea URL a la imagen en la carpeta public o activo local
  tags?: string[] // por defecto []
  showToC?: boolean // mostrar una Tabla de Contenidos, por defecto true
}
```

## Agregando un Nuevo Proyecto

Para agregar un nuevo proyecto en Nordlys, simplemente crea un archivo en el directorio `src/content/projects`. Establece las propiedades del proyecto, escribe una descripción corta, ¡y listo!

```markdown src/content/projects/aplicacion-increible.md
---
title: Aplicación Increíble
startDate: 2023-10-06
endDate: 2024-10-06
tags:
  - HTML
  - CSS
  - TypeScript
---

¡Desarrollé una aplicación increíble, usando `HTML`, `CSS` y `TypeScript`! La aplicación puede ...
```

¡Echa un vistazo a `localhost:4321/projects`, y tu nuevo proyecto debería estar listado allí! El frontmatter de un proyecto se define de la siguiente manera.

```ts
type ProjectFrontmatter = {
  title: string
  url?: string // puede ser relativa o absoluta
  startDate?: Date // si se omite, endDate será ignorada, incluso si se establece, y el proyecto se ordenará al final de la lista
  endDate?: Date // muestra "Ahora" si no está establecida
  tags?: string[] // por defecto []
  previewImage: ImageMetadata // activo local
}
```

Ten en cuenta que los proyectos no generan una página dedicada, sino que solo se listan en la página `/projects`.
