import { cn } from '@/lib/utils';
import * as AspectRatioPrimitive from '@rn-primitives/aspect-ratio';

function AspectRatio({
  className,
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return (
    <AspectRatioPrimitive.Root
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    />
  );
}

export { AspectRatio };
