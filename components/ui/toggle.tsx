import { Icon } from '@/components/ui/icon';
import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import * as TogglePrimitive from '@rn-primitives/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { useContext, type ComponentProps } from 'react';
import { Platform } from 'react-native';

const toggleVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2 rounded-md',
    Platform.select({
      web: 'focus-visible:border-border-brand focus-visible:ring-ring/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive inline-flex cursor-default whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none [&_svg]:pointer-events-none',
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-transparent active:bg-brand-subtle',
          Platform.select({ web: 'hover:bg-brand-subtle' })
        ),
        outline: cn(
          'border-border bg-background active:bg-brand-subtle active:border-border-brand border shadow-card',
          Platform.select({ web: 'hover:bg-brand-subtle hover:border-border-brand' })
        ),
      },
      size: {
        default: 'h-10 min-w-10 px-3',
        sm: 'h-8 min-w-8 gap-1.5 px-2.5',
        lg: 'h-12 min-w-12 gap-2.5 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const toggleTextVariants = cva(
  cn(
    'font-sans-semibold text-sm',
    Platform.select({ web: 'pointer-events-none transition-colors' })
  ),
  {
    variants: {
      variant: {
        default: 'text-foreground',
        outline: 'text-foreground',
      },
      size: {
        default: 'text-sm',
        sm: 'text-xs',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ToggleProps = ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>;

function Toggle({ className, variant, size, ...props }: ToggleProps) {
  return (
    <TextClassContext.Provider
      value={cn(
        toggleTextVariants({ variant, size }),
        props.pressed
          ? 'text-on-brand'
          : Platform.select({ web: 'group-hover:text-brand' })
      )}>
      <TogglePrimitive.Root
        className={cn(
          toggleVariants({ variant, size }),
          props.disabled && 'opacity-50',
          props.pressed && 'border-transparent bg-brand shadow-cta active:bg-brand-hover',
          className
        )}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

function ToggleIcon({ className, ...props }: ComponentProps<typeof Icon>) {
  const textClass = useContext(TextClassContext);
  return <Icon className={cn('size-4 shrink-0', textClass, className)} {...props} />;
}

export { Toggle, ToggleIcon, toggleTextVariants, toggleVariants };
export type { ToggleProps };
