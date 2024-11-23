---
title: "欢迎来到 Blowfish"
weight: 1
draft: false
description: "探索 Blowfish 2.0版本的新功能。"
tags: ["新手", "文档"]
series: ["部署教程"]
series_order: 1
---

{{< lead >}}
Blowfish 包含了大量的特性功能。
{{< /lead >}}

Blowfish 的目标是开发一个简单且轻量级的主题。 该主题是 <a target="_blank" href="https://github.com/nunocoracao/congo">Congo</a> 的一个分支，并进行了大量扩展。

## Tailwind CSS 3.0

Tailwind CSS 是 Blowfish 的核心，当前版本包含了最新的[Tailwind CSS version 3](https://tailwindcss.com/blog/tailwindcss-v3)。
Tailwind CSS 带来了性能优化，并提供了一些出色的新的 CSS 特性。


{{< youtube "TmWIrBPE6Bc" >}}

## 多语言支持

这是一个高频需求，Blowfish 现在支持多语言！
如果你使用多语言发布你的内容，网站将会构建包含所有可用翻译的版本。

<div class="text-2xl text-center" style="font-size: 2.8rem">:gb: :de: :fr: :es: :cn: :brazil: :tr: :bangladesh:</div>

感谢社区的贡献，目前 Blowfish 已经翻译成三十种语言，并且随着时间的推移还会支持更多。 顺便一提，欢迎你为支持新语言提交 [PR](https://github.com/nunocoracao/blowfish/pulls)。

## 支持 RTL 语言

新版本的Tailwind和多语言特性可以支持 RTL 语言。

启用 RTL 后，整个网站将会从右到左重新生成内容。主题中的所有元素都会重新风格化，以适应这种模式，有助于 RTL 语言者。

RTL 是基于单独语言控制的，所以你可以在项目中通过支持多语言来混合使用 RTL 和 LTR，主题会相应做出适配。

## 自动调整图片大小

Blowfish 2.0版本的重大变化是增加了自动调整图片大小的功能。基于 Hugo Pipes 提供的能力，实现了 Markdown 中的图片自动缩放到不同尺寸的功能。同时 Blowfish 2.0 还支持了 HTML `srcset` 以实现响应式图像，这能够为访问者优化图片大小。

![](image-resizing.png)

```html
<!-- Markdown: ![My image](image.jpg) -->
<img
  srcset="
    /image_320x0_resize_q75_box.jpg 320w,
    /image_635x0_resize_q75_box.jpg 635w,
    /image_1024x0_resize_q75_box.jpg 1024w,
    /image_1270x0_resize_q75_box.jpg 2x"
  src="/image_635x0_resize_q75_box.jpg"
  alt="My image"
/>
```

当然这一切都不需要你做任何改动！只需要在 Markdown 中插入标准的图片元素，Blowfish 主题会自动帮你完成这些。

如果你想要图片变得更可控一些，你可以使用短代码 `figure` 。 `figure` 已经被完全重写，用于提供类似调整大小的功能优势。

## 站点搜索

基于 [Fuse.js](https://fusejs.io) 提供的模糊搜索，访问者可以快速轻松地找到想要的内容。所有的模糊搜索都在客户端完成，不需要服务端做任何配置，同时保证了搜索的执行速度。只需要你在网站配置中启用这个功能就可以运行！哦，它甚至还支持全键盘导航！

## 目录

这也是一个高频的需求，Blowfish 现在支持在文章内容页面中使用目录。你可以在本页面看到它的实际效果。目录完全是响应式的，并且会在不同屏幕分辨率下进行自动调整。

目录可以给予全局或者每篇文章，也可以使用标准的 Hugo 配置来完全定制化，允许你根据自己的项目调整。

## 可访问性改进

这个版本是至今为止最易访问的！Blowfish 不仅为更多项目提供了 ARIA 描述，还简单地调整了某些文本元素的对比度。

不仅如此，Blowfish 2.0 引入了 “跳转到内容” 和 “滚动到顶部” 的功能，使得导航更加便捷。你甚至可以仅用键盘快捷键来使用像搜索这样的功能，不需要使用鼠标哦~

新功能图片大小调节还提供了对 `alt` 和 `title` 元素的完全控制，为所有访问者提供一个无障碍的体验。

## 更多更多

当然还有无数其他的功能等待你的探索。例如在文章和列表页面显示分类、使用 `headline` 作者参数来定制你的主页，还有使用改进 JSON-LD 结构化数据，从而进一步优化了 SEO 性能等等。

## 结语

欢迎来尝试和探索强大而轻量的 Blowfish 2.0，打造优雅、个性化的创作之旅！

如果你对 Blowfish 有更加创意的想法，欢迎随时[提交](https://github.com/nunocoracao/blowfish/discussions)，期待与你共同营造 Blowfish 的开源文化！