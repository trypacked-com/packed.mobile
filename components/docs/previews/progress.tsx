import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function ProgressPreview() {
  return (
    <View className="w-full max-w-xs gap-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm text-muted-text">Packing for Lisbon</Text>
        <Text className="font-mono text-sm text-strong">65%</Text>
      </View>
      <Progress value={65} />
    </View>
  );
}
