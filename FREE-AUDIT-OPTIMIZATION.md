# Free Audit Landing Page — Optimization Phases

Scope: **`facebookads.my` `/free-audit` only** + the shared infra it needs (analytics,
schema, crawl files). Other pages' layout/branding are not redesigned.

## Phase 8 — Promoted to ROOT landing page ✅
The optimized page is now the site's home — a **single, menu-less ad landing page** to
maximize conversion. Other pages still exist but are **unlinked**.
- ✅ `/` (auto language), `/en`, `/bm` → the landing (was `/free-audit`)
- ✅ `LandingLayout` — logo-only header, minimal legal footer (privacy link kept for PDPA),
  **no nav menus / no exits** so ad traffic stays in the funnel
- ✅ Internal "Free guides" links removed from the landing (were exits)
- ✅ Secondary pages kept under full chrome at `/home`, `/about`, `/contact`, `/blog`,
  `/resources`, `/privacy` (legacy home moved `/` → `/home`)
- ✅ Old `/free-audit*` URLs 301-redirect to the new root paths
- ✅ All SEO/GEO repointed to root: canonical `/`, hreflang `/`·`/en`·`/bm`, sitemap,
  llms.txt, JSON-LD, prerender routes — verified after rebuild
> Deploy with **`npm run build:static`** (prerenders all routes).

Legend: ✅ done · 🟡 in progress · ⬜ todo · 🔵 needs input from you

---

## Phase 1 — Conversion tracking infra (funnel was blind)
- ✅ `src/config.ts` — central IDs + WhatsApp number (placeholders, no-op until set)
- ✅ `src/lib/analytics.ts` — Meta Pixel + GA4 init, `trackPageView`, `trackLead` (no-op if IDs blank)
- ✅ Init analytics in `main.tsx`; fire PageView on route change via `ScrollToTop`
- ✅ `LeadForm` fires `Lead` (Meta) + GA4 `generate_lead` on successful submit
- 🔵 **You provide:** Meta Pixel ID + GA4 Measurement ID → paste into `src/config.ts`

## Phase 2 — Structured data & meta (SEO + GEO citations)
- ✅ `SEO.tsx` extended: `hreflang` alternates (en-MY / ms-MY / x-default) + `lang` html attr
- ✅ `/free-audit` JSON-LD: `Service`/`Offer`, `FAQPage`, `Organization`, `Person` (+`sameAs`), `BreadcrumbList`
- ✅ Static `Organization` + `WebSite` JSON-LD and `<noscript>` content baked into `index.html`

## Phase 3 — Crawl & AI-discovery files
- ✅ `sitemap.xml` — add `/free-audit`, refresh `lastmod`
- ✅ `robots.txt` — explicitly allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- ✅ `public/llms.txt` — GEO summary of who/what/offer/contact

## Phase 4 — OG / social share
- ✅ `public/og-image` created and referenced (fixes the 404 blank share card)
- 🔵 **Optional:** replace with a designed 1200×630 `og-image.png`

## Phase 5 — On-page conversion + trust (the page itself)
- ✅ WhatsApp click-to-chat CTA (MY-market lever) — hero + sticky mobile bar
- ✅ Keyword-aligned H2 under the catchy H1 (organic + GEO)
- ✅ "What you actually receive" deliverable clarity + "why it's free" objection handling
- ✅ Urgency line (limited free audits / month)
- ✅ Internal links into blog guides (topical authority + dwell time)
- ✅ PDPA consent line + privacy link near the form
- ✅ Honeypot spam field in `LeadForm`
- 🔵 **You provide:** real creative samples → `public/showcase/01–12.jpg` (gallery is placeholders)
- 🔵 **You provide:** 2–4 testimonials / client results / logos (trust block is ready for them)

## Phase 6 — Privacy page (PDPA)
- ✅ `/privacy` route + simple PDPA-compliant privacy notice page

## Phase 7 — Prerendering / crawlability ✅ DONE (static prerender shipped)
The SPA now has a **build-time static prerender** so crawlers + AI bots get full HTML.
- ✅ `src/entry-server.tsx` — renders any route to HTML (resolves lazy routes)
- ✅ `scripts/prerender.mjs` — writes `dist/<route>/index.html` for 9 routes
- ✅ `vite.config.ts` — `ssr.noExternal: ['react-helmet-async']` (CJS interop)
- ✅ Per-route `<title>`, meta, **canonical**, **hreflang**, `<html lang>`, JSON-LD baked in
- ✅ Runtime SPA untouched (client still `createRoot`; no hydration risk)
- ✅ Verified: `/free-audit/en` ships ~9.8 KB of real HTML in `#app`, correct title/canonical;
  `/free-audit/bm` ships `lang="ms"`

### How to deploy (IMPORTANT)
- `npm run build`  → normal SPA build (unchanged; safe default)
- **`npm run build:static`** → SPA build **+ prerendered HTML** (use this for production)
  - Host must serve `dist/<route>/index.html` for clean URLs, with SPA fallback to `/index.html`.
- Optional upgrade later: host-level prerender (Cloudflare/prerender.io) if you add many
  dynamic blog URLs — current script covers the main routes + the money page.

---

## Still on you (inputs)
1. Meta Pixel ID + GA4 ID → `src/config.ts`
2. Real showcase creatives → `public/showcase/01–12.jpg`
3. Testimonials / client logos / result numbers
4. Deploy with **`npm run build:static`** (not plain `build`) so prerender HTML ships
5. (Optional) designed 1200×630 `og-image.png`
