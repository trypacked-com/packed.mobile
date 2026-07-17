import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="trip-notes">Trip notes</Label>
      <Textarea
        id="trip-notes"
        placeholder="Window seat if you can — and remind me about the lounge pass."
        rows={3}
      />
    </div>
  );
}
