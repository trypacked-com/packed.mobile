import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

type RegistryFile = { path?: string; type?: string; target?: string; content?: string };
type RegistryItem = {
  name?: string;
  type?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: RegistryFile[];
};
type RegistryManifest = { items?: RegistryItem[] };

const NAMESPACE = '@packed-native/';
const root = process.cwd();
const manifestPath = resolve(root, 'registry.json');
const builtRoot = resolve(root, 'public', 'r');

const errors: string[] = [];
const fail = (msg: string) => errors.push(msg);

async function exists(path: string) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const manifest = JSON.parse(await readFile(manifestPath, 'utf8')) as RegistryManifest;

if (!Array.isArray(manifest.items)) {
  fail('registry.json: "items" must be an array');
  console.error(errors.join('\n'));
  process.exit(1);
}

const itemNames = new Set(manifest.items.map((item) => item.name).filter(Boolean) as string[]);

for (const item of manifest.items) {
  const label = item.name ?? '(unnamed)';

  if (!item.name) fail(`${label}: missing "name"`);
  if (!item.type) fail(`${label}: missing "type"`);

  for (const file of item.files ?? []) {
    if (!file.path) {
      fail(`${label}: file entry missing "path"`);
      continue;
    }
    if (!(await exists(resolve(root, file.path)))) {
      fail(`${label}: referenced file does not exist: ${file.path}`);
    }
  }

  for (const dep of item.registryDependencies ?? []) {
    if (dep.startsWith(NAMESPACE)) {
      const target = dep.slice(NAMESPACE.length);
      if (!itemNames.has(target)) {
        fail(`${label}: registryDependency "${dep}" does not resolve to a known item`);
      }
    } else if (dep.startsWith('http://') || dep.startsWith('https://')) {
      try {
        new URL(dep);
      } catch {
        fail(`${label}: registryDependency is not a valid URL: ${dep}`);
      }
    } else {
      fail(`${label}: registryDependency has unknown format: ${dep}`);
    }
  }

  // Built output must exist and its inlined file content must match disk.
  if (item.name) {
    const builtPath = resolve(builtRoot, `${item.name}.json`);
    if (!(await exists(builtPath))) {
      fail(`${label}: built output missing: public/r/${item.name}.json`);
      continue;
    }
    const built = JSON.parse(await readFile(builtPath, 'utf8')) as RegistryItem;
    for (const file of built.files ?? []) {
      if (!file.path) continue;
      const disk = await readFile(resolve(root, file.path), 'utf8');
      if (file.content !== disk) {
        fail(`${label}: built content is stale for ${file.path} (run build:registry)`);
      }
    }
  }
}

if (!(await exists(resolve(root, 'public', 'registry.json')))) {
  fail('public/registry.json missing (run build:registry)');
}

if (errors.length > 0) {
  console.error(`registry validation failed with ${errors.length} error(s):`);
  console.error(errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log(`registry valid: ${manifest.items.length} item(s), built output in sync`);
