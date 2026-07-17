"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabelDemo() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="gate">Gate</Label>
      <Input id="gate" className="font-mono" defaultValue="B7" />
    </div>
  );
}
