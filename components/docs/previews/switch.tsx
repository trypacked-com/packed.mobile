import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { View } from 'react-native';

export function SwitchPreview() {
  const [checked, setChecked] = useState(true);

  return (
    <View className="flex-row items-center gap-3">
      <Switch checked={checked} onCheckedChange={setChecked} aria-labelledby="flight-alerts" />
      <Label nativeID="flight-alerts" onPress={() => setChecked((prev) => !prev)}>
        Flight alerts
      </Label>
    </View>
  );
}
