import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Text } from '@/components/ui/text';
import { Luggage, Plane } from 'lucide-react-native';
import { View } from 'react-native';

export function AlertPreview() {
  return (
    <View className="w-full gap-4">
      <Alert icon={Plane} variant="destructive">
        <AlertTitle>Flight delayed</AlertTitle>
        <AlertDescription>
          <Text className="font-mono">TP1234</Text> is running about 45 minutes late. We'll keep
          you in the loop at the gate.
        </AlertDescription>
      </Alert>
      <Alert icon={Luggage}>
        <AlertTitle>Packing tip</AlertTitle>
        <AlertDescription>
          Lisbon evenings cool off — toss in a light layer for dinner by the river.
        </AlertDescription>
      </Alert>
    </View>
  );
}
