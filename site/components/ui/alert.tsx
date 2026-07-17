import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "flex w-full max-w-[360px] items-start gap-3 rounded-lg border-l-[3px] bg-card p-3.5 pl-4 shadow-lg",
  {
    variants: {
      variant: {
        default:
          "border-l-brand [&_[data-slot=alert-icon]]:bg-brand-subtle [&_[data-slot=alert-icon]]:text-link",
        info: "border-l-accent [&_[data-slot=alert-icon]]:bg-status-info-bg [&_[data-slot=alert-icon]]:text-status-info-fg",
        success:
          "border-l-status-ontime-fg [&_[data-slot=alert-icon]]:bg-status-ontime-bg [&_[data-slot=alert-icon]]:text-status-ontime-fg",
        warning:
          "border-l-[var(--amber-500)] [&_[data-slot=alert-icon]]:bg-status-delay-bg [&_[data-slot=alert-icon]]:text-status-delay-fg",
        destructive:
          "border-l-status-cancel-fg [&_[data-slot=alert-icon]]:bg-status-cancel-bg [&_[data-slot=alert-icon]]:text-status-cancel-fg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="alert-icon"
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-md [&_svg]:size-5",
        className,
      )}
      {...props}
    />
  );
}

function AlertContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-content"
      className={cn("min-w-0 flex-1", className)}
      {...props}
    />
  );
}

function AlertHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-header"
      className={cn("flex items-start justify-between gap-2", className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("text-sm font-bold text-strong", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "mt-0.5 text-sm leading-snug text-muted-text [&_p]:leading-snug",
        className,
      )}
      {...props}
    />
  );
}

function AlertTime({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="alert-time"
      className={cn(
        "text-2xs shrink-0 whitespace-nowrap text-subtle",
        className,
      )}
      {...props}
    />
  );
}

function AlertDismiss({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      data-slot="alert-dismiss"
      aria-label="Dismiss"
      className={cn(
        "flex shrink-0 p-0.5 text-subtle transition-colors hover:text-strong",
        className,
      )}
      {...props}
    >
      <X className="size-4" strokeWidth={2.2} />
    </button>
  );
}

export {
  Alert,
  AlertContent,
  AlertDescription,
  AlertDismiss,
  AlertHeader,
  AlertIcon,
  AlertTime,
  AlertTitle,
};
