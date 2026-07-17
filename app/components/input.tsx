import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function InputScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Input"
          description="Packed form fields — soft 12px corners, hairline borders, and a brand border on focus for destination and confirmation details."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
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
                <Input
                  accessibilityLabelledBy="trip-name"
                  placeholder="Summer escape"
                />
              </View>
              <View className="gap-1.5">
                <Label nativeID="locked-field" disabled>
                  Locked field
                </Label>
                <Input
                  accessibilityLabelledBy="locked-field"
                  editable={false}
                  value="Read only"
                />
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/input</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
