import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Calendar, ChevronRight, Compass, Moon, Plane, Users } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { View } from 'react-native';

function StatusChip({ dotClassName, children }: { dotClassName: string; children: ReactNode }) {
  return (
    <View className="flex-row items-center gap-1.5 rounded-pill bg-card px-2.5 py-1 shadow-sm">
      <View className={`size-1.5 rounded-full ${dotClassName}`} />
      <Text className="text-xs font-semibold text-strong">{children}</Text>
    </View>
  );
}

function TripCard({
  mediaClassName,
  statusDotClassName,
  status,
  city,
  country,
  avatarFallback,
  avatarClassName,
  avatarTextClassName,
  name,
  dates,
  travelers,
  nights,
  footer,
}: {
  mediaClassName: string;
  statusDotClassName: string;
  status: string;
  city: string;
  country: string;
  avatarFallback: string;
  avatarClassName: string;
  avatarTextClassName: string;
  name: string;
  dates: string;
  travelers: string;
  nights: string;
  footer: ReactNode;
}) {
  return (
    <Card className="max-w-xs gap-0 overflow-hidden p-0">
      <View className={`relative h-36 w-full ${mediaClassName}`}>
        <View className="absolute right-3 top-3">
          <StatusChip dotClassName={statusDotClassName}>{status}</StatusChip>
        </View>
        <View className="absolute bottom-3 left-3 gap-0.5">
          <Text className="font-serif text-2xl font-semibold tracking-tight text-white">
            {city}
          </Text>
          <Text className="text-sm text-white/85">{country}</Text>
        </View>
      </View>
      <CardHeader className="gap-3 p-5">
        <View className="flex-row items-center gap-2.5">
          <Avatar alt={name} className="size-8">
            <AvatarFallback className={avatarClassName}>
              <Text className={avatarTextClassName}>{avatarFallback}</Text>
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-base">{name}</CardTitle>
        </View>
        <View className="flex-row flex-wrap items-center gap-3">
          <View className="flex-row items-center gap-1.5">
            <Icon as={Calendar} className="size-4 text-subtle" />
            <Text className="text-sm text-muted-text">{dates}</Text>
          </View>
          <View className="flex-row items-center gap-1.5">
            <Icon as={Users} className="size-4 text-subtle" />
            <Text className="text-sm text-muted-text">{travelers}</Text>
          </View>
          <View className="flex-row items-center gap-1.5">
            <Icon as={Moon} className="size-4 text-subtle" />
            <Text className="text-sm text-muted-text">{nights}</Text>
          </View>
        </View>
      </CardHeader>
      <CardFooter className="mx-0 border-t px-5 py-4">{footer}</CardFooter>
    </Card>
  );
}

export function CardPreview() {
  return (
    <View className="w-full max-w-4xl flex-row flex-wrap gap-4">
      <TripCard
        mediaClassName="bg-accent"
        statusDotClassName="bg-accent"
        status="In progress"
        city="Lisbon"
        country="Portugal"
        avatarFallback="MQ"
        avatarClassName="bg-brand"
        avatarTextClassName="text-on-brand"
        name="Mara Quinn"
        dates="Jun 14 – 21"
        travelers="4"
        nights="7 n"
        footer={
          <>
            <Icon as={Plane} className="size-4 shrink-0 text-brand" />
            <Text className="min-w-0 flex-1 text-sm text-muted-text" numberOfLines={1}>
              Boarding <Text className="font-mono text-sm">TP1234</Text> · Gate{' '}
              <Text className="font-mono text-sm">B7</Text>
            </Text>
            <Icon as={ChevronRight} className="size-4 shrink-0 text-subtle" />
          </>
        }
      />

      <TripCard
        mediaClassName="bg-brand"
        statusDotClassName="bg-green-500"
        status="Upcoming"
        city="Barcelona"
        country="Spain"
        avatarFallback="TR"
        avatarClassName="bg-accent"
        avatarTextClassName="text-accent-foreground"
        name="Tom Reyes"
        dates="Jul 3 – 10"
        travelers="2"
        nights="7 n"
        footer={
          <>
            <Icon as={Plane} className="size-4 shrink-0 text-brand" />
            <Text className="min-w-0 flex-1 text-sm text-muted-text" numberOfLines={1}>
              Departs <Text className="font-mono text-sm">TP8821</Text> ·{' '}
              <Text className="font-mono text-sm">08:45</Text>
            </Text>
            <Icon as={ChevronRight} className="size-4 shrink-0 text-subtle" />
          </>
        }
      />

      <Card className="max-w-xs flex-row items-center gap-4">
        <View className="size-10 items-center justify-center rounded-md bg-brand-subtle">
          <Icon as={Compass} className="size-5 text-brand" />
        </View>
        <CardHeader className="gap-0.5 p-0">
          <CardTitle className="font-serif text-3xl tracking-tight">8</CardTitle>
          <CardDescription>Active trips</CardDescription>
        </CardHeader>
      </Card>
    </View>
  );
}
