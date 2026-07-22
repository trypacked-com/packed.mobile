import { Label } from '@/components/ui/label';
import { View } from 'react-native';

export function LabelPreview() {
  return (
    <View className="w-full gap-4">
      <View className="gap-1.5">
        <Label nativeID="destination">Destination</Label>
        <View className="h-10 rounded-md border border-border bg-background px-3" />
      </View>
      <View className="gap-1.5">
        <Label nativeID="departure-date">Departure date</Label>
        <View className="h-10 rounded-md border border-border bg-background px-3" />
      </View>
      <View className="gap-1.5">
        <Label nativeID="return-date" variant="muted">
          Return date (optional)
        </Label>
        <View className="h-10 rounded-md border border-border bg-background px-3" />
      </View>
      <View className="gap-1.5">
        <Label nativeID="trip-name" disabled>
          Trip name
        </Label>
        <View className="h-10 rounded-md border border-border bg-muted px-3 opacity-50" />
      </View>
    </View>
  );
}
