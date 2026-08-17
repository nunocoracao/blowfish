# Blowfish

Hugo theme built with Tailwind CSS. Templates in `layouts/`, Tailwind source in `assets/css/main.css` compiled to `assets/css/compiled/main.css` (committed), demo/testbed in `exampleSite/`, localization in `i18n/`.

## Working on the theme

- `npm install`, then `npm run example` to preview the demo site; `npm run build` to recompile Tailwind (commit the compiled CSS with template changes that use new classes).
- All user-facing static text goes through `i18n/` lookups — never hardcode strings in templates.
- 2-space indent; spaces inside Go template tags (`{{ $x }}`); extract repeated template logic into partials; follow the included Prettier config.
- No breaking changes: don't rename partials, remove config options, or change template signatures — users' sites silently depend on them.
- Single-purpose commits/PRs with Gitmoji prefixes and imperative mood (≤72-char summary).

## Agent skill — keep it in sync

`.claude/skills/blowfish/SKILL.md` teaches coding agents how to install, configure, and use Blowfish. **Any PR that adds/renames/removes a config option, shortcode, homepage/hero/header layout, or installation step must update the skill in the same PR.** Treat it like documentation: if `exampleSite/content/docs/` needs updating, the skill probably does too.
