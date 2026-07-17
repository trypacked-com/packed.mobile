import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { BellIcon, PlusIcon } from 'lucide-react-native';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function ButtonScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Button"
          description="Packed's primary action button — warm, rounded, with a soft brand glow on the primary variant."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="items-center gap-3">
              <View className="flex-row flex-wrap items-center justify-center gap-2">
                <Button>
                  <Icon as={PlusIcon} />
                  <Text>Add flight</Text>
                </Button>
                <Button variant="secondary">
                  <Text>Save draft</Text>
                </Button>
                <Button variant="ghost">
                  <Text>Cancel</Text>
                </Button>
              </View>
              <View className="flex-row flex-wrap items-center justify-center gap-2">
                <Button variant="destructive">
                  <Text>Remove trip</Text>
                </Button>
                <Button variant="outline">
                  <Text>View details</Text>
                </Button>
              </View>
              <View className="flex-row flex-wrap items-center justify-center gap-2">
                <Button size="sm">
                  <Text>Small</Text>
                </Button>
                <Button size="default">
                  <Text>Default</Text>
                </Button>
                <Button size="lg">
                  <Text>Large</Text>
                </Button>
                <Button size="icon" variant="secondary" aria-label="Notifications">
                  <Icon as={BellIcon} />
                </Button>
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/button</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
