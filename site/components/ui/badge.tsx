import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

const STATUS_VARIANTS = [
  "success",
  "info",
  "warning",
  "danger",
  "neutral",
] as const;

const STATUS_DOT: Record<(typeof STATUS_VARIANTS)[number], string> = {
  success: "var(--green-500)",
  info: "var(--sky-500)",
  warning: "var(--amber-500)",
  danger: "var(--red-500)",
  neutral: "var(--sand-500)",
};

function StatusDot({
  variant,
  pulse,
}: {
  variant: (typeof STATUS_VARIANTS)[number];
  pulse?: boolean;
}) {
  return (
    <span className="relative inline-flex size-2 shrink-0">
      {pulse ? (
        <span
          className="absolute inset-0 animate-ping rounded-full opacity-50 motion-reduce:animate-none"
          style={{ background: STATUS_DOT[variant] }}
        />
      ) : null}
      <span
        className="size-2 rounded-full"
        style={{ background: STATUS_DOT[variant] }}
      />
    </span>
  );
}

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-pill border border-transparent px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-brand text-on-brand [a&]:hover:bg-brand-hover",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-brand-subtle",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline: "border-border text-foreground [a&]:hover:bg-brand-subtle",
        ghost: "[a&]:hover:bg-brand-subtle",
        link: "text-link underline-offset-4 [a&]:hover:underline",
        // Soft brand badge
        brand: "bg-brand-subtle text-link [a&]:hover:bg-brand-subtle",
        // Neutral / branded chips
        tag: "border-border bg-card text-foreground text-sm [a&]:hover:bg-brand-subtle",
        tagBrand: "border-brand bg-brand-subtle text-link text-sm",
        // Status — functional fg/bg pairs (domain labels live in the app)
        success:
          "gap-[7px] bg-status-ontime-bg px-3 py-1.5 pl-2.5 text-sm text-status-ontime-fg font-semibold",
        info: "gap-[7px] bg-status-info-bg px-3 py-1.5 pl-2.5 text-sm text-status-info-fg font-semibold",
        warning:
          "gap-[7px] bg-status-delay-bg px-3 py-1.5 pl-2.5 text-sm text-status-delay-fg font-semibold",
        danger:
          "gap-[7px] bg-status-cancel-bg px-3 py-1.5 pl-2.5 text-sm text-status-cancel-fg font-semibold",
        neutral:
          "gap-[7px] bg-muted px-3 py-1.5 pl-2.5 text-sm text-muted-text font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  pulse = false,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    pulse?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "span";
  const isStatus = STATUS_VARIANTS.includes(
    variant as (typeof STATUS_VARIANTS)[number],
  );

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {isStatus ? (
        <StatusDot
          variant={variant as (typeof STATUS_VARIANTS)[number]}
          pulse={pulse}
        />
      ) : null}
      {children}
    </Comp>
  );
}

export { Badge, badgeVariants };
