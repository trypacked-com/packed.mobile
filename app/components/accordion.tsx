import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  headerTitle: () => <Wordmark />,
  headerRight: () => <ThemeToggle />,
  headerShadowVisible: false,
};

const TRIP_FAQ = [
  {
    id: 'packing',
    question: 'What should I pack for Lisbon?',
    answer:
      'Layers for cool evenings, a compact umbrella, and comfortable walking shoes. We will nudge you if the forecast shifts.',
  },
  {
    id: 'gate',
    question: 'When should I be at the gate?',
    answer:
      'Aim for gate B7 by 08:00 — we will ping you if it moves before the 08:45 departure.',
  },
  {
    id: 'share',
    question: 'Can I share the packing list?',
    answer:
      'Yes. Share the list with your travel companions so everyone stays in the loop before you leave.',
  },
] as const;

export default function AccordionScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Accordion"
          description="Packed trip FAQ sections — soft borders, calm answers, and a gentle chevron turn when a question opens."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full">
              <Text className="text-muted-foreground mb-2 font-sans-semibold text-xs uppercase tracking-widest">
                Lisbon weekend · FAQ
              </Text>
              <Accordion type="single" collapsible defaultValue="packing" className="w-full">
                {TRIP_FAQ.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>
                      <Text>{item.question}</Text>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Text>{item.answer}</Text>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/accordion</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
