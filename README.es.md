[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | Español | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)
# Blowfish
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.87.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.87.0)
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)

Blowfish está diseñado para ser un tema potente y ligero para [Hugo](https://gohugo.io). Está construido usando Tailwind CSS con un diseño limpio y minimalista que prioriza tu contenido.

![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)


🌏 [Sitio de demostración](https://blowfish.page/)
📑 [Documentación del tema](https://blowfish.page/docs/)
💎 [Tienda de merchandising](http://tee.pub/lic/qwSlWVBL5zc)
🐛 [Reportes de errores y problemas](https://github.com/nunocoracao/blowfish/issues)
💡 [Preguntas y solicitudes de funcionalidades](https://github.com/nunocoracao/blowfish/discussions)



<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a>



## Características

- Diseño totalmente responsive construido con Tailwind CSS 3.0
- Múltiples esquemas de color (o personaliza completamente el tuyo propio)
- Modo oscuro (forzado activado/desactivado o cambio automático con opción de usuario)
- Configuración altamente personalizable
- Integración con Firebase para soportar datos dinámicos
- Contador de vistas y mecanismo de likes
- Artículos relacionados
- Múltiples diseños de página de inicio
- Múltiples autores
- Series de artículos
- Ordenación de artículos basada en fecha y peso
- Modo zen para lectura de artículos
- Flexible con cualquier tipo de contenido, taxonomías y menús
- Menús de encabezado y pie de página
- Menús anidados y menú de sub-navegación
- Tabla de contenidos con desplazamiento
- Soporte de contenido multilingüe incluyendo idiomas RTL
- Capacidad de enlazar a publicaciones en sitios web de terceros
- Soporte para varios shortcodes como Gallery, Timeline, GitHub cards y Carousels
- Sintaxis de GitHub Alerts, 15 tipos, soporte plegable
- Integración con Buymeacoffee
- Búsqueda en el sitio del lado del cliente impulsada por Fuse.js
- Diagramas y visualizaciones usando Mermaid
- Gráficos usando Chart.js
- Integración con TypeIt
- Incrustaciones de Youtube con mejoras de rendimiento
- Notación matemática usando KaTeX
- Iconos SVG de FontAwesome 6
- Redimensionamiento automático de imágenes usando Hugo Pipes
- Anclajes de encabezados, Tablas de contenidos, Copia de código, Botones, Insignias y más
- Soporte de HTML y Emoji en artículos 🎉
- SEO amigable con enlaces para compartir en redes sociales
- Soporte para Fathom Analytics y Google Analytics
- Feeds RSS, Favicons y soporte de comentarios
- Personalización avanzada usando definiciones de colores y estilos simples de Tailwind
- Optimizado para rendimiento y accesibilidad con puntuaciones perfectas en Lighthouse
- Completamente documentado con actualizaciones regulares

---

![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)

## Documentación

Blowfish tiene [documentación extensa](https://blowfish.page/docs/) que cubre todos los aspectos del tema. Asegúrate de [leer la documentación](https://blowfish.page/docs/) para aprender más sobre cómo usar el tema y sus características.

---

## Instalación

Blowfish soporta varios métodos de instalación - como submódulo de git, módulo de Hugo, o como una instalación completamente manual.

Las instrucciones detalladas para cada método se pueden encontrar en la documentación de [Instalación](https://blowfish.page/docs/installation). Deberías consultar la documentación para obtener la experiencia de configuración más simple. A continuación se presenta una guía de inicio rápido usando submódulos si estás usando git, o módulos de Hugo si ya tienes confianza instalando temas de Hugo.

### Inicio rápido usando Blowfish Tools

> **Nota:** Asegúrate de tener **Node.js**, **Git** y **Hugo** instalados, y de haber creado un nuevo proyecto Hugo antes de continuar.

Acabamos de lanzar una nueva herramienta CLI para ayudarte a comenzar con Blowfish. Creará un nuevo proyecto Hugo, instalará el tema y configurará los archivos de configuración del tema por ti. Todavía está en beta, así que por favor [reporta cualquier problema que encuentres](https://github.com/nunocoracao/blowfish-tools).

Instala la herramienta CLI globalmente usando npm (u otro gestor de paquetes):
```shell
npm i -g blowfish-tools
```

Luego ejecuta el comando `blowfish-tools` para iniciar una ejecución interactiva que te guiará a través de los casos de uso de creación y configuración.
```shell
blowfish-tools
```

También puedes ejecutar el comando `blowfish-tools new` para crear un nuevo proyecto Hugo e instalar el tema de una sola vez. Consulta la ayuda de CLI para más información.
```shell
blowfish-tools new mynewsite
```

### Inicio rápido usando submódulos de git

> **Nota:** Asegúrate de tener **Git** y **Hugo** instalados, y de haber creado un nuevo proyecto Hugo antes de continuar.

1. Desde el directorio de tu proyecto, inicializa git:

   ```shell
   git init
   ```

2. Configura Blowfish como un submódulo de git:

   ```shell
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
   ```

3. En la carpeta raíz de tu sitio web, elimina el archivo `hugo.toml` que fue generado por Hugo. Copia los archivos de configuración `*.toml` del tema en tu carpeta `config/_default/`.

   Encontrarás estos archivos de configuración del tema en el directorio de caché de Hugo, o [descarga una copia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) desde GitHub.

4. Sigue las instrucciones de [Primeros Pasos](https://blowfish.page/docs/getting-started/) para configurar tu sitio web.

### Inicio rápido usando Hugo

> **Nota:** Asegúrate de tener **Go** y **Hugo** instalados, y de haber creado un nuevo proyecto Hugo antes de continuar.

1. Desde el directorio de tu proyecto, inicializa los Módulos de Hugo:

   ```shell
   hugo mod init github.com/<username>/<repo-name>
   ```

2. Crea `config/_default/module.toml` y agrega lo siguiente:

   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v2"
   ```

3. Inicia tu servidor usando `hugo server` y el tema se descargará automáticamente.

4. En la carpeta raíz de tu sitio web, elimina el archivo `hugo.toml` que fue generado por Hugo. Copia los archivos de configuración `*.toml` del tema en tu carpeta `config/_default/`.

   > **Nota:** ¡No sobrescribas el archivo `module.toml` que creaste arriba!

   Encontrarás estos archivos de configuración del tema en el directorio de caché de Hugo, o [descarga una copia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) desde GitHub.

5. Sigue las instrucciones de [Primeros Pasos](https://blowfish.page/docs/getting-started/) para configurar tu sitio web.

### Instalación de actualizaciones del tema

A medida que se publiquen nuevas versiones, puedes actualizar el tema usando Hugo. Simplemente ejecuta `hugo mod get -u` desde el directorio de tu proyecto y el tema se actualizará automáticamente a la última versión.

Las [instrucciones de actualización](https://blowfish.page/docs/installation/#installing-updates) detalladas están disponibles en la documentación.

---

## Contribuciones

Se espera que Blowfish evolucione con el tiempo. Tengo la intención de seguir agregando características y haciendo cambios según sea necesario.

Siéntete libre de ponerte en contacto con cualquier problema o sugerencia de nuevas características que te gustaría ver.

- 🐛 **Reportes de errores y problemas:** Usa [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)
- 💡 **Ideas para nuevas características:** Abre una discusión en [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)
- 🙋‍♀️ **Preguntas generales:** Dirígete a [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)

Si puedes corregir un error o implementar una nueva característica, acepto PRs para este propósito. Aprende más en las [guías de contribución](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).

---

## Stargazers a lo largo del tiempo

[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)

<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a>
