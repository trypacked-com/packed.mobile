import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Text } from '@/components/ui/text';
import { Image, View } from 'react-native';

const MAP_URI = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80';
const BOARDING_URI = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80';

export function AspectRatioPreview() {
  return (
    <View className="w-full max-w-sm gap-6">
      <View className="gap-2">
        <Text className="text-sm text-muted-foreground">Map thumbnail · 16∶9</Text>
        <AspectRatio
          ratio={16 / 9}
          className="rounded-2xl border border-border-subtle bg-surface-sunken shadow-card">
          <Image
            source={{ uri: MAP_URI }}
            className="size-full"
            accessibilityLabel="Map of Lisbon city centre"
          />
        </AspectRatio>
        <Text className="font-sans-medium text-sm text-strong">Lisbon · Alfama</Text>
      </View>

      <View className="gap-2">
        <Text className="text-sm text-muted-foreground">Boarding pass art · 3∶2</Text>
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
            <Text className="text-xs text-muted-foreground">Depart</Text>
            <Text className="font-mono text-lg">LHR</Text>
          </View>
          <Text className="font-mono text-sm text-muted-foreground">TP1234</Text>
          <View className="items-end gap-0.5">
            <Text className="text-xs text-muted-foreground">Arrive</Text>
            <Text className="font-mono text-lg">LIS</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
