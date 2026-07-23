import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function SeparatorPreview() {
  return (
    <View className="w-full max-w-xs gap-4">
      <View className="gap-1">
        <Text className="text-sm font-medium">Flights</Text>
        <Text className="text-sm text-muted-foreground">
          <Text className="font-mono text-sm">TP1234</Text> to Lisbon
        </Text>
      </View>
      <Separator />
      <View className="gap-1">
        <Text className="text-sm font-medium">Hotels</Text>
        <Text className="text-sm text-muted-foreground">Bairro Alto, 3 nights</Text>
      </View>
    </View>
  );
}
