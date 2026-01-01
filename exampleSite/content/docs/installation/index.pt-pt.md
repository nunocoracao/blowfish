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

Instruções detalhadas de instalação podem ser encontradas abaixo. Instruções para [atualizar o tema](#instalar-atualizações) também estão disponíveis.

## Instalação

Estas instruções irão ajudá-lo a começar com Hugo e Blowfish a partir de um estado completamente vazio. A maioria das dependências mencionadas neste guia pode ser instalada utilizando o gestor de pacotes da sua escolha para a sua plataforma.

### Instalar Hugo

Se nunca utilizou Hugo antes, precisará de [instalá-lo na sua máquina local](https://gohugo.io/getting-started/installing). Pode verificar se já está instalado executando o comando `hugo version`.

{{< alert >}}
Certifique-se de que está a utilizar **Hugo versão 0.141.0** ou posterior, pois o tema aproveita algumas das funcionalidades mais recentes do Hugo.
{{< /alert >}}

Pode encontrar instruções de instalação detalhadas para a sua plataforma na [documentação do Hugo](https://gohugo.io/getting-started/installing).

### Blowfish Tools (recomendado)

Acabámos de lançar uma nova ferramenta CLI para o ajudar a começar com o Blowfish. Irá criar um novo projeto Hugo, instalar o tema e configurar os ficheiros de configuração do tema por si. Ainda está em beta, por isso [reporte quaisquer problemas que encontrar](https://github.com/nunocoracao/blowfish-tools).

Instale a ferramenta CLI globalmente utilizando npm (ou outro gestor de pacotes):
```shell
npx blowfish-tools
```
ou

```shell
npm i -g blowfish-tools
```

Em seguida, execute o comando `blowfish-tools` para iniciar uma execução interativa que o guiará através dos casos de uso de criação e configuração.
```shell
blowfish-tools
```

Também pode executar o comando `blowfish-tools new` para criar um novo projeto Hugo e instalar o tema de uma só vez. Consulte a ajuda do CLI para mais informações.
```shell
blowfish-tools new mynewsite
```

Aqui está um vídeo curto de quão rápido é começar com o Blowfish utilizando a ferramenta CLI:

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SgXhGb-7QbU?si=ce44baicuQ6zMeXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Instalação sem CLI

#### Criar um novo site

Execute o comando `hugo new site mywebsite` para criar um novo site Hugo num diretório chamado `mywebsite`.

Note que pode nomear o diretório do projeto como quiser, mas as instruções abaixo assumem que se chama `mywebsite`. Se utilizar um nome diferente, certifique-se de o substituir adequadamente.

#### Transferir o tema Blowfish

Existem várias formas diferentes de instalar o tema Blowfish no seu site Hugo. Da mais fácil para a mais difícil de instalar e manter, são:

- [Submódulo Git](#instalação-com-git) (recomendado)
- [Módulo Hugo](#instalação-com-hugo)
- [Cópia manual de ficheiros](#instalação-manual)

Se não tem a certeza, escolha o método do submódulo Git.

#### Instalação com Git

Este método é o mais rápido e fácil para manter o tema atualizado. Além do **Hugo** e **Go**, também precisará de garantir que o **Git** está instalado na sua máquina local.

Mude para o diretório do seu site Hugo (que criou acima), inicialize um novo repositório `git` e adicione o Blowfish como submódulo.

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

Em seguida, continue para [configurar os ficheiros de configuração do tema](#configurar-ficheiros-de-configuração-do-tema).

#### Instalação com Hugo

Para este método, utilizará o Hugo para gerir os seus temas. O Hugo utiliza **Go** para inicializar e gerir módulos, por isso certifique-se de ter o `go` instalado antes de prosseguir.

1. [Transfira](https://golang.org/dl/) e instale o Go. Pode verificar se já está instalado utilizando o comando `go version`.

   {{< alert >}}
   Certifique-se de que está a utilizar **Go versão 1.12** ou posterior, pois o Hugo exige isto para que os módulos funcionem corretamente.
   {{< /alert >}}

2. A partir do diretório do seu projeto Hugo (que criou acima), inicialize os módulos para o seu site:

   ```shell
   # Se está a gerir o seu projeto no GitHub
   hugo mod init github.com/<username>/<repo-name>

   # Se está a gerir o seu projeto localmente
   hugo mod init my-project
   ```

3. Adicione o tema à sua configuração criando um novo ficheiro `config/_default/module.toml` e adicionando o seguinte:

   ```toml
   [[imports]]
   disable = false
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. Inicie o seu servidor utilizando `hugo server` e o tema será transferido automaticamente.
5. Continue para [configurar os ficheiros de configuração do tema](#configurar-ficheiros-de-configuração-do-tema).

#### Instalação manual

1. Transfira a versão mais recente do código-fonte do tema.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Transferir do Github{{< /button >}}

2. Extraia o arquivo, renomeie a pasta para `blowfish` e mova-a para o diretório `themes/` dentro da pasta raiz do seu projeto Hugo.
3. Continue para [configurar os ficheiros de configuração do tema](#configurar-ficheiros-de-configuração-do-tema).

#### Configurar ficheiros de configuração do tema

Na pasta raiz do seu site, elimine o ficheiro `hugo.toml` que foi gerado pelo Hugo. Copie os ficheiros de configuração `*.toml` do tema para a sua pasta `config/_default/`. Isto garantirá que tem todas as configurações corretas do tema e permitirá personalizar facilmente o tema de acordo com as suas necessidades.

{{< alert >}}
**Nota:** Não deve sobrescrever o ficheiro `module.toml` se já existir um no seu projeto!
{{< /alert >}}

Dependendo de como instalou o tema, encontrará os ficheiros de configuração do tema em locais diferentes:

- **Módulos Hugo:** No diretório de cache do Hugo, ou [transfira uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub
- **Submódulo Git ou instalação manual:** `themes/blowfish/config/_default`

Depois de copiar os ficheiros, a sua pasta de configuração deve ficar assim:

```shell
config/_default/
├─ hugo.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # se instalou utilizando Módulos Hugo
└─ params.toml
```

{{< alert >}}
**Importante:** Se não utilizou Módulos Hugo para instalar o Blowfish, deve adicionar a linha `theme = "blowfish"` no topo do seu ficheiro `hugo.toml`.
{{< /alert >}}

### Próximos passos

A instalação básica do Blowfish está agora completa. Continue para a secção [Primeiros Passos]({{< ref "getting-started" >}}) para saber mais sobre a configuração do tema.

---

## Instalar atualizações

De tempos a tempos, [novas versões](https://github.com/nunocoracao/blowfish/releases) serão publicadas que aplicam correções e adicionam novas funcionalidades ao tema. Para tirar partido destas alterações, precisará de atualizar os ficheiros do tema no seu site.

Como fará isto dependerá do método de instalação que escolheu quando o tema foi originalmente instalado. Instruções para cada método podem ser encontradas abaixo.

- [Submódulo Git](#atualização-com-git)
- [Módulo Hugo](#atualização-com-hugo)
- [Cópia manual de ficheiros](#atualização-manual)

### Atualização com Git

Submódulos Git podem ser atualizados utilizando o comando `git`. Simplesmente execute o seguinte comando e a versão mais recente do tema será transferida para o seu repositório local:

```shell
git submodule update --remote --merge
```

Depois de o submódulo ser atualizado, reconstrua o seu site e verifique se tudo funciona como esperado.

### Atualização com Hugo

O Hugo torna a atualização de módulos super fácil. Simplesmente mude para o diretório do seu projeto e execute o seguinte comando:

```shell
hugo mod get -u
```

O Hugo atualizará automaticamente quaisquer módulos necessários para o seu projeto. Faz isto inspecionando os seus ficheiros `module.toml` e `go.mod`. Se tiver problemas com a atualização, verifique se estes ficheiros ainda estão configurados corretamente.

Em seguida, simplesmente reconstrua o seu site e verifique se tudo funciona como esperado.

### Atualização manual

Atualizar o Blowfish manualmente requer que transfira a cópia mais recente do tema e substitua a versão antiga no seu projeto.

{{< alert >}}
Note que quaisquer personalizações locais que tenha feito aos ficheiros do tema serão perdidas durante este processo.
{{< /alert >}}

1. Transfira a versão mais recente do código-fonte do tema.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Transferir do Github{{< /button >}}

2. Extraia o arquivo, renomeie a pasta para `blowfish` e mova-a para o diretório `themes/` dentro da pasta raiz do seu projeto Hugo. Precisará de sobrescrever o diretório existente para substituir todos os ficheiros do tema.

3. Reconstrua o seu site e verifique se tudo funciona como esperado.
