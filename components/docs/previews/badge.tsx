import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function BadgePreview() {
  return (
    <View className="w-full max-w-lg gap-6">
      <View className="gap-2">
        <Text className="font-sans-bold text-[0.6875rem] uppercase tracking-[0.12em] text-link">
          Status
        </Text>
        <View className="flex-row flex-wrap gap-2">
          <Badge variant="success">
            <Text>On time</Text>
          </Badge>
          <Badge variant="info" pulse>
            <Text>Boarding</Text>
          </Badge>
          <Badge variant="warning">
            <Text>Delayed 40m</Text>
          </Badge>
          <Badge variant="danger">
            <Text>Cancelled</Text>
          </Badge>
          <Badge variant="neutral">
            <Text>Landed</Text>
          </Badge>
        </View>
      </View>
      <View className="gap-2">
        <Text className="font-sans-bold text-[0.6875rem] uppercase tracking-[0.12em] text-link">
          Labels
        </Text>
        <View className="flex-row flex-wrap gap-2">
          <Badge>
            <Text>3 updates</Text>
          </Badge>
          <Badge variant="brand">
            <Text>Packed</Text>
          </Badge>
          <Badge variant="tag">
            <Text>Beach</Text>
          </Badge>
          <Badge variant="tagBrand">
            <Text>Priority</Text>
          </Badge>
        </View>
      </View>
    </View>
  );
}
