import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Text } from '@/components/ui/text';
import { ToggleGroup, ToggleGroupIcon, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Stack } from 'expo-router';
import { Briefcase, List, Map, Plane } from 'lucide-react-native';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

const TRIP_FILTERS = [
  { value: 'all', label: 'All', icon: List },
  { value: 'flights', label: 'Flights', icon: Plane },
  { value: 'stays', label: 'Stays', icon: Briefcase },
  { value: 'map', label: 'Map', icon: Map },
] as const;

export default function ToggleGroupScreen() {
  const [tripFilter, setTripFilter] = useState<string>('all');
  const [packingFilters, setPackingFilters] = useState<string[]>(['packed']);

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Toggle Group"
          description="Packed trip filters — a soft segmented control with hairline outline and a warm brand fill on the active segment."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
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
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/toggle-group</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
