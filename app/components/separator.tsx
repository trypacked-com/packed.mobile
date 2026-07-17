import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function SeparatorScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Separator"
          description="Packed dividers for itineraries and trip details — subtle hairlines that separate content without adding visual weight."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full gap-4">
              <View className="w-full gap-3">
                <Text className="text-strong font-sans-semibold">Tokyo trip</Text>
                <Text className="text-muted-foreground text-sm">Mar 12 – Mar 22, 2026</Text>
                <Separator />
                <View className="gap-2">
                  <View className="flex-row items-center justify-between">
                    <Text className="text-sm">Flight to HND</Text>
                    <Text variant="code" className="text-sm">
                      Mar 12 · 09:40
                    </Text>
                  </View>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-sm">Shinjuku hotel check-in</Text>
                    <Text variant="code" className="text-sm">
                      Mar 12 · 15:00
                    </Text>
                  </View>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-sm">Team dinner</Text>
                    <Text variant="code" className="text-sm">
                      Mar 13 · 19:30
                    </Text>
                  </View>
                </View>
              </View>

              <Separator className="bg-border" />

              <View className="w-full flex-row gap-4">
                <View className="flex-1 gap-2">
                  <Text className="text-strong font-sans-semibold text-sm">Day 1</Text>
                  <Text className="text-muted-foreground text-sm">Arrival and settle in</Text>
                </View>
                <Separator orientation="vertical" className="h-12" />
                <View className="flex-1 gap-2">
                  <Text className="text-strong font-sans-semibold text-sm">Day 2</Text>
                  <Text className="text-muted-foreground text-sm">Meetings and explore</Text>
                </View>
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/separator</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
