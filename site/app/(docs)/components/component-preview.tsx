import { demos } from "../demos";

export function ComponentPreview({ slug }: { slug: string }) {
  const Demo = demos[slug];

  if (!Demo) {
    return null;
  }

  return (
    <div className="flex min-h-40 items-center justify-center rounded-lg border border-border-subtle bg-card p-10 shadow-sm">
      <Demo />
    </div>
  );
}
