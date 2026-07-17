import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Slot } from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, View } from 'react-native';

const badgeVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-1 overflow-hidden rounded-full border px-2.5 py-0.5',
    Platform.select({
      web: 'focus-visible:border-border-brand focus-visible:ring-ring/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive w-fit whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3',
    })
  ),
  {
    variants: {
      variant: {
        default: 'border-transparent bg-brand shadow-cta',
        secondary: 'border-border bg-card shadow-card',
        destructive: 'border-transparent bg-destructive shadow-card',
        outline: 'border-border bg-background',
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
        secondary: 'text-strong',
        destructive: 'text-white',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type BadgeProps = React.ComponentProps<typeof View> & React.RefAttributes<View> & {
  asChild?: boolean;
} & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, asChild, ...props }: BadgeProps) {
  const Component = asChild ? Slot : View;
  return (
    <TextClassContext.Provider value={badgeTextVariants({ variant })}>
      <Component className={cn(badgeVariants({ variant }), className)} {...props} />
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariants };
export type { BadgeProps };
