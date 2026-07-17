"use client";

import { LayoutGrid, List } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleDemo() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline" aria-label="List view">
        <List />
      </Toggle>
      <Toggle variant="outline" defaultPressed aria-label="Grid view">
        <LayoutGrid />
      </Toggle>
    </div>
  );
}
