import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-sans text-sm font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-on-brand shadow-brand hover:bg-brand-hover hover:-translate-y-px",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 hover:-translate-y-px focus-visible:ring-destructive/40",
        outline:
          "border border-border bg-transparent shadow-xs hover:-translate-y-px hover:border-brand hover:bg-brand-subtle hover:text-brand",
        secondary:
          "border border-border bg-card text-strong shadow-xs hover:-translate-y-px hover:border-strong hover:bg-surface-sunken",
        ghost: "text-brand hover:bg-brand-subtle",
        link: "text-link underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 rounded-md px-5 text-base has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-[18px]",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3.5 text-sm has-[>svg]:px-2.5",
        lg: "h-12 gap-2.5 rounded-lg px-6 text-lg has-[>svg]:px-5 [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10 rounded-md [&_svg:not([class*='size-'])]:size-5",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-sm [&_svg:not([class*='size-'])]:size-4",
        "icon-lg":
          "size-12 rounded-md [&_svg:not([class*='size-'])]:size-[22px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
