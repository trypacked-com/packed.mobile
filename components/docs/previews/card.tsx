import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function CardPreview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
          Upcoming flight
        </Text>
        <CardTitle className="font-serif text-2xl tracking-tight">Lisbon weekend</CardTitle>
        <CardDescription>Jun 14 – Jun 16 · 2 travelers</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <View className="flex-row items-end justify-between">
          <View className="gap-1">
            <Text className="text-muted-foreground text-xs">Depart</Text>
            <Text className="font-mono text-lg">LHR</Text>
            <Text className="font-mono text-sm">08:45</Text>
          </View>
          <Text className="text-muted-foreground pb-1 text-sm">TP1234</Text>
          <View className="items-end gap-1">
            <Text className="text-muted-foreground text-xs">Arrive</Text>
            <Text className="font-mono text-lg">LIS</Text>
            <Text className="font-mono text-sm">11:20</Text>
          </View>
        </View>
        <View className="rounded-xl bg-surface-sunken px-3 py-2">
          <Text className="text-muted-foreground text-sm">
            Gate <Text className="text-strong font-mono text-sm">B7</Text>
            {' · '}
            Seat <Text className="text-strong font-mono text-sm">12C</Text>
          </Text>
        </View>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">
          <Text>View itinerary</Text>
        </Button>
        <Button variant="secondary" className="flex-1">
          <Text>Share</Text>
        </Button>
      </CardFooter>
    </Card>
  );
}
