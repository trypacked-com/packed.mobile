import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { View } from 'react-native';

export function InputPreview() {
  return (
    <View className="w-full max-w-xs gap-4">
      <View className="gap-2">
        <Label nativeID="destination">Destination</Label>
        <Input id="destination" aria-labelledby="destination" placeholder="Where to?" />
      </View>
      <View className="gap-2">
        <Label nativeID="flight-code">Flight code</Label>
        <Input
          id="flight-code"
          aria-labelledby="flight-code"
          className="font-mono"
          placeholder="TP1234"
          defaultValue="TP1234"
        />
      </View>
    </View>
  );
}
