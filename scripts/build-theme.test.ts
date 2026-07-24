import { expect, test } from 'bun:test';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { generateTheme } from './build-theme';

test('lib/theme.ts is in sync with global.css (run theme:build)', async () => {
  const css = await readFile(resolve('global.css'), 'utf8');
  const committed = await readFile(resolve('lib/theme.ts'), 'utf8');
  expect(committed).toBe(generateTheme(css));
});
