---
title: "Alojamiento y despliegue"
weight: 14
draft: false
description: "Aprende cómo desplegar un sitio Blowfish."
slug: "hosting-deployment"
tags: ["documentación", "alojamiento", "despliegue", "github", "netlify", "render"]
series: ["Documentación"]
series_order: 14
---

Hay muchas formas de desplegar tu sitio web Hugo construido con Blowfish. El tema está diseñado para ser flexible en casi cualquier escenario de despliegue.

Blowfish usa URLs relativas en todo el tema. Esto permite que los sitios se desplieguen fácilmente en subcarpetas y hosts como GitHub Pages. Normalmente no se requiere ninguna configuración especial siempre que el parámetro `baseURL` haya sido configurado en el archivo `hugo.toml`.

La documentación oficial de Hugo [Alojamiento y Despliegue](https://gohugo.io/hosting-and-deployment/) es el mejor lugar para aprender cómo desplegar tu sitio. Las secciones siguientes contienen algunos detalles de configuración específicos del tema que pueden ayudarte a desplegar sin problemas con ciertos proveedores.

**Elige tu proveedor:**

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Render](#render)
- [Cloudflare Pages](#cloudflare-pages)
- [Hosting compartido, VPS o servidor web privado](#hosting-compartido-vps-o-servidor-web-privado)

---

## GitHub Pages

GitHub permite alojar en [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) usando Actions. Para habilitar esta funcionalidad, activa Pages en tu repositorio y crea un nuevo workflow de Actions para construir y desplegar tu sitio.

El archivo necesita estar en formato YAML, colocado dentro del directorio `.github/workflows/` de tu repositorio de GitHub y nombrado con extensión `.yml`.

{{< alert >}}
**Importante:** Asegúrate de establecer el nombre de rama correcto bajo `branches` y en el parámetro `if` del paso de despliegue hacia la rama fuente usada en tu proyecto.
{{< /alert >}}

```yaml
# .github/workflows/gh-pages.yml

name: GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-24.04
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: "latest"

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./public
```

Sube el archivo de configuración a GitHub y la acción debería ejecutarse automáticamente. Puede fallar la primera vez y necesitarás visitar la sección **Settings > Pages** de tu repositorio de GitHub para verificar que la fuente es correcta. Debería estar configurada para usar la rama `gh-pages`.

{{< screenshot src="github-pages-source.jpg" alt="Captura de pantalla de la fuente de GitHub Pages" >}}

Una vez que los ajustes estén configurados, vuelve a ejecutar la acción y el sitio debería construirse y desplegarse correctamente. Puedes consultar los logs de acciones para verificar que todo se desplegó exitosamente.

## Netlify

Para desplegar en [Netlify](https://www.netlify.com), crea un nuevo sitio de despliegue continuo y enlázalo a tu código fuente. Los ajustes de construcción pueden dejarse en blanco en la interfaz de Netlify. Solo necesitarás configurar el dominio que usarás.

{{< screenshot src="netlify-build-settings.jpg" alt="Captura de pantalla de los ajustes de construcción de Netlify" >}}

Luego en la raíz del repositorio de tu sitio, crea un archivo `netlify.toml`:

```toml
# netlify.toml

[build]
  command = "hugo mod get -u && hugo --gc --minify -b $URL"
  publish = "public"

[build.environment]
  NODE_ENV = "production"
  GO_VERSION = "1.16"
  TZ = "UTC"  # Establecer a la zona horaria preferida

[context.production.environment]
  HUGO_VERSION = "0.104.1"
  HUGO_ENV = "production"

[context.deploy-preview.environment]
  HUGO_VERSION = "0.104.1"
```

Esta configuración asume que estás desplegando Blowfish como un módulo de Hugo. Si has instalado el tema usando otro método, cambia el comando de construcción simplemente a `hugo --gc --minify -b $URL`.

Cuando subas el archivo de configuración a tu repositorio, Netlify debería desplegar automáticamente tu sitio. Puedes verificar los logs de despliegue en la interfaz de Netlify para cualquier error.

## Render

Desplegar en [Render](https://render.com) es muy sencillo y toda la configuración se hace a través de la interfaz de Render.

Crea un nuevo **Static Site** y enlázalo al repositorio de código de tu proyecto. Luego simplemente configura el comando de construcción como `hugo --gc --minify` y el directorio de publicación como `public`.

{{< screenshot src="render-settings.jpg" alt="Captura de pantalla de los ajustes de Render" >}}

El sitio se construirá y desplegará automáticamente cada vez que subas un cambio a tu repositorio.

## Cloudflare Pages

Cloudflare ofrece el servicio [Pages](https://pages.cloudflare.com/) que puede alojar blogs de Hugo. Construye el sitio desde un repositorio git y luego lo aloja en el CDN de Cloudflare. Sigue su [guía de despliegue de Hugo](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site) para comenzar.

La función Rocket Loader™ ofrecida por Cloudflare intenta acelerar el renderizado de páginas web con JavaScript, pero rompe el selector de apariencia en el tema. También puede causar un molesto parpadeo de pantalla claro/oscuro al navegar por tu sitio debido a que los scripts se cargan en el orden incorrecto.

Este problema se puede solucionar desactivándolo:

- Ve al [panel de Cloudflare](https://dash.cloudflare.com)
- Haz clic en tu nombre de dominio en la lista
- Haz clic en _Optimization_ en la sección _Speed_
- Desplázate hacia abajo hasta _Rocket Loader™_ y desactívalo

Los sitios Hugo construidos con Blowfish aún cargan muy rápido, incluso con esta función desactivada.

## Hosting compartido, VPS o servidor web privado

Usar hosting web tradicional, o desplegar en tu propio servidor web, es tan simple como construir tu sitio Hugo y transferir los archivos a tu host.

Asegúrate de que el parámetro `baseURL` en `hugo.toml` esté establecido a la URL completa hacia la raíz de tu sitio web (incluyendo cualquier subdominio o subcarpeta).

Luego construye tu sitio usando `hugo` y copia el contenido del directorio de salida a la raíz de tu servidor web y estarás listo. Por defecto, el directorio de salida se llama `public`.

_Si necesitas un proveedor de hosting, echa un vistazo a [Vultr](https://www.vultr.com/?ref=8957394-8H) o [DigitalOcean](https://m.do.co/c/36841235e565). Registrarte usando estos enlaces de afiliado te dará hasta $100 en crédito gratis para que puedas probar el servicio._
