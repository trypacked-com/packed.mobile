import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Packed UI',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

const VARIANTS = ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'] as const;
const SIZES = ['xs', 'sm', 'default', 'lg'] as const;

export default function Screen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-8 p-6 pt-24 pb-16">
        <Section title="Variants">
          {VARIANTS.map((variant) => (
            <Button key={variant} variant={variant}>
              <Text>{variant}</Text>
            </Button>
          ))}
        </Section>

        <Section title="Sizes">
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              <Text>{size}</Text>
            </Button>
          ))}
          <Button size="icon" aria-label="Star">
            <Icon as={StarIcon} />
          </Button>
        </Section>

        <Section title="States">
          <Button disabled>
            <Text>Disabled</Text>
          </Button>
          <Button variant="outline">
            <Icon as={StarIcon} />
            <Text>With icon</Text>
          </Button>
        </Section>
      </ScrollView>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="gap-3">
      <Text variant="small" className="text-muted-foreground uppercase">
        {title}
      </Text>
      <View className="gap-3">{children}</View>
    </View>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
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
