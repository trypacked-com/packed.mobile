import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

const TRAVELERS = [
  { name: 'Maya Chen', initials: 'MC', src: 'https://i.pravatar.cc/150?u=maya-chen' },
  { name: 'Jordan Lee', initials: 'JL', src: 'https://i.pravatar.cc/150?u=jordan-lee' },
  { name: 'Sam Ortiz', initials: 'SO', src: 'https://i.pravatar.cc/150?u=sam-ortiz' },
  { name: 'Riley Park', initials: 'RP' },
] as const;

export function AvatarPreview() {
  return (
    <View className="items-center gap-6">
      <View className="items-center gap-2">
        <Text className="text-muted-foreground text-sm">Tokyo trip travelers</Text>
        <View className="flex-row items-center">
          {TRAVELERS.map((traveler, index) => (
            <Avatar
              key={traveler.name}
              alt={traveler.name}
              className={index === 0 ? 'size-10' : 'size-10 -ml-2'}>
              {'src' in traveler && traveler.src ? (
                <AvatarImage source={{ uri: traveler.src }} />
              ) : null}
              <AvatarFallback>
                <Text>{traveler.initials}</Text>
              </AvatarFallback>
            </Avatar>
          ))}
        </View>
      </View>

      <View className="flex-row flex-wrap items-center justify-center gap-3">
        <Avatar alt="Maya Chen" className="size-12">
          <AvatarImage source={{ uri: TRAVELERS[0].src }} />
          <AvatarFallback>
            <Text>MC</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar alt="Riley Park" className="size-12">
          <AvatarFallback className="bg-brand-subtle">
            <Text className="text-brand">RP</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar alt="Packing buddy" className="size-8">
          <AvatarFallback>
            <Text>PB</Text>
          </AvatarFallback>
        </Avatar>
      </View>
    </View>
  );
}
