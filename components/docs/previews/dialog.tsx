import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function DialogPreview() {
  return (
    <View className="w-full items-center gap-6">
      <View className="w-full gap-1">
        <Text className="text-muted-foreground font-sans-semibold text-xs uppercase tracking-widest">
          Lisbon weekend
        </Text>
        <Text className="text-strong font-serif text-xl tracking-tight">Jun 14 – Jun 16</Text>
        <Text className="text-muted-foreground text-sm">
          2 travelers · <Text className="font-mono text-sm">TP1234</Text>
        </Text>
      </View>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            <Text>Cancel trip</Text>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel this trip?</DialogTitle>
            <DialogDescription>
              We'll remove Lisbon weekend from your list. You can always start a new plan later.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" className="min-w-28">
                <Text>Keep trip</Text>
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="min-w-28">
                <Text>Cancel trip</Text>
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </View>
  );
}
