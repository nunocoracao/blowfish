---
title: "Personalización avanzada"
weight: 13
draft: false
description: "Aprende cómo construir Blowfish manualmente."
slug: "advanced-customisation"
tags: ["avanzado", "css", "documentación"]
series: ["Documentación"]
series_order: 13
---

Hay muchas formas de hacer cambios avanzados a Blowfish. Lee a continuación para aprender más sobre qué se puede personalizar y la mejor manera de lograr el resultado deseado.

Si necesitas más consejos, publica tus preguntas en [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).

## Estructura del proyecto Hugo

Antes de empezar, primero una nota rápida sobre la [estructura del proyecto Hugo](https://gohugo.io/getting-started/directory-structure/) y las mejores prácticas para gestionar tu contenido y personalizaciones del tema.

{{< alert >}}
**En resumen:** Nunca edites directamente los archivos del tema. Solo haz personalizaciones en los subdirectorios de tu proyecto Hugo, no en el directorio themes en sí.
{{< /alert >}}

Blowfish está construido para aprovechar todas las prácticas estándar de Hugo. Está diseñado para permitir que todos los aspectos del tema se personalicen y anulen sin cambiar ninguno de los archivos del tema principal. Esto permite una experiencia de actualización sin problemas mientras te da control total sobre la apariencia y el comportamiento de tu sitio web.

Para lograr esto, nunca deberías ajustar manualmente ninguno de los archivos del tema directamente. Ya sea que instales usando módulos Hugo, como un submódulo git o incluyas manualmente el tema en tu directorio `themes/`, siempre debes dejar estos archivos intactos.

La forma correcta de ajustar cualquier comportamiento del tema es anulando archivos usando el poderoso [orden de búsqueda de archivos](https://gohugo.io/templates/lookup-order/) de Hugo. En resumen, el orden de búsqueda asegura que cualquier archivo que incluyas en el directorio de tu proyecto tendrá automáticamente prioridad sobre cualquier archivo del tema.

Por ejemplo, si quisieras anular el template principal de artículo en Blowfish, simplemente puedes crear tu propio archivo `layouts/_default/single.html` y colocarlo en la raíz de tu proyecto. Este archivo luego anulará el `single.html` del tema sin cambiar nunca el tema en sí. Esto funciona para cualquier archivo del tema - templates HTML, partials, shortcodes, archivos de configuración, datos, assets, etc.

Mientras sigas esta práctica simple, siempre podrás actualizar el tema (o probar diferentes versiones del tema) sin preocuparte de perder ninguna de tus modificaciones personalizadas.

## Cambiar configuraciones de optimización de imagen

Hugo tiene varios métodos incorporados para redimensionar, recortar y optimizar imágenes.

Como ejemplo - en `layouts/partials/article-link/card.html`, tienes el siguiente código:

```go
{{ with .Resize "600x" }}
<div class="w-full thumbnail_card nozoom" style="background-image:url({{ .RelPermalink }});"></div>
{{ end }}
```

El comportamiento predeterminado de Hugo aquí es redimensionar la imagen a 600px manteniendo la proporción.

Vale la pena notar que las configuraciones de imagen predeterminadas como el [punto de anclaje](https://gohugo.io/content-management/image-processing/#anchor) también se pueden establecer en tu [configuración del sitio](https://gohugo.io/content-management/image-processing/#processing-options) así como en el template mismo.

Consulta los [docs de Hugo sobre procesamiento de imágenes](https://gohugo.io/content-management/image-processing/#image-processing-methods) para más información.

## Esquemas de color

Blowfish viene con varios esquemas de color listos para usar. Para cambiar el esquema de color básico, puedes establecer el parámetro del tema `colorScheme`. Consulta la sección [Primeros pasos]({{< ref "getting-started#colour-schemes" >}}) para aprender más sobre los esquemas incorporados.

Además de los esquemas predeterminados, también puedes crear los tuyos propios y re-estilizar todo el sitio web a tu gusto. Los esquemas se crean colocando un archivo `<nombre-esquema>.css` en la carpeta `assets/css/schemes/`. Una vez creado el archivo, simplemente refiérete a él por su nombre en la configuración del tema.

{{< alert "github">}}
**Nota:** generar estos archivos manualmente puede ser difícil, he construido una herramienta de terminal `nodejs` para ayudar con eso, [Fugu](https://github.com/nunocoracao/fugu). En resumen, pasas los tres valores `hex` principales de tu paleta de colores y el programa producirá un archivo css que puede ser importado directamente en Blowfish.
{{< /alert >}}

Blowfish define una paleta de tres colores que se usa en todo el tema. Los tres colores se definen como variantes `neutral`, `primary` y `secondary`, cada una conteniendo diez tonos de color.

Debido a la forma en que Tailwind CSS 3.0 calcula los valores de color con opacidad, los colores especificados en el esquema necesitan [conformarse a un formato particular](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo) proporcionando los valores de color rojo, verde y azul.

```css
:root {
  --clr-primary-500: rgb(139, 92, 246);
}
```

Este ejemplo define una variable CSS para el color `primary-500` con un valor rojo de `139`, valor verde de `92` y valor azul de `246`.

Usa una de las hojas de estilo existentes del tema como plantilla. Eres libre de definir tus propios colores, pero para inspiración, consulta la [referencia de paleta de colores de Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) oficial.

## Anular la hoja de estilos

A veces necesitas añadir un estilo personalizado para estilizar tus propios elementos HTML. Blowfish provee para este escenario permitiéndote anular los estilos predeterminados en tu propia hoja de estilos CSS. Simplemente crea un archivo `custom.css` en la carpeta `assets/css/` de tu proyecto.

El archivo `custom.css` será minificado por Hugo y cargado automáticamente después de todos los otros estilos del tema lo que significa que cualquier cosa en tu archivo personalizado tendrá prioridad sobre los valores predeterminados.

### Usar fuentes adicionales

Blowfish te permite cambiar fácilmente la fuente de tu sitio. Después de crear un archivo `custom.css` en la carpeta `assets/css/` de tu proyecto, coloca tu archivo de fuente dentro de una carpeta `fonts` en la carpeta raíz `static`.

```shell
.
├── assets
│   └── css
│       └── custom.css
...
└─── static
    └── fonts
        └─── font.ttf

```

Esto hace que la fuente esté disponible para el sitio web. Ahora, la fuente simplemente puede ser importada en tu `custom.css` y reemplazada donde lo veas conveniente. El ejemplo de abajo muestra cómo se vería reemplazar la fuente para todo el `html`.

```css
@font-face {
    font-family: font;
    src: url('/fonts/font.ttf');
}

html {
    font-family: font;
}
```

### Ajustar el tamaño de fuente

Cambiar el tamaño de fuente de tu sitio web es un ejemplo de anular la hoja de estilos predeterminada. Blowfish hace esto simple ya que usa tamaños de fuente escalados en todo el tema que se derivan del tamaño de fuente HTML base. Por defecto, Tailwind establece el tamaño predeterminado en `12pt`, pero puede cambiarse a cualquier valor que prefieras.

Crea un archivo `custom.css` usando las [instrucciones de arriba]({{< ref "#overriding-the-stylesheet" >}}) y añade la siguiente declaración CSS:

```css
/* Aumentar el tamaño de fuente predeterminado */
html {
  font-size: 13pt;
}
```

Simplemente cambiando este único valor, todos los tamaños de fuente en tu sitio web se ajustarán para coincidir con este nuevo tamaño. Por lo tanto, para aumentar los tamaños de fuente generales usados, haz el valor mayor que `12pt`. De manera similar, para disminuir los tamaños de fuente, haz el valor menor que `12pt`.

### Cambiar el tema de resaltado de sintaxis

Para cambiar el tema de resaltado de sintaxis, crea `assets/css/custom.css` y añade lo siguiente:

```css
.chroma,
.chroma *,
.chroma:is(.dark *),
.chroma:is(.dark *) * {
  color: unset;
  font-weight: unset;
  font-style: unset;
}
```

Esto limpia los estilos predeterminados de Chroma. El siguiente paso es incorporar estilos de Chroma en tu archivo CSS usando el comando `hugo gen chromastyles`:

```sh
# Mac/Linux
(echo 'html:not(.dark) {'; hugo gen chromastyles --style=emacs; echo '}') >> assets/css/custom.css
(echo 'html.dark {'; hugo gen chromastyles --style=evergarden; echo '}') >> assets/css/custom.css

# Windows PowerShell
# Este comando no puede ejecutarse en CMD; debe ejecutarse en PowerShell
@("html:not(.dark) {"; (hugo gen chromastyles --style=emacs); "}") | Add-Content -Path "assets/css/custom.css"
@("html.dark {"; (hugo gen chromastyles --style=evergarden); "}") | Add-Content -Path "assets/css/custom.css"
```

Consulta todos los estilos disponibles en la [documentación de Hugo](https://gohugo.io/quick-reference/syntax-highlighting-styles/#styles).

## Construir el CSS del tema desde la fuente

Si quisieras hacer un cambio mayor, puedes aprovechar el compilador JIT de Tailwind CSS y reconstruir todo el CSS del tema desde cero. Esto es útil si quieres ajustar la configuración de Tailwind o añadir clases extra de Tailwind a la hoja de estilos principal.

{{< alert >}}
**Nota:** Construir el tema manualmente está pensado para usuarios avanzados.
{{< /alert >}}

Repasemos cómo funciona la construcción del Tailwind CSS.

### Configuración de Tailwind

Para generar un archivo CSS que solo contenga las clases de Tailwind que realmente se están usando, el compilador JIT necesita escanear todos los templates HTML y archivos de contenido Markdown para verificar qué estilos están presentes en el markup. El compilador hace esto mirando el archivo `tailwind.config.js` que está incluido en la raíz del directorio del tema:

```js
// themes/blowfish/tailwind.config.js

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/content/**/*.{html,md}",
  ],

  // y más...
};
```

Esta configuración predeterminada ha sido incluida con estas rutas de contenido para que puedas generar fácilmente tu propio archivo CSS sin necesidad de modificarla, siempre que sigas una estructura de proyecto particular. Es decir, **tienes que incluir Blowfish en tu proyecto como un subdirectorio en `themes/blowfish/`**. Esto significa que no puedes usar fácilmente los módulos Hugo para instalar el tema y debes optar por la instalación por submódulo git (recomendado) o la instalación manual. Los [docs de instalación]({{< ref "installation" >}}) explican cómo instalar el tema usando cualquiera de estos métodos.

### Estructura del proyecto

Para aprovechar la configuración predeterminada, tu proyecto debería verse algo así...

```shell
.
├── assets
│   └── css
│       └── compiled
│           └── main.css  # este es el archivo que generaremos
├── config  # config del sitio
│   └── _default
├── content  # contenido del sitio
│   ├── _index.md
│   ├── projects
│   │   └── _index.md
│   └── blog
│       └── _index.md
├── layouts  # layouts personalizados para tu sitio
│   ├── partials
│   │   └── extend-article-link/simple.html
│   ├── projects
│   │   └── list.html
│   └── shortcodes
│       └── disclaimer.html
└── themes
    └── blowfish  # submódulo git o instalación manual del tema
```

Esta estructura de ejemplo añade un nuevo tipo de contenido `projects` con su propio layout personalizado junto con un shortcode personalizado y partial extendido. Siempre que el proyecto siga esta estructura, todo lo que se requiere es recompilar el archivo `main.css`.

### Instalar dependencias

Para que esto funcione necesitarás cambiar al directorio `themes/blowfish/` e instalar las dependencias del proyecto. Necesitarás [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) en tu máquina local para este paso.

```shell
cd themes/blowfish
npm install
```

### Ejecutar el compilador de Tailwind

Con las dependencias instaladas, todo lo que queda es usar [Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli) para invocar el compilador JIT. Navega de vuelta a la raíz de tu proyecto Hugo y ejecuta el siguiente comando:

```shell
cd ../..
node ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

Es un comando un poco feo debido a las rutas involucradas pero esencialmente estás llamando a Tailwind CLI y pasándole la ubicación del archivo de config de Tailwind (el que vimos arriba), dónde encontrar el archivo `main.css` del tema y luego dónde quieres que se coloque el archivo CSS compilado (va a la carpeta `assets/css/compiled/` de tu proyecto Hugo).

El archivo de config escaneará automáticamente todo el contenido y layouts en tu proyecto así como todos los del tema y construirá un nuevo archivo CSS que contiene todo el CSS requerido para tu sitio web. Debido a la forma en que Hugo maneja la jerarquía de archivos, este archivo en tu proyecto ahora anulará automáticamente el que viene con el tema.

Cada vez que hagas un cambio en tus layouts y necesites nuevos estilos de Tailwind CSS, simplemente puedes volver a ejecutar el comando y generar el nuevo archivo CSS. También puedes añadir `-w` al final del comando para ejecutar el compilador JIT en modo watch.

### Crear un script de build

Para completar completamente esta solución, puedes simplificar todo este proceso añadiendo alias para estos comandos, o hacer lo que yo hago y añadir un `package.json` a la raíz de tu proyecto que contenga los scripts necesarios...

```js
// package.json

{
  "name": "my-website",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "server": "hugo server -b http://localhost -p 8000",
    "dev": cross-env "NODE_ENV=development ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit -w",
    "build": cross-env "NODE_ENV=production ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit"
  },
  // y más...
}
```

Ahora cuando quieras trabajar en el diseño de tu sitio, puedes invocar `npm run dev` y el compilador se ejecutará en modo watch. Cuando estés listo para desplegar, ejecuta `npm run build` y tendrás un build limpio de Tailwind CSS.

🙋‍♀️ Si necesitas ayuda, siéntete libre de hacer una pregunta en [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).
