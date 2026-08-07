import { renderToStaticMarkup } from 'react-dom/server';
import { Router } from 'wouter';
import App from './App';

/**
 * Renders the app for a given URL to a static HTML string.
 * Used by scripts/prerender.mjs at build time to generate per-route HTML files.
 *
 * We use a plain inline hook instead of wouter's memoryLocation because
 * React 19's server renderer requires useSyncExternalStore to supply a
 * getServerSnapshot — which wouter's memoryLocation doesn't provide.
 * A simple function returning [url, noop] is all the Router needs for SSR.
 */
export function render(url: string): string {
  // A minimal wouter location hook: always returns the pre-set URL.
  // navigate is a no-op — nothing navigates during a static render.
  const staticHook = () => [url, () => {}] as const;

  return renderToStaticMarkup(
    <Router hook={staticHook}>
      <App />
    </Router>
  );
}
