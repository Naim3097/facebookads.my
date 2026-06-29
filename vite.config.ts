import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: true,
  },
  // Bundle the CommonJS helmet lib into the SSR build so its named exports
  // resolve under Node ESM (used only by `build:ssr` / prerender).
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});
