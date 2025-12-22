---
title: "Configuração"
weight: 4
draft: false
description: "Todas as variáveis de configuração disponíveis no Blowfish."
slug: "configuration"
tags: ["configuração", "documentação"]
series: ["Documentação"]
series_order: 4
---

O Blowfish é um tema altamente personalizável e usa alguns dos recursos mais recentes do Hugo para simplificar sua configuração.

O tema vem com uma configuração padrão que permite você começar com um blog básico ou site estático.

{{< alert "fire" >}}
Acabamos de lançar uma ferramenta CLI para ajudá-lo a começar com o Blowfish. Ela ajudará com a instalação e configuração. Instale a ferramenta CLI globalmente usando:

```bash
npx blowfish-tools
```

{{< /alert >}}

> Os arquivos de configuração incluídos com o tema são fornecidos no formato TOML, pois é a sintaxe padrão do Hugo. Sinta-se à vontade para converter sua configuração para YAML ou JSON, se desejar.

A configuração padrão do tema está documentada em cada arquivo para que você possa ajustar livremente as configurações de acordo com suas necessidades.

{{< alert >}}
Conforme descrito nas [instruções de instalação]({{< ref "/docs/installation#set-up-theme-configuration-files" >}}), você deve ajustar a configuração do seu tema modificando os arquivos na pasta `config/_default/` do seu projeto Hugo e excluir o arquivo `hugo.toml` na raiz do seu projeto.
{{< /alert >}}

## Configuração do site

As variáveis de configuração padrão do Hugo são respeitadas em todo o tema, no entanto, há algumas coisas específicas que devem ser configuradas para a melhor experiência.

A configuração do site é gerenciada através do arquivo `config/_default/hugo.toml`. A tabela abaixo descreve todas as configurações que o Blowfish aproveita.

Observe que os nomes de variáveis fornecidos nesta tabela usam notação de ponto para simplificar a estrutura de dados TOML (ou seja, `outputs.home` refere-se a `[outputs] home`).

<!-- prettier-ignore-start -->
| Nome | Padrão | Descrição |
| --- | --- | --- |
| `theme` | `"blowfish"` | Ao usar Módulos Hugo, este valor de configuração deve ser removido. Para todos os outros tipos de instalação, isso deve ser definido como `blowfish` para que o tema funcione. |
| `baseURL` | _Não definido_ | A URL para a raiz do site. |
| `defaultContentLanguage` | `"en"` | Este valor determina o idioma padrão dos componentes do tema e do conteúdo. Consulte a seção [idioma e i18n](#idioma-e-i18n) abaixo para códigos de idioma suportados. |
| `enableRobotsTXT` | `true` | Quando habilitado, um arquivo `robots.txt` será criado na raiz do site que permite que os mecanismos de busca rastreiem todo o site. Se você preferir fornecer seu próprio `robots.txt` pré-fabricado, defina como `false` e coloque seu arquivo no diretório `static`. Para controle completo, você pode fornecer um [layout personalizado]({{< ref "content-examples#custom-layouts" >}}) para gerar este arquivo. |
| `pagination.pagerSize` | `10` | O número de artigos listados em cada página da lista de artigos. |
| `summaryLength` | `0` | O número de palavras usadas para gerar o resumo do artigo quando não é fornecido no [front matter]({{< ref "front-matter" >}}). Um valor de `0` usará a primeira frase. Este valor não tem efeito quando os resumos estão ocultos. |
| `outputs.home` | `["HTML", "RSS", "JSON"]` | Os formatos de saída gerados para o site. O Blowfish requer HTML, RSS e JSON para que todos os componentes do tema funcionem corretamente. |
| `permalinks` | _Não definido_ | Consulte a [documentação do Hugo](https://gohugo.io/configuration/permalinks/) para configuração de permalinks. |
| `taxonomies` | _Não definido_ | Consulte a seção [Organizando conteúdo]({{< ref "getting-started#organising-content" >}}) para configuração de taxonomias. |
<!-- prettier-ignore-end -->

## Miniaturas

O Blowfish foi construído para facilitar a adição de suporte visual aos seus artigos. Se você está familiarizado com a estrutura de artigos do Hugo, basta colocar um arquivo de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*` dentro da pasta do seu artigo. E é isso, o Blowfish poderá usar a imagem tanto como miniatura dentro do seu site quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais.

[Aqui]({{< ref "thumbnails" >}}) também há um guia com mais informações e um [exemplo]({{< ref "thumbnail_sample" >}}) se você quiser ver como fazer.

## Idioma e i18n

O Blowfish é otimizado para sites totalmente multilíngues e os recursos do tema são traduzidos para vários idiomas por padrão. A configuração de idioma permite gerar múltiplas versões do seu conteúdo para fornecer uma experiência personalizada aos seus visitantes em seu idioma nativo.

O tema atualmente suporta os seguintes idiomas por padrão:

| Idioma | Código |
| --- | --- |
| Árabe | `ar` |
| Búlgaro | `bg` |
| Bengali | `bn` |
| Catalão | `ca` |
| Tcheco | `cs` |
| Alemão | `de` |
| Inglês | `en` |
| Esperanto | `eo` |
| Espanhol (Espanha) | `es` |
| Finlandês | `fi` |
| Francês | `fr` |
| Galego | `gl` |
| Hebraico | `he` |
| Croata | `hr` |
| Húngaro | `hu` |
| Indonésio | `id` |
| Italiano | `it` |
| Japonês | `ja` |
| Coreano | `ko` |
| Holandês | `nl` |
| Persa | `fa` |
| Polonês | `pl` |
| Português (Brasil) | `pt-br` |
| Português (Portugal) | `pt-pt` |
| Romeno | `ro` |
| Russo | `ru` |
| Tailandês | `th` |
| Turco | `tr` |
| Vietnamita | `vi` |
| Chinês simplificado (China) | `zh-cn` |
| Chinês tradicional (Taiwan) | `zh-tw` |

As traduções padrão podem ser substituídas criando um arquivo personalizado em `i18n/[code].yaml` contendo as strings de tradução. Você também pode usar este método para adicionar novos idiomas. Se quiser compartilhar uma nova tradução com a comunidade, por favor [abra um pull request](https://github.com/nunocoracao/blowfish/pulls).

### Configuração

Para ser o mais flexível possível, um arquivo de configuração de idioma precisa ser criado para cada idioma no site. Por padrão, o Blowfish inclui uma configuração de idioma em inglês em `config/_default/languages.en.toml`.

O arquivo padrão pode ser usado como modelo para criar idiomas adicionais, ou renomeado se você deseja escrever seu site em um idioma diferente do inglês. Simplesmente nomeie o arquivo usando o formato `languages.[language-code].toml`.

{{< alert >}}
**Nota:** Certifique-se de que o parâmetro `defaultContentLanguage` na [configuração do site](#configuração-do-site) corresponda ao código de idioma no nome do arquivo de configuração de idioma.
{{< /alert >}}

Para informações detalhadas sobre todos os parâmetros de configuração disponíveis, consulte a documentação em inglês, pois os nomes dos parâmetros são técnicos e permanecem em sua forma original.

## Parâmetros do tema

O Blowfish fornece um grande número de parâmetros de configuração que controlam como o tema funciona. A lista completa de todos os parâmetros disponíveis está no arquivo `config/_default/params.toml`.

Muitos dos padrões de artigos podem ser substituídos por artigo, especificando-os no front matter. Consulte a seção [Front Matter]({{< ref "front-matter" >}}) para mais detalhes.

## Outros arquivos de configuração

O tema também inclui um arquivo de configuração `markup.toml`. Este arquivo contém alguns parâmetros importantes que garantem que o Hugo esteja corretamente configurado para gerar sites construídos com o Blowfish.

Sempre certifique-se de que este arquivo esteja presente no diretório de configuração e que os valores necessários estejam definidos. Não fazer isso pode fazer com que certos recursos funcionem incorretamente e pode resultar em comportamento não intencional.
