import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { View } from 'react-native';

const TRIP_TYPES = [
  { value: 'round-trip', label: 'Round trip', description: 'Outbound and return' },
  { value: 'one-way', label: 'One way', description: 'Single direction' },
  { value: 'multi-city', label: 'Multi-city', description: 'Two or more stops' },
] as const;

const CABIN_CLASSES = [
  { value: 'economy', label: 'Economy', description: 'Standard seat and cabin' },
  { value: 'premium', label: 'Premium economy', description: 'Extra space and quieter cabin' },
  { value: 'business', label: 'Business', description: 'Lie-flat or premium seat' },
] as const;

export function RadioGroupPreview() {
  const [tripType, setTripType] = useState<string>('round-trip');
  const [cabin, setCabin] = useState<string>('economy');

  return (
    <View className="w-full gap-8">
      <View className="gap-3">
        <Text className="text-strong font-sans-semibold text-sm">Trip type</Text>
        <RadioGroup value={tripType} onValueChange={setTripType}>
          {TRIP_TYPES.map((option) => (
            <View key={option.value} className="flex-row items-center gap-3">
              <RadioGroupItem value={option.value} aria-labelledby={`trip-${option.value}`} />
              <View className="min-w-0 flex-1 gap-0.5">
                <Label
                  nativeID={`trip-${option.value}`}
                  onPress={() => setTripType(option.value)}>
                  {option.label}
                </Label>
                <Text className="text-muted-foreground text-sm leading-relaxed">
                  {option.description}
                </Text>
              </View>
            </View>
          ))}
        </RadioGroup>
      </View>

      <View className="gap-3">
        <Text className="text-strong font-sans-semibold text-sm">Cabin class</Text>
        <RadioGroup value={cabin} onValueChange={setCabin}>
          {CABIN_CLASSES.map((option) => (
            <View key={option.value} className="flex-row items-center gap-3">
              <RadioGroupItem value={option.value} aria-labelledby={`cabin-${option.value}`} />
              <View className="min-w-0 flex-1 gap-0.5">
                <Label nativeID={`cabin-${option.value}`} onPress={() => setCabin(option.value)}>
                  {option.label}
                </Label>
                <Text className="text-muted-foreground text-sm leading-relaxed">
                  {option.description}
                </Text>
              </View>
            </View>
          ))}
          <View className="flex-row items-center gap-3 opacity-50">
            <RadioGroupItem value="first" disabled aria-labelledby="cabin-first" />
            <View className="min-w-0 flex-1 gap-0.5">
              <Label nativeID="cabin-first" disabled>
                First
              </Label>
              <Text className="text-muted-foreground text-sm leading-relaxed">
                Not offered on this route
              </Text>
            </View>
          </View>
        </RadioGroup>
      </View>
    </View>
  );
}
