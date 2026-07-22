import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function BadgePreview() {
  return (
    <View className="items-center gap-4">
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Badge>
          <Text>Confirmed</Text>
        </Badge>
        <Badge variant="secondary">
          <Text>Draft trip</Text>
        </Badge>
        <Badge variant="outline">
          <Text>Layover</Text>
        </Badge>
        <Badge variant="destructive">
          <Text>Cancelled</Text>
        </Badge>
      </View>
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Badge>
          <Text>On time</Text>
        </Badge>
        <Badge variant="secondary">
          <Text>12 items packed</Text>
        </Badge>
        <Badge variant="outline">
          <Text>Gate B24</Text>
        </Badge>
      </View>
    </View>
  );
}
