"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="cabin">Cabin</Label>
      <Select defaultValue="economy">
        <SelectTrigger id="cabin" className="w-full">
          <SelectValue placeholder="Choose cabin" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="economy">Economy</SelectItem>
          <SelectItem value="premium">Premium economy</SelectItem>
          <SelectItem value="business">Business</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
