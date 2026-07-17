import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const uiDir = resolve(root, 'components', 'ui');
const itemsDir = resolve(root, 'registry', 'items');

// Components published from this repo's registry. Base RNR components that we
// have not restyled (e.g. text, icon) are referenced by full URL instead.
const PUBLISHED_UI: string[] = [
  'accordion',
  'alert',
  'aspect-ratio',
  'avatar',
  'badge',
  'button',
  'card',
  'checkbox',
  'collapsible',
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

const NPM_DEPS: Record<string, string[]> = {
  '@rn-primitives/tabs': ['@rn-primitives/tabs'],
  '@rn-primitives/tooltip': ['@rn-primitives/tooltip'],
  'class-variance-authority': ['cva', 'class-variance-authority'],
  clsx: ['clsx'],
  'tailwind-merge': ['tailwind-merge'],
  '@rn-primitives/accordion': ['@rn-primitives/accordion'],
  '@rn-primitives/aspect-ratio': ['@rn-primitives/aspect-ratio'],
  '@rn-primitives/avatar': ['@rn-primitives/avatar'],
  '@rn-primitives/checkbox': ['@rn-primitives/checkbox'],
  '@rn-primitives/collapsible': ['@rn-primitives/collapsible'],
  '@rn-primitives/label': ['@rn-primitives/label'],
  '@rn-primitives/popover': ['@rn-primitives/popover'],
  '@rn-primitives/progress': ['@rn-primitives/progress'],
  '@rn-primitives/radio-group': ['@rn-primitives/radio-group'],
  '@rn-primitives/select': ['@rn-primitives/select'],
  '@rn-primitives/separator': ['@rn-primitives/separator'],
  '@rn-primitives/slot': ['@rn-primitives/slot'],
  '@rn-primitives/portal': ['@rn-primitives/portal'],
  '@rn-primitives/switch': ['@rn-primitives/switch'],
  '@rn-primitives/toggle': ["@rn-primitives/toggle'", '@rn-primitives/toggle"'],
  '@rn-primitives/toggle-group': ['@rn-primitives/toggle-group'],
  'lucide-react-native': ['lucide-react-native'],
  nativewind: ['nativewind'],
  'react-native-reanimated': ['react-native-reanimated'],
  'react-native-svg': ['react-native-svg'],
};

const RNR_BASE = 'https://reactnativereusables.com/r/nativewind';
const UI_IMPORT_RE = /from ['"]@\/components\/ui\/([^'"]+)['"]/g;
const UTILS_IMPORT_RE = /from ['"]@\/lib\/utils['"]/;

function titleCase(name: string) {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function detectNpmDeps(source: string): string[] {
  const found = new Set<string>();
  for (const [pkg, needles] of Object.entries(NPM_DEPS)) {
    if (needles.some((needle) => source.includes(needle))) found.add(pkg);
  }
  return [...found].sort();
}

function detectRegistryDeps(source: string): string[] {
  const deps = new Set<string>();
  if (UTILS_IMPORT_RE.test(source)) deps.add('@packed-native/utils');
  for (const match of source.matchAll(UI_IMPORT_RE)) {
    const dep = match[1];
    deps.add(PUBLISHED_UI.includes(dep) ? `@packed-native/${dep}` : `${RNR_BASE}/${dep}.json`);
  }
  return [...deps].sort();
}

await mkdir(itemsDir, { recursive: true });

for (const name of PUBLISHED_UI) {
  const file = `${name}.tsx`;
  const source = await readFile(resolve(uiDir, file), 'utf8');

  const item = {
    name,
    type: 'registry:ui',
    title: titleCase(name),
    description: `Packed ${titleCase(name)} — warm, token-driven UI for React Native.`,
    dependencies: detectNpmDeps(source),
    registryDependencies: detectRegistryDeps(source),
    files: [
      {
        path: `components/ui/${file}`,
        type: 'registry:ui',
        target: `components/ui/${file}`,
      },
    ],
  };

  await writeFile(resolve(itemsDir, `${name}.json`), `${JSON.stringify(item, null, 2)}\n`, 'utf8');
}

console.log(`wrote ${PUBLISHED_UI.length} registry item manifest(s)`);
