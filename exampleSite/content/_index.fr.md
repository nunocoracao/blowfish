---
title: "Créez un site qui vous ressemble vraiment."
description: "Un thème Hugo moderne et flexible pour les blogs, la documentation, les portfolios et plus encore."
lastmod: 2026-08-30
heroLead: "Blowfish vous offre des layouts expressifs, des réglages par défaut bien pensés et des blocs de contenu pratiques, pour vous concentrer sur ce que vous voulez dire."
heroButtons:
  - label: "Commencer"
    url: "/fr/docs/installation/"
  - label: "Explorer la documentation"
    url: "/fr/docs/"
    style: "outline"
  - label: "Star sur GitHub"
    url: "https://github.com/nunocoracao/blowfish"
    style: "outline"
    github: "nunocoracao/blowfish"
heroImage: "images/v3/welcome.png"
---

{{< stats >}}
{{< stat value="5" label="Layouts d'accueil" >}}Choisissez la structure qui convient au site que vous créez.{{< /stat >}}
{{< stat value="40+" label="Shortcodes" >}}Composez un contenu expressif sans maintenir de templates sur mesure.{{< /stat >}}
{{< stat value="100%" label="Votre contenu" >}}Markdown portable, configuration Hugo familière et aucune dépendance.{{< /stat >}}
{{< /stats >}}

{{< feature-grid >}}
{{< feature icon="list-check" title="Faites-le vôtre" url="/fr/docs/configuration/" >}}
Un système cohérent de layouts, couleurs, typographie et contrôles de contenu.
{{< /feature >}}
{{< feature icon="code" title="Composez plus vite" url="/fr/docs/shortcodes/" label="Parcourir les shortcodes" >}}
Des composants utiles pour des histoires plus riches, une documentation plus claire et moins de code sur mesure.
{{< /feature >}}
{{< feature icon="heart" title="Développé au grand jour" url="/fr/users/" >}}
Découvrez des sites réels, des contributions de la communauté et des patterns éprouvés en production.
{{< /feature >}}
{{< feature icon="wand-magic-sparkles" title="Conçu pour les agents IA" url="/fr/docs/installation/#skill-pour-agents" label="Installer le skill" >}}
Blowfish inclut un skill qui apprend à Claude Code et à d'autres agents de codage à installer, configurer et utiliser le thème.
{{< /feature >}}
{{< /feature-grid >}}

{{< alert >}}
**Blowfish v3.5 est disponible.** Créez un nouveau site avec `npx blowfish-tools new <site>` ou [mettez à niveau un site existant]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).

**Vous travaillez avec un agent de codage ?** Dans Claude Code, exécutez `/plugin marketplace add nunocoracao/blowfish`, puis `/plugin install blowfish@blowfish`. Pour un autre agent qui lit les skills du projet, copiez le [dossier du skill `blowfish`](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) dans `.claude/skills/blowfish/` de votre site.
{{< /alert >}}
