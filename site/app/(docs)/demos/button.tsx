import { Bell, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button>
          <Plus />
          Add flight
        </Button>
        <Button variant="secondary">Save draft</Button>
        <Button variant="ghost">Cancel</Button>
        <Button variant="destructive">Remove trip</Button>
        <Button variant="outline">View details</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="icon" variant="ghost" aria-label="Notifications">
          <Bell />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="bg-brand-subtle text-link hover:bg-brand-subtle"
          aria-label="Notifications"
        >
          <Bell />
        </Button>
        <Button size="icon" variant="secondary" aria-label="Notifications">
          <Bell />
        </Button>
        <Button>
          <Bell />
          Notifications
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  );
}
