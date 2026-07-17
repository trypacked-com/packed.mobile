import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Text } from '@/components/ui/text';
import { Toggle, ToggleIcon } from '@/components/ui/toggle';
import { Stack } from 'expo-router';
import { Briefcase, List, Map, Plane } from 'lucide-react-native';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

const VIEW_FILTERS = [
  { id: 'all', label: 'All', icon: List },
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'stays', label: 'Stays', icon: Briefcase },
  { id: 'map', label: 'Map', icon: Map },
] as const;

type ViewFilterId = (typeof VIEW_FILTERS)[number]['id'];

export default function ToggleScreen() {
  const [view, setView] = useState<ViewFilterId>('all');
  const [showPacked, setShowPacked] = useState(true);
  const [showCarryOn, setShowCarryOn] = useState(false);

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Toggle"
          description="Packed view filters and compact on/off chips — soft corners, hairline outline, and a warm brand fill when pressed."
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
                <View className="flex-row flex-wrap gap-2">
                  {VIEW_FILTERS.map((filter) => (
                    <Toggle
                      key={filter.id}
                      variant="outline"
                      size="sm"
                      pressed={view === filter.id}
                      onPressedChange={(pressed) => {
                        if (pressed) setView(filter.id);
                      }}
                      aria-label={filter.label}>
                      <ToggleIcon as={filter.icon} />
                      <Text>{filter.label}</Text>
                    </Toggle>
                  ))}
                </View>
              </View>

              <View className="gap-2">
                <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
                  Packing filters
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <Toggle
                    variant="outline"
                    pressed={showPacked}
                    onPressedChange={setShowPacked}
                    aria-label="Show packed items">
                    <Text>Packed</Text>
                  </Toggle>
                  <Toggle
                    variant="outline"
                    pressed={showCarryOn}
                    onPressedChange={setShowCarryOn}
                    aria-label="Show carry-on only">
                    <Text>Carry-on</Text>
                  </Toggle>
                  <Toggle variant="outline" disabled pressed aria-label="Shared list locked">
                    <Text>Shared</Text>
                  </Toggle>
                </View>
              </View>

              <View className="gap-2">
                <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
                  Sizes
                </Text>
                <View className="flex-row flex-wrap items-center gap-2">
                  <Toggle size="sm" pressed>
                    <Text>Small</Text>
                  </Toggle>
                  <Toggle pressed>
                    <Text>Default</Text>
                  </Toggle>
                  <Toggle size="lg" pressed>
                    <Text>Large</Text>
                  </Toggle>
                </View>
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/toggle</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
