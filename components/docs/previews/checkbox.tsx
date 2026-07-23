import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { View } from 'react-native';

export function CheckboxPreview() {
  const [checked, setChecked] = useState(true);

  return (
    <View className="flex-row items-center gap-2">
      <Checkbox
        checked={checked}
        onCheckedChange={(value) => setChecked(value === true)}
        aria-labelledby="gate-alerts"
      />
      <Label nativeID="gate-alerts" onPress={() => setChecked((prev) => !prev)}>
        Notify me on gate change
      </Label>
    </View>
  );
}
