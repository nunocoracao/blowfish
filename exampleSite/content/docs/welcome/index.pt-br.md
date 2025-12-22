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

O objetivo original do Blowfish era desenvolver um tema simples e leve. O tema é um fork do <a target="_blank" href="https://github.com/nunocoracao/congo">Congo</a> e expande sua visão inicial.

## Tailwind CSS 3.0

O Tailwind CSS é o coração do Blowfish e esta versão contém a mais recente [Tailwind CSS versão 3](https://tailwindcss.com/blog/tailwindcss-v3). Ela traz otimizações de desempenho e suporte para alguns novos recursos CSS incríveis.

{{< youtube "TmWIrBPE6Bc" >}}

## Suporte multilíngue

Um recurso muito solicitado: o Blowfish agora é multilíngue! Se você publica seu conteúdo em vários idiomas, o site será construído com todas as traduções disponíveis.

<div class="text-2xl text-center" style="font-size: 2.8rem">🇬🇧 🇩🇪 🇫🇷 🇪🇸 🇨🇳 🇧🇷 🇹🇷 🇧🇩</div>

Graças às contribuições da comunidade, o Blowfish já foi traduzido para [trinta idiomas](https://github.com/nunocoracao/blowfish/tree/main/i18n), e mais serão adicionados com o tempo. A propósito, [pull requests](https://github.com/nunocoracao/blowfish/pulls) para novos idiomas são sempre bem-vindos!

## Suporte a idiomas RTL

Um dos benefícios dos novos recursos do Tailwind e multilíngue é a capacidade de adicionar suporte a idiomas RTL. Quando habilitado, todo o conteúdo do site será reorganizado da direita para a esquerda. Cada elemento no tema foi re-estilizado para garantir uma ótima aparência neste modo, o que ajuda autores que desejam gerar conteúdo em idiomas RTL.

O RTL é controlado por idioma, então você pode misturar conteúdo RTL e LTR em seus projetos e o tema responderá adequadamente.

## Redimensionamento automático de imagens

Uma grande mudança no Blowfish 2.0 é a adição do redimensionamento automático de imagens. Usando o poder do Hugo Pipes, as imagens no conteúdo Markdown agora são automaticamente redimensionadas para diferentes tamanhos de saída. Estes são então apresentados usando atributos HTML `srcset`, permitindo que tamanhos de arquivo otimizados sejam servidos aos visitantes do seu site.

![Imagem com texto alternativo](image-resizing.png)

```html
<!-- Markdown: ![Minha imagem](image.jpg) -->
<img
  srcset="
    /image_320x0_resize_q75_box.jpg 320w,
    /image_635x0_resize_q75_box.jpg 635w,
    /image_1024x0_resize_q75_box.jpg 1024w"
  src="/image_635x0_resize_q75_box.jpg"
  alt="Minha imagem"
/>
```

O melhor de tudo é que você não precisa mudar nada! Simplesmente insira a sintaxe padrão de imagem Markdown e deixe o tema fazer o resto. Se você quiser um pouco mais de controle, o shortcode `figure` foi completamente reescrito para fornecer os mesmos benefícios de redimensionamento.


## Busca no site

Alimentada pelo [Fuse.js](https://fusejs.io), a busca do site permite que os visitantes encontrem seu conteúdo rápida e facilmente. Todas as buscas são realizadas no lado do cliente, o que significa que não há nada para configurar no servidor e as consultas são executadas super rápido. Simplesmente habilite o recurso na configuração do seu site e pronto. Ah, e também suporta navegação completa por teclado!

## Índices

Um recurso muito solicitado: o Blowfish agora suporta índices em páginas de artigos. Você pode vê-lo em ação nesta página. O conteúdo é totalmente responsivo e se ajustará para aproveitar o espaço disponível em diferentes resoluções de tela.

Disponível globalmente ou por artigo, o índice pode ser totalmente personalizado usando os valores de configuração padrão do Hugo, permitindo que você ajuste o comportamento ao seu projeto.

## Melhorias de acessibilidade

Desde adicionar descrições ARIA a mais itens até simplesmente ajustar o contraste de certos elementos de texto, esta versão é a mais acessível até agora.

A versão 2 também introduz links de "pular para o conteúdo" e "voltar ao topo" que permitem navegação rápida. Também há atalhos de teclado para ativar itens como a busca sem precisar usar o mouse.

Os novos recursos de redimensionamento de imagens também fornecem controle total sobre os elementos `alt` e `title`, permitindo uma experiência acessível para todos os visitantes.

## E muito mais

Há inúmeros outros recursos para explorar. Desde poder exibir taxonomias em artigos e páginas de lista, até usar o novo parâmetro de autor `headline` para personalizar sua página inicial. Também há dados estruturados JSON-LD aprimorados que otimizam ainda mais o desempenho de SEO.
