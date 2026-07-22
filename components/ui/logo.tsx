import { cn } from '@/lib/utils';
import { useColorScheme } from 'nativewind';
import { View, type ViewProps } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

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
      <Svg width={dimension} height={dimension} viewBox="0 0 48 48" fill="none">
        <Path
          d="M17.5 15 V12 A5 5 0 0 1 22.5 7 H25.5 A5 5 0 0 1 30.5 12 V15"
          stroke={colors.stroke}
          strokeWidth={3.2}
          strokeLinecap="round"
          fill="none"
        />
        <Rect x={7} y={15} width={34} height={26} rx={6.5} fill={colors.body} />
        <Rect
          x={7}
          y={22.6}
          width={34}
          height={3.2}
          fill={colors.band}
          opacity={colors.bandOpacity}
        />
        <Rect x={18.8} y={21.4} width={10.4} height={4.8} rx={2} fill={colors.latch} />
      </Svg>
    </View>
  );
}

export { Logo };
