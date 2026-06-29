// ── Analytics: Meta Pixel + GA4 ───────────────────────────────────────
// Loads only if IDs are set in config.ts. Safe to call anywhere; no-ops
// when unconfigured so dev/preview never errors or pings the wrong account.

import { META_PIXEL_ID, GA4_ID } from '../config';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let started = false;

export function initAnalytics(): void {
  if (started || typeof window === 'undefined') return;
  started = true;

  // Meta Pixel
  if (META_PIXEL_ID) {
    /* eslint-disable */
    (function (f: any, b, e, v, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq?.('init', META_PIXEL_ID);
    window.fbq?.('track', 'PageView');
  }

  // GA4
  if (GA4_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer!.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, { send_page_view: false });
  }
}

/** Fire on every SPA route change. */
export function trackPageView(path: string): void {
  if (typeof window === 'undefined') return;
  window.fbq?.('track', 'PageView');
  if (GA4_ID) window.gtag?.('event', 'page_view', { page_path: path });
}

/** Fire when a lead form is successfully submitted. */
export function trackLead(detail: { service?: string; source?: string } = {}): void {
  if (typeof window === 'undefined') return;
  window.fbq?.('track', 'Lead', { content_name: detail.service, content_category: detail.source });
  if (GA4_ID) window.gtag?.('event', 'generate_lead', { service: detail.service, source: detail.source });
}
