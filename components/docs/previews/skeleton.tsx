import { Skeleton } from '@/components/ui/skeleton';
import { View } from 'react-native';

export function SkeletonPreview() {
  return (
    <View className="w-full gap-6">
      <View className="w-full gap-3">
        <View className="flex-row items-center gap-3">
          <Skeleton className="size-12 rounded-full" />
          <View className="flex-1 gap-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-3 w-1/2" />
          </View>
        </View>
        <Skeleton className="h-24 w-full rounded-xl" />
        <View className="flex-row gap-2">
          <Skeleton className="h-8 flex-1 rounded-md" />
          <Skeleton className="h-8 flex-1 rounded-md" />
        </View>
      </View>

      <View className="w-full gap-3">
        <Skeleton className="h-3 w-1/3" />
        <View className="gap-2.5">
          <View className="flex-row items-center gap-3">
            <Skeleton className="size-8 rounded-md" />
            <Skeleton className="h-3 flex-1" />
            <Skeleton className="h-3 w-12" />
          </View>
          <View className="flex-row items-center gap-3">
            <Skeleton className="size-8 rounded-md" />
            <Skeleton className="h-3 flex-1" />
            <Skeleton className="h-3 w-12" />
          </View>
          <View className="flex-row items-center gap-3">
            <Skeleton className="size-8 rounded-md" />
            <Skeleton className="h-3 flex-1" />
            <Skeleton className="h-3 w-12" />
          </View>
        </View>
      </View>
    </View>
  );
}
