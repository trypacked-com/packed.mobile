import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { Image, ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

const MAP_URI =
  'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80';
const BOARDING_URI =
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80';

export default function AspectRatioScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Aspect Ratio"
          description="Fixed ratios for map thumbnails and boarding pass art — soft clipped frames that keep trip imagery in proportion."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full max-w-sm gap-6">
              <View className="gap-2">
                <Text className="text-muted-foreground text-sm">Map thumbnail · 16∶9</Text>
                <AspectRatio
                  ratio={16 / 9}
                  className="rounded-2xl border border-border-subtle bg-surface-sunken shadow-card">
                  <Image
                    source={{ uri: MAP_URI }}
                    className="size-full"
                    accessibilityLabel="Map of Lisbon city centre"
                  />
                </AspectRatio>
                <Text className="text-strong font-sans-medium text-sm">Lisbon · Alfama</Text>
              </View>

              <View className="gap-2">
                <Text className="text-muted-foreground text-sm">Boarding pass art · 3∶2</Text>
                <AspectRatio
                  ratio={3 / 2}
                  className="rounded-2xl border border-border-subtle bg-surface-sunken shadow-card">
                  <Image
                    source={{ uri: BOARDING_URI }}
                    className="size-full"
                    accessibilityLabel="Airplane wing above the clouds"
                  />
                </AspectRatio>
                <View className="flex-row items-center justify-between">
                  <View className="gap-0.5">
                    <Text className="text-muted-foreground text-xs">Depart</Text>
                    <Text className="font-mono text-lg">LHR</Text>
                  </View>
                  <Text className="text-muted-foreground font-mono text-sm">TP1234</Text>
                  <View className="items-end gap-0.5">
                    <Text className="text-muted-foreground text-xs">Arrive</Text>
                    <Text className="font-mono text-lg">LIS</Text>
                  </View>
                </View>
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/aspect-ratio</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
