---
title: "Bem-vindo ao Blowfish"
weight: 1
draft: false
description: "Descubra as novidades do Blowfish versão 2.0."
tags: ["novo", "documentação"]
series: ["Documentação"]
series_order: 1
---

{{< lead >}}
O Blowfish está repleto de funcionalidades.
{{< /lead >}}

O objetivo original do Blowfish era desenvolver um tema simples e leve. O tema é um fork do <a target="_blank" href="https://github.com/nunocoracao/congo">Congo</a> e expande a sua visão inicial.

## Tailwind CSS 3.0

O Tailwind CSS é o coração do Blowfish e esta versão contém a mais recente [Tailwind CSS versão 3](https://tailwindcss.com/blog/tailwindcss-v3). Traz otimizações de desempenho e suporte para algumas novas funcionalidades CSS fantásticas.

{{< youtube "TmWIrBPE6Bc" >}}

## Suporte multilingue

Uma funcionalidade muito solicitada: o Blowfish é agora multilingue! Se publicar o seu conteúdo em vários idiomas, o site será construído com todas as traduções disponíveis.

<div class="text-2xl text-center" style="font-size: 2.8rem">🇬🇧 🇩🇪 🇫🇷 🇪🇸 🇨🇳 🇧🇷 🇹🇷 🇧🇩</div>

Graças às contribuições da comunidade, o Blowfish já foi traduzido para [trinta idiomas](https://github.com/nunocoracao/blowfish/tree/main/i18n), e mais serão adicionados ao longo do tempo. Aliás, [pull requests](https://github.com/nunocoracao/blowfish/pulls) para novos idiomas são sempre bem-vindos!

## Suporte a idiomas RTL

Um dos benefícios das novas funcionalidades do Tailwind e multilingue é a capacidade de adicionar suporte a idiomas RTL. Quando ativado, todo o conteúdo do site será reorganizado da direita para a esquerda. Cada elemento no tema foi re-estilizado para garantir uma ótima aparência neste modo, o que ajuda autores que desejam gerar conteúdo em idiomas RTL.

O RTL é controlado por idioma, pelo que pode misturar conteúdo RTL e LTR nos seus projetos e o tema responderá adequadamente.

## Redimensionamento automático de imagens

Uma grande mudança no Blowfish 2.0 é a adição do redimensionamento automático de imagens. Utilizando o poder do Hugo Pipes, as imagens no conteúdo Markdown são agora automaticamente redimensionadas para diferentes tamanhos de saída. Estes são então apresentados utilizando atributos HTML `srcset`, permitindo que tamanhos de ficheiro otimizados sejam servidos aos visitantes do seu site.

![Imagem com texto alternativo](image-resizing.png)

```html
<!-- Markdown: ![A minha imagem](image.jpg) -->
<img
  srcset="
    /image_320x0_resize_q75_box.jpg 320w,
    /image_635x0_resize_q75_box.jpg 635w,
    /image_1024x0_resize_q75_box.jpg 1024w"
  src="/image_635x0_resize_q75_box.jpg"
  alt="A minha imagem"
/>
```

O melhor de tudo é que não precisa de alterar nada! Simplesmente insira a sintaxe padrão de imagem Markdown e deixe o tema fazer o resto. Se quiser um pouco mais de controlo, o shortcode `figure` foi completamente reescrito para fornecer os mesmos benefícios de redimensionamento.


## Pesquisa no site

Alimentada pelo [Fuse.js](https://fusejs.io), a pesquisa do site permite que os visitantes encontrem o seu conteúdo rápida e facilmente. Todas as pesquisas são realizadas do lado do cliente, o que significa que não há nada para configurar no servidor e as consultas são executadas super rápido. Simplesmente ative a funcionalidade na configuração do seu site e está pronto. Ah, e também suporta navegação completa por teclado!

## Índices

Uma funcionalidade muito solicitada: o Blowfish agora suporta índices em páginas de artigos. Pode vê-lo em ação nesta página. O conteúdo é totalmente responsivo e ajustar-se-á para aproveitar o espaço disponível em diferentes resoluções de ecrã.

Disponível globalmente ou por artigo, o índice pode ser totalmente personalizado utilizando os valores de configuração padrão do Hugo, permitindo-lhe ajustar o comportamento ao seu projeto.

## Melhorias de acessibilidade

Desde adicionar descrições ARIA a mais itens até simplesmente ajustar o contraste de certos elementos de texto, esta versão é a mais acessível até agora.

A versão 2 também introduz ligações de "saltar para o conteúdo" e "voltar ao topo" que permitem navegação rápida. Também há atalhos de teclado para ativar itens como a pesquisa sem precisar de utilizar o rato.

As novas funcionalidades de redimensionamento de imagens também fornecem controlo total sobre os elementos `alt` e `title`, permitindo uma experiência acessível para todos os visitantes.

## E muito mais

Há inúmeras outras funcionalidades para explorar. Desde poder apresentar taxonomias em artigos e páginas de lista, até utilizar o novo parâmetro de autor `headline` para personalizar a sua página inicial. Também há dados estruturados JSON-LD melhorados que otimizam ainda mais o desempenho de SEO.
