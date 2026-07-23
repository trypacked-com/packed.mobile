import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { View } from 'react-native';

export function TooltipPreview() {
  return (
    <View className="items-center">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Text>Gate info</Text>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <Text>
            Gate <Text className="font-mono text-sm">B7</Text> — Terminal 2, north wing
          </Text>
        </TooltipContent>
      </Tooltip>
    </View>
  );
}
