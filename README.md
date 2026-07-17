<h1>
  <img src="public/packed-mark.svg" alt="Packed" width="40" height="40" valign="middle" />
  packed.mobile
</h1>

The Packed design system as a React Native
[shadcn](https://ui.shadcn.com)-compatible registry — warm, sunset-led NativeWind
components (cream + orange, Lora / Figtree / DM Mono). Docs and previews:
**[mobile.trypacked.dev](https://mobile.trypacked.dev/)**.

## Use a component

```bash
npx @react-native-reusables/cli@latest add @packed-native/button
```

Point `@packed-native` at `https://mobile.trypacked.dev/r/{name}.json` in
`components.json`. Components land in `components/ui/` and resolve their
dependencies (including the `cn()` helper) automatically. **29 components** are
available — browse the full list at
[mobile.trypacked.dev](https://mobile.trypacked.dev/) or in `registry.json`
(`accordion`, `alert`, `button`, `card`, `dialog`, `input`, `select`, `tabs`,
…).

## Add a new component

Fetch the RNR base with
`npx @react-native-reusables/cli@latest add <name> -y -o --styling-library nativewind`,
restyle it in `components/ui/` with Packed token utilities (`bg-brand`,
`text-on-brand`, `border-border-subtle`, … — semantic tokens only), add the name
to `PUBLISHED_UI` in `scripts/generate-registry-items.ts`, then run
`bun run build:registry` to emit `public/r/<name>.json`. Smoke-check with
`bun run ios` / `bun run android`. Push to `main` and GitHub Actions publishes
the docs + registry.

## Scripts

`bun run dev` · `bun run ios` · `bun run android` · `bun run build:registry` ·
`bun run build:site` · `bun run dev:site`
