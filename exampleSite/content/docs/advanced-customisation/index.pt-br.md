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

Existem muitas maneiras de fazer alterações avançadas no Blowfish. Leia abaixo para saber mais sobre o que pode ser personalizado e a melhor forma de alcançar o resultado desejado.

Se precisar de mais orientação, poste suas perguntas nas [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).

## Estrutura do projeto Hugo

Antes de começar, primeiro uma nota rápida sobre a [estrutura do projeto Hugo](https://gohugo.io/getting-started/directory-structure/) e as melhores práticas para gerenciar seu conteúdo e personalizações do tema.

{{< alert >}}
**Em resumo:** Nunca edite diretamente os arquivos do tema. Apenas faça personalizações nos subdiretórios do seu projeto Hugo, não no diretório themes em si.
{{< /alert >}}

O Blowfish foi construído para aproveitar todas as práticas padrão do Hugo. Ele é projetado para permitir que todos os aspectos do tema sejam personalizados e substituídos sem alterar nenhum dos arquivos principais do tema. Isso permite uma experiência de atualização perfeita enquanto oferece controle total sobre a aparência e o funcionamento do seu site.

Para conseguir isso, você nunca deve ajustar manualmente nenhum dos arquivos do tema diretamente. Seja instalando usando módulos Hugo, como um submódulo git ou incluindo manualmente o tema no seu diretório `themes/`, você deve sempre deixar esses arquivos intactos.

A maneira correta de ajustar qualquer comportamento do tema é substituindo arquivos usando a poderosa [ordem de busca de arquivos](https://gohugo.io/templates/lookup-order/) do Hugo. Em resumo, a ordem de busca garante que quaisquer arquivos que você incluir no diretório do seu projeto terão automaticamente precedência sobre quaisquer arquivos do tema.

Por exemplo, se você quisesse substituir o template principal de artigo no Blowfish, você pode simplesmente criar seu próprio arquivo `layouts/_default/single.html` e colocá-lo na raiz do seu projeto. Este arquivo então substituirá o `single.html` do tema sem nunca alterar o tema em si. Isso funciona para qualquer arquivo do tema - templates HTML, partials, shortcodes, arquivos de configuração, dados, assets, etc.

Enquanto você seguir esta prática simples, você sempre poderá atualizar o tema (ou testar diferentes versões do tema) sem se preocupar em perder nenhuma de suas alterações personalizadas.

## Alterar configurações de otimização de imagem

Hugo tem vários métodos integrados para redimensionar, cortar e otimizar imagens.

Como exemplo - em `layouts/partials/article-link/card.html`, você tem o seguinte código:

```go
{{ with .Resize "600x" }}
<div class="w-full thumbnail_card nozoom" style="background-image:url({{ .RelPermalink }});"></div>
{{ end }}
```

O comportamento padrão do Hugo aqui é redimensionar a imagem para 600px mantendo a proporção.

Vale notar que as configurações de imagem padrão como o [ponto de ancoragem](https://gohugo.io/content-management/image-processing/#anchor) também podem ser definidas na sua [configuração do site](https://gohugo.io/content-management/image-processing/#processing-options) assim como no próprio template.

Veja os [docs do Hugo sobre processamento de imagens](https://gohugo.io/content-management/image-processing/#image-processing-methods) para mais informações.

## Esquemas de cores

O Blowfish vem com vários esquemas de cores prontos para usar. Para alterar o esquema de cores básico, você pode definir o parâmetro do tema `colorScheme`. Consulte a seção [Primeiros passos]({{< ref "getting-started#colour-schemes" >}}) para saber mais sobre os esquemas integrados.

Além dos esquemas padrão, você também pode criar os seus próprios e re-estilizar todo o site ao seu gosto. Os esquemas são criados colocando um arquivo `<nome-do-esquema>.css` na pasta `assets/css/schemes/`. Uma vez criado o arquivo, simplesmente referencie-o pelo nome na configuração do tema.

{{< alert "github">}}
**Nota:** gerar esses arquivos manualmente pode ser difícil, eu construí uma ferramenta de terminal `nodejs` para ajudar com isso, [Fugu](https://github.com/nunocoracao/fugu). Em resumo, você passa os três valores `hex` principais da sua paleta de cores e o programa produzirá um arquivo css que pode ser importado diretamente no Blowfish.
{{< /alert >}}


O Blowfish define uma paleta de três cores que é usada em todo o tema. As três cores são definidas como variantes `neutral`, `primary` e `secondary`, cada uma contendo dez tons de cor.

Devido à forma como o Tailwind CSS 3.0 calcula os valores de cor com opacidade, as cores especificadas no esquema precisam [conformar-se a um formato particular](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo) fornecendo os valores de cor vermelho, verde e azul.

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

Este exemplo define uma variável CSS para a cor `primary-500` com um valor vermelho de `139`, valor verde de `92` e valor azul de `246`.

Use uma das folhas de estilo do tema existentes como modelo. Você é livre para definir suas próprias cores, mas para inspiração, confira a [referência da paleta de cores do Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) oficial.

## Substituir a folha de estilos

Às vezes você precisa adicionar um estilo personalizado para estilizar seus próprios elementos HTML. O Blowfish prevê este cenário permitindo que você substitua os estilos padrão na sua própria folha de estilos CSS. Simplesmente crie um arquivo `custom.css` na pasta `assets/css/` do seu projeto.

O arquivo `custom.css` será minificado pelo Hugo e carregado automaticamente após todos os outros estilos do tema, o que significa que qualquer coisa no seu arquivo personalizado terá precedência sobre os padrões.

### Usar fontes adicionais

O Blowfish permite que você altere facilmente a fonte do seu site. Após criar um arquivo `custom.css` na pasta `assets/css/` do seu projeto, coloque seu arquivo de fonte dentro de uma pasta `fonts` na pasta raiz `static`.

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

Isso torna a fonte disponível para o site. Agora, a fonte pode simplesmente ser importada no seu `custom.css` e substituída onde você achar melhor. O exemplo abaixo mostra como seria substituir a fonte para todo o `html`.

```css
@font-face {
    font-family: font;
    src: url('/fonts/font.ttf');
}

html {
    font-family: font;
}
```

### Ajustar o tamanho da fonte

Alterar o tamanho da fonte do seu site é um exemplo de substituição da folha de estilos padrão. O Blowfish torna isso simples pois usa tamanhos de fonte escalados em todo o tema que são derivados do tamanho da fonte HTML base. Por padrão, o Tailwind define o tamanho padrão como `12pt`, mas pode ser alterado para qualquer valor que você preferir.

Crie um arquivo `custom.css` usando as [instruções acima]({{< ref "#overriding-the-stylesheet" >}}) e adicione a seguinte declaração CSS:

```css
/* Aumentar o tamanho de fonte padrão */
html {
  font-size: 13pt;
}
```

Simplesmente alterando este único valor, todos os tamanhos de fonte no seu site serão ajustados para corresponder a este novo tamanho. Portanto, para aumentar os tamanhos de fonte gerais usados, faça o valor maior que `12pt`. Da mesma forma, para diminuir os tamanhos de fonte, faça o valor menor que `12pt`.

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

Isso limpa os estilos padrão do Chroma. O próximo passo é incorporar os estilos do Chroma no seu arquivo CSS usando o comando `hugo gen chromastyles`:

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

Se você quiser fazer uma alteração maior, pode aproveitar o compilador JIT do Tailwind CSS e reconstruir todo o CSS do tema do zero. Isso é útil se você quiser ajustar a configuração do Tailwind ou adicionar classes extras do Tailwind à folha de estilos principal.

{{< alert >}}
**Nota:** Construir o tema manualmente é destinado a usuários avançados.
{{< /alert >}}

Vamos ver como funciona a construção do Tailwind CSS.

### Configuração do Tailwind

Para gerar um arquivo CSS que contenha apenas as classes do Tailwind que estão realmente sendo usadas, o compilador JIT precisa escanear todos os templates HTML e arquivos de conteúdo Markdown para verificar quais estilos estão presentes no markup. O compilador faz isso olhando o arquivo `tailwind.config.js` que está incluído na raiz do diretório do tema:

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

Esta configuração padrão foi incluída com esses caminhos de conteúdo para que você possa facilmente gerar seu próprio arquivo CSS sem precisar modificá-la, desde que siga uma estrutura de projeto particular. Ou seja, **você tem que incluir o Blowfish no seu projeto como um subdiretório em `themes/blowfish/`**. Isso significa que você não pode facilmente usar os módulos Hugo para instalar o tema e deve optar pela instalação por submódulo git (recomendado) ou instalação manual. Os [docs de instalação]({{< ref "installation" >}}) explicam como instalar o tema usando qualquer um desses métodos.

### Estrutura do projeto

Para aproveitar a configuração padrão, seu projeto deve se parecer com algo assim...

```shell
.
├── assets
│   └── css
│       └── compiled
│           └── main.css  # este é o arquivo que vamos gerar
├── config  # config do site
│   └── _default
├── content  # conteúdo do site
│   ├── _index.md
│   ├── projects
│   │   └── _index.md
│   └── blog
│       └── _index.md
├── layouts  # layouts personalizados para seu site
│   ├── partials
│   │   └── extend-article-link/simple.html
│   ├── projects
│   │   └── list.html
│   └── shortcodes
│       └── disclaimer.html
└── themes
    └── blowfish  # submódulo git ou instalação manual do tema
```

Esta estrutura de exemplo adiciona um novo tipo de conteúdo `projects` com seu próprio layout personalizado junto com um shortcode personalizado e partial estendido. Desde que o projeto siga esta estrutura, tudo o que é necessário é recompilar o arquivo `main.css`.

### Instalar dependências

Para que isso funcione, você precisará mudar para o diretório `themes/blowfish/` e instalar as dependências do projeto. Você precisará do [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) na sua máquina local para esta etapa.

```shell
cd themes/blowfish
npm install
```

### Executar o compilador do Tailwind

Com as dependências instaladas, tudo o que resta é usar o [Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli) para invocar o compilador JIT. Navegue de volta para a raiz do seu projeto Hugo e execute o seguinte comando:

```shell
cd ../..
node ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

É um comando um pouco feio devido aos caminhos envolvidos, mas essencialmente você está chamando o Tailwind CLI e passando a localização do arquivo de config do Tailwind (o que vimos acima), onde encontrar o arquivo `main.css` do tema e então onde você quer que o arquivo CSS compilado seja colocado (ele vai para a pasta `assets/css/compiled/` do seu projeto Hugo).

O arquivo de config escaneará automaticamente todo o conteúdo e layouts no seu projeto assim como todos os do tema e construirá um novo arquivo CSS que contém todo o CSS necessário para seu site. Devido à forma como o Hugo lida com a hierarquia de arquivos, este arquivo no seu projeto agora substituirá automaticamente o que vem com o tema.

Cada vez que você fizer uma alteração nos seus layouts e precisar de novos estilos do Tailwind CSS, você pode simplesmente executar o comando novamente e gerar o novo arquivo CSS. Você também pode adicionar `-w` ao final do comando para executar o compilador JIT em modo watch.

### Criar um script de build

Para completar totalmente esta solução, você pode simplificar todo este processo adicionando aliases para estes comandos, ou fazer o que eu faço e adicionar um `package.json` à raiz do seu projeto que contenha os scripts necessários...

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

Agora quando você quiser trabalhar no design do seu site, pode invocar `npm run dev` e o compilador será executado em modo watch. Quando estiver pronto para implantar, execute `npm run build` e você terá um build limpo do Tailwind CSS.

🙋‍♀️ Se precisar de ajuda, sinta-se à vontade para fazer uma pergunta nas [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).
