import { Toggle, ToggleIcon } from '@/components/ui/toggle';
import { LayoutGrid, List } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';

export function TogglePreview() {
  const [view, setView] = useState<'list' | 'grid'>('grid');

  return (
    <View className="flex-row items-center gap-2">
      <Toggle
        variant="outline"
        pressed={view === 'list'}
        onPressedChange={(pressed) => {
          if (pressed) setView('list');
        }}
        aria-label="List view">
        <ToggleIcon as={List} />
      </Toggle>
      <Toggle
        variant="outline"
        pressed={view === 'grid'}
        onPressedChange={(pressed) => {
          if (pressed) setView('grid');
        }}
        aria-label="Grid view">
        <ToggleIcon as={LayoutGrid} />
      </Toggle>
    </View>
  );
}
