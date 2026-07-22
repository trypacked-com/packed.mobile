import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function TextPreview() {
  return (
    <View className="w-full gap-3">
      <Text variant="h1">Display heading</Text>
      <Text variant="h2">Section heading</Text>
      <Text variant="h3">Subsection</Text>
      <Text variant="h4">Card title</Text>
      <Text variant="lead">Lead copy for trip summaries and empty states.</Text>
      <Text variant="p">Body text for itineraries, packing notes, and calm product copy.</Text>
      <Text variant="muted">Muted helper text</Text>
      <Text variant="small">Small label</Text>
      <Text variant="code">LHR → JFK</Text>
    </View>
  );
}
