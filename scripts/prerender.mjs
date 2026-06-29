// Static prerender: render each route to HTML and write dist/<route>/index.html.
// Runtime SPA is untouched (client still createRoot-renders into #app); this only
// fills the initial HTML so search engines + AI crawlers get real content.
//
// Run via: npm run build:static  (vite build → vite build:ssr → this script)

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROUTES = [
  '/',        // ad landing (auto language)
  '/en',      // landing, forced English
  '/bm',      // landing, forced Bahasa Melayu
  '/home',    // legacy marketing home (unlinked)
  '/about',
  '/contact',
  '/privacy',
  '/blog',
  '/resources',
];

const dist = resolve('dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);

function outPath(route) {
  if (route === '/') return join(dist, 'index.html');
  return join(dist, route.replace(/^\//, ''), 'index.html');
}

let ok = 0;
for (const route of ROUTES) {
  try {
    const { html, helmet } = await render(route);
    const head = [helmet.title, helmet.meta, helmet.link, helmet.script].filter(Boolean).join('\n    ');

    let page = template
      // swap the default head block for this route's head tags
      .replace(/<!--ssr-head-->[\s\S]*?<!--\/ssr-head-->/, head || '<!--ssr-head-->')
      // inject rendered markup into the app root
      .replace('<div id="app"></div>', `<div id="app">${html}</div>`);

    // set <html lang> from the route (BM variant is Malay; everything else English)
    const htmlLang = route.endsWith('/bm') ? 'ms' : 'en';
    page = page.replace(/<html[^>]*>/, `<html lang="${htmlLang}">`);

    const file = outPath(route);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, page, 'utf8');
    ok += 1;
    console.log(`  ✓ prerendered ${route}  →  ${file.replace(dist, 'dist')}`);
  } catch (err) {
    console.error(`  ✗ failed ${route}:`, err?.message || err);
  }
}

console.log(`\nPrerendered ${ok}/${ROUTES.length} routes.`);
