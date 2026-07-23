import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import { View } from 'react-native';

export function RadioGroupPreview() {
  const [value, setValue] = useState('window');

  return (
    <RadioGroup value={value} onValueChange={setValue} className="max-w-xs gap-3">
      <View className="flex-row items-center gap-2">
        <RadioGroupItem value="window" aria-labelledby="seat-window" />
        <Label nativeID="seat-window" onPress={() => setValue('window')}>
          Window
        </Label>
      </View>
      <View className="flex-row items-center gap-2">
        <RadioGroupItem value="aisle" aria-labelledby="seat-aisle" />
        <Label nativeID="seat-aisle" onPress={() => setValue('aisle')}>
          Aisle
        </Label>
      </View>
    </RadioGroup>
  );
}
