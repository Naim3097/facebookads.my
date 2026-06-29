import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Writable } from 'node:stream';
import App from './App.tsx';

export interface RenderResult {
  html: string;
  helmet: {
    title: string;
    meta: string;
    link: string;
    script: string;
    htmlAttributes: string;
  };
}

/** Render a route to static HTML + collected <head> tags. Resolves lazy routes. */
export function render(path: string): Promise<RenderResult> {
  return new Promise((resolve, reject) => {
    const helmetContext: { helmet?: any } = {};
    let html = '';
    const { pipe } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={path}>
          <App />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          const sink = new Writable({
            write(chunk, _enc, cb) { html += chunk.toString(); cb(); },
            final(cb) { cb(); },
          });
          sink.on('finish', () => {
            const h = helmetContext.helmet;
            resolve({
              html,
              helmet: {
                title: h?.title?.toString() ?? '',
                meta: h?.meta?.toString() ?? '',
                link: h?.link?.toString() ?? '',
                script: h?.script?.toString() ?? '',
                htmlAttributes: h?.htmlAttributes?.toString() ?? 'lang="en"',
              },
            });
          });
          pipe(sink);
        },
        onError(err) { reject(err); },
      },
    );
  });
}
