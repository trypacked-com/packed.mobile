import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="pk-eyebrow">Status</span>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success">On time</Badge>
          <Badge variant="info" pulse>
            Boarding
          </Badge>
          <Badge variant="warning">Delayed 40m</Badge>
          <Badge variant="danger">Cancelled</Badge>
          <Badge variant="neutral">Landed</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="pk-eyebrow">Labels</span>
        <div className="flex flex-wrap gap-2">
          <Badge>3 updates</Badge>
          <Badge variant="brand">Packed</Badge>
          <Badge variant="tag">Beach</Badge>
          <Badge variant="tagBrand">Priority</Badge>
        </div>
      </div>
    </div>
  );
}
