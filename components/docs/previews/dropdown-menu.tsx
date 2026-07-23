import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { MoreHorizontal, Plane, Share2, Trash2 } from 'lucide-react-native';
import { View } from 'react-native';

export function DropdownMenuPreview() {
  return (
    <View className="items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Trip actions">
            <Icon as={MoreHorizontal} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem className="gap-2">
            <Icon as={Plane} className="size-4" />
            <Text>Add flight</Text>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <Icon as={Share2} className="size-4" />
            <Text>Share itinerary</Text>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" className="gap-2">
            <Icon as={Trash2} className="size-4 text-destructive" />
            <Text>Remove trip</Text>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </View>
  );
}
