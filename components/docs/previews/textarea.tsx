import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { View } from 'react-native';

export function TextareaPreview() {
  return (
    <View className="w-full gap-4">
      <View className="gap-1.5">
        <Label nativeID="trip-notes">Trip notes</Label>
        <Textarea
          accessibilityLabelledBy="trip-notes"
          placeholder="Flights, hotels, and things to remember…"
          defaultValue="Land at LIS mid-morning. Pick up city cards at the airport kiosk, then head to Alfama for lunch."
        />
      </View>
      <View className="gap-1.5">
        <Label nativeID="packing-notes">Packing list notes</Label>
        <Textarea
          accessibilityLabelledBy="packing-notes"
          placeholder="Layers, adapters, and shared bag items…"
        />
      </View>
      <View className="gap-1.5">
        <Label nativeID="extra-notes" variant="muted">
          Extra notes (optional)
        </Label>
        <Textarea
          accessibilityLabelledBy="extra-notes"
          placeholder="Allergies, preferences, or shared reminders…"
        />
      </View>
      <View className="gap-1.5">
        <Label nativeID="locked-notes" disabled>
          Locked notes
        </Label>
        <Textarea
          accessibilityLabelledBy="locked-notes"
          editable={false}
          value="These notes are read only for this shared trip."
        />
      </View>
    </View>
  );
}
