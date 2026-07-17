---
name: packed-mobile-maintainer
description: Maintain the packed.mobile React Native registry — add or update registry components, build registry.json, and theme tokens. Use in the packed.mobile repo when editing components/ui, running build:registry, or changing tokens in global.css / tailwind.config.js. Not for consuming @packed-native in other apps.
paths:
  - "registry/**"
  - "components/ui/**"
  - "public/registry.json"
  - "public/r/**"
  - "registry.json"
  - "global.css"
  - "tailwind.config.js"
---

# packed.mobile (maintainer)

Use only in the [packed.mobile](https://github.com/trypacked-com/packed.mobile) repo. Full brand narrative: **packed-design** skill (`references/README.md`). Voice: **packed-writing**.

Consumers install via `@packed-native` — use the **packed-mobile** skill, not this one.

## Add or change a component

1. Source in `components/ui/` (and `lib/` if shared)
2. Register in `registry.json`
3. `bun run build:registry`
4. Smoke-check the Expo app if the change is visual

Match existing registry patterns: reuse Packed token utilities (`bg-brand`, `border-border-subtle`, etc.) — extend those patterns, do not one-off restyle each component.

## Registry publish

- Manifest: `public/registry.json` (built, committed)
- Per-item JSON: `public/r/{name}.json` via `build:registry`
- Consumer namespace: `"@packed-native": "https://trypacked.github.io/packed.mobile/r/{name}.json"`

## Tokens

`global.css` and `tailwind.config.js` are the source of truth for theme tokens. The theme registry item (`registry:theme`) ships those files — change tokens there first, then rebuild registry so the theme item reflects it.

## Do not

- Add consumer-app setup instructions to registry components (no `components.json` advice in component source)
- Reintroduce cool-grey ramps, hard-black default shadows, or sharp corners

## Install

```bash
bunx skills add trypacked-com/skills --skill packed-mobile-maintainer -a cursor -a claude-code -y
```
