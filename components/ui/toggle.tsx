import { Icon } from '@/components/ui/icon';
import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import * as TogglePrimitive from '@rn-primitives/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { useContext, type ComponentProps } from 'react';
import { Platform } from 'react-native';

const toggleVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-1 rounded-md',
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
          'border-border-subtle bg-transparent active:bg-brand-subtle border shadow-xs',
          Platform.select({ web: 'hover:bg-brand-subtle' })
        ),
      },
      size: {
        default: 'h-9 min-w-9 px-2',
        sm: 'h-8 min-w-8 gap-1.5 px-1.5',
        lg: 'h-10 min-w-10 px-2.5',
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
    'font-sans-medium text-sm',
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
        sm: 'text-[0.8rem]',
        lg: 'text-sm',
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
          ? 'text-link'
          : Platform.select({ web: 'group-hover:text-strong' })
      )}>
      <TogglePrimitive.Root
        className={cn(
          toggleVariants({ variant, size }),
          props.disabled && 'opacity-50',
          props.pressed && 'bg-brand-subtle',
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
