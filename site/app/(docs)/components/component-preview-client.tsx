"use client";

import dynamic from "next/dynamic";

import "@site/lib/rnw-globals";

const ComponentPreview = dynamic(
  () => import("./component-preview").then((mod) => mod.ComponentPreview),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-40 w-full items-center justify-center rounded-2xl border border-border-subtle bg-card p-8 text-muted-foreground text-sm shadow-card">
        Loading preview…
      </div>
    ),
  },
);

export function ComponentPreviewClient({ slug }: { slug: string }) {
  return <ComponentPreview slug={slug} />;
}
