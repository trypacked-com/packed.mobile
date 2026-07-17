import { Snippet, ThemeToggle, Wordmark } from '@/components/docs/chrome';
import { Text } from '@/components/ui/text';
import registry from '@/registry.json';
import { Link, Stack } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

type RegistryItem = {
  name: string;
  type: string;
  title?: string;
  description?: string;
};

const COMPONENTS = (registry.items as RegistryItem[])
  .filter((item) => item.type === 'registry:ui')
  .sort((a, b) => a.name.localeCompare(b.name));

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
            <Link key={component.name} href={`/components/${component.name}`} asChild>
              <Pressable className="gap-1.5 active:opacity-70">
                <Text className="text-strong font-sans-semibold text-lg">
                  {component.title ?? component.name}
                </Text>
                {component.description ? (
                  <Text className="text-muted-foreground text-sm leading-relaxed">
                    {component.description}
                  </Text>
                ) : null}
              </Pressable>
            </Link>
          ))}
        </View>

        <Text className="text-muted-foreground text-xs">
          Packed design system. Warm, sunset-led. Compose, don't fork.
        </Text>
      </ScrollView>
    </>
  );
}
