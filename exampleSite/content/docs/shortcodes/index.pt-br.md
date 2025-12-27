---
title: "Shortcodes"
weight: 6
draft: false
description: "Todos os shortcodes disponíveis no Blowfish."
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "documentação"]
series: ["Documentação"]
series_order: 8
---

Além de todos os [shortcodes padrão do Hugo](https://gohugo.io/content-management/shortcodes/), o Blowfish adiciona alguns extras para funcionalidades adicionais.

## Alert

`alert` exibe seu conteúdo como uma caixa de mensagem estilizada dentro do seu artigo. É útil para chamar a atenção para informações importantes que você não quer que o leitor perca.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição |
| --- | --- |
| `icon` | **Opcional.** O ícone a ser exibido no lado esquerdo.<br>**Padrão:** `triangle-exclamation` (Confira o [shortcode icon](#icon) para mais detalhes sobre o uso de ícones.) |
| `iconColor` | **Opcional.** A cor do ícone em estilo CSS básico.<br>Pode ser valores hexadecimais (`#FFFFFF`) ou nomes de cores (`white`)<br>Por padrão escolhido com base no tema de cores atual. |
| `cardColor` | **Opcional.** A cor do fundo do cartão em estilo CSS básico.<br>Pode ser valores hexadecimais (`#FFFFFF`) ou nomes de cores (`white`)<br>Por padrão escolhido com base no tema de cores atual. |
| `textColor` | **Opcional.** A cor do texto em estilo CSS básico.<br>Pode ser valores hexadecimais (`#FFFFFF`) ou nomes de cores (`white`)<br>Por padrão escolhido com base no tema de cores atual. |
<!-- prettier-ignore-end -->

A entrada é escrita em Markdown, então você pode formatá-la como quiser.

**Exemplo 1:** Sem parâmetros

```md
{{</* alert */>}}
**Aviso!** Esta ação é destrutiva!
{{</* /alert */>}}
```

{{< alert >}}
**Aviso!** Esta ação é destrutiva!
{{< /alert >}}

**Exemplo 2:** Parâmetro não nomeado

```md
{{</* alert "twitter" */>}}
Não esqueça de me [seguir](https://twitter.com/nunocoracao) no Twitter.
{{</* /alert */>}}
```

{{< alert "twitter" >}}
Não esqueça de me [seguir](https://twitter.com/nunocoracao) no Twitter.
{{< /alert >}}

**Exemplo 3:** Parâmetros nomeados

```md
{{</* alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" */>}}
Isto é um erro!
{{</* /alert */>}}
```

{{< alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
Isto é um erro!
{{< /alert >}}

<br/><br/><br/>

## Admonition

Admonitions permitem que você insira caixas de chamada atraentes no seu conteúdo.

Admonitions servem um propósito similar ao shortcode alert, mas são implementadas via hooks de renderização do Hugo. A diferença principal é a sintaxe: admonitions usam sintaxe Markdown, tornando-as mais portáveis entre diferentes plataformas, enquanto shortcodes são específicos do Hugo. A sintaxe se assemelha aos alertas do GitHub:

```md
> [!NOTE]
> Uma admonition do tipo Note.

> [!TIP]+ Título personalizado
> Uma admonition recolhível com título personalizado.
```

> [!NOTE]
> Uma admonition do tipo Note.

> [!TIP]+ Título personalizado
> Uma admonition recolhível com título personalizado.

O sinal de alerta (`+` ou `-`) é opcional para controlar se a admonition está recolhida ou não. Note que o sinal de alerta só é compatível com o Obsidian.

> [!INFO]- Tipos suportados
> Os tipos válidos de admonition incluem [tipos de alerta do GitHub](https://github.blog/changelog/2023-12-14-new-markdown-extension-alerts-provide-distinctive-styling-for-significant-content/) e [tipos de callout do Obsidian](https://help.obsidian.md/callouts). Os tipos não diferenciam maiúsculas de minúsculas.
>
> **Tipos do GitHub:** `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`
> **Tipos do Obsidian:** `note`, `abstract`, `info`, `todo`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`

<br/><br/><br/>

## Article

`Article` incorporará um único artigo em um arquivo markdown. O `link` para o arquivo deve ser o `.RelPermalink` do arquivo a ser incorporado. Note que o shortcode não exibirá nada se estiver referenciando sua página pai. _Nota: se você está executando seu site em uma subpasta como o Blowfish (ou seja, /blowfish/), inclua esse caminho no link._

<!-- prettier-ignore-start -->
| Parâmetro | Descrição                                              |
| --------- | -------------------------------------------------------- |
| `link`    | **Obrigatório.** O `.RelPermalink` para o artigo alvo. |
| `showSummary` | **Opcional.** Um valor booleano indicando se deve mostrar o resumo do artigo. Se não definido, a configuração padrão do site será usada. |
| `compactSummary` | **Opcional.** Um valor booleano indicando se deve exibir o resumo em modo compacto. Padrão é false. |
<!-- prettier-ignore-end -->

**Exemplo:**

```md
{{</* article link="/docs/welcome/" showSummary=true compactSummary=true */>}}
```

{{< article link="/docs/welcome/" showSummary=true compactSummary=true >}}

<br/><br/><br/>

## Badge

`badge` exibe um componente de badge estilizado que é útil para exibir metadados.

**Exemplo:**

```md
{{</* badge */>}}
Novo artigo!
{{</* /badge */>}}
```

{{< badge >}}
Novo artigo!
{{< /badge >}}

<br/><br/><br/>

## Button

`button` exibe um componente de botão estilizado que pode ser usado para destacar uma ação principal. Tem três variáveis opcionais `href`, `target` e `rel` que podem ser usadas para especificar a URL, o destino e a relação do link.

**Exemplo:**

```md
{{</* button href="#button" target="_self" */>}}
Chamada para ação
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
Chamada para ação
{{< /button >}}

<br/><br/><br/>

## Carousel

`carousel` é usado para exibir múltiplas imagens de forma interativa e visualmente atraente. Isso permite que um usuário deslize através de múltiplas imagens enquanto ocupa apenas o espaço vertical de uma. Todas as imagens são exibidas usando a largura total do componente pai e a proporção de aspecto que você definir, com um padrão de `16:9`.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição |
| --- | --- |
| `images` | **Obrigatório.** Uma string regex para corresponder nomes ou URLs de imagens. |
| `aspectRatio` | **Opcional.** A proporção de aspecto para o carrossel. Por padrão `16-9`. |
| `interval` | **Opcional.** O intervalo para a rolagem automática, especificado em milissegundos. Padrão é `2000` (2s) |
<!-- prettier-ignore-end -->

**Exemplo 1:** Proporção de aspecto 16:9 e lista de imagens detalhada

```md
{{</* carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" */>}}
```

{{< carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" >}}

**Exemplo 2:** Proporção de aspecto 21:9 e lista de imagens com regex

```md
{{</* carousel images="gallery/*" aspectRatio="21-9" interval="2500" */>}}
```

{{< carousel images="gallery/*" aspectRatio="21-9" interval="2500" >}}

<br/><br/><br/>

## Chart

`chart` usa a biblioteca Chart.js para incorporar gráficos em artigos usando dados estruturados simples. Suporta vários [estilos de gráficos diferentes](https://www.chartjs.org/docs/latest/samples/) e tudo pode ser configurado a partir do shortcode. Simplesmente forneça os parâmetros do gráfico entre as tags do shortcode e o Chart.js fará o resto.

Consulte a [documentação oficial do Chart.js](https://www.chartjs.org/docs/latest/general/) para detalhes sobre sintaxe e tipos de gráficos suportados.

**Exemplo:**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['Tomate', 'Mirtilo', 'Banana', 'Limão', 'Laranja'],
  datasets: [{
    label: '# de votos',
    data: [12, 19, 3, 5, 3],
  }]
}
{{</* /chart */>}}
```

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

Você pode ver exemplos adicionais do Chart.js na página de [exemplos de gráficos]({{< ref "charts" >}}).

<br/><br/><br/>

## Code Importer

Este shortcode permite importar código de fontes externas facilmente sem copiar e colar.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **Obrigatório** URL para um arquivo de código hospedado externamente.     |
| `type`    | Tipo de código usado para destaque de sintaxe.                 |
| `startLine` | **Opcional** O número da linha para começar a importação.    |
| `endLine` | **Opcional** O número da linha para terminar a importação.        |

<!-- prettier-ignore-end -->

**Exemplo:**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" >}}

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18">}}

<br/><br/>

## Codeberg Card

`codeberg` permite que você vincule rapidamente um repositório Codeberg através da API do Codeberg, fornecendo atualizações em tempo real sobre estatísticas como estrelas e forks.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] repositório Codeberg no formato `usuário/repo` |
<!-- prettier-ignore-end -->

**Exemplo 1:**

```md
{{</* codeberg repo="forgejo/forgejo" */>}}
```

{{< codeberg repo="forgejo/forgejo" >}}

<br/><br/><br/>

## Figure

O Blowfish inclui um shortcode `figure` para adicionar imagens ao conteúdo. O shortcode substitui a funcionalidade base do Hugo para fornecer benefícios de desempenho adicionais.

Quando uma imagem fornecida é um recurso de página, ela será otimizada usando Hugo Pipes e escalada para fornecer imagens apropriadas para diferentes resoluções de dispositivos. Se um asset estático ou URL para uma imagem externa for fornecido, será incluído como está sem nenhum processamento de imagem pelo Hugo.

O shortcode `figure` aceita seis parâmetros:

<!-- prettier-ignore-start -->
| Parâmetro | Descrição |
| --- | --- |
| `src` | **Obrigatório.** O caminho/nome de arquivo local ou URL da imagem. Ao fornecer um caminho e nome de arquivo, o tema tentará localizar a imagem usando a seguinte ordem de busca: Primeiro, como um [recurso de página](https://gohugo.io/content-management/page-resources/) empacotado com a página; depois um asset no diretório `assets/`; e finalmente, uma imagem estática no diretório `static/`. |
| `alt` | [Descrição de texto alternativo](https://moz.com/learn/seo/alt-text) para a imagem. |
| `caption` | Markdown para a legenda da imagem, que será exibida abaixo da imagem. |
| `class` | Classes CSS adicionais para aplicar à imagem. |
| `href` | URL para a qual a imagem deve linkar. |
| `target` | O atributo target para a URL `href`. |
| `nozoom` | `nozoom=true` desativa a funcionalidade de "zoom" da imagem. Isso é especialmente útil em combinação com um link `href`. |
| `default` | Parâmetro especial para reverter ao comportamento padrão do `figure` do Hugo. Simplesmente forneça `default=true` e então use a [sintaxe normal de shortcode do Hugo](https://gohugo.io/content-management/shortcodes/#figure). |
<!-- prettier-ignore-end -->

O Blowfish também suporta conversão automática de imagens incluídas usando sintaxe Markdown padrão. Simplesmente use o seguinte formato e o tema cuidará do resto:

```md
![Texto alternativo](image.jpg "Legenda da imagem")
```

**Exemplo:**

```md
{{</* figure
    src="abstract.jpg"
    alt="Arte abstrata roxa"
    caption="Foto por [Jr Korpa](https://unsplash.com/@jrkorpa) no [Unsplash](https://unsplash.com/)"
    */>}}

<!-- OU -->

![Arte abstrata roxa](abstract.jpg "Foto por [Jr Korpa](https://unsplash.com/@jrkorpa) no [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="Abstract purple artwork" caption="Foto por [Jr Korpa](https://unsplash.com/@jrkorpa) no [Unsplash](https://unsplash.com/)" >}}

<br/><br/><br/>

## Forgejo Card

`forgejo` permite que você vincule rapidamente um repositório Forgejo através da API do Forgejo, fornecendo atualizações em tempo real sobre estatísticas como estrelas e forks.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] repositório Forgejo no formato `usuário/repo`|
| `server`  | [String] URL do servidor como `https://v11.next.forgejo.org`|
<!-- prettier-ignore-end -->

**Exemplo 1:**

```md
{{</* forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" */>}}
```

{{< forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" >}}

<br/><br/><br/>

## Gallery

`gallery` permite que você exiba múltiplas imagens de uma vez, de forma responsiva com layouts mais variados e interessantes.

Para adicionar imagens à galeria, use tags `img` para cada imagem e adicione `class="grid-wXX"` para que a galeria possa identificar a largura da coluna para cada imagem. As larguras disponíveis por padrão começam em 10% e vão até 100% em incrementos de 5%. Por exemplo, para definir a largura em 65%, defina a classe como `grid-w65`. Além disso, larguras para 33% e 66% também estão disponíveis para construir galerias de 3 colunas. Você também pode aproveitar os indicadores responsivos do Tailwind para ter uma grade responsiva.

**Exemplo 1: Galeria normal**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}

<br/><br/><br/>

**Exemplo 2: Galeria responsiva**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{< /gallery >}}

<br/><br/><br/>

## Gist

O shortcode `gist` permite que você incorpore um GitHub Gist diretamente no seu conteúdo especificando o usuário do Gist, ID e opcionalmente um arquivo específico.

| Parâmetro      | Descrição                                                        |
| -------------- | ------------------------------------------------------------------ |
| `[0]`          | [String] Nome de usuário do GitHub                                           |
| `[1]`          | [String] ID do Gist                                                   |
| `[2]` (opcional)| [String] Nome do arquivo dentro do Gist para incorporar (opcional)             |

**Exemplo 1: Incorporar Gist inteiro**

```md
{{</* gist "octocat" "6cad326836d38bd3a7ae" */>}}
````

{{< gist "octocat" "6cad326836d38bd3a7ae" >}}

**Exemplo 2: Incorporar arquivo específico do Gist**

```md
{{</* gist "rauchg" "2052694" "README.md" */>}}
```

{{< gist "rauchg" "2052694" "README.md" >}}

<br/><br/><br/>

## Gitea Card

`gitea` permite que você vincule rapidamente um repositório Gitea através da API do Gitea, fornecendo atualizações em tempo real sobre estatísticas como estrelas e forks.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] repositório Gitea no formato `usuário/repo`  |
| `server`  | [String] URL do servidor como `https://git.fsfe.org`       |
<!-- prettier-ignore-end -->

**Exemplo 1:**

```md
{{</* gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" */>}}
```

{{< gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" >}}

<br/><br/><br/>

## GitHub Card

`github` permite que você vincule rapidamente um repositório GitHub, enquanto exibe e atualiza em tempo real as estatísticas sobre ele, como o número de estrelas e forks.

<!-- prettier-ignore-start -->
| Parâmetro       | Descrição                                                   |
|-----------------|---------------------------------------------------------------|
| `repo`          | [String] repositório GitHub no formato `usuário/repo`         |
| `showThumbnail` | **Opcional** [boolean] exibe uma miniatura para o repositório |
<!-- prettier-ignore-end -->

**Exemplo 1:**

```md
{{</* github repo="nunocoracao/blowfish" showThumbnail=true */>}}
```

{{< github repo="nunocoracao/blowfish" showThumbnail=true >}}

<br/><br/><br/>

## GitLab Card

`gitlab` permite que você vincule rapidamente um Projeto GitLab (jargão do GitLab para repositório).
Ele exibe estatísticas em tempo real sobre ele, como o número de estrelas e forks.
Diferente do `github`, não pode exibir a linguagem de programação principal de um projeto.
Por fim, uma URL de instância GitLab personalizada pode ser fornecida, desde que o endpoint `api/v4/projects/` esteja disponível, tornando este shortcode compatível com a maioria dos deployments auto-hospedados / empresariais.

<!-- prettier-ignore-start -->
| Parâmetro   | Descrição                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `projectID` | [String] ID numérico do projeto GitLab                                       |
| `baseURL`   | [String] URL opcional da instância GitLab, padrão é `https://gitlab.com/` |
<!-- prettier-ignore-end -->

**Exemplo 1:**

```md
{{</* gitlab projectID="278964" */>}}
```

{{< gitlab projectID="278964" >}}

<br/><br/><br/>

## Hugging Face Card

`huggingface` permite que você vincule rapidamente um modelo ou dataset do Hugging Face, exibindo informações em tempo real como o número de likes e downloads, junto com tipo e descrição.

| Parâmetro  | Descrição                                                    |
|------------|----------------------------------------------------------------|
| `model`    | [String] Modelo do Hugging Face no formato `usuário/modelo` |
| `dataset`  | [String] Dataset do Hugging Face no formato `usuário/dataset` |

**Nota:** Use o parâmetro `model` ou `dataset`, não ambos.

**Exemplo 1 (Modelo):**

```md
{{</* huggingface model="google-bert/bert-base-uncased" */>}}
```

{{< huggingface model="google-bert/bert-base-uncased" >}}

**Exemplo 2 (Dataset):**

```md
{{</* huggingface dataset="stanfordnlp/imdb" */>}}
```

{{< huggingface dataset="stanfordnlp/imdb" >}}

<br/><br/><br/>

## Icon

`icon` exibe um ícone SVG e recebe o nome do ícone como seu único parâmetro. O ícone é escalado para corresponder ao tamanho do texto atual.

**Exemplo:**

```md
{{</* icon "github" */>}}
```

**Saída:** {{< icon "github" >}}

Os ícones são preenchidos usando pipelines do Hugo, o que os torna muito flexíveis. O Blowfish inclui vários ícones integrados para redes sociais, links e outros propósitos. Confira a página de [exemplos de ícones]({{< ref "samples/icons" >}}) para uma lista completa dos ícones suportados.

Ícones personalizados podem ser adicionados fornecendo seus próprios assets de ícones no diretório `assets/icons/` do seu projeto. O ícone pode então ser referenciado no shortcode usando o nome do arquivo SVG sem a extensão `.svg`.

Ícones também podem ser usados em partials chamando o [partial icon]({{< ref "partials#icon" >}}).

<br/><br/><br/>

## KaTeX

O shortcode `katex` pode ser usado para adicionar expressões matemáticas ao conteúdo de artigos usando o pacote KaTeX. Consulte a referência online de [funções TeX suportadas](https://katex.org/docs/supported.html) para a sintaxe disponível.

Para incluir expressões matemáticas em um artigo, simplesmente coloque o shortcode em qualquer lugar do conteúdo. Ele só precisa ser incluído uma vez por artigo e o KaTeX renderizará automaticamente qualquer markup nessa página. Tanto a notação inline quanto em bloco são suportadas.

A notação inline pode ser gerada envolvendo a expressão com os delimitadores `\(` e `\)`. Alternativamente, a notação em bloco pode ser gerada usando delimitadores `$$`.

**Exemplo:**

```md
{{</* katex */>}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)
```

{{< katex >}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)

Confira a página de [exemplos de notação matemática]({{< ref "mathematical-notation" >}}) para mais exemplos.

<br/><br/><br/>

## Keyword

O componente `keyword` pode ser usado para destacar visualmente certas palavras ou frases importantes, por exemplo, habilidades profissionais, etc. O shortcode `keywordList` pode ser usado para agrupar múltiplos itens `keyword`. Cada item pode ter as seguintes propriedades.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição                             |
| --------- | --------------------------------------- |
| `icon`    | Ícone opcional a ser usado no keyword |
<!-- prettier-ignore-end -->

A entrada é escrita em Markdown, então você pode formatá-la como quiser.

**Exemplo 1:**

```md
{{</* keyword */>}} *Super* habilidade {{</* /keyword */>}}
```

{{< keyword >}} _Super_ habilidade {{< /keyword >}}

**Exemplo 2:**

```md
{{</* keywordList */>}}
{{</* keyword icon="github" */>}} Lorem ipsum dolor. {{</* /keyword */>}}
{{</* keyword icon="code" */>}} Habilidade **importante** {{</* /keyword */>}}
{{</* /keywordList */>}}

{{</* keyword */>}} Habilidade *independente* {{</* /keyword */>}}
```

{{< keywordList >}}
{{< keyword icon="github" >}} Lorem ipsum dolor {{< /keyword >}}
{{< keyword icon="code" >}} Habilidade **importante** {{< /keyword >}}
{{< /keywordList >}}
{{< keyword >}} Habilidade _independente_ {{< /keyword >}}

<br/><br/><br/>

## Lead

`lead` é usado para dar ênfase ao início de um artigo. Pode ser usado para estilizar uma introdução ou para chamar a atenção para uma informação importante. Simplesmente envolva qualquer conteúdo Markdown no shortcode `lead`.

**Exemplo:**

```md
{{</* lead */>}}
Quando a vida te der limões, faça limonada.
{{</* /lead */>}}
```

{{< lead >}}
Quando a vida te der limões, faça limonada.
{{< /lead >}}

<br/><br/><br/>

## List

`List` exibirá uma lista de artigos recentes. Este shortcode requer um valor limite para restringir a lista. Além disso, suporta um `where` e um `value` para filtrar artigos por seus parâmetros. Note que este shortcode não exibirá sua página pai, mas ela contará para o valor limite.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição |
| --- | --- |
| `limit` | **Obrigatório.** O número de artigos recentes a exibir. |
| `title` | Título opcional para a lista, padrão é `Recent` |
| `cardView` | Visualização em cartão opcional habilitada para a lista, padrão é `false` |
| `where` | A variável a ser usada para a consulta de artigos, por exemplo `Type` |
| `value` | O valor que precisará corresponder ao parâmetro definido em `where` para a consulta de artigos, por exemplo para `where` == `Type` um valor válido poderia ser `sample` |

{{< alert >}}
Os valores `where` e `value` são usados na seguinte consulta `where .Site.RegularPages $where $value` no código do shortcode. Consulte os [docs do Hugo](https://gohugo.io/methods/page/) para saber mais sobre quais parâmetros estão disponíveis.
{{</ alert >}}

<!-- prettier-ignore-end -->

**Exemplo #1:**

```md
{{</* list limit=2 */>}}
```

{{< list limit=2 >}}

**Exemplo #2:**

```md
{{</* list title="Amostras" cardView=true limit=6 where="Type" value="sample" */>}}
```

{{< list title="Samples" cardView=true limit=6 where="Type" value="sample">}}

<br/><br/><br/>

## LTR/RTL

`ltr` e `rtl` permitem que você misture seus conteúdos. Muitos usuários de idiomas RTL querem incluir partes do conteúdo em LTR. Usando este shortcode você poderá fazer isso, e ao aproveitar `%` como o delimitador mais externo no shortcode [Hugo shortcodes](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown), qualquer markdown dentro será renderizado normalmente.

**Exemplo:**

```md
- Esta é uma lista markdown.
- Por padrão direção LTR
{{%/* rtl */%}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{%/* /rtl */%}}
```

- Esta é uma lista markdown.
- Por padrão direção LTR
{{% rtl %}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{% /rtl %}}

<br/><br/><br/>

## Markdown Importer

Este shortcode permite que você importe arquivos markdown de fontes externas. Isso é útil para incluir conteúdo de outros repositórios ou sites sem ter que copiar e colar o conteúdo.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **Obrigatório** URL para um arquivo markdown hospedado externamente. |

<!-- prettier-ignore-end -->

**Exemplo:**

```md
{{</* mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" */>}}

```

{{< mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" >}}

<br/><br/>

## Mermaid

`mermaid` permite que você desenhe diagramas e visualizações detalhadas usando texto. Ele usa o Mermaid por baixo e suporta uma ampla variedade de diagramas, gráficos e outros formatos de saída.

Simplesmente escreva sua sintaxe Mermaid dentro do shortcode `mermaid` e deixe o plugin fazer o resto.

Consulte a [documentação oficial do Mermaid](https://mermaid-js.github.io/) para detalhes sobre sintaxe e tipos de diagramas suportados.

**Exemplo:**

```md
{{</* mermaid */>}}
graph LR;
A[Limões]-->B[Limonada];
B-->C[Lucro]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{< /mermaid >}}

Você pode ver exemplos adicionais do Mermaid na página de [exemplos de diagramas e fluxogramas]({{< ref "diagrams-flowcharts" >}}).

<br/><br/><br/>

## Swatches

`swatches` exibe um conjunto de até três cores diferentes para mostrar elementos de cor como uma paleta de cores. Este shortcode recebe os códigos `HEX` de cada cor e cria os elementos visuais para cada uma.

**Exemplo**

```md
{{</* swatches "#64748b" "#3b82f6" "#06b6d4" */>}}
```

**Saída**
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

<br/><br/><br/>

## Tabs

O shortcode `tabs` é comumente usado para apresentar diferentes variantes de uma etapa específica. Por exemplo, pode ser usado para mostrar como instalar o VS Code em diferentes plataformas.

**Exemplo**

`````md
{{</* tabs */>}}

    {{</* tab label="Windows" */>}}
    Instalar usando Chocolatey:

    ```pwsh
    choco install vscode.install
    ```

    ou instalar usando WinGet

    ```pwsh
    winget install -e --id Microsoft.VisualStudioCode
    ```
    {{</* /tab */>}}

    {{</* tab label="macOS" */>}}
    ```bash
    brew install --cask visual-studio-code
    ```
    {{</* /tab */>}}

    {{</* tab label="Linux" */>}}
    Veja a [documentação](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux).
    {{</* /tab */>}}

{{</* /tabs */>}}
`````

**Saída**

{{< tabs >}}

    {{< tab label="Windows" >}}
    Instalar usando Chocolatey:

    ```pwsh
    choco install vscode.install
    ```

    ou instalar usando WinGet

    ```pwsh
    winget install -e --id Microsoft.VisualStudioCode
    ```
    {{< /tab >}}

    {{< tab label="macOS" >}}
    ```bash
    brew install --cask visual-studio-code
    ```
    {{< /tab >}}

    {{< tab label="Linux" >}}
    Veja a [documentação](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux).
    {{< /tab >}}

{{< /tabs >}}

<br/><br/><br/>

## Timeline

O `timeline` cria uma linha do tempo visual que pode ser usada em diferentes casos de uso, por exemplo, experiência profissional, conquistas de um projeto, etc. O shortcode `timeline` depende do sub-shortcode `timelineItem` para definir cada item dentro da linha do tempo principal. Cada item pode ter as seguintes propriedades.

<!-- prettier-ignore-start -->
| Parâmetro   | Descrição                                  |
| ----------- | -------------------------------------------- |
| `md`        | Renderizar o conteúdo como Markdown (true/false)  |
| `icon`      | O ícone a ser usado nos visuais da linha do tempo  |
| `header`    | Cabeçalho para cada entrada                        |
| `badge`     | Texto para colocar dentro do badge superior direito     |
| `subheader` | Subcabeçalho da entrada                            |

<!-- prettier-ignore-end -->

**Exemplo:**

```md
{{</* timeline */>}}

{{</* timelineItem icon="github" header="Cabeçalho" badge="Teste badge" subheader="Subcabeçalho" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</* /timelineItem */>}}


{{</* timelineItem icon="code" header="Outro ótimo cabeçalho" badge="data - presente" subheader="Ótimo subcabeçalho" */>}}
Com código HTML
<ul>
  <li>Café</li>
  <li>Chá</li>
  <li>Leite</li>
</ul>
{{</* /timelineItem */>}}

{{</* timelineItem icon="star" header="Shortcodes" badge="INCRÍVEL" */>}}
Com outros shortcodes
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="Outro ótimo cabeçalho"*/>}}
{{</* github repo="nunocoracao/blowfish" */>}}
{{</* /timelineItem */>}}

{{</* /timeline */>}}
```

{{< timeline >}}

{{< timelineItem icon="github" header="header" badge="badge test" subheader="subheader" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</ timelineItem >}}

{{< timelineItem icon="code" header="Another Awesome Header" badge="date - present" subheader="Awesome Subheader">}}
Com código HTML
<ul>
  <li>Café</li>
  <li>Chá</li>
  <li>Leite</li>
</ul>
{{</ timelineItem >}}

{{< timelineItem icon="star" header="Shortcodes" badge="AWESOME" >}}
Com outros shortcodes
{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}
{{</ timelineItem >}}
{{< timelineItem icon="code" header="Another Awesome Header">}}
{{< github repo="nunocoracao/blowfish" >}}
{{</ timelineItem >}}
{{</ timeline >}}

<br/><br/><br/>

## TypeIt

[TypeIt](https://www.typeitjs.com) é a ferramenta JavaScript mais versátil para criar efeitos de máquina de escrever no planeta. Com uma configuração simples, permite que você digite strings simples ou múltiplas que fazem quebras de linha, apagam e substituem umas às outras, e pode até lidar com strings que contêm HTML complexo.

O Blowfish implementa um subconjunto das funcionalidades do TypeIt usando um `shortcode`. Escreva seu texto dentro do shortcode `typeit` e use os seguintes parâmetros para configurar o comportamento desejado.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição |
| --- | --- |
| `tag` | [String] Tag `html` que será usada para renderizar as strings. |
| `classList` | [String] Lista de classes `css` para aplicar ao elemento `html`. |
| `initialString` | [String] String inicial que aparecerá escrita e será substituída. |
| `speed` | [number] Velocidade de digitação, medida em milissegundos entre cada passo. |
| `lifeLike` | [boolean] Torna o ritmo de digitação irregular, como se uma pessoa real estivesse fazendo. |
| `startDelay` | [number] A quantidade de tempo antes do plugin começar a digitar após ser inicializado. |
| `breakLines` | [boolean] Se múltiplas strings são impressas uma sobre a outra (true), ou se são apagadas e substituídas umas pelas outras (false). |
| `waitUntilVisible` | [boolean] Determina se a instância começará quando carregada ou apenas quando o elemento alvo se tornar visível no viewport. O padrão é `true` |
| `loop` | [boolean] Se suas strings serão continuamente repetidas após a conclusão |

<!-- prettier-ignore-end -->

**Exemplo 1:**

```md
{{</* typeit */>}}
Lorem ipsum dolor sit amet
{{</* /typeit */>}}
```

{{< typeit >}}
Lorem ipsum dolor sit amet
{{< /typeit >}}

**Exemplo 2:**

```md
{{</* typeit
  tag=h1
  lifeLike=true
*/>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{</* /typeit */>}}
```

{{< typeit
  tag=h1
  lifeLike=true
>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{< /typeit >}}

**Exemplo 3:**

```md
{{</* typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
*/>}}
"Francamente, minha querida, eu não dou a mínima." E o Vento Levou (1939)
"Vou fazer uma oferta que ele não pode recusar." O Poderoso Chefão (1972)
"Toto, tenho a sensação de que não estamos mais no Kansas." O Mágico de Oz (1939)
{{</* /typeit */>}}
```

{{< typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
>}}
"Frankly, my dear, I don't give a damn." Gone with the Wind (1939)
"I'm gonna make him an offer he can't refuse." The Godfather (1972)
"Toto, I've a feeling we're not in Kansas anymore." The Wizard of Oz (1939)
{{< /typeit >}}

<br/><br/><br/>

## Video

Blowfish inclui um shortcode `video` para incorporar vídeos locais ou externos no conteúdo. O shortcode renderiza um contêiner `<figure>` com um player de vídeo responsivo e uma legenda opcional.

O shortcode `video` aceita os seguintes parâmetros:

<!-- prettier-ignore-start -->
| Parâmetro | Descrição |
| --- | --- |
| `src` | **Obrigatório.** URL do vídeo ou caminho local. Ordem de busca local: recurso da página → `assets/` → `static/`. |
| `poster` | Imagem de pôster opcional (URL ou caminho local). Se omitida, o shortcode tenta uma imagem com o mesmo nome no bundle da página. |
| `caption` | Legenda opcional em Markdown exibida abaixo do vídeo. |
| `autoplay` | `true`/`false`. Ativa a reprodução automática quando `true`. Padrão: `false`. |
| `loop` | `true`/`false`. Reproduz em loop quando `true`. Padrão: `false`. |
| `muted` | `true`/`false`. Silencia quando `true`. Padrão: `false`. |
| `controls` | `true`/`false`. Mostra os controles de reprodução padrão do navegador quando `true`. Padrão: `true`. |
| `playsinline` | `true`/`false`. Reprodução inline em dispositivos móveis quando `true`. Padrão: `true`. |
| `preload` | `metadata` (carrega informações), `none` (economiza banda) ou `auto` (pré-carrega mais). Padrão: `metadata`. |
| `start` | Tempo de início opcional em segundos. |
| `end` | Tempo de fim opcional em segundos. |
| `ratio` | Proporção reservada para o player. Suporta `16/9`, `4/3`, `1/1` ou `W/H` personalizado. Padrão: `16/9`. |
| `fit` | Como o vídeo se ajusta à proporção: `contain` (sem corte), `cover` (corta para preencher), `fill` (estica). Padrão: `contain`. |
<!-- prettier-ignore-end -->

Se o navegador não puder reproduzir o vídeo, o player exibirá uma mensagem mínima em inglês com um link para download.

**Exemplo:**

```md
{{</* video
    src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
    poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
    caption="**Demo de domínio público** — vídeo e pôster CC0."
    loop=true
    muted=true
*/>}}
```

{{< video
  src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
  caption="**Demo de domínio público** — vídeo e pôster CC0."
  loop=true
  muted=true
>}}

<br/><br/><br/>

## Youtube Lite

Um atalho para incorporar vídeos do YouTube usando a biblioteca [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed). Esta biblioteca é uma alternativa leve aos embeds padrão do YouTube, e é projetada para ser mais rápida e eficiente.

<!-- prettier-ignore-start -->
| Parâmetro | Descrição                                  |
| --------- | -------------------------------------------- |
| `id`      | [String] ID do vídeo do YouTube para incorporar.          |
| `label`   | [String] Rótulo para o vídeo                 |
| `params`  | [String] Parâmetros extras para reprodução do vídeo |
<!-- prettier-ignore-end -->

**Exemplo 1:**

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Demo do Blowfish-tools" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" >}}

**Exemplo 2:**

Você pode usar todos os [parâmetros do player](https://developers.google.com/youtube/player_parameters#Parameters) do YouTube para a variável `params`, como demonstrado abaixo:

> Este vídeo começará após 130 segundos (2m10)

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Demo do Blowfish-tools" params="start=130" */>}}
```

> Este vídeo não terá controles de interface, começará a 130 segundos e parará 10 segundos depois.

Para concatenar múltiplas opções como mostrado abaixo, você precisa adicionar o caractere `&` entre elas.

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Demo do Blowfish-tools" params="start=130&end=10&controls=0" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130&end=10&controls=0" >}}

Mais informações podem ser encontradas no [repo do GitHub do youtubeLite](https://github.com/paulirish/lite-youtube-embed/blob/master/readme.md#custom-player-parameters) e na página de [parâmetros do player](https://developers.google.com/youtube/player_parameters#Parameters) do YouTube.
