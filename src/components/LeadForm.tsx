import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { trackLead } from '../lib/analytics.ts';

// Leads delivered via FormSubmit.co — no backend needed.
// NOTE: The FIRST submission triggers a one-time confirmation email to this
// address. Click the activation link once, then every lead flows through.
const LEAD_INBOX = 'sales@nexovadigital.com';
const ENDPOINT = `https://formsubmit.co/ajax/${LEAD_INBOX}`;

type Lang = 'en' | 'ms';

const COPY = {
  en: {
    name: 'Name *',
    phone: 'Phone / WhatsApp *',
    email: 'Email *',
    website: 'Facebook / Instagram page or website link',
    service: 'What do you want for free?',
    message: 'Anything else? (optional)',
    namePh: 'Your name',
    emailPh: 'you@business.com',
    websitePh: 'facebook.com/yourbusiness',
    messagePh: 'Your goals, monthly budget, current challenges…',
    submit: 'Get My Free Audit →',
    sending: 'Sending…',
    successTitle: 'Thank you 🎉',
    successBody: "Got it! We'll review your details and email your free audit within 1–2 business days.",
    successAgain: 'Submit another request',
    error: `Something went wrong. Please email us at ${LEAD_INBOX}.`,
    privacy: 'By submitting, you consent to us contacting you about your request (PDPA 2010). We never sell your data.',
    privacyLink: 'Privacy Policy',
    services: [
      'Free Meta Ads Account Audit',
      'Free 2 Ads Posters',
      'Free Traffic & Funnel Audit',
      'Free Business Page / Profile Optimisation',
      'Free Creative & Content Review',
      'Not sure yet — just advise me',
    ],
  },
  ms: {
    name: 'Nama *',
    phone: 'Telefon / WhatsApp *',
    email: 'Emel *',
    website: 'Pautan page Facebook / Instagram atau website',
    service: 'Apa yang anda mahu — percuma?',
    message: 'Lain-lain? (pilihan)',
    namePh: 'Nama anda',
    emailPh: 'anda@bisnes.com',
    websitePh: 'facebook.com/bisnesanda',
    messagePh: 'Matlamat, bajet bulanan, cabaran semasa…',
    submit: 'Dapatkan Audit Percuma →',
    sending: 'Menghantar…',
    successTitle: 'Terima kasih 🎉',
    successBody: 'Diterima! Kami akan semak butiran anda dan emelkan audit percuma dalam 1–2 hari bekerja.',
    successAgain: 'Hantar permintaan lain',
    error: `Maaf, ada masalah. Sila emel kami di ${LEAD_INBOX}.`,
    privacy: 'Dengan menghantar, anda bersetuju kami menghubungi anda berkenaan permintaan ini (PDPA 2010). Kami tidak menjual data anda.',
    privacyLink: 'Dasar Privasi',
    services: [
      'Audit Akaun Meta Ads (Percuma)',
      '2 Ads Poster Percuma',
      'Audit Trafik & Funnel (Percuma)',
      'Pengoptimuman Page / Profil Bisnes (Percuma)',
      'Semakan Kreatif & Kandungan (Percuma)',
      'Belum pasti — nasihatkan saya',
    ],
  },
} as const;

export const SERVICES = COPY.en.services;

interface LeadFormProps {
  defaultService?: string;
  source?: string;
  lang?: Lang;
}

export default function LeadForm({ defaultService, source = 'Website', lang = 'en' }: LeadFormProps) {
  const t = COPY[lang];
  const initialService = defaultService ?? t.services[0];
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    service: initialService,
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [bot, setBot] = useState(''); // honeypot — humans never fill this

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (bot) { setStatus('success'); return; } // silently drop bots
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `🔥 New FREE request: ${form.service}`,
          _template: 'table',
          _captcha: 'false',
          Source: source,
          Name: form.name,
          Phone: form.phone,
          Email: form.email,
          'Page / Website link': form.website,
          'Requested service': form.service,
          Message: form.message || '—',
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      trackLead({ service: form.service, source });
      setStatus('success');
      setForm({ name: '', phone: '', email: '', website: '', service: initialService, message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-10 px-4">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-lg text-gray-900">{t.successTitle}</h3>
        <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto leading-relaxed">{t.successBody}</p>
        <button onClick={() => setStatus('idle')} className="mt-4 text-primary text-sm font-medium hover:underline">
          {t.successAgain}
        </button>
      </div>
    );
  }

  const inputCls =
    'w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm';

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        value={bot}
        onChange={(e) => setBot(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="lf-name" className="block text-xs font-semibold text-gray-700 mb-1">{t.name}</label>
          <input id="lf-name" type="text" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls} placeholder={t.namePh} />
        </div>
        <div>
          <label htmlFor="lf-phone" className="block text-xs font-semibold text-gray-700 mb-1">{t.phone}</label>
          <input id="lf-phone" type="tel" required value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputCls} placeholder="+60 12-345 6789" />
        </div>
      </div>

      <div>
        <label htmlFor="lf-email" className="block text-xs font-semibold text-gray-700 mb-1">{t.email}</label>
        <input id="lf-email" type="email" required value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputCls} placeholder={t.emailPh} />
      </div>

      <div>
        <label htmlFor="lf-website" className="block text-xs font-semibold text-gray-700 mb-1">{t.website}</label>
        <input id="lf-website" type="text" value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          className={inputCls} placeholder={t.websitePh} />
      </div>

      <div>
        <label htmlFor="lf-service" className="block text-xs font-semibold text-gray-700 mb-1">{t.service}</label>
        <select id="lf-service" value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={`${inputCls} appearance-none bg-white`}>
          {t.services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lf-message" className="block text-xs font-semibold text-gray-700 mb-1">{t.message}</label>
        <textarea id="lf-message" rows={3} value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputCls} resize-none`} placeholder={t.messagePh} />
      </div>

      {status === 'error' && <p className="text-sm text-red-500">{t.error}</p>}

      <button type="submit" disabled={status === 'sending'}
        className="w-full py-3 px-6 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold rounded-full transition-colors text-sm shadow-lg shadow-primary/25">
        {status === 'sending' ? t.sending : t.submit}
      </button>
      <p className="text-[11px] text-gray-400 text-center leading-relaxed">
        {t.privacy}{' '}
        <Link to="/privacy" className="underline hover:text-primary">{t.privacyLink}</Link>
      </p>
    </form>
  );
}
