<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/packed-mark-white.svg">
    <img src="public/packed-mark.svg" alt="Packed" height="56">
  </picture>
</p>

<h1 align="center">packed.mobile</h1>

<p align="center">
  React Native component registry.<br>
  Warm sand, sunset orange, soft shadows — NativeWind.
</p>

<p align="center">
  <a href="https://mobile.trypacked.dev/">Docs</a>
  ·
  <a href="https://mobile.trypacked.dev/registry.json">registry.json</a>
  ·
  <a href="https://github.com/trypacked-com/skills">Design system (skills)</a>
</p>

---

## What this is

We ship UI as static JSON for React Native. Install components with the
[React Native Reusables](https://www.reactnativereusables.com/) CLI — same
registry idea as shadcn / packed.ui, NativeWind defaults.

31 registry items (27 components + `theme`, `utils`, and the shared `icon` /
`native-only-animated-view` primitives). Lora headlines, Figtree UI, DM Mono for codes and times.
Warm-tinted elevation, rounded corners, no cool grey. Tokens live in
`global.css` + `tailwind.config.js`; maintainer rules in the
**packed-mobile-maintainer** skill.

## Install

Add the registry to `components.json`:

```json
"registries": {
  "@packed-native": "https://mobile.trypacked.dev/r/{name}.json"
}
```

Pull **@packed-native/theme first**, then components. Use the
`@packed-native/<name>` namespace on the CLI — registry manifests declare
namespaced `registryDependencies` (e.g. `@packed-native/button`), so the
resolver stays on `mobile.trypacked.dev`.

```bash
npx @react-native-reusables/cli@latest add @packed-native/theme
npx @react-native-reusables/cli@latest add @packed-native/button
```

Components land in `components/ui/` and resolve their dependencies (including
`cn()`) automatically.

Full catalog: [mobile.trypacked.dev](https://mobile.trypacked.dev/)

## Development

```bash
bun install
bun run --cwd site install
bun run dev          # Expo app
bun run ios          # iOS
bun run android      # Android
bun run dev:site     # docs site (RNW previews)
bun run build:registry
bun run build:site   # registry + docs static export
```

## Add a component

1. Fetch the RNR NativeWind base:
   `npx @react-native-reusables/cli@latest add <name> -y -o --styling-library nativewind`
2. Restyle in `components/ui/` with Packed token utilities (`bg-brand`,
   `text-on-brand`, `border-border-subtle`, … — semantic tokens only)
3. Add the name to `PUBLISHED_UI` in `scripts/generate-registry-items.ts`
4. `bun run build:registry`
5. Preview in `components/docs/previews/` + Expo smoke-check
6. Push to `main` — GitHub Actions publishes docs + registry

## Agent skills

All skills: [packed.skills](https://github.com/trypacked-com/skills)

```bash
# this repo
bunx skills add trypacked-com/skills --skill packed-mobile-maintainer --skill packed-design -a cursor -a claude-code -y

# consumer app
bunx skills add trypacked-com/skills --skill packed-mobile --skill packed-design -a cursor -a claude-code -y
```
