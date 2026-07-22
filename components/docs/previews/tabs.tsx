import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { View } from 'react-native';

export function TabsPreview() {
  const [tab, setTab] = useState('itinerary');

  return (
    <View className="w-full gap-4">
      <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
        Lisbon weekend
      </Text>
      <Tabs value={tab} onValueChange={setTab} className="w-full">
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
            Morning flight into LIS, afternoon walk through Alfama, dinner near the river. We will
            keep an eye on the gate.
          </Text>
        </TabsContent>
        <TabsContent value="packing" className="gap-2 pt-2">
          <Text className="text-strong font-sans-semibold text-base">What to bring</Text>
          <Text className="text-muted-foreground text-sm leading-relaxed">
            Layers for cool evenings, a compact umbrella, and comfortable walking shoes. Share the
            list so everyone stays in the loop.
          </Text>
        </TabsContent>
        <TabsContent value="notes" className="gap-2 pt-2">
          <Text className="text-strong font-sans-semibold text-base">Trip notes</Text>
          <Text className="text-muted-foreground text-sm leading-relaxed">
            Meet at the hotel lobby at 09:30. Keep liquids under 100ml and leave room for a light
            layer in the cabin bag.
          </Text>
        </TabsContent>
      </Tabs>
    </View>
  );
}
