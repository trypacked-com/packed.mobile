import {
  ComponentScreenHeader,
  PreviewFrame,
  Snippet,
  ThemeToggle,
  Wordmark,
} from '@/components/docs/chrome';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Stack } from 'expo-router';
import { ChevronDown } from 'lucide-react-native';
import { useState } from 'react';
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

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full gap-0">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto w-full justify-between rounded-xl px-3 py-3 active:bg-brand-subtle">
          <Text className="text-strong flex-1 text-left font-sans-semibold text-base leading-snug">
            {question}
          </Text>
          <Icon
            as={ChevronDown}
            className={cn(
              'text-muted-foreground size-4 shrink-0 transition-transform duration-200',
              open && 'rotate-180'
            )}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-3 pb-3">
        <Text className="text-muted-foreground text-sm leading-relaxed">{answer}</Text>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function CollapsibleScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-10 px-6 pb-20 pt-6">
        <ComponentScreenHeader
          title="Collapsible"
          description="Packed expandable trip FAQ and packing sections — soft triggers, calm answers, and a gentle chevron turn."
        />

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Preview
          </Text>
          <PreviewFrame>
            <View className="w-full gap-1">
              <Text className="text-muted-foreground mb-2 font-sans-semibold text-xs uppercase tracking-widest">
                Lisbon weekend · Packing
              </Text>
              {TRIP_FAQ.map((item, index) => (
                <View key={item.id}>
                  <FaqItem
                    question={item.question}
                    answer={item.answer}
                    defaultOpen={index === 0}
                  />
                  {index < TRIP_FAQ.length - 1 ? (
                    <View className="bg-border-subtle mx-3 h-px" />
                  ) : null}
                </View>
              ))}
            </View>
          </PreviewFrame>
        </View>

        <View className="gap-3">
          <Text className="text-strong font-sans-semibold text-xs uppercase tracking-widest">
            Install
          </Text>
          <Snippet>npx @react-native-reusables/cli add @packed-native/collapsible</Snippet>
        </View>
      </ScrollView>
    </>
  );
}
