import { Text } from '@/components/ui/text';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useState } from 'react';
import { View } from 'react-native';

export function ToggleGroupPreview() {
  const [value, setValue] = useState<string>('departures');

  return (
    <View className="items-center">
      <ToggleGroup
        type="single"
        variant="outline"
        value={value}
        onValueChange={(next) => {
          if (next) setValue(next);
        }}>
        <ToggleGroupItem value="departures" aria-label="Departures" isFirst>
          <Text>Departures</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="arrivals" aria-label="Arrivals" isLast>
          <Text>Arrivals</Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </View>
  );
}
