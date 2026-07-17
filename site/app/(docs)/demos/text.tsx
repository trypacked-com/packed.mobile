export default function TextDemo() {
  return (
    <div className="flex w-full flex-col gap-3">
      <h1 className="font-serif font-semibold text-4xl text-strong tracking-tight">
        Display heading
      </h1>
      <h2 className="font-serif font-semibold text-2xl text-strong tracking-tight">
        Section heading
      </h2>
      <h3 className="font-serif font-semibold text-xl text-strong tracking-tight">
        Subsection
      </h3>
      <h4 className="font-serif font-semibold text-lg text-strong tracking-tight">
        Card title
      </h4>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Lead copy for trip summaries and empty states.
      </p>
      <p className="text-base text-foreground leading-relaxed">
        Body text for itineraries, packing notes, and calm product copy.
      </p>
      <p className="text-muted-foreground text-sm">Muted helper text</p>
      <p className="font-medium text-sm text-strong">Small label</p>
      <code className="w-fit rounded-md bg-surface-sunken px-2 py-1 font-mono text-sm text-strong">
        LHR → JFK
      </code>
    </div>
  );
}
