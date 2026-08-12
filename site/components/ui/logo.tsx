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
        d="M179.688 164.062v-31.25a50.78 50.78 0 0 1 50.781-50.78h39.062a50.78 50.78 0 0 1 50.781 50.78v31.25"
        strokeWidth={33.6}
        strokeLinecap="round"
        fill="none"
        style={{ stroke: colors.stroke }}
      />
      <path
        d="M335.938 164.062H164.062c-38.832 0-70.312 31.48-70.312 70.313v117.187c0 38.833 31.48 70.313 70.312 70.313h171.876c38.832 0 70.312-31.48 70.312-70.313V234.375c0-38.833-31.48-70.313-70.312-70.313"
        style={{ fill: colors.body }}
      />
      <path
        d="M406.25 248.438H93.75v31.25h312.5z"
        style={{ fill: colors.band, opacity: colors.bandOpacity }}
      />
      <path
        d="M285.938 239.062h-71.875c-11.219 0-20.313 9.095-20.313 20.313v9.375c0 11.218 9.094 20.312 20.313 20.312h71.875c11.218 0 20.312-9.094 20.312-20.312v-9.375c0-11.218-9.094-20.313-20.312-20.313"
        style={{ fill: colors.latch }}
      />
    </svg>
  );
}

export { Logo };
