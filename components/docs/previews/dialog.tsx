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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export function DialogPreview() {
  return (
    <View className="items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Text>Add flight</Text>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a flight</DialogTitle>
            <DialogDescription>
              We'll watch it from here and keep you in the loop.
            </DialogDescription>
          </DialogHeader>
          <View className="gap-2">
            <Label nativeID="flight-number">Flight number</Label>
            <Input aria-labelledby="flight-number" placeholder="TP1234" className="font-mono" />
          </View>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">
                <Text>Cancel</Text>
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>
                <Text>Add flight</Text>
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </View>
  );
}
