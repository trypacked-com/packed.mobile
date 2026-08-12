import { cn } from '@/lib/utils';
import { useColorScheme } from 'nativewind';
import { View, type ViewProps } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type LogoProps = ViewProps & {
  /** `auto` follows light/dark theme; `brand` and `inverse` are fixed. */
  variant?: 'auto' | 'brand' | 'inverse';
  size?: 'sm' | 'default' | 'lg';
};

const sizePx = {
  sm: 24,
  default: 30,
  lg: 40,
} as const;

const variantColors = {
  light: {
    stroke: 'hsl(18 100% 58.6%)',
    body: 'hsl(18 100% 58.6%)',
    band: 'hsl(16 85.8% 41.4%)',
    bandOpacity: 0.32,
    latch: 'hsl(20 100% 96.5%)',
  },
  dark: {
    stroke: 'hsl(33 52.9% 96.7%)',
    body: 'hsl(33 52.9% 96.7%)',
    band: 'hsl(18 100% 58.6%)',
    bandOpacity: 0.55,
    latch: 'hsl(18 100% 58.6%)',
  },
  brand: {
    stroke: 'hsl(18 100% 58.6%)',
    body: 'hsl(18 100% 58.6%)',
    band: 'hsl(16 85.8% 41.4%)',
    bandOpacity: 0.32,
    latch: 'hsl(20 100% 96.5%)',
  },
  inverse: {
    stroke: 'hsl(33 52.9% 96.7%)',
    body: 'hsl(33 52.9% 96.7%)',
    band: 'hsl(18 100% 58.6%)',
    bandOpacity: 0.55,
    latch: 'hsl(18 100% 58.6%)',
  },
} as const;

function Logo({ variant = 'auto', size = 'default', className, style, ...props }: LogoProps) {
  const { colorScheme } = useColorScheme();
  const colors =
    variant === 'auto'
      ? variantColors[colorScheme === 'dark' ? 'dark' : 'light']
      : variantColors[variant];
  const dimension = sizePx[size];

  return (
    <View
      accessibilityRole="image"
      accessibilityLabel="Packed"
      className={cn('shrink-0', className)}
      style={[{ width: dimension, height: dimension }, style]}
      {...props}>
      <Svg width={dimension} height={dimension} viewBox="0 0 500 500" fill="none">
        <Path
          d="M180 164v-31.238a50.87 50.87 0 0 1 14.807-35.894A50.45 50.45 0 0 1 230.556 82h38.888a50.45 50.45 0 0 1 35.749 14.868A50.87 50.87 0 0 1 320 132.762V164"
          stroke={colors.stroke}
          strokeWidth={33.6}
          strokeLinecap="round"
          fill="none"
        />
        <Path
          d="M335.8 164H164.2c-38.77 0-70.2 31.503-70.2 70.364v117.272C94 390.497 125.43 422 164.2 422h171.6c38.77 0 70.2-31.503 70.2-70.364V234.364C406 195.503 374.57 164 335.8 164"
          fill={colors.body}
        />
        <Path d="M406 248H94v32h312z" fill={colors.band} opacity={colors.bandOpacity} />
        <Path
          d="M285.778 239h-71.556C203.054 239 194 248.094 194 259.313v9.375c0 11.218 9.054 20.312 20.222 20.312h71.556c11.168 0 20.222-9.094 20.222-20.312v-9.375c0-11.219-9.054-20.313-20.222-20.313"
          fill={colors.latch}
        />
      </Svg>
    </View>
  );
}

export { Logo };
