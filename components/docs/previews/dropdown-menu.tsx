import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Ellipsis, MapPin, Pencil, Share2, Trash2 } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';

export function DropdownMenuPreview() {
  const [action, setAction] = useState<string | null>(null);

  return (
    <View className="w-full gap-6">
      <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
        Lisbon weekend · Trips
      </Text>

      <View className="w-full flex-row items-center justify-between gap-3">
        <View className="flex-1 flex-row items-center gap-3">
          <View className="bg-brand-subtle size-10 items-center justify-center rounded-full">
            <Icon as={MapPin} className="text-brand size-5" />
          </View>
          <View className="flex-1 gap-0.5">
            <Text className="text-strong font-sans-semibold text-base">Lisbon weekend</Text>
            <Text className="text-muted-foreground text-sm">Fri 12 – Sun 14 · 2 bags</Text>
          </View>
        </View>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Icon as={Ellipsis} className="text-muted-foreground size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Trip</DropdownMenuLabel>
            <DropdownMenuItem onPress={() => setAction('edit')} className="gap-2">
              <Icon as={Pencil} className="text-muted-foreground size-4" />
              <Text>Edit</Text>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => setAction('share')} className="gap-2">
              <Icon as={Share2} className="text-muted-foreground size-4" />
              <Text>Share</Text>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onPress={() => setAction('remove')}
              className="gap-2">
              <Icon as={Trash2} className="text-destructive size-4" />
              <Text>Remove</Text>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>

      {action ? (
        <View className="rounded-xl bg-surface-sunken px-3 py-2">
          <Text className="text-muted-foreground text-sm">
            Last action:{' '}
            <Text className="text-strong font-sans-semibold text-sm capitalize">{action}</Text>
          </Text>
        </View>
      ) : (
        <Text className="text-muted-foreground text-sm leading-relaxed">
          Open the menu to edit, share, or remove this trip.
        </Text>
      )}
    </View>
  );
}
