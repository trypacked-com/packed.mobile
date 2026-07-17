import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function LabelScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Label"
          description="Packed form labels — Figtree medium weight, strong foreground, with muted and disabled states for trip fields."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
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
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/label</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
