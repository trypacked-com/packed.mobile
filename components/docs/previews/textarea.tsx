import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { View } from 'react-native';

export function TextareaPreview() {
  return (
    <View className="w-full max-w-xs gap-2">
      <Label nativeID="trip-notes">Trip notes</Label>
      <Textarea
        aria-labelledby="trip-notes"
        placeholder="Window seat if you can — and remind me about the lounge pass."
        numberOfLines={3}
      />
    </View>
  );
}
