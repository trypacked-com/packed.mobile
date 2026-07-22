import { Text } from '@/components/ui/text';
import { ToggleGroup, ToggleGroupIcon, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Briefcase, List, Map, Plane } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';

const TRIP_FILTERS = [
  { value: 'all', label: 'All', icon: List },
  { value: 'flights', label: 'Flights', icon: Plane },
  { value: 'stays', label: 'Stays', icon: Briefcase },
  { value: 'map', label: 'Map', icon: Map },
] as const;

export function ToggleGroupPreview() {
  const [tripFilter, setTripFilter] = useState<string>('all');
  const [packingFilters, setPackingFilters] = useState<string[]>(['packed']);

  return (
    <View className="w-full gap-6">
      <View className="gap-2">
        <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
          Trip views
        </Text>
        <ToggleGroup
          type="single"
          variant="outline"
          size="sm"
          value={tripFilter}
          onValueChange={(value) => {
            if (value) setTripFilter(value);
          }}>
          {TRIP_FILTERS.map((filter, index) => (
            <ToggleGroupItem
              key={filter.value}
              value={filter.value}
              aria-label={filter.label}
              isFirst={index === 0}
              isLast={index === TRIP_FILTERS.length - 1}>
              <ToggleGroupIcon as={filter.icon} />
              <Text>{filter.label}</Text>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </View>

      <View className="gap-2">
        <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
          Packing filters
        </Text>
        <ToggleGroup
          type="multiple"
          variant="outline"
          value={packingFilters}
          onValueChange={setPackingFilters}>
          <ToggleGroupItem value="packed" aria-label="Show packed items" isFirst>
            <Text>Packed</Text>
          </ToggleGroupItem>
          <ToggleGroupItem value="carry-on" aria-label="Show carry-on only">
            <Text>Carry-on</Text>
          </ToggleGroupItem>
          <ToggleGroupItem value="shared" aria-label="Shared list" isLast disabled>
            <Text>Shared</Text>
          </ToggleGroupItem>
        </ToggleGroup>
      </View>

      <View className="gap-2">
        <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
          Sizes
        </Text>
        <ToggleGroup type="single" value="default" onValueChange={() => {}}>
          <ToggleGroupItem value="sm" size="sm" isFirst>
            <Text>Small</Text>
          </ToggleGroupItem>
          <ToggleGroupItem value="default" isLast>
            <Text>Default</Text>
          </ToggleGroupItem>
        </ToggleGroup>
      </View>
    </View>
  );
}
