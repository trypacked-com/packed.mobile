import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function SeparatorPreview() {
  return (
    <View className="w-full gap-4">
      <View className="w-full gap-3">
        <Text className="text-strong font-sans-semibold">Tokyo trip</Text>
        <Text className="text-muted-foreground text-sm">Mar 12 – Mar 22, 2026</Text>
        <Separator />
        <View className="gap-2">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm">Flight to HND</Text>
            <Text variant="code" className="text-sm">
              Mar 12 · 09:40
            </Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-sm">Shinjuku hotel check-in</Text>
            <Text variant="code" className="text-sm">
              Mar 12 · 15:00
            </Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-sm">Team dinner</Text>
            <Text variant="code" className="text-sm">
              Mar 13 · 19:30
            </Text>
          </View>
        </View>
      </View>

      <Separator className="bg-border" />

      <View className="w-full flex-row gap-4">
        <View className="flex-1 gap-2">
          <Text className="text-strong font-sans-semibold text-sm">Day 1</Text>
          <Text className="text-muted-foreground text-sm">Arrival and settle in</Text>
        </View>
        <Separator orientation="vertical" className="h-12" />
        <View className="flex-1 gap-2">
          <Text className="text-strong font-sans-semibold text-sm">Day 2</Text>
          <Text className="text-muted-foreground text-sm">Meetings and explore</Text>
        </View>
      </View>
    </View>
  );
}
