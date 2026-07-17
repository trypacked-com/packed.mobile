"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add flight</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a flight</DialogTitle>
          <DialogDescription>
            We&apos;ll watch it from here and keep you in the loop.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Label htmlFor="flight-number">Flight number</Label>
          <Input
            id="flight-number"
            placeholder="TP1234"
            className="font-mono"
          />
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Add flight</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
