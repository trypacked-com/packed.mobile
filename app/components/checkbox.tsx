import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

const PACKING_ITEMS = [
  { id: 'passport', label: 'Passport', defaultChecked: true },
  { id: 'adapters', label: 'Chargers and adapters', defaultChecked: true },
  { id: 'toiletries', label: 'Toiletries', defaultChecked: false },
  { id: 'meds', label: 'Medications', defaultChecked: false },
  { id: 'layers', label: 'Weather layers', defaultChecked: false },
] as const;

export default function CheckboxScreen() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(PACKING_ITEMS.map((item) => [item.id, item.defaultChecked]))
  );

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Checkbox"
          description="Packed packing checklist control — soft corners, hairline border, and a warm brand fill when checked."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
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
                    onPress={() =>
                      setChecked((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }>
                    {item.label}
                  </Label>
                </View>
              ))}
              <View className="flex-row items-center gap-3 opacity-50">
                <Checkbox
                  checked
                  disabled
                  onCheckedChange={() => {}}
                  aria-labelledby="locked-item"
                />
                <Label nativeID="locked-item" disabled>
                  Confirmed booking (locked)
                </Label>
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/checkbox</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
