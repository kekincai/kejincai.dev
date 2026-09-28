import {
  readdir,
  readFile,
  mkdir,
  writeFile,
  copyFile,
} from 'node:fs/promises';
import { join } from 'node:path';
import subsetFont from 'subset-font';

async function sourceText(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const parts = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory()
        ? sourceText(path)
        : /\.(astro|md|ts)$/.test(entry.name)
          ? readFile(path, 'utf8')
          : '';
    }),
  );
  return parts.join('\n');
}

const corpus = await sourceText('src');
const characters = [
  ...new Set([...corpus].filter((char) => char.codePointAt(0) >= 0x3000)),
].join('');
await mkdir('public/fonts', { recursive: true });
for (const weight of [400, 500]) {
  const source = await readFile(
    `node_modules/@fontsource/noto-sans-jp/files/noto-sans-jp-japanese-${weight}-normal.woff2`,
  );
  const subset = await subsetFont(source, characters, {
    targetFormat: 'woff2',
  });
  await writeFile(`public/fonts/noto-sans-jp-${weight}.woff2`, subset);
  console.log(
    `Noto Sans JP ${weight}: ${source.length} → ${subset.length} bytes`,
  );
}
await copyFile(
  'node_modules/@fontsource/noto-sans-jp/LICENSE',
  'public/fonts/OFL.txt',
);
