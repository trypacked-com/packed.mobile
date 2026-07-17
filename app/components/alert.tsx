import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { Luggage, Plane } from 'lucide-react-native';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function AlertScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Alert"
          description="Soft callouts for flight delays and packing tips — brand and destructive surfaces that stay calm and clear."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full gap-4">
              <Alert icon={Plane} variant="destructive">
                <AlertTitle>Flight delayed</AlertTitle>
                <AlertDescription>
                  <Text className="font-mono">TP1234</Text> is running about 45 minutes late. We'll
                  keep you in the loop at the gate.
                </AlertDescription>
              </Alert>
              <Alert icon={Luggage}>
                <AlertTitle>Packing tip</AlertTitle>
                <AlertDescription>
                  Lisbon evenings cool off — toss in a light layer for dinner by the river.
                </AlertDescription>
              </Alert>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/alert</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
