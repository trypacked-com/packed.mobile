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
          d="M179.688 164.062v-31.25a50.78 50.78 0 0 1 50.781-50.78h39.062a50.78 50.78 0 0 1 50.781 50.78v31.25"
          stroke={colors.stroke}
          strokeWidth={33.6}
          strokeLinecap="round"
          fill="none"
        />
        <Path
          d="M335.938 164.062H164.062c-38.832 0-70.312 31.48-70.312 70.313v117.187c0 38.833 31.48 70.313 70.312 70.313h171.876c38.832 0 70.312-31.48 70.312-70.313V234.375c0-38.833-31.48-70.313-70.312-70.313"
          fill={colors.body}
        />
        <Path
          d="M406.25 248.438H93.75v31.25h312.5z"
          fill={colors.band}
          opacity={colors.bandOpacity}
        />
        <Path
          d="M285.938 239.062h-71.875c-11.219 0-20.313 9.095-20.313 20.313v9.375c0 11.218 9.094 20.312 20.313 20.312h71.875c11.218 0 20.312-9.094 20.312-20.312v-9.375c0-11.218-9.094-20.313-20.312-20.313"
          fill={colors.latch}
        />
      </Svg>
    </View>
  );
}

export { Logo };
