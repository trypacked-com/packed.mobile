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
      viewBox="0 0 500 500"
      fill="none"
      role="img"
      aria-label="Packed"
      className={cn(sizeClass[size], "shrink-0", className)}
      {...props}
    >
      <path
        d="M180 164v-31.238a50.87 50.87 0 0 1 14.807-35.894A50.45 50.45 0 0 1 230.556 82h38.888a50.45 50.45 0 0 1 35.749 14.868A50.87 50.87 0 0 1 320 132.762V164"
        strokeWidth={33.6}
        strokeLinecap="round"
        fill="none"
        style={{ stroke: colors.stroke }}
      />
      <path
        d="M335.8 164H164.2c-38.77 0-70.2 31.503-70.2 70.364v117.272C94 390.497 125.43 422 164.2 422h171.6c38.77 0 70.2-31.503 70.2-70.364V234.364C406 195.503 374.57 164 335.8 164"
        style={{ fill: colors.body }}
      />
      <path
        d="M406 248H94v32h312z"
        style={{ fill: colors.band, opacity: colors.bandOpacity }}
      />
      <path
        d="M285.778 239h-71.556C203.054 239 194 248.094 194 259.313v9.375c0 11.218 9.054 20.312 20.222 20.312h71.556c11.168 0 20.222-9.094 20.222-20.312v-9.375c0-11.219-9.054-20.313-20.222-20.313"
        style={{ fill: colors.latch }}
      />
    </svg>
  );
}

export { Logo };
