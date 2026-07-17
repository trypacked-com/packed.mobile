import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

export default function TabsScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Tabs"
          description="Packed trip sections in a soft sunken rail — warm brand fill on the active tab so you always know where you are."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full gap-4">
              <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
                Lisbon weekend
              </Text>
              <Tabs defaultValue="itinerary" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="itinerary" className="flex-1">
                    <Text>Itinerary</Text>
                  </TabsTrigger>
                  <TabsTrigger value="packing" className="flex-1">
                    <Text>Packing</Text>
                  </TabsTrigger>
                  <TabsTrigger value="notes" className="flex-1">
                    <Text>Notes</Text>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="itinerary" className="gap-2 pt-2">
                  <Text className="text-strong font-sans-semibold text-base">Day plan</Text>
                  <Text className="text-muted-foreground text-sm leading-relaxed">
                    Morning flight into LIS, afternoon walk through Alfama, dinner near the river.
                    We will keep an eye on the gate.
                  </Text>
                </TabsContent>
                <TabsContent value="packing" className="gap-2 pt-2">
                  <Text className="text-strong font-sans-semibold text-base">What to bring</Text>
                  <Text className="text-muted-foreground text-sm leading-relaxed">
                    Layers for cool evenings, a compact umbrella, and comfortable walking shoes.
                    Share the list so everyone stays in the loop.
                  </Text>
                </TabsContent>
                <TabsContent value="notes" className="gap-2 pt-2">
                  <Text className="text-strong font-sans-semibold text-base">Trip notes</Text>
                  <Text className="text-muted-foreground text-sm leading-relaxed">
                    Meet at the hotel lobby at 09:30. Keep liquids under 100ml and leave room for a
                    light layer in the cabin bag.
                  </Text>
                </TabsContent>
              </Tabs>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/tabs</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
