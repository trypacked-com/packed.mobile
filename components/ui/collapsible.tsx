import { cn } from '@/lib/utils';
import * as CollapsiblePrimitive from '@rn-primitives/collapsible';
import { Platform } from 'react-native';

function Collapsible({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return (
    <CollapsiblePrimitive.Root className={cn('flex flex-col gap-2', className)} {...props} />
  );
}

function CollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return (
    <CollapsiblePrimitive.Trigger
      className={cn(
        'group flex flex-row items-center gap-2 active:opacity-70',
        Platform.select({
          web: 'outline-none focus-visible:ring-ring/40 focus-visible:ring-[3px]',
        }),
        props.disabled && 'opacity-50',
        className
      )}
      {...props}
    />
  );
}

function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Content>) {
  return <CollapsiblePrimitive.Content className={cn('gap-2', className)} {...props} />;
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
