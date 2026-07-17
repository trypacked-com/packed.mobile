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
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Stack } from 'expo-router';
import { Info, Luggage } from 'lucide-react-native';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function TooltipScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Tooltip"
          description="Soft popovers for gate changes and baggage tips — calm context that appears when you need it."
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
                <View className="gap-1">
                  <Text className="text-muted-foreground text-xs uppercase tracking-widest">
                    Gate
                  </Text>
                  <Text className="text-strong font-mono text-2xl tracking-tight">B7</Text>
                </View>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon as={Info} className="size-4 text-muted-foreground" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-[220px]">
                    <Text>Aim for gate B7 by 08:00 — we'll ping you if it moves.</Text>
                  </TooltipContent>
                </Tooltip>
              </View>

              <View className="bg-border-subtle h-px w-full" />

              <View className="w-full flex-row items-center justify-between gap-3">
                <View className="flex-1 flex-row items-center gap-3">
                  <View className="bg-brand-subtle size-10 items-center justify-center rounded-full">
                    <Icon as={Luggage} className="text-brand size-5" />
                  </View>
                  <View className="flex-1 gap-0.5">
                    <Text className="text-strong font-sans-semibold text-base">Cabin bag</Text>
                    <Text className="text-muted-foreground text-sm">One soft bag under the seat</Text>
                  </View>
                </View>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      <Text className="text-brand font-sans-semibold text-sm">Tip</Text>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-[220px]">
                    <Text>Keep liquids under 100ml and leave room for a light layer.</Text>
                  </TooltipContent>
                </Tooltip>
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/tooltip</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
