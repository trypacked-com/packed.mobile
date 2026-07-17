import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { BellIcon, MoonStarIcon, PlusIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

const COMPONENTS = [
  {
    name: 'button',
    title: 'Button',
    description:
      "Packed's primary action button — warm, rounded, with a soft brand glow on the primary variant.",
    install: 'npx @react-native-reusables/cli add @packed-native/button',
    Preview: ButtonPreview,
  },
];

export default function Screen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-16 px-6 pb-20 pt-6">
        <View className="gap-5">
          <Text className="text-brand font-sans-semibold text-xs uppercase tracking-widest">
            Packed design system
          </Text>
          <Text className="text-strong font-serif text-4xl leading-tight tracking-tight">
            Warm, sunset-led React Native components.
          </Text>
          <Text className="text-muted-foreground text-base leading-relaxed">
            A standalone React Native Reusables registry. Add any component straight into your Expo
            app with the RNR CLI — it lands in components/ui and resolves its dependencies for you.
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/button</Snippet>
        </View>

        <View className="gap-5">
          <Text className="text-strong font-serif text-xl tracking-tight">Components</Text>
          {COMPONENTS.map((component) => (
            <ComponentCard key={component.name} {...component} />
          ))}
        </View>

        <Text className="text-muted-foreground text-xs">
          Packed design system. Warm, sunset-led. Compose, don't fork.
        </Text>
      </ScrollView>
    </>
  );
}

function ComponentCard({
  title,
  description,
  install,
  Preview,
}: {
  title: string;
  description: string;
  install: string;
  Preview: React.ComponentType;
}) {
  return (
    <View className="gap-4">
      <View className="gap-1.5">
        <Text className="text-strong font-sans-semibold text-lg">{title}</Text>
        <Text className="text-muted-foreground text-sm leading-relaxed">{description}</Text>
      </View>
      <View className="items-center justify-center rounded-2xl border border-border-subtle bg-card p-6 shadow-card">
        <Preview />
      </View>
      <Snippet>{install}</Snippet>
    </View>
  );
}

function ButtonPreview() {
  return (
    <View className="items-center gap-3">
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Button>
          <Icon as={PlusIcon} />
          <Text>Add flight</Text>
        </Button>
        <Button variant="secondary">
          <Text>Save draft</Text>
        </Button>
        <Button variant="ghost">
          <Text>Cancel</Text>
        </Button>
      </View>
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Button variant="destructive">
          <Text>Remove trip</Text>
        </Button>
        <Button variant="outline">
          <Text>View details</Text>
        </Button>
      </View>
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Button size="sm">
          <Text>Small</Text>
        </Button>
        <Button size="default">
          <Text>Default</Text>
        </Button>
        <Button size="lg">
          <Text>Large</Text>
        </Button>
        <Button size="icon" variant="secondary" aria-label="Notifications">
          <Icon as={BellIcon} />
        </Button>
      </View>
    </View>
  );
}

function Snippet({ children }: { children: string }) {
  return (
    <View className="rounded-md bg-surface-sunken p-4">
      <Text className="text-strong font-mono text-sm">{children}</Text>
    </View>
  );
}

function Wordmark() {
  return (
    <Text className="text-strong font-serif text-lg tracking-tight">
      Packed<Text className="text-brand font-serif text-lg">.ui</Text>
    </Text>
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
