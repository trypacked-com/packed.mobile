import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { ChevronDown } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';

export function CollapsiblePreview() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-md">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full flex-row justify-between">
          <Text>Gate details</Text>
          <Icon as={ChevronDown} className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-2">
        <Text className="text-sm text-muted-text">
          Your gate is <Text className="font-mono text-sm">B7</Text> — we'll ping you if it changes
          before departure at <Text className="font-mono text-sm">08:45</Text>.
        </Text>
      </CollapsibleContent>
    </Collapsible>
  );
}
