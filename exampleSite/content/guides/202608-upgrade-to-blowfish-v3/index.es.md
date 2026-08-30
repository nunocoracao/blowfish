---
title: "Actualiza un sitio Hugo existente a Blowfish 3"
description: "Pasa un sitio existente de Blowfish a la versión 3 sin cambios de configuración incompatibles."
date: 2026-08-30
lastmod: 2026-08-30
tags: ["blowfish", "hugo", "migration", "v3"]
showauthor: false
authors: ["nunocoracao"]
---

{{< lead >}}
Blowfish 3 es compatible con versiones anteriores. Los sitios existentes pueden actualizarse sin reescribir su configuración ni su contenido.
{{< /lead >}}

## Antes de actualizar

Haz un commit de tu sitio actual y asegúrate de que tu versión de Hugo esté dentro del rango declarado por Blowfish. Si tienes archivos personalizados dentro del directorio del tema, muévelos primero a los directorios `assets/` o `layouts/` de tu sitio para que las actualizaciones no los sobrescriban.

## Actualiza tu instalación

### Módulo de Hugo

Actualiza la ruta del módulo en `config/_default/module.toml` para incluir `/v3` y luego actualiza las dependencias:

```toml
[[imports]]
path = "github.com/nunocoracao/blowfish/v3"
```

```shell
hugo mod get -u
```

### Submódulo de Git

```shell
git submodule update --remote --merge
```

### Instalación manual

Descarga la última versión, sustituye `themes/blowfish/` y conserva la configuración de tu sitio en `config/_default/`.

## Verifica el resultado

Ejecuta `hugo server`, revisa tu página de inicio y un artículo representativo, y luego publica como de costumbre. Las nuevas funciones de Blowfish 3 son opcionales, por lo que tu sitio existente debería mostrarse igual que antes.

Para un sitio nuevo, usa `npx blowfish-tools new <site>` y sigue la [guía de instalación]({{< ref "docs/installation" >}}).
