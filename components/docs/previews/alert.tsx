import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Text } from '@/components/ui/text';
import { Plane, Sun } from 'lucide-react-native';
import { View } from 'react-native';

export function AlertPreview() {
  return (
    <View className="w-full max-w-md gap-3">
      <Alert icon={Plane} variant="destructive">
        <View className="flex-row items-start justify-between gap-2">
          <AlertTitle>Gate change</AlertTitle>
          <Text className="shrink-0 text-[0.6875rem] text-subtle">2m ago</Text>
        </View>
        <AlertDescription>
          <Text className="font-mono text-sm">TP1234</Text> now departs from gate{' '}
          <Text className="font-mono text-sm">B7</Text>.
        </AlertDescription>
      </Alert>
      <Alert icon={Sun}>
        <View className="flex-row items-start justify-between gap-2">
          <AlertTitle>Lisbon forecast</AlertTitle>
          <Text className="shrink-0 text-[0.6875rem] text-subtle">1h ago</Text>
        </View>
        <AlertDescription>Sunny, 24°C when you land tomorrow.</AlertDescription>
      </Alert>
    </View>
  );
}
