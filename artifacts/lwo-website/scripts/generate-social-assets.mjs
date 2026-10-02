/**
 * Development-only asset generation using ImageMagick.
 * Commit the generated files; production builds do not need ImageMagick.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), '../public');
const imageDir = resolve(publicDir, 'images');
const ogDir = resolve(imageDir, 'og');
mkdirSync(ogDir, { recursive: true });

for (const file of [
  'lwo-hero.png', 'lwo-about.jpg', 'lwo-installation.png', 'lwo-storage.png',
  'lwo-moving.png', 'lwo-painting.png', 'lwo-design.png', 'lwo-relocation.png',
]) {
  const output = resolve(ogDir, file.replace(/\.(png|jpg)$/, '.jpg'));
  execFileSync('magick', [
    resolve(imageDir, file), '-auto-orient', '-resize', '1200x630^',
    '-gravity', 'center', '-extent', '1200x630', '-background', 'white',
    '-alpha', 'remove', '-alpha', 'off', '-strip', '-quality', '88', output,
  ]);
  console.log(`Generated ${output}`);
}

const logoPath = resolve(imageDir, 'lwo-logomark.png');
execFileSync('magick', [
  logoPath, '-background', 'none', '-resize', '48x48',
  '-gravity', 'center', '-extent', '48x48', '-define', 'icon:auto-resize=48,32,16',
  resolve(publicDir, 'favicon.ico'),
]);

// Keep the SVG URL, but replace the generic orange-square icon with the real mark.
const [width, height] = execFileSync('identify', ['-format', '%w %h', logoPath], { encoding: 'utf8' }).trim().split(/\s+/);
const logo = readFileSync(logoPath).toString('base64');
writeFileSync(
  resolve(publicDir, 'favicon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><image width="${width}" height="${height}" href="data:image/png;base64,${logo}"/></svg>\n`,
);
console.log('Generated logo favicons: ICO (16, 32, 48) and SVG.');