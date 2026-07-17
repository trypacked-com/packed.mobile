import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import type { ReactNode } from 'react';
import { Pressable, View } from 'react-native';

export function Wordmark() {
  return (
    <Text className="text-strong font-serif text-lg tracking-tight">
      Packed<Text className="text-brand font-serif text-lg">.mobile</Text>
    </Text>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="ios:size-9 rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}

export function Snippet({ children }: { children: string }) {
  return (
    <View className="rounded-md bg-surface-sunken p-4">
      <Text className="text-strong font-mono text-sm">{children}</Text>
    </View>
  );
}

export function BackToComponents() {
  return (
    <Link href="/" asChild>
      <Pressable>
        <Text className="text-muted-foreground text-sm">← Components</Text>
      </Pressable>
    </Link>
  );
}

export function PreviewFrame({ children }: { children: ReactNode }) {
  return (
    <View className="items-center justify-center rounded-2xl border border-border-subtle bg-card p-6 shadow-card">
      {children}
    </View>
  );
}

export function ComponentScreenHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <View className="gap-3">
      <BackToComponents />
      <Text className="text-strong font-serif text-3xl tracking-tight">{title}</Text>
      <Text className="text-muted-foreground text-base leading-relaxed">{description}</Text>
    </View>
  );
}
