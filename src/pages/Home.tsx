import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';
import BlogCard from '../components/BlogCard.tsx';
import Reveal from '../components/Reveal.tsx';
import { articles } from '../data/articles.tsx';

const FEATURED = articles.slice(0, 4);

const STATS = [
  {
    value: '3.2B+',
    label: 'People Reached For Clients',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    value: '93%',
    label: 'Average Increase in ROAS',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    value: '7.2x',
    label: 'Average ROAS Achieved',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const AD_FORMATS = [
  {
    title: 'Feed Ads',
    desc: 'High-converting ads that blend seamlessly into the feed.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
  },
  {
    title: 'Stories & Reels',
    desc: 'Full-screen, immersive ads built for action.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
  },
  {
    title: 'Carousel Ads',
    desc: 'Showcase multiple products or benefits in one ad.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
  },
  {
    title: 'Video Ads',
    desc: 'Engaging videos that grab attention and drive results.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
  },
];

const TOPICS = [
  {
    title: 'Audience Targeting',
    desc: 'Reach the right people with precise targeting strategies.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Ad Creative',
    desc: 'Create scroll-stopping creatives that convert.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: 'Budget & Bidding',
    desc: 'Set the right budget and bidding strategy for maximum results.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Analytics & ROAS',
    desc: 'Track performance and maximize your return on ad spend.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Instagram & Reels',
    desc: 'Leverage Reels, Stories and IG placements to scale.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
  {
    title: 'Retargeting',
    desc: 'Bring back visitors and turn them into loyal customers.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
];

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FacebookAds.my',
  url: 'https://facebookads.my',
  description: 'META advertising strategies and guides for Malaysian businesses',
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FacebookAds.my',
  url: 'https://facebookads.my',
};

export default function Home() {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<'a' | 'b'>('a');
  const activeRef = useRef<'a' | 'b'>('a');
  const crossfadingRef = useRef(false);

  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b) return;

    const handleTimeUpdate = () => {
      if (crossfadingRef.current) return;
      const current = activeRef.current === 'a' ? a : b;
      const next    = activeRef.current === 'a' ? b : a;
      if (!current.duration || current.currentTime < current.duration - 1.2) return;

      crossfadingRef.current = true;
      next.currentTime = 0;
      next.play().catch(() => {});

      const nextKey = activeRef.current === 'a' ? 'b' : 'a';
      activeRef.current = nextKey;
      setActive(nextKey);

      // Allow next crossfade after transition settles
      setTimeout(() => { crossfadingRef.current = false; }, 1200);
    };

    a.addEventListener('timeupdate', handleTimeUpdate);
    b.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      a.removeEventListener('timeupdate', handleTimeUpdate);
      b.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Learn how to run profitable Facebook and Instagram ads for your Malaysian business. Free guides, strategies, and benchmarks from a META ads specialist."
        canonical="/"
        schema={[orgSchema, websiteSchema]}
      />

      {/* â”€â”€ Hero â”€â”€ */}
      <section className="relative overflow-hidden">
        {/* Background video — two copies crossfade for seamless loop */}
        <video
          ref={videoA}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            active === 'a' ? 'opacity-100' : 'opacity-0'
          }`}
          src="/background-video.mp4"
          autoPlay
          muted
          playsInline
        />
        <video
          ref={videoB}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            active === 'b' ? 'opacity-100' : 'opacity-0'
          }`}
          src="/background-video.mp4"
          muted
          playsInline
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 lg:py-36">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left */}
            <div className="text-center md:text-left">
              <Reveal delay={100} direction="none">
                <span className="inline-block px-3 py-1 border border-white/40 text-white bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium mb-6 tracking-wide mx-auto md:mx-0">
                  Performance-Driven Ad Campaigns
                </span>
              </Reveal>

              <Reveal delay={180}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight text-white drop-shadow-lg">
                  Master{' '}
                  <span className="text-primary">Facebook &</span>
                  <br />
                  <span className="text-[#c4b8f0]">Instagram Ads</span>
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-md mx-auto md:mx-0">
                  Data-driven strategies, high-converting creatives, and targeting that help you get the most out of META advertising.
                </p>
              </Reveal>

              <Reveal delay={420}>
                <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm shadow-lg shadow-primary/25"
                  >
                    Get Free Audit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
                  >
                    View Case Studies
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </Reveal>

              {/* Partner badges */}
              <Reveal delay={520}>
                <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1877F2"/>
                      <path d="M16 8h-2a2 2 0 00-2 2v2h4l-.5 4H12v8H8v-8H6v-4h2v-2a6 6 0 016-6h2v4z" fill="white"/>
                    </svg>
                    <span className="text-xs font-semibold text-white">Meta Business Partner</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-xs font-semibold text-white">Marketing Partner</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right – hero image */}
            <Reveal delay={300} direction="right">
              <div className="relative hidden md:block">
                <img
                  src="/hero-section.png"
                  alt="Campaign performance dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* â”€â”€ Stats â”€â”€ */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {STATS.map((stat) => (
              <Reveal key={stat.label}>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 px-6 py-4 sm:py-2 text-center sm:text-left">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 leading-none">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Ad Formats â”€â”€ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 text-center">Ad Formats That Convert</h2>
          <p className="text-gray-500 mt-2 text-center max-w-lg mx-auto text-sm">
            We design scroll-stopping creatives across formats that drive results.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {AD_FORMATS.map((format, i) => (
            <Reveal key={format.title} delay={i * 100}>
              <div className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100">
                  <img
                    src={format.image}
                    alt={format.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  {/* Play icon */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <svg className="w-3 h-3 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mt-3 text-sm">{format.title}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{format.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* â”€â”€ Latest Guides â”€â”€ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 border-t border-gray-100">
        <Reveal>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Latest Guides</h2>
            <Link to="/blog" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              View all guides
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {FEATURED.map((article, i) => (
            <Reveal key={article.slug} delay={i * 80}>
              <BlogCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* â”€â”€ What You'll Learn â”€â”€ */}
      <section className="bg-gray-50/70 py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 text-center">What You'll Learn</h2>
            <p className="text-gray-500 mt-2 text-center max-w-lg mx-auto text-sm">
              From beginner setup to advanced optimization â€” everything about running successful META ad campaigns.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {TOPICS.map((topic, i) => (
              <Reveal key={topic.title} delay={i * 70}>
                <div className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{topic.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{topic.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA Banner â”€â”€ */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-lg">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Ready to grow your business<br className="hidden md:block" /> with META ads?
                </h2>
                <p className="mt-3 text-white/75 text-sm leading-relaxed">
                  Book a free audit and get a custom strategy to scale your business with Facebook &amp; Instagram ads.
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-3 flex-wrap justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm shadow-lg"
                >
                  Get Free Audit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  Talk to Us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
