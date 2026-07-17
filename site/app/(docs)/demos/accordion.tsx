"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="gate-updates">
        <AccordionTrigger>When will I get gate updates?</AccordionTrigger>
        <AccordionContent>
          We watch your flight from check-in through boarding and notify you as
          soon as the gate is posted or changes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="share-itinerary">
        <AccordionTrigger>Can I share my itinerary?</AccordionTrigger>
        <AccordionContent>
          Yes — send a link to travel companions so everyone sees the same
          flights, gates, and times.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
