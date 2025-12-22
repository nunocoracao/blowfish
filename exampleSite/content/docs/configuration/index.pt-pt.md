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

O Blowfish é um tema altamente personalizável e utiliza algumas das funcionalidades mais recentes do Hugo para simplificar a sua configuração.

O tema vem com uma configuração predefinida que lhe permite começar com um blogue básico ou site estático.

{{< alert "fire" >}}
Acabámos de lançar uma ferramenta CLI para o ajudar a começar com o Blowfish. Irá ajudá-lo com a instalação e configuração. Instale a ferramenta CLI globalmente utilizando:

```bash
npx blowfish-tools
```

{{< /alert >}}

> Os ficheiros de configuração incluídos com o tema são fornecidos no formato TOML, pois é a sintaxe predefinida do Hugo. Sinta-se à vontade para converter a sua configuração para YAML ou JSON, se desejar.

A configuração predefinida do tema está documentada em cada ficheiro para que possa ajustar livremente as definições de acordo com as suas necessidades.

{{< alert >}}
Conforme descrito nas [instruções de instalação]({{< ref "/docs/installation#set-up-theme-configuration-files" >}}), deve ajustar a configuração do seu tema modificando os ficheiros na pasta `config/_default/` do seu projeto Hugo e eliminar o ficheiro `hugo.toml` na raiz do seu projeto.
{{< /alert >}}

## Configuração do site

As variáveis de configuração padrão do Hugo são respeitadas em todo o tema, no entanto, há algumas coisas específicas que devem ser configuradas para a melhor experiência.

A configuração do site é gerida através do ficheiro `config/_default/hugo.toml`. A tabela abaixo descreve todas as definições que o Blowfish aproveita.

Note que os nomes de variáveis fornecidos nesta tabela utilizam notação de ponto para simplificar a estrutura de dados TOML (ou seja, `outputs.home` refere-se a `[outputs] home`).

<!-- prettier-ignore-start -->
| Nome | Predefinição | Descrição |
| --- | --- | --- |
| `theme` | `"blowfish"` | Ao utilizar Módulos Hugo, este valor de configuração deve ser removido. Para todos os outros tipos de instalação, isto deve ser definido como `blowfish` para que o tema funcione. |
| `baseURL` | _Não definido_ | O URL para a raiz do site. |
| `defaultContentLanguage` | `"en"` | Este valor determina o idioma predefinido dos componentes do tema e do conteúdo. Consulte a secção [idioma e i18n](#idioma-e-i18n) abaixo para códigos de idioma suportados. |
| `enableRobotsTXT` | `true` | Quando ativado, um ficheiro `robots.txt` será criado na raiz do site que permite que os motores de busca rastreiem todo o site. Se preferir fornecer o seu próprio `robots.txt` pré-fabricado, defina como `false` e coloque o seu ficheiro no diretório `static`. Para controlo completo, pode fornecer um [layout personalizado]({{< ref "content-examples#custom-layouts" >}}) para gerar este ficheiro. |
| `pagination.pagerSize` | `10` | O número de artigos listados em cada página da lista de artigos. |
| `summaryLength` | `0` | O número de palavras utilizadas para gerar o resumo do artigo quando não é fornecido no [front matter]({{< ref "front-matter" >}}). Um valor de `0` utilizará a primeira frase. Este valor não tem efeito quando os resumos estão ocultos. |
| `outputs.home` | `["HTML", "RSS", "JSON"]` | Os formatos de saída gerados para o site. O Blowfish requer HTML, RSS e JSON para que todos os componentes do tema funcionem corretamente. |
| `permalinks` | _Não definido_ | Consulte a [documentação do Hugo](https://gohugo.io/configuration/permalinks/) para configuração de permalinks. |
| `taxonomies` | _Não definido_ | Consulte a secção [Organização do conteúdo]({{< ref "getting-started#organising-content" >}}) para configuração de taxonomias. |
<!-- prettier-ignore-end -->

## Miniaturas

O Blowfish foi construído para facilitar a adição de suporte visual aos seus artigos. Se está familiarizado com a estrutura de artigos do Hugo, basta colocar um ficheiro de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*` dentro da pasta do seu artigo. E é isso, o Blowfish poderá utilizar a imagem tanto como miniatura dentro do seu site quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais.

[Aqui]({{< ref "thumbnails" >}}) também há um guia com mais informações e um [exemplo]({{< ref "thumbnail_sample" >}}) se quiser ver como fazer.

## Idioma e i18n

O Blowfish está otimizado para sites totalmente multilingues e os recursos do tema são traduzidos para vários idiomas por predefinição. A configuração de idioma permite gerar múltiplas versões do seu conteúdo para fornecer uma experiência personalizada aos seus visitantes no seu idioma nativo.

O tema atualmente suporta os seguintes idiomas por predefinição:

| Idioma | Código |
| --- | --- |
| Árabe | `ar` |
| Búlgaro | `bg` |
| Bengali | `bn` |
| Catalão | `ca` |
| Checo | `cs` |
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
| Polaco | `pl` |
| Português (Brasil) | `pt-br` |
| Português (Portugal) | `pt-pt` |
| Romeno | `ro` |
| Russo | `ru` |
| Tailandês | `th` |
| Turco | `tr` |
| Vietnamita | `vi` |
| Chinês simplificado (China) | `zh-cn` |
| Chinês tradicional (Taiwan) | `zh-tw` |

As traduções predefinidas podem ser substituídas criando um ficheiro personalizado em `i18n/[code].yaml` contendo as strings de tradução. Também pode utilizar este método para adicionar novos idiomas. Se quiser partilhar uma nova tradução com a comunidade, por favor [abra um pull request](https://github.com/nunocoracao/blowfish/pulls).

### Configuração

Para ser o mais flexível possível, um ficheiro de configuração de idioma precisa de ser criado para cada idioma no site. Por predefinição, o Blowfish inclui uma configuração de idioma em inglês em `config/_default/languages.en.toml`.

O ficheiro predefinido pode ser utilizado como modelo para criar idiomas adicionais, ou renomeado se deseja escrever o seu site num idioma diferente do inglês. Simplesmente nomeie o ficheiro utilizando o formato `languages.[language-code].toml`.

{{< alert >}}
**Nota:** Certifique-se de que o parâmetro `defaultContentLanguage` na [configuração do site](#configuração-do-site) corresponda ao código de idioma no nome do ficheiro de configuração de idioma.
{{< /alert >}}

Para informações detalhadas sobre todos os parâmetros de configuração disponíveis, consulte a documentação em inglês, pois os nomes dos parâmetros são técnicos e permanecem na sua forma original.

## Parâmetros do tema

O Blowfish fornece um grande número de parâmetros de configuração que controlam como o tema funciona. A lista completa de todos os parâmetros disponíveis está no ficheiro `config/_default/params.toml`.

Muitas das predefinições de artigos podem ser substituídas por artigo, especificando-as no front matter. Consulte a secção [Front Matter]({{< ref "front-matter" >}}) para mais detalhes.

## Outros ficheiros de configuração

O tema também inclui um ficheiro de configuração `markup.toml`. Este ficheiro contém alguns parâmetros importantes que garantem que o Hugo está corretamente configurado para gerar sites construídos com o Blowfish.

Certifique-se sempre de que este ficheiro está presente no diretório de configuração e que os valores necessários estão definidos. Não fazer isso pode fazer com que certas funcionalidades funcionem incorretamente e pode resultar em comportamento não intencional.
