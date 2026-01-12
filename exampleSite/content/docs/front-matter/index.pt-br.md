---
title: "Front Matter"
weight: 7
draft: false
description: "Todas as variáveis de front matter disponíveis no Blowfish."
slug: "front-matter"
tags: ["front matter", "configuração", "documentação"]
series: ["Documentação"]
series_order: 7
---

Além dos [parâmetros de front matter padrão do Hugo](https://gohugo.io/content-management/front-matter/#front-matter-variables), o Blowfish adiciona várias opções adicionais para personalizar a apresentação de artigos individuais. Todos os parâmetros de front matter do tema disponíveis estão listados abaixo.

Os valores padrão dos parâmetros de front matter são herdados da [configuração base]({{< ref "configuration" >}}) do tema, então você só precisa especificar esses parâmetros no seu front matter quando quiser substituir o padrão.

<!-- prettier-ignore-start -->
| Nome | Padrão | Descrição |
| --- | --- | --- |
| `title` | _Não definido_ | O nome do artigo. |
| `description` | _Não definido_ | A descrição de texto do artigo. É usada nos metadados HTML. |
| `externalUrl` | _Não definido_ | Se este artigo está publicado em um site de terceiros, a URL para este artigo. Fornecer uma URL impedirá a geração de uma página de conteúdo e quaisquer referências a este artigo vincularão diretamente ao site de terceiros. |
| `editURL` | `article.editURL` | Quando `showEdit` está ativo, a URL para o link de edição. |
| `editAppendPath` | `article.editAppendPath` | Quando `showEdit` está ativo, se o caminho para o artigo atual deve ser anexado à URL definida em `editURL`. |
| `groupByYear` | `list.groupByYear` | Se os artigos são agrupados por ano nas páginas de lista. |
| `menu` | _Não definido_ | Quando um valor é fornecido, um link para este artigo aparecerá nos menus nomeados. Valores válidos são `main` ou `footer`. |
| `robots` | _Não definido_ | String que indica como os robôs devem tratar este artigo. Se definido, será exibido no cabeçalho da página. Consulte a [documentação do Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) para valores válidos. |
| `sharingLinks` | `article.sharingLinks` | Quais links de compartilhamento exibir no final deste artigo. Quando não fornecido ou definido como `false`, nenhum link será exibido. |
| `showAuthor` | `article.showAuthor` | Se a caixa do autor para o autor padrão é exibida no rodapé do artigo. |
| `showAuthorBottom` | `article.showAuthorBottom` | As caixas de autor são exibidas na parte inferior de cada página em vez do topo. |
| `authors` | _Não definido_ | Array de valores para autores, se definido substitui as configurações de `showAuthor` para a página ou site. Usado no recurso de múltiplos autores, consulte [esta página]({{< ref "multi-author" >}}) para mais detalhes sobre como configurar esse recurso. |
| `showAuthorsBadges` | `article.showAuthorsBadges` | Se as taxonomias de `authors` são exibidas no cabeçalho do artigo ou lista. Isso requer a configuração de `multiple authors` e a taxonomia `authors`. Consulte [esta página]({{< ref "multi-author" >}}) para mais detalhes. |
| `featureimage` | _Não definido_ | Link para a imagem de destaque |
| `featureimagecaption` | _Não definido_ | Legenda para a imagem de destaque. Exibida apenas no heroStyle `big` |
| `showHero` | `article.showHero` | Se a imagem em miniatura será mostrada como imagem hero dentro da página do artigo. |
| `heroStyle` | `article.heroStyle` | Estilo para exibir a imagem hero, opções válidas são: `basic`, `big`, `background`, `thumbAndBackground`. |
| `imagePosition` | _Não definido_ | Define a posição da imagem de destaque usando o atributo `object-position`. Valores válidos são como especificado na [documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position#try_it). |
| `showBreadcrumbs` | `article.showBreadcrumbs` ou `list.showBreadcrumbs` | Se as migalhas de pão são exibidas no cabeçalho do artigo ou lista. |
| `showDate` | `article.showDate` | Se a data do artigo é exibida. A data é definida usando o parâmetro `date`. |
| `showDateUpdated` | `article.showDateUpdated` | Se a data em que o artigo foi atualizado é exibida. A data é definida usando o parâmetro `lastmod`. |
| `showEdit` | `article.showEdit` | Se o link para editar o conteúdo do artigo deve ser exibido. |
| `showHeadingAnchors` | `article.showHeadingAnchors` | Se os links de âncora de cabeçalho são exibidos ao lado dos cabeçalhos neste artigo. |
| `showPagination` | `article.showPagination` | Se os links do artigo anterior/próximo são exibidos no rodapé do artigo. |
| `invertPagination` | `article.invertPagination` | Se a direção dos links do artigo anterior/próximo deve ser invertida. |
| `showReadingTime` | `article.showReadingTime` | Se o tempo de leitura do artigo é exibido. |
| `showTaxonomies` | `article.showTaxonomies` | Se as taxonomias relacionadas a este artigo são exibidas. |
| `showTableOfContents` | `article.showTableOfContents` | Se o índice é exibido neste artigo. |
| `showWordCount` | `article.showWordCount` | Se a contagem de palavras do artigo é exibida. |
| `showComments` | `article.showComments` | Se o [partial de comentários]({{< ref "partials#comments" >}}) é incluído após o rodapé do artigo. |
| `showSummary` | `list.showSummary` | Se o resumo do artigo deve ser exibido nas páginas de lista. |
| `showViews` | `article.showViews` | Se as visualizações do artigo devem ser exibidas em listas e visualização detalhada. Isso requer uma integração com Firebase. Consulte [esta página]({{< ref "firebase-views" >}}) para um guia sobre como integrar o Firebase. |
| `showLikes` | `article.showLikes` | Se os likes do artigo devem ser exibidos em listas e visualização detalhada. Isso requer uma integração com Firebase. Consulte [esta página]({{< ref "firebase-views" >}}) para um guia sobre como integrar o Firebase. |
| `seriesOpened` | `article.seriesOpened` | Se o módulo de série será exibido aberto por padrão ou não. |
| `series` | _Não definido_ | Array de séries às quais o artigo pertence, recomendamos usar apenas uma série por artigo. |
| `series_order` | _Não definido_ | Número do artigo dentro da série. |
| `summary` | Gerado automaticamente usando `summaryLength` (veja [configuração do site]({{< ref "configuration#site-configuration" >}})) | Quando `showSummary` está habilitado, esta é a string Markdown a ser usada como resumo para este artigo. |
| `xml` | `true` a menos que excluído por `sitemap.excludedKinds` | Se este artigo é incluído no arquivo `/sitemap.xml` gerado. |
| `excludeFromSearch` | `false` | Se este artigo deve ser excluído do sitemap e índice de pesquisa. Quando `true`, a página não aparecerá em `sitemap.xml` ou `index.json`. |
| `layoutBackgroundBlur` | `true` | Faz a imagem de fundo no heroStyle background desfocar com a rolagem |
| `layoutBackgroundHeaderSpace` | `true` | Adiciona espaço entre o cabeçalho e o corpo. |
| `externalLinkForceNewTab` | `article.externalLinkForceNewTab` | Links externos no markdown devem abrir em uma nova aba? |
<!-- prettier-ignore-end -->
