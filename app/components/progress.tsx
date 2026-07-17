import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

const TRIP_PROGRESS = [
  {
    id: 'packing',
    label: 'Lisbon packing list',
    detail: '18 of 24 items packed',
    value: 75,
  },
  {
    id: 'upload',
    label: 'Boarding pass upload',
    detail: 'Uploading to trip vault',
    value: 42,
  },
  {
    id: 'offline',
    label: 'Offline maps',
    detail: 'Lisbon city centre download',
    value: 91,
  },
] as const;

export default function ProgressScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Progress"
          description="Packed trip completion bars — brand fill on a sunken track for packing lists, uploads, and offline downloads."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full gap-6">
              {TRIP_PROGRESS.map((item) => (
                <View key={item.id} className="w-full gap-2.5">
                  <View className="flex-row items-end justify-between gap-3">
                    <View className="min-w-0 flex-1 gap-0.5">
                      <Text className="text-strong font-sans-semibold text-base">{item.label}</Text>
                      <Text className="text-muted-foreground text-sm leading-relaxed">
                        {item.detail}
                      </Text>
                    </View>
                    <Text className="text-strong font-mono text-sm tabular-nums">{item.value}%</Text>
                  </View>
                  <Progress value={item.value} />
                </View>
              ))}

              <View className="w-full gap-2.5 opacity-50">
                <View className="flex-row items-end justify-between gap-3">
                  <View className="min-w-0 flex-1 gap-0.5">
                    <Text className="text-strong font-sans-semibold text-base">Sync paused</Text>
                    <Text className="text-muted-foreground text-sm leading-relaxed">
                      Waiting for connection
                    </Text>
                  </View>
                  <Text className="text-strong font-mono text-sm tabular-nums">12%</Text>
                </View>
                <Progress value={12} />
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/progress</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
