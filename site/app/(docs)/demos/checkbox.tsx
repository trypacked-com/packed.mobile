"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="gate-alerts" defaultChecked />
      <Label htmlFor="gate-alerts">Notify me on gate change</Label>
    </div>
  );
}
