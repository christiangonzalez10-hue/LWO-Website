import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// Replit dev plugins are loaded only when running inside the Replit environment.
// They are never bundled into a production build, so `npm run build` works with
// zero required environment variables and no Replit-specific code in the output.
export default defineConfig(async ({ mode }) => {
  const plugins = [react(), tailwindcss()];

  if (mode !== 'production' && process.env.REPL_ID) {
    const [errModal, cartographer, devBanner] = await Promise.all([
      import('@replit/vite-plugin-runtime-error-modal'),
      import('@replit/vite-plugin-cartographer'),
      import('@replit/vite-plugin-dev-banner'),
    ]);
    plugins.push(
      errModal.default(),
      cartographer.cartographer({ root: path.resolve(import.meta.dirname, '..') }),
      devBanner.devBanner(),
    );
  }

  return {
    base: '/',
    plugins,
    resolve: {
      alias: { '@': path.resolve(import.meta.dirname, 'src') },
      dedupe: ['react', 'react-dom'],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, 'dist'),
      emptyOutDir: true,
    },
    server: {
      port: Number(process.env.PORT ?? 5173),
      host: '0.0.0.0',
      allowedHosts: true,
    },
    preview: {
      port: Number(process.env.PORT ?? 4173),
      host: '0.0.0.0',
      allowedHosts: true,
    },
  };
});
