---
name: blowfish
description: Install, configure, and build sites with the Blowfish Hugo theme — setup methods, updates, configuration files, homepage layouts, front matter, shortcodes, customization, and theme architecture. Use when working on a Hugo site that uses (or wants to use) Blowfish, or when working on the theme itself.
---

# Blowfish theme

Blowfish is a lightweight Hugo theme built with Tailwind CSS. Docs: https://blowfish.page/ · Repo: https://github.com/nunocoracao/blowfish

Requires Hugo **extended** edition, within the version range declared in the theme's `config.toml` under `[module.hugoVersion]` (check that file — the range is a rolling window that tracks recent Hugo releases).

## Installing

Full walkthrough: https://blowfish.page/docs/installation/

1. **Blowfish Tools CLI:** `npx blowfish-tools` — interactive setup that scaffolds the site and config. `npx blowfish-tools new <site>` creates project + theme in one go.
2. **Git submodule:**
   ```shell
   git init   # if not already a repo
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
   ```
   Then set `theme = "blowfish"` in the site's `config/_default/hugo.toml`.
3. **Hugo module:** `hugo mod init github.com/<user>/<repo>` then in `config/_default/module.toml`:
   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v3"
   ```
4. **Manual:** download the latest release archive, extract to `themes/blowfish/`, set `theme = "blowfish"`.

After installing (any method): delete the site's generated `hugo.toml` in the project root, and copy the theme's `config/_default/*.toml` files into the site's `config/_default/` (don't overwrite `module.toml` if using Hugo modules). A ready-made zip of the config files: https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip

## Updating

- **Git submodule:** `git submodule update --remote --merge`
- **Hugo module:** `hugo mod get -u` (inspects `module.toml` + `go.mod`)
- **Manual:** download the latest release and replace `themes/blowfish/` entirely (local edits inside the theme folder are lost — site-level overrides are safe).
- **Upgrading v2 → v3:** fully backwards compatible; all new features are opt-in and nothing was removed or renamed. Hugo-module users change the import path `…/blowfish/v2` → `…/blowfish/v3` in `module.toml`, then `hugo mod get -u`. Other methods need no changes. Details: https://blowfish.page/docs/installation/#upgrading-from-v2-to-v3

## Configuration

All config lives in the site's `config/_default/` (reference: https://blowfish.page/docs/configuration/):

- `hugo.toml` — core Hugo settings, theme/module import, taxonomies, related-content config.
- `params.toml` — theme behavior. Key areas: `colorScheme`; `defaultAppearance`/`autoSwitchAppearance` (dark mode); `defaultBackgroundImage` + `backgroundCanvas` (site-wide fixed backdrop); `[header] layout` (`basic`, `fixed`, `fixed-fill`, `fixed-gradient`, `fixed-fill-blur`, `floating`) and `mobileMenuStyle` (`fullscreen`/`dropdown`); `[homepage] layout` (`page`, `profile`, `hero`, `card`, `background`, `landing`, `custom`) + `layoutSwitcher`; `[article]`, `[list]`, `[taxonomy]`, `[term]` display flags (hero styles, TOC, reading time/progress, breadcrumbs, `cardView`, `featureImageHover`, …); `[footer]`; search; analytics; comments; Firebase (views/likes).
- `languages.<code>.toml` — site title, author profile (name, image, headline, bio, `links` social icons). One file per language for multilingual sites.
- `menus.<code>.toml` — `[[main]]`, `[[subnavigation]]`, and `[[footer]]` entries (`name`, `pageRef`/`url`, `weight`, optional `pre` icon).
- `markup.toml` — Goldmark config; keep `unsafe = true` (the theme relies on HTML in Markdown).

Front matter overrides most section params per page. Reference table: https://blowfish.page/docs/front-matter/

## Feature → docs map

Point users (and yourself) at the specific page:

- Getting started & colour schemes: https://blowfish.page/docs/getting-started/
- Homepage layouts (incl. `landing` hero with `heroCaption`/`heroLead`/`heroButtons`/`heroImage` front matter): https://blowfish.page/docs/homepage-layout/
- Front matter reference: https://blowfish.page/docs/front-matter/
- All 40+ shortcodes with examples: https://blowfish.page/docs/shortcodes/
- Content examples (article features in action): https://blowfish.page/docs/content-examples/
- Series of articles: https://blowfish.page/docs/series/
- Multi-author setup (`data/authors/*.json` + `authors` taxonomy): https://blowfish.page/docs/multi-author/
- Thumbnails & feature images: https://blowfish.page/docs/thumbnails/
- Partials (analytics, comments, extend-head/extend-footer hooks): https://blowfish.page/docs/partials/
- Advanced customisation (fonts, custom schemes, overrides, npm build): https://blowfish.page/docs/advanced-customisation/
- Firebase views/likes: https://blowfish.page/docs/firebase-views/
- Hosting & deployment (Netlify, Vercel, GitHub Pages, …): https://blowfish.page/docs/hosting-deployment/

## Architecture (how to find things)

Understanding the theme's structure makes searching much faster:

- **Template resolution:** Hugo prefers site files over theme files at the same path. `layouts/_default/baseof.html` is the page skeleton (skip link, `<header>` with the configured header layout, `<main>`, footer, search modal, background canvas). `single.html` = articles, `list.html` = section listings, `terms.html` = taxonomy index (e.g. `/tags/`), `term.html` = one term's articles. All taxonomies share the same two templates.
- **Partial naming convention:** `layouts/partials/<area>/<variant>.html`. Header layouts live in `partials/header/` (all variants delegate the actual menu bar to `header/basic.html`; components like `desktop-menu`, `mobile-menu`, `translations` are in `partials/header/components/`). Hero styles in `partials/hero/` (`basic`, `big`, `background`, `thumbAndBackground`). Homepage layouts in `partials/home/`. Article listing cards in `partials/article-link/` (`card`, `simple`, `card-related`); taxonomy term links in `partials/term-link/`. `partials/icon.html` inlines SVGs from `assets/icons/` by name.
- **Param resolution pattern:** templates resolve display flags as front matter → section params → default, e.g. `.Params.showX | default (site.Params.article.showX | default false)`. Page scope is tracked via `.Scratch.Set "scope"` (`single`/`list`/`terms`/`term`) — some partials branch on it.
- **Styling:** Tailwind source is `assets/css/main.css` (plus `assets/css/components/*`), compiled to `assets/css/compiled/main.css` which is **committed** — after changing templates that use new utility classes, run `npm run build` and commit the compiled file. Colour schemes are CSS custom-property files in `assets/css/schemes/<name>.css` defining `--color-neutral/primary/secondary-{50..900}` as RGB triplets; Tailwind maps them via `tailwind.config.js`. Note: the palette has **no 950 shades** — `*-neutral-950` etc. silently compile to nothing.
- **JavaScript:** small feature scripts in `assets/js/` (appearance/dark-mode toggle, search, zen-mode, reading-progress, hero-scroll-fade, background-blur, …). Most are bundled into `main.bundle.js` in `partials/head.html`; page-conditional ones get their own fingerprinted `<script>` tag. Vendored libraries (mermaid, katex, chart.js, fuse, zoom, …) are copied from `node_modules` into `assets/lib/` by `vendor-copy` (config in `package.json` under `devVendorCopy`) — they are committed; heavy ones load only on pages that use them.
- **i18n:** every user-facing string goes through `i18n/<lang>.yaml` lookups (`{{ i18n "key" }}`) — never hardcode text in templates. English is the fallback.
- **Demo/testbed:** `exampleSite/` is both the docs site (blowfish.page) and the test environment. `npm run example` serves it locally at :1313 with the theme mounted via `--themesDir ../..`. Docs content lives in `exampleSite/content/docs/` with one `index.<lang>.md` per language.
- **Icons:** `assets/icons/*.svg` (FontAwesome-derived, `fill="currentColor"`). An icon's filename is its name everywhere: social `links`, menu `pre`, the `icon`/`badge`/`button` shortcodes.

## Working on the theme itself

- `npm install` then `npm run example` — live demo at `http://localhost:1313`.
- `npm run build` — recompile Tailwind into `assets/css/compiled/main.css` (commit it).
- `npm run build-hugo` — production build of the docs site.
- Conventions: 2-space indent, spaces inside template tags (`{{ $x }}`), extract repeated logic into partials, Gitmoji commit prefixes, no breaking changes (never rename partials or remove config options). See `CLAUDE.md` and `CONTRIBUTING.md`.
- When adding/renaming config options, shortcodes, or layouts: update the docs in `exampleSite/content/docs/` (all languages) **and this skill**.

## Troubleshooting

- Blank styling / missing classes → Hugo isn't the extended edition, or `themesDir`/module import is misconfigured.
- New config not applying → the file must be in the **site's** `config/_default/`, not inside the theme.
- Version warnings → keep Hugo within the `[module.hugoVersion]` range in the theme's `config.toml`.
- A Tailwind class "not working" in a custom override → the compiled CSS is generated from the theme's sources; site-level classes need the site's own CSS (e.g. `assets/css/custom.css`, loaded automatically) or the class must already exist in the theme's compiled output.
- Images not appearing as thumbnails → the image must be a page-bundle resource matching `*feature*`, `*cover*`, or `*thumbnail*`, or set `featureimage` in front matter.
