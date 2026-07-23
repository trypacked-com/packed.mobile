import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function AccordionPreview() {
  return (
    <View className="w-full max-w-md">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="gate-updates">
          <AccordionTrigger>
            <Text>When will I get gate updates?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              We watch your flight from check-in through boarding and notify you as soon as the gate
              is posted or changes.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="share-itinerary">
          <AccordionTrigger>
            <Text>Can I share my itinerary?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              Yes — send a link to travel companions so everyone sees the same flights, gates, and
              times.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}
