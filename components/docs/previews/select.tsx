import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  type Option,
} from '@/components/ui/select';
import { useState } from 'react';
import { View } from 'react-native';

type SelectOption = NonNullable<Option>;

const CABIN_OPTIONS: SelectOption[] = [
  { value: 'economy', label: 'Economy' },
  { value: 'premium', label: 'Premium economy' },
  { value: 'business', label: 'Business' },
];

export function SelectPreview() {
  const [cabin, setCabin] = useState<Option | undefined>(CABIN_OPTIONS[0]);

  return (
    <View className="w-full max-w-xs gap-2">
      <Label nativeID="cabin">Cabin</Label>
      <Select value={cabin} onValueChange={setCabin}>
        <SelectTrigger className="w-full" aria-labelledby="cabin">
          <SelectValue placeholder="Choose cabin" />
        </SelectTrigger>
        <SelectContent className="w-full">
          {CABIN_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value} label={option.label}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </View>
  );
}
