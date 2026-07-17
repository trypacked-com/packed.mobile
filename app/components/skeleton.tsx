import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Skeleton } from '@/components/ui/skeleton';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function SkeletonScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Skeleton"
          description="Warm loading placeholders for trip cards and packing lists — soft sunken fills that pulse while content arrives."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full gap-6">
              <View className="w-full gap-3">
                <View className="flex-row items-center gap-3">
                  <Skeleton className="size-12 rounded-full" />
                  <View className="flex-1 gap-2">
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-3 w-1/2" />
                  </View>
                </View>
                <Skeleton className="h-24 w-full rounded-xl" />
                <View className="flex-row gap-2">
                  <Skeleton className="h-8 flex-1 rounded-md" />
                  <Skeleton className="h-8 flex-1 rounded-md" />
                </View>
              </View>

              <View className="w-full gap-3">
                <Skeleton className="h-3 w-1/3" />
                <View className="gap-2.5">
                  <View className="flex-row items-center gap-3">
                    <Skeleton className="size-8 rounded-md" />
                    <Skeleton className="h-3 flex-1" />
                    <Skeleton className="h-3 w-12" />
                  </View>
                  <View className="flex-row items-center gap-3">
                    <Skeleton className="size-8 rounded-md" />
                    <Skeleton className="h-3 flex-1" />
                    <Skeleton className="h-3 w-12" />
                  </View>
                  <View className="flex-row items-center gap-3">
                    <Skeleton className="size-8 rounded-md" />
                    <Skeleton className="h-3 flex-1" />
                    <Skeleton className="h-3 w-12" />
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
          <Snippet>npx @react-native-reusables/cli add @packed-native/skeleton</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
