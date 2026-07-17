"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Gate info</Button>
        </TooltipTrigger>
        <TooltipContent>
          Gate <span className="font-mono">B7</span> — Terminal 2, north wing
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
