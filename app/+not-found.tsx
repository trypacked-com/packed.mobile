import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center gap-4 bg-background px-6">
        <Text className="text-strong font-serif text-2xl tracking-tight">
          This screen doesn't exist.
        </Text>
        <Link href="/">
          <Text className="text-link font-sans-semibold text-base">Go to home screen</Text>
        </Link>
      </View>
    </>
  );
}
