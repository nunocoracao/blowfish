---
title: "Atualize um site Hugo existente para o Blowfish 3"
description: "Passe um site Blowfish existente para a versão 3 sem alterações incompatíveis na configuração."
date: 2026-08-30
lastmod: 2026-08-30
tags: ["blowfish", "hugo", "migration", "v3"]
showauthor: false
authors: ["nunocoracao"]
---

{{< lead >}}
O Blowfish 3 é retrocompatível. Os sites existentes podem ser atualizados sem reescrever a configuração ou o conteúdo.
{{< /lead >}}

## Antes de atualizar

Faça commit do estado atual do seu site e certifique-se de que a versão do Hugo se encontra dentro do intervalo declarado pelo Blowfish. Se tiver ficheiros personalizados dentro do diretório do tema, mova-os primeiro para os diretórios `assets/` ou `layouts/` do seu site para que as atualizações não os substituam.

## Atualize a sua instalação

### Módulo Hugo

Atualize o caminho do módulo em `config/_default/module.toml` para incluir `/v3` e, depois, atualize as dependências:

```toml
[[imports]]
path = "github.com/nunocoracao/blowfish/v3"
```

```shell
hugo mod get -u
```

### Submódulo Git

```shell
git submodule update --remote --merge
```

### Instalação manual

Descarregue a versão mais recente, substitua `themes/blowfish/` e mantenha a configuração do seu site em `config/_default/`.

## Verifique o resultado

Execute `hugo server`, verifique a sua página inicial e um artigo representativo e publique como habitualmente. As novas funcionalidades do Blowfish 3 são opcionais, pelo que o seu site existente deverá ser apresentado como antes.

Para um novo site, utilize `npx blowfish-tools new <site>` e siga o [guia de instalação]({{< ref "docs/installation" >}}).
