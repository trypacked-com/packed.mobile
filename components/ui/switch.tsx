import { cn } from '@/lib/utils';
import * as SwitchPrimitives from '@rn-primitives/switch';
import { Platform } from 'react-native';

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitives.Root>) {
  return (
    <SwitchPrimitives.Root
      className={cn(
        'flex h-[1.15rem] w-8 shrink-0 flex-row items-center rounded-full border border-transparent shadow-card',
        Platform.select({
          web: 'focus-visible:border-border-brand focus-visible:ring-ring/40 peer inline-flex outline-none transition-all focus-visible:ring-[3px] disabled:cursor-not-allowed',
        }),
        props.checked ? 'bg-brand' : 'bg-surface-sunken',
        props.disabled && 'opacity-50',
        className
      )}
      {...props}>
      <SwitchPrimitives.Thumb
        className={cn(
          'bg-white size-4 rounded-full shadow-sm transition-transform duration-200',
          Platform.select({
            web: 'pointer-events-none block ring-0 ease-soft motion-reduce:transition-none',
          }),
          props.checked ? 'translate-x-3.5' : 'translate-x-0'
        )}
      />
    </SwitchPrimitives.Root>
  );
}

export { Switch };
