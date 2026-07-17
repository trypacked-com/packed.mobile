import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function BadgeScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Badge"
          description="Compact status labels for flights, trip segments, and packing counts — warm fills and soft pill shapes."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="items-center gap-4">
              <View className="flex-row flex-wrap items-center justify-center gap-2">
                <Badge>
                  <Text>Confirmed</Text>
                </Badge>
                <Badge variant="secondary">
                  <Text>Draft trip</Text>
                </Badge>
                <Badge variant="outline">
                  <Text>Layover</Text>
                </Badge>
                <Badge variant="destructive">
                  <Text>Cancelled</Text>
                </Badge>
              </View>
              <View className="flex-row flex-wrap items-center justify-center gap-2">
                <Badge>
                  <Text>On time</Text>
                </Badge>
                <Badge variant="secondary">
                  <Text>12 items packed</Text>
                </Badge>
                <Badge variant="outline">
                  <Text>Gate B24</Text>
                </Badge>
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/badge</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
