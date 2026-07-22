import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Slot } from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const STATUS_VARIANTS = ['success', 'info', 'warning', 'danger', 'neutral'] as const;

type StatusVariant = (typeof STATUS_VARIANTS)[number];

const STATUS_DOT: Record<StatusVariant, string> = {
  success: 'bg-green-500',
  info: 'bg-accent',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
  neutral: 'bg-subtle',
};

function StatusDotPulse({ className }: { className: string }) {
  const progress = useSharedValue(0);

  React.useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.out(Easing.ease) }),
      -1,
      false,
      undefined,
      ReduceMotion.System
    );
  }, [progress]);

  const style = useAnimatedStyle(() => ({
    opacity: 0.5 * (1 - progress.value),
    transform: [{ scale: 1 + progress.value }],
  }));

  return (
    <Animated.View
      className={cn('absolute inset-0 rounded-full', className)}
      style={style}
    />
  );
}

function StatusDot({ variant, pulse }: { variant: StatusVariant; pulse?: boolean }) {
  const colorClass = STATUS_DOT[variant];

  return (
    <View className="relative size-2 shrink-0">
      {pulse ? (
        Platform.OS === 'web' ? (
          <View
            className={cn(
              'absolute inset-0 animate-ping rounded-full opacity-50 motion-reduce:animate-none',
              colorClass
            )}
          />
        ) : (
          <StatusDotPulse className={colorClass} />
        )
      ) : null}
      <View className={cn('size-2 rounded-full', colorClass)} />
    </View>
  );
}

const badgeVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-1.5 overflow-hidden rounded-pill border border-transparent px-2.5 py-0.5',
    Platform.select({
      web: 'focus-visible:border-border-brand focus-visible:ring-ring/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive w-fit whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3',
    })
  ),
  {
    variants: {
      variant: {
        default: 'bg-brand',
        secondary: 'bg-secondary',
        destructive: 'bg-destructive',
        outline: 'border-border',
        ghost: '',
        link: '',
        brand: 'bg-brand-subtle',
        tag: 'border-border bg-card',
        tagBrand: 'border-border-brand bg-brand-subtle',
        success: 'gap-[7px] bg-status-ontime-bg px-3 py-1.5 pl-2.5',
        info: 'gap-[7px] bg-status-info-bg px-3 py-1.5 pl-2.5',
        warning: 'gap-[7px] bg-status-delay-bg px-3 py-1.5 pl-2.5',
        danger: 'gap-[7px] bg-status-cancel-bg px-3 py-1.5 pl-2.5',
        neutral: 'gap-[7px] bg-muted px-3 py-1.5 pl-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeTextVariants = cva(
  cn('font-sans-medium text-xs', Platform.select({ web: 'transition-colors' })),
  {
    variants: {
      variant: {
        default: 'text-on-brand',
        secondary: 'text-secondary-foreground',
        destructive: 'text-white',
        outline: 'text-foreground',
        ghost: 'text-foreground',
        link: 'text-link',
        brand: 'text-link',
        tag: 'text-foreground text-sm',
        tagBrand: 'text-link text-sm',
        success: 'text-status-ontime-fg text-sm font-sans-semibold',
        info: 'text-status-info-fg text-sm font-sans-semibold',
        warning: 'text-status-delay-fg text-sm font-sans-semibold',
        danger: 'text-status-cancel-fg text-sm font-sans-semibold',
        neutral: 'text-muted-text text-sm font-sans-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type BadgeProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> & {
    asChild?: boolean;
    pulse?: boolean;
  } & VariantProps<typeof badgeVariants>;

function Badge({ className, variant = 'default', pulse = false, asChild, children, ...props }: BadgeProps) {
  const Component = asChild ? Slot : View;
  const isStatus = STATUS_VARIANTS.includes(variant as StatusVariant);

  return (
    <TextClassContext.Provider value={badgeTextVariants({ variant })}>
      <Component className={cn(badgeVariants({ variant }), className)} {...props}>
        {isStatus ? <StatusDot variant={variant as StatusVariant} pulse={pulse} /> : null}
        {children}
      </Component>
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariants };
export type { BadgeProps };
