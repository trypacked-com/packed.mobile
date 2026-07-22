import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { View } from 'react-native';

export function InputPreview() {
  return (
    <View className="w-full gap-4">
      <View className="gap-1.5">
        <Label nativeID="destination">Destination</Label>
        <Input
          accessibilityLabelledBy="destination"
          placeholder="Tokyo, Japan"
          defaultValue="Lisbon, Portugal"
        />
      </View>
      <View className="gap-1.5">
        <Label nativeID="confirmation">Confirmation code</Label>
        <Input
          accessibilityLabelledBy="confirmation"
          placeholder="ABC123"
          autoCapitalize="characters"
          className="font-mono"
        />
      </View>
      <View className="gap-1.5">
        <Label nativeID="trip-name" variant="muted">
          Trip name (optional)
        </Label>
        <Input accessibilityLabelledBy="trip-name" placeholder="Summer escape" />
      </View>
      <View className="gap-1.5">
        <Label nativeID="locked-field" disabled>
          Locked field
        </Label>
        <Input accessibilityLabelledBy="locked-field" editable={false} value="Read only" />
      </View>
    </View>
  );
}
