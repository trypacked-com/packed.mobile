"use client";

import { PortalHost } from "@rn-primitives/portal";
import type { ComponentType } from "react";

import "@site/lib/rnw-interop";
import { previews } from "@/components/docs/previews";

type ComponentPreviewProps = {
  slug: string;
};

export function ComponentPreview({ slug }: ComponentPreviewProps) {
  const Demo = previews[slug] as ComponentType | undefined;

  if (!Demo) {
    return null;
  }

  return (
    <div className="rn-preview flex min-h-40 w-full items-center justify-center rounded-2xl border border-border-subtle bg-card p-8 shadow-card">
      <Demo />
      <PortalHost />
    </div>
  );
}
