---
title: "Atualize um site Hugo existente para o Blowfish 3"
description: "Leve um site Blowfish existente para a versão 3 sem mudanças incompatíveis na configuração."
date: 2026-08-30
lastmod: 2026-08-30
tags: ["blowfish", "hugo", "migration", "v3"]
showauthor: false
authors: ["nunocoracao"]
---

{{< lead >}}
O Blowfish 3 é compatível com versões anteriores. Sites existentes podem ser atualizados sem reescrever a configuração ou o conteúdo.
{{< /lead >}}

## Antes de atualizar

Faça commit do seu site atual e certifique-se de que a versão do Hugo esteja dentro do intervalo declarado pelo Blowfish. Se você tiver arquivos personalizados no diretório do tema, mova-os primeiro para os diretórios `assets/` ou `layouts/` do seu site, para que as atualizações não os sobrescrevam.

## Atualize sua instalação

### Módulo Hugo

Atualize o caminho do módulo em `config/_default/module.toml` para incluir `/v3` e depois atualize as dependências:

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

Baixe a versão mais recente, substitua `themes/blowfish/` e mantenha a configuração do seu site em `config/_default/`.

## Verifique o resultado

Execute `hugo server`, verifique sua página inicial e um artigo representativo e publique como de costume. Os novos recursos do Blowfish 3 são opcionais, então seu site existente deve ser renderizado como antes.

Para um site novo, use `npx blowfish-tools new <site>` e siga o [guia de instalação]({{< ref "docs/installation" >}}).
