type Gtag = (
  command: 'event',
  eventName: string,
  parameters: Record<string, string>,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function trackGenerateLead() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', 'generate_lead', {
    form_page: window.location.pathname,
    transport_type: 'beacon',
  });
}
