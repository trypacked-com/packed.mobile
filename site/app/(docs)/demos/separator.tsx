import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <div className="space-y-1">
        <p className="text-sm font-medium">Flights</p>
        <p className="text-sm text-muted-foreground">
          <span className="font-mono">TP1234</span> to Lisbon
        </p>
      </div>
      <Separator />
      <div className="space-y-1">
        <p className="text-sm font-medium">Hotels</p>
        <p className="text-sm text-muted-foreground">Bairro Alto, 3 nights</p>
      </div>
    </div>
  );
}
