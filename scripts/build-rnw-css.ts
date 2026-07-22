import { $ } from 'bun';
import { resolve } from 'node:path';

const root = resolve(import.meta.dir, '..');
const cli = resolve(root, 'node_modules/tailwindcss/lib/cli.js');

const result = await $`bun ${cli} \
  -c ${resolve(root, 'site/tailwind.rnw.config.js')} \
  -i ${resolve(root, 'site/rnw.input.css')} \
  -o ${resolve(root, 'site/app/rnw.generated.css')} \
  --minify`.cwd(root).nothrow();

if (result.exitCode !== 0) {
  process.exit(result.exitCode ?? 1);
}
