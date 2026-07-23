import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { View } from 'react-native';

export function TabsPreview() {
  const [value, setValue] = useState('flights');

  return (
    <Tabs value={value} onValueChange={setValue} className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="flights">
          <Text>Flights</Text>
        </TabsTrigger>
        <TabsTrigger value="stays">
          <Text>Stays</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="flights">
        <Text className="text-sm text-muted-text">
          <Text className="font-mono text-sm">TP1234</Text> to Lisbon departs at{' '}
          <Text className="font-mono text-sm">08:45</Text> from gate{' '}
          <Text className="font-mono text-sm">B7</Text>.
        </Text>
      </TabsContent>
      <TabsContent value="stays">
        <Text className="text-sm text-muted-text">
          Hotel check-in at <Text className="font-mono text-sm">15:00</Text> — we'll remind you
          before you land.
        </Text>
      </TabsContent>
    </Tabs>
  );
}
