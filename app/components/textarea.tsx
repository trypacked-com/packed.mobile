import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function TextareaScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Textarea"
          description="Packed multiline fields — soft 12px corners, hairline borders, and a brand border on focus for trip notes and packing list details."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
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
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/textarea</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
