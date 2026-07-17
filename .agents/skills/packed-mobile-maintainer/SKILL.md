---
name: packed-mobile-maintainer
description: Maintain the packed.mobile React Native registry — add or update registry components, build registry.json, and theme tokens. Use in the packed.mobile repo when editing components/ui, lib, build scripts, running build:registry, or changing tokens in global.css / tailwind.config.js / lib/theme.ts. Not for consuming @packed-native in other apps.
paths:
  - "registry/**"
  - "components/ui/**"
  - "lib/**"
  - "scripts/**"
  - "public/registry.json"
  - "public/r/**"
  - "registry.json"
  - "global.css"
  - "tailwind.config.js"
---

# packed.mobile (maintainer)

Use only in the [packed.mobile](https://github.com/trypacked-com/packed.mobile) repo. Full brand narrative: **packed-design** skill (`references/README.md`). Voice: **packed-writing**.

Consumers install via `@packed-native` — use the **packed-mobile** skill, not this one.

Stack: Expo + Expo Router, NativeWind (not uniwind), bun. Components are React Native Reusables (RNR) restyled with Packed tokens. iOS + Android only — no web target.

## Add or change a component

1. **Fetch the base** from RNR — never hand-copy:
   `npx @react-native-reusables/cli@latest add <name> -y -o --styling-library nativewind`
2. **Restyle** the file in `components/ui/` (and `lib/` if shared) with Packed token utilities (`bg-brand`, `text-on-brand`, `border-border-subtle`, `bg-surface-sunken`, …). Extend the shared pattern — do not one-off restyle each component.
3. **Publish**: add the component name to `PUBLISHED_UI` in `scripts/generate-registry-items.ts`, then `bun run build:registry` (generates the item manifest, merges it into `registry.json`, and writes `public/r/*.json`).
4. **Smoke-check** the Expo app if the change is visual (`bun run ios` / `bun run android`).

Base RNR components you have not restyled (e.g. `text`, `icon`) are not published — they are referenced as dependencies by full URL instead (see below).

## Native-only styling

- NativeWind. Press feedback uses `active:` utilities; hover / focus / web-only classes go behind `Platform.select({ web: ... })`.
- Variants come from `class-variance-authority`; text colour is driven through `TextClassContext` (see `components/ui/button.tsx`).

## registryDependencies

- Your own components → `@packed-native/<name>`
- Unrestyled RNR base → full URL `https://reactnativereusables.com/r/nativewind/<name>.json`

`scripts/generate-registry-items.ts` detects both automatically from imports — don't hand-edit unless adding a non-import dependency.

## Registry publish

- Source manifest: `registry.json` (root, committed) — base items (`utils`, `theme`) live here; UI items are merged in by the build.
- Served output (committed, deployed): `public/registry.json` + `public/r/{name}.json`, produced by `bun run build:registry`.
- Host: GitHub Pages on custom domain **`mobile.trypacked.dev`**.
- Consumer namespace: `"@packed-native": "https://mobile.trypacked.dev/r/{name}.json"`

## Tokens

Token values live in **three** files that must stay in sync:

- `global.css` — CSS variables (HSL triplets), light `:root` + dark `.dark:root`
- `tailwind.config.js` — maps vars to utilities (`hsl(var(--x))`) + the Packed radius scale
- `lib/theme.ts` — `THEME` / `NAV_THEME` mirror for React Navigation chrome

Change tokens in all three, then `bun run build:registry` so the `registry:theme` item (which ships `global.css` + `tailwind.config.js`) reflects it.

## Do not

- Add consumer-app setup instructions to registry components (no `components.json` advice in component source)
- Reintroduce cool-grey ramps, hard-black default shadows, or sharp corners
- Hand-copy components from RNR or the web repo — fetch the base via the CLI, then restyle

## Install

```bash
bunx skills add trypacked-com/skills --skill packed-mobile-maintainer -a cursor -a claude-code -y
```
