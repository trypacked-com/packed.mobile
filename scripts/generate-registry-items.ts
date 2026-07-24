import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const uiDir = resolve(root, 'components', 'ui');
const itemsDir = resolve(root, 'registry', 'items');

// Components published from this repo's registry. Base RNR components we do not
// ship (referenced by full URL) are excluded from this list.
export const PUBLISHED_UI: string[] = [
  'accordion',
  'alert',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'button',
  'card',
  'checkbox',
  'collapsible',
  'dialog',
  'dropdown-menu',
  'input',
  'label',
  'popover',
  'progress',
  'radio-group',
  'select',
  'separator',
  'skeleton',
  'switch',
  'tabs',
  'text',
  'textarea',
  'toggle',
  'toggle-group',
  'tooltip',
];

// Ambient peers every RN/Expo app already provides — never emitted as deps.
const AMBIENT_PEERS = new Set(['react', 'react-dom', 'react-native', 'react-native-screens']);

const RNR_BASE = 'https://reactnativereusables.com/r/nativewind';
const UI_ALIAS_PREFIX = '@/components/ui/';
const UTILS_ALIAS = '@/lib/utils';

// Module specifiers from `from '...'` and side-effect `import '...'`.
const FROM_RE = /\bfrom\s*['"]([^'"]+)['"]/g;
const SIDE_EFFECT_RE = /\bimport\s*['"]([^'"]+)['"]/g;

function titleCase(name: string) {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function importSpecifiers(source: string): string[] {
  const specs = new Set<string>();
  for (const re of [FROM_RE, SIDE_EFFECT_RE]) {
    for (const match of source.matchAll(re)) specs.add(match[1]);
  }
  return [...specs];
}

function packageName(spec: string): string {
  if (spec.startsWith('@')) return spec.split('/').slice(0, 2).join('/');
  return spec.split('/')[0];
}

function detectNpmDeps(specs: string[]): string[] {
  const found = new Set<string>();
  for (const spec of specs) {
    if (spec.startsWith('.') || spec.startsWith('@/')) continue;
    const pkg = packageName(spec);
    if (!AMBIENT_PEERS.has(pkg)) found.add(pkg);
  }
  return [...found].sort();
}

function detectRegistryDeps(specs: string[]): string[] {
  const deps = new Set<string>();
  for (const spec of specs) {
    if (spec === UTILS_ALIAS) {
      deps.add('@packed-native/utils');
    } else if (spec.startsWith(UI_ALIAS_PREFIX)) {
      const dep = spec.slice(UI_ALIAS_PREFIX.length);
      deps.add(PUBLISHED_UI.includes(dep) ? `@packed-native/${dep}` : `${RNR_BASE}/${dep}.json`);
    }
  }
  return [...deps].sort();
}

export function buildRegistryItem(name: string, source: string) {
  const file = `${name}.tsx`;
  const specs = importSpecifiers(source);
  return {
    name,
    type: 'registry:ui',
    title: titleCase(name),
    description: `Packed ${titleCase(name)} — warm, token-driven UI for React Native.`,
    dependencies: detectNpmDeps(specs),
    registryDependencies: detectRegistryDeps(specs),
    files: [
      {
        path: `components/ui/${file}`,
        type: 'registry:ui',
        target: `components/ui/${file}`,
      },
    ],
  };
}

if (import.meta.main) {
  await mkdir(itemsDir, { recursive: true });

  for (const name of PUBLISHED_UI) {
    const source = await readFile(resolve(uiDir, `${name}.tsx`), 'utf8');
    const item = buildRegistryItem(name, source);
    await writeFile(resolve(itemsDir, `${name}.json`), `${JSON.stringify(item, null, 2)}\n`, 'utf8');
  }

  console.log(`wrote ${PUBLISHED_UI.length} registry item manifest(s)`);
}
