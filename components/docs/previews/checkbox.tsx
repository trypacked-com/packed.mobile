import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { View } from 'react-native';

const PACKING_ITEMS = [
  { id: 'passport', label: 'Passport', defaultChecked: true },
  { id: 'adapters', label: 'Chargers and adapters', defaultChecked: true },
  { id: 'toiletries', label: 'Toiletries', defaultChecked: false },
  { id: 'meds', label: 'Medications', defaultChecked: false },
  { id: 'layers', label: 'Weather layers', defaultChecked: false },
] as const;

export function CheckboxPreview() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(PACKING_ITEMS.map((item) => [item.id, item.defaultChecked]))
  );

  return (
    <View className="w-full gap-4">
      {PACKING_ITEMS.map((item) => (
        <View key={item.id} className="flex-row items-center gap-3">
          <Checkbox
            checked={checked[item.id]}
            onCheckedChange={(value) =>
              setChecked((prev) => ({ ...prev, [item.id]: value === true }))
            }
            aria-labelledby={item.id}
          />
          <Label
            nativeID={item.id}
            onPress={() => setChecked((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}>
            {item.label}
          </Label>
        </View>
      ))}
      <View className="flex-row items-center gap-3 opacity-50">
        <Checkbox checked disabled onCheckedChange={() => {}} aria-labelledby="locked-item" />
        <Label nativeID="locked-item" disabled>
          Confirmed booking (locked)
        </Label>
      </View>
    </View>
  );
}
