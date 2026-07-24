import { expect, test } from 'bun:test';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import registry from '../registry.json';
import { PUBLISHED_BASE, PUBLISHED_UI, buildRegistryItem } from './generate-registry-items';

type Item = { name: string; dependencies?: string[]; registryDependencies?: string[] };
const committed = new Map((registry.items as Item[]).map((item) => [item.name, item]));
const published = [...PUBLISHED_UI, ...PUBLISHED_BASE];

test('every published component has a committed registry item', () => {
  for (const name of published) {
    expect(committed.has(name)).toBe(true);
  }
});

for (const name of published) {
  test(`generated deps for ${name} match registry.json`, async () => {
    const source = await readFile(resolve('components/ui', `${name}.tsx`), 'utf8');
    const generated = buildRegistryItem(name, source);
    const item = committed.get(name)!;

    expect(item.dependencies ?? []).toEqual(generated.dependencies);
    expect(item.registryDependencies ?? []).toEqual(generated.registryDependencies);
  });
}
