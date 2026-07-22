import { cn } from '@/lib/utils';
import { Platform, TextInput } from 'react-native';

type InputProps = React.ComponentProps<typeof TextInput> & React.RefAttributes<TextInput>;

function Input({ className, ...props }: InputProps) {
  return (
    <TextInput
      className={cn(
        'border-border bg-card text-strong font-sans flex h-9 w-full min-w-0 flex-row items-center rounded-md border-[1.5px] px-3 py-1 text-base leading-5 shadow-xs',
        props.editable === false &&
          cn(
            'opacity-50',
            Platform.select({ web: 'disabled:pointer-events-none disabled:cursor-not-allowed' })
          ),
        Platform.select({
          web: cn(
            'placeholder:text-subtle selection:bg-brand selection:text-on-brand outline-none transition-[color,box-shadow]',
            'focus-visible:border-border-brand focus-visible:ring-ring/40 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 aria-invalid:border-destructive'
          ),
          native: 'placeholder:text-subtle',
        }),
        className
      )}
      {...props}
    />
  );
}

export { Input };
export type { InputProps };
