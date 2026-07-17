import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function AlertDialogScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Alert Dialog"
          description="Calm confirmations for irreversible trip changes — brand and destructive actions that stay clear and soft."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full items-center gap-6">
              <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
                Lisbon weekend · Trip actions
              </Text>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    <Text>Remove trip</Text>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Remove this trip?</AlertDialogTitle>
                    <AlertDialogDescription>
                      We'll stop watching <Text className="font-mono text-sm">TP1234</Text> and clear
                      your Lisbon itinerary.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>
                      <Text>Keep trip</Text>
                    </AlertDialogCancel>
                    <AlertDialogAction variant="destructive">
                      <Text>Remove trip</Text>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/alert-dialog</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
