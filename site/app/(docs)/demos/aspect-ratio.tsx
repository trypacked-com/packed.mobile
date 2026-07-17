const MAP_URI =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80";
const BOARDING_URI =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80";

export default function AspectRatioDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Map thumbnail · 16∶9</p>
        <div className="aspect-video overflow-hidden rounded-2xl border border-border-subtle bg-surface-sunken shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MAP_URI}
            alt="Map of Lisbon city centre"
            className="size-full object-cover"
          />
        </div>
        <p className="font-medium text-sm text-strong">Lisbon · Alfama</p>
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Boarding pass art · 3∶2</p>
        <div className="aspect-[3/2] overflow-hidden rounded-2xl border border-border-subtle bg-surface-sunken shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BOARDING_URI}
            alt="Airplane wing above clouds"
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
