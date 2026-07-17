import {
  Calendar,
  ChevronRight,
  Compass,
  Moon,
  Plane,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardMedia,
  CardMediaAction,
  CardMediaOverlay,
  CardMeta,
  CardTitle,
} from "@/components/ui/card";

function StatusChip({
  dotClass,
  children,
}: {
  dotClass: string;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill bg-card px-2.5 py-1 text-xs font-semibold text-strong shadow-sm">
      <span
        className="size-1.5 rounded-full"
        style={{ background: dotClass }}
      />
      {children}
    </span>
  );
}

export default function CardDemo() {
  return (
    <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card padded={false} interactive className="max-w-xs">
        <CardMedia>
          <div className="size-full bg-linear-to-br from-sky-400 via-sky-500 to-brand" />
          <CardMediaAction>
            <StatusChip dotClass="var(--sky-500)">In progress</StatusChip>
          </CardMediaAction>
          <CardMediaOverlay>
            <div>
              <p className="font-serif font-semibold text-2xl text-white tracking-tight">
                Lisbon
              </p>
              <p className="text-sm text-white/85">Portugal</p>
            </div>
          </CardMediaOverlay>
        </CardMedia>
        <CardHeader className="gap-3">
          <div className="flex items-center gap-2.5">
            <Avatar size="sm">
              <AvatarFallback className="bg-brand text-on-brand">
                MQ
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-base">Mara Quinn</CardTitle>
          </div>
          <CardMeta>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4 text-subtle" />
              Jun 14 – 21
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="size-4 text-subtle" />4
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Moon className="size-4 text-subtle" />7 n
            </span>
          </CardMeta>
        </CardHeader>
        <CardFooter className="border-t">
          <Plane className="size-4 shrink-0 text-brand" />
          <p className="min-w-0 flex-1 truncate text-sm text-muted-text">
            Boarding <span className="font-mono">TP1234</span> · Gate{" "}
            <span className="font-mono">B7</span>
          </p>
          <ChevronRight className="size-4 shrink-0 text-subtle" />
        </CardFooter>
      </Card>

      <Card padded={false} interactive className="max-w-xs">
        <CardMedia>
          <div className="size-full bg-linear-to-br from-amber-300 via-orange-400 to-brand" />
          <CardMediaAction>
            <StatusChip dotClass="var(--green-500)">Upcoming</StatusChip>
          </CardMediaAction>
          <CardMediaOverlay>
            <div>
              <p className="font-serif font-semibold text-2xl text-white tracking-tight">
                Barcelona
              </p>
              <p className="text-sm text-white/85">Spain</p>
            </div>
          </CardMediaOverlay>
        </CardMedia>
        <CardHeader className="gap-3">
          <div className="flex items-center gap-2.5">
            <Avatar size="sm">
              <AvatarFallback className="bg-accent text-accent-foreground">
                TR
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-base">Tom Reyes</CardTitle>
          </div>
          <CardMeta>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4 text-subtle" />
              Jul 3 – 10
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="size-4 text-subtle" />2
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Moon className="size-4 text-subtle" />7 n
            </span>
          </CardMeta>
        </CardHeader>
        <CardFooter className="border-t">
          <Plane className="size-4 shrink-0 text-brand" />
          <p className="min-w-0 flex-1 truncate text-sm text-muted-text">
            Departs <span className="font-mono">TP8821</span> ·{" "}
            <span className="font-mono">08:45</span>
          </p>
          <ChevronRight className="size-4 shrink-0 text-subtle" />
        </CardFooter>
      </Card>

      <Card
        interactive
        className="max-w-xs flex-row items-center gap-4 sm:col-span-2 lg:col-span-1"
      >
        <CardIcon>
          <Compass />
        </CardIcon>
        <CardHeader className="gap-0.5 p-0">
          <CardTitle className="font-serif text-3xl tracking-tight">
            8
          </CardTitle>
          <CardDescription>Active trips</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
