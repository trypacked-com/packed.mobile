import { cn } from '@/lib/utils';
import * as LabelPrimitive from '@rn-primitives/label';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform } from 'react-native';

const labelTextVariants = cva(
  cn(
    'text-strong font-sans-medium text-sm',
    Platform.select({ web: 'leading-none' })
  ),
  {
    variants: {
      variant: {
        default: '',
        muted: 'text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Text> &
  VariantProps<typeof labelTextVariants> & {
    disabled?: boolean;
  };

function Label({
  className,
  variant,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  disabled,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'flex select-none flex-row items-center gap-2',
        Platform.select({
          web: 'cursor-default leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        }),
        disabled && 'opacity-50'
      )}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}>
      <LabelPrimitive.Text
        className={cn(
          labelTextVariants({ variant }),
          disabled && 'text-muted-foreground',
          className
        )}
        {...props}
      />
    </LabelPrimitive.Root>
  );
}

export { Label, labelTextVariants };
export type { LabelProps };
