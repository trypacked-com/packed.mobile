import { cn } from "@site/lib/utils";

type LogoProps = React.ComponentProps<"svg"> & {
  /** `auto` follows light/dark theme; `brand` and `inverse` are fixed. */
  variant?: "auto" | "brand" | "inverse";
  size?: "sm" | "default" | "lg";
};

const sizeClass = {
  sm: "size-6 min-w-6",
  default: "size-[length:var(--logo-default)] min-w-[length:var(--logo-min)]",
  lg: "size-10 min-w-10",
} as const;

const variantColors = {
  auto: {
    stroke: "var(--logo-mark-stroke)",
    body: "var(--logo-mark)",
    band: "var(--logo-mark-band)",
    bandOpacity: "var(--logo-mark-band-opacity)",
    latch: "var(--logo-mark-latch)",
  },
  brand: {
    stroke: "var(--brand)",
    body: "var(--brand)",
    band: "var(--brand-press)",
    bandOpacity: 0.32,
    latch: "var(--brand-subtle)",
  },
  inverse: {
    stroke: "var(--sand-0)",
    body: "var(--sand-0)",
    band: "var(--brand)",
    bandOpacity: 0.55,
    latch: "var(--brand)",
  },
} as const;

function Logo({
  variant = "auto",
  size = "default",
  className,
  ...props
}: LogoProps) {
  const colors = variantColors[variant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Packed"
      className={cn(sizeClass[size], "shrink-0", className)}
      {...props}
    >
      <path
        d="M17.5 15 V12 A5 5 0 0 1 22.5 7 H25.5 A5 5 0 0 1 30.5 12 V15"
        strokeWidth={3.2}
        strokeLinecap="round"
        fill="none"
        style={{ stroke: colors.stroke }}
      />
      <rect
        x={7}
        y={15}
        width={34}
        height={26}
        rx={6.5}
        style={{ fill: colors.body }}
      />
      <rect
        x={7}
        y={22.6}
        width={34}
        height={3.2}
        style={{ fill: colors.band, opacity: colors.bandOpacity }}
      />
      <rect
        x={18.8}
        y={21.4}
        width={10.4}
        height={4.8}
        rx={2}
        style={{ fill: colors.latch }}
      />
    </svg>
  );
}

export { Logo };
