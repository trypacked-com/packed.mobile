import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop"
          alt="Mara Quinn"
        />
        <AvatarFallback>MQ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>TR</AvatarFallback>
      </Avatar>
    </div>
  );
}
