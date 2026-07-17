import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  type Option,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

const CABIN_OPTIONS: Option[] = [
  { value: 'economy', label: 'Economy' },
  { value: 'premium', label: 'Premium economy' },
  { value: 'business', label: 'Business' },
];

const AIRPORT_OPTIONS: Option[] = [
  { value: 'lhr', label: 'LHR · London Heathrow' },
  { value: 'lis', label: 'LIS · Lisbon' },
  { value: 'cdg', label: 'CDG · Paris Charles de Gaulle' },
  { value: 'jfk', label: 'JFK · New York' },
];

export default function SelectScreen() {
  const [cabin, setCabin] = useState<Option | undefined>(CABIN_OPTIONS[0]);
  const [airport, setAirport] = useState<Option | undefined>(AIRPORT_OPTIONS[1]);

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Select"
          description="Soft pickers for cabin class and airports — a calm trigger, warm elevated menu, and a brand check on the choice you make."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full gap-6">
              <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
                Lisbon weekend · Preferences
              </Text>

              <View className="gap-1.5">
                <Label nativeID="cabin-class">Cabin class</Label>
                <Select value={cabin} onValueChange={setCabin}>
                  <SelectTrigger className="w-full" aria-labelledby="cabin-class">
                    <SelectValue placeholder="Choose a cabin" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>Cabin</SelectLabel>
                      {CABIN_OPTIONS.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          label={option.label}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </View>

              <View className="gap-1.5">
                <Label nativeID="departure-airport">Departure airport</Label>
                <Select value={airport} onValueChange={setAirport}>
                  <SelectTrigger className="w-full" aria-labelledby="departure-airport">
                    <SelectValue placeholder="Choose an airport" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>Airports</SelectLabel>
                      {AIRPORT_OPTIONS.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          label={option.label}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Text className="text-muted-foreground text-sm leading-relaxed">
                  We will watch flights from{' '}
                  <Text className="text-strong font-mono text-sm">
                    {airport?.value?.toUpperCase() ?? '—'}
                  </Text>
                  .
                </Text>
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/select</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
