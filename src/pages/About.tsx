import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';
import Reveal from '../components/Reveal.tsx';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Izzad Iskandar Hidzir',
  jobTitle: 'Co-Founder of Nexova.my & META Creative Ads Strategist',
  worksFor: { '@type': 'Organization', name: 'Nexova.my', url: 'https://nexova.my' },
  url: 'https://facebookads.my/about',
  description:
    'Creative designer and studio co-founder helping Malaysian SMBs grow with high-converting Facebook & Instagram ad creatives and META strategy.',
};

const STATS = [
  { value: '6+ yrs', label: 'In creative & design' },
  { value: '30', label: 'Concurrent client accounts at peak' },
  { value: 'RM 2.5M', label: 'Sales co-led (One X Transmission)' },
];

const CREDS = [
  'Co-led marketing for One X Transmission from inception — ~RM 2.5M cumulative sales over three years',
  'Managed creative for up to 30 concurrent client accounts: brand systems, ad libraries & launch collateral',
  'Senior Creative Designer at Invoke Malaysia — campaign & content design end-to-end',
  'Architecture-trained — brings systems thinking and craft to every brand and ad',
];

const APPROACH = [
  { n: '01', t: 'Creative-first', d: 'The creative is 80% of Meta ad performance. We start with a scroll-stopping hook, then optimise the rest.' },
  { n: '02', t: 'No fluff', d: 'Skip the theory — step-by-step strategies and creatives you can run today.' },
  { n: '03', t: 'Local context', d: 'BM + English hooks, Malaysian consumer behaviour, and what actually converts here.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Meet Izzad Iskandar — co-founder and META creative ads strategist helping Malaysian SMBs grow with high-converting Facebook & Instagram advertising."
        canonical="/about"
        schema={personSchema}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">About</h1>
          <p className="mt-3 text-gray-500 leading-relaxed max-w-xl">
            FacebookAds.my is where I share the creative strategies, hooks, and real-campaign
            lessons I use to help Malaysian businesses grow with Facebook &amp; Instagram ads —
            without burning money on boosted posts that don't convert.
          </p>
        </Reveal>

        {/* Founder */}
        <Reveal delay={150}>
          <div className="mt-10 flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shrink-0">
              II
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Izzad Iskandar Hidzir</h2>
              <p className="text-primary font-medium text-sm mt-0.5">Co-Founder of Nexova.my · META Creative Ads Strategist</p>
              <p className="text-gray-400 text-xs mt-1">Kuala Lumpur · Nexova.my</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed max-w-2xl">
            <p>
              I'm a creative designer and studio co-founder with 6+ years across brand identity,
              UI/UX, web, and editorial. I'm trained as an architect, so I bring systems thinking
              and craft to every project — from positioning a new venture to running design for
              30 concurrent client accounts.
            </p>
            <p>
              I'm co-founder of <strong className="text-gray-900">nexova.my</strong>, the no-code
              platform Malaysians use to build their own ads, posters, landing pages, and content.
              I co-led marketing for One X Transmission from inception, contributing to ~RM 2.5M in
              cumulative sales over three years.
            </p>
            <p>
              I started FacebookAds.my because I kept seeing the same mistakes — businesses burning
              money on boosted posts with weak creative and broad targeting. The creative is what
              makes or breaks a Meta campaign, and that's exactly what I share here. Everything is
              based on real campaigns in the Malaysian market.
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="p-[1px] rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 hover:from-primary hover:to-secondary transition-all duration-500 h-full">
                <div className="bg-white/80 backdrop-blur-md rounded-[11px] p-5 text-center h-full">
                  <div className="text-xl font-semibold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Credibility */}
        <Reveal delay={100}>
          <div className="mt-12 bg-white/60 backdrop-blur-md border border-primary/20 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900">Selected experience</h2>
            <ul className="mt-4 space-y-3">
              {CREDS.map((c) => (
                <li key={c} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Approach */}
        <Reveal delay={100}>
          <div className="mt-6 bg-white/60 backdrop-blur-md border border-primary/20 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900">My approach</h2>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              {APPROACH.map((a) => (
                <li key={a.n} className="flex gap-3">
                  <span className="text-primary font-bold">{a.n}</span>
                  <span><strong>{a.t}.</strong> {a.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={120}>
          <div className="mt-12 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white tracking-tight">Want me to look at your ads?</h2>
            <p className="text-white/80 text-sm mt-2 max-w-md mx-auto">
              Send your Facebook or Instagram page link and I'll audit it for free — plus design 2 Ads Posters at no cost.
            </p>
            <Link to="/free-audit" className="inline-block mt-5 px-6 py-2.5 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm shadow-lg">
              Get a Free Audit →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
