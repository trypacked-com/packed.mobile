import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { BellIcon, PlusIcon } from 'lucide-react-native';
import { View } from 'react-native';

export function ButtonPreview() {
  return (
    <View className="items-center gap-3">
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Button>
          <Icon as={PlusIcon} />
          <Text>Add flight</Text>
        </Button>
        <Button variant="secondary">
          <Text>Save draft</Text>
        </Button>
        <Button variant="ghost">
          <Text>Cancel</Text>
        </Button>
      </View>
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Button variant="destructive">
          <Text>Remove trip</Text>
        </Button>
        <Button variant="outline">
          <Text>View details</Text>
        </Button>
      </View>
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Button size="sm">
          <Text>Small</Text>
        </Button>
        <Button size="default">
          <Text>Default</Text>
        </Button>
        <Button size="lg">
          <Text>Large</Text>
        </Button>
        <Button size="icon" variant="secondary" aria-label="Notifications">
          <Icon as={BellIcon} />
        </Button>
      </View>
    </View>
  );
}
