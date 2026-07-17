import { Icon } from '@/components/ui/icon';
import { Text, TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';

const alertVariants = cva('relative w-full rounded-2xl border px-4 pb-2 pt-3.5', {
  variants: {
    variant: {
      default: 'border-border-brand bg-brand-subtle',
      destructive: 'border-status-cancel-fg/20 bg-status-cancel-bg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const alertIconVariants = cva('size-4', {
  variants: {
    variant: {
      default: 'text-brand',
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
      destructive: 'text-status-cancel-fg',
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
        <View className="absolute left-3.5 top-3">
          <Icon as={icon} className={cn(alertIconVariants({ variant }), iconClassName)} />
        </View>
        {children}
      </View>
    </TextClassContext.Provider>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      className={cn(
        'mb-1 ml-0.5 min-h-4 pl-6 font-sans-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<typeof Text>) {
  const textClass = React.useContext(TextClassContext);
  return (
    <Text
      className={cn(
        'text-muted-foreground ml-0.5 pb-1.5 pl-6 text-sm leading-relaxed',
        textClass?.includes('text-status-cancel-fg') && 'text-status-cancel-fg/90',
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle, alertTextVariants, alertVariants };
export type { AlertProps };
