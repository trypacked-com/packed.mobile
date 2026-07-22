import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";

import registry from "../../../../../registry.json";

import { ComponentPreviewClient } from "../component-preview-client";

type RegistryFile = { path: string; type: string; target?: string };
type RegistryItem = {
  name: string;
  type: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: RegistryFile[];
};

const components = (registry.items as RegistryItem[]).filter(
  (item) => item.type === "registry:ui",
);

const repoRoot = resolve(process.cwd(), "..");

export function generateStaticParams() {
  return components.map((item) => ({ slug: item.name }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = components.find((entry) => entry.name === slug);

  if (!item) {
    notFound();
  }

  const installCommand = `npx @react-native-reusables/cli add @packed-native/${item.name}`;
  const deps = item.dependencies ?? [];
  const registryDeps = item.registryDependencies ?? [];

  const sources = await Promise.all(
    item.files.map(async (file) => ({
      path: file.target ?? file.path,
      content: await readFile(resolve(repoRoot, file.path), "utf8"),
    })),
  );

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <Link
          href="/"
          className="text-muted-foreground text-sm transition-colors hover:text-strong"
        >
          ← Components
        </Link>
        <h1 className="font-serif font-semibold text-3xl text-strong tracking-tight">
          {item.title ?? item.name}
        </h1>
        {item.description ? (
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        ) : null}
      </div>

      <section className="space-y-3">
        <h2 className="pk-eyebrow">Preview</h2>
        <ComponentPreviewClient slug={slug} />
      </section>

      <section className="space-y-3">
        <h2 className="pk-eyebrow">Install</h2>
        <pre className="overflow-x-auto rounded-md bg-surface-sunken p-4 font-mono text-sm text-strong">
          {installCommand}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="pk-eyebrow">Source</h2>
        {sources.map((file) => (
          <div key={file.path} className="space-y-2">
            <p className="font-mono text-muted-foreground text-xs">
              {file.path}
            </p>
            <pre className="overflow-x-auto rounded-md border border-border-subtle bg-card p-4 font-mono text-xs text-strong leading-relaxed">
              {file.content}
            </pre>
          </div>
        ))}
      </section>

      {deps.length > 0 ? (
        <section className="space-y-2">
          <h2 className="pk-eyebrow">npm dependencies</h2>
          <p className="font-mono text-muted-foreground text-sm">
            {deps.join(", ")}
          </p>
        </section>
      ) : null}

      {registryDeps.length > 0 ? (
        <section className="space-y-2">
          <h2 className="pk-eyebrow">Registry dependencies</h2>
          <ul className="space-y-1 font-mono text-muted-foreground text-sm">
            {registryDeps.map((dep) => (
              <li key={dep}>{dep}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="space-y-2">
        <h2 className="pk-eyebrow">Files</h2>
        <ul className="space-y-1 font-mono text-muted-foreground text-xs">
          {item.files.map((file) => (
            <li key={file.path}>
              {file.path}
              {file.target ? ` → ${file.target}` : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
