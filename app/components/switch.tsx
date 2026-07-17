import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

const TRIP_PREFS = [
  {
    id: 'notifications',
    label: 'Trip notifications',
    description: 'Flight changes and gate updates',
    defaultChecked: true,
  },
  {
    id: 'offline-maps',
    label: 'Offline maps',
    description: 'Download maps before you travel',
    defaultChecked: true,
  },
  {
    id: 'quiet-hours',
    label: 'Quiet hours',
    description: 'Hold non-urgent alerts overnight',
    defaultChecked: false,
  },
  {
    id: 'share-location',
    label: 'Share trip location',
    description: 'Let companions see where you are',
    defaultChecked: false,
  },
] as const;

export default function SwitchScreen() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(TRIP_PREFS.map((pref) => [pref.id, pref.defaultChecked]))
  );

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Switch"
          description="Packed trip preference toggles — soft thumb ease, warm brand track when on, sunken track when off."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full gap-5">
              {TRIP_PREFS.map((pref) => (
                <View key={pref.id} className="flex-row items-center justify-between gap-4">
                  <View className="min-w-0 flex-1 gap-0.5">
                    <Label
                      nativeID={pref.id}
                      onPress={() =>
                        setChecked((prev) => ({ ...prev, [pref.id]: !prev[pref.id] }))
                      }>
                      {pref.label}
                    </Label>
                    <Text className="text-muted-foreground text-sm leading-relaxed">
                      {pref.description}
                    </Text>
                  </View>
                  <Switch
                    checked={checked[pref.id]}
                    onCheckedChange={(value) =>
                      setChecked((prev) => ({ ...prev, [pref.id]: value }))
                    }
                    aria-labelledby={pref.id}
                  />
                </View>
              ))}
              <View className="flex-row items-center justify-between gap-4 opacity-50">
                <View className="min-w-0 flex-1 gap-0.5">
                  <Label nativeID="sync-locked" disabled>
                    Sync to calendar
                  </Label>
                  <Text className="text-muted-foreground text-sm leading-relaxed">
                    Connected account required
                  </Text>
                </View>
                <Switch checked disabled aria-labelledby="sync-locked" />
              </View>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/switch</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
