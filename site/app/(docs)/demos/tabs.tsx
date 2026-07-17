"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="flights" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="flights">Flights</TabsTrigger>
        <TabsTrigger value="stays">Stays</TabsTrigger>
      </TabsList>
      <TabsContent value="flights" className="text-sm text-muted-text">
        <span className="font-mono">TP1234</span> to Lisbon departs at{" "}
        <span className="font-mono">08:45</span> from gate{" "}
        <span className="font-mono">B7</span>.
      </TabsContent>
      <TabsContent value="stays" className="text-sm text-muted-text">
        Hotel check-in at <span className="font-mono">15:00</span> — we&apos;ll
        remind you before you land.
      </TabsContent>
    </Tabs>
  );
}
