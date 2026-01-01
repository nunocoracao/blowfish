---
title: "Instalación"
weight: 2
draft: false
description: "Cómo instalar el tema Blowfish."
slug: "installation"
tags: ["instalación", "documentación"]
series: ["Documentación"]
series_order: 2
---

Simplemente sigue el procedimiento estándar de Hugo [Inicio Rápido](https://gohugo.io/getting-started/quick-start/) para ponerte en marcha rápidamente.

Las instrucciones de instalación detalladas se encuentran a continuación. También están disponibles instrucciones para [actualizar el tema](#instalación-de-actualizaciones).

## Instalación

Estas instrucciones te ayudarán a empezar con Hugo y Blowfish desde un estado completamente vacío. La mayoría de las dependencias mencionadas en esta guía se pueden instalar utilizando el gestor de paquetes de tu elección para tu plataforma.

### Instalar Hugo

Si nunca has usado Hugo antes, necesitarás [instalarlo en tu máquina local](https://gohugo.io/getting-started/installing). Puedes verificar si ya está instalado ejecutando el comando `hugo version`.

{{< alert >}}
Asegúrate de estar usando **Hugo versión 0.141.0** o posterior, ya que el tema aprovecha algunas de las últimas características de Hugo.
{{< /alert >}}

Puedes encontrar instrucciones de instalación detalladas para tu plataforma en la [documentación de Hugo](https://gohugo.io/getting-started/installing).

### Blowfish Tools (recomendado)

Acabamos de lanzar una nueva herramienta CLI para ayudarte a empezar con Blowfish. Creará un nuevo proyecto Hugo, instalará el tema y configurará los archivos de configuración del tema por ti. Todavía está en beta, así que por favor [reporta cualquier problema que encuentres](https://github.com/nunocoracao/blowfish-tools).

Instala la herramienta CLI globalmente usando npm (u otro gestor de paquetes):
```shell
npx blowfish-tools
```
o

```shell
npm i -g blowfish-tools
```

Luego ejecuta el comando `blowfish-tools` para iniciar una ejecución interactiva que te guiará a través de los casos de uso de creación y configuración.
```shell
blowfish-tools
```

También puedes ejecutar el comando `blowfish-tools new` para crear un nuevo proyecto Hugo e instalar el tema de una sola vez. Consulta la ayuda del CLI para más información.
```shell
blowfish-tools new mynewsite
```

Aquí hay un video corto de lo rápido que es empezar con Blowfish usando la herramienta CLI:

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SgXhGb-7QbU?si=ce44baicuQ6zMeXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Instalación sin CLI

#### Crear un nuevo sitio

Ejecuta el comando `hugo new site mywebsite` para crear un nuevo sitio Hugo en un directorio llamado `mywebsite`.

Ten en cuenta que puedes nombrar el directorio del proyecto como quieras, pero las instrucciones a continuación asumen que se llama `mywebsite`. Si usas un nombre diferente, asegúrate de sustituirlo en consecuencia.

#### Descargar el tema Blowfish

Hay varias formas diferentes de instalar el tema Blowfish en tu sitio Hugo. De la más fácil a la más difícil de instalar y mantener, son:

- [Submódulo Git](#instalación-con-git) (recomendado)
- [Módulo Hugo](#instalación-con-hugo)
- [Copia manual de archivos](#instalación-manual)

Si no estás seguro, elige el método del submódulo Git.

#### Instalación con Git

Este método es el más rápido y fácil para mantener el tema actualizado. Además de **Hugo** y **Go**, también necesitarás asegurarte de tener **Git** instalado en tu máquina local.

Cambia al directorio de tu sitio Hugo (que creaste arriba), inicializa un nuevo repositorio `git` y añade Blowfish como submódulo.

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

Luego continúa para [configurar los archivos de configuración del tema](#configurar-archivos-de-configuración-del-tema).

#### Instalación con Hugo

Para este método usarás Hugo para gestionar tus temas. Hugo usa **Go** para inicializar y gestionar módulos, así que asegúrate de tener `go` instalado antes de continuar.

1. [Descarga](https://golang.org/dl/) e instala Go. Puedes verificar si ya está instalado usando el comando `go version`.

   {{< alert >}}
   Asegúrate de estar usando **Go versión 1.12** o posterior, ya que Hugo lo requiere para que los módulos funcionen correctamente.
   {{< /alert >}}

2. Desde el directorio de tu proyecto Hugo (que creaste arriba), inicializa los módulos para tu sitio:

   ```shell
   # Si estás gestionando tu proyecto en GitHub
   hugo mod init github.com/<username>/<repo-name>

   # Si estás gestionando tu proyecto localmente
   hugo mod init my-project
   ```

3. Añade el tema a tu configuración creando un nuevo archivo `config/_default/module.toml` y añadiendo lo siguiente:

   ```toml
   [[imports]]
   disable = false
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. Inicia tu servidor usando `hugo server` y el tema se descargará automáticamente.
5. Continúa para [configurar los archivos de configuración del tema](#configurar-archivos-de-configuración-del-tema).

#### Instalación manual

1. Descarga la última versión del código fuente del tema.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Descargar desde Github{{< /button >}}

2. Extrae el archivo, renombra la carpeta a `blowfish` y muévela al directorio `themes/` dentro de la carpeta raíz de tu proyecto Hugo.
3. Continúa para [configurar los archivos de configuración del tema](#configurar-archivos-de-configuración-del-tema).

#### Configurar archivos de configuración del tema

En la carpeta raíz de tu sitio, elimina el archivo `hugo.toml` que fue generado por Hugo. Copia los archivos de configuración `*.toml` del tema en tu carpeta `config/_default/`. Esto asegurará que tengas todas las configuraciones correctas del tema y te permitirá personalizar fácilmente el tema según tus necesidades.

{{< alert >}}
**Nota:** ¡No debes sobrescribir el archivo `module.toml` si ya existe uno en tu proyecto!
{{< /alert >}}

Dependiendo de cómo instalaste el tema, encontrarás los archivos de configuración del tema en diferentes lugares:

- **Módulos Hugo:** En el directorio de caché de Hugo, o [descarga una copia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) desde GitHub
- **Submódulo Git o instalación manual:** `themes/blowfish/config/_default`

Una vez que hayas copiado los archivos, tu carpeta de configuración debería verse así:

```shell
config/_default/
├─ hugo.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # si instalaste usando Módulos Hugo
└─ params.toml
```

{{< alert >}}
**Importante:** Si no usaste Módulos Hugo para instalar Blowfish, debes añadir la línea `theme = "blowfish"` en la parte superior de tu archivo `hugo.toml`.
{{< /alert >}}

### Siguientes pasos

La instalación básica de Blowfish está ahora completa. Continúa a la sección [Primeros Pasos]({{< ref "getting-started" >}}) para aprender más sobre la configuración del tema.

---

## Instalación de actualizaciones

De vez en cuando se publicarán [nuevas versiones](https://github.com/nunocoracao/blowfish/releases) que aplican correcciones y añaden nuevas funcionalidades al tema. Para aprovechar estos cambios, necesitarás actualizar los archivos del tema en tu sitio.

Cómo hagas esto dependerá del método de instalación que elegiste cuando se instaló originalmente el tema. Las instrucciones para cada método se encuentran a continuación.

- [Submódulo Git](#actualización-con-git)
- [Módulo Hugo](#actualización-con-hugo)
- [Copia manual de archivos](#actualización-manual)

### Actualización con Git

Los submódulos Git se pueden actualizar usando el comando `git`. Simplemente ejecuta el siguiente comando y la última versión del tema se descargará en tu repositorio local:

```shell
git submodule update --remote --merge
```

Una vez que el submódulo se haya actualizado, reconstruye tu sitio y verifica que todo funcione como se esperaba.

### Actualización con Hugo

Hugo hace que actualizar módulos sea super fácil. Simplemente cambia a tu directorio de proyecto y ejecuta el siguiente comando:

```shell
hugo mod get -u
```

Hugo actualizará automáticamente cualquier módulo requerido para tu proyecto. Lo hace inspeccionando tus archivos `module.toml` y `go.mod`. Si tienes problemas con la actualización, verifica que estos archivos todavía estén configurados correctamente.

Luego simplemente reconstruye tu sitio y verifica que todo funcione como se esperaba.

### Actualización manual

Actualizar Blowfish manualmente requiere que descargues la última copia del tema y reemplaces la versión antigua en tu proyecto.

{{< alert >}}
Ten en cuenta que cualquier personalización local que hayas hecho a los archivos del tema se perderá durante este proceso.
{{< /alert >}}

1. Descarga la última versión del código fuente del tema.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Descargar desde Github{{< /button >}}

2. Extrae el archivo, renombra la carpeta a `blowfish` y muévela al directorio `themes/` dentro de la carpeta raíz de tu proyecto Hugo. Necesitarás sobrescribir el directorio existente para reemplazar todos los archivos del tema.

3. Reconstruye tu sitio y verifica que todo funcione como se esperaba.
