import { cn } from '@/lib/utils';
import { Platform, TextInput } from 'react-native';

type InputProps = React.ComponentProps<typeof TextInput> & React.RefAttributes<TextInput>;

function Input({ className, ...props }: InputProps) {
  return (
    <TextInput
      className={cn(
        'border-border bg-background text-foreground font-sans flex h-10 w-full min-w-0 flex-row items-center rounded-md border px-3 py-1 text-base leading-5',
        props.editable === false &&
          cn(
            'opacity-50',
            Platform.select({ web: 'disabled:pointer-events-none disabled:cursor-not-allowed' })
          ),
        Platform.select({
          web: cn(
            'placeholder:text-muted-foreground selection:bg-brand selection:text-on-brand outline-none transition-[color,box-shadow]',
            'focus-visible:border-border-brand focus-visible:ring-ring/40 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 aria-invalid:border-destructive'
          ),
          native: 'placeholder:text-muted-foreground',
        }),
        className
      )}
      {...props}
    />
  );
}

export { Input };
export type { InputProps };
