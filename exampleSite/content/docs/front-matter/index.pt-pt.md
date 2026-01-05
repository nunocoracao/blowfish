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

Os valores predefinidos dos parâmetros de front matter são herdados da [configuração base]({{< ref "configuration" >}}) do tema, pelo que só precisa de especificar estes parâmetros no seu front matter quando quiser substituir a predefinição.

<!-- prettier-ignore-start -->
| Nome | Predefinição | Descrição |
| --- | --- | --- |
| `title` | _Não definido_ | O nome do artigo. |
| `description` | _Não definido_ | A descrição de texto do artigo. É utilizada nos metadados HTML. |
| `externalUrl` | _Não definido_ | Se este artigo está publicado num site de terceiros, o URL para este artigo. Fornecer um URL impedirá a geração de uma página de conteúdo e quaisquer referências a este artigo vincularão diretamente ao site de terceiros. |
| `editURL` | `article.editURL` | Quando `showEdit` está ativo, o URL para a ligação de edição. |
| `editAppendPath` | `article.editAppendPath` | Quando `showEdit` está ativo, se o caminho para o artigo atual deve ser anexado ao URL definido em `editURL`. |
| `groupByYear` | `list.groupByYear` | Se os artigos são agrupados por ano nas páginas de lista. |
| `menu` | _Não definido_ | Quando um valor é fornecido, uma ligação para este artigo aparecerá nos menus nomeados. Valores válidos são `main` ou `footer`. |
| `robots` | _Não definido_ | String que indica como os robôs devem tratar este artigo. Se definido, será apresentado no cabeçalho da página. Consulte a [documentação do Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) para valores válidos. |
| `sharingLinks` | `article.sharingLinks` | Quais ligações de partilha apresentar no final deste artigo. Quando não fornecido ou definido como `false`, nenhuma ligação será apresentada. |
| `showAuthor` | `article.showAuthor` | Se a caixa do autor para o autor predefinido é apresentada no rodapé do artigo. |
| `showAuthorBottom` | `article.showAuthorBottom` | As caixas de autor são apresentadas na parte inferior de cada página em vez do topo. |
| `authors` | _Não definido_ | Array de valores para autores, se definido substitui as definições de `showAuthor` para a página ou site. Utilizado na funcionalidade de múltiplos autores, consulte [esta página]({{< ref "multi-author" >}}) para mais detalhes sobre como configurar essa funcionalidade. |
| `showAuthorsBadges` | `article.showAuthorsBadges` | Se as taxonomias de `authors` são apresentadas no cabeçalho do artigo ou lista. Isto requer a configuração de `multiple authors` e a taxonomia `authors`. Consulte [esta página]({{< ref "multi-author" >}}) para mais detalhes. |
| `featureimage` | _Não definido_ | Ligação para a imagem de destaque |
| `featureimagecaption` | _Não definido_ | Legenda para a imagem de destaque. Apresentada apenas no heroStyle `big` |
| `showHero` | `article.showHero` | Se a imagem em miniatura será mostrada como imagem hero dentro da página do artigo. |
| `heroStyle` | `article.heroStyle` | Estilo para apresentar a imagem hero, opções válidas são: `basic`, `big`, `background`, `thumbAndBackground`. |
| `imagePosition` | _Não definido_ | Define a posição da imagem de destaque utilizando o atributo `object-position`. Valores válidos são como especificado na [documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position#try_it). |
| `showBreadcrumbs` | `article.showBreadcrumbs` ou `list.showBreadcrumbs` | Se as migalhas de pão são apresentadas no cabeçalho do artigo ou lista. |
| `showDate` | `article.showDate` | Se a data do artigo é apresentada. A data é definida utilizando o parâmetro `date`. |
| `showDateUpdated` | `article.showDateUpdated` | Se a data em que o artigo foi atualizado é apresentada. A data é definida utilizando o parâmetro `lastmod`. |
| `showEdit` | `article.showEdit` | Se a ligação para editar o conteúdo do artigo deve ser apresentada. |
| `showHeadingAnchors` | `article.showHeadingAnchors` | Se as ligações de âncora de cabeçalho são apresentadas junto aos cabeçalhos neste artigo. |
| `showPagination` | `article.showPagination` | Se as ligações do artigo anterior/próximo são apresentadas no rodapé do artigo. |
| `invertPagination` | `article.invertPagination` | Se a direção das ligações do artigo anterior/próximo deve ser invertida. |
| `showReadingTime` | `article.showReadingTime` | Se o tempo de leitura do artigo é apresentado. |
| `showTaxonomies` | `article.showTaxonomies` | Se as taxonomias relacionadas com este artigo são apresentadas. |
| `showTableOfContents` | `article.showTableOfContents` | Se o índice é apresentado neste artigo. |
| `showWordCount` | `article.showWordCount` | Se a contagem de palavras do artigo é apresentada. |
| `showComments` | `article.showComments` | Se o [partial de comentários]({{< ref "partials#comments" >}}) é incluído após o rodapé do artigo. |
| `showSummary` | `list.showSummary` | Se o resumo do artigo deve ser apresentado nas páginas de lista. |
| `showViews` | `article.showViews` | Se as visualizações do artigo devem ser apresentadas em listas e visualização detalhada. Isto requer uma integração com Firebase. Consulte [esta página]({{< ref "firebase-views" >}}) para um guia sobre como integrar o Firebase. |
| `showLikes` | `article.showLikes` | Se os gostos do artigo devem ser apresentados em listas e visualização detalhada. Isto requer uma integração com Firebase. Consulte [esta página]({{< ref "firebase-views" >}}) para um guia sobre como integrar o Firebase. |
| `seriesOpened` | `article.seriesOpened` | Se o módulo de série será apresentado aberto por predefinição ou não. |
| `series` | _Não definido_ | Array de séries às quais o artigo pertence, recomendamos utilizar apenas uma série por artigo. |
| `series_order` | _Não definido_ | Número do artigo dentro da série. |
| `summary` | Gerado automaticamente utilizando `summaryLength` (veja [configuração do site]({{< ref "configuration#site-configuration" >}})) | Quando `showSummary` está ativado, esta é a string Markdown a ser utilizada como resumo para este artigo. |
| `xml` | `true` a menos que excluído por `sitemap.excludedKinds` | Se este artigo é incluído no ficheiro `/sitemap.xml` gerado. |
| `excludeFromSearch` | `false` | Se este artigo deve ser excluído do sitemap e índice de pesquisa. Quando `true`, a página não aparecerá em `sitemap.xml` ou `index.json`. |
| `layoutBackgroundBlur` | `true` | Faz a imagem de fundo no heroStyle background desfocar com a rolagem |
| `layoutBackgroundHeaderSpace` | `true` | Adiciona espaço entre o cabeçalho e o corpo. |
| `externalLinkForceNewTab` | `article.externalLinkForceNewTab` | Links externos no markdown devem abrir em uma nova aba? |
<!-- prettier-ignore-end -->
