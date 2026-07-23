import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function AvatarPreview() {
  return (
    <View className="flex-row items-center gap-4">
      <Avatar alt="Mara Quinn">
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop',
          }}
        />
        <AvatarFallback>
          <Text>MQ</Text>
        </AvatarFallback>
      </Avatar>
      <Avatar alt="Tom Reyes">
        <AvatarFallback>
          <Text>TR</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  );
}
