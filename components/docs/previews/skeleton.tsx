import { Skeleton } from '@/components/ui/skeleton';
import { View } from 'react-native';

export function SkeletonPreview() {
  return (
    <View className="w-full max-w-xs gap-3">
      <View className="flex-row items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <View className="flex-1 gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </View>
      </View>
      <Skeleton className="h-20 w-full rounded-lg" />
    </View>
  );
}
