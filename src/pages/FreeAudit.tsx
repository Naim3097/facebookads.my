import { useState } from 'react';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO.tsx';
import Reveal from '../components/Reveal.tsx';
import LeadForm from '../components/LeadForm.tsx';
import { whatsappLink } from '../config.ts';

const WA_ICON = 'M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.519 5.26l-.999 3.648 3.969-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z';

type Lang = 'en' | 'ms';

/** Force a language from the URL path (/en, /bm), or null to auto-detect. */
function langFromPath(pathname: string): Lang | null {
  if (pathname === '/bm') return 'ms';
  if (pathname === '/en') return 'en';
  return null;
}

/** Follow the visitor's Chrome / browser language preference. */
function detectLang(): Lang {
  try {
    const list =
      typeof navigator !== 'undefined' && navigator.languages?.length
        ? navigator.languages
        : [typeof navigator !== 'undefined' ? navigator.language : 'en'];
    if (list.some((l) => { const x = (l || '').toLowerCase(); return x.startsWith('ms') || x.startsWith('id'); })) {
      return 'ms';
    }
  } catch { /* SSR / no navigator */ }
  return 'en';
}

const scrollToForm = () => document.getElementById('lead')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

/* ── Image tile with graceful gradient fallback + hover motion ── */
function Media({ src, label, className = '' }: { src: string; label: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/25 via-secondary/20 to-primary/10 ring-1 ring-black/5 ${className}`}>
      <img
        src={src}
        alt={label}
        loading="lazy"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-white/85 backdrop-blur flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
        <svg className="w-3 h-3 text-primary ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
      </div>
      <span className="absolute bottom-2.5 left-2.5 text-[11px] font-semibold text-white drop-shadow translate-y-0 group-hover:-translate-y-0.5 transition-transform duration-300">{label}</span>
    </div>
  );
}

/* Founder portrait with monogram fallback; children render on top (name overlay etc.) */
function Portrait({ className = '', children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={`relative overflow-hidden bg-[#0c0d10] ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">II</span>
      </div>
      <img
        src="/izzad-portrait.jpg"
        alt="Izzad Iskandar"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {children}
    </div>
  );
}

const CATEGORIES = [
  { key: 'all', en: 'All', ms: 'Semua' },
  { key: 'product', en: 'Product Ads', ms: 'Iklan Produk' },
  { key: 'social', en: 'Social & Reels', ms: 'Sosial & Reels' },
  { key: 'carousel', en: 'Carousel', ms: 'Carousel' },
  { key: 'lifestyle', en: 'Lifestyle', ms: 'Lifestyle' },
  { key: 'effects', en: 'Effects', ms: 'Efek' },
] as const;

const SHOWCASE = [
  { n: '01', cat: 'product', en: 'Product Ad', ms: 'Iklan Produk', a: 'aspect-[4/5]' },
  { n: '02', cat: 'social', en: 'Reel', ms: 'Reel', a: 'aspect-[3/4]' },
  { n: '03', cat: 'carousel', en: 'Carousel', ms: 'Carousel', a: 'aspect-square' },
  { n: '04', cat: 'lifestyle', en: 'Lifestyle', ms: 'Lifestyle', a: 'aspect-[4/5]' },
  { n: '05', cat: 'effects', en: 'Effect', ms: 'Efek', a: 'aspect-[3/4]' },
  { n: '06', cat: 'product', en: 'Product Ad', ms: 'Iklan Produk', a: 'aspect-square' },
  { n: '07', cat: 'social', en: 'Story', ms: 'Story', a: 'aspect-[4/5]' },
  { n: '08', cat: 'carousel', en: 'Carousel', ms: 'Carousel', a: 'aspect-[3/4]' },
  { n: '09', cat: 'lifestyle', en: 'Lifestyle', ms: 'Lifestyle', a: 'aspect-square' },
  { n: '10', cat: 'product', en: 'Static', ms: 'Statik', a: 'aspect-[4/5]' },
  { n: '11', cat: 'effects', en: 'Effect', ms: 'Efek', a: 'aspect-[3/4]' },
  { n: '12', cat: 'social', en: 'Reel', ms: 'Reel', a: 'aspect-square' },
] as const;

const TOOLS = [
  { name: 'Photoshop', lvl: 95 },
  { name: 'Illustrator', lvl: 92 },
  { name: 'Lightroom', lvl: 90 },
  { name: 'UI / Figma', lvl: 88 },
  { name: 'Premiere Pro', lvl: 82 },
  { name: 'Motion / C4D', lvl: 70 },
];

const EXPERIENCE = ['Nexova Solutions', 'One X Transmission', 'Invoke Malaysia', 'Niro Ceramic Group', 'Pokj.Art'];

const NEXOVA = 'https://nexova.my';

const ICONS = {
  creative: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  audit: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  funnel: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
  page: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
};

const CONTENT = {
  en: {
    seoTitle: 'Free Meta Ads Audit + 2 Free Ads Posters',
    seoDesc: 'Get a free Meta ads audit plus 2 custom Ads Posters from Izzad Iskandar, co-founder of Nexova.my and a Malaysian META creative strategist. Try it free, no obligation.',
    badge: '100% Free · No Obligation',
    toggleTo: 'Baca dalam BM →',
    h1a: 'Ads people',
    h1b: "can't scroll past.",
    sub: (
      <>Tell me about your business and I'll personally audit your Meta ads — <strong className="text-gray-900">and
      design 2 Ads Posters for you, free</strong>. No cost, no obligation. Just real work you can use.</>
    ),
    bullets: ['2 custom Ads Posters — free', 'Free Meta ads & funnel audit', 'Delivered to your inbox in 1–2 days'],
    heroCta: 'Get my free audit + 2 posters',
    heroGhost: 'See the work first ↓',
    heroMicro: '30 seconds · Free · No obligation',
    founderName: 'Izzad Iskandar',
    founderRole: 'Co-Founder of Nexova.my · META Creative Ads Strategist',
    statValue: 'RM 2.5M',
    stats: [
      { v: 'RM 2.5M', l: 'Sales co-led' },
      { v: '30+', l: 'Client accounts' },
      { v: '6+ yrs', l: 'Creative craft' },
    ],
    funnelEyebrow: 'The Process',
    funnelTitle: 'Get started in 3 simple steps',
    steps: [
      { num: '01', title: 'Tell me about you', desc: 'Fill the short form — your name, phone, email, and your page or website link. Takes 30 seconds.' },
      { num: '02', title: 'I audit & create', desc: 'I personally review your ads and design 2 Ads Posters — built for what works with Malaysian audiences.' },
      { num: '03', title: 'You get it by email', desc: 'A clear, no-jargon breakdown plus your 2 Ads Posters — straight to your inbox in 1–2 business days.' },
    ],
    formKicker: 'Step 1 of 1 — and it’s free',
    formTitle: 'Claim your free audit + 2 Ads Posters',
    formSub: 'Fill this in and I’ll get to work. No payment, no sales call required.',
    valueTitle: "Here's exactly what you'll get — free",
    offers: [
      { title: '2 free Ads Posters', desc: 'Two scroll-stopping ad posters designed for your brand — yours to keep and run.', icon: ICONS.creative },
      { title: 'Meta ads account audit', desc: 'Targeting, creative, budget, and ROAS leaks — reviewed line by line.', icon: ICONS.audit },
      { title: 'Traffic & funnel audit', desc: 'Where your leads come from and why they drop off before buying.', icon: ICONS.funnel },
      { title: 'Page optimisation tips', desc: 'How to turn profile visitors into real enquiries.', icon: ICONS.page },
    ],
    reassure: ['⏱ Reply in 1–2 business days', '🔒 Your details stay private', '✦ Zero obligation'],
    galleryEyebrow: 'Selected Work',
    galleryTitle: 'Creative built to convert',
    gallerySub: 'A glimpse of the ad creative, social content, and brand visuals Izzad produces — across formats and industries.',
    galleryCta: 'I want creative like this →',
    craftEyebrow: 'Who you’re working with',
    craftTitle: 'Practical creative firepower',
    craftBio: 'Architecture-trained, with 6+ years across brand identity, UI/UX, editorial, and video. Izzad is co-founder of nexova.my — the no-code platform Malaysians use to build their own ads, posters, landing pages, and content — and has directed creative for up to 30 concurrent client accounts.',
    toolsTitle: 'Tools of the trade',
    disciplinesTitle: 'What he delivers',
    disciplines: ['Brand identity & systems', 'Ad creative & statics', 'Short-form video & Reels', 'UI/UX & landing pages', 'Art direction', 'Photography & retouching'],
    faqTitle: 'Questions',
    faq: [
      { q: 'Is the audit really free?', a: 'Yes — completely free, no obligation. Share your link and I deliver the audit and 2 Ads Posters by email. If you later want me to manage your ads, great. If not, the audit is still yours to keep.' },
      { q: 'How fast will I hear back?', a: 'I personally review every request and email your audit within 1–2 business days.' },
      { q: 'Do I need to already run Meta ads?', a: 'No. Whether you already run Meta ads, are just starting, or simply want your page reviewed — send it over.' },
      { q: 'What do you need from me?', a: 'Just your name, phone number, email, and a link to your Facebook/Instagram page or website. The more context you add, the sharper the audit.' },
      { q: 'What if I want to do it myself?', a: 'Go for it. You can build your own ad posters, landing pages, and content with nexova.my — the no-code platform Izzad co-founded. It’s free to start, no design skills needed.' },
    ],
    twoWaysEyebrow: 'Your move',
    twoWaysTitle: 'Two ways to get ads that convert',
    twoWaysSub: 'Want it done for you, or rather build it yourself? Either way, start free.',
    dfyTag: 'Done for you',
    dfyTitle: "Get Izzad's expertise — free",
    dfyDesc: 'Share your page and Izzad personally audits your Meta ads and designs 2 Ads Posters for you. No cost, no obligation.',
    dfyCta: 'Get my free audit + 2 posters →',
    diyTag: 'Do it yourself',
    diyTitle: 'Build your own — free to try',
    diyDesc: 'Prefer hands-on? Create your own ad posters, landing pages, and content with nexova.my — the no-code platform Izzad co-founded. Free to start.',
    diyCta: 'Try nexova.my free →',
    ctaTitle: 'Ready when you are.',
    ctaSub: 'It takes 30 seconds to claim your free audit and 2 Ads Posters. No call, no pressure.',
    ctaBtn: 'Claim my free audit →',
    h2kw: 'Free Facebook & Instagram Ads Audit for Malaysian Businesses',
    waCta: 'WhatsApp Izzad',
    urgency: 'Only 10 free audits open this month — first come, first served.',
    receiveNote: "You'll receive a short written audit, a Loom walkthrough, and 2 ready-to-run Ads Posters — all by email.",
    whyFreeTitle: 'Why is it free?',
    whyFree: "It's the best way to show you how I work — try it free. The audit and posters are genuinely yours, whether or not we work together afterwards.",
    expTitle: 'Creative experience across',
    guidesTitle: 'Free Meta ads guides',
    guidesSub: 'Prefer to DIY first? Start with these.',
    stickyLabel: 'Free audit',
  },
  ms: {
    seoTitle: 'Audit Meta Ads Percuma + 2 Ads Poster Percuma',
    seoDesc: 'Dapatkan audit Meta ads percuma serta 2 Ads Poster custom daripada Izzad Iskandar, co-founder Nexova.my dan pakar kreatif META Malaysia. Cuba percuma, tiada obligasi.',
    badge: '100% Percuma · Tiada Obligasi',
    toggleTo: 'Read in English →',
    h1a: 'Iklan yang',
    h1b: 'mustahil di-skroll.',
    sub: (
      <>Beritahu saya tentang bisnes anda dan saya akan audit Meta ads anda sendiri — <strong className="text-gray-900">serta
      reka 2 Ads Poster untuk anda, percuma</strong>. Tiada kos, tiada obligasi. Hasil kerja sebenar yang boleh anda guna.</>
    ),
    bullets: ['2 Ads Poster custom — percuma', 'Audit Meta ads & funnel percuma', 'Terus ke inbox dalam 1–2 hari'],
    heroCta: 'Dapatkan audit + 2 poster percuma',
    heroGhost: 'Tengok hasil kerja dulu ↓',
    heroMicro: '30 saat · Percuma · Tiada obligasi',
    founderName: 'Izzad Iskandar',
    founderRole: 'Co-Founder Nexova.my · Pakar Kreatif META Ads',
    statValue: 'RM 2.5M',
    stats: [
      { v: 'RM 2.5M', l: 'Jualan dipimpin' },
      { v: '30+', l: 'Akaun klien' },
      { v: '6+ thn', l: 'Kraf kreatif' },
    ],
    funnelEyebrow: 'Prosesnya',
    funnelTitle: 'Mula dalam 3 langkah mudah',
    steps: [
      { num: '01', title: 'Beritahu tentang anda', desc: 'Isi borang ringkas — nama, telefon, emel, dan pautan page atau website anda. Ambil masa 30 saat.' },
      { num: '02', title: 'Saya audit & reka', desc: 'Saya semak iklan anda sendiri dan reka 2 Ads Poster — dibina untuk apa yang berkesan dengan audiens Malaysia.' },
      { num: '03', title: 'Terus ke emel anda', desc: 'Pecahan jelas tanpa jargon serta 2 Ads Poster anda — terus ke inbox dalam 1–2 hari bekerja.' },
    ],
    formKicker: 'Langkah 1 daripada 1 — dan ia percuma',
    formTitle: 'Tuntut audit + 2 Ads Poster percuma anda',
    formSub: 'Isi ini dan saya akan mula bekerja. Tiada bayaran, tiada sales call diperlukan.',
    valueTitle: 'Inilah yang anda akan dapat — percuma',
    offers: [
      { title: '2 Ads Poster percuma', desc: 'Dua ad poster menarik perhatian yang direka untuk jenama anda — milik anda untuk digunakan.', icon: ICONS.creative },
      { title: 'Audit akaun Meta ads', desc: 'Targeting, kreatif, bajet, dan kebocoran ROAS — disemak baris demi baris.', icon: ICONS.audit },
      { title: 'Audit trafik & funnel', desc: 'Dari mana lead anda datang dan kenapa mereka berhenti sebelum membeli.', icon: ICONS.funnel },
      { title: 'Tip pengoptimuman page', desc: 'Cara tukar pelawat profil kepada pertanyaan sebenar.', icon: ICONS.page },
    ],
    reassure: ['⏱ Jawapan dalam 1–2 hari', '🔒 Butiran anda kekal sulit', '✦ Tiada obligasi'],
    galleryEyebrow: 'Hasil Kerja Terpilih',
    galleryTitle: 'Kreatif dibina untuk menukar',
    gallerySub: 'Sekilas kreatif iklan, kandungan sosial, dan visual jenama hasil Izzad — pelbagai format dan industri.',
    galleryCta: 'Saya nak kreatif macam ni →',
    craftEyebrow: 'Siapa anda bekerja dengan',
    craftTitle: 'Kuasa kreatif yang praktikal',
    craftBio: 'Berlatar belakang seni bina, dengan 6+ tahun dalam identiti jenama, UI/UX, editorial, dan video. Izzad ialah co-founder nexova.my — platform no-code yang digunakan rakyat Malaysia untuk bina iklan, poster, landing page, dan kandungan sendiri — dan telah mengarah kreatif untuk sehingga 30 akaun klien serentak.',
    toolsTitle: 'Perkakas kerja',
    disciplinesTitle: 'Apa yang dihasilkan',
    disciplines: ['Identiti & sistem jenama', 'Kreatif iklan & statik', 'Video pendek & Reels', 'UI/UX & landing page', 'Arahan seni', 'Fotografi & retouch'],
    faqTitle: 'Soalan lazim',
    faq: [
      { q: 'Betul ke audit ni percuma?', a: 'Ya — sepenuhnya percuma, tiada obligasi. Kongsi pautan anda dan saya hantar audit serta 2 Ads Poster melalui emel. Kalau nanti anda nak saya uruskan iklan, bagus. Kalau tidak, audit itu tetap milik anda.' },
      { q: 'Berapa cepat saya akan dapat jawapan?', a: 'Saya semak sendiri setiap permintaan dan emelkan audit anda dalam 1–2 hari bekerja.' },
      { q: 'Perlu ke saya sudah jalankan Meta ads?', a: 'Tidak perlu. Sama ada anda sedang jalankan Meta ads, baru nak mula, atau cuma nak page disemak — hantar je.' },
      { q: 'Apa yang anda perlukan dari saya?', a: 'Cuma nama, nombor telefon, emel, dan pautan ke page Facebook/Instagram atau website anda. Lagi banyak konteks, lagi tajam auditnya.' },
      { q: 'Macam mana kalau saya nak buat sendiri?', a: 'Boleh! Anda boleh bina ad poster, landing page, dan kandungan sendiri dengan nexova.my — platform no-code yang diasaskan bersama oleh Izzad. Percuma untuk mula, tak perlu kemahiran reka bentuk.' },
    ],
    twoWaysEyebrow: 'Pilihan anda',
    twoWaysTitle: 'Dua cara untuk dapat iklan yang menukar',
    twoWaysSub: 'Nak kami buatkan, atau nak bina sendiri? Apa pun, mula percuma.',
    dfyTag: 'Kami buatkan',
    dfyTitle: 'Dapatkan kepakaran Izzad — percuma',
    dfyDesc: 'Kongsi page anda dan Izzad audit Meta ads anda sendiri serta reka 2 Ads Poster untuk anda. Tiada kos, tiada obligasi.',
    dfyCta: 'Dapatkan audit + 2 poster percuma →',
    diyTag: 'Buat sendiri',
    diyTitle: 'Bina sendiri — cuba percuma',
    diyDesc: 'Suka buat sendiri? Cipta ad poster, landing page, dan kandungan anda sendiri dengan nexova.my — platform no-code yang diasaskan bersama oleh Izzad. Percuma untuk mula.',
    diyCta: 'Cuba nexova.my percuma →',
    ctaTitle: 'Bila-bila anda sedia.',
    ctaSub: 'Ambil masa 30 saat untuk tuntut audit percuma dan 2 Ads Poster anda. Tiada panggilan, tiada tekanan.',
    ctaBtn: 'Tuntut audit percuma saya →',
    h2kw: 'Audit Iklan Facebook & Instagram Percuma untuk Bisnes Malaysia',
    waCta: 'WhatsApp Izzad',
    urgency: 'Hanya 10 audit percuma bulan ini — siapa cepat dia dapat.',
    receiveNote: 'Anda akan terima audit ringkas bertulis, video walkthrough (Loom), dan 2 Ads Poster siap guna — semua melalui emel.',
    whyFreeTitle: 'Kenapa percuma?',
    whyFree: 'Ia cara terbaik untuk tunjuk cara saya bekerja — cuba percuma. Audit dan poster itu milik anda, sama ada kita bekerjasama selepas itu atau tidak.',
    expTitle: 'Pengalaman kreatif merentasi',
    guidesTitle: 'Panduan Meta ads percuma',
    guidesSub: 'Nak cuba sendiri dulu? Mulakan dengan ini.',
    stickyLabel: 'Audit percuma',
  },
} as const;

const SITE = 'https://facebookads.my';

function buildSchema(c: (typeof CONTENT)[Lang], canonicalPath: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE}/#izzad`,
        name: 'Izzad Iskandar Hidzir',
        jobTitle: 'Co-Founder & META Creative Ads Strategist',
        worksFor: { '@type': 'Organization', name: 'Nexova Solutions' },
        sameAs: ['https://instagram.com/byizzadiskandar'],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE}/#org`,
        name: 'FacebookAds.my',
        url: SITE,
        logo: `${SITE}/fbads-logo.png`,
        image: `${SITE}/og-image.png`,
        areaServed: { '@type': 'Country', name: 'Malaysia' },
        founder: { '@id': `${SITE}/#izzad` },
        description: c.seoDesc,
      },
      {
        '@type': 'Service',
        serviceType: 'Meta (Facebook & Instagram) ads audit and ad creative design',
        provider: { '@id': `${SITE}/#org` },
        areaServed: { '@type': 'Country', name: 'Malaysia' },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'MYR',
          description: 'Free Meta ads audit plus 2 custom Ads Posters',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE}${canonicalPath}`,
        url: `${SITE}${canonicalPath}`,
        name: c.seoTitle,
        description: c.seoDesc,
        isPartOf: { '@id': `${SITE}/#org` },
        about: { '@id': `${SITE}/#izzad` },
      },
    ],
  };
}

const ALTERNATES = [
  { hreflang: 'en-MY', href: '/en' },
  { hreflang: 'ms-MY', href: '/bm' },
  { hreflang: 'x-default', href: '/' },
];

const PRIMARY_BTN =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-full text-sm shadow-lg shadow-primary/30 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

export default function FreeAudit() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const forced = langFromPath(pathname);
  const lang: Lang = forced ?? detectLang();
  const c = CONTENT[lang];
  const toOther = lang === 'en' ? '/bm' : '/en';
  const [cat, setCat] = useState<string>('all');
  const items = SHOWCASE.filter((s) => cat === 'all' || s.cat === cat);
  const canonicalPath = forced ? (forced === 'ms' ? '/bm' : '/en') : '/';

  return (
    <>
      <SEO
        title={c.seoTitle}
        description={c.seoDesc}
        canonical={canonicalPath}
        htmlLang={lang}
        alternates={ALTERNATES}
        schema={buildSchema(c, canonicalPath)}
      />

      {/* ══ Hero — Izzad as the face ══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-white to-white">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl pointer-events-none fa-glow" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-secondary/10 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left — pitch */}
          <div className="order-2 lg:order-1">
            <Reveal delay={60} direction="none">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
                  {c.badge}
                </span>
                <button onClick={() => navigate(toOther)} className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors">
                  {c.toggleTo}
                </button>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-gray-900 leading-[1.05] tracking-tight">
                {c.h1a}{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{c.h1b}</span>
              </h1>
            </Reveal>
            <Reveal delay={190}>
              <h2 className="mt-3 text-base md:text-lg font-semibold text-gray-500 max-w-md">{c.h2kw}</h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-md">{c.sub}</p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-7 space-y-2.5">
                {c.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {b}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={440}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button onClick={scrollToForm} className={`${PRIMARY_BTN} relative overflow-hidden fa-sheen`}>
                  {c.heroCta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </button>
                <a href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-95">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={WA_ICON} /></svg>
                  {c.waCta}
                </a>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                <a href="#work" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">{c.heroGhost}</a>
                <span className="text-xs text-gray-400">{c.heroMicro}</span>
              </div>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block animate-pulse" />
                {c.urgency}
              </p>
            </Reveal>
          </div>

          {/* Right — Izzad portrait + floating proof */}
          <Reveal delay={200} direction="right" className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* glow behind */}
              <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl fa-glow" aria-hidden="true" />

              {/* portrait */}
              <Portrait className="relative aspect-[4/5] rounded-[32px] shadow-2xl ring-1 ring-black/5">
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-semibold text-primary shadow-sm">
                  META Creative Strategist
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 via-black/20 to-transparent">
                  <p className="text-white font-bold text-lg leading-tight">{c.founderName}</p>
                  <p className="text-white/75 text-xs">{c.founderRole}</p>
                </div>
              </Portrait>

              {/* floating creative thumbs */}
              <div className="hidden sm:block absolute -left-6 top-12 w-24 fa-float">
                <Media src="/showcase/02.jpg" label="Reels" className="aspect-[3/4] shadow-xl rotate-[-4deg]" />
              </div>
              <div className="hidden sm:block absolute -right-6 top-1/3 w-24 fa-float-slow">
                <Media src="/showcase/06.jpg" label="Product" className="aspect-square shadow-xl rotate-[4deg]" />
              </div>

              {/* floating "4 FREE" badge */}
              <div className="absolute -right-3 -bottom-4 fa-float">
                <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 px-4 py-2.5 text-center">
                  <p className="text-xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-none">2</p>
                  <p className="text-[10px] font-semibold text-gray-500 mt-0.5 uppercase tracking-wide">Ads Posters</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* trust stats strip */}
        <div className="relative border-t border-gray-100 bg-white/60 backdrop-blur">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-3 divide-x divide-gray-100">
            {c.stats.map((s) => (
              <div key={s.l} className="text-center px-2">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-none">{s.v}</div>
                <div className="text-[11px] md:text-xs text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* experience strip */}
        <div className="relative border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
            <span className="text-xs text-gray-400">{c.expTitle}</span>
            {EXPERIENCE.map((b) => (
              <span key={b} className="text-sm font-semibold text-gray-500">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3-step funnel ══ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center">{c.funnelEyebrow}</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 text-center mt-2">{c.funnelTitle}</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {c.steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 110}>
              <div className="relative bg-white rounded-2xl border border-gray-100 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">{s.num}</div>
                <h3 className="font-semibold text-gray-900 text-base mt-4">{s.title}</h3>
                <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 text-center">
            <button onClick={scrollToForm} className={PRIMARY_BTN}>{c.heroCta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </button>
          </div>
        </Reveal>
      </section>

      {/* ══ Value stack + form (the conversion point) ══ */}
      <section id="lead" className="scroll-mt-20 bg-gray-50/70 border-y border-gray-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* value stack */}
          <div>
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">{c.valueTitle}</h2>
            </Reveal>
            <div className="mt-6 space-y-3">
              {c.offers.map((o, i) => (
                <Reveal key={o.title} delay={i * 80}>
                  <div className="group flex gap-4 items-start bg-white border border-gray-100 rounded-2xl p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary">
                      <svg className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={o.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                        {o.title}
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full uppercase">Free</span>
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{o.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.reassure.map((r) => (
                  <span key={r} className="text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-1.5">{r}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-6 rounded-2xl bg-white border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 text-sm">{c.whyFreeTitle}</h3>
                <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{c.whyFree}</p>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={120} direction="right">
            <div className="lg:sticky lg:top-24 bg-white rounded-3xl shadow-xl shadow-primary/10 border border-gray-100 p-6 md:p-8">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2.5 py-1 rounded-full">{c.formKicker}</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-3">{c.formTitle}</h2>
              <p className="text-gray-500 text-sm mt-1 mb-3">{c.formSub}</p>
              <div className="mb-5 flex items-start gap-2.5 rounded-xl bg-primary/5 border border-primary/10 p-3">
                <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-xs text-gray-600 leading-relaxed">{c.receiveNote}</p>
              </div>
              <LeadForm lang={lang} source={`FacebookAds.my — Free Audit page (${lang.toUpperCase()})`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Selected work (proof) ══ */}
      <section id="work" className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center">{c.galleryEyebrow}</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 text-center mt-2">{c.galleryTitle}</h2>
          <p className="text-gray-500 mt-2 text-sm text-center max-w-lg mx-auto">{c.gallerySub}</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((t) => (
              <button
                key={t.key}
                onClick={() => setCat(t.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border active:scale-95 ${
                  cat === t.key
                    ? 'bg-primary text-white border-primary shadow-md shadow-primary/25'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {t[lang]}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 columns-2 sm:columns-3 lg:columns-4 gap-3 [&>*]:mb-3">
          {items.map((s) => (
            <div key={s.n} className="break-inside-avoid">
              <Media src={`/showcase/${s.n}.jpg`} label={s[lang]} className={`${s.a} shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300`} />
            </div>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-10 text-center">
            <button onClick={scrollToForm} className={PRIMARY_BTN}>{c.galleryCta}</button>
          </div>
        </Reveal>
      </section>

      {/* ══ Two ways: done-for-you (Izzad) vs DIY (nexova.my) ══ */}
      <section className="bg-gray-50/70 border-y border-gray-100 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center">{c.twoWaysEyebrow}</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 text-center mt-2">{c.twoWaysTitle}</h2>
            <p className="text-gray-500 mt-2 text-sm text-center max-w-md mx-auto">{c.twoWaysSub}</p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="h-full bg-white rounded-2xl border-2 border-primary/30 p-6 flex flex-col shadow-lg shadow-primary/5">
                <span className="self-start text-[11px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2.5 py-1 rounded-full">{c.dfyTag}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3">{c.dfyTitle}</h3>
                <p className="text-sm text-gray-500 mt-1.5 leading-relaxed flex-1">{c.dfyDesc}</p>
                <button onClick={scrollToForm} className={`${PRIMARY_BTN} mt-5 w-full`}>{c.dfyCta}</button>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
                <span className="self-start text-[11px] font-bold uppercase tracking-wide text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">{c.diyTag}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3">{c.diyTitle}</h3>
                <p className="text-sm text-gray-500 mt-1.5 leading-relaxed flex-1">{c.diyDesc}</p>
                <a href={NEXOVA} target="_blank" rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-secondary border border-secondary/40 hover:bg-secondary hover:text-white transition-colors active:scale-95">
                  {c.diyCta}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ Creative lead / craft ══ */}
      <section className="bg-gray-50/70 border-y border-gray-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10 items-center">
          <Reveal className="lg:col-span-2" direction="left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl fa-glow" aria-hidden="true" />
              <Portrait className="relative w-full aspect-[4/5] rounded-3xl shadow-xl ring-1 ring-black/5" />
            </div>
          </Reveal>
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary">{c.craftEyebrow}</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mt-2">{c.craftTitle}</h2>
              <p className="mt-3 text-gray-600 leading-relaxed max-w-xl">{c.craftBio}</p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-7">
                <h3 className="text-sm font-semibold text-gray-700">{c.toolsTitle}</h3>
                <div className="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {TOOLS.map((tool) => (
                    <div key={tool.name} className="group">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span className="font-medium">{tool.name}</span>
                        <span className="tabular-nums text-gray-400">{tool.lvl}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-700 ease-out" style={{ width: `${tool.lvl}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-7">
                <h3 className="text-sm font-semibold text-gray-700">{c.disciplinesTitle}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.disciplines.map((d) => (
                    <span key={d} className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-700 transition-colors hover:border-primary/40 hover:text-primary">{d}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Reveal><h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 text-center">{c.faqTitle}</h2></Reveal>
        <div className="mt-8 space-y-3">
          {c.faq.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="bg-white border border-gray-100 rounded-xl p-5 group transition-colors hover:border-primary/30">
                <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-primary text-lg group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ Final CTA ══ */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary rounded-3xl px-8 md:px-12 py-12 text-center">
              <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-white/10 blur-2xl fa-glow" aria-hidden="true" />
              <h2 className="relative text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">{c.ctaTitle}</h2>
              <p className="relative mt-3 text-white/80 text-sm max-w-md mx-auto leading-relaxed">{c.ctaSub}</p>
              <button onClick={scrollToForm}
                className="relative inline-flex items-center justify-center gap-2 mt-7 px-7 py-3.5 bg-white text-primary font-semibold rounded-full text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95">
                {c.ctaBtn}
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* spacer so the sticky mobile bar never covers content */}
      <div className="h-20 lg:hidden" aria-hidden="true" />

      {/* ══ Sticky mobile CTA ══ */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 px-3 py-2.5 flex gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <button onClick={scrollToForm} className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-primary text-white font-semibold rounded-full text-sm active:scale-95 transition-transform">
          {c.stickyLabel} →
        </button>
        <a href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shrink-0 active:scale-95 transition-transform">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d={WA_ICON} /></svg>
        </a>
      </div>
    </>
  );
}
