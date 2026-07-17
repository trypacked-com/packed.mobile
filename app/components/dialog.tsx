import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function DialogScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Dialog"
          description="Soft modal surfaces for confirmations — calm copy, warm elevation, and brand primary actions when it matters."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full items-center gap-6">
              <View className="w-full gap-1">
                <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
                  Lisbon weekend
                </Text>
                <Text className="text-strong font-serif text-xl tracking-tight">
                  Jun 14 – Jun 16
                </Text>
                <Text className="text-muted-foreground text-sm">
                  2 travelers · <Text className="font-mono text-sm">TP1234</Text>
                </Text>
              </View>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Text>Cancel trip</Text>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Cancel this trip?</DialogTitle>
                    <DialogDescription>
                      We'll remove Lisbon weekend from your list. You can always start a new plan
                      later.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="secondary" className="min-w-28">
                        <Text>Keep trip</Text>
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button className="min-w-28">
                        <Text>Cancel trip</Text>
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/dialog</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
