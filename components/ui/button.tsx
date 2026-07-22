import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, Pressable } from 'react-native';

const buttonVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2 rounded-md',
    Platform.select({
      web: "focus-visible:border-border-brand focus-visible:ring-ring/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-brand active:bg-brand-hover shadow-brand',
          Platform.select({ web: 'hover:bg-brand-hover' })
        ),
        destructive: cn(
          'bg-destructive active:bg-destructive/90 shadow-xs',
          Platform.select({ web: 'hover:bg-destructive/90 focus-visible:ring-destructive/40' })
        ),
        outline: cn(
          'border-border bg-transparent active:bg-brand-subtle active:border-border-brand border shadow-xs',
          Platform.select({ web: 'hover:bg-brand-subtle hover:border-border-brand' })
        ),
        secondary: cn(
          'border-border bg-card active:bg-surface-sunken active:border-border-strong border shadow-xs',
          Platform.select({ web: 'hover:bg-surface-sunken hover:border-border-strong' })
        ),
        ghost: cn(
          'active:bg-brand-subtle',
          Platform.select({ web: 'hover:bg-brand-subtle' })
        ),
        link: '',
      },
      size: {
        default: cn('h-10 px-5', Platform.select({ web: 'has-[>svg]:px-4' })),
        xs: cn('h-6 gap-1 rounded-md px-2', Platform.select({ web: 'has-[>svg]:px-1.5' })),
        sm: cn('h-8 gap-1.5 rounded-md px-3.5', Platform.select({ web: 'has-[>svg]:px-2.5' })),
        lg: cn('h-12 gap-2.5 rounded-lg px-6', Platform.select({ web: 'has-[>svg]:px-5' })),
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva(
  cn(
    'text-foreground font-sans-semibold text-base',
    Platform.select({ web: 'pointer-events-none transition-colors' })
  ),
  {
    variants: {
      variant: {
        default: 'text-on-brand',
        destructive: 'text-white',
        outline: cn(
          'text-foreground group-active:text-brand',
          Platform.select({ web: 'group-hover:text-brand' })
        ),
        secondary: 'text-strong',
        ghost: 'text-brand',
        link: cn(
          'text-link group-active:underline',
          Platform.select({ web: 'underline-offset-4 hover:underline group-hover:underline' })
        ),
      },
      size: {
        default: 'text-base',
        xs: 'text-xs',
        sm: 'text-sm',
        lg: 'text-lg',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<typeof Pressable> &
  React.RefAttributes<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
      <Pressable
        className={cn(props.disabled && 'opacity-50', buttonVariants({ variant, size }), className)}
        role="button"
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
