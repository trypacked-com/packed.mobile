import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  padded = true,
  interactive = false,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  padded?: boolean;
  interactive?: boolean;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot.Root : "div";

  return (
    <Comp
      data-slot="card"
      data-padded={padded}
      data-interactive={interactive}
      className={cn(
        "group/card flex flex-col overflow-hidden rounded-lg border border-border-subtle bg-card text-card-foreground shadow-card",
        padded && "gap-5 p-5",
        interactive &&
          "cursor-pointer transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
      {...props}
    />
  );
}

function CardMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-media"
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden bg-surface-sunken",
        className,
      )}
      {...props}
    />
  );
}

function CardMediaOverlay({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-media-overlay"
      className={cn(
        "absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/55 via-black/15 to-black/5 p-4",
        className,
      )}
      {...props}
    />
  );
}

function CardMediaAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-media-action"
      className={cn("absolute top-4 right-4 z-10", className)}
      {...props}
    />
  );
}

function CardIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="card-icon"
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-md bg-brand-subtle text-brand [&_svg]:size-5",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-5",
        "group-data-[padded=false]/card:px-5 group-data-[padded=false]/card:pt-5",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-semibold leading-none text-strong", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-text", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardMeta({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-meta"
      className={cn(
        "flex flex-wrap items-center gap-3 text-sm text-muted-text",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("group-data-[padded=false]/card:px-5", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-2 border-t border-border-subtle",
        "group-data-[padded=true]/card:-mx-5 group-data-[padded=true]/card:px-5 group-data-[padded=true]/card:pt-4",
        "group-data-[padded=false]/card:mx-5 group-data-[padded=false]/card:px-0 group-data-[padded=false]/card:py-4",
        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardMedia,
  CardMediaAction,
  CardMediaOverlay,
  CardMeta,
  CardTitle,
};
