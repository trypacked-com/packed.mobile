import { expect, test } from 'bun:test';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import registry from '../registry.json';
import { PUBLISHED_UI, buildRegistryItem } from './generate-registry-items';

type Item = { name: string; dependencies?: string[]; registryDependencies?: string[] };
const committed = new Map((registry.items as Item[]).map((item) => [item.name, item]));

test('every published component has a committed registry item', () => {
  for (const name of PUBLISHED_UI) {
    expect(committed.has(name)).toBe(true);
  }
});

for (const name of PUBLISHED_UI) {
  test(`generated deps for ${name} match registry.json`, async () => {
    const source = await readFile(resolve('components/ui', `${name}.tsx`), 'utf8');
    const generated = buildRegistryItem(name, source);
    const item = committed.get(name)!;

    expect(item.dependencies ?? []).toEqual(generated.dependencies);
    expect(item.registryDependencies ?? []).toEqual(generated.registryDependencies);
  });
}
