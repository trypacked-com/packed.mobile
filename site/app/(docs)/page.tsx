import registry from "../../../registry.json";

import { ComponentList } from "./components/component-list";

const components = registry.items
  .filter((item) => item.type === "registry:ui")
  .map((item) => ({
    name: item.name,
    title: item.title,
    description: item.description,
  }));

export default function LandingPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-5">
        <p className="pk-eyebrow">Packed design system</p>
        <h1 className="text-balance font-serif font-semibold text-[2.5rem] text-strong leading-tight tracking-tight">
          Warm, sunset-led React Native components.
        </h1>
        <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
          A standalone React Native Reusables registry. Add any component
          straight into your Expo app with the RNR CLI — it lands in{" "}
          <code className="font-mono text-sm">components/ui</code> and resolves
          its dependencies for you.
        </p>
        <pre className="overflow-x-auto rounded-md bg-surface-sunken p-4 font-mono text-sm text-strong">
          npx @react-native-reusables/cli add @packed-native/button
        </pre>
      </section>

      <section className="space-y-5">
        <h2 className="font-serif font-semibold text-strong text-xl tracking-tight">
          Components
        </h2>
        <ComponentList items={components} />
      </section>
    </div>
  );
}
