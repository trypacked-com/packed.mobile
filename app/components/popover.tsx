import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { Plane } from 'lucide-react-native';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function PopoverScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Popover"
          description="Soft elevated peeks for flight details — a calm card that appears when you need a closer look."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full items-center gap-6">
              <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
                Lisbon weekend · Flight day
              </Text>

              <View className="w-full flex-row items-center justify-between gap-3">
                <View className="flex-1 flex-row items-center gap-3">
                  <View className="bg-brand-subtle size-10 items-center justify-center rounded-full">
                    <Icon as={Plane} className="text-brand size-5" />
                  </View>
                  <View className="flex-1 gap-0.5">
                    <Text className="text-strong font-sans-semibold text-base">TP1234</Text>
                    <Text className="text-muted-foreground text-sm">LHR → LIS · 08:45</Text>
                  </View>
                </View>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      <Text className="text-brand font-sans-semibold text-sm">Details</Text>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-64 gap-3">
                    <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
                      Flight details
                    </Text>
                    <View className="flex-row items-end justify-between">
                      <View className="gap-1">
                        <Text className="text-muted-foreground text-xs">Depart</Text>
                        <Text className="font-mono text-lg">LHR</Text>
                        <Text className="font-mono text-sm">08:45</Text>
                      </View>
                      <Text className="text-muted-foreground pb-1 text-sm">TP1234</Text>
                      <View className="items-end gap-1">
                        <Text className="text-muted-foreground text-xs">Arrive</Text>
                        <Text className="font-mono text-lg">LIS</Text>
                        <Text className="font-mono text-sm">11:20</Text>
                      </View>
                    </View>
                    <View className="rounded-xl bg-surface-sunken px-3 py-2">
                      <Text className="text-muted-foreground text-sm">
                        Gate <Text className="text-strong font-mono text-sm">B7</Text>
                        {' · '}
                        Seat <Text className="text-strong font-mono text-sm">12C</Text>
                      </Text>
                    </View>
                    <Text className="text-muted-foreground text-sm leading-relaxed">
                      Aim for the gate by 08:00 — we will ping you if it moves.
                    </Text>
                  </PopoverContent>
                </Popover>
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/popover</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
