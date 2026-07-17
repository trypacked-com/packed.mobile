import { cn } from '@/lib/utils';
import { Platform, TextInput } from 'react-native';

type TextareaProps = React.ComponentProps<typeof TextInput> & React.RefAttributes<TextInput>;

function Textarea({
  className,
  multiline = true,
  numberOfLines = Platform.select({ web: 2, native: 8 }),
  placeholderClassName,
  ...props
}: TextareaProps) {
  return (
    <TextInput
      className={cn(
        'border-border bg-background text-foreground font-sans flex min-h-16 w-full flex-row rounded-md border px-3 py-2 text-base leading-5',
        props.editable === false &&
          cn(
            'opacity-50',
            Platform.select({ web: 'disabled:pointer-events-none disabled:cursor-not-allowed' })
          ),
        Platform.select({
          web: cn(
            'placeholder:text-muted-foreground selection:bg-brand selection:text-on-brand field-sizing-content resize-y outline-none transition-[color,box-shadow]',
            'focus-visible:border-border-brand focus-visible:ring-ring/40 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 aria-invalid:border-destructive'
          ),
          native: 'placeholder:text-muted-foreground',
        }),
        className
      )}
      placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical="top"
      {...props}
    />
  );
}

export { Textarea };
export type { TextareaProps };
