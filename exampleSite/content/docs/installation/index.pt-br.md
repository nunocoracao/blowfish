---
title: "Instalação"
weight: 2
draft: false
description: "Como instalar o tema Blowfish."
slug: "installation"
tags: ["instalação", "documentação"]
series: ["Documentação"]
series_order: 2
---

Simplesmente siga o procedimento padrão do Hugo [Início Rápido](https://gohugo.io/getting-started/quick-start/) para começar rapidamente.

Instruções detalhadas de instalação podem ser encontradas abaixo. Instruções para [atualizar o tema](#instalando-atualizações) também estão disponíveis.

## Instalação

Estas instruções vão te ajudar a começar com Hugo e Blowfish a partir de um estado completamente vazio. A maioria das dependências mencionadas neste guia pode ser instalada usando o gerenciador de pacotes de sua escolha para sua plataforma.

### Instalar Hugo

Se você nunca usou Hugo antes, precisará [instalá-lo em sua máquina local](https://gohugo.io/getting-started/installing). Você pode verificar se já está instalado executando o comando `hugo version`.

{{< alert >}}
Certifique-se de estar usando **Hugo versão 0.141.0** ou posterior, pois o tema aproveita alguns dos recursos mais recentes do Hugo.
{{< /alert >}}

Você pode encontrar instruções de instalação detalhadas para sua plataforma na [documentação do Hugo](https://gohugo.io/getting-started/installing).

### Blowfish Tools (recomendado)

Acabamos de lançar uma nova ferramenta CLI para ajudá-lo a começar com o Blowfish. Ela criará um novo projeto Hugo, instalará o tema e configurará os arquivos de configuração do tema para você. Ainda está em beta, então por favor [reporte quaisquer problemas que encontrar](https://github.com/nunocoracao/blowfish-tools).

Instale a ferramenta CLI globalmente usando npm (ou outro gerenciador de pacotes):
```shell
npx blowfish-tools
```
ou

```shell
npm i -g blowfish-tools
```

Em seguida, execute o comando `blowfish-tools` para iniciar uma execução interativa que irá guiá-lo através dos casos de uso de criação e configuração.
```shell
blowfish-tools
```

Você também pode executar o comando `blowfish-tools new` para criar um novo projeto Hugo e instalar o tema de uma só vez. Verifique a ajuda do CLI para mais informações.
```shell
blowfish-tools new mynewsite
```

Aqui está um vídeo curto de quão rápido é começar com o Blowfish usando a ferramenta CLI:

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SgXhGb-7QbU?si=ce44baicuQ6zMeXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Instalação sem CLI

#### Criar um novo site

Execute o comando `hugo new site mywebsite` para criar um novo site Hugo em um diretório chamado `mywebsite`.

Note que você pode nomear o diretório do projeto como quiser, mas as instruções abaixo assumem que ele se chama `mywebsite`. Se você usar um nome diferente, certifique-se de substituí-lo adequadamente.

#### Baixar o tema Blowfish

Existem várias maneiras diferentes de instalar o tema Blowfish em seu site Hugo. Da mais fácil para a mais difícil de instalar e manter, são:

- [Submódulo Git](#instalação-com-git) (recomendado)
- [Módulo Hugo](#instalação-com-hugo)
- [Cópia manual de arquivos](#instalação-manual)

Se você não tem certeza, escolha o método do submódulo Git.

#### Instalação com Git

Este método é o mais rápido e fácil para manter o tema atualizado. Além do **Hugo** e **Go**, você também precisará garantir que o **Git** esteja instalado em sua máquina local.

Mude para o diretório do seu site Hugo (que você criou acima), inicialize um novo repositório `git` e adicione o Blowfish como submódulo.

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

Em seguida, continue para [configurar os arquivos de configuração do tema](#configurar-arquivos-de-configuração-do-tema).

#### Instalação com Hugo

Para este método, você usará o Hugo para gerenciar seus temas. O Hugo usa **Go** para inicializar e gerenciar módulos, então certifique-se de ter o `go` instalado antes de prosseguir.

1. [Baixe](https://golang.org/dl/) e instale o Go. Você pode verificar se já está instalado usando o comando `go version`.

   {{< alert >}}
   Certifique-se de estar usando **Go versão 1.12** ou posterior, pois o Hugo exige isso para que os módulos funcionem corretamente.
   {{< /alert >}}

2. Do diretório do seu projeto Hugo (que você criou acima), inicialize os módulos para seu site:

   ```shell
   # Se você está gerenciando seu projeto no GitHub
   hugo mod init github.com/<username>/<repo-name>

   # Se você está gerenciando seu projeto localmente
   hugo mod init my-project
   ```

3. Adicione o tema à sua configuração criando um novo arquivo `config/_default/module.toml` e adicionando o seguinte:

   ```toml
   [[imports]]
   disable = false
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. Inicie seu servidor usando `hugo server` e o tema será baixado automaticamente.
5. Continue para [configurar os arquivos de configuração do tema](#configurar-arquivos-de-configuração-do-tema).

#### Instalação manual

1. Baixe a versão mais recente do código-fonte do tema.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Baixar do Github{{< /button >}}

2. Extraia o arquivo, renomeie a pasta para `blowfish` e mova-a para o diretório `themes/` dentro da pasta raiz do seu projeto Hugo.
3. Continue para [configurar os arquivos de configuração do tema](#configurar-arquivos-de-configuração-do-tema).

#### Configurar arquivos de configuração do tema

Na pasta raiz do seu site, exclua o arquivo `hugo.toml` que foi gerado pelo Hugo. Copie os arquivos de configuração `*.toml` do tema para sua pasta `config/_default/`. Isso garantirá que você tenha todas as configurações corretas do tema e permitirá personalizar facilmente o tema de acordo com suas necessidades.

{{< alert >}}
**Nota:** Você não deve sobrescrever o arquivo `module.toml` se já existir um em seu projeto!
{{< /alert >}}

Dependendo de como você instalou o tema, você encontrará os arquivos de configuração do tema em lugares diferentes:

- **Módulos Hugo:** No diretório de cache do Hugo, ou [baixe uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub
- **Submódulo Git ou instalação manual:** `themes/blowfish/config/_default`

Depois de copiar os arquivos, sua pasta de configuração deve ficar assim:

```shell
config/_default/
├─ hugo.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # se você instalou usando Módulos Hugo
└─ params.toml
```

{{< alert >}}
**Importante:** Se você não usou Módulos Hugo para instalar o Blowfish, você deve adicionar a linha `theme = "blowfish"` no topo do seu arquivo `hugo.toml`.
{{< /alert >}}

### Próximos passos

A instalação básica do Blowfish está agora completa. Continue para a seção [Primeiros Passos]({{< ref "getting-started" >}}) para saber mais sobre a configuração do tema.

---

## Instalando atualizações

De tempos em tempos, [novas versões](https://github.com/nunocoracao/blowfish/releases) serão publicadas que aplicam correções e adicionam novas funcionalidades ao tema. Para aproveitar essas mudanças, você precisará atualizar os arquivos do tema em seu site.

Como você fará isso dependerá do método de instalação que você escolheu quando o tema foi originalmente instalado. Instruções para cada método podem ser encontradas abaixo.

- [Submódulo Git](#atualização-com-git)
- [Módulo Hugo](#atualização-com-hugo)
- [Cópia manual de arquivos](#atualização-manual)

### Atualização com Git

Submódulos Git podem ser atualizados usando o comando `git`. Simplesmente execute o seguinte comando e a versão mais recente do tema será baixada em seu repositório local:

```shell
git submodule update --remote --merge
```

Depois que o submódulo for atualizado, reconstrua seu site e verifique se tudo funciona como esperado.

### Atualização com Hugo

O Hugo torna a atualização de módulos super fácil. Simplesmente mude para o diretório do seu projeto e execute o seguinte comando:

```shell
hugo mod get -u
```

O Hugo atualizará automaticamente quaisquer módulos necessários para seu projeto. Ele faz isso inspecionando seus arquivos `module.toml` e `go.mod`. Se você tiver problemas com a atualização, verifique se esses arquivos ainda estão configurados corretamente.

Em seguida, simplesmente reconstrua seu site e verifique se tudo funciona como esperado.

### Atualização manual

Atualizar o Blowfish manualmente requer que você baixe a cópia mais recente do tema e substitua a versão antiga em seu projeto.

{{< alert >}}
Note que quaisquer personalizações locais que você tenha feito nos arquivos do tema serão perdidas durante este processo.
{{< /alert >}}

1. Baixe a versão mais recente do código-fonte do tema.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Baixar do Github{{< /button >}}

2. Extraia o arquivo, renomeie a pasta para `blowfish` e mova-a para o diretório `themes/` dentro da pasta raiz do seu projeto Hugo. Você precisará sobrescrever o diretório existente para substituir todos os arquivos do tema.

3. Reconstrua seu site e verifique se tudo funciona como esperado.
