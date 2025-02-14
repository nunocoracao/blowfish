---
title: "使用 Blowfish和 Hugo 构建你的主页"
summary: "一年前我创建了 Blowfish，这是一个为了打造我的个人主页而精心设计的 Hugo 主题。我决定将其作为一个开源项目。直到今天，Blowfish 已经变成了一个蓬勃发展的开源项目，在 GitHub 上拥有超过900个 star 和数百名用户。在本教程中，我将向你展示如何搭建并在几分钟内让你的网站运行起来。"
description: "一年前我创建了 Blowfish，这是一个为了打造我的个人主页而精心设计的 Hugo 主题。我决定将其作为一个开源项目。直到今天，Blowfish 已经变成了一个蓬勃发展的开源项目，在 GitHub 上拥有超过900个 star 和数百名用户。在本教程中，我向像你展示如何搭建并在几分钟内让你的网站运行起来。"
categories: ["开源", "Blowfish"]
tags: ["指南", "blowfish", "hugo"]
externalUrl: "https://n9o.xyz/posts/202310-blowfish-tutorial/"
date: 2023-10-04
draft: false
showauthor: false
authors:
  - nunocoracao
---

一年前我创建了 [Blowfish](https://blowfish.page/)，这是一个为了打造我的个人主页而精心设计的 [Hugo](https://gohugo.io/) 主题。我决定将其作为一个开源项目。直到今天，Blowfish 已经变成了一个蓬勃发展的开源项目，在 GitHub 上拥有超过900个 star 和数百名用户。在本教程中，我将向你展示如何搭建并在几分钟内让你的网站运行起来。

{{< github repo="nunocoracao/blowfish" >}}

## TL;DR

本指南的目标是指导新用户如何使用 Hugo 快速安装、管理和发布自己的网站。最终的版本可以看这个[代码库](https://github.com/nunocoracao/blowfish-tutorial/tree/main)——如果你想直接跳到结尾的话可以直接看这里。

![指南示例](img/01.png)

视觉风格只是 Blowfish 提供的众多特性之一。想要了解更多，我们鼓励你浏览[文档](https://blowfish.page/)，学习如何根据自己的需求自定义主题。另外，已经有许多其他用户使用该主题并提供了十分优秀的[示例](https://blowfish.page/users/)，来为你提供灵感。Blowfish 还提供了一些额外的基于 `短代码` 的功能——你可以在[这里](https://blowfish.page/docs/shortcodes/)查看它们以获取更多灵感。

## 设置你的环境

让我们从安装工具开始。本指南涵盖了在 Mac 操作系统下的步骤，这些命令可能不适用于你的硬件和操作系统。如果你使用的是 Windows 或 Linux，请参考文档：[安装 Hugo](https://gohugo.io/installation/) 和[GitHub CLI](https://cli.github.com/)。

无论如何，如果你使用的是 MacOS，那么首先需要安装 `brew` ——一个专为 MacOS 的包管理器，这将有助于安装和管理其他工具。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装完成 `brew` 后，让我们安装 Git, Hugo 和 GitHub CLI。
```bash
brew install git
brew install hugo
brew install gh
```

为你的网站代码创建一个文件夹，并在终端中打开（我在下面创建了 _blowfish-tutorial_ 文件夹，当然你可以将其重命名为任何名称）。
```bash
mkdir blowfish-tutorial
cd blowfish-tutorial
```

进入文件夹后的下一步，就是初始化你本地的 `git` 仓库。
```bash
git init -b main
```

现在，让我们创建并同步本地仓库到 GitHub 仓库，这样你的代码就可以在远程存储。
```bash
gh auth login
gh repo create
git push --set-upstream origin main
```

查看下面的图片，这是我的远程仓库的地址。同样地，你也可以随意更改以适应你自己的 GitHub 仓库。

![gh repo 创建示例](img/ghcreate.png)

最后，创建一个 **.gitignore** 文件，它会自动排除某些文件，以防止这些文件传到远程仓库。下面的例子是我在 **.gitignore** 文件中添加的文件和文件夹。

```bash
#others
node_modules
.hugo_build.lock

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes

# Hugo
public
```

最后一步是保存所有更改，并推送到你的远程仓库中。
The last step is to save all the changes to the repo.
```bash
git add .
git commit -m “initial commit”
git push
```


## 创建并配置站点

所有的准备工作就绪后，创建和配置你的站点将会很容易。继续在上一部分你创建的文件夹内，让我们首先创建一个空的 Hugo 网站（_不关联任何主题_）。

```bash
hugo new site --force .
```

执行完成后，尝试用下面的命令来运行你的网站。打开浏览器并访问 _[https://localhost:1313](https://localhost:1313)_ 即可查看你的网站。
 
```bash
hugo server
```

emmmm… 页面未找到404了，是吧？
这是预期内的，你创建了一个空白网站，Hugo 不会添加任何默认的页面——换句话说，你的网站还没有任何页面可以显示。

下一步，让我门使用 `git submodules` 来安装 Blowfish。通过 `git submodules` 安装可以让以后管理和升级 Blowfish 主题更加方便。
 
```bash
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

接下来，在你的代码根目录下创建 `config/_default/` 文件夹。现在你需要下载[这些文件](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip)，并把它们放在刚刚创建的 _\_default_ 文件夹内。最终的文件结构看起来应该是这样的。

```md
config/_default/
├─ config.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
└─ params.toml
`
```

打开 **config.toml** 并把 **theme = "blowfish”** 这一样的注释取消掉，目前为止你已经准备好了。再次尝试运行网站，并打开浏览器在_[https://localhost:1313](https://localhost:1313)_查看效果。

```bash
hugo server
```

你应该能看到下面这样。目前我们还没有添加任何内容，所以还没有页面，但是 Blowfish 主题已经准备就绪，下面只需要配置。

![blowfish 空站点](img/blowfishempty.png)

现在我们来配置主题。

{{< alert  d>}}
**仅供参考** 本指南不会详细介绍 Blowfish 中的所有特性和参数——如果想要了解所有的功能特性和参数，以及如何使用它们，请参考[Blowfish 文档](https://blowfish.page/docs/configuration/#theme-parameters)。
{{< /alert >}}

### menus.en.toml
这个文件定义了你的顶部（banner）和底部（footer）的菜单结构。对于本指南，我们只使用菜单的这两部分：_Posts_ 和 _Tags_。
- **Posts** - 用于展示网站中的所有内容条目的完整列表
- **Tags** - 自动生成每篇文章的标签

为了实现这一点，请确保 **menus.en.toml** 文件中设置了以下参数。完成修改后，重新运行**hugo server**，你将会看到顶部菜单。

```toml
[[main]]
  name = "Posts"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Tags"
  pageRef = "tags"
  weight = 30
```


### languages.en.toml

这个文件配置了网站作者的详细信息。修改下面的内容来定义你自己的信息。

```bash
[author]
   name = "名字在这"
   image = "profile.jpg"
   headline = "我是个好人"
   bio = "关于我的二三事" # 出现在每篇文章的作者卡片中
```

网站的图片需要防止在 _assets_ 文件夹内。针对这一步，请将一张你的个人图片添加到这个文件夹，并命名为 _profile.jpg_。
你可以修改这个文件名，确保文件名和上面个人信息中 `image` 的参数值对应就行。如果你没有个人图片可用，你可以使用下面的图片继续教程。

![profile](img/profile.jpg "assets/profile.jpg")

最后一步是配置你的链接——社交媒体、GitHub 等等。该文件包含了所有支持的链接选项，不过他们被注释掉了。你可以将你希望展示的个人链接的配置项接触注释，也可以替换他们的展示顺序。

### params.toml

这个文件是 Blowfish 的配置文件。大部分的视觉选项或自定义的选项可以通过它进行配置，它涵盖了 Blowfish 主题的多个功能特性。
对于本指南，我决定使用 **background** 布局，你也可以[查看Blowfish主题其他的主页布局](https://blowfish.page/)；同时使用了 **Neon** 颜色方案，你可以查看[完整的颜色方案列表](https://blowfish.page/docs/getting-started/#colour-schemes)或者[创建自己的颜色方案](https://blowfish.page/docs/advanced-customisation/#colour-schemes)。

将 **image.jpg** 文件添加到 assets 文件夹，它将会作为网站的背景。你可以挑选自己喜欢的，当然也可以用本指南中使用的这张图。

![background](img/background.jpg "assets/image.jpg")

现在让我们打开 _params.toml_ 并开始配置。在这里我只会关注需要修改的值，不要再没看文档的情况下，删除此文件的其余部分。

首先让我们确保上面提到的正确的颜色方案，开启图片优化，并设置默认背景图片。

```bash
colorScheme = "neon"
disableImageOptimization = false
defaultBackgroundImage = "image.jpg" # used as default for background images 
```

接下来，让我们配置首页。我们选择了 _background_ 布局，配置首页图片和最近文章。此外，可以使用 **card view** 卡片展示的方式来展现最新文章。最后让我们配置头部固定。

```bash
[homepage]
  layout = "background" # valid options: page, profile, hero, card, background, custom
  homepageImage = "image.jpg" # used in: hero, and card
  showRecent = true
  showRecentItems = 6
  showMoreLink = true
  showMoreLinkDest = "/posts/"
  cardView = true
  cardViewScreenWidth = false
  layoutBackgroundBlur = true # only used when layout equals background

[header]
  layout = "fixed"
```

现在配置文章和列表页面的展示。下面是他们的配置。

```bash
[article]
  showHero = true
  heroStyle = "background" 
  showSummary = true
  showTableOfContents = true
  showRelatedContent = true
  relatedContentLimit = 3

[list]
  showCards = true
  groupByYear = false
  cardView = true
```

如果你再次运行**hugo server**，你会看到类似下面这张图的效果。
If you run **hugo server** again, you should see something like the image below.


![blowfish 没有文章](img/blowfishnoarticles.png)



## 在你的网站中添加内容

创建一个文件夹`/content/posts`，在这个文件夹下添加你的帖子或文章。这也是你在菜单所配置的所有文章的根目录。在这个文件夹内，让我们创建一个新目录并命名为 **myfirstpost**。在这个目录中创建一个**index.md**文件作为你的文章，同样也在这个目录中添加**featured.jpg**或**featured.png**作为文章的缩略图。
参考下面这个示例。文件中的前几行是扉页参数（Front Matter），它定义了 Hugo 如何展示文章，更多的参数可以参考[这里](https://blowfish.page/docs/front-matter/)。

```md
---
title: "我的第一篇帖子"
date: 2023-08-14
draft: false
summary: "这是网站的第一篇你帖子"
tags: ["space"]
---

## 一个副标题

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisl, vulputate eu lacus vitae, maximus molestie libero. Vestibulum laoreet, odio et sollicitudin sollicitudin, quam ligula tempus urna, sed sagittis eros eros ac felis. In tristique tortor vitae lacinia commodo. Mauris venenatis ultrices purus nec fermentum. Nunc sit amet aliquet metus. Morbi nisl felis, gravida ac consequat vitae, blandit eu libero. Curabitur porta est in dui elementum porttitor. Maecenas fermentum, tortor ac feugiat fringilla, orci sem sagittis massa, a congue risus ipsum vel massa. Aliquam sit amet nunc vulputate, facilisis neque in, faucibus nisl.
```

你可以创建其他文章，来查看和验证站点的效果。你的网站应该像下面的图片一样。
主页显示最近的文章，每篇文章通过相关部分自动关联其他文章，有标签聚合和全文搜索。

{{< gallery >}}
  <img src="img/blowfishrecent.png" class="grid-w50" />
  <img src="img/article.png" class="grid-w50" />
  <img src="img/search.png" class="grid-w50" />
  <img src="img/tag.png" class="grid-w50" />
{{< /gallery >}}


## 发布它

现在只剩下发布你的网站了。我将会使用 [Firebase](https://firebase.google.com/) 作为托管服务——这是一个免费的替代方案，如果你创建了更复杂的东西，它提供了高级功能。前往 [Firebase](https://firebase.google.com/) 创建一个新项目，然后我们切换到 CLI 终端，这将是配置 [Firebase](https://firebase.google.com/) 更加简单。

让我们安装 [Firebase](https://firebase.google.com/) CLI 工具 —— 如果你不是 MacOS，请查看 [Firebase安装指南](https://firebase.google.com/docs/cli)。
```bash
brew install firebase
```

现在登录并为你的项目初始化firebase托管服务。

```bash
firebase login
firebase init
```

选择托管并继续。

![firebase 初始化](img/firebasecli.png)

按照下面的图片进行，这是我推荐的方式。确保设置了 GitHub actions 工作流文件。这将保证你的 GitHub 仓库一旦有变化，就会立刻同步部署。

![firebase 选项](img/firebaseoptions.png)

然而，这些文件不会立刻开始运行，因为 Hugo 需要额外的步骤来提前构建。将下面的代码复制并粘贴到 **.github** 文件夹，同时保留文件中 firebase 生成的**projectId**。

### firebase-hosting-merge.yml
```yaml
# This file was auto-generated by the Firebase CLI
# https://github.com/firebase/firebase-tools

name: Deploy to Firebase Hosting on merge
'on':
  push:
    branches:
      - main
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Hugo setup
        uses: peaceiris/actions-hugo@v2.6.0
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: 'true'

      - name: Check out code into the Go module directory
        uses: actions/checkout@v4
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Build with Hugo
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: hugo -E -F --minify -d public

      - name: Deploy Production
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BLOWFISH_TUTORIAL }}'
          channelId: live
          projectId: blowfish-tutorial

```


### firebase-hosting-pull-request.yml
```yaml
# This file was auto-generated by the Firebase CLI
# https://github.com/firebase/firebase-tools

name: Deploy to Firebase Hosting on PR
'on': pull_request
jobs:
  build_and_preview:
    if: '${{ github.event.pull_request.head.repo.full_name == github.repository }}'
    runs-on: ubuntu-latest
    steps:
      - name: Hugo setup
        uses: peaceiris/actions-hugo@v2.6.0
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: 'true'

      - name: Check out code into the Go module directory
        uses: actions/checkout@v4
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Build with Hugo
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run:  hugo -E -F --minify -d public

      - name: Deploy preview
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BLOWFISH_TUTORIAL }}'
          expires: 30d
          channelId: preview-${{ github.event.number }}
          projectId: blowfish-tutorial
```

最后一步是将你的代码提交到 GitHub，提交成功后 GitHub actions 工作流将会自动触发，并构建和部署你的网站。

```bash
git add .
git commit -m "add github actions workflows"  
git push  
```

你的 GitHub 仓库中的 actions 模块，将会显示类似下图的内容。

![gh actions](img/githubactions.png)

当所有步骤完成之后，你的 Firebase 控制台将会显示类似下图的内容，包括一个可以查看网站的链接。我在[https://blowfish-tutorial.web.app/](https://blowfish-tutorial.web.app/)中运行了这个教程。
Once all the steps finish, your Firebase console should show something like the image below - including the links to see your app – I got a version of this tutorial running on [https://blowfish-tutorial.web.app/](https://blowfish-tutorial.web.app/).

![firebase console](img/firebaseconsole.png)


## 结论和下一步

现在你有了主页的第一个版本。你可以在本地进行更改，只要你提交代码，将会自动展示在你的网站中。
那么接下来要做什么呢？我给你留了一下链接，相信会对你有所帮你，其它这些链接会让你获得灵感并了解更多 Blowfish 和 Hugo 的内容。
Now you have your first version of your homepage. You can make changes locally and once you commit your code they will automatically be reflected online. What shall you do next? I’ll leave you with some useful links to get you inspired and learn more about Blowfish and Hugo. 

- https://blowfish.page/docs/
- https://blowfish.page/docs/configuration/
- https://blowfish.page/docs/shortcodes/
- https://blowfish.page/examples/
- https://blowfish.page/users/
- https://gohugo.io/documentation/

![blowfish final](img/01.png)
