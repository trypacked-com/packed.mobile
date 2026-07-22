import { Icon } from '@/components/ui/icon';
import { Text, TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';

const alertVariants = cva(
  'flex w-full max-w-[360px] flex-row items-start gap-3 rounded-lg border-0 border-l-[3px] bg-card p-3.5 pl-4 shadow-lg',
  {
    variants: {
      variant: {
        default: 'border-l-brand',
        destructive: 'border-l-status-cancel-fg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const alertIconWellVariants = cva(
  'flex size-9 shrink-0 flex-row items-center justify-center rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-brand-subtle',
        destructive: 'bg-status-cancel-bg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const alertIconVariants = cva('size-5', {
  variants: {
    variant: {
      default: 'text-link',
      destructive: 'text-status-cancel-fg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const alertTextVariants = cva('text-sm', {
  variants: {
    variant: {
      default: 'text-strong',
      destructive: 'text-strong',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type AlertProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> & {
    icon: LucideIcon;
    iconClassName?: string;
  } & VariantProps<typeof alertVariants>;

function Alert({ className, variant, children, icon, iconClassName, ...props }: AlertProps) {
  return (
    <TextClassContext.Provider value={alertTextVariants({ variant })}>
      <View role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
        <View className={alertIconWellVariants({ variant })}>
          <Icon as={icon} className={cn(alertIconVariants({ variant }), iconClassName)} />
        </View>
        <View className="min-w-0 flex-1">{children}</View>
      </View>
    </TextClassContext.Provider>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      className={cn('font-sans-bold text-sm leading-none text-strong', className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      className={cn('text-muted-text mt-0.5 text-sm leading-snug', className)}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle, alertTextVariants, alertVariants };
export type { AlertProps };
