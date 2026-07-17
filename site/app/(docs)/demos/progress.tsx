import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-text">Packing for Lisbon</span>
        <span className="font-mono text-strong">65%</span>
      </div>
      <Progress value={65} />
    </div>
  );
}
