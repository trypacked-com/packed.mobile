import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { View } from 'react-native';

export function LabelPreview() {
  return (
    <View className="w-full max-w-xs gap-2">
      <Label nativeID="gate">Gate</Label>
      <Input id="gate" aria-labelledby="gate" className="font-mono" defaultValue="B7" />
    </View>
  );
}
