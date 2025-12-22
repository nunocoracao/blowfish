---
title: "Hébergement & Déploiement"
weight: 14
draft: false
description: "Apprenez à déployer un site Blowfish."
slug: "hosting-deployment"
tags: ["documentation", "hébergement", "déploiement", "github", "netlify", "render"]
series: ["Documentation"]
series_order: 14
---

Il existe de nombreuses façons de déployer votre site web Hugo construit avec Blowfish. Le thème est conçu pour être flexible dans presque tous les scénarios de déploiement.

Blowfish utilise des URLs relatives tout au long du thème. Cela permet aux sites d'être facilement déployés dans des sous-dossiers et sur des hôtes comme GitHub Pages. Il n'y a généralement pas de configuration spéciale requise tant que le paramètre `baseURL` a été configuré dans le fichier `hugo.toml`.

La documentation officielle Hugo [Hébergement et Déploiement](https://gohugo.io/hosting-and-deployment/) est le meilleur endroit pour apprendre à déployer votre site. Les sections ci-dessous contiennent quelques détails de configuration spécifiques au thème qui peuvent vous aider à déployer sans problème avec certains fournisseurs.

**Choisissez votre fournisseur :**

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Render](#render)
- [Cloudflare Pages](#cloudflare-pages)
- [Hébergement partagé, VPS ou serveur web privé](#hébergement-partagé-vps-ou-serveur-web-privé)

---

## GitHub Pages

GitHub permet l'hébergement sur [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) en utilisant Actions. Pour activer cette fonctionnalité, activez Pages sur votre dépôt et créez un nouveau workflow Actions pour construire et déployer votre site.

Le fichier doit être au format YAML, placé dans le répertoire `.github/workflows/` de votre dépôt GitHub et nommé avec une extension `.yml`.

{{< alert >}}
**Important :** Assurez-vous de définir le bon nom de branche sous `branches` et dans le paramètre `if` de l'étape de déploiement vers la branche source utilisée dans votre projet.
{{< /alert >}}

```yaml
# .github/workflows/gh-pages.yml

name: GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-24.04
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: "latest"

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./public
```

Poussez le fichier de configuration vers GitHub et l'action devrait s'exécuter automatiquement. Elle peut échouer la première fois et vous devrez visiter la section **Settings > Pages** de votre dépôt GitHub pour vérifier que la source est correcte. Elle devrait être configurée pour utiliser la branche `gh-pages`.

{{< screenshot src="github-pages-source.jpg" alt="Capture d'écran de la source GitHub Pages" >}}

Une fois les paramètres configurés, relancez l'action et le site devrait se construire et se déployer correctement. Vous pouvez consulter les logs d'actions pour vérifier que tout s'est déployé avec succès.

## Netlify

Pour déployer sur [Netlify](https://www.netlify.com), créez un nouveau site de déploiement continu et liez-le à votre code source. Les paramètres de construction peuvent être laissés vides dans l'interface Netlify. Vous n'aurez qu'à configurer le domaine que vous utiliserez.

{{< screenshot src="netlify-build-settings.jpg" alt="Capture d'écran des paramètres de construction Netlify" >}}

Puis dans la racine du dépôt de votre site, créez un fichier `netlify.toml` :

```toml
# netlify.toml

[build]
  command = "hugo mod get -u && hugo --gc --minify -b $URL"
  publish = "public"

[build.environment]
  NODE_ENV = "production"
  GO_VERSION = "1.16"
  TZ = "UTC"  # Définir selon le fuseau horaire préféré

[context.production.environment]
  HUGO_VERSION = "0.104.1"
  HUGO_ENV = "production"

[context.deploy-preview.environment]
  HUGO_VERSION = "0.104.1"
```

Cette configuration suppose que vous déployez Blowfish en tant que module Hugo. Si vous avez installé le thème en utilisant une autre méthode, changez la commande de construction simplement en `hugo --gc --minify -b $URL`.

Lorsque vous poussez le fichier de configuration vers votre dépôt, Netlify devrait déployer automatiquement votre site. Vous pouvez vérifier les logs de déploiement dans l'interface Netlify pour toute erreur.

## Render

Le déploiement sur [Render](https://render.com) est très simple et toute la configuration se fait via l'interface Render.

Créez un nouveau **Static Site** et liez-le au dépôt de code de votre projet. Puis configurez simplement la commande de construction comme `hugo --gc --minify` et le répertoire de publication comme `public`.

{{< screenshot src="render-settings.jpg" alt="Capture d'écran des paramètres Render" >}}

Le site se construira et se déploiera automatiquement chaque fois que vous pousserez un changement vers votre dépôt.

## Cloudflare Pages

Cloudflare offre le service [Pages](https://pages.cloudflare.com/) qui peut héberger des blogs Hugo. Il construit le site à partir d'un dépôt git et l'héberge ensuite sur le CDN de Cloudflare. Suivez leur [guide de déploiement Hugo](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site) pour commencer.

La fonctionnalité Rocket Loader™ offerte par Cloudflare essaie d'accélérer le rendu des pages web avec JavaScript, mais elle casse le sélecteur d'apparence dans le thème. Elle peut également causer un flash d'écran clair/sombre ennuyeux lors de la navigation sur votre site en raison du chargement des scripts dans le mauvais ordre.

Ce problème peut être résolu en le désactivant :

- Allez sur le [tableau de bord Cloudflare](https://dash.cloudflare.com)
- Cliquez sur votre nom de domaine dans la liste
- Cliquez sur _Optimization_ dans la section _Speed_
- Faites défiler jusqu'à _Rocket Loader™_ et désactivez-le

Les sites Hugo construits avec Blowfish chargent toujours très rapidement, même avec cette fonctionnalité désactivée.

## Hébergement partagé, VPS ou serveur web privé

Utiliser un hébergement web traditionnel, ou déployer sur votre propre serveur web, est aussi simple que de construire votre site Hugo et de transférer les fichiers vers votre hôte.

Assurez-vous que le paramètre `baseURL` dans `hugo.toml` est défini sur l'URL complète vers la racine de votre site web (y compris les sous-domaines ou sous-dossiers).

Puis construisez votre site en utilisant `hugo` et copiez le contenu du répertoire de sortie vers la racine de votre serveur web et vous serez prêt. Par défaut, le répertoire de sortie est nommé `public`.

_Si vous avez besoin d'un fournisseur d'hébergement, consultez [Vultr](https://www.vultr.com/?ref=8957394-8H) ou [DigitalOcean](https://m.do.co/c/36841235e565). L'inscription via ces liens d'affiliation vous donnera jusqu'à 100$ de crédit gratuit pour essayer le service._
