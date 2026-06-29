// ── Central site config ───────────────────────────────────────────────
// Fill these in to activate tracking. While blank, analytics is a no-op
// (nothing loads, no errors), so the site runs fine before you have IDs.

/** Meta (Facebook) Pixel ID — from Events Manager. e.g. '1234567890'. */
export const META_PIXEL_ID = '';

/** GA4 Measurement ID — from Google Analytics. e.g. 'G-XXXXXXXXXX'. */
export const GA4_ID = '';

/** Izzad's WhatsApp number in international format, digits only (no +). */
export const WHATSAPP_NUMBER = '60187887072';

/** Prefilled WhatsApp message (URL-encoded at call site). */
export const WHATSAPP_MESSAGE = {
  en: "Hi Izzad! I'd like my free Meta ads audit + 2 Ads Posters. Here's my business: ",
  ms: 'Hai Izzad! Saya nak audit Meta ads percuma + 2 Ads Poster. Ini bisnes saya: ',
} as const;

export function whatsappLink(lang: 'en' | 'ms' = 'en'): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE[lang])}`;
}
