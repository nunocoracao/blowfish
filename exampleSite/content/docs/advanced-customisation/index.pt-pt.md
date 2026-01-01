---
title: "Personalização avançada"
weight: 13
draft: false
description: "Aprenda como construir o Blowfish manualmente."
slug: "advanced-customisation"
tags: ["avançado", "css", "documentação"]
series: ["Documentação"]
series_order: 13
---

Existem muitas formas de fazer alterações avançadas ao Blowfish. Leia abaixo para saber mais sobre o que pode ser personalizado e a melhor forma de alcançar o resultado desejado.

Se precisar de mais orientação, publique as suas perguntas nas [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).

## Estrutura do projeto Hugo

Antes de começar, primeiro uma nota rápida sobre a [estrutura do projeto Hugo](https://gohugo.io/getting-started/directory-structure/) e as melhores práticas para gerir o seu conteúdo e personalizações do tema.

{{< alert >}}
**Em resumo:** Nunca edite diretamente os ficheiros do tema. Apenas faça personalizações nos subdiretórios do seu projeto Hugo, não no diretório themes em si.
{{< /alert >}}

O Blowfish foi construído para aproveitar todas as práticas padrão do Hugo. Está concebido para permitir que todos os aspetos do tema sejam personalizados e substituídos sem alterar nenhum dos ficheiros principais do tema. Isto permite uma experiência de atualização perfeita enquanto oferece controlo total sobre a aparência e o funcionamento do seu website.

Para conseguir isto, nunca deve ajustar manualmente nenhum dos ficheiros do tema diretamente. Quer instale utilizando módulos Hugo, como um submódulo git ou incluindo manualmente o tema no seu diretório `themes/`, deve sempre deixar estes ficheiros intactos.

A forma correta de ajustar qualquer comportamento do tema é substituindo ficheiros utilizando a poderosa [ordem de pesquisa de ficheiros](https://gohugo.io/templates/lookup-order/) do Hugo. Em resumo, a ordem de pesquisa garante que quaisquer ficheiros que inclua no diretório do seu projeto terão automaticamente precedência sobre quaisquer ficheiros do tema.

Por exemplo, se quisesse substituir o template principal de artigo no Blowfish, pode simplesmente criar o seu próprio ficheiro `layouts/_default/single.html` e colocá-lo na raiz do seu projeto. Este ficheiro então substituirá o `single.html` do tema sem nunca alterar o tema em si. Isto funciona para qualquer ficheiro do tema - templates HTML, partials, shortcodes, ficheiros de configuração, dados, assets, etc.

Enquanto seguir esta prática simples, poderá sempre atualizar o tema (ou testar diferentes versões do tema) sem se preocupar em perder nenhuma das suas alterações personalizadas.

## Alterar definições de otimização de imagem

O Hugo tem vários métodos integrados para redimensionar, cortar e otimizar imagens.

Como exemplo - em `layouts/partials/article-link/card.html`, tem o seguinte código:

```go
{{ with .Resize "600x" }}
<div class="w-full thumbnail_card nozoom" style="background-image:url({{ .RelPermalink }});"></div>
{{ end }}
```

O comportamento predefinido do Hugo aqui é redimensionar a imagem para 600px mantendo a proporção.

Vale notar que as configurações de imagem predefinidas como o [ponto de ancoragem](https://gohugo.io/content-management/image-processing/#anchor) também podem ser definidas na sua [configuração do site](https://gohugo.io/content-management/image-processing/#processing-options) assim como no próprio template.

Veja os [docs do Hugo sobre processamento de imagens](https://gohugo.io/content-management/image-processing/#image-processing-methods) para mais informações.

## Esquemas de cores

O Blowfish vem com vários esquemas de cores prontos a utilizar. Para alterar o esquema de cores básico, pode definir o parâmetro do tema `colorScheme`. Consulte a secção [Primeiros passos]({{< ref "getting-started#colour-schemes" >}}) para saber mais sobre os esquemas integrados.

Além dos esquemas predefinidos, também pode criar os seus próprios e re-estilizar todo o website ao seu gosto. Os esquemas são criados colocando um ficheiro `<nome-do-esquema>.css` na pasta `assets/css/schemes/`. Uma vez criado o ficheiro, simplesmente referencie-o pelo nome na configuração do tema.

{{< alert "github">}}
**Nota:** gerar estes ficheiros manualmente pode ser difícil, eu construí uma ferramenta de terminal `nodejs` para ajudar com isso, [Fugu](https://github.com/nunocoracao/fugu). Em resumo, passa os três valores `hex` principais da sua paleta de cores e o programa produzirá um ficheiro css que pode ser importado diretamente no Blowfish.
{{< /alert >}}


O Blowfish define uma paleta de três cores que é utilizada em todo o tema. As três cores são definidas como variantes `neutral`, `primary` e `secondary`, cada uma contendo dez tons de cor.

Devido à forma como o Tailwind CSS 3.0 calcula os valores de cor com opacidade, as cores especificadas no esquema precisam de [conformar-se a um formato particular](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo) fornecendo os valores de cor vermelho, verde e azul.

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

Este exemplo define uma variável CSS para a cor `primary-500` com um valor vermelho de `139`, valor verde de `92` e valor azul de `246`.

Utilize uma das folhas de estilo do tema existentes como modelo. É livre de definir as suas próprias cores, mas para inspiração, consulte a [referência da paleta de cores do Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) oficial.

## Substituir a folha de estilos

Por vezes precisa de adicionar um estilo personalizado para estilizar os seus próprios elementos HTML. O Blowfish prevê este cenário permitindo que substitua os estilos predefinidos na sua própria folha de estilos CSS. Simplesmente crie um ficheiro `custom.css` na pasta `assets/css/` do seu projeto.

O ficheiro `custom.css` será minificado pelo Hugo e carregado automaticamente após todos os outros estilos do tema, o que significa que qualquer coisa no seu ficheiro personalizado terá precedência sobre os valores predefinidos.

### Utilizar tipos de letra adicionais

O Blowfish permite que altere facilmente o tipo de letra do seu site. Após criar um ficheiro `custom.css` na pasta `assets/css/` do seu projeto, coloque o seu ficheiro de tipo de letra dentro de uma pasta `fonts` na pasta raiz `static`.

```shell
.
├── assets
│   └── css
│       └── custom.css
...
└─── static
    └── fonts
        └─── font.ttf

```

Isto torna o tipo de letra disponível para o website. Agora, o tipo de letra pode simplesmente ser importado no seu `custom.css` e substituído onde achar melhor. O exemplo abaixo mostra como seria substituir o tipo de letra para todo o `html`.

```css
@font-face {
    font-family: font;
    src: url('/fonts/font.ttf');
}

html {
    font-family: font;
}
```

### Ajustar o tamanho do tipo de letra

Alterar o tamanho do tipo de letra do seu website é um exemplo de substituição da folha de estilos predefinida. O Blowfish torna isto simples pois utiliza tamanhos de tipo de letra escalados em todo o tema que são derivados do tamanho do tipo de letra HTML base. Por predefinição, o Tailwind define o tamanho predefinido como `12pt`, mas pode ser alterado para qualquer valor que preferir.

Crie um ficheiro `custom.css` utilizando as [instruções acima]({{< ref "#overriding-the-stylesheet" >}}) e adicione a seguinte declaração CSS:

```css
/* Aumentar o tamanho de tipo de letra predefinido */
html {
  font-size: 13pt;
}
```

Simplesmente alterando este único valor, todos os tamanhos de tipo de letra no seu website serão ajustados para corresponder a este novo tamanho. Portanto, para aumentar os tamanhos de tipo de letra gerais utilizados, faça o valor maior que `12pt`. Da mesma forma, para diminuir os tamanhos de tipo de letra, faça o valor menor que `12pt`.

### Alterar o tema de destaque de sintaxe

Para alterar o tema de destaque de sintaxe, crie `assets/css/custom.css` e adicione o seguinte:

```css
.chroma,
.chroma *,
.chroma:is(.dark *),
.chroma:is(.dark *) * {
  color: unset;
  font-weight: unset;
  font-style: unset;
}
```

Isto limpa os estilos predefinidos do Chroma. O próximo passo é incorporar os estilos do Chroma no seu ficheiro CSS utilizando o comando `hugo gen chromastyles`:

```sh
# Mac/Linux
(echo 'html:not(.dark) {'; hugo gen chromastyles --style=emacs; echo '}') >> assets/css/custom.css
(echo 'html.dark {'; hugo gen chromastyles --style=evergarden; echo '}') >> assets/css/custom.css

# Windows PowerShell
# Este comando não pode ser executado no CMD; deve ser executado no PowerShell
@("html:not(.dark) {"; (hugo gen chromastyles --style=emacs); "}") | Add-Content -Path "assets/css/custom.css"
@("html.dark {"; (hugo gen chromastyles --style=evergarden); "}") | Add-Content -Path "assets/css/custom.css"
```

Veja todos os estilos disponíveis na [documentação do Hugo](https://gohugo.io/quick-reference/syntax-highlighting-styles/#styles).

## Construir o CSS do tema a partir da fonte

Se quiser fazer uma alteração maior, pode aproveitar o compilador JIT do Tailwind CSS e reconstruir todo o CSS do tema do zero. Isto é útil se quiser ajustar a configuração do Tailwind ou adicionar classes extra do Tailwind à folha de estilos principal.

{{< alert >}}
**Nota:** Construir o tema manualmente destina-se a utilizadores avançados.
{{< /alert >}}

Vamos ver como funciona a construção do Tailwind CSS.

### Configuração do Tailwind

Para gerar um ficheiro CSS que contenha apenas as classes do Tailwind que estão realmente a ser utilizadas, o compilador JIT precisa de analisar todos os templates HTML e ficheiros de conteúdo Markdown para verificar quais estilos estão presentes no markup. O compilador faz isto olhando para o ficheiro `tailwind.config.js` que está incluído na raiz do diretório do tema:

```js
// themes/blowfish/tailwind.config.js

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/content/**/*.{html,md}",
  ],

  // e mais...
};
```

Esta configuração predefinida foi incluída com estes caminhos de conteúdo para que possa facilmente gerar o seu próprio ficheiro CSS sem precisar de modificá-la, desde que siga uma estrutura de projeto particular. Ou seja, **tem de incluir o Blowfish no seu projeto como um subdiretório em `themes/blowfish/`**. Isto significa que não pode facilmente utilizar os módulos Hugo para instalar o tema e deve optar pela instalação por submódulo git (recomendado) ou instalação manual. Os [docs de instalação]({{< ref "installation" >}}) explicam como instalar o tema utilizando qualquer um destes métodos.

### Estrutura do projeto

Para aproveitar a configuração predefinida, o seu projeto deve parecer-se com algo assim...

```shell
.
├── assets
│   └── css
│       └── compiled
│           └── main.css  # este é o ficheiro que vamos gerar
├── config  # config do site
│   └── _default
├── content  # conteúdo do site
│   ├── _index.md
│   ├── projects
│   │   └── _index.md
│   └── blog
│       └── _index.md
├── layouts  # layouts personalizados para o seu site
│   ├── partials
│   │   └── extend-article-link/simple.html
│   ├── projects
│   │   └── list.html
│   └── shortcodes
│       └── disclaimer.html
└── themes
    └── blowfish  # submódulo git ou instalação manual do tema
```

Esta estrutura de exemplo adiciona um novo tipo de conteúdo `projects` com o seu próprio layout personalizado juntamente com um shortcode personalizado e partial estendido. Desde que o projeto siga esta estrutura, tudo o que é necessário é recompilar o ficheiro `main.css`.

### Instalar dependências

Para que isto funcione, precisará de mudar para o diretório `themes/blowfish/` e instalar as dependências do projeto. Precisará do [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) na sua máquina local para esta etapa.

```shell
cd themes/blowfish
npm install
```

### Executar o compilador do Tailwind

Com as dependências instaladas, tudo o que resta é utilizar o [Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli) para invocar o compilador JIT. Navegue de volta para a raiz do seu projeto Hugo e execute o seguinte comando:

```shell
cd ../..
node ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

É um comando um pouco feio devido aos caminhos envolvidos, mas essencialmente está a chamar o Tailwind CLI e a passar-lhe a localização do ficheiro de config do Tailwind (o que vimos acima), onde encontrar o ficheiro `main.css` do tema e depois onde quer que o ficheiro CSS compilado seja colocado (vai para a pasta `assets/css/compiled/` do seu projeto Hugo).

O ficheiro de config analisará automaticamente todo o conteúdo e layouts no seu projeto assim como todos os do tema e construirá um novo ficheiro CSS que contém todo o CSS necessário para o seu website. Devido à forma como o Hugo lida com a hierarquia de ficheiros, este ficheiro no seu projeto agora substituirá automaticamente o que vem com o tema.

Cada vez que fizer uma alteração nos seus layouts e precisar de novos estilos do Tailwind CSS, pode simplesmente executar o comando novamente e gerar o novo ficheiro CSS. Também pode adicionar `-w` ao final do comando para executar o compilador JIT em modo watch.

### Criar um script de build

Para completar totalmente esta solução, pode simplificar todo este processo adicionando aliases para estes comandos, ou fazer o que eu faço e adicionar um `package.json` à raiz do seu projeto que contenha os scripts necessários...

```js
// package.json

{
  "name": "my-website",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "server": "hugo server -b http://localhost -p 8000",
    "dev": cross-env "NODE_ENV=development ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit -w",
    "build": cross-env "NODE_ENV=production ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit"
  },
  // e mais...
}
```

Agora quando quiser trabalhar no design do seu site, pode invocar `npm run dev` e o compilador será executado em modo watch. Quando estiver pronto para implementar, execute `npm run build` e terá um build limpo do Tailwind CSS.

🙋‍♀️ Se precisar de ajuda, sinta-se à vontade para fazer uma pergunta nas [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).
