"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@site/components/ui/card";
import { Input } from "@site/components/ui/input";

type ComponentItem = {
  name: string;
  title?: string;
  description?: string;
};

export function ComponentList({ items }: { items: ComponentItem[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return items;

    return items.filter((item) =>
      (item.title ?? item.name).toLowerCase().includes(needle),
    );
  }, [items, query]);

  return (
    <div className="space-y-5">
      <Input
        type="search"
        placeholder="Filter components…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        aria-label="Filter components by title"
        className="max-w-sm"
      />

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-sm">No components match.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {filtered.map((item) => (
            <li key={item.name}>
              <Card interactive asChild>
                <Link
                  href={`/components/${item.name}/`}
                  className="h-full no-underline"
                >
                  <CardHeader>
                    <CardTitle className="font-serif text-base">
                      {item.title ?? item.name}
                    </CardTitle>
                    {item.description ? (
                      <CardDescription>{item.description}</CardDescription>
                    ) : null}
                  </CardHeader>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
