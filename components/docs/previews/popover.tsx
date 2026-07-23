import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function PopoverPreview() {
  return (
    <View className="items-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Text>Seat info</Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <View className="gap-1">
            <Text className="font-sans-semibold text-sm text-strong">
              Seat <Text className="font-mono text-sm">14A</Text>
            </Text>
            <Text className="text-sm text-muted-text">
              Window seat with extra legroom on this Airbus A320.
            </Text>
          </View>
        </PopoverContent>
      </Popover>
    </View>
  );
}
